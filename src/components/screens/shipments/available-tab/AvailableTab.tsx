import { FC } from 'react';

import { IArrivalData } from '../arrival-tab/arrival-tab.interface';

import styles from './AvailableTab.module.scss';
import CardShipment from './card-shipment/CardShipment';

const AvailableTab: FC<{
	shipments: IArrivalData[];
}> = ({ shipments }) => {
	return (
		<div className={styles.available}>
			{shipments.map(item => (
				<CardShipment {...item} key={item.number} />
			))}
		</div>
	);
};
export default AvailableTab;
