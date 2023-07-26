'use client';

import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';
import { FC } from 'react';

import SearchTracking from '@/ui/search-tracking/SearchTracking';

import { getCities } from '@/shared/data.utils';

import { useSearchParams } from '@/hooks/useSearchParam';

import styles from './Dashboard.module.scss';
import DelayedDelivery from './cards/delayed-delivery/DelayedDelivery';
import { TrackingService } from '@/services/tracking.service';

const Dashboard: FC = () => {
	const {
		handleSearch,
		handleChangeDepartment,
		handleChangeCity,
		searchParamsWithDebounce
	} = useSearchParams();

	const { isSuccess, data } = useQuery(
		['get shipments', searchParamsWithDebounce],
		() => TrackingService.getArrival(searchParamsWithDebounce),
		{ select: ({ data }) => data }
	);

	const delayed = data?.shipments.filter(shipment => shipment.delay !== null);

	return (
		<div className={styles.dashboard}>
			<SearchTracking
				cities={getCities(data?.shipments || [])}
				handleSearch={handleSearch}
				handleChangeCity={handleChangeCity}
				handleChangeDepartment={handleChangeDepartment}
			/>
			<div className={styles.header}>Overview</div>
			<div className={styles.topRow}>
				{packages.map(pack => (
					<div className={styles.package} key={pack.title}>
						<div>
							<div className={styles.title}>{pack.title}</div>
							<div className={styles.count}>{pack.count}</div>
						</div>
						<div className={styles.right}>
							<div className={styles.frame}>
								<div className={styles.icon}>{pack.emodji}</div>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className={styles.container}>
				<div className={styles.card}>
					<DelayedDelivery delayed={delayed || []} />
				</div>
				<div className={styles.card}></div>
				<div className={styles.card}></div>
				<div className={styles.card}></div>
			</div>
		</div>
	);
};
export default Dashboard;

const packages = [
	{
		title: 'New packages',
		count: 222,
		emodji: '✌️ '
	},
	{
		title: 'Ready for shipping',
		count: 60,
		emodji: '📦'
	},
	{
		title: 'In transit',
		count: 2000,
		emodji: '🚛'
	},
	{
		title: 'Delivered',
		count: 3600,
		emodji: '🚀'
	}
];
