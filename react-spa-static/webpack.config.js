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
                loader: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader!postcss-loader"})
            },
            {
                test: /\.(png|jpg|jpng)$/,
                loader: 'url-loader?limit=1&name=./img/[hash:8].[name].[ext]'
            },
            {
                test: /\.html$/,
                loader: 'html-withimg-loader'
            }

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
