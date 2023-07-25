import DataStore from '@seald-io/nedb';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

import { ShipmentsService } from '../services/shipments.service';

import { availablePackages } from '@/data/data';
import { TruckService } from '@/services/trucks.service';

const db = new DataStore();

const documents = availablePackages.map(pack => {
	return db.insertAsync(pack);
});

export async function GET(req: NextApiRequest, res: NextApiResponse) {
	await documents;
	console.log('packages route');
	// const packages = await db.findAsync({});
	const packages = await ShipmentsService.getAvailableParcels();
	// const packages = await ShipmentsService.getAllParcels();
	return packages;
}
