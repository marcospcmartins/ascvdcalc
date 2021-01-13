const path = require('path')


module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        options: {configFile: 'tsconfig.exclude.json'},
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js'  ],
  },
  output: {
    filename: 'ascvdcalc.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'ascvdcalc',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
};
