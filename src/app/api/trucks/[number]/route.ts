import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

import { ShipmentsService } from '../../services/shipments.service';

const prisma = new PrismaClient();
export async function GET(
	req: Request,
	{ params }: { params: { number: string } }
) {
	const number = params.number;
	return ShipmentsService.getByTrackNumber(number);
}

export async function PATCH(
	req: Request,
	{ params }: { params: { number: string } }
) {
	const { parcelsId } = await req.json();
	const number = params.number;
	const parcels = parcelsId.map((el: number) => ({ id: el }));
	return ShipmentsService.addParcelsToTruck(number, parcels);
}
