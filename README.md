# 沐圣的前端工具类库（建设中）
  * 方便使用的前端工具类库

## 包括
  * Tree：处理树形结构数据的类
  * validator：验证工具
  * store：浏览器存储工具
  * common：其他常用工具
  * ...

## 用法
### 基本用法
```html
  <script src="ms-fe-tools.js"></script>
  <script>
    // MsFeTools：类库导出的名称
    var result = MsFeTools.validator.isNull(null)
  </script>
```
### ES6 用法
#### 引入
```
  npm install ms-fe-tools
```
#### 使用方法
```javascript
  // 按需引入
  import { validator } from 'ms-fe-tools'
  // 调用方法
  const result = validator.isNull(null)
```

## 类
  项目中包含的工具类。示例以 ES6 为主。

### Tree
  树形结构的数据处理类，使用前需实例化。
#### 引入
```javascript
  import { Tree } from 'ms-fe-tools'
```
#### JsonTree
  处理 json 格式的树形结构数据。
```javascript
  // 树形结构数据
  let tree = { id: '1', name: 'tree1', children: [{ id: 'a1', name: 'treea1' }] }
  
  // 实例化
  const jsonTree = new Tree.JsonTree(tree, { identifier: 'id', childrenIdentifier: 'children' })
  
  // 根据 identifier 获取节点，未获取到则返回 null
  const node = jsonTree.getNodeByIdentifier('a1')
  
  // 根据 identifier 获取父节点，未获取到则返回 null
  const parentNode = jsonTree.getParentNodeByIdentifier('a1')
  
  // 向指定节点位置添加子节点
  const treeAdded = jsonTree.addNodeByIdentifier({ id: 'b1', name: 'treeb1' }, 'a1')
  
  // 更新指定节点内容
  const treeUpdated = jsonTree.updateNodeByIdentifier({ id: 'b1', name: 'updated treeb1' }, 'b1')
  
  // 删除指定节点
  const treeDeleted = jsonTree.deleteNodeByIdentifier('b1')
```
#### JsonArrayTree
  处理 json 数组格式的树形结构数据。
```javascript
  // 树形结构数据
  let tree = [
               { id: '1', name: 'root'},
               { id: 'a2', order: 2, parentId: '1' },
               { id: 'a1', order: 1, parentId: '1' },
               { id: 'ca1', parentId: 'a1' },
               { id: 'ca2', parentId: 'a2' }
             ]
  
  // 实例化
  const jsonArrayTree = new Tree.JsonArrayTree(tree, { identifier: 'id', parentIdentifier: 'parentId' })
  
  // 根据 identifier 获取节点，未获取到则返回 null
  const node = jsonArrayTree.getNodeByIdentifier('a1')
  
  // 根据 identifier 获取父节点，未获取到则返回 null
  const parentNode = jsonArrayTree.getParentNodeByIdentifier('a1')
  
  // 向指定节点位置添加子节点
  const treeAdded = jsonArrayTree.addNodeByIdentifier({ id: 'b1' }, 'a1')
  
  // 更新指定节点内容
  const treeUpdated = jsonArrayTree.updateNodeByIdentifier({ id: 'b1', name: 'updated treeb1' }, 'b1')
  
  // 删除指定节点
  const treeDeleted = jsonArrayTree.deleteNodeByIdentifier('a1')
```

### validator
  常用工具方法。
#### 引入
```javascript
  // 按需引入
  import { validator } from 'ms-fe-tools'
```
#### isObject
  判断传入的参数是否是非空对象。
```javascript
  const result = validator.isObject({ a: 1 })
```
#### isNull
  判断传入的参数是否为 null 或 undefined。
```javascript
  const result = validator.isNull(null)
```
#### isURL
  判断传入的 URL 地址是否合法。
```javascript
  const result = validator.isURL('http://1.com')
```
#### isEmail
  验证电子邮件地址是否合法。
```javascript
  const result = validator.isEmail('poetchen@art.com')
```
#### isMobile
  判断手机号码是否合法。
```javascript
  const result = validator.isMobile('18566011166')
```
#### isTel
  判断电话号码是否合法。
```javascript
  const result = validator.isTel('000-23113166')
```
#### isIdCard
  判断身份证号码是否合法。
```javascript
  const result = validator.isIdCard('11011119701001011X')
```
#### isLowerCase
  判断传入的参数是否是小写字母。
```javascript
  const result = validator.isLowerCase('msfetools')
```
#### isUpperCase
  判断传入的参数是否是大写字母。
```javascript
  const result = validator.isUpperCase('MSFETOOLS')
```
#### isAlphabets
  判断传入的参数是否是英文字母。
```javascript
  const result = validator.isAlphabets('MsFeTools')
```
#### isChineseCharacters
  判断传入的参数是否是中文。
```javascript
  const result = validator.isChineseCharacters('前端')
```

### store
  浏览器存储操作工具类。
#### 引入
```javascript
  import { store } from 'ms-fe-tools'
```
#### localStorage
```javascript
  // 存储数据，name 为键名称，content 为要存储的内容
  store.localStorage.set({ name: 'setTest1', content: '要存储的内容1' })
  
  // 根据键获取对应数据，name 为键名称
  const getByName = store.localStorage.get({ name: 'setTest1' })
  
  // 根据键删除数据
  store.localStorage.remove({ name: 'setTest1' })

  // 获取所有数据
  const all = store.localStorage.getAll()

  // 删除所有数据
  store.localStorage.removeAll()
```
#### sessionStorage
```javascript
  // 存储数据，name 为键名称，content 为要存储的内容
  store.sessionStorage.set({ name: 'setTest1', content: '要存储的内容1' })
  
  // 根据键获取对应数据，name 为键名称
  const getByName = store.sessionStorage.get({ name: 'setTest1' })
  
  // 根据键删除数据
  store.sessionStorage.remove({ name: 'setTest1' })

  // 获取所有数据
  const all = store.sessionStorage.getAll()

  // 删除所有数据
  store.sessionStorage.removeAll()
```

### common
  常用工具方法，包含若干子类。
#### 引入
```javascript
  import { common } from 'ms-fe-tools'
```
#### ObjectOperation
  操作对象的相关方法。
```javascript
  // 深度合并多个对象。第一个参数为目标，其他参数为要合并的对象。键相同时前面的值会被最新的合并对象值覆盖。
  const result = common.objectOperation.mergeDeep({ a: 'test', c: 'test3' }, { a: 'test1', b: 'test2' }, { d: 'test4' })
```
#### Random
  用于生成随机数、字符串等。
```javascript
  // 生成 16 进制随机数字符串。
  const result = common.random.guid()
```