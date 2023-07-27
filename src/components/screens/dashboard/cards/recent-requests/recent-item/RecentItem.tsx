import clsx from 'clsx';
import { FC } from 'react';

import styles from './RecentItem.module.scss';
import { IRecent } from '@/data/data';

const RecentItem: FC<{ recent: IRecent; index: number }> = ({
	recent,
	index
}) => {
	return (
		<>
			<button
				className={clsx(styles.availableItem, {
					[styles.noBorder]: index === 2
				})}
			>
				<div className={styles.left}>
					<div className={clsx(styles.icon, { [styles.mirror]: index === 2 })}>
						{recent.icon}
					</div>
					<div className={styles.information}>
						<span className={styles.number}>{recent.title}</span>
						<div className={styles.destination}>{recent.description}</div>
					</div>
				</div>
				<div className={styles.right}>
					<span>{recent.value}</span>
					<div className={clsx(styles.line)} />
				</div>
			</button>
		</>
	);
};
export default RecentItem;
