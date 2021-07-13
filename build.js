const path = require('path')
// const fs = require('fs')
const { build } = require('vite')
// const Vue = require('@vitejs/plugin-vue')
// const vueJsx = require('@vitejs/plugin-vue-jsx')
// const vitePluginMd2Vue = require('vite-plugin-md2vue')

// console.log('build: ', build)
// console.log('createLogger: ', createLogger)
// console.log('createServer: ', createServer)
// console.log('defineConfig: ', defineConfig)
// console.log('loadConfigFromFile: ', loadConfigFromFile)
// console.log('loadEnv: ', loadEnv)
// console.log('mergeConfig: ', mergeConfig)
// console.log('normalizePath: ', normalizePath)
// console.log('optimizeDeps: ', optimizeDeps)
// console.log('resolveConfig: ', resolveConfig)
// console.log('resolvePackageData: ', resolvePackageData)
// console.log('resolvePackageEntry: ', resolvePackageEntry)
// console.log('send: ', send)
// console.log('sortUserPlugins: ', sortUserPlugins)

// function getEntry(dir) {
//   return fs.readdirSync(path.resolve(dir))
// }

// let entry = {
//   base: './src/assets/less/variables.less',
//   index: './src/index.js'
// };
// getEntry('./packages').forEach(function (name) {
//   entry[name] = './packages/' + name + '/index.js'
// })

// console.log(Vue)
// console.log(vueJsx)
// console.log(vitePluginMd2Vue)

build({
  // root: path.resolve(__dirname, './'),
  // plugins: [
  //   Vue.default(),
  //   vueJsx.default(),
  //   vitePluginMd2Vue.default()
  // ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'PlMobile'
    },
    outDir: 'lib',
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      // input: entry,
      output: {
        // entryFileNames: '[name].js',
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
