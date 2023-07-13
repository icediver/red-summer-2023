import { Dispatch, FC, SetStateAction } from 'react';

import { IAvailablePackage } from '../available-package.interface';

import styles from './AvailablePackages.module.scss';
import ErrorModal from './error-modal/ErrorModal';
import PackageItem from './package-item/PackageItem';

const AvailablePackages: FC<{
	packages: IAvailablePackage[];
	selectedParcels: IAvailablePackage[];
	setSelectedParcels: Dispatch<SetStateAction<IAvailablePackage[]>>;
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
						onChange={() => setSelectedParcels([{} as IAvailablePackage])}
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
