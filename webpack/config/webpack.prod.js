const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const minJSON = require('jsonminify')
const TerserPlugin = require('terser-webpack-plugin')

const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const { merge } = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common')

module.exports = merge(common, {
   mode: 'production',
   devtool: false,
   output: {
      path: path.resolve(__dirname, '../dist'),
      publicPath: '',
      filename: 'scripts/[name].[contenthash].js',
      crossOriginLoading: 'anonymous',
   },
   module: {
      rules: [
         {
            test: /\.(sass|scss|css)$/,
            use: [
               MiniCssExtractPlugin.loader,
               {
                  loader: 'css-loader',
                  options: {
                     importLoaders: 2,
                     sourceMap: false,
                     modules: false,
                  },
               },
               'postcss-loader',
               'sass-loader',
            ],
         },
         {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            exclude: /fonts/,
            use: [
               {
                  loader: 'file-loader',
                  options: {
                     name: '[path][name].[ext]',
                  },
               },
               {
                  loader: 'image-webpack-loader',
                  options: {
                     mozjpeg: {
                        progressive: true,
                        quality: 65,
                     },
                     optipng: {
                        enabled: false,
                     },
                     pngquant: {
                        quality: [0.65, 0.9],
                        speed: 4,
                     },
                     gifsicle: {
                        interlaced: false,
                     },
                     webp: {
                        quality: 75,
                     },
                  },
               },
            ],
         },
         {},
      ],
   },

   plugins: [
      new MiniCssExtractPlugin({
         filename: 'styles/[name].css',
      }),
      new HtmlWebpackPlugin({
         template: 'template.html',
         inject: true,
         hash: false,
         meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
         minify: {
            collapseWhitespace: true,
            keepClosingSlash: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: false,
            removeStyleLinkTypeAttributes: false,
            useShortDoctype: false,
         },
      }),
      new CleanWebpackPlugin(),
      new CopyPlugin({
         patterns: [
            {
               from: 'data/**/*.json',
               transform: (content) => minJSON(content.toString()),
            },
         ],
      }),
   ],

   optimization: {
      minimize: true,
      minimizer: [
         new CssMinimizerPlugin(),
         new TerserPlugin({
            parallel: true,
            extractComments: true,
         }),
         new FaviconsWebpackPlugin({
            mode: 'webapp',
            outputPath: '../dist/assets/favicons',
            prefix: 'assets/favicons/',
            logo: '../public/favicon.png',
            favicons: {
               appName: "Rakesh Gupta's webpack boilerplate",
               appDescription: 'modern Webpack Boilerplate',
               developerName: 'Rakesh Gupta',
               developerURL: null,
               background: '#ffffff',
               theme_color: '#000000',
               icons: {
                  coast: false,
                  yandex: false,
               },
            },
            icons: {
               twitter: true,
            },
         }),
      ],
   },
   performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
   },
})
