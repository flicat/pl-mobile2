<template>
  <div class="pl-swipe">
    <div class="pl-swipe-wrap">
      <div class="pl-swipe-list" ref="list" :style="listStyle" @touchstart="handlerTouchStart($event)" @touchmove="handlerTouchMove($event)" @touchend="handlerTouchEnd($event)" @touchcancel="handlerTouchEnd($event)">
        <slot></slot>
      </div>
    </div>
    <div class="pl-indicators" v-if="indicators">
      <svg viewBox="0 0 100 100" class="indicator-item" v-for="i in children.length" :key="i" :style="{width: indicatorSize, height: indicatorSize}">
        <circle cx="50" cy="50" r="50" :style="{fill: currentIndex === i - 1 || (i === 1 && currentIndex === children.length) || (i === children.length && currentIndex === -1) ? indicatorActiveColor : indicatorColor}"></circle>
      </svg>
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed, onMounted, onUnmounted, provide, watch } from 'vue'
// swipe
export default {
  name: 'plSwipe',
  componentName: 'plSwipe',
  // provide() {
  //   return {
  //     swipes: this
  //   }
  // },
  props: {
    auto: Number,       // 自动轮播间隔，单位为 ms
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
    touchable: {              // 是否可以通过手势滑动
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    let autoTimer = null        // 自动播放
    let translate = 0
    let transStart = 0
    let transEnd = 0
    let transDiff = 0

    const scrollList = ref(null)             // 滚动的dom节点
    const currentIndex = ref(props.index === undefined ? null : props.index)  // 当前滚动的index
    const children = reactive([])                 // 子节点列表

    const listStyle = computed(() => {
      return {
        transition: `all ${props.duration}ms ease`,
        webkitTransition: `all ${props.duration}ms ease`
      }
    })
    // 三个子节点才能开启无限轮播
    const canLoop = computed(() => {
      return props.loop && children.length > 2
    })

    // 轮播图的实际尺寸 px
    const itemSize = () => {
      if (scrollList && scrollList.value) {
        return props.vertical ? scrollList.value.clientHeight : scrollList.value.clientWidth
      } else {
        return 0
      }
    }
    // 更新内容节点
    const updateItems = (child) => {
      if (child && !children.includes(child)) {
        children.push(child)
      }
    }
    // 滚动方法
    const scrollTo = (animate) => {
      let list = scrollList.value
      list.style.transitionDuration = list.style.webkitTransitionDuration = animate ? `${props.duration}ms` : `0ms`
      list.style.transform = list.style.webkitTransform = `translate${props.vertical ? 'Y' : 'X'}(${-translate}px)`
    }
    // 自动滚动方法
    const autoScroll = () => {
      let max = canLoop.value ? children.length : children.length - 1
      currentIndex.value++
      if (currentIndex.value > max) {
        currentIndex.value = 0
      }
      if (canLoop.value && currentIndex.value === max) {
        moveToHead()
      }
      translate = currentIndex.value * itemSize()
      scrollTo(true)
    }
    // 开始定时滚动
    const startAutoScroll = () => {
      if (autoTimer) {
        clearInterval(autoTimer)
      }
      if (props.auto && props.auto > 0 && children.length > 1) {
        autoTimer = setInterval(() => {
          autoScroll()
        }, props.auto)
      }
    }
    // 停止定时滚动
    const stopAutoScroll = () => {
      if (autoTimer) {
        clearInterval(autoTimer)
      }
    }
    // 触摸事件
    const handlerTouchStart = (e) => {
      if (!props.touchable) {
        return false
      }

      transDiff = translate
      transStart = props.vertical ? e.touches[0].clientY : e.touches[0].clientX
      scrollList.value.style.transitionDuration = scrollList.value.style.webkitTransitionDuration = `0ms`
      stopAutoScroll()
    }
    // 触摸事件
    const handlerTouchMove = (e) => {
      if (!props.touchable) {
        return false
      }
      e.preventDefault()
      e.stopPropagation()

      transEnd = props.vertical ? e.touches[0].clientY : e.touches[0].clientX
      translate = transDiff + transStart - transEnd
      scrollList.value.style.transform = scrollList.value.style.webkitTransform = `translate${props.vertical ? 'Y' : 'X'}(${-translate}px)`
    }
    // 触摸事件
    const handlerTouchEnd = (e) => {
      if (!props.touchable) {
        return false
      }
      e.preventDefault()
      e.stopPropagation()

      let min = canLoop.value ? -1 : 0
      let max = canLoop.value ? children.length : children.length - 1

      // 左划减1右划加1
      currentIndex.value += transStart - transEnd > 0 ? 1 : -1

      if (currentIndex.value <= min) {
        currentIndex.value = min
        if (canLoop.value) {
          moveToEnd()
        }
      }
      if (currentIndex.value >= max) {
        currentIndex.value = max
        if (canLoop.value) {
          moveToHead()
        }
      }
      translate = currentIndex.value * itemSize()

      scrollTo(true)
      startAutoScroll()
    }
    // 将队头调至队尾
    const setFirstChild = (act) => {
      if (act) {
        children[0].setTranslate(children.length * itemSize())
      } else {
        children[0].setTranslate(0)
      }
    }
    // 将队尾调至队头
    const setLastChild = (act) => {
      if (act) {
        children[children.length - 1].setTranslate(-children.length * itemSize())
      } else {
        children[children.length - 1].setTranslate(0)
      }
    }
    // 队头无缝衔接至队尾
    const moveToEnd = () => {
      setTimeout(() => {
        currentIndex.value = children.length - 1
        translate = currentIndex.value * itemSize()
        scrollTo()
      }, props.duration)
    }

    watch(currentIndex, (val) => {
      if (canLoop.value) {
        setFirstChild(val >= children.length - 1)
        setLastChild(val <= 0)
      }
      if (val > children.length - 1) {
        val = children.length - 1
      }
      if (val < 0) {
        val = 0
      }
      context.emit('scroll', val)
    })

    // 队尾无缝衔接至队头
    const moveToHead = () => {
      setTimeout(() => {
        currentIndex.value = 0
        translate = currentIndex.value * itemSize()
        scrollTo()
      }, props.duration)
    }

    onMounted(() => {
      translate = currentIndex.value * itemSize()
      scrollTo()
      startAutoScroll()
    })

    onUnmounted(() => {
      if (autoTimer) {
        clearInterval(autoTimer)
      }
    })

    provide('vertical', props.vertical)
    provide('updateItems', updateItems)
    provide('children', children)

    return {
      list: scrollList,
      listStyle,
      handlerTouchStart,
      handlerTouchMove,
      handlerTouchEnd,
      children,
      currentIndex
    }
  }
}
</script>

<style lang="less">
.pl-swipe {
  overflow: hidden;
  box-sizing: content-box;
  position: relative;

  * {
    box-sizing: border-box;
  }

  .pl-swipe-wrap {
    overflow: hidden;

    .pl-swipe-list {
      position: relative;
      will-change: transform, -webkit-transform;
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
