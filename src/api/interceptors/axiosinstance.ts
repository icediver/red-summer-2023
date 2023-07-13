import axios from 'axios';
import Cookies from 'js-cookie';

import { SERVER_URL } from '@/api/config/api.config';

import { errorCatch, getContentType } from '../api.helpers';

export const instance = axios.create({
	baseURL: SERVER_URL,
	headers: getContentType()
});

instance.interceptors.request.use(config => {
	const accessToken = Cookies.get('accessToken');

	if (config.headers && accessToken)
		config.headers.Authorization = `Bearer ${accessToken}`;

	return config;
});

instance.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config;

		if (
			(error.response.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true;
			try {
				// await AuthService.getNewTokens();
				return instance.request(originalRequest);
			} catch (error) {
				// if (errorCatch(error) === 'jwt expired') removeTokensStorage();
			}
		}

		throw error;
	}
);

export default instance;
