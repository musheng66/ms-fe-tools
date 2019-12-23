class Validate {
  /**
   * URL地址是否合法
   * @param {*} url
   */
  isURL (url) {
    const urlRegex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
    return urlRegex.test(url)
  }
  /**
   * 电话号码是否合法
   * @param {*} s
   */
  isTel (s) {
    return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)
  }
  /**
   * validate email
   * @param email
   * @returns {boolean}
   */
  isEmail (email) {
    const re = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  }
  /**
   * 判断身份证号码
   * @param code
   * @returns {boolean}
   */
  isIdCard (code) {
    let result = true
    // let msg = ''
    const city = {
      11: '北京', 12: '天津', 13: '河北', 14: '山西', 15: '内蒙古',
      21: '辽宁', 22: '吉林', 23: '黑龙江 ',
      31: '上海', 32: '江苏', 33: '浙江', 34: '安徽', 35: '福建', 36: '江西', 37: '山东',
      41: '河南', 42: '湖北 ', 43: '湖南', 44: '广东', 45: '广西', 46: '海南',
      50: '重庆', 51: '四川', 52: '贵州', 53: '云南', 54: '西藏 ',
      61: '陕西', 62: '甘肃', 63: '青海', 64: '宁夏', 65: '新疆',
      71: '台湾',
      81: '香港', 82: '澳门',
      91: '国外 '
    }
    if (!this.isNull(code) && code !== '') {
      if (code.length === 18) {
        if (!code || !/(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(code)) {
          // msg = '证件号码格式错误'
        } else if (!city[code.substr(0, 2)]) {
          // msg = '地址编码错误'
        } else {
          // 18位身份证需要验证最后一位校验位
          code = code.split('')
          // ∑(ai×Wi)(mod 11)
          // 加权因子
          const factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
          // 校验位
          const parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2, 'x']
          let sum = 0
          let ai = 0
          let wi = 0
          for (let i = 0; i < 17; i++) {
            ai = code[i]
            wi = factor[i]
            sum += ai * wi
          }
          if (parity[sum % 11] !== code[17]) {
            // msg = '证件号码校验位错误'
          } else {
            result = false
          }
        }
      } else {
        // msg = '证件号码长度不为18位'
      }
    } else {
      // msg = '证件号码不能为空'
    }
    return result
  }

  /**
   * 判断手机号码是否正确
   * @param phone
   * @returns {boolean}
   */
  isMobile (phone) {
    let list = []
    let result = true
    let msg = ''
    const isPhone = /^0\d{2,3}-?\d{7,8}$/
    // 增加134 减少|1349[0-9]{7}，增加181,增加145，增加17[678]
    if (!this.isNull(phone) && phone !== '') {
      if (phone.length === 11) {
        if (isPhone.test(phone)) {
          msg = '手机号码格式不正确'
        } else {
          result = false
        }
      } else {
        msg = '手机号码长度不为11位'
      }
    } else {
      msg = '手机号码不能为空'
    }
    list.push(result)
    list.push(msg)
    return list
  }

  /**
   * 判断是否为空
   * @param val
   * @returns {boolean}
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
}

export default Validate