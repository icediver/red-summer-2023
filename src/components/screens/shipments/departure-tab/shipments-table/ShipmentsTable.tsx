import { FC, useEffect } from 'react';

import { IArrivalData } from '../../arrival-tab/arrival-tab.interface';

import styles from './ShipmentsTable.module.scss';
import MenuItem from './menu-item/MenuItem';

const ShipmentsTable: FC<{ shipments: IArrivalData[] }> = ({ shipments }) => {
	return (
		<div className={styles.table}>
			{shipments.map((items, index) => (
				<MenuItem key={items.number} {...items} />
			))}
		</div>
	);
};

export default ShipmentsTable;
