import plConfirm from './index.vue'
import { createApp, h, nextTick } from 'vue'
// confirm
export default function (App) {
  let Confirm = createApp({
    render() {
      return this.display && h('div', {
        style: {
          transition: 'all 0.3s ease',
          opacity: this.visible ? 1 : 0
        }
      }, [
        h(plConfirm, {
          title: this.title,
          message: this.message,
          html: this.html,
          component: this.component,
          componentProps: this.componentProps,
          submitText: this.submitText,
          cancelText: this.cancelText,
          submit: this.submit,
          cancel: this.cancel
        })
      ]) || null
    },
    data: function () {
      return {
        display: false,
        visible: false,

        title: '',                 // 弹框标题
        message: '',               // 弹框主体信息
        html: false,               // 是否显示为HTML
        component: null,          // 子组件
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

  const confirmDom = document.createElement('div')
  document.body.appendChild(confirmDom)
  const vm = Confirm.mount(confirmDom)

  App.config.globalProperties.$confirm = async function ({ title, message, component, componentProps, html, submitText, cancelText, submit, cancel }) {
    vm.component = component
    vm.componentProps = componentProps || {}
    vm.html = !!html && !component
    vm.message = !component && message || ''
    vm.title = title || ''
    vm.submitText = submitText || '确认'
    vm.cancelText = cancelText || '取消'
    vm.show()

    await new Promise((resolve, reject) => {
      vm.submit = async () => {
        await vm.hide()
        resolve(typeof submit === 'function' ? submit() : null)
      }
      vm.cancel = async () => {
        await vm.hide()
        reject(typeof cancel === 'function' ? cancel() : null)
      }
    })
  }
}
