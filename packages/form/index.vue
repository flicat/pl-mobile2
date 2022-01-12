<template>
  <div class="pl-form" v-bind="$props">
    <slot></slot>
  </div>
</template>

<script>
// TODO 可选的禁止显示错误信息
import { provide } from 'vue'
// form
export default {
  name: 'plForm',
  componentName: 'plForm',
  props: {
    size: String,        // 尺寸 可选值为 normal，large, small,
    labelWidth: String,  // label 宽度
    disabled: {                 // 禁用
      type: Boolean,
      default: undefined
    },
    showError: {            // 是否在组件显示错误信息
      type: Boolean,
      default: undefined
    }
  },
  setup(props) {
    const children = []

    // 更新内容节点
    const updateItems = (item) => {
      if (children.indexOf(item) < 0) {
        children.push(item)
      }
    }
    // 删除内容节点
    const removeItem = (item) => {
      const index = children.indexOf(item);
      if (index > -1) {
        children.splice(index, 1);
      }
    }
    // 手动验证方法
    const validate = () => {
      return Promise.all(children.map(item => item.proxy.validate())).then(() => {
        return Promise.resolve()
      }).catch(e => {
        return Promise.reject(e)
      })
    }
    const clearValidate = () => {
      children.map(item => item.proxy.clearValidate())
    }

    provide('size', props.size)
    provide('labelWidth', props.labelWidth)
    provide('disabled', props.disabled)
    provide('showError', props.showError)
    provide('updateItems', updateItems)
    provide('removeItem', removeItem)

    return {
      validate,
      clearValidate
    }
  }
}
</script>

<style lang="less">
.pl-form {
  * {
    box-sizing: border-box;
  }
}
</style>
