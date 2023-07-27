'use client';

import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';
import { FC, useEffect } from 'react';

import SearchTracking from '@/ui/search-tracking/SearchTracking';

import { getCities } from '@/shared/data.utils';

import { useSearchParams } from '@/hooks/useSearchParam';

import styles from './Dashboard.module.scss';
import AvailableTrucks from './cards/available-trucks/AvailableTrucks';
import DaylyPlan from './cards/daily-plan/DaylyPlan';
import DelayedDelivery from './cards/delayed-delivery/DelayedDelivery';
import RecentRequests from './cards/recent-requests/RecentRequests';
import { Source, TrackingService } from '@/services/tracking.service';

const Dashboard: FC = () => {
	const {
		handleSearch,
		handleChangeDepartment,
		handleChangeCity,
		setActiveCategory,
		searchParamsWithDebounce
	} = useSearchParams();

	const { isSuccess, data } = useQuery(
		['get shipments', searchParamsWithDebounce],
		() => TrackingService.getArrival(searchParamsWithDebounce),
		{ select: ({ data }) => data }
	);

	useEffect(() => {
		setActiveCategory(Source.All);
	}, []);

	const delayed = data?.shipments.filter(shipment => shipment.delay !== null);
	const available = data?.shipments.filter(shipment => {
		return +shipment.categoryId === 2;
	});
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
				{packages.map((pack, index) => (
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
				<div className={styles.card}>
					<DaylyPlan />
				</div>
				<div className={styles.card}>
					<AvailableTrucks available={available || []} />
				</div>
				<div className={styles.card}>
					<RecentRequests />
				</div>
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
