import{z as a,A as n}from"./index.5b501510.js";const s=a({name:"Markdown"}),t=()=>n("div",{class:["md2vue-wrapper","markdown-body"],innerHTML:`<h2 id="list-\u5217\u8868">list \u5217\u8868</h2>
<h3 id="\u57FA\u7840\u7528\u6CD5">\u57FA\u7840\u7528\u6CD5</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-list</span> <span class="hljs-attr">:loading</span>=<span class="hljs-string">&quot;loading&quot;</span> <span class="hljs-attr">:finished</span>=<span class="hljs-string">&quot;finished&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in data&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item.value&quot;</span>&gt;</span></span><span class="hljs-template-variable">{{<span class="hljs-name">item.label</span>}}</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">pl-list</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">loading</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">finished</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">data</span>: [
          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98791&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">1</span>},
          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98792&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">2</span>}
        ]
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
  <span class="hljs-selector-class">.pl-list</span> {
    <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span></span></div>
</code></pre>
<h3 id="\u4E0B\u62C9\u5237\u65B0">\u4E0B\u62C9\u5237\u65B0</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-list</span> <span class="hljs-attr">:loading</span>=<span class="hljs-string">&quot;loading&quot;</span> <span class="hljs-attr">:finished</span>=<span class="hljs-string">&quot;finished&quot;</span> @<span class="hljs-attr">refresh</span>=<span class="hljs-string">&quot;reload&quot;</span> <span class="hljs-attr">loadingText</span>=<span class="hljs-string">&quot;\u52A0\u8F7D\u4E2D...&quot;</span> <span class="hljs-attr">refreshText</span>=<span class="hljs-string">&quot;\u677E\u5F00\u5237\u65B0&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in data&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item.value&quot;</span>&gt;</span></span><span class="hljs-template-variable">{{<span class="hljs-name">item.label</span>}}</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">pl-list</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">loading</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">finished</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">data</span>: [
          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98791&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">1</span>},
          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98792&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">2</span>}
        ]
      }
    },
    <span class="hljs-attr">methods</span>: {
      reload () {
        <span class="hljs-built_in">this</span>.finished = <span class="hljs-literal">false</span>
        <span class="hljs-comment">// load date</span>
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
  <span class="hljs-selector-class">.pl-list</span> {
    <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span></span></div>
</code></pre>
<h3 id="\u4E0A\u62C9\u52A0\u8F7D">\u4E0A\u62C9\u52A0\u8F7D</h3>
<pre><code class="language-html"><div class="md-code-hijs"><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-list</span> <span class="hljs-attr">:loading</span>=<span class="hljs-string">&quot;loading&quot;</span> <span class="hljs-attr">:finished</span>=<span class="hljs-string">&quot;finished&quot;</span> @<span class="hljs-attr">load</span>=<span class="hljs-string">&quot;load&quot;</span> <span class="hljs-attr">loadingText</span>=<span class="hljs-string">&quot;\u52A0\u8F7D\u4E2D...&quot;</span> <span class="hljs-attr">finishedText</span>=<span class="hljs-string">&quot;\u52A0\u8F7D\u5B8C\u6210&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in data&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item.value&quot;</span>&gt;</span></span><span class="hljs-template-variable">{{<span class="hljs-name">item.label</span>}}</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">pl-list</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">loading</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">finished</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">data</span>: [
          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98791&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">1</span>},
          {<span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;\u9009\u98792&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">2</span>}
        ]
      }
    },
    <span class="hljs-attr">methods</span>: {
      load () {
        <span class="hljs-comment">// load date</span>
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
  <span class="hljs-selector-class">.pl-list</span> {
    <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span></span></div>
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
<td>loading</td>
<td>\u662F\u5426\u5904\u4E8E\u52A0\u8F7D\u72B6\u6001\uFF0C\u52A0\u8F7D\u8FC7\u7A0B\u4E2D\u4E0D\u89E6\u53D1load\u4E8B\u4EF6</td>
<td>Boolean</td>
<td>\u2014</td>
<td>false</td>
</tr>
<tr>
<td>finished</td>
<td>\u662F\u5426\u5DF2\u52A0\u8F7D\u5B8C\u6210\uFF0C\u52A0\u8F7D\u5B8C\u6210\u540E\u4E0D\u518D\u89E6\u53D1load\u4E8B\u4EF6</td>
<td>Boolean</td>
<td>\u2014</td>
<td>false</td>
</tr>
<tr>
<td>autoLoad</td>
<td>\u662F\u5426\u6EDA\u52A8\u5230\u5E95\u90E8\u81EA\u52A8\u52A0\u8F7D\uFF0C\u5982\u679C\u4F20\u5165\u6570\u5B57\u503C\u5219\u5728\u8DDD\u79BB\u8BE5\u503C\u7684\u9AD8\u5EA6\u89E6\u53D1\u52A0\u8F7D\u4E8B\u4EF6</td>
<td>[Boolean, Number]</td>
<td>\u2014</td>
<td>false</td>
</tr>
<tr>
<td>loadingText</td>
<td>\u52A0\u8F7D\u8FC7\u7A0B\u4E2D\u7684\u63D0\u793A\u6587\u5B57</td>
<td>String</td>
<td>\u2014</td>
<td>\u52A0\u8F7D\u4E2D...</td>
</tr>
<tr>
<td>refreshText</td>
<td>\u4E0B\u62C9\u5237\u65B0\u7684\u63D0\u793A\u6587\u6848</td>
<td>String</td>
<td>\u2014</td>
<td>\u677E\u5F00\u5237\u65B0</td>
</tr>
<tr>
<td>finishedText</td>
<td>\u52A0\u8F7D\u5B8C\u6210\u540E\u7684\u63D0\u793A\u6587\u5B57</td>
<td>String</td>
<td>\u2014</td>
<td>\u52A0\u8F7D\u5B8C\u6210</td>
</tr>
<tr>
<td>splitSize</td>
<td>\u957F\u5217\u8868\u5206\u6BB5\u663E\u793A\uFF0C\u6BCF\u6BB5\u6240\u6E32\u67D3\u7684\u8282\u70B9\u6570</td>
<td>Number</td>
<td>\u2014</td>
<td>0</td>
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
<td>\u5217\u8868\u9879</td>
</tr>
<tr>
<td>top-loading</td>
<td>\u5934\u90E8\u4E0B\u62C9\u52A0\u8F7D loading</td>
</tr>
<tr>
<td>top-refresh</td>
<td>\u5934\u90E8\u4E0B\u62C9\u5237\u65B0\u63D0\u793A\u8BED</td>
</tr>
<tr>
<td>bottom-loading</td>
<td>\u5E95\u90E8\u52A0\u8F7D loading</td>
</tr>
<tr>
<td>bottom-finished</td>
<td>\u5E95\u90E8\u52A0\u8F7D\u5B8C\u6210\u63D0\u793A\u8BED</td>
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
<td>refresh</td>
<td>\u4E0B\u62C9\u5237\u65B0\u4E8B\u4EF6</td>
<td>\u2014</td>
</tr>
<tr>
<td>load</td>
<td>\u4E0A\u62C9\u52A0\u8F7D\u4E8B\u4EF6</td>
<td>\u2014</td>
</tr>
</tbody></table>
`});s.render=t;s.mounted=()=>{};export{s as default};
