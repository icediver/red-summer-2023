import cn from 'clsx';
import { Dispatch, FC, SetStateAction } from 'react';

import styles from './Sidebar.module.scss';
import SidebarFooter from './sidebar-footer/SidebarFooter';
import SidebarHeader from './sidebar-header/SidebarHeader';
import { ISidebar } from './sidebar-interface/sidebar.interface';
import SidebarMainMenu from './sidebar-main-menu/SidebarMainMenu';

const Sidebar: FC<ISidebar> = ({ isOpen }) => {
	return (
		<div
			className={cn(styles.sidebar, {
				[styles.open]: isOpen
			})}
		>
			<div>
				<SidebarHeader />
				<SidebarMainMenu />
			</div>
			<SidebarFooter />
		</div>
	);
};

export default Sidebar;
