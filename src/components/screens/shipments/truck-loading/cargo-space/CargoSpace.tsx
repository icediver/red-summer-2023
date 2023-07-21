import clsx from 'clsx';
import { FC } from 'react';
import { FaCloudscale } from 'react-icons/fa';

import styles from './CargoSpace.module.scss';
import SpaceItem from './SpaceItem';
import { ICargoSpace } from './cargo-space.interface';

const dataSpace: { key: string; value: string[] }[] = [
    {
        key: 'Upper tier',
        value: ['empty', 'fully', 'fully', 'fully']
    },
    { key: 'Middle tier', value: ['fully', 'empty', 'fully', 'fully'] },
    { key: 'Lower tier', value: ['fully', 'empty', 'fully', 'fully'] }
];

const CargoSpace: FC<ICargoSpace> = ({ onDropHandler, status }) => {
    return (
        <>
            {dataSpace.map((tier, index) => (
                <div key={index}>
                    <div>
                        {tier.key}
                        <FaCloudscale className='text-black-inactive inline-block ml-4' />
                    </div>
                    <div className={styles.upperTier}>
                        {tier.value.map((space, index) => (
                            <SpaceItem
                                space={space}
                                status={status}
                                onDropHandler={onDropHandler}
                                key={tier.key + index}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};
export default CargoSpace;
