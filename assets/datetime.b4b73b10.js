import{z as a,A as n}from"./index.32860cbf.js";const s=a({name:"Markdown"}),t=()=>n("div",{class:["md2vue-wrapper","markdown-body"],innerHTML:`<h2 id="datetime-\u65E5\u671F\u9009\u62E9\u6846">datetime \u65E5\u671F\u9009\u62E9\u6846</h2>
<h3 id="\u57FA\u7840\u7528\u6CD5">\u57FA\u7840\u7528\u6CD5</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-datetime</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65E5\u671F&quot;</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;date&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;date&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">pl-datetime</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">date</span>: <span class="hljs-literal">null</span>
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
</code></pre>
<h3 id="\u65F6\u95F4\u9009\u62E9">\u65F6\u95F4\u9009\u62E9</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-datetime</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4\uFF1A&quot;</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;time&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;time&quot;</span> <span class="hljs-attr">valueFormat</span>=<span class="hljs-string">&quot;H:I&quot;</span> <span class="hljs-attr">clearable</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">pl-datetime</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">time</span>: <span class="hljs-literal">null</span>
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
</code></pre>
<h3 id="\u6708\u4EFD\u9009\u62E9">\u6708\u4EFD\u9009\u62E9</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
   <span class="hljs-tag">&lt;<span class="hljs-name">pl-datetime</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u6708\u4EFD\uFF1A&quot;</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;month&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;month&quot;</span> <span class="hljs-attr">valueFormat</span>=<span class="hljs-string">&quot;Y-M&quot;</span> <span class="hljs-attr">clearable</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">pl-datetime</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">month</span>: <span class="hljs-literal">null</span>
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
</code></pre>
<h3 id="\u81EA\u5B9A\u4E49\u663E\u793A\u683C\u5F0F\u4E0E\u8FD4\u56DE\u683C\u5F0F">\u81EA\u5B9A\u4E49\u663E\u793A\u683C\u5F0F\u4E0E\u8FD4\u56DE\u683C\u5F0F</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-datetime</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65E5\u671F&quot;</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;date&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;date&quot;</span> <span class="hljs-attr">valueFormat</span>=<span class="hljs-string">&quot;Y-M-D H:I:S&quot;</span> <span class="hljs-attr">format</span>=<span class="hljs-string">&quot;Y\u5E74M\u6708D\u65E5&quot;</span> <span class="hljs-attr">clearable</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">pl-datetime</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">date</span>: <span class="hljs-literal">null</span>
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
</code></pre>
<h3 id="\u8303\u56F4\u9009\u62E9">\u8303\u56F4\u9009\u62E9</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-datetime</span> <span class="hljs-attr">startPlaceholder</span>=<span class="hljs-string">&quot;\u5F00\u59CB\u65F6\u95F4&quot;</span> <span class="hljs-attr">endPlaceholder</span>=<span class="hljs-string">&quot;\u7ED3\u675F\u65F6\u95F4&quot;</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;timeRange&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;time&quot;</span> <span class="hljs-attr">valueFormat</span>=<span class="hljs-string">&quot;H:I&quot;</span> <span class="hljs-attr">isRange</span> <span class="hljs-attr">clearable</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">pl-datetime</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-datetime</span> <span class="hljs-attr">startPlaceholder</span>=<span class="hljs-string">&quot;\u5F00\u59CB\u65E5\u671F&quot;</span> <span class="hljs-attr">endPlaceholder</span>=<span class="hljs-string">&quot;\u7ED3\u675F\u65E5\u671F&quot;</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;dateRange&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;date&quot;</span> <span class="hljs-attr">isRange</span> <span class="hljs-attr">clearable</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">pl-datetime</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-datetime</span> <span class="hljs-attr">startPlaceholder</span>=<span class="hljs-string">&quot;\u5F00\u59CB\u6708\u4EFD&quot;</span> <span class="hljs-attr">endPlaceholder</span>=<span class="hljs-string">&quot;\u7ED3\u675F\u6708\u4EFD&quot;</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;monthRange&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;month&quot;</span> <span class="hljs-attr">valueFormat</span>=<span class="hljs-string">&quot;Y-M&quot;</span> <span class="hljs-attr">isRange</span> <span class="hljs-attr">clearable</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">pl-datetime</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">timeRange</span>: [],
        <span class="hljs-attr">dateRange</span>: [],
        <span class="hljs-attr">monthRange</span>: []
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
</code></pre>
<h3 id="\u8BBE\u7F6E\u65E5\u671F\u53EF\u9009\u8303\u56F4">\u8BBE\u7F6E\u65E5\u671F\u53EF\u9009\u8303\u56F4</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">pl-datetime</span> <span class="hljs-attr">startPlaceholder</span>=<span class="hljs-string">&quot;\u5F00\u59CB\u65E5\u671F&quot;</span> <span class="hljs-attr">endPlaceholder</span>=<span class="hljs-string">&quot;\u7ED3\u675F\u65E5\u671F&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;dateRangeOption&quot;</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;dateRange&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;date&quot;</span> <span class="hljs-attr">valueFormat</span>=<span class="hljs-string">&quot;Y-M-D H:I:S&quot;</span> <span class="hljs-attr">isRange</span> <span class="hljs-attr">clearable</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">pl-datetime</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">dateRange</span>: [],
        <span class="hljs-attr">dateRangeOption</span>: {
          <span class="hljs-attr">min</span>: -<span class="hljs-number">3</span>,
          <span class="hljs-attr">max</span>: <span class="hljs-number">9</span>,
          <span class="hljs-attr">startLabel</span>: <span class="hljs-string">&#x27;\u5165\u4F4F&#x27;</span>,
          <span class="hljs-attr">endLabel</span>: <span class="hljs-string">&#x27;\u79BB\u5E97&#x27;</span>,
          <span class="hljs-attr">format</span>: <span class="hljs-string">&#x27;Y-M-D&#x27;</span>,
          <span class="hljs-attr">selectRange</span>: <span class="hljs-number">14</span>,
          <span class="hljs-function"><span class="hljs-title">disabledDate</span>(<span class="hljs-params">time</span>)</span> {
            <span class="hljs-keyword">return</span> time &gt;= <span class="hljs-number">1619798400000</span> &amp;&amp; time &lt;= <span class="hljs-number">1620144000000</span>
          }
        }
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
</code></pre>
<h3 id="\u8868\u5355\u9A8C\u8BC1">\u8868\u5355\u9A8C\u8BC1</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">pl-datetime</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65E5\u671F\uFF1A&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65E5\u671F&quot;</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;date&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;date&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;datetime1&quot;</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;rules1&quot;</span> <span class="hljs-attr">required</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">pl-datetime</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">pl-datetime</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65E5\u671F\u8303\u56F4\uFF1A&quot;</span> <span class="hljs-attr">startPlaceholder</span>=<span class="hljs-string">&quot;\u5F00\u59CB\u65E5\u671F&quot;</span> <span class="hljs-attr">endPlaceholder</span>=<span class="hljs-string">&quot;\u7ED3\u675F\u65E5\u671F&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;dateRangeOption&quot;</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;dateRange&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;date&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;datetime2&quot;</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;rules2&quot;</span> <span class="hljs-attr">required</span> <span class="hljs-attr">isRange</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">pl-datetime</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">pl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;validate&quot;</span>&gt;</span>\u6821\u9A8C<span class="hljs-tag">&lt;/<span class="hljs-name">pl-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">date</span>: <span class="hljs-literal">null</span>,
        <span class="hljs-attr">dateRange</span>: [],
        <span class="hljs-attr">rules1</span>: [{ <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&#x27;\u8BF7\u9009\u62E9&#x27;</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-string">&#x27;change&#x27;</span> }],
        <span class="hljs-attr">rules2</span>: [{ <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&#x27;\u8BF7\u9009\u62E9\u65E5\u671F\u8303\u56F4&#x27;</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-string">&#x27;change&#x27;</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;array&#x27;</span> }]
      }
    },
    <span class="hljs-attr">methods</span>: {
      <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-title">validate</span>(<span class="hljs-params"></span>)</span> {
        <span class="hljs-keyword">try</span> {
          <span class="hljs-keyword">await</span> <span class="hljs-built_in">this</span>.$refs[<span class="hljs-string">&#x27;datetime1&#x27;</span>].validate()
          <span class="hljs-keyword">await</span> <span class="hljs-built_in">this</span>.$refs[<span class="hljs-string">&#x27;datetime2&#x27;</span>].validate()
          <span class="hljs-comment">// \u6821\u9A8C\u6210\u529F</span>
        } <span class="hljs-keyword">catch</span> (e) {
          <span class="hljs-comment">// \u6821\u9A8C\u5931\u8D25</span>
        }
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div>
</code></pre>
<h3 id="\u51FD\u6570\u8C03\u7528\u83B7\u53D6\u65E5\u671F">\u51FD\u6570\u8C03\u7528\u83B7\u53D6\u65E5\u671F</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">pl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;open&quot;</span>&gt;</span>\u6253\u5F00\u65E5\u5386<span class="hljs-tag">&lt;/<span class="hljs-name">pl-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span></span><span class="hljs-template-variable">{{<span class="hljs-name">popupResult</span>}}</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">popupResult</span>: <span class="hljs-literal">null</span>
      }
    },
    <span class="hljs-attr">methods</span>: {
      <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-title">open</span>(<span class="hljs-params"></span>)</span> {
        <span class="hljs-built_in">this</span>.popupResult = <span class="hljs-keyword">await</span> <span class="hljs-built_in">this</span>.$calendar({
          <span class="hljs-attr">min</span>: -<span class="hljs-number">1</span>,
          <span class="hljs-attr">max</span>: <span class="hljs-number">11</span>,
          <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;date&#x27;</span>,
          <span class="hljs-attr">format</span>: <span class="hljs-string">&#x27;Y-M-D&#x27;</span>
        })
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
<td>\u9009\u9879</td>
<td>Object</td>
<td>\u53C2\u89C1options</td>
<td>\u53C2\u89C1options</td>
</tr>
<tr>
<td>type</td>
<td>\u65E5\u5386\u7C7B\u578B</td>
<td>String</td>
<td>month / date / time</td>
<td>date</td>
</tr>
<tr>
<td>isRange</td>
<td>\u662F\u5426\u662F\u8303\u56F4\u9009\u62E9</td>
<td>Boolean</td>
<td>\u2014</td>
<td>false</td>
</tr>
<tr>
<td>placeholder</td>
<td>\u65E5\u671F\u5360\u4F4D\u5185\u5BB9</td>
<td>String</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>startPlaceholder</td>
<td>\u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9</td>
<td>String</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>endPlaceholder</td>
<td>\u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9</td>
<td>String</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>rangeSeparator</td>
<td>\u9009\u62E9\u8303\u56F4\u65F6\u7684\u5206\u9694\u7B26</td>
<td>String</td>
<td>\u2014</td>
<td>\u81F3</td>
</tr>
<tr>
<td>format</td>
<td>\u65E5\u671F\u663E\u793A\u683C\u5F0F</td>
<td>String</td>
<td>\u53C2\u89C1\u65E5\u671F\u683C\u5F0F</td>
<td>Y-M-D</td>
</tr>
<tr>
<td>valueFormat</td>
<td>\u65E5\u671F\u8FD4\u56DE\u503C\u683C\u5F0F</td>
<td>String</td>
<td>\u53C2\u89C1\u65E5\u671F\u683C\u5F0F</td>
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
<td>readonly</td>
<td>\u662F\u5426\u53EA\u8BFB\u72B6\u6001</td>
<td>Boolean</td>
<td>\u2014</td>
<td>false</td>
</tr>
<tr>
<td>clearable</td>
<td>\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE</td>
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
<h3 id="options">options</h3>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u5FC5\u586B</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u53EF\u9009\u503C</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td>value</td>
<td>\u5426</td>
<td>\u9ED8\u8BA4\u65E5\u671F\uFF08\u5355\u9009\uFF09</td>
<td>String / Date</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>startValue</td>
<td>\u5426</td>
<td>\u9ED8\u8BA4\u5F00\u59CB\u65E5\u671F\uFF08\u8303\u56F4\uFF09</td>
<td>String / Date</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>endValue</td>
<td>\u5426</td>
<td>\u9ED8\u8BA4\u7ED3\u675F\u65E5\u671F\uFF08\u8303\u56F4\uFF09</td>
<td>String / Date</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>min</td>
<td>\u5426</td>
<td>\u65E5\u5386\u751F\u6210\u5F00\u59CB\u6708/\u5E74</td>
<td>Number</td>
<td>\u2014</td>
<td>0(\u6708)\uFF0C0(\u5E74)</td>
</tr>
<tr>
<td>max</td>
<td>\u5426</td>
<td>\u65E5\u5386\u751F\u6210\u7ED3\u675F\u6708/\u5E74</td>
<td>Number</td>
<td>\u2014</td>
<td>11(\u6708)\uFF0C5(\u5E74)</td>
</tr>
<tr>
<td>dateLabel</td>
<td>\u5426</td>
<td>\u65E5\u671F\u4E0B\u6807\uFF08\u5355\u9009\uFF09</td>
<td>String</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>startLabel</td>
<td>\u5426</td>
<td>\u65E5\u671F\u4E0B\u6807\uFF08\u8303\u56F4\uFF09</td>
<td>String</td>
<td>\u2014</td>
<td>\u5F00\u59CB</td>
</tr>
<tr>
<td>endLabel</td>
<td>\u5426</td>
<td>\u65E5\u671F\u4E0B\u6807\uFF08\u8303\u56F4\uFF09</td>
<td>String</td>
<td>\u2014</td>
<td>\u7ED3\u675F</td>
</tr>
<tr>
<td>type</td>
<td>\u5426</td>
<td>\u65E5\u5386\u7C7B\u578B</td>
<td>String</td>
<td>month / date / time</td>
<td>date</td>
</tr>
<tr>
<td>isRange</td>
<td>\u5426</td>
<td>\u662F\u5426\u662F\u8303\u56F4\u9009\u62E9</td>
<td>Boolean</td>
<td>\u2014</td>
<td>false</td>
</tr>
<tr>
<td>format</td>
<td>\u5426</td>
<td>\u65E5\u671F\u663E\u793A\u683C\u5F0F</td>
<td>String</td>
<td>\u53C2\u89C1\u65E5\u671F\u683C\u5F0F</td>
<td>Y-M-D</td>
</tr>
<tr>
<td>selectRange</td>
<td>\u5426</td>
<td>\u65E5\u671F/\u6708\u4EFD\u524D\u540E\u53EF\u9009\u8303\u56F4</td>
<td>Number</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>disabledDate</td>
<td>\u5426</td>
<td>\u4E0D\u53EF\u9009\u65E5\u671F/\u6708\u4EFD</td>
<td>Function</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
</tbody></table>
<h3 id="\u65E5\u671F\u683C\u5F0F">\u65E5\u671F\u683C\u5F0F</h3>
<table>
<thead>
<tr>
<th>\u6807\u8BC6\u7B26</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td>Y</td>
<td>4\u4F4D\u6570\u5E74</td>
</tr>
<tr>
<td>M</td>
<td>2\u4F4D\u6570\u6708</td>
</tr>
<tr>
<td>D</td>
<td>2\u4F4D\u6570\u65E5</td>
</tr>
<tr>
<td>H</td>
<td>2\u4F4D\u6570\u65F6</td>
</tr>
<tr>
<td>I</td>
<td>2\u4F4D\u6570\u5206</td>
</tr>
<tr>
<td>S</td>
<td>2\u4F4D\u6570\u79D2</td>
</tr>
<tr>
<td>m</td>
<td>\u6708</td>
</tr>
<tr>
<td>d</td>
<td>\u65E5</td>
</tr>
<tr>
<td>h</td>
<td>\u65F6</td>
</tr>
<tr>
<td>i</td>
<td>\u5206</td>
</tr>
<tr>
<td>s</td>
<td>\u79D2</td>
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
