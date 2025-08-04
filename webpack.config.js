const path = require('path');

module.exports = {
  mode: 'development',
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/'),
    },
    host: '0.0.0.0',           // ✅ Add this line
    port: 7777,
    hot: true,
    open: false,               // ✅ Optional: prevents auto-opening browser
    allowedHosts: 'all'        // ✅ Add this to allow external access
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
