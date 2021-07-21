import Datetime from './index.vue';
import plMonth from './month.vue'
import plTime from './time.vue'
import plDate from './datetime.vue'
import { getDateString } from '../../src/assets/utils'
import { createApp, h, nextTick } from 'vue'

/* istanbul ignore next */
Datetime.install = function (App) {
  App.component(Datetime.name, Datetime);

  let Calendar = createApp({
    render() {
      return this.display && h('div', {
        style: {
          transition: 'all 0.3s ease',
          opacity: this.visible ? 1 : 0
        }
      }, [
        h(plMonth, {
          ref: 'month'
        }),
        h(plTime, {
          ref: 'time'
        }),
        h(plDate, {
          ref: 'date'
        })
      ]) || null
    },
    data: function () {
      return {
        display: false,
        visible: false,
        options: {}
      }
    },
    methods: {
      show() {
        this.display = true
        nextTick(() => {
          this.visible = true

          const type = this.options.type
          if (type === 'month') {
            this.$refs.month.open(this.options)
          } else if (type === 'time') {
            this.$refs.time.open(this.options)
          } else {
            this.$refs.date.open(this.options)
          }
        })
      },
      hide() {
        this.visible = false
        setTimeout(() => {
          this.display = false
        }, 300)
      }
    }
  })

  const calendarDom = document.createElement('div')
  document.body.appendChild(calendarDom)
  const vm = Calendar.mount(calendarDom)

  App.config.globalProperties.$calendar = function (options) {
    return new Promise((resolve, reject) => {
      vm.options = Object.assign({}, options, {
        callback: result => {
          let time = result
          if (options.format) {
            if (options.isRange) {
              time = result.map(item => getDateString(item, options.format))
            } else {
              time = getDateString(result, options.format)
            }
          }
          resolve(time)
        }
      })
      vm.show()
    })
  }
};

export default Datetime;
