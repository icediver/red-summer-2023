import { FC } from 'react';

import styles from './SidebarHeader.module.scss';
import Logo from './logo/Logo';
import SidebarHeaderMenu from './sidebar-header-menu/SidebarHeaderMenu';

const SidebarHeader: FC = () => {
	return (
		<div className={styles.sidebarHeader}>
			<Logo />
			<SidebarHeaderMenu />
		</div>
	);
};

export default SidebarHeader;
