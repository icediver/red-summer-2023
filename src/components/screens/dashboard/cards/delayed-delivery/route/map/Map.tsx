import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React, { FC } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import RoutineMachine from './RoutineMachine';
import { IRoute } from '@/data/data';

const Map: FC<{ route: IRoute }> = ({ route }) => {
	console.log(route);
	return (
		<div className='relative'>
			<MapContainer
				doubleClickZoom={false}
				id='mapId'
				zoom={12}
				center={route.coordinates.to as LatLngExpression}
				// center={[43.349443523780245, -4.050110679207938]}
				className='w-full px-6 mb-4 rounded-lg h-52'
			>
				<TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
				<RoutineMachine route={route} />
			</MapContainer>
		</div>
	);
};

export default Map;
