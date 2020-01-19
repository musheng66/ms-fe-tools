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
  /**
   * 打开新窗口
   * @param {sting} url
   * @param {sting} title
   * @param {number} w
   * @param {number} h
   */
  openWindow (url, title, w, h) {
    // Fixes dual-screen position                            Most browsers       Firefox
    const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left
    const dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top
    const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width
    const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height
    const left = ((width / 2) - (w / 2)) + dualScreenLeft
    const top = ((height / 2) - (h / 2)) + dualScreenTop
    const newWindow = window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left)
    // Puts focus on the newWindow
    if (window.focus) {
      newWindow.focus()
    }
  }
  /**
   * 获取随机ID，组件拖到预览视图后就会被设置个ID
   * @returns {string} guid
   */
  guid () {
    const s1 = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
    const s2 = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
    const s3 = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
    return s1 + s2 + '-' + s3
  }
}

export default Common
