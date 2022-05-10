/*
 * @Author: atdow
 * @Date: 2022-04-13 23:01:04
 * @LastEditors: null
 * @LastEditTime: 2022-05-10 20:21:28
 * @Description: file description
 */
export function isString(obj) {
  return Object.prototype.toString.call(obj) === '[object String]'
}

export function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

export function isHtmlElement(node) {
  return node && node.nodeType === Node.ELEMENT_NODE
}

export const isFunction = (functionToCheck) => {
  var getType = {}
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]'
}

export const isUndefined = (val) => {
  return val === void 0
}

export const isDefined = (val) => {
  return val !== undefined && val !== null
}
