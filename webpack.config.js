const path = require('path');

module.exports = {
  devServer: {
    static: {
      directory: path.join(__dirname, 'src', 'demo'),
    },
    compress: true,
    port: 3000,
    open: true
  },
  entry: [path.join(__dirname, 'src', 'rrule.js')],
  output: {
    filename: 'rrule-bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
