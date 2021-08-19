import { q as ref, u as onMounted, Q as pushScopeId, R as popScopeId, r as resolveComponent, o as openBlock, d as createElementBlock, I as createVNode, O as withCtx, e as createBaseVNode } from "./vendor.f40c224e.js";
var progress_vue_vue_type_style_index_0_scoped_true_lang = ".big-size[data-v-0be63c2e] {\n  font-size: 50px;\n}\n";
const _sfc_main = {
  setup() {
    const progress = ref(99.99);
    onMounted(() => {
      setTimeout(() => {
        progress.value = 60;
      }, 1500);
    });
    return {
      progress
    };
  }
};
pushScopeId("data-v-0be63c2e");
const _hoisted_1 = { class: "content" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("span", null, "\u5F53\u524D\u8FDB\u5EA6", -1);
popScopeId();
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_pl_progress = resolveComponent("pl-progress");
  const _component_pl_cell = resolveComponent("pl-cell");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_pl_progress, {
      fill: "#0f0",
      progress: $setup.progress
    }, null, 8, ["progress"]),
    createVNode(_component_pl_cell, { span: [2, 1] }, {
      default: withCtx(() => [
        _hoisted_2,
        createVNode(_component_pl_progress, {
          fill: "#0f0",
          progress: $setup.progress,
          type: "circle"
        }, null, 8, ["progress"])
      ]),
      _: 1
    }),
    createVNode(_component_pl_cell, {
      span: [2, 1],
      class: "big-size"
    }, {
      default: withCtx(() => [
        createVNode(_component_pl_progress, {
          fill: "#0f0",
          progress: $setup.progress
        }, null, 8, ["progress"]),
        createVNode(_component_pl_progress, {
          fill: "#0f0",
          progress: $setup.progress,
          type: "circle"
        }, null, 8, ["progress"])
      ]),
      _: 1
    })
  ]);
}
_sfc_main.render = _sfc_render;
_sfc_main.__scopeId = "data-v-0be63c2e";
export { _sfc_main as default };
