<template>
  <div class="content">
    <h3>基础用法</h3>
    <pl-upload v-model:value="files" accept="image/*" class="file-upload" :beforeRead="beforeRead" :afterRead="afterRead" multiple @change="onChange"></pl-upload>
    <h3>自定义按钮</h3>
    <pl-upload v-model:value="files" accept="image/*" class="file-upload" @change="onChange">
      <template v-slot:tips><span>请选择图片，格式不限</span></template>
      <template v-slot="scope">
        <pl-button class="home" @click="setHomePage(scope.file)" size="small">设为首页</pl-button>
      </template>
      <template v-slot:button>
        <pl-button size="small">添加图片</pl-button>
      </template>
    </pl-upload>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  setup() {
    const files = ref([])

    const setHomePage = (file) => {
      console.log(file)
    }
    const onChange = (files) => {
      console.log('onChange: ', files)
    }
    const beforeRead = (files) => {
      console.log('beforeRead: ', files, this)
    }
    const afterRead = (files) => {
      console.log('afterRead: ', files, this)
    }

    return {
      files,
      setHomePage,
      onChange,
      beforeRead,
      afterRead
    }
  }
}
</script>
<style lang="less" scoped>
.file-upload {
  position: relative;
}
.home {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
