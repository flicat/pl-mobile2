/*!
 * @author liyuelong1020@gmail.com
 * @date 2018/7/28 028
 * @description api 接口
 */
import polyfill from './polyfill-patch-fetch'
import request from './fetch'
import { is } from '../../src/assets/utils'

const beforeHandlerArr = []

const afterHandlerArr = []

const handler = async function (option) {
  for (let i = beforeHandlerArr.length; i--;) {
    await beforeHandlerArr[i](option)
  }

  let response = request(option)

  for (let i = afterHandlerArr.length; i--;) {
    await afterHandlerArr[i](response)
  }
  return response
}

class Fetch {
  constructor(option) {
    if (is(option, 'object')) {
      this.option = option
    }
  }
  options(option) {
    if (is(option, 'object')) {
      Object.assign(this.option, option)
    }
    return this
  }
  url(...args) {
    this.option.url = [this.option.url, ...args].join('/')
    return this
  }
  headers(headers) {
    if (!is(this.option.headers, 'object')) {
      this.option.headers = {}
    }
    if (is(headers, 'object')) {
      Object.assign(this.option.headers, headers)
    }
    return this
  }
  request(option) {
    return handler(Object.assign({}, this.option, option))
  }
  get(url, data, option) {
    let getOption = {
      method: 'get'
    }
    if (url) {
      getOption.url = url
    }
    if (data) {
      getOption.data = data
    }
    return handler(Object.assign({}, this.option, option, getOption))
  }
  post(url, data, option) {
    let postOption = {
      method: 'post'
    }
    if (url) {
      postOption.url = url
    }
    if (data) {
      postOption.data = data
    }
    return handler(Object.assign({}, this.option, option, postOption))
  }
}

const fetchProxy = new Proxy(handler, {
  get(target, propKey, receiver) {
    switch (propKey) {
      case 'options':
        return function (option) {
          return new Fetch(option)
        }

      case 'url':
        return function (...args) {
          const target = new Fetch({})
          target.url(...args)
          return target
        }

      case 'headers':
        return function (headers) {
          const target = new Fetch({})
          target.headers(headers)
          return target
        }

      case 'request':
        return function (option) {
          return handler(option)
        }

      case 'get':
        return function (url, data, option) {
          let getOption = {
            method: 'get'
          }
          if (url) {
            getOption.url = url
          }
          if (data) {
            getOption.data = data
          }
          return handler(Object.assign({}, option, getOption))
        }

      case 'post':
        return function (url, data, option) {
          let postOption = {
            method: 'post'
          }
          if (url) {
            postOption.url = url
          }
          if (data) {
            postOption.data = data
          }
          return handler(Object.assign({}, option, postOption))
        }

      case 'before':
        return function (func) {
          if (is(func, 'function')) {
            beforeHandlerArr.push(func)
          }
          return receiver
        }

      case 'after':
        return function (func) {
          if (is(func, 'function')) {
            afterHandlerArr.push(func)
          }
          return receiver
        }
    }

    return Reflect.get(target, propKey, receiver);
  }
})

fetchProxy.install = function (App) {
  polyfill()
  App.config.globalProperties.$fetch = fetchProxy
}

export default fetchProxy
