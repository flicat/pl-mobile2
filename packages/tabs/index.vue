<template>
  <div class="pl-tabs" :class="['is-' + type, 'is-' + position]" ref="tab">
    <div class="pl-tab-title" @touchstart="touchEvent($event)" @touchmove="touchEvent($event)" @touchend="touchEvent($event)" @touchcancel="touchEvent($event)">
      <div class="pl-tab-title-inner" ref="title" :style="titleStyle">
        <div class="tab-title" v-for="title in titleArray" :key="title.name" @click="setCurrentName(title.name, title.disabled)" :class="{'is-active': title.name === currentName, 'is-disabled': title.disabled}">
          <div class="tab-title-text">
            <span v-if="title.label">{{title.label}}</span>
            <component v-else :is="title.titleSlot"></component>
          </div>
        </div>
      </div>
    </div>
    <div class="pl-tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { computed, h, nextTick, provide, reactive, ref, watch } from 'vue'
// TODO 添加sub tab
// TODO 样式重调，元素大小修改为依赖外部样式控制
export default {
  name: 'plTabs',
  componentName: 'plTabs',
  props: {
    // 风格类型：card/border-card/button
    type: {
      type: String,
      default: 'card'
    },
    // 绑定值，选中选项卡的 name：第一个选项卡的 name
    value: {
      type: [String, Number],
      default: ''
    },
    // 选项卡所在位置：top/right/bottom/left
    position: {
      type: String,
      default: 'top'
    },
  },
  setup(props, context) {
    const tabNode = ref(null)
    const titleNode = ref(null)

    const children = reactive([])               // 内容节点列表
    const transition = ref(null)                // 标题滑动transition
    const translate = ref(0)                    // 标题偏移量

    // value
    const currentName = computed({
      get: () => {
        return props.value === undefined ? '' : props.value
      },
      set: val => {
        context.emit('update:value', val)
        context.emit('change', val);
      }
    })
    provide('currentName', currentName)

    // 标题滑动方向
    const swipeDir = computed(() => {
      return /^(top|bottom)$/.test(props.position) ? 'column' : 'row'
    })

    // tab宽
    const tabSize = computed(() => {
      if (tabNode.value && swipeDir.value === 'column') {
        return tabNode.value.clientWidth
      }
      return 0
    })
    // 标题宽
    const titleSize = computed(() => {
      if (titleNode.value && swipeDir.value === 'column') {
        return titleNode.value.scrollWidth
      }
      return 0
    })

    // 标题对象数组
    const titleArray = computed(() => {
      return children.map(item => {
        let index = Number(item.proxy.index)
        if (Number.isNaN(index)) {
          const el = item.proxy.$el
          index = Array.from(el.parentNode.children).indexOf(el)
        }
        return {
          index,
          name: item.proxy.name,
          label: item.proxy.label,
          titleSlot: {
            render() {
              return h(item.proxy.$slots.title)
            }
          },
          disabled: item.proxy.disabled
        }
      }).sort((a, b) => a.index - b.index)
    })

    // 当前标题index
    const currentIndex = computed(() => {
      return titleArray.value.findIndex(item => item.name === currentName.value)
    })

    // 将当前标题滚动至可见
    watch(currentIndex, index => {
      nextTick(() => {
        let currentTarget = titleNode.value.children[index]

        // 如果标题在可是区域外则滚动至可见
        if (swipeDir.value === 'column' && currentTarget && titleSize.value > tabSize.value) {
          let width = currentTarget.offsetWidth
          let offset = currentTarget.offsetLeft + (width / 2) - (tabSize.value / 2)
          if (offset < 0) {
            offset = 0
          }
          if (offset > titleSize.value - tabSize.value) {
            offset = titleSize.value - tabSize.value
          }

          translate.value = offset
        }
      })
    })

    // 标题动态样式
    const titleStyle = computed(() => {
      let transform = swipeDir.value === 'column' ? `translateX(${-translate.value}px)` : `none`

      return {
        transform,
        transition: transition.value
      }
    })

    // 更新value
    const setCurrentName = (value, disabled) => {
      if (disabled) {
        return false
      }
      if (currentName.value === value) {
        return false
      }
      currentName.value = value;
    }

    // 更新标题节点
    const updateItems = (item) => {
      if (children.indexOf(item) < 0) {
        children.push(item)
      }
    }
    provide('updateTabItems', updateItems)

    // 删除标题节点
    const removeItem = (item) => {
      const index = children.indexOf(item);
      if (index > -1) {
        children.splice(index, 1);
      }
    }
    provide('removeTabItem', removeItem)

    let transDiff = 0
    let transStart = 0
    // 标题触摸事件
    const touchEvent = (e) => {
      if (swipeDir.value === 'row' || tabSize.value >= titleSize.value) {
        return false
      }

      switch (e.type) {
        case 'touchstart':
          transDiff = translate.value

          transStart = e.touches[0].clientX
          transition.value = 'none'
          break;
        case 'touchmove':
          e.preventDefault()
          e.stopPropagation()
          translate.value = transDiff + transStart - e.touches[0].clientX
          break;
        case 'touchend':
        case 'touchcancel':
          transition.value = null
          if (translate.value < 0) {
            translate.value = 0
          } else if (translate.value + tabSize.value > titleSize.value) {
            translate.value = titleSize.value - tabSize.value
          }
          break;
      }
    }

    return {
      tab: tabNode,
      title: titleNode,
      touchEvent,
      titleStyle,
      titleArray,
      setCurrentName,
      currentName
    }
  }
}
</script>

<style lang="less">
.pl-tabs {
  display: grid;
  width: 100%;

  * {
    box-sizing: border-box;
  }

  .pl-tab-title {
    grid-area: title;
    overflow: hidden;
    background-color: var(--input-bg);
  }
  .pl-tab-title-inner {
    display: grid;
    transition: all 0.3s ease;

    .tab-title {
      display: flex;
      color: var(--primary-text);
      .tab-title-text {
        display: inline-block;
        position: relative;
        padding: 0.6em 1em;
        white-space: nowrap;
        line-height: normal;
        &::after {
          content: "";
          display: inline-block;
          position: absolute;
          transition: all 0.3s ease;
          background-color: var(--primary);
        }
      }
    }
  }
  .pl-tab-content {
    grid-area: content;
  }

  &.is-top,
  &.is-bottom {
    .pl-tab-title-inner {
      grid-auto-flow: column;
    }
    .tab-title-text {
      margin: 0 auto;
      height: 100%;
    }
    &.is-card {
      .tab-title-text::after {
        left: 100%;
        width: 0;
        height: 3px;
      }
      .is-active {
        .tab-title-text::after {
          left: 0;
          width: 100%;
        }
      }
      .is-active ~ .tab-title {
        .tab-title-text::after {
          left: 0;
        }
      }
    }
  }
  &.is-right,
  &.is-left {
    .pl-tab-title-inner {
      grid-auto-flow: row;
    }
    .tab-title-text {
      margin: auto 0;
      width: 100%;
    }
    &.is-card {
      .tab-title-text::after {
        top: 100%;
        width: 3px;
        height: 0;
      }
      .is-active {
        .tab-title-text::after {
          top: 0;
          height: 100%;
        }
      }
      .is-active ~ .tab-title {
        .tab-title-text::after {
          top: 0;
        }
      }
    }
  }
}

.is-card {
  .pl-tab-title-inner {
    position: relative;

    .tab-title-text {
      padding: 1em 1.2em;
    }
    .is-active {
      color: var(--default-text);
      font-weight: 700;
    }
    .is-disabled {
      color: var(--primary-text);
    }
  }
}

.is-border-card {
  .tab-title {
    border: 1px solid var(--tab-card-border);
    background-color: var(--tab-card-disabled-bg);
    &.is-disabled {
      background-color: var(--tab-card-disabled-bg);
    }
    &.is-active {
      background-color: transparent;
    }
  }
  .pl-tab-content {
    border: 1px solid var(--tab-card-border);
  }
  &.is-top {
    .tab-title {
      & + .tab-title {
        border-left: 0 none;
      }
      &.is-active {
        border-bottom: 0 none;
      }
    }
    .pl-tab-content {
      border-top: 0 none;
    }
  }
  &.is-bottom {
    .tab-title {
      & + .tab-title {
        border-left: 0 none;
      }
      &.is-active {
        border-top: 0 none;
      }
    }
    .pl-tab-content {
      border-bottom: 0 none;
    }
  }
  &.is-left {
    .tab-title {
      & + .tab-title {
        border-top: 0 none;
      }
      &.is-active {
        border-right: 0 none;
      }
    }
    .pl-tab-content {
      border-left: 0 none;
    }
  }
  &.is-right {
    .tab-title {
      & + .tab-title {
        border-top: 0 none;
      }
      &.is-active {
        border-left: 0 none;
      }
    }
    .pl-tab-content {
      border-right: 0 none;
    }
  }
}

.is-button {
  .pl-tab-title-inner {
    .tab-title {
      border: 1px solid var(--primary);
      color: var(--primary);

      &.is-active {
        background-color: var(--primary);
        color: var(--tab-button-active-text);
      }
      &.is-disabled {
        background-color: var(--disabled);
        border-color: var(--disabled);
      }
    }
  }

  &.is-top,
  &.is-bottom {
    .tab-title {
      &:first-child {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      &:last-child {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      & ~ .tab-title {
        border-left: 0 none;
      }
    }
  }
  &.is-right,
  &.is-left {
    .tab-title {
      &:first-child {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }
      &:last-child {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      & ~ .tab-title {
        border-top: 0 none;
      }
    }
  }
}

.is-top {
  grid-template-rows: auto 1fr;
  grid-template-areas: "title" "content";

  &.is-card {
    .pl-tab-title {
      border-bottom: 1px solid var(--tab-border);
    }
    .tab-title-text::after {
      bottom: 0;
    }
  }
}

.is-bottom {
  grid-template-rows: 1fr auto;
  grid-template-areas: "content" "title";

  &.is-card {
    .pl-tab-title {
      border-top: 1px solid var(--tab-border);
    }
    .tab-title-text::after {
      top: 0;
    }
  }
}

.is-left {
  grid-template-columns: auto 1fr;
  grid-template-areas: "title content";

  &.is-card {
    .pl-tab-title {
      border-right: 1px solid var(--tab-border);
    }
    .tab-title-text::after {
      right: 0;
    }
  }
}

.is-right {
  grid-template-columns: 1fr auto;
  grid-template-areas: "content title";

  &.is-card {
    .pl-tab-title {
      border-left: 1px solid var(--tab-border);
    }
    .tab-title-text::after {
      left: 0;
    }
  }
}
</style>
