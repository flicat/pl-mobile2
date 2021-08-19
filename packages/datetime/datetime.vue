<template>
  <teleport to='body'>
    <div v-bind="$attrs" :class="['pl-datetime-popup', show ? '' : 'hidden']">
      <div class="top-week">
        <span class="week-item">日</span>
        <span class="week-item">一</span>
        <span class="week-item">二</span>
        <span class="week-item">三</span>
        <span class="week-item">四</span>
        <span class="week-item">五</span>
        <span class="week-item">六</span>
      </div>
      <div class="month-wrap">
        <div class="month-list">
          <div class="month-item" v-for="month in monthList" :key="month.title">
            <div class="title-date">{{month.title}}</div>
            <div class="date-list">
              <div v-for="date in month.dateArr" :key="date.timeStamp" @click="onTapDate(date)" :class="['date-item', date.status, date.disabled ? 'disabled' : '']">
                <span class="sup-label">{{date.supLabel}}</span>
                <span class="date-label">{{date.label}}</span>
                <span class="sub-label">{{date.subLabel}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-wrap">
        <button class="btn-submit" type="primary" @click="submit">选择日期</button>
      </div>
    </div>
  </teleport>
</template>

<script>
import { ref, reactive } from 'vue'
import { getDateString, getDateFromString, getMonthDays } from '../../src/assets/utils'

// 日历默认配置信息
const defaultOption = {
  value: null,            // 默认日期（单选）
  startValue: null,       // 默认开始日期（范围）
  endValue: null,         // 默认结束日期（范围）
  min: 0,                 // 日历最小月份
  max: 11,                // 日历最大月份
  dateLabel: '',          // 日期下标（单选）
  startLabel: '',         // 日期下标（范围）
  endLabel: '',           // 日期下标（范围）
  type: 'date',           // 日历类型
  isRange: false,         // 是否是范围选择
  selectRange: null,      // 日期可选最大范围
  format: 'Y-M-D',
  disabledDate() {        // 不可选日期
    return false
  }
}

const DAY_STAMP = 86400000

// 提取日期
const getDateValue = (dateStr) => {
  if (dateStr) {
    let date = getDateFromString(dateStr)
    if (date) {
      date.setHours(0, 0, 0, 0)
      return +date
    }
  }
  return null
}

export default {
  name: 'plDatePopup',
  componentName: 'plDatePopup',
  setup(props, context) {
    const options = Object.assign({}, defaultOption)
    const monthList = reactive([])
    const show = ref(false)
    const dateStartValue = ref(null)
    const dateEndValue = ref(null)
    const dateValue = ref(null)

    // 初始化配置
    const open = (option) => {
      Object.assign(options, defaultOption, option)
      // 分离时间和日期
      if (options.isRange) {
        dateStartValue.value = getDateValue(options.startValue)
        dateEndValue.value = getDateValue(options.endValue)
      } else {
        dateValue.value = getDateValue(options.value)
      }

      createCalendar()
      show.value = true
    }
    // 关闭日历
    const close = () => {
      show.value = false
    }
    // 生成日历
    const createCalendar = () => {
      let { min, max } = options
      let minMonth = Math.min(min, max)
      let maxMonth = Math.max(min, max)

      monthList.length = 0
      for (let i = minMonth; i <= maxMonth; i++) {
        let monthDate = createMonth(i)
        monthList.push(monthDate)
      }
    }
    // 生成月份
    const createMonth = (diff) => {
      let today = new Date()
      today.setDate(1)
      today.setHours(0, 0, 0, 0)
      today.setMonth(today.getMonth() + diff)

      let dateNum = getMonthDays(today.getFullYear(), today.getMonth() + 1)     // 当月天数
      let month = {
        title: getDateString(today, 'Y年m月'),    // 月份标题
        dateArr: []             // 日期数组
      }
      let todayStamp = today.getTime()
      for (let i = 0; i < dateNum; i++) {
        let timeStamp = todayStamp + (i * DAY_STAMP)
        month.dateArr.push({
          label: i + 1,
          timeStamp,
          // 日期状态，禁用、已选择、区间
          get status() {
            let { isRange } = options
            if (dateValue.value === this.timeStamp ||
              dateStartValue.value === this.timeStamp ||
              dateEndValue.value === this.timeStamp) {
              return 'current'
            }
            if (isRange &&
              dateStartValue.value &&
              dateEndValue.value &&
              dateStartValue.value < this.timeStamp &&
              dateEndValue.value > this.timeStamp) {
              return 'active'
            }
            return 'normal'
          },
          // 是否禁用
          get disabled() {
            let { disabledDate, selectRange, isRange } = options

            let disabled = typeof disabledDate === 'function' ? disabledDate.call(options, this.timeStamp) : false
            if (isRange && selectRange > 0) {
              // 超出指定范围的日期
              let daysDiff = (Number(selectRange) || 0) * DAY_STAMP
              if (dateStartValue.value && !dateEndValue.value) {
                return disabled || this.timeStamp > dateStartValue.value + daysDiff || this.timeStamp < dateStartValue.value - daysDiff
              }
            }
            return disabled
          },
          // 日期上标
          supLabel: '', // transHoliday[this.timeStamp]
          // 日期下标
          get subLabel() {
            let { startLabel, endLabel, dateLabel } = options
            return (dateStartValue.value === this.timeStamp && startLabel) ||
              (dateEndValue.value === this.timeStamp && endLabel) ||
              (dateValue.value === this.timeStamp && dateLabel) || ''
          }
        })
      }

      // 开头和结尾的星期补充
      let firstDay = today.getDay()
      let lastDay = ((firstDay + dateNum) % 7) - 1
      for (let i = 0; i < firstDay; i++) {
        month.dateArr.unshift({
          label: ''
        })
      }
      for (let i = 0; i < 6 - lastDay; i++) {
        month.dateArr.push({
          label: ''
        })
      }

      return month
    }
    // 日期点击事件
    const onTapDate = ({ timeStamp, disabled } = {}) => {
      if (!timeStamp || disabled) {
        return false
      }
      let { isRange } = options

      if (isRange) {
        if (dateEndValue.value || !dateStartValue.value) {
          dateStartValue.value = timeStamp
          dateEndValue.value = null
        } else {
          if (timeStamp < dateStartValue.value) {
            dateEndValue.value = dateStartValue.value
            dateStartValue.value = timeStamp
          } else {
            dateEndValue.value = timeStamp
          }
        }
      } else {
        dateValue.value = timeStamp
      }
    }
    // 提交结果
    const submit = () => {
      let { isRange, format } = options
      // 如果选择了禁用日期则不能提交
      if (monthList.some(month => month.dateArr.some(date => date.disabled && /current|active/.test(date.status)))) {
        return false
      }
      // 日期范围没有选择不能提交
      if (isRange && (!dateStartValue.value || !dateEndValue.value)) {
        return false
      }

      let result = isRange ? [getDateString(dateStartValue.value, format), getDateString(dateEndValue.value, format)] : getDateString(dateValue.value, format)

      // 直接唤起的回调
      if (typeof options.callback === 'function') {
        options.callback(result)
      }

      context.emit('submit', result)
      close()
    }

    return {
      show,
      open,
      monthList,
      onTapDate,
      submit
    }
  }
}
</script>

<style lang="less">
@import "../../src/assets/less/mixin.less";

.pl-datetime-popup {
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: var(--datetime-bg);

  &.hidden {
    display: none;
  }

  .top-week {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    .height(32);
    .line-height(32);
    background: var(--week-bg);

    .week-item {
      .font-size(13);
      color: var(--default-text);
      text-align: center;
    }
  }
  .month-wrap {
    width: 100%;
    flex: 1;
    overflow: scroll;

    .month-item {
      .padding-top(25);

      .title-date {
        .font-size(15);
        color: var(--info-text);
        font-weight: 700;
        .margin-bottom(7);
        text-align: center;
      }
      .date-list {
        display: grid;
        grid-template-columns: repeat(7, 1fr);

        .date-item {
          position: relative;
          text-align: center;
          .height(60);
          .line-height(60);
          color: var(--info-text);

          &.current {
            background: var(--datetime-current-bg);
            border-radius: 2px;
            color: var(--datetime-current-text);
          }
          &.active {
            background: var(--datetime-active-bg);
            border-radius: 2px;
          }
          &.disabled {
            color: var(--datetime-disabled-text);
          }
          .date-label {
            .font-size(15);
            font-weight: 700;
          }
          .sup-label,
          .sub-label {
            position: absolute;
            z-index: 0;
            .font-size(12);
            line-height: 1em;
            left: 0;
            right: 0;
          }

          .sup-label {
            .top(5);
          }

          .sub-label {
            .bottom(5);
          }
        }
      }
    }
  }
  .btn-wrap {
    width: 100%;
    .height(60);
    display: flex;
    border-top: 1px solid var(--datetime-button-top-border);

    .btn-submit {
      .width(320);
      .height(44);
      .line-height(44);
      text-align: center;
      .font-size(15);
      font-weight: normal;
      color: var(--datetime-button-text-color);
      margin: auto;
      padding: 0;
      background: var(--datetime-button-bg);
      .border-radius(5);
      border: 0 none;
      outline: 0 none;
    }
  }
}
</style>
