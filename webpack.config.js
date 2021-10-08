const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (env, argv) {
  const isEnvDevelopment = argv.mode === 'development' || !argv.mode;
  const isEnvProduction = argv.mode === 'production';
  return {
    mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',
    devtool: isEnvProduction ? 'source-map' : isEnvDevelopment && 'cheap-module-source-map',
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        { test: /\.js$/, use: 'babel-loader' },
        { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        {test: /\.js$/, exclude: /node_modules/, enforce: 'pre', use: 'eslint-loader' },
      ],
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      host: 'localhost',
      port: 8080,
      open: true,
      hot: true
    },
    resolve: {
      alias: {
        node_modules: `${__dirname}/node_modules`,
        '@': path.resolve('src'),
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
    optimization: {
      moduleIds: 'named'
    },
  };
};
