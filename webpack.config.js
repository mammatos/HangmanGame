var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ["./js/app.jsx", "./scss/main.scss"],
    output: {
        filename: "./js/out.js"
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            { // regular css files
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                loader: 'css-loader?importLoaders=1',
                }),
            },
            { // sass / scss loader for webpack
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            },
            { 
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
                loader: 'url-loader?limit=100000' 
            }
        ]
    },
    plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: './css/style.css',
      allChunks: true,
    }),
  ],
};
