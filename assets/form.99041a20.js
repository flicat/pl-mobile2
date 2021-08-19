import { g as getCurrentInstance, q as ref, Q as pushScopeId, R as popScopeId, r as resolveComponent, o as openBlock, d as createElementBlock, I as createVNode, O as withCtx, C as createTextVNode, t as toDisplayString } from "./vendor.f40c224e.js";
var form_vue_vue_type_style_index_0_scoped_true_lang = ".pl-datetime[data-v-35ee34d7],\n.pl-input[data-v-35ee34d7],\n.pl-select[data-v-35ee34d7],\n.pl-range[data-v-35ee34d7],\n.pl-radio[data-v-35ee34d7] {\n  border-bottom: 1px solid #ddd;\n}\n.pl-cell[data-v-35ee34d7] {\n  margin-top: 1rem;\n}\n";
const _sfc_main = {
  setup() {
    const app = getCurrentInstance();
    const { $toast } = app.appContext.config.globalProperties;
    const form = ref(null);
    const value = ref(null);
    const dateValue = ref("");
    const selectValue = ref("");
    const radioValue = ref("");
    const rangeValue = ref(null);
    const checkboxValue = ref([]);
    const options = [
      { label: "\u9009\u98791", value: 1 },
      { label: "\u9009\u98792", value: 2 },
      { label: "\u9009\u98793", value: 3 }
    ];
    const rules = {
      datetime: [{ required: true, message: "\u8BF7\u8F93\u5165", trigger: "blur" }],
      input: [{ required: true, message: "\u8BF7\u8F93\u5165", trigger: "blur" }],
      select: [{ required: true, message: "\u8BF7\u8F93\u5165", trigger: "change" }],
      range: [{ required: true, message: "\u8BF7\u8F93\u5165", trigger: "change" }],
      checkbox: [{ required: true, message: "\u8BF7\u8F93\u5165", trigger: "change" }],
      radio: [{ required: true, message: "\u8BF7\u8F93\u5165", trigger: "change" }]
    };
    const reset = () => {
      form.value.clearValidate();
    };
    const submit = () => {
      console.log("dateValue: ", dateValue.value);
      console.log("value: ", value.value);
      console.log("selectValue: ", selectValue.value);
      console.log("rangeValue: ", rangeValue.value);
      console.log("radioValue: ", radioValue.value);
      console.log("checkboxValue: ", checkboxValue.value);
      form.value.validate().then((e) => {
        $toast("\u6821\u9A8C\u6210\u529F");
      }).catch((e) => {
        console.log(e);
        $toast("\u6821\u9A8C\u5931\u8D25");
      });
    };
    return {
      form,
      value,
      dateValue,
      rangeValue,
      checkboxValue,
      selectValue,
      radioValue,
      options,
      rules,
      reset,
      submit
    };
  }
};
pushScopeId("data-v-35ee34d7");
const _hoisted_1 = { class: "content" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode("0%");
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u6E05\u9664\u9A8C\u8BC1\u6D88\u606F");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u63D0\u4EA4");
popScopeId();
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_pl_datetime = resolveComponent("pl-datetime");
  const _component_pl_input = resolveComponent("pl-input");
  const _component_pl_select = resolveComponent("pl-select");
  const _component_pl_range = resolveComponent("pl-range");
  const _component_pl_radio = resolveComponent("pl-radio");
  const _component_pl_checkbox = resolveComponent("pl-checkbox");
  const _component_pl_button = resolveComponent("pl-button");
  const _component_pl_cell = resolveComponent("pl-cell");
  const _component_pl_form = resolveComponent("pl-form");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_pl_form, {
      labelWidth: "5em",
      ref: "form"
    }, {
      default: withCtx(() => [
        createVNode(_component_pl_datetime, {
          rules: $setup.rules.datetime,
          label: "\u65E5\u671F",
          placeholder: "\u8BF7\u9009\u62E9\u65E5\u671F",
          value: $setup.dateValue,
          "onUpdate:value": _cache[0] || (_cache[0] = ($event) => $setup.dateValue = $event),
          type: "date"
        }, null, 8, ["rules", "value"]),
        createVNode(_component_pl_input, {
          value: $setup.value,
          "onUpdate:value": _cache[1] || (_cache[1] = ($event) => $setup.value = $event),
          rules: $setup.rules.input,
          required: "",
          label: "\u540D\u5B57\uFF1A"
        }, null, 8, ["value", "rules"]),
        createVNode(_component_pl_select, {
          options: $setup.options,
          rules: $setup.rules.select,
          value: $setup.selectValue,
          "onUpdate:value": _cache[2] || (_cache[2] = ($event) => $setup.selectValue = $event),
          label: "\u8BF7\u9009\u62E9\uFF1A",
          required: ""
        }, null, 8, ["options", "rules", "value"]),
        createVNode(_component_pl_range, {
          value: $setup.rangeValue,
          "onUpdate:value": _cache[3] || (_cache[3] = ($event) => $setup.rangeValue = $event),
          rules: $setup.rules.range,
          min: 0,
          max: 100,
          step: 1,
          label: "\u8BF7\u9009\u62E9\uFF1A",
          labelWidth: "5em",
          required: ""
        }, {
          prepend: withCtx(() => [
            _hoisted_2
          ]),
          append: withCtx(() => [
            createTextVNode(toDisplayString($setup.rangeValue) + "%", 1)
          ]),
          _: 1
        }, 8, ["value", "rules"]),
        createVNode(_component_pl_radio, {
          value: $setup.radioValue,
          "onUpdate:value": _cache[4] || (_cache[4] = ($event) => $setup.radioValue = $event),
          options: $setup.options,
          rules: $setup.rules.radio,
          label: "\u5355\u9009\uFF1A",
          required: ""
        }, null, 8, ["value", "options", "rules"]),
        createVNode(_component_pl_checkbox, {
          value: $setup.checkboxValue,
          "onUpdate:value": _cache[5] || (_cache[5] = ($event) => $setup.checkboxValue = $event),
          options: $setup.options,
          rules: $setup.rules.checkbox,
          required: "",
          label: "\u591A\u9009\uFF1A"
        }, null, 8, ["value", "options", "rules"]),
        createVNode(_component_pl_cell, {
          span: [1, 1],
          gap: "1em"
        }, {
          default: withCtx(() => [
            createVNode(_component_pl_button, {
              onClick: $setup.reset,
              type: "primary"
            }, {
              default: withCtx(() => [
                _hoisted_3
              ]),
              _: 1
            }, 8, ["onClick"]),
            createVNode(_component_pl_button, {
              onClick: $setup.submit,
              type: "primary"
            }, {
              default: withCtx(() => [
                _hoisted_4
              ]),
              _: 1
            }, 8, ["onClick"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 512)
  ]);
}
_sfc_main.render = _sfc_render;
_sfc_main.__scopeId = "data-v-35ee34d7";
export { _sfc_main as default };
