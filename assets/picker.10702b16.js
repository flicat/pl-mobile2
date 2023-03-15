import{z as a,A as n}from"./index.99a447e4.js";const s=a({name:"Markdown"}),l=()=>n("div",{class:["md2vue-wrapper","markdown-body"],innerHTML:`<h2 id="picker-\u6ED1\u52A8\u9009\u62E9\u6846">picker \u6ED1\u52A8\u9009\u62E9\u6846</h2>
<h3 id="\u57FA\u7840\u7528\u6CD5">\u57FA\u7840\u7528\u6CD5</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;open&quot;</span>&gt;</span>\u6253\u5F00<span class="hljs-tag">&lt;/<span class="hljs-name">pl-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">value</span>: [<span class="hljs-number">2</span>, <span class="hljs-number">6</span>],
        <span class="hljs-attr">options</span>: {
          <span class="hljs-attr">children</span>: [
            {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98791&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">children</span>: [
              {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u5B50\u9009\u98793&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">3</span>},
              {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u5B50\u9009\u98794&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">4</span>}
            ]},
            {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98792&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">children</span>: [
              {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u5B50\u9009\u98795&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">5</span>},
              {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u5B50\u9009\u98796&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">6</span>}
            ]}
          ]
        },
        <span class="hljs-attr">prop</span>: {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;label&#x27;</span>,
          <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;value&#x27;</span>,
          <span class="hljs-attr">children</span>: <span class="hljs-string">&#x27;children&#x27;</span>
        }
      }
    },
    <span class="hljs-attr">methods</span>: {
      open () {
        <span class="hljs-built_in">this</span>.$picker({
          <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;\u8BF7\u9009\u62E9&#x27;</span>,
          <span class="hljs-attr">defaultValue</span>: <span class="hljs-built_in">this</span>.value,
          <span class="hljs-attr">options</span>: <span class="hljs-built_in">this</span>.options,
          <span class="hljs-attr">prop</span>: <span class="hljs-built_in">this</span>.prop,
          <span class="hljs-attr">submit</span>: <span class="hljs-function">(<span class="hljs-params">result</span>) =&gt;</span> {
            <span class="hljs-built_in">this</span>.value = result
          },
          <span class="hljs-attr">cancel</span>: <span class="hljs-function">() =&gt;</span> {
            <span class="hljs-comment">// \u53D6\u6D88\u9009\u62E9</span>
          }
        })
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
</code></pre>
<h3 id="\u52A8\u6001\u751F\u6210">\u52A8\u6001\u751F\u6210</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">pl-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;open&quot;</span>&gt;</span>\u6253\u5F00<span class="hljs-tag">&lt;/<span class="hljs-name">pl-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">value</span>: []
      }
    },
    <span class="hljs-attr">methods</span>: {
      open () {
        <span class="hljs-built_in">this</span>.$picker({
          <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;\u8BF7\u9009\u62E9&#x27;</span>,
          <span class="hljs-attr">defaultValue</span>: result.value,
          <span class="hljs-attr">options</span>: [
            <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
              <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Array</span>(<span class="hljs-number">20</span>).fill(<span class="hljs-string">&#x27;&#x27;</span>).map(<span class="hljs-function">(<span class="hljs-params">i, index</span>) =&gt;</span> ({ <span class="hljs-attr">label</span>: index + <span class="hljs-number">1990</span> + <span class="hljs-string">&#x27;\u5E74&#x27;</span>, <span class="hljs-attr">value</span>: index + <span class="hljs-number">1990</span> }))
            },
            <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">year</span>) </span>{
              <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Array</span>(<span class="hljs-number">12</span>).fill(<span class="hljs-string">&#x27;&#x27;</span>).map(<span class="hljs-function">(<span class="hljs-params">i, index</span>) =&gt;</span> ({ <span class="hljs-attr">label</span>: index + <span class="hljs-number">1</span> + <span class="hljs-string">&#x27;\u6708&#x27;</span>, <span class="hljs-attr">value</span>: index + <span class="hljs-number">1</span> }))
            },
            <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">year, month</span>) </span>{
              <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Array</span>(<span class="hljs-number">30</span>).fill(<span class="hljs-string">&#x27;&#x27;</span>).map(<span class="hljs-function">(<span class="hljs-params">i, index</span>) =&gt;</span> ({ <span class="hljs-attr">label</span>: index + <span class="hljs-number">1</span> + <span class="hljs-string">&#x27;\u65E5&#x27;</span>, <span class="hljs-attr">value</span>: index + <span class="hljs-number">1</span> }))
            }
          ],
          <span class="hljs-attr">prop</span>: {
            <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;label&#x27;</span>,
            <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;value&#x27;</span>
          },
          <span class="hljs-attr">submit</span>: <span class="hljs-function">(<span class="hljs-params">result</span>) =&gt;</span> {
            <span class="hljs-built_in">this</span>.value = result
          },
          <span class="hljs-attr">cancel</span>: <span class="hljs-function">() =&gt;</span> {
            <span class="hljs-comment">// \u53D6\u6D88\u9009\u62E9</span>
          }
        })
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
</code></pre>
<h3 id="\u4F7F\u7528promise">\u4F7F\u7528Promise</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;open&quot;</span>&gt;</span>\u6253\u5F00<span class="hljs-tag">&lt;/<span class="hljs-name">pl-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">value</span>: [<span class="hljs-number">2008</span>, <span class="hljs-number">8</span>]
      }
    },
    <span class="hljs-attr">methods</span>: {
      <span class="hljs-keyword">async</span> open () {
        <span class="hljs-keyword">try</span> {
          <span class="hljs-built_in">this</span>.value = <span class="hljs-keyword">await</span> $picker({
            <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;\u8BF7\u9009\u62E9&#x27;</span>,
            <span class="hljs-attr">defaultValue</span>: result.value,
            <span class="hljs-attr">options</span>: [
              <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
                <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Array</span>(<span class="hljs-number">20</span>).fill(<span class="hljs-string">&#x27;&#x27;</span>).map(<span class="hljs-function">(<span class="hljs-params">i, index</span>) =&gt;</span> ({ <span class="hljs-attr">label</span>: index + <span class="hljs-number">1990</span> + <span class="hljs-string">&#x27;\u5E74&#x27;</span>, <span class="hljs-attr">value</span>: index + <span class="hljs-number">1990</span> }))
              },
              <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
                <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Array</span>(<span class="hljs-number">12</span>).fill(<span class="hljs-string">&#x27;&#x27;</span>).map(<span class="hljs-function">(<span class="hljs-params">i, index</span>) =&gt;</span> ({ <span class="hljs-attr">label</span>: index + <span class="hljs-number">1</span> + <span class="hljs-string">&#x27;\u6708&#x27;</span>, <span class="hljs-attr">value</span>: index + <span class="hljs-number">1</span> }))
              },
              <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">year, month</span>) </span>{
                <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Array</span>(<span class="hljs-number">30</span>).fill(<span class="hljs-string">&#x27;&#x27;</span>).map(<span class="hljs-function">(<span class="hljs-params">i, index</span>) =&gt;</span> ({ <span class="hljs-attr">label</span>: index + <span class="hljs-number">1</span> + <span class="hljs-string">&#x27;\u65E5&#x27;</span>, <span class="hljs-attr">value</span>: index + <span class="hljs-number">1</span> }))
              }
            ],
            <span class="hljs-attr">prop</span>: {
              <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;label&#x27;</span>,
              <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;value&#x27;</span>
            }
          })
        } <span class="hljs-keyword">catch</span> (e) {
          <span class="hljs-comment">// \u53D6\u6D88\u9009\u62E9</span>
        }
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
</code></pre>
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
<td>title</td>
<td>\u5F39\u7A97\u6807\u9898</td>
<td>String</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>defaultValue</td>
<td>\u9ED8\u8BA4\u503C</td>
<td>Array</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>options</td>
<td>\u4E0B\u62C9\u9009\u9879</td>
<td>Array</td>
<td>\u56DE\u8C03\u5F0F\uFF1A[function() {}, function(prevValue) {}]\uFF0C\u5D4C\u5957\u5F0F\uFF1A{children: [{label: &#39;label&#39;, value: &#39;value&#39;, }]}</td>
<td>\u2014</td>
</tr>
<tr>
<td>prop</td>
<td>\u663E\u793A\u7684\u6807\u7B7E\u548C\u503C\uFF0C\u5982\u679C\u6CA1\u6709\u4F20\u9012\u5219\u62FF\u6574\u4E2A\u5B50\u9879</td>
<td>Object</td>
<td>\u2014</td>
<td>{label: &#39;label&#39;, value: &#39;value&#39;, children: &#39;children&#39;}</td>
</tr>
<tr>
<td>submit</td>
<td>\u6210\u529F\u56DE\u8C03\u51FD\u6570\uFF08\u5982\u679C\u4E0D\u4F20\u5219\u901A\u8FC7Promise\u8FD4\u56DE\u7ED3\u679C\uFF09</td>
<td>Function</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>cancel</td>
<td>\u53D6\u6D88\u56DE\u8C03\u51FD\u6570\uFF08\u5982\u679C\u4E0D\u4F20\u5219\u901A\u8FC7Promise\u8FD4\u56DE\u7ED3\u679C\uFF09</td>
<td>Function</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
</tbody></table>
`});s.render=l;s.mounted=()=>{};export{s as default};
