import { FC } from 'react'
import dynamic from 'next/dynamic'
import styles from './SearchTracking.module.scss'
import { FiSearch } from 'react-icons/fi'
import { cities, departments } from '@/data/cities'
import SelectFilters from '@/ui/select-filters/SelectFilters'
const DynamicClock = dynamic(() => import('@/ui/clock/Clock'), { ssr: false })

const SearchTracking: FC = () => {
    return <div className={styles.searchContainer}>
        <FiSearch size={22} />
        <div className={styles.select}>
            <SelectFilters options={cities} title={'City: '} />
            <SelectFilters options={departments} title={'Department: '} />
            <DynamicClock />
        </div>
        <input className={styles.search} placeholder='Search by tracking number' />
    </div>
}

export default SearchTracking
