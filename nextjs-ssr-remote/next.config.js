// next.config.js
// either from default
const NextFederationPlugin = require('@module-federation/nextjs-mf');

const nextConfig = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'remote',
        remotes: {},
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './home': './src/pages/index.js',
        },
        shared: {
          // whatever else
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig
