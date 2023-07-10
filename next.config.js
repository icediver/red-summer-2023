/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		SERVER_URL: process.env.SERVER_URL
	},
	images: {
		domains: ['i.pinimg.com']
	}
};
module.exports = nextConfig;
