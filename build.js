const path = require('path')
const { build } = require('vite')
const svgLoader = require('vite-svg-loader')

build({
  plugins: [
    svgLoader()
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'PlMobile',
      formats: ['es', 'umd'],
      fileName: 'index'
    },
    outDir: 'lib',
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
