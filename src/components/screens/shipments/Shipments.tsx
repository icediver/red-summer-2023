import { FC } from 'react'
import styles from './Shipments.module.scss'
import Button from '@/ui/button/Button'
import SelectFilters from '@/ui/select-filters/SelectFilters'
import { sortBy } from '@/data/cities'
import ShipmentsTableHeader from './shipments-header/ShipmentsHeader'
import ShipmentsTable from './shipments-table/ShipmentsTable'

const Shipments: FC = () => {
    return <div className={styles.shipments}>
        <div className={styles.shipmentsHeader}>
            <div className={styles.leftSide}>
                <span>Shipments</span>
                <Button className={'w-20 !py-2'}>Arival</Button>
                <Button className={'w-20 !py-2'} variant='second'>Available</Button>
                <Button className={'w-20 !py-2'} variant='second'>Departure</Button>
            </div>
            <div className={styles.rightSide}>
                <SelectFilters title='Sort by:' options={sortBy} variant='second' />
                <SelectFilters title='Arival date:' options={sortBy} variant='second' />
            </div></div>
        <ShipmentsTableHeader />
        <ShipmentsTable />
    </div>
}

export default Shipments
