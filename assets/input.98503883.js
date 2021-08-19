import { g as getCurrentInstance, q as ref, Q as pushScopeId, R as popScopeId, r as resolveComponent, o as openBlock, d as createElementBlock, I as createVNode, O as withCtx, e as createBaseVNode, C as createTextVNode } from "./vendor.f40c224e.js";
var input_vue_vue_type_style_index_0_scoped_true_lang = ".pl-input[data-v-4db2133c] .pl-input-cell {\n  border-bottom: 1px solid #ddd;\n}\n";
const _sfc_main = {
  setup() {
    const app = getCurrentInstance();
    const value = ref("");
    const input = ref(null);
    const { $toast } = app.appContext.config.globalProperties;
    const validate = async () => {
      try {
        await input.value.validate();
        $toast("\u6821\u9A8C\u6210\u529F\uFF01");
      } catch (e) {
        $toast("\u6821\u9A8C\u5931\u8D25: " + e);
      }
    };
    return {
      value,
      input,
      validate,
      rules: [{ required: true, message: "\u8BF7\u8F93\u5165", trigger: "blur" }]
    };
  }
};
pushScopeId("data-v-4db2133c");
const _hoisted_1 = { class: "content" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h3", null, "\u57FA\u7840\u7528\u6CD5", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("h3", null, "\u5C3A\u5BF8\u5927\u5C0F", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("h3", null, "\u7981\u7528", -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("h3", null, "\u6807\u9898\u6298\u884C", -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("h3", null, "\u56FE\u6807\u586B\u5145", -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("h3", null, "\u8868\u5355\u6821\u9A8C", -1);
const _hoisted_8 = /* @__PURE__ */ createTextVNode("\u8868\u5355\u6821\u9A8C");
popScopeId();
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_pl_input = resolveComponent("pl-input");
  const _component_pl_icon = resolveComponent("pl-icon");
  const _component_pl_button = resolveComponent("pl-button");
  const _component_pl_cell = resolveComponent("pl-cell");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    createVNode(_component_pl_input, {
      placeholder: "\u59D3\u540D\u3001\u624B\u673A\u3001\u7535\u8BDD",
      type: "text",
      value: $setup.value,
      "onUpdate:value": _cache[0] || (_cache[0] = ($event) => $setup.value = $event),
      size: "normal",
      clearable: ""
    }, null, 8, ["value"]),
    _hoisted_3,
    createVNode(_component_pl_input, {
      label: "\u8BF7\u8F93\u5165\uFF1A",
      placeholder: "\u59D3\u540D\u3001\u624B\u673A\u3001\u7535\u8BDD",
      type: "text",
      value: $setup.value,
      "onUpdate:value": _cache[1] || (_cache[1] = ($event) => $setup.value = $event),
      size: "small"
    }, null, 8, ["value"]),
    createVNode(_component_pl_input, {
      label: "\u8BF7\u8F93\u5165\uFF1A",
      placeholder: "\u59D3\u540D\u3001\u624B\u673A\u3001\u7535\u8BDD",
      type: "text",
      value: $setup.value,
      "onUpdate:value": _cache[2] || (_cache[2] = ($event) => $setup.value = $event),
      size: "normal"
    }, null, 8, ["value"]),
    createVNode(_component_pl_input, {
      label: "\u8BF7\u8F93\u5165\uFF1A",
      placeholder: "\u59D3\u540D\u3001\u624B\u673A\u3001\u7535\u8BDD",
      type: "text",
      value: $setup.value,
      "onUpdate:value": _cache[3] || (_cache[3] = ($event) => $setup.value = $event),
      size: "large"
    }, null, 8, ["value"]),
    _hoisted_4,
    createVNode(_component_pl_input, {
      label: "\u8BF7\u8F93\u5165\uFF1A",
      placeholder: "\u59D3\u540D\u3001\u624B\u673A\u3001\u7535\u8BDD",
      type: "text",
      value: $setup.value,
      "onUpdate:value": _cache[4] || (_cache[4] = ($event) => $setup.value = $event),
      disabled: ""
    }, null, 8, ["value"]),
    createVNode(_component_pl_input, {
      label: "\u8BF7\u8F93\u5165\uFF1A",
      placeholder: "\u59D3\u540D\u3001\u624B\u673A\u3001\u7535\u8BDD",
      type: "textarea",
      rows: "5",
      value: $setup.value,
      "onUpdate:value": _cache[5] || (_cache[5] = ($event) => $setup.value = $event),
      disabled: ""
    }, null, 8, ["value"]),
    _hoisted_5,
    createVNode(_component_pl_input, {
      label: "\u8BF7\u8F93\u5165\u8BF7\u8F93\u5165\u8BF7\u8F93\u5165\u8BF7\u8F93\u5165\u8BF7\u8F93\u5165\u8BF7\u8F93\u5165\u8BF7\u8F93\u5165\u8BF7\u8F93\u5165\u8BF7\u8F93\u5165\u8BF7\u8F93\u5165\uFF1A",
      placeholder: "\u59D3\u540D\u3001\u624B\u673A\u3001\u7535\u8BDD",
      type: "text",
      value: $setup.value,
      "onUpdate:value": _cache[6] || (_cache[6] = ($event) => $setup.value = $event),
      required: "",
      wrap: "",
      clearable: ""
    }, null, 8, ["value"]),
    createVNode(_component_pl_input, {
      label: "\u8BF7\u8F93\u5165\uFF1A",
      placeholder: "\u59D3\u540D\u3001\u624B\u673A\u3001\u7535\u8BDD",
      type: "textarea",
      rows: "5",
      value: $setup.value,
      "onUpdate:value": _cache[7] || (_cache[7] = ($event) => $setup.value = $event),
      required: "",
      wrap: "",
      clearable: ""
    }, null, 8, ["value"]),
    _hoisted_6,
    createVNode(_component_pl_input, {
      label: "\u8BF7\u8F93\u5165\uFF1A",
      placeholder: "\u59D3\u540D\u3001\u624B\u673A\u3001\u7535\u8BDD",
      type: "text",
      value: $setup.value,
      "onUpdate:value": _cache[8] || (_cache[8] = ($event) => $setup.value = $event),
      required: "",
      clearable: ""
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
    }, 8, ["value"]),
    createVNode(_component_pl_input, {
      label: "\u8BF7\u8F93\u5165\uFF1A",
      placeholder: "\u59D3\u540D\u3001\u624B\u673A\u3001\u7535\u8BDD",
      type: "textarea",
      rows: "5",
      value: $setup.value,
      "onUpdate:value": _cache[9] || (_cache[9] = ($event) => $setup.value = $event),
      required: "",
      wrap: "",
      clearable: ""
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
    }, 8, ["value"]),
    _hoisted_7,
    createVNode(_component_pl_input, {
      label: "\u8BF7\u8F93\u5165\uFF1A",
      placeholder: "\u59D3\u540D\u3001\u624B\u673A\u3001\u7535\u8BDD",
      type: "text",
      value: $setup.value,
      "onUpdate:value": _cache[10] || (_cache[10] = ($event) => $setup.value = $event),
      rules: $setup.rules,
      ref: "input",
      required: "",
      clearable: ""
    }, null, 8, ["value", "rules"]),
    createVNode(_component_pl_cell, { span: [1] }, {
      default: withCtx(() => [
        createVNode(_component_pl_button, {
          type: "success",
          onClick: $setup.validate
        }, {
          default: withCtx(() => [
            _hoisted_8
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      _: 1
    })
  ]);
}
_sfc_main.render = _sfc_render;
_sfc_main.__scopeId = "data-v-4db2133c";
export { _sfc_main as default };
