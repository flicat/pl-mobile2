import{z as a,A as n}from"./index.32860cbf.js";const s=a({name:"Markdown"}),t=()=>n("div",{class:["md2vue-wrapper","markdown-body"],innerHTML:`<h2 id="canvas-\u7B7E\u5B57\u677F">canvas \u7B7E\u5B57\u677F</h2>
<h3 id="\u57FA\u7840\u7528\u6CD5">\u57FA\u7840\u7528\u6CD5</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-canvas</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;canvas&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;canvas&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">pl-canvas</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;clear&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u6E05\u9664\u753B\u5E03<span class="hljs-tag">&lt;/<span class="hljs-name">pl-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;getImageDataUrl&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u83B7\u53D6dataURL<span class="hljs-tag">&lt;/<span class="hljs-name">pl-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">let</span> src = ref(<span class="hljs-string">&#x27;&#x27;</span>)
    <span class="hljs-keyword">let</span> canvas = ref(<span class="hljs-literal">null</span>)
    <span class="hljs-comment">// \u6E05\u9664\u753B\u5E03</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">clear</span>(<span class="hljs-params"></span>) </span>{
      canvas.value.clear()
    }
    <span class="hljs-comment">// \u83B7\u53D6\u753B\u5E03\u5185\u5BB9 DataUrl</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getImageDataUrl</span>(<span class="hljs-params"></span>) </span>{
      <span class="hljs-keyword">let</span> result = canvas.value.getImageDataUrl()
      src.value = result
    }

    <span class="hljs-keyword">return</span> {
      canvas,
      clear,
      getImageDataUrl
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
</code></pre>
<h3 id="\u83B7\u53D6-jpg-\u683C\u5F0F\u7684-blob-\u56FE\u7247\u5BF9\u8C61">\u83B7\u53D6 jpg \u683C\u5F0F\u7684 Blob \u56FE\u7247\u5BF9\u8C61</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-canvas</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;canvas&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;canvas&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">pl-canvas</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;getImageBlob&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u83B7\u53D6BLob<span class="hljs-tag">&lt;/<span class="hljs-name">pl-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">let</span> src = ref(<span class="hljs-string">&#x27;&#x27;</span>)
    <span class="hljs-keyword">let</span> canvas = ref(<span class="hljs-literal">null</span>)

    <span class="hljs-comment">// \u83B7\u53D6blob</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getImageBlob</span>(<span class="hljs-params"></span>) </span>{
      <span class="hljs-keyword">let</span> result = canvas.value.getImageBlob(<span class="hljs-string">&#x27;image/jpeg&#x27;</span>)
      src.value = URL.createObjectURL(result)
    }

    <span class="hljs-keyword">return</span> {
      canvas,
      getImageBlob
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
</code></pre>
<h3 id="\u6A2A\u5411\u753B\u677F">\u6A2A\u5411\u753B\u677F</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-canvas</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;canvas&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;canvas&quot;</span> <span class="hljs-attr">orientation</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;placeholder&quot;</span>&gt;</span>\u8BF7\u5728\u6B64\u5904\u7B7E\u540D<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">pl-canvas</span>&gt;</span>
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
<td>\u7B14\u89E6\u5927\u5C0F</td>
<td>Number</td>
<td>\u2014</td>
<td>14</td>
</tr>
<tr>
<td>orientation</td>
<td>\u753B\u5E03\u671D\u5411</td>
<td>String</td>
<td>top / right / bottom / left</td>
<td>top</td>
</tr>
<tr>
<td>penId</td>
<td>\u7B14\u89E6id</td>
<td>Number</td>
<td>0 / 1</td>
<td>0</td>
</tr>
<tr>
<td>fillStyle</td>
<td>canvas\u80CC\u666F\u8272\uFF0C\u8BBE\u7F6E\u540E\u4F1A\u906E\u6321\u4F4Fplaceholder\uFF0C\u5982\u679C\u9700\u8981\u5BFC\u51FAjpg\u56FE\u7247\uFF0C\u5219\u5FC5\u987B\u8BBE\u7F6E\uFF0C\u5426\u5219\u4F1A\u4EA7\u751F\u9ED1\u5E95</td>
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
<td>placeholder</td>
<td>\u753B\u5E03\u7A7A\u767D\u906E\u7F69</td>
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
<td>clear</td>
<td>\u6E05\u7A7A\u753B\u677F</td>
<td>\u2014</td>
</tr>
<tr>
<td>getImageDataUrl</td>
<td>\u83B7\u53D6\u56FE\u50CF DataUrl</td>
<td>[type, encoderOptions]</td>
</tr>
<tr>
<td>getImageBlob</td>
<td>\u83B7\u53D6\u56FE\u50CF Blob</td>
<td>[type, encoderOptions]</td>
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
<td>drawStart</td>
<td>\u5F00\u59CB\u7ED8\u753B</td>
<td>\u2014</td>
</tr>
<tr>
<td>drawing</td>
<td>\u7ED8\u753B\u4E2D</td>
<td>\u2014</td>
</tr>
<tr>
<td>drawEnd</td>
<td>\u7ED8\u753B\u7ED3\u675F</td>
<td>\u2014</td>
</tr>
<tr>
<td>clear</td>
<td>\u6E05\u9664\u753B\u5E03</td>
<td>\u2014</td>
</tr>
</tbody></table>
`});s.render=t;s.mounted=()=>{};export{s as default};
