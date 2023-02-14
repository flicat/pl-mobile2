<template>
  <div class="content">
    <pl-button @click="picker" type="primary">{{result ? getDateString(result, 'Y年M月D日') : '打开日期选择器'}}</pl-button>
  </div>
</template>
<script>
// TODO 值为false的bug
import { getCurrentInstance, ref } from 'vue'
import { getMonthDays, getDateString, getDateFromString, getRangeDate } from '../../src/assets/utils/index.js'

function getDatePickerOption(startDate, endDate, defaultDate) {
  const maxTime = getDateFromString(endDate || new Date())
  const maxYear = maxTime.getFullYear()
  const maxMonth = maxTime.getMonth() + 1
  const maxDate = maxTime.getDate()

  const minTime = getDateFromString(startDate || '1970/1/1')
  const minYear = minTime.getFullYear()
  const minMonth = minTime.getMonth() + 1
  const minDate = minTime.getDate()

  const defaultDataVal = getDateFromString(defaultDate)

  return {
    defaultValue: defaultDataVal ? [defaultDataVal.getFullYear(), defaultDataVal.getMonth() + 1, defaultDataVal.getDate()] : [],
    options: [
      function () {
        return Array.from({ length: maxYear - minYear + 1 }).map((i, index) => ({ label: index + minYear + '年', value: index + minYear }))
      },
      function (year) {
        let min = (!year.value || year.value === minYear) ? minMonth - 1 : 0
        let max = year.value === maxYear ? maxMonth : 12
        return Array.from({ length: max - min }).map((i, index) => ({ label: index + min + 1 + '月', value: index + min + 1 }))
      },
      function (year, month) {
        let min = ((!year.value || year.value === minYear) && (!month.value || month.value === minMonth)) ? minDate : 1
        let max = (year.value === maxYear && month.value === maxMonth) ? maxDate + 1 : getMonthDays(year.value, month.value) + 1
        return Array.from({ length: max - min }).map((i, index) => ({ label: index + min + '日', value: index + min }))
      }
    ],
    prop: {
      label: 'label',
      value: 'value'
    }
  }
}

export default {
  setup() {
    const result = ref(null)
    const app = getCurrentInstance()
    const { $picker } = app.appContext.config.globalProperties

    async function picker() {
      try {
        const date = await $picker({
          title: '请选择',          // 弹框标题
          ...getDatePickerOption(getRangeDate(-500), getRangeDate(500), result.value)
        })
        result.value = date.join('-')
        console.log(result.value)
      } catch (e) {
        console.log(e)
      }
    }

    return {
      getDateString,
      result,
      picker
    }
  }
}
</script>
