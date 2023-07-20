import DataStore from '@seald-io/nedb';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

import { shipmentsAvailable } from '@/data/data';

const db = new DataStore();

const documents = shipmentsAvailable.map(shipment => {
	return db.insertAsync(shipment);
});

export async function GET(req: Request, res: NextApiResponse) {
	await documents;
	const { searchParams } = new URL(req.url);

	const number = searchParams.get('number');
	const numberFilter = number ? { number: new RegExp(`${number}`, 'i') } : {};
	const city = searchParams.get('city');
	const cityFilter = city ? { route: new RegExp(`${city}`, 'i') } : {};
	const date = searchParams.get('date');
	const dateFilter = date ? { departure: new RegExp(`${date}`, 'i') } : {};
	const department = searchParams.get('department');
	const departmentFilter = department
		? {
				department: new RegExp(`${department}`, 'i')
		  }
		: {};
	const sortBy = searchParams.get('sort');

	const query = {
		...numberFilter,
		...cityFilter,
		...dateFilter,
		...departmentFilter
	};

	const shipments = await db.find(query).sort({ [sortBy as string]: 1 });
	return NextResponse.json(shipments);
}
