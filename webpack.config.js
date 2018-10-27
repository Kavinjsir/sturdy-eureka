const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PATHS = {
  src: path.resolve(__dirname, 'src'),
  static: path.resolve(__dirname, 'static'),
};

const common = {
  entry: {
    app: './src/index.tsx',
  },
  resolve: {
    alias: {
      '@src': PATHS.src,
    },
    extensions: ['.ts', '.tsx', '.js', '.json', '.css', '.scss', '*'],
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true,
              camelCase: true,
              sourceMap: false,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        loaders: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([PATHS.static], {
      root: process.cwd(),
    }),
    new HTMLWebpackPlugin({
      title: 'Mine',
    }),
    new webpack.HashedModuleIdsPlugin(),
    new ForkTsCheckerWebpackPlugin({
      tsconfig: './tsconfig.json',
      checkSyntacticErrors: true,
    }),
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
          priority: -10,
        },
        runtime: {
          name: 'runtime',
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },

        vendorCss: {
          test: /[\\/]node_modules[\\/]\S+\.css$/,
          name: 'vendor',
          chunks: 'all',
          priority: -10,
        },

        appCss: {
          test: /\.css$/,
          name: 'app',
          chunks: 'all',
          priority: -20,
        },
      },
    },
  },
};

const dev = {
  mode: 'development',
  output: {
    publicPath: '/static/',
    path: PATHS.static,
    filename: '[name].bundle.js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
    }),
  ],
};

module.exports = merge(common, dev);
