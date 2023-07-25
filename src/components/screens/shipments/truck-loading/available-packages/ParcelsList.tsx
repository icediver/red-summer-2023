import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';

import { IParcel } from '../../arrival-tab/arrival-tab.interface';

import styles from './AvailablePackages.module.scss';
import PackageItem from './package-item/PackageItem';

const ParcelsList: FC<{
	setLoadingParcels: Dispatch<SetStateAction<IParcel[]>>;
	packages: IParcel[];
}> = ({ packages, setLoadingParcels }) => {
	const [selectedParcels, setSelectedParcels] = useState<IParcel[]>([]);
	useEffect(() => setSelectedParcels([...packages]), []);
	useEffect(() => {
		setLoadingParcels([...selectedParcels]);
		console.log('packages', packages);
	}, [selectedParcels]);
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				Parcels List
				<span>
					Selected {selectedParcels.length} Weight{' '}
					{selectedParcels.reduce(
						(acc, current) => acc + current.volumeWeight,
						0
					)}
					, kg
				</span>
			</div>
			<div className={styles.header}>
				<div className={styles.number}>
					<input
						type='checkbox'
						ref={input => {
							if (input) {
								input.indeterminate = true;
							}
						}}
						onChange={() => setSelectedParcels([])}
						onMouseDown={e => e.stopPropagation()}
					/>
					Parcel number
				</div>{' '}
				<div>Volume Weight</div>
				<div>Admission Date</div>
			</div>
			{selectedParcels.map(pack => (
				<div className={styles.table} key={pack.parcelNumber}>
					<PackageItem
						parcel={pack}
						setSelectedParcels={setSelectedParcels}
						selectedParcels={selectedParcels}
						isTruck
					/>
				</div>
			))}
		</div>
	);
};
export default ParcelsList;
