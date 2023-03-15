import{z as n,A as s}from"./index.11097e3e.js";const t=n({name:"Markdown"}),a=()=>s("div",{class:["md2vue-wrapper","markdown-body"],innerHTML:`<h2 id="popup-\u5F39\u51FA\u6846">popup \u5F39\u51FA\u6846</h2>
<h3 id="\u57FA\u7840\u7528\u6CD5">\u57FA\u7840\u7528\u6CD5</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-popup</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;popup&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;popup-inner&quot;</span>&gt;</span>\u8FD9\u662F\u4E00\u4E2A\u5F39\u6846<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">pl-popup</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">methods</span>: {
      open () {
        <span class="hljs-built_in">this</span>.$refs.popup.open()
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
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
<td>position</td>
<td>\u5F39\u7A97\u4F4D\u7F6E</td>
<td>String</td>
<td>top / bottom / right / left / center</td>
<td>center</td>
</tr>
<tr>
<td>clickClose</td>
<td>\u70B9\u51FB\u80CC\u666F\u5173\u95ED\u5F39\u7A97</td>
<td>Boolean</td>
<td>\u2014</td>
<td>true</td>
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
<td>\u5F39\u7A97\u5185\u5BB9</td>
</tr>
</tbody></table>
<h3 id="events">Events</h3>
<table>
<thead>
<tr>
<th>\u4E8B\u4EF6\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
<th>\u56DE\u8C03\u53C2\u6570</th>
</tr>
</thead>
<tbody><tr>
<td>open</td>
<td>\u5F39\u7A97\u6253\u5F00\u4E8B\u4EF6</td>
<td>\u2014</td>
</tr>
<tr>
<td>close</td>
<td>\u5F39\u7A97\u5173\u95ED\u4E8B\u4EF6</td>
<td>\u2014</td>
</tr>
</tbody></table>
<h3 id="methods">Methods</h3>
<table>
<thead>
<tr>
<th>\u65B9\u6CD5\u540D</th>
<th>\u8BF4\u660E</th>
<th>\u53C2\u6570</th>
</tr>
</thead>
<tbody><tr>
<td>open</td>
<td>\u6253\u5F00\u5F39\u7A97</td>
<td>\u2014</td>
</tr>
<tr>
<td>close</td>
<td>\u5173\u95ED\u5F39\u7A97</td>
<td>\u2014</td>
</tr>
</tbody></table>
`});t.render=a;t.mounted=()=>{};export{t as default};
