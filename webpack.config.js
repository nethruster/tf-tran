const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin')
const { GenerateSW } = require('workbox-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production' // Check if we are in production mode

const cleanOptions = {
  root: path.resolve(__dirname),
  exclude: ['.gitkeep'],
  verbose: true,
  dry: !isProduction
}

const BUILD_DIR = path.resolve(__dirname, 'dist')
const APP_DIR = path.resolve(__dirname, 'src')

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: {
    main: APP_DIR + '/index.js'
  },
  target: 'web',
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /preact|preact-compat|react-router-dom|decko|react-ink|unistore|webpack|workbox-webpack-plugin/,
          chunks: 'initial',
          name: 'vendor',
        }
      }
    }
  },
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: '[name]-[hash:6].js',
    chunkFilename: '[name]-[hash:6].js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: APP_DIR,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: [
          ExtractCssChunks.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: 'wdr[hash:6]'
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/img/[name].[ext]?[hash:6]'
        }
      },
      {
        test: /\.(woff2|woff)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/fonts/[name].[ext]?[hash:6]'
        }
      }
    ]
  },
  devServer: {
    contentBase: APP_DIR,
    compress: true,
    historyApiFallback: true,
    stats: 'minimal',
    hot: true,
    inline: true,
    port: 8081,
    host: '0.0.0.0',
    disableHostCheck: true,
    proxy: {
      "/api/tranvia": {
        "target": 'http://tranviaonline.metrotenerife.com:8180/api/infoStops/infoPanel',
         "pathRewrite": { '^/api/tranvia': '' },
        "changeOrigin": true,
        "secure": false
      }
    }
  },
  resolve: {
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat'
    },
    modules: [APP_DIR + '/components', APP_DIR + '/store', APP_DIR + '/scripts', 'node_modules']
  },
  plugins: [
    new CleanWebpackPlugin(BUILD_DIR, cleanOptions),
    isProduction ? new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.(html|js|css|json|svg|png|jpeg)$/,
      minRatio: 0.8
    }) : new webpack.HotModuleReplacementPlugin(),
    new ExtractCssChunks({
      filename: '[name]-[hash:6].css',
      chunkFilename: '[name]-[hash:6].css',
      hot: true,
      cssModules: true
    }),
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true
      },
      template: APP_DIR + '/index.html',
      inject: false
    }),
    new CopyWebpackPlugin([{ from: APP_DIR + '/assets/favicons', to: BUILD_DIR + '/assets/favicons'}]),
    new GenerateSW({
      runtimeCaching: [
        {
          urlPattern: /\/api\/tranvia/,
          handler: 'networkOnly'
        },
        {
          urlPattern: new RegExp('^https://fonts.(?:googleapis|gstatic).com/(.*)'),
          handler: 'cacheFirst'
        },
        {
          urlPattern: /\/assets\/.*/,
          handler: 'cacheFirst'
        }
        // {
        //   urlPattern: /.*/,
        //   handler: 'cacheFirst'
        // }
      ],
      navigateFallback: '/',
      swDest: "sw.js",
      directoryIndex: 'index.html',
      clientsClaim: true,
      skipWaiting: true
    })
  ]
}
