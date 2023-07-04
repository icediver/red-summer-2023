import { FC, useState } from 'react'
import { IDashboardMenuData, dashboardMenuData } from './data/dashvoard-menu/dashboard.menu'
import styles from './DashboardMainMenu.module.scss'
import clsx from 'clsx'
import MenuItem from '../menu-item/MenuItem'

const DashboardMainMenu: FC = () => {
    const [isActive, setIsActive] = useState<number>(-1)
    return <div className={styles.dashboardMenu}>
        <div>
            {
                dashboardMenuData.map((item: IDashboardMenuData, index: number) => {
                    return <MenuItem
                        notification={item.notification}
                        Icon={item.Icon}
                        index={index}
                        title={item.title}
                        setIsActive={setIsActive}

                        isActive={
                            isActive === index}
                    />
                })
            }
        </div >
    </div>
}

export default DashboardMainMenu
