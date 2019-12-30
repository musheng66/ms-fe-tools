class Validate {
  /**
   * 判断是否为 null 或 undefined
   * @param {Object} val
   * @returns {boolean} result
   */
  isNull (val) {
    if (typeof val === 'boolean') {
      return false
    }
    if (typeof val === 'number') {
      return false
    }
    if (val instanceof Array) {
      if (val.length === 0) return true
    } else if (val instanceof Object) {
      if (JSON.stringify(val) === '{}') return true
    } else {
      return (String(val) === 'null' || String(val) === 'undefined')
    }
    return false
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
    // let result = false
    // const city = {
    //   11: '北京', 12: '天津', 13: '河北', 14: '山西', 15: '内蒙古',
    //   21: '辽宁', 22: '吉林', 23: '黑龙江 ',
    //   31: '上海', 32: '江苏', 33: '浙江', 34: '安徽', 35: '福建', 36: '江西', 37: '山东',
    //   41: '河南', 42: '湖北 ', 43: '湖南', 44: '广东', 45: '广西', 46: '海南',
    //   50: '重庆', 51: '四川', 52: '贵州', 53: '云南', 54: '西藏 ',
    //   61: '陕西', 62: '甘肃', 63: '青海', 64: '宁夏', 65: '新疆',
    //   71: '台湾',
    //   81: '香港', 82: '澳门',
    //   91: '国外 '
    // }
    // if (code.length === 18) {
    //   if (!code || !/(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(code)) {
    //   } else if (!city[code.substr(0, 2)]) {
    //   } else {
    //     result = true
    //   }
    // }
    const isIdCard = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    return isIdCard.test(code)
  }
}

export default Validate