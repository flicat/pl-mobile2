import { U as defineComponent, i as h } from "./vendor.f40c224e.js";
const _sfc_md = defineComponent({
  name: "Markdown"
});
const _sfc_render = () => {
  return h("div", {
    class: ["md2vue-wrapper", "markdown-body"],
    innerHTML: '<h2 id="steps-\u6B65\u9AA4\u6761">steps \u6B65\u9AA4\u6761</h2>\n<h3 id="\u57FA\u7840\u7528\u6CD5">\u57FA\u7840\u7528\u6CD5</h3>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">pl-steps</span> <span class="hljs-attr">:active</span>=<span class="hljs-string">&quot;0&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">pl-step-item</span>&gt;</span>\u6B65\u9AA4\u4E00<span class="hljs-tag">&lt;/<span class="hljs-name">pl-step-item</span>&gt;</span>  \n    <span class="hljs-tag">&lt;<span class="hljs-name">pl-step-item</span>&gt;</span>\u6B65\u9AA4\u4E8C<span class="hljs-tag">&lt;/<span class="hljs-name">pl-step-item</span>&gt;</span>  \n    <span class="hljs-tag">&lt;<span class="hljs-name">pl-step-item</span>&gt;</span>\u6B65\u9AA4\u4E09<span class="hljs-tag">&lt;/<span class="hljs-name">pl-step-item</span>&gt;</span>  \n  <span class="hljs-tag">&lt;/<span class="hljs-name">pl-steps</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span></div>\n</code></pre>\n<h3 id="\u6A2A\u5411\u6B65\u9AA4\u6761">\u6A2A\u5411\u6B65\u9AA4\u6761</h3>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">pl-steps</span> <span class="hljs-attr">:active</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;horizontal&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">pl-step-item</span>&gt;</span>\u6B65\u9AA4\u4E00<span class="hljs-tag">&lt;/<span class="hljs-name">pl-step-item</span>&gt;</span>  \n    <span class="hljs-tag">&lt;<span class="hljs-name">pl-step-item</span>&gt;</span>\u6B65\u9AA4\u4E8C<span class="hljs-tag">&lt;/<span class="hljs-name">pl-step-item</span>&gt;</span>  \n    <span class="hljs-tag">&lt;<span class="hljs-name">pl-step-item</span>&gt;</span>\u6B65\u9AA4\u4E09<span class="hljs-tag">&lt;/<span class="hljs-name">pl-step-item</span>&gt;</span>  \n  <span class="hljs-tag">&lt;/<span class="hljs-name">pl-steps</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span></div>\n</code></pre>\n<h3 id="steps-attributes">Steps Attributes</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u53EF\u9009\u503C</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>active</td>\n<td>\u5F53\u524D\u6B65\u9AA4</td>\n<td>Number</td>\n<td>\u2014</td>\n<td>0</td>\n</tr>\n<tr>\n<td>activeColor</td>\n<td>\u5F53\u524D\u6FC0\u6D3B\u7684\u989C\u8272</td>\n<td>String</td>\n<td>\u2014</td>\n<td>#67c23a</td>\n</tr>\n<tr>\n<td>direction</td>\n<td>\u663E\u793A\u65B9\u5411</td>\n<td>String</td>\n<td>vertical / horizontal</td>\n<td>vertical</td>\n</tr>\n<tr>\n<td>fold</td>\n<td>\u662F\u5426\u9ED8\u8BA4\u6298\u53E0</td>\n<td>Boolean</td>\n<td>\u2014</td>\n<td>false</td>\n</tr>\n</tbody></table>\n<h3 id="stepitem-slots">StepItem Slots</h3>\n<table>\n<thead>\n<tr>\n<th>name</th>\n<th>\u8BF4\u660E</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>(default)</td>\n<td>\u5217\u8868\u5B50\u9009\u9879</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>\u6B65\u9AA4\u56FE\u6807</td>\n</tr>\n</tbody></table>\n'
  });
};
_sfc_md.render = _sfc_render;
_sfc_md.mounted = () => {
};
export { _sfc_md as default };