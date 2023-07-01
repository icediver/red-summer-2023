import Button from '@/ui/button/Button'
import { FC, useRef, useState } from 'react'
import { MdAdd } from 'react-icons/md'
import styles from './DashboardFooter.module.scss'
import Image from 'next/image'
import { BsThreeDots } from 'react-icons/bs'
import { LuLogOut, LuSettings2 } from 'react-icons/lu'
import { useOutside } from '@/hooks/useOutside'


const DashboardFooter: FC = () => {
    const { ref, isShow, setIsShow } = useOutside(false)
    return <div className={styles.footer}>
        <Button className='mx-auto  w-[250px]'>
            <MdAdd color='white' />
            Create shipment
        </Button>
        <div className={styles.login} >
            <div className={'flex'}>
                <div className={styles.avatar}>
                    <Image
                        src={'https://i.pinimg.com/736x/ae/36/bb/ae36bb54f053b29e3397f17589892a28.jpg'}
                        alt=''
                        width={40}
                        height={40}
                    />
                </div>
                <div>
                    <div className={styles.name}>Darrel Steward</div>
                    <div className={styles.position}>Manager</div>
                </div>
            </div>
            <button className={styles.buttonLoginMenu} onClick={() => setIsShow(!isShow)}>
                <BsThreeDots size={28} color='#C2C6CF' />
            </button>
            {isShow &&
                <div className={styles.popup} ref={ref}>
                    <button><LuSettings2 />Settings</button>
                    <button><LuLogOut />Logout</button>
                </div>
            }
        </div>
    </div >
}

export default DashboardFooter
