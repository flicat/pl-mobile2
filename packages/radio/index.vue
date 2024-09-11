<template>
  <div class="pl-radio" :class="[
    formSize ? 'pl-radio--' + formSize : '',
    {
      'is-vertical': vertical,
      'is-disabled': formDisabled,
      'pl-radio--error': ruleMessage && formShowError
    }
    ]">
    <div class="pl-radio-cell" :class="{'pl-radio-cell--label': (label || $slots.label) && !wrap, 'pl-radio-cell--wrap': (label || $slots.label) && wrap}">
      <div class="pl-radio-title" :class="{'pl-radio-title--require': required}">
        <div class="pl-radio-prepend" v-if="$slots.prepend">
          <slot name="prepend"></slot>
        </div>
        <div class="pl-radio-label" v-if="label || $slots.label" :style="{width: formLabelWidth}">
          <slot name="label">{{label}}</slot>
        </div>
      </div>
      <div class="pl-radio-value">
        <div class="pl-radio-inner">
          <div class="pl-radio-item" v-for="(item, i) in options" :key="i" :class="{'is-active': item[prop.value] === currentValue, 'is-disabled': formDisabled || item[prop.disabled], 'is-button': button, 'is-vertical': vertical}" @click="!(formDisabled || item[prop.disabled]) && emit(item[prop.value])">
            <iconCicleChoose v-if="!button" v-show="item[prop.value] === currentValue" :class="['pl-radio-icon', 'icon-checked', (formDisabled || item[prop.disabled]) ? 'disabled' : '' ]"></iconCicleChoose>
            <iconCicleUnchoose v-if="!button" v-show="item[prop.value] !== currentValue" :class="['pl-radio-icon', 'icon-unchecked', (formDisabled || item[prop.disabled]) ? 'disabled' : '' ]"></iconCicleUnchoose>
            <span>
              <slot :item="item">{{item[prop.label]}}</slot>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="pl-radio-error" v-if="ruleMessage && formShowError">{{ruleMessage}}</div>
  </div>
</template>

<script>
import { ref, computed, onMounted, getCurrentInstance, inject, onUnmounted, onBeforeUnmount, watch, nextTick } from 'vue'
import validate from '../../src/assets/utils/validate'
import iconCicleChoose from '../../src/assets/images/icon-cicle-choose.svg'
import iconCicleUnchoose from '../../src/assets/images/icon-cicle-unchoose.svg'
import { getType, nullish } from '../../src/assets/utils'
// TODO 元素去除上下左右padding空间，添加rowHeight
// TODO 添加自定义icon：check/uncheck
// TODO icon图标跟随字体颜色
// radio
export default {
  name: 'plRadio',
  componentName: 'plRadio',
  components: {
    iconCicleChoose,
    iconCicleUnchoose
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
    options: {          // 单选选项
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
    wrap: Boolean,               // label与value换行显示
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

    const formSize = nullish(props.size, inject('size', null), 'normal')
    const formLabelWidth = nullish(props.labelWidth, inject('labelWidth', null))
    const formDisabled = nullish(props.disabled, inject('disabled', null), false)
    const formShowError = nullish(props.showError, inject('showError', null), true)
    const formUpdateItems = inject('updateItems', () => { })
    const formRemoveItem = inject('removeItem', () => { })

    const ruleMessage = ref('')     // 验证错误提示信息
    const currentValue = computed({
      get: () => {
        return props.value === undefined ? '' : props.value
      },
      set: val => {
        context.emit('update:value', val)
        context.emit('change', val)
      }
    })

    // 手动验证方法
    const validateField = async () => {
      if (!Array.isArray(props.rules) || !props.rules.length) {
        return false
      }
      let type = 'string'
      if (props.options.find(item => item[props.prop.value] === currentValue.value)) {
        type = getType(currentValue.value)
      }
      try {
        await validate(props.rules, currentValue.value, type)
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

    const emit = (value) => {
      if (value === currentValue.value) {
        return false
      }
      currentValue.value = value
    }

    watch(currentValue, () => {
      validateField()
    })

    onMounted(() => {
      formUpdateItems(app)
    })

    onUnmounted(() => {
      formRemoveItem(app)
    })

    return {
      formSize,
      formDisabled,
      ruleMessage,
      formLabelWidth,
      currentValue,
      formDisabled,
      ruleMessage,
      emit,
      validate: validateField,
      clearValidate,
      formShowError
    }
  }
}
</script>

<style lang="less">
@import "../../src/assets/less/mixin.less";

.pl-radio {
  background-color: var(--input-bg);
  padding: 0 var(--horizontal-size);
  line-height: normal;

  * {
    box-sizing: border-box;
  }

  &-cell {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    &--label {
      .pl-radio-inner {
        text-align: right;
        justify-content: flex-end;
        .pl-radio-item {
          margin: 0 0 0 1em;
        }
      }
    }
    &--wrap {
      flex-direction: column;

      .pl-radio-title,
      .pl-radio-value {
        width: 100%;
      }
      .pl-radio-title {
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
        width: var(--asterisk-size);
        content: "*";
        color: var(--danger);
        margin-left: -var(--asterisk-size);
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
  // &--normal {
  // }
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
  .pl-radio-label {
    padding-right: 0.4em;
  }
  .pl-radio-item {
    position: relative;
    display: inline-table;
    margin: 0 1em 0 0;
    padding: 0.3em 0;
    color: var(--radio-text);

    .pl-radio-icon {
      margin-right: 0.5em;
      font-size: 1em;

      &.disabled {
        color: #ebedf0;
      }
      &.icon-checked {
        color: var(--primary);
      }
      &.icon-unchecked {
        color: #dcdfe6;
      }
      & + span {
        display: inline-block;
        vertical-align: middle;
      }
    }
    &.is-vertical {
      display: table;
      width: 100%;
      margin-right: 0;
      line-height: 1em;

      .pl-radio-icon {
        position: absolute;
        right: 0.5em;
      }
      &.is-button {
        text-align: left;
      }
      &:not(.is-button) {
        padding: 1em 2.5em 1em 0;

        &:not(:last-child) {
          border-bottom: 1px solid var(--radio-vertical-border);
        }
      }
    }
    &.is-button {
      margin: 0;
      padding: 0.5em;
      border: 1px solid var(--radio-button-border);

      .pl-radio-icon {
        display: none;
      }
      &:not(.is-vertical) {
        &:not(:last-child) {
          border-right: 0 none;
        }
        &:first-child {
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
        }
        &:last-child {
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
        }
      }
      &.is-vertical {
        padding: 1em 0.5em;

        &:not(:last-child) {
          border-bottom: 0 none;
        }
        &:first-child {
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
        }
        &:last-child {
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
        }
      }
      &.is-active {
        background-color: var(--primary);
        color: var(--radio-button-text);
      }
      &.is-disabled {
        background-color: var(--radio-button-disabled-bg);
        border-color: var(--radio-button-disabled-bg);
        color: var(--radio-button-disabled-text);
      }
    }
    &.is-active {
      color: var(--primary);
      border-color: var(--primary);
    }
    &.is-disabled {
      color: var(--radio-disabled-text);
    }
  }

  &-error {
    padding: 0 0.5em;
    color: var(--danger);
    line-height: 2em;
  }

  &.is-vertical {
    .pl-radio-inner {
      padding: 0;
    }
  }
}
</style>
