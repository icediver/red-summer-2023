import { useQuery } from '@tanstack/react-query';
import { Dispatch, FC, SetStateAction, useEffect } from 'react';

import { ShipmentsType } from '../Shipments';
import { IShipmentsData } from '../arrival-tab/arrival-tab.interface';

import styles from './AvailableTab.module.scss';
import CardShipment from './card-shipment/CardShipment';
import { TrackingService } from '@/services/tracking.service';
import { TypeDataFilters } from '@/services/tracking.types';

const AvailableTab: FC<{
	setShipments: Dispatch<SetStateAction<IShipmentsData>>;
	searchParams: TypeDataFilters;
	setAvailableLength: Dispatch<SetStateAction<number>>;
}> = ({ setShipments, searchParams, setAvailableLength }) => {
	const { isSuccess, data = [] } = useQuery(
		['search available', searchParams],
		() => {
			return TrackingService.getAvailable(searchParams);
		},
		{ select: ({ data }) => data }
	);
	useEffect(() => {
		setShipments(data);
		setAvailableLength(data.length);
	}, [data]);
	return (
		<div className={styles.available}>
			{data.map(item => (
				<CardShipment {...item} key={item.number} />
			))}
		</div>
	);
};
export default AvailableTab;
