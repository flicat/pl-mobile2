<template>
  <div class="content">
    <pl-button @click="picker" type="primary">{{result.length ? getDateString(result.join('-'), 'Y年M月D日') : '打开日期选择器'}}</pl-button>
  </div>
</template>
<script>
import { getCurrentInstance, ref } from 'vue'
import { getMonthDays, getDateString } from '../../src/assets/utils/index.js'
export default {
  setup() {
    const result = ref([])
    const app = getCurrentInstance()
    const { $picker } = app.appContext.config.globalProperties

    async function picker() {
      try {
        result.value = await $picker({
          title: '请选择',          // 弹框标题
          defaultValue: result.value,   // 默认值
          // 弹框选项列表
          options: [
            function () {
              return new Array(20).fill('').map((i, index) => ({ label: index + 1990 + '年', value: index + 1990 }))
            },
            function () {
              return new Array(12).fill('').map((i, index) => ({ label: index + 1 + '月', value: index + 1 }))
            },
            function (year, month) {
              return new Array(getMonthDays(year, month)).fill('').map((i, index) => ({ label: index + 1 + '日', value: index + 1 }))
            }
          ],
          // 弹框取值key
          prop: {
            label: 'label',
            value: 'value',
            children: 'children'
          }
        })
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
