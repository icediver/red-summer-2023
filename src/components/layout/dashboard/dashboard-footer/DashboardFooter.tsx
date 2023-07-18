import Button from '@/ui/button/Button'
import { FC, useRef, useState } from 'react'
import { MdAdd } from 'react-icons/md'
import styles from './DashboardFooter.module.scss'
import Image from 'next/image'
import { BsThreeDots } from 'react-icons/bs'
import { LuLogIn, LuLogOut, LuSettings2 } from 'react-icons/lu'
import { useOutside } from '@/hooks/useOutside'
import { useSession, signIn, signOut } from 'next-auth/react'
import unknownUser from '@/assets/images/unknown-user3.jpg'

const DashboardFooter: FC = () => {
    const { data: session } = useSession()
    const { ref, isShow, setIsShow } = useOutside(false)
    console.log(session)
    return <div className={styles.footer}>
        <Button className='mx-auto  w-[250px]'>
            <MdAdd color='white' />
            Create shipment
        </Button>
        <div className={styles.login} >
            <div className={'flex'}>
                <div className={styles.avatar}>
                    <Image
                        src={session ? session?.user?.image as string : unknownUser}
                        // src={'https://i.pinimg.com/736x/ae/36/bb/ae36bb54f053b29e3397f17589892a28.jpg'}
                        alt='avatar'
                        width={40}
                        height={40}
                    />
                </div>
                <div>
                    <div className={styles.name}>{session?.user?.name}</div>
                    <div className={styles.position}>{session?.user?.email}</div>
                </div>
            </div>
            <button className={styles.buttonLoginMenu} onClick={() => setIsShow(!isShow)}>
                <BsThreeDots size={28} color='#C2C6CF' />
            </button>
            {isShow &&
                <div className={styles.popup} ref={ref}>
                    {
                        session
                            ? (<>  <button><LuSettings2 />Settings</button>
                                <button onClick={() => signOut()}>
                                    <LuLogOut />Logout</button></>)
                            : (<button onClick={() => signIn()}><LuLogIn />Login</button>)}
                </div>
            }
        </div>
    </div >
}

export default DashboardFooter
