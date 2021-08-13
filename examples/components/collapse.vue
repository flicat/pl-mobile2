<template>
  <div class="content">
    <h3>基础用法</h3>
    <pl-collapse v-model:value="active1" title="面板" @change="onChange">
      <p>面板内容</p>
    </pl-collapse>

    <h3>自定义标题</h3>
    <pl-collapse v-model:value="active2" @change="onChange">
      <template v-slot:title>自定义标题</template>
      <p>面板内容</p>
      <p>面板内容</p>
      <p>面板内容</p>
    </pl-collapse>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active1: false,
      active2: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.active1 = !this.active1
      this.active2 = !this.active2
    }, 3000)
  },
  methods: {
    onChange(e) {
      console.log('onChange::', e)
    }
  }
}
</script>

<style lang="less" scoped>
p {
  margin: 0;
  line-height: 3em;
  padding: 0 1em;
  background-color: #d0ffff;
}
.pl-collapse {
  outline: 1px dashed #eee;
}
</style>
