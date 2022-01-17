<template>
  <div class="pl-checkbox" :class="[
    formSize ? 'pl-checkbox--' + formSize : '',
    {
      'is-vertical': vertical,
      'is-disabled': formDisabled,
      'pl-checkbox--error': ruleMessage && formShowError
    }
    ]">
    <div class="pl-checkbox-cell" :class="{'pl-checkbox-cell--label': (label || $slots.label) && !wrap, 'pl-checkbox-cell--wrap': (label || $slots.label) && wrap}">
      <div class="pl-checkbox-title" :class="{'pl-checkbox-title--require': required}">
        <div class="pl-checkbox-prepend" v-if="$slots.prepend">
          <slot name="prepend"></slot>
        </div>
        <div class="pl-checkbox-label" v-if="label || $slots.label" :style="{width: formLabelWidth}">
          <slot name="label">{{label}}</slot>
        </div>
      </div>
      <div class="pl-checkbox-value">
        <div class="pl-checkbox-inner">
          <template v-if="options && options.length">
            <div v-for="(item, i) in options" :key="i" class="pl-checkbox-item" :class="{'is-button': button, 'is-vertical': vertical}">
              <input type="checkbox" :disabled="formDisabled || item[prop.disabled]" v-model="currentValue" :value="item[prop.value]">
              <iconCheck v-if="!button" class="pl-checkbox-icon icon-checked"></iconCheck>
              <iconUnCheck v-if="!button" class="pl-checkbox-icon icon-unchecked"></iconUnCheck>
              <span class="pl-checkbox-text">
                <slot :item="item">{{item[prop.label]}}</slot>
              </span>
            </div>
          </template>
          <template v-else>
            <div class="pl-checkbox-item pl-toggle-box" :class="{'is-toggle': button, 'is-vertical': !button && vertical}">
              <input type="checkbox" :disabled="formDisabled" v-model="currentValue" :true-value="trueValue" :false-value="falseValue">
              <iconCheck v-if="!button" class="pl-checkbox-icon icon-checked"></iconCheck>
              <iconUnCheck v-if="!button" class="pl-checkbox-icon icon-unchecked"></iconUnCheck>
              <span class="pl-checkbox-text">
                <slot></slot>
              </span>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="pl-checkbox-error" v-if="ruleMessage && formShowError">{{ruleMessage}}</div>
  </div>
</template>

<script>
import { ref, computed, onMounted, getCurrentInstance, inject, onUnmounted, watch } from 'vue'
import validate from '../../src/assets/utils/validate'
import iconCheck from '../../src/assets/images/icon-check.svg'
import iconUnCheck from '../../src/assets/images/icon-uncheck.svg'
import { nullish } from '../../src/assets/utils'

// checkbox
// TODO 元素去除上下左右padding空间，添加rowHeight
// TODO 添加自定义icon：check/uncheck/indeterminate
// TODO 添加全选
// TODO 添加不确定状态：indeterminate
// TODO icon图标跟随字体颜色
export default {
  name: 'plCheckbox',
  componentName: 'plCheckbox',
  components: {
    iconCheck,
    iconUnCheck
  },
  props: {
    rules: {          // 验证规则
      type: Array,
      default() {
        return []
      }
    },
    // TODO size计算用根节点字体大小
    size: String,     // 尺寸 可选值为 normal，large, small,
    options: {          // 多选选项
      type: Array,
      default() {
        return []
      }
    },
    prop: {          // key与value
      type: Object,
      default() {
        return { label: 'label', value: 'value', disabled: 'disabled' }
      }
    },
    value: {
      default: null
    },
    trueValue: {
      default: null
    },
    falseValue: {
      default: null
    },
    wrap: Boolean,            // label与value换行显示
    disabled: {                 // 禁用
      type: Boolean,
      default: undefined
    },
    required: Boolean,            // 必填 *号
    button: Boolean,              // 是否是按钮样式
    vertical: Boolean,            // 是否是竖向排列
    showError: {            // 是否在组件显示错误信息
      type: Boolean,
      default: undefined
    },
    label: String,                // 左侧 label
    labelWidth: String            // label 宽度
  },
  setup(props, context) {
    const app = getCurrentInstance()
    const ruleMessage = ref('')     // 验证错误提示信息
    const currentValue = computed({
      get: () => {
        return props.value === undefined ? '' : props.value
      },
      set: val => {
        context.emit('update:value', val)
      }
    })

    const formSize = nullish(props.size, inject('size', null), 'normal')
    const formLabelWidth = nullish(props.labelWidth, inject('labelWidth', null))
    const formDisabled = nullish(props.disabled, inject('disabled', null), false)
    const formShowError = nullish(props.showError, inject('showError', null), true)
    const formUpdateItems = inject('updateItems', () => { })
    const formRemoveItem = inject('removeItem', () => { })

    // 手动验证方法
    const validateField = async () => {
      if (!Array.isArray(props.rules) || !props.rules.length) {
        return false
      }
      try {
        await validate(props.rules, currentValue.value, 'array')
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

    watch(currentValue, () => {
      validateField()
    })

    onMounted(() => {
      formUpdateItems(app);
    })

    onUnmounted(() => {
      formRemoveItem(app);
    })

    return {
      currentValue,
      ruleMessage,
      formSize,
      formLabelWidth,
      formDisabled,
      validate: validateField,
      clearValidate,
      formShowError
    }
  }
}
</script>

<style lang="less">
@import "../../src/assets/less/mixin.less";

.pl-checkbox {
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
      .pl-checkbox-inner {
        text-align: right;
        justify-content: flex-end;
        .pl-checkbox-item {
          margin: 0 0 0 1em;
        }
      }
    }
    &--wrap {
      flex-direction: column;

      .pl-checkbox-title,
      .pl-checkbox-value {
        width: 100%;
      }
      .pl-checkbox-title {
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
    padding-top: 1em;
    align-self: flex-start;
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
  &-prepend {
    text-align: center;
    padding-right: 0.4em;
  }

  &--large {
    font-size: 1.2em;
  }
  &--small {
    font-size: 0.8em;
  }
  &--error {
    position: relative;
  }
  &-inner {
    padding: 0.7em 0;
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .pl-checkbox-label {
    padding-right: 0.4em;
  }
  .pl-checkbox-item {
    position: relative;
    display: inline-table;
    margin: 0 1em 0 0;
    padding: 0.3em 0;

    input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      opacity: 0;
      margin: 0;
      -webkit-appearance: none;

      &:checked {
        & ~ .pl-checkbox-text {
          color: var(--primary);
          border-color: var(--primary);
        }
        & ~ .icon-unchecked {
          display: none;
        }
        & ~ .icon-checked {
          display: inline-block;
        }
        & ~ .pl-checkbox-icon {
          color: var(--primary);
        }
      }
      &:disabled {
        & ~ .pl-checkbox-text {
          color: var(--checkbox-disabled-text);
          border-color: var(--checkbox-disabled-border);
        }
        & ~ .pl-checkbox-icon {
          color: var(--checkbox-disabled-bg);
        }
      }
    }
    .pl-checkbox-text {
      margin-left: 0.5em;
      color: var(--checkbox-text);
      display: inline-block;
      vertical-align: middle;
    }
    .pl-checkbox-icon {
      color: var(--checkbox-bg);
      font-size: 1em;

      &.icon-unchecked {
        display: inline-block;
      }
      &.icon-checked {
        display: none;
      }
    }
    &.is-vertical {
      display: block;
      width: 100%;
      margin-right: 0;
      padding: 1em 2.5em 1em 0;
      line-height: 1em;
      border-bottom: 1px solid var(--checkbox-vertical-border);

      .pl-checkbox-icon {
        position: absolute;
        right: 0.5rem;
      }
      &:last-child {
        border-bottom: 0 none;
      }
    }
    &.is-button {
      margin: 0;
      padding: 0;

      .pl-checkbox-text {
        display: block;
        width: 100%;
        height: 100%;
        border: 1px solid var(--checkbox-button-border);
        padding: 0.5em;
        line-height: 1em;
        margin-left: 0;
      }
      .pl-checkbox-icon {
        display: none;
      }
      &:first-child ~ :not(.is-vertical) {
        .pl-checkbox-text {
          border-left: 0 none;
        }
      }
      &:first-child {
        .pl-checkbox-text {
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
        }
      }
      &:last-child {
        .pl-checkbox-text {
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
        }
      }

      &.is-vertical {
        padding: 0;
        border-bottom: 0 none;

        .pl-checkbox-text {
          border-radius: 0;
          padding: 1em 0.5em;
          text-align: left;
        }
        &:not(:last-child) {
          .pl-checkbox-text {
            border-bottom: 0 none;
          }
        }
        &:first-child {
          .pl-checkbox-text {
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
          }
        }
        &:last-child {
          .pl-checkbox-text {
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
          }
        }
      }
      input[type="checkbox"] {
        &:checked ~ .pl-checkbox-text {
          background-color: var(--primary);
          color: var(--checkbox-button-text);
        }
        &:disabled ~ .pl-checkbox-text {
          background-color: var(--checkbox-button-disabled-bg);
          color: var(--checkbox-button-disabled-text);
        }
      }
    }
  }
  .pl-toggle-box {
    &.is-toggle {
      .pl-checkbox-text {
        position: relative;
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        border-radius: 1.6em;
        height: 1.5em;
        box-sizing: content-box;
        margin-left: 0;

        &::before {
          position: absolute;
          content: "";
          display: block;
          width: 1.5em;
          height: 1.5em;
          border-radius: 50%;
          background-color: var(--checkbox-toggle-color);
        }
      }
      input[type="checkbox"] {
        & ~ .pl-checkbox-text {
          color: var(--checkbox-toggle-color);
          background-color: var(--checkbox-toggle-unchecked-bg);
          padding: 1px 0.7em 1px 1.9em;
          &::before {
            top: 1px;
            right: auto;
            left: 1px;
          }
        }
        &:checked ~ .pl-checkbox-text {
          color: var(--checkbox-toggle-color);
          background-color: var(--checkbox-toggle-checked-bg);
          padding: 1px 1.9em 1px 0.7em;
          &::before {
            top: 1px;
            left: auto;
            right: 1px;
          }
        }
        &:disabled ~ .pl-checkbox-text {
          color: var(--checkbox-toggle-color);
          background-color: var(--disabled);
        }
      }
    }
  }

  &-error {
    padding: 0 0.5em;
    color: var(--danger);
    line-height: 2em;
  }

  &.is-vertical {
    .pl-checkbox-inner {
      padding: 0;
    }
  }
}
</style>
