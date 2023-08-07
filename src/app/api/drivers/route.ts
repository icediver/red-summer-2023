import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

import { ShipmentsService } from '../services/shipments.service';

export async function GET(req: Request, res: NextApiResponse) {
	console.log('drivers route');
	const drivers = await ShipmentsService.getAllDrivers();
	return NextResponse.json(drivers);
}
