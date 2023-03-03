import{z as n,A as a}from"./index.5b501510.js";const s=n({name:"Markdown"}),t=()=>a("div",{class:["md2vue-wrapper","markdown-body"],innerHTML:`<h2 id="message-\u6D88\u606F\u5F39\u6846">message \u6D88\u606F\u5F39\u6846</h2>
<h3 id="alert-\u5F39\u6846">alert \u5F39\u6846</h3>
<h4 id="\u57FA\u7840\u7528\u6CD5">\u57FA\u7840\u7528\u6CD5</h4>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">methods</span>: {
      message () {
        <span class="hljs-built_in">this</span>.$alert({
          <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;\u63D0\u793A&#x27;</span>,
          <span class="hljs-attr">message</span>: <span class="hljs-string">&#x27;\u8FD9\u4E2A\u4E00\u4E2A\u5F39\u7A97\uFF01&#x27;</span>,
          <span class="hljs-attr">buttonText</span>: <span class="hljs-string">&#x27;\u786E\u5B9A&#x27;</span>,
          <span class="hljs-attr">action</span>: <span class="hljs-function">() =&gt;</span> {
            <span class="hljs-comment">// \u786E\u5B9A</span>
          }
        })
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
</code></pre>
<h4 id="\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5F39\u7A97">\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5F39\u7A97</h4>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
   <span class="hljs-keyword">import</span> swipe <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./swipe.vue&#x27;</span>
   <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">methods</span>: {
      message () {
        <span class="hljs-built_in">this</span>.$alert({
          <span class="hljs-attr">component</span>: swipe,
          <span class="hljs-attr">componentProps</span>: {
            <span class="hljs-attr">isMsg</span>: <span class="hljs-literal">true</span>
          },
          <span class="hljs-attr">buttonText</span>: <span class="hljs-string">&#x27;\u786E\u5B9A&#x27;</span>,
          <span class="hljs-attr">action</span>: <span class="hljs-function">() =&gt;</span> {
            <span class="hljs-comment">// \u786E\u5B9A</span>
          }
        })
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
</code></pre>
<h4 id="\u4F7F\u7528-promise">\u4F7F\u7528 Promise</h4>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
   <span class="hljs-keyword">import</span> swipe <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./swipe.vue&#x27;</span>
   <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">methods</span>: {
      message () {
        <span class="hljs-built_in">this</span>.$alert({
          <span class="hljs-attr">component</span>: swipe,
          <span class="hljs-attr">componentProps</span>: {
            <span class="hljs-attr">isMsg</span>: <span class="hljs-literal">true</span>
          },
          <span class="hljs-attr">buttonText</span>: <span class="hljs-string">&#x27;\u786E\u5B9A&#x27;</span>
        }).then(<span class="hljs-function">() =&gt;</span> {
          <span class="hljs-comment">// \u786E\u5B9A</span>
        })
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
</code></pre>
<blockquote>
<p>Options.component \u5FC5\u987B\u662F<strong>vue\u7EC4\u4EF6</strong>\uFF0C \u5F39\u7A97\u89E6\u53D1 submit/cancel
\u56DE\u8C03\u65F6\u4F1A\u5148\u8C03\u7528\u7EC4\u4EF6\u7684 submit \u65B9\u6CD5\uFF0C\u7EC4\u4EF6\u7684 submit \u65B9\u6CD5\u53EF\u8FD4\u56DE
\u4E00\u4E2A Promise \u5BF9\u8C61</p>
</blockquote>
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
<td>\u6807\u9898</td>
<td>String</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>message</td>
<td>\u6D88\u606F\u5185\u5BB9</td>
<td>String</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>component</td>
<td>\u5B50\u7EC4\u4EF6\u5F39\u7A97\u5185\u5BB9</td>
<td>Object</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>componentProps</td>
<td>\u5B50\u7EC4\u4EF6props</td>
<td>Object</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>html</td>
<td>\u6D88\u606F\u5185\u5BB9\u662F\u5426\u662FHTML</td>
<td>Boolean</td>
<td>\u2014</td>
<td>false</td>
</tr>
<tr>
<td>buttonText</td>
<td>\u786E\u5B9A\u6309\u94AE\u6587\u5B57</td>
<td>String</td>
<td>\u2014</td>
<td>\u597D</td>
</tr>
<tr>
<td>action</td>
<td>\u786E\u5B9A\u540E\u56DE\u8C03\u51FD\u6570\uFF08\u5982\u679C\u4E0D\u4F20\u5219\u901A\u8FC7Promise\u8FD4\u56DE\u7ED3\u679C\uFF09</td>
<td>Function</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
</tbody></table>
<h3 id="confirm-\u5F39\u6846">confirm \u5F39\u6846</h3>
<h4 id="\u57FA\u7840\u7528\u6CD5-1">\u57FA\u7840\u7528\u6CD5</h4>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">methods</span>: {
      message () {
        <span class="hljs-built_in">this</span>.$confirm({
          <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;\u63D0\u793A&#x27;</span>,
          <span class="hljs-attr">message</span>: <span class="hljs-string">&#x27;\u8FD9\u4E2A\u4E00\u4E2A\u786E\u8BA4\u5F39\u7A97\uFF01&#x27;</span>,
          <span class="hljs-attr">submitText</span>: <span class="hljs-string">&#x27;\u786E\u5B9A&#x27;</span>,
          <span class="hljs-attr">cancelText</span>: <span class="hljs-string">&#x27;\u53D6\u6D88&#x27;</span>,
          <span class="hljs-attr">submit</span>: <span class="hljs-function">() =&gt;</span> {
            <span class="hljs-comment">// \u786E\u5B9A</span>
          },
          <span class="hljs-attr">cancel</span>: <span class="hljs-function">() =&gt;</span> {
            <span class="hljs-comment">// \u53D6\u6D88</span>
          }
        })
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
</code></pre>
<h4 id="\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5F39\u7A97-1">\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5F39\u7A97</h4>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
   <span class="hljs-keyword">import</span> swipe <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./swipe.vue&#x27;</span>
   <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">methods</span>: {
      message () {
        <span class="hljs-built_in">this</span>.$confirm({
          <span class="hljs-attr">component</span>: swipe,
          <span class="hljs-attr">componentProps</span>: {
            <span class="hljs-attr">isMsg</span>: <span class="hljs-literal">true</span>
          },
          <span class="hljs-attr">submitText</span>: <span class="hljs-string">&#x27;\u786E\u5B9A&#x27;</span>,
          <span class="hljs-attr">cancelText</span>: <span class="hljs-string">&#x27;\u53D6\u6D88&#x27;</span>,
          <span class="hljs-attr">submit</span>: <span class="hljs-function">() =&gt;</span> {
            <span class="hljs-comment">// \u786E\u5B9A</span>
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;\u786E\u5B9A&#x27;</span>)
          },
          <span class="hljs-attr">cancel</span>: <span class="hljs-function">() =&gt;</span> {
            <span class="hljs-comment">// \u53D6\u6D88</span>
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;\u53D6\u6D88&#x27;</span>)
          }
        })
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
</code></pre>
<h4 id="\u4F7F\u7528-promise-1">\u4F7F\u7528 Promise</h4>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">methods</span>: {
      message () {
        <span class="hljs-built_in">this</span>.$confirm({
          <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;\u63D0\u793A&#x27;</span>,
          <span class="hljs-attr">message</span>: <span class="hljs-string">&#x27;\u8FD9\u4E2A\u4E00\u4E2A\u786E\u8BA4\u5F39\u7A97\uFF01&#x27;</span>,
          <span class="hljs-attr">submitText</span>: <span class="hljs-string">&#x27;\u786E\u5B9A&#x27;</span>,
          <span class="hljs-attr">cancelText</span>: <span class="hljs-string">&#x27;\u53D6\u6D88&#x27;</span>
        }).then(<span class="hljs-function">() =&gt;</span> {
          <span class="hljs-comment">// \u786E\u5B9A</span>
        }).catch(<span class="hljs-function">() =&gt;</span> {
          <span class="hljs-comment">// \u53D6\u6D88</span>
        })
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
</code></pre>
<blockquote>
<p>Options.component \u5FC5\u987B\u662F<strong>vue\u7EC4\u4EF6</strong>\uFF0C \u5F39\u7A97\u89E6\u53D1 submit/cancel
\u56DE\u8C03\u65F6\u4F1A\u5148\u8C03\u7528\u7EC4\u4EF6\u7684 submit/cancel \u65B9\u6CD5\uFF0C\u7EC4\u4EF6\u7684 submit/cancel \u65B9\u6CD5\u53EF\u8FD4\u56DE
\u4E00\u4E2A Promise \u5BF9\u8C61</p>
</blockquote>
<h3 id="options-1">Options</h3>
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
<td>\u6807\u9898</td>
<td>String</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>message</td>
<td>\u6D88\u606F\u5185\u5BB9</td>
<td>String</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>component</td>
<td>\u5B50\u7EC4\u4EF6\u5F39\u7A97\u5185\u5BB9</td>
<td>Object</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>componentProps</td>
<td>\u5B50\u7EC4\u4EF6props</td>
<td>Object</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>html</td>
<td>\u6D88\u606F\u5185\u5BB9\u662F\u5426\u662FHTML</td>
<td>Boolean</td>
<td>\u2014</td>
<td>false</td>
</tr>
<tr>
<td>submitText</td>
<td>\u786E\u5B9A\u6309\u94AE\u6587\u5B57</td>
<td>String</td>
<td>\u2014</td>
<td>\u786E\u8BA4</td>
</tr>
<tr>
<td>cancelText</td>
<td>\u53D6\u6D88\u94AE\u6587\u5B57</td>
<td>String</td>
<td>\u2014</td>
<td>\u53D6\u6D88</td>
</tr>
<tr>
<td>submit</td>
<td>\u786E\u5B9A\u540E\u56DE\u8C03\u51FD\u6570\uFF08\u5982\u679C\u4E0D\u4F20\u5219\u901A\u8FC7Promise\u8FD4\u56DE\u7ED3\u679C\uFF09</td>
<td>Function</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>cancel</td>
<td>\u53D6\u6D88\u540E\u56DE\u8C03\u51FD\u6570\uFF08\u5982\u679C\u4E0D\u4F20\u5219\u901A\u8FC7Promise\u8FD4\u56DE\u7ED3\u679C\uFF09</td>
<td>Function</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
</tbody></table>
<h3 id="toast-\u63D0\u793A\u4FE1\u606F">toast \u63D0\u793A\u4FE1\u606F</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">methods</span>: {
      message () {
        <span class="hljs-built_in">this</span>.$toast(message[, duration, html])
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
</code></pre>
<h4 id="\u4F7F\u7528-promise-2">\u4F7F\u7528 Promise</h4>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">methods</span>: {
      message () {
        <span class="hljs-built_in">this</span>.$toast(<span class="hljs-string">&#x27;\u6D88\u606F\u63D0\u91921&#x27;</span>, <span class="hljs-number">2000</span>).then(<span class="hljs-function">() =&gt;</span> {
          <span class="hljs-built_in">this</span>.$toast(<span class="hljs-string">&#x27;&lt;strong&gt;\u6D88\u606F\u63D0\u91922&lt;/strong&gt;&#x27;</span>, <span class="hljs-number">2000</span>, <span class="hljs-literal">true</span>)
        })
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
</code></pre>
<h3 id="options-2">Options</h3>
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
<td>message</td>
<td>\u63D0\u793A\u4FE1\u606F</td>
<td>String</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>duration</td>
<td>\u6301\u7EED\u65F6\u95F4\uFF08\u6BEB\u79D2\uFF0C\u53EF\u9009)</td>
<td>Number</td>
<td>\u2014</td>
<td>3000</td>
</tr>
<tr>
<td>html</td>
<td>\u6D88\u606F\u5185\u5BB9\u662F\u5426\u662FHTML</td>
<td>Boolean</td>
<td>\u2014</td>
<td>false</td>
</tr>
</tbody></table>
`});s.render=t;s.mounted=()=>{};export{s as default};
