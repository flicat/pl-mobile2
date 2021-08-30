import{U as s,i as t}from"./vendor.6f33ac2d.js";const n=s({name:"Markdown"});n.render=()=>t("div",{class:["md2vue-wrapper","markdown-body"],innerHTML:'<h2 id="input-输入框">input 输入框</h2>\n<h3 id="基础用法">基础用法</h3>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">pl-input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data () {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;&#x27;</span>\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<h3 id="文本域">文本域</h3>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">pl-input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;textarea&quot;</span> <span class="hljs-attr">rows</span>=<span class="hljs-string">&quot;5&quot;</span> <span class="hljs-attr">cols</span>=<span class="hljs-string">&quot;10&quot;</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data () {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;&#x27;</span>\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<h3 id="表单验证">表单验证</h3>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">pl-input</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;rules&quot;</span> <span class="hljs-attr">required</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;input&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data () {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;&#x27;</span>,\n        <span class="hljs-attr">rules</span>: [{<span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&#x27;请选择&#x27;</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-string">&#x27;change&#x27;</span>}]\n      }\n    },\n    <span class="hljs-attr">methods</span>: {\n      submit () {\n        <span class="hljs-built_in">this</span>.$refs.input.validate().then(<span class="hljs-function">() =&gt;</span> {\n          <span class="hljs-comment">// 校验成功</span>\n        }).catch(<span class="hljs-function"><span class="hljs-params">e</span> =&gt;</span> {\n          <span class="hljs-comment">// 校验失败</span>\n        })\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<h3 id="attributes">Attributes</h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>rules</td>\n<td>验证规则 <a href="https://github.com/yiminghe/async-validator">rules</a></td>\n<td>Array</td>\n<td>—</td>\n<td>—</td>\n</tr>\n<tr>\n<td>size</td>\n<td>尺寸</td>\n<td>String</td>\n<td>normal / large / small</td>\n<td>normal</td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td>占位符</td>\n<td>String</td>\n<td>—</td>\n<td>—</td>\n</tr>\n<tr>\n<td>type</td>\n<td>表单类型，原生字段</td>\n<td>String</td>\n<td>text / number / search / texarea</td>\n<td>text</td>\n</tr>\n<tr>\n<td>wrap</td>\n<td>label是否折行显示</td>\n<td>boolean</td>\n<td>—</td>\n<td>false</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>是否禁用状态</td>\n<td>boolean</td>\n<td>—</td>\n<td>false</td>\n</tr>\n<tr>\n<td>required</td>\n<td>必填红色*号</td>\n<td>boolean</td>\n<td>—</td>\n<td>false</td>\n</tr>\n<tr>\n<td>rows</td>\n<td>texarea的rows属性</td>\n<td>String</td>\n<td>—</td>\n<td>—</td>\n</tr>\n<tr>\n<td>cols</td>\n<td>texarea的cols属性</td>\n<td>String</td>\n<td>—</td>\n<td>—</td>\n</tr>\n<tr>\n<td>label</td>\n<td>label文字</td>\n<td>string</td>\n<td>—</td>\n<td>—</td>\n</tr>\n<tr>\n<td>labelWidth</td>\n<td>label宽度</td>\n<td>string</td>\n<td>—</td>\n<td>—</td>\n</tr>\n<tr>\n<td>clearable</td>\n<td>是否显示清除按钮</td>\n<td>boolean</td>\n<td>—</td>\n<td>false</td>\n</tr>\n</tbody></table>\n<h3 id="slots">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>name</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>label</td>\n<td>label文字</td>\n</tr>\n<tr>\n<td>prepend</td>\n<td>输入框前置内容</td>\n</tr>\n<tr>\n<td>append</td>\n<td>输入框后置内容</td>\n</tr>\n</tbody></table>\n<h3 id="events">Events</h3>\n<table>\n<thead>\n<tr>\n<th>事件名称</th>\n<th>说明</th>\n<th>回调参数</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>change</td>\n<td>value更改事件</td>\n<td>更改后的value</td>\n</tr>\n<tr>\n<td>input</td>\n<td>输入事件</td>\n<td>更改后的value</td>\n</tr>\n<tr>\n<td>clear</td>\n<td>value清除事件</td>\n<td>更改后的value</td>\n</tr>\n</tbody></table>\n<h3 id="methods">Methods</h3>\n<table>\n<thead>\n<tr>\n<th>方法名</th>\n<th>说明</th>\n<th>参数</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>validate</td>\n<td>表单验证方法</td>\n<td>—</td>\n</tr>\n<tr>\n<td>clearValidate</td>\n<td>清除验证错误提示</td>\n<td>—</td>\n</tr>\n</tbody></table>\n'}),n.mounted=()=>{};export{n as default};
