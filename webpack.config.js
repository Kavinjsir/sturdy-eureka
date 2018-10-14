const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const Happypack = require('happypack');

const PATHS = {
    src: path.resolve(__dirname, 'src'),
    static: path.resolve(__dirname, 'static'),
};

const common = {
    target: 'web',
    entry: {
        app: './src/index.tsx',
    },
    output: {
        publicPath: '/static/',
        path: PATHS.static,
        filename: '[name].[chunkhash].js',
    },
    resolve: {
        alias: {
            '@src': PATHS.src,
        },
        extensions: ['.ts', '.tsx', '.js', '.json','.css', '.scss', '*'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loaders: 'happypack/loader?id=ts',
                exclude: [/node_modules/],
                // exclude: /node_modules(?!\/antd)/,
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin([PATHS.static], {
            root: process.cwd(),
        }),
        new HTMLWebpackPlugin({
            title: 'TianYi\'s Space',
            filename: 'index.html',
        }),
        new webpack.HashedModuleIdsPlugin(),
        new Happypack({
            id: 'ts',
            threads: 1,
            loaders: [{
                path: 'ts-loader',
                query: {
                    happyPackMode: true,
                },
            }],
        }),
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
        filename: '[name].bundle.js',
    },
    devServer: {
        compress: true,
        port: 9000
    },
};

module.exports = merge(common, dev);