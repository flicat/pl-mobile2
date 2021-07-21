import plLoading from './index.vue'
import { createApp, h } from 'vue'

/* istanbul ignore next */
plLoading.install = function (App) {
  // loading
  let loading = createApp({
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
        }, this.text)
      ])
    }
  })


  const loadingDom = document.createElement('div')
  document.body.appendChild(loadingDom)
  const vm = loading.mount(loadingDom)


  App.component(plLoading.name, plLoading);

  let loadingCount = 0

  App.config.globalProperties.$loadingShow = function (text, vertical) {
    loadingCount++
    vm.isShow = true
    vm.text = text
    if (typeof vertical === 'boolean') {
      vm.vertical = vertical
    }
  }

  App.config.globalProperties.$loadingHide = function () {
    loadingCount--
    vm.isShow = loadingCount > 0
  }
};

export default plLoading;
