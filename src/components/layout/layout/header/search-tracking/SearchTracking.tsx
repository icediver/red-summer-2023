import dynamic from 'next/dynamic';
import { Dispatch, FC, SetStateAction } from 'react';
import { FiSearch } from 'react-icons/fi';
import { OnChangeValue } from 'react-select';

import SearchField, { ISearchField } from '@/ui/search-field/SearchField';
import SelectFilters from '@/ui/select-filters/SelectFilters';

import { useSearch } from '@/hooks/useSearch';

import styles from './SearchTracking.module.scss';
import SearchList from './search-list/SearchList';
import { IOption, cities, departments } from '@/data/cities';

const DynamicClock = dynamic(() => import('@/ui/clock/Clock'), { ssr: false });

interface ISearchTrackNumber {
	searchField: ISearchField;
	handleChangeCity: (event: OnChangeValue<IOption, boolean>) => void;
	handleChangeDepartment: (event: OnChangeValue<IOption, boolean>) => void;
}

const SearchTracking: FC<ISearchTrackNumber> = ({
	searchField,
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
			<SearchField
				number={searchField.number}
				handleSearch={searchField.handleSearch}
			/>
		</div>
	);
};

export default SearchTracking;
