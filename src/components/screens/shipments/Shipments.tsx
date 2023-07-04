import { FC, useState } from "react";
import styles from './Shipments.module.scss';
import Button from '@/ui/button/Button'
import SelectFilters from '@/ui/select-filters/SelectFilters'
import { sortBy } from '@/data/cities'
import ShipmentsTableHeader from './shipments-header/ShipmentsHeader'
import ShipmentsTable from './shipments-table/ShipmentsTable'
import AvailableTabs from "./available-tabs/AvailableTabs";
import clsx from "clsx";



const Shipments: FC = () => {
    const [activeTab, setActiveTab] = useState<number>(2)
    return <div className={styles.shipments}>
        <div className={styles.shipmentsHeader}>
            <div className={styles.leftSide}>
                <span>Shipments</span>
                <button
                    onClick={() => setActiveTab(1)}
                    className={clsx(styles.button, {
                        [styles.activeTab]: activeTab === 1
                    })}>Arrival(20)</button>
                <button
                    onClick={() => setActiveTab(2)}
                    className={clsx(styles.button, {
                        [styles.activeTab]: activeTab === 2
                    })} >Available(5)</button>
                <button
                    onClick={() => setActiveTab(3)}
                    className={clsx(styles.button, {
                        [styles.activeTab]: activeTab === 3
                    })}>Departure(32)</button>
            </div>
            <div className={styles.rightSide}>
                <SelectFilters title='Sort by:' options={sortBy} variant='second' instanceId='sort-by-filter' />
                <SelectFilters title='Arival date:' options={sortBy} variant='second' instanceId='arival-date-filter' />
            </div>
        </div>
        {
            activeTab === 1 ? <>

                <ShipmentsTableHeader />
                <ShipmentsTable />
            </> : activeTab === 2 ? <AvailableTabs /> : <></>
        }

    </div >
}

export default Shipments
