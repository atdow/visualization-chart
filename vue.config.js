/*
 * @Author: atdow
 * @Date: 2021-06-17 10:54:48
 * @LastEditors: null
 * @LastEditTime: 2022-05-10 20:31:03
 * @Description: file description
 */

const path = require('path')
// const webpack = require("webpack");

function resolve(dir) {
  return path.join(__dirname, dir)
}

const vueConfig = {
  publicPath: '',
  // publicPath: '/',
  configureWebpack: {
    plugins: []
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('@$', resolve('src'))
    // config.module
    //   .use("vue-loader")
    //   .loader("vue-loader")
    //   .end()
  },
  productionSourceMap: false,
  lintOnSave: undefined,
  transpileDependencies: [],
}

module.exports = vueConfig
