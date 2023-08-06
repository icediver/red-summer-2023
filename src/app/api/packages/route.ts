import { ShipmentsService } from '../services/shipments.service';

export async function GET(req: Request) {
	console.log('packages route');
	const packages = await ShipmentsService.getAllParcels();
	return packages;
}
