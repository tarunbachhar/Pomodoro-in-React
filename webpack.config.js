const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const config = {
  entry:'./src/index.js',
  devtool:'inline-source-map',
  devServer:{
    contentBase:'dist'
  },
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'dist'),
  },
  plugins:[
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template:'./src/index.html',
      filename:'index.html',
      inject:'body'
    })
  ],
  module:{
    rules:[
      {
        test:/\.js$/,
        exclude:/(node_modules)/,
        loader:'babel-loader'
      },
      {
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}

module.exports = config
