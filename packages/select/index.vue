<template>
  <div class="pl-select" :class="[
    formSize ? 'pl-select--' + formSize : '',
    multiple ? 'pl-select--multiple' : '',
    {
      'is-disabled': formDisabled,
      'pl-select--error': ruleMessage && formShowError
    }
    ]">
    <div class="pl-select-cell" :class="{'pl-select-cell--label': (label || $slots.label) && !wrap, 'pl-select-cell--wrap': wrap && (label || $slots.label)}">
      <div class="pl-select-title" :class="{'pl-select-title--require': required}">
        <div class="pl-select-prepend" v-if="$slots.prepend">
          <slot name="prepend"></slot>
        </div>
        <div class="pl-select-label" v-if="label || $slots.label" :style="{width: formLabelWidth}">
          <slot name="label">{{label}}</slot>
        </div>
      </div>
      <div class="pl-select-value">
        <div class="pl-select-inner" @click="open">
          <span v-if="multiple && currentValue && currentValue.length" class="title">
            <em class="tag" v-for="(item, i) in currentValue" :key="i">{{calcOptions.get(item)}}</em>
          </span>
          <span v-else-if="!multiple && currentValue !== null && currentValue !== undefined">{{calcOptions.get(currentValue)}}</span>
          <span class="placeholder" v-else>{{placeholder}}</span>
        </div>
        <div class="pl-select-clear" @touchstart.stop.prevent="clear" @mousedown.stop.prevent="clear" v-show="showClear">
          <iconClose class="pl-select-icon"></iconClose>
        </div>
        <div class="pl-select-icon">
          <iconUnfold class="pl-select-icon"></iconUnfold>
        </div>
        <div class="pl-select-append" v-if="$slots.append">
          <slot name="append"></slot>
        </div>
      </div>
    </div>
    <div class="pl-select-error" v-if="ruleMessage && formShowError">{{ruleMessage}}</div>

    <popup ref="picker" position="bottom">
      <div class="pl-select-popup-content">
        <div class="pl-select-popup-top">
          <div class="pl-select-popup-btn--cancel" @click="close">取消</div>
          <div class="pl-select-popup-title">{{placeholder}}</div>
          <div class="pl-select-popup-btn--submit" @click="submit">确认</div>
        </div>
        <div class="pl-select-popup-inner">
          <ul class="pl-select-popup-inner-row">
            <li class="pl-select-popup-inner-item" v-for="(item, i) in options" :key="i">
              <input :type="multiple ? 'checkbox' : 'radio'" class="inner-input" v-model="popupValue" :value="getValue(item)" :disabled="item.disabled" @change.stop @click.stop>
              <span>
                <slot :item="item">{{item[prop.label]}}</slot>
              </span>
              <iconHook class="pl-select-icon checked-icon"></iconHook>
            </li>
          </ul>
        </div>
      </div>
    </popup>
  </div>
</template>

<script>
import { ref, computed, onMounted, getCurrentInstance, inject, onUnmounted, watch } from 'vue'
import iconClose from '../../src/assets/images/icon-close.svg'
import iconHook from '../../src/assets/images/icon-hook.svg'
import iconUnfold from '../../src/assets/images/icon-unfold.svg'
import popup from '../popup/index.vue'
import validate from '../../src/assets/utils/validate'
import { getType, nullish } from '../../src/assets/utils'

export default {
  name: 'plSelect',
  componentName: 'plSelect',
  components: {
    iconClose,
    iconHook,
    iconUnfold,
    popup
  },
  props: {
    rules: {          // 验证规则
      type: Array,
      default() {
        return []
      }
    },
    value: {
      default: ''
    },
    size: String,     // 尺寸 可选值为 normal，large, small,
    placeholder: String,
    options: {         // 下拉选项
      type: Array,
      default() {
        return []
      }
    },
    prop: {
      type: Object,  // 显示的标签和返回的值 {label, value}
      default() {
        return { label: 'label', value: 'value' }
      }
    },
    wrap: Boolean,            // label与value换行显示
    multiple: Boolean,        // 多选
    disabled: {                 // 禁用
      type: Boolean,
      default: undefined
    },
    readonly: Boolean,        // 只读
    required: Boolean,        // 必填 *号
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

    const picker = ref(null)
    const formSize = nullish(props.size, inject('size', null), 'normal')
    const formLabelWidth = nullish(props.labelWidth, inject('labelWidth', null))
    const formDisabled = nullish(props.disabled, inject('disabled', null), false)
    const formShowError = nullish(props.showError, inject('showError', null), true)
    const formUpdateItems = inject('updateItems', () => { })
    const formRemoveItem = inject('removeItem', () => { })

    const ruleMessage = ref('')     // 验证错误提示信息
    const popupValue = ref('')
    const currentValue = computed({
      get: () => {
        return props.value === undefined ? '' : props.value
      },
      set: val => {
        context.emit('update:value', val)
        context.emit('change', val)
      }
    })

    const showClear = computed(() => {
      return props.clearable && !formDisabled && (!props.multiple ? currentValue.value : currentValue.value && currentValue.value.length)
    })
    const calcOptions = computed(() => {
      return new Map(props.options.map(item => [getValue(item), getLabel(item)]))
    })

    // 手动验证方法
    const validateField = async () => {
      if (!Array.isArray(props.rules) || !props.rules.length) {
        return false
      }
      let type = 'string'
      if (props.multiple) {
        type = 'array'
      } else if (calcOptions.value.get(currentValue.value)) {
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
    const open = () => {
      if (formDisabled || props.readonly || !props.options.length) {
        return false
      }
      if (Array.isArray(props.value)) {
        popupValue.value = [...props.value]
      } else {
        popupValue.value = props.value
      }
      picker.value.open()
    }
    const close = () => {
      picker.value.close()
    }
    const clear = () => {
      currentValue.value = null
      context.emit('clear')
    }
    const submit = () => {
      currentValue.value = popupValue.value
      close()
    }

    // 获取标签名，如果没有指定 prop 则返回对象本身
    const getLabel = (target) => {
      return props.prop.label ? target[props.prop.label] : String(target)
    }
    // 获取值，如果没有指定 prop 则返回对象本身
    const getValue = (target) => {
      return props.prop.value ? target[props.prop.value] : target
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
      picker,
      formSize,
      formDisabled,
      ruleMessage,
      formLabelWidth,
      open,
      close,
      currentValue,
      calcOptions,
      clear,
      showClear,
      submit,
      popupValue,
      getValue,
      validate: validateField,
      clearValidate,
      formShowError
    }
  }
}
</script>

<style lang="less">
@import "../../src/assets/less/mixin.less";

.pl-select {
  background-color: var(--input-bg);
  padding: 0 1.2rem;
  line-height: normal;
  position: relative;

  * {
    box-sizing: border-box;
  }

  &-cell {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: row;

    &--label {
      .pl-select-inner {
        text-align: right;
      }
    }
    &--wrap {
      flex-direction: column;

      .pl-select-title,
      .pl-select-value {
        width: 100%;
      }
      .pl-select-title {
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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    span {
      display: inline-block;
    }
    .placeholder {
      color: var(--primary-text);
    }
  }
  &--multiple {
    .pl-select-inner {
      white-space: normal;

      .tag {
        font-style: normal;
        margin: 2px 5px 2px 0;
        display: inline-block;
        padding: 0 0.3em;
        height: 100%;
        background-color: var(--tag-bg);
        color: var(--select-color);
        border-radius: 2px;
        white-space: nowrap;
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
  }
  &-error {
    padding: 0 0.5em;
    color: var(--danger);
    line-height: 2em;
  }
  &-icon {
    color: #ccc;
  }

  &.is-disabled {
    color: var(--disabled);
  }
}
.pl-select-popup {
  &-content {
    position: relative;
    z-index: 1;
    .font-size(16);
    color: var(--select-popup-color);
    background-color: var(--select-popup-bg);
    width: 100%;
  }

  &-top {
    .height(44);
    .line-height(44);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-top: 1px solid var(--picker-border);
    border-bottom: 1px solid var(--picker-border);
  }
  &-btn {
    &--cancel,
    &--submit {
      .font-size(14);
      .margin(0, 20);
    }
    &--cancel {
      color: var(--picker-btn-cancle);
    }
    &--submit {
      color: var(--picker-btn-submit);
    }
  }
  &-inner {
    max-height: 70vh;
    .min-height(150);
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow: hidden;
    overscroll-behavior: contain; // 阻止滚动传播

    &-row {
      width: 100%;
      overflow: auto;
      margin: 0;
      padding: 0;
      list-style: none;
      -webkit-overflow-scrolling: auto;
    }
    &-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      position: relative;
      padding: 0 1.2em;
      .height(50);
      .line-height(50);
      border-bottom: 1px solid var(--select-popup-border);

      &:last-child {
        border-bottom: 0 none;
      }
      .checked-icon {
        margin-left: auto;
        display: none;
        color: var(--primary);
      }
      .inner-input {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        opacity: 0;
        margin: 0;

        &:checked ~ .checked-icon {
          display: block;
        }
        &:checked ~ span {
          color: var(--primary);
        }
        &:disabled ~ span {
          color: var(--disabled);
        }
      }
    }
  }
}
</style>
