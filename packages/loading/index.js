import plLoading from './index.vue'
import { createApp, h } from 'vue'

/* istanbul ignore next */
plLoading.install = function (App) {
  // loading
  let loading = createApp({
    components: {
      plLoading
    },
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
        h('plLoading', {
          props: {
            vertical: this.vertical
          },
          style: {
            color: '#fff',
            margin: 'auto'
          }
        }, this.text)
      ])
    }
  })

  let loadingCount = 0

  function showLoading(text, vertical) {
    loadingCount++
    loading.isShow = true
    loading.text = text
    if (typeof vertical === 'boolean') {
      loading.vertical = vertical
    }
  }

  function hideLoading() {
    loadingCount--
    loading.isShow = loadingCount > 0
  }

  App.component(plLoading.name, plLoading);
  App.config.globalProperties.$loadingShow = showLoading
  App.config.globalProperties.$loadingHide = hideLoading

  let loadingDom = document.createElement('div')
  loading.mount(loadingDom)
  document.body.appendChild(loadingDom)
};

export default plLoading;
