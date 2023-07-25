'use client';

import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';
import { FC } from 'react';

import SelectFilters from '@/ui/select-filters/SelectFilters';

import {
	getCities,
	getDates,
	getSelectOptions,
	getSortKeys
} from '@/shared/data.utils';

import { useSearchParams } from '@/hooks/useSearchParam';

import styles from './Shipments.module.scss';
import ArrivalTab from './arrival-tab/ArrivalTab';
import { IArrivalData } from './arrival-tab/arrival-tab.interface';
import AvailableTab from './available-tab/AvailableTab';
import { ICardShipment } from './available-tab/card-shipment/card-shipment.interface';
import DepartureTab from './departure-tab/DepartureTab';
import SearchTracking from './header/search-tracking/SearchTracking';
import { Source, TrackingService } from '@/services/tracking.service';

export type ShipmentsType = IArrivalData | ICardShipment;

const Shipments: FC = () => {
	const {
		activeCategory,
		setActiveCategory,
		handleSearch,
		handleSortBy,
		handleChangeDepartment,
		handleChangeCity,
		handleChangeDate,
		searchParamsWithDebounce
	} = useSearchParams();

	const { isSuccess, data } = useQuery(
		['get shipments', searchParamsWithDebounce],
		() => TrackingService.getArrival(searchParamsWithDebounce),
		{ select: ({ data }) => data }
	);

	const dates = getDates(data?.shipments || []);
	const sort = getSortKeys(data?.shipments || []);

	const counts: { [key: string]: string } =
		data?.categoryCount?.reduce(function (result, item) {
			const key = Object.keys(item)[0] as keyof typeof item;
			result[key] = item[key];
			return result;
		}, {}) || {};

	return (
		<div className={styles.shipments}>
			<SearchTracking
				cities={getCities(data?.shipments || [])}
				handleSearch={handleSearch}
				handleChangeCity={handleChangeCity}
				handleChangeDepartment={handleChangeDepartment}
			/>
			<div className={styles.shipmentsHeader}>
				<div className={styles.leftSide}>
					<span>Shipments</span>
					<button
						onClick={() => setActiveCategory(Source.Arrival)}
						className={clsx(styles.button, {
							[styles.activeTab]: activeCategory === Source.Arrival
						})}
					>
						Arrival({counts?.Arrival})
					</button>
					<button
						onClick={() => setActiveCategory(Source.Available)}
						className={clsx(styles.button, {
							[styles.activeTab]: activeCategory === Source.Available
						})}
					>
						Available({counts?.Available})
					</button>
					<button
						onClick={() => setActiveCategory(Source.Departure)}
						className={clsx(styles.button, {
							[styles.activeTab]: activeCategory === Source.Departure
						})}
					>
						Departure({counts?.Departure})
					</button>
				</div>
				<div className={styles.rightSide}>
					<SelectFilters
						title='Sort by:'
						options={getSelectOptions(sort)}
						variant='second'
						instanceId='sort-by-filter'
						handleChange={handleSortBy}
					/>

					<SelectFilters
						title='Arival date:'
						options={getSelectOptions(dates)}
						variant='second'
						instanceId='arival-date-filter'
						handleChange={handleChangeDate}
					/>
				</div>
			</div>
			{activeCategory === Source.Arrival ? (
				<>
					<ArrivalTab
						handleSort={handleSortBy}
						shipments={data?.shipments || []}
					/>
				</>
			) : activeCategory === Source.Available ? (
				<AvailableTab shipments={data?.shipments || []} />
			) : (
				<DepartureTab
					handleSort={handleSortBy}
					shipments={data?.shipments || []}
				/>
			)}
		</div>
	);
};

export default Shipments;
