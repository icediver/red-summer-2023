import { useQuery } from '@tanstack/react-query';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { OnChangeValue } from 'react-select';

import { IOption } from '@/ui/select-filters/select.types';

import { useDebounce } from './useDebounce';
import { Source, TrackingService } from '@/services/tracking.service';

type TypeSourceData = 'Arrival' | 'Available' | 'Departure';

export const useSearch = () => {
	const [sourceData, setSourceData] = useState<Source>(Source.Arrival);
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

	const { isSuccess: isSuccessArrival, data: arrival } = useQuery(
		['search arrival', debouncedSearch],
		() => {
			return TrackingService.getArrival(debouncedSearch);
		},
		{ select: ({ data }) => data }
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
	const handleChangeArrivalDate = (
		newValue: OnChangeValue<IOption, boolean>
	) => {
		setArrivalDate((newValue as IOption)?.value);
	};

	const handleSortBy = (newValue: OnChangeValue<IOption, boolean> | string) => {
		if (typeof newValue === 'string') setSortBy(newValue);
		else setSortBy((newValue as IOption)?.value);
	};
	const handleSourceData = (newData: Source) => {
		setSourceData(newData);
	};
	return {
		isSuccessArrival,
		handleSourceData,
		handleSearch,
		handleChangeCity,
		handleChangeDepartment,
		handleChangeArrivalDate,
		handleSortBy,
		arrival
	};
};
