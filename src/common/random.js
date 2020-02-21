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
  guid () {
    try {
      const s1 = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
      const s2 = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
      const s3 = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
      return s1 + s2 + s3
    } catch (e) {
      return null
    }
  }
}

export default Random
