import validator from '../validator'

class JsonTree {
  /**
   * 构造方法
   * @param {object} tree 树
   * @param {object} props 包含树形结构的唯一标识符，子节点标识符
   */
  constructor(tree = null, props = {}) {
    if (validator.isNull(tree) || JSON.stringify(tree) === '{}') {
      return new Error('Init Failed. Invalid tree object.')
    }
    this.identifier = props.identifier || 'id' // 标识符，用于标识树的唯一节点
    this.childrenIdentifier = props.childrenIdentifier || 'children' // 子节点标识符，标识树的子节点
    this.nodeGet = null // 递归获取的节点
    this.parentNodeGet = null // 递归获取的父节点
    this.tree = tree // 递归操作后的树
  }
  /**
   * 根据 identifier 获取树形结构数据中的对应节点
   * @param {string|null} identifier
   * @param {object} tree
   * @return {object}
   */
  getNodeByIdentifier (identifier = null, tree = this.tree) {
    this.nodeGet = null
    if (validator.isNull(identifier) || identifier === '') {
      return tree
    }
    if (tree[this.identifier] === identifier) {
      this.nodeGet = tree
    } else {
      if (tree[this.childrenIdentifier] && tree[this.childrenIdentifier].length > 0) {
        for (let i = 0; i < tree[this.childrenIdentifier].length; i++) {
          this.getNodeByIdentifier(identifier, tree[this.childrenIdentifier][i])
        }
      }
    }
    return this.nodeGet
  }
  /**
   * 根据 identifier 获取树形结构数据中的父节点
   * @param {string|null} identifier
   * @param {object} tree
   * @return {object}
   */
  getParentNodeByIdentifier (identifier = null, tree = this.tree) {
    this.parentNodeGet = null
    if (validator.isNull(identifier) || identifier === '') {
      return tree
    }
    if (tree[this.childrenIdentifier] && tree[this.childrenIdentifier].length > 0) {
      for (let i = 0; i < tree[this.childrenIdentifier].length; i++) {
        if (tree[this.childrenIdentifier][i][this.identifier] === identifier) {
          this.parentNodeGet = tree
          break
        } else {
          this.getParentNodeByIdentifier(identifier, tree[this.childrenIdentifier][i])
        }
      }
    }
    return this.parentNodeGet
  }
  /**
   * 在指定 identifier 的节点下添加指定索引位置的子节点
   * @param {object} node 要添加的节点
   * @param {string|null} identifier 指定的 identifier，默认在根节点添加
   * @param {number|null} index 要添加的位置索引，默认在最后添加
   * @param {object} tree
   */
  addNodeByIdentifier (node, identifier = null, index = null, tree = this.tree) {
    if (validator.isNull(identifier) || identifier === '') {
      // 不传 identifier 则插入根节点
      if (tree.children) {
        if (Number.isInteger(index)) {
          tree[this.childrenIdentifier].splice(index, 0, node)
        } else {
          tree[this.childrenIdentifier].push(node)
        }
      } else {
        tree[this.childrenIdentifier]= []
        tree[this.childrenIdentifier].push(node)
      }
    }
    if (tree[this.identifier] === identifier) {
      tree[this.childrenIdentifier] = tree[this.childrenIdentifier] || []
      if (Number.isInteger(index)) {
        tree[this.childrenIdentifier].splice(index, 0, node)
      } else {
        tree[this.childrenIdentifier].push(node)
      }
    } else {
      if (tree[this.childrenIdentifier] && tree[this.childrenIdentifier].length > 0) {
        for (let i = 0; i < tree[this.childrenIdentifier].length; i++) {
          this.addNodeByIdentifier(node, identifier, index, tree[this.childrenIdentifier][i])
        }
      }
    }
    return this.tree
  }
  /**
   * 更新指定 identifier 的节点内容
   * @param {object} node
   * @param {string|null} identifier
   * @param {object} tree
   */
  updateNodeByIdentifier (node, identifier = null, tree = this.tree) {
    if (validator.isNull(identifier) || identifier === '') {
      return this.tree
    }
    if (tree[this.identifier] === identifier) {
      if (this.tree[this.identifier] === identifier) {
        // 根节点
        this.tree = node
      } else {
        tree = node
      }
      return this.tree
    }
    if (tree[this.childrenIdentifier] && tree[this.childrenIdentifier].length > 0) {
      for (let i = 0; i < tree[this.childrenIdentifier].length; i++) {
        if (tree[this.childrenIdentifier][i][this.identifier] === identifier) {
          tree[this.childrenIdentifier][i] = node
          break
        } else {
          if (tree[this.childrenIdentifier][i][this.childrenIdentifier] && tree[this.childrenIdentifier][i][this.childrenIdentifier].length > 0) {
            this.updateNodeByIdentifier(node, identifier, tree[this.childrenIdentifier][i])
          }
        }
      }
    }
    return this.tree
  }
  /**
   * 删除指定 identifier 的节点
   * @param {string|null} identifier
   * @param {object} tree
   */
  deleteNodeByIdentifier (identifier = null, tree = this.tree) {
    if (validator.isNull(identifier) || identifier === '') {
      return this.tree
    }
    if (tree[this.identifier] === identifier) {
      if (this.tree[this.identifier] === identifier) {
        // 根节点
        this.tree = null
      } else {
        tree = null
      }
      return this.tree
    }
    if (tree[this.childrenIdentifier] && tree[this.childrenIdentifier].length > 0) {
      for (let i = 0; i < tree[this.childrenIdentifier].length; i++) {
        if (tree[this.childrenIdentifier][i][this.identifier] === identifier) {
          tree[this.childrenIdentifier].splice(i, 1)
          break
        } else {
          if (tree[this.childrenIdentifier][i][this.childrenIdentifier] && tree[this.childrenIdentifier][i][this.childrenIdentifier].length > 0) {
            this.deleteNodeByIdentifier(identifier, tree[this.childrenIdentifier][i])
          }
        }
      }
    }
    return this.tree
  }
}

export default JsonTree