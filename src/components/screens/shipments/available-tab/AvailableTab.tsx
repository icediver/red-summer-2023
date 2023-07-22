import { useQuery } from '@tanstack/react-query';
import { Dispatch, FC, SetStateAction, useEffect } from 'react';

import { ShipmentsType } from '../Shipments';
import {
	IArrivalData,
	IShipmentsData
} from '../arrival-tab/arrival-tab.interface';

import styles from './AvailableTab.module.scss';
import CardShipment from './card-shipment/CardShipment';
import { TrackingService } from '@/services/tracking.service';
import { TypeDataFilters } from '@/services/tracking.types';

const AvailableTab: FC<{
	shipments: IArrivalData[];
	// setShipments: Dispatch<SetStateAction<ShipmentsType[]>>;
	// searchParams: TypeDataFilters;
	// setAvailableLength: Dispatch<SetStateAction<number>>;
}> = ({ shipments }) => {
	// const { isSuccess, data = [] } = useQuery(
	// 	['search available', searchParams],
	// 	() => {
	// 		return TrackingService.getAvailable(searchParams);
	// 	},
	// 	{ select: ({ data }) => data }
	// );
	// useEffect(() => {
	// 	setShipments(data);
	// 	// setAvailableLength(data.length);
	// }, [data]);
	return (
		<div className={styles.available}>
			{shipments.map(item => (
				<CardShipment {...item} key={item.number} />
			))}
		</div>
	);
};
export default AvailableTab;
