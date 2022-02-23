<template>
  <div class="content">
    <pl-loading>加载中...</pl-loading>
    <pl-loading vertical>加载中...</pl-loading>
    <pl-cell :span="[1]" gap="1rem">
      <pl-button type="primary" @click="showLoading">显示全局loading</pl-button>
      <pl-button type="primary" @click="showPartLoading">显示局部loading</pl-button>
      <pl-button type="primary" @click="isShowLoading=!isShowLoading">{{isShowLoading ? '关闭' : '打开'}}loading指令</pl-button>
    </pl-cell>
    <div class="box" ref="loadingBox" v-loading:loading…="isShowLoading"></div>
  </div>
</template>
<script>
import { getCurrentInstance, ref } from 'vue'
export default {
  setup() {
    const app = getCurrentInstance()
    const { $loading } = app.appContext.config.globalProperties

    const isShowLoading = ref(false)
    const loadingBox = ref(null)

    const showLoading = () => {
      let loading = $loading({ text: '加载中...' })
      setTimeout(() => {
        loading.close()
      }, 2000)
    }

    const showPartLoading = () => {
      let loading = $loading({ text: '加载中...', target: loadingBox.value })
      setTimeout(() => {
        loading.close()
      }, 2000)
    }

    return {
      loadingBox,
      showLoading,
      showPartLoading,
      isShowLoading
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  .pl-loading {
    margin: 50px;
  }
  .box {
    width: 100%;
    height: 10rem;
    margin-top: 1rem;
  }
  :deep(.pl-loading-wrap) {
    position: relative;
  }
}
</style>
