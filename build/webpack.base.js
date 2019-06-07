const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

module.exports = {
  entry: {
    index: './src/index.ts',
    datepicker: './src/demos/datepicker/datepicker.ts'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'datepicker',
      filename: 'demos/datepicker/datepicker.html',
      template: resolve(__dirname, '../src/demos/datepicker/datepicker.html')
    }),
    new HtmlWebpackPlugin({
      title: 'TypeScript',
      template: resolve(__dirname, '../src/index.html')
    })
  ]
};
