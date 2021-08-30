import{U as s,i as t}from"./vendor.6f33ac2d.js";const a=s({name:"Markdown"});a.render=()=>t("div",{class:["md2vue-wrapper","markdown-body"],innerHTML:'<h2 id="steps-步骤条">steps 步骤条</h2>\n<h3 id="基础用法">基础用法</h3>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">pl-steps</span> <span class="hljs-attr">:active</span>=<span class="hljs-string">&quot;0&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">pl-step-item</span>&gt;</span>步骤一<span class="hljs-tag">&lt;/<span class="hljs-name">pl-step-item</span>&gt;</span>  \n    <span class="hljs-tag">&lt;<span class="hljs-name">pl-step-item</span>&gt;</span>步骤二<span class="hljs-tag">&lt;/<span class="hljs-name">pl-step-item</span>&gt;</span>  \n    <span class="hljs-tag">&lt;<span class="hljs-name">pl-step-item</span>&gt;</span>步骤三<span class="hljs-tag">&lt;/<span class="hljs-name">pl-step-item</span>&gt;</span>  \n  <span class="hljs-tag">&lt;/<span class="hljs-name">pl-steps</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span></div>\n</code></pre>\n<h3 id="横向步骤条">横向步骤条</h3>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">pl-steps</span> <span class="hljs-attr">:active</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;horizontal&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">pl-step-item</span>&gt;</span>步骤一<span class="hljs-tag">&lt;/<span class="hljs-name">pl-step-item</span>&gt;</span>  \n    <span class="hljs-tag">&lt;<span class="hljs-name">pl-step-item</span>&gt;</span>步骤二<span class="hljs-tag">&lt;/<span class="hljs-name">pl-step-item</span>&gt;</span>  \n    <span class="hljs-tag">&lt;<span class="hljs-name">pl-step-item</span>&gt;</span>步骤三<span class="hljs-tag">&lt;/<span class="hljs-name">pl-step-item</span>&gt;</span>  \n  <span class="hljs-tag">&lt;/<span class="hljs-name">pl-steps</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span></div>\n</code></pre>\n<h3 id="steps-attributes">Steps Attributes</h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>active</td>\n<td>当前步骤</td>\n<td>Number</td>\n<td>—</td>\n<td>0</td>\n</tr>\n<tr>\n<td>activeColor</td>\n<td>当前激活的颜色</td>\n<td>String</td>\n<td>—</td>\n<td>#67c23a</td>\n</tr>\n<tr>\n<td>direction</td>\n<td>显示方向</td>\n<td>String</td>\n<td>vertical / horizontal</td>\n<td>vertical</td>\n</tr>\n<tr>\n<td>fold</td>\n<td>是否默认折叠</td>\n<td>Boolean</td>\n<td>—</td>\n<td>false</td>\n</tr>\n</tbody></table>\n<h3 id="stepitem-slots">StepItem Slots</h3>\n<table>\n<thead>\n<tr>\n<th>name</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>(default)</td>\n<td>列表子选项</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>步骤图标</td>\n</tr>\n</tbody></table>\n'}),a.mounted=()=>{};export{a as default};
