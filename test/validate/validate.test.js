import Validate from '../../src/validate/index'
const validator = new Validate()
test('判断对象是否为空，参数：null', () => {
  expect(validator.isNull(null)).toBe(true)
})