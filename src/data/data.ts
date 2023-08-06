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
    },
    {
        city: 'El Prat de LLobregat',
        coordinates: {
            to: [41.30252315500774, 2.094781893552004],
            from: [36.5244153326839, -4.851442144841376]
        }
    },
    {
        city: 'Hospitalet de LLobregat',
        coordinates: {
            to: [41.36557354420637, 2.116029210514562],
            from: [36.5244153326839, -4.851442144841376]
        }
    },
    {
        city: 'Toledo',
        coordinates: {
            to: [40.63350333746957, -4.011868128439305],
            from: [36.5244153326839, -4.851442144841376]
        }
    },
    {
        city: 'Alcorcón',
        coordinates: {
            to: [40.34039336393671, -3.8083418336927153],
            from: [36.5244153326839, -4.851442144841376]
        }
    },
    {
        city: 'Chiclana de la Frontera',
        coordinates: {
            to: [36.415530720236646, -6.147549752119617],
            from: [36.5244153326839, -4.851442144841376]
        }
    },
    {
        city: 'San Sebastián',
        coordinates: {
            to: [43.3208451083622, -1.9670170032886638],
            from: [36.5244153326839, -4.851442144841376]
        }
    },
    {
        city: 'Torrevieja',
        coordinates: {
            to: [36.415530720236646, -6.147549752119617],
            from: [36.5244153326839, -4.851442144841376]
        }
    },
    {
        city: 'Barcelona',
        coordinates: {
            to: [41.423607406558986, 2.164647383926838],
            from: [36.5244153326839, -4.851442144841376]
        }
    },
    {
        city: 'Torrevieja',
        coordinates: {
            to: [36.415530720236646, -6.147549752119617],
            from: [36.5244153326839, -4.851442144841376]
        }
    },
    {
        city: 'Torrevieja',
        coordinates: {
            to: [36.415530720236646, -6.147549752119617],
            from: [36.5244153326839, -4.851442144841376]
        }
    },
    {
        city: 'Valladolid',
        coordinates: {
            to: [41.650383183365356, -4.722919748925248],
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
