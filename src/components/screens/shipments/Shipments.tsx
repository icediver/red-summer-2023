import clsx from 'clsx';
import { FC, useState } from 'react';

import SelectFilters from '@/ui/select-filters/SelectFilters';

import { getDates, getSelectOptions, getSortKeys } from '@/shared/data.utils';

import { useSearch } from '@/hooks/useSearch';
import { useSearchParams } from '@/hooks/useSearchParam';

import styles from './Shipments.module.scss';
import ArrivalTab from './arrival-tab/ArrivalTab';
import { IArrivalData } from './arrival-tab/arrival-tab.interface';
import AvailableTab from './available-tab/AvailableTab';
import { ICardShipment } from './available-tab/card-shipment/card-shipment.interface';
import SearchTracking from './header/search-tracking/SearchTracking';
import { Source } from '@/services/tracking.service';

export type ShipmentsType = IArrivalData | ICardShipment;

const Shipments: FC = () => {
	const {
		handleSearch,
		handleSortBy,
		handleChangeDepartment,
		handleChangeCity,
		handleChangeDate,
		searchParamsWithDebounce
	} = useSearchParams();
	const [shipments, setShipments] = useState<ShipmentsType[]>([]);
	const [arrivalLength, setArrivalLength] = useState<number>(0);
	const [availableLength, setAvailableLength] = useState<number>(0);

	const [activeTab, setActiveTab] = useState<Source>(Source.Arrival);
	const dates = getDates(shipments || []);

	const sort = getSortKeys(shipments || []);

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
						onClick={() => setActiveTab(Source.Arrival)}
						className={clsx(styles.button, {
							[styles.activeTab]: activeTab === Source.Arrival
						})}
					>
						Arrival({arrivalLength})
					</button>
					<button
						onClick={() => setActiveTab(Source.Available)}
						className={clsx(styles.button, {
							[styles.activeTab]: activeTab === Source.Available
						})}
					>
						Available({availableLength})
					</button>
					<button
						onClick={() => setActiveTab(Source.Departure)}
						className={clsx(styles.button, {
							[styles.activeTab]: activeTab === Source.Departure
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
						handleChange={handleChangeDate}
						// handleChange={handleChangeArrivalDate}
					/>
				</div>
			</div>
			{activeTab === Source.Arrival ? (
				<>
					<ArrivalTab
						handleSort={handleSortBy}
						searchParams={searchParamsWithDebounce}
						setShipments={setShipments}
						setArrivalLength={setArrivalLength}
					/>
				</>
			) : activeTab === Source.Available ? (
				<AvailableTab
					setShipments={setShipments}
					searchParams={searchParamsWithDebounce}
					setAvailableLength={setAvailableLength}
				/>
			) : (
				<></>
			)}
		</div>
	);
};

export default Shipments;
