<template>
  <div class="content">
    <h3>基础用法</h3>
    <pl-select v-model:value="value1" :options="data"></pl-select>
    <pl-select v-model:value="value2" :options="data" multiple></pl-select>

    <h3>尺寸选择</h3>
    <pl-select placeholder="请选择选项" v-model:value="value1" :options="data" size="large" clearable></pl-select>
    <pl-select placeholder="请选择选项" v-model:value="value2" :options="data" size="small" multiple clearable></pl-select>

    <h3>禁用</h3>
    <pl-select v-model:value="value1" :options="data" disabled></pl-select>

    <h3>折行显示</h3>
    <pl-select label="请选择请选择请选择请选择请选择请选择请选择请选择请选择：" placeholder="请选择选项" v-model:value="value1" :options="data" clearable wrap></pl-select>
    <pl-select label="请选择：" placeholder="请选择选项" v-model:value="value2" :options="data" multiple clearable wrap required></pl-select>

    <h3>自定义选项</h3>
    <pl-select label="请选择：" placeholder="请选择" v-model:value="value1" :options="data" clearable required>
      <template v-slot="scope">
        <span>{{scope.item.label}}-{{scope.item.value}}</span>
      </template>
    </pl-select>

    <h3>前后图标</h3>
    <pl-select label="请选择：" placeholder="请选择" v-model:value="value1" :options="data" clearable required>
      <template v-slot:prepend>
        <pl-icon name="icon-dingwei" fill="#999"></pl-icon>
      </template>
      <template v-slot:append>
        <pl-icon name="icon-people_fill" fill="#999"></pl-icon>
      </template>
    </pl-select>

    <h3>表单校验</h3>
    <pl-select label="请选择：" v-model:value="value1" :options="data" @change="change" :rules="rules1" ref="select1" clearable></pl-select>
    <pl-select label="请选择：" placeholder="请选择选项" v-model:value="value2" :options="data" @change="change2" :rules="rules2" ref="select2" multiple clearable wrap required></pl-select>

    <br /><br />
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
    const value1 = ref(null)
    const value2 = ref([])
    const select1 = ref(null)
    const select2 = ref(null)
    const { $toast } = app.appContext.config.globalProperties

    const validate = async () => {
      try {
        await select1.value.validate()
        await select2.value.validate()
        $toast('校验成功！')
      } catch (e) {
        $toast('校验失败: ' + e)
      }
    }
    const change = () => {
      console.log('change::', value1.value)
    }
    const change2 = () => {
      console.log('change::', value2.value)
    }

    return {
      value1,
      value2,
      select1,
      select2,
      validate,
      change,
      change2,
      rules1: [{ required: true, message: '请选择', trigger: 'change' }],
      rules2: [{ required: true, message: '请选择', trigger: 'change' }],
      data: [
        { label: '选项1', value: 1, disabled: false },
        { label: '选项2', value: 2, disabled: false },
        { label: '选项3', value: 3, disabled: true },
        { label: '选项4', value: 4, disabled: false },
        { label: '选项5', value: 5, disabled: false },
        { label: '选项6', value: 6, disabled: false }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  :deep(.pl-select) {
    border-bottom: 1px solid #eee;
  }
}
</style>
