import clsx from 'clsx';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { FC, Ref, useEffect, useState } from 'react';
import { FaRegCircle } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { TbMessageCircle2 } from 'react-icons/tb';

import { getCoordinates } from '@/shared/data.utils';

import styles from './Route.module.scss';
import RoutePoints from './route-points/RoutePoints';
import { IRoute } from '@/data/data';
import { IArrivalData } from '@/screens/shipments/arrival-tab/arrival-tab.interface';

const DynamicMap = dynamic(() => import('./map/Map'), { ssr: false });
const Route: FC<{ isShow: boolean; shipment: IArrivalData }> = ({
	isShow,
	shipment
}) => {
	return (
		<div
			className={clsx(styles.route, {
				[styles.show]: isShow,
				[styles.hide]: !isShow
			})}
		>
			<div className={styles.close}>
				<MdClose />
			</div>
			<div className={styles.title}>
				{shipment.destination},{shipment.number}
			</div>
			<div className={styles.description}>
				<div className={styles.descriptionItem}>
					<div className={styles.itemTitle}>Departure Date</div>
					<div className={styles.itemValue}>
						{new Date(shipment.departureDate).toLocaleString('en-Us', {
							day: '2-digit',
							month: 'short',
							hour: '2-digit',
							minute: '2-digit',
							hour12: true
						})}
					</div>
				</div>
				<div className={styles.descriptionItem}>
					<div className={styles.itemTitle}>Arrival Date</div>
					<div className={styles.itemValue}>
						{new Date(shipment.arrivalDate).toLocaleString('en-Us', {
							day: '2-digit',
							month: 'short',
							hour: '2-digit',
							minute: '2-digit',
							hour12: true
						})}
					</div>
				</div>
				<div className={styles.descriptionItem}>
					<div className={styles.itemTitle}>Time delay</div>
					<div className={styles.itemValue}>{shipment.delay}</div>
				</div>
			</div>
			<div className={styles.map}>
				<DynamicMap route={getCoordinates(shipment.destination)[0] || {}} />
			</div>
			<div className={styles.driver}>
				<div className={styles.information}>
					<div className={styles.avatar}>
						<Image
							src={shipment.driver.avatarPath}
							alt={'avatar'}
							width={50}
							height={50}
						/>
					</div>
					<div>
						<div className={styles.name}>{shipment.driver.name}</div>
						<div className={styles.position}>Driver</div>
					</div>
				</div>
				<div className={styles.message}>
					<TbMessageCircle2 size={28} />
				</div>
			</div>
			<RoutePoints />
		</div>
	);
};
export default Route;
