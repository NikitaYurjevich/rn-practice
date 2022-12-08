/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const exclusionlist = require('metro-config/src/defaults/exclusionlist');

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    sourceExts: ['jsx', 'js', 'ts', 'tsx'],
    blacklistRE: exclusionlist([
      /node_modules\/.*\/node_modules\/react-native\/.*/,
    ]),
  },
};
