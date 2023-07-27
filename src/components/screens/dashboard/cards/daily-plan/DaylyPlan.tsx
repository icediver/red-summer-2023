import { FC } from 'react';

import styles from './DaylyPlan.module.scss';
import Speedometer from './speedometer/Speedometer';

const DaylyPlan: FC = () => {
	return (
		<div className={styles.dailyPlan}>
			<div className={styles.left}>
				<div className={styles.header}>
					<span>Daily plan</span>Wed, 19 Jul
				</div>
				<div className={styles.shipments}>
					<div className={styles.title}>Shipments processed</div>
					<div className={styles.value}>
						<span>1010</span>/2020
					</div>
				</div>
				<div className={styles.shipments}>
					<div className={styles.title}>Orders processed</div>
					<div className={styles.value}>
						<span>650</span>/1300
					</div>
				</div>
				<div className={styles.shipments}>
					<div className={styles.title}>Requests processed</div>
					<div className={styles.value}>
						<span>10</span>/20
					</div>
				</div>
			</div>
			<div className={styles.right}>
				<Speedometer />
			</div>
		</div>
	);
};
export default DaylyPlan;
