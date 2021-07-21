<template>
  <i class="pl-icon" v-bind="$attrs" :style="style">
    <svg v-if="href && !src" class="icon-svg" aria-hidden="true">
      <use :fill="fill" :stroke="stroke" :xlink:href="href"></use>
    </svg>
  </i>
</template>

<script>
import { computed } from 'vue'

let hasLoadScgIcon = false
async function loadSvgIcon() {
  if (hasLoadScgIcon) {
    return
  }
  hasLoadScgIcon = true

  const iconfontUrl = new URL('../../src/assets/utils/iconfont.js', import.meta.url)
  let script = document.createElement('script')
  script.setAttribute('src', iconfontUrl)
  document.head.appendChild(script)
  script.onload = script.onreadystatechange = function () {
    script = null
  }
}

export default {
  name: 'plIcon',
  componentName: 'plIcon',

  props: {
    name: {         // iconfont name
      type: String,
      default: ''
    },
    src: {         // 图标链接
      type: String,
      default: ''
    },
    fill: String,       // svg 填充颜色
    stroke: String        // svg 描边颜色
  },
  setup(props) {
    loadSvgIcon()
    const style = computed(() => {
      if (props.src) {
        return {
          backgroundImage: 'url(' + props.src + ')'
        }
      } else {
        return null
      }
    })
    const href = computed(() => {
      return props.name ? '#' + props.name : ''
    })
    return {
      style,
      href
    }
  }
}
</script>

<style lang="less" scoped>
.pl-icon {
  width: 1.2em;
  height: 1.2em;
  display: inline-block;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: contain;
  vertical-align: middle;
  line-height: 0;

  * {
    box-sizing: border-box;
  }

  .icon-svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    overflow: hidden;
    vertical-align: top;
  }
}
</style>
