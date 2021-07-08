<template>
  <router-view></router-view>
</template>
<script>
import * as Vue from 'vue'
console.log(Vue)
</script>
<style lang="less">
@import "./assets/base.less";
@import "/node_modules/highlight.js/styles/foundation.css";
@import "/node_modules/github-markdown-css/github-markdown.css";

#app {
  width: 100%;
  height: 100%;
}
</style>
