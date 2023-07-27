import { IArrivalData } from '@/screens/shipments/arrival-tab/arrival-tab.interface';
import { ICardShipment } from '@/screens/shipments/available-tab/card-shipment/card-shipment.interface';
import { IAvailablePackage } from '@/screens/shipments/truck-loading/available-package.interface';

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
export interface IRecent {
	title: string;
	description: string;
	value: string;
	icon: string;
}
export const recents: IRecent[] = [
	{
		title: 'Parcel redirection',
		description: 'Destination Valencia-Barcelona',
		value: '1 min ago',
		icon: '📦'
	},
	{
		title: 'Packing problem',
		description: 'Destination Barcelona-Sevilla',
		value: '10 min ago',
		icon: '📦'
	},
	{
		title: 'Machine breakdown',
		description: 'Destination Madrid-Barcelona',
		value: '20 min ago',
		icon: '🚛'
	}
];
