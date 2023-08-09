import axiosClassic from '@/api/interceptors/axiosClassic';

import {
	TypeDataFilters,
	TypeShipmentsAvailableFilter
} from './tracking.types';
import {
	IArrivalData,
	IParcel,
	IShipmentsData
} from '@/screens/shipments/arrival-tab/arrival-tab.interface';
import { ICardShipment } from '@/screens/shipments/available-tab/card-shipment/card-shipment.interface';

export interface ISearchParam {
	searchTerm?: string;
	city?: string;
	department?: string;
}

export enum Source {
	Arrival = 'getArrival',
	Available = 'getAvailable',
	Departure = 'getDeparture'
}

export const TruckService = {
	async getAll(queryData = {} as TypeDataFilters) {
		console.log('getArrival');
		return axiosClassic<IShipmentsData>({
			url: 'trucks',
			method: 'GET',
			params: queryData
		});
	},
	async getAvailable(queryData = {} as TypeShipmentsAvailableFilter) {
		console.log('getAvailable');
		return axiosClassic<ICardShipment[]>({
			url: 'available',
			method: 'GET',
			params: queryData
		});
	},
	async getAvailableByNumber(number: string) {
		console.log('getAvailableByNumber');
		return axiosClassic.get<ICardShipment>(`/trucks/${number}`);
	},
	async getDeparture(queryData = {} as TypeDataFilters) {
		console.log('getDeparture');
		return axiosClassic<IArrivalData[]>({
			url: 'departure',
			method: 'GET',
			params: queryData
		});
	},
	async getAvailablePackages() {
		return axiosClassic<IParcel[]>('/packages');
	},
	async deleteParcel(parcelId: number, number: string) {
		console.log('deleteParcel');
		return axiosClassic.delete<ICardShipment>(`/trucks/${number}/${parcelId}`);
	},
	async loadParcels(parcelsId: number[], number: string) {
		console.log('loadParcel---truckService');
		return axiosClassic.patch<ICardShipment>(`/trucks/${number}`, parcelsId);
	}
};
