/* eslint-disable */
import { Tree } from '../../src/index'
let jsonArrayTree = null
let tree = [
  { id: '1', name: 'root'},
  { id: 'a2', order: 2, parentId: '1' },
  { id: 'a1', order: 1, parentId: '1' },
  { id: 'ca1', parentId: 'a1' },
  { id: 'ca2', parentId: 'a2' }
]
test('实例化 JsonArrayTree', () => {
  jsonArrayTree = new Tree.JsonArrayTree(tree)
  expect(jsonArrayTree).not.toBe(null)
})
test('根据 id 获取节点内容', () => {
  expect(jsonArrayTree.getNodeByIdentifier('a1')).toEqual({ id: 'a1', order: 1, parentId: '1' })
})
test('根据 id 获取父节点内容', () => {
  expect(jsonArrayTree.getParentNodeByIdentifier('a1')).toEqual({ id: '1', name: 'root'})
})
test('根据 id 添加节点', () => {
  expect(jsonArrayTree.addNodeByIdentifier({ id: 'b1' }, 'a1')).toEqual([
    { id: '1', name: 'root'},
    { id: 'a2', order: 2, parentId: '1' },
    { id: 'b1', parentId: 'a1' },
    { id: 'a1', order: 1, parentId: '1' },
    { id: 'ca1', parentId: 'a1' },
    { id: 'ca2', parentId: 'a2' }
  ])
})
test('根据 id 编辑节点', () => {
  expect(jsonArrayTree.updateNodeByIdentifier({ id: 'b1', name: 'updated', parentId: 'a2' }, 'b1')).toEqual([
    { id: '1', name: 'root'},
    { id: 'a2', order: 2, parentId: '1' },
    { id: 'b1', name: 'updated', parentId: 'a2' },
    { id: 'a1', order: 1, parentId: '1' },
    { id: 'ca1', parentId: 'a1' },
    { id: 'ca2', parentId: 'a2' }
  ])
})
test('根据 id 删除节点', () => {
  expect(jsonArrayTree.deleteNodeByIdentifier('a2')).toEqual([
    { id: '1', name: 'root'},
    { id: 'a1', order: 1, parentId: '1' },
    { id: 'ca1', parentId: 'a1' }
  ])
})
