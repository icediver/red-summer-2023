import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React, { FC } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import RoutingElement from './RoutingElement';
import { IRoute } from '@/data/data';

const Map: FC<{ route: IRoute }> = ({ route }) => {
	return (
		<div className='relative'>
			<MapContainer
				doubleClickZoom={false}
				id='mapId'
				zoom={16}
				center={route.coordinates.to as LatLngExpression}
				className='w-full px-6 mb-4 rounded-lg h-52'
			>
				<TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
				<RoutingElement route={route} />
			</MapContainer>
		</div>
	);
};

export default Map;
