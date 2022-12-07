import{x as n,y as a}from"./index.d0ea79cd.js";const s=n({name:"Markdown"}),t=()=>a("div",{class:["md2vue-wrapper","markdown-body"],innerHTML:`<h2 id="fetch-\u63A5\u53E3\u8BF7\u6C42">fetch \u63A5\u53E3\u8BF7\u6C42</h2>
<h3 id="\u57FA\u7840\u7528\u6CD5">\u57FA\u7840\u7528\u6CD5</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { fetch } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;pl-mobile2&#x27;</span>
  app.use(fetch)

  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-function"><span class="hljs-title">created</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.$fetch({
        <span class="hljs-attr">url</span>: <span class="hljs-string">&#x27;https://www.test.com/image.png&#x27;</span>,
        <span class="hljs-attr">method</span>: <span class="hljs-string">&#x27;get&#x27;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;blob&#x27;</span>
      }).then(<span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> {
        <span class="hljs-comment">// \u8FD4\u56DE blob</span>
      })
      <span class="hljs-comment">// \u8BF7\u6C42\u7ED3\u679C\uFF1A GET:https://www.test.com/image.png</span>
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
</code></pre>
<h4 id="\u81EA\u5B9A\u4E49\u914D\u7F6E">\u81EA\u5B9A\u4E49\u914D\u7F6E</h4>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-function"><span class="hljs-title">created</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-keyword">const</span> request = <span class="hljs-built_in">this</span>.$fetch.options({
        <span class="hljs-attr">baseUrl</span>: <span class="hljs-string">&#x27;https://www.test.com&#x27;</span>,
        <span class="hljs-attr">method</span>: <span class="hljs-string">&#x27;get&#x27;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;blob&#x27;</span>
      })

      request.get(<span class="hljs-string">&#x27;/image.png&#x27;</span>).then(<span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> {
        <span class="hljs-comment">// \u8FD4\u56DE blob</span>
      })
      <span class="hljs-comment">// \u8BF7\u6C42\u7ED3\u679C\uFF1A GET:https://www.test.com/image.png</span>
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
</code></pre>
<h4 id="\u81EA\u5B9A\u4E49header">\u81EA\u5B9A\u4E49header</h4>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-function"><span class="hljs-title">created</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-keyword">const</span> request = <span class="hljs-built_in">this</span>.$fetch.options({
        <span class="hljs-attr">baseUrl</span>: <span class="hljs-string">&#x27;https://www.test.com&#x27;</span>
      })

      request.headers({
        <span class="hljs-attr">token</span>: <span class="hljs-string">&#x27;xxxxxxxxxxxxxxxxxx&#x27;</span>
      })

      request.post(<span class="hljs-string">&#x27;/login&#x27;</span>, {
        <span class="hljs-attr">username</span>: <span class="hljs-string">&#x27;test&#x27;</span>,
        <span class="hljs-attr">password</span>: <span class="hljs-string">&#x27;test&#x27;</span>
      }).then(<span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> {
        <span class="hljs-comment">// \u8FD4\u56DE\u8BF7\u6C42\u7ED3\u679C json</span>
      })
      <span class="hljs-comment">// \u8BF7\u6C42\u7ED3\u679C\uFF1A POST:https://www.test.com/login</span>
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
</code></pre>
<h4 id="url\u62FC\u63A5">url\u62FC\u63A5</h4>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-function"><span class="hljs-title">created</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-keyword">const</span> request = <span class="hljs-built_in">this</span>.$fetch.options({
        <span class="hljs-attr">baseUrl</span>: <span class="hljs-string">&#x27;https://www.test.com&#x27;</span>,
        <span class="hljs-attr">url</span>: <span class="hljs-string">&#x27;/data&#x27;</span>
      })

      request.url(<span class="hljs-string">&#x27;id&#x27;</span>, <span class="hljs-number">1</span>)

      request.post().then(<span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> {
        <span class="hljs-comment">// \u8FD4\u56DE\u8BF7\u6C42\u7ED3\u679C json</span>
      })
      <span class="hljs-comment">// \u8BF7\u6C42\u7ED3\u679C\uFF1A POST:https://www.test.com/data/id/1</span>
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
</code></pre>
<h4 id="\u6DFB\u52A0\u5168\u5C40\u5904\u7406\u51FD\u6570">\u6DFB\u52A0\u5168\u5C40\u5904\u7406\u51FD\u6570</h4>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-function"><span class="hljs-title">created</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-comment">// \u524D\u7F6E\u94A9\u5B50</span>
      <span class="hljs-built_in">this</span>.$fetch.before(<span class="hljs-function"><span class="hljs-params">options</span> =&gt;</span> {
        <span class="hljs-keyword">if</span> (token) {
          <span class="hljs-comment">// \u540C\u6B65\u4FEE\u6539</span>
          options.headers.token = token
        } <span class="hljs-keyword">else</span> {
          <span class="hljs-comment">// \u5F02\u6B65\u4FEE\u6539</span>
          <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function">(<span class="hljs-params">res, rej</span>) =&gt;</span> {
            getToken().then(<span class="hljs-function"><span class="hljs-params">token</span> =&gt;</span> {
              options.headers.token = token
            }).then(res).catch(rej)
          })
        }
      })

      <span class="hljs-comment">// \u540E\u7F6E\u94A9\u5B50</span>
      <span class="hljs-built_in">this</span>.$fetch.after(<span class="hljs-function"><span class="hljs-params">res</span> =&gt;</span> {
        <span class="hljs-keyword">return</span> res.then(<span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> {
          <span class="hljs-comment">// \u5BF9\u6B63\u786E\u8FD4\u56DE\u7684\u7ED3\u679C\u8FDB\u884C\u5904\u7406</span>
          <span class="hljs-keyword">return</span> data.result
        }).catch(<span class="hljs-function"><span class="hljs-params">res</span> =&gt;</span> {
          <span class="hljs-comment">// \u9519\u8BEF\u5904\u7406</span>
          <span class="hljs-keyword">return</span> <span class="hljs-built_in">Promise</span>.reject({
            <span class="hljs-attr">status</span>: res.status
            <span class="hljs-attr">message</span>: res.statusText
          })
        })
      })

      <span class="hljs-built_in">this</span>.$fetch({
        <span class="hljs-attr">baseUrl</span>: <span class="hljs-string">&#x27;https://www.test.com&#x27;</span>,
        <span class="hljs-attr">url</span>: <span class="hljs-string">&#x27;/login&#x27;</span>,
        <span class="hljs-attr">data</span>: {
          <span class="hljs-attr">username</span>: <span class="hljs-string">&#x27;test&#x27;</span>,
          <span class="hljs-attr">password</span>: <span class="hljs-string">&#x27;test&#x27;</span>
        }
      }).then(<span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> {
        <span class="hljs-comment">// \u8FD4\u56DE\u8BF7\u6C42\u7ED3\u679C json</span>
      })
      <span class="hljs-comment">// \u8BF7\u6C42\u7ED3\u679C\uFF1A GET:https://www.test.com/login</span>
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
</code></pre>
<h4 id="\u94FE\u5F0F\u8C03\u7528">\u94FE\u5F0F\u8C03\u7528</h4>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-function"><span class="hljs-title">created</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.$fetch.options({
        <span class="hljs-attr">baseUrl</span>: <span class="hljs-string">&#x27;https://www.test.com&#x27;</span>,
        <span class="hljs-attr">url</span>: <span class="hljs-string">&#x27;/login&#x27;</span>,
        <span class="hljs-attr">data</span>: {
          <span class="hljs-attr">username</span>: <span class="hljs-string">&#x27;test&#x27;</span>,
          <span class="hljs-attr">password</span>: <span class="hljs-string">&#x27;test&#x27;</span>
        }
      })
      .url(<span class="hljs-string">&#x27;path&#x27;</span>, <span class="hljs-string">&#x27;user&#x27;</span>)
      .headers({
        <span class="hljs-attr">token</span>: <span class="hljs-string">&#x27;xxxxxxxxxxxxxxxxxxxxxx&#x27;</span>
      })
      .post()
      .then(<span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> {
        <span class="hljs-comment">// \u8FD4\u56DE\u8BF7\u6C42\u7ED3\u679C json</span>
      })
      <span class="hljs-comment">// \u8BF7\u6C42\u7ED3\u679C\uFF1A POST:https://www.test.com/login/path/user</span>
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
</code></pre>
<h3 id="methods">Methods</h3>
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
<td>$fetch</td>
<td>\u53D1\u8D77\u8BF7\u6C42</td>
<td>&lt;Options&gt;</td>
<td>Promise&lt;response&gt;</td>
</tr>
<tr>
<td>$fetch.before</td>
<td>\u8BF7\u6C42\u524D\u62E6\u622A\u51FD\u6570</td>
<td>&lt;Function&gt;</td>
<td>$fetch</td>
</tr>
<tr>
<td>$fetch.after</td>
<td>\u8BF7\u6C42\u8FD4\u56DE\u62E6\u622A\u51FD\u6570</td>
<td>&lt;Function&gt;</td>
<td>$fetch</td>
</tr>
<tr>
<td>$fetch.options</td>
<td>\u8BBE\u7F6Eoptions</td>
<td>&lt;Options&gt;</td>
<td>$fetch</td>
</tr>
<tr>
<td>$fetch.url</td>
<td>\u5BF9 options.url \u8FDB\u884C\u53C2\u6570\u62FC\u63A5</td>
<td>&lt;string&gt;[, string]...</td>
<td>$fetch</td>
</tr>
<tr>
<td>$fetch.headers</td>
<td>\u81EA\u5B9A\u4E49\u8BF7\u6C42\u5934\uFF0C\u8DDF options.headers \u5408\u5E76</td>
<td>&lt;object&gt;</td>
<td>$fetch</td>
</tr>
<tr>
<td>$fetch.request</td>
<td>\u53D1\u8D77\u8BF7\u6C42</td>
<td>[&lt;Options&gt;]</td>
<td>Promise&lt;response&gt;</td>
</tr>
<tr>
<td>$fetch.get</td>
<td>\u53D1\u8D77 get \u8BF7\u6C42</td>
<td>[url[, data[, &lt;Options&gt;]]]</td>
<td>Promise&lt;response&gt;</td>
</tr>
<tr>
<td>$fetch.post</td>
<td>\u53D1\u8D77 post \u8BF7\u6C42</td>
<td>[url[, data[, &lt;Options&gt;]]]</td>
<td>Promise&lt;response&gt;</td>
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
<td>url</td>
<td>\u8BF7\u6C42URL\u5730\u5740</td>
<td>String</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>baseUrl</td>
<td>\u8BF7\u6C42URL\u57DF\u540D</td>
<td>String</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>method</td>
<td>\u8BF7\u6C42\u4F7F\u7528\u7684\u65B9\u6CD5\uFF0C\u5982 GET\u3001POST</td>
<td>String</td>
<td>\u2014</td>
<td>POST</td>
</tr>
<tr>
<td>data</td>
<td>\u8BF7\u6C42\u7684\u6570\u636E</td>
<td>Object</td>
<td>Object / Blob / BufferSource / FormData / URLSearchParams / USVString</td>
<td>\u2014</td>
</tr>
<tr>
<td>headers</td>
<td>\u8BF7\u6C42\u7684\u5934\u4FE1\u606F</td>
<td>Object</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>type</td>
<td>\u8BF7\u6C42\u7684\u6570\u636E\u7C7B\u578B</td>
<td>String</td>
<td>json / blob / arrayBuffer / formData / text</td>
<td>json</td>
</tr>
<tr>
<td>mode</td>
<td>\u8BF7\u6C42\u7684\u6A21\u5F0F</td>
<td>String</td>
<td>cors / no-cors / same-origin</td>
<td>\u2014</td>
</tr>
<tr>
<td>credentials</td>
<td>\u8BF7\u6C42\u7684 credentials \u3002\u4E3A\u4E86\u5728\u5F53\u524D\u57DF\u540D\u5185\u81EA\u52A8\u53D1\u9001 cookie \uFF0C \u5FC5\u987B\u63D0\u4F9B\u8FD9\u4E2A\u9009\u9879</td>
<td>String</td>
<td>omit / same-origin / include</td>
<td>\u2014</td>
</tr>
<tr>
<td>cache</td>
<td>\u8BF7\u6C42\u7684 cache \u6A21\u5F0F</td>
<td>String</td>
<td>default / no-store / reload / no-cache / force-cache / only-if-cached</td>
<td>no-cache</td>
</tr>
<tr>
<td>signal</td>
<td>AbortSignal \u63A5\u53E3\u8868\u793A\u4E00\u4E2A\u4FE1\u53F7\u5BF9\u8C61\uFF08 signal object \uFF09\uFF0C\u5B83\u5141\u8BB8\u60A8\u901A\u8FC7 AbortController \u5BF9\u8C61\u4E0EDOM\u8BF7\u6C42\uFF08\u5982Fetch\uFF09\u8FDB\u884C\u901A\u4FE1\u5E76\u5728\u9700\u8981\u65F6\u5C06\u5176\u4E2D\u6B62\u3002</td>
<td>AbortController</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>redirect</td>
<td>\u6839\u636E\u8BF7\u6C42\u5730\u5740\u8F6C\u6210get\u8BF7\u6C42\uFF0C\u76F4\u63A5\u91CD\u5B9A\u5411URL</td>
<td>Boolean</td>
<td>\u2014</td>
<td>false</td>
</tr>
<tr>
<td>onDownload</td>
<td>onDownload \u56DE\u8C03\u65B9\u6CD5</td>
<td>Function</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
</tbody></table>
`});s.render=t;s.mounted=()=>{};export{s as default};
