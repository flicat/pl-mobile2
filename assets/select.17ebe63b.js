import { g as getCurrentInstance, q as ref, Q as pushScopeId, R as popScopeId, r as resolveComponent, o as openBlock, d as createElementBlock, I as createVNode, O as withCtx, e as createBaseVNode, t as toDisplayString, C as createTextVNode } from "./vendor.f40c224e.js";
var select_vue_vue_type_style_index_0_scoped_true_lang = ".content[data-v-9b5184b2] .pl-select {\n  border-bottom: 1px solid #eee;\n}\n";
const _sfc_main = {
  setup() {
    const app = getCurrentInstance();
    const value1 = ref(null);
    const value2 = ref([]);
    const select1 = ref(null);
    const select2 = ref(null);
    const { $toast } = app.appContext.config.globalProperties;
    const validate = async () => {
      try {
        await select1.value.validate();
        await select2.value.validate();
        $toast("\u6821\u9A8C\u6210\u529F\uFF01");
      } catch (e) {
        $toast("\u6821\u9A8C\u5931\u8D25: " + e);
      }
    };
    const change = () => {
      console.log("change::", value1.value);
    };
    const change2 = () => {
      console.log("change::", value2.value);
    };
    return {
      value1,
      value2,
      select1,
      select2,
      validate,
      change,
      change2,
      rules1: [{ required: true, message: "\u8BF7\u9009\u62E9", trigger: "change" }],
      rules2: [{ required: true, message: "\u8BF7\u9009\u62E9", trigger: "change" }],
      data: [
        { label: "\u9009\u98791", value: 1, disabled: false },
        { label: "\u9009\u98792", value: 2, disabled: false },
        { label: "\u9009\u98793", value: 3, disabled: true },
        { label: "\u9009\u98794", value: 4, disabled: false },
        { label: "\u9009\u98795", value: 5, disabled: false },
        { label: "\u9009\u98796", value: 6, disabled: false }
      ]
    };
  }
};
pushScopeId("data-v-9b5184b2");
const _hoisted_1 = { class: "content" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h3", null, "\u57FA\u7840\u7528\u6CD5", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("h3", null, "\u5C3A\u5BF8\u9009\u62E9", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("h3", null, "\u7981\u7528", -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("h3", null, "\u6298\u884C\u663E\u793A", -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("h3", null, "\u81EA\u5B9A\u4E49\u9009\u9879", -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("h3", null, "\u524D\u540E\u56FE\u6807", -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("h3", null, "\u8868\u5355\u6821\u9A8C", -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_11 = /* @__PURE__ */ createTextVNode("\u8868\u5355\u6821\u9A8C");
popScopeId();
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_pl_select = resolveComponent("pl-select");
  const _component_pl_icon = resolveComponent("pl-icon");
  const _component_pl_button = resolveComponent("pl-button");
  const _component_pl_cell = resolveComponent("pl-cell");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    createVNode(_component_pl_select, {
      value: $setup.value1,
      "onUpdate:value": _cache[0] || (_cache[0] = ($event) => $setup.value1 = $event),
      options: $setup.data
    }, null, 8, ["value", "options"]),
    createVNode(_component_pl_select, {
      value: $setup.value2,
      "onUpdate:value": _cache[1] || (_cache[1] = ($event) => $setup.value2 = $event),
      options: $setup.data,
      multiple: ""
    }, null, 8, ["value", "options"]),
    _hoisted_3,
    createVNode(_component_pl_select, {
      placeholder: "\u8BF7\u9009\u62E9\u9009\u9879",
      value: $setup.value1,
      "onUpdate:value": _cache[2] || (_cache[2] = ($event) => $setup.value1 = $event),
      options: $setup.data,
      size: "large",
      clearable: ""
    }, null, 8, ["value", "options"]),
    createVNode(_component_pl_select, {
      placeholder: "\u8BF7\u9009\u62E9\u9009\u9879",
      value: $setup.value2,
      "onUpdate:value": _cache[3] || (_cache[3] = ($event) => $setup.value2 = $event),
      options: $setup.data,
      size: "small",
      multiple: "",
      clearable: ""
    }, null, 8, ["value", "options"]),
    _hoisted_4,
    createVNode(_component_pl_select, {
      value: $setup.value1,
      "onUpdate:value": _cache[4] || (_cache[4] = ($event) => $setup.value1 = $event),
      options: $setup.data,
      disabled: ""
    }, null, 8, ["value", "options"]),
    _hoisted_5,
    createVNode(_component_pl_select, {
      label: "\u8BF7\u9009\u62E9\u8BF7\u9009\u62E9\u8BF7\u9009\u62E9\u8BF7\u9009\u62E9\u8BF7\u9009\u62E9\u8BF7\u9009\u62E9\u8BF7\u9009\u62E9\u8BF7\u9009\u62E9\u8BF7\u9009\u62E9\uFF1A",
      placeholder: "\u8BF7\u9009\u62E9\u9009\u9879",
      value: $setup.value1,
      "onUpdate:value": _cache[5] || (_cache[5] = ($event) => $setup.value1 = $event),
      options: $setup.data,
      clearable: "",
      wrap: ""
    }, null, 8, ["value", "options"]),
    createVNode(_component_pl_select, {
      label: "\u8BF7\u9009\u62E9\uFF1A",
      placeholder: "\u8BF7\u9009\u62E9\u9009\u9879",
      value: $setup.value2,
      "onUpdate:value": _cache[6] || (_cache[6] = ($event) => $setup.value2 = $event),
      options: $setup.data,
      multiple: "",
      clearable: "",
      wrap: "",
      required: ""
    }, null, 8, ["value", "options"]),
    _hoisted_6,
    createVNode(_component_pl_select, {
      label: "\u8BF7\u9009\u62E9\uFF1A",
      placeholder: "\u8BF7\u9009\u62E9",
      value: $setup.value1,
      "onUpdate:value": _cache[7] || (_cache[7] = ($event) => $setup.value1 = $event),
      options: $setup.data,
      clearable: "",
      required: ""
    }, {
      default: withCtx((scope) => [
        createBaseVNode("span", null, toDisplayString(scope.item.label) + "-" + toDisplayString(scope.item.value), 1)
      ]),
      _: 1
    }, 8, ["value", "options"]),
    _hoisted_7,
    createVNode(_component_pl_select, {
      label: "\u8BF7\u9009\u62E9\uFF1A",
      placeholder: "\u8BF7\u9009\u62E9",
      value: $setup.value1,
      "onUpdate:value": _cache[8] || (_cache[8] = ($event) => $setup.value1 = $event),
      options: $setup.data,
      clearable: "",
      required: ""
    }, {
      prepend: withCtx(() => [
        createVNode(_component_pl_icon, {
          name: "icon-dingwei",
          fill: "#999"
        })
      ]),
      append: withCtx(() => [
        createVNode(_component_pl_icon, {
          name: "icon-people_fill",
          fill: "#999"
        })
      ]),
      _: 1
    }, 8, ["value", "options"]),
    _hoisted_8,
    createVNode(_component_pl_select, {
      label: "\u8BF7\u9009\u62E9\uFF1A",
      value: $setup.value1,
      "onUpdate:value": _cache[9] || (_cache[9] = ($event) => $setup.value1 = $event),
      options: $setup.data,
      onChange: $setup.change,
      rules: $setup.rules1,
      ref: "select1",
      clearable: ""
    }, null, 8, ["value", "options", "onChange", "rules"]),
    createVNode(_component_pl_select, {
      label: "\u8BF7\u9009\u62E9\uFF1A",
      placeholder: "\u8BF7\u9009\u62E9\u9009\u9879",
      value: $setup.value2,
      "onUpdate:value": _cache[10] || (_cache[10] = ($event) => $setup.value2 = $event),
      options: $setup.data,
      onChange: $setup.change2,
      rules: $setup.rules2,
      ref: "select2",
      multiple: "",
      clearable: "",
      wrap: "",
      required: ""
    }, null, 8, ["value", "options", "onChange", "rules"]),
    _hoisted_9,
    _hoisted_10,
    createVNode(_component_pl_cell, { span: [1] }, {
      default: withCtx(() => [
        createVNode(_component_pl_button, {
          type: "success",
          onClick: $setup.validate
        }, {
          default: withCtx(() => [
            _hoisted_11
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      _: 1
    })
  ]);
}
_sfc_main.render = _sfc_render;
_sfc_main.__scopeId = "data-v-9b5184b2";
export { _sfc_main as default };
