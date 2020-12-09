/**
 * virtual list default component
 */

import Virtual from './virtual'

export default class Vlist {
  constructor (opts) {
    this.range = null

    this.$el = opts.root

    this.$el.style.maxHeight = '400px'
    this.$el.style.overflowY = 'auto'

    this.dataSources = opts.data

    this.wrapper = document.createElement('div')
    this.$el.appendChild(this.wrapper)

    this.$el.addEventListener('scroll', this.onScroll.bind(this), {
      passive: false
    })

    this.keeps = opts.keeps || 20

    this.estimateSize = opts.estimateSize || 26

    this.dataKey = 'id'

    this.installVirtual()
  }

  // return current scroll offset
  getOffset () {
    const root = this.$el
    return root ? Math.ceil(root.scrollTop) : 0
  }

  // return client viewport size
  getClientSize () {
    const root = this.$el
    return root ? Math.ceil(root.clientHeight) : 0
  }

  // return all scroll size
  getScrollSize () {
    const root = this.$el
    return root ? Math.ceil(root.scrollHeight) : 0
  }

  // ----------- public method end -----------

  installVirtual () {
    this.virtual = new Virtual({
      slotHeaderSize: 0,
      slotFooterSize: 0,
      keeps: this.keeps,
      estimateSize: this.estimateSize,
      buffer: Math.round(this.keeps / 3), // recommend for a third of keeps
      uniqueIds: this.getUniqueIdFromDataSources()
    }, this.onRangeChanged.bind(this))

    // sync initial range
    this.range = this.virtual.getRange()
    this.render()
  }

  getUniqueIdFromDataSources () {
    const { dataKey } = this
    return this.dataSources.map((dataSource) => typeof dataKey === 'function' ? dataKey(dataSource) : dataSource[dataKey])
  }

  // here is the rerendering entry
  onRangeChanged (range) {
    this.range = range
    this.render()
  }

  onScroll () {
    const offset = this.getOffset()
    const clientSize = this.getClientSize()
    const scrollSize = this.getScrollSize()

    // iOS scroll-spring-back behavior will make direction mistake
    if (offset < 0 || (offset + clientSize > scrollSize + 1) || !scrollSize) {
      return
    }

    this.virtual.handleScroll(offset)
  }

  getRenderSlots () {
    const { start, end } = this.range
    const { dataSources, dataKey } = this
    this.wrapper.innerHTML = ''
    for (let index = start; index <= end; index++) {
      const dataSource = dataSources[index]
      if (dataSource) {
        const uniqueKey = typeof dataKey === 'function' ? dataKey(dataSource) : dataSource[dataKey]
        if (typeof uniqueKey === 'string' || typeof uniqueKey === 'number') {
          this.wrapper.appendChild(dataSource.createNode())
        } else {
          console.warn(`Cannot get the data-key '${dataKey}' from data-sources.`)
        }
      } else {
        console.warn(`Cannot get the index '${index}' from data-sources.`)
      }
    }
  }

  update (data) {
    this.dataSources = data
    this.wrapper.innerHTML = ''
    this.virtual.updateParam('uniqueIds', this.getUniqueIdFromDataSources())
    this.virtual.handleDataSourcesChange()
  }

  render () {
    const { padFront, padBehind } = this.range

    const paddingStyle = `${padFront}px 0px ${padBehind}px`

    this.wrapper.style.padding = paddingStyle

    this.getRenderSlots()
  }
}
