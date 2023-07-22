import { useIsFetching } from '@tanstack/react-query';
import clsx from 'clsx';
import {
	FC,
	useEffect,
	useState,
	MouseEvent,
	useRef,
	ChangeEventHandler,
	ChangeEvent,
	Dispatch,
	SetStateAction,
	MouseEventHandler
} from 'react';
import { GrDropbox } from 'react-icons/gr';

import { IAvailablePackage } from '../../available-package.interface';

import styles from './PackageItem.module.scss';
import { IParcel } from '@/screens/shipments/arrival-tab/arrival-tab.interface';

const PackageItem: FC<{
	parcel: IParcel;
	selectedParcels: IParcel[];
	setSelectedParcels: Dispatch<SetStateAction<IParcel[]>>;
}> = ({ parcel, selectedParcels, setSelectedParcels }) => {
	// const { parcelNumber, volumeWeight, admissionDate } = parcel;
	const [isSelected, setIsSelected] = useState<boolean>(false);
	const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (
		event: ChangeEvent
	) => {
		if (
			selectedParcels.some(pack => pack.parcelNumber === parcel.parcelNumber)
		) {
			setSelectedParcels([
				...selectedParcels.filter(
					pack => pack.parcelNumber !== parcel.parcelNumber
				)
			]);
			setIsSelected(false);
		} else {
			setSelectedParcels([...selectedParcels, parcel]);
			setIsSelected(true);
		}
	};
	return (
		<label
			onMouseDown={e => {
				if (!isSelected) e.stopPropagation();
			}}
			className={clsx(styles.container, { [styles.selected]: isSelected })}
		>
			<div
				className={styles.parcelNumber}
				// onClick={onChangeHandler}
			>
				<input
					id='check-parcel'
					type='checkbox'
					onMouseDown={e => e.stopPropagation()}
					onChange={onChangeHandler}
				/>
				{parcel?.parcelNumber}
			</div>
			<div className={styles.weight}>{parcel?.volumeWeight}</div>
			<div>
				{new Date(parcel?.admissionDate).toLocaleString('en-Us', {
					day: 'numeric',
					month: 'short',
					hour: '2-digit',
					hour12: false,
					minute: '2-digit'
				})}
			</div>
		</label>
	);
};
export default PackageItem;
