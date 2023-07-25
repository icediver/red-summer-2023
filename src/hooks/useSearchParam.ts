import { ChangeEvent, useMemo, useState } from 'react';
import { OnChangeValue } from 'react-select';

import { IOption } from '@/ui/select-filters/select.types';

import { useDebounce } from './useDebounce';
import { Source } from '@/services/tracking.service';
import { TypeDataFilters } from '@/services/tracking.types';

export const useSearchParams = () => {
	const [number, setNumber] = useState('');
	const [city, setCity] = useState('');
	const [department, setDepartment] = useState('');
	const [date, setDate] = useState('');
	const [sort, setSort] = useState('');
	const [activeCategory, setActiveCategory] = useState<Source>(Source.Arrival);
	const searchParam = useMemo(
		() => ({
			number,
			city,
			department,
			date,
			sort,
			category: String(activeCategory)
		}),
		[number, city, department, date, sort, activeCategory]
	);

	const searchParamsWithDebounce: TypeDataFilters = useDebounce(
		searchParam,
		50
	);

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setNumber(e.target.value);
	};

	const handleChangeCity = (newValue: OnChangeValue<IOption, boolean>) => {
		const city = (newValue as IOption)?.value || '';
		setCity(city);
	};

	const handleChangeDepartment = (
		newValue: OnChangeValue<IOption, boolean>
	) => {
		setDepartment((newValue as IOption)?.value);
	};
	const handleChangeDate = (newValue: OnChangeValue<IOption, boolean>) => {
		setDate((newValue as IOption)?.value);
	};

	const handleSortBy = (newValue: OnChangeValue<IOption, boolean> | string) => {
		if (typeof newValue === 'string') setSort(newValue);
		else setSort((newValue as IOption)?.value);
	};
	return {
		activeCategory,
		setActiveCategory,
		handleSearch,
		handleChangeCity,
		handleChangeDepartment,
		handleChangeDate,
		handleSortBy,
		searchParamsWithDebounce
	};
};
