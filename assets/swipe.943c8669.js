import{U as s,i as n}from"./vendor.6f33ac2d.js";const t=s({name:"Markdown"});t.render=()=>n("div",{class:["md2vue-wrapper","markdown-body"],innerHTML:'<h2 id="steps-步骤条">steps 步骤条</h2>\n<h3 id="基础用法">基础用法</h3>\n<pre><code class="language-html"><div class="md-code-hijs">&lt;template&gt;\n  &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;\n    &lt;pl-swipe&gt;\n      &lt;<span class="hljs-keyword">div</span>&gt;\n        &lt;pl-swipe-<span class="hljs-built_in">item</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">&quot;pl-swipe-item&quot;</span>&gt;<span class="hljs-number">1</span>&lt;/pl-swipe-<span class="hljs-built_in">item</span>&gt;\n        &lt;pl-swipe-<span class="hljs-built_in">item</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">&quot;pl-swipe-item&quot;</span>&gt;<span class="hljs-number">2</span>&lt;/pl-swipe-<span class="hljs-built_in">item</span>&gt;\n        &lt;pl-swipe-<span class="hljs-built_in">item</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">&quot;pl-swipe-item&quot;</span>&gt;<span class="hljs-number">3</span>&lt;/pl-swipe-<span class="hljs-built_in">item</span>&gt;\n        &lt;pl-swipe-<span class="hljs-built_in">item</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">&quot;pl-swipe-item&quot;</span>&gt;<span class="hljs-number">4</span>&lt;/pl-swipe-<span class="hljs-built_in">item</span>&gt;\n      &lt;/<span class="hljs-keyword">div</span>&gt;\n    &lt;/pl-swipe&gt;\n  &lt;/<span class="hljs-keyword">div</span>&gt;\n&lt;/template&gt;</div>\n</code></pre>\n<h3 id="自动播放">自动播放</h3>\n<pre><code class="language-html"><div class="md-code-hijs">&lt;template&gt;\n  &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;\n    &lt;pl-swipe :auto=<span class="hljs-string">&quot;2000&quot;</span>&gt;\n      &lt;<span class="hljs-keyword">div</span>&gt;\n        &lt;pl-swipe-<span class="hljs-built_in">item</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">&quot;pl-swipe-item&quot;</span>&gt;<span class="hljs-number">1</span>&lt;/pl-swipe-<span class="hljs-built_in">item</span>&gt;\n        &lt;pl-swipe-<span class="hljs-built_in">item</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">&quot;pl-swipe-item&quot;</span>&gt;<span class="hljs-number">2</span>&lt;/pl-swipe-<span class="hljs-built_in">item</span>&gt;\n        &lt;pl-swipe-<span class="hljs-built_in">item</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">&quot;pl-swipe-item&quot;</span>&gt;<span class="hljs-number">3</span>&lt;/pl-swipe-<span class="hljs-built_in">item</span>&gt;\n        &lt;pl-swipe-<span class="hljs-built_in">item</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">&quot;pl-swipe-item&quot;</span>&gt;<span class="hljs-number">4</span>&lt;/pl-swipe-<span class="hljs-built_in">item</span>&gt;\n      &lt;/<span class="hljs-keyword">div</span>&gt;\n    &lt;/pl-swipe&gt;\n  &lt;/<span class="hljs-keyword">div</span>&gt;\n&lt;/template&gt;</div>\n</code></pre>\n<h3 id="滚动事件">滚动事件</h3>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">pl-swipe</span> @<span class="hljs-attr">scroll</span>=<span class="hljs-string">&quot;onScroll&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">pl-swipe-item</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;pl-swipe-item&quot;</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">pl-swipe-item</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">pl-swipe-item</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;pl-swipe-item&quot;</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">pl-swipe-item</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">pl-swipe-item</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;pl-swipe-item&quot;</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">pl-swipe-item</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">pl-swipe-item</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;pl-swipe-item&quot;</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">pl-swipe-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">pl-swipe</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-attr">methods</span>: {\n      onScroll (index) {\n        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;index: &#x27;</span>, index)\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<h3 id="swipe-attributes">Swipe Attributes</h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>auto</td>\n<td>自动轮播间隔，单位为 ms</td>\n<td>Number</td>\n<td>—</td>\n<td>—</td>\n</tr>\n<tr>\n<td>duration</td>\n<td>动画时长，单位为 ms</td>\n<td>Number</td>\n<td>—</td>\n<td>300</td>\n</tr>\n<tr>\n<td>index</td>\n<td>初始位置索引值</td>\n<td>Number</td>\n<td>—</td>\n<td>0</td>\n</tr>\n<tr>\n<td>loop</td>\n<td>是否开启循环播放</td>\n<td>Boolean</td>\n<td>—</td>\n<td>—</td>\n</tr>\n<tr>\n<td>indicators</td>\n<td>是否显示指示器</td>\n<td>Boolean</td>\n<td>—</td>\n<td>true</td>\n</tr>\n<tr>\n<td>indicatorColor</td>\n<td>指示器颜色</td>\n<td>String</td>\n<td>—</td>\n<td>#ffffff</td>\n</tr>\n<tr>\n<td>indicatorActiveColor</td>\n<td>指示器激活颜色</td>\n<td>String</td>\n<td>—</td>\n<td>#5074FF</td>\n</tr>\n<tr>\n<td>indicatorSize</td>\n<td>指示器大小</td>\n<td>String</td>\n<td>—</td>\n<td>0.5em</td>\n</tr>\n<tr>\n<td>vertical</td>\n<td>是否为纵向滚动</td>\n<td>Boolean</td>\n<td>—</td>\n<td>—</td>\n</tr>\n<tr>\n<td>touchable</td>\n<td>是否可以通过手势滑动</td>\n<td>Boolean</td>\n<td>—</td>\n<td>true</td>\n</tr>\n</tbody></table>\n<h3 id="swipeitem-slots">SwipeItem Slots</h3>\n<table>\n<thead>\n<tr>\n<th>name</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>(default)</td>\n<td>轮播内容</td>\n</tr>\n</tbody></table>\n<h3 id="swipe-events">Swipe Events</h3>\n<table>\n<thead>\n<tr>\n<th>事件名称</th>\n<th>说明</th>\n<th>回调参数</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>scroll</td>\n<td>轮播事件</td>\n<td>当前轮播图index</td>\n</tr>\n</tbody></table>\n'}),t.mounted=()=>{};export{t as default};
