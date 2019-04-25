var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: {
        'main':'./main.js',
    },
    output: {
        path: __dirname+'/dist/static',
        filename: 'index.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader!postcss-loader!px2rem-loader?remUnit=75&remPrecision=10"})
            },
      {
   test: /\.scss$/,
   loader: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader!postcss-loader!sass-loader"})
      },
            {
                test: /\.(png|jpg|jpng)$/,
                loader: 'url-loader?limit=1&name=[hash:8][name].[ext]&outputPath=/img/&publicPath='+__dirname+'/dist/static'
            },
            // {
            //     test: /\.(png|jpg|jpng)$/,
            //     loader: 'url-loader?limit=1&name=[hash:8][name].[ext]&outputPath=./img/'
            // },
            {
                test: /\.html$/,
                loader: 'html-withimg-loader'
            },
            // {
            //     test: /\.json$/,
            //     loader: 'file-loader?name=[hash:8][name].[ext]&outputPath=/data/&publicPath='+__dirname+'/dist/static'
            // }
        ],

    },
    plugins: [
        new ExtractTextPlugin("index.css"),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template:__dirname+'/index.html',
            inject:'body',
            hash:false,
            chunks:['main'],
            xhtml:true,
            showErrors:true,
        }),
    ]
}
