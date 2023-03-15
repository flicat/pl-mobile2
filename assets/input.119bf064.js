import{z as s,A as n}from"./index.99a447e4.js";const t=s({name:"Markdown"}),a=()=>n("div",{class:["md2vue-wrapper","markdown-body"],innerHTML:`<h2 id="input-\u8F93\u5165\u6846">input \u8F93\u5165\u6846</h2>
<h3 id="\u57FA\u7840\u7528\u6CD5">\u57FA\u7840\u7528\u6CD5</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;&#x27;</span>
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
</code></pre>
<h3 id="\u6587\u672C\u57DF">\u6587\u672C\u57DF</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;textarea&quot;</span> <span class="hljs-attr">rows</span>=<span class="hljs-string">&quot;5&quot;</span> <span class="hljs-attr">cols</span>=<span class="hljs-string">&quot;10&quot;</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;&#x27;</span>
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
</code></pre>
<h3 id="\u8868\u5355\u9A8C\u8BC1">\u8868\u5355\u9A8C\u8BC1</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-input</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;rules&quot;</span> <span class="hljs-attr">required</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;input&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;&#x27;</span>,
        <span class="hljs-attr">rules</span>: [{<span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&#x27;\u8BF7\u9009\u62E9&#x27;</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-string">&#x27;change&#x27;</span>}]
      }
    },
    <span class="hljs-attr">methods</span>: {
      submit () {
        <span class="hljs-built_in">this</span>.$refs.input.validate().then(<span class="hljs-function">() =&gt;</span> {
          <span class="hljs-comment">// \u6821\u9A8C\u6210\u529F</span>
        }).catch(<span class="hljs-function"><span class="hljs-params">e</span> =&gt;</span> {
          <span class="hljs-comment">// \u6821\u9A8C\u5931\u8D25</span>
        })
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
</code></pre>
<h3 id="attributes">Attributes</h3>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u53EF\u9009\u503C</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td>rules</td>
<td>\u9A8C\u8BC1\u89C4\u5219 <a href="https://github.com/yiminghe/async-validator">rules</a></td>
<td>Array</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>size</td>
<td>\u5C3A\u5BF8</td>
<td>String</td>
<td>normal / large / small</td>
<td>normal</td>
</tr>
<tr>
<td>placeholder</td>
<td>\u5360\u4F4D\u7B26</td>
<td>String</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>type</td>
<td>\u8868\u5355\u7C7B\u578B\uFF0C\u539F\u751F\u5B57\u6BB5</td>
<td>String</td>
<td>text / number / search / texarea</td>
<td>text</td>
</tr>
<tr>
<td>wrap</td>
<td>label\u662F\u5426\u6298\u884C\u663E\u793A</td>
<td>boolean</td>
<td>\u2014</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>\u662F\u5426\u7981\u7528\u72B6\u6001</td>
<td>boolean</td>
<td>\u2014</td>
<td>false</td>
</tr>
<tr>
<td>required</td>
<td>\u5FC5\u586B\u7EA2\u8272*\u53F7</td>
<td>boolean</td>
<td>\u2014</td>
<td>false</td>
</tr>
<tr>
<td>rows</td>
<td>texarea\u7684rows\u5C5E\u6027</td>
<td>String</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>cols</td>
<td>texarea\u7684cols\u5C5E\u6027</td>
<td>String</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>showError</td>
<td>\u662F\u5426\u5728\u8868\u5355\u4E2D\u663E\u793A\u9519\u8BEF\u4FE1\u606F</td>
<td>boolean</td>
<td>\u2014</td>
<td>true</td>
</tr>
<tr>
<td>label</td>
<td>label\u6587\u5B57</td>
<td>string</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>labelWidth</td>
<td>label\u5BBD\u5EA6</td>
<td>string</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>clearable</td>
<td>\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE</td>
<td>boolean</td>
<td>\u2014</td>
<td>false</td>
</tr>
</tbody></table>
<h3 id="slots">Slots</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td>label</td>
<td>label\u6587\u5B57</td>
</tr>
<tr>
<td>prepend</td>
<td>\u8F93\u5165\u6846\u524D\u7F6E\u5185\u5BB9</td>
</tr>
<tr>
<td>append</td>
<td>\u8F93\u5165\u6846\u540E\u7F6E\u5185\u5BB9</td>
</tr>
</tbody></table>
<h3 id="events">Events</h3>
<table>
<thead>
<tr>
<th>\u4E8B\u4EF6\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
<th>\u56DE\u8C03\u53C2\u6570</th>
</tr>
</thead>
<tbody><tr>
<td>change</td>
<td>value\u66F4\u6539\u4E8B\u4EF6</td>
<td>\u66F4\u6539\u540E\u7684value</td>
</tr>
<tr>
<td>input</td>
<td>\u8F93\u5165\u4E8B\u4EF6</td>
<td>\u66F4\u6539\u540E\u7684value</td>
</tr>
<tr>
<td>clear</td>
<td>value\u6E05\u9664\u4E8B\u4EF6</td>
<td>\u66F4\u6539\u540E\u7684value</td>
</tr>
</tbody></table>
<h3 id="methods">Methods</h3>
<table>
<thead>
<tr>
<th>\u65B9\u6CD5\u540D</th>
<th>\u8BF4\u660E</th>
<th>\u53C2\u6570</th>
</tr>
</thead>
<tbody><tr>
<td>validate</td>
<td>\u8868\u5355\u9A8C\u8BC1\u65B9\u6CD5</td>
<td>\u2014</td>
</tr>
<tr>
<td>clearValidate</td>
<td>\u6E05\u9664\u9A8C\u8BC1\u9519\u8BEF\u63D0\u793A</td>
<td>\u2014</td>
</tr>
</tbody></table>
`});t.render=a;t.mounted=()=>{};export{t as default};
