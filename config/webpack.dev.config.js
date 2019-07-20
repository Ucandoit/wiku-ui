const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    './src/sample/index'
  ],
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: [{
        loader: 'awesome-typescript-loader',
        options: {
          getCustomTransformers: path.join(__dirname, './webpack.ts-transformers.js')
        }
      }],
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/sample/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    hot: true,
    historyApiFallback: true
  }
};
