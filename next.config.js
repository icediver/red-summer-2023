/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		SERVER_URL: process.env.SERVER_URL,
		GEOCODER: process.env.GEOCODER_URL
	},
	images: {
		domains: [
			'i.pinimg.com',
			'lh3.googleusercontent.com',
			'avatars.githubusercontent.com',
			'sun1-27.userapi.com',
			'avatars.yandex.net',
			'cloudflare-ipfs.com'
		]
	},
	async headers() {
		return [
			{
				// matching all API routes
				source: '/api/:path*',
				headers: [
					{ key: 'Access-Control-Allow-Credentials', value: 'true' },
					{ key: 'Access-Control-Allow-Origin', value: '*' },
					{
						key: 'Access-Control-Allow-Methods',
						value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT'
					},
					{
						key: 'Access-Control-Allow-Headers',
						value:
							'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
					}
				]
			}
		];
	}
};
module.exports = nextConfig;
