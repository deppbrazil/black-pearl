module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            browsers: ['last 2 versions'],
          },
        },
      ],
      '@babel/preset-react',
    ],
    plugins: [
      [
        '@babel/plugin-proposal-class-properties',
        {
          loose: false,
        },
      ],
      [
        '@babel/plugin-transform-runtime',
        {
          helpers: false,
          regenerator: true,
        },
      ],
    ],
  };