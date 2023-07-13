import { useQuery } from '@tanstack/react-query';
import { FC, useEffect } from 'react';

import { IArrivalData, IShipmentsTable } from '../arrival-tab.interface';

import styles from './ShipmentsTable.module.scss';
import MenuItem from './menu-item/MenuItem';
import { TrackingService } from '@/services/tracking.service';

const ShipmentsTable: FC<{ tableData: IArrivalData[] }> = ({ tableData }) => {
	return (
		<div className={styles.table}>
			{tableData.map((items, index) => (
				<MenuItem key={items['Shipment number']} {...items} />
			))}
		</div>
	);
};

export default ShipmentsTable;
