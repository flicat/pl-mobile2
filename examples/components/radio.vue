<template>
  <div class="content">
    <h3>基础用法</h3>
    <pl-radio v-model:value="value" :options="data"></pl-radio>
    <pl-radio v-model:value="value" :options="data" button></pl-radio>

    <h3>尺寸大小</h3>
    <pl-radio v-model:value="value" :options="data" size="small"></pl-radio>
    <pl-radio v-model:value="value" :options="data" size="normal"></pl-radio>
    <pl-radio v-model:value="value" :options="data" size="large"></pl-radio>

    <h3>显示label</h3>
    <pl-radio v-model:value="value" :options="data" label="请选择："></pl-radio>

    <h3>禁用</h3>
    <pl-radio v-model:value="value" :options="data" label="请选择：" disabled></pl-radio>
    <pl-radio v-model:value="value" :options="data" label="请选择：" button disabled></pl-radio>

    <h3>标题折行显示</h3>
    <pl-radio v-model:value="value" :options="data" label="请选择请选择请选择请选择请选择请选择：" :rules="rules" wrap></pl-radio>

    <h3>竖排样式</h3>
    <pl-radio v-model:value="value" :options="data" label="请选择：" :rules="rules" vertical></pl-radio>

    <h3>前置图标</h3>
    <pl-radio v-model:value="value" :options="data" label="请选择：" wrap required>
      <template v-slot:prepend>
        <pl-icon name="icon-dingwei" fill="#999"></pl-icon>
      </template>
    </pl-radio>
    <pl-radio v-model:value="value" :options="data" label="请选择：" required>
      <template v-slot:prepend>
        <pl-icon name="icon-dingwei" fill="#999"></pl-icon>
      </template>
    </pl-radio>

    <h3>自定义子节点</h3>
    <pl-radio v-model:value="value" :options="data" label="单选：" labelWidth="4em">
      <template v-slot="scope">{{scope.item.label}} - {{scope.item.value}}</template>
    </pl-radio>

    <h3>表单校验</h3>
    <pl-radio v-model:value="value" :options="data" label="请选择：" :rules="rules" ref="radio" @change="onChange" required></pl-radio>

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
    const { $toast } = app.appContext.config.globalProperties

    const value = ref(null)
    const radio = ref(null)

    const validate = async () => {
      try {
        await radio.value.validate()
        $toast('校验成功！')
      } catch (e) {
        $toast('校验失败: ' + e)
      }
    }
    const onChange = () => {
      console.log('onChange::', value.value)
    }

    return {
      value,
      radio,
      validate,
      onChange,
      data: [
        { label: '选项1', value: 1, disabled: false },
        { label: '选项2', value: 2, disabled: true },
        { label: '选项3', value: 3, disabled: false }
      ],
      rules: [{ required: true, message: '请选择', trigger: 'change' }]
    }
  }
}
</script>

<style lang="less" scoped>
.pl-radio {
  border-bottom: 1px dotted #ddd;
}
</style>
