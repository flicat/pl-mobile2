import{z as a,A as n}from"./index.8e4a455b.js";const s=a({name:"Markdown"}),t=()=>n("div",{class:["md2vue-wrapper","markdown-body"],innerHTML:`<h2 id="tab-\u9009\u9879\u5361">tab \u9009\u9879\u5361</h2>
<h3 id="\u57FA\u7840\u7528\u6CD5">\u57FA\u7840\u7528\u6CD5</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  </span><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">pl-tabs</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;active&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span>&gt;</span>
    </span><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">pl-tab-item</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in data&quot;</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;item.name&quot;</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;item.disabled&quot;</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">&quot;item.label&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item.name&quot;</span>&gt;</span>
      \u8FD9\u91CC\u662F</span><span class="xquery">{{<span class="hljs-type">item</span>.label}</span><span class="xml">}
    <span class="hljs-tag">&lt;/<span class="hljs-name">pl-tab-item</span>&gt;</span></span><span class="xml">
  <span class="hljs-tag">&lt;/<span class="hljs-name">pl-tabs</span>&gt;</span></span><span class="xml">
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span></span>
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> </span></span><span class="xquery">{
    data () {
      <span class="hljs-keyword">return</span> {
        active: <span class="hljs-string">&#x27;tab1&#x27;</span>,
        data: [
          {label: <span class="hljs-string">&#x27;\u9009\u98791&#x27;</span>,<span class="hljs-built_in"> name</span>: <span class="hljs-string">&#x27;tab1&#x27;</span>, disabled:<span class="hljs-built_in"> false</span>}</span><span class="xml">,
          </span><span class="xquery">{label: <span class="hljs-string">&#x27;\u9009\u98792&#x27;</span>,<span class="hljs-built_in"> name</span>: <span class="hljs-string">&#x27;tab2&#x27;</span>, disabled:<span class="hljs-built_in"> false</span>}</span><span class="xml">,
          </span><span class="xquery">{label: <span class="hljs-string">&#x27;\u9009\u98793&#x27;</span>,<span class="hljs-built_in"> name</span>: <span class="hljs-string">&#x27;tab3&#x27;</span>, disabled:<span class="hljs-built_in"> true</span>}</span><span class="xml">
        ]
      }
    }
  }
<span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></div>
</code></pre>
<h3 id="\u4FA7\u8FB9\u83DC\u5355">\u4FA7\u8FB9\u83DC\u5355</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  </span><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">pl-tabs</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;active&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span>
    </span><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">pl-tab-item</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in data&quot;</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;item.name&quot;</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;item.disabled&quot;</span>&gt;</span></span><span class="xquery">{{<span class="hljs-type">item</span>.label}</span><span class="xml">}<span class="hljs-tag">&lt;/<span class="hljs-name">pl-tab-item</span>&gt;</span></span><span class="xml">
  <span class="hljs-tag">&lt;/<span class="hljs-name">pl-tabs</span>&gt;</span></span><span class="xml">
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span></span>
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> </span></span><span class="xquery">{
    data () {
      <span class="hljs-keyword">return</span> {
        active: <span class="hljs-string">&#x27;tab1&#x27;</span>,
        data: [
          {label: <span class="hljs-string">&#x27;\u9009\u98791&#x27;</span>,<span class="hljs-built_in"> name</span>: <span class="hljs-string">&#x27;tab1&#x27;</span>, disabled:<span class="hljs-built_in"> false</span>}</span><span class="xml">,
          </span><span class="xquery">{label: <span class="hljs-string">&#x27;\u9009\u98792&#x27;</span>,<span class="hljs-built_in"> name</span>: <span class="hljs-string">&#x27;tab2&#x27;</span>, disabled:<span class="hljs-built_in"> false</span>}</span><span class="xml">,
          </span><span class="xquery">{label: <span class="hljs-string">&#x27;\u9009\u98793&#x27;</span>,<span class="hljs-built_in"> name</span>: <span class="hljs-string">&#x27;tab3&#x27;</span>, disabled:<span class="hljs-built_in"> true</span>}</span><span class="xml">
        ]
      }
    }
  }
<span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></div>
</code></pre>
<h3 id="\u81EA\u5B9A\u4E49\u6807\u9898">\u81EA\u5B9A\u4E49\u6807\u9898</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-tabs</span> <span class="hljs-attr">v-model:value</span>=<span class="hljs-string">&quot;active&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;card&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">pl-tab-item</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in data&quot;</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;item.name&quot;</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;item.disabled&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item.name&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>--</span><span class="hljs-template-variable">{{<span class="hljs-name">item.label</span>}}</span><span class="xml">--<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span></span><span class="hljs-template-variable">{{<span class="hljs-name">item.label</span>}}</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">pl-tab-item</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">pl-tabs</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">active</span>: <span class="hljs-string">&#x27;tab1&#x27;</span>,
        <span class="hljs-attr">data</span>: [
          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98791&#x27;</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;tab1&#x27;</span>},
          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98792&#x27;</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;tab2&#x27;</span>},
          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98793&#x27;</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;tab3&#x27;</span>}
        ]
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></div>
</code></pre>
<h3 id="tabs-attributes">Tabs Attributes</h3>
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
<td>type</td>
<td>\u98CE\u683C\u7C7B\u578B</td>
<td>String</td>
<td>card / border-card / button</td>
<td>card</td>
</tr>
<tr>
<td>position</td>
<td>\u9009\u9879\u5361\u6240\u5728\u4F4D\u7F6E</td>
<td>String</td>
<td>top / right / bottom / left</td>
<td>top</td>
</tr>
</tbody></table>
<h3 id="tabs-events">Tabs Events</h3>
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
<h3 id="tabitem-attributes">TabItem Attributes</h3>
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
<td>label</td>
<td>tab\u9875\u6807\u9898</td>
<td>String</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>name</td>
<td>\u4E0E\u9009\u9879\u5361 value \u5BF9\u5E94\u7684\u6807\u8BC6\u7B26</td>
<td>[String, Number]</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>index</td>
<td>\u624B\u52A8\u6307\u5B9A\u9009\u9879\u5361\u6392\u5E8F</td>
<td>Number</td>
<td>\u2014</td>
<td>\u2014</td>
</tr>
<tr>
<td>disabled</td>
<td>\u6807\u7B7E\u662F\u5426\u53EF\u70B9\u51FB</td>
<td>Boolean</td>
<td>\u2014</td>
<td>false</td>
</tr>
</tbody></table>
<h3 id="tabitem-slots">TabItem Slots</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td>(default)</td>
<td>tab\u9875\u5185\u5BB9</td>
</tr>
<tr>
<td>title</td>
<td>\u81EA\u5B9A\u4E49\u6807\u9898</td>
</tr>
</tbody></table>
`});s.render=t;s.mounted=()=>{};export{s as default};
