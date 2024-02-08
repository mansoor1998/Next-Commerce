/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['i.postimg.cc']
    },
    //output: "standalone",
    async redirects() {
      return [
        {
          source: '/',
          destination: '/shop',
          permanent: true
        }
      ]
    }
  };
  
  module.exports = nextConfig;