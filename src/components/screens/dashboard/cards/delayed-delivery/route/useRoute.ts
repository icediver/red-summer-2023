import { useQuery } from '@tanstack/react-query';

import { GeocoderService } from '@/services/geocoder.service';

export const useRoute = (route: string) => {
	const cities = route.split(' - ');
	const departure = cities[0].toLowerCase();
	const destination = cities[1].toLowerCase();

	const { data } = useQuery(['get coordinates', route], async () => {
		return {
			departure: {
				name: departure,
				coordinates: await GeocoderService.getCoordinates(departure)
			},
			destination: {
				name: destination,
				coordinates: await GeocoderService.getCoordinates(destination)
			}
		};
	});

	return data;
};
