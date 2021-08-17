<template>
  <div class="content">
    <h3>基础用法</h3>
    <pl-datetime placeholder="请选择日期" v-model:value="date" type="date" clearable></pl-datetime>

    <h3>时间选择</h3>
    <pl-datetime label="请选择时间：" v-model:value="time" type="time" @change="onChange" valueFormat="H:I" clearable></pl-datetime>
    <pl-datetime startPlaceholder="开始时间" endPlaceholder="结束时间" v-model:value="timeRange" type="time" @change="onChange" valueFormat="H:I" isRange clearable></pl-datetime>

    <h3>日期选择</h3>
    <pl-datetime label="请选择日期：" labelWidth="8em" placeholder="请选择日期" v-model:value="date" type="date" @change="onChange" clearable></pl-datetime>
    <pl-datetime startPlaceholder="开始日期" endPlaceholder="结束日期" v-model:value="dateRange" type="date" @change="onChange" isRange clearable></pl-datetime>

    <h3>月份选择</h3>
    <pl-datetime label="请选择月份：" v-model:value="month" type="month" @change="onChange" valueFormat="Y-M" clearable></pl-datetime>
    <pl-datetime startPlaceholder="开始月份" endPlaceholder="结束月份" v-model:value="monthRange" type="month" @change="onChange" valueFormat="Y-M" isRange clearable></pl-datetime>

    <h3>自定义显示格式与返回格式</h3>
    <pl-datetime placeholder="请选择日期" v-model:value="date" type="date" @change="onChange" valueFormat="Y-M-D H:I:S" format="Y年M月D日" clearable></pl-datetime>

    <h3>表单禁用</h3>
    <pl-datetime placeholder="请选择日期" v-model:value="date" type="date" @change="onChange" valueFormat="Y-M-D H:I:S" format="Y年M月D日" disabled></pl-datetime>

    <h3>设置日期可选范围</h3>
    <pl-datetime startPlaceholder="开始日期" endPlaceholder="结束日期" :options="dateRangeOption" v-model:value="dateRange" type="date" @change="onChange" valueFormat="Y-M-D" format="Y-M-D" isRange clearable></pl-datetime>
    <pl-datetime startPlaceholder="开始月份" endPlaceholder="结束月份" :options="monthRangeOption" v-model:value="monthRange" type="month" @change="onChange" valueFormat="Y-M" format="Y-M" isRange clearable></pl-datetime>

    <h3>表单验证</h3>
    <pl-datetime label="请选择时间：" placeholder="请选择时间" ref="datetime1" v-model:value="time" type="time" @change="onChange" valueFormat="H:I" :rules="rules1" required clearable></pl-datetime>
    <pl-datetime label="请选择日期：" placeholder="请选择日期" :options="dateOption" v-model:value="date" type="date" @change="onChange" ref="datetime2" :rules="rules1" required clearable></pl-datetime>
    <pl-datetime label="请选择日期范围：" startPlaceholder="开始日期" endPlaceholder="结束日期" :options="dateRangeOption" v-model:value="dateRange" type="date" @change="onChange" ref="datetime3" :rules="rules2" required isRange clearable></pl-datetime>

    <pl-cell :span="[1,1]" gap="1em">
      <pl-button type="success" @click="validate">表单校验</pl-button>
      <pl-button type="success" @click="open">{{popupResult || '打开日历'}}</pl-button>
    </pl-cell>
  </div>
</template>
<script>
import { getCurrentInstance, ref } from 'vue'
export default {
  setup() {
    const app = getCurrentInstance()
    const { $toast, $calendar } = app.appContext.config.globalProperties

    const popupResult = ref('')
    const datetime1 = ref(null)
    const datetime2 = ref(null)
    const datetime3 = ref(null)

    const date = ref('')
    const month = ref('')
    const time = ref('')
    const dateRange = ref([])
    const monthRange = ref([])
    const timeRange = ref([])


    const onChange = (val) => {
      console.log('onChange::', val)
    }
    const validate = async () => {
      try {
        await datetime1.value.validate()
        await datetime2.value.validate()
        await datetime3.value.validate()
        $toast('校验成功')
      } catch (e) {
        $toast('校验失败: ' + e)
      }
    }
    const open = async () => {
      popupResult.value = await $calendar({
        value: '2021-10-20 09:21',
        startValue: '2020-12-1 18:45',
        endValue: '2021-4-30 6:15',
        min: -1,
        max: 11,
        dateLabel: '选中',
        startLabel: '开始',
        endLabel: '结束',
        type: 'date',
        isRange: false,
        format: 'Y-M-D',
        selectRange: 10,
        disabledDate() {
          return false
        }
      })
    }

    return {
      popupResult,
      datetime1,
      datetime2,
      datetime3,
      onChange,
      validate,
      open,
      date,
      month,
      time,
      dateRange,
      monthRange,
      timeRange,
      dateOption: {
        min: -1,
        max: 6,
        dateLabel: '已选',
        format: 'Y-M-D',
        disabledDate(time) {
          return /^(0|6)$/.test(new Date(time).getDay())
        }
      },
      monthOption: {
        min: 0,
        max: 5,
        dateLabel: '已选',
        format: 'Y-M',
        disabledDate(time) {
          return /^(0|11)$/.test(new Date(time).getMonth())
        }
      },
      timeOption: {
        value: '',
        format: 'Y-M-D H:I:S',
        isRange: false
      },
      dateRangeOption: {
        min: -3,
        max: 9,
        startLabel: '入住',
        endLabel: '离店',
        format: 'Y-M-D',
        selectRange: 14,
        disabledDate(time) {
          return time >= 1619798400000 && time <= 1620144000000
        }
      },
      monthRangeOption: {
        format: 'Y-M',
        min: -1,
        max: 5,
        startLabel: '开始',
        endLabel: '结束',
        selectRange: 6,
        disabledDate(time) {
          return new Date(time).getMonth() === 0
        }
      },
      timeRangeOption: {
        min: 7,
        max: 23,
        format: 'H:I'
      },

      rules1: [{ required: true, message: '请选择日期', trigger: 'change' }],
      rules2: [{ required: true, message: '请选择范围', trigger: 'change', type: 'array' }]
    }
  }
}
</script>

<style lang="less" scoped>
.pl-datetime {
  margin-bottom: 0.5rem;
  border-bottom: 1px solid #ddd;
}
</style>
