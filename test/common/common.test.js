import { common } from '../../src/index'

test('实例化 Common', () => {
  expect(common).not.toBe(null)
})
test('深度递归合并对象', () => {
  expect(common.mergeDeep({ a: 'test', c: 'test3' }, { a: 'test23', b: 'test2' }, { a: 'test1', d: 'd1' })).toEqual({ a: 'test1', c: 'test3', b: 'test2', d: 'd1' })
})
test('生成随机字符串', () => {
  expect(common.guid()).not.toBe(null)
})
