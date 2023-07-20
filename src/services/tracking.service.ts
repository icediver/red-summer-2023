import axiosClassic from '@/api/interceptors/axiosClassic';

import {
	TypeDataFilters,
	TypeShipmentsAvailableFilter
} from './tracking.types';
import { IArrivalData } from '@/screens/shipments/arrival-tab/arrival-tab.interface';
import { ICardShipment } from '@/screens/shipments/available-tab/card-shipment/card-shipment.interface';
import { IAvailablePackage } from '@/screens/shipments/truck-loading/available-package.interface';

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

export const TrackingService = {
	async getArrival(queryData = {} as TypeDataFilters) {
		console.log('getArrival');
		return axiosClassic<IArrivalData[]>({
			url: 'arrival',
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
		return axiosClassic.get<ICardShipment[]>(`/available/${number}`);
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
		return axiosClassic<IAvailablePackage[]>('/packages');
	}
};
