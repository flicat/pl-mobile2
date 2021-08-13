import plAlert from './index.vue'
import { render, h, nextTick, markRaw } from 'vue'

// alert
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
        h(plAlert, {
          title: this.title,
          message: this.message,
          comp: this.comp,
          componentProps: this.componentProps,
          html: this.html,
          buttonText: this.buttonText,
          action: this.action
        })
      ]) || null
    },
    data: function () {
      return {
        display: false,
        visible: false,

        title: '',                 // 弹框标题
        message: '',               // 弹框主体信息
        comp: null,          // 子组件
        componentProps: {},       // 子组件props
        html: false,               // 是否显示为HTML
        buttonText: '',            // 按钮文字
        action: () => { }           // 确认回调
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

  App.config.globalProperties.$alert = async function ({ title, message, component, componentProps, html, buttonText, action }) {
    vNode.component.proxy.title = title || ''
    vNode.component.proxy.comp = component ? markRaw(component) : null
    vNode.component.proxy.componentProps = componentProps || {}
    vNode.component.proxy.html = !!html && !component
    vNode.component.proxy.message = !component && message || ''
    vNode.component.proxy.buttonText = buttonText || '好'
    vNode.component.proxy.action = action || null
    vNode.component.proxy.show()
    return new Promise((resolve, reject) => {
      vNode.component.proxy.action = async () => {
        await vNode.component.proxy.hide()
        resolve(typeof action === 'function' ? action() : null)
      }
    })
  }
}
