<template>
  <teleport to='body'>
    <div :class="['pl-watch-popup', show ? '' : 'hidden']" @click.self="close">
      <svg class="watch-content" viewBox="0 0 250 370" @touchstart.stop.prevent="touchHandler" @touchmove.stop.prevent="touchHandler">
        <defs>
          <circle id="watch-bg" cx="125" cy="125" r="110" class="watch-bg"></circle>
          <rect id="text-bg" x="0" y="0" height="60" width="250" class="text-bg" />
          <g id="hour-num">
            <text class="hour-item" v-for="(item, i) in hours" :key="'hour-' + item" v-bind="getTimePosition(i * 30, 60)" dy="5px">{{item}}</text>
          </g>
          <g id="minute-num">
            <text class="minute-item" v-for="(item, i) in minutes" :key="'minute-' + item" v-bind="getTimePosition(i * 30, 90)" dy="6px">{{item}}</text>
          </g>
          <g id="minute-pointer">
            <circle class="pointer-circle" cx="125" cy="35" r="15"></circle>
            <circle class="needle-center" cx="125" cy="125" r="5"></circle>
            <rect class="needle" x="125" y="50" height="75" width="1" />
          </g>
          <g id="hour-pointer">
            <circle class="pointer-circle" cx="125" cy="64" r="12"></circle>
            <circle class="needle-center" cx="125" cy="125" r="5"></circle>
            <rect class="needle" x="125" y="76" height="54" width="1" />
          </g>
        </defs>

        <!-- 表盘 -->
        <g ref="watch">
          <use xlink:href="#watch-bg" x="0" y="60"></use>
          <!-- 多选时间范围轨迹 -->
          <circle id="time-range" cx="125" cy="185" r="61" class="time-range" :transform="'rotate('+selectedRange.rotate+' 125 185)'" :stroke-dashoffset="selectedRange.offset" v-if="options.isRange"></circle>
          <use xlink:href="#minute-num" fill="#222" x="0" y="60" @touchstart="setMinutes()"></use>
          <use xlink:href="#hour-num" fill="#444" x="0" y="60" @touchstart="setHours()"></use>
        </g>

        <!-- 单选时针 -->
        <g :transform="'rotate('+hourAngle+' 125 185)'" @touchstart="setHours('currentHour')" v-if="!options.isRange">
          <use xlink:href="#hour-pointer" x="0" y="60" style="fill: var(--watch-hour-pointer)"></use>
        </g>
        <!-- 单选分针 -->
        <g :transform="'rotate('+menuteAngle+' 125 185)'" @touchstart="setMinutes('currentMinute')" v-if="!options.isRange">
          <use xlink:href="#minute-pointer" x="0" y="60" style="fill: var(--watch-minute-pointer)"></use>
        </g>

        <!-- 多选开始分针 -->
        <g :transform="'rotate('+startMenuteAngle+' 125 185)'" @touchstart="setMinutes('startMinute')" v-if="options.isRange" v-show="/startMinute|startHour/.test(currentPointer.name)">
          <use xlink:href="#minute-pointer" x="0" y="60" style="fill: var(--watch-minute-pointer)"></use>
        </g>
        <!-- 多选结束分针 -->
        <g :transform="'rotate('+endMenuteAngle+' 125 185)'" @touchstart="setMinutes('endMinute')" v-if="options.isRange" v-show="/endMinute|endHour/.test(currentPointer.name)">
          <use xlink:href="#minute-pointer" x="0" y="60" style="fill: var(--watch-end-minute-pointer)"></use>
        </g>
        <!-- 多选开始时针 -->
        <g :transform="'rotate('+startHourAngle+' 125 185)'" @touchstart="setHours('startHour')" v-if="options.isRange">
          <use xlink:href="#hour-pointer" x="0" y="60" style="fill: var(--watch-hour-pointer)"></use>
        </g>
        <!-- 多选结束时针 -->
        <g :transform="'rotate('+endHourAngle+' 125 185)'" @touchstart="setHours('endHour')" v-if="options.isRange">
          <use xlink:href="#hour-pointer" x="0" y="60" style="fill: var(--watch-end-hour-pointer)"></use>
        </g>

        <!-- 时间结果显示 -->
        <g @touchstart.stop.prevent @touchmove.stop.prevent>
          <use xlink:href="#text-bg" x="0" y="0"></use>
          <text class="current-time" x="125" y="42" v-if="!options.isRange">{{currentTime}}</text>
          <text class="current-time" x="125" y="42" v-else>{{currentStartTime}}~{{currentEndTime}}</text>
        </g>

        <!-- 提交按钮 -->
        <g @touchstart.stop.prevent @touchmove.stop.prevent>
          <use xlink:href="#text-bg" x="0" y="310"></use>
          <text class="btn-text" x="63" y="347" @touchstart="close">取消</text>
          <text class="btn-text" x="125" y="347">|</text>
          <text class="btn-text" x="187" y="347" @touchstart="submit">确定</text>
        </g>
      </svg>
    </div>
  </teleport>
</template>

<script>
import { ref, reactive, computed } from 'vue'
import { getDateString, getDateFromString } from '../../src/assets/utils'

// 日历默认配置信息
const defaultOption = {
  value: null,             // 默认时间（单选）
  startValue: null,        // 默认开始时间（范围）
  endValue: null,          // 默认结束时间（范围）
  isRange: false,         // 是否是范围选择
  selectRange: null,      // 时间可选最大范围
  format: 'H:I'
}

// 拆解出时间
const getTimeValue = (timeStr) => {
  if (timeStr) {
    let time = getDateFromString(timeStr)
    if (time) {
      return [time.getHours(), time.getMinutes()]
    }
  }
  return [0, 0]
}

// 获取时间格式
const getTimeFormat = (hour, minute, format) => {
  let date = new Date()
  date.setHours(hour, minute, 0, 0)
  return getDateString(date, format)
}

export default {
  name: 'plTimePopup',
  componentName: 'plTimePopup',
  setup(props, context) {
    const watch = ref(null)
    const options = reactive(Object.assign({}, defaultOption))

    const currentHour = ref(0)           // 小时（单选）
    const currentMinute = ref(0)         // 分钟（单选）
    const startHour = ref(0)             // 开始小时（范围）
    const startMinute = ref(0)           // 开始分钟（范围）
    const endHour = ref(0)               // 结束小时（范围）
    const endMinute = ref(0)             // 结束分钟（范围）

    const currentPointer = ref(null)     // 当前拖放的指针
    let watchClientRect = null    // 表盘的位置信息
    const show = ref(false)

    const hours = new Array(12).fill('').map((item, i) => String(i * 2).padStart(2, '0'))
    const minutes = new Array(12).fill('').map((item, i) => String(i * 5).padStart(2, '0'))

    const currentTime = computed(() => {
      return [currentHour.value, currentMinute.value].map(item => String(item).padStart(2, '0')).join(':')
    })
    const currentStartTime = computed(() => {
      return [startHour.value, startMinute.value].map(item => String(item).padStart(2, '0')).join(':')
    })
    const currentEndTime = computed(() => {
      return [endHour.value, endMinute.value].map(item => String(item).padStart(2, '0')).join(':')
    })
    // 小时指针角度（单选）
    const hourAngle = computed(() => {
      return currentHour.value * 15
    })
    // 分钟指针角度（单选）
    const menuteAngle = computed(() => {
      return currentMinute.value * 6
    })
    // 开始小时指针角度（范围）
    const startHourAngle = computed(() => {
      return startHour.value * 15
    })
    // 开始分钟指针角度（范围）
    const startMenuteAngle = computed(() => {
      return startMinute.value * 6
    })
    // 结束小时指针角度（范围）
    const endHourAngle = computed(() => {
      return endHour.value * 15
    })
    // 结束分钟指针角度（范围）
    const endMenuteAngle = computed(() => {
      return endMinute.value * 6
    })
    // 已选时间范围显示
    const selectedRange = computed(() => {
      let hourDiff = endHour.value - startHour.value
      if (hourDiff < 0) {
        hourDiff += 24
      }
      return {
        rotate: startHour.value * 15 - 90,
        offset: 377 - parseInt((hourDiff / 24) * 377)
      }
    })

    // 初始化配置
    const open = (option) => {
      Object.assign(options, defaultOption, option)

      if (options.isRange) {
        [startHour.value, startMinute.value] = getTimeValue(options.startValue);
        [endHour.value, endMinute.value] = getTimeValue(options.endValue);
        currentPointer.value = { name: 'startHour', angle: 15 }
      } else {
        [currentHour.value, currentMinute.value] = getTimeValue(options.value);
        currentPointer.value = { name: 'currentHour', angle: 15 }
      }

      show.value = true
    }
    // 关闭日历
    const close = () => {
      show.value = false
    }
    // 计算时间/分钟角度位置
    const getTimePosition = (angle, diameter) => {
      let radian = 2 * Math.PI / 360 * ((540 - angle) % 360)
      return {
        x: 125 + diameter * Math.sin(radian),
        y: 125 + diameter * Math.cos(radian)
      }
    }
    // 设置小时
    const setHours = (name) => {
      if (!name) {
        if (/Hour$/.test(currentPointer.value.name)) {
          name = currentPointer.value.name
        } else {
          name = options.isRange ? 'startHour' : 'currentHour'
        }
      }
      currentPointer.value = { name, angle: 15 }
    }
    // 设置分钟
    const setMinutes = (name) => {
      if (!name) {
        if (/Minute$/.test(currentPointer.value.name)) {
          name = currentPointer.value.name
        } else {
          name = options.isRange ? currentPointer.value.name === 'startHour' ? 'startMinute' : 'endMinute' : 'currentMinute'
        }
      }
      currentPointer.value = { name, angle: 6 }
    }
    // 拖动选时间
    const touchHandler = ({ type, touches }) => {
      if (!touches.length) {
        return false
      }
      if (type === 'touchstart' && !watchClientRect) {
        watchClientRect = watch.value.getBoundingClientRect()
      }
      getTimeFromAngle(touches[0])
    }
    // 根据角度计算时间值
    const getTimeFromAngle = ({ clientX, clientY }) => {
      if (!watchClientRect || !currentPointer.value) {
        return false
      }
      let { left, top, width, height } = watchClientRect
      let x = clientX - left - width / 2
      let y = clientY - top - height / 2

      let angle = Math.atan(Math.abs(y / x)) / Math.PI * 180;
      if (x <= 0 && y <= 0) {
        angle += 270;
      } else if (x >= 0 && y <= 0) {
        angle = 90 - angle;
      } else if (x <= 0 && y >= 0) {
        angle = 270 - angle;
      } else if (x >= 0 && y >= 0) {
        angle += 90;
      }

      let time = Math.round(angle / currentPointer.value.angle)
      if (time * currentPointer.value.angle === 360) {
        time = 0
      }
      switch (currentPointer.value.name) {
        case 'startHour':
          startHour.value = time
          break;
        case 'endHour':
          endHour.value = time
          break;
        case 'currentHour':
          currentHour.value = time
          break;
        case 'startMinute':
          startMinute.value = time
          break;
        case 'endMinute':
          endMinute.value = time
          break;
        case 'currentMinute':
          currentMinute.value = time
          break;
      }
    }
    // 提交结果
    const submit = () => {
      let { isRange, format } = options
      let result

      if (isRange) {
        result = [getTimeFormat(startHour.value, startMinute.value, format), getTimeFormat(endHour.value, endMinute.value, format)]
      } else {
        result = getTimeFormat(currentHour.value, currentMinute.value, format)
      }
      // 直接唤起的回调
      if (typeof options.callback === 'function') {
        options.callback(result)
      }

      context.emit('submit', result)
      close()
    }

    return {
      watch,
      hours,
      minutes,
      options,
      currentPointer,
      show,
      open,
      close,
      touchHandler,
      getTimePosition,
      selectedRange,
      setMinutes,
      setHours,
      hourAngle,
      menuteAngle,
      startMenuteAngle,
      endMenuteAngle,
      startHourAngle,
      endHourAngle,
      currentTime,
      currentStartTime,
      currentEndTime,
      submit
    }
  }
}
</script>

<style lang="less">
@import "../../src/assets/less/mixin.less";

.pl-watch-popup {
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);

  &.hidden {
    display: none;
  }

  .watch-content {
    width: 70%;
    background: var(--datetime-bg);

    .hour-item,
    .minute-item {
      text-anchor: middle;
      stroke: none;
    }
    .hour-item {
      font-size: 12px;
    }
    .minute-item {
      font-size: 14px;
    }
    .watch-bg {
      stroke: none;
      fill: var(--watch-bg);
    }
    .text-bg {
      fill: var(--watch-result-bg);
      stroke: none;
    }
    .time-range {
      fill: none;
      stroke: var(--watch-range-color);
      stroke-width: 24px;
      stroke-dasharray: 377;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    .pointer-circle,
    .needle {
      mix-blend-mode: darken;
      stroke: none;
    }
    .needle-center {
      stroke: none;
    }
    .current-time {
      text-anchor: middle;
      stroke: none;
      fill: var(--watch-result-color);
      font-size: 28px;
      font-weight: 900;
      font-size-adjust: 0.5;
    }
    .btn-text {
      text-anchor: middle;
      stroke: none;
      fill: var(--watch-button-color);
      font-size: 14px;
    }
  }
}
</style>
