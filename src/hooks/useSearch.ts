import { useQuery } from '@tanstack/react-query';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { OnChangeValue } from 'react-select';

import { useDebounce } from './useDebounce';
import { IOption } from '@/data/cities';
import { TrackingService } from '@/services/tracking.service';

export const useSearch = () => {
	const [number, setNumber] = useState('');
	const [city, setCity] = useState('');
	const [department, setDepartment] = useState('');
	const [arrivalDate, setArrivalDate] = useState('');
	const [sortBy, setSortBy] = useState('');
	const searchParam = useMemo(
		() => ({
			number,
			city,
			department,
			date: arrivalDate,
			sort: sortBy
		}),
		[number, city, department, arrivalDate, sortBy]
	);

	const debouncedSearch = useDebounce(searchParam, 500);

	const { isSuccess, data } = useQuery(
		['search tracking', debouncedSearch],
		() => TrackingService.getAllShipments(debouncedSearch),
		{ select: ({ data }) => data }
	);

	console.log(data);

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
	const handleChangeArrivalDate = (
		newValue: OnChangeValue<IOption, boolean>
	) => {
		setArrivalDate((newValue as IOption)?.value);
	};

	const handleSortBy = (newValue: OnChangeValue<IOption, boolean>) => {
		setSortBy((newValue as IOption)?.value);
	};

	return {
		isSuccess,
		handleSearch,
		handleChangeCity,
		handleChangeDepartment,
		handleChangeArrivalDate,
		handleSortBy,
		data,
		number
	};
};
