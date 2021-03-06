const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    vendor: './src/vendor.js'
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        exclude: path.resolve(__dirname, './src/fonts'),
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: '[name].[ext]',
              outputPath: 'images/',
              publicPath: 'images/'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot|svg)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
        include: path.resolve(__dirname, './src/fonts'),
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: '[name].[ext]',
              outputPath: 'fonts/',
              publicPath: 'fonts/'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WriteFilePlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src', 'robots.txt'),
          to: path.resolve(__dirname, 'dist', 'robots.txt')
        }
      ]
    }),
    new HtmlWebpackPlugin({
      title: 'tris-home-page',
      filename: 'index.html',
      template: './src/index.html',
      inject: 'head',
      minify: false
    }),
    new HtmlWebpackPlugin({
      title: 'tris-catalog-page',
      filename: 'catalog.html',
      template: './src/catalog.html',
      inject: 'head',
      minify: false
    }),
    new HtmlWebpackPlugin({
      title: 'tris-product-page',
      filename: 'product.html',
      template: './src/product.html',
      inject: 'head',
      minify: false
    }),
    new HtmlWebpackPlugin({
      title: 'tris-about-page',
      filename: 'about.html',
      template: './src/about.html',
      inject: 'head',
      minify: false
    }),
    new HtmlWebpackPlugin({
      title: 'tris-delivery-page',
      filename: 'delivery.html',
      template: './src/delivery.html',
      inject: 'head',
      minify: false
    }),
    new HtmlWebpackPlugin({
      title: 'tris-opt-page',
      filename: 'opt.html',
      template: './src/opt.html',
      inject: 'head',
      minify: false
    }),
    new HtmlWebpackPlugin({
      title: 'tris-contacts-page',
      filename: 'contacts.html',
      template: './src/contacts.html',
      inject: 'head',
      minify: false
    }),
    new HtmlWebpackPlugin({
      title: 'tris-cart-page',
      filename: 'cart.html',
      template: './src/cart.html',
      inject: 'head',
      minify: false
    }),
    new PreloadWebpackPlugin({
      rel: 'preload',
      as(entry) {
        if (/\.(woff|woff2|ttf|otf)$/.test(entry)) {
          return 'font';
        }
      },
      fileWhitelist: [/\.(woff|woff2|ttf|otf)$/],
      include: 'allAssets'
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer'
    })
  ],
  externals: {
    $: 'jquery',
    jquery: 'jQuery',
    'window.$': 'jquery'
  }
};
