<template>
  <teleport to='body'>
    <div v-bind="$attrs" class="pl-to-top" v-if="scrollTop > offset" @click="scrollToTop">
      <iconUp class="icon-up"></iconUp>
    </div>
  </teleport>
</template>

<script>
import { ref, watch, onUnmounted } from 'vue'
import iconUp from '../../src/assets/images/icon-up.svg'
// TODO icon图标跟随字体颜色
export default {
  name: 'plGoTopButton',
  componentName: 'plGoTopButton',
  components: {
    iconUp
  },
  props: {
    target: [Node, Window],         // 滚动的对象
    offset: {                     // 偏移量，显示返回顶部按钮的位置
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const scrollTop = ref(0)

    const scrollToTop = () => {
      let target = props.target
      let top = scrollTop.value
      let step = top / 1000 * 60
      let animate = () => {
        top -= step
        if (top < 0) {
          top = 0
        } else {
          requestAnimationFrame(animate)
        }
        target.scrollTop = top
      }
      animate()
      scrollTop.value = 0
    }
    const scrollHandler = (e) => {
      scrollTop.value = e.target.scrollTop
    }

    watch(() => props.target, target => {
      if (target) {
        target.addEventListener('scroll', scrollHandler)
      }
    })

    onUnmounted(() => {
      props.target.removeEventListener('scroll', scrollHandler)
    })

    return {
      scrollToTop,
      scrollTop
    }
  }
}
</script>

<style lang="less">
@import "../../src/assets/less/mixin.less";

.pl-to-top {
  position: fixed;
  z-index: 99;
  .width(40);
  .height(40);
  .line-height(38);
  .right(22);
  .bottom(22);
  background: var(--input-bg);
  box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  .font-size(22);
  color: var(--to-top-text);
  display: flex;

  .icon-up {
    margin: auto;
  }
}
</style>
