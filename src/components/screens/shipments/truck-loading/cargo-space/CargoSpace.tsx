import clsx from 'clsx';
import { FC, useEffect, useState } from 'react';
import { FaCloudscale } from 'react-icons/fa';

import { ISpace, getAvailableSpaces } from '@/shared/data.utils';

import styles from './CargoSpace.module.scss';
import SpaceItem from './SpaceItem';
import { ICargoSpace } from './cargo-space.interface';

const CargoSpace: FC<ICargoSpace> = ({ onDropHandler, status, truck }) => {
	const [dataSpaces, setDataSpaces] = useState<ISpace[]>([]);
	useEffect(() => {
		setDataSpaces([...getAvailableSpaces(truck)]);
	}, []);
	return (
		<>
			{dataSpaces.map((tier, index) => {
				return (
					<div key={index}>
						<div>
							{tier.key}
							<FaCloudscale className='text-black-inactive inline-block ml-4' />
						</div>
						<div className={styles.upperTier}>
							{tier.value.map((space, index) => {
								return (
									<SpaceItem
										space={space}
										status={space}
										onDropHandler={onDropHandler}
										key={tier.key + index}
									/>
								);
							})}
						</div>
					</div>
				);
			})}
		</>
	);
};
export default CargoSpace;
