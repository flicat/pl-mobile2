<template>
  <div class="pl-step-item" :class="['pl-step--' + direction, isActive && 'pl-step--active']" :style="{color: isActive ? activeColor : inactiveColor}">
    <div class="pl-step-circle">
      <div class="pl-step-icon">
        <slot name="icon">
          <iconCicleChoose v-if="isActive" class="pl-step-item-icon"></iconCicleChoose>
          <i class="icon-default" v-else></i>
        </slot>
      </div>

      <div v-if="!isLast" class="pl-step-line"></div>
    </div>
    <div class="pl-step-title">
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
    const activeColor = inject('activeColor', 'currentColor')
    const inactiveColor = inject('inactiveColor', 'currentColor')
    const updateItems = inject('updateItems')
    const removeItem = inject('removeItem')

    const isLast = computed(() => {
      return items.indexOf(app) === items.length - 1
    })
    const isActive = computed(() => {
      return items.indexOf(app) === active.value
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
      activeColor,
      inactiveColor,
      isLast
    }
  }
}
</script>

<style lang="less">
@import "../../src/assets/less/mixin.less";
.pl-step {
  &-item {
    display: flex;
    flex: 1;
    * {
      box-sizing: border-box;
    }

    .pl-step-circle {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      .pl-step-icon {
        position: relative;
        z-index: 1;
        width: 1.2rem;
        height: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        > * {
          flex-shrink: 0;
        }
      }
      .icon-default {
        display: inline-block;
        width: 0.5rem;
        height: 0.5rem;
      }
      .pl-step-item-icon {
        font-size: 1rem;
      }
    }
  }

  &--vertical {
    flex-direction: row;

    .pl-step-title {
      text-align: left;
      padding-bottom: 1em;
      flex: 1;
    }
    .pl-step-circle {
      flex-direction: column;
      min-width: 2rem;
      padding-right: 0.5em;

      .pl-step-line {
        width: 1px;
        flex: 1;
        background-color: var(--steps-line);
      }
      .icon-default {
        border-radius: 50%;
        background-color: var(--steps-icon);
      }
    }
  }
  &--horizontal {
    flex-direction: column;
    .pl-step-title {
      text-align: center;
    }
    .pl-step-circle {
      flex-direction: row;
      min-height: 2rem;
      padding-bottom: 0.5em;
      transform: translateX(calc(50% - 0.6rem));
      .pl-step-line {
        height: 1px;
        flex: 1;
        background-color: var(--steps-line);
      }
      .icon-default {
        border-top: 1px solid var(--steps-icon);
        border-right: 1px solid var(--steps-icon);
        transform: rotate(45deg);
        transform-origin: 50% 50%;
      }
    }
  }
}
</style>
