import clsx from 'clsx';
import { FC } from 'react';
import { FaRegCircle } from 'react-icons/fa';

import styles from './RoutePoints.module.scss';

const points = [
	{
		title: 'Arrived',
		status: 'on way'
	},
	{
		title: 'Current Position',
		status: '12 Jun, 8:00 AM'
	},
	{
		title: 'Departure',
		status: '10 Jun, 10:00 PM'
	}
];

const RoutePoints: FC = () => {
	return (
		<div className={styles.routePoints}>
			{points.map((point, index) => (
				<div className={clsx(styles.point, styles.arrival)} key={point.title}>
					<div
						className={clsx(
							styles.left,
							index !== 0 ? styles.finished : styles.onWay
						)}
					>
						<div className={styles.circle}></div>
						{index < points.length - 1 && <div className={styles.line}></div>}
					</div>
					<div className={styles.right}>
						<div className={styles.title}>{point.title}</div>
						<div className={styles.status}>{point.status}</div>
					</div>
					<div className={styles.position}></div>
					<div className={styles.departure}></div>
				</div>
			))}
		</div>
	);
};
export default RoutePoints;
