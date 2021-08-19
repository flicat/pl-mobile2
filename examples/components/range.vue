<template>
  <div class="content">
    <h3>基础用法</h3>
    <pl-range v-model:value="value" :min="0" :max="100" :step="1"></pl-range>
    <pl-range v-model:value="value" :min="0" :max="100" :step="1" label="请选择："></pl-range>

    <h3>尺寸大小</h3>
    <pl-range v-model:value="value" :min="0" :max="100" :step="1" label="请选择：" size="small"></pl-range>
    <pl-range v-model:value="value" :min="0" :max="100" :step="1" label="请选择：" size="normal"></pl-range>
    <pl-range v-model:value="value" :min="0" :max="100" :step="1" label="请选择：" size="large"></pl-range>

    <h3>标题换行</h3>
    <pl-range v-model:value="value" :min="0" :max="100" :step="1" label="请选择：" wrap></pl-range>

    <h3>禁用</h3>
    <pl-range v-model:value="value" :min="0" :max="100" :step="1" label="请选择：" disabled></pl-range>

    <h3>图标填充</h3>
    <pl-range v-model:value="value" :min="0" :max="100" :step="1" label="请选择：" required>
      <template v-slot:prepend>
        <pl-icon name="icon-dingwei" fill="#999"></pl-icon>
      </template>
      <template v-slot:append>{{value}}%</template>
    </pl-range>
    <pl-range v-model:value="value" :min="0" :max="100" :step="1" label="请选择：" required wrap>
      <template v-slot:prepend>
        <pl-icon name="icon-dingwei" fill="#999"></pl-icon>
      </template>
      <template v-slot:append>{{value}}%</template>
    </pl-range>

    <h3>自定义滑块</h3>
    <pl-range v-model:value="value" :min="0" :max="100" :step="1" label="请选择：" required>
      <template v-slot:thumb><span class="thumb">{{value}}%</span></template>
    </pl-range>

    <h3>表单校验</h3>
    <pl-range v-model:value="value" :min="0" :max="100" :step="1" label="请选择：" @change="onChange" :rules="rules" ref="range1" required></pl-range>
    <pl-range v-model:value="value" :min="0" :max="100" :step="1" label="请选择：" @change="onChange" :rules="rules" ref="range2" required wrap></pl-range>

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
    const value = ref(null)
    const range1 = ref(null)
    const range2 = ref(null)
    const { $toast } = app.appContext.config.globalProperties

    const validate = async () => {
      try {
        await range1.value.validate()
        await range2.value.validate()
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
      range1,
      range2,
      validate,
      onChange,
      rules: [{ required: true, message: '请选择', trigger: 'change', type: 'number' }],
    }
  }
}
</script>

<style lang="less" scoped>
.thumb {
  padding: 0.2em 0.5em;
  border-radius: 0.5rem;
  text-align: center;
  background-color: #5fd3ff;
  color: #fff;
  transform: translate(-50%, -50%);
}
</style>
