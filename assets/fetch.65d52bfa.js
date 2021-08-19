import { g as getCurrentInstance, q as ref, Q as pushScopeId, R as popScopeId, r as resolveComponent, o as openBlock, d as createElementBlock, I as createVNode, O as withCtx, l as createCommentVNode, C as createTextVNode } from "./vendor.f40c224e.js";
var fetch_vue_vue_type_style_index_0_scoped_true_lang = "img[data-v-64fa7795] {\n  display: block;\n  width: 50vw;\n}\n";
const _sfc_main = {
  setup() {
    const app = getCurrentInstance();
    const { $fetch } = app.appContext.config.globalProperties;
    const src = ref("");
    const getImg = async () => {
      $fetch.before((options) => {
        options.type = "blob";
      });
      const data = await $fetch.get("/favicon.ico");
      if (data && data.size > 0) {
        src.value = URL.createObjectURL(data);
      }
    };
    return {
      src,
      getImg
    };
  }
};
pushScopeId("data-v-64fa7795");
const _hoisted_1 = { class: "content" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode("\u8BF7\u6C42\u4E00\u5F20\u56FE\u7247");
const _hoisted_3 = ["src"];
popScopeId();
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_pl_button = resolveComponent("pl-button");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_pl_button, {
      onClick: $setup.getImg,
      type: "primary"
    }, {
      default: withCtx(() => [
        _hoisted_2
      ]),
      _: 1
    }, 8, ["onClick"]),
    $setup.src ? (openBlock(), createElementBlock("img", {
      key: 0,
      src: $setup.src,
      ref: "img"
    }, null, 8, _hoisted_3)) : createCommentVNode("", true)
  ]);
}
_sfc_main.render = _sfc_render;
_sfc_main.__scopeId = "data-v-64fa7795";
export { _sfc_main as default };
