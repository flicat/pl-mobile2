import{z as a,A as n}from"./index.99a447e4.js";const s=a({name:"Markdown"}),t=()=>n("div",{class:["md2vue-wrapper","markdown-body"],innerHTML:`<h2 id="upload-\u6587\u4EF6\u4E0A\u4F20">upload \u6587\u4EF6\u4E0A\u4F20</h2>
<h3 id="\u57FA\u7840\u7528\u6CD5">\u57FA\u7840\u7528\u6CD5</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-upload</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;files&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">pl-upload</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">files</span>: []
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
</code></pre>
<h3 id="\u9009\u62E9\u56FE\u7247">\u9009\u62E9\u56FE\u7247</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-upload</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;files&quot;</span> <span class="hljs-attr">accept</span>=<span class="hljs-string">&quot;image/*&quot;</span> <span class="hljs-attr">:maxCount</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">pl-upload</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">files</span>: []   <span class="hljs-comment">// \u53EA\u80FD\u9009\u53D63\u5F20</span>
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
</code></pre>
<h3 id="\u6587\u4EF6\u8BFB\u53D6\u524D\u7684\u56DE\u8C03\u51FD\u6570">\u6587\u4EF6\u8BFB\u53D6\u524D\u7684\u56DE\u8C03\u51FD\u6570</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-upload</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;files&quot;</span> <span class="hljs-attr">accept</span>=<span class="hljs-string">&quot;image/*&quot;</span> <span class="hljs-attr">:beforeRead</span>=<span class="hljs-string">&quot;beforeRead&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">pl-upload</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">files</span>: []
      }
    },
    <span class="hljs-attr">methods</span>: {
      beforeRead (files) {
        <span class="hljs-keyword">return</span> files[<span class="hljs-number">0</span>] &amp;&amp; <span class="hljs-regexp">/\\.png$/</span>.test(files[<span class="hljs-number">0</span>].name) <span class="hljs-comment">// \u53EA\u80FD\u9009\u62E9png\u56FE\u7247</span>
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
</code></pre>
<h3 id="\u6587\u4EF6\u6570\u91CF\u548C\u5927\u5C0F\u8D85\u51FA\u4E8B\u4EF6">\u6587\u4EF6\u6570\u91CF\u548C\u5927\u5C0F\u8D85\u51FA\u4E8B\u4EF6</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-upload</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;files&quot;</span> <span class="hljs-attr">accept</span>=<span class="hljs-string">&quot;image/*&quot;</span> <span class="hljs-attr">:maxSize</span>=<span class="hljs-string">&quot;100000&quot;</span> <span class="hljs-attr">:maxCount</span>=<span class="hljs-string">&quot;4&quot;</span> @<span class="hljs-attr">oversize</span>=<span class="hljs-string">&quot;oversize&quot;</span> @<span class="hljs-attr">exceed</span>=<span class="hljs-string">&quot;exceed&quot;</span> <span class="hljs-attr">multiple</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">pl-upload</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">files</span>: []
      }
    },
    <span class="hljs-attr">methods</span>: {
      oversize (files) {
        <span class="hljs-built_in">this</span>.$toast(<span class="hljs-string">\`<span class="hljs-subst">\${files.map(file =&gt; file.name).join(<span class="hljs-string">&#x27;\u3001&#x27;</span>)}</span>\u8D85\u51FA\u6700\u5927\u9650\u5236\`</span>)
      },
      exceed (size) {
        <span class="hljs-built_in">this</span>.$toast(<span class="hljs-string">\`\u6587\u4EF6\u6570\u91CF\u5DF2\u8D85\u51FA<span class="hljs-subst">\${size}</span>\u5F20\`</span>)
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
</code></pre>
<h3 id="\u81EA\u5B9A\u4E49\u7EC4\u4EF6">\u81EA\u5B9A\u4E49\u7EC4\u4EF6</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-upload</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;files&quot;</span> <span class="hljs-attr">accept</span>=<span class="hljs-string">&quot;image/*&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;file-upload&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:tips</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>\u8BF7\u9009\u62E9\u56FE\u7247\uFF0C\u683C\u5F0F\u4E0D\u9650<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot</span>=<span class="hljs-string">&quot;scope&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">pl-button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;home&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;setHomePage(scope.file)&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">pl-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;icon-unlock&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">pl-icon</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">pl-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">pl-button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;add&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>&gt;</span>\u6DFB\u52A0\u56FE\u7247<span class="hljs-tag">&lt;/<span class="hljs-name">pl-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:close</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">pl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>&gt;</span>\u5173\u95ED<span class="hljs-tag">&lt;/<span class="hljs-name">pl-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">pl-upload</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">files</span>: []
      }
    },
    <span class="hljs-attr">methods</span>: {
      setHomePage (file) {
        <span class="hljs-built_in">console</span>.log(file)
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="css">
  <span class="hljs-selector-class">.file-upload</span> {
    <span class="hljs-attribute">position</span>: relative;
  }
  <span class="hljs-selector-class">.home</span> {
    <span class="hljs-attribute">position</span>: absolute;
    <span class="hljs-attribute">left</span>: <span class="hljs-number">50%</span>;
    <span class="hljs-attribute">top</span>: <span class="hljs-number">50%</span>;
    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate</span>(-<span class="hljs-number">50%</span>, -<span class="hljs-number">50%</span>);
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
<td>accept</td>
<td>\u63A5\u53D7\u7684\u6587\u4EF6\u7C7B\u578B</td>
<td>String</td>
<td>\u2014</td>
<td>* / *</td>
</tr>
<tr>
<td>rows</td>
<td>\u6BCF\u4E00\u884C\u663E\u793A\u7684\u6587\u4EF6\u6570\u91CF</td>
<td>Number</td>
<td>\u2014</td>
<td>4</td>
</tr>
<tr>
<td>multiple</td>
<td>\u662F\u5426\u5F00\u542F\u56FE\u7247\u591A\u9009</td>
<td>Boolean</td>
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
<td>capture</td>
<td>\u56FE\u7247\u9009\u53D6\u6A21\u5F0F</td>
<td>String</td>
<td>camera</td>
<td>\u2014</td>
</tr>
<tr>
<td>beforeRead</td>
<td>\u6587\u4EF6\u8BFB\u53D6\u524D\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DEfalse\u53EF\u7EC8\u6B62\u6587\u4EF6\u8BFB\u53D6</td>
<td>Function</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>afterRead</td>
<td>\u6587\u4EF6\u8BFB\u53D6\u5B8C\u6210\u540E\u7684\u56DE\u8C03\u51FD\u6570</td>
<td>Function</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>maxSize</td>
<td>\u6587\u4EF6\u5927\u5C0F\u9650\u5236\uFF0C\u5355\u4F4D\u4E3Abyte</td>
<td>Number</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>maxCount</td>
<td>\u6587\u4EF6\u4E0A\u4F20\u6570\u91CF\u9650\u5236</td>
<td>Number</td>
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
<td>\u81EA\u5B9A\u4E49\u5185\u5BB9</td>
</tr>
<tr>
<td>tips</td>
<td>\u63D0\u793A\u6587\u5B57</td>
</tr>
<tr>
<td>button</td>
<td>\u56FE\u7247\u6DFB\u52A0\u6309\u94AE</td>
</tr>
<tr>
<td>close</td>
<td>\u56FE\u7247\u5220\u9664\u6309\u94AE</td>
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
<tr>
<td>oversize</td>
<td>\u6587\u4EF6\u5927\u5C0F\u8D85\u51FA\u9650\u5236\u4E8B\u4EF6</td>
<td>\u8D85\u51FA\u5927\u5C0F\u7684\u6587\u4EF6\u5217\u8868</td>
</tr>
<tr>
<td>exceed</td>
<td>\u6587\u4EF6\u6570\u91CF\u8D85\u51FA\u9650\u5236\u4E8B\u4EF6</td>
<td>\u8D85\u51FA\u7684\u6570\u91CF</td>
</tr>
</tbody></table>
`});s.render=t;s.mounted=()=>{};export{s as default};
