<template>
  <div v-bind="$attrs" :class="['pl-cell', 'pl-cell-' + direction]" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
import { is } from '../../src/assets/utils'
import { computed } from 'vue'

export default {
  name: 'plCell',
  componentName: 'plCell',
  props: {
    direction: {          // 排列方式  column / row
      type: String,
      default: 'row'
    },
    span: Array,
    gap: String,
    justifyItems: {
      type: String,      // 横向排列方式：normal / baseline / stretch / start / end / center / flex-start / flex-end / left / right / self-start / self-end / revert / legacy
      default: 'normal'
    },
    alignItems: {
      type: String,      // 纵向排列方式：normal / baseline / flex-start / flex-end / start / end / center / self-start / self-end / stretch / baseline
      default: 'center'
    },
    justifyContent: {
      type: String,      // 横向排列方式：normal / left / right / stretch / start / end / center / flex-start / flex-end / space-between / space-around / space-evenly / revert
      default: 'normal'
    },
    alignContent: {
      type: String,      // 纵向排列方式：normal / baseline / stretch / start / end / center / flex-start / flex-end / space-between / space-around / space-evenly / revert
      default: 'normal'
    }
  },
  setup(props) {
    const templates = computed(() => {
      if (props.span && props.span.length) {
        return props.span.filter(item => item && (is(item, 'string') || is(item, 'number'))).map(item => {
          if (is(item, 'number')) {
            return item + 'fr'
          } else {
            return item
          }
        }).join(' ')
      }
      return null
    })
    const rowStyle = computed(() => {
      return {
        ...(templates.value ? { [props.direction === 'row' ? 'grid-template-columns' : 'grid-template-rows']: templates.value } : null),
        ...(props.gap ? { [props.direction === 'row' ? 'grid-column-gap' : 'grid-row-gap']: props.gap } : null),
        ...(props.justifyItems ? { 'justify-items': props.justifyItems } : null),
        ...(props.alignItems ? { 'align-items': props.alignItems } : null),
        ...(props.justifyContent ? { 'justify-content': props.justifyContent } : null),
        ...(props.alignContent ? { 'align-content': props.alignContent } : null)
      }
    })

    return {
      rowStyle
    }
  }
}
</script>

<style lang="less">
.pl-cell {
  display: grid;
  line-height: normal;
  box-sizing: border-box;
}
</style>
