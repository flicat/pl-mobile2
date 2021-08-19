import { U as defineComponent, i as h } from "./vendor.f40c224e.js";
const _sfc_md = defineComponent({
  name: "Markdown"
});
const _sfc_render = () => {
  return h("div", {
    class: ["md2vue-wrapper", "markdown-body"],
    innerHTML: '<h2 id="form-\u8868\u5355">form \u8868\u5355</h2>\n<h3 id="\u57FA\u7840\u7528\u6CD5">\u57FA\u7840\u7528\u6CD5</h3>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">pl-form</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;form&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">pl-input</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">pl-form</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data () {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;&#x27;</span>\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<h3 id="\u7EDF\u4E00\u8BBE\u7F6E-sizelabelwidthdisabled">\u7EDF\u4E00\u8BBE\u7F6E size/labelWidth/disabled</h3>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">pl-form</span> <span class="hljs-attr">labelWidth</span>=<span class="hljs-string">&quot;5em&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">pl-input</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u7528\u6237\u540D\uFF1A&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">pl-form</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data () {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;&#x27;</span>\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<h3 id="\u8868\u5355\u9A8C\u8BC1">\u8868\u5355\u9A8C\u8BC1</h3>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">pl-form</span> <span class="hljs-attr">labelWidth</span>=<span class="hljs-string">&quot;5em&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;form&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">pl-input</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;rules.input&quot;</span> <span class="hljs-attr">required</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;input&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u540D\u5B57\uFF1A&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">pl-select</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;rules.select&quot;</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\uFF1A&quot;</span> <span class="hljs-attr">required</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">pl-select</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">pl-range</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;rangeValue&quot;</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;rules.range&quot;</span> <span class="hljs-attr">:min</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;100&quot;</span> <span class="hljs-attr">:step</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\uFF1A&quot;</span> <span class="hljs-attr">labelWidth</span>=<span class="hljs-string">&quot;5em&quot;</span> <span class="hljs-attr">required</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;prepend&quot;</span>&gt;</span>0%<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;append&quot;</span>&gt;</span></span><span class="hljs-template-variable">{{<span class="hljs-name">rangeValue</span>}}</span><span class="xml">%<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">pl-range</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">pl-radio</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;rules.radio&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5355\u9009\uFF1A&quot;</span> <span class="hljs-attr">required</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">pl-radio</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">pl-checkbox</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;checkboxValue&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;rules.checkbox&quot;</span> <span class="hljs-attr">required</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;checkbox&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u591A\u9009\uFF1A&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">pl-checkbox</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">pl-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u63D0\u4EA4<span class="hljs-tag">&lt;/<span class="hljs-name">pl-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">pl-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data () {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;&#x27;</span>,\n        <span class="hljs-attr">rangeValue</span>: <span class="hljs-literal">null</span>,\n        <span class="hljs-attr">checkboxValue</span>: [],\n        <span class="hljs-attr">options</span>: [\n          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98791&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">1</span>},\n          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98792&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">2</span>},\n          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98793&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">3</span>}\n        ],\n        <span class="hljs-attr">rules</span>: {\n          <span class="hljs-attr">input</span>: [{<span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&#x27;\u8BF7\u8F93\u5165&#x27;</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-string">&#x27;blur&#x27;</span>}],\n          <span class="hljs-attr">select</span>: [{<span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&#x27;\u8BF7\u8F93\u5165&#x27;</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-string">&#x27;change&#x27;</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;number&#x27;</span>}],\n          <span class="hljs-attr">range</span>: [{<span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&#x27;\u8BF7\u8F93\u5165&#x27;</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-string">&#x27;change&#x27;</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;number&#x27;</span>}],\n          <span class="hljs-attr">checkbox</span>: [{<span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&#x27;\u8BF7\u8F93\u5165&#x27;</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-string">&#x27;change&#x27;</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;array&#x27;</span>}],\n          <span class="hljs-attr">radio</span>: [{<span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&#x27;\u8BF7\u8F93\u5165&#x27;</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-string">&#x27;change&#x27;</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;number&#x27;</span>}]\n        }\n      }\n    },\n    <span class="hljs-attr">methods</span>: {\n      submit () {\n        <span class="hljs-built_in">this</span>.$refs[<span class="hljs-string">&#x27;form&#x27;</span>].validate().then(<span class="hljs-function">() =&gt;</span> {\n          <span class="hljs-comment">// \u6821\u9A8C\u6210\u529F</span>\n        }).catch(<span class="hljs-function"><span class="hljs-params">e</span> =&gt;</span> {\n          <span class="hljs-comment">// \u6821\u9A8C\u5931\u8D25</span>\n        })\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></div>\n</code></pre>\n<h3 id="attributes">Attributes</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u53EF\u9009\u503C</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>size</td>\n<td>\u5C3A\u5BF8</td>\n<td>String</td>\n<td>normal / large / small</td>\n<td>normal</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>\u662F\u5426\u7981\u7528\u72B6\u6001</td>\n<td>boolean</td>\n<td>\u2014</td>\n<td>false</td>\n</tr>\n<tr>\n<td>labelWidth</td>\n<td>label\u5BBD\u5EA6</td>\n<td>string</td>\n<td>\u2014</td>\n<td>\u2014</td>\n</tr>\n</tbody></table>\n<h3 id="slots">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>name</th>\n<th>\u8BF4\u660E</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>(default)</td>\n<td>\u2014</td>\n</tr>\n</tbody></table>\n<h3 id="methods">Methods</h3>\n<table>\n<thead>\n<tr>\n<th>\u65B9\u6CD5\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u53C2\u6570</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>validate</td>\n<td>\u8868\u5355\u9A8C\u8BC1\u65B9\u6CD5</td>\n<td>\u2014</td>\n</tr>\n<tr>\n<td>clearValidate</td>\n<td>\u6E05\u9664\u9A8C\u8BC1\u9519\u8BEF\u63D0\u793A</td>\n<td>\u2014</td>\n</tr>\n</tbody></table>\n'
  });
};
_sfc_md.render = _sfc_render;
_sfc_md.mounted = () => {
};
export { _sfc_md as default };
