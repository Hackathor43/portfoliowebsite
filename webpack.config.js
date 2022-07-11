
const path = require('path');

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true
 },
 mode: 'production'
}

