import DataStore from '@seald-io/nedb';
import { NextApiRequest, NextApiResponse } from 'next';

import { shipmentsAvailable } from './data/data';

const db = new DataStore();

const documents = shipmentsAvailable.map(shipment => {
	return db.insertAsync(shipment);
});

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'GET') {
		await documents;
		const { number, city, date, department, sort: sortBy } = req.query;
		const numberFilter = number ? { number: new RegExp(`${number}`, 'i') } : {};
		const cityFilter = city ? { route: new RegExp(`${city}`, 'i') } : {};
		const dateFilter = date ? { departure: new RegExp(`${date}`, 'i') } : {};
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

		const shipments = await db.find(query).sort({ [sortBy as string]: 1 });
		res.status(200).json(shipments);
	}
}
