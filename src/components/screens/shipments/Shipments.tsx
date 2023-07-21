'use client';

import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';
import { FC, MouseEvent, useEffect, useState } from 'react';

import SelectFilters from '@/ui/select-filters/SelectFilters';

import { getDates, getSelectOptions, getSortKeys } from '@/shared/data.utils';

import { useSearchParams } from '@/hooks/useSearchParam';

import styles from './Shipments.module.scss';
import ArrivalTab from './arrival-tab/ArrivalTab';
import {
	IArrivalData,
	IShipmentsData
} from './arrival-tab/arrival-tab.interface';
import AvailableTab from './available-tab/AvailableTab';
import { ICardShipment } from './available-tab/card-shipment/card-shipment.interface';
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
	const [shipmentsData, setShipmentsData] = useState<IShipmentsData>(
		{} as IShipmentsData
	);
	// const [arrivalLength, setArrivalLength] = useState<number>(0);
	// const [availableLength, setAvailableLength] = useState<number>(0);

	// const [activeTab, setActiveTab] = useState<Source>(Source.Arrival);

	const dates = getDates(shipmentsData?.shipments || []);
	const { isSuccess, data } = useQuery(
		['search arrival', searchParamsWithDebounce],
		() => TrackingService.getArrival(searchParamsWithDebounce),
		{ select: ({ data }) => data }
	);
	useEffect(() => {
		console.log('----------from useEffect in shipments', data);
	}, [searchParamsWithDebounce]);

	const sort = getSortKeys(shipmentsData?.shipments || []);

	const counts: { [key: string]: string } =
		shipmentsData?.categoryCount?.reduce(function (result, item) {
			const key = Object.keys(item)[0] as keyof typeof item; //first property: a, b, c
			result[key] = item[key];
			return result;
		}, {});

	function availableHandler(event: MouseEvent<HTMLButtonElement>) {
		setActiveCategory(Source.Available);
	}

	return (
		<div className={styles.shipments}>
			<SearchTracking
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
						// handleChange={handleChangeArrivalDate}
					/>
				</div>
			</div>
			{activeCategory === Source.Arrival ? (
				<>
					<ArrivalTab
						handleSort={handleSortBy}
						searchParams={searchParamsWithDebounce}
						setShipments={setShipmentsData}
						// setArrivalLength={setArrivalLength}
					/>
				</>
			) : activeCategory === Source.Available ? (
				<AvailableTab
					setShipments={setShipmentsData}
					searchParams={searchParamsWithDebounce}
					// setAvailableLength={setAvailableLength}
				/>
			) : (
				<></>
			)}
		</div>
	);
};

export default Shipments;
