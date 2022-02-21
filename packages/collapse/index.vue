<template>
  <div class="pl-collapse" v-bind="$attrs">
    <div class="pl-collapse-top" @click="toggle">
      <div class="pl-collapse-title">
        <slot name="title">{{title}}</slot>
      </div>
      <div v-if="!disabled" :class="['icon-arrow', currentValue ? 'show' : 'hide']">
        <slot name="icon">
          <iconEnter></iconEnter>
        </slot>
      </div>
    </div>
    <div class="pl-collapse-content" v-show="visible">
      <div :class="['pl-collapse-inner', currentValue ? 'show' : 'hide']">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
import iconEnter from '../../src/assets/images/icon-enter.svg'

// 效果优化，样式调整
export default {
  name: 'plCollapse',
  componentName: 'plCollapse',
  components: {
    iconEnter
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: Boolean,        // 禁用
    title: String            // 标题
  },
  setup(props, context) {
    const visible = ref(!!props.value)
    const currentValue = computed({
      get: () => {
        return !!props.value
      },
      set: val => {
        context.emit('update:value', val)
        context.emit('change', val)
      }
    })

    const toggle = () => {
      if (!props.disabled) {
        currentValue.value = !currentValue.value
      }
    }

    watch(currentValue, val => {
      setTimeout(() => {
        visible.value = val
      }, !val ? 150 : 0)
    })

    return {
      currentValue,
      visible,
      toggle
    }
  }
}
</script>

<style lang="less">
@keyframes show {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes hide {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
}

.pl-collapse {
  * {
    box-sizing: border-box;
  }
  &-top {
    display: flex;
    padding: 1em 1.2em;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    outline: 0 none;
    .icon-arrow {
      display: inline-block;
      color: #ccc;
      transition: all 150ms ease;
      transform-origin: 50% 50%;
      line-height: 0;
      &.show {
        transform: rotate(90deg);
      }
      &.hide {
        transform: rotate(0);
      }
    }
  }
  &-content {
    overflow: hidden;
  }
  &-inner {
    padding: 0 1.2em;
    &.show {
      animation: show 150ms linear forwards;
    }
    &.hide {
      animation: hide 150ms linear forwards;
    }
  }
}
</style>
