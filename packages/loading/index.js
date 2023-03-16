import plLoading from './index.vue'
import { render, h } from 'vue'

/* istanbul ignore next */
plLoading.install = function (App) {
  App.component(plLoading.name, plLoading);

  const loadingMap = new WeakMap()

  // loading节点
  const createLoadingNode = (isPart) => {
    const vNode = h({
      data() {
        return {
          vertical: true,
          isShow: false,
          text: ''
        }
      },
      render() {
        return h('div', {
          class: 'loading',
          style: {
            display: 'flex',
            width: '100%',
            height: '100%',
            backgroundColor: 'var(--loading-bg)'
          }
        }, [
          h(plLoading, {
            vertical: this.vertical,
            style: {
              color: '#var(--loading-text)',
              margin: 'auto'
            }
          }, {
            default: () => this.text
          })
        ])
      }
    })

    const vNodeDom = document.createElement('div')
    vNodeDom.style.cssText = `left: 0;top: 0;right: 0;bottom: 0;z-index: 999;position: ${isPart ? 'absolute' : 'fixed'}`
    vNode.appContext = App._context
    render(vNode, vNodeDom)
    return { el: vNodeDom, loading: vNode }
  }
  // loading控制class
  class LoadingClass {
    isPart = false
    target = null
    vNodeDom = null
    loadingCount = 0
    constructor({ target, isPart }) {
      this.isPart = isPart
      this.target = target
      this.vNodeDom = createLoadingNode(isPart)
    }
    __show({ text, vertical = true } = {}) {
      if (!this.vNodeDom || !this.target) {
        return false
      }
      if (this.loadingCount === 0) {
        if (this.isPart) {
          this.target.classList.add('pl-loading-wrap')
        }
        this.target.appendChild(this.vNodeDom.el)
        if (!loadingMap.has(this.target)) {
          loadingMap.set(this.target, this)
        }
      }
      this.vNodeDom.loading.component.proxy.text = text
      this.vNodeDom.loading.component.proxy.vertical = vertical
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
        this.target.removeChild(this.vNodeDom.el)
        loadingMap.delete(this.target)
        this.target = null
        this.vNodeDom = null
      }
    }
  }

  // loading对象控制函数
  const createLoading = (options) => {
    if (loadingMap.has(options.target)) {
      return loadingMap.get(options.target)
    } else {
      const loading = new LoadingClass(options)
      loadingMap.set(options.target, loading)
      return loading
    }
  }

  // 显示loading
  const showLoading = function ({ text = '', vertical = true, target } = {}) {
    const loading = createLoading({
      target: target || document.body,
      isPart: target !== document.body
    })
    loading.__show({
      text,
      vertical
    })
    return loading
  }

  // 指令注册
  const directiveMap = new Map()
  class DirectiveLoading {
    target = null
    loading = null
    argMap = new Map()
    constructor(target) {
      this.target = target
    }
    createLoading(text) {
      if (this.loading) {
        this.loading.__show({ text })
      } else {
        this.loading = showLoading({
          text,
          target: this.target
        })
      }
      return this.loading
    }
    toggle(text, isShow) {
      this.argMap.set(text, isShow)
      const currentLoading = [...this.argMap].reverse().find(item => item[1])
      if (currentLoading) {
        this.createLoading(currentLoading[0])
      } else if (this.loading) {
        this.loading.loadingCount = 0
        this.loading.close()
        this.loading = null
      }
    }
  }

  const getDirectiveTarget = (el, arg, value) => {
    let target
    if (directiveMap.has(el)) {
      target = directiveMap.get(el)
    } else {
      target = new DirectiveLoading(el, arg, value)
      directiveMap.set(el, target)
    }
    return target
  }

  App.directive('loading', {
    mounted(el, { arg = '', value }) {
      let target = getDirectiveTarget(el)
      target.toggle(arg, value)
    },
    updated(el, { arg = '', value }) {
      let target = getDirectiveTarget(el)
      target.toggle(arg, value)
    }
  })

  App.config.globalProperties.$loading = showLoading
};

export default plLoading;
