import { q as ref, u as onMounted, Q as pushScopeId, R as popScopeId, r as resolveComponent, o as openBlock, d as createElementBlock, I as createVNode, O as withCtx, e as createBaseVNode, C as createTextVNode } from "./vendor.f40c224e.js";
var collapse_vue_vue_type_style_index_0_scoped_true_lang = "p[data-v-5e8c0c8e] {\n  margin: 0;\n  line-height: 3em;\n  padding: 0 1em;\n  background-color: #d0ffff;\n}\n.pl-collapse[data-v-5e8c0c8e] {\n  outline: 1px dashed #eee;\n}\n";
const _sfc_main = {
  setup() {
    const active1 = ref(false);
    const active2 = ref(true);
    const onChange = (e) => {
      console.log("onChange::", e);
    };
    onMounted(() => {
      setTimeout(() => {
        active1.value = !active1.value;
        active2.value = !active2.value;
      }, 1500);
    });
    return {
      active1,
      active2,
      onChange
    };
  }
};
pushScopeId("data-v-5e8c0c8e");
const _hoisted_1 = { class: "content" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h3", null, "\u57FA\u7840\u7528\u6CD5", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "\u9762\u677F\u5185\u5BB9", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("h3", null, "\u81EA\u5B9A\u4E49\u6807\u9898", -1);
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u81EA\u5B9A\u4E49\u6807\u9898");
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("p", null, "\u9762\u677F\u5185\u5BB9", -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("p", null, "\u9762\u677F\u5185\u5BB9", -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("p", null, "\u9762\u677F\u5185\u5BB9", -1);
popScopeId();
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_pl_collapse = resolveComponent("pl-collapse");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    createVNode(_component_pl_collapse, {
      value: $setup.active1,
      "onUpdate:value": _cache[0] || (_cache[0] = ($event) => $setup.active1 = $event),
      title: "\u9762\u677F",
      onChange: $setup.onChange
    }, {
      default: withCtx(() => [
        _hoisted_3
      ]),
      _: 1
    }, 8, ["value", "onChange"]),
    _hoisted_4,
    createVNode(_component_pl_collapse, {
      value: $setup.active2,
      "onUpdate:value": _cache[1] || (_cache[1] = ($event) => $setup.active2 = $event),
      onChange: $setup.onChange
    }, {
      title: withCtx(() => [
        _hoisted_5
      ]),
      default: withCtx(() => [
        _hoisted_6,
        _hoisted_7,
        _hoisted_8
      ]),
      _: 1
    }, 8, ["value", "onChange"])
  ]);
}
_sfc_main.render = _sfc_render;
_sfc_main.__scopeId = "data-v-5e8c0c8e";
export { _sfc_main as default };
