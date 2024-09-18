<template>
  <div class="pl-tab-item" v-show="active">
    <slot></slot>
  </div>
</template>
<script>
import { computed, getCurrentInstance, inject, onMounted, onUnmounted } from 'vue';
export default {
  name: 'plTabItem',
  componentName: 'plTabItem',
  props: {
    label: String,
    name: [String, Number],
    disabled: Boolean,
    index: Number
  },
  setup(props) {
    const app = getCurrentInstance()
    const currentName = inject('currentName', '')
    const updateItems = inject('updateTabItems', () => { })
    const removeItem = inject('removeTabItem', () => { })

    const active = computed(() => {
      return currentName.value === props.name;
    })

    onMounted(() => {
      updateItems(app)
    })
    onUnmounted(() => {
      removeItem(app)
    })

    return {
      active
    }
  }
};
</script>
