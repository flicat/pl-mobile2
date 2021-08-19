import { U as defineComponent, i as h } from "./vendor.f40c224e.js";
const _sfc_md = defineComponent({
  name: "Markdown"
});
const _sfc_render = () => {
  return h("div", {
    class: ["md2vue-wrapper", "markdown-body"],
    innerHTML: '<h2 id="message-\u6D88\u606F\u5F39\u6846">message \u6D88\u606F\u5F39\u6846</h2>\n<h3 id="alert-\u5F39\u6846">alert \u5F39\u6846</h3>\n<h4 id="\u57FA\u7840\u7528\u6CD5">\u57FA\u7840\u7528\u6CD5</h4>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-attr">methods</span>: {\n      message () {\n        <span class="hljs-built_in">this</span>.$alert({\n          <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;\u63D0\u793A&#x27;</span>,\n          <span class="hljs-attr">message</span>: <span class="hljs-string">&#x27;\u8FD9\u4E2A\u4E00\u4E2A\u5F39\u7A97\uFF01&#x27;</span>,\n          <span class="hljs-attr">buttonText</span>: <span class="hljs-string">&#x27;\u786E\u5B9A&#x27;</span>,\n          <span class="hljs-attr">action</span>: <span class="hljs-function">() =&gt;</span> {\n            <span class="hljs-comment">// \u786E\u5B9A</span>\n          }\n        })\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<h4 id="\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5F39\u7A97">\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5F39\u7A97</h4>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n   <span class="hljs-keyword">import</span> swipe <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./swipe.vue&#x27;</span>\n   <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-attr">methods</span>: {\n      message () {\n        <span class="hljs-built_in">this</span>.$alert({\n          <span class="hljs-attr">component</span>: swipe,\n          <span class="hljs-attr">componentProps</span>: {\n            <span class="hljs-attr">isMsg</span>: <span class="hljs-literal">true</span>\n          },\n          <span class="hljs-attr">buttonText</span>: <span class="hljs-string">&#x27;\u786E\u5B9A&#x27;</span>,\n          <span class="hljs-attr">action</span>: <span class="hljs-function">() =&gt;</span> {\n            <span class="hljs-comment">// \u786E\u5B9A</span>\n          }\n        })\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<h4 id="\u4F7F\u7528-promise">\u4F7F\u7528 Promise</h4>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n   <span class="hljs-keyword">import</span> swipe <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./swipe.vue&#x27;</span>\n   <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-attr">methods</span>: {\n      message () {\n        <span class="hljs-built_in">this</span>.$alert({\n          <span class="hljs-attr">component</span>: swipe,\n          <span class="hljs-attr">componentProps</span>: {\n            <span class="hljs-attr">isMsg</span>: <span class="hljs-literal">true</span>\n          },\n          <span class="hljs-attr">buttonText</span>: <span class="hljs-string">&#x27;\u786E\u5B9A&#x27;</span>\n        }).then(<span class="hljs-function">() =&gt;</span> {\n          <span class="hljs-comment">// \u786E\u5B9A</span>\n        })\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<blockquote>\n<p>Options.component \u5FC5\u987B\u662F<strong>vue\u7EC4\u4EF6</strong>\uFF0C \u5F39\u7A97\u89E6\u53D1 submit/cancel\n\u56DE\u8C03\u65F6\u4F1A\u5148\u8C03\u7528\u7EC4\u4EF6\u7684 submit \u65B9\u6CD5\uFF0C\u7EC4\u4EF6\u7684 submit \u65B9\u6CD5\u53EF\u8FD4\u56DE\n\u4E00\u4E2A Promise \u5BF9\u8C61</p>\n</blockquote>\n<h3 id="options">Options</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u53EF\u9009\u503C</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>title</td>\n<td>\u6807\u9898</td>\n<td>String</td>\n<td>\u2014</td>\n<td>\u2014</td>\n</tr>\n<tr>\n<td>message</td>\n<td>\u6D88\u606F\u5185\u5BB9</td>\n<td>String</td>\n<td>\u2014</td>\n<td>\u2014</td>\n</tr>\n<tr>\n<td>component</td>\n<td>\u5B50\u7EC4\u4EF6\u5F39\u7A97\u5185\u5BB9</td>\n<td>Object</td>\n<td>\u2014</td>\n<td>\u2014</td>\n</tr>\n<tr>\n<td>componentProps</td>\n<td>\u5B50\u7EC4\u4EF6props</td>\n<td>Object</td>\n<td>\u2014</td>\n<td>\u2014</td>\n</tr>\n<tr>\n<td>html</td>\n<td>\u6D88\u606F\u5185\u5BB9\u662F\u5426\u662FHTML</td>\n<td>Boolean</td>\n<td>\u2014</td>\n<td>false</td>\n</tr>\n<tr>\n<td>buttonText</td>\n<td>\u786E\u5B9A\u6309\u94AE\u6587\u5B57</td>\n<td>String</td>\n<td>\u2014</td>\n<td>\u597D</td>\n</tr>\n<tr>\n<td>action</td>\n<td>\u786E\u5B9A\u540E\u56DE\u8C03\u51FD\u6570\uFF08\u5982\u679C\u4E0D\u4F20\u5219\u901A\u8FC7Promise\u8FD4\u56DE\u7ED3\u679C\uFF09</td>\n<td>Function</td>\n<td>\u2014</td>\n<td>\u2014</td>\n</tr>\n</tbody></table>\n<h3 id="confirm-\u5F39\u6846">confirm \u5F39\u6846</h3>\n<h4 id="\u57FA\u7840\u7528\u6CD5-1">\u57FA\u7840\u7528\u6CD5</h4>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-attr">methods</span>: {\n      message () {\n        <span class="hljs-built_in">this</span>.$confirm({\n          <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;\u63D0\u793A&#x27;</span>,\n          <span class="hljs-attr">message</span>: <span class="hljs-string">&#x27;\u8FD9\u4E2A\u4E00\u4E2A\u786E\u8BA4\u5F39\u7A97\uFF01&#x27;</span>,\n          <span class="hljs-attr">submitText</span>: <span class="hljs-string">&#x27;\u786E\u5B9A&#x27;</span>,\n          <span class="hljs-attr">cancelText</span>: <span class="hljs-string">&#x27;\u53D6\u6D88&#x27;</span>,\n          <span class="hljs-attr">submit</span>: <span class="hljs-function">() =&gt;</span> {\n            <span class="hljs-comment">// \u786E\u5B9A</span>\n          },\n          <span class="hljs-attr">cancel</span>: <span class="hljs-function">() =&gt;</span> {\n            <span class="hljs-comment">// \u53D6\u6D88</span>\n          }\n        })\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<h4 id="\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5F39\u7A97-1">\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5F39\u7A97</h4>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n   <span class="hljs-keyword">import</span> swipe <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./swipe.vue&#x27;</span>\n   <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-attr">methods</span>: {\n      message () {\n        <span class="hljs-built_in">this</span>.$confirm({\n          <span class="hljs-attr">component</span>: swipe,\n          <span class="hljs-attr">componentProps</span>: {\n            <span class="hljs-attr">isMsg</span>: <span class="hljs-literal">true</span>\n          },\n          <span class="hljs-attr">submitText</span>: <span class="hljs-string">&#x27;\u786E\u5B9A&#x27;</span>,\n          <span class="hljs-attr">cancelText</span>: <span class="hljs-string">&#x27;\u53D6\u6D88&#x27;</span>,\n          <span class="hljs-attr">submit</span>: <span class="hljs-function">() =&gt;</span> {\n            <span class="hljs-comment">// \u786E\u5B9A</span>\n            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;\u786E\u5B9A&#x27;</span>)\n          },\n          <span class="hljs-attr">cancel</span>: <span class="hljs-function">() =&gt;</span> {\n            <span class="hljs-comment">// \u53D6\u6D88</span>\n            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;\u53D6\u6D88&#x27;</span>)\n          }\n        })\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<h4 id="\u4F7F\u7528-promise-1">\u4F7F\u7528 Promise</h4>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-attr">methods</span>: {\n      message () {\n        <span class="hljs-built_in">this</span>.$confirm({\n          <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;\u63D0\u793A&#x27;</span>,\n          <span class="hljs-attr">message</span>: <span class="hljs-string">&#x27;\u8FD9\u4E2A\u4E00\u4E2A\u786E\u8BA4\u5F39\u7A97\uFF01&#x27;</span>,\n          <span class="hljs-attr">submitText</span>: <span class="hljs-string">&#x27;\u786E\u5B9A&#x27;</span>,\n          <span class="hljs-attr">cancelText</span>: <span class="hljs-string">&#x27;\u53D6\u6D88&#x27;</span>\n        }).then(<span class="hljs-function">() =&gt;</span> {\n          <span class="hljs-comment">// \u786E\u5B9A</span>\n        }).catch(<span class="hljs-function">() =&gt;</span> {\n          <span class="hljs-comment">// \u53D6\u6D88</span>\n        })\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<blockquote>\n<p>Options.component \u5FC5\u987B\u662F<strong>vue\u7EC4\u4EF6</strong>\uFF0C \u5F39\u7A97\u89E6\u53D1 submit/cancel\n\u56DE\u8C03\u65F6\u4F1A\u5148\u8C03\u7528\u7EC4\u4EF6\u7684 submit/cancel \u65B9\u6CD5\uFF0C\u7EC4\u4EF6\u7684 submit/cancel \u65B9\u6CD5\u53EF\u8FD4\u56DE\n\u4E00\u4E2A Promise \u5BF9\u8C61</p>\n</blockquote>\n<h3 id="options-1">Options</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u53EF\u9009\u503C</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>title</td>\n<td>\u6807\u9898</td>\n<td>String</td>\n<td>\u2014</td>\n<td>\u2014</td>\n</tr>\n<tr>\n<td>message</td>\n<td>\u6D88\u606F\u5185\u5BB9</td>\n<td>String</td>\n<td>\u2014</td>\n<td>\u2014</td>\n</tr>\n<tr>\n<td>component</td>\n<td>\u5B50\u7EC4\u4EF6\u5F39\u7A97\u5185\u5BB9</td>\n<td>Object</td>\n<td>\u2014</td>\n<td>\u2014</td>\n</tr>\n<tr>\n<td>componentProps</td>\n<td>\u5B50\u7EC4\u4EF6props</td>\n<td>Object</td>\n<td>\u2014</td>\n<td>\u2014</td>\n</tr>\n<tr>\n<td>html</td>\n<td>\u6D88\u606F\u5185\u5BB9\u662F\u5426\u662FHTML</td>\n<td>Boolean</td>\n<td>\u2014</td>\n<td>false</td>\n</tr>\n<tr>\n<td>submitText</td>\n<td>\u786E\u5B9A\u6309\u94AE\u6587\u5B57</td>\n<td>String</td>\n<td>\u2014</td>\n<td>\u786E\u8BA4</td>\n</tr>\n<tr>\n<td>cancelText</td>\n<td>\u53D6\u6D88\u94AE\u6587\u5B57</td>\n<td>String</td>\n<td>\u2014</td>\n<td>\u53D6\u6D88</td>\n</tr>\n<tr>\n<td>submit</td>\n<td>\u786E\u5B9A\u540E\u56DE\u8C03\u51FD\u6570\uFF08\u5982\u679C\u4E0D\u4F20\u5219\u901A\u8FC7Promise\u8FD4\u56DE\u7ED3\u679C\uFF09</td>\n<td>Function</td>\n<td>\u2014</td>\n<td>\u2014</td>\n</tr>\n<tr>\n<td>cancel</td>\n<td>\u53D6\u6D88\u540E\u56DE\u8C03\u51FD\u6570\uFF08\u5982\u679C\u4E0D\u4F20\u5219\u901A\u8FC7Promise\u8FD4\u56DE\u7ED3\u679C\uFF09</td>\n<td>Function</td>\n<td>\u2014</td>\n<td>\u2014</td>\n</tr>\n</tbody></table>\n<h3 id="toast-\u63D0\u793A\u4FE1\u606F">toast \u63D0\u793A\u4FE1\u606F</h3>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-attr">methods</span>: {\n      message () {\n        <span class="hljs-built_in">this</span>.$toast(message[, duration, html])\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<h4 id="\u4F7F\u7528-promise-2">\u4F7F\u7528 Promise</h4>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-attr">methods</span>: {\n      message () {\n        <span class="hljs-built_in">this</span>.$toast(<span class="hljs-string">&#x27;\u6D88\u606F\u63D0\u91921&#x27;</span>, <span class="hljs-number">2000</span>).then(<span class="hljs-function">() =&gt;</span> {\n          <span class="hljs-built_in">this</span>.$toast(<span class="hljs-string">&#x27;&lt;strong&gt;\u6D88\u606F\u63D0\u91922&lt;/strong&gt;&#x27;</span>, <span class="hljs-number">2000</span>, <span class="hljs-literal">true</span>)\n        })\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<h3 id="options-2">Options</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u53EF\u9009\u503C</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>message</td>\n<td>\u63D0\u793A\u4FE1\u606F</td>\n<td>String</td>\n<td>\u2014</td>\n<td>\u2014</td>\n</tr>\n<tr>\n<td>duration</td>\n<td>\u6301\u7EED\u65F6\u95F4\uFF08\u6BEB\u79D2\uFF0C\u53EF\u9009)</td>\n<td>Number</td>\n<td>\u2014</td>\n<td>3000</td>\n</tr>\n<tr>\n<td>html</td>\n<td>\u6D88\u606F\u5185\u5BB9\u662F\u5426\u662FHTML</td>\n<td>Boolean</td>\n<td>\u2014</td>\n<td>false</td>\n</tr>\n</tbody></table>\n'
  });
};
_sfc_md.render = _sfc_render;
_sfc_md.mounted = () => {
};
export { _sfc_md as default };