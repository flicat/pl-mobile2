<template>
  <div class="pl-radio" :class="[
    calcSize ? 'pl-radio--' + calcSize : '',
    {
      'is-vertical': vertical,
      'is-disabled': calcDisabled,
      'pl-radio--error': ruleMessage
    }
    ]">
    <div class="pl-radio-cell" :class="{'pl-radio-cell--label': (label || $slots.label) && !wrap, 'pl-radio-cell--wrap': (label || $slots.label) && wrap}">
      <div class="pl-radio-title" :class="{'pl-radio-title--require': required}">
        <div class="pl-radio-prepend" v-if="$slots.prepend">
          <slot name="prepend"></slot>
        </div>
        <div class="pl-radio-label" v-if="label || $slots.label" :style="{width: calcLabelWidth}">
          <slot name="label">{{label}}</slot>
        </div>
      </div>
      <div class="pl-radio-value">
        <div class="pl-radio-inner">
          <div class="pl-radio-item" v-for="(item, i) in options" :key="i" :class="{'is-active': item[prop.value] === currentValue, 'is-disabled': calcDisabled || item[prop.disabled], 'is-button': button, 'is-vertical': vertical}" @click="!(calcDisabled || item[prop.disabled]) && emit(item[prop.value])">
            <iconCicleChoose v-if="!button" v-show="item[prop.value] === currentValue" :class="['pl-radio-icon', 'icon-checked', (calcDisabled || item[prop.disabled]) ? 'disabled' : '' ]"></iconCicleChoose>
            <iconCicleUnchoose v-if="!button" v-show="item[prop.value] !== currentValue" :class="['pl-radio-icon', 'icon-unchecked', (calcDisabled || item[prop.disabled]) ? 'disabled' : '' ]"></iconCicleUnchoose>
            <span>
              <slot :item="item">{{item[prop.label]}}</slot>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="pl-radio-error" v-if="ruleMessage">{{ruleMessage}}</div>
  </div>
</template>

<script>
import { ref, computed, onMounted, getCurrentInstance, inject, onUnmounted, onBeforeUnmount, watch, nextTick } from 'vue'
import validate from '../../src/assets/utils/validate'
import iconCicleChoose from '../../src/assets/images/icon-cicle-choose.svg'
import iconCicleUnchoose from '../../src/assets/images/icon-cicle-unchoose.svg'
import { getType } from '../../src/assets/utils'

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
    wrap: Boolean,            // label与value换行显示
    disabled: Boolean,            // 禁用
    required: Boolean,            // 必填 *号
    button: Boolean,              // 是否是按钮样式
    vertical: Boolean,            // 是否是竖向排列
    label: String,                // 左侧 label
    labelWidth: String            // label 宽度
  },
  setup(props, context) {
    const app = getCurrentInstance()

    const formSize = inject('size', props.size)
    const formLabelWidth = inject('labelWidth', props.labelWidth)
    const formDisabled = inject('disabled', props.disabled)
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

    const calcSize = computed(() => {
      return props.size || formSize && formSize.value || 'normal'
    })
    const calcLabelWidth = computed(() => {
      return props.labelWidth || formLabelWidth && formLabelWidth.value || null
    })
    const calcDisabled = computed(() => {
      return props.disabled !== undefined ? props.disabled : formDisabled && formDisabled.value !== undefined ? formDisabled.value : false
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
      calcSize,
      calcDisabled,
      ruleMessage,
      calcLabelWidth,
      currentValue,
      calcDisabled,
      ruleMessage,
      emit,
      validate: validateField,
      clearValidate
    }
  }
}
</script>

<style lang="less">
@import "../../src/assets/less/mixin.less";

.pl-radio {
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