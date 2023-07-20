import { PrismaClient } from '@prisma/client';

import { ShipmentsService } from '@/app/api/services/shipments.service';

const prisma = new PrismaClient();
export async function GET(
	req: Request,
	{ params }: { params: { id: number; number: string } }
) {
	const id = +params.id;

	return ShipmentsService.getParcelById(id);
}
export async function DELETE(
	req: Request,
	{ params }: { params: { id: number; number: string } }
) {
	const id = +params.id;
	const number = params.number;
	return ShipmentsService.deleteParcelsFromTruck(number, id);
}
