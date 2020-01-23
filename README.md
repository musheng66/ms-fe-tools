# 沐圣的前端工具类库（建设中）
  * 方便使用的前端工具类库

## 包括
  * Validate
  * Common
  * Store
  * Tree
  * ...

## 用法
### 基本用法
```html
  <script src="ms-fe-tools.js"></script>
  <script>
    // 创建实例
    var validator = new MsFeTools.Validate()
    // 调用方法
    validator.isNull(null)
  </script>
```
### ES6用法
#### 项目引入
```
  npm install ms-fe-tools
```
#### 使用方法
```javascript
  // 引入
  import MsFeTools from 'ms-fe-tools'
  // 创建实例
  let jsonTree = new MsFeTools.Tree.JsonTree()
  // 调用方法
  jsonTree.getNodeByIdentifier('treeId')
```

## 类
  项目中包含的工具类。

### Common
  常用工具方法。
#### 初始化
```javascript
  let common = new Common()
```
#### mergeDeep
  深度合并。
```javascript
  const result = common.mergeDeep({ a: 'test', c: 'test3' }, { a: 'test1', b: 'test2' })
```
#### guid
  生成随机字符串。
```javascript
  const result = common.guid()
```

### Tree
  树形结构的数据处理。
#### JsonTree
  处理 json 格式的树形结构数据。
```javascript
  // 树形结构数据
  let tree = { id: '1', name: 'tree1', children: [{ id: 'a1', name: 'treea1' }] }
  
  // 实例化
  const jsonTree = new MsFeTools.Tree.JsonTree(tree, { identifier: 'id', childrenIdentifier: 'children' })
  
  // 根据 identifier 获取节点
  const node = jsonTree.getNodeByIdentifier('a1')
  
  // 根据 identifier 获取父节点
  const parentNode = jsonTree.getParentNodeByIdentifier('a1')
  
  // 向指定节点位置添加子节点
  const treeAdded = jsonTree.addNodeByIdentifier({ id: 'b1', name: 'treeb1' }, 'a1')
  
  // 更新指定节点内容
  const treeUpdated = jsonTree.updateNodeByIdentifier({ id: 'b1', name: 'updated treeb1' }, 'b1')
  
  // 删除指定节点
  const treeDeleted = jsonTree.deleteNodeByIdentifier('b1')
```