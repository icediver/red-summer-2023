import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, useEffect } from 'react';

import { IMenuItem } from '../sidebar-interface/sidebar.interface';

import styles from './MenuItem.module.scss';

const MenuItem: FC<IMenuItem> = ({ title, Icon, notification = 0, route }) => {
	const pathname = usePathname();
	useEffect(() => {
		console.log(pathname);
	}, [pathname]);
	return (
		<Link
			href={route}
			className={clsx(
				styles.menuItem,
				route === String(pathname) && styles.active
			)}
		>
			<div>
				<Icon size={22} />
				<span>{title}</span>
			</div>
			{notification !== '' && (
				<div className={styles.notification}>{notification}</div>
			)}
		</Link>
	);
};

export default MenuItem;
