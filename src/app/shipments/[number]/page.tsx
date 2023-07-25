import Layout from '@/components/layout/layout/Layout';

import TruckLoading from '@/screens/shipments/truck-loading/TruckLoading';
import { TruckService } from '@/services/trucks.service';

export default async function Page({
	params: { number }
}: {
	params: { number: string };
}) {
	const { props } = await getData(number);
	return (
		<Layout>
			{props && <TruckLoading data={props.data} packages={props.packages} />}
		</Layout>
	);
}
export async function generateStaticParams() {
	const { data } = await TruckService.getAll({ category: '2' });

	const paths = data?.shipments?.map(a => ({
		params: { number: String(a.number) }
	}));

	return paths;
}

export async function getData(number: string) {
	try {
		const { data } = await TruckService.getAvailableByNumber(String(number));
		// const { data } = await TrackingService.getAvailableByNumber(String(number));
		const { data: packages } = await TruckService.getAvailablePackages();
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
}
