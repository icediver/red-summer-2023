import { IArrivalData } from '@/screens/shipments/arrival-tab/arrival-data.interface';
import { ICardShipment } from '@/screens/shipments/available-tab/card-shipment/card-shipment.interface';
import { IAvailablePackage } from '@/screens/shipments/truck-loading/available-package.interface';

export const shipmentsData: IArrivalData[] = [
	{
		Destination: 'Valencia - Barcelona',
		'Shipment number': 'B435324',
		Truck: 'Iveco 79E18',
		'Total weight, kg': '800',
		Status: 'Delayed',
		'Departure date': '10 Jun, 8:00 AM',
		'Arrival date': '15 Jun, 10:05 AM',
		'Time delay': '5:05 h',
		department: '1'
	},
	{
		Destination: 'Cordoba - Barcelona',
		'Shipment number': 'B438987',
		Truck: 'Iveco 89E14',
		'Total weight, kg': '200',
		Status: 'Delayed',
		'Departure date': '10 Jun, 8:00 AM',
		'Arrival date': '15 Jun, 11: 30 AM',
		'Time delay': '2:05 h',
		department: '1'
	},
	{
		Destination: 'Seville - Barcelona',
		'Shipment number': '8435322',
		Truck: 'Iveco 79E15',
		'Total weight, kg': '400',
		Status: 'Delayed',
		'Departure date': '10 Jun, 8:00 AM',
		'Arrival date': '10 Jun, 8:00 AM',
		'Time delay': '0: 30 h',
		department: '1'
	},
	{
		Destination: 'Valencia - Barcelona',
		'Shipment number': 'B430690',
		Truck: 'Iveco 79E18',
		'Total weight, kg': '250',
		Status: 'Delayed',
		'Departure date': '10 Jun, 8:00 AM',
		'Arrival date': '10 Jun, 8:00 AM',
		'Time delay': '0: 30 h',
		department: '3'
	},
	{
		Destination: 'Seville - Barcelona',
		'Shipment number': 'B435030',
		Truck: 'Iveco 79E15',
		'Total weight, kg': '600',
		Status: 'Delayed',
		'Departure date': '15 Jun, 07:05 AM',
		'Arrival date': '10 Jun, 8:00 AM',
		'Time delay': '0: 30 h',
		department: '1'
	},
	{
		Destination: 'Seville - Barcelona',
		'Shipment number': 'B405024',
		Truck: 'Iveco 79E21',
		'Total weight, kg': '250',
		Status: 'On way',
		'Departure date': '15 Jun, 10:05 AM',
		'Arrival date': '15 Jun, 11: 20 AM',
		'Time delay': '-',
		department: '2'
	},

	{
		Destination: 'Seville - Barcelona',
		'Shipment number': 'B435000',
		Truck: 'Iveco 79E15',
		'Total weight, kg': '300',
		Status: 'On way',
		'Departure date': '15 Jun, 11:40 AM',
		'Arrival date': '15 Jun, 11: 20 AM',
		'Time delay': '-',
		department: '2'
	},
	{
		Destination: 'Valencia - Barcelona',
		'Shipment number': '8435329',
		Truck: 'Iveco 89E14',
		'Total weight, kg': '300',
		Status: 'On way',
		'Departure date': '15 Jun, 10:05 AM',
		'Arrival date': '15 Jun, 10: 20 AM',
		'Time delay': '-',
		department: '5'
	},
	{
		Destination: 'Valencia - Barcelona',
		'Shipment number': 'B435224',
		Truck: 'Iveco 79E18',
		'Total weight, kg': '600',
		Status: 'Arrived',
		'Departure date': '10 Jun, 8:00 AM',
		'Arrival date': '10 Jun, 8:00 AM',
		'Time delay': '-',
		department: '6'
	},
	{
		Destination: 'Barcelona-Andorra la Vella',
		'Shipment number': 'B435375',
		Truck: 'Iveco 79E15',
		'Total weight, kg': '200',
		Status: 'Arrived',
		'Departure date': '10 Jun, 8:00 AM',
		'Arrival date': '10 Jun, 8:00 AM',
		'Time delay': '-',
		department: '1'
	},
	{
		Destination: 'Barcelona-Andorra la Vella',
		'Shipment number': 'B436524',
		Truck: 'iveco 89E14',
		'Total weight, kg': '240',
		Status: 'Arrived',
		'Departure date': '10 Jun, 8:00 AM',
		'Arrival date': '10 Jun, 8:00 AM',
		'Time delay': '-',
		department: '2'
	},
	{
		Destination: 'Cordoba - Barcelona',
		'Shipment number': '8555326',
		Truck: 'Iveco 79E18',
		'Total weight, kg': '700',
		Status: 'Arrived',
		'Departure date': '10 Jun, 8:00 AM',
		'Arrival date': '15 Jun, 10:05 AM',
		'Time delay': '-',
		department: '4'
	}
];

export interface ICoor {
	to: number[];
	from: number[];
}

export interface IRoute {
	city: string;
	coordinates: ICoor;
}

export const shipmentsRoutes: IRoute[] = [
	{
		city: 'torrelavega',
		coordinates: {
			to: [43.3491926787025, -4.050284623394953],
			from: [43.31902760649984, -4.055405069331196]
		}
	},
	{
		city: 'huelva',
		coordinates: {
			to: [37.26219254022244, -6.942308219398006],
			from: [37.27152473343173, -6.987895396054435]
		}
	},
	{
		city: 'marbella',
		coordinates: {
			to: [36.511192301726524, -4.887659742983759],
			from: [36.5244153326839, -4.851442144841376]
		}
	}
];
