const path = require('path'),
HtmlWebpackPlugin = require('html-webpack-plugin'),
CleanWebpackPlugin = require('clean-webpack-plugin'),
autoprefixer = require('autoprefixer'),
WebpackNotifierPlugin = require('webpack-notifier')
MiniCssExtractPlugin = require("mini-css-extract-plugin");

const pathes = {
  dist: './dist',
  src: './src'
}

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, pathes.dist),
    filename: 'js/bundle.js'
  },
  devServer: {
    contentBase: pathes.dist
  },
  plugins: [
  new WebpackNotifierPlugin(),
  new CleanWebpackPlugin([pathes.dist]),
  new HtmlWebpackPlugin({
    template: pathes.src + '/index.html'
  }),
  new MiniCssExtractPlugin({
    filename: "css/style.css"
  })
  ],
  module: {
    rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
    {
      test: /\.(sa|sc|c)ss$/,
      use: [
      {
        loader: MiniCssExtractPlugin.loader,
      },
      {
        loader: "css-loader", options: {
          sourceMap: true
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: [
          autoprefixer({
            browsers:['ie >= 8', 'last 4 version']
          })
          ],
          sourceMap: true
        }
      },
      {
        loader: "sass-loader", options: {
          sourceMap: true
        }
      }
      ]
    },
    {
      test: /\.(png|jpg|jpeg|gif)$/,
      use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
          outputPath: 'img/'
        }
      }
      ]
    },
    {
      test: /\.svg$/,
      loader: 'svg-inline-loader'
    }
    ]

  }
};