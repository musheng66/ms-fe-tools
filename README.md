# 沐圣的前端工具类库（建设中）
  * 方便使用的前端工具类库

## 包括
* Validate 类
* LocalStorage 类
* ...

## 用法
### 基本用法
```html
  <script src="ms-fe-tools.js"></script>
  <script>
    // 创建实例
    var LocalStorage = new MsFeTools.Store.LocalStorage()
    // 存放
    LocalStorage.set({ name: 'setTest', content: '内容' })
  </script>
```
### ES6用法
```javascript
  // 引入
  import MsFeTools from 'ms-fe-tools'
  // 创建实例
  let LocalStorage = new MsFeTools.Store.LocalStorage()
  // 存放
  LocalStorage.get({ name: 'setTest' })
```