import{z as a,A as n}from"./index.11aba33a.js";const s=a({name:"Markdown"}),l=()=>n("div",{class:["md2vue-wrapper","markdown-body"],innerHTML:`<h2 id="\u79FB\u52A8\u7AEFui\u6846\u67B6">\u79FB\u52A8\u7AEFUI\u6846\u67B6</h2>
<p>\u57FA\u4E8EVue3\u7684\u79FB\u52A8\u7AEFUI\u6846\u67B6</p>
<h3 id="\u6587\u6863">\u6587\u6863</h3>
<p><a href="https://flicat.github.io/pl-mobile2/">\u4E2D\u6587\u6587\u6863</a></p>
<h3 id="\u5B89\u88C5">\u5B89\u88C5</h3>
<pre><code><div class="md-code-hijs">npm i <span class="hljs-keyword">pl</span>-mobile2 --<span class="hljs-keyword">save</span></div>
</code></pre>
<h3 id="\u4F7F\u7528">\u4F7F\u7528</h3>
<h4 id="\u5168\u5C40\u5F15\u5165">\u5168\u5C40\u5F15\u5165</h4>
<pre><code><div class="md-code-hijs"><span class="hljs-attribute">import</span> PlMobile<span class="hljs-number">2</span> from &#x27;pl-mobile<span class="hljs-number">2</span>&#x27;
<span class="hljs-attribute">Vue</span>.use(PlMobile<span class="hljs-number">2</span>)</div>
</code></pre>
<h4 id="\u6837\u5F0F\u5F15\u5165">\u6837\u5F0F\u5F15\u5165</h4>
<pre><code><div class="md-code-hijs"><span class="hljs-keyword">import</span> <span class="hljs-string">&#x27;pl-mobile2/lib/style.css&#x27;</span></div>
</code></pre>
<blockquote>
<ul>
<li><em>\u6837\u5F0F\u6587\u4EF6\u9700\u8981\u5355\u72EC\u5F15\u5165</em></li>
<li><em>\u7EC4\u4EF6\u5B57\u4F53\u53CA\u5C3A\u5BF8\u57FA\u4E8E rem \u8BA1\u7B97</em></li>
</ul>
</blockquote>
<h4 id="\u6309\u9700\u5F15\u5165">\u6309\u9700\u5F15\u5165</h4>
<pre><code><div class="md-code-hijs"><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">pl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;default&quot;</span>&gt;</span>\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">pl-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> </span></span><span class="hljs-template-variable">{button}</span><span class="xml"><span class="javascript"> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;pl-mobile2&#x27;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> </span></span><span class="hljs-template-variable">{
  components: {
    &#x27;pl-button&#x27;: button
  }</span><span class="xml">
}
<span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></div>
</code></pre>
<h3 id="\u7EC4\u4EF6\u5217\u8868">\u7EC4\u4EF6\u5217\u8868</h3>
<blockquote>
<ul>
<li><a href="./docs/button.md">button</a></li>
<li><a href="./docs/canvas.md">canvas</a></li>
<li><a href="./docs/cell.md">cell</a></li>
<li><a href="./docs/checkbox.md">checkbox</a></li>
<li><a href="./docs/collapse.md">collapse</a></li>
<li><a href="./docs/datetime.md">datetime</a></li>
<li><a href="./docs/fetch.md">fetch</a></li>
<li><a href="./docs/form.md">form</a></li>
<li><a href="./docs/goTopButton.md">goTopButton</a></li>
<li><a href="./docs/icon.md">icon</a></li>
<li><a href="./docs/input.md">input</a></li>
<li><a href="./docs/list.md">list</a></li>
<li><a href="./docs/loading.md">loading</a></li>
<li><a href="./docs/message.md">message</a></li>
<li><a href="./docs/picker.md">picker</a></li>
<li><a href="./docs/popup.md">popup</a></li>
<li><a href="./docs/progress.md">progress</a></li>
<li><a href="./docs/radio.md">radio</a></li>
<li><a href="./docs/range.md">range</a></li>
<li><a href="./docs/select.md">select</a></li>
<li><a href="./docs/steps.md">steps</a></li>
<li><a href="./docs/swipe.md">swipe</a></li>
<li><a href="./docs/tabs.md">tabs</a></li>
<li><a href="./docs/upload.md">upload</a></li>
</ul>
</blockquote>
<h3 id="\u6240\u6709\u7EC4\u4EF6">\u6240\u6709\u7EC4\u4EF6</h3>
<pre><code><div class="md-code-hijs">import {
<span class="hljs-built_in">  loading,</span>
<span class="hljs-built_in">  alert,</span>
<span class="hljs-built_in">  confirm,</span>
<span class="hljs-built_in">  toast,</span>
<span class="hljs-built_in">  button,</span>
<span class="hljs-built_in">  canvas,</span>
<span class="hljs-built_in">  cell,</span>
<span class="hljs-built_in">  checkbox,</span>
<span class="hljs-built_in">  collapse,</span>
<span class="hljs-built_in">  datetime,</span>
<span class="hljs-built_in">  fetch,</span>
<span class="hljs-built_in">  form,</span>
<span class="hljs-built_in">  goTopButton,</span>
<span class="hljs-built_in">  icon,</span>
<span class="hljs-built_in">  input,</span>
<span class="hljs-built_in">  list,</span>
<span class="hljs-built_in">  picker,</span>
<span class="hljs-built_in">  popup,</span>
<span class="hljs-built_in">  progress,</span>
<span class="hljs-built_in">  radio,</span>
<span class="hljs-built_in">  range,</span>
<span class="hljs-built_in">  select,</span>
<span class="hljs-built_in">  stepItem,</span>
<span class="hljs-built_in">  steps,</span>
<span class="hljs-built_in">  swipeItem,</span>
<span class="hljs-built_in">  swipe,</span>
<span class="hljs-built_in">  tabItem,</span>
<span class="hljs-built_in">  tabs,</span>
  upload
} from &#x27;pl-mobile2&#x27;</div>
</code></pre>
<h3 id="css\u5168\u5C40\u53D8\u91CF">css\u5168\u5C40\u53D8\u91CF</h3>
<pre><code class="language-css"><div class="md-code-hijs"><span class="hljs-selector-pseudo">:root</span> {
  <span class="hljs-comment">/* global */</span>
  --default: <span class="hljs-number">#BEC5CB</span>;
  --primary: <span class="hljs-number">#5074FF</span>;
  --success: <span class="hljs-number">#67c23a</span>;
  --warning: <span class="hljs-number">#e6a23c</span>;
  --danger: <span class="hljs-number">#f56c6c</span>;

  --primary-light: <span class="hljs-number">#5074FF</span>;
  --danger-light: <span class="hljs-number">#FA9191</span>;

  --default-text: <span class="hljs-number">#1E3259</span>;
  --info-text: <span class="hljs-number">#1D3456</span>;
  --primary-text: <span class="hljs-number">#757575</span>;
  --success-text: <span class="hljs-number">#3D7D11</span>;
  --warning-text: <span class="hljs-number">#DE5E05</span>;
  --error-text: <span class="hljs-number">#FF5555</span>;

  --overtime: <span class="hljs-number">#FFE7E7</span>;
  --progress: <span class="hljs-number">#CEF5CA</span>;
  --not-started: <span class="hljs-number">#FFEAC7</span>;
  --disabled: <span class="hljs-number">#E2E5F0</span>;

  --tag-bg: <span class="hljs-number">#9898B6</span>;
  --<span class="hljs-selector-tag">input</span>-bg: <span class="hljs-number">#fff</span>;

  --horizontal-size: <span class="hljs-number">1.2rem</span>;
  --asterisk-size: <span class="hljs-number">0.6rem</span>;

  <span class="hljs-comment">/* message */</span>
  --title-<span class="hljs-attribute">color</span>: <span class="hljs-number">#333</span>;
  --<span class="hljs-attribute">content</span>-<span class="hljs-attribute">color</span>: <span class="hljs-number">#666</span>;
  --toast-text-<span class="hljs-attribute">color</span>: <span class="hljs-number">#d6d6d6</span>;

  <span class="hljs-comment">/* button */</span>
  --<span class="hljs-selector-tag">button</span>-text-<span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;

  <span class="hljs-comment">/* canvas */</span>
  --<span class="hljs-selector-tag">canvas</span>-bg: <span class="hljs-number">#ffffdc</span>;
  --<span class="hljs-selector-tag">canvas</span>-placeholder: <span class="hljs-number">#ccc</span>;

  <span class="hljs-comment">/* checkbox */</span>
  --checkbox-disabled-text: <span class="hljs-number">#c8c9cc</span>;
  --checkbox-disabled-<span class="hljs-attribute">border</span>: <span class="hljs-number">#dcdfe6</span>;
  --checkbox-disabled-bg: <span class="hljs-number">#ebedf0</span>;
  --checkbox-text: <span class="hljs-number">#333</span>;
  --checkbox-bg: <span class="hljs-number">#dcdfe6</span>;
  --checkbox-toggle-<span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
  --checkbox-toggle-unchecked-bg: <span class="hljs-number">#e6a23c</span>;
  --checkbox-toggle-checked-bg: <span class="hljs-number">#67c23a</span>;
  --checkbox-vertical-<span class="hljs-attribute">border</span>: <span class="hljs-number">#f0f0f0</span>;
  --checkbox-<span class="hljs-selector-tag">button</span>-<span class="hljs-attribute">border</span>: <span class="hljs-number">#dcdfe6</span>;
  --checkbox-<span class="hljs-selector-tag">button</span>-text: <span class="hljs-number">#fff</span>;
  --checkbox-<span class="hljs-selector-tag">button</span>-disabled-bg: <span class="hljs-number">#ebebe4</span>;
  --checkbox-<span class="hljs-selector-tag">button</span>-disabled-text: <span class="hljs-number">#999</span>;

  <span class="hljs-comment">/* datetime */</span>
  --datetime-bg: <span class="hljs-number">#fff</span>;
  --week-bg: <span class="hljs-number">#ededed</span>;
  --datetime-disabled-text: <span class="hljs-number">#999</span>;
  --datetime-current-text: <span class="hljs-number">#fff</span>;
  --datetime-current-bg: <span class="hljs-number">#6db9e6</span>;
  --datetime-active-bg: <span class="hljs-number">#e7faff</span>;
  --datetime-<span class="hljs-selector-tag">button</span>-<span class="hljs-attribute">top</span>-<span class="hljs-attribute">border</span>: <span class="hljs-number">#ededed</span>;
  --datetime-cancel-<span class="hljs-selector-tag">button</span>-<span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
  --datetime-submit-<span class="hljs-selector-tag">button</span>-<span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
  --datetime-cancel-<span class="hljs-selector-tag">button</span>-bg: <span class="hljs-number">#6db9e6</span>;
  --datetime-submit-<span class="hljs-selector-tag">button</span>-bg: <span class="hljs-number">#6db9e6</span>;
  --watch-bg: <span class="hljs-number">#eee</span>;
  --watch-result-<span class="hljs-attribute">color</span>: <span class="hljs-number">#666</span>;
  --watch-result-bg: <span class="hljs-number">#e7fbff</span>;
  --watch-range-<span class="hljs-attribute">color</span>: <span class="hljs-number">#fff5e7</span>;
  --watch-<span class="hljs-selector-tag">button</span>-<span class="hljs-attribute">color</span>: <span class="hljs-number">#666</span>;
  --watch-hour-pointer: <span class="hljs-number">#58d299</span>;
  --watch-minute-pointer: <span class="hljs-number">#58d299</span>;
  --watch-end-hour-pointer: <span class="hljs-number">#58bad2</span>;
  --watch-end-minute-pointer: <span class="hljs-number">#58bad2</span>;

  <span class="hljs-comment">/* to-top */</span>
  --to-<span class="hljs-attribute">top</span>-text: <span class="hljs-number">#C1CEFF</span>;

  <span class="hljs-comment">/* list */</span>
  --list-refresh-tip: <span class="hljs-number">#ccc</span>;

  <span class="hljs-comment">/* loading */</span>
  --loading-text: <span class="hljs-number">#fff</span>;
  --loading-bg: rgba(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.5</span>);

  <span class="hljs-comment">/* picker */</span>
  --picker-text: <span class="hljs-number">#333</span>;
  --picker-bg: <span class="hljs-number">#fff</span>;
  --picker-btn-cancle: <span class="hljs-number">#bec5cb</span>;
  --picker-btn-submit: <span class="hljs-number">#3388FF</span>;
  --picker-<span class="hljs-attribute">border</span>: <span class="hljs-number">#ebedf0</span>;

  <span class="hljs-comment">/* progress */</span>
  --progress-inner: <span class="hljs-number">#EBEDFB</span>;
  --progress-bar: <span class="hljs-number">#3388FF</span>;
  --progress-text: <span class="hljs-number">#333</span>;

  <span class="hljs-comment">/* radio */</span>
  --radio-text: <span class="hljs-number">#333</span>;
  --radio-disabled-text: <span class="hljs-number">#c8c9cc</span>;
  --radio-<span class="hljs-selector-tag">button</span>-text: <span class="hljs-number">#fff</span>;
  --radio-<span class="hljs-selector-tag">button</span>-<span class="hljs-attribute">border</span>: <span class="hljs-number">#dcdfe6</span>;
  --radio-<span class="hljs-selector-tag">button</span>-disabled-text: <span class="hljs-number">#999</span>;
  --radio-<span class="hljs-selector-tag">button</span>-disabled-bg: <span class="hljs-number">#ebebe4</span>;
  --radio-vertical-<span class="hljs-attribute">border</span>: <span class="hljs-number">#f0f0f0</span>;

  <span class="hljs-comment">/* range */</span>
  --range-bar: <span class="hljs-number">#EBEDFB</span>;
  --range-progress: <span class="hljs-number">#5074FF</span>;
  --range-thumb: <span class="hljs-number">#fff</span>;
  --range-text: <span class="hljs-number">#999</span>;
  --range-disabled-bg: <span class="hljs-number">#c0c2cc</span>;

  <span class="hljs-comment">/* select */</span>
  --select-<span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
  --select-popup-<span class="hljs-attribute">color</span>: <span class="hljs-number">#333</span>;
  --select-popup-bg: <span class="hljs-number">#fff</span>;
  --select-popup-<span class="hljs-attribute">border</span>: <span class="hljs-number">#ebedf0</span>;

  <span class="hljs-comment">/* steps */</span>
  --steps-toggle-text: <span class="hljs-number">#9898B6</span>;
  --steps-line: <span class="hljs-number">#F2F3F5</span>;
  --steps-<span class="hljs-attribute">icon</span>: <span class="hljs-number">#DCDEE0</span>;
  --step-<span class="hljs-attribute">icon</span>-size: <span class="hljs-number">1.2rem</span>;

  <span class="hljs-comment">/* tab */</span>
  --tab-card-<span class="hljs-attribute">border</span>: <span class="hljs-number">#e4e7ed</span>;
  --tab-card-disabled-bg: <span class="hljs-number">#f6f6f6</span>;
  --tab-<span class="hljs-selector-tag">button</span>-active-text: <span class="hljs-number">#fff</span>;
  --tab-<span class="hljs-attribute">border</span>: <span class="hljs-number">#EFF2F5</span>;

  <span class="hljs-comment">/* upload */</span>
  --upload-<span class="hljs-selector-tag">del</span>-text: <span class="hljs-number">#ccc</span>;
  --upload-add-<span class="hljs-selector-tag">button</span>: <span class="hljs-number">#EBEDFB</span>;
}</div>
</code></pre>
`});s.render=l;s.mounted=()=>{};export{s as default};
