import{z as t,A as n}from"./index.99a447e4.js";const s=t({name:"Markdown"}),a=()=>n("div",{class:["md2vue-wrapper","markdown-body"],innerHTML:`<h2 id="steps-\u6B65\u9AA4\u6761">steps \u6B65\u9AA4\u6761</h2>
<h3 id="\u57FA\u7840\u7528\u6CD5">\u57FA\u7840\u7528\u6CD5</h3>
<pre><code class="language-html"><div class="md-code-hijs">&lt;template&gt;
  &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;
    &lt;pl-swipe&gt;
      &lt;<span class="hljs-keyword">div</span>&gt;
        &lt;pl-swipe-<span class="hljs-built_in">item</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">&quot;pl-swipe-item&quot;</span>&gt;<span class="hljs-number">1</span>&lt;/pl-swipe-<span class="hljs-built_in">item</span>&gt;
        &lt;pl-swipe-<span class="hljs-built_in">item</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">&quot;pl-swipe-item&quot;</span>&gt;<span class="hljs-number">2</span>&lt;/pl-swipe-<span class="hljs-built_in">item</span>&gt;
        &lt;pl-swipe-<span class="hljs-built_in">item</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">&quot;pl-swipe-item&quot;</span>&gt;<span class="hljs-number">3</span>&lt;/pl-swipe-<span class="hljs-built_in">item</span>&gt;
        &lt;pl-swipe-<span class="hljs-built_in">item</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">&quot;pl-swipe-item&quot;</span>&gt;<span class="hljs-number">4</span>&lt;/pl-swipe-<span class="hljs-built_in">item</span>&gt;
      &lt;/<span class="hljs-keyword">div</span>&gt;
    &lt;/pl-swipe&gt;
  &lt;/<span class="hljs-keyword">div</span>&gt;
&lt;/template&gt;</div>
</code></pre>
<h3 id="\u81EA\u52A8\u64AD\u653E">\u81EA\u52A8\u64AD\u653E</h3>
<pre><code class="language-html"><div class="md-code-hijs">&lt;template&gt;
  &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;
    &lt;pl-swipe :auto=<span class="hljs-string">&quot;2000&quot;</span>&gt;
      &lt;<span class="hljs-keyword">div</span>&gt;
        &lt;pl-swipe-<span class="hljs-built_in">item</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">&quot;pl-swipe-item&quot;</span>&gt;<span class="hljs-number">1</span>&lt;/pl-swipe-<span class="hljs-built_in">item</span>&gt;
        &lt;pl-swipe-<span class="hljs-built_in">item</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">&quot;pl-swipe-item&quot;</span>&gt;<span class="hljs-number">2</span>&lt;/pl-swipe-<span class="hljs-built_in">item</span>&gt;
        &lt;pl-swipe-<span class="hljs-built_in">item</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">&quot;pl-swipe-item&quot;</span>&gt;<span class="hljs-number">3</span>&lt;/pl-swipe-<span class="hljs-built_in">item</span>&gt;
        &lt;pl-swipe-<span class="hljs-built_in">item</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">&quot;pl-swipe-item&quot;</span>&gt;<span class="hljs-number">4</span>&lt;/pl-swipe-<span class="hljs-built_in">item</span>&gt;
      &lt;/<span class="hljs-keyword">div</span>&gt;
    &lt;/pl-swipe&gt;
  &lt;/<span class="hljs-keyword">div</span>&gt;
&lt;/template&gt;</div>
</code></pre>
<h3 id="\u6EDA\u52A8\u4E8B\u4EF6">\u6EDA\u52A8\u4E8B\u4EF6</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">pl-swipe</span> @<span class="hljs-attr">scroll</span>=<span class="hljs-string">&quot;onScroll&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">pl-swipe-item</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;pl-swipe-item&quot;</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">pl-swipe-item</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">pl-swipe-item</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;pl-swipe-item&quot;</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">pl-swipe-item</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">pl-swipe-item</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;pl-swipe-item&quot;</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">pl-swipe-item</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">pl-swipe-item</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;pl-swipe-item&quot;</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">pl-swipe-item</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">pl-swipe</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">methods</span>: {
      onScroll (index) {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;index: &#x27;</span>, index)
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
</code></pre>
<h3 id="swipe-attributes">Swipe Attributes</h3>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u53EF\u9009\u503C</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td>auto</td>
<td>\u81EA\u52A8\u8F6E\u64AD\u95F4\u9694\uFF0C\u5355\u4F4D\u4E3A ms</td>
<td>Number</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>duration</td>
<td>\u52A8\u753B\u65F6\u957F\uFF0C\u5355\u4F4D\u4E3A ms</td>
<td>Number</td>
<td>\u2014</td>
<td>300</td>
</tr>
<tr>
<td>index</td>
<td>\u521D\u59CB\u4F4D\u7F6E\u7D22\u5F15\u503C</td>
<td>Number</td>
<td>\u2014</td>
<td>0</td>
</tr>
<tr>
<td>loop</td>
<td>\u662F\u5426\u5F00\u542F\u5FAA\u73AF\u64AD\u653E</td>
<td>Boolean</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>indicators</td>
<td>\u662F\u5426\u663E\u793A\u6307\u793A\u5668</td>
<td>Boolean</td>
<td>\u2014</td>
<td>true</td>
</tr>
<tr>
<td>indicatorColor</td>
<td>\u6307\u793A\u5668\u989C\u8272</td>
<td>String</td>
<td>\u2014</td>
<td>#ffffff</td>
</tr>
<tr>
<td>indicatorActiveColor</td>
<td>\u6307\u793A\u5668\u6FC0\u6D3B\u989C\u8272</td>
<td>String</td>
<td>\u2014</td>
<td>#5074FF</td>
</tr>
<tr>
<td>indicatorSize</td>
<td>\u6307\u793A\u5668\u5927\u5C0F</td>
<td>String</td>
<td>\u2014</td>
<td>0.5em</td>
</tr>
<tr>
<td>vertical</td>
<td>\u662F\u5426\u4E3A\u7EB5\u5411\u6EDA\u52A8</td>
<td>Boolean</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>touchable</td>
<td>\u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u624B\u52BF\u6ED1\u52A8</td>
<td>Boolean</td>
<td>\u2014</td>
<td>true</td>
</tr>
<tr>
<td>pageSize</td>
<td>\u6BCF\u9875\u5C55\u793A\u7684\u8F6E\u64AD\u56FE\u6570\u91CF</td>
<td>Number</td>
<td>1</td>
<td></td>
</tr>
<tr>
<td>scrollSize</td>
<td>\u6BCF\u9875\u6EDA\u52A8\u7684\u8F6E\u64AD\u56FE\u6570\u91CF</td>
<td>Number</td>
<td>1</td>
<td></td>
</tr>
<tr>
<td>reverse</td>
<td>\u662F\u5426\u53CD\u5411\u6EDA\u52A8</td>
<td>Boolean</td>
<td>false</td>
<td></td>
</tr>
</tbody></table>
<h3 id="swipe-slots">Swipe Slots</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td>indicators</td>
<td>\u8F6E\u64AD\u6307\u793A\u5668</td>
</tr>
</tbody></table>
<h3 id="swipeitem-slots">SwipeItem Slots</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td>(default)</td>
<td>\u8F6E\u64AD\u5185\u5BB9</td>
</tr>
</tbody></table>
<h3 id="swipe-events">Swipe Events</h3>
<table>
<thead>
<tr>
<th>\u4E8B\u4EF6\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
<th>\u56DE\u8C03\u53C2\u6570</th>
</tr>
</thead>
<tbody><tr>
<td>scroll</td>
<td>\u8F6E\u64AD\u4E8B\u4EF6</td>
<td>\u5F53\u524D\u8F6E\u64AD\u56FEindex</td>
</tr>
</tbody></table>
`});s.render=a;s.mounted=()=>{};export{s as default};
