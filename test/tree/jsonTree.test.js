import JsonTree from '../../src/tree'
let jsonTree = null
test('实例化 JsonTree', () => {
  jsonTree = new JsonTree({ identifier: 'identifier' })
  expect(jsonTree).not.toBe(null)
})
let tree = { identifier: '1', children: [{ identifier: 'a1' }] }
test('根据 identifier 获取节点内容', () => {
  expect(jsonTree.getNodeByIdentifier(tree, 'a1')).toEqual({ identifier: 'a1' })
})
test('根据 identifier 获取父节点内容', () => {
  expect(jsonTree.getParentNodeByIdentifier(tree, 'a1')).toEqual({ identifier: '1', children: [{ identifier: 'a1' }] })
})
test('根据 identifier 添加节点', () => {
  jsonTree.addNodeByIdentifier(tree, { identifier: 'b1' }, 'a1')
  expect(tree).toEqual({ identifier: '1', children: [{ identifier: 'a1', children: [{ identifier: 'b1' }] }] })
})
test('根据 identifier 编辑节点', () => {
  jsonTree.updateNodeByIdentifier(tree, { identifier: 'b1', name: 'updated' }, 'b1')
  expect(tree).toEqual({ identifier: '1', children: [{ identifier: 'a1', children: [{ identifier: 'b1', name: 'updated' }] }] })
})
test('根据 identifier 删除节点', () => {
  jsonTree.deleteNodeByIdentifier(tree, 'b1')
  expect(tree).toEqual({ identifier: '1', children: [{ identifier: 'a1', children: [] }] })
})