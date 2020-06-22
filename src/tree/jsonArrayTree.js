import validator from '../validator'

class JsonArrayTree {
  /**
   * 构造方法
   * @param {array} tree 树
   * @param {object} props 包含树形结构的唯一标识符，子节点标识符
   */
  constructor(tree = null, props = {}) {
    if (validator.isNull(tree) || JSON.stringify(tree) === '[]') {
      return new Error('Init Failed. Invalid tree array.')
    }
    this.identifier = props.identifier || 'id' // 标识符，用于标识树的唯一节点
    this.parentIdentifier = props.parentIdentifier || 'parentId' // 父节点标识符
    this.orderIdentifier = props.orderIdentifier || 'order' // 顺序
    this.tree = tree // 递归操作后的树
  }
  /**
   * 根据 identifier 获取树形结构数据中的对应节点
   * @param {string|null} identifier
   * @return {object}
   */
  getNodeByIdentifier (identifier = null) {
    if (validator.isNull(identifier) || identifier === '') {
      return null
    }
    const nodeArray = this.tree.filter(node => {
      return node[this.identifier] === identifier
    })
    if (nodeArray && nodeArray.length > 0) {
      return nodeArray[0]
    } else {
      return null
    }
  }
  /**
   * 根据 identifier 获取树形结构数据中的父节点
   * @param {string|null} identifier
   * @return {object}
   */
  getParentNodeByIdentifier (identifier = null) {
    if (validator.isNull(identifier) || identifier === '') {
      return null
    }
    const nodeArray = this.tree.filter(node => {
      return identifier === node[this.identifier]
    })
    if (!nodeArray || nodeArray.length === 0) {
      return null
    }
    const node = nodeArray[0]
    const parentNodeArray = this.tree.filter(parentNode => {
      return node[this.parentIdentifier] === parentNode[this.identifier]
    })
    if (parentNodeArray && parentNodeArray.length > 0) {
      return parentNodeArray[0]
    } else {
      return null
    }
  }
  /**
   * 在指定 identifier 的节点下添加指定索引位置的子节点
   * @param {object} node 要添加的节点
   * @param {string|null} identifier 指定的 identifier，默认在根节点添加
   */
  addNodeByIdentifier (node, identifier = null) {
    if (validator.isNull(identifier) || identifier === '') {
      return this.tree
    }
    const nodeIndex = this.tree.findIndex(node => {
      return node[this.identifier] === identifier
    })
    if (validator.isNull(node[this.parentIdentifier]) || node[this.parentIdentifier] === '') {
      node[this.parentIdentifier] = identifier
    }
    if (nodeIndex > -1) {
      this.tree.splice(nodeIndex, 0, node)
    }
    return this.tree
  }

  /**
   * 更新指定 identifier 的节点内容，包括节点位置
   * @param {object} node
   * @param {string|null} identifier
   */
  updateNodeByIdentifier (node, identifier = null) {
    if (validator.isNull(identifier) || identifier === '') {
      return this.tree
    }
    const nodeIndex = this.tree.findIndex(node => {
      return node[this.identifier] === identifier
    })
    if (nodeIndex > -1) {
      this.tree[nodeIndex] = node
    }
    return this.tree
  }
  /**
   * 删除指定 identifier 的节点
   * @param {string|null} identifier
   */
  deleteNodeByIdentifier (identifier = null) {
    if (validator.isNull(identifier) || identifier === '') {
      return this.tree
    }
    const nodeIndex = this.tree.findIndex(node => {
      return node[this.identifier] === identifier
    })
    if (nodeIndex > -1) {
      this.tree.splice(nodeIndex, 1)
      const children = this.tree.filter(node => {
        return node[this.parentIdentifier] === identifier
      })
      for (let i of children) {
        this.deleteNodeByIdentifier(i[this.identifier])
      }
    }
    return this.tree
  }
}

export default JsonArrayTree
