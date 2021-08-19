import { U as defineComponent, i as h } from "./vendor.f40c224e.js";
const _sfc_md = defineComponent({
  name: "Markdown"
});
const _sfc_render = () => {
  return h("div", {
    class: ["md2vue-wrapper", "markdown-body"],
    innerHTML: '<h2 id="popup-\u5F39\u51FA\u6846">popup \u5F39\u51FA\u6846</h2>\n<h3 id="\u57FA\u7840\u7528\u6CD5">\u57FA\u7840\u7528\u6CD5</h3>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">pl-popup</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;popup&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;popup-inner&quot;</span>&gt;</span>\u8FD9\u662F\u4E00\u4E2A\u5F39\u6846<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">pl-popup</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-attr">methods</span>: {\n      open () {\n        <span class="hljs-built_in">this</span>.$refs.popup.open()\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<h3 id="attributes">Attributes</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u53EF\u9009\u503C</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>position</td>\n<td>\u5F39\u7A97\u4F4D\u7F6E</td>\n<td>String</td>\n<td>top / bottom / right / left / center</td>\n<td>center</td>\n</tr>\n</tbody></table>\n<h3 id="slots">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>name</th>\n<th>\u8BF4\u660E</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>(default)</td>\n<td>\u5F39\u7A97\u5185\u5BB9</td>\n</tr>\n</tbody></table>\n<h3 id="events">Events</h3>\n<table>\n<thead>\n<tr>\n<th>\u4E8B\u4EF6\u540D\u79F0</th>\n<th>\u8BF4\u660E</th>\n<th>\u56DE\u8C03\u53C2\u6570</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>open</td>\n<td>\u5F39\u7A97\u6253\u5F00\u4E8B\u4EF6</td>\n<td>\u2014</td>\n</tr>\n<tr>\n<td>close</td>\n<td>\u5F39\u7A97\u5173\u95ED\u4E8B\u4EF6</td>\n<td>\u2014</td>\n</tr>\n</tbody></table>\n<h3 id="methods">Methods</h3>\n<table>\n<thead>\n<tr>\n<th>\u65B9\u6CD5\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u53C2\u6570</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>open</td>\n<td>\u6253\u5F00\u5F39\u7A97</td>\n<td>\u2014</td>\n</tr>\n<tr>\n<td>close</td>\n<td>\u5173\u95ED\u5F39\u7A97</td>\n<td>\u2014</td>\n</tr>\n</tbody></table>\n'
  });
};
_sfc_md.render = _sfc_render;
_sfc_md.mounted = () => {
};
export { _sfc_md as default };