import clsx from 'clsx';
import Link from 'next/link';
import { FC, useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';

import styles from './AvailableTrucks.module.scss';
import AvailableItem from './available-item/AvailableItem';
import { IArrivalData } from '@/screens/shipments/arrival-tab/arrival-tab.interface';

const AvailableTrucks: FC<{ available: IArrivalData[] }> = ({ available }) => {
	return (
		<div className={styles.delayed}>
			<div className={styles.header}>
				<span>Available trucks</span>
				<Link href={'/shipments/available'}>
					Show all
					<BiChevronRight size={16} />
				</Link>
			</div>
			{available.map((shipment, index) => {
				if (index > 2) return;
				return (
					<AvailableItem
						shipment={shipment}
						key={shipment.number}
						index={index}
					/>
				);
			})}
		</div>
	);
};
export default AvailableTrucks;
