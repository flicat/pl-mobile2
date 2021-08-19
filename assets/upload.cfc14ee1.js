import { q as ref, Q as pushScopeId, R as popScopeId, r as resolveComponent, o as openBlock, d as createElementBlock, I as createVNode, O as withCtx, e as createBaseVNode, C as createTextVNode } from "./vendor.f40c224e.js";
var upload_vue_vue_type_style_index_0_scoped_true_lang = ".file-upload[data-v-51fcb593] {\n  position: relative;\n}\n.home[data-v-51fcb593] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n";
const _sfc_main = {
  setup() {
    const files = ref([]);
    const setHomePage = (file) => {
      console.log(file);
    };
    const onChange = (files2) => {
      console.log("onChange: ", files2);
    };
    const beforeRead = (files2) => {
      console.log("beforeRead: ", files2, this);
    };
    const afterRead = (files2) => {
      console.log("afterRead: ", files2, this);
    };
    return {
      files,
      setHomePage,
      onChange,
      beforeRead,
      afterRead
    };
  }
};
pushScopeId("data-v-51fcb593");
const _hoisted_1 = { class: "content" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h3", null, "\u57FA\u7840\u7528\u6CD5", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("h3", null, "\u81EA\u5B9A\u4E49\u6309\u94AE", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", null, "\u8BF7\u9009\u62E9\u56FE\u7247\uFF0C\u683C\u5F0F\u4E0D\u9650", -1);
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u8BBE\u4E3A\u9996\u9875");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u6DFB\u52A0\u56FE\u7247");
popScopeId();
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_pl_upload = resolveComponent("pl-upload");
  const _component_pl_button = resolveComponent("pl-button");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    createVNode(_component_pl_upload, {
      value: $setup.files,
      "onUpdate:value": _cache[0] || (_cache[0] = ($event) => $setup.files = $event),
      accept: "image/*",
      class: "file-upload",
      beforeRead: $setup.beforeRead,
      afterRead: $setup.afterRead,
      multiple: "",
      onChange: $setup.onChange
    }, null, 8, ["value", "beforeRead", "afterRead", "onChange"]),
    _hoisted_3,
    createVNode(_component_pl_upload, {
      value: $setup.files,
      "onUpdate:value": _cache[1] || (_cache[1] = ($event) => $setup.files = $event),
      accept: "image/*",
      class: "file-upload",
      onChange: $setup.onChange
    }, {
      tips: withCtx(() => [
        _hoisted_4
      ]),
      default: withCtx((scope) => [
        createVNode(_component_pl_button, {
          class: "home",
          onClick: ($event) => $setup.setHomePage(scope.file),
          size: "small"
        }, {
          default: withCtx(() => [
            _hoisted_5
          ]),
          _: 2
        }, 1032, ["onClick"])
      ]),
      button: withCtx(() => [
        createVNode(_component_pl_button, { size: "small" }, {
          default: withCtx(() => [
            _hoisted_6
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["value", "onChange"])
  ]);
}
_sfc_main.render = _sfc_render;
_sfc_main.__scopeId = "data-v-51fcb593";
export { _sfc_main as default };
