import webpack from 'webpack';
import path from 'path';

const config = {
  entry: {
    app: ["./examples/App.js"]
  },
  output: {
    path: path.resolve(__dirname, "examples"),
    publicPath: '/',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      }
    ]
  }
};

export default config;
