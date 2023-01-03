const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const common = require('./webpack.common')
const path = require('path')
module.exports = merge(common, {
   mode: 'development',
   devtool: 'inline-source-map',

   devServer: {
      historyApiFallback: true,
      open: true,
      compress: true,
      hot: false,
      port: 1000,
      watchFiles: ['../src/template.html'],
   },

   module: {
      rules: [
         {
            test: /\.(sass|scss|css)$/,
            use: [
               'style-loader',
               {
                  loader: 'css-loader',
                  options: { sourceMap: true, importLoaders: 1, modules: false },
               },
               { loader: 'postcss-loader', options: { sourceMap: true } },
               { loader: 'sass-loader', options: { sourceMap: true } },
            ],
         },
      ],
   },
   plugins: [
      new HtmlWebpackPlugin({
         filename: 'index.html',
         template: path.resolve(__dirname, '../src') + '/template.html', // template file
      }),
   ],
})
