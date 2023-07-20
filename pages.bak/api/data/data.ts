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

export const shipmentsAvailable: ICardShipment[] = [
	{
		route: 'Barcelona-Valencia',
		departure: '15 Jun, 2:00 PM',
		available: 180,
		number: 'V435322',
		truck: 'Iveco 80E18',
		capacity: 200,
		department: '1'
	},
	{
		route: 'Barcelona-Seville',
		departure: '15 Jun, 8:00 PM',
		available: 200,
		number: 'V890324',
		truck: 'Iveco 80E18',
		capacity: 400,
		department: '1'
	},
	{
		route: 'Barcelona-Seville',
		departure: '15 Jun, 8:00 PM',
		available: 225,
		number: 'V423426',
		truck: 'Iveco 90E14',
		capacity: 300,
		department: '1'
	},
	{
		route: 'Barcelona-Cordoba',
		departure: '15 Jun, 10:00 PM',
		available: 60,
		number: 'V998426',
		truck: 'Iveco 80E21',
		capacity: 200,
		department: '3'
	},
	{
		route: 'Barcelona-Valencia',
		departure: '16 Jun, 10:30 PM',
		available: 60,
		number: 'V567722',
		truck: 'Iveco 80E18',
		capacity: 200,
		department: '2'
	}
];

export const availablePackages: IAvailablePackage[] = [
	{
		parcelNumber: 'CN1253722IM',
		volumeWeight: 52,
		admissionDate: '10 Jun, 8:00 AM'
	},
	{
		parcelNumber: 'CN1253433IS',
		volumeWeight: 20,
		admissionDate: '11 Jun, 10:00 AM'
	},
	{
		parcelNumber: 'CN1256433IM',
		volumeWeight: 54,
		admissionDate: '11 Jun,12:30 PM'
	},
	{
		parcelNumber: 'CN1256672IM',
		volumeWeight: 50,
		admissionDate: '11 Jun, 6:30 PM'
	},
	{
		parcelNumber: 'CN1253764IB',
		volumeWeight: 100,
		admissionDate: '11 Jun, 6:30 PM'
	},
	{
		parcelNumber: 'CN2223722IS',
		volumeWeight: 44,
		admissionDate: '11 Jun, 8:44 PM'
	},
	{
		parcelNumber: 'CN5433782IS',
		volumeWeight: 22,
		admissionDate: '12 Jun, 9:54 AM'
	},
	{
		parcelNumber: 'CN1253722IS',
		volumeWeight: 2,
		admissionDate: '12 Jun, 9:54 AM'
	},
	{
		parcelNumber: 'CN9874678IS',
		volumeWeight: 14,
		admissionDate: '12 Jun,10:06 AM'
	},
	{
		parcelNumber: 'CN1363722IM',
		volumeWeight: 56,
		admissionDate: '12 Jun,10:13 AM'
	},
	{
		parcelNumber: 'CN4553722IS',
		volumeWeight: 10,
		admissionDate: '12 Jun,11:16 AM'
	},
	{
		parcelNumber: 'CN9083722IS',
		volumeWeight: 5,
		admissionDate: '12 Jun,11:20 AM'
	}
];
