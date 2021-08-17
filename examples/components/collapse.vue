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
import { onMounted, ref } from 'vue'
export default {
  setup() {
    const active1 = ref(false)
    const active2 = ref(true)

    const onChange = e => {
      console.log('onChange::', e)
    }

    onMounted(() => {
      setTimeout(() => {
        active1.value = !active1.value
        active2.value = !active2.value
      }, 1500)
    })

    return {
      active1,
      active2,
      onChange
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
