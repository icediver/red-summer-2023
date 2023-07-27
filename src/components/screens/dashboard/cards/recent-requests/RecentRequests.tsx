import clsx from 'clsx';
import Link from 'next/link';
import { FC, useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';

import styles from './RecentRequests.module.scss';
import RecentItem from './recent-item/RecentItem';
import { recents } from '@/data/data';

const RecentRequests: FC = () => {
	return (
		<div className={styles.delayed}>
			<div className={styles.header}>
				<span>Recent requests</span>
				<Link href={'/'}>
					Show all
					<BiChevronRight size={16} />
				</Link>
			</div>
			{recents.map((recent, index) => {
				if (index > 2) return;
				return (
					<RecentItem recent={recent} index={index} key={recent.description} />
				);
			})}
		</div>
	);
};
export default RecentRequests;
