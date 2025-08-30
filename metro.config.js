// metro.config.js
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');

// Merge your default Metro config
const config = mergeConfig(getDefaultConfig(__dirname), {
  /* add any custom Metro config here if needed */
});

// Wrap the config with NativeWind and specify the Tailwind CSS file
module.exports = withNativeWind(config, {
  input: './global.css', // path to your Tailwind CSS file
});
