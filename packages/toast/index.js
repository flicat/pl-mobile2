import plToast from './index.vue'
import { createApp, h, nextTick } from 'vue'

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

        html: false,               // 是否显示为HTML
        text: ''
      }
    },
    methods: {
      show() {
        this.display = true
        nextTick(() => {
          this.visible = true
        })
      },
      async hide() {
        await new Promise((resolve) => {
          this.visible = false
          setTimeout(() => {
            this.display = false
            resolve()
          }, 300)
        })
      }
    }
  })

  async function showToast(text, duration, html = false) {
    Toast.text = text
    Toast.html = html
    Toast.show()
    duration |= 0

    if (!duration || !/\d+/.test(duration)) {
      duration = 3000
    }

    await new Promise((resolve, reject) => {
      clearTimeout(Toast.timer)
      Toast.timer = setTimeout(async () => {
        await Toast.hide()
        resolve()
      }, duration)
    })
  }

  App.config.globalProperties.$toast = showToast

  let toastDom = document.createElement('div')
  Toast.mount(toastDom)
  document.body.appendChild(toastDom)
}
