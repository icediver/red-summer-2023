import clsx from 'clsx';
import Link from 'next/link';
import { FC, useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';

import { useOutside } from '@/hooks/useOutside';

import styles from './DelayedDelivery.module.scss';
import DelayedItem from './delayed-item/DelayedItem';
import Route from './route/Route';
import { IArrivalData } from '@/screens/shipments/arrival-tab/arrival-tab.interface';

const DelayedDelivery: FC<{ delayed: IArrivalData[] }> = ({ delayed }) => {
	// const [isShowDelay, setIsShowDelay] = useState<boolean>(false);
	return (
		<div className={styles.delayed}>
			<div className={styles.header}>
				<span>Delayed delivery</span>
				<Link href={'/'}>
					Show all
					<BiChevronRight size={16} />
				</Link>
			</div>
			<div className={styles.tableHeader}>
				<div>Destination</div>
				<div className='text-center'>Truck</div>
				<div className='text-center'>Time arrive</div>
				<div className='text-center'>Time delay</div>
			</div>
			{delayed.map((shipment, index) => {
				if (index > 2) return;
				return (
					<DelayedItem
						shipment={shipment}
						key={shipment.number}
						index={index}
					/>
				);
			})}
		</div>
	);
};
export default DelayedDelivery;
