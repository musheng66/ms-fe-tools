import Validate from '../validate'

class Common {
  /**
   * 构造方法
   */
  constructor() {
    this._validate = new Validate()
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
    if (this._validate.isObject(target) && this._validate.isObject(source)) {
      for (const key in source) {
        if (this._validate.isObject(source[key])) {
          if (!target[key]) {
            Object.assign(target, {
              [key]: {} })
          }
          this.mergeDeep(target[key], source[key])
        } else {
          Object.assign(target, {
            [key]: source[key] })
        }
      }
    }
    return this.mergeDeep(target, ...sources)
  }
}

export default Common
