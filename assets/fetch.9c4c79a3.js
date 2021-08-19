import { U as defineComponent, i as h } from "./vendor.f40c224e.js";
const _sfc_md = defineComponent({
  name: "Markdown"
});
const _sfc_render = () => {
  return h("div", {
    class: ["md2vue-wrapper", "markdown-body"],
    innerHTML: '<h2 id="fetch-\u63A5\u53E3\u8BF7\u6C42">fetch \u63A5\u53E3\u8BF7\u6C42</h2>\n<h3 id="\u57FA\u7840\u7528\u6CD5">\u57FA\u7840\u7528\u6CD5</h3>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">import</span> { fetch } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;pl-mobile2&#x27;</span>\n  app.use(fetch)\n\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-function"><span class="hljs-title">created</span>(<span class="hljs-params"></span>)</span> {\n      <span class="hljs-built_in">this</span>.$fetch({\n        <span class="hljs-attr">url</span>: <span class="hljs-string">&#x27;https://www.test.com/image.png&#x27;</span>,\n        <span class="hljs-attr">method</span>: <span class="hljs-string">&#x27;get&#x27;</span>,\n        <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;blob&#x27;</span>\n      }).then(<span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> {\n        <span class="hljs-comment">// blob</span>\n      })\n      <span class="hljs-comment">// https://www.test.com/image.png</span>\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<h4 id="\u81EA\u5B9A\u4E49\u914D\u7F6E">\u81EA\u5B9A\u4E49\u914D\u7F6E</h4>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-function"><span class="hljs-title">created</span>(<span class="hljs-params"></span>)</span> {\n      <span class="hljs-keyword">const</span> request = <span class="hljs-built_in">this</span>.$fetch.options({\n        <span class="hljs-attr">baseUrl</span>: <span class="hljs-string">&#x27;https://www.test.com&#x27;</span>,\n        <span class="hljs-attr">method</span>: <span class="hljs-string">&#x27;get&#x27;</span>,\n        <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;blob&#x27;</span>\n      })\n\n      request.get(<span class="hljs-string">&#x27;/image.png&#x27;</span>).then(<span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> {\n        <span class="hljs-comment">// blob</span>\n      })\n      <span class="hljs-comment">// https://www.test.com/image.png</span>\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<h4 id="\u81EA\u5B9A\u4E49header">\u81EA\u5B9A\u4E49header</h4>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-function"><span class="hljs-title">created</span>(<span class="hljs-params"></span>)</span> {\n      <span class="hljs-keyword">const</span> request = <span class="hljs-built_in">this</span>.$fetch.options({\n        <span class="hljs-attr">baseUrl</span>: <span class="hljs-string">&#x27;https://www.test.com&#x27;</span>\n      })\n\n      request.headers({\n        <span class="hljs-attr">token</span>: <span class="hljs-string">&#x27;sjkdfgiuysdnjksndkjvnslkdv&#x27;</span>\n      })\n\n      request.post(<span class="hljs-string">&#x27;/login&#x27;</span>, {\n        <span class="hljs-attr">username</span>: <span class="hljs-string">&#x27;test&#x27;</span>,\n        <span class="hljs-attr">password</span>: <span class="hljs-string">&#x27;test&#x27;</span>\n      }).then(<span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> {\n        <span class="hljs-comment">// json</span>\n      })\n      <span class="hljs-comment">// https://www.test.com/login</span>\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<h4 id="url\u62FC\u63A5">url\u62FC\u63A5</h4>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-function"><span class="hljs-title">created</span>(<span class="hljs-params"></span>)</span> {\n      <span class="hljs-keyword">const</span> request = <span class="hljs-built_in">this</span>.$fetch.options({\n        <span class="hljs-attr">baseUrl</span>: <span class="hljs-string">&#x27;https://www.test.com&#x27;</span>,\n        <span class="hljs-attr">url</span>: <span class="hljs-string">&#x27;/data&#x27;</span>\n      })\n\n      request.url(<span class="hljs-string">&#x27;id&#x27;</span>, <span class="hljs-number">1</span>)\n\n      request.post().then(<span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> {\n        <span class="hljs-comment">// json</span>\n      })\n      <span class="hljs-comment">// https://www.test.com/data/id/1</span>\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<h4 id="\u6DFB\u52A0\u5168\u5C40\u5904\u7406\u51FD\u6570">\u6DFB\u52A0\u5168\u5C40\u5904\u7406\u51FD\u6570</h4>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-function"><span class="hljs-title">created</span>(<span class="hljs-params"></span>)</span> {\n      <span class="hljs-built_in">this</span>.$fetch.before(<span class="hljs-function"><span class="hljs-params">options</span> =&gt;</span> {\n        options.headers.token = <span class="hljs-string">&#x27;xdgdgdxsedfswfsdf&#x27;</span>\n      })\n      <span class="hljs-built_in">this</span>.$fetch.after(<span class="hljs-function"><span class="hljs-params">res</span> =&gt;</span> {\n        res.then(<span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> {\n          <span class="hljs-keyword">if</span> (data.code === <span class="hljs-number">500</span>) {\n            <span class="hljs-comment">// error</span>\n          }\n        })\n      })\n      <span class="hljs-built_in">this</span>.$fetch({\n        <span class="hljs-attr">baseUrl</span>: <span class="hljs-string">&#x27;https://www.test.com&#x27;</span>,\n        <span class="hljs-attr">url</span>: <span class="hljs-string">&#x27;/login&#x27;</span>,\n        <span class="hljs-attr">data</span>: {\n          <span class="hljs-attr">username</span>: <span class="hljs-string">&#x27;test&#x27;</span>,\n          <span class="hljs-attr">password</span>: <span class="hljs-string">&#x27;test&#x27;</span>\n        }\n      }).then(<span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> {\n        <span class="hljs-comment">// json</span>\n      })\n      <span class="hljs-comment">// https://www.test.com/login</span>\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<h3 id="methods">Methods</h3>\n<table>\n<thead>\n<tr>\n<th>\u65B9\u6CD5\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u53C2\u6570</th>\n<th>\u8FD4\u56DE\u503C</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>$fetch</td>\n<td>\u53D1\u8D77\u8BF7\u6C42</td>\n<td>&lt;Options&gt;</td>\n<td>Promise&lt;response&gt;</td>\n</tr>\n<tr>\n<td>$fetch.before</td>\n<td>\u8BF7\u6C42\u524D\u62E6\u622A\u51FD\u6570</td>\n<td>&lt;Function&gt;</td>\n<td>$fetch</td>\n</tr>\n<tr>\n<td>$fetch.after</td>\n<td>\u8BF7\u6C42\u8FD4\u56DE\u62E6\u622A\u51FD\u6570</td>\n<td>&lt;Function&gt;</td>\n<td>$fetch</td>\n</tr>\n<tr>\n<td>$fetch.options</td>\n<td>\u8BBE\u7F6Eoptions</td>\n<td>&lt;Options&gt;</td>\n<td>$fetch</td>\n</tr>\n<tr>\n<td>$fetch.url</td>\n<td>\u5BF9 options.url \u8FDB\u884C\u53C2\u6570\u62FC\u63A5</td>\n<td>&lt;string&gt;[, string]...</td>\n<td>$fetch</td>\n</tr>\n<tr>\n<td>$fetch.headers</td>\n<td>\u81EA\u5B9A\u4E49\u8BF7\u6C42\u5934\uFF0C\u8DDF options.headers \u5408\u5E76</td>\n<td>&lt;object&gt;</td>\n<td>$fetch</td>\n</tr>\n<tr>\n<td>$fetch.request</td>\n<td>\u53D1\u8D77\u8BF7\u6C42</td>\n<td>[&lt;Options&gt;]</td>\n<td>Promise&lt;response&gt;</td>\n</tr>\n<tr>\n<td>$fetch.get</td>\n<td>\u53D1\u8D77 get \u8BF7\u6C42</td>\n<td>[url[, data[, &lt;Options&gt;]]]</td>\n<td>Promise&lt;response&gt;</td>\n</tr>\n<tr>\n<td>$fetch.post</td>\n<td>\u53D1\u8D77 post \u8BF7\u6C42</td>\n<td>[url[, data[, &lt;Options&gt;]]]</td>\n<td>Promise&lt;response&gt;</td>\n</tr>\n</tbody></table>\n<h3 id="options">Options</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u53EF\u9009\u503C</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>url</td>\n<td>\u8BF7\u6C42URL\u5730\u5740</td>\n<td>String</td>\n<td>\u2014</td>\n<td>\u2014</td>\n</tr>\n<tr>\n<td>baseUrl</td>\n<td>\u8BF7\u6C42URL\u57DF\u540D</td>\n<td>String</td>\n<td>\u2014</td>\n<td>\u2014</td>\n</tr>\n<tr>\n<td>method</td>\n<td>\u8BF7\u6C42\u4F7F\u7528\u7684\u65B9\u6CD5\uFF0C\u5982 GET\u3001POST</td>\n<td>String</td>\n<td>\u2014</td>\n<td>POST</td>\n</tr>\n<tr>\n<td>data</td>\n<td>\u8BF7\u6C42\u7684\u6570\u636E</td>\n<td>Object</td>\n<td>Object / Blob / BufferSource / FormData / URLSearchParams / USVString</td>\n<td>\u2014</td>\n</tr>\n<tr>\n<td>headers</td>\n<td>\u8BF7\u6C42\u7684\u5934\u4FE1\u606F</td>\n<td>Object</td>\n<td>\u2014</td>\n<td>\u2014</td>\n</tr>\n<tr>\n<td>type</td>\n<td>\u8BF7\u6C42\u7684\u6570\u636E\u7C7B\u578B</td>\n<td>String</td>\n<td>json / blob / arrayBuffer / formData / text</td>\n<td>json</td>\n</tr>\n<tr>\n<td>mode</td>\n<td>\u8BF7\u6C42\u7684\u6A21\u5F0F</td>\n<td>String</td>\n<td>cors / no-cors / same-origin</td>\n<td>\u2014</td>\n</tr>\n<tr>\n<td>credentials</td>\n<td>\u8BF7\u6C42\u7684 credentials \u3002\u4E3A\u4E86\u5728\u5F53\u524D\u57DF\u540D\u5185\u81EA\u52A8\u53D1\u9001 cookie \uFF0C \u5FC5\u987B\u63D0\u4F9B\u8FD9\u4E2A\u9009\u9879</td>\n<td>String</td>\n<td>omit / same-origin / include</td>\n<td>\u2014</td>\n</tr>\n<tr>\n<td>cache</td>\n<td>\u8BF7\u6C42\u7684 cache \u6A21\u5F0F</td>\n<td>String</td>\n<td>default / no-store / reload / no-cache / force-cache / only-if-cached</td>\n<td>no-cache</td>\n</tr>\n<tr>\n<td>signal</td>\n<td>AbortSignal \u63A5\u53E3\u8868\u793A\u4E00\u4E2A\u4FE1\u53F7\u5BF9\u8C61\uFF08 signal object \uFF09\uFF0C\u5B83\u5141\u8BB8\u60A8\u901A\u8FC7 AbortController \u5BF9\u8C61\u4E0EDOM\u8BF7\u6C42\uFF08\u5982Fetch\uFF09\u8FDB\u884C\u901A\u4FE1\u5E76\u5728\u9700\u8981\u65F6\u5C06\u5176\u4E2D\u6B62\u3002</td>\n<td>AbortController</td>\n<td>\u2014</td>\n<td>\u2014</td>\n</tr>\n<tr>\n<td>redirect</td>\n<td>\u6839\u636E\u8BF7\u6C42\u5730\u5740\u8F6C\u6210get\u8BF7\u6C42\uFF0C\u76F4\u63A5\u91CD\u5B9A\u5411URL</td>\n<td>Boolean</td>\n<td>\u2014</td>\n<td>false</td>\n</tr>\n<tr>\n<td>onDownload</td>\n<td>onDownload \u56DE\u8C03\u65B9\u6CD5</td>\n<td>Function</td>\n<td>\u2014</td>\n<td>\u2014</td>\n</tr>\n</tbody></table>\n'
  });
};
_sfc_md.render = _sfc_render;
_sfc_md.mounted = () => {
};
export { _sfc_md as default };
