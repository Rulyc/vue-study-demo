'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

/**
 *  Plugins: 配置扩展插件
 *  DevServer: 配置DevServer
 * */

module.exports = {
  // webpack在寻找相对路径的文件时会以context为根目录，context默认为执行启动webpack是所在的当前工作目录
  context: path.resolve(__dirname, '../'),
  // 配置模块的入口（必填），可抽象理解为输入，webpack执行构建的第一步从入口开始，搜寻及递归解析出所有入口依赖的模块
  entry: {
    app: './src/main.js'
  },
  // 配置如何输出最终想要的代码
  output: {
    // 配置输出文件存放在本地的目录，必须string类型的据绝对路径 通常通过node.js的path模块去获取绝对路径path: path . resolve( dirname,’dist [hash ]’)
    path: config.build.assetsRoot,
    // 配置输出文件的名字，为string类型；有多个chunk要输出的时候，可以采用filename: '[name].js'
    filename: '[name].js',
    // publicPath配置发布到线上资源的URL前缀，为string类型，使用相对路径； 使用该配置项时要小心，稍有不慎将导致资源加载 404 误。
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  // 配置寻找模块的规则
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  // 配置处理模块的规则
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      // {
      //   test:/\.md$/,
      //   loader:'vue-markdown-loader',
      //   // options:vueMarkdown,
      // },
      /* 解析md,高亮显示且解析slot */
      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader',
          },
          {
            loader: require.resolve('../markdown-loader'),
          },
        ],
      },
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
