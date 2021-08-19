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

    <pl-popup position="center" ref="popupCenter" class="popup-center" @close="onClose">
      <div class="popup-inner center">这是一个弹框</div>
    </pl-popup>
    <pl-popup position="left" ref="popupLeft" class="popup-left" @close="onClose">
      <div class="popup-inner left">这是一个弹框</div>
    </pl-popup>
    <pl-popup position="right" ref="popupRight" class="popup-right" @close="onClose">
      <div class="popup-inner right">这是一个弹框</div>
    </pl-popup>
    <pl-popup position="top" ref="popupTop" class="popup-top" @close="onClose">
      <div class="popup-inner top">这是一个弹框</div>
    </pl-popup>
    <pl-popup position="bottom" ref="popupBottom" class="popup-bottom" @close="onClose">
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

    const onClose = e => {
      console.log('onClose:', e)
    }
    return {
      popupCenter,
      popupLeft,
      popupRight,
      popupTop,
      popupBottom,
      open,
      onClose
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
    width: 50%;
    height: 30%;
  }
  &.left,
  &.right {
    width: 70%;
    height: 100%;
  }
  &.top,
  &.bottom {
    width: 100%;
    height: 50%;
  }
}
</style>
