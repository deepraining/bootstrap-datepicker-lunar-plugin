
'use strict';

var webpack = require('webpack');
var moment = require('moment');
var packageJson = require('./package.json');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bootstrap-datepicker-lunar-plugin.js',
    library: 'bootstrap-datepicker-lunar-plugin',
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'stage-1']
        }
      },
      {
        test: /\.css$/,
        loader:  'style-loader!css-loader'
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin(`
    bootstrap-datepicker-lunar-plugin v${packageJson.version}

    https://github.com/senntyou/bootstrap-datepicker-lunar-plugin

    @senntyou <jiangjinbelief@163.com>

    ${moment().format('YYYY-MM-DD HH:mm:ss')}
    `)
  ],
  externals: {
    jquery : {
      commonjs: 'jquery',
      amd: 'jquery',
      commonjs2: 'jquery',
      root: 'jQuery'
    },
    'bootstrap-datepicker' : {
      commonjs: 'bootstrap-datepicker',
      amd: 'bootstrap-datepicker',
      commonjs2: 'bootstrap-datepicker',
      root: 'bootstrap-datepicker'
    },
    'lunar-calendar' : {
      commonjs: 'lunar-calendar',
      amd: 'lunar-calendar',
      commonjs2: 'lunar-calendar',
      root: 'LunarCalendar'
    }
  }
};