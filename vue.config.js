/*
 * @Author: atdow
 * @Date: 2021-06-17 10:54:48
 * @LastEditors: null
 * @LastEditTime: 2022-05-10 22:51:17
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
    config.module.rules.delete('svg') // 删除默认配置中处理svg,
    // const svgRule = config.module.rule('svg')
    // svgRule.uses.clear()
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include
      // .add(resolve('src/icons')) // 处理svg目录
      .add(resolve('src/components/icons')) // 处理svg目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  },
  productionSourceMap: false,
  lintOnSave: undefined,
  transpileDependencies: [],
}

module.exports = vueConfig
