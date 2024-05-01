const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: 'src/index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Name of the output bundle
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'], // Use Babel for JavaScript/JSX files
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader for CSS files
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: ['file-loader'], // Use file-loader for image files
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Path to your HTML template
      filename: 'index.html', // Output HTML filename
    }),
  ],
};
