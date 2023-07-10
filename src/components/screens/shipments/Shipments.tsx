import clsx from 'clsx';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { OnChangeValue } from 'react-select';

import SearchTracking from '@/layout/layout/header/search-tracking/SearchTracking';

import SelectFilters from '@/ui/select-filters/SelectFilters';

import {
	getArivalDate,
	getSelectOptions,
	getSortKeys,
	sortArrival,
	sortShipmentData
} from '@/shared/getArivalDate';

import { useSearch } from '@/hooks/useSearch';

import styles from './Shipments.module.scss';
import AvailableTabs from './available-tabs/AvailableTabs';
import ShipmentsTableHeader from './shipments-header/ShipmentsHeader';
import ShipmentsTable from './shipments-table/ShipmentsTable';
import { IOption, IShipmentData, sortBy } from '@/data/cities';
import { TrackingService } from '@/services/tracking.service';

const Shipments: FC = () => {
	const {
		isSuccess,
		handleSearch,
		data,
		number,
		handleChangeCity,
		handleChangeArrivalDate,
		handleChangeDepartment,
		handleSortBy
	} = useSearch();
	const [shipments, setShipments] = useState<IShipmentData[]>([]);
	const [activeTab, setActiveTab] = useState<number>(1);
	const dates = getArivalDate(data || []);

	TrackingService.getAllShipments({
		number: 'b4',
		city: 'Barcelona',
		sort: 'Total weight, kg'
	}).then(res => console.log(res.data));

	const sort = getSortKeys(data || []);

	useEffect(() => {
		if (data) setShipments(data);
	}, [data]);

	return (
		<div className={styles.shipments}>
			<SearchTracking
				searchField={{ number, handleSearch }}
				handleChangeCity={handleChangeCity}
				handleChangeDepartment={handleChangeDepartment}
			/>
			<div className={styles.shipmentsHeader}>
				<div className={styles.leftSide}>
					<span>Shipments</span>
					<button
						onClick={() => setActiveTab(1)}
						className={clsx(styles.button, {
							[styles.activeTab]: activeTab === 1
						})}
					>
						Arrival({data?.length})
					</button>
					<button
						onClick={() => setActiveTab(2)}
						className={clsx(styles.button, {
							[styles.activeTab]: activeTab === 2
						})}
					>
						Available(5)
					</button>
					<button
						onClick={() => setActiveTab(3)}
						className={clsx(styles.button, {
							[styles.activeTab]: activeTab === 3
						})}
					>
						Departure(32)
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
						// handleChange={handleChangeDate}
						handleChange={handleChangeArrivalDate}
					/>
				</div>
			</div>
			{activeTab === 1 ? (
				<>
					<ShipmentsTableHeader handleSort={handleSortBy} />
					<ShipmentsTable shipments={shipments} />
				</>
			) : activeTab === 2 ? (
				<AvailableTabs />
			) : (
				<></>
			)}
		</div>
	);
};

export default Shipments;
