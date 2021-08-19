<template>
  <teleport to="body">
    <div class="float-menu" :style="{transform: 'translate(' + iconStyle[0] + 'px,' + iconStyle[1] + 'px' + ')'}" @click="showMenu" @touchstart="touchHander" @touchmove="touchHander" @touchend="touchHander" @touchcancel="touchHander">
      <pl-icon name="icon-yanjing" fill="#666"></pl-icon>
    </div>
    <pl-popup position="center" ref="popupCenter" class="popup">
      <div class="popup-content">
        <div class="link" v-for="link in list" :key="link.path">
          <pl-icon name="icon-roundright"></pl-icon>
          <span @click="goPage(link.path)">{{link.meta.title}}</span>
        </div>
      </div>
    </pl-popup>
  </teleport>
</template>

<script>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router'
export default {
  props: {
    list: Array
  },
  setup() {
    const iconStyle = reactive([Number(window.localStorage.menuPositionX) || 0, Number(window.localStorage.menuPositionY) || 0])
    const popupCenter = ref(null)

    const showMenu = () => {
      popupCenter.value.open()
    }

    const router = useRouter()
    const goPage = path => {
      router.push({ path })
      popupCenter.value.close()
    }

    let startX = 0
    let startY = 0
    const touchHander = e => {
      switch (e.type) {
        case 'touchstart':
          startX = e.touches[0].clientX - iconStyle[0]
          startY = e.touches[0].clientY - iconStyle[1]
          break;
        case 'touchmove':
          e.preventDefault()
          e.stopPropagation()
          iconStyle[0] = e.touches[0].clientX - startX
          iconStyle[1] = e.touches[0].clientY - startY
          break;
        case 'touchend':
        case 'touchcancel':
          window.localStorage.menuPositionX = iconStyle[0]
          window.localStorage.menuPositionY = iconStyle[1]
          break;
      }
    }

    return {
      iconStyle,
      popupCenter,
      showMenu,
      goPage,
      touchHander
    }
  }
}
</script>

<style lang="less" scoped>
.float-menu {
  position: fixed;
  right: 30px;
  top: 30px;
  z-index: 999;
  font-size: 1.5rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  background: #fff;
  box-shadow: 0 0 12px inset #aaa;
  .pl-icon {
    margin: auto;
  }
}
.popup {
  width: 100vw;
  height: 100vh;
  .popup-content {
    width: 80vw;
    height: 80vh;
    background: #fff;
    border-radius: 5px;
    overflow: scroll;
    padding: 15px 20px;
    .link {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 40px;
      align-items: center;
      cursor: pointer;
      color: #88c9da;
      .pl-icon {
        margin-right: 10px;
      }
      span {
        text-decoration: underline;
      }
    }
  }
}
</style>
