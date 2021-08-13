import plConfirm from './index.vue'
import { render, h, nextTick, markRaw } from 'vue'
// confirm
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
        h(plConfirm, {
          title: this.title,
          message: this.message,
          html: this.html,
          comp: this.comp,
          componentProps: this.componentProps,
          submitText: this.submitText,
          cancelText: this.cancelText,
          submit: this.submit,
          cancel: this.cancel
        })
      ]) || null
    },
    data() {
      return {
        display: false,
        visible: false,

        title: '',                 // 弹框标题
        message: '',               // 弹框主体信息
        html: false,               // 是否显示为HTML
        comp: null,          // 子组件
        componentProps: {},       // 子组件props
        submitText: '',            // 提交按钮文字
        cancelText: '',            // 取消按钮文字
        submit: () => { },           // 确认回调
        cancel: () => { }           // 取消回调
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

  App.config.globalProperties.$confirm = async function ({ title, message, component, componentProps, html, submitText, cancelText, submit, cancel }) {
    vNode.component.proxy.comp = component ? markRaw(component) : null
    vNode.component.proxy.componentProps = componentProps || {}
    vNode.component.proxy.html = !!html && !component
    vNode.component.proxy.message = !component && message || ''
    vNode.component.proxy.title = title || ''
    vNode.component.proxy.submitText = submitText || '确认'
    vNode.component.proxy.cancelText = cancelText || '取消'
    vNode.component.proxy.show()

    return new Promise((resolve, reject) => {
      vNode.component.proxy.submit = async () => {
        await vNode.component.proxy.hide()
        typeof submit === 'function' ? submit() : resolve()
      }
      vNode.component.proxy.cancel = async () => {
        await vNode.component.proxy.hide()
        typeof cancel === 'function' ? cancel() : reject()
      }
    })
  }
}
