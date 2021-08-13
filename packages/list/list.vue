<template>
  <component :is="componentList" :key="componentList"></component>
</template>

<script>
import { h, computed, onUnmounted, Fragment } from 'vue'

export default {
  name: 'plListSlot',
  componentName: 'plListSlot',
  props: {
    splitSize: {
      type: Number,
      default: 0
    }
  },
  setup(props, { slots }) {
    const nodeMap = new Map()
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ intersectionRatio, target }) => {
        let vNode = nodeMap.get(target)
        if (!vNode) {
          return false
        }
        if (intersectionRatio > 0) {
          vNode.toggleShow(true)
        } else {
          vNode.toggleShow(false)
        }
      });
    }, {
      threshold: 0
    })

    const createBlock = (nodeList) => {
      const children = [...nodeList]
      const list = []
      while (children.length) {
        let renderList = children.splice(0, props.splitSize)
        list.push(h({
          data() {
            return {
              renderList,
              isShow: true,
              clientHeight: 'auto',
              timer: null
            }
          },
          render() {
            return h('div', {
              style: {
                height: this.clientHeight,
                overflow: 'hidden'
              }
            }, this.isShow ? this.renderList.map(vNode => h(vNode)) : null)
          },
          mounted() {
            observer.observe(this.$el)
            nodeMap.set(this.$el, this)
            this.clientHeight = this.$el.scrollHeight + 'px'
          },
          beforeUnmount() {
            observer.unobserve(this.$el)
            nodeMap.delete(this.$el)
          },
          methods: {
            toggleShow(val) {
              clearTimeout(this.timer)
              this.timer = setTimeout(() => {
                this.isShow = !!val
              }, 100)
            }
          }
        }))
      }
      return list
    }

    const componentList = computed(() => {
      let listWrap = slots.default()[0].children.find(item => Array.isArray(item.children))
      if (listWrap) {
        return h(Fragment, createBlock(listWrap.children))
      } else {
        return slots.default
      }
    })

    onUnmounted(() => {
      observer.disconnect()
      nodeMap.clear()
    })

    return {
      componentList
    }
  }
}
</script>
