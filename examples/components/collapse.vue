<template>
  <div class="content">
    <h3>基础用法</h3>
    <pl-collapse v-model="active" title="面板" @change="onChange">
      <p>面板内容</p>
    </pl-collapse>

    <h3>自定义标题</h3>
    <pl-collapse v-model="active">
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
      active: false
    }
  },
  methods: {
    onChange() {
      console.log('onChange::', this.active)
    }
  }
}
</script>

<style lang="less" scoped>
p {
  margin: 0;
  line-height: 3em;
  background-color: aqua;
}
</style>
