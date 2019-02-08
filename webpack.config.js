// const webpack = require('webpack');

module.exports  =  function ( webpackConfig ) {
   // shift CommonsChunkPlugin 
  // The plugin causes an error Uncaught ReferenceError: webpackJsonp is not defined 
  // temporarily deleted first, the specific reason is to be confirmed 
  webpackConfig.plugins.shift();

  return webpackConfig;
};