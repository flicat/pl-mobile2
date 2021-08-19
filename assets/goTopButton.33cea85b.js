import { q as ref, s as computed, Q as pushScopeId, R as popScopeId, r as resolveComponent, o as openBlock, d as createElementBlock, I as createVNode, h as createStaticVNode } from "./vendor.f40c224e.js";
var goTopButton_vue_vue_type_style_index_0_scoped_true_lang = "p[data-v-564bd7b9] {\n  line-height: 2em;\n  color: #666;\n  letter-spacing: 2px;\n  text-align: center;\n  font-size: 20px;\n}\n";
const _sfc_main = {
  setup() {
    const wrap = ref(null);
    const parentNode = computed(() => {
      if (wrap.value) {
        return wrap.value.parentNode;
      }
    });
    return {
      wrap,
      parentNode
    };
  }
};
pushScopeId("data-v-564bd7b9");
const _hoisted_1 = {
  class: "content",
  ref: "wrap"
};
const _hoisted_2 = /* @__PURE__ */ createStaticVNode("<p data-v-564bd7b9><strong data-v-564bd7b9>\u4FA0\u5BA2\u884C</strong></p><p data-v-564bd7b9><small data-v-564bd7b9>\u674E\u767D</small></p><p data-v-564bd7b9>\u8D75\u5BA2\u7F26\u80E1\u7F28\uFF0C\u5434\u94A9\u971C\u96EA\u660E\u3002</p><p data-v-564bd7b9>\u94F6\u978D\u7167\u767D\u9A6C\uFF0C\u98D2\u6C93\u5982\u6D41\u661F\u3002</p><p data-v-564bd7b9>\u5341\u6B65\u6740\u4E00\u4EBA\uFF0C\u5343\u91CC\u4E0D\u7559\u884C\u3002</p><p data-v-564bd7b9>\u4E8B\u4E86\u62C2\u8863\u53BB\uFF0C\u6DF1\u85CF\u8EAB\u4E0E\u540D\u3002</p><p data-v-564bd7b9>\u95F2\u8FC7\u4FE1\u9675\u996E\uFF0C\u8131\u5251\u819D\u524D\u6A2A\u3002</p><p data-v-564bd7b9>\u5C06\u7099\u5556\u6731\u4EA5\uFF0C\u6301\u89DE\u529D\u4FAF\u5B34\u3002</p><p data-v-564bd7b9>\u4E09\u676F\u5410\u7136\u8BFA\uFF0C\u4E94\u5CB3\u5012\u4E3A\u8F7B\u3002</p><p data-v-564bd7b9>\u773C\u82B1\u8033\u70ED\u540E\uFF0C\u610F\u6C14\u7D20\u9713\u751F\u3002</p><p data-v-564bd7b9>\u6551\u8D75\u6325\u91D1\u69CC\uFF0C\u90AF\u90F8\u5148\u9707\u60CA\u3002</p><p data-v-564bd7b9>\u5343\u79CB\u4E8C\u58EE\u58EB\uFF0C\u70DC\u8D6B\u5927\u6881\u57CE\u3002</p><p data-v-564bd7b9>\u7EB5\u6B7B\u4FA0\u9AA8\u9999\uFF0C\u4E0D\u60ED\u4E16\u4E0A\u82F1\u3002</p><p data-v-564bd7b9>\u8C01\u80FD\u4E66\u9601\u4E0B\uFF0C\u767D\u9996\u592A\u7384\u7ECF\u3002</p>", 14);
popScopeId();
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_pl_go_top_button = resolveComponent("pl-go-top-button");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    createVNode(_component_pl_go_top_button, { target: $setup.parentNode }, null, 8, ["target"])
  ], 512);
}
_sfc_main.render = _sfc_render;
_sfc_main.__scopeId = "data-v-564bd7b9";
export { _sfc_main as default };
