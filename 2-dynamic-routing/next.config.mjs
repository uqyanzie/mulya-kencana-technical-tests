/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
        {
            source: '/',
            destination: '/users',
            permanent: true,
        },
    ];
  }
};

export default nextConfig;
