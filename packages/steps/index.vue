<template>
  <div class="pl-steps" :class="['pl-steps--' + direction]">
    <div class="pl-steps-items" :class="{'pl-steps-fold': showFold && isFold}">
      <slot></slot>
    </div>
    <div class="pl-steps-toggle" v-if="showFold && direction === 'vertical' && items.length > 1" @click="toggle">
      <span v-if="isFold">
        <iconMoreDown class="pl-steps-icon"></iconMoreDown>展开
      </span>
      <span v-else>
        <iconMoreUp class="pl-steps-icon"></iconMoreUp>收起
      </span>
    </div>
  </div>
</template>

<script>
import { provide, ref, reactive, onMounted, watch } from 'vue'
import iconMoreDown from '../../src/assets/images/icon-more-down.svg'
import iconMoreUp from '../../src/assets/images/icon-more-up.svg'
// TODO icon图标跟随字体颜色
// steps
export default {
  name: 'plSteps',
  componentName: 'plSteps',
  components: {
    iconMoreDown,
    iconMoreUp
  },
  props: {
    active: {              //  当前步骤 0
      type: Number,
      default: 0
    },
    activeColor: {              //  当前激活的颜色
      type: String,
      default: '#67c23a'
    },
    direction: {               // 显示方向，可选值为 vertical horizontal
      type: String,
      default: 'vertical'
    },
    showFold: {          // 是否展示折叠按钮
      type: Boolean,
      default: false
    },
    fold: {                // 是否默认折叠
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const currentItem = ref(props.active === undefined ? 0 : props.active)        // 当前激活标签
    provide('active', currentItem)

    const isFold = ref(props.fold === undefined ? true : props.fold)              // 是否折叠
    const items = reactive([])                                                        // 内容节点列表
    provide('items', items)

    const direction = ref(props.direction)
    provide('direction', direction)

    const activeColor = ref(props.activeColor)
    provide('activeColor', activeColor)

    const setCurrentItem = (value) => {
      if (currentItem.value === value) {
        return false
      }
      currentItem.value = value;
    }
    // 更新内容节点
    const updateItems = (child) => {
      if (child && !items.includes(child)) {
        items.push(child)
      }
    }
    provide('updateItems', updateItems)

    // 删除内容节点
    const removeItem = (item) => {
      const index = items.indexOf(item);
      if (index > -1) {
        items.splice(index, 1);
      }
    }
    provide('removeItem', removeItem)

    // 展开/收起
    const toggle = () => {
      isFold.value = !isFold.value
    }

    watch(() => props.active, (val) => {
      setCurrentItem(val)
    })
    watch(() => props.fold, (val) => {
      isFold.value = val
    })

    onMounted(() => {
      updateItems()
    })

    return {
      direction,
      isFold,
      items,
      toggle
    }
  }
}
</script>

<style lang="less">
@import "../../src/assets/less/mixin.less";
.pl-steps {
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
  padding: 0 1.2rem;

  * {
    box-sizing: border-box;
  }

  .pl-steps-items {
    display: flex;
  }
  .pl-steps-toggle {
    width: 100%;
    text-align: center;
    .font-size(10);
    color: var(--steps-toggle-text);
    padding: 1em 0;

    .pl-steps-icon {
      vertical-align: text-bottom;
      margin-right: 0.2em;
      color: #c2c5ce;
    }
  }

  &--horizontal {
    .pl-steps-items {
      flex-direction: row;
    }
  }
  &--vertical {
    .pl-steps-items {
      flex-direction: column;
    }
    .pl-steps-fold {
      .pl-step + .pl-step {
        display: none;
      }
    }
  }
}
</style>
