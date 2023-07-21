'use client';

import { DragEventHandler, FC, useEffect, useState } from 'react';

import { useComponentDidMount } from '@/hooks/useComponentDidMount';

import styles from './CargoSpace.module.scss';

const SpaceItem: FC<{
	space: string;
	status: string;
	onDropHandler: DragEventHandler<HTMLDivElement>;
}> = ({ space, onDropHandler, status }) => {
	const [isStatusActive, setIsStatusActive] = useState<string>(space);
	const [temp, setTemp] = useState<boolean>(false);
	const onDragOverHandler: DragEventHandler<HTMLDivElement> = event => {
		if (event.currentTarget.className === styles['empty']) {
			event.stopPropagation();
			event.preventDefault();
			setTemp(true);
		}
	};

	const isComponentMounted = useComponentDidMount();
	useEffect(() => {
		if (isComponentMounted) {
			if (temp) setIsStatusActive('active');
		}
	}, [status]);

	return (
		<div
			className={styles[isStatusActive]}
			onDrop={onDropHandler}
			onDragOver={onDragOverHandler}
		></div>
	);
};
export default SpaceItem;
