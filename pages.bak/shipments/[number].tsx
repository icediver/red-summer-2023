import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { FC } from 'react';

import Layout from '@/layout/layout/Layout';

import CardShipment from '@/screens/shipments/available-tab/card-shipment/CardShipment';
import { ICardShipment } from '@/screens/shipments/available-tab/card-shipment/card-shipment.interface';
import TruckLoading from '@/screens/shipments/truck-loading/TruckLoading';
import { IAvailablePackage } from '@/screens/shipments/truck-loading/available-package.interface';
import { TrackingService } from '@/services/tracking.service';

const AvailablePage: NextPage<{
	data: ICardShipment[];
	packages: IAvailablePackage[];
}> = ({ data, packages }) => {
	return (
		<Layout>
			<TruckLoading data={data[0]} packages={packages} />
		</Layout>
	);
};
export const getStaticPaths: GetStaticPaths = async () => {
	const { data } = await TrackingService.getAvailable();
	const paths = data.map(a => ({
		params: { number: String(a.number) }
	}));
	return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<{}> = async ({ params }) => {
	try {
		const { data } = await TrackingService.getAvailableByNumber(
			String(params?.number)
		);
		const { data: packages } = await TrackingService.getAvailablePackages();
		return {
			props: {
				data,
				packages
			}
		};
	} catch (error) {
		console.log('error getStaticProps');
		return {
			notFound: true
		};
	}
};

export default AvailablePage;
