import { FC } from 'react';

import styles from './SidebarHeaderMenu.module.scss';
import {
	ISidebarHeaderMenuData,
	sidebarHeaderMenuData
} from './data/sidebar-header-menu-data';

const SidebarHeaderMenu: FC = () => {
	return (
		<div className={styles.sidebarMenu}>
			{sidebarHeaderMenuData.map((menuItem: ISidebarHeaderMenuData) => {
				return (
					<div className={styles.menuItem} key={menuItem.title}>
						<div>
							<menuItem.Icon size={22} />
							<span>{menuItem.title}</span>
						</div>
						<div className={styles.notification}>{menuItem.notification}</div>
					</div>
				);
			})}
		</div>
	);
};

export default SidebarHeaderMenu;
