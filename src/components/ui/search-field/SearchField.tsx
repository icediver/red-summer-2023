import { ChangeEvent, FC } from 'react';
import { FiSearch } from 'react-icons/fi';

import styles from './SearchField.module.scss';

export interface ISearchField {
	// number: string;
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchField: FC<ISearchField> = ({ handleSearch }) => {
	return (
		<div className={styles.search}>
			<FiSearch size={22} />
			<input placeholder='Search by tracking number' onChange={handleSearch} />
		</div>
	);
};
export default SearchField;
