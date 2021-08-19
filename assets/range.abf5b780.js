import { g as getCurrentInstance, q as ref, Q as pushScopeId, R as popScopeId, r as resolveComponent, o as openBlock, d as createElementBlock, I as createVNode, O as withCtx, C as createTextVNode, t as toDisplayString, e as createBaseVNode } from "./vendor.f40c224e.js";
var range_vue_vue_type_style_index_0_scoped_true_lang = ".thumb[data-v-9cb7b09a] {\n  padding: 0.2em 0.5em;\n  border-radius: 0.5rem;\n  text-align: center;\n  background-color: #5fd3ff;\n  color: #fff;\n  transform: translate(-50%, -50%);\n}\n";
const _sfc_main = {
  setup() {
    const app = getCurrentInstance();
    const value = ref(null);
    const range1 = ref(null);
    const range2 = ref(null);
    const { $toast } = app.appContext.config.globalProperties;
    const validate = async () => {
      try {
        await range1.value.validate();
        await range2.value.validate();
        $toast("\u6821\u9A8C\u6210\u529F\uFF01");
      } catch (e) {
        $toast("\u6821\u9A8C\u5931\u8D25: " + e);
      }
    };
    const onChange = () => {
      console.log("onChange::", value.value);
    };
    return {
      value,
      range1,
      range2,
      validate,
      onChange,
      rules: [{ required: true, message: "\u8BF7\u9009\u62E9", trigger: "change", type: "number" }]
    };
  }
};
pushScopeId("data-v-9cb7b09a");
const _hoisted_1 = { class: "content" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h3", null, "\u57FA\u7840\u7528\u6CD5", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("h3", null, "\u5C3A\u5BF8\u5927\u5C0F", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("h3", null, "\u6807\u9898\u6362\u884C", -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("h3", null, "\u7981\u7528", -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("h3", null, "\u56FE\u6807\u586B\u5145", -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("h3", null, "\u81EA\u5B9A\u4E49\u6ED1\u5757", -1);
const _hoisted_8 = { class: "thumb" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("h3", null, "\u8868\u5355\u6821\u9A8C", -1);
const _hoisted_10 = /* @__PURE__ */ createTextVNode("\u8868\u5355\u6821\u9A8C");
popScopeId();
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_pl_range = resolveComponent("pl-range");
  const _component_pl_icon = resolveComponent("pl-icon");
  const _component_pl_button = resolveComponent("pl-button");
  const _component_pl_cell = resolveComponent("pl-cell");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    createVNode(_component_pl_range, {
      value: $setup.value,
      "onUpdate:value": _cache[0] || (_cache[0] = ($event) => $setup.value = $event),
      min: 0,
      max: 100,
      step: 1
    }, null, 8, ["value"]),
    createVNode(_component_pl_range, {
      value: $setup.value,
      "onUpdate:value": _cache[1] || (_cache[1] = ($event) => $setup.value = $event),
      min: 0,
      max: 100,
      step: 1,
      label: "\u8BF7\u9009\u62E9\uFF1A"
    }, null, 8, ["value"]),
    _hoisted_3,
    createVNode(_component_pl_range, {
      value: $setup.value,
      "onUpdate:value": _cache[2] || (_cache[2] = ($event) => $setup.value = $event),
      min: 0,
      max: 100,
      step: 1,
      label: "\u8BF7\u9009\u62E9\uFF1A",
      size: "small"
    }, null, 8, ["value"]),
    createVNode(_component_pl_range, {
      value: $setup.value,
      "onUpdate:value": _cache[3] || (_cache[3] = ($event) => $setup.value = $event),
      min: 0,
      max: 100,
      step: 1,
      label: "\u8BF7\u9009\u62E9\uFF1A",
      size: "normal"
    }, null, 8, ["value"]),
    createVNode(_component_pl_range, {
      value: $setup.value,
      "onUpdate:value": _cache[4] || (_cache[4] = ($event) => $setup.value = $event),
      min: 0,
      max: 100,
      step: 1,
      label: "\u8BF7\u9009\u62E9\uFF1A",
      size: "large"
    }, null, 8, ["value"]),
    _hoisted_4,
    createVNode(_component_pl_range, {
      value: $setup.value,
      "onUpdate:value": _cache[5] || (_cache[5] = ($event) => $setup.value = $event),
      min: 0,
      max: 100,
      step: 1,
      label: "\u8BF7\u9009\u62E9\uFF1A",
      wrap: ""
    }, null, 8, ["value"]),
    _hoisted_5,
    createVNode(_component_pl_range, {
      value: $setup.value,
      "onUpdate:value": _cache[6] || (_cache[6] = ($event) => $setup.value = $event),
      min: 0,
      max: 100,
      step: 1,
      label: "\u8BF7\u9009\u62E9\uFF1A",
      disabled: ""
    }, null, 8, ["value"]),
    _hoisted_6,
    createVNode(_component_pl_range, {
      value: $setup.value,
      "onUpdate:value": _cache[7] || (_cache[7] = ($event) => $setup.value = $event),
      min: 0,
      max: 100,
      step: 1,
      label: "\u8BF7\u9009\u62E9\uFF1A",
      required: ""
    }, {
      prepend: withCtx(() => [
        createVNode(_component_pl_icon, {
          name: "icon-dingwei",
          fill: "#999"
        })
      ]),
      append: withCtx(() => [
        createTextVNode(toDisplayString($setup.value) + "%", 1)
      ]),
      _: 1
    }, 8, ["value"]),
    createVNode(_component_pl_range, {
      value: $setup.value,
      "onUpdate:value": _cache[8] || (_cache[8] = ($event) => $setup.value = $event),
      min: 0,
      max: 100,
      step: 1,
      label: "\u8BF7\u9009\u62E9\uFF1A",
      required: "",
      wrap: ""
    }, {
      prepend: withCtx(() => [
        createVNode(_component_pl_icon, {
          name: "icon-dingwei",
          fill: "#999"
        })
      ]),
      append: withCtx(() => [
        createTextVNode(toDisplayString($setup.value) + "%", 1)
      ]),
      _: 1
    }, 8, ["value"]),
    _hoisted_7,
    createVNode(_component_pl_range, {
      value: $setup.value,
      "onUpdate:value": _cache[9] || (_cache[9] = ($event) => $setup.value = $event),
      min: 0,
      max: 100,
      step: 1,
      label: "\u8BF7\u9009\u62E9\uFF1A",
      required: ""
    }, {
      thumb: withCtx(() => [
        createBaseVNode("span", _hoisted_8, toDisplayString($setup.value) + "%", 1)
      ]),
      _: 1
    }, 8, ["value"]),
    _hoisted_9,
    createVNode(_component_pl_range, {
      value: $setup.value,
      "onUpdate:value": _cache[10] || (_cache[10] = ($event) => $setup.value = $event),
      min: 0,
      max: 100,
      step: 1,
      label: "\u8BF7\u9009\u62E9\uFF1A",
      onChange: $setup.onChange,
      rules: $setup.rules,
      ref: "range1",
      required: ""
    }, null, 8, ["value", "onChange", "rules"]),
    createVNode(_component_pl_range, {
      value: $setup.value,
      "onUpdate:value": _cache[11] || (_cache[11] = ($event) => $setup.value = $event),
      min: 0,
      max: 100,
      step: 1,
      label: "\u8BF7\u9009\u62E9\uFF1A",
      onChange: $setup.onChange,
      rules: $setup.rules,
      ref: "range2",
      required: "",
      wrap: ""
    }, null, 8, ["value", "onChange", "rules"]),
    createVNode(_component_pl_cell, { span: [1] }, {
      default: withCtx(() => [
        createVNode(_component_pl_button, {
          type: "success",
          onClick: $setup.validate
        }, {
          default: withCtx(() => [
            _hoisted_10
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      _: 1
    })
  ]);
}
_sfc_main.render = _sfc_render;
_sfc_main.__scopeId = "data-v-9cb7b09a";
export { _sfc_main as default };
