import { Parcel, Prisma, PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';
import { NextResponse } from 'next/server';

import { getDateRange } from '@/shared/data.utils';

import { ISearchTerm } from '../trucks/route';

const prisma = new PrismaClient();

export const ShipmentsService = {
	//-------------------------READ-------------------------------//
	async getAll(searchTerm: ISearchTerm) {
		// console.log('searchTerm', searchTerm);
		const { sortBy } = searchTerm;
		const prismaSort: Prisma.TruckOrderByWithRelationInput = sortBy
			? {
					[sortBy as keyof Prisma.TruckOrderByWithRelationInput]: 'asc'
			  }
			: {};

		// console.log('sort', prismaSort);
		const prismaSearchTermFilter: Prisma.TruckWhereInput = searchTerm
			? {
					AND: [
						{
							number: {
								contains: searchTerm.number
							}
						},
						searchTerm.categoryId ? { categoryId: searchTerm.categoryId } : {},
						{ destination: { contains: searchTerm.city } },
						searchTerm.date
							? {
									arrivalDate: {
										gte: getDateRange(searchTerm.date).start,
										lte: getDateRange(searchTerm.date).end
									}
							  }
							: {},
						searchTerm.department ? { department: searchTerm.department } : {}
					]
			  }
			: {};

		try {
			const shipments = await prisma.truck.findMany({
				where: prismaSearchTermFilter,
				orderBy: prismaSort,

				include: { parcels: true, driver: true }
			});
			const categoryCount = await prisma.category
				.findMany({
					select: {
						name: true,
						_count: { select: { trucks: true } }
					}
				})
				.then(res => {
					return res.map(({ name, _count }) => {
						return { [name]: _count.trucks };
					});
				});

			return NextResponse.json({ shipments, categoryCount });
		} catch (e) {
			console.log(e);
		}
	},

	async getByTrackNumber(trackNumber: string) {
		try {
			const arrival = await prisma.truck.findUnique({
				where: { number: trackNumber },
				include: { parcels: true, driver: true }
			});
			return NextResponse.json(arrival);
		} catch (e) {
			console.log(e);
		}
	},
	async addParcelsToTruck(number: string, parcels: Parcel[]) {
		console.log('number', number, 'parcels', parcels);
		try {
			// const loadingParcelsWeight = await prisma.parcel
			// 	.findMany({
			// 		where: { id: { in: parcels.map(el => el.id) } },
			// 		select: { volumeWeight: true }
			// 	})
			// 	.then(res => {
			// 		const parcelsWeight = res.map(parcels => parcels.volumeWeight);
			// 		const weight = parcelsWeight.reduce(
			// 			(prev, current, index) => prev + current,
			// 			0
			// 		);
			// 		return weight;
			// 	});
			// const availableSpace = await prisma.truck
			// 	.findUnique({
			// 		where: { number },
			// 		select: {
			// 			capacity: true,
			// 			parcels: { select: { volumeWeight: true } }
			// 		}
			// 	})
			// 	.then(res => {
			// 		if (!res) notFound();
			// 		const parcelsWeights = res?.parcels.map(
			// 			parcels => parcels.volumeWeight
			// 		);
			//
			// 		if (!parcelsWeights) return res.capacity;
			// 		const totalWeight = parcelsWeights.reduce(
			// 			(prev, current, index) => prev + current,
			// 			0
			// 		);
			// 		return res.capacity - totalWeight;
			// 	});
			//
			// console.log(
			// 	'availableSpace',
			// 	availableSpace,
			// 	'loadingParcelsWeight',
			// 	loadingParcelsWeight
			// );
			//
			// if (availableSpace < loadingParcelsWeight)
			// 	return NextResponse.json('not enouth space');

			const emptyTruck = await prisma.truck.update({
				where: { number },
				data: {
					parcels: {
						set: []
					}
				}
			});

			// console.log('emptyTruck', emptyTruck);

			const loadingTruck = await prisma.truck.update({
				where: {
					number
				},
				data: { parcels: { connect: parcels } },
				include: { parcels: true }
			});
			const newAvailableSpace = await prisma.truck
				.findUnique({
					where: { number },
					select: {
						capacity: true,
						parcels: { select: { volumeWeight: true } }
					}
				})
				.then(res => {
					if (!res) notFound();
					const parcelsWeights = res?.parcels.map(
						parcels => parcels.volumeWeight
					);

					if (!parcelsWeights) return res.capacity;
					const totalWeight = parcelsWeights.reduce(
						(prev, current, index) => prev + current,
						0
					);
					return res.capacity - totalWeight;
				});

			return NextResponse.json({
				loadingTruck,
				availableSpace: newAvailableSpace
			});
		} catch (e) {
			console.log(e);
		}
	},
	async deleteParcelsFromTruck(truckNumber: string, parcelId: number) {
		// console.log(truckNumber, parcelId);
		try {
			const truck = await prisma.truck.update({
				where: { number: truckNumber },
				data: {
					parcels: { disconnect: [{ id: parcelId }] }
				},
				include: { parcels: true }
			});
			const newAvailableSpace = await prisma.truck
				.findUnique({
					where: { number: truckNumber },
					select: {
						capacity: true,
						parcels: { select: { volumeWeight: true } }
					}
				})
				.then(res => {
					if (!res) notFound();
					const parcelsWeights = res?.parcels.map(
						parcels => parcels.volumeWeight
					);

					if (!parcelsWeights) return res.capacity;
					const totalWeight = parcelsWeights.reduce(
						(prev, current, index) => prev + current,
						0
					);
					return res.capacity - totalWeight;
				});

			return NextResponse.json({ truck, availableSpace: newAvailableSpace });
		} catch (e) {
			console.log(e);
		}
	},
	//--------------------------PARCELS------------------------------//
	async getAllParcels() {
		try {
			const parcels = await prisma.parcel.findMany({});
			return NextResponse.json(parcels);
		} catch (e) {
			throw new Error('Not found');
		}
	},
	async getAvailableParcels() {
		try {
			const parcels = await prisma.parcel.findMany({
				where: {
					truckId: { equals: null }
				}
			});
			return NextResponse.json(parcels);
		} catch (e) {
			throw new Error('Not found');
		}
	},
	async getParcelById(id: number) {
		try {
			const parcel = await prisma.parcel.findUnique({
				where: { id }
			});
			return NextResponse.json(parcel);
		} catch (e) {
			console.log(e);
		}
	},
	//--------------------------DRIVERS------------------------------//
	async getAllDrivers() {
		try {
			const drivers = await prisma.driver.findMany({
				include: { truck: true }
			});
			return NextResponse.json(drivers);
		} catch (e) {
			console.log(e);
		}
	}
};
