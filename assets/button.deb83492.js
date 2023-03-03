import{z as t,A as n}from"./index.5b501510.js";const s=t({name:"Markdown"}),a=()=>n("div",{class:["md2vue-wrapper","markdown-body"],innerHTML:`<h2 id="button-\u6309\u94AE">Button \u6309\u94AE</h2>
<p>\u5E38\u7528\u7684\u64CD\u4F5C\u6309\u94AE\u3002</p>
<h3 id="\u57FA\u7840\u7528\u6CD5">\u57FA\u7840\u7528\u6CD5</h3>
<p>\u57FA\u7840\u7684\u6309\u94AE\u7528\u6CD5\u3002</p>
<p>\u4F7F\u7528<code>type</code>\u3001<code>round</code>\u548C<code>circle</code>\u5C5E\u6027\u6765\u5B9A\u4E49 Button \u7684\u6837\u5F0F\u3002</p>
<pre><code class="language-html"><div class="md-code-hijs">&lt;template&gt;
  &lt;<span class="hljs-keyword">pl</span>-button <span class="hljs-keyword">type</span>=<span class="hljs-string">&quot;default&quot;</span>&gt;\u9ED8\u8BA4\u6309\u94AE&lt;/<span class="hljs-keyword">pl</span>-button&gt;
  &lt;<span class="hljs-keyword">pl</span>-button <span class="hljs-keyword">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;\u4E3B\u8981\u6309\u94AE&lt;/<span class="hljs-keyword">pl</span>-button&gt;
  &lt;<span class="hljs-keyword">pl</span>-button <span class="hljs-keyword">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;\u6210\u529F\u6309\u94AE&lt;/<span class="hljs-keyword">pl</span>-button&gt;
  &lt;<span class="hljs-keyword">pl</span>-button <span class="hljs-keyword">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;\u8B66\u544A\u6309\u94AE&lt;/<span class="hljs-keyword">pl</span>-button&gt;
  &lt;<span class="hljs-keyword">pl</span>-button <span class="hljs-keyword">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;\u5371\u9669\u6309\u94AE&lt;/<span class="hljs-keyword">pl</span>-button&gt;

  &lt;<span class="hljs-keyword">pl</span>-button round&gt;\u5706\u89D2\u6309\u94AE&lt;/<span class="hljs-keyword">pl</span>-button&gt;
  &lt;<span class="hljs-keyword">pl</span>-button <span class="hljs-keyword">type</span>=<span class="hljs-string">&quot;primary&quot;</span> round&gt;\u4E3B\u8981\u6309\u94AE&lt;/<span class="hljs-keyword">pl</span>-button&gt;
  &lt;<span class="hljs-keyword">pl</span>-button <span class="hljs-keyword">type</span>=<span class="hljs-string">&quot;success&quot;</span> round&gt;\u6210\u529F\u6309\u94AE&lt;/<span class="hljs-keyword">pl</span>-button&gt;
  &lt;<span class="hljs-keyword">pl</span>-button <span class="hljs-keyword">type</span>=<span class="hljs-string">&quot;warning&quot;</span> round&gt;\u8B66\u544A\u6309\u94AE&lt;/<span class="hljs-keyword">pl</span>-button&gt;
  &lt;<span class="hljs-keyword">pl</span>-button <span class="hljs-keyword">type</span>=<span class="hljs-string">&quot;danger&quot;</span> round&gt;\u5371\u9669\u6309\u94AE&lt;/<span class="hljs-keyword">pl</span>-button&gt;
&lt;/template&gt;</div>
</code></pre>
<h3 id="\u7981\u7528\u72B6\u6001">\u7981\u7528\u72B6\u6001</h3>
<p>\u6309\u94AE\u4E0D\u53EF\u7528\u72B6\u6001\u3002</p>
<p>\u4F60\u53EF\u4EE5\u4F7F\u7528<code>disabled</code>\u5C5E\u6027\u6765\u5B9A\u4E49\u6309\u94AE\u662F\u5426\u53EF\u7528\uFF0C\u5B83\u63A5\u53D7\u4E00\u4E2A<code>Boolean</code>\u503C\u3002</p>
<pre><code class="language-html"><div class="md-code-hijs">&lt;template&gt;
  &lt;<span class="hljs-keyword">pl</span>-button disabled&gt;\u9ED8\u8BA4\u6309\u94AE&lt;/<span class="hljs-keyword">pl</span>-button&gt;
  &lt;<span class="hljs-keyword">pl</span>-button <span class="hljs-keyword">type</span>=<span class="hljs-string">&quot;primary&quot;</span> disabled&gt;\u4E3B\u8981\u6309\u94AE&lt;/<span class="hljs-keyword">pl</span>-button&gt;
  &lt;<span class="hljs-keyword">pl</span>-button <span class="hljs-keyword">type</span>=<span class="hljs-string">&quot;success&quot;</span> disabled&gt;\u6210\u529F\u6309\u94AE&lt;/<span class="hljs-keyword">pl</span>-button&gt;
  &lt;<span class="hljs-keyword">pl</span>-button <span class="hljs-keyword">type</span>=<span class="hljs-string">&quot;warning&quot;</span> disabled&gt;\u8B66\u544A\u6309\u94AE&lt;/<span class="hljs-keyword">pl</span>-button&gt;
  &lt;<span class="hljs-keyword">pl</span>-button <span class="hljs-keyword">type</span>=<span class="hljs-string">&quot;danger&quot;</span> disabled&gt;\u5371\u9669\u6309\u94AE&lt;/<span class="hljs-keyword">pl</span>-button&gt;
&lt;/template&gt;</div>
</code></pre>
<h3 id="\u6587\u5B57\u6309\u94AE">\u6587\u5B57\u6309\u94AE</h3>
<p>\u6CA1\u6709\u8FB9\u6846\u548C\u80CC\u666F\u8272\u7684\u6309\u94AE\u3002</p>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>\u6587\u5B57\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">pl-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>\u6587\u5B57\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">pl-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span></div>
</code></pre>
<h3 id="\u4E0D\u540C\u5C3A\u5BF8">\u4E0D\u540C\u5C3A\u5BF8</h3>
<p>Button \u7EC4\u4EF6\u63D0\u4F9B\u9664\u4E86\u9ED8\u8BA4\u503C\u4EE5\u5916\u7684\u4E09\u79CD\u5C3A\u5BF8\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u573A\u666F\u4E0B\u9009\u62E9\u5408\u9002\u7684\u6309\u94AE\u5C3A\u5BF8\u3002</p>
<p>\u989D\u5916\u7684\u5C3A\u5BF8\uFF1A<code>normal</code>\u3001<code>small</code>\u3001<code>lager</code>\uFF0C\u901A\u8FC7\u8BBE\u7F6E<code>size</code>\u5C5E\u6027\u6765\u914D\u7F6E\u5B83\u4EEC\u3002</p>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-button</span>&gt;</span>\u9ED8\u8BA4\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">pl-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>&gt;</span>\u5C0F\u578B\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">pl-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lager&quot;</span>&gt;</span>\u5927\u578B\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">pl-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span></div>
</code></pre>
<h3 id="attributes">Attributes</h3>
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
<td>size</td>
<td>\u5C3A\u5BF8</td>
<td>string</td>
<td>normal / small / lager</td>
<td>normal</td>
</tr>
<tr>
<td>type</td>
<td>\u7C7B\u578B</td>
<td>string</td>
<td>default / primary / success / warning / danger / text</td>
<td>default</td>
</tr>
<tr>
<td>round</td>
<td>\u662F\u5426\u5706\u89D2\u6309\u94AE</td>
<td>boolean</td>
<td>\u2014</td>
<td>false</td>
</tr>
<tr>
<td>circle</td>
<td>\u662F\u5426\u5706\u5F62\u6309\u94AE</td>
<td>boolean</td>
<td>\u2014</td>
<td>false</td>
</tr>
<tr>
<td>plain</td>
<td>\u662F\u5426\u7A7A\u5FC3\u6309\u94AE</td>
<td>boolean</td>
<td>\u2014</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>\u662F\u5426\u7981\u7528\u72B6\u6001</td>
<td>boolean</td>
<td>\u2014</td>
<td>false</td>
</tr>
</tbody></table>
<h3 id="slots">Slots</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td>(default)</td>
<td>\u6309\u94AEinner</td>
</tr>
</tbody></table>
`});s.render=a;s.mounted=()=>{};export{s as default};
