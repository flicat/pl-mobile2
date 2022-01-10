## fetch 接口请求

### 基础用法
```html
<script>
  import { fetch } from 'pl-mobile2'
  app.use(fetch)

  export default {
    created() {
      this.$fetch({
        url: 'https://www.test.com/image.png',
        method: 'get',
        type: 'blob'
      }).then(data => {
        // 返回 blob
      })
      // 请求结果： GET:https://www.test.com/image.png
    }
  }
</script>
```

#### 自定义配置
```html
<script>
  export default {
    created() {
      const request = this.$fetch.options({
        baseUrl: 'https://www.test.com',
        method: 'get',
        type: 'blob'
      })

      request.get('/image.png').then(data => {
        // 返回 blob
      })
      // 请求结果： GET:https://www.test.com/image.png
    }
  }
</script>
```

#### 自定义header
```html
<script>
  export default {
    created() {
      const request = this.$fetch.options({
        baseUrl: 'https://www.test.com'
      })

      request.headers({
        token: 'xxxxxxxxxxxxxxxxxx'
      })

      request.post('/login', {
        username: 'test',
        password: 'test'
      }).then(data => {
        // 返回请求结果 json
      })
      // 请求结果： POST:https://www.test.com/login
    }
  }
</script>
```
#### url拼接
```html
<script>
  export default {
    created() {
      const request = this.$fetch.options({
        baseUrl: 'https://www.test.com',
        url: '/data'
      })

      request.url('id', 1)

      request.post().then(data => {
        // 返回请求结果 json
      })
      // 请求结果： POST:https://www.test.com/data/id/1
    }
  }
</script>
```

#### 添加全局处理函数
```html
<script>
  export default {
    created() {
      // 前置钩子
      this.$fetch.before(options => {
        if (token) {
          // 同步修改
          options.headers.token = token
        } else {
          // 异步修改
          return new Promise((res, rej) => {
            getToken().then(token => {
              options.headers.token = token
            }).then(res).catch(rej)
          })
        }
      })

      // 后置钩子
      this.$fetch.after(res => {
        return res.then(data => {
          // 对正确返回的结果进行处理
          return data.result
        }).catch(res => {
          // 错误处理
          return Promise.reject({
            status: res.status
            message: res.statusText
          })
        })
      })

      this.$fetch({
        baseUrl: 'https://www.test.com',
        url: '/login',
        data: {
          username: 'test',
          password: 'test'
        }
      }).then(data => {
        // 返回请求结果 json
      })
      // 请求结果： GET:https://www.test.com/login
    }
  }
</script>
```


#### 链式调用
```html
<script>
  export default {
    created() {
      this.$fetch.options({
        baseUrl: 'https://www.test.com',
        url: '/login',
        data: {
          username: 'test',
          password: 'test'
        }
      })
      .url('path', 'user')
      .headers({
        token: 'xxxxxxxxxxxxxxxxxxxxxx'
      })
      .post()
      .then(data => {
        // 返回请求结果 json
      })
      // 请求结果： POST:https://www.test.com/login/path/user
    }
  }
</script>
```


### Methods
| 方法名 | 说明 | 参数  |返回值 |
| ---- | ---- | ---- | ---- |
| $fetch | 发起请求 | \<Options> | Promise\<response> |
| $fetch.before     | 请求前拦截函数 |  \<Function> | $fetch  |
| $fetch.after    | 请求返回拦截函数 | \<Function>  |  $fetch |
| $fetch.options   | 设置options | \<Options> | $fetch |
| $fetch.url     | 对 options.url 进行参数拼接 | \<string>[, string]... | $fetch |
| $fetch.headers | 自定义请求头，跟 options.headers 合并 | \<object> |  $fetch |
| $fetch.request | 发起请求 | [\<Options>] |  Promise\<response> |
| $fetch.get | 发起 get 请求 | [url[, data[, \<Options>]]] |  Promise\<response> |
| $fetch.post | 发起 post 请求 | [url[, data[, \<Options>]]] |  Promise\<response> |


### Options
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| url        | 请求URL地址 | String | — | — |
| baseUrl    | 请求URL域名 | String | — | — |
| method     | 请求使用的方法，如 GET、POST | String | — | POST |
| data       | 请求的数据 | Object | Object / Blob / BufferSource / FormData / URLSearchParams / USVString | — |
| headers    | 请求的头信息 | Object | — | — |
| type       | 请求的数据类型 | String | json / blob / arrayBuffer / formData / text | json |
| mode       | 请求的模式 | String | cors / no-cors / same-origin | — |
| credentials| 请求的 credentials 。为了在当前域名内自动发送 cookie ， 必须提供这个选项 | String | omit / same-origin / include | — |
| cache      | 请求的 cache 模式 | String | default / no-store / reload / no-cache / force-cache / only-if-cached | no-cache |
| signal     | AbortSignal 接口表示一个信号对象（ signal object ），它允许您通过 AbortController 对象与DOM请求（如Fetch）进行通信并在需要时将其中止。 | AbortController | — | — |
| redirect   | 根据请求地址转成get请求，直接重定向URL  | Boolean | — | false |
| onDownload | onDownload 回调方法 | Function | — | — |

