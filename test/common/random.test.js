import { common } from '../../src/index'

test('生成随机字符串', () => {
  expect(common.random.guid()).not.toBe(null)
})
