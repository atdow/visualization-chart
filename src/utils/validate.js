/*
 * @Author: atdow
 * @Date: 2022-05-10 22:04:36
 * @LastEditors: null
 * @LastEditTime: 2022-05-10 22:04:45
 * @Description: file description
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path) || /^(http?:|mailto:|tel:)/.test(path) || path.startsWith('/api/pluginCommon/staticInfo')
}