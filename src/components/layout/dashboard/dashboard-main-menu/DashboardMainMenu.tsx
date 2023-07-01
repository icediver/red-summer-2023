import { FC, useState } from 'react'
import { IDashboardMenuData, dashboardMenuData } from './data/dashvoard-menu/dashboard.menu'
import styles from './DashboardMainMenu.module.scss'
import clsx from 'clsx'

const DashboardMainMenu: FC = () => {
    const [isActive, setIsActive] = useState<number>(-1)
    return <div className={styles.dashboardMenu}>
        <div>
            {
                dashboardMenuData.map((item: IDashboardMenuData, index: number) => {
                    return <div
                        key={item.title}
                        className={clsx(styles.menuItem, {
                            [styles.active]: isActive === index
                        })}
                    >

                        <button
                            onClick={() => setIsActive(index)}>
                            <item.Icon size={22} />
                            <span>{item.title}</span>

                        </button>
                        {
                            item.notification !== '' && <div className={styles.notification}>{item.notification}</div>

                        }
                    </div>
                })
            }
        </div>
    </div>
}

export default DashboardMainMenu
