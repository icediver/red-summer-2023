import { Dispatch, FC, SetStateAction } from 'react';

import { IParcel } from '../../arrival-tab/arrival-tab.interface';

import styles from './AvailablePackages.module.scss';
import PackageItem from './package-item/PackageItem';

const AvailablePackages: FC<{
	packages: IParcel[];
	selectedParcels: IParcel[];
	setSelectedParcels: Dispatch<SetStateAction<IParcel[]>>;
}> = ({ packages, selectedParcels, setSelectedParcels }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				Available Packages
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
						onChange={() => setSelectedParcels([{} as IParcel])}
						onMouseDown={e => e.stopPropagation()}
					/>
					Parcel number
				</div>{' '}
				<div>Volume Weight</div>
				<div>Admission Date</div>
			</div>
			{packages.map(pack => (
				<div className={styles.table} key={pack.parcelNumber}>
					<PackageItem
						parcel={pack}
						setSelectedParcels={setSelectedParcels}
						selectedParcels={selectedParcels}
					/>
				</div>
			))}
		</div>
	);
};
export default AvailablePackages;
