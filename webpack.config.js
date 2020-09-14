const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { NamedModulesPlugin } = require('webpack')
// 这里的引入与ES6是不同的

// module从哪来的？
module.exports = {
  entry: {
    index: './src/index.js',
    search: './src/search.js'
  },
  output: { // 这里有2个参数；__dirname什么意思?
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/, // 这里是一个正则，不是字符串
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: { // css模块化配置
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
              },
            }
          }, 
          'less-loader'
        ],
      },
      // {
      //   test: /\.(png|gif|jpg}jpeg)$/,
      //   use: 'file-loader', // 字符串也可以
      // },
      {
        test: /\.(woff|woff2|otf|eot|ttf)$/,
        use: 'file-loader',
      },
      {
        test: /\.(png|gif|svg|jpg|jpeg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10240,
          }
        }
      }
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'htmlWebpackPlugin.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/react.html',
      filename: 'react.html'
    })
  ],
  mode: 'production'
}