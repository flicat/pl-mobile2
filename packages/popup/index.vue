<template>
  <teleport to='body'>
    <div class="pl-popup" :class="[isOpen ? 'pl-popup--open' : 'pl-popup--close', visible ? '' : 'pl-popup--hide', 'pl-popup--' + position]">
      <div class="pl-popup-content" @click.self="close">
        <slot></slot>
      </div>
      <div class="pl-popup-layer"></div>
    </div>
  </teleport>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'plPopup',
  componentName: 'plPopup',
  props: {
    position: {
      type: String,
      default: 'center' // top bottom right left center
    }
  },
  setup(props, { emit }) {
    const isOpen = ref(false)
    const visible = ref(false)

    // 手动打开弹框
    const open = () => {
      visible.value = true
      isOpen.value = true
      emit('open')
    }
    const close = async (e) => {
      await new Promise((resolve) => {
        isOpen.value = false
        setTimeout(() => {
          visible.value = false
          resolve()
          if (e && e.type === 'click') {
            emit('close')
          }
        }, 300)
      })
    }

    return {
      isOpen,
      visible,
      open,
      close
    }
  }
}
</script>

<style lang="less">
@import "../../src/assets/less/mixin.less";

.pl-popup {
  position: fixed;
  z-index: 99;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  &-content {
    position: relative;
    z-index: 1;
    .font-size(16);
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
    will-change: transform, -webkit-transform;
  }
  &-layer {
    transition: all 0.3s ease;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
  &--top {
    .pl-popup-content {
      justify-content: flex-end;
      align-items: center;
      transform: translate(0, -100%);
    }
  }
  &--bottom {
    .pl-popup-content {
      justify-content: flex-start;
      align-items: center;
      transform: translate(0, 100%);
    }
  }
  &--right {
    .pl-popup-content {
      justify-content: center;
      align-items: flex-end;
      transform: translate(100%, 0);
    }
  }
  &--left {
    .pl-popup-content {
      justify-content: center;
      align-items: flex-start;
      transform: translate(-100%, 0);
    }
  }
  &--center {
    .pl-popup-content {
      justify-content: center;
      align-items: center;
      transform: scale(0);
    }
  }
  &--open {
    .pl-popup-content {
      transform: none;
    }
    .pl-popup-layer {
      opacity: 1;
    }
  }

  &--close {
    .pl-popup-layer {
      opacity: 0;
    }
  }
  &--hide {
    transform: translate(-200%, 0);
    visibility: hidden;
  }
}
</style>
