export const getContentType = () => ({
	'Content-Type': 'application/json'
});

export const errorCatch = (error: any): string =>
	error.response && error.response.data
		? typeof error.response.data.message === 'object'
			? error.response.data.message[0]
			: error.response.data.message
		: error.message;

export const errorCatchMessage = (message: any): string =>
	message ? (typeof message === 'object' ? message[0] : message) : message;
