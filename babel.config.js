module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module-resolver', {
      root: ['./'],
      alias: {
        '@app': './src/app',
        '@core': './src/core',
        '@modules': './src/modules',
        '@shared': './src/shared'
      }
    }]
  ]
};
