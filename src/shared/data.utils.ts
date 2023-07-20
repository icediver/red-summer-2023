import { IOption } from '@/ui/select-filters/select.types';

import { ShipmentsType } from '@/screens/shipments/Shipments';

export function getDates<T>(data: T[]) {
	return [
		...new Set(
			data.map((el: any) => {
				if (el['Arrival date'] !== undefined) {
					return el['Arrival date'].split(',')[0];
				}
				if (el.departure !== undefined) return el.departure.split(',')[0];
			})
		)
	];
}

export function getSortKeys(data: ShipmentsType[]) {
	if (!data.length) return [];

	return Object.keys(data[0]).filter(key => key !== '_id');
}

export function getSelectOptions(data: string[]): IOption[] {
	return data.map(el => ({
		value: el,
		label: el
	}));
}

export function sortShipmentData(data: IShipmentData[], sortBy: IOption) {
	if (!sortBy) {
		return data;
	}
	if (!data) return [];
	return data.sort((a, b) =>
		a[sortBy.value as keyof IShipmentData].localeCompare(
			b[sortBy.value as keyof IShipmentData]
		)
	);
}

export function sortArrival(data: IShipmentData[]) {
	let newData: IShipmentData[] = [...data];

	function sortData(this: any, sortBy: IOption) {
		if (!sortBy) newData = [...data];
		else
			newData = [
				...newData.sort((a, b) =>
					a[sortBy.value as keyof IShipmentData].localeCompare(
						b[sortBy.value as keyof IShipmentData]
					)
				)
			];
		return this;
	}
	function refresh(this: any) {
		newData = [...data];
		return this;
	}
	function print(this: any) {
		console.log(newData);
		return this;
	}

	return { sortData, refresh, newData, print };
}
