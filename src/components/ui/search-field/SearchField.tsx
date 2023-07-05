import { ChangeEvent, FC } from 'react';
import styles from './SearchField.module.scss'
import { FiSearch } from 'react-icons/fi';

export interface ISearchField {
    searchTerm: string
    handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchField: FC<ISearchField> = ({ searchTerm, handleSearch }) => {

    return (
        <div className={styles.search}>
            <FiSearch size={22} />
            <input placeholder='Search by tracking number' onChange={handleSearch} />
        </div>
    );
};
export default SearchField;
