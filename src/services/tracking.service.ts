import { SERVER_URL } from '@/api/config/api.config';
import axiosClassic from '@/api/interceptors/axiosClassic';

import { TypeShipmentDataFilters } from './tracking.types';
import { IShipmentData, shipmentsData } from '@/data/cities';

export interface ISearchParam {
	searchTerm?: string;
	city?: string;
	department?: string;
}

export const TrackingService = {
	async getAll(searchParam: ISearchParam) {
		const { searchTerm, city, department } = searchParam;
		const resultSearch = searchByTrackNumber(shipmentsData, searchTerm);
		const resultByCity = filterByCity(resultSearch, city);
		const resultByDepartment = filterByDepartment(resultByCity, department);

		return resultByDepartment;
	},
	async getAllShipments(queryData = {} as TypeShipmentDataFilters) {
		return axiosClassic<IShipmentData[]>({
			url: 'arrival',
			method: 'GET',
			params: queryData
		});
	}
};

function searchByTrackNumber(
	shipmentsData: IShipmentData[],
	searchTerm?: string
) {
	if (!searchTerm) return shipmentsData;
	return shipmentsData.filter(parcel =>
		parcel['Shipment number'].toLowerCase().includes(searchTerm.toLowerCase())
	);
}
function filterByCity(shipmentsData: IShipmentData[], city?: string) {
	if (!city) return shipmentsData;
	return shipmentsData.filter(parcel =>
		parcel['Destination'].toLowerCase().includes(city)
	);
}
function filterByDepartment(
	shipmentsData: IShipmentData[],
	department?: string
) {
	if (!department) return shipmentsData;
	return shipmentsData.filter(parcel => parcel.department.includes(department));
}
