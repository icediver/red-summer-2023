import clsx from 'clsx';
import { FC, MouseEvent, useState } from 'react';
import { OnChangeValue } from 'react-select';

import { IOption } from '@/ui/select-filters/select.types';

import styles from './ShipmentsHeader.module.scss';
import { ITableHeader, tableHeader } from './shipments-header.data';

const ShipmentsTableHeader: FC<{
	handleSort: (newValue: OnChangeValue<IOption, boolean> | string) => void;
}> = ({ handleSort }) => {
	const [activeSortColumn, setActiveSortColumn] = useState('');

	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		const selectedMenuItem = event.currentTarget.innerText;
		setActiveSortColumn(selectedMenuItem);
		const selectedFilter = tableHeader.filter(menuItem => {
			return Object.keys(menuItem)[0] === event.currentTarget.innerText;
		})[0][selectedMenuItem];
		handleSort(selectedFilter);
	};
	return (
		<div className={clsx(styles.tableHeader, 'grid grid-cols-16')}>
			{tableHeader.map(menuItem => {
				return (
					<button
						key={Object.keys(menuItem)[0]}
						className={clsx('flex items-center justify-between mr-2', {
							['text-black']: activeSortColumn === Object.keys(menuItem)[0]
						})}
						onClick={handleClick}
					>
						{Object.keys(menuItem)[0]}
					</button>
				);
			})}
		</div>
	);
};

export default ShipmentsTableHeader;
