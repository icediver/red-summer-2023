import { FC } from 'react';
import { OnChangeValue } from 'react-select';

import { IOption } from '@/ui/select-filters/select.types';

import { IArrivalData } from '../arrival-tab/arrival-tab.interface';

import ShipmentsTableHeader from './shipments-header/ShipmentsHeader';
import ShipmentsTable from './shipments-table/ShipmentsTable';

const DepartureTab: FC<{
	shipments: IArrivalData[];
	handleSort: (newValue: OnChangeValue<IOption, boolean> | string) => void;
}> = ({ shipments, handleSort }) => {
	return (
		<>
			<ShipmentsTableHeader handleSort={handleSort} />
			{shipments && <ShipmentsTable shipments={shipments} />}
		</>
	);
};
export default DepartureTab;
