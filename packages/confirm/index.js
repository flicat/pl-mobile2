import plConfirm from './index.vue'
import { createApp, h, nextTick } from 'vue'
// confirm
export default function (App) {
  let Confirm = createApp({
    components: {
      plConfirm
    },
    render() {
      return this.display && h('div', {
        style: {
          transition: 'all 0.3s ease',
          opacity: this.visible ? 1 : 0
        }
      }, [
        h('plConfirm', {
          props: {
            title: this.title,
            message: this.message,
            html: this.html,
            component: this.component,
            componentProps: this.componentProps,
            submitText: this.submitText,
            cancelText: this.cancelText,
            submit: this.submit,
            cancel: this.cancel
          },
          on: {
            hide: () => {
              this.hide()
            }
          }
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
      hide() {
        this.visible = false
        setTimeout(() => {
          this.display = false
        }, 300)
      }
    }
  })


  function showConfirm({ title, message, component, componentProps, html, submitText, cancelText, submit, cancel }) {
    Confirm.component = component
    Confirm.componentProps = componentProps || {}
    Confirm.html = !!html && !component
    Confirm.message = !component && message || ''
    Confirm.title = title || ''
    Confirm.submitText = submitText || '确认'
    Confirm.cancelText = cancelText || '取消'
    Confirm.submit = submit || null
    Confirm.cancel = cancel || null
    Confirm.show()
  }

  App.config.globalProperties.$confirm = showConfirm

  let confirmDom = document.createElement('div')
  Confirm.mount(confirmDom)
  document.body.appendChild(confirmDom)
}