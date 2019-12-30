import Validate from '../../src/validate/index'
let validator = null
test('实例化 Validate', () => {
  validator = new Validate()
  expect(validator).not.toBe(null)
})
test('判断对象是否为空', () => {
  expect(validator.isNull(null)).toBe(true)
})
test('判断是否为合法 URL', () => {
  expect(validator.isURL('http://1.com')).toBe(true)
})
test('判断对象是否为座机号码', () => {
  expect(validator.isTel('000-23113166')).toBe(true)
})
test('判断对象是否为手机号码', () => {
  expect(validator.isMobile('18566011166')).toBe(true)
})
test('判断对象是否为 email', () => {
  expect(validator.isEmail('poetchen@art.com')).toBe(true)
})
test('判断对象是否为身份证号', () => {
  expect(validator.isIdCard('11011119701001011X')).toBe(true)
})