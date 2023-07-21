'use client';

import clsx from 'clsx';
import { log } from 'console';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';

import truckImage from '@/assets/images/track.png';

import styles from './CardLoading.module.scss';
import { ICardShipment } from '@/screens/shipments/available-tab/card-shipment/card-shipment.interface';

const CardLoading: FC<ICardShipment> = ({ available, capacity }) => {
	const percent = Math.round((+available / capacity) * 100);

	const color = percent <= 30 ? 'green' : percent <= 60 ? 'yellow' : 'red';
	const width = { width: `${percent}%` };
	const [colorLoading, setColorLoading] = useState('');
	useEffect(() => {
		const timeout = setTimeout(() => {
			setColorLoading(color);
		}, 400);

		return () => {
			clearTimeout(timeout);
		};
	}, [percent]);
	return (
		<div className={styles.card}>
			<div className={styles.header}>
				<div className={styles.leftSideHeader}>
					<div className={styles.route}>Truck load</div>
				</div>
				<div className={styles.percent}>{percent}%</div>
			</div>
			<div className={styles.main}>
				<div className={styles.leftColumn}>
					<div className={styles.title}>Available, kg</div>
					<div className={styles.value}>
						{available}
						<span>/{capacity}</span>
					</div>
				</div>
				<div className={styles.rightColumn}>
					<div className={styles.truck}>
						<Image src={truckImage} alt='truck' />
						<div className={styles.progress}>
							<div
								className={clsx(styles.total, styles[colorLoading], {
									// [styles.green]: percent <= 30,
									// [styles.yellow]: 30 < percent && percent < 70,
									// [styles.red]: percent >= 70
								})}
								style={width}
							></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default CardLoading;
