## loading 加载图标

### 基础用法

```html
<template>
  <pl-loading>加载中...</pl-loading>
</template>
```

### 全局调用

```html
<script>
  export default {
    methods: {
      getAsyncData () {
        let loading = this.$loading({ text: '加载中...' })
        // async data
        loading.close()
      }
    }
  }
</script>
```


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| vertical  | 是否垂直排列 | Boolean  | —            | false  |

### Slots
| name      | 说明    |
|---------- |-------- |
| (default)     |   loading提示文字   |

### Global Methods
| 方法名 | 说明 | 参数 |返回值 |
| ---- | ---- | ---- | ----  |
| $loading | 打开loading | \[Options] | LoadingObject  |

### Options
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| text      | loading文字   | String  | —            | —  |
| vertical  | 是否垂直排列   | Boolean  | —            | false  |
| target    | loading父节点   | Node  | —            | document.body  |


### LoadingObject
| 方法名 | 说明 | 参数 |返回值 |
| ---- | ---- | ---- | ----  |
| close | 关闭loading | — | —  |
