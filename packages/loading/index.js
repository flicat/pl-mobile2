import plLoading from './index.vue'
import { render, h } from 'vue'

/* istanbul ignore next */
plLoading.install = function (App) {
  App.component(plLoading.name, plLoading);

  // loading
  let vNode = h({
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
          display: this.isShow ? 'flex' : 'none',
          position: 'fixed',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 999,
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }
      }, [
        h(plLoading, {
          vertical: this.vertical,
          style: {
            color: '#fff',
            margin: 'auto'
          }
        }, {
          default: () => this.text
        })
      ])
    }
  })

  const vNodeDom = document.createElement('div')
  document.body.appendChild(vNodeDom)
  vNode.appContext = App._context
  render(vNode, vNodeDom)

  let loadingCount = 0

  App.config.globalProperties.$loadingShow = function (text, vertical) {
    loadingCount++
    vNode.component.proxy.isShow = true
    vNode.component.proxy.text = text
    if (typeof vertical === 'boolean') {
      vNode.component.proxy.vertical = vertical
    }
  }

  App.config.globalProperties.$loadingHide = function () {
    loadingCount--
    vNode.component.proxy.isShow = loadingCount > 0
  }
};

export default plLoading;
