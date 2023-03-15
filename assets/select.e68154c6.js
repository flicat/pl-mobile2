import{z as a,A as n}from"./index.99a447e4.js";const s=a({name:"Markdown"}),t=()=>n("div",{class:["md2vue-wrapper","markdown-body"],innerHTML:`<h2 id="select-\u4E0B\u62C9\u83DC\u5355">select \u4E0B\u62C9\u83DC\u5355</h2>
<h3 id="\u57FA\u7840\u7528\u6CD5">\u57FA\u7840\u7528\u6CD5</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-select</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;data&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">pl-select</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">value</span>: <span class="hljs-literal">null</span>,
        <span class="hljs-attr">data</span>: [
          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98791&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">false</span>},
          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98792&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">false</span>},
          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98793&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>}
        ]
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
</code></pre>
<h3 id="\u591A\u9009">\u591A\u9009</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-select</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;data&quot;</span> <span class="hljs-attr">multiple</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">pl-select</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">value</span>: <span class="hljs-literal">null</span>,
        <span class="hljs-attr">data</span>: [
          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98791&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">false</span>},
          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98792&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">false</span>},
          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98793&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>}
        ]
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
</code></pre>
<h3 id="\u8868\u5355\u9A8C\u8BC1">\u8868\u5355\u9A8C\u8BC1</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-select</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;select&quot;</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;rules&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\uFF1A&quot;</span> <span class="hljs-attr">labelWidth</span>=<span class="hljs-string">&quot;5em&quot;</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;data&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span> <span class="hljs-attr">clearable</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">pl-select</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">value</span>: <span class="hljs-literal">null</span>,
        <span class="hljs-attr">rules</span>: [{<span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&#x27;\u8BF7\u8F93\u5165&#x27;</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-string">&#x27;change&#x27;</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;number&#x27;</span>}],
        <span class="hljs-attr">data</span>: [
          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98791&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">false</span>},
          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98792&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">false</span>},
          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98793&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>}
        ]
      }
    },
    <span class="hljs-attr">methods</span>: {
      submit () {
        <span class="hljs-built_in">this</span>.$refs.select.validate().then(<span class="hljs-function">() =&gt;</span> {
          <span class="hljs-comment">// \u6821\u9A8C\u6210\u529F</span>
        }).catch(<span class="hljs-function"><span class="hljs-params">e</span> =&gt;</span> {
          <span class="hljs-comment">// \u6821\u9A8C\u5931\u8D25</span>
        })
      },
      change (value) {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#x27;change::&#x27;</span>, value)
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
</code></pre>
<h3 id="\u81EA\u5B9A\u4E49\u5B50\u9879">\u81EA\u5B9A\u4E49\u5B50\u9879</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">pl-select</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;data&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot</span>=<span class="hljs-string">&quot;scope&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span></span><span class="hljs-template-variable">{{<span class="hljs-name">scope.item.label</span>}}</span><span class="xml">-</span><span class="hljs-template-variable">{{<span class="hljs-name">scope.item.value</span>}}</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">pl-select</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">value</span>: <span class="hljs-literal">null</span>,
        <span class="hljs-attr">data</span>: [
          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98791&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">false</span>},
          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98792&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">false</span>},
          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98793&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>}
        ]
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
<td>options</td>
<td>\u9009\u9879\u5217\u8868</td>
<td>Array</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>placeholder</td>
<td>\u5360\u4F4D\u7B26</td>
<td>String</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>prop</td>
<td>\u9009\u9879\u5BF9\u5E94\u7684key\u4E0Evalue</td>
<td>Object</td>
<td>\u2014</td>
<td>{label: &#39;label&#39;, value: &#39;value&#39;}</td>
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
<td>multiple</td>
<td>\u662F\u5426\u591A\u9009</td>
<td>boolean</td>
<td>\u2014</td>
<td>false</td>
</tr>
<tr>
<td>readonly</td>
<td>\u662F\u5426\u53EA\u8BFB\u72B6\u6001</td>
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
<td>(default)</td>
<td>\u81EA\u5B9A\u4E49\u5217\u8868\u5B50\u9009\u9879</td>
</tr>
<tr>
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
