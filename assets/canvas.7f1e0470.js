import { q as ref, Q as pushScopeId, R as popScopeId, r as resolveComponent, o as openBlock, d as createElementBlock, I as createVNode, O as withCtx, e as createBaseVNode, l as createCommentVNode, C as createTextVNode } from "./vendor.f40c224e.js";
var canvas_vue_vue_type_style_index_0_scoped_true_lang = ".content .canvas[data-v-6f7687b5] {\n  width: 100%;\n  height: 80vh;\n}\n.content .btn-warp[data-v-6f7687b5] {\n  padding: 1rem 0;\n}\n.content .preview[data-v-6f7687b5] {\n  padding: 1em;\n}\n.content .preview img[data-v-6f7687b5] {\n  width: 100%;\n  height: auto;\n}\n";
const _sfc_main = {
  setup() {
    let src = ref("");
    let canvas = ref(null);
    function clear() {
      canvas.value.clear();
    }
    function getImageDataUrl() {
      let result = canvas.value.getImageDataUrl();
      console.log("getImageDataUrl:: ", result);
      src.value = result;
    }
    function getImageBlob() {
      let result = canvas.value.getImageBlob();
      console.log("getImageBlob:: ", result);
      src.value = URL.createObjectURL(result);
    }
    return {
      src,
      canvas,
      clear,
      getImageDataUrl,
      getImageBlob
    };
  }
};
pushScopeId("data-v-6f7687b5");
const _hoisted_1 = { class: "content" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode("\u8BF7\u5728\u6B64\u5904\u7B7E\u540D");
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u6E05\u9664");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u83B7\u53D6dataURL");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u83B7\u53D6BLob");
const _hoisted_6 = { class: "preview" };
const _hoisted_7 = ["src"];
popScopeId();
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_pl_canvas = resolveComponent("pl-canvas");
  const _component_pl_button = resolveComponent("pl-button");
  const _component_pl_cell = resolveComponent("pl-cell");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_pl_canvas, {
      class: "canvas",
      ref: "canvas",
      penId: 0,
      orientation: "right"
    }, {
      placeholder: withCtx(() => [
        _hoisted_2
      ]),
      _: 1
    }, 512),
    createVNode(_component_pl_cell, {
      span: [1, 2, 2],
      gap: "10px",
      class: "btn-warp"
    }, {
      default: withCtx(() => [
        createVNode(_component_pl_button, {
          onClick: $setup.clear,
          type: "primary"
        }, {
          default: withCtx(() => [
            _hoisted_3
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_pl_button, {
          onClick: $setup.getImageDataUrl,
          type: "primary"
        }, {
          default: withCtx(() => [
            _hoisted_4
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_pl_button, {
          onClick: $setup.getImageBlob,
          type: "primary"
        }, {
          default: withCtx(() => [
            _hoisted_5
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      _: 1
    }),
    createBaseVNode("div", _hoisted_6, [
      $setup.src ? (openBlock(), createElementBlock("img", {
        key: 0,
        src: $setup.src,
        alt: ""
      }, null, 8, _hoisted_7)) : createCommentVNode("", true)
    ])
  ]);
}
_sfc_main.render = _sfc_render;
_sfc_main.__scopeId = "data-v-6f7687b5";
export { _sfc_main as default };
