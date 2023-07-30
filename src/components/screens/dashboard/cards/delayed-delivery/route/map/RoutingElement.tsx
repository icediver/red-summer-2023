import L, { LatLng, PathOptions } from 'leaflet';
import 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import { FC, useEffect, useState } from 'react';
import { useMap } from 'react-leaflet';

import { IRoute } from '@/data/data';

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

const emojiFinishIcon = L.divIcon({
	className: 'custom-div-icon text-3xl',
	html: '<div className="">🏁</div>',
	iconSize: [30, 30],
	iconAnchor: [0, 30]
});
const emojiTruckIcon = L.divIcon({
	className: 'custom-div-icon text-3xl -scale-x-100',
	html: '<div className="" style="transform: scale(-1,1)">🚛</div>',
	iconSize: [30, 30],
	iconAnchor: [25, 0]
});

const RoutingElement: FC<{ route: IRoute }> = ({ route }) => {
	const map = useMap();

	useEffect(() => {
		if (!map) return;

		if (
			route.coordinates.from !== undefined &&
			route.coordinates.to !== undefined
		) {
			const routingControl = L.Routing.control({
				lineOptions: {
					styles: [{ color: '#5AC97F', opacity: 1, weight: 4 }],
					extendToWaypoints: true,
					missingRouteTolerance: 0
				},
				show: false,
				collapsible: false,
				addWaypoints: true,
				routeWhileDragging: true,
				// draggableWaypoints: true,
				fitSelectedRoutes: false,
				showAlternatives: false,
				plan: new L.Routing.Plan(
					[
						L.latLng(route.coordinates.from[0], route.coordinates.from[1]),
						L.latLng(route.coordinates.to[0], route.coordinates.to[1])
					],
					{
						createMarker: function (
							waypointIndex,
							waypoint,
							numberOfWaypoints
						) {
							if (waypointIndex === 0) {
								// here change the starting  icon
								return L.marker(waypoint.latLng, {
									icon: emojiTruckIcon // here pass the custom marker icon instance
								});
							} else if (waypointIndex === numberOfWaypoints - 1) {
								// here change  ending icon
								return L.marker(waypoint.latLng, {
									icon: emojiFinishIcon
								});
							} else {
								// here change all the others
								return L.marker(waypoint.latLng, {
									icon: greenIcon
								});
							}
						}
					}
				)
			}).addTo(map);

			return () => {
				map.removeControl(routingControl);
			};
		}
	}, [map, route]);

	return null;
};

export default RoutingElement;
