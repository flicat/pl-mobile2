<template>
  <div class="content">
    <pl-canvas class="canvas" ref="canvas" :penId="0" orientation="right">
      <template v-slot:placeholder>请在此处签名</template>
    </pl-canvas>
    <pl-cell :span="[1,2,2]" gap="10px" class="btn-warp">
      <pl-button @click="clear" type="primary">清除</pl-button>
      <pl-button @click="getImageDataUrl" type="primary">获取dataURL</pl-button>
      <pl-button @click="getImageBlob" type="primary">获取BLob</pl-button>
    </pl-cell>
    <div class="preview">
      <img :src="src" v-if="src" alt="">
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    let src = ref('')
    let canvas = ref(null)

    function clear() {
      canvas.value.clear()
    }

    function getImageDataUrl() {
      let result = canvas.value.getImageDataUrl()
      console.log('getImageDataUrl:: ', result)
      src.value = result
    }

    function getImageBlob() {
      let result = canvas.value.getImageBlob()
      console.log('getImageBlob:: ', result)
      src.value = URL.createObjectURL(result)
    }

    return {
      src,
      canvas,
      clear,
      getImageDataUrl,
      getImageBlob
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  .canvas {
    width: 100%;
    height: 80vh;
  }
  .btn-warp {
    padding: 1rem 0;
  }
  .preview {
    padding: 1em;
    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
