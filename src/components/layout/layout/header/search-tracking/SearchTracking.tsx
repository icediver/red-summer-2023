import { Dispatch, FC, SetStateAction } from 'react'
import dynamic from 'next/dynamic'
import styles from './SearchTracking.module.scss'
import { FiSearch } from 'react-icons/fi'
import { IOption, cities, departments } from '@/data/cities'
import SelectFilters from '@/ui/select-filters/SelectFilters'
import { useSearch } from '@/hooks/useSearch'
import SearchList from './search-list/SearchList'
import SearchField, { ISearchField } from '@/ui/search-field/SearchField'
import { OnChangeValue } from 'react-select'
const DynamicClock = dynamic(() => import('@/ui/clock/Clock'), { ssr: false })

interface ISearchTrackNumber {
    searchField: ISearchField
    handleChangeCity: (event: OnChangeValue<IOption, boolean>) => void
    handleChangeDepartment: (event: OnChangeValue<IOption, boolean>) => void
}

const SearchTracking: FC<ISearchTrackNumber> = ({ searchField, handleChangeCity, handleChangeDepartment }) => {
    return <div className={styles.searchContainer}>
        <div className={styles.select}>
            <SelectFilters options={cities} title={'City: '} instanceId='cities-filter' handleChange={handleChangeCity} />

            <SelectFilters options={departments} title={'Department: '} instanceId='departments-filter' handleChange={handleChangeDepartment} />
            <DynamicClock />
        </div>
        <SearchField searchTerm={searchField.searchTerm} handleSearch={searchField.handleSearch} />
    </div>
}

export default SearchTracking
