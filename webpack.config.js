var webpack = require('webpack');

module.exports = {
    entry: [
        './src/index.jsx'
    ],
    module: {
        preLoaders: [
          {
            test: /\.jsx$|\.js$/,
            loader: 'eslint-loader',
            include: __dirname + '/src',
            exclude: /bundle\.js$/
          }
        ],
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel'
        }
      ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false,
            screw_ie8: true
          },
          comments: false,
          sourceMap: false
      })
    ]
};