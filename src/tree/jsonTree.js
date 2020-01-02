import Validate from '../validate'

class JsonTree {
  /**
   * 构造方法
   * @param {Object} props 包含树形结构的唯一标识符，子节点标识符
   */
  constructor(props = {}) {
    this._validate = new Validate()
    this.identifier = props.identifier || 'id' // 标识符，用于标识树的唯一节点
    this.childrenIdentifier = props.childrenIdentifier || 'children' // 子节点标识符，标识树的子节点
    this.nodeGet = null // 递归获取的节点
    this.parentNodeGet = null // 递归获取的父节点
    this.treeNode = null // 递归操作后的树
  }
  /**
   * 根据 identifier 获取树形结构数据中的对应节点
   * @param {Object} tree
   * @param {String} identifier
   * @return {Object}
   */
  getNodeByIdentifier (tree, identifier = null) {
    if (this._validate.isNull(identifier) || identifier === '') {
      return tree
    }
    if (tree[this.identifier] === identifier) {
      this.nodeGet = tree
    } else {
      if (tree[this.childrenIdentifier] && tree[this.childrenIdentifier].length > 0) {
        for (let i = 0; i < tree[this.childrenIdentifier].length; i++) {
          this.getNodeByIdentifier(tree[this.childrenIdentifier][i], identifier)
        }
      }
    }
    return this.nodeGet
  }
  /**
   * 根据 identifier 获取树形结构数据中的父节点
   * @param {Object} tree
   * @param {String} identifier
   * @return {Object}
   */
  getParentNodeByIdentifier (tree, identifier = null) {
    if (this._validate.isNull(identifier) || identifier === '') {
      return tree
    }
    if (tree[this.childrenIdentifier] && tree[this.childrenIdentifier].length > 0) {
      for (let i = 0; i < tree[this.childrenIdentifier].length; i++) {
        if (tree[this.childrenIdentifier][i][this.identifier] === identifier) {
          this.parentNodeGet = tree
          break
        } else {
          this.getParentNodeByIdentifier(tree[this.childrenIdentifier][i], identifier)
        }
      }
    }
    return this.parentNodeGet
  }
  /**
   * 在指定 identifier 的节点下添加指定索引位置的子节点
   * @param {Object} tree
   * @param {Object} node 要添加的节点
   * @param {String} identifier 指定的 identifier，默认在根节点添加
   * @param {Number} index 要添加的位置索引，默认在最后添加
   */
  addNodeByIdentifier (tree, node, identifier = null, index = null) {
    if (this._validate.isNull(identifier) || identifier === '') {
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
          this.addNodeByIdentifier(tree[this.childrenIdentifier][i], node, identifier, index)
        }
      }
    }
  }
  /**
   * 更新指定 identifier 的节点内容
   * @param {Object} tree
   * @param {String} identifier
   * @param {Object} node
   */
  updateNodeByIdentifier (tree, node, identifier = null) {
    if (this._validate.isNull(identifier) || identifier === '') {
      tree[0] = node
    }
    if (tree[this.identifier] === identifier) {
      tree = node
      return
    }
    if (tree[this.childrenIdentifier] && tree[this.childrenIdentifier].length > 0) {
      for (let i = 0; i < tree[this.childrenIdentifier].length; i++) {
        if (tree[this.childrenIdentifier][i][this.identifier] === identifier) {
          tree[this.childrenIdentifier][i] = node
          return
        } else {
          if (tree[this.childrenIdentifier][i][this.childrenIdentifier] && tree[this.childrenIdentifier][i][this.childrenIdentifier].length > 0) {
            this.updateNodeByIdentifier(tree[this.childrenIdentifier][i], node, identifier)
          }
        }
      }
    }
  }
  /**
   * 删除指定 identifier 的节点
   * @param {Object} tree
   * @param {String} identifier
   */
  deleteNodeByIdentifier (tree, identifier) {
    if (tree[this.identifier] === identifier) {
      tree = null
      return
    }
    if (tree[this.childrenIdentifier] && tree[this.childrenIdentifier].length > 0) {
      for (let i = 0; i < tree[this.childrenIdentifier].length; i++) {
        if (tree[this.childrenIdentifier][i][this.identifier] === identifier) {
          tree[this.childrenIdentifier].splice(i, 1)
          return
        } else {
          if (tree[this.childrenIdentifier][i][this.childrenIdentifier] && tree[this.childrenIdentifier][i][this.childrenIdentifier].length > 0) {
            this.deleteNodeByIdentifier(tree[this.childrenIdentifier][i], identifier)
          }
        }
      }
    }
  }
}

export default JsonTree
