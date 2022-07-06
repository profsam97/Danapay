/** @type {import('next').NextConfig} */


module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/Main',
        permanent: true,
      },
    ]
  },
  reactStrictMode: true
}