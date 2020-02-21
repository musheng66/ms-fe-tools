import validator from '../validator'

class ObjectOperation {
  /**
   * 构造方法
   */
  constructor() {
  }
  /**
   * 深度递归合并对象
   * @param target
   * @param sources
   * @return {object} target
   */
  mergeDeep (target, ...sources) {
    if (!sources.length) return target
    const source = sources.shift()
    if (validator.isObject(target) && validator.isObject(source)) {
      for (const key in source) {
        if (source.hasOwnProperty(key)) {
          if (validator.isObject(target[key])) {
            this.mergeDeep(target[key], source[key])
          } else {
            target[key] = source[key]
          }
        }
      }
    }
    return this.mergeDeep(target, ...sources)
  }
  /**
   * 深拷贝对象
   * @param {Object} source 原对象
   * @returns {*} 新对象
   */
  deepClone (source) {
    if (!validator.isObject(source)) {
      throw new Error('Error arguments.')
    }
    const targetObj = source.constructor === Array ? [] : {}
    for (const keys in source) {
      if (source.hasOwnProperty(keys)) {
        if (source[keys] && typeof source[keys] === 'object') {
          targetObj[keys] = source[keys].constructor === Array ? [] : {}
          targetObj[keys] = this.deepClone(source[keys])
        } else {
          targetObj[keys] = source[keys]
        }
      }
    }
    return targetObj
  }
  /**
   * 获取对象类型，返回类型字符串
   * @param obj
   * @return {string|*}
   */
  getType (obj) {
    const toString = Object.prototype.toString
    const map = {
      '[object Boolean]': 'boolean',
      '[object Number]': 'number',
      '[object String]': 'string',
      '[object Function]': 'function',
      '[object Array]': 'array',
      '[object Date]': 'date',
      '[object RegExp]': 'regExp',
      '[object Undefined]': 'undefined',
      '[object Null]': 'null',
      '[object Object]': 'object'
    }
    if (obj instanceof Element) {
      return 'element'
    }
    return map[toString.call(obj)]
  }
}

export default ObjectOperation
