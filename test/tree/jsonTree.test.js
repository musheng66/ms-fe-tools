/* eslint-disable */
import { Tree } from '../../src/index'
let jsonTree = null
let tree = { identifier: '1', children: [{ identifier: 'a1' }] }
test('实例化 JsonTree', () => {
  jsonTree = new Tree.JsonTree(tree, { identifier: 'identifier' })
  expect(jsonTree).not.toBe(null)
})
test('根据 identifier 获取节点内容', () => {
  expect(jsonTree.getNodeByIdentifier('a1')).toEqual({ identifier: 'a1' })
})
test('根据 identifier 获取节点内容，未获取到', () => {
  expect(jsonTree.getNodeByIdentifier('c1')).toEqual(null)
})
test('根据 identifier 获取父节点内容', () => {
  expect(jsonTree.getParentNodeByIdentifier('a1')).toEqual({ identifier: '1', children: [{ identifier: 'a1' }] })
})
test('根据 identifier 获取父节点内容，未获取到', () => {
  expect(jsonTree.getParentNodeByIdentifier('1')).toEqual(null)
})
test('根据 identifier 添加节点', () => {
  expect(jsonTree.addNodeByIdentifier({ identifier: 'b1' }, 'a1')).toEqual({ identifier: '1', children: [{ identifier: 'a1', children: [{ identifier: 'b1' }] }] })
})
test('根据 identifier 编辑节点', () => {
  expect(jsonTree.updateNodeByIdentifier({ identifier: 'b1', name: 'updated' }, 'b1')).toEqual({ identifier: '1', children: [{ identifier: 'a1', children: [{ identifier: 'b1', name: 'updated' }] }] })
})
test('根据 identifier 删除节点', () => {
  expect(jsonTree.deleteNodeByIdentifier('b1')).toEqual({ identifier: '1', children: [{ identifier: 'a1', children: [] }] })
})
test('编辑根节点', () => {
  expect(jsonTree.updateNodeByIdentifier({ identifier: 'r1', name: 'updated' }, '1')).toEqual({ identifier: 'r1', name: 'updated' })
})
test('删除根节点', () => {
  expect(jsonTree.deleteNodeByIdentifier('r1')).toEqual(null)
})
