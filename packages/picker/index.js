import Picker from './index.vue';
import { render, h } from 'vue'
import { is } from '../../src/assets/utils'

// picker
export default function (App) {
  let vNode = h({
    render() {
      return this.display && h(Picker, {
        title: this.title,          // 弹框标题
        defaultValue: this.defaultValue,   // 默认值
        options: this.options,        // 弹框选项列表
        prop: this.prop,                // 弹框取值key
        submit: this.submit,
        cancel: this.cancel
      }) || null
    },
    data() {
      return {
        display: false,

        title: '请选择',
        defaultValue: [],
        options: [],
        prop: {
          label: 'label',
          value: 'value',
          children: 'children'
        },
        submit: () => { },
        cancel: () => { }
      }
    },
    methods: {
      show() {
        this.display = true
      },
      hide() {
        this.display = false
      }
    }
  })

  const vNodeDom = document.createElement('div')
  document.body.appendChild(vNodeDom)
  vNode.appContext = App._context
  render(vNode, vNodeDom)

  App.config.globalProperties.$picker = async function ({ title, defaultValue, options, prop, submit, cancel }) {
    if (is(title, 'string')) {
      vNode.component.proxy.title = title
    }
    if (is(defaultValue, 'array')) {
      vNode.component.proxy.defaultValue = defaultValue
    }
    if (is(options, 'array', 'object')) {
      vNode.component.proxy.options = options
    }
    if (is(prop, 'object')) {
      vNode.component.proxy.prop = prop
    }
    vNode.component.proxy.show()

    return new Promise((resolve, reject) => {
      vNode.component.proxy.submit = async result => {
        await vNode.component.proxy.hide()
        typeof submit === 'function' ? submit(result) : resolve(result)
      }
      vNode.component.proxy.cancel = async error => {
        await vNode.component.proxy.hide()
        typeof cancel === 'function' ? cancel(error) : reject(error)
      }
    })
  }
}
