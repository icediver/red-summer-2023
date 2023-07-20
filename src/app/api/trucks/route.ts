import { Category, PrismaClient, Truck } from '@prisma/client';
import { NextResponse } from 'next/server';

import { ShipmentsService } from '../services/shipments.service';

export interface ISearchTerm {
	categoryId?: number;
	number?: string;
	city?: string;
	date?: string;
	department?: number;
	sortBy?: string;
}

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const categoryId = searchParams.get('category') || '';
	const number = searchParams.get('number') || '';
	const city = searchParams.get('city') || '';
	const date = searchParams.get('date') || '';
	const department = searchParams.get('department') || '';
	const sortBy = searchParams.get('sort') || '';
	const searchTerm: ISearchTerm = {
		categoryId: +categoryId,
		number,
		city,
		date,
		department: +department,
		sortBy
	};
	console.log('route===', searchTerm);
	return ShipmentsService.getAll(searchTerm);
}
