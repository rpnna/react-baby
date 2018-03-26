const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',

  entry: ['./src/index.js'],
  
  output: {
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: resolve(__dirname, 'src'),
    hot: true,
    stats: 'minimal'
  },

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};