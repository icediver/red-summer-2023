'use client';

import clsx from 'clsx';
import {
	FC,
	useState,
	ChangeEventHandler,
	ChangeEvent,
	Dispatch,
	SetStateAction,
	useEffect
} from 'react';

import styles from './PackageItem.module.scss';
import { IParcel } from '@/screens/shipments/arrival-tab/arrival-tab.interface';
import { TruckService } from '@/services/trucks.service';

const PackageItem: FC<{
	parcel: IParcel;
	isTruck?: boolean;
	selectedParcels: IParcel[];
	setSelectedParcels: Dispatch<SetStateAction<IParcel[]>>;
}> = ({ parcel, selectedParcels, setSelectedParcels, isTruck = false }) => {
	const [isSelected, setIsSelected] = useState<boolean>(false);

	useEffect(() => {
		if (isTruck) {
			setIsSelected(true);
		}
	}, []);

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
		} else {
			setSelectedParcels([...selectedParcels, parcel]);
		}
	};
	return (
		<label
			onMouseDown={e => {
				if (!isSelected || isTruck) e.stopPropagation();
			}}
			className={clsx(styles.container, { [styles.selected]: isSelected })}
		>
			<div className={styles.parcelNumber}>
				<input
					id='check-parcel'
					type='checkbox'
					checked={isSelected}
					onMouseDown={e => e.stopPropagation()}
					onChange={(event: ChangeEvent<HTMLInputElement>) => {
						onChangeHandler(event);
						setIsSelected(!isSelected);
					}}
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
