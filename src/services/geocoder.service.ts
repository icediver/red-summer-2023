import { GEOCODER_URL } from '@/api/config/api.config';
import axiosClassic from '@/api/interceptors/axiosClassic';

import { ICoordinates, IResponseGeocoder } from './geocoder.interface';

export const GeocoderService = {
	async getCoordinates(city: string) {
		try {
			const { data } = await axiosClassic.get<{ Response: IResponseGeocoder }>(
				`${GEOCODER_URL}/${city}`
			);
			let dataResponse = data.Response.View[0];
			if (!data.Response.View[0]) {
				const { data } = await axiosClassic.get<{
					Response: IResponseGeocoder;
				}>(`${GEOCODER_URL}${city}`);
				dataResponse = data.Response.View[0];
			}
			const lat: number =
				dataResponse.Result[0].Location.NavigationPosition[0].Latitude;
			const lng: number =
				dataResponse.Result[0].Location.NavigationPosition[0].Longitude;

			const coordinates: ICoordinates = {
				lat,
				lng
			};

			return coordinates;
		} catch (error) {
			return null;
		}
	}
};
