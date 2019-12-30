import Validate from '../validate'

class SessionStorage {
  constructor () {
    if (!window) return Error('Can not init SessionStorage because there is no Window object.')
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
    sessionStorage.setItem(name, JSON.stringify(obj))
  }
  /**
   * 获取
   * @param {Object} params
   */
  get (params) {
    let { name, debug } = params
    let obj = sessionStorage.getItem(name)
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
    sessionStorage.removeItem(name)
  }
  /**
   * 获取全部
   */
  getAll () {
    let list = []
    for (let i = 0; i < sessionStorage.length; i++) {
      list.push({ name: sessionStorage.key(i), content: this.get({ name: sessionStorage.key(i) }) })
    }
    return list
  }
  /**
   * 清空
   */
  removeAll () {
    sessionStorage.clear()
  }
}

export default SessionStorage