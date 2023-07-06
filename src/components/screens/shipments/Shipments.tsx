import { ChangeEvent, FC, useEffect, useState } from "react";
import styles from './Shipments.module.scss';
import SelectFilters from '@/ui/select-filters/SelectFilters'
import { IOption, IShipmentData, sortBy } from '@/data/cities'
import ShipmentsTableHeader from './shipments-header/ShipmentsHeader'
import ShipmentsTable from './shipments-table/ShipmentsTable'
import AvailableTabs from "./available-tabs/AvailableTabs";
import clsx from "clsx";
import { useSearch } from "@/hooks/useSearch";
import SearchTracking from "@/layout/layout/header/search-tracking/SearchTracking";
import { getArivalDate, getSelectOptions, getSortKeys, sortArrival, sortShipmentData } from "@/shared/getArivalDate";
import { OnChangeValue } from "react-select";



const Shipments: FC = () => {
    const { isSuccess, handleSearch, data, searchTerm, handleChangeCity, handleChangeDepartment } = useSearch()
    const [shipments, setShipments] = useState<IShipmentData[]>([])
    const [activeTab, setActiveTab] = useState<number>(1)
    const dates = getArivalDate(data || [])

    const sort = getSortKeys(data || [])

    useEffect(() => { if (data) setShipments(data) }, [data])



    function handleChangeDate(date: OnChangeValue<IOption, boolean>) {
        if (!data) return
        const shipmentsOfCurrentDate = data.filter(el => el["Arrival date"].includes((date as IOption)?.value || ''))
        setShipments(shipmentsOfCurrentDate)

    }

    function handleSortBy(sortBy: OnChangeValue<IOption, boolean>) {
        if (!data) return
        // const sort = sortShipmentData(data, sortBy as IOption)
        // setShipments([...sort])
        const sort = sortArrival(data).sortData(sortBy as IOption).newData
        setShipments([...sort])

    }



    return <div className={styles.shipments}>
        <SearchTracking searchField={{ searchTerm, handleSearch }} handleChangeCity={handleChangeCity} handleChangeDepartment={handleChangeDepartment} />
        <div className={styles.shipmentsHeader}>
            <div className={styles.leftSide}>
                <span>Shipments</span>
                <button
                    onClick={() => setActiveTab(1)}
                    className={clsx(styles.button, {
                        [styles.activeTab]: activeTab === 1
                    })}>Arrival({data?.length})</button>
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
                <SelectFilters
                    title='Sort by:'
                    options={getSelectOptions(sort)}
                    variant='second'
                    instanceId='sort-by-filter'
                    handleChange={handleSortBy}

                />

                <SelectFilters
                    title='Arival date:'
                    options={getSelectOptions(dates)}
                    variant='second'
                    instanceId='arival-date-filter'
                    handleChange={handleChangeDate} />
            </div>
        </div>
        {
            activeTab === 1 ? <>

                <ShipmentsTableHeader />
                <ShipmentsTable shipments={shipments} />
            </> : activeTab === 2 ? <AvailableTabs /> : <></>
        }

    </div >
}

export default Shipments
