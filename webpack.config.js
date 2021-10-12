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
        { 
          test: /\.css$/, 
          use: ['style-loader', 'css-loader', 'postcss-loader'],
          include: [path.resolve(__dirname,'src/styles'), path.resolve(__dirname,'node_modules')], 
        },
        { 
          test: /\.css$/, 
          use: [
            'style-loader', 
            // 'css-loader?modules'
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: "[local]--[hash:base64:5]",
                }
              }
            }, 
            'postcss-loader'
          ],
          exclude: [path.resolve(__dirname,'src/styles'), path.resolve(__dirname,'node_modules')],
        },
        {
          test: /\.less$/,
          include: [path.resolve(__dirname,'src/styles'), path.resolve(__dirname,'node_modules')],
          use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
        },
        {
          test: /\.less$/,
          exclude: [path.resolve(__dirname,'src/styles'), path.resolve(__dirname,'node_modules')],
          use: [
            'style-loader', 
            // 'css-loader?modules'
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: "[local]--[hash:base64:5]",
                }
              }
            },
            'postcss-loader',
            'less-loader'
          ],
        },
        {test: /\.js$/, exclude: /node_modules/, enforce: 'pre', use: 'eslint-loader' },
        // {
        //   test: /\.(woff|woff2|eot|ttf|otf)$/,
        //   use: ["file-loader"],
        // },
        { 
          test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
          loader: "url-loader",
          options: {
            limit: 10000
          }
        }
      ],
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      host: 'localhost',
      port: 8080,
      open: true,
    },
    resolve: {
      alias: {
        '_src': path.resolve('src'),
        node_modules: `${__dirname}/node_modules`,
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
