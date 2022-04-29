const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');

module.exports = {
  mode: 'development', // process.env.NODE_ENV === 'production' ? 'production' : 'development';
  // single entry
  // entry: path.resolve(__dirname, 'src/js/controller.js'),
  // But if I wanted multiple entries, then I need to put in an object
  // entry: {
  //   compiled: path.resolve(__dirname, './src/js/controller.js'),
  // },
  entry: './src/js/controller.js',
  output: {
    // Where my files being output. Parcel.js creates dist folder itself, here in webpack need to specify.
    path: path.resolve(__dirname, 'dist'),
    // How I want to name the file output by webpack. I can put in [name] and it takes name from entry or just put name I want.
    // second bracket for caching.
    // filename: '[name].[contenthash].js',
    filename: 'done.[contenthash].js',
    clean: true,
    assetModuleFilename: '[name][ext]',
  },
  devtool: 'source-map',
  devServer: {
    // This specifies what to serve as live server.
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    // My own server specs. Open itself, port, hot - reload on save.
    port: 3000,
    open: true,
    hot: true,
    // // Gzip compressor????
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        // Anything that ends with..
        test: /\.scss$/,
        // Apply these:
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      // This one takes all files which are js and uses babel to compile code for older browsers and because node_modules got js files, I had to exclude them.
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  // When I add plugin, usually it has to go under module? Maybe?
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Recipes App',
      filename: 'index.html',
      template: './index.html',
    }),
    new HtmlWebpackInlineSVGPlugin(),
  ],
};
