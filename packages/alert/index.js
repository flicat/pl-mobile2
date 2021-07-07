import plAlert from './index.vue'
import { createApp, h, nextTick } from 'vue'

// alert
export default function (App) {
  let Alert = createApp({
    components: {
      plAlert
    },
    render() {
      return this.display && h('div', {
        style: {
          transition: 'all 0.3s ease',
          opacity: this.visible ? 1 : 0
        }
      }, [
        h('plAlert', {
          props: {
            title: this.title,
            message: this.message,
            component: this.component,
            componentProps: this.componentProps,
            html: this.html,
            buttonText: this.buttonText,
            action: this.action
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
      hide() {
        this.visible = false
        setTimeout(() => {
          this.display = false
        }, 300)
      }
    }
  })


  function showAlert({ title, message, component, componentProps, html, buttonText, action }) {
    Alert.title = title || ''
    Alert.component = component
    Alert.componentProps = componentProps || {}
    Alert.html = !!html && !component
    Alert.message = !component && message || ''
    Alert.buttonText = buttonText || '好'
    Alert.action = action || null
    Alert.show()
  }

  App.config.globalProperties.$alert = showAlert
  let alertDom = document.createElement('div')
  Alert.mount(alertDom)
  document.body.appendChild(alertDom)
}
