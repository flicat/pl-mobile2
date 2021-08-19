<template>
  <div class="content">
    <div class="title">
      <h4>滚动列表<small>上拉加载</small><small>下拉刷新</small></h4>
    </div>
    <div class="list">
      <pl-list class="pl-list" :autoLoad="50" :splitSize="10" :loading="loading" :finished="finished" @refresh="reload" @load="load" refreshText="松开刷新" loadingText="加载中..." finishedText="加载完成">
        <div v-for="item in dataList" :key="item.value" class="card-item">
          <p>这是标题{{item.label}}</p>
          <p>这是选项卡副标题</p>
          <p>这是选项卡内容，this is content.</p>
        </div>
        <!-- <template v-slot:top-loading>努力重刷中...</template>
        <template v-slot:top-refresh>放开重刷</template>
        <template v-slot:bottom-loading>努力加载中...</template>
        <template v-slot:bottom-finished>全部加载完啦</template> -->
      </pl-list>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const loading = ref(false)
    const finished = ref(false)
    const dataList = ref([])
    let page = 1
    let size = 10
    let totalSize = 50

    const reload = () => {
      page = 1
      finished.value = false
      getData()
    }
    const load = () => {
      if (finished.value) {
        return false
      }

      page++
      getData()
    }
    const getData = async () => {
      loading.value = true

      let data = await new Promise((resolve, reject) => {
        let result = []
        for (let i = 1; i <= size; i++) {
          let index = i + size * (page - 1)
          result.push({ label: index, value: index })
        }
        setTimeout(() => {
          resolve(result)
        }, 1000)
      })

      if (page === 1) {
        dataList.value = data
      } else {
        dataList.value = dataList.value.concat(data)
      }
      finished.value = dataList.value.length >= totalSize

      loading.value = false
    }

    reload()

    return {
      loading,
      finished,
      reload,
      load,
      dataList
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .title h4 {
    color: #333;
    font-size: 1.2rem;
    margin: 0;
    line-height: normal;
    padding-bottom: 1em;
    small {
      margin-left: 1em;
      color: #666;
    }
  }
  .list {
    flex: 1;
  }
  .card-item {
    border: 1px solid #aaa;
    border-radius: 0.3rem;
    background-color: #fafafa;
    padding: 1rem;
    margin-bottom: 1rem;
    p {
      margin: 0;
      &:nth-child(1) {
        font-weight: 700;
        font-size: 1.5rem;
      }
      &:nth-child(2) {
        line-height: 1.5em;
      }
      &:nth-child(3) {
        font-style: italic;
        color: #666;
      }
    }
  }
}
</style>
