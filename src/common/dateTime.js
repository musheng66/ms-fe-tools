class DateTime {
  /**
   * @description 构造方法
   * @constructor
   */
  constructor() {
  }

  /**
   * 获取当前时间，并格式化
   * @param {string|null} format 默认格式 {y}-{m}-{d} {h}:{i}:{s}
   * @return {*}
   */
  now (format = null) {
    return this.format(new Date(), format)
  }
  /**
   * @description 将时间按指定格式处理并返回
   * @param {string|number|object|null} time
   * @param {string|null} cFormat
   * @returns {string|null} time
   */
  format (time, cFormat = null) {
    if (arguments.length === 0) { return null }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    let date
    if (typeof time === 'object') {
      date = time
    } else {
      if (('' + time).length === 10) time = parseInt(time) * 1000
      date = new Date(String(time))
    }
    const formatObj = {
      y: date.getFullYear(),
      m: date.getMonth() + 1,
      d: date.getDate(),
      h: date.getHours(),
      i: date.getMinutes(),
      s: date.getSeconds(),
      a: date.getDay()
    }
    return format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
      let value = formatObj[key]
      if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
      if (result.length > 0 && value < 10) {
        value = '0' + value
      }
      return value || 0
    })
  }
  /**
   * @description 计算给定时间距今的时间
   * @param {number|string|object} time 时间，可能是时间戳
   * @return {string} toDate 一般格式为：xx 天前
   */
  toDate (time) {
    let date
    if (typeof time === 'object') {
      date = time
    } else {
      if (('' + time).length === 10) time = parseInt(time) * 1000
      date = new Date(Number(time))
    }
    const now = Date.now()
    const diff = (now - date) / 1000
    if (diff < 30) {
      return '刚刚'
    } else if (diff < 3600) { // less 1 hour
      return Math.floor(diff / 60) + ' 分钟前'
    } else if (diff < 3600 * 24) {
      return Math.floor(diff / 3600) + ' 小时前'
    } else {
      return Math.floor(diff / (3600 * 24)) + ' 天前'
    }
  }
  /**
   * @description 计算给定时间距今的时间
   * @param {number|string|object} time 时间，可能是时间戳
   * @return {string} toDate 一般格式为：xx 天 xx 小时 xx 分
   */
  fromLast (time) {
    let date
    if (typeof time === 'object') {
      date = time
    } else {
      if (('' + time).length === 10) time = parseInt(time) * 1000
      date = new Date(Number(time))
    }
    let timeCalcString = ''
    const now = Date.now()
    let diff = (now - date) / 1000
    // 计算天
    let timeCalcD = Math.floor(diff / (3600 * 24))
    if (timeCalcD >= 1) {
      diff -= timeCalcD * 3600 * 24
    }
    // 计算小时，多于 1 天时需要减除 1 天的小时数再计算小时
    let timeCalcH = Math.floor(diff / 3600)
    if (timeCalcH >= 1) {
      diff -= timeCalcH * 3600
    }
    // 计算分
    let timeCalcM = Math.floor(diff / 60)
    if (timeCalcD >= 1) timeCalcString += timeCalcD + ' 天 '
    if (timeCalcH >= 1) timeCalcString += timeCalcH + ' 小时 '
    if (timeCalcM >= 1) timeCalcString += timeCalcM + ' 分'
    return timeCalcString
  }

  /**
   * 根据时间戳计算从开始到结束时间的差
   * @param startTimestamp 起始时间戳
   * @param endTimestamp 结束时间戳
   * @return {string} lastTimeStr 一般格式为：xx天 xx小时 xx分 xx秒
   */
  lastLong (startTimestamp, endTimestamp) {
    let startTime = Number(startTimestamp)
    let endTime = Number(endTimestamp)
    if (!(typeof startTime === 'number' && !isNaN(startTime)) || !(typeof endTime === 'number' && !isNaN(endTime))) return ''
    if (String(startTime).length > 10) startTime = (startTime / 1000).toFixed(0)
    if (String(endTime).length > 10) endTime = (endTime / 1000).toFixed(0)
    const lastTime = endTime - startTime
    if (lastTime < 0) return ''
    let lastTimeStr = ''
    let days = (lastTime / (60 * 60 * 24)).toFixed(0)
    let hours = ((lastTime % (60 * 60 * 24)) / (60 * 60)).toFixed(0)
    let minutes = ((lastTime % (60 * 60)) / (60)).toFixed(0)
    let seconds = (lastTime % 60).toFixed(0)
    if(days > 0) lastTimeStr += days + '天 '
    if(hours > 0) lastTimeStr += hours + '小时 '
    if(minutes > 0) lastTimeStr += minutes + '分钟 '
    if(seconds > 0) lastTimeStr += seconds + '秒'
    return lastTimeStr
  }
}

export default DateTime
