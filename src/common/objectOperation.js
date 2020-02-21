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
}

export default ObjectOperation
