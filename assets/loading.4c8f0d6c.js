import{z as a,A as n}from"./index.99a447e4.js";const s=a({name:"Markdown"}),l=()=>n("div",{class:["md2vue-wrapper","markdown-body"],innerHTML:`<h2 id="loading-\u52A0\u8F7D\u56FE\u6807">loading \u52A0\u8F7D\u56FE\u6807</h2>
<h3 id="\u57FA\u7840\u7528\u6CD5">\u57FA\u7840\u7528\u6CD5</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-loading</span>&gt;</span>\u52A0\u8F7D\u4E2D\u2026<span class="hljs-tag">&lt;/<span class="hljs-name">pl-loading</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span></div>
</code></pre>
<h3 id="\u5168\u5C40\u8C03\u7528">\u5168\u5C40\u8C03\u7528</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { getCurrentInstance } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> app = getCurrentInstance()
    <span class="hljs-keyword">const</span> { $loading } = app.appContext.config.globalProperties

    <span class="hljs-keyword">const</span> showLoading = <span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">let</span> loading = $loading({ <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u52A0\u8F7D\u4E2D\u2026&#x27;</span> })

      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        loading.close()
      }, <span class="hljs-number">2000</span>)
    }

    <span class="hljs-keyword">return</span> {
      showLoading
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
</code></pre>
<h3 id="\u5C40\u90E8\u8C03\u7528">\u5C40\u90E8\u8C03\u7528</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;box&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;loadingBox&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { getCurrentInstance, ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> app = getCurrentInstance()
    <span class="hljs-keyword">const</span> { $loading } = app.appContext.config.globalProperties

    <span class="hljs-keyword">const</span> loadingBox = ref(<span class="hljs-literal">null</span>)

    <span class="hljs-keyword">const</span> showPartLoading = <span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">let</span> loading = $loading({ <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u52A0\u8F7D\u4E2D\u2026&#x27;</span>, <span class="hljs-attr">target</span>: loadingBox.value })

      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        loading.close()
      }, <span class="hljs-number">2000</span>)
    }

    <span class="hljs-keyword">return</span> {
      loadingBox,
      showPartLoading
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
</code></pre>
<h3 id="\u6307\u4EE4\u8C03\u7528">\u6307\u4EE4\u8C03\u7528</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;isShow=!isShow&quot;</span>&gt;</span></span><span class="hljs-template-variable">{{<span class="hljs-name">isShow</span> ? <span class="hljs-string">&#x27;\u5173\u95ED&#x27;</span> : <span class="hljs-string">&#x27;\u6253\u5F00&#x27;</span>}}</span><span class="xml">loading\u6307\u4EE4<span class="hljs-tag">&lt;/<span class="hljs-name">pl-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;box&quot;</span> <span class="hljs-attr">v-loading</span>=<span class="hljs-string">&quot;isShow&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> isShow = ref(<span class="hljs-literal">false</span>)

    <span class="hljs-keyword">return</span> {
      isShow
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></div>
</code></pre>
<h3 id="\u591A\u6307\u4EE4\u8C03\u7528">\u591A\u6307\u4EE4\u8C03\u7528</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;isShow=!isShow&quot;</span>&gt;</span></span><span class="hljs-template-variable">{{<span class="hljs-name">isShow</span> ? <span class="hljs-string">&#x27;\u5173\u95ED&#x27;</span> : <span class="hljs-string">&#x27;\u6253\u5F00&#x27;</span>}}</span><span class="xml">\u6307\u4EE41<span class="hljs-tag">&lt;/<span class="hljs-name">pl-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;isShow2=!isShow2&quot;</span>&gt;</span></span><span class="hljs-template-variable">{{<span class="hljs-name">isShow2</span> ? <span class="hljs-string">&#x27;\u5173\u95ED&#x27;</span> : <span class="hljs-string">&#x27;\u6253\u5F00&#x27;</span>}}</span><span class="xml">\u6307\u4EE42<span class="hljs-tag">&lt;/<span class="hljs-name">pl-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;box&quot;</span> <span class="hljs-attr">v-loading:</span>\u767B\u5F55\u4E2D\u2026=<span class="hljs-string">&quot;isShow&quot;</span> <span class="hljs-attr">v-loading:</span>\u52A0\u8F7D\u4E2D\u2026=<span class="hljs-string">&quot;isShow2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> isShow = ref(<span class="hljs-literal">false</span>)
    <span class="hljs-keyword">const</span> isShow2 = ref(<span class="hljs-literal">false</span>)

    <span class="hljs-keyword">return</span> {
      isShow,
      isShow2
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></div>
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
<td>vertical</td>
<td>\u662F\u5426\u5782\u76F4\u6392\u5217</td>
<td>Boolean</td>
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
<td>loading\u63D0\u793A\u6587\u5B57</td>
</tr>
</tbody></table>
<h3 id="global-methods">Global Methods</h3>
<table>
<thead>
<tr>
<th>\u65B9\u6CD5\u540D</th>
<th>\u8BF4\u660E</th>
<th>\u53C2\u6570</th>
<th>\u8FD4\u56DE\u503C</th>
</tr>
</thead>
<tbody><tr>
<td>$loading</td>
<td>\u6253\u5F00loading</td>
<td>[Options]</td>
<td>LoadingObject</td>
</tr>
</tbody></table>
<h3 id="options">Options</h3>
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
<td>text</td>
<td>loading\u6587\u5B57</td>
<td>String</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>vertical</td>
<td>\u662F\u5426\u5782\u76F4\u6392\u5217</td>
<td>Boolean</td>
<td>\u2014</td>
<td>false</td>
</tr>
<tr>
<td>target</td>
<td>loading\u7236\u8282\u70B9</td>
<td>Node</td>
<td>\u2014</td>
<td>document.body</td>
</tr>
</tbody></table>
<h3 id="loadingobject">LoadingObject</h3>
<table>
<thead>
<tr>
<th>\u65B9\u6CD5\u540D</th>
<th>\u8BF4\u660E</th>
<th>\u53C2\u6570</th>
<th>\u8FD4\u56DE\u503C</th>
</tr>
</thead>
<tbody><tr>
<td>close</td>
<td>\u5173\u95EDloading</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
</tbody></table>
`});s.render=l;s.mounted=()=>{};export{s as default};
