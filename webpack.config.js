const path = require('path');

module.exports = {
    entry: './src/yang.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js'
    }
};