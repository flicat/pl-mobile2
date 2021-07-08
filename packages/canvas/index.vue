<template>
  <div class="pl-canvas" ref="wrap">
    <canvas ref="canvas" v-bind="$attrs" @touchstart="handlerStart" @touchmove="handlerMove" @touchend="handlerEnd" @touchcancel="handlerEnd"></canvas>
    <div class="placeholder" v-show="showPlaceholder" :style="placeholderStyle">
      <slot name="placeholder"></slot>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'

export default {
  name: 'plCanvas',
  componentName: 'plCanvas',
  props: {
    size: {        // 笔触大小
      type: Number,
      default: 14
    },
    orientation: {  // 画布朝向 top/right/bottom/left
      type: String,
      default: 'top'
    },
    penId: {        // 笔触id
      type: Number,
      default: 0
    },
    fillStyle: {        // 笔触id
      type: String
    }
  },
  setup(props, context) {
    let canvas = ref(null)        // canvas
    let wrap = ref(null)        // wrap

    let penSize = props.size  // 笔刷大小
    let pointArr = []        // 描绘点
    let writeFlag = false    // 是否开始写字
    let startPoint = {}      // 笔触开始坐标点
    let context2D = null     // canvas context
    let clientRect = null     // canvas 坐标偏移量
    let showPlaceholder = ref(true)     // 显示 placeholder

    // 画笔列表
    let penImgList = computed(() => {
      return [
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABLUExURUxpcQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADFVjQ0AAAAYdFJOUwDNi6oneUH3CrblTzCSHsfYOlpfvphlGd7l5lMAAACySURBVCjPjZNZEsMgDEMhgZgQsi/1/U/a6UAJi51Wv28QwhZC/NAyt3pzhsMSPwJ57hOFW4xaxq7CDaayo8rxhoX6zMJhpT5xMFBz0GX00iC+9KQwzobL5nUE/KIxfu9faAwTNZhbo8crg21wtwx3z+6Dx4rBV3DvabyLx3BxdeRxiHNXQK3lXpvmg5eVC5Jpacxc3pyXzuTxYCg7q5N8h6orPzV++tB2zJ9xw7WvRvypNzPMLyiDuR4wAAAAAElFTkSuQmCC',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURUxpcQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD94JoQAAAAcdFJOUwDlxND2AxkS7/snrnEKYoWXOC7cTkIfkaeLU7nauEdWAAAAyklEQVQoz72Txw7DIBBEl2IWA6a4F/7/OxORKI4LnKKMuD20DMwA8CdVAE0GoWptb6xZ+wEQqwNr0HjWySifq5PMT2ur9h3CUhkP4lR726aTquBlHS/ihDobAAK9gUl1R0HMsSAwvIhpiRIgBcoXqAtYt1Cg8nmvPO0cFDBxooTdCHnMNaY8Ms4n9YpL3nrW4p3mxO9cqU/Y+jKeGNyrEthpMBsOjcP5+93ZMp4KqsyWDNaRsGWoLjVtVO/pvGlnBWYajqNo8Mcf5wEUtTUhHrorsgAAAABJRU5ErkJggg=='
      ].map(src => {
        let img = new Image()
        img.src = src
        return img
      })
    })

    // 笔刷
    let penImg = computed(() => {
      return penImgList.value[props.penId] || penImgList.value[0]
    })

    // 旋转角度
    let rotate = computed(() => {
      return {
        top: 0,
        right: 90,
        bottom: 180,
        left: 270
      }[props.orientation]
    })

    let placeholderStyle = computed(() => {
      let style = {
        transform: 'translate(-50%, -50%) rotate(' + rotate.value + 'deg)',
        webkitTransform: 'translate(-50%, -50%) rotate(' + rotate.value + 'deg)'
      }
      if (canvas.value && /^(left|right)$/.test(props.orientation)) {
        style.width = canvas.value.height + 'px'
        style.height = canvas.value.width + 'px'
      }
      return style
    })

    function handlerStart(e) {
      writeFlag = true
      clientRect = canvas.value.getBoundingClientRect()
      startPoint = getPointPosition(e)
      let x1 = startPoint.x
      let y1 = startPoint.y
      pointArr.unshift({ x1, y1 })
      showPlaceholder.value = false
      context.emit('drawStart')
    }

    function handlerMove(e) {
      if (!writeFlag) {
        return false
      }
      e.preventDefault()
      let currentPoint = getPointPosition(e) //move
      let prevStartPoint = startPoint  //down
      startPoint = currentPoint

      let len = Math.round(distance(prevStartPoint, currentPoint) / 2) + 1
      for (let i = 0; i < len; i++) {
        let x = prevStartPoint.x + (currentPoint.x - prevStartPoint.x) / len * i - penSize / 2
        let y = prevStartPoint.y + (currentPoint.y - prevStartPoint.y) / len * i - penSize / 2

        context2D.beginPath()

        pointArr.unshift({ x, y })
        context2D.drawImage(penImg.value, x, y, penSize, penSize)
        penSize = penSize - 0.2
        if (penSize < props.size / 2) {
          penSize = Math.ceil(props.size / 2)
        }
      }
      context.emit('drawing')
    }

    function handlerEnd() {
      writeFlag = false
      penSize = props.size
      if (pointArr.length > 100) {
        for (let i = 0; i < 60; i++) {
          pointArr[i].x = pointArr[i].x - penSize / 4
          pointArr[i].y = pointArr[i].y - penSize / 4
          context2D.drawImage(penImg.value, pointArr[i].x, pointArr[i].y, penSize, penSize)

          penSize = penSize - 0.3
          if (penSize < props.size / 4) {
            penSize = Math.ceil(props.size / 4)
          }
        }
        penSize = props.size
        pointArr.length = 0
      }
      if (pointArr.length === 1) {
        context2D.drawImage(penImg.value, pointArr[0].x1 - penSize / 2, pointArr[0].y1 - penSize / 2, penSize, penSize)
        pointArr.length = 0
      }
      context.emit('drawEnd')
    }

    // 获取笔触坐标点
    function getPointPosition(e) {
      let x = e.clientX || e.touches[0].clientX
      let y = e.clientY || e.touches[0].clientY
      return {
        x: x - clientRect.left,
        y: y - clientRect.top
      }
    }
    // 计算两个笔触之间的距离
    function distance(startPoint, currentPoint) {
      let x = currentPoint.x - startPoint.x
      let y = currentPoint.y - startPoint.y
      return Math.sqrt(x * x + y * y)
    }
    // 清除画布
    function clear() {
      context2D.clearRect(0, 0, canvas.value.width, canvas.value.height)
      if (props.fillStyle) {
        context2D.fillStyle = props.fillStyle
        context2D.fillRect(0, 0, canvas.value.width, canvas.value.height)
      }
      showPlaceholder.value = true
      context.emit('clear')
    }
    // dataURL 转 Blob
    function dataURLtoBlob(dataUrl) {
      let arr = dataUrl.split(','), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      return new Blob([u8arr], { type: mime })
    }
    // 根据方向旋转图片
    function setImgOrientation() {
      if (props.orientation === 'top') {
        return canvas.value
      }

      let tempCanvas = document.createElement('canvas')

      if (/^(left|right)$/.test(props.orientation)) {
        tempCanvas.width = canvas.value.height
        tempCanvas.height = canvas.value.width
      } else {
        tempCanvas.width = canvas.value.width
        tempCanvas.height = canvas.value.height
      }

      let context = tempCanvas.getContext('2d')
      let drawX = ({ right: 0, bottom: tempCanvas.width, left: tempCanvas.width })[props.orientation]
      let drawY = ({ right: tempCanvas.height, bottom: tempCanvas.height, left: 0 })[props.orientation]

      context.translate(drawX, drawY)
      context.rotate(-rotate.value * Math.PI / 180)
      context.drawImage(canvas.value, 0, 0)
      return tempCanvas
    }
    // 获取图像
    function getImageDataUrl(type, encoderOptions) {
      return setImgOrientation().toDataURL(type, encoderOptions)
    }
    // 获取图像
    function getImageBlob(type, encoderOptions) {
      return dataURLtoBlob(getImageDataUrl(type, encoderOptions))
    }

    onMounted(() => {
      canvas.value.width = wrap.value.clientWidth
      canvas.value.height = wrap.value.clientHeight
      context2D = canvas.value.getContext('2d')
      clear()
    })

    return {
      canvas,
      wrap,

      clear,
      getImageDataUrl,
      getImageBlob,

      handlerStart,
      handlerMove,
      handlerEnd,
      handlerEnd,
      showPlaceholder,
      placeholderStyle
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../src/assets/less/mixin.less";

.pl-canvas {
  position: relative;
  z-index: 0;
  width: 100%;
  .height(375);
  background-color: var(--canvas-bg);

  canvas {
    position: relative;
    z-index: 1;
  }
  .placeholder {
    position: absolute;
    z-index: 0;
    left: 50%;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1.5em;
    transform-origin: 50% 50%;
    color: var(--canvas-placeholder);
    font-size: 4em;
    text-align: center;
  }
}
</style>
