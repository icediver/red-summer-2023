import { FC } from 'react'
import styles from './DashBoardHeaderMenu.module.scss'

import { IDashboardHeaderMenuData, dashboardHeaderMenuData } from './data/dashboard-header-menu-data'

const DashBoardHeaderMenu: FC = () => {
    return <div className={styles.dashboardMenu}>
        {
            dashboardHeaderMenuData.map((menuItem: IDashboardHeaderMenuData) => {
                return <div className={styles.menuItem} key={menuItem.title
                }>
                    <div>
                        <menuItem.Icon size={22} />
                        <span>{menuItem.title}</span>
                    </div>
                    <div className={styles.notification}>{menuItem.notification}</div>
                </div>
            })
        }

    </div>
}

export default DashBoardHeaderMenu
