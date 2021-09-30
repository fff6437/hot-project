const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (env, argv) {
  const isEnvDevelopment = argv.mode === 'development' || !argv.mode;
  const isEnvProduction = argv.mode === 'production';
  console.log(argv);
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
      ],
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
        // directory: path.join(__dirname, './dist'),
      },
      // contentBase: './dist',
      host: 'localhost',
      port: 8080,
      open: true,
    },
    resolve: {
      alias: {
        node_modules: `${__dirname}/node_modules`,
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
      }),
    ],
  };
};
