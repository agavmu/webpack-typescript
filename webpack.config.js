const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: './src/app.ts',
    output: {
        path: __dirname + '/dist/',
        filename: 'bundle.js'
    },

    devServer: {
        port: 8000,
        contentBase: __dirname + '/dist/',
        hot: true
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    minimize: true
                }
            },
            {
                test: /\.scss$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.ts$/,
                use: [{
                    loader: 'ts-loader',
                }],
                exclude: /node_modules/
            }
        ]
    },

    resolve: {
        extensions: ['.ts']
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        })
    ]
}