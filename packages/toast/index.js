import plToast from './index.vue'
import { createApp, h, nextTick } from 'vue'

// toast
export default function (App) {
  let Toast = createApp({
    render() {
      return this.display && h('div', {
        style: {
          transition: 'all 0.3s ease',
          opacity: this.visible ? 1 : 0
        }
      }, [
        h(plToast, {
          text: this.text,
          html: this.html
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

  const toastDom = document.createElement('div')
  document.body.appendChild(toastDom)
  const vm = Toast.mount(toastDom)

  App.config.globalProperties.$toast = async function (text, duration, html = false) {
    vm.text = text
    vm.html = html
    vm.show()
    duration |= 0

    if (!duration || !/\d+/.test(duration)) {
      duration = 3000
    }

    await new Promise((resolve, reject) => {
      clearTimeout(vm.timer)
      vm.timer = setTimeout(async () => {
        await vm.hide()
        resolve()
      }, duration)
    })
  }

}
