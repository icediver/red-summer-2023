import DataStore from '@seald-io/nedb';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

import { shipmentsData } from '@/data/data';

const db = new DataStore();

const documents = shipmentsData.map(shipment => {
	return db.insertAsync(shipment);
});

export async function GET(req: Request, res: NextApiResponse) {
	await documents;
	const { searchParams } = new URL(req.url);

	const number = searchParams.get('number');
	const city = searchParams.get('city');
	const date = searchParams.get('date');
	const department = searchParams.get('department');
	const sortBy = searchParams.get('sort');

	const numberFilter = number
		? { 'Shipment number': new RegExp(`${number}`, 'i') }
		: {};
	const cityFilter = city ? { Destination: new RegExp(`${city}`, 'i') } : {};
	const dateFilter = date ? { 'Arrival date': new RegExp(`${date}`, 'i') } : {};
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
	return NextResponse.json(shipments);
}
