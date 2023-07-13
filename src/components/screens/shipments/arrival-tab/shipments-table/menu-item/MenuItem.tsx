import clsx from 'clsx';
import { FC } from 'react';

import { IArrivalData } from '../../arrival-tab.interface';

import styles from './MenuItem.module.scss';

const MenuItem: FC<IArrivalData> = data => {
	const status = data['Status'].split(' ').join('_');
	return (
		<div className={styles.menuItem}>
			<div className='col-span-3'>{data['Destination']}</div>
			<div className={styles.dataNumber}>{data['Shipment number']}</div>
			<div className={styles.dataTruck}>{data['Truck']}</div>
			<div className={styles.dataWeight}>{data['Total weight, kg']}</div>
			<div className='col-span-2 text-end'>
				<div className={clsx(styles.dataStatus, styles[status])}>
					{data['Status']}
				</div>
			</div>
			<div className={'col-span-2'}>{data['Departure date']}</div>
			<div className={'col-span-2'}>{data['Arrival date']}</div>
			<div className={styles.data}>{data['Time delay']}</div>
		</div>
	);
};

export default MenuItem;
