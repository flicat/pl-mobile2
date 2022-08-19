<template>
  <div class="pl-swipe">
    <div class="pl-swipe-wrap" ref="scrollWrap">
      <div ref="scrollList" :class="{'pl-swipe-list':true, 'vertical':props.vertical, 'no-trans':noTransition}" @touchstart="touchHandler" @touchmove="touchHandler" @touchend="touchHandler" @touchcancel="touchHandler">
        <swipeItem></swipeItem>
      </div>
    </div>
    <div class="pl-indicators" v-if="props.indicators">
      <slot name="indicators" :index="currentIndex">
        <svg viewBox="0 0 100 100" class="indicator-item" v-for="i in children.length" :key="i" :style="{width: indicatorSize, height: indicatorSize}">
          <circle cx="50" cy="50" r="50" :style="{fill: currentIndex === i - 1 || (i === 1 && currentIndex === children.length) || (i === children.length && currentIndex === -1) ? indicatorActiveColor : indicatorColor}"></circle>
        </svg>
      </slot>
    </div>
  </div>
</template>

<script name="plSwipe" setup>
import { defineComponent, reactive, provide, ref, useSlots, onMounted, computed, onUnmounted, nextTick, watch, watchEffect } from 'vue'
// swipe
const props = defineProps({
  auto: Number,       // 自动轮播间隔，单位为 ms
  pageSize: {         // 每页展示的轮播图数量
    type: Number,
    default: 1
  },
  scrollSize: {         // 每页滚动的轮播图数量
    type: Number,
    default: 1
  },
  duration: {         // 动画时长，单位为 ms
    type: Number,
    default: 300
  },
  index: {              // 初始位置索引值
    type: Number,
    default: 0
  },
  loop: Boolean,        // 是否开启循环播放
  indicators: {         // 是否显示指示器
    type: Boolean,
    default: true
  },
  indicatorColor: {      // 指示器颜色
    type: String,
    default: '#fff'
  },
  indicatorActiveColor: {  // 指示器激活颜色
    type: String,
    default: '#5074FF'
  },
  indicatorSize: {        // 指示器大小
    type: String,
    default: '0.5em'
  },
  vertical: Boolean,        // 是否为纵向滚动
  reverse: Boolean,        // 是否反向滚动
  touchable: {              // 是否可以通过手势滑动
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['scroll'])

// slot 列表
const slots = useSlots()
// 子节点列表
const children = reactive([])

// 查找子节点DOM
const findSwipeItem = (children, nodeArr = []) => {
  children.forEach(item => {
    if (item.type && item.type.name === 'plSwipeItem') {
      nodeArr.push(item)
    } else if (Array.isArray(item.children) && item.children.length) {
      findSwipeItem(item.children, nodeArr)
    }
  })
  return nodeArr
}

// 子节点DOM
const swipeItem = defineComponent({
  render() {
    return findSwipeItem(slots.default())
  }
})

// 更新内容节点
const updateItems = child => {
  if (child && !children.includes(child)) {
    children[child.index] = child
    child.setTransform(child.index, props.vertical)
  }
}
provide('updateItems', updateItems)

// 滚动的视窗
const scrollWrap = ref(null)
// 滚动的视窗大小
const scrollView = reactive({
  width: 0,
  height: 0
})
onMounted(() => {
  scrollView.width = scrollWrap.value.clientWidth
  scrollView.height = scrollWrap.value.clientHeight
})

// 子节点宽度
const scrollItemSize = computed(() => {
  let size = (props.vertical ? scrollView.height : scrollView.width) / props.pageSize
  if (size < 10) {
    size = 10
  }
  return size
})

// 总页数
const pageTotal = computed(() => Math.ceil(children.length / props.pageSize))
// 当前滚动的节点index
const currentIndex = ref(/^\d+$/.test(props.index) ? Number(props.index) : 0)
// 列表滚动距离
const transformSize = computed(() => currentIndex.value * scrollItemSize.value * -1)

// 取消过渡效果
const noTransition = ref(false)

const minIndex = computed(() => props.loop && pageTotal.value > 2 ? -props.scrollSize : 0)
const maxIndex = computed(() => props.loop && pageTotal.value > 2 ? children.length : children.length - props.pageSize)

// 滚动方法
const scrollTo = diff => {
  if (noTransition.value) {
    noTransition.value = false
  }
  currentIndex.value += props.scrollSize * diff

  if (props.loop && pageTotal.value > 2) {
    // 无限循环滚动
    if (currentIndex.value < minIndex.value) {
      currentIndex.value = minIndex.value
    }
    if (currentIndex.value > maxIndex.value) {
      currentIndex.value = maxIndex.value
    }
    emit('scroll', currentIndex.value < 0 ? children.length + currentIndex.value : currentIndex.value >= children.length ? currentIndex.value - children.length : currentIndex.value)
  } else {
    if (currentIndex.value < minIndex.value && currentIndex.value > -props.scrollSize) {
      currentIndex.value = 0
    } else if (currentIndex.value <= -props.scrollSize) {
      currentIndex.value = maxIndex.value
    }

    if (currentIndex.value > maxIndex.value && currentIndex.value < maxIndex.value + props.scrollSize) {
      currentIndex.value = maxIndex.value
    } else if (currentIndex.value >= maxIndex.value + props.scrollSize) {
      currentIndex.value = 0
    }
    emit('scroll', currentIndex.value)
  }

}

// 设置上一页拼接
const setPrevChildren = flag => {
  children.slice(-props.pageSize).map((child, i) => {
    child.setTransform(flag ? i - props.pageSize : child.index, props.vertical)
  })
}

// 设置下一页拼接
const setNextChildren = flag => {
  children.slice(0, props.pageSize).map((child, i) => {
    child.setTransform(flag ? i + children.length : child.index, props.vertical)
  })
}

onMounted(() => {
  if (props.loop && pageTotal.value > 2) {
    // 无限滚动位置计算
    watchEffect(() => {
      if (currentIndex.value === maxIndex.value) {
        setTimeout(() => {
          currentIndex.value = 0
          noTransition.value = true
        }, props.duration)
      }
      if (currentIndex.value === minIndex.value) {
        setTimeout(() => {
          currentIndex.value = maxIndex.value - props.scrollSize
          noTransition.value = true
        }, props.duration)
      }
      setNextChildren(currentIndex.value >= children.length - props.pageSize)
      setPrevChildren(currentIndex.value <= 0)
    })
  }
})

// 定时轮播计时器
let loopTimer
// 开始轮播
const autoScroll = () => {
  if (props.auto && props.auto > 0 && pageTotal.value > 1) {
    loopTimer = setInterval(() => {
      scrollTo(props.reverse ? -1 : 1)
    }, props.auto)
  }
}
// 停止轮播
const stopAutoScroll = () => {
  clearInterval(loopTimer)
}

onMounted(autoScroll)
onUnmounted(stopAutoScroll)

// 滚动列表
const scrollList = ref(null)
let transStart = 0
let transEnd = 0
let transDiff = 0
// 触摸滚动事件
const touchHandler = e => {
  if (!props.touchable) {
    return false
  }
  e.preventDefault()
  e.stopPropagation()

  switch (e.type) {
    case 'touchstart':
      transDiff = -transformSize.value
      transStart = props.vertical ? e.touches[0].clientY : e.touches[0].clientX
      noTransition.value = true
      stopAutoScroll()
      break;
    case 'touchmove':
      transEnd = props.vertical ? e.touches[0].clientY : e.touches[0].clientX
      scrollList.value.style.transform = scrollList.value.style.webkitTransform = `translate${props.vertical ? 'Y' : 'X'}(${-(transDiff + transStart - transEnd)}px)`
      break;
    case 'touchend':
    case 'touchcancel':
      noTransition.value = false
      scrollList.value.style.transform = scrollList.value.style.webkitTransform = ''
      scrollTo(transStart - transEnd > 0 ? 1 : -1)
      autoScroll()
      break;
  }
}
</script>

<style lang="less">
.pl-swipe {
  position: relative;

  * {
    box-sizing: border-box;
  }

  .pl-swipe-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;

    .pl-swipe-list {
      --size: calc(v-bind(transformSize) * 1px);
      --duration: calc(v-bind(props.duration) * 1ms);
      position: relative;
      width: calc(v-bind(scrollItemSize) * 1px);
      height: 100%;
      will-change: transform, -webkit-transform;
      transform: translateX(var(--size));
      transition: transform ease var(--duration);

      &.vertical {
        flex-direction: column;
        width: 100%;
        height: calc(v-bind(scrollItemSize) * 1px);
        transform: translateY(var(--size));
      }

      &.no-trans {
        transition: none;
      }
    }
  }

  .pl-indicators {
    position: absolute;
    left: 0;
    bottom: 0.6em;
    display: flex;
    width: 100%;
    text-align: center;
    justify-content: center;

    .indicator-item {
      display: block;
      margin: 0 3px;
    }
  }
}
</style>
