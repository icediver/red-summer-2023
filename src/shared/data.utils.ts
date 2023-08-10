import { IOption } from '@/ui/select-filters/select.types';

import { shipmentsRoutes } from '@/data/data';
import { ShipmentsType } from '@/screens/shipments/Shipments';
import {
	IArrivalData,
	IShipmentsData
} from '@/screens/shipments/arrival-tab/arrival-tab.interface';
import { ICardShipment } from '@/screens/shipments/available-tab/card-shipment/card-shipment.interface';
import { IRouteCoordinates } from '@/services/geocoder.interface';
import { GeocoderService } from '@/services/geocoder.service';

export function getDates<T>(data: T[]) {
	const arrivalDateLabel = [
		...new Set(
			data.map((el: any) => {
				if (el['arrivalDate'] !== undefined) {
					return el['arrivalDate'].split('T')[0];
				}
			})
		)
	];
	return arrivalDateLabel;
}

export function getCities(data: IArrivalData[]) {
	if (!data.length) return [];
	const cities = [data.map((el: IArrivalData) => el.destination.split(' - '))];

	return cities.flat(2).map(el => ({
		value: el,
		label: el
	}));
}

export function getSortKeys(data: ShipmentsType[]) {
	if (!data.length) return [];
	return Object.keys(data[0]).filter(
		key => !['id', 'parcels', 'categoryId'].includes(key)
	);
}

export function getSelectOptions(data: string[]): IOption[] {
	return data.map(el => ({
		value: el,
		label: el
	}));
}

export interface ISpace {
	key: string;
	value: string[];
}

export function getAvailableSpaces(truck: ICardShipment): ISpace[] {
	const totalPlaces = truck.capacity / 12;
	const available = truck.parcels
		? truck.parcels?.reduce((acc, parcel) => acc + parcel.volumeWeight, 0)
		: truck.capacity;

	const availablePlaces = Math.ceil(available / totalPlaces);

	const spaces = [
		...new Array(12 - availablePlaces).fill('empty'),
		...new Array(availablePlaces).fill('fully')
	].sort(() => (Math.random() > 0.5 ? 1 : -1));

	const dataSpace: ISpace[] = [
		{
			key: 'Upper tier',
			value: [...spaces.slice(0, 4)]
		},
		{ key: 'Middle tier', value: [...spaces.slice(4, 8)] },
		{ key: 'Lower tier', value: [...spaces.slice(8, 12)] }
	];
	return dataSpace;
}

export const getDateRange = (date: string) => {
	const interval = {
		start: new Date(date.split('T')[0] + 'T00:00:00.000Z'),
		end: new Date(date.split('T')[0] + 'T23:59:59.000Z')
	};
	// console.log('--interval--', interval);
	return interval;
};

export async function getCoordinates(route: string) {
	const cities = route.split(' - ');
	const departure = cities[0].toLowerCase();
	const destination = cities[1].toLowerCase();
	const departureCoordinates = await GeocoderService.getCoordinates(departure);
	const destinationCoordinates = await GeocoderService.getCoordinates(
		destination
	);

	return {
		departure: {
			name: departure,
			coordinates: departureCoordinates || { lat: 0, lng: 0 }
		},
		destination: {
			name: destination,
			coordinates: destinationCoordinates || { lat: 0, lng: 0 }
		}
	};
}
