import { BsBox } from 'react-icons/bs';
import { FaRegUser } from 'react-icons/fa';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { MdOutlinedFlag } from 'react-icons/md';
import { RiHome3Line } from 'react-icons/ri';

import { ISidebarMenuData } from '@/layout/sidebar/sidebar-interface/sidebar.interface';

export const sidebarMenuData: ISidebarMenuData[] = [
	{
		Icon: RiHome3Line,
		title: 'Dashboard',
		notification: '',
		route: '/dashboard'
	},
	{
		Icon: LiaShippingFastSolid,
		title: 'Shipments',
		notification: '',
		route: '/shipments'
	},
	{
		Icon: BsBox,
		title: 'Parcels',
		notification: 2,
		route: '/parcels'
	},
	{
		Icon: MdOutlinedFlag,
		title: 'Branches',
		notification: '',
		route: '/branches'
	},
	{
		Icon: FaRegUser,
		title: 'Clients',
		notification: '',
		route: '/clients'
	}
];
