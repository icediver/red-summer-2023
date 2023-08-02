import { createControlComponent } from '@react-leaflet/core';
import L from 'leaflet';
import 'leaflet-routing-machine';

import { IRoute } from '@/data/data';

const createRoutineMachineLayer = ({ route }: { route: IRoute }) => {
	const greenIcon = new L.Icon({
		iconUrl:
			'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
		shadowUrl:
			'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',
		iconSize: [25, 41],
		iconAnchor: [12, 41],
		popupAnchor: [1, -34],
		shadowSize: [41, 41]
	});

	const purpleIcon = new L.Icon({
		iconUrl:
			// 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
			'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-2x-violet.png',
		shadowUrl:
			'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',
		iconSize: [25, 41],
		iconAnchor: [12, 41],
		popupAnchor: [1, -34],
		shadowSize: [41, 41]
	});
	const instance = L.Routing.control({
		waypoints: [
			// L.latLng(43.3491926787025, -4.050284623394953),
			// L.latLng(43.31902760649984, -4.055405069331196)
			L.latLng(route.coordinates.to[0], route.coordinates.to[1]),
			L.latLng(route.coordinates.from[0], route.coordinates.from[1])
		],
		//@ts-ignore
		lineOptions: {
			styles: [{ color: '#6FA1EC', weight: 4 }]
		},
		show: false,
		collapible: false,
		addWaypoints: true,
		routeWhileDragging: true,
		draggableWaypoints: true,
		fitSelectedRoutes: true,
		showAlternatives: false,

		createMarker: function (i, wp, nWps: number) {
			if (i === 0) {
				// here change the starting and ending icons
				return L.marker(wp.latLng, {
					icon: greenIcon // here pass the custom marker icon instance
				});
			} else if (i === nWps - 1) {
				// here change the starting and ending icons
				return L.marker(wp.latLng, {
					icon: purpleIcon // here pass the custom marker icon instance
				});
			} else {
				// here change all the others
				return L.marker(wp.latLng, {
					icon: greenIcon
				});
			}
		}
	});

	return instance;
};
const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
