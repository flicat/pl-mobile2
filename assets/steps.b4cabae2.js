import{z as a,A as n}from"./index.11097e3e.js";const s=a({name:"Markdown"}),t=()=>n("div",{class:["md2vue-wrapper","markdown-body"],innerHTML:`<h2 id="steps-\u6B65\u9AA4\u6761">steps \u6B65\u9AA4\u6761</h2>
<h3 id="\u57FA\u7840\u7528\u6CD5">\u57FA\u7840\u7528\u6CD5</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-steps</span> <span class="hljs-attr">:active</span>=<span class="hljs-string">&quot;0&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">pl-step-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">h4</span>&gt;</span>\u6B65\u9AA4\u4E00\u7684\u6807\u9898<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u6B65\u9AA4\u4E00\u7684\u63CF\u8FF0<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">pl-step-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">pl-step-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">h4</span>&gt;</span>\u6B65\u9AA4\u4E8C\u7684\u6807\u9898<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u6B65\u9AA4\u4E8C\u7684\u63CF\u8FF0<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">pl-step-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">pl-step-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">h4</span>&gt;</span>\u6B65\u9AA4\u4E09\u7684\u6807\u9898<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u6B65\u9AA4\u4E09\u7684\u63CF\u8FF0<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">pl-step-item</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">pl-steps</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span></div>
</code></pre>
<h3 id="\u6A2A\u5411\u6B65\u9AA4\u6761">\u6A2A\u5411\u6B65\u9AA4\u6761</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-steps</span> <span class="hljs-attr">:active</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;horizontal&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">pl-step-item</span>&gt;</span>\u6B65\u9AA4\u4E00<span class="hljs-tag">&lt;/<span class="hljs-name">pl-step-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">pl-step-item</span>&gt;</span>\u6B65\u9AA4\u4E8C<span class="hljs-tag">&lt;/<span class="hljs-name">pl-step-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">pl-step-item</span>&gt;</span>\u6B65\u9AA4\u4E09<span class="hljs-tag">&lt;/<span class="hljs-name">pl-step-item</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">pl-steps</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span></div>
</code></pre>
<h3 id="steps-attributes">Steps Attributes</h3>
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
<td>active</td>
<td>\u5F53\u524D\u6B65\u9AA4</td>
<td>Number</td>
<td>\u2014</td>
<td>0</td>
</tr>
<tr>
<td>activeColor</td>
<td>\u5F53\u524D\u6FC0\u6D3B\u7684\u989C\u8272</td>
<td>String</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>inactiveColor</td>
<td>\u4E0D\u6FC0\u6D3B\u7684\u989C\u8272</td>
<td>String</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>direction</td>
<td>\u663E\u793A\u65B9\u5411</td>
<td>String</td>
<td>vertical / horizontal</td>
<td>vertical</td>
</tr>
<tr>
<td>showFold</td>
<td>\u662F\u5426\u663E\u793A\u6298\u53E0\u6309\u94AE</td>
<td>Boolean</td>
<td>\u2014</td>
<td>false</td>
</tr>
<tr>
<td>fold</td>
<td>\u662F\u5426\u9ED8\u8BA4\u6298\u53E0</td>
<td>Boolean</td>
<td>\u2014</td>
<td>false</td>
</tr>
</tbody></table>
<h3 id="stepitem-slots">StepItem Slots</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td>(default)</td>
<td>\u5217\u8868\u5B50\u9009\u9879</td>
</tr>
<tr>
<td>icon</td>
<td>\u6B65\u9AA4\u56FE\u6807</td>
</tr>
</tbody></table>
`});s.render=t;s.mounted=()=>{};export{s as default};
