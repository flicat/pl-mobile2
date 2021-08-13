import{P as s,h as a}from"./vendor.1fd64023.js";const n=s({name:"Markdown"});n.render=()=>a("div",{class:["md2vue-wrapper","markdown-body"],innerHTML:'<h2 id="cell-列布局">cell 列布局</h2>\n<h3 id="基础用法">基础用法</h3>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">pl-cell</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;[1, 1]&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>段落1<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>段落2<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">pl-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span></div>\n</code></pre>\n<h3 id="定义具体宽度">定义具体宽度</h3>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">pl-cell</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;[&#x27;50%&#x27;, &#x27;4rem&#x27;]&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>段落1<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>段落2<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">pl-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span></div>\n</code></pre>\n<h3 id="定义间隔">定义间隔</h3>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">pl-cell</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;[1, 1]&quot;</span> <span class="hljs-attr">gap</span>=<span class="hljs-string">&quot;20px&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>段落1<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>段落2<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">pl-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span></div>\n</code></pre>\n<h3 id="竖向排列">竖向排列</h3>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">pl-cell</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;[1, 1]&quot;</span> <span class="hljs-attr">gap</span>=<span class="hljs-string">&quot;5px&quot;</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;column&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>段落1<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>段落2<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">pl-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span></div>\n</code></pre>\n<h3 id="纵横交错">纵横交错</h3>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">pl-cell</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;[1, 1]&quot;</span> <span class="hljs-attr">gap</span>=<span class="hljs-string">&quot;5px&quot;</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;row&quot;</span> <span class="hljs-attr">alignItems</span>=<span class="hljs-string">&quot;stretch&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">pl-cell</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;[1, 1]&quot;</span> <span class="hljs-attr">gap</span>=<span class="hljs-string">&quot;5px&quot;</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;column&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>段落1<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>段落2<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">pl-cell</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>段落3<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">pl-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span></div>\n</code></pre>\n<h3 id="attributes">Attributes</h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>direction</td>\n<td>排列方式</td>\n<td>string</td>\n<td>column / row</td>\n<td>row</td>\n</tr>\n<tr>\n<td>span</td>\n<td>栏数</td>\n<td>Array</td>\n<td>&lt;grid-template-columns&gt;, &lt;grid-template-rows&gt;</td>\n<td>—</td>\n</tr>\n<tr>\n<td>gap</td>\n<td>间隔</td>\n<td>string</td>\n<td>&lt;grid-gap&gt;</td>\n<td>—</td>\n</tr>\n<tr>\n<td>justifyItems</td>\n<td>横向排列方式</td>\n<td>string</td>\n<td>normal / baseline / stretch / start / end / center / flex-start / flex-end / left / right / self-start / self-end / revert / legacy</td>\n<td>normal</td>\n</tr>\n<tr>\n<td>alignItems</td>\n<td>纵向排列方式</td>\n<td>string</td>\n<td>normal / baseline / flex-start / flex-end / start / end / center / self-start / self-end / stretch / baseline</td>\n<td>center</td>\n</tr>\n<tr>\n<td>justifyContent</td>\n<td>横向排列方式</td>\n<td>string</td>\n<td>normal / left / right / stretch / start / end / center / flex-start / flex-end / space-between / space-around / space-evenly / revert</td>\n<td>normal</td>\n</tr>\n<tr>\n<td>alignContent</td>\n<td>纵向排列方式</td>\n<td>string</td>\n<td>normal / baseline / stretch / start / end / center / flex-start / flex-end / space-between / space-around / space-evenly / revert</td>\n<td>normal</td>\n</tr>\n</tbody></table>\n<h3 id="slots">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>name</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>(default)</td>\n<td>内容</td>\n</tr>\n</tbody></table>\n'}),n.mounted=()=>{};export default n;
