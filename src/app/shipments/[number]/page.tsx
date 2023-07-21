import Layout from '@/components/layout/layout/Layout';

import TruckLoading from '@/screens/shipments/truck-loading/TruckLoading';
import { TrackingService } from '@/services/tracking.service';

export default async function Page({
	params: { number }
}: {
	params: { number: string };
}) {
	const { props } = await getData(number);
	console.log(props);
	return (
		<Layout>
			{props && <TruckLoading data={props.data[0]} packages={props.packages} />}
		</Layout>
	);
}
export async function generateStaticParams() {
	const { data } = await TrackingService.getAvailable();
	const paths = data.map(a => ({
		params: { number: String(a.number) }
	}));

	return paths;
}

export async function getData(number: string) {
	try {
		const { data } = await TrackingService.getAvailableByNumber(String(number));
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
}
