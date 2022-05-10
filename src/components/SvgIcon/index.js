/*
 * @Author: atdow
 * @Date: 2022-05-10 22:08:11
 * @LastEditors: null
 * @LastEditTime: 2022-05-10 22:14:29
 * @Description: file description
 */
import SvgIcon from './SvgIcon.vue'

/* istanbul ignore next */
SvgIcon.install = function (Vue) {
  Vue.component(SvgIcon.name, SvgIcon)
}

export default SvgIcon