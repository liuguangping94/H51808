const webpack = require('webpack'),
  htmlPlugin = require('html-webpack-plugin'),
  devServer = require('webpack-dev-server'),
  copyWebpackPlugin = require('copy-webpack-plugin'),
  VueLoaderPlugin = require('vue-loader/lib/plugin')

  merge = require('webpack-merge')
const config = {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: "./dist",
    inline: true,//实时刷新
    overlay: {
      errors: true//浏览器显示错误
    },
    port: 8888,
    hot: true//启用热更新
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', 
          {
            loader:'css-loader',
            options:{
                sourceMap:true
            }
          },
         {
            loader:'postcss-loader',
            options:{
                sourceMap:true
            }
          },
          {
            loader:'sass-loader',
            options:{
                sourceMap:true
            }
         }
        ]
      }
    ]
  }
}
module.exports = (env, argv) => {
  console.log(argv.mode)
  const baseConfig = require('./webpack.config.base')(env, argv)
  return merge(baseConfig, config)
}