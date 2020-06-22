/* eslint-disable */
import { common } from '../../src/index'

test('当前日期', () => {
  const result = common.dateTime.now('{y} 年 {m} 月 {d} 日 {h}:{i}:{s}')
  console.log(result)
  expect(result).not.toBe(0)
})

test('格式化时间', () => {
  const result = common.dateTime.format(new Date())
  console.log(result)
  expect(result).not.toBe(0)
})

test('获取距今时间，xx天前', () => {
  const result = common.dateTime.toDate(1588936360404)
  console.log(result)
  expect(result).not.toBe(null)
})

test('获取距今时间，xx天xx小时xx分', () => {
  const result = common.dateTime.fromLast(1588936360404)
  console.log(result)
  expect(result).not.toBe('')
})
