const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: "source-map",
    target: "web",
    entry: [
        "./src/index.js",
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss'],
        alias: {
            Components: path.resolve(__dirname, "src/components"),
            StyledComponents: path.resolve(__dirname, "src/styled-components"),
            Utils: path.resolve(__dirname, "src/utils"),
            Pages: path.resolve(__dirname, "src/pages"),
            Assets: path.resolve(__dirname, "src/assets"),
            Store: path.resolve(__dirname, "src/store"),
        }
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js",
    },
    devServer: {
        contentBase: path.join(__dirname, "src"),
        compress: true,
        port: 3000,
        open: true,
        watchContentBase: true,
        inline: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                }),
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(jpe?g|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[hash].[ext]',
                            outputPath: 'images/'
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'ND Engenharia Ambiental',
            template: './src/index.html'
        }),
        //if you want to pass in options, you can do so:
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true
        })
    ]
}