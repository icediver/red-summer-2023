import DataStore from '@seald-io/nedb';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

import { shipmentsAvailable } from '@/data/data';

const db = new DataStore();

const documents = shipmentsAvailable.map(shipment => {
	return db.insertAsync(shipment);
});
type ResponseData = string;

export async function GET(
	req: NextApiRequest,
	{ params }: { params: { number: string } }
) {
	console.log('---handler----');
	const number = params.number;

	// if (isNaN(number) || typeof number !== 'number') {
	// 	res.status(400).send('Invalid request!!');
	// }
	const shipment = await db.find({ number });
	return NextResponse.json(shipment);
}
