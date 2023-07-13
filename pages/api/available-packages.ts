import DataStore from '@seald-io/nedb';
import { NextApiRequest, NextApiResponse } from 'next';

import { availablePackages } from './data/data';

const db = new DataStore();

const documents = availablePackages.map(pack => {
	return db.insertAsync(pack);
});

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'GET') {
		await documents;

		const packages = await db.findAsync({});
		res.status(200).json(packages);
	}
}
