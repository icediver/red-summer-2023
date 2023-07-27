import { FC, useState } from 'react';

import MenuItem from '../menu-item/MenuItem';
import { ISidebarMenuData } from '../sidebar-interface/sidebar.interface';

import styles from './SidebarMainMenu.module.scss';
import { sidebarMenuData } from './data/sidebar-menu/sidebar.menu';

const SidebarMainMenu: FC = () => {
	return (
		<div className={styles.sidebarMenu}>
			<div>
				{sidebarMenuData.map((item: ISidebarMenuData, index: number) => {
					return (
						<MenuItem
							notification={item.notification}
							Icon={item.Icon}
							route={item.route}
							index={index}
							title={item.title}
							key={item.title + index}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default SidebarMainMenu;
