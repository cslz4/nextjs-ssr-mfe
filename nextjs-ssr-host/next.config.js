// next.config.js
// either from default
const NextFederationPlugin = require('@module-federation/nextjs-mf');

const nextConfig = {
  webpack(config, options) {
    const location = options.isServer ? 'ssr' : 'chunks'

    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        remotes: {
          remote: `remote@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: {},
        shared: {
          // whatever else
        },
        extraOptions:{
          automaticAsyncBoundary: true
        }
      })
    );

    return config;
  },
};

module.exports = nextConfig
