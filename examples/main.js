import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PlMobile from '../src'
import platform from './assets/js/platform'

// 测试环境加载 VConsole
if (platform.isFromAndroid || platform.isFromIos) {
  let script = document.createElement('script')
  script.setAttribute('src', '//wechatfe.github.io/vconsole/lib/vconsole.min.js?v=3.3.0')
  document.head.appendChild(script)
  script.onload = script.onreadystatechange = function () {
    script = null
    return new window.VConsole()
  }
}

createApp(App).use(router).use(PlMobile).mount('#app')
