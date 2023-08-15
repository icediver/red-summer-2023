'use client';

import clsx from 'clsx';
import { FC, useState } from 'react';

import styles from './ParcelItem.module.scss';
import { IParcel } from '@/screens/shipments/arrival-tab/arrival-tab.interface';

const ParcelItem: FC<{
	parcel: IParcel;
}> = ({ parcel }) => {
	return (
		<div className={styles.container}>
			<div className={styles.parcelNumber}>{parcel?.parcelNumber}</div>
			<div className={styles.weight}>{parcel?.volumeWeight}</div>
			<div className='text-end'>
				{new Date(parcel?.admissionDate).toLocaleString('en-Us', {
					day: 'numeric',
					month: 'short',
					hour: '2-digit',
					hour12: false,
					minute: '2-digit'
				})}
			</div>
		</div>
	);
};
export default ParcelItem;
