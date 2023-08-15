'use client';

import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';

import { IParcel } from '../shipments/arrival-tab/arrival-tab.interface';
import PackageItem from '../shipments/truck-loading/available-packages/package-item/PackageItem';

import styles from './Parcels.module.scss';
import ParcelItem from './parcel-item/ParcelItem';
import { TruckService } from '@/services/trucks.service';

const Parcels: FC = () => {
	const { data } = useQuery(
		['get parcels'],
		() => TruckService.getAvailablePackages(),
		{
			select: ({ data }) => data
		}
	);
	return (
		<div className={styles.parcels}>
			<div className={styles.title}>
				Available Parcels,{' '}
				<span className='text-black-inactive'>
					total {data?.length} parcels
				</span>
			</div>
			<div className={styles.header}>
				<div className={styles.number}>Parcel number</div>
				<div className='text-end'>Volume Weight</div>
				<div className='text-end'>Admission Date</div>
			</div>

			{data &&
				data.map(item => <ParcelItem parcel={item} key={item.parcelNumber} />)}
		</div>
	);
};
export default Parcels;
