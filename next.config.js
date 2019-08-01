const withPlugins = require('next-compose-plugins')
const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css')
const path = require('path');

module.exports = withPlugins([withTypescript,withCSS],{
  useFileSystemPublicRoutes: false,
  webpack: function (config, { buildId, dev }) {
    const originalEntry = config.entry;

    config.resolve = {
      ...config.resolve,
      ...{
        alias: {
          ...config.resolve.alias,
          '@src': path.resolve(__dirname, 'client'),
        }
      },
    };

    return config
  }
});