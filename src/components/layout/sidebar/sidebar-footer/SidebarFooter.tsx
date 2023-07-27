import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import { FC } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { LuLogIn, LuLogOut, LuSettings2 } from 'react-icons/lu';
import { MdAdd } from 'react-icons/md';

import Button from '@/ui/button/Button';

import unknownUser from '@/assets/images/unknown-user.jpg';

import { useOutside } from '@/hooks/useOutside';

import styles from './SidebarFooter.module.scss';

const SidebarFooter: FC = () => {
	const { ref, isShow, setIsShow } = useOutside(false);
	const { data } = useSession();
	return (
		<div className={styles.footer}>
			<Button className='mx-auto  w-[250px]'>
				<MdAdd color='white' />
				Create shipment
			</Button>
			<div className={styles.login}>
				<div className={'flex'}>
					<div className={styles.avatar}>
						<Image
							src={data ? (data?.user?.image as string) : unknownUser}
							alt=''
							width={40}
							height={40}
						/>
					</div>
					<div>
						<div className={styles.name}>{data?.user?.name}</div>
						<div className={styles.position}>{data?.user?.email}</div>
					</div>
				</div>
				<button
					className={styles.buttonLoginMenu}
					onClick={() => setIsShow(!isShow)}
				>
					<BsThreeDots size={28} color='#C2C6CF' />
				</button>
				{isShow && (
					<div className={styles.popup} ref={ref}>
						{data ? (
							<>
								{' '}
								<button>
									<LuSettings2 />
									Settings
								</button>
								<button onClick={() => signOut()}>
									<LuLogOut />
									Logout
								</button>
							</>
						) : (
							<button onClick={() => signIn()}>
								<LuLogIn />
								Login
							</button>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default SidebarFooter;
