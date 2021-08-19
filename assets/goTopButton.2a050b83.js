import { U as defineComponent, i as h } from "./vendor.f40c224e.js";
const _sfc_md = defineComponent({
  name: "Markdown"
});
const _sfc_render = () => {
  return h("div", {
    class: ["md2vue-wrapper", "markdown-body"],
    innerHTML: '<h2 id="gotopbutton-\u8FD4\u56DE\u9876\u90E8\u6309\u94AE">goTopButton \u8FD4\u56DE\u9876\u90E8\u6309\u94AE</h2>\n<h3 id="\u57FA\u7840\u7528\u6CD5">\u57FA\u7840\u7528\u6CD5</h3>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;wrap&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;wrap&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">pl-go-top-button</span> <span class="hljs-attr">:target</span>=<span class="hljs-string">&quot;wrap&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data () {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">wrap</span>: <span class="hljs-literal">null</span>\n      }\n    },\n    mounted () {\n      <span class="hljs-built_in">this</span>.wrap = <span class="hljs-built_in">this</span>.$refs.wrap.parentNode\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">\n  <span class="hljs-selector-tag">html</span>,<span class="hljs-selector-tag">body</span>,<span class="hljs-selector-class">.wrap</span> {\n    <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;\n    <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;\n  }\n  <span class="hljs-selector-class">.wrap</span> {\n    <span class="hljs-attribute">overflow</span>: auto;\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span></div>\n</code></pre>\n<h3 id="attributes">Attributes</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u53EF\u9009\u503C</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>target</td>\n<td>\u6EDA\u52A8\u5BB9\u5668</td>\n<td>Node/window</td>\n<td>\u2014</td>\n<td>\u2014</td>\n</tr>\n<tr>\n<td>offset</td>\n<td>\u504F\u79FB\u91CF\uFF0C\u5F53\u5BB9\u5668\u6EDA\u52A8\u5927\u4E8Eoffset\u5219\u663E\u793A\u6309\u94AE</td>\n<td>Number</td>\n<td>\u2014</td>\n<td>\u2014</td>\n</tr>\n</tbody></table>\n'
  });
};
_sfc_md.render = _sfc_render;
_sfc_md.mounted = () => {
};
export { _sfc_md as default };
