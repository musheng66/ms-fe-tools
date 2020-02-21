import validator from '../validator'

class LocalStorage {
  constructor () {
    if (validator.isNull(window)) return Error('Can not init LocalStorage because there is no Window object.')
  }
  /**
   * 存储
   * @param {object} params
   */
  set (params) {
    let { name, content } = params
    let obj = {
      content: content,
      dataType: typeof (content),
      dateTime: new Date().getTime()
    }
    localStorage.setItem(name, JSON.stringify(obj))
  }
  /**
   * 获取
   * @param {object} params
   */
  get (params) {
    let { name, debug } = params
    let obj = localStorage.getItem(name)
    let content = null
    if (debug) {
      return obj
    }
    if (validator.isNull(obj)) return content
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
   * @param {object} params
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
