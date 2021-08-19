<template>
  <div class="content">
    <h3>基础用法</h3>
    <pl-input placeholder="姓名、手机、电话" type="text" v-model:value="value" size="normal" clearable />

    <h3>尺寸大小</h3>
    <pl-input label="请输入：" placeholder="姓名、手机、电话" type="text" v-model:value="value" size="small" />
    <pl-input label="请输入：" placeholder="姓名、手机、电话" type="text" v-model:value="value" size="normal" />
    <pl-input label="请输入：" placeholder="姓名、手机、电话" type="text" v-model:value="value" size="large" />

    <h3>禁用</h3>
    <pl-input label="请输入：" placeholder="姓名、手机、电话" type="text" v-model:value="value" disabled />
    <pl-input label="请输入：" placeholder="姓名、手机、电话" type="textarea" rows="5" v-model:value="value" disabled />

    <h3>标题折行</h3>
    <pl-input label="请输入请输入请输入请输入请输入请输入请输入请输入请输入请输入：" placeholder="姓名、手机、电话" type="text" v-model:value="value" required wrap clearable />
    <pl-input label="请输入：" placeholder="姓名、手机、电话" type="textarea" rows="5" v-model:value="value" required wrap clearable />

    <h3>图标填充</h3>
    <pl-input label="请输入：" placeholder="姓名、手机、电话" type="text" v-model:value="value" required clearable>
      <template v-slot:prepend>
        <pl-icon name="icon-dingwei" fill="#999"></pl-icon>
      </template>
      <template v-slot:append>
        <pl-icon name="icon-people_fill" fill="#999"></pl-icon>
      </template>
    </pl-input>
    <pl-input label="请输入：" placeholder="姓名、手机、电话" type="textarea" rows="5" v-model:value="value" required wrap clearable>
      <template v-slot:prepend>
        <pl-icon name="icon-dingwei" fill="#999"></pl-icon>
      </template>
      <template v-slot:append>
        <pl-icon name="icon-people_fill" fill="#999"></pl-icon>
      </template>
    </pl-input>

    <h3>表单校验</h3>
    <pl-input label="请输入：" placeholder="姓名、手机、电话" type="text" v-model:value="value" :rules="rules" ref="input" required clearable />

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
    const value = ref('')
    const input = ref(null)
    const { $toast } = app.appContext.config.globalProperties

    const validate = async () => {
      try {
        await input.value.validate()
        $toast('校验成功！')
      } catch (e) {
        $toast('校验失败: ' + e)
      }
    }

    return {
      value,
      input,
      validate,
      rules: [{ required: true, message: '请输入', trigger: 'blur' }]
    }
  }
}
</script>

<style lang="less" scoped>
.pl-input {
  :deep(.pl-input-cell) {
    border-bottom: 1px solid #ddd;
  }
}
</style>
