import plAlert from './index.vue'
import { createApp, h, nextTick } from 'vue'

// alert
export default function (App) {
  let Alert = createApp({
    render() {
      return this.display && h('div', {
        style: {
          transition: 'all 0.3s ease',
          opacity: this.visible ? 1 : 0
        }
      }, [
        h(plAlert, {
          title: this.title,
          message: this.message,
          component: this.component,
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
        component: null,          // 子组件
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

  const alertDom = document.createElement('div')
  document.body.appendChild(alertDom)
  const vm = Alert.mount(alertDom)

  App.config.globalProperties.$alert = async function ({ title, message, component, componentProps, html, buttonText, action }) {
    vm.title = title || ''
    vm.component = component
    vm.componentProps = componentProps || {}
    vm.html = !!html && !component
    vm.message = !component && message || ''
    vm.buttonText = buttonText || '好'
    vm.action = action || null
    vm.show()
    await new Promise((resolve, reject) => {
      vm.action = async () => {
        await vm.hide()
        resolve(typeof action === 'function' ? action() : null)
      }
    })
  }
}
