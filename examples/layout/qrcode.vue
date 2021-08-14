<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import { reactive, ref, onMounted, watch } from 'vue'
import * as Qrious from 'qrious'

let QriousFunc
if (typeof Qrious === 'function') {
  QriousFunc = Qrious
} else if (typeof Qrious.default === 'function') {
  QriousFunc = Qrious.default
} else {
  QriousFunc = function () { }
}

export default {
  props: {
    background: {
      type: String,
      default: 'white'
    },
    backgroundAlpha: {
      type: Number,
      default: 0.0
    },
    foreground: {
      type: String,
      default: 'black'
    },
    foregroundAlpha: {
      type: Number,
      default: 1.0
    },
    level: {
      type: String,
      default: 'L'
    },
    mime: {
      type: String,
      default: 'image/png'
    },
    padding: {
      type: Number,
      default: null
    },
    size: {
      type: Number,
      default: 100
    },
    value: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const canvas = ref(null)
    let qrious = reactive({})

    onMounted(() => {
      qrious = new QriousFunc({
        element: canvas.value,
        background: props.background,
        backgroundAlpha: props.backgroundAlpha,
        foreground: props.foreground,
        foregroundAlpha: props.foregroundAlpha,
        level: props.level,
        mime: props.mime,
        padding: props.padding,
        size: props.size,
        value: props.value
      })
    })

    watch(() => props.value, value => {
      qrious.value = value
    })
    watch(() => props.size, size => {
      qrious.size = size
    })

    return {
      canvas
    }
  }
}
</script>
