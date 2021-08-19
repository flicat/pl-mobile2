<template>
  <div class="pl-step" :class="['pl-step--' + direction]">
    <div class="pl-step-circle">
      <slot name="icon">
        <iconCicleChoose v-if="isActive" class="pl-step-item-icon" :style="{color: currentColor}"></iconCicleChoose>
        <i class="icon-default" v-else></i>
      </slot>
      <div v-if="!isLast" class="pl-step-line"></div>
    </div>
    <div class="pl-step-title" :style="{color: isActive ? currentColor : '#9898B6'}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { inject, onMounted, onUnmounted, getCurrentInstance, computed } from 'vue'
import iconCicleChoose from '../../src/assets/images/icon-cicle-choose.svg'

// step-item
export default {
  name: 'plStepItem',
  componentName: 'plStepItem',
  components: {
    iconCicleChoose
  },
  setup() {
    const app = getCurrentInstance()
    const active = inject('active')
    const items = inject('items')
    const direction = inject('direction')
    const activeColor = inject('activeColor')
    const updateItems = inject('updateItems')
    const removeItem = inject('removeItem')

    const isLast = computed(() => {
      return items.indexOf(app) === items.length - 1
    })
    const isActive = computed(() => {
      return items.indexOf(app) === active.value
    })
    const currentColor = computed(() => {
      return activeColor.value || 'currentColor'
    })

    onMounted(() => {
      updateItems(app)
    })
    onUnmounted(() => {
      removeItem(app);
    })

    return {
      direction,
      isActive,
      currentColor,
      isLast
    }
  }
}
</script>

<style lang="less">
@import "../../src/assets/less/mixin.less";
.pl-step {
  position: relative;

  * {
    box-sizing: border-box;
  }

  .pl-step-circle {
    display: flex;
    position: absolute;
  }
  .icon-default {
    display: inline-block;
  }

  &--vertical {
    padding-left: 2em;
    padding-bottom: 1em;

    .pl-step-title {
      text-align: left;
    }
    .pl-step-circle {
      flex-direction: column;
      width: 1.2em;
      left: 0;
      top: 0;
      bottom: 0;

      .pl-step-line {
        width: 0.6em;
        flex: 1;
        margin-top: 0.2em;
        border-right: 1px solid var(--steps-line);
      }
      .icon-default {
        width: 1em;
        height: 1em;
        border: 0.3em solid transparent;
        border-radius: 50%;
        background-color: var(--steps-icon);
        background-clip: content-box;
      }
    }
  }
  &--horizontal {
    flex: 1;
    padding-bottom: 2em;

    .pl-step-title {
      text-align: center;
    }
    .pl-step-circle {
      flex-direction: row;
      height: 1.2em;
      left: 0;
      bottom: 0;
      right: 0;
      transform: translateX(calc(50% - 0.6em));

      .pl-step-line {
        height: 0.6em;
        flex: 1;
        margin-left: 0.2em;
        border-bottom: 1px solid var(--steps-line);
      }
      .icon-default {
        width: 0.5em;
        height: 0.5em;
        border-top: 1px solid var(--steps-icon);
        border-right: 1px solid var(--steps-icon);
        transform: rotate(45deg);
        transform-origin: -50% 50%;
      }
    }
  }
}
</style>