import{z as a,A as n}from"./index.99a447e4.js";const s=a({name:"Markdown"}),t=()=>n("div",{class:["md2vue-wrapper","markdown-body"],innerHTML:`<h2 id="collapse-\u6298\u53E0\u9762\u677F">collapse \u6298\u53E0\u9762\u677F</h2>
<h3 id="\u57FA\u7840\u7528\u6CD5">\u57FA\u7840\u7528\u6CD5</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-collapse</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;active&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9762\u677F&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u9762\u677F\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">pl-collapse</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">active</span>: <span class="hljs-literal">false</span>
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
</code></pre>
<h3 id="\u81EA\u5B9A\u4E49\u6807\u9898">\u81EA\u5B9A\u4E49\u6807\u9898</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-collapse</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">title</span>&gt;</span>\u81EA\u5B9A\u4E49\u6807\u9898<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">pl-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;icon-roundright&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">pl-icon</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u9762\u677F\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">pl-collapse</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">active</span>: <span class="hljs-literal">true</span>
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
<td>value</td>
<td>\u662F\u5426\u5C55\u5F00</td>
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
<tr>
<td>title</td>
<td>\u9762\u677F\u6807\u9898</td>
<td>String</td>
<td>\u2014</td>
<td>\u2014</td>
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
<td>\u9762\u677F\u5185\u5BB9</td>
</tr>
<tr>
<td>title</td>
<td>\u9762\u677F\u6807\u9898</td>
</tr>
<tr>
<td>icon</td>
<td>\u9762\u677F\u56FE\u6807</td>
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
<td>change</td>
<td>value\u66F4\u6539\u4E8B\u4EF6</td>
<td>\u66F4\u6539\u540E\u7684value</td>
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
<td>toggle</td>
<td>\u5C55\u5F00/\u5173\u95ED\u9762\u677F</td>
<td>\u2014</td>
</tr>
</tbody></table>
`});s.render=t;s.mounted=()=>{};export{s as default};
