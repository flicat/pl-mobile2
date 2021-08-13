## picker 滑动选择框

### 基础用法

```html
<template>
  <pl-button @click="open">打开</pl-button>
</template>

<script>
  export default {
    data () {
      return {
        value: [2, 6],
        options: {
          children: [
            {label: '选项1', value: 1, children: [
              {label: '子选项3', value: 3},
              {label: '子选项4', value: 4}
            ]},
            {label: '选项2', value: 2, children: [
              {label: '子选项5', value: 5},
              {label: '子选项6', value: 6}
            ]}
          ]
        },
        prop: {
          label: 'label',
          value: 'value',
          children: 'children'
        }
      }
    },
    methods: {
      open () {
        this.$picker({
          title: '请选择',
          defaultValue: this.value,
          options: this.options,
          prop: this.prop,
          submit: (result) => {
            this.value = result
          },
          cancel: () => {
            // 取消选择
          }
        })
      }
    }
  }
</script>
```

### 动态生成

```html
<template>
    <pl-button @click="open">打开</pl-button>
</template>

<script>
  export default {
    data () {
      return {
        value: []
      }
    },
    methods: {
      open () {
        this.$picker({
          title: '请选择',
          defaultValue: result.value,
          options: [
            function () {
              return new Array(20).fill('').map((i, index) => ({ label: index + 1990 + '年', value: index + 1990 }))
            },
            function (year) {
              return new Array(12).fill('').map((i, index) => ({ label: index + 1 + '月', value: index + 1 }))
            },
            function (year, month) {
              return new Array(30).fill('').map((i, index) => ({ label: index + 1 + '日', value: index + 1 }))
            }
          ],
          prop: {
            label: 'label',
            value: 'value'
          },
          submit: (result) => {
            this.value = result
          },
          cancel: () => {
            // 取消选择
          }
        })
      }
    }
  }
</script>
```

### 使用Promise

```html
<template>
  <pl-button @click="open">打开</pl-button>
</template>
<script>
  export default {
    data () {
      return {
        value: [2008, 8]
      }
    },
    methods: {
      async open () {
        try {
          this.value = await $picker({
            title: '请选择',
            defaultValue: result.value,
            options: [
              function () {
                return new Array(20).fill('').map((i, index) => ({ label: index + 1990 + '年', value: index + 1990 }))
              },
              function () {
                return new Array(12).fill('').map((i, index) => ({ label: index + 1 + '月', value: index + 1 }))
              },
              function (year, month) {
                return new Array(30).fill('').map((i, index) => ({ label: index + 1 + '日', value: index + 1 }))
              }
            ],
            prop: {
              label: 'label',
              value: 'value'
            }
          })
        } catch (e) {
          // 取消选择
        }
      }
    }
  }
</script>
```


### Options
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title        | 弹窗标题 | String | — | — |
| defaultValue | 默认值 | Array | — | — |
| options      | 下拉选项 | Array | 回调式：[function() {}, function(prevValue) {}]，嵌套式：{children: [{label: 'label', value: 'value', }]} | — |
| prop        | 显示的标签和值，如果没有传递则拿整个子项 | Object | — | {label: 'label', value: 'value', children: 'children'} |
| submit      | 成功回调函数（如果不传则通过Promise返回结果） | Function | — | — |
| cancel      | 取消回调函数（如果不传则通过Promise返回结果） | Function | — | — |

