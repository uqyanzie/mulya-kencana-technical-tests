/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
        {
            source: '/',
            destination: '/api/products',
            permanent: true,
        },
    ];
  }
};

export default nextConfig;
