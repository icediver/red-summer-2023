import { useQuery } from '@tanstack/react-query';
import { FC, useEffect } from 'react';

import { IArrivalTab } from './arrival-tab.interface';
import ShipmentsTableHeader from './shipments-header/ShipmentsHeader';
import ShipmentsTable from './shipments-table/ShipmentsTable';
import { TrackingService } from '@/services/tracking.service';

const ArrivalTab: FC<IArrivalTab> = ({
	handleSort,
	searchParams,
	setShipments,
	setArrivalLength
}) => {
	const { isSuccess, data } = useQuery(
		['search arrival', searchParams],
		() => {
			return TrackingService.getArrival(searchParams);
		},
		{ select: ({ data }) => data }
	);
	useEffect(() => {
		if (data) {
			setShipments(data);
			setArrivalLength(data.categoryCount[0]['Arrival']);
		}
	}, [data]);
	return (
		<>
			<ShipmentsTableHeader handleSort={handleSort} />
			{data && <ShipmentsTable shipments={data.shipments} />}
		</>
	);
};
export default ArrivalTab;
