import Validate from '../validate'

class LocalStorage {
  constructor () {
    if (!window) return Error('Can not init Cookie because there is no Window object.')
    this.validate = new Validate()
  }
  /**
   * 存储
   * @param {Object} params
   */
  set (params) {
    let { name, content } = params
    let obj = {
      dataType: typeof (content),
      content: content,
      datetime: new Date().getTime()
    }
    localStorage.setItem(name, JSON.stringify(obj))
  }
  /**
   * 获取
   * @param {Object} params
   */
  get (params) {
    let { name, debug } = params
    let obj = localStorage.getItem(name)
    let content = null
    if (debug) {
      return obj
    }
    if (this.validate.isNull(obj)) return content
    try {
      obj = JSON.parse(obj)
    } catch (e) {
      return obj
    }
    switch (obj.dataType) {
      case 'string':
        content = obj.content
        break
      case 'number':
        content = Number(obj.content)
        break
      case 'boolean':
        content = Boolean(obj.content)
        break
      case 'object':
        content = obj.content
        break
      default:
        content = obj.content
        break
    }
    return content
  }
  /**
   * 删除
   * @param {Object} params
   */
  remove (params) {
    let { name } = params
    localStorage.removeItem(name)
  }
  /**
   * 获取全部
   */
  getAll () {
    let list = []
    for (let i = 0; i < localStorage.length; i++) {
      list.push({ name: localStorage.key(i), content: this.get({ name: localStorage.key(i) }) })
    }
    return list
  }
  /**
   * 清空
   */
  removeAll () {
    localStorage.clear()
  }
}

export default LocalStorage