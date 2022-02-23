import plLoading from './index.vue'
import { render, h } from 'vue'

/* istanbul ignore next */
plLoading.install = function (App) {
  App.component(plLoading.name, plLoading);

  const loadingMap = new WeakMap()

  // loading节点
  const createLoadingNode = ({ vertical, text, isPart }) => {
    const vNode = h('div', {
      class: 'loading',
      style: {
        display: 'flex',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      }
    }, [
      h(plLoading, {
        vertical: vertical,
        style: {
          color: '#fff',
          margin: 'auto'
        }
      }, {
        default: () => text
      })
    ])

    const vNodeDom = document.createElement('div')
    vNodeDom.style.cssText = `left: 0;top: 0;right: 0;bottom: 0;z-index: 999;position: ${isPart ? 'absolute' : 'fixed'}`
    vNode.appContext = App._context
    render(vNode, vNodeDom)
    return vNodeDom
  }

  class LoadingClass {
    isPart = false
    target = null
    vNodeDom = null
    loadingCount = 0
    constructor({ text, vertical, target, isPart }) {
      this.isPart = isPart
      this.target = target
      this.vNodeDom = createLoadingNode({ text, vertical, isPart })
    }
    __show() {
      if (!this.vNodeDom || !this.target) {
        return false
      }
      if (this.loadingCount === 0) {
        if (this.isPart) {
          this.target.classList.add('pl-loading-wrap')
        }
        this.target.appendChild(this.vNodeDom)
        if (!loadingMap.has(this.target)) {
          loadingMap.set(this.target, this)
        }
      }
      this.loadingCount++
    }
    close() {
      if (!this.vNodeDom || !this.target) {
        return false
      }
      this.loadingCount--
      if (this.loadingCount <= 0) {
        if (this.isPart) {
          this.target.classList.remove('pl-loading-wrap')
        }
        this.target.removeChild(this.vNodeDom)
        loadingMap.delete(this.target)
        this.target = null
        this.vNodeDom = null
      }
    }
  }

  const createLoading = (options) => {
    if (loadingMap.has(options.target)) {
      return loadingMap.get(options.target)
    } else {
      const loading = new LoadingClass(options)
      loadingMap.set(options.target, loading)
      return loading
    }
  }

  App.config.globalProperties.$loading = function ({ text = '', vertical = true, target } = {}) {
    const loading = createLoading({
      text,
      vertical,
      target: target || document.body,
      isPart: target !== document.body
    })
    loading.__show()
    return loading
  }
};

export default plLoading;
