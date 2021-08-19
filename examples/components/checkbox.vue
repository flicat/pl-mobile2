<template>
  <div class="content">
    <h3>基础用法</h3>
    <pl-checkbox v-model:value="value" :options="data" />
    <pl-checkbox v-model:value="value" :options="data" button />
    <pl-checkbox v-model:value="value" :options="data" label="请选择：" button />

    <h3>尺寸大小</h3>
    <pl-checkbox v-model:value="value" :options="data" size="small" />
    <pl-checkbox v-model:value="value" :options="data" size="normal" />
    <pl-checkbox v-model:value="value" :options="data" size="large" />

    <h3>显示label</h3>
    <pl-checkbox v-model:value="value" :options="data" label="请选择：" />
    <pl-checkbox v-model:value="value" :options="data" label="请选择：" wrap />

    <h3>禁用</h3>
    <pl-checkbox v-model:value="value" :options="data" label="请选择：" disabled />

    <h3>前置图标</h3>
    <pl-checkbox v-model:value="value" :options="data" :rules="rules" label="请选择：">
      <template v-slot:prepend>
        <pl-icon name="icon-dingwei" fill="#999"></pl-icon>
      </template>
    </pl-checkbox>
    <pl-checkbox v-model:value="value" :options="data" :rules="rules" label="请选择：" wrap required>
      <template v-slot:prepend>
        <pl-icon name="icon-dingwei" fill="#999"></pl-icon>
      </template>
    </pl-checkbox>

    <h3>竖排样式</h3>
    <pl-checkbox v-model:value="value" :options="data" :rules="rules" required vertical />
    <pl-checkbox v-model:value="value" :options="data" :rules="rules" label="请选择：" required vertical />

    <h3>开关按钮</h3>
    <pl-checkbox v-model:value="boolValue" :trueValue="true" :falseValue="false">开关</pl-checkbox>
    <pl-checkbox v-model:value="boolValue" :trueValue="true" :falseValue="false" button>开关</pl-checkbox>
    <pl-checkbox v-model:value="boolValue" :trueValue="true" :falseValue="false" label="请选择："></pl-checkbox>
    <pl-checkbox v-model:value="boolValue" :trueValue="true" :falseValue="false" label="请选择：" button></pl-checkbox>

    <h3>自定义子项</h3>
    <pl-checkbox v-model:value="value" :options="data">
      <template v-slot="scope">{{scope.item.label}} - {{scope.item.value}}</template>
    </pl-checkbox>

    <h3>表单校验</h3>
    <pl-checkbox @change="onChange" v-model:value="value" :options="data" :rules="rules" label="请选择：" ref="box" required />

    <pl-cell :span="[1]">
      <pl-button type="success" @click="validate">表单校验</pl-button>
    </pl-cell>
  </div>
</template>
<script>
import { getCurrentInstance, ref } from 'vue'

export default {
  setup() {
    const app = getCurrentInstance()
    const box = ref(null)
    const boolValue = ref(true)
    const value = ref([])

    const { $toast } = app.appContext.config.globalProperties

    const onChange = () => {
      console.log('onChange::', value.value)
    }
    const validate = async () => {
      try {
        await box.value.validate()
        $toast('校验成功！')
      } catch (e) {
        $toast('校验失败: ' + e)
      }
    }

    return {
      box,
      boolValue,
      value,
      onChange,
      validate,
      data: [
        { label: '选项1', value: 1, disabled: false },
        { label: '选项2', value: 2, disabled: true },
        { label: '选项3', value: 3, disabled: false }
      ],
      rules: [{ required: true, message: '请选择', trigger: 'change', type: 'array' }]
    }
  }
}
</script>

<style lang="less" scoped>
.pl-checkbox {
  border-bottom: 1px solid #ddd;
}
</style>
