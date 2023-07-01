import { Dispatch, FC, SetStateAction } from 'react'
import styles from './Dashboard.module.scss'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import cn from 'clsx'
import DashboardHeader from './dashboard-header/DashboardHeader'
import DashboardMainMenu from './dashboard-main-menu/DashboardMainMenu'
import Button from '@/ui/button/Button'
import { MdAdd } from 'react-icons/md'
import DashboardFooter from './dashboard-footer/DashboardFooter'

interface IDashboard {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

const Dashboard: FC<IDashboard> = ({ isOpen, setIsOpen }) => {
    return <div
        className={cn(styles.dashboard, {
            [styles.open]: isOpen
        })}>
        <div>
            <DashboardHeader />
            <DashboardMainMenu />
        </div>
        <DashboardFooter />
    </div>
}

export default Dashboard
