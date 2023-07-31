export interface ITableHeader {
	[key: string]: string;
}

export const tableHeader: ITableHeader[] = [
	{ Destination: 'destination' },
	{ 'Shipment number': 'number' },
	{ Truck: 'model' },
	{ 'Total weight, kg': 'capacity' },
	{ Status: 'status' },
	{ 'Departure date': 'departureDate' },
	{ 'Arrival date': 'arrivalDate' },
	{ 'Time delay': 'delay' }
];
