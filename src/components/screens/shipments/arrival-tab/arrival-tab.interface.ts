import { Dispatch, SetStateAction } from 'react';
import { OnChangeValue } from 'react-select';

import { IOption } from '@/ui/select-filters/select.types';

import { ShipmentsType } from '../Shipments';

import { TypeDataFilters } from '@/services/tracking.types';

export interface IArrivalData {
	destination: string;
	number: string;
	model: string;
	status: string;
	capacity: string;
	departureDate: string;
	arrivalDate: string;
	delay: string;
	department: string;
	category: string;
}

export interface IShipmentsTable {
	searchParams: TypeDataFilters;
	setShipments: Dispatch<SetStateAction<IShipmentsData>>;
	setArrivalLength: Dispatch<SetStateAction<number>>;
}
export interface IArrivalTab extends IShipmentsTable {
	handleSort: (newValue: OnChangeValue<IOption, boolean> | string) => void;
}

export interface IShipmentsData {
	shipments: IArrivalData[];
	categoryCount: [
		{
			Arrival: number;
		},
		{
			Available: number;
		},
		{
			Departure: number;
		}
	];
}
