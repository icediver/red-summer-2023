import { IParcel } from '../../arrival-tab/arrival-tab.interface';

export interface ICardShipment {
	destination: string;
	departureDate: string;
	parcels: IParcel[];
	number: string;
	model: string;
	capacity: number;
	department: number;
}

export interface IItemsCardShipment {
	title: string;
	value: string | number;
}
