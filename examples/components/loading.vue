<template>
  <div class="content">
    <pl-loading>加载中...</pl-loading>
    <pl-loading vertical>加载中...</pl-loading>
  </div>
</template>
<script>
import { getCurrentInstance } from 'vue'
export default {
  setup() {
    const app = getCurrentInstance()
    const { $loadingShow, $loadingHide } = app.appContext.config.globalProperties

    const showLoading = () => {
      $loadingShow('加载中...')
      setTimeout(() => {
        $loadingHide()
      }, 2000)
    }
    showLoading()
  }
}
</script>

<style lang="less" scoped>
.content {
  .pl-loading {
    margin: 50px;
  }
}
</style>
