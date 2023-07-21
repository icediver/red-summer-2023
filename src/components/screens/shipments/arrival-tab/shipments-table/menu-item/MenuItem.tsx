import clsx from 'clsx';
import { FC } from 'react';

import { IArrivalData } from '../../arrival-tab.interface';

import styles from './MenuItem.module.scss';

const MenuItem: FC<IArrivalData> = data => {
	const status = data.status.split(' ').join('_');
	return (
		<div className={styles.menuItem}>
			<div className='col-span-3'>{data.destination}</div>
			<div className={styles.dataNumber}>{data.number}</div>
			<div className={styles.dataTruck}>{data.model}</div>
			<div className={styles.dataWeight}>{data.capacity}</div>
			<div className='col-span-2 text-end'>
				<div className={clsx(styles.dataStatus, styles[status])}>
					{data.status}
				</div>
			</div>
			<div className={'col-span-2'}>
				{new Date(data.departureDate).toLocaleString()}
			</div>
			<div className={'col-span-2'}>
				{new Date(data.arrivalDate).toLocaleString()}
			</div>
			<div className={styles.data}>{data.category}</div>
		</div>
	);
};

export default MenuItem;
