import plToast from './index.vue'
import { render, h, nextTick } from 'vue'

// toast
export default function (App) {
  let vNode = h({
    render() {
      return this.display && h('div', {
        style: {
          transition: 'all 0.3s ease',
          opacity: this.visible ? 1 : 0,
          position: 'relative',
          zIndex: 998
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

  const vNodeDom = document.createElement('div')
  document.body.appendChild(vNodeDom)
  vNode.appContext = App._context
  render(vNode, vNodeDom)

  App.config.globalProperties.$toast = async function (text, duration, html = false) {
    vNode.component.proxy.text = text
    vNode.component.proxy.html = html
    vNode.component.proxy.show()
    duration |= 0

    if (!duration || !/\d+/.test(duration)) {
      duration = 3000
    }

    return new Promise((resolve, reject) => {
      clearTimeout(vNode.component.proxy.timer)
      vNode.component.proxy.timer = setTimeout(async () => {
        await vNode.component.proxy.hide()
        resolve()
      }, duration)
    })
  }
}
