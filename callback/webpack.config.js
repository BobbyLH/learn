const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              use: 'css-loader!sass-loader!postcss-loader',
              fallback: 'vue-style-loader'
            })
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader!postcss-loader'
        })
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader?limit=1&name=[hash:8][name].[ext]&outputPath=./img/'
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.html$/,
        loader: 'html-withimg-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, './'),
    compress: true,
    port: 9000,
    historyApiFallback: true,
    hot: true,
    inline: true,
    open: true
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin('index.css'),
    new webpack.HotModuleReplacementPlugin()
    // new HtmlWebpackPlugin({
    //   filename: '../index.html',
    //   template: path.resolve(__dirname, 'index.html'),
    //   inject: 'body',
    //   hash: false,
    //   chunks: ['main'],
    //   xhtml: true,
    //   showErrors: true
    // }),
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.join(__dirname, 'src')
    },
    extensions: ['.js', '.json', '.vue', '.css']
  }
}
