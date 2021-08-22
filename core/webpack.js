const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: path.join(__dirname, '../src'),
    },
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.scss'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
        }),
    ],
};
