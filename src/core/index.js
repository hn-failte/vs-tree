import TreeStore from './store'
import Vlist from '../virtual-list'
const noop = () => { }
export default class Tree {
  constructor (selector, ops) {
    var obj = new Proxy(ops, {
      get: function (target, propKey, receiver) {
        console.log(`getting ${propKey}!`)
        return Reflect.get(target, propKey, receiver)
      },
      set: function (target, propKey, value, receiver) {
        console.log(`setting ${propKey}!`)
        return Reflect.set(target, propKey, value, receiver)
      }
    })
    this.$options = obj
    this.$el = document.querySelector(selector)

    if (!this.$el) {
      throw Error('请为组件提供根节点')
    }
    this.$el.classList.add = 'vs-tree'

    if (Array.isArray(ops.data)) {
      this._data = {
        _vsroot: true,
        name: ops.rootName || '---',
        children: ops.data
      }
      if (!ops.rootName) {
        ops.showRoot = false
      }
    } else if (typeof ops.data === 'object') {
      this._data = ops.data
    } else {
      throw Error('参数data仅支持对象或数组！')
    }

    // 每一项的高度
    this.itemHeight = ops.itemHeight || 26
    // 当前可见数量
    this.showCount = ops.showCount || 20
    // 最大高度
    this.maxHeight = ops.maxHeight || '400px'
    // 唯一ID
    this.dataKey = ops.dataKey || 'id'
    // 当前可见项
    this.data = []
    // 关键字过滤
    this.keyword = ''

    this.store = new TreeStore({
      data: this._data,
      max: ops.max,
      showLine: ops.showLine || false, // 是否显示连接线
      showIcon: ops.showIcon || false,
      onlyShowLeafIcon: ops.onlyShowLeafIcon || false,
      showCheckbox: ops.showCheckbox || false,
      showRadio: ops.showRadio || false,
      highlightCurrent: ops.highlightCurrent || false,
      accordion: ops.accordion || false, // 手风琴模式
      lazy: ops.lazy || false,
      sort: ops.sort || false,
      indent: ops.indent || 10,
      checkedKeys: ops.checkedKeys || [],
      expandKeys: ops.expandKeys || [],
      disabledKeys: ops.disabledKeys || [],
      limitAlert: ops.limitAlert || noop,
      click: ops.click || noop,
      check: ops.check || noop, // 复选框被点击时出发
      change: ops.change || noop,
      load: ops.load || noop,
      contextmenu: ops.contextmenu || null,
      radioParentoOnly: ops.radioParentoOnly || false, // 每个父节点下唯一，仅raido模式有效
      renderContent: ops.renderContent || null,
      nocheckParent: ops.nocheckParent || false, // 只允许叶子节点选中
      checkOnClickNode: ops.checkOnClickNode || false,
      format: ops.format || null,
      update: () => {
        this.render()
      },
      nodesChange: (nodes) => {
        this.nodes = nodes
        this.vlist && this.render()
      }
    })

    this.store.setData(this._data)

    if (typeof ops.showRoot === 'boolean' && !ops.showRoot) {
      this.store.hideRoot = true
      // 跟节点创建dom
      this.store.root.createNode()
    }

    this.init()

    // 设置默认选中
    this.store.setDefaultChecked()
  }

  init () {
    this.vlist = new Vlist({
      root: this.$el,
      data: [],
      maxHeight: this.maxHeight,
      estimateSize: this.itemHeight,
      keeps: this.showCount
    })
    this.render()
  }

  render () {
    this.data = this.nodes.filter(v => {
      // 过滤隐藏节点 ｜ 隐藏root节点
      return v.visbile && !(this.store.hideRoot && v.level === 0) && this.hasKeyword(v)
    })
    this.vlist.update(this.data)
  }

  hasKeyword (v) {
    return v.data.name && v.data.name.includes(this.keyword)
  }

  // 过滤节点
  filter (keyword = '') {
    this.keyword = keyword
    this.render()
    return this.data
  }

  // 根据ID获取节点
  getNodeById (id) {
    return this.store.getNodeById(id)
  }

  // 获取选中节点
  getCheckedNodes () {
    return this.store.getCheckedNodes()
  }
}
