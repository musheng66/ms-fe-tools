import Validate from '../validate'
import Common from '../common'

class Cookie {
  constructor (defaultAttributes = {}) {
    this._validate = new Validate()
    if (this._validate.isNull(document)) return Error('Can not init Cookie because there is no Document object.')
    if (this._validate.isNull(defaultAttributes)) this.defaultAttributes = { path: '/' }
    this._common = new Common()
  }
  /**
   * 存储
   * @param {string} key
   * @param {object} value
   * @param {object} attributes
   */
  set (key, value, attributes) {
    attributes = this._common.mergeDeep({}, this.defaultAttributes, attributes)
    if (typeof attributes.expires === 'number') {
      attributes.expires = new Date(Date.now() + attributes.expires * 864e5)
    }
    if (attributes.expires) {
      attributes.expires = attributes.expires.toUTCString()
    }
    value = _writeRfc6265(value, key)
    key = encodeURIComponent(key).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape)
    let attributesString = ''
    for (let attributeName in attributes) {
      if (!attributes[attributeName]) continue
      attributesString += '; ' + attributeName
      if (attributes[attributeName] === true) continue
      // Considers RFC 6265 section 5.2:
      // ...
      // 3.  If the remaining unparsed-attributes contains a %x3B (";") character:
      // Consume the characters of the unparsed-attributes up to,
      // not including, the first %x3B (";") character.
      // ...
      attributesString += '=' + attributes[attributeName].split(';')[0]
    }
    return (document.cookie = key + '=' + value + attributesString)
  }
  /**
   * 获取
   * @param {string} key
   * @param {object} attributes
   */
  get (key = '', attributes = {}) {
    const cookies = document.cookie ? document.cookie.split('; ') : []
    let jar = {}
    for (let i = 0; i < cookies.length; i++) {
      let parts = cookies[i].split('=')
      let cookie = parts.slice(1).join('=')
      if (cookie[0] === '"') {
        cookie = cookie.slice(1, -1)
      }
      try {
        let name = _readRfc6265(parts[0])
        jar[name] = _readRfc6265(cookie, name)
        if (key === name) {
          break
        }
      } catch (e) {}
    }
    return key !== '' ? jar[key] : jar
  }
  /**
   * 删除
   * @param {string} key
   * @param {object} attributes
   */
  remove (key, attributes = {}) {
    this.set(
      key,
      '',
      this._common.mergeDeep({}, attributes, {
        expires: -1
      })
    )
  }
  /**
   * 清空
   */
  removeAll () {
    const cookies = this.get()
    for (let cookie in cookies) {
      if (cookies.hasOwnProperty(cookie)) this.remove(cookie)
    }
  }
}

export default Cookie

function _readRfc6265(value) {
  return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
}

function _writeRfc6265(value) {
  return encodeURIComponent(value).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
}