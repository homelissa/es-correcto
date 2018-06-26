let path = require("path");

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          "presets": [
            "react",
            "es2015",
            "stage-0"
          ]
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
