<template>
  <div class="pl-list">
    <div class="pl-list-wrap" ref="listRef" @scroll.stop="handlerScroll($event)" @touchstart.stop="touchEvent($event)" @touchmove.stop="touchEvent($event)" @touchend.stop="touchEvent($event)" @touchcancel.stop="touchEvent($event)">
      <div class="pl-list-loading-top" v-show="translate < 0 && loading">
        <slot name="top-loading">
          <loading>{{loadingText}}</loading>
        </slot>
      </div>
      <div class="pl-list-refresh-tip" v-show="translate < 0 && !loading">
        <slot name="top-refresh">{{refreshText}}</slot>
      </div>
      <div class="pl-list-inner" :style="innerStyle" ref="innerRef">
        <list v-if="splitSize > 0" :splitSize="splitSize">
          <slot></slot>
        </list>
        <slot v-else></slot>
        <div class="pl-list-loading-bottom" v-show="(translate > 0 || (translate === 0 && loading)) && !finished">
          <slot name="bottom-loading">
            <loading>{{loadingText}}</loading>
          </slot>
        </div>
        <div class="pl-list-loading-finished" v-show="translate > 0 && finished">
          <slot name="bottom-finished">{{finishedText}}</slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref, watch, nextTick } from 'vue'
import loading from '../loading/index.vue'
import list from './list.vue'

export default {
  name: 'plList',
  componentName: 'plList',
  components: {
    loading,
    list
  },
  props: {
    // 是否处于加载状态，加载过程中不触发load事件
    loading: {
      type: Boolean,
      default: false
    },
    // 是否已加载完成，加载完成后不再触发load事件
    finished: {
      type: Boolean,
      default: false
    },
    // 是否滚动到底部自动加载，如果传入数字值则在距离该值的高度触发加载事件
    autoLoad: {
      type: [Boolean, Number],
      default: false
    },
    // 加载过程中的提示文案
    loadingText: {
      type: String,
      default: '加载中...'
    },
    // 下拉刷新的提示文案
    refreshText: {
      type: String,
      default: '松开刷新'
    },
    // 加载完成后的提示文案
    finishedText: {
      type: String,
      default: '加载完成'
    },
    splitSize: {    // 长列表分段显示数量
      type: Number,
      default: 0
    }
  },
  setup(props, context) {
    const listRef = ref(null)
    const innerRef = ref(null)

    const translate = ref(0)
    let transition = ref(null)
    let transDiff = 0
    let canDrag = true
    let scrollTop = 0
    let scrollBottom = 0

    const innerStyle = computed(() => {
      return {
        'transform': `translateY(${-translate.value}px)`,
        'webkitTransform': `translateY(${-translate.value}px)`,
        ...(transition.value ? {
          'transition': transition.value,
          'webkitTransition': transition.value
        } : null)
      }
    })

    // 触摸事件
    const touchEvent = (e) => {
      let diff = 0

      switch (e.type) {
        case 'touchstart':
          scrollTop = listRef.value.scrollTop
          scrollBottom = listRef.value.scrollHeight - scrollTop - listRef.value.clientHeight
          canDrag = (scrollTop < 2 || scrollBottom < 2) && !props.loading
          if (canDrag) {
            transDiff = e.touches[0].clientY
            transition.value = 'none'
          }
          break;
        case 'touchmove':
          if (canDrag) {
            diff = (transDiff - e.touches[0].clientY) / 2
            if ((scrollTop < 2 && diff < 0) || (scrollBottom < 2 && diff > 0)) {
              if (diff > 80) {
                diff = 80
              }
              if (diff < -80) {
                diff = -80
              }
              translate.value = diff
              e.preventDefault()
              e.stopPropagation()
            }
          }
          break;
        case 'touchend':
        case 'touchcancel':
          if (canDrag) {
            if (Math.abs(translate.value) >= 80 && !props.loading) {
              if (translate.value < 0 && scrollTop < 2) {
                context.emit('refresh')
              }
              if (translate.value > 0 && scrollBottom < 2 && !props.finished) {
                context.emit('load')
              }
            }
            nextTick(() => {
              if (!props.loading || props.finished) {
                translate.value = 0
              }
            })

            transition.value = null
          }
          break;
      }
    }
    // 滚动事件
    const handlerScroll = ({ target: { scrollTop, clientHeight, scrollHeight } }) => {
      if (props.autoLoad === false || props.finished || props.loading) {
        return false
      }
      if (scrollHeight - scrollTop - clientHeight <= Number(props.autoLoad)) {
        context.emit('load')
      }
    }

    watch(() => props.loading, val => {
      if (!val) {
        translate.value = 0

        if (!props.finished && !props.loading) {
          // 如果加载内容的高度不够则继续加载下一页
          nextTick(() => {
            if (listRef.value && innerRef.value && listRef.value.clientHeight > 0 && innerRef.value.scrollHeight < listRef.value.clientHeight) {
              context.emit('load')
            }
          })
        }
      }
    })

    return {
      listRef,
      handlerScroll,
      touchEvent,
      translate,
      innerStyle,
      innerRef
    }
  }
}
</script>

<style lang="less">
@import "../../src/assets/less/mixin.less";

.pl-list {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overscroll-behavior: contain; // 阻止滚动传播

  * {
    box-sizing: border-box;
  }

  &-wrap {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
  }
  &-inner {
    position: relative;
    z-index: 2;
    transition: all 0.3s ease;
  }

  &-loading-top,
  &-loading-bottom,
  &-loading-finished,
  &-refresh-tip {
    width: 100%;
    height: 80px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--list-refresh-tip);
    font-size: 14px;
    position: absolute;
    left: 0;

    :deep(.pl-icon) {
      margin-right: 0.5em;
    }
  }
  &-loading-bottom,
  &-loading-finished {
    top: 100%;
  }
  &-loading-top,
  &-refresh-tip {
    top: 0;
  }
}
</style>
