module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/projects/:path*',
        destination: '/projects/:path*',
      },
    ];
  },
}
