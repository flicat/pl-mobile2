<template>
  <div class="content">
    <pl-button @click="getImg" type="primary">请求一张图片</pl-button>
    <img :src="src" v-if="src" ref="img">
  </div>
</template>
<script>
export default {
  data() {
    return {
      src: ''
    }
  },
  created() {

  },
  methods: {
    getImg() {
      this.$fetch.before((options) => {
        options.type = 'blob'
      })
      this.$fetch.get('/favicon.ico').then(data => {
        if (data && data.size > 0) {
          this.src = URL.createObjectURL(data)
        }
      })
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
