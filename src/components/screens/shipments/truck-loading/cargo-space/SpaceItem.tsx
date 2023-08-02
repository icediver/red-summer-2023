'use client';

import { DragEventHandler, FC, useEffect, useRef, useState } from 'react';

import styles from './CargoSpace.module.scss';

const SpaceItem: FC<{
	space: string;
	status: string;
	onDropHandler: DragEventHandler<HTMLDivElement>;
}> = ({ space, onDropHandler, status }) => {
	const [isStatusActive, setIsStatusActive] = useState<string>('');
	const onDragOverHandler: DragEventHandler<HTMLDivElement> = event => {
		if (event.currentTarget.className === styles['empty']) {
			event.stopPropagation();
			event.preventDefault();
		}
	};

	useEffect(() => setIsStatusActive(space), []);

	return (
		<div
			className={styles[isStatusActive]}
			onDrop={event => {
				onDropHandler(event);
				setIsStatusActive('active');
			}}
			onDragOver={onDragOverHandler}
		></div>
	);
};
export default SpaceItem;
