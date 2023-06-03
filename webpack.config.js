const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;


module.exports = {
    mode,
    target,
    devtool,
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: 'index.js',
        assetModuleFilename: 'assets/images/[name][ext]'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html')
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
      })
    ],
    devServer: {
        static: {
          directory: path.join(__dirname, 'src'),
        },
        compress: true,
        port: 9000,
      },
      module: {
        rules: [
          {test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource'},
          {
            test: /\.(c|sa|sc)ss$/i,
            use: [devMode ? "style-loader" : MiniCssExtractPlugin.loader,
             "css-loader",
            "sass-loader"
          ],
          },
          {
            test: /\.(?:js|mjs|cjs)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: "defaults" }]
                ],
                plugins: ['@babel/plugin-proposal-class-properties']
              }
            }
          }
        ]
      }
}
