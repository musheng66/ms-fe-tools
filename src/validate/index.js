class Validate {
  /**
   * 判断是否对象
   * @param {Object} obj
   * @return {boolean} result
   */
  isObject (obj) {
    return (!this.isNull(obj) && typeof obj === 'object' && !Array.isArray(obj))
  }
  /**
   * 判断是否为 null 或 undefined
   * @param {Object} val
   * @returns {boolean} result
   */
  isNull (val) {
    if (typeof val === 'boolean') return false
    if (typeof val === 'number') return false
    if (typeof val === 'string') return false
    if (typeof val === 'function') return false
    if (typeof val === 'undefined') return true
    if (typeof val === 'object') {
      if (val instanceof Array) return false
      if (val === null) return true
      try {
        if (JSON.stringify(val) === '{}') return true
      } catch (e) {
        return false
      }
    }
  }
  /**
   * URL地址是否合法
   * @param {String} url
   * @returns {boolean} result
   */
  isURL (url) {
    if (this.isNull(url)) return false
    const isURL = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/
    return isURL.test(url)
  }
  /**
   * validate email
   * @param {String} email
   * @returns {boolean} result
   */
  isEmail (email) {
    if (this.isNull(email)) return false
    const isEmail = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return isEmail.test(email)
  }
  /**
   * 判断手机号码是否正确
   * @param {String} phone
   * @returns {boolean} result
   */
  isMobile (phone) {
    if (this.isNull(phone)) return false
    const isPhone = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
    return isPhone.test(phone)
  }
  /**
   * 电话号码是否合法
   * @param {String} tel
   * @returns {boolean} result
   */
  isTel (tel) {
    if (this.isNull(tel)) return false
    const isTel = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/
    return isTel.test(tel)
  }
  /**
   * 判断身份证号码
   * @param {String} code
   * @returns {boolean} result
   */
  isIdCard (code) {
    if (this.isNull(code)) return false
    const isIdCard = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    return isIdCard.test(code)
  }
}

export default Validate
