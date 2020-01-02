import Common from '../../src/common/index'
let common = null
test('实例化 Common', () => {
  common = new Common()
  expect(common).not.toBe(null)
})
test('深度递归合并对象', () => {
  expect(common.mergeDeep({ a: 'test', c: 'test3' }, { a: 'test1', b: 'test2' })).toEqual({ a: 'test1', c: 'test3', b: 'test2' })
})
