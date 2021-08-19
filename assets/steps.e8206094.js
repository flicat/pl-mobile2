import { q as ref, Q as pushScopeId, R as popScopeId, r as resolveComponent, o as openBlock, d as createElementBlock, I as createVNode, O as withCtx, e as createBaseVNode, C as createTextVNode } from "./vendor.f40c224e.js";
var steps_vue_vue_type_style_index_0_scoped_true_lang = "h4[data-v-40822a42] {\n  margin: 0 0 0.5em;\n  line-height: 1em;\n}\n";
const _sfc_main = {
  setup() {
    const active = ref(0);
    setInterval(() => {
      active.value++;
      if (active.value > 2) {
        active.value = 0;
      }
    }, 1e3);
    return {
      active
    };
  }
};
pushScopeId("data-v-40822a42");
const _hoisted_1 = { class: "content" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h4", null, "\u6B65\u9AA4\u4E00\u7684\u6807\u9898", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "\u6B65\u9AA4\u4E00\u7684\u63CF\u8FF0", -1);
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u6B65\u9AA4\u4E8C");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u6B65\u9AA4\u4E09");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u6B65\u9AA4\u4E00");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u6B65\u9AA4\u4E8C");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u6B65\u9AA4\u4E09");
popScopeId();
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_pl_step_item = resolveComponent("pl-step-item");
  const _component_pl_steps = resolveComponent("pl-steps");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_pl_steps, { active: $setup.active }, {
      default: withCtx(() => [
        createVNode(_component_pl_step_item, null, {
          default: withCtx(() => [
            _hoisted_2,
            _hoisted_3
          ]),
          _: 1
        }),
        createVNode(_component_pl_step_item, null, {
          default: withCtx(() => [
            _hoisted_4
          ]),
          _: 1
        }),
        createVNode(_component_pl_step_item, null, {
          default: withCtx(() => [
            _hoisted_5
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["active"]),
    createVNode(_component_pl_steps, {
      active: $setup.active,
      direction: "horizontal"
    }, {
      default: withCtx(() => [
        createVNode(_component_pl_step_item, null, {
          default: withCtx(() => [
            _hoisted_6
          ]),
          _: 1
        }),
        createVNode(_component_pl_step_item, null, {
          default: withCtx(() => [
            _hoisted_7
          ]),
          _: 1
        }),
        createVNode(_component_pl_step_item, null, {
          default: withCtx(() => [
            _hoisted_8
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["active"])
  ]);
}
_sfc_main.render = _sfc_render;
_sfc_main.__scopeId = "data-v-40822a42";
export { _sfc_main as default };
