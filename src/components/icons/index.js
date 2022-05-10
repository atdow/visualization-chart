/*
 * @Author: atdow
 * @Date: 2022-04-27 22:56:59
 * @LastEditors: null
 * @LastEditTime: 2022-05-10 22:54:26
 * @Description: file description
 */
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon/SvgIcon'// svg component

// register globally
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
