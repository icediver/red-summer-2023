import DataStore from '@seald-io/nedb';
import type { NextApiRequest, NextApiResponse } from 'next';

import { shipmentsAvailable } from '../data/data';

const db = new DataStore();

const documents = shipmentsAvailable.map(shipment => {
	return db.insertAsync(shipment);
});
type ResponseData = string;

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const number = req.query.number;

	// if (isNaN(number) || typeof number !== 'number') {
	// 	res.status(400).send('Invalid request!!');
	// }
	if (req.method === 'GET') {
		const shipment = await db.find({ number });
		console.log(shipment);

		res.status(200).json(shipment);
	}
}
