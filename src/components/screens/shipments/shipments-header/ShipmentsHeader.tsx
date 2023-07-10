import clsx from 'clsx';
import {
	EventHandler,
	FC,
	MouseEvent,
	MouseEventHandler,
	useState
} from 'react';

import styles from './ShipmentsHeader.module.scss';
import { shipmentsMenu } from '@/data/cities';

const ShipmentsTableHeader: FC<{
	handleSort: (newValue: string) => void;
}> = () => {
	const [activeSortColumn, setActiveSortColumn] = useState('');

	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		setActiveSortColumn(event.currentTarget.innerText);
	};
	return (
		<div className={clsx(styles.tableHeader, 'grid grid-cols-16')}>
			{shipmentsMenu.map(menuItem => (
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
