<template>
  <div class="content">
    <h3>基础用法</h3>
    <p>
      <pl-button type="primary" @click="open(popupCenter)">居中弹出</pl-button>
    </p>
    <p>
      <pl-button type="primary" @click="open(popupLeft)">左边弹出</pl-button>
    </p>
    <p>
      <pl-button type="primary" @click="open(popupRight)">右边弹出</pl-button>
    </p>
    <p>
      <pl-button type="primary" @click="open(popupTop)">上面弹出</pl-button>
    </p>
    <p>
      <pl-button type="primary" @click="open(popupBottom)">下面弹出</pl-button>
    </p>

    <pl-popup position="center" ref="popupCenter">
      <div class="popup-inner center">这是一个弹框</div>
    </pl-popup>
    <pl-popup position="left" ref="popupLeft">
      <div class="popup-inner left">这是一个弹框</div>
    </pl-popup>
    <pl-popup position="right" ref="popupRight">
      <div class="popup-inner right">这是一个弹框</div>
    </pl-popup>
    <pl-popup position="top" ref="popupTop">
      <div class="popup-inner top">这是一个弹框</div>
    </pl-popup>
    <pl-popup position="bottom" ref="popupBottom">
      <div class="popup-inner bottom">这是一个弹框</div>
    </pl-popup>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  setup() {
    const popupCenter = ref(null)
    const popupLeft = ref(null)
    const popupRight = ref(null)
    const popupTop = ref(null)
    const popupBottom = ref(null)

    const open = target => {
      target.open()
    }

    return {
      popupCenter,
      popupLeft,
      popupRight,
      popupTop,
      popupBottom,
      open
    }
  }
}
</script>

<style lang="less" scoped>
.popup-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  &.center {
    width: 10em;
    height: 10em;
  }
  &.left,
  &.right {
    width: 70vw;
    height: 100%;
  }
  &.top,
  &.bottom {
    width: 100%;
    height: 50vh;
  }
}
</style>
