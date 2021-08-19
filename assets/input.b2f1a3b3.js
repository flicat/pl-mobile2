import { U as defineComponent, i as h } from "./vendor.f40c224e.js";
const _sfc_md = defineComponent({
  name: "Markdown"
});
const _sfc_render = () => {
  return h("div", {
    class: ["md2vue-wrapper", "markdown-body"],
    innerHTML: '<h2 id="input-\u8F93\u5165\u6846">input \u8F93\u5165\u6846</h2>\n<h3 id="\u57FA\u7840\u7528\u6CD5">\u57FA\u7840\u7528\u6CD5</h3>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">pl-input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data () {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;&#x27;</span>\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<h3 id="\u6587\u672C\u57DF">\u6587\u672C\u57DF</h3>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">pl-input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;textarea&quot;</span> <span class="hljs-attr">rows</span>=<span class="hljs-string">&quot;5&quot;</span> <span class="hljs-attr">cols</span>=<span class="hljs-string">&quot;10&quot;</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data () {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;&#x27;</span>\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<h3 id="\u8868\u5355\u9A8C\u8BC1">\u8868\u5355\u9A8C\u8BC1</h3>\n<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">pl-input</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;rules&quot;</span> <span class="hljs-attr">required</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;input&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data () {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;&#x27;</span>,\n        <span class="hljs-attr">rules</span>: [{<span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&#x27;\u8BF7\u9009\u62E9&#x27;</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-string">&#x27;change&#x27;</span>}]\n      }\n    },\n    <span class="hljs-attr">methods</span>: {\n      submit () {\n        <span class="hljs-built_in">this</span>.$refs.input.validate().then(<span class="hljs-function">() =&gt;</span> {\n          <span class="hljs-comment">// \u6821\u9A8C\u6210\u529F</span>\n        }).catch(<span class="hljs-function"><span class="hljs-params">e</span> =&gt;</span> {\n          <span class="hljs-comment">// \u6821\u9A8C\u5931\u8D25</span>\n        })\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>\n</code></pre>\n<h3 id="attributes">Attributes</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u53EF\u9009\u503C</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>rules</td>\n<td>\u9A8C\u8BC1\u89C4\u5219 <a href="https://github.com/yiminghe/async-validator">rules</a></td>\n<td>Array</td>\n<td>\u2014</td>\n<td>\u2014</td>\n</tr>\n<tr>\n<td>size</td>\n<td>\u5C3A\u5BF8</td>\n<td>String</td>\n<td>normal / large / small</td>\n<td>normal</td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td>\u5360\u4F4D\u7B26</td>\n<td>String</td>\n<td>\u2014</td>\n<td>\u2014</td>\n</tr>\n<tr>\n<td>type</td>\n<td>\u8868\u5355\u7C7B\u578B\uFF0C\u539F\u751F\u5B57\u6BB5</td>\n<td>String</td>\n<td>text / number / search / texarea</td>\n<td>text</td>\n</tr>\n<tr>\n<td>wrap</td>\n<td>label\u662F\u5426\u6298\u884C\u663E\u793A</td>\n<td>boolean</td>\n<td>\u2014</td>\n<td>false</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>\u662F\u5426\u7981\u7528\u72B6\u6001</td>\n<td>boolean</td>\n<td>\u2014</td>\n<td>false</td>\n</tr>\n<tr>\n<td>required</td>\n<td>\u5FC5\u586B\u7EA2\u8272*\u53F7</td>\n<td>boolean</td>\n<td>\u2014</td>\n<td>false</td>\n</tr>\n<tr>\n<td>rows</td>\n<td>texarea\u7684rows\u5C5E\u6027</td>\n<td>String</td>\n<td>\u2014</td>\n<td>\u2014</td>\n</tr>\n<tr>\n<td>cols</td>\n<td>texarea\u7684cols\u5C5E\u6027</td>\n<td>String</td>\n<td>\u2014</td>\n<td>\u2014</td>\n</tr>\n<tr>\n<td>label</td>\n<td>label\u6587\u5B57</td>\n<td>string</td>\n<td>\u2014</td>\n<td>\u2014</td>\n</tr>\n<tr>\n<td>labelWidth</td>\n<td>label\u5BBD\u5EA6</td>\n<td>string</td>\n<td>\u2014</td>\n<td>\u2014</td>\n</tr>\n<tr>\n<td>clearable</td>\n<td>\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE</td>\n<td>boolean</td>\n<td>\u2014</td>\n<td>false</td>\n</tr>\n</tbody></table>\n<h3 id="slots">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>name</th>\n<th>\u8BF4\u660E</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>label</td>\n<td>label\u6587\u5B57</td>\n</tr>\n<tr>\n<td>prepend</td>\n<td>\u8F93\u5165\u6846\u524D\u7F6E\u5185\u5BB9</td>\n</tr>\n<tr>\n<td>append</td>\n<td>\u8F93\u5165\u6846\u540E\u7F6E\u5185\u5BB9</td>\n</tr>\n</tbody></table>\n<h3 id="events">Events</h3>\n<table>\n<thead>\n<tr>\n<th>\u4E8B\u4EF6\u540D\u79F0</th>\n<th>\u8BF4\u660E</th>\n<th>\u56DE\u8C03\u53C2\u6570</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>change</td>\n<td>value\u66F4\u6539\u4E8B\u4EF6</td>\n<td>\u66F4\u6539\u540E\u7684value</td>\n</tr>\n<tr>\n<td>input</td>\n<td>\u8F93\u5165\u4E8B\u4EF6</td>\n<td>\u66F4\u6539\u540E\u7684value</td>\n</tr>\n<tr>\n<td>clear</td>\n<td>value\u6E05\u9664\u4E8B\u4EF6</td>\n<td>\u66F4\u6539\u540E\u7684value</td>\n</tr>\n</tbody></table>\n<h3 id="methods">Methods</h3>\n<table>\n<thead>\n<tr>\n<th>\u65B9\u6CD5\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u53C2\u6570</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>validate</td>\n<td>\u8868\u5355\u9A8C\u8BC1\u65B9\u6CD5</td>\n<td>\u2014</td>\n</tr>\n<tr>\n<td>clearValidate</td>\n<td>\u6E05\u9664\u9A8C\u8BC1\u9519\u8BEF\u63D0\u793A</td>\n<td>\u2014</td>\n</tr>\n</tbody></table>\n'
  });
};
_sfc_md.render = _sfc_render;
_sfc_md.mounted = () => {
};
export { _sfc_md as default };
