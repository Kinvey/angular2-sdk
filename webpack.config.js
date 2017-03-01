/* eslint-disable */
var path = require('path');
var webpack = require('webpack');
var pkg = require('./package.json');
var BANNER = '@preserve\n'
  + pkg.name + ' v' + pkg.version + '\n'
  + pkg.description + '\n'
  + pkg.homepage + '\n'
  + '\n'
  + 'Copyright (c) 2017, ' + pkg.author + '.\n'
  + 'All rights reserved.\n'
  + '\n'
  + 'Released under the ' + pkg.license + ' license.'

module.exports = {
  entry: './src/index.js',
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  output: {
    filename: pkg.name + '.js',
    libraryTarget: 'umd',
    library: 'Kinvey',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.BannerPlugin(BANNER, { raw: false, entryOnly: true }),
    new webpack.NormalModuleReplacementPlugin(
      /kinvey-js-sdk\/dist\/identity\/src\/popup\.js/,
      require.resolve(path.resolve(__dirname, 'node_modules/kinvey-phonegap-sdk/dist/popup.js'))
    )
  ],
  profile: true
};
