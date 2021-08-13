<template>
  <div class="pl-swipe-item" :style="{
          position: index === 0 ? '' : 'absolute',
          left: vertical ? 0 : index * 100 + '%',
          top: vertical ? index * 100 + '%' : 0,
          transform: `translate${vertical ? 'Y' : 'X'}(${translate}px)`,
          webkitTransform: `translate${vertical ? 'Y' : 'X'}(${translate}px)`
        }">
    <slot></slot>
  </div>
</template>

<script>
import { inject, ref, onMounted } from 'vue'
// swipe
export default {
  name: 'plSwipeItem',
  componentName: 'plSwipeItem',
  setup() {
    const vertical = inject('vertical')
    const updateItems = inject('updateItems')
    const children = inject('children')
    const index = ref(0)
    const translate = ref(0)

    const target = {
      setTranslate: val => {
        translate.value = val
      }
    }

    onMounted(() => {
      updateItems(target);
      index.value = children.indexOf(target)
    })

    return {
      vertical,
      index,
      translate
    }
  }
}
</script>

<style lang="less">
.pl-swipe-item {
  width: 100%;
  height: 100%;
  overflow: hidden;
  will-change: transform, -webkit-transform;

  > * {
    box-sizing: border-box;
  }
}
</style>
