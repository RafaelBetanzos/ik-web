/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/ik-web',
    assetPrefix: '/ik-web/',
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig
