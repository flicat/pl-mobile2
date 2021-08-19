import { g as getCurrentInstance, q as ref, Q as pushScopeId, R as popScopeId, r as resolveComponent, o as openBlock, d as createElementBlock, I as createVNode, O as withCtx, C as createTextVNode, t as toDisplayString, e as createBaseVNode } from "./vendor.f40c224e.js";
var checkbox_vue_vue_type_style_index_0_scoped_true_lang = ".pl-checkbox[data-v-14da3ced] {\n  border-bottom: 1px solid #ddd;\n}\n";
const _sfc_main = {
  setup() {
    const app = getCurrentInstance();
    const box = ref(null);
    const boolValue = ref(true);
    const value = ref([]);
    const { $toast } = app.appContext.config.globalProperties;
    const onChange = () => {
      console.log("onChange::", value.value);
    };
    const validate = async () => {
      try {
        await box.value.validate();
        $toast("\u6821\u9A8C\u6210\u529F\uFF01");
      } catch (e) {
        $toast("\u6821\u9A8C\u5931\u8D25: " + e);
      }
    };
    return {
      box,
      boolValue,
      value,
      onChange,
      validate,
      data: [
        { label: "\u9009\u98791", value: 1, disabled: false },
        { label: "\u9009\u98792", value: 2, disabled: true },
        { label: "\u9009\u98793", value: 3, disabled: false }
      ],
      rules: [{ required: true, message: "\u8BF7\u9009\u62E9", trigger: "change", type: "array" }]
    };
  }
};
pushScopeId("data-v-14da3ced");
const _hoisted_1 = { class: "content" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h3", null, "\u57FA\u7840\u7528\u6CD5", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("h3", null, "\u5C3A\u5BF8\u5927\u5C0F", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("h3", null, "\u663E\u793Alabel", -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("h3", null, "\u7981\u7528", -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("h3", null, "\u524D\u7F6E\u56FE\u6807", -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("h3", null, "\u7AD6\u6392\u6837\u5F0F", -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("h3", null, "\u5F00\u5173\u6309\u94AE", -1);
const _hoisted_9 = /* @__PURE__ */ createTextVNode("\u5F00\u5173");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("\u5F00\u5173");
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("h3", null, "\u81EA\u5B9A\u4E49\u5B50\u9879", -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("h3", null, "\u8868\u5355\u6821\u9A8C", -1);
const _hoisted_13 = /* @__PURE__ */ createTextVNode("\u8868\u5355\u6821\u9A8C");
popScopeId();
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_pl_checkbox = resolveComponent("pl-checkbox");
  const _component_pl_icon = resolveComponent("pl-icon");
  const _component_pl_button = resolveComponent("pl-button");
  const _component_pl_cell = resolveComponent("pl-cell");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    createVNode(_component_pl_checkbox, {
      value: $setup.value,
      "onUpdate:value": _cache[0] || (_cache[0] = ($event) => $setup.value = $event),
      options: $setup.data
    }, null, 8, ["value", "options"]),
    createVNode(_component_pl_checkbox, {
      value: $setup.value,
      "onUpdate:value": _cache[1] || (_cache[1] = ($event) => $setup.value = $event),
      options: $setup.data,
      button: ""
    }, null, 8, ["value", "options"]),
    createVNode(_component_pl_checkbox, {
      value: $setup.value,
      "onUpdate:value": _cache[2] || (_cache[2] = ($event) => $setup.value = $event),
      options: $setup.data,
      label: "\u8BF7\u9009\u62E9\uFF1A",
      button: ""
    }, null, 8, ["value", "options"]),
    _hoisted_3,
    createVNode(_component_pl_checkbox, {
      value: $setup.value,
      "onUpdate:value": _cache[3] || (_cache[3] = ($event) => $setup.value = $event),
      options: $setup.data,
      size: "small"
    }, null, 8, ["value", "options"]),
    createVNode(_component_pl_checkbox, {
      value: $setup.value,
      "onUpdate:value": _cache[4] || (_cache[4] = ($event) => $setup.value = $event),
      options: $setup.data,
      size: "normal"
    }, null, 8, ["value", "options"]),
    createVNode(_component_pl_checkbox, {
      value: $setup.value,
      "onUpdate:value": _cache[5] || (_cache[5] = ($event) => $setup.value = $event),
      options: $setup.data,
      size: "large"
    }, null, 8, ["value", "options"]),
    _hoisted_4,
    createVNode(_component_pl_checkbox, {
      value: $setup.value,
      "onUpdate:value": _cache[6] || (_cache[6] = ($event) => $setup.value = $event),
      options: $setup.data,
      label: "\u8BF7\u9009\u62E9\uFF1A"
    }, null, 8, ["value", "options"]),
    createVNode(_component_pl_checkbox, {
      value: $setup.value,
      "onUpdate:value": _cache[7] || (_cache[7] = ($event) => $setup.value = $event),
      options: $setup.data,
      label: "\u8BF7\u9009\u62E9\uFF1A",
      wrap: ""
    }, null, 8, ["value", "options"]),
    _hoisted_5,
    createVNode(_component_pl_checkbox, {
      value: $setup.value,
      "onUpdate:value": _cache[8] || (_cache[8] = ($event) => $setup.value = $event),
      options: $setup.data,
      label: "\u8BF7\u9009\u62E9\uFF1A",
      disabled: ""
    }, null, 8, ["value", "options"]),
    _hoisted_6,
    createVNode(_component_pl_checkbox, {
      value: $setup.value,
      "onUpdate:value": _cache[9] || (_cache[9] = ($event) => $setup.value = $event),
      options: $setup.data,
      rules: $setup.rules,
      label: "\u8BF7\u9009\u62E9\uFF1A"
    }, {
      prepend: withCtx(() => [
        createVNode(_component_pl_icon, {
          name: "icon-dingwei",
          fill: "#999"
        })
      ]),
      _: 1
    }, 8, ["value", "options", "rules"]),
    createVNode(_component_pl_checkbox, {
      value: $setup.value,
      "onUpdate:value": _cache[10] || (_cache[10] = ($event) => $setup.value = $event),
      options: $setup.data,
      rules: $setup.rules,
      label: "\u8BF7\u9009\u62E9\uFF1A",
      wrap: "",
      required: ""
    }, {
      prepend: withCtx(() => [
        createVNode(_component_pl_icon, {
          name: "icon-dingwei",
          fill: "#999"
        })
      ]),
      _: 1
    }, 8, ["value", "options", "rules"]),
    _hoisted_7,
    createVNode(_component_pl_checkbox, {
      value: $setup.value,
      "onUpdate:value": _cache[11] || (_cache[11] = ($event) => $setup.value = $event),
      options: $setup.data,
      rules: $setup.rules,
      required: "",
      vertical: ""
    }, null, 8, ["value", "options", "rules"]),
    createVNode(_component_pl_checkbox, {
      value: $setup.value,
      "onUpdate:value": _cache[12] || (_cache[12] = ($event) => $setup.value = $event),
      options: $setup.data,
      rules: $setup.rules,
      label: "\u8BF7\u9009\u62E9\uFF1A",
      required: "",
      vertical: ""
    }, null, 8, ["value", "options", "rules"]),
    _hoisted_8,
    createVNode(_component_pl_checkbox, {
      value: $setup.boolValue,
      "onUpdate:value": _cache[13] || (_cache[13] = ($event) => $setup.boolValue = $event),
      trueValue: true,
      falseValue: false
    }, {
      default: withCtx(() => [
        _hoisted_9
      ]),
      _: 1
    }, 8, ["value"]),
    createVNode(_component_pl_checkbox, {
      value: $setup.boolValue,
      "onUpdate:value": _cache[14] || (_cache[14] = ($event) => $setup.boolValue = $event),
      trueValue: true,
      falseValue: false,
      button: ""
    }, {
      default: withCtx(() => [
        _hoisted_10
      ]),
      _: 1
    }, 8, ["value"]),
    createVNode(_component_pl_checkbox, {
      value: $setup.boolValue,
      "onUpdate:value": _cache[15] || (_cache[15] = ($event) => $setup.boolValue = $event),
      trueValue: true,
      falseValue: false,
      label: "\u8BF7\u9009\u62E9\uFF1A"
    }, null, 8, ["value"]),
    createVNode(_component_pl_checkbox, {
      value: $setup.boolValue,
      "onUpdate:value": _cache[16] || (_cache[16] = ($event) => $setup.boolValue = $event),
      trueValue: true,
      falseValue: false,
      label: "\u8BF7\u9009\u62E9\uFF1A",
      button: ""
    }, null, 8, ["value"]),
    _hoisted_11,
    createVNode(_component_pl_checkbox, {
      value: $setup.value,
      "onUpdate:value": _cache[17] || (_cache[17] = ($event) => $setup.value = $event),
      options: $setup.data
    }, {
      default: withCtx((scope) => [
        createTextVNode(toDisplayString(scope.item.label) + " - " + toDisplayString(scope.item.value), 1)
      ]),
      _: 1
    }, 8, ["value", "options"]),
    _hoisted_12,
    createVNode(_component_pl_checkbox, {
      onChange: $setup.onChange,
      value: $setup.value,
      "onUpdate:value": _cache[18] || (_cache[18] = ($event) => $setup.value = $event),
      options: $setup.data,
      rules: $setup.rules,
      label: "\u8BF7\u9009\u62E9\uFF1A",
      ref: "box",
      required: ""
    }, null, 8, ["onChange", "value", "options", "rules"]),
    createVNode(_component_pl_cell, { span: [1] }, {
      default: withCtx(() => [
        createVNode(_component_pl_button, {
          type: "success",
          onClick: $setup.validate
        }, {
          default: withCtx(() => [
            _hoisted_13
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      _: 1
    })
  ]);
}
_sfc_main.render = _sfc_render;
_sfc_main.__scopeId = "data-v-14da3ced";
export { _sfc_main as default };
