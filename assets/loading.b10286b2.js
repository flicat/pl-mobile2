import { U as defineComponent, i as h } from "./vendor.f40c224e.js";
const _sfc_md = defineComponent({
  name: "Markdown"
});
const _sfc_render = () => {
  return h("div", {
    class: ["md2vue-wrapper", "markdown-body"],
    innerHTML: '<h2 id="loading-\u52A0\u8F7D\u56FE\u6807">loading \u52A0\u8F7D\u56FE\u6807</h2>\n<h3 id="\u57FA\u7840\u7528\u6CD5">\u57FA\u7840\u7528\u6CD5</h3>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">pl-loading</span>&gt;</span>\u52A0\u8F7D\u4E2D...<span class="hljs-tag">&lt;/<span class="hljs-name">pl-loading</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span></div>\n</code></pre>\n<h3 id="\u5168\u5C40\u8C03\u7528">\u5168\u5C40\u8C03\u7528</h3>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-attr">methods</span>: {\n      getAsyncData () {\n        <span class="hljs-built_in">this</span>.$loadingShow(<span class="hljs-string">&#x27;\u52A0\u8F7D\u4E2D...&#x27;</span>)\n        <span class="hljs-comment">// async data</span>\n        <span class="hljs-built_in">this</span>.$loadingHide()\n      }      \n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<h3 id="attributes">Attributes</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u53EF\u9009\u503C</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>vertical</td>\n<td>\u662F\u5426\u5782\u76F4\u6392\u5217</td>\n<td>Boolean</td>\n<td>\u2014</td>\n<td>false</td>\n</tr>\n</tbody></table>\n<h3 id="slots">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>name</th>\n<th>\u8BF4\u660E</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>(default)</td>\n<td>loading\u63D0\u793A\u6587\u5B57</td>\n</tr>\n</tbody></table>\n<h3 id="global-methods">Global Methods</h3>\n<table>\n<thead>\n<tr>\n<th>\u65B9\u6CD5\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u53C2\u6570</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>$loadingShow</td>\n<td>\u6253\u5F00loading</td>\n<td>text\uFF1Aloading\u63D0\u793A\u6587\u5B57, vertical\uFF1A\u662F\u5426\u5782\u76F4\u6392\u5217</td>\n</tr>\n<tr>\n<td>$loadingHide</td>\n<td>\u5173\u95EDloading</td>\n<td>\u2014</td>\n</tr>\n</tbody></table>\n'
  });
};
_sfc_md.render = _sfc_render;
_sfc_md.mounted = () => {
};
export { _sfc_md as default };
