import axios from 'axios';

import { getContentType } from '../api.helpers';
import { SERVER_URL } from '../config/api.config';

const axiosClassic = axios.create({
	baseURL: SERVER_URL,
	headers: getContentType()
});

export default axiosClassic;
