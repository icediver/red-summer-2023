import { NextResponse } from 'next/server';

import { ShipmentsService } from '../services/shipments.service';

export async function GET(req: Request) {
	console.log('packages route');
	try {
		const packages = await ShipmentsService.getAvailableParcels();
		return NextResponse.json(packages);
	} catch (e) {
		throw new Error('Not found');
	}
}
