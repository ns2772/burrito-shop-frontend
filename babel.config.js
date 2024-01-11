// babel.config.js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current', // Important for Jest
        },
      },
    ],
    '@babel/preset-react',
  ],
  // ... any additional plugins or presets
};
