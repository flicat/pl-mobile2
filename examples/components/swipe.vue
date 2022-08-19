<template>
  <div class="content">
    <div class="swipe-1">
      <pl-swipe @scroll="onScroll1" :auto="2000" :pageSize="3" :scrollSize="2" loop>
        <div>
          <pl-swipe-item class="pl-swipe-item">1</pl-swipe-item>
          <pl-swipe-item class="pl-swipe-item">2</pl-swipe-item>
          <pl-swipe-item class="pl-swipe-item">3</pl-swipe-item>
          <pl-swipe-item class="pl-swipe-item">4</pl-swipe-item>
          <pl-swipe-item class="pl-swipe-item">5</pl-swipe-item>
          <pl-swipe-item class="pl-swipe-item">6</pl-swipe-item>
          <pl-swipe-item class="pl-swipe-item">7</pl-swipe-item>
        </div>
        <template v-slot:indicators>
          <span :class="['indicators', scrollIndex1 + 1 === i ? 'active' : '']" v-for="i in 7" :key="i">{{scrollIndex1 + 1 === i ? '☺' : '☹'}}</span>
        </template>
      </pl-swipe>
      <p>{{scrollIndex1 + 1}} / 7</p>
    </div>
    <div class="swipe-2" v-if="!isMsg">
      <pl-swipe @scroll="onScroll2" :auto="2000" vertical>
        <div>
          <pl-swipe-item class="pl-swipe-item">1</pl-swipe-item>
          <pl-swipe-item class="pl-swipe-item">2</pl-swipe-item>
          <pl-swipe-item class="pl-swipe-item">3</pl-swipe-item>
          <pl-swipe-item class="pl-swipe-item">4</pl-swipe-item>
        </div>
      </pl-swipe>
      <p>{{scrollIndex2 + 1}} / 4</p>
    </div>
  </div>
</template>

<script>
import { ref, getCurrentInstance } from 'vue'
export default {
  props: {
    isMsg: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const app = getCurrentInstance()
    const { $loading, $toast } = app.appContext.config.globalProperties

    const scrollIndex1 = ref(0)
    const scrollIndex2 = ref(0)

    const onScroll1 = index => {
      scrollIndex1.value = index
    }
    const onScroll2 = index => {
      scrollIndex2.value = index
    }
    const submit = () => {
      return new Promise((resolve, reject) => {
        const loading = $loading('提交中。。。')
        setTimeout(() => {
          resolve()
          loading.close()
          $toast('提交成功')
        }, 2000)
      })
    }
    const cancel = () => {
      return new Promise((resolve, reject) => {
        const loading = $loading('取消中。。。')
        setTimeout(() => {
          reject('取消失败')
          loading.close()
          $toast('取消失败')
        }, 2000)
      })
    }

    return {
      scrollIndex1,
      scrollIndex2,
      onScroll1,
      onScroll2,
      submit,
      cancel
    }
  }
}
</script>

<style lang="less" scoped>
.pl-swipe {
  width: 100%;
  height: 14rem;

  .pl-swipe-item {
    text-align: center;
    font-size: 4rem;
    line-height: 12rem;
    &:nth-child(1n) {
      background-color: #f56c6c;
    }
    &:nth-child(2n) {
      background-color: #f5d770;
    }
    &:nth-child(3n) {
      background-color: #68f565;
    }
    &:nth-child(4n) {
      background-color: #9b6ff5;
    }
  }
  .indicators {
    color: #fff;
    font-size: 1rem;
    margin: 0 0.2rem;
    text-shadow: 1px 1px 2px #000;
    &.active {
      color: #f3f038;
    }
  }
}
p {
  text-align: center;
}
</style>
