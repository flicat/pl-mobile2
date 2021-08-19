import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue'
import vitePluginMd2Vue from 'vite-plugin-md2vue';
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  base: './',
  build: {
    minify: false
  },
  plugins: [
    Vue(),
    svgLoader(),
    vitePluginMd2Vue({
      renderWrapperClass: 'markdown-body'
    })
  ],
})
