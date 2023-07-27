import { IconType } from 'react-icons';
import { IoNotificationsOutline } from 'react-icons/io5';
import { PiWarningCircleBold } from 'react-icons/pi';

export interface ISidebarHeaderMenuData {
	Icon: IconType;
	title: string;
	notification: number;
}
export const sidebarHeaderMenuData: ISidebarHeaderMenuData[] = [
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
];
