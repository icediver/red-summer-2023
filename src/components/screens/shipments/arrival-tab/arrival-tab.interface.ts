import { Dispatch, SetStateAction } from 'react';
import { OnChangeValue } from 'react-select';

import { IOption } from '@/ui/select-filters/select.types';

import { ShipmentsType } from '../Shipments';

import { TypeDataFilters } from '@/services/tracking.types';

export interface IArrivalData {
	Destination: string;
	'Shipment number': string;
	Truck: string;
	Status: string;
	'Total weight, kg': string;
	'Departure date': string;
	'Arrival date': string;
	'Time delay': string;
	department: string;
}

export interface IShipmentsTable {
	searchParams: TypeDataFilters;
	setShipments: Dispatch<SetStateAction<ShipmentsType[]>>;
	setArrivalLength: Dispatch<SetStateAction<number>>;
}
export interface IArrivalTab extends IShipmentsTable {
	handleSort: (newValue: OnChangeValue<IOption, boolean> | string) => void;
}
