import clsx from 'clsx';
import { Dispatch, FC, SetStateAction, useState } from 'react';

import { useOutside } from '@/hooks/useOutside';

import Route from '../route/Route';

import styles from './DelayedItem.module.scss';
import { IArrivalData } from '@/screens/shipments/arrival-tab/arrival-tab.interface';

const DelayedItem: FC<{
	shipment: IArrivalData;
	index: number;
}> = ({ shipment, index }) => {
	const {
		ref,
		isShow: isShowDelay,
		setIsShow: setIsShowDelay
	} = useOutside(false);

	const hourDelay = +shipment.delay.split(':')[0];
	const delayStyle = hourDelay < 2 ? 'yellow' : 'red';
	return (
		<>
			<button
				className={clsx(styles.delayedItem, { [styles.noBorder]: index === 2 })}
				onClick={() => setIsShowDelay(true)}
			>
				<div>{shipment.destination}</div>
				<div>{shipment.number}</div>
				<div>
					{new Date(shipment.arrivalDate).toLocaleString('en-Us', {
						hour: '2-digit',
						minute: '2-digit'
					})}
				</div>
				<div>
					<div className={styles[delayStyle]}>{shipment.delay}</div>
				</div>
			</button>
			<div
				className={clsx(styles.frameRoute, {
					[styles.show]: isShowDelay,
					[styles.hide]: !isShowDelay
				})}
				onClick={() => setIsShowDelay(false)}
			>
				<div ref={ref} className='z-50' onClick={e => e.stopPropagation()}>
					<Route
						isShow={isShowDelay}
						shipment={shipment}
						setIsShow={setIsShowDelay}
					/>
				</div>
			</div>
		</>
	);
};
export default DelayedItem;
