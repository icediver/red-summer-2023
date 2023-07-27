import clsx from 'clsx';
import { FC } from 'react';

import styles from './AvailableItem.module.scss';
import { IArrivalData } from '@/screens/shipments/arrival-tab/arrival-tab.interface';

const AvailableItem: FC<{
	shipment: IArrivalData;
	index: number;
}> = ({ shipment, index }) => {
	const totalWeight = shipment.parcels.reduce(
		(acc, parcel) => acc + parcel.volumeWeight,
		0
	);
	const availableSpace = Math.round((totalWeight / +shipment.capacity) * 100);
	const availableStyle =
		availableSpace < 30 ? 'green' : availableSpace < 60 ? 'yellow' : 'red';
	return (
		<>
			<button
				className={clsx(styles.availableItem, {
					[styles.noBorder]: index === 2
				})}
			>
				<div className={styles.left}>
					<span className={styles.number}>{shipment.number}</span>
					<div className={styles.destination}>{shipment.destination}</div>
				</div>
				<div className={styles.right}>
					<div className={styles[availableStyle]}>
						<span>{availableSpace}</span>/100%
					</div>
					<div
						className={clsx(styles.line, styles[availableStyle])}
						style={{
							width: `${availableSpace}%`
						}}
					/>
				</div>
			</button>
		</>
	);
};
export default AvailableItem;
