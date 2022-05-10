/*
 * @Author: atdow
 * @Date: 2022-04-01 20:28:26
 * @LastEditors: null
 * @LastEditTime: 2022-05-10 20:54:02
 * @Description: file description
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  'plugins': [
    [
      'component',
      {
        'libraryName': 'element-ui',
        'styleLibraryName': 'theme-chalk'
      }
    ]
  ]
}
