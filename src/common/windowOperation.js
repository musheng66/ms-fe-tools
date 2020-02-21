class WindowOperation {
  /**
   * 构造方法
   */
  constructor() {
  }
  /**
   * 打开新窗口
   * @param {string} url
   * @param {string} title
   * @param {number} w
   * @param {number} h
   */
  openWindow (url = '', title = '', w = 0, h = 0) {
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
}

export default WindowOperation
