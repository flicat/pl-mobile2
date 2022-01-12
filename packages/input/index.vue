<template>
  <div class="pl-input" :class="[
    formSize ? 'pl-input--' + formSize : '',
    {
      'is-disabled': formDisabled,
      'pl-input-group': $slots.prepend || $slots.append,
      'pl-input-group--append': $slots.append,
      'pl-input-group--prepend': $slots.prepend,
      'pl-input--error': ruleMessage && formShowError
    }
    ]">
    <div class="pl-input-cell" :class="{'pl-input-cell--label': (label || $slots.label) && !wrap, 'pl-input-cell--wrap': (label || $slots.label) && wrap}">
      <div :class="['pl-input-title', {'pl-input-title--require': required, 'pl-input-title--start': type === 'textarea' && !wrap}]">
        <div class="pl-input-prepend" v-if="$slots.prepend">
          <slot name="prepend"></slot>
        </div>
        <div class="pl-input-label" v-if="label || $slots.label" :style="{width: formLabelWidth}">
          <slot name="label">{{label}}</slot>
        </div>
      </div>

      <div class="pl-input-value">
        <template v-if="type !== 'textarea'">
          <div class="pl-input-inner">
            <input v-bind="$attrs" v-on="{focus: emit, blur: emit}" v-if="type !== 'textarea'" :type="type" :disabled="formDisabled" v-model="currentValue" ref="input">
          </div>
          <div class="pl-input-clear" @touchstart="clear" @mousedown="clear" v-show="showClear">
            <iconClose class="pl-input-clear-icon"></iconClose>
          </div>
          <div class="pl-input-append" v-if="$slots.append">
            <slot name="append"></slot>
          </div>
        </template>
        <div class="pl-input-inner" v-else>
          <textarea v-bind="$attrs" :rows="rows" :cols="cols" v-on="{focus: emit, blur: emit}" v-model="currentValue" ref="input" :disabled="formDisabled"></textarea>
        </div>
      </div>

    </div>
    <div class="pl-input-error" v-if="ruleMessage && formShowError">{{ruleMessage}}</div>
  </div>
</template>

<script>
import { ref, computed, onMounted, getCurrentInstance, inject, onUnmounted, onBeforeUnmount, watch, nextTick } from 'vue'
import iconClose from '../../src/assets/images/icon-close.svg'
import validate from '../../src/assets/utils/validate'
import { nullish } from '../../src/assets/utils/index'

export default {
  name: 'plInput',
  componentName: 'plInput',
  components: {
    iconClose
  },
  props: {
    rules: {          // 验证规则
      type: Array,
      default() {
        return []
      }
    },
    size: String,     // 尺寸 可选值为 normal，large, small,
    type: {         // 表单类型，原生字段
      type: String,
      default: 'text'
    },
    value: [String, Number],
    wrap: Boolean,            // label与value换行显示
    disabled: {                 // 禁用
      type: Boolean,
      default: undefined
    },
    required: Boolean,        // 必填 *号
    rows: String,            // textarea rows
    cols: String,            // textarea cols
    showError: {            // 是否在组件显示错误信息
      type: Boolean,
      default: undefined
    },
    label: String,            // 左侧 label
    labelWidth: String,       // label 宽度
    clearable: {              // 清除按钮
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const app = getCurrentInstance()

    const input = ref(null)
    const formSize = nullish(props.size, inject('size', null), 'normal')
    const formLabelWidth = nullish(props.labelWidth, inject('labelWidth', null))
    const formDisabled = nullish(props.disabled, inject('disabled', null), false)
    const formShowError = nullish(props.showError, inject('showError', null), true)
    const formUpdateItems = inject('updateItems', () => { })
    const formRemoveItem = inject('removeItem', () => { })

    console.log('formSize:', formSize, ' / props.size:', props.size)
    console.log('formLabelWidth:', formLabelWidth, ' / props.labelWidth:', props.labelWidth)
    console.log('formDisabled:', formDisabled, ' / props.disabled:', props.disabled)
    console.log('formShowError:', formShowError, ' / props.showError:', props.showError)

    const ruleMessage = ref('')     // 验证错误提示信息
    const currentValue = computed({
      get: () => {
        return props.value === undefined ? '' : props.value
      },
      set: val => {
        context.emit('update:value', val)
      }
    })
    const focused = ref(false)
    const handlers = []

    const showClear = computed(() => {
      return props.clearable && !formDisabled && currentValue.value !== '' && focused.value
    })

    // 手动验证方法
    const validateField = async () => {
      if (!Array.isArray(props.rules) || !props.rules.length) {
        return false
      }
      try {
        await validate(props.rules, currentValue.value, 'string')
        ruleMessage.value = ''
        return Promise.resolve()
      } catch (e) {
        ruleMessage.value = e.errors[0].message
        return Promise.reject(ruleMessage.value)
      }
    }
    const clearValidate = () => {
      ruleMessage.value = ''
    }
    const focus = () => {
      input.value.focus();
    }
    const clear = () => {
      context.emit('clear')
      currentValue.value = ''
      focus()
    }
    const emit = (e) => {
      focused.value = e.type === 'focus'
    }
    const bindEvent = () => {
      if (!Array.isArray(props.rules) || !props.rules.length) {
        return false
      }
      // 绑定事件
      props.rules.forEach(rule => {
        let event = rule.trigger
        if (!event) {
          event = 'change'
        }

        let handler = async () => {
          await nextTick()
          try {
            await validate([rule], currentValue.value, 'string')
            ruleMessage.value = ''
          } catch (e) {
            ruleMessage.value = e.errors[0].message
          }
        }

        input.value.addEventListener(event, handler)
        handlers.push({ event, handler })
      })
    }
    const unbindEvent = () => {
      handlers.forEach(handler => {
        input.value.removeEventListener(handler.event, handler.handler)
      })
      handlers.length = 0
    }

    watch(() => props.rules, (val) => {
      if (Array.isArray(val)) {
        unbindEvent()
        bindEvent()
      }
    })

    onMounted(() => {
      bindEvent()
      formUpdateItems(app)
    })

    onBeforeUnmount(() => {
      unbindEvent()
    })

    onUnmounted(() => {
      formRemoveItem(app)
    })

    return {
      input,
      formSize,
      formDisabled,
      ruleMessage,
      formLabelWidth,
      emit,
      currentValue,
      clear,
      showClear,
      validate: validateField,
      clearValidate,
      formShowError
    }
  }
}
</script>

<style lang="less">
.pl-input {
  background-color: var(--input-bg);
  padding: 0 1.2rem;
  line-height: normal;

  * {
    box-sizing: border-box;
  }

  &-cell {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    &--label {
      .pl-input-title {
        padding: 1em 0;
      }
      .pl-input-inner {
        input,
        textarea {
          text-align: right;
        }
      }
    }
    &--wrap {
      flex-direction: column;

      .pl-input-title,
      .pl-input-value {
        width: 100%;
      }
      .pl-input-title {
        padding-top: 1em;
      }
    }
  }
  &-title,
  &-value {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: row;
  }
  &-title {
    &--start {
      align-self: flex-start;
    }
    &--require {
      &::before {
        display: inline-block;
        width: 0.6rem;
        content: "*";
        color: var(--danger);
        margin-left: -0.6rem;
      }
    }
  }
  &-value {
    flex: 1;
  }

  &--large {
    font-size: 1.2em;
  }
  &--small {
    font-size: 0.8em;
  }
  // &--normal {
  // }
  &--error {
    position: relative;
  }
  &-inner {
    padding: 1em 0;
    flex: 1;
  }
  .pl-input-label {
    padding-right: 0.4em;
  }
  .pl-textarea-label {
    align-self: flex-start;
  }
  &-append,
  &-prepend {
    text-align: center;
  }
  &-append {
    padding-left: 0.4em;
  }
  &-prepend {
    padding-right: 0.4em;
  }
  &-clear {
    line-height: 0;
    margin-left: 0.4em;

    &-icon {
      color: #ccc;
    }
  }
  &-error {
    padding: 0 0.5em;
    color: var(--danger);
    line-height: 2em;
  }

  input,
  textarea {
    border: 0 none;
    margin: 0;
    padding: 0;
    line-height: normal;
    width: 100%;
    background-color: transparent;
    font-size: 1em;
    vertical-align: middle;

    &::placeholder {
      color: var(--primary-text);
    }
    &:active,
    &:focus,
    &:hover {
      outline: 0 none;
    }
  }

  &.is-disabled {
    color: var(--disabled);
    input,
    textarea {
      color: var(--disabled);
      &::placeholder {
        color: var(--disabled);
      }
    }
  }
}
</style>
