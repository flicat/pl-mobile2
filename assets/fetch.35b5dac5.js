import{U as s,i as n}from"./vendor.6f33ac2d.js";const a=s({name:"Markdown"});a.render=()=>n("div",{class:["md2vue-wrapper","markdown-body"],innerHTML:'<h2 id="fetch-接口请求">fetch 接口请求</h2>\n<h3 id="基础用法">基础用法</h3>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">import</span> { fetch } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;pl-mobile2&#x27;</span>\n  app.use(fetch)\n\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-function"><span class="hljs-title">created</span>(<span class="hljs-params"></span>)</span> {\n      <span class="hljs-built_in">this</span>.$fetch({\n        <span class="hljs-attr">url</span>: <span class="hljs-string">&#x27;https://www.test.com/image.png&#x27;</span>,\n        <span class="hljs-attr">method</span>: <span class="hljs-string">&#x27;get&#x27;</span>,\n        <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;blob&#x27;</span>\n      }).then(<span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> {\n        <span class="hljs-comment">// 返回 blob</span>\n      })\n      <span class="hljs-comment">// 请求结果： GET:https://www.test.com/image.png</span>\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<h4 id="自定义配置">自定义配置</h4>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-function"><span class="hljs-title">created</span>(<span class="hljs-params"></span>)</span> {\n      <span class="hljs-keyword">const</span> request = <span class="hljs-built_in">this</span>.$fetch.options({\n        <span class="hljs-attr">baseUrl</span>: <span class="hljs-string">&#x27;https://www.test.com&#x27;</span>,\n        <span class="hljs-attr">method</span>: <span class="hljs-string">&#x27;get&#x27;</span>,\n        <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;blob&#x27;</span>\n      })\n\n      request.get(<span class="hljs-string">&#x27;/image.png&#x27;</span>).then(<span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> {\n        <span class="hljs-comment">// 返回 blob</span>\n      })\n      <span class="hljs-comment">// 请求结果： GET:https://www.test.com/image.png</span>\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<h4 id="自定义header">自定义header</h4>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-function"><span class="hljs-title">created</span>(<span class="hljs-params"></span>)</span> {\n      <span class="hljs-keyword">const</span> request = <span class="hljs-built_in">this</span>.$fetch.options({\n        <span class="hljs-attr">baseUrl</span>: <span class="hljs-string">&#x27;https://www.test.com&#x27;</span>\n      })\n\n      request.headers({\n        <span class="hljs-attr">token</span>: <span class="hljs-string">&#x27;xxxxxxxxxxxxxxxxxx&#x27;</span>\n      })\n\n      request.post(<span class="hljs-string">&#x27;/login&#x27;</span>, {\n        <span class="hljs-attr">username</span>: <span class="hljs-string">&#x27;test&#x27;</span>,\n        <span class="hljs-attr">password</span>: <span class="hljs-string">&#x27;test&#x27;</span>\n      }).then(<span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> {\n        <span class="hljs-comment">// 返回请求结果 json</span>\n      })\n      <span class="hljs-comment">// 请求结果： POST:https://www.test.com/login</span>\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<h4 id="url拼接">url拼接</h4>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-function"><span class="hljs-title">created</span>(<span class="hljs-params"></span>)</span> {\n      <span class="hljs-keyword">const</span> request = <span class="hljs-built_in">this</span>.$fetch.options({\n        <span class="hljs-attr">baseUrl</span>: <span class="hljs-string">&#x27;https://www.test.com&#x27;</span>,\n        <span class="hljs-attr">url</span>: <span class="hljs-string">&#x27;/data&#x27;</span>\n      })\n\n      request.url(<span class="hljs-string">&#x27;id&#x27;</span>, <span class="hljs-number">1</span>)\n\n      request.post().then(<span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> {\n        <span class="hljs-comment">// 返回请求结果 json</span>\n      })\n      <span class="hljs-comment">// 请求结果： POST:https://www.test.com/data/id/1</span>\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<h4 id="添加全局处理函数">添加全局处理函数</h4>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-function"><span class="hljs-title">created</span>(<span class="hljs-params"></span>)</span> {\n      <span class="hljs-comment">// 前置钩子</span>\n      <span class="hljs-built_in">this</span>.$fetch.before(<span class="hljs-function"><span class="hljs-params">options</span> =&gt;</span> {\n        <span class="hljs-keyword">if</span> (token) {\n          <span class="hljs-comment">// 同步修改</span>\n          options.headers.token = token\n        } <span class="hljs-keyword">else</span> {\n          <span class="hljs-comment">// 异步修改</span>\n          <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function">(<span class="hljs-params">res, rej</span>) =&gt;</span> {\n            getToken().then(<span class="hljs-function"><span class="hljs-params">token</span> =&gt;</span> {\n              options.headers.token = token\n            }).then(res).catch(rej)\n          })\n        }\n      })\n\n      <span class="hljs-comment">// 后置钩子</span>\n      <span class="hljs-built_in">this</span>.$fetch.after(<span class="hljs-function"><span class="hljs-params">res</span> =&gt;</span> {\n        <span class="hljs-keyword">return</span> res.then(<span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> {\n          <span class="hljs-comment">// 对正确返回的结果进行处理</span>\n          <span class="hljs-keyword">return</span> data.result\n        }).catch(<span class="hljs-function"><span class="hljs-params">res</span> =&gt;</span> {\n          <span class="hljs-comment">// 错误处理</span>\n          <span class="hljs-keyword">return</span> <span class="hljs-built_in">Promise</span>.reject({\n            <span class="hljs-attr">status</span>: res.status\n            <span class="hljs-attr">message</span>: res.statusText\n          })\n        })\n      })\n\n      <span class="hljs-built_in">this</span>.$fetch({\n        <span class="hljs-attr">baseUrl</span>: <span class="hljs-string">&#x27;https://www.test.com&#x27;</span>,\n        <span class="hljs-attr">url</span>: <span class="hljs-string">&#x27;/login&#x27;</span>,\n        <span class="hljs-attr">data</span>: {\n          <span class="hljs-attr">username</span>: <span class="hljs-string">&#x27;test&#x27;</span>,\n          <span class="hljs-attr">password</span>: <span class="hljs-string">&#x27;test&#x27;</span>\n        }\n      }).then(<span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> {\n        <span class="hljs-comment">// 返回请求结果 json</span>\n      })\n      <span class="hljs-comment">// 请求结果： GET:https://www.test.com/login</span>\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<h4 id="链式调用">链式调用</h4>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-function"><span class="hljs-title">created</span>(<span class="hljs-params"></span>)</span> {\n      <span class="hljs-built_in">this</span>.$fetch.options({\n        <span class="hljs-attr">baseUrl</span>: <span class="hljs-string">&#x27;https://www.test.com&#x27;</span>,\n        <span class="hljs-attr">url</span>: <span class="hljs-string">&#x27;/login&#x27;</span>,\n        <span class="hljs-attr">data</span>: {\n          <span class="hljs-attr">username</span>: <span class="hljs-string">&#x27;test&#x27;</span>,\n          <span class="hljs-attr">password</span>: <span class="hljs-string">&#x27;test&#x27;</span>\n        }\n      })\n      .url(<span class="hljs-string">&#x27;path&#x27;</span>, <span class="hljs-string">&#x27;user&#x27;</span>)\n      .headers({\n        <span class="hljs-attr">token</span>: <span class="hljs-string">&#x27;xxxxxxxxxxxxxxxxxxxxxx&#x27;</span>\n      })\n      .post()\n      .then(<span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> {\n        <span class="hljs-comment">// 返回请求结果 json</span>\n      })\n      <span class="hljs-comment">// 请求结果： POST:https://www.test.com/login/path/user</span>\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<h3 id="methods">Methods</h3>\n<table>\n<thead>\n<tr>\n<th>方法名</th>\n<th>说明</th>\n<th>参数</th>\n<th>返回值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>$fetch</td>\n<td>发起请求</td>\n<td>&lt;Options&gt;</td>\n<td>Promise&lt;response&gt;</td>\n</tr>\n<tr>\n<td>$fetch.before</td>\n<td>请求前拦截函数</td>\n<td>&lt;Function&gt;</td>\n<td>$fetch</td>\n</tr>\n<tr>\n<td>$fetch.after</td>\n<td>请求返回拦截函数</td>\n<td>&lt;Function&gt;</td>\n<td>$fetch</td>\n</tr>\n<tr>\n<td>$fetch.options</td>\n<td>设置options</td>\n<td>&lt;Options&gt;</td>\n<td>$fetch</td>\n</tr>\n<tr>\n<td>$fetch.url</td>\n<td>对 options.url 进行参数拼接</td>\n<td>&lt;string&gt;[, string]...</td>\n<td>$fetch</td>\n</tr>\n<tr>\n<td>$fetch.headers</td>\n<td>自定义请求头，跟 options.headers 合并</td>\n<td>&lt;object&gt;</td>\n<td>$fetch</td>\n</tr>\n<tr>\n<td>$fetch.request</td>\n<td>发起请求</td>\n<td>[&lt;Options&gt;]</td>\n<td>Promise&lt;response&gt;</td>\n</tr>\n<tr>\n<td>$fetch.get</td>\n<td>发起 get 请求</td>\n<td>[url[, data[, &lt;Options&gt;]]]</td>\n<td>Promise&lt;response&gt;</td>\n</tr>\n<tr>\n<td>$fetch.post</td>\n<td>发起 post 请求</td>\n<td>[url[, data[, &lt;Options&gt;]]]</td>\n<td>Promise&lt;response&gt;</td>\n</tr>\n</tbody></table>\n<h3 id="options">Options</h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>url</td>\n<td>请求URL地址</td>\n<td>String</td>\n<td>—</td>\n<td>—</td>\n</tr>\n<tr>\n<td>baseUrl</td>\n<td>请求URL域名</td>\n<td>String</td>\n<td>—</td>\n<td>—</td>\n</tr>\n<tr>\n<td>method</td>\n<td>请求使用的方法，如 GET、POST</td>\n<td>String</td>\n<td>—</td>\n<td>POST</td>\n</tr>\n<tr>\n<td>data</td>\n<td>请求的数据</td>\n<td>Object</td>\n<td>Object / Blob / BufferSource / FormData / URLSearchParams / USVString</td>\n<td>—</td>\n</tr>\n<tr>\n<td>headers</td>\n<td>请求的头信息</td>\n<td>Object</td>\n<td>—</td>\n<td>—</td>\n</tr>\n<tr>\n<td>type</td>\n<td>请求的数据类型</td>\n<td>String</td>\n<td>json / blob / arrayBuffer / formData / text</td>\n<td>json</td>\n</tr>\n<tr>\n<td>mode</td>\n<td>请求的模式</td>\n<td>String</td>\n<td>cors / no-cors / same-origin</td>\n<td>—</td>\n</tr>\n<tr>\n<td>credentials</td>\n<td>请求的 credentials 。为了在当前域名内自动发送 cookie ， 必须提供这个选项</td>\n<td>String</td>\n<td>omit / same-origin / include</td>\n<td>—</td>\n</tr>\n<tr>\n<td>cache</td>\n<td>请求的 cache 模式</td>\n<td>String</td>\n<td>default / no-store / reload / no-cache / force-cache / only-if-cached</td>\n<td>no-cache</td>\n</tr>\n<tr>\n<td>signal</td>\n<td>AbortSignal 接口表示一个信号对象（ signal object ），它允许您通过 AbortController 对象与DOM请求（如Fetch）进行通信并在需要时将其中止。</td>\n<td>AbortController</td>\n<td>—</td>\n<td>—</td>\n</tr>\n<tr>\n<td>redirect</td>\n<td>根据请求地址转成get请求，直接重定向URL</td>\n<td>Boolean</td>\n<td>—</td>\n<td>false</td>\n</tr>\n<tr>\n<td>onDownload</td>\n<td>onDownload 回调方法</td>\n<td>Function</td>\n<td>—</td>\n<td>—</td>\n</tr>\n</tbody></table>\n'}),a.mounted=()=>{};export{a as default};
