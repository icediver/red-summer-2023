import { useIsFetching } from '@tanstack/react-query';
import {
	FC,
	useEffect,
	useState,
	MouseEvent,
	useRef,
	ChangeEventHandler,
	ChangeEvent,
	Dispatch,
	SetStateAction
} from 'react';
import { GrDropbox } from 'react-icons/gr';

import { IAvailablePackage } from '../../available-package.interface';

import styles from './PackageItem.module.scss';

const PackageItem: FC<{
	parcel: IAvailablePackage;
	selectedParcels: IAvailablePackage[];
	setSelectedParcels: Dispatch<SetStateAction<IAvailablePackage[]>>;
}> = ({ parcel, selectedParcels, setSelectedParcels }) => {
	// const { parcelNumber, volumeWeight, admissionDate } = parcel;
	const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (
		event: ChangeEvent
	) => {
		if (selectedParcels.some(pack => pack.parcelNumber === parcel.parcelNumber))
			setSelectedParcels([
				...selectedParcels.filter(
					pack => pack.parcelNumber !== parcel.parcelNumber
				)
			]);
		else setSelectedParcels([...selectedParcels, parcel]);
	};
	return (
		<div className={styles.container}>
			<div className={styles.parcelNumber}>
				<input
					type='checkbox'
					onMouseDown={e => e.stopPropagation()}
					onChange={onChangeHandler}
				/>
				{parcel?.parcelNumber}
			</div>
			<div className={styles.weight}>{parcel?.volumeWeight}</div>
			<div>{parcel?.admissionDate}</div>
		</div>
	);
};
export default PackageItem;
