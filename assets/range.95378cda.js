import{z as a,A as n}from"./index.7b5e7520.js";const s=a({name:"Markdown"}),t=()=>n("div",{class:["md2vue-wrapper","markdown-body"],innerHTML:`<h2 id="range-\u6ED1\u52A8\u6846">range \u6ED1\u52A8\u6846</h2>
<h3 id="\u57FA\u7840\u7528\u6CD5">\u57FA\u7840\u7528\u6CD5</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-symbol">&lt;template&gt;</span>
  &lt;pl-<span class="hljs-built_in">range</span> v-<span class="hljs-keyword">mode</span><span class="hljs-variable">l:value</span>=<span class="hljs-string">&quot;value&quot;</span> :<span class="hljs-built_in">min</span>=<span class="hljs-string">&quot;0&quot;</span> :<span class="hljs-built_in">max</span>=<span class="hljs-string">&quot;100&quot;</span> :step=<span class="hljs-string">&quot;1&quot;</span>&gt;&lt;/pl-<span class="hljs-built_in">range</span>&gt;
  &lt;pl-<span class="hljs-built_in">range</span> v-<span class="hljs-keyword">mode</span><span class="hljs-variable">l:value</span>=<span class="hljs-string">&quot;value&quot;</span> :<span class="hljs-built_in">min</span>=<span class="hljs-string">&quot;0&quot;</span> :<span class="hljs-built_in">max</span>=<span class="hljs-string">&quot;100&quot;</span> :step=<span class="hljs-string">&quot;1&quot;</span> label=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\uFF1A&quot;</span>&gt;&lt;/pl-<span class="hljs-built_in">range</span>&gt;
&lt;/template&gt;

<span class="hljs-symbol">&lt;script&gt;</span>
  export default {
    data () {
      <span class="hljs-keyword">return</span> {
        value: <span class="hljs-number">0</span>
      }
    }
  }
&lt;/script&gt;</div>
</code></pre>
<h3 id="\u5C3A\u5BF8\u5927\u5C0F">\u5C3A\u5BF8\u5927\u5C0F</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-symbol">&lt;template&gt;</span>
  &lt;pl-<span class="hljs-built_in">range</span> v-<span class="hljs-keyword">mode</span><span class="hljs-variable">l:value</span>=<span class="hljs-string">&quot;value&quot;</span> :<span class="hljs-built_in">min</span>=<span class="hljs-string">&quot;0&quot;</span> :<span class="hljs-built_in">max</span>=<span class="hljs-string">&quot;100&quot;</span> :step=<span class="hljs-string">&quot;1&quot;</span> label=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\uFF1A&quot;</span> size=<span class="hljs-string">&quot;small&quot;</span>&gt;&lt;/pl-<span class="hljs-built_in">range</span>&gt;
  &lt;pl-<span class="hljs-built_in">range</span> v-<span class="hljs-keyword">mode</span><span class="hljs-variable">l:value</span>=<span class="hljs-string">&quot;value&quot;</span> :<span class="hljs-built_in">min</span>=<span class="hljs-string">&quot;0&quot;</span> :<span class="hljs-built_in">max</span>=<span class="hljs-string">&quot;100&quot;</span> :step=<span class="hljs-string">&quot;1&quot;</span> label=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\uFF1A&quot;</span> size=<span class="hljs-string">&quot;normal&quot;</span>&gt;&lt;/pl-<span class="hljs-built_in">range</span>&gt;
  &lt;pl-<span class="hljs-built_in">range</span> v-<span class="hljs-keyword">mode</span><span class="hljs-variable">l:value</span>=<span class="hljs-string">&quot;value&quot;</span> :<span class="hljs-built_in">min</span>=<span class="hljs-string">&quot;0&quot;</span> :<span class="hljs-built_in">max</span>=<span class="hljs-string">&quot;100&quot;</span> :step=<span class="hljs-string">&quot;1&quot;</span> label=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\uFF1A&quot;</span> size=<span class="hljs-string">&quot;large&quot;</span>&gt;&lt;/pl-<span class="hljs-built_in">range</span>&gt;
&lt;/template&gt;

<span class="hljs-symbol">&lt;script&gt;</span>
  export default {
    data () {
      <span class="hljs-keyword">return</span> {
        value: <span class="hljs-number">0</span>
      }
    }
  }
&lt;/script&gt;</div>
</code></pre>
<h3 id="\u6807\u9898\u6362\u884C">\u6807\u9898\u6362\u884C</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-range</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:min</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;100&quot;</span> <span class="hljs-attr">:step</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\uFF1A&quot;</span> <span class="hljs-attr">wrap</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">pl-range</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">value</span>: <span class="hljs-number">0</span>
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
</code></pre>
<h3 id="\u7981\u7528">\u7981\u7528</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-range</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:min</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;100&quot;</span> <span class="hljs-attr">:step</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\uFF1A&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">pl-range</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">value</span>: <span class="hljs-number">0</span>
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
</code></pre>
<h3 id="\u8868\u5355\u9A8C\u8BC1">\u8868\u5355\u9A8C\u8BC1</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-range</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:min</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;100&quot;</span> <span class="hljs-attr">:step</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\uFF1A&quot;</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;rules&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;range&quot;</span> <span class="hljs-attr">required</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">pl-range</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">value</span>: <span class="hljs-literal">null</span>,
        <span class="hljs-attr">rules</span>: [{<span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&#x27;\u8BF7\u9009\u62E9&#x27;</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-string">&#x27;change&#x27;</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;number&#x27;</span>}]
      }
    },
    <span class="hljs-attr">methods</span>: {
      submit () {
        <span class="hljs-built_in">this</span>.$refs.range.validate().then(<span class="hljs-function">() =&gt;</span> {
          <span class="hljs-comment">// \u6821\u9A8C\u6210\u529F</span>
        }).catch(<span class="hljs-function"><span class="hljs-params">e</span> =&gt;</span> {
          <span class="hljs-comment">// \u6821\u9A8C\u5931\u8D25</span>
        })
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
</code></pre>
<h3 id="\u56FE\u6807\u586B\u5145">\u56FE\u6807\u586B\u5145</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-range</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:min</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;100&quot;</span> <span class="hljs-attr">:step</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\uFF1A&quot;</span> <span class="hljs-attr">required</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">pl-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;icon-dingwei&quot;</span> <span class="hljs-attr">fill</span>=<span class="hljs-string">&quot;#999&quot;</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;prepend&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">pl-icon</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;append&quot;</span>&gt;</span></span><span class="hljs-template-variable">{{<span class="hljs-name">value</span>}}</span><span class="xml">%<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">pl-range</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-range</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:min</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;100&quot;</span> <span class="hljs-attr">:step</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\uFF1A&quot;</span> <span class="hljs-attr">required</span> <span class="hljs-attr">wrap</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">pl-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;icon-dingwei&quot;</span> <span class="hljs-attr">fill</span>=<span class="hljs-string">&quot;#999&quot;</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;prepend&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">pl-icon</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;append&quot;</span>&gt;</span></span><span class="hljs-template-variable">{{<span class="hljs-name">value</span>}}</span><span class="xml">%<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">pl-range</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">value</span>: <span class="hljs-number">0</span>
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></div>
</code></pre>
<h3 id="\u81EA\u5B9A\u4E49\u6ED1\u5757">\u81EA\u5B9A\u4E49\u6ED1\u5757</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-range</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:min</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;100&quot;</span> <span class="hljs-attr">:step</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\uFF1A&quot;</span> <span class="hljs-attr">required</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;thumb&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;thumb&quot;</span>&gt;</span></span><span class="hljs-template-variable">{{<span class="hljs-name">value</span>}}</span><span class="xml">%<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">pl-range</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">value</span>: <span class="hljs-number">0</span>
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></div>
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
<td>min</td>
<td>\u6700\u5C0F\u503C</td>
<td>Number</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>max</td>
<td>\u6700\u5927\u503C</td>
<td>Number</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>step</td>
<td>step\u8FDB\u5EA6\u95F4\u9694</td>
<td>Number</td>
<td>\u2014</td>
<td>\u2014</td>
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
<td>\u9009\u62E9\u6846\u524D\u7F6E\u5185\u5BB9</td>
</tr>
<tr>
<td>append</td>
<td>\u9009\u62E9\u6846\u540E\u7F6E\u5185\u5BB9</td>
</tr>
<tr>
<td>thumb</td>
<td>\u81EA\u5B9A\u4E49\u6ED1\u5757</td>
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
`});s.render=t;s.mounted=()=>{};export{s as default};
