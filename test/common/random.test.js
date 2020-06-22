/* eslint-disable */
import { common } from '../../src/index'

test('生成随机字符串 guid', () => {
  const guid = common.random.guid()
  console.log(guid)
  expect(guid).not.toBe(null)
})

test('生成随机字符串 UUID', () => {
  const UUID = common.random.UUID('-')
  console.log(UUID)
  expect(UUID).not.toBe(null)
})
