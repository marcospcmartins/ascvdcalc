const path = require('path')


module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        options: {configFile: 'tsconfig.webpack.json'},
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js'  ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // library: 'ascvdCalc'
  },
  // optimization: {
  //   minimize: false,
  // }
};
