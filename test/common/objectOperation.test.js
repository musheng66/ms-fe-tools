import { common } from '../../src/index'

const objectOperation = common.objectOperation

test('深度递归合并对象', () => {
  expect(objectOperation.mergeDeep({ a: 'test', c: 'test3' }, { a: 'test23', b: 'test2' }, { a: 'test1', d: 'd1' })).toEqual({ a: 'test1', c: 'test3', b: 'test2', d: 'd1' })
})
test('深拷贝对象', () => {
  expect(objectOperation.deepClone({ a: 'test', c: { a: 'test23', b: 'test2', d: { e: 2 } } })).toEqual({ a: 'test', c: { a: 'test23', b: 'test2', d: { e: 2 } } })
})
test('获取对象类型：null', () => {
  expect(objectOperation.getType(null)).toEqual('null')
})