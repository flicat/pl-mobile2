<template>
  <div class="content">
    <div class="swipe-1">
      <pl-swipe @scroll="onScroll1" :auto="2000" loop>
        <div>
          <pl-swipe-item class="pl-swipe-item">1</pl-swipe-item>
          <pl-swipe-item class="pl-swipe-item">2</pl-swipe-item>
          <pl-swipe-item class="pl-swipe-item">3</pl-swipe-item>
          <pl-swipe-item class="pl-swipe-item">4</pl-swipe-item>
        </div>
      </pl-swipe>
      <p>{{scrollIndex1 + 1}} / 4</p>
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
    const { $loadingShow, $loadingHide, $toast } = app.appContext.config.globalProperties

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
        $loadingShow('提交中。。。')
        setTimeout(() => {
          resolve()
          $loadingHide()
          $toast('提交成功')
        }, 2000)
      })
    }
    const cancel = () => {
      return new Promise((resolve, reject) => {
        $loadingShow('取消中。。。')
        setTimeout(() => {
          reject('取消失败')
          $loadingHide()
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
.pl-swipe-item {
  width: 100%;
  height: 12rem;
  text-align: center;
  font-size: 56px;
  line-height: 12rem;

  &:nth-child(1) {
    background-color: #f56c6c;
  }
  &:nth-child(2) {
    background-color: #f5d770;
  }
  &:nth-child(3) {
    background-color: #68f565;
  }
  &:nth-child(4) {
    background-color: #9b6ff5;
  }
}
p {
  text-align: center;
}
</style>
