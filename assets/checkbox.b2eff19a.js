import{P as s,h as a}from"./vendor.1fd64023.js";const n=s({name:"Markdown"});n.render=()=>a("div",{class:["md2vue-wrapper","markdown-body"],innerHTML:'<h2 id="checkbox-复选框">checkbox 复选框</h2>\n<h3 id="基础用法">基础用法</h3>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">pl-checkbox</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;data&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data () {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">value</span>: [],\n        <span class="hljs-attr">data</span>: [\n          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;选项1&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">false</span>},\n          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;选项2&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>}\n        ]\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<h3 id="显示label的用法">显示label的用法</h3>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">pl-checkbox</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;data&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;请选择：&quot;</span> <span class="hljs-attr">labelWidth</span>=<span class="hljs-string">&quot;5em&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data () {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">value</span>: [],\n        <span class="hljs-attr">data</span>: [\n          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;选项1&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">false</span>},\n          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;选项2&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>}\n        ]\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<h3 id="表单验证">表单验证</h3>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">pl-checkbox</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;data&quot;</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;rules&quot;</span> <span class="hljs-attr">required</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;checkbox&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data () {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">value</span>: [],\n        <span class="hljs-attr">data</span>: [\n          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;选项1&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">false</span>},\n          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;选项2&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>}\n        ],\n        <span class="hljs-attr">rules</span>: [{<span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&#x27;请选择&#x27;</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-string">&#x27;change&#x27;</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;array&#x27;</span>}]\n      }\n    },\n    <span class="hljs-attr">methods</span>: {\n      submit () {\n        <span class="hljs-built_in">this</span>.$refs.checkbox.validate().then(<span class="hljs-function">() =&gt;</span> {\n          <span class="hljs-comment">// 校验成功</span>\n        }).catch(<span class="hljs-function"><span class="hljs-params">e</span> =&gt;</span> {\n          <span class="hljs-comment">// 校验失败</span>\n        })\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<h3 id="竖排样式">竖排样式</h3>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">pl-checkbox</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:trueValue</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">vertical</span> <span class="hljs-attr">:falseValue</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>开关<span class="hljs-tag">&lt;/<span class="hljs-name">pl-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data () {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">value</span>: <span class="hljs-literal">false</span>,\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<h3 id="按钮样式">按钮样式</h3>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">pl-checkbox</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:trueValue</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">button</span> <span class="hljs-attr">:falseValue</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>开关<span class="hljs-tag">&lt;/<span class="hljs-name">pl-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data () {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">value</span>: <span class="hljs-literal">false</span>,\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<h3 id="开关按钮">开关按钮</h3>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">pl-checkbox</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:trueValue</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">:falseValue</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>开关<span class="hljs-tag">&lt;/<span class="hljs-name">pl-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data () {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">value</span>: <span class="hljs-literal">false</span>,\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<h3 id="自定义子项">自定义子项</h3>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">pl-checkbox</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;data&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot</span>=<span class="hljs-string">&quot;scope&quot;</span>&gt;</span></span><span class="hljs-template-variable">{{<span class="hljs-name">scope.item.label</span>}}</span><span class="xml"> - </span><span class="hljs-template-variable">{{<span class="hljs-name">scope.item.value</span>}}</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">pl-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data () {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">value</span>: [],\n        <span class="hljs-attr">data</span>: [\n          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;选项1&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">false</span>},\n          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;选项2&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>}\n        ]\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></div>\n</code></pre>\n<h3 id="attributes">Attributes</h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>rules</td>\n<td>验证规则 <a href="https://github.com/yiminghe/async-validator">rules</a></td>\n<td>Array</td>\n<td>—</td>\n<td>—</td>\n</tr>\n<tr>\n<td>size</td>\n<td>尺寸</td>\n<td>String</td>\n<td>normal / large / small</td>\n<td>normal</td>\n</tr>\n<tr>\n<td>options</td>\n<td>选项列表</td>\n<td>Array</td>\n<td>—</td>\n<td>—</td>\n</tr>\n<tr>\n<td>prop</td>\n<td>选项对应的key与value</td>\n<td>Object</td>\n<td>—</td>\n<td>{label: &#39;label&#39;, value: &#39;value&#39;, disabled: &#39;disabled&#39;}</td>\n</tr>\n<tr>\n<td>trueValue</td>\n<td>没有提供data时的勾选值</td>\n<td>—</td>\n<td>—</td>\n<td>—</td>\n</tr>\n<tr>\n<td>falseValue</td>\n<td>没有提供data时的非勾选值</td>\n<td>—</td>\n<td>—</td>\n<td>—</td>\n</tr>\n<tr>\n<td>wrap</td>\n<td>label是否折行显示</td>\n<td>boolean</td>\n<td>—</td>\n<td>false</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>是否禁用状态</td>\n<td>boolean</td>\n<td>—</td>\n<td>false</td>\n</tr>\n<tr>\n<td>required</td>\n<td>必填红色*号</td>\n<td>boolean</td>\n<td>—</td>\n<td>false</td>\n</tr>\n<tr>\n<td>button</td>\n<td>是否是按钮样式</td>\n<td>boolean</td>\n<td>—</td>\n<td>false</td>\n</tr>\n<tr>\n<td>vertical</td>\n<td>是否是竖向排列</td>\n<td>boolean</td>\n<td>—</td>\n<td>false</td>\n</tr>\n<tr>\n<td>label</td>\n<td>label文字</td>\n<td>string</td>\n<td>—</td>\n<td>—</td>\n</tr>\n<tr>\n<td>labelWidth</td>\n<td>label宽度</td>\n<td>string</td>\n<td>—</td>\n<td>—</td>\n</tr>\n</tbody></table>\n<h3 id="slots">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>name</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>(default)</td>\n<td>列表子选项</td>\n</tr>\n<tr>\n<td>label</td>\n<td>label文字</td>\n</tr>\n<tr>\n<td>prepend</td>\n<td>输入框前置内容</td>\n</tr>\n</tbody></table>\n<h3 id="events">Events</h3>\n<table>\n<thead>\n<tr>\n<th>事件名称</th>\n<th>说明</th>\n<th>回调参数</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>change</td>\n<td>value更改事件</td>\n<td>更改后的value</td>\n</tr>\n</tbody></table>\n<h3 id="methods">Methods</h3>\n<table>\n<thead>\n<tr>\n<th>方法名</th>\n<th>说明</th>\n<th>参数</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>validate</td>\n<td>表单验证方法</td>\n<td>—</td>\n</tr>\n<tr>\n<td>clearValidate</td>\n<td>清除验证错误提示</td>\n<td>—</td>\n</tr>\n</tbody></table>\n'}),n.mounted=()=>{};export default n;
