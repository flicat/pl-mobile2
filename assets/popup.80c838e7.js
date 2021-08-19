import { q as ref, Q as pushScopeId, R as popScopeId, r as resolveComponent, o as openBlock, d as createElementBlock, e as createBaseVNode, I as createVNode, O as withCtx, C as createTextVNode } from "./vendor.f40c224e.js";
var popup_vue_vue_type_style_index_0_scoped_true_lang = ".popup-inner[data-v-2b7e0530] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n}\n.popup-inner.center[data-v-2b7e0530] {\n  width: 50%;\n  height: 30%;\n}\n.popup-inner.left[data-v-2b7e0530],\n.popup-inner.right[data-v-2b7e0530] {\n  width: 70%;\n  height: 100%;\n}\n.popup-inner.top[data-v-2b7e0530],\n.popup-inner.bottom[data-v-2b7e0530] {\n  width: 100%;\n  height: 50%;\n}\n";
const _sfc_main = {
  setup() {
    const popupCenter = ref(null);
    const popupLeft = ref(null);
    const popupRight = ref(null);
    const popupTop = ref(null);
    const popupBottom = ref(null);
    const open = (target) => {
      target.open();
    };
    const onClose = (e) => {
      console.log("onClose:", e);
    };
    return {
      popupCenter,
      popupLeft,
      popupRight,
      popupTop,
      popupBottom,
      open,
      onClose
    };
  }
};
pushScopeId("data-v-2b7e0530");
const _hoisted_1 = { class: "content" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h3", null, "\u57FA\u7840\u7528\u6CD5", -1);
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u5C45\u4E2D\u5F39\u51FA");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u5DE6\u8FB9\u5F39\u51FA");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u53F3\u8FB9\u5F39\u51FA");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u4E0A\u9762\u5F39\u51FA");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u4E0B\u9762\u5F39\u51FA");
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "popup-inner center" }, "\u8FD9\u662F\u4E00\u4E2A\u5F39\u6846", -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", { class: "popup-inner left" }, "\u8FD9\u662F\u4E00\u4E2A\u5F39\u6846", -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", { class: "popup-inner right" }, "\u8FD9\u662F\u4E00\u4E2A\u5F39\u6846", -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("div", { class: "popup-inner top" }, "\u8FD9\u662F\u4E00\u4E2A\u5F39\u6846", -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("div", { class: "popup-inner bottom" }, "\u8FD9\u662F\u4E00\u4E2A\u5F39\u6846", -1);
popScopeId();
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_pl_button = resolveComponent("pl-button");
  const _component_pl_popup = resolveComponent("pl-popup");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    createBaseVNode("p", null, [
      createVNode(_component_pl_button, {
        type: "primary",
        onClick: _cache[0] || (_cache[0] = ($event) => $setup.open($setup.popupCenter))
      }, {
        default: withCtx(() => [
          _hoisted_3
        ]),
        _: 1
      })
    ]),
    createBaseVNode("p", null, [
      createVNode(_component_pl_button, {
        type: "primary",
        onClick: _cache[1] || (_cache[1] = ($event) => $setup.open($setup.popupLeft))
      }, {
        default: withCtx(() => [
          _hoisted_4
        ]),
        _: 1
      })
    ]),
    createBaseVNode("p", null, [
      createVNode(_component_pl_button, {
        type: "primary",
        onClick: _cache[2] || (_cache[2] = ($event) => $setup.open($setup.popupRight))
      }, {
        default: withCtx(() => [
          _hoisted_5
        ]),
        _: 1
      })
    ]),
    createBaseVNode("p", null, [
      createVNode(_component_pl_button, {
        type: "primary",
        onClick: _cache[3] || (_cache[3] = ($event) => $setup.open($setup.popupTop))
      }, {
        default: withCtx(() => [
          _hoisted_6
        ]),
        _: 1
      })
    ]),
    createBaseVNode("p", null, [
      createVNode(_component_pl_button, {
        type: "primary",
        onClick: _cache[4] || (_cache[4] = ($event) => $setup.open($setup.popupBottom))
      }, {
        default: withCtx(() => [
          _hoisted_7
        ]),
        _: 1
      })
    ]),
    createVNode(_component_pl_popup, {
      position: "center",
      ref: "popupCenter",
      class: "popup-center",
      onClose: $setup.onClose
    }, {
      default: withCtx(() => [
        _hoisted_8
      ]),
      _: 1
    }, 8, ["onClose"]),
    createVNode(_component_pl_popup, {
      position: "left",
      ref: "popupLeft",
      class: "popup-left",
      onClose: $setup.onClose
    }, {
      default: withCtx(() => [
        _hoisted_9
      ]),
      _: 1
    }, 8, ["onClose"]),
    createVNode(_component_pl_popup, {
      position: "right",
      ref: "popupRight",
      class: "popup-right",
      onClose: $setup.onClose
    }, {
      default: withCtx(() => [
        _hoisted_10
      ]),
      _: 1
    }, 8, ["onClose"]),
    createVNode(_component_pl_popup, {
      position: "top",
      ref: "popupTop",
      class: "popup-top",
      onClose: $setup.onClose
    }, {
      default: withCtx(() => [
        _hoisted_11
      ]),
      _: 1
    }, 8, ["onClose"]),
    createVNode(_component_pl_popup, {
      position: "bottom",
      ref: "popupBottom",
      class: "popup-bottom",
      onClose: $setup.onClose
    }, {
      default: withCtx(() => [
        _hoisted_12
      ]),
      _: 1
    }, 8, ["onClose"])
  ]);
}
_sfc_main.render = _sfc_render;
_sfc_main.__scopeId = "data-v-2b7e0530";
export { _sfc_main as default };
