import Validate from '../validate'

class Cookie {
  constructor () {
    if (!document) return Error('Can not init Cookie because there is no Document object.')
    this._validate = new Validate()
  }
  /**
   * 存储
   * @param {Object} params
   */
  set (params) {
  }
  /**
   * 获取
   * @param {Object} params
   */
  get (params) {
  }
  /**
   * 删除
   * @param {Object} params
   */
  remove (params) {
  }
  /**
   * 获取全部
   */
  getAll () {
  }
  /**
   * 清空
   */
  removeAll () {
  }
}

export default Cookie
