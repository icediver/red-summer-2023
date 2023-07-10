import DataStore from '@seald-io/nedb';
import { NextApiRequest, NextApiResponse } from 'next';

import { shipmentsData } from '@/data/cities';

const db = new DataStore();

const documents = shipmentsData.map(shipment => {
	return db.insertAsync(shipment);
});

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'GET') {
		await documents;
		const { number, city, date, department, sort: sortBy } = req.query;

		const numberFilter = number
			? { 'Shipment number': new RegExp(`${number}`, 'i') }
			: {};
		const cityFilter = city ? { Destination: new RegExp(`${city}`, 'i') } : {};
		const dateFilter = date
			? { 'Arrival date': new RegExp(`${date}`, 'i') }
			: {};
		const departmentFilter = department
			? {
					department: new RegExp(`${department}`, 'i')
			  }
			: {};

		const query = {
			...numberFilter,
			...cityFilter,
			...dateFilter,
			...departmentFilter
		};
		console.log(query);

		const shipments = await db.find(query).sort({ [sortBy as string]: 1 });
		console.log(shipments);
		res.status(200).json(shipments);
	}
}
