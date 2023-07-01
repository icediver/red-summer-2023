import { FC } from 'react'
import styles from './DashboardHeader.module.scss'
import Logo from './logo/Logo'
import DashBoardHeaderMenu from './dashboard-header-menu/DashBoardHeaderMenu'
const DashboardHeader: FC = () => {
    return <div className={styles.dashboardHeader}>
        <Logo />
        <DashBoardHeaderMenu />
    </div>
}

export default DashboardHeader
