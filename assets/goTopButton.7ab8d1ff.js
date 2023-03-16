import{z as a,A as n}from"./index.32860cbf.js";const s=a({name:"Markdown"}),l=()=>n("div",{class:["md2vue-wrapper","markdown-body"],innerHTML:`<h2 id="gotopbutton-\u8FD4\u56DE\u9876\u90E8\u6309\u94AE">goTopButton \u8FD4\u56DE\u9876\u90E8\u6309\u94AE</h2>
<h3 id="\u57FA\u7840\u7528\u6CD5">\u57FA\u7840\u7528\u6CD5</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;wrap&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;wrap&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">pl-go-top-button</span> <span class="hljs-attr">:target</span>=<span class="hljs-string">&quot;wrap&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">wrap</span>: <span class="hljs-literal">null</span>
      }
    },
    mounted () {
      <span class="hljs-built_in">this</span>.wrap = <span class="hljs-built_in">this</span>.$refs.wrap.parentNode
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
  <span class="hljs-selector-tag">html</span>,<span class="hljs-selector-tag">body</span>,<span class="hljs-selector-class">.wrap</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
  }
  <span class="hljs-selector-class">.wrap</span> {
    <span class="hljs-attribute">overflow</span>: auto;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span></div>
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
<td>target</td>
<td>\u6EDA\u52A8\u5BB9\u5668</td>
<td>Node/window</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>offset</td>
<td>\u504F\u79FB\u91CF\uFF0C\u5F53\u5BB9\u5668\u6EDA\u52A8\u5927\u4E8Eoffset\u5219\u663E\u793A\u6309\u94AE</td>
<td>Number</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
</tbody></table>
`});s.render=l;s.mounted=()=>{};export{s as default};
