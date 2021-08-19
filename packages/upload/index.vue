<template>
  <div class="pl-upload">
    <div class="rows" :style="{'grid-template-columns': 'repeat(' +  rows + ', 1fr)'}">
      <div class="cols" v-for="(file, i) in fileArray" :key="i">
        <div class="pl-file-preview">
          <div class="pl-upload-img" :class="[file.type]" :style="file.preview ? {'background-image': `url(${file.preview})`} : null" @click="preview(file)"></div>
          <div class="pl-upload-del" v-if="!disabled" @click="delFile(i)">
            <iconClose></iconClose>
          </div>
          <slot :file="file"></slot>
        </div>
      </div>
      <div class="cols" v-if="!disabled && fileArray.length < maxCount">
        <div class="pl-upload-button">
          <input type="file" class="file-input" :multiple="multiple" :accept="accept" :capture="capture" @change.stop="setFiles">
          <slot name="button">
            <div class="pl-add-button">
              <iconPlus class="pl-upload-add"></iconPlus>
            </div>
          </slot>
        </div>
      </div>
    </div>
    <slot name="tips"></slot>

    <teleport to='body'>
      <div class="pl-preview-dialog" v-if="dialogPreview">
        <ul class="preview-list" :style="previewListStyle" @touchstart="touchEvent($event)" @touchmove="touchEvent($event)" @touchend="touchEvent($event)" @touchcancel="touchEvent($event)" @click="closePreview">
          <li class="preview-item" v-for="(file, i) in previewList" :key="i" :style="{'background-image': `url(${file.preview})`, 'left': i * 100 + '%'}"></li>
        </ul>
        <div class="preview-index">{{previewIndex + 1}}/{{previewList.length}}</div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { computed, reactive, ref, watch } from 'vue'
import iconClose from '../../src/assets/images/icon-close.svg'
import iconPlus from '../../src/assets/images/icon-plus.svg'

export default {
  name: 'plUpload',
  componentName: 'plUpload',
  components: {
    iconClose,
    iconPlus
  },
  props: {
    value: Array,
    accept: {         // 接受的文件类型
      type: String,
      default: '*/*'
    },
    rows: {
      type: Number,             // 文件列表项宽
      default: 4
    },
    multiple: Boolean,          // 是否开启图片多选，部分安卓机型不支持
    disabled: Boolean,          // 是否禁用文件上传
    capture: String,            // 图片选取模式，可选值为 camera (直接调起摄像头)
    beforeRead: Function,       // 文件读取前的回调函数，返回false可终止文件读取
    afterRead: Function,        // 文件读取完成后的回调函数
    maxSize: {                  // 文件大小限制，单位为byte
      type: Number,
      default: Infinity
    },
    maxCount: {                 // 文件上传数量限制
      type: Number,
      default: Infinity
    }
  },
  setup(props, context) {
    const dialogPreview = ref(false)  // 预览弹窗
    const previewIndex = ref(0)        // 预览index

    // 文件列表
    const fileArray = computed({
      get: () => {
        if (Array.isArray(props.value)) {
          return props.value.map(file => {
            if (file instanceof Blob) {
              return {
                type: getFileType(file),
                url: getFileUrl(file),
                preview: getFilePreview(file),
                file
              }
            }
            if (!file.url) {
              file.url = getFileUrl(file)
            }
            if (!file.type) {
              file.type = getFileType(file)
            }
            if (file.type === 'image' && !file.preview) {
              file.preview = getFilePreview(file)
            }
            return file
          })
        }
        return []
      },
      set: val => {
        context.emit('update:value', val)
        context.emit('change', val)
      }
    })

    // 删除文件
    const delFile = (index) => {
      props.value.splice(index, 1)
      context.emit('change', fileArray.value)
    }
    // 获取文件类型
    const getFileType = (file) => {
      return /image/.test(file.type) || /\.(jpe?g|png|gif|bmp)$/i.test(file.name) ? 'image' :
        /\.doc(x|m)?$/i.test(file.name) ? 'doc' :
          /\.xls(x|b|m)?$/i.test(file.name) ? 'xls' :
            /\.ppt(x|m)?$/i.test(file.name) ? 'ppt' :
              /\.pdf$/i.test(file.name) ? 'pdf' : ''
    }
    // 根据文件类型获取预览图
    const getFilePreview = (file) => {
      if (getFileType(file) === 'image') {
        return getFileUrl(file)
      } else {
        return null
      }
    }
    // 获取文件链接
    const getFileUrl = (file) => {
      if (file.url) {
        return file.url
      }
      if (file instanceof File) {
        return window.URL.createObjectURL(file)
      }
      return null
    }
    // 获取文件
    const setFiles = (e) => {
      let files = Array.from(e.target.files)
      let normalFiles = []
      let oversizeFiles = []

      files.forEach(file => {
        if (file.size > props.maxSize) {
          oversizeFiles.push(file)
        } else {
          normalFiles.push(file)
        }
      })

      if (oversizeFiles.length) {
        context.emit('oversize', oversizeFiles)       // 文件超大事件
      }

      let beforeResult = true
      if (typeof props.beforeRead == 'function') {
        // 文件选择前置钩子，返回false则取消添加文件
        beforeResult = props.beforeRead(normalFiles) !== false
      }

      if (normalFiles.length && beforeResult) {
        let fileLength = normalFiles.length + fileArray.value.length
        if (fileLength > props.maxCount) {
          context.emit('exceed', fileLength - props.maxCount)       // 文件数量超出事件
          normalFiles = normalFiles.slice(0, props.maxCount - fileLength)
        }
        fileArray.value = [...fileArray.value, ...normalFiles.map(file => {
          return {
            type: getFileType(file),
            url: getFileUrl(file),
            preview: getFilePreview(file),
            file
          }
        })]
        // 文件选择后置钩子
        if (typeof props.afterRead == 'function') {
          props.afterRead(normalFiles)
        }
      }
    }

    const previewList = ref([])   // 图片预览列表

    // 预览
    const preview = (file) => {
      if (file.type === 'image') {
        previewList.value = props.value.filter(item => item.type === 'image')
        previewIndex.value = previewList.value.findIndex(item => item === file)
        dialogPreview.value = true
      } else {
        window.open(file.url)
      }
    }

    const closePreview = () => {
      dialogPreview.value = false
    }

    // 预览图便宜量
    const translateX = computed(() => {
      return previewIndex.value * window.innerWidth
    })

    const previewListStyle = reactive({
      transition: 'none',
      transform: `translateX(${-translateX.value}px)`
    })

    watch(translateX, val => {
      previewListStyle.transform = `translateX(${-val}px)`
    })

    let transStart = 0
    let transDiff = 0

    // 预览触摸滚动事件
    const touchEvent = (e) => {
      switch (e.type) {
        case 'touchstart':
          transStart = e.touches[0].clientX
          previewListStyle.transition = 'none'
          break;
        case 'touchmove':
          transDiff = e.touches[0].clientX - transStart
          previewListStyle.transform = `translateX(${transDiff - translateX.value}px)`
          break;
        case 'touchend':
        case 'touchcancel':
          previewListStyle.transition = ''
          if (transDiff > 0) {
            previewIndex.value--
          } else {
            previewIndex.value++
          }
          if (previewIndex.value < 0) {
            previewIndex.value = 0
          }
          if (previewIndex.value >= previewList.value.length) {
            previewIndex.value = previewList.value.length - 1
          }
          previewListStyle.transform = `translateX(${-translateX.value}px)`
          break;
      }
    }

    return {
      fileArray,
      preview,
      delFile,
      setFiles,
      dialogPreview,
      translateX,
      touchEvent,
      closePreview,
      previewList,
      previewIndex,
      previewListStyle
    }
  }
}
</script>

<style lang="less">
.pl-upload {
  * {
    box-sizing: border-box;
  }
  .rows {
    width: 100%;
    display: grid;
    grid-gap: 1em;

    .cols {
      position: relative;
      height: 0;
      padding-bottom: 100%;

      .pl-file-preview,
      .pl-upload-button {
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }
  }
  .pl-file-preview {
    .pl-upload-img {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      border-radius: 4px;
      background-image: url(../../src/assets/images/word.png);

      &.pdf {
        background-image: url(../../src/assets/images/pdf.png);
      }
    }
    .pl-upload-del {
      padding: 1em;
      position: absolute;
      right: 0;
      top: 0;
      transform: translate(50%, -50%);
      color: var(--upload-del-text);
    }
  }
  .pl-upload-button {
    .file-input {
      position: absolute;
      z-index: 1;
      -webkit-appearance: none;
      opacity: 0;
      width: 100%;
      height: 100%;
    }
    .pl-add-button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid var(--upload-add-button);
      color: var(--upload-add-button);
      width: 100%;
      height: 100%;

      .pl-upload-add {
        font-size: 2em;
      }
    }
  }
}
.pl-preview-dialog {
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);

  .preview-list {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    list-style: none;
    margin: 0;
    padding: 0;
    transition: all 0.3s ease;
    will-change: transform, -webkit-transform;

    .preview-item {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-position: 50% 50%;
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
  .preview-index {
    position: absolute;
    z-index: 2;
    left: 0;
    top: 1em;
    width: 100%;
    text-align: center;
    color: #fff;
    text-shadow: 0 0 2px #999;
  }
}
</style>
