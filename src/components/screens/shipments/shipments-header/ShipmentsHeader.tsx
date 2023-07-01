import { FC } from 'react'
import styles from './ShipmentsHeader.module.scss'
import { shipmentsMenu } from '@/data/cities'
import clsx from 'clsx'

const ShipmentsTableHeader: FC = () => {
    return <div className={clsx(styles.tableHeader, 'grid grid-cols-16')}>
        {
            shipmentsMenu.map(menuItem => <div key={menuItem}>{menuItem}</div>)
        }
    </div>
}

export default ShipmentsTableHeader
