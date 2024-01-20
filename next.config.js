/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
    images: {
      domains: ['i.postimg.cc']
    }
    //output: "standalone",
  };
  
  module.exports = nextConfig;