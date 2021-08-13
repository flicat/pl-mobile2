<template>
  <popup ref="popup" position="bottom" @close="cancel">
    <div class="pl-picker-content">
      <div class="pl-picker-top">
        <div class="pl-picker-btn--cancel" @click="cancel">取消</div>
        <div class="pl-picker-title">{{title}}</div>
        <div class="pl-picker-btn--submit" @click="submit">确认</div>
      </div>
      <div class="pl-picker-inner" ref="pickerInner">
        <div class="pl-picker-inner-col" v-for="(items, i) in computedOption" :key="i" @touchstart="handlerTouch($event, i)" @touchmove="handlerTouch($event, i)" @touchend="handlerTouch($event, i)" @touchcancel="handlerTouch($event, i)" :style="{width: 1 / computedOption.length * 100 + '%'}">
          <ul class="pl-picker-inner-row" :style="{transform: 'translateY(' + computedPosition[i] + 'px)', transition: transition}">
            <li class="pl-picker-inner-item" v-for="(item, j) in items" :key="j">{{getLabel(item)}}</li>
          </ul>
        </div>
      </div>
    </div>
  </popup>
</template>

<script>
import { computed, onMounted, reactive, ref } from 'vue'
import { is } from '../../src/assets/utils'
import popup from '../popup/index.vue'

export default {
  name: 'plPicker',
  componentName: 'plPicker',
  components: {
    popup
  },
  props: {
    title: String,        // 标题
    defaultValue: Array,  // 默认选中值
    options: {         // 下拉选项，回调式：[function() {}]，嵌套式：{children: [{children: []}]}
      type: [Array, Object],
      default() {
        return []
      }
    },
    prop: {         // 显示的标签和返回的值 {label, value, children}
      type: Object,
      default() {
        return {}
      }
    },
    submit: Function,       // 成功回调
    cancel: Function        // 取消回调
  },
  setup(props) {
    const popup = ref(null)
    const pickerInner = ref(null)
    const pickerHeight = ref(0)         // 子选项高度
    const currentValue = reactive(Object.assign([], props.defaultValue))   // 默认值
    const translate = reactive([])
    const transition = ref('')
    let transStart = 0
    let transEnd = 0

    // 将树结构转成数组结构
    const treeToArray = (target, arr = [], index = 0) => {
      let children = getChildren(target)
      if (children && children.length) {
        arr.push(children)
        let itemIndex = 0
        if (currentValue[index]) {
          itemIndex = children.findIndex(item => getValue(item) === currentValue[index])
          if (itemIndex < 0) {
            itemIndex = 0
          }
        }
        treeToArray(children[itemIndex], arr, index++)
      }
      return arr
    }

    // 计算后的选项列表
    const computedOption = computed(() => {
      if (is(props.options, 'object')) {
        return treeToArray(props.options)
      } else if (Array.isArray(props.options) && props.options.every(item => typeof item === 'function')) {
        return props.options.map((func, i) => {
          return func.apply(null, currentValue.slice(0, i + 1))
        })
      }
    })

    // 计算后的值index
    const computedIndex = computed(() => {
      return computedOption.value.map((options, i) => {
        let index = 0
        if (currentValue[i]) {
          index = options.findIndex(item => getValue(item) === currentValue[i])
          if (index < 0) {
            index = 0
          }
        }
        return index
      })
    })

    // 计算后的ul偏移量
    const computedPosition = computed(() => {
      return computedOption.value.map((options, i) => {
        return -((computedIndex.value[i] - 2) * pickerHeight.value) + Number(translate[i] || 0)
      })
    })

    const cancel = async () => {
      await popup.value.close()
      if (typeof props.cancel === 'function') {
        props.cancel()
      }
    }
    const submit = async () => {
      await popup.value.close()
      if (typeof props.submit === 'function') {
        props.submit(computedOption.value.map((options, i) => getValue(options[computedIndex.value[i]])))
      }
    }

    const handlerTouch = (e, index) => {
      switch (e.type) {
        case 'touchstart':
          transStart = e.touches[0].clientY
          transition.value = 'none'
          break;
        case 'touchmove':
          e.preventDefault()
          e.stopPropagation()

          // 当前滚动的位置具体数值
          transEnd = e.touches[0].clientY
          translate[index] = transEnd - transStart
          break;
        case 'touchend':
        case 'touchcancel':
          let itemIndex = computedIndex.value[index] - Math.round(translate[index] / pickerHeight.value)
          if (itemIndex < 0) {
            itemIndex = 0
          }
          if (itemIndex >= computedOption.value[index].length) {
            itemIndex = computedOption.value[index].length - 1
          }
          transition.value = ''
          currentValue[index] = getValue(computedOption.value[index][itemIndex])
          translate[index] = 0
          break;
      }
    }

    const getLabel = target => {
      return props.prop.label && is(target, 'object') ? target[props.prop.label] : target
    }
    const getValue = target => {
      return props.prop.value && is(target, 'object') ? target[props.prop.value] : target
    }
    const getChildren = target => {
      return props.prop.children && is(target, 'object') ? target[props.prop.children] : target
    }

    onMounted(() => {
      popup.value.open()
      pickerHeight.value = pickerInner.value.clientHeight / 5
    })

    return {
      pickerInner,
      pickerHeight,
      popup,
      computedOption,
      computedPosition,
      transition,
      handlerTouch,
      getLabel,
      cancel,
      submit
    }
  }
}
</script>

<style lang="less">
@import "../../src/assets/less/mixin.less";

.pl-picker {
  &-content {
    position: relative;
    z-index: 1;
    .font-size(16);
    color: var(--picker-text);
    background-color: var(--picker-bg);
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
    .height(200);
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow: hidden;

    &-col {
      flex: 1;
      height: 100%;
      text-align: center;
      position: relative;
      z-index: 1;

      &::before,
      &::after {
        content: "";
        position: absolute;
        left: 0;
        z-index: 3;
        display: block;
        width: 100%;
        .height(80);
      }
      &::before {
        background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0.9) 0%,
          rgba(255, 255, 255, 0.4) 100%
        );
        top: 0;
        border-bottom: 1px solid var(--picker-border);
      }
      &::after {
        background: linear-gradient(
          0deg,
          rgba(255, 255, 255, 0.9) 0%,
          rgba(255, 255, 255, 0.4) 100%
        );
        bottom: 0;
        border-top: 1px solid var(--picker-border);
      }
    }
    &-row {
      list-style: none;
      padding: 0;
      margin: 0;
      transition: all 0.3s ease;
      will-change: transform, -webkit-transform;
    }
    &-item {
      .height(40);
      .line-height(40);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
