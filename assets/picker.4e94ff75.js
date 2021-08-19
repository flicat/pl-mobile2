import { U as defineComponent, i as h } from "./vendor.f40c224e.js";
const _sfc_md = defineComponent({
  name: "Markdown"
});
const _sfc_render = () => {
  return h("div", {
    class: ["md2vue-wrapper", "markdown-body"],
    innerHTML: '<h2 id="picker-\u6ED1\u52A8\u9009\u62E9\u6846">picker \u6ED1\u52A8\u9009\u62E9\u6846</h2>\n<h3 id="\u57FA\u7840\u7528\u6CD5">\u57FA\u7840\u7528\u6CD5</h3>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">pl-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;open&quot;</span>&gt;</span>\u6253\u5F00<span class="hljs-tag">&lt;/<span class="hljs-name">pl-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data () {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">value</span>: [<span class="hljs-number">2</span>, <span class="hljs-number">6</span>],\n        <span class="hljs-attr">options</span>: {\n          <span class="hljs-attr">children</span>: [\n            {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98791&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">children</span>: [\n              {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u5B50\u9009\u98793&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">3</span>},\n              {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u5B50\u9009\u98794&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">4</span>}\n            ]},\n            {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98792&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">children</span>: [\n              {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u5B50\u9009\u98795&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">5</span>},\n              {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u5B50\u9009\u98796&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">6</span>}\n            ]}\n          ]\n        },\n        <span class="hljs-attr">prop</span>: {\n          <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;label&#x27;</span>,\n          <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;value&#x27;</span>,\n          <span class="hljs-attr">children</span>: <span class="hljs-string">&#x27;children&#x27;</span>\n        }\n      }\n    },\n    <span class="hljs-attr">methods</span>: {\n      open () {\n        <span class="hljs-built_in">this</span>.$picker({\n          <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;\u8BF7\u9009\u62E9&#x27;</span>,\n          <span class="hljs-attr">defaultValue</span>: <span class="hljs-built_in">this</span>.value,\n          <span class="hljs-attr">options</span>: <span class="hljs-built_in">this</span>.options,\n          <span class="hljs-attr">prop</span>: <span class="hljs-built_in">this</span>.prop,\n          <span class="hljs-attr">submit</span>: <span class="hljs-function">(<span class="hljs-params">result</span>) =&gt;</span> {\n            <span class="hljs-built_in">this</span>.value = result\n          },\n          <span class="hljs-attr">cancel</span>: <span class="hljs-function">() =&gt;</span> {\n            <span class="hljs-comment">// \u53D6\u6D88\u9009\u62E9</span>\n          }\n        })\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<h3 id="\u52A8\u6001\u751F\u6210">\u52A8\u6001\u751F\u6210</h3>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">pl-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;open&quot;</span>&gt;</span>\u6253\u5F00<span class="hljs-tag">&lt;/<span class="hljs-name">pl-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data () {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">value</span>: []\n      }\n    },\n    <span class="hljs-attr">methods</span>: {\n      open () {\n        <span class="hljs-built_in">this</span>.$picker({\n          <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;\u8BF7\u9009\u62E9&#x27;</span>,\n          <span class="hljs-attr">defaultValue</span>: result.value,\n          <span class="hljs-attr">options</span>: [\n            <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{\n              <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Array</span>(<span class="hljs-number">20</span>).fill(<span class="hljs-string">&#x27;&#x27;</span>).map(<span class="hljs-function">(<span class="hljs-params">i, index</span>) =&gt;</span> ({ <span class="hljs-attr">label</span>: index + <span class="hljs-number">1990</span> + <span class="hljs-string">&#x27;\u5E74&#x27;</span>, <span class="hljs-attr">value</span>: index + <span class="hljs-number">1990</span> }))\n            },\n            <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">year</span>) </span>{\n              <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Array</span>(<span class="hljs-number">12</span>).fill(<span class="hljs-string">&#x27;&#x27;</span>).map(<span class="hljs-function">(<span class="hljs-params">i, index</span>) =&gt;</span> ({ <span class="hljs-attr">label</span>: index + <span class="hljs-number">1</span> + <span class="hljs-string">&#x27;\u6708&#x27;</span>, <span class="hljs-attr">value</span>: index + <span class="hljs-number">1</span> }))\n            },\n            <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">year, month</span>) </span>{\n              <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Array</span>(<span class="hljs-number">30</span>).fill(<span class="hljs-string">&#x27;&#x27;</span>).map(<span class="hljs-function">(<span class="hljs-params">i, index</span>) =&gt;</span> ({ <span class="hljs-attr">label</span>: index + <span class="hljs-number">1</span> + <span class="hljs-string">&#x27;\u65E5&#x27;</span>, <span class="hljs-attr">value</span>: index + <span class="hljs-number">1</span> }))\n            }\n          ],\n          <span class="hljs-attr">prop</span>: {\n            <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;label&#x27;</span>,\n            <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;value&#x27;</span>\n          },\n          <span class="hljs-attr">submit</span>: <span class="hljs-function">(<span class="hljs-params">result</span>) =&gt;</span> {\n            <span class="hljs-built_in">this</span>.value = result\n          },\n          <span class="hljs-attr">cancel</span>: <span class="hljs-function">() =&gt;</span> {\n            <span class="hljs-comment">// \u53D6\u6D88\u9009\u62E9</span>\n          }\n        })\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<h3 id="\u4F7F\u7528promise">\u4F7F\u7528Promise</h3>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">pl-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;open&quot;</span>&gt;</span>\u6253\u5F00<span class="hljs-tag">&lt;/<span class="hljs-name">pl-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data () {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">value</span>: [<span class="hljs-number">2008</span>, <span class="hljs-number">8</span>]\n      }\n    },\n    <span class="hljs-attr">methods</span>: {\n      <span class="hljs-keyword">async</span> open () {\n        <span class="hljs-keyword">try</span> {\n          <span class="hljs-built_in">this</span>.value = <span class="hljs-keyword">await</span> $picker({\n            <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;\u8BF7\u9009\u62E9&#x27;</span>,\n            <span class="hljs-attr">defaultValue</span>: result.value,\n            <span class="hljs-attr">options</span>: [\n              <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{\n                <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Array</span>(<span class="hljs-number">20</span>).fill(<span class="hljs-string">&#x27;&#x27;</span>).map(<span class="hljs-function">(<span class="hljs-params">i, index</span>) =&gt;</span> ({ <span class="hljs-attr">label</span>: index + <span class="hljs-number">1990</span> + <span class="hljs-string">&#x27;\u5E74&#x27;</span>, <span class="hljs-attr">value</span>: index + <span class="hljs-number">1990</span> }))\n              },\n              <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{\n                <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Array</span>(<span class="hljs-number">12</span>).fill(<span class="hljs-string">&#x27;&#x27;</span>).map(<span class="hljs-function">(<span class="hljs-params">i, index</span>) =&gt;</span> ({ <span class="hljs-attr">label</span>: index + <span class="hljs-number">1</span> + <span class="hljs-string">&#x27;\u6708&#x27;</span>, <span class="hljs-attr">value</span>: index + <span class="hljs-number">1</span> }))\n              },\n              <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">year, month</span>) </span>{\n                <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Array</span>(<span class="hljs-number">30</span>).fill(<span class="hljs-string">&#x27;&#x27;</span>).map(<span class="hljs-function">(<span class="hljs-params">i, index</span>) =&gt;</span> ({ <span class="hljs-attr">label</span>: index + <span class="hljs-number">1</span> + <span class="hljs-string">&#x27;\u65E5&#x27;</span>, <span class="hljs-attr">value</span>: index + <span class="hljs-number">1</span> }))\n              }\n            ],\n            <span class="hljs-attr">prop</span>: {\n              <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;label&#x27;</span>,\n              <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;value&#x27;</span>\n            }\n          })\n        } <span class="hljs-keyword">catch</span> (e) {\n          <span class="hljs-comment">// \u53D6\u6D88\u9009\u62E9</span>\n        }\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<h3 id="options">Options</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u53EF\u9009\u503C</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>title</td>\n<td>\u5F39\u7A97\u6807\u9898</td>\n<td>String</td>\n<td>\u2014</td>\n<td>\u2014</td>\n</tr>\n<tr>\n<td>defaultValue</td>\n<td>\u9ED8\u8BA4\u503C</td>\n<td>Array</td>\n<td>\u2014</td>\n<td>\u2014</td>\n</tr>\n<tr>\n<td>options</td>\n<td>\u4E0B\u62C9\u9009\u9879</td>\n<td>Array</td>\n<td>\u56DE\u8C03\u5F0F\uFF1A[function() {}, function(prevValue) {}]\uFF0C\u5D4C\u5957\u5F0F\uFF1A{children: [{label: &#39;label&#39;, value: &#39;value&#39;, }]}</td>\n<td>\u2014</td>\n</tr>\n<tr>\n<td>prop</td>\n<td>\u663E\u793A\u7684\u6807\u7B7E\u548C\u503C\uFF0C\u5982\u679C\u6CA1\u6709\u4F20\u9012\u5219\u62FF\u6574\u4E2A\u5B50\u9879</td>\n<td>Object</td>\n<td>\u2014</td>\n<td>{label: &#39;label&#39;, value: &#39;value&#39;, children: &#39;children&#39;}</td>\n</tr>\n<tr>\n<td>submit</td>\n<td>\u6210\u529F\u56DE\u8C03\u51FD\u6570\uFF08\u5982\u679C\u4E0D\u4F20\u5219\u901A\u8FC7Promise\u8FD4\u56DE\u7ED3\u679C\uFF09</td>\n<td>Function</td>\n<td>\u2014</td>\n<td>\u2014</td>\n</tr>\n<tr>\n<td>cancel</td>\n<td>\u53D6\u6D88\u56DE\u8C03\u51FD\u6570\uFF08\u5982\u679C\u4E0D\u4F20\u5219\u901A\u8FC7Promise\u8FD4\u56DE\u7ED3\u679C\uFF09</td>\n<td>Function</td>\n<td>\u2014</td>\n<td>\u2014</td>\n</tr>\n</tbody></table>\n'
  });
};
_sfc_md.render = _sfc_render;
_sfc_md.mounted = () => {
};
export { _sfc_md as default };
