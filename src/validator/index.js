class Validator {
  /**
   * 判断是否对象
   * @param {object} obj
   * @return {boolean} result
   */
  isObject (obj) {
    return (!this.isNull(obj) && typeof obj === 'object' && !Array.isArray(obj))
  }
  /**
   * 判断是否为 null 或 undefined
   * @param {object} val
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
   * @param {string} url
   * @returns {boolean} result
   */
  isURL (url) {
    if (this.isNull(url)) return false
    const isURL = /^(?:(http(s)?|ftp):\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/ // eslint-disable-line
    return isURL.test(url)
  }
  /**
   * 验证电子邮件地址是否合法
   * @param {string} email
   * @returns {boolean} result
   */
  isEmail (email) {
    if (this.isNull(email)) return false
    const isEmail = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return isEmail.test(email)
  }
  /**
   * 判断手机号码是否合法
   * @param {string} mobile
   * @returns {boolean} result
   */
  isMobile (mobile) {
    if (this.isNull(mobile)) return false
    const isMobile = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
    return isMobile.test(mobile)
  }
  /**
   * 电话号码是否合法
   * @param {string} tel
   * @returns {boolean} result
   */
  isTel (tel) {
    if (this.isNull(tel)) return false
    const isTel = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/
    return isTel.test(tel)
  }
  /**
   * 判断身份证号码是否合法
   * @param {string} code
   * @returns {boolean} result
   */
  isIdCard (code) {
    if (this.isNull(code)) return false
    const isIdCard = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    return isIdCard.test(code)
  }
  /**
   * 判断是否小写字母
   * @param {string} str
   * @returns {boolean} result
   */
  isLowerCase (str) {
    if (this.isNull(str)) return false
    const isLowerCase = /^[a-z]+$/
    return isLowerCase.test(str)
  }
  /**
   * 判断是否大写字母
   * @param {string} str
   * @returns {boolean} result
   */
  isUpperCase (str) {
    if (this.isNull(str)) return false
    const isUpperCase = /^[A-Z]+$/
    return isUpperCase.test(str)
  }
  /**
   * 判断是否英文大小写字母
   * @param {string} str
   * @returns {boolean} result
   */
  isAlphabets (str) {
    if (this.isNull(str)) return false
    const isAlphabets = /^[A-Za-z]+$/
    return isAlphabets.test(str)
  }
  /**
   * 判断是否中文
   * @param {string} str
   * @returns {boolean} result
   */
  isChineseCharacters (str) {
    if (this.isNull(str)) return false
    const isChineseCharacters = /^[\u4e00-\u9fa5]+$/
    return isChineseCharacters.test(str)
  }
}

export default new Validator()
