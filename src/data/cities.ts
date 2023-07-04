import { ICardShipment } from '@/screens/shipments/available-tabs/card-shipment/card-shipment.interface'

export const cities = [
    { value: 'barcelona', label: 'Barcelona' },
    { value: 'valencia', label: 'Valencia' },
    { value: 'cordoba', label: 'Cordoba' },
    { value: 'seville', label: 'Seville' }
]
export const departments = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' }
]
export const shipmentsMenu = [
    'Destination',
    'Shipment number',
    'Truck',
    'Total weight, kg',
    'Status',
    'Departure date',
    'Arrival date: ',
    'Time delay'
]

export const sortBy = [
    { value: 'Destination', label: 'Destination' },
    { value: 'Number', label: 'Number' },
    { value: 'Truck', label: 'Truck' },
    { value: 'Weight', label: 'Weight' },
    { value: 'Status', label: 'Status' },
    { value: 'Departure', label: 'Departure' },
    { value: 'Arrival', label: 'Arrival' },
    { value: 'Delay', label: 'Delay' }
]

// export const shipmentsData = [
//     [
//         "Valencia - Barcelona",
//         "Cordoba - Barcelona",
//         "Seville - Barcelona",
//         "Valencia - Barcelona",
//         "Seville - Barcelona",
//         "Seville - Barcelona",
//         "Seville - Barcelona",
//         "Valencia - Barcelona",
//         "Valencia - Barcelona",
//         "Barcelona",
//         "Barcelona",
//         "Cordoba - Barcelona",
//     ]
//     ,
//     [
//
//         "B435324",
//         "B438987",
//         "8435322",
//         "B430690",
//         "B435030",
//         "B405024",
//         "B435000",
//         "8435329",
//         "B435224",
//         "B435375",
//         "B436524",
//         "8555326",
//     ]
//     ,
//     [
//         "Iveco 80E18",
//         "Iveco 90E14",
//         "Iveco 80E15",
//         "Iveco 80E18",
//         "Iveco 80E15",
//         "Iveco 80E21",
//         "Iveco 80E15",
//         "Iveco 90E14",
//         "Iveco 80E18",
//         "Iveco 80E15",
//         "iveco 90E14",
//         "Iveco 80E18",
//     ]
//     ,
//     [
//         "800",
//         "200",
//         "400",
//         "250",
//         "600",
//         "250",
//         "300",
//         "300",
//         "600",
//         "200",
//         "240",
//         "700",
//     ]
//     ,
//     [
//         "Delayed",
//         "Delayed",
//         "Delayed",
//         "Delayed",
//         "Delayed",
//         "On way",
//         "On way",
//         "On way",
//         "Arrived",
//         "Arrived",
//         "Arrived",
//         "Arrived",
//     ]
//     ,
//     [
//         "10 Jun, 8:00 AM",
//         "10 Jun, 8:00 AM",
//         "10 Jun, 8:00 AM",
//         "10 Jun, 8:00 AM",
//         "15 Jun, 07:05 AM",
//         "15 Jun, 10:05 AM",
//         "15 Jun, 11:40 AM",
//         "15 Jun, 10:05 AM",
//         "10 Jun, 8:00 AM",
//         "10 Jun, 8:00 AM",
//     ]
//     ,
//
//     [
//         "15 Jun, 10:05 AM",
//         "15 Jun, 11:30 AM",
//         "10 Jun, 8:00 AM",
//         "10 Jun, 8:00 AM",
//         "10 Jun, 8:00 AM",
//         "15 Jun, 11:20 AM",
//         "15 Jun, 11:20 AM",
//         "15 Jun, 10:20 AM",
//         "10 Jun, 8:00 AM",
//         "10 Jun, 8:00 AM",
//         "10 Jun, 8:00 AM",
//         "15 Jun, 10:05 AM",
//         "15 Jun, 10:05 AM",
//         "15 Jun, 10:05 AM",
//     ]
//
//     ,
//     [
//         "5:05 h",
//         "2:05 h",
//         "0:30 h",
//         "0:30 h",
//         "0:30 h",
//     ]
//
//
// ]
export interface IShipmentData {
    Destination: string
    'Shipment number': string
    Truck: string
    Status: string
    'Total weight, kg': string
    'Departure date': string
    'Arrival date': string
    'Time delay': string
}

export const shipmentsData: IShipmentData[] = [
    {
        Destination: 'Valencia - Barcelona',
        'Shipment number': 'B435324',
        Truck: 'Iveco 79E18',
        'Total weight, kg': '800',
        Status: 'Delayed',
        'Departure date': '10 Jun, 8:00 AM',
        'Arrival date': '15 Jun, 10:05 AM',
        'Time delay': '5:05 h'
    },
    {
        Destination: 'Cordoba - Barcelona',
        'Shipment number': 'B438987',
        Truck: 'Iveco 89E14',
        'Total weight, kg': '200',
        Status: 'Delayed',
        'Departure date': '10 Jun, 8:00 AM',
        'Arrival date': '15 Jun, 11: 30 AM',
        'Time delay': '2:05 h'
    },
    {
        Destination: 'Seville - Barcelona',
        'Shipment number': '8435322',
        Truck: 'Iveco 79E15',
        'Total weight, kg': '400',
        Status: 'Delayed',
        'Departure date': '10 Jun, 8:00 AM',
        'Arrival date': '10 Jun, 8:00 AM',
        'Time delay': '0: 30 h'
    },
    {
        Destination: 'Valencia - Barcelona',
        'Shipment number': 'B430690',
        Truck: 'Iveco 79E18',
        'Total weight, kg': '250',
        Status: 'Delayed',
        'Departure date': '10 Jun, 8:00 AM',
        'Arrival date': '10 Jun, 8:00 AM',
        'Time delay': '0: 30 h'
    },
    {
        Destination: 'Seville - Barcelona',
        'Shipment number': 'B435030',
        Truck: 'Iveco 79E15',
        'Total weight, kg': '600',
        Status: 'Delayed',
        'Departure date': '15 Jun, 07:05 AM',
        'Arrival date': '10 Jun, 8:00 AM',
        'Time delay': '0: 30 h'
    },
    {
        Destination: 'Seville - Barcelona',
        'Shipment number': 'B405024',
        Truck: 'Iveco 79E21',
        'Total weight, kg': '250',
        Status: 'On way',
        'Departure date': '15 Jun, 10:05 AM',
        'Arrival date': '15 Jun, 11: 20 AM',
        'Time delay': '-'
    },

    {
        Destination: 'Seville - Barcelona',
        'Shipment number': 'B435000',
        Truck: 'Iveco 79E15',
        'Total weight, kg': '300',
        Status: 'On way',
        'Departure date': '15 Jun, 11:40 AM',
        'Arrival date': '15 Jun, 11: 20 AM',
        'Time delay': '-'
    },
    {
        Destination: 'Valencia - Barcelona',
        'Shipment number': '8435329',
        Truck: 'Iveco 89E14',
        'Total weight, kg': '300',
        Status: 'On way',
        'Departure date': '15 Jun, 10:05 AM',
        'Arrival date': '15 Jun, 10: 20 AM',
        'Time delay': '-'
    },
    {
        Destination: 'Valencia - Barcelona',
        'Shipment number': 'B435224',
        Truck: 'Iveco 79E18',
        'Total weight, kg': '600',
        Status: 'Arrived',
        'Departure date': '10 Jun, 8:00 AM',
        'Arrival date': '10 Jun, 8:00 AM',
        'Time delay': '-'
    },
    {
        Destination: 'Barcelona',
        'Shipment number': 'B435375',
        Truck: 'Iveco 79E15',
        'Total weight, kg': '200',
        Status: 'Arrived',
        'Departure date': '10 Jun, 8:00 AM',
        'Arrival date': '10 Jun, 8:00 AM',
        'Time delay': '-'
    },
    {
        Destination: 'Barcelona',
        'Shipment number': 'B436524',
        Truck: 'iveco 89E14',
        'Total weight, kg': '240',
        Status: 'Arrived',
        'Departure date': '10 Jun, 8:00 AM',
        'Arrival date': '10 Jun, 8:00 AM',
        'Time delay': '-'
    },
    {
        Destination: 'Cordoba - Barcelona',
        'Shipment number': '8555326',
        Truck: 'Iveco 79E18',
        'Total weight, kg': '700',
        Status: 'Arrived',
        'Departure date': '10 Jun, 8:00 AM',
        'Arrival date': '15 Jun, 10:05 AM',
        'Time delay': '-'
    }
]

export const shipmentsAvailable: ICardShipment[] = [
    {
        route: 'Barcelona-Valencia',
        departure: '15 Jun, 2:00 PM',
        available: { title: 'Available, kg', value: 20 },
        number: { title: 'Shipment number', value: 'V435322' },
        truck: { title: 'Truck', value: 'Iveco 80E18' },
        capacity: 200
    },
    {
        route: 'Barcelona-Seville',
        departure: '15 Jun, 8:00 PM',
        available: { title: 'Available, kg', value: 200 },
        number: { title: 'Shipment number', value: 'V890324' },
        truck: { title: 'Truck', value: 'Iveco 80E18' },
        capacity: 400

    },
    {
        route: 'Barcelona-Seville',
        departure: '15 Jun, 8:00 PM',
        available: { title: 'Available, kg', value: 225 },
        number: { title: 'Shipment number', value: 'V423426' },
        truck: { title: 'Truck', value: 'Iveco 90E14' },
        capacity: 300

    },
    {
        route: 'Barcelona-Cordoba',
        departure: '15 Jun, 10:00 PM',
        available: { title: 'Available, kg', value: 160 },
        number: { title: 'Shipment number', value: 'V998426' },
        truck: { title: 'Truck', value: 'Iveco 80E21' },
        capacity: 200

    },
    {
        route: 'Barcelona-Valencia',
        departure: '15 Jun, 10:30 PM',
        available: { title: 'Available, kg', value: 60 },
        number: { title: 'Shipment number', value: 'V567722' },
        truck: { title: 'Truck', value: 'Iveco 80E18' },
        capacity: 200

    },
]
