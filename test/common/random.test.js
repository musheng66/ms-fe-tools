import { common } from '../../src/index'

const random = common.random

test('生成随机字符串', () => {
  expect(random.guid()).not.toBe(null)
})
