const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
   context: path.resolve(__dirname, '../src'),
   entry: {
      vendor: ['./styles/vendor.scss', './scripts/vendor.js'],
      app: ['./styles/index.scss', './scripts/index.js'],
   },
   output: {
      path: path.resolve(__dirname, '../dist'),
      publicPath: '',
      filename: 'scripts/[name].js',
      crossOriginLoading: 'anonymous',
   },
   resolve: {
      alias: {
         '@js': path.resolve(__dirname, '../src/scripts/app'),
         '@style': path.resolve(__dirname, '../src/styles/app'),
         '@img': path.resolve(__dirname, '../src/assets/images'),
         '@libScript': path.resolve(__dirname, '../src/scripts/vendor'),
         '@libStyle': path.resolve(__dirname, '../src/styles/vendor'),
      },
   },
   stats: 'errors-only',
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
         },
         {
            test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
            exclude: /fonts/,
            use: [
               {
                  loader: 'file-loader',
                  options: {
                     name: '[path][name].[ext]',
                  },
               },
            ],
         },
         { test: /\.(woff(2)?|eot|ttf|otf)$/, type: 'asset/inline' },
      ],
   },
}
