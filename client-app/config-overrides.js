const { override } = require('customize-cra');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = override((config) => {
  config.resolve.plugins = [
    ...config.resolve.plugins || [],
    new TsconfigPathsPlugin({
      configFile: './tsconfig.json'
    })
  ];
  return config;
});