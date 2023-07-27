'use client';

import cn, { clsx } from 'clsx';
import { FC, PropsWithChildren, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import Sidebar from '../sidebar/Sidebar';

import styles from './Layout.module.scss';

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
	return (
		<section className={styles.layout}>
			<div className={styles.border}>
				<div className={styles.content}>
					<Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
					<div
						className={cn(styles.collapseButton, {
							[styles.closed]: isSidebarOpen
						})}
					>
						<button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
							{!isSidebarOpen ? (
								<FaChevronLeft color='#C2C6CF' className={styles.icon} />
							) : (
								<FaChevronRight color='#C2C6CF' className={styles.icon} />
							)}
						</button>
					</div>

					<div
						className={clsx(
							styles.rightSide,
							isSidebarOpen ? 'w-full' : 'w-4/5'
						)}
					>
						<div
							className={clsx(styles.children, {
								[styles.open]: isSidebarOpen
							})}
						>
							{children}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Layout;
