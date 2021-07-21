<template>
  <div class="content">
    <pl-button @click="alert">弹窗</pl-button>
    <pl-button @click="confirm">确认弹窗</pl-button>
    <pl-button @click="toast">消息提醒</pl-button>
    <pl-button @click="dialog1">模态框1</pl-button>
    <pl-button @click="dialog2">模态框2</pl-button>
  </div>
</template>
<script>
import { getCurrentInstance } from 'vue'
import swipe from './swipe.vue'

export default {
  setup() {
    const app = getCurrentInstance()
    const { $alert, $confirm, $toast } = app.appContext.config.globalProperties

    function alert() {
      $alert({
        title: '提示',
        message: '这个一个弹窗！',
        buttonText: '确定',
        action: () => {
          // 确定
          $toast('确定')
        }
      })
    }
    function confirm() {
      $confirm({
        title: '提示',
        message: '这个一个确认弹窗！',
        submitText: '确定',
        cancelText: '取消',
        submit: () => {
          // 确定
          $toast('确定')
        },
        cancel: () => {
          // 取消
          $toast('取消')
        }
      })
    }
    async function dialog1() {
      await $alert({
        component: swipe,
        componentProps: {
          isMsg: true
        },
        submitText: '确定',
        cancelText: '取消'
      })
      $toast('确定')
    }
    async function dialog2() {
      try {
        await $confirm({
          //          title: '提示',
          component: swipe,
          componentProps: {
            isMsg: true
          },
          //          message: '这个一个确认弹窗！',
          submitText: '确定',
          cancelText: '取消'
        })
        $toast('确定')
      } catch (e) {
        $toast('取消')
      }
    }
    async function toast() {
      await $toast('消息提醒1', 3000)    // 提示信息， 持续时间（可选，默认3000毫秒）
      await $toast('消息提醒2', 3000)    // 提示信息， 持续时间（可选，默认3000毫秒）
    }

    return {
      alert,
      confirm,
      dialog1,
      dialog2,
      toast
    }
  }
}
</script>

<style lang="less" scoped>
.pl-button {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
