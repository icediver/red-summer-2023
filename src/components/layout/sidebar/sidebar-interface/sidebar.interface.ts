import { Dispatch, SetStateAction } from 'react';
import { IconType } from 'react-icons';

export interface ISidebar {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}
export interface ISidebarMenuData {
	Icon: IconType;
	title: string;
	notification: number | string;
	route: string;
}

export interface IMenuItem {
	title: string;
	Icon: IconType;
	notification: string | number;
	index: number;
	className?: string;
	route: string;
}
