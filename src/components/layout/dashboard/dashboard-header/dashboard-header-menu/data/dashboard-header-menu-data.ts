import { IconType } from "react-icons"
import { PiWarningCircleBold } from "react-icons/pi"
import { IoNotificationsOutline } from 'react-icons/io5'

export interface IDashboardHeaderMenuData {
    Icon: IconType
    title: string
    notification: number
}
export const dashboardHeaderMenuData: IDashboardHeaderMenuData[] = [
    {
        Icon: PiWarningCircleBold,
        title: 'Requests',
        notification: 10
    },
    {
        Icon: IoNotificationsOutline,
        title: 'Notifications',
        notification: 10
    }
]
