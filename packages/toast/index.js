import plToast from './index.vue'
import { createApp, h } from 'vue'

// toast
export default function (App) {
  let Toast = createApp({
    components: {
      plToast
    },
    render() {
      return this.display && h('div', {
        style: {
          transition: 'all 0.3s ease',
          opacity: this.visible ? 1 : 0
        }
      }, [
        h('plToast', {
          props: {
            text: this.text,
            html: this.html
          }
        })
      ]) || null
    },
    data: function () {
      return {
        display: false,
        visible: false,
        timer: null,

        duration: 3000,
        html: false,               // 是否显示为HTML
        text: ''
      }
    },
    methods: {
      show() {
        this.display = true
        this.$nextTick(() => {
          this.visible = true
        })

        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.hide()
        }, this.duration)
      },
      // TODO 返回Promise
      hide() {
        this.visible = false
        setTimeout(() => {
          this.display = false
        }, 300)
      }
    }
  })

  function showToast(text, duration, html = false) {
    Toast.text = text
    Toast.html = html
    if (typeof duration === 'number') {
      Toast.duration = duration
    }
    Toast.show()
  }

  App.config.globalProperties.$toast = showToast

  let toastDom = document.createElement('div')
  Toast.mount(toastDom)
  document.body.appendChild(toastDom)
}
