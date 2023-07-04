import Image from 'next/image'
import { FC } from 'react'

import truckImage from '@/assets/images/track.png'

import styles from './CardShipment.module.scss'
import { ICardShipment, IItemsCardShipment } from './card-shipment.interface'
import clsx from 'clsx'
import { log } from 'console'

const CardShipment: FC<ICardShipment> = ({
    route,
    departure,
    available,
    number,
    truck,
    capacity
}) => {
    const percent = Math.round(+available.value / capacity * 100)
    const width = { width: `${percent}%` }
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.leftSideHeader}>
                    <div className={styles.route}>{route}</div>
                    <div className={styles.departure}>{departure}</div>
                </div>
                <div className={styles.percent}>{percent}%</div>
            </div>
            <div className={styles.main}>
                <div className={styles.leftColumn}>
                    <div className={styles.title}>{available.title}</div>
                    <div className={styles.value}>{available.value}/{capacity}</div>
                    <div className={styles.title}>{number.title}</div>
                    <div className={styles.value}>{number.value}</div>
                    <div className={styles.title}>{truck.title}</div>
                    <div className={styles.value}>{truck.value}</div>
                </div>
                <div className={styles.rightColumn}>
                    <div className={styles.truck}>
                        <Image src={truckImage} alt='truck' />
                        <div className={styles.progress}>
                            <div className={clsx(styles.total, {
                                [styles.green]: percent <= 30,
                                [styles.yellow]: 30 < percent && percent < 70,
                                [styles.red]: percent >= 70,
                            })} style={width}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default CardShipment
