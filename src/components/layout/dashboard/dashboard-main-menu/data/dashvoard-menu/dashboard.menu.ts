
import { IconType } from "react-icons"
import { RiHome3Line } from 'react-icons/ri'
import { LiaShippingFastSolid } from 'react-icons/lia'
import { BsBox } from 'react-icons/bs'
import { MdOutlinedFlag } from 'react-icons/md'
import { FaRegUser } from 'react-icons/fa'

export interface IDashboardMenuData {
    Icon: IconType
    title: string
    notification: number | string
}
export const dashboardMenuData: IDashboardMenuData[] = [
    {
        Icon: RiHome3Line,
        title: 'Dashboard',
        notification: ''
    },
    {
        Icon: LiaShippingFastSolid,
        title: 'Shipments',
        notification: ''
    },
    {
        Icon: BsBox,
        title: 'Parcels',
        notification: 2
    },
    {
        Icon: MdOutlinedFlag,
        title: 'Branches',
        notification: ''
    },
    {
        Icon: FaRegUser,
        title: 'Clients',
        notification: ''
    },
]
