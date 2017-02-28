/* eslint-disable */
var path = require('path');
var webpack = require('webpack');
var pkg = require('./package.json');
var BANNER = '/**\n'
  + ' * @preserve\n'
  + ' * ' + pkg.name + ' v' + pkg.version + '\n'
  + ' * ' + pkg.description + '\n'
  + ' * ' + pkg.homepage + '\n'
  + ' *\n'
  + ' * Copyright (c) 2017, ' + pkg.author + '.\n'
  + ' * All rights reserved.\n'
  + ' *\n'
  + ' * Released under the ' + pkg.license + ' license.\n'
  + ' */\n';

module.exports = {
  devtool: 'source-map',
  entry: ['./src/kinvey.ts'],
  externals: [/^\@angular\//, /^rxjs\//],
  module: {
    rules: [
      { test: /\.json$/, use: ['json-loader'] },
      { test: /\.ts$/, use: ['awesome-typescript-loader'] }
    ]
  },
  output: {
    filename: pkg.name + '.js',
    libraryTarget: 'umd',
    library: 'Kinvey',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.BannerPlugin({ banner: BANNER, raw: true }),
    new webpack.NormalModuleReplacementPlugin(
      /kinvey-js-sdk\/dist\/identity\/src\/popup\.js/,
      require.resolve(path.resolve(__dirname, 'node_modules/kinvey-phonegap-sdk/dist/popup.js'))
    )
  ],
  resolve: {
    extensions: ['.ts', '.js']
  },
};
