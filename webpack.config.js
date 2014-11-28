var webpack = require("webpack");

module.exports = {
  entry: {
    Main: './app/App.jsx'
  },
  output: {
    path: './public/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader?harmony' } // loaders can take parameters as a querystring
    ]
  }
};
