const resolve = require('path').resolve
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const url = require('url')
const publicPath = ''

module.exports = (options = {}) => ({
    entry: {
        vendor: './src/vendor',
        index: './src/main.js'
    },
    output: {
        path: resolve(__dirname, 'dist'),
        filename: options.dev ? '[name].js' : '[name].js?[chunkhash]',
        chunkFilename: '[id].js?[chunkhash]',
        publicPath: options.dev ? '/assets/' : publicPath
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: ['vue-loader']
        },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                exclude: [resolve('src/icons')],
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                }]
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                include: [resolve('src/icons')],
                options: {
                    symbolId: 'icon-[name]'
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
    resolve: {
        alias: {
            '~': resolve(__dirname, 'src')
        },
        extensions: ['.js', '.vue', '.json', '.css']
    },
    devServer: {
        host: '127.0.0.1',
        port: 8010,
        proxy: {
            '/api1/': {
                target: 'http://10.11.7.63:8545',
                changeOrigin: true,
                pathRewrite: {
                    '^/api1': ''
                }
            },
            '/api2/': {
                target: 'http://10.11.7.71:8545',
                changeOrigin: true,
                pathRewrite: {
                    '^/api2': ''
                }
            },
            '/api3/': {
                target: 'http://10.11.7.72:8545',
                changeOrigin: true,
                pathRewrite: {
                    '^/api3': ''
                }
            },
            '/api4/': {
                target: 'http://10.11.7.73:8545',
                changeOrigin: true,
                pathRewrite: {
                    '^/api4': ''
                }
            },
            '/api5/': {
                target: 'http://10.11.7.74:8545',
                changeOrigin: true,
                pathRewrite: {
                    '^/api5': ''
                }
            },
            '/api6/': {
                target: 'http://10.11.7.75:8545',
                changeOrigin: true,
                pathRewrite: {
                    '^/api6': ''
                }
            }
        },
        historyApiFallback: {
            index: url.parse(options.dev ? '/assets/' : publicPath).pathname
        }
    },
    devtool: options.dev ? '#eval-source-map' : '#source-map'
})
