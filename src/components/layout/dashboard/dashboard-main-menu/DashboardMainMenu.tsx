import clsx from 'clsx';
import { FC, useState } from 'react';

import MenuItem from '../menu-item/MenuItem';

import styles from './DashboardMainMenu.module.scss';
import {
	IDashboardMenuData,
	dashboardMenuData
} from './data/dashvoard-menu/dashboard.menu';

const DashboardMainMenu: FC = () => {
	const [isActive, setIsActive] = useState<number>(-1);
	return (
		<div className={styles.dashboardMenu}>
			<div>
				{dashboardMenuData.map((item: IDashboardMenuData, index: number) => {
					return (
						<MenuItem
							notification={item.notification}
							Icon={item.Icon}
							index={index}
							title={item.title}
							setIsActive={setIsActive}
							key={item.title + index}
							isActive={isActive === index}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default DashboardMainMenu;
