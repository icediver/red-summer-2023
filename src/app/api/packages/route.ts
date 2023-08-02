import DataStore from '@seald-io/nedb';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

import { ShipmentsService } from '../services/shipments.service';

export async function GET(req: Request, res: NextApiResponse) {
	console.log('packages route');
	const packages = await ShipmentsService.getAvailableParcels();
	return packages;
}
