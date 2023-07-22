import { Parcel, Prisma, PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';
import { NextResponse } from 'next/server';

import { ISearchTerm } from '../trucks/route';

const prisma = new PrismaClient();

export const ShipmentsService = {
	async getAll(searchTerm: ISearchTerm) {
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
									departureDate: {
										gte: getDateRange(searchTerm.date).start,
										lte: getDateRange(searchTerm.date).end
									}
							  }
							: {},
						searchTerm.department ? { department: searchTerm.department } : {}
					]
			  }
			: {};

		console.log(prismaSearchTermFilter);

		try {
			const shipments = await prisma.truck.findMany({
				where: prismaSearchTermFilter,
				include: { parcels: true }
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
				include: { parcels: true }
			});
			return NextResponse.json(arrival);
		} catch (e) {
			console.log(e);
		}
	},
	async addParcelsToTruck(number: string, parcels: Parcel[]) {
		try {
			const loadingParcelsWeight = await prisma.parcel
				.findMany({
					where: { id: { in: parcels.map(el => el.id) } },
					select: { volumeWeight: true }
				})
				.then(res => {
					const parcelsWeight = res.map(parcels => parcels.volumeWeight);
					const weight = parcelsWeight.reduce(
						(prev, current, index) => prev + current,
						0
					);
					return weight;
				});
			const availableSpace = await prisma.truck
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

			if (availableSpace < loadingParcelsWeight)
				return NextResponse.json('not enouth space');

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
	async getAllParcels() {
		try {
			const parcels = await prisma.parcel.findMany({});
			console.log(parcels);
			return NextResponse.json(parcels);
		} catch (e) {
			throw new Error('Not found');
		}
	},
	async getParcelById(id: number) {
		try {
			const arrival = await prisma.parcel.findUnique({
				where: { id }
			});
			return NextResponse.json(arrival);
		} catch (e) {
			console.log(e);
		}
	}
};

const getDateRange = (date: string) => {
	const interval = {
		start: new Date(date.split('T')[0] + 'T00:00:00.000Z'),
		end: new Date(date.split('T')[0] + 'T23:59:59.000Z')
	};
	console.log('--interval--', interval);
	return interval;
};
