import DataStore from '@seald-io/nedb';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

import { availablePackages } from '@/data/data';

const db = new DataStore();

const documents = availablePackages.map(pack => {
	return db.insertAsync(pack);
});

export async function GET(req: NextApiRequest, res: NextApiResponse) {
	await documents;

	const packages = await db.findAsync({});
	return NextResponse.json(packages);
}
