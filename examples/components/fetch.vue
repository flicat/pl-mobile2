<template>
  <div class="content">
    <pl-button @click="getImg" type="primary">请求一张图片</pl-button>
    <img :src="src" v-if="src" ref="img">
  </div>
</template>
<script>
import { getCurrentInstance, ref } from 'vue'
export default {
  setup() {
    const app = getCurrentInstance()
    const { $fetch } = app.appContext.config.globalProperties

    const src = ref('')
    const getImg = async () => {
      $fetch.before((options) => {
        options.type = 'blob'
      })
      const data = await $fetch.get('/favicon.ico')
      if (data && data.size > 0) {
        src.value = URL.createObjectURL(data)
      }
    }

    return {
      src,
      getImg
    }
  }
}
</script>

<style lang="less" scoped>
img {
  display: block;
  width: 50vw;
}
</style>
