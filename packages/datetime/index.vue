<template>
  <div class="pl-datetime" :class="[
    formSize ? 'pl-datetime--' + formSize : '',
    {
      'is-disabled': formDisabled,
      'pl-datetime--error': ruleMessage && formShowError
    }
    ]">
    <div class="pl-datetime-cell" :class="{'pl-datetime-cell--label': (label || $slots.label) && !wrap, 'pl-datetime-cell--wrap': (label || $slots.label) && wrap}">
      <div :class="['pl-datetime-title', {'pl-datetime-title--require': required}]">
        <div class="pl-datetime-prepend" v-if="$slots.prepend">
          <slot name="prepend"></slot>
        </div>
        <div class="pl-datetime-label" :class="{'pl-datetime-label--require': required}" v-if="label || $slots.label" :style="{width: formLabelWidth}">
          <slot name="label">{{label}}</slot>
        </div>
      </div>
      <div class="pl-datetime-value">
        <div class="pl-datetime-inner">
          <div class="pl-datetime-inner-flex" v-if="calcIsRange">
            <span v-if="emitValue && emitValue[0]" class="title" @click="open()">{{emitValue[0]}}</span>
            <span class="placeholder" v-else @click="open()">{{startPlaceholder}} </span>
            <span class="range-separator">{{rangeSeparator}}</span>
            <span v-if="emitValue && emitValue[1]" class="title" @click="open()">{{emitValue[1]}}</span>
            <span class="placeholder" v-else @click="open()">{{endPlaceholder}} </span>
          </div>
          <div v-else @click="open()">
            <span v-if="emitValue" class="title">{{emitValue}}</span>
            <span class="placeholder" v-else>{{placeholder}} </span>
          </div>
        </div>
        <div class="pl-datetime-clear" @touchstart.stop.prevent="clear" @mousedown.stop.prevent="clear">
          <iconClose class="pl-datetime-clear-icon" v-if="showClear"></iconClose>
        </div>
        <div class="pl-datetime-append" v-if="$slots.append">
          <slot name="append"></slot>
        </div>
      </div>
    </div>
    <div class="pl-datetime-error" v-if="ruleMessage && formShowError">{{ruleMessage}}</div>

    <pl-month ref="month" @submit="submit"></pl-month>
    <pl-time ref="time" @submit="submit"></pl-time>
    <pl-date ref="datetime" @submit="submit"></pl-date>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted, getCurrentInstance, inject, watch } from 'vue'
import plMonth from './month.vue'
import plTime from './time.vue'
import plDate from './datetime.vue'
import validate from '../../src/assets/utils/validate'
import iconClose from '../../src/assets/images/icon-close.svg'
import { getType, nullish } from '../../src/assets/utils'
// TODO 元素去除上下左右padding空间，添加rowHeight
// TODO icon图标跟随字体颜色
export default {
  name: 'plDatetime',
  componentName: 'plDatetime',
  components: {
    iconClose,
    plMonth,
    plTime,
    plDate
  },
  props: {
    rules: {          // 验证规则
      type: Array,
      default() {
        return []
      }
    },
    value: [Date, String, Number, Array],
    // TODO size计算用根节点字体大小
    size: String,                // 尺寸 可选值为 normal，large, small,
    type: String,                // 日历类型：month，date，time，datetime
    isRange: Boolean,            // 是否是范围选择
    placeholder: String,         // 日期占位内容
    startPlaceholder: String,    // 范围选择时开始日期的占位内容
    endPlaceholder: String,      // 范围选择时开始日期的占位内容
    rangeSeparator: {            // 选择范围时的分隔符
      type: String,
      default: '至'
    },
    options: Object,             // 当前时间日期选择器特有的选项
    format: String,              // 日期显示格式
    valueFormat: String,         // 日期返回值格式，Y-M-D H:I:S 不传则返回日期对象
    wrap: Boolean,            // label与value换行显示
    disabled: {                 // 禁用
      type: Boolean,
      default: undefined
    },
    readonly: Boolean,           // 只读
    required: Boolean,           // 必填 *号
    showError: {            // 是否在组件显示错误信息
      type: Boolean,
      default: undefined
    },
    label: String,               // 左侧 label
    labelWidth: String,          // label 宽度
    clearable: Boolean           // 清除按钮
  },
  setup(props, context) {
    const app = getCurrentInstance()

    const month = ref(null)
    const time = ref(null)
    const datetime = ref(null)

    const ruleMessage = ref('')
    // 提交日期
    const emitValue = computed({
      get: () => {
        return props.value === undefined ? '' : props.value
      },
      set: val => {
        context.emit('update:value', val)
        context.emit('change', val)
      }
    })

    const formSize = nullish(props.size, inject('size', null), 'normal')
    const formLabelWidth = nullish(props.labelWidth, inject('labelWidth', null))
    const formDisabled = nullish(props.disabled, inject('disabled', null), false)
    const formShowError = nullish(props.showError, inject('showError', null), true)
    const formUpdateItems = inject('updateItems', () => { })
    const formRemoveItem = inject('removeItem', () => { })

    // 清除按钮
    const showClear = computed(() => {
      return props.clearable && !formDisabled && (calcIsRange.value ? emitValue.value && emitValue.value.length : emitValue.value)
    })

    const calcType = computed(() => {
      return props.type || props.options && props.options.type || 'date'
    })
    const calcIsRange = computed(() => {
      return props.isRange !== undefined && props.isRange || props.options && props.options.isRange || false
    })
    const calcFormat = computed(() => {
      return props.valueFormat || props.options && props.options.format
    })

    const validateField = async () => {
      if (!Array.isArray(props.rules) || !props.rules.length) {
        return false
      }
      try {
        await validate(props.rules, emitValue.value, calcIsRange.value ? 'array' : 'string')
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
    // 打开选择框
    const open = () => {
      if (formDisabled || props.readonly) {
        return false
      }

      const options = Object.assign({}, props.options || {}, {
        type: calcType.value,
        isRange: calcIsRange.value
      })
      if (calcFormat.value) {
        options.format = calcFormat.value
      }

      if (options.isRange) {
        options.startValue = Array.isArray(emitValue.value) && emitValue.value[0] || props.options && props.options.startValue
        options.endValue = Array.isArray(emitValue.value) && emitValue.value[1] || props.options && props.options.endValue
      } else {
        options.value = emitValue.value || props.options && props.options.value
      }

      switch (options.type) {
        case 'month':
          month.value.open(options)
          break;
        case 'date':
          datetime.value.open(options)
          break;
        case 'time':
          time.value.open(options)
          break;
      }
    }

    // 提交日期
    const submit = (result) => {
      emitValue.value = result
    }

    // 清除方法
    const clear = () => {
      emitValue.value = calcIsRange.value ? [] : ''
      context.emit('clear')
    }

    watch(emitValue, () => {
      validateField()
    })

    onMounted(() => {
      formUpdateItems(app);
    })

    onUnmounted(() => {
      formRemoveItem(app);
    })

    return {
      month,
      time,
      datetime,
      emitValue,
      formSize,
      formDisabled,
      ruleMessage,
      formLabelWidth,
      calcIsRange,
      open,
      clear,
      showClear,
      ruleMessage,
      submit,
      validate: validateField,
      clearValidate,
      formShowError
    }
  }
}
</script>

<style lang="less">
@import "../../src/assets/less/mixin.less";

.pl-datetime {
  background-color: var(--input-bg);
  padding: 0 var(--horizontal-size);
  line-height: normal;
  overflow: hidden;

  * {
    box-sizing: border-box;
  }
  &-cell {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    &--label {
      .pl-datetime-inner {
        text-align: right;
      }
    }
    &--wrap {
      flex-direction: column;

      .pl-datetime-title,
      .pl-datetime-value {
        width: 100%;
      }
      .pl-datetime-title {
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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    .placeholder,
    .title {
      overflow: hidden;
    }
    .placeholder {
      display: inline-block;
      color: var(--primary-text);
    }

    &-flex {
      width: 100%;
      display: flex;
      flex-direction: row;

      .placeholder,
      .title {
        display: block;
        text-align: center;
        flex: 1;
      }
      .range-separator {
        display: block;
        padding: 0 0.5em;
      }
    }
  }
  &-label {
    padding-right: 0.4em;
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
  &.is-disabled {
    color: var(--disabled);
    .placeholder {
      color: var(--disabled);
    }
  }
}
</style>
