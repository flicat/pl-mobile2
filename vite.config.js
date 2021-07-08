import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue'
import vitePluginMd2Vue from 'vite-plugin-md2vue';

export default defineConfig({
  plugins: [
    Vue(),
    vitePluginMd2Vue({
      renderWrapperClass: 'markdown-body'
    })
  ],
})
