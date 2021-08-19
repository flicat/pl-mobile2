import{U as s,i as n}from"./vendor.27ba4f14.js";const a=s({name:"Markdown"});a.render=()=>n("div",{class:["md2vue-wrapper","markdown-body"],innerHTML:'<h2 id="message-消息弹框">message 消息弹框</h2>\n<h3 id="alert-弹框">alert 弹框</h3>\n<h4 id="基础用法">基础用法</h4>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-attr">methods</span>: {\n      message () {\n        <span class="hljs-built_in">this</span>.$alert({\n          <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;提示&#x27;</span>,\n          <span class="hljs-attr">message</span>: <span class="hljs-string">&#x27;这个一个弹窗！&#x27;</span>,\n          <span class="hljs-attr">buttonText</span>: <span class="hljs-string">&#x27;确定&#x27;</span>,\n          <span class="hljs-attr">action</span>: <span class="hljs-function">() =&gt;</span> {\n            <span class="hljs-comment">// 确定</span>\n          }\n        })\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<h4 id="自定义组件弹窗">自定义组件弹窗</h4>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n   <span class="hljs-keyword">import</span> swipe <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./swipe.vue&#x27;</span>\n   <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-attr">methods</span>: {\n      message () {\n        <span class="hljs-built_in">this</span>.$alert({\n          <span class="hljs-attr">component</span>: swipe,\n          <span class="hljs-attr">componentProps</span>: {\n            <span class="hljs-attr">isMsg</span>: <span class="hljs-literal">true</span>\n          },\n          <span class="hljs-attr">buttonText</span>: <span class="hljs-string">&#x27;确定&#x27;</span>,\n          <span class="hljs-attr">action</span>: <span class="hljs-function">() =&gt;</span> {\n            <span class="hljs-comment">// 确定</span>\n          }\n        })\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<h4 id="使用-promise">使用 Promise</h4>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n   <span class="hljs-keyword">import</span> swipe <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./swipe.vue&#x27;</span>\n   <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-attr">methods</span>: {\n      message () {\n        <span class="hljs-built_in">this</span>.$alert({\n          <span class="hljs-attr">component</span>: swipe,\n          <span class="hljs-attr">componentProps</span>: {\n            <span class="hljs-attr">isMsg</span>: <span class="hljs-literal">true</span>\n          },\n          <span class="hljs-attr">buttonText</span>: <span class="hljs-string">&#x27;确定&#x27;</span>\n        }).then(<span class="hljs-function">() =&gt;</span> {\n          <span class="hljs-comment">// 确定</span>\n        })\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<blockquote>\n<p>Options.component 必须是<strong>vue组件</strong>， 弹窗触发 submit/cancel\n回调时会先调用组件的 submit 方法，组件的 submit 方法可返回\n一个 Promise 对象</p>\n</blockquote>\n<h3 id="options">Options</h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>title</td>\n<td>标题</td>\n<td>String</td>\n<td>—</td>\n<td>—</td>\n</tr>\n<tr>\n<td>message</td>\n<td>消息内容</td>\n<td>String</td>\n<td>—</td>\n<td>—</td>\n</tr>\n<tr>\n<td>component</td>\n<td>子组件弹窗内容</td>\n<td>Object</td>\n<td>—</td>\n<td>—</td>\n</tr>\n<tr>\n<td>componentProps</td>\n<td>子组件props</td>\n<td>Object</td>\n<td>—</td>\n<td>—</td>\n</tr>\n<tr>\n<td>html</td>\n<td>消息内容是否是HTML</td>\n<td>Boolean</td>\n<td>—</td>\n<td>false</td>\n</tr>\n<tr>\n<td>buttonText</td>\n<td>确定按钮文字</td>\n<td>String</td>\n<td>—</td>\n<td>好</td>\n</tr>\n<tr>\n<td>action</td>\n<td>确定后回调函数（如果不传则通过Promise返回结果）</td>\n<td>Function</td>\n<td>—</td>\n<td>—</td>\n</tr>\n</tbody></table>\n<h3 id="confirm-弹框">confirm 弹框</h3>\n<h4 id="基础用法-1">基础用法</h4>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-attr">methods</span>: {\n      message () {\n        <span class="hljs-built_in">this</span>.$confirm({\n          <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;提示&#x27;</span>,\n          <span class="hljs-attr">message</span>: <span class="hljs-string">&#x27;这个一个确认弹窗！&#x27;</span>,\n          <span class="hljs-attr">submitText</span>: <span class="hljs-string">&#x27;确定&#x27;</span>,\n          <span class="hljs-attr">cancelText</span>: <span class="hljs-string">&#x27;取消&#x27;</span>,\n          <span class="hljs-attr">submit</span>: <span class="hljs-function">() =&gt;</span> {\n            <span class="hljs-comment">// 确定</span>\n          },\n          <span class="hljs-attr">cancel</span>: <span class="hljs-function">() =&gt;</span> {\n            <span class="hljs-comment">// 取消</span>\n          }\n        })\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<h4 id="自定义组件弹窗-1">自定义组件弹窗</h4>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n   <span class="hljs-keyword">import</span> swipe <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./swipe.vue&#x27;</span>\n   <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-attr">methods</span>: {\n      message () {\n        <span class="hljs-built_in">this</span>.$confirm({\n          <span class="hljs-attr">component</span>: swipe,\n          <span class="hljs-attr">componentProps</span>: {\n            <span class="hljs-attr">isMsg</span>: <span class="hljs-literal">true</span>\n          },\n          <span class="hljs-attr">submitText</span>: <span class="hljs-string">&#x27;确定&#x27;</span>,\n          <span class="hljs-attr">cancelText</span>: <span class="hljs-string">&#x27;取消&#x27;</span>,\n          <span class="hljs-attr">submit</span>: <span class="hljs-function">() =&gt;</span> {\n            <span class="hljs-comment">// 确定</span>\n            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;确定&#x27;</span>)\n          },\n          <span class="hljs-attr">cancel</span>: <span class="hljs-function">() =&gt;</span> {\n            <span class="hljs-comment">// 取消</span>\n            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;取消&#x27;</span>)\n          }\n        })\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<h4 id="使用-promise-1">使用 Promise</h4>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-attr">methods</span>: {\n      message () {\n        <span class="hljs-built_in">this</span>.$confirm({\n          <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;提示&#x27;</span>,\n          <span class="hljs-attr">message</span>: <span class="hljs-string">&#x27;这个一个确认弹窗！&#x27;</span>,\n          <span class="hljs-attr">submitText</span>: <span class="hljs-string">&#x27;确定&#x27;</span>,\n          <span class="hljs-attr">cancelText</span>: <span class="hljs-string">&#x27;取消&#x27;</span>\n        }).then(<span class="hljs-function">() =&gt;</span> {\n          <span class="hljs-comment">// 确定</span>\n        }).catch(<span class="hljs-function">() =&gt;</span> {\n          <span class="hljs-comment">// 取消</span>\n        })\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<blockquote>\n<p>Options.component 必须是<strong>vue组件</strong>， 弹窗触发 submit/cancel\n回调时会先调用组件的 submit/cancel 方法，组件的 submit/cancel 方法可返回\n一个 Promise 对象</p>\n</blockquote>\n<h3 id="options-1">Options</h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>title</td>\n<td>标题</td>\n<td>String</td>\n<td>—</td>\n<td>—</td>\n</tr>\n<tr>\n<td>message</td>\n<td>消息内容</td>\n<td>String</td>\n<td>—</td>\n<td>—</td>\n</tr>\n<tr>\n<td>component</td>\n<td>子组件弹窗内容</td>\n<td>Object</td>\n<td>—</td>\n<td>—</td>\n</tr>\n<tr>\n<td>componentProps</td>\n<td>子组件props</td>\n<td>Object</td>\n<td>—</td>\n<td>—</td>\n</tr>\n<tr>\n<td>html</td>\n<td>消息内容是否是HTML</td>\n<td>Boolean</td>\n<td>—</td>\n<td>false</td>\n</tr>\n<tr>\n<td>submitText</td>\n<td>确定按钮文字</td>\n<td>String</td>\n<td>—</td>\n<td>确认</td>\n</tr>\n<tr>\n<td>cancelText</td>\n<td>取消钮文字</td>\n<td>String</td>\n<td>—</td>\n<td>取消</td>\n</tr>\n<tr>\n<td>submit</td>\n<td>确定后回调函数（如果不传则通过Promise返回结果）</td>\n<td>Function</td>\n<td>—</td>\n<td>—</td>\n</tr>\n<tr>\n<td>cancel</td>\n<td>取消后回调函数（如果不传则通过Promise返回结果）</td>\n<td>Function</td>\n<td>—</td>\n<td>—</td>\n</tr>\n</tbody></table>\n<h3 id="toast-提示信息">toast 提示信息</h3>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-attr">methods</span>: {\n      message () {\n        <span class="hljs-built_in">this</span>.$toast(message[, duration, html])\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<h4 id="使用-promise-2">使用 Promise</h4>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-attr">methods</span>: {\n      message () {\n        <span class="hljs-built_in">this</span>.$toast(<span class="hljs-string">&#x27;消息提醒1&#x27;</span>, <span class="hljs-number">2000</span>).then(<span class="hljs-function">() =&gt;</span> {\n          <span class="hljs-built_in">this</span>.$toast(<span class="hljs-string">&#x27;&lt;strong&gt;消息提醒2&lt;/strong&gt;&#x27;</span>, <span class="hljs-number">2000</span>, <span class="hljs-literal">true</span>)\n        })\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<h3 id="options-2">Options</h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>message</td>\n<td>提示信息</td>\n<td>String</td>\n<td>—</td>\n<td>—</td>\n</tr>\n<tr>\n<td>duration</td>\n<td>持续时间（毫秒，可选)</td>\n<td>Number</td>\n<td>—</td>\n<td>3000</td>\n</tr>\n<tr>\n<td>html</td>\n<td>消息内容是否是HTML</td>\n<td>Boolean</td>\n<td>—</td>\n<td>false</td>\n</tr>\n</tbody></table>\n'}),a.mounted=()=>{};export{a as default};