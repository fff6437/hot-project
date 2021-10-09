const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// const packageJson = require('./package.json');

module.exports = function (env, argv) {
  const isEnvDevelopment = argv.mode === 'development' || !argv.mode;
  const isEnvProduction = argv.mode === 'production';
  return {
    mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',
    devtool: isEnvProduction ? 'source-map' : isEnvDevelopment && 'cheap-module-source-map',
    entry: {
      index: './src/index.js',
      // battle: './src/pages/battle.js'
      // vendor: Object.keys(packageJson.dependencies),
    },
    output: {
      filename: '[name].[contenthash:8].js',
      chunkFilename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        { test: /\.js$/, use: 'babel-loader' },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
          include: [path.resolve(__dirname, 'src/styles'), path.resolve(__dirname, 'node_modules')],
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            // 'css-loader?modules'
            {
              loader: 'css-loader',
              options: {
                modules:  {
                  localIdentName: "[local]--[hash:base64:5]",
                }
              }
            },
            'postcss-loader'
          ],
          exclude: [path.resolve(__dirname, 'src/styles'), path.resolve(__dirname, 'node_modules')],
        },
        {
          test: /\.less$/,
          include: [path.resolve(__dirname, 'src/styles'), path.resolve(__dirname, 'node_modules')],
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader'],
        },
        {
          test: /\.less$/,
          exclude: [path.resolve(__dirname, 'src/styles'), path.resolve(__dirname, 'node_modules')],
          use: [
            MiniCssExtractPlugin.loader,
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
        { test: /\.js$/, exclude: /node_modules/, enforce: 'pre', use: 'eslint-loader' },
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
    // devServer: {
    //   static: {
    //     directory: path.join(__dirname, 'public'),
    //   },
    //   host: 'localhost',
    //   port: 8080,
    //   open: true,
    // },
    resolve: {
      alias: {
        'src': path.resolve('src'),
        node_modules: `${__dirname}/node_modules`,
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
        },
      }),
      // new webpack.HotModuleReplacementPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash:8].css',
        chunkFilename: '[name].[contenthash:8].chunk.css',
      }),
      new BundleAnalyzerPlugin(),
    ],
    optimization: {
      // moduleIds: 'named',
      minimize: true,
      minimizer: [
        new TerserPlugin(),
        new OptimizeCSSAssetsPlugin(),
      ],
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
            name: 'vendor'
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
            name: 'bundle'
          }
        }
      }
    },
  };
};
