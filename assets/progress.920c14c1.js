import { U as defineComponent, i as h } from "./vendor.f40c224e.js";
const _sfc_md = defineComponent({
  name: "Markdown"
});
const _sfc_render = () => {
  return h("div", {
    class: ["md2vue-wrapper", "markdown-body"],
    innerHTML: '<h2 id="progress-\u8FDB\u5EA6\u6761">progress \u8FDB\u5EA6\u6761</h2>\n<h3 id="\u57FA\u7840\u7528\u6CD5">\u57FA\u7840\u7528\u6CD5</h3>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">pl-progress</span> <span class="hljs-attr">:progress</span>=<span class="hljs-string">&quot;60&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span></div>\n</code></pre>\n<h3 id="\u73AF\u5F62\u8FDB\u5EA6\u6761">\u73AF\u5F62\u8FDB\u5EA6\u6761</h3>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">pl-progress</span> <span class="hljs-attr">:progress</span>=<span class="hljs-string">&quot;60&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;circle&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span></div>\n</code></pre>\n<h3 id="\u8BBE\u7F6E\u5927\u5C0F">\u8BBE\u7F6E\u5927\u5C0F</h3>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">pl-progress</span> <span class="hljs-attr">:progress</span>=<span class="hljs-string">&quot;60&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;font-size: 60px&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span></div>\n</code></pre>\n<h3 id="attributes">Attributes</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u53EF\u9009\u503C</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>progress</td>\n<td>\u8FDB\u5EA6\uFF080 - 100\uFF09</td>\n<td>Number</td>\n<td>\u2014</td>\n<td>0</td>\n</tr>\n<tr>\n<td>type</td>\n<td>\u8FDB\u5EA6\u6761\u7C7B\u578B</td>\n<td>String</td>\n<td>circle / bar</td>\n<td>bar</td>\n</tr>\n</tbody></table>\n'
  });
};
_sfc_md.render = _sfc_render;
_sfc_md.mounted = () => {
};
export { _sfc_md as default };
