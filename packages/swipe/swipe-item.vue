<template>
  <div class="pl-swipe-item" ref="item" :style="itemStyle">
    <slot></slot>
  </div>
</template>

<script name="plSwipeItem" setup>
import { inject, onMounted, reactive, ref } from 'vue'

// 单节点样式
const itemStyle = reactive({
  transform: 'translate(0, 0)'
})
const setTransform = (index, vertical) => {
  itemStyle.transform = vertical ? `translateY(${index * 100}%)` : `translateX(${index * 100}%)`
}

const updateItems = inject('updateItems')
const item = ref(null)

onMounted(() => {
  const index = Array.from(item.value.parentNode.children).indexOf(item.value)
  updateItems({
    el: item.value,
    index,
    setTransform
  })
})
</script>

<style lang="less">
.pl-swipe-item {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
  will-change: transform, -webkit-transform;

  > * {
    box-sizing: border-box;
  }
}
</style>
