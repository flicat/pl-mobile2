<template>
  <div class="content">
    <pl-form labelWidth="5em" ref="form">
      <pl-datetime :rules="rules.datetime" label="日期" placeholder="请选择日期" v-model:value="dateValue" type="date"></pl-datetime>
      <pl-input v-model:value="value" :rules="rules.input" required label="名字：" />
      <pl-select :options="options" :rules="rules.select" v-model:value="selectValue" label="请选择：" required></pl-select>
      <pl-range v-model:value="rangeValue" :rules="rules.range" :min="0" :max="100" :step="1" label="请选择：" labelWidth="5em" required>
        <template v-slot:prepend>0%</template>
        <template v-slot:append>{{rangeValue}}%</template>
      </pl-range>
      <pl-radio v-model:value="radioValue" :options="options" :rules="rules.radio" label="单选：" required></pl-radio>
      <pl-checkbox v-model:value="checkboxValue" :options="options" :rules="rules.checkbox" required label="多选："></pl-checkbox>
      <pl-cell :span="[1, 1]" gap="1em">
        <pl-button @click="reset" type="primary">清除验证消息</pl-button>
        <pl-button @click="submit" type="primary">提交</pl-button>
      </pl-cell>
    </pl-form>
  </div>
</template>
<script>
import { ref, getCurrentInstance } from 'vue'

export default {
  setup() {
    const app = getCurrentInstance()
    const { $toast } = app.appContext.config.globalProperties

    const form = ref(null)

    const value = ref(null)
    const dateValue = ref('')
    const selectValue = ref('')
    const radioValue = ref('')
    const rangeValue = ref(null)
    const checkboxValue = ref([])
    const options = [
      { label: '选项1', value: 1 },
      { label: '选项2', value: 2 },
      { label: '选项3', value: 3 }
    ]
    const rules = {
      datetime: [{ required: true, message: '请输入', trigger: 'blur' }],
      input: [{ required: true, message: '请输入', trigger: 'blur' }],
      select: [{ required: true, message: '请输入', trigger: 'change' }],
      range: [{ required: true, message: '请输入', trigger: 'change' }],
      checkbox: [{ required: true, message: '请输入', trigger: 'change' }],
      radio: [{ required: true, message: '请输入', trigger: 'change' }]
    }

    const reset = () => {
      form.value.clearValidate()
    }
    const submit = () => {
      console.log('dateValue: ', dateValue.value)
      console.log('value: ', value.value)
      console.log('selectValue: ', selectValue.value)
      console.log('rangeValue: ', rangeValue.value)
      console.log('radioValue: ', radioValue.value)
      console.log('checkboxValue: ', checkboxValue.value)

      form.value.validate().then(e => {
        $toast('校验成功')
      }).catch(e => {
        console.log(e)
        $toast('校验失败')
      })
    }

    return {
      form,
      value,
      dateValue,
      rangeValue,
      checkboxValue,
      selectValue,
      radioValue,
      options,
      rules,
      reset,
      submit
    }
  }
}
</script>

<style lang="less" scoped>
.pl-datetime,
.pl-input,
.pl-select,
.pl-range,
.pl-radio {
  border-bottom: 1px solid #ddd;
}
.pl-cell {
  margin-top: 1rem;
}
</style>
