class Random {
  /**
   * 构造方法
   */
  constructor() {
  }
  /**
   * 生成 16 进制随机数字符串
   * @returns {string|null} guid
   */
  guid (separator = '') {
    try {
      let g4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
      }
      return g4() + g4() + separator + g4() + separator + g4() + separator + g4() + separator + g4() + g4() + g4()
    } catch (e) {
      return null
    }
  }

  /**
   * 基于版本 4 生成 UUID
   * 参考：https://www.jianshu.com/p/d77f3ef0868a
   * @param separator 分割线
   */
  UUID (separator = '') {
    try {
      const u1 = Math.floor((1 + Math.random()) * 0x100000000).toString(16).substring(1)
      const u2 = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
      const u3 = '4' + Math.floor((1 + Math.random()) * 0x1000).toString(16).substring(1)
      const u4 = ['8', '9', 'a', 'b'][Math.floor(Math.random() * 4)] + Math.floor((1 + Math.random()) * 0x1000).toString(16).substring(1)
      const u5 = Math.floor((1 + Math.random()) * 0x1000000000000).toString(16).substring(1)
      return u1 + separator + u2 + separator + u3 + separator + u4 + separator + u5
    } catch (e) {
      return null
    }
  }
}

export default Random
