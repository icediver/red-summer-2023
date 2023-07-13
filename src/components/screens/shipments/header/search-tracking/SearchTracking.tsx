import dynamic from 'next/dynamic';
import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { OnChangeValue } from 'react-select';

import SearchField, { ISearchField } from '@/ui/search-field/SearchField';
import SelectFilters from '@/ui/select-filters/SelectFilters';
import { IOption } from '@/ui/select-filters/select.types';

import styles from './SearchTracking.module.scss';
import { cities, departments } from './search-tracking.data';

const DynamicClock = dynamic(() => import('@/ui/clock/Clock'), { ssr: false });

interface ISearchTrackNumber {
	// searchField: ISearchField;
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
	handleChangeCity: (event: OnChangeValue<IOption, boolean>) => void;
	handleChangeDepartment: (event: OnChangeValue<IOption, boolean>) => void;
}

const SearchTracking: FC<ISearchTrackNumber> = ({
	handleSearch,
	handleChangeCity,
	handleChangeDepartment
}) => {
	return (
		<div className={styles.searchContainer}>
			<div className={styles.select}>
				<SelectFilters
					options={cities}
					title={'City: '}
					instanceId='cities-filter'
					handleChange={handleChangeCity}
				/>
				<SelectFilters
					options={departments}
					title={'Department: '}
					instanceId='departments-filter'
					handleChange={handleChangeDepartment}
				/>
				<DynamicClock />
			</div>
			<SearchField handleSearch={handleSearch} />
		</div>
	);
};

export default SearchTracking;
