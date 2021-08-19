import { g as getCurrentInstance, Q as pushScopeId, R as popScopeId, r as resolveComponent, o as openBlock, d as createElementBlock, I as createVNode, O as withCtx, C as createTextVNode } from "./vendor.f40c224e.js";
var loading_vue_vue_type_style_index_0_scoped_true_lang = ".content .pl-loading[data-v-6bba688b] {\n  margin: 50px;\n}\n";
const _sfc_main = {
  setup() {
    const app = getCurrentInstance();
    const { $loadingShow, $loadingHide } = app.appContext.config.globalProperties;
    const showLoading = () => {
      $loadingShow("\u52A0\u8F7D\u4E2D...");
      setTimeout(() => {
        $loadingHide();
      }, 2e3);
    };
    showLoading();
  }
};
pushScopeId("data-v-6bba688b");
const _hoisted_1 = { class: "content" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode("\u52A0\u8F7D\u4E2D...");
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u52A0\u8F7D\u4E2D...");
popScopeId();
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_pl_loading = resolveComponent("pl-loading");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_pl_loading, null, {
      default: withCtx(() => [
        _hoisted_2
      ]),
      _: 1
    }),
    createVNode(_component_pl_loading, { vertical: "" }, {
      default: withCtx(() => [
        _hoisted_3
      ]),
      _: 1
    })
  ]);
}
_sfc_main.render = _sfc_render;
_sfc_main.__scopeId = "data-v-6bba688b";
export { _sfc_main as default };
