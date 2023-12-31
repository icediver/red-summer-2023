import { PrismaClient } from '@prisma/client';

import Layout from '@/components/layout/layout/Layout';

import TruckLoading from '@/screens/shipments/truck-loading/TruckLoading';
import { TruckService } from '@/services/trucks.service';

const prisma = new PrismaClient();

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
	try {
		const shipments = await prisma.truck.findMany({
			where: { categoryId: 2 }
		});
		const paths = shipments?.map(a => ({
			params: { number: String(a.number) }
		}));

		return paths;
	} catch (e) {
		console.log(e);
		return [];
	}
}

async function getData(number: string) {
	try {
		const { data } = await TruckService.getAvailableByNumber(String(number));
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
