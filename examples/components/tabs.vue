<template>
  <div class="content">
    <h3>基础用法</h3>
    <pl-tabs v-model:value="active" type="card" @change="onChange">
      <pl-tab-item v-for="item in getTabs()" :name="item.name" :disabled="item.disabled" :label="item.label" :key="item.name"><strong>{{active}}</strong>
        <div>这里是{{item.label}}</div>
      </pl-tab-item>
    </pl-tabs>
    <pl-tabs v-model:value="active" type="border-card" @change="onChange">
      <pl-tab-item v-for="item in getTabs()" :name="item.name" :disabled="item.disabled" :label="item.label" :key="item.name"><strong>{{active}}</strong>
        <div>这里是{{item.label}}</div>
      </pl-tab-item>
    </pl-tabs>
    <pl-tabs v-model:value="active" type="button" @change="onChange">
      <pl-tab-item v-for="item in getTabs()" :name="item.name" :disabled="item.disabled" :label="item.label" :key="item.name"><strong>{{active}}</strong>
        <div>这里是{{item.label}}</div>
      </pl-tab-item>
    </pl-tabs>
    <pl-tabs v-model:value="active" type="card" @change="onChange">
      <pl-tab-item v-for="item in getTabs(10)" :name="item.name" :disabled="item.disabled" :label="item.label" :key="item.name"><strong>{{active}}</strong>
        <div>这里是{{item.label}}</div>
      </pl-tab-item>
    </pl-tabs>

    <h3>选项卡所在位置</h3>
    <pl-tabs v-model:value="active" type="card" position="top" @change="onChange">
      <pl-tab-item v-for="item in getTabs()" :name="item.name" :disabled="item.disabled" :label="item.label" :key="item.name"><strong>{{active}}</strong>
        <div>这里是{{item.label}}</div>
      </pl-tab-item>
    </pl-tabs>

    <pl-tabs v-model:value="active" type="button" position="right" @change="onChange">
      <pl-tab-item v-for="item in getTabs()" :name="item.name" :disabled="item.disabled" :label="item.label" :key="item.name"><strong>{{active}}</strong>
        <div>这里是{{item.label}}</div>
      </pl-tab-item>
    </pl-tabs>

    <pl-tabs v-model:value="active" type="border-card" position="bottom" @change="onChange">
      <pl-tab-item v-for="item in getTabs()" :name="item.name" :disabled="item.disabled" :label="item.label" :key="item.name"><strong>{{active}}</strong>
        <div>这里是{{item.label}}</div>
      </pl-tab-item>
    </pl-tabs>

    <pl-tabs v-model:value="active" type="card" position="left" @change="onChange">
      <pl-tab-item v-for="item in getTabs()" :name="item.name" :disabled="item.disabled" :label="item.label" :key="item.name"><strong>{{active}}</strong>
        <div>这里是{{item.label}}</div>
      </pl-tab-item>
    </pl-tabs>

    <h3>自定义标题</h3>
    <pl-tabs v-model:value="active" type="card">
      <pl-tab-item v-for="item in getTabs(10)" :name="item.name" :disabled="item.disabled" :key="item.name">
        <template v-slot:title>--{{item.label}}--</template>
        <strong>{{active}}</strong>
        <div>这里是{{item.label}}</div>
      </pl-tab-item>
    </pl-tabs>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const active = ref('tab8')

    const getTabs = (length = 3) => {
      let tabs = []
      for (let i = 0; i < length; i++) {
        tabs.push({ label: '选项' + (i + 1), name: 'tab' + (i + 1) })
      }
      return tabs
    }
    const onChange = () => {
      console.log('onChange::', active.value)
    }

    return {
      active,
      getTabs,
      onChange
    }
  }
}
</script>

<style lang="less" scoped>
.pl-tabs {
  margin-bottom: 50px;
  outline: dashed 1px #ddecec;
}
</style>
