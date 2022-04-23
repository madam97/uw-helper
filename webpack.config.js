const path = require('path');
require('@babel/register');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'uw-helper.js',
    library: "UWHelper",
    libraryTarget: "umd",
  },
  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  resolve: { extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'] },
};