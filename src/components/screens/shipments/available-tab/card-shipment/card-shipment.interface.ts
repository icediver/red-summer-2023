export interface ICardShipment {
	route: string;
	departure: string;
	available: number;
	number: string;
	truck: string;
	capacity: number;
	department: string;
}

export interface IItemsCardShipment {
	title: string;
	value: string | number;
}
