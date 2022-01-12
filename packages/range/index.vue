<template>
  <div class="pl-range" :class="[
    formSize ? 'pl-range--' + formSize : '',
    {
      'is-disabled': formDisabled,
      'pl-range--error': ruleMessage && formShowError
    }
    ]">
    <div class="pl-range-cell" :class="{'pl-range-cell--label': (label || $slots.label) && !wrap, 'pl-range-cell--wrap': (label || $slots.label) && wrap}">
      <div :class="['pl-range-title', {'pl-range-title--require': required}]">
        <div class="pl-range-prepend" v-if="$slots.prepend">
          <slot name="prepend"></slot>
        </div>
        <div class="pl-range-label" :class="{'pl-range-label--require': required}" v-if="label || $slots.label" :style="{width: formLabelWidth}">
          <slot name="label">{{label}}</slot>
        </div>
      </div>

      <div class="pl-range-value">
        <div class="pl-range-inner">
          <div class="slider-runnable-track" ref="track">
            <div class="progress" :style="progressStyle"></div>
            <div class="thumb" :style="thumbStyle" @touchstart="touchEvent($event)" @touchmove="touchEvent($event)" @touchend="touchEvent($event)" @touchcancel="touchEvent($event)">
              <slot name="thumb">
                <div class="thumb-icon"></div>
              </slot>
            </div>
          </div>
        </div>
        <div class="pl-range-append" v-if="$slots.append">
          <slot name="append"></slot>
        </div>
      </div>
    </div>
    <div class="pl-range-error" v-if="ruleMessage && formShowError">{{ruleMessage}}</div>
  </div>
</template>

<script>
import { ref, computed, onMounted, getCurrentInstance, inject, onUnmounted, onBeforeUnmount, watch, nextTick } from 'vue'
import validate from '../../src/assets/utils/validate'
import { nullish } from '../../src/assets/utils/index'

export default {
  name: 'plRange',
  componentName: 'plRange',
  props: {
    rules: {          // 验证规则
      type: Array,
      default() {
        return []
      }
    },
    size: String,     // 尺寸 可选值为 normal，large, small,
    value: Number,
    // 最小值
    min: {
      type: Number,
      default: 0,
    },
    // 最大值
    max: {
      type: Number,
      default: 100,
    },
    // step进度间隔
    step: {
      type: Number,
      default: 1,
    },
    wrap: Boolean,            // label与value换行显示
    disabled: {                 // 禁用
      type: Boolean,
      default: undefined
    },
    required: Boolean,            // 必填 *号
    showError: {            // 是否在组件显示错误信息
      type: Boolean,
      default: undefined
    },
    label: String,                // 左侧 label
    labelWidth: String            // label 宽度
  },
  setup(props, context) {
    const app = getCurrentInstance()

    const track = ref(null)
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

    let rangeWidth = 0
    let transDiff = 0
    let transStart = 0
    let transEnd = 0

    const formSize = nullish(props.size, inject('size', null), 'normal')
    const formLabelWidth = nullish(props.labelWidth, inject('labelWidth', null))
    const formDisabled = nullish(props.disabled, inject('disabled', null), false)
    const formShowError = nullish(props.showError, inject('showError', null), true)
    const formUpdateItems = inject('updateItems', () => { })
    const formRemoveItem = inject('removeItem', () => { })

    const diff = computed(() => {
      return currentValue.value / (props.max - props.min) * rangeWidth
    })
    const progressStyle = computed(() => {
      return {
        width: diff.value + 'px'
      }
    })
    const thumbStyle = computed(() => {
      return {
        'transform': `translateX(${diff.value}px)`,
        '-webkit-transform': `translateX(${diff.value}px)`
      }
    })

    // 手动验证方法
    const validateField = async () => {
      if (!Array.isArray(props.rules) || !props.rules.length) {
        return false
      }
      try {
        await validate(props.rules, currentValue.value, 'number')
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
    const touchEvent = (e) => {
      if (formDisabled) {
        return false
      }
      let moveValue = 0

      switch (e.type) {
        case 'touchstart':
          transStart = e.touches[0].clientX
          transDiff = diff.value
          break;
        case 'touchmove':
          e.preventDefault()
          e.stopPropagation()
          transEnd = e.touches[0].clientX
          moveValue = Math.round((transDiff + transEnd - transStart) / rangeWidth * (props.max - props.min) / props.step) * props.step
          if (moveValue < props.min) {
            moveValue = props.min
          }
          if (moveValue > props.max) {
            moveValue = props.max
          }
          currentValue.value = moveValue
          break;
      }
    }

    watch(currentValue, () => {
      validateField()
    })

    onMounted(() => {
      formUpdateItems(app);
      if (track) {
        rangeWidth = track.value.clientWidth
      }
    })

    onUnmounted(() => {
      formRemoveItem(app);
    })

    return {
      track,
      formSize,
      formDisabled,
      ruleMessage,
      formLabelWidth,
      progressStyle,
      thumbStyle,
      touchEvent,
      validate: validateField,
      clearValidate,
      formShowError
    }
  }
}
</script>

<style lang="less">
@import "../../src/assets/less/mixin.less";

.pl-range {
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
      .pl-range-title {
        padding: 1em 0;
      }
    }
    &--wrap {
      flex-direction: column;

      .pl-range-title,
      .pl-range-value {
        width: 100%;
      }
      .pl-range-title {
        padding-top: 1em;
      }
      .pl-range-value {
        padding: 0.6em 0;
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
    box-sizing: border-box;
    padding: 1em;
    flex: 1;
    width: 100%;
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
  .pl-range-label {
    padding-right: 0.4em;
  }
  .slider-runnable-track {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 3px;
    background: var(--range-bar);
    border-radius: 2px;

    .progress,
    .thumb {
      position: absolute;
      left: 0;
      top: 0;
    }
    .progress {
      z-index: 0;
      height: 3px;
      border-radius: 2px;
      background: var(--range-progress);
    }
    .thumb {
      z-index: 2;

      &-icon {
        background: var(--range-thumb);
        width: 1.6em;
        height: 1.6em;
        line-height: 1.6em;
        text-align: center;
        border-radius: 50%;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
        transform: translate(-50%, -50%);
      }
    }
  }
  &-error {
    padding: 0 0.5em;
    color: var(--danger);
    line-height: 2em;
  }
  &.is-disabled {
    color: var(--disabled);
    .slider-runnable-track {
      .progress {
        background-color: var(--range-disabled-bg);
      }
    }
  }
}
</style>
