const path = require('path');

module.exports = {
    entry: {
        package: path.join(__dirname, '../src/usePaymentCard'),
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'index.js',
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
    }
};
