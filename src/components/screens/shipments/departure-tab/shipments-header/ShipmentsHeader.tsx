import clsx from 'clsx';
import { FC, MouseEvent, useState } from 'react';
import { OnChangeValue } from 'react-select';

import { IOption } from '@/ui/select-filters/select.types';

import styles from './ShipmentsHeader.module.scss';
import { tableHeader } from './shipments-header.data';

const ShipmentsTableHeader: FC<{
	handleSort: (newValue: OnChangeValue<IOption, boolean> | string) => void;
}> = ({ handleSort }) => {
	const [activeSortColumn, setActiveSortColumn] = useState('');

	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		setActiveSortColumn(event.currentTarget.innerText);
		handleSort(event.currentTarget.innerText);
	};
	return (
		<div className={clsx(styles.tableHeader, 'grid grid-cols-16')}>
			{tableHeader.map(menuItem => (
				<button
					key={menuItem}
					className={clsx('flex items-center justify-between mr-2', {
						['text-black']: activeSortColumn === menuItem
					})}
					onClick={handleClick}
				>
					{menuItem}
				</button>
			))}
		</div>
	);
};

export default ShipmentsTableHeader;
