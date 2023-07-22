import clsx from 'clsx';
import { log } from 'console';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import truckImage from '@/assets/images/track.png';

import { IArrivalData } from '../../arrival-tab/arrival-tab.interface';

import styles from './CardShipment.module.scss';
import { ICardShipment, IItemsCardShipment } from './card-shipment.interface';

const CardShipment: FC<IArrivalData> = ({
	destination,
	departureDate,
	capacity,
	number,
	model,
	parcels

	// route,
	// departure,
	// available,
	// number,
	// truck,
	// capacity
}) => {
	const available = parcels.reduce(
		(acc, parcel) => acc + parcel.volumeWeight,
		0
	);
	console.log(number, available);
	const percent = Math.round((available / +capacity) * 100);
	const width = { width: `${percent}%` };
	return (
		<Link href={`/shipments/${number}`} className={styles.card}>
			<div className={styles.header}>
				<div className={styles.leftSideHeader}>
					<div className={styles.route}>{destination}</div>
					<div className={styles.departure}>
						{new Date(departureDate).toLocaleString()}
					</div>
				</div>
				<div className={styles.percent}>{percent}%</div>
			</div>
			<div className={styles.main}>
				<div className={styles.leftColumn}>
					<div className={styles.title}>Available, kg</div>
					<div className={styles.value}>
						{available}/{capacity}
					</div>
					<div className={styles.title}>Shipment number</div>
					<div className={styles.value}>{number}</div>
					<div className={styles.title}>Truck</div>
					<div className={styles.value}>{model}</div>
				</div>
				<div className={styles.rightColumn}>
					<div className={styles.truck}>
						<Image src={truckImage} alt='truck' />
						<div className={styles.progress}>
							<div
								className={clsx(styles.total, {
									[styles.green]: percent <= 30,
									[styles.yellow]: 30 < percent && percent < 70,
									[styles.red]: percent >= 70
								})}
								style={width}
							></div>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};
export default CardShipment;
