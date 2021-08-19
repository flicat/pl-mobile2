import { q as ref, Q as pushScopeId, R as popScopeId, r as resolveComponent, o as openBlock, d as createElementBlock, I as createVNode, O as withCtx, F as Fragment, D as renderList, c as createBlock, e as createBaseVNode, t as toDisplayString, C as createTextVNode } from "./vendor.f40c224e.js";
var tabs_vue_vue_type_style_index_0_scoped_true_lang = ".pl-tabs[data-v-6b582ae2] {\n  margin-bottom: 50px;\n  outline: dashed 1px #ddecec;\n}\n";
const _sfc_main = {
  setup() {
    const active = ref("tab8");
    const getTabs = (length = 3) => {
      let tabs = [];
      for (let i = 0; i < length; i++) {
        tabs.push({ label: "\u9009\u9879" + (i + 1), name: "tab" + (i + 1) });
      }
      return tabs;
    };
    const onChange = () => {
      console.log("onChange::", active.value);
    };
    return {
      active,
      getTabs,
      onChange
    };
  }
};
pushScopeId("data-v-6b582ae2");
const _hoisted_1 = { class: "content" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h3", null, "\u57FA\u7840\u7528\u6CD5", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("h3", null, "\u9009\u9879\u5361\u6240\u5728\u4F4D\u7F6E", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("h3", null, "\u81EA\u5B9A\u4E49\u6807\u9898", -1);
popScopeId();
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_pl_tab_item = resolveComponent("pl-tab-item");
  const _component_pl_tabs = resolveComponent("pl-tabs");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    createVNode(_component_pl_tabs, {
      value: $setup.active,
      "onUpdate:value": _cache[0] || (_cache[0] = ($event) => $setup.active = $event),
      type: "card",
      onChange: $setup.onChange
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.getTabs(), (item) => {
          return openBlock(), createBlock(_component_pl_tab_item, {
            name: item.name,
            disabled: item.disabled,
            label: item.label,
            key: item.name
          }, {
            default: withCtx(() => [
              createBaseVNode("strong", null, toDisplayString($setup.active), 1),
              createBaseVNode("div", null, "\u8FD9\u91CC\u662F" + toDisplayString(item.label), 1)
            ]),
            _: 2
          }, 1032, ["name", "disabled", "label"]);
        }), 128))
      ]),
      _: 1
    }, 8, ["value", "onChange"]),
    createVNode(_component_pl_tabs, {
      value: $setup.active,
      "onUpdate:value": _cache[1] || (_cache[1] = ($event) => $setup.active = $event),
      type: "border-card",
      onChange: $setup.onChange
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.getTabs(), (item) => {
          return openBlock(), createBlock(_component_pl_tab_item, {
            name: item.name,
            disabled: item.disabled,
            label: item.label,
            key: item.name
          }, {
            default: withCtx(() => [
              createBaseVNode("strong", null, toDisplayString($setup.active), 1),
              createBaseVNode("div", null, "\u8FD9\u91CC\u662F" + toDisplayString(item.label), 1)
            ]),
            _: 2
          }, 1032, ["name", "disabled", "label"]);
        }), 128))
      ]),
      _: 1
    }, 8, ["value", "onChange"]),
    createVNode(_component_pl_tabs, {
      value: $setup.active,
      "onUpdate:value": _cache[2] || (_cache[2] = ($event) => $setup.active = $event),
      type: "button",
      onChange: $setup.onChange
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.getTabs(), (item) => {
          return openBlock(), createBlock(_component_pl_tab_item, {
            name: item.name,
            disabled: item.disabled,
            label: item.label,
            key: item.name
          }, {
            default: withCtx(() => [
              createBaseVNode("strong", null, toDisplayString($setup.active), 1),
              createBaseVNode("div", null, "\u8FD9\u91CC\u662F" + toDisplayString(item.label), 1)
            ]),
            _: 2
          }, 1032, ["name", "disabled", "label"]);
        }), 128))
      ]),
      _: 1
    }, 8, ["value", "onChange"]),
    createVNode(_component_pl_tabs, {
      value: $setup.active,
      "onUpdate:value": _cache[3] || (_cache[3] = ($event) => $setup.active = $event),
      type: "card",
      onChange: $setup.onChange
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.getTabs(10), (item) => {
          return openBlock(), createBlock(_component_pl_tab_item, {
            name: item.name,
            disabled: item.disabled,
            label: item.label,
            key: item.name
          }, {
            default: withCtx(() => [
              createBaseVNode("strong", null, toDisplayString($setup.active), 1),
              createBaseVNode("div", null, "\u8FD9\u91CC\u662F" + toDisplayString(item.label), 1)
            ]),
            _: 2
          }, 1032, ["name", "disabled", "label"]);
        }), 128))
      ]),
      _: 1
    }, 8, ["value", "onChange"]),
    _hoisted_3,
    createVNode(_component_pl_tabs, {
      value: $setup.active,
      "onUpdate:value": _cache[4] || (_cache[4] = ($event) => $setup.active = $event),
      type: "card",
      position: "top",
      onChange: $setup.onChange
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.getTabs(), (item) => {
          return openBlock(), createBlock(_component_pl_tab_item, {
            name: item.name,
            disabled: item.disabled,
            label: item.label,
            key: item.name
          }, {
            default: withCtx(() => [
              createBaseVNode("strong", null, toDisplayString($setup.active), 1),
              createBaseVNode("div", null, "\u8FD9\u91CC\u662F" + toDisplayString(item.label), 1)
            ]),
            _: 2
          }, 1032, ["name", "disabled", "label"]);
        }), 128))
      ]),
      _: 1
    }, 8, ["value", "onChange"]),
    createVNode(_component_pl_tabs, {
      value: $setup.active,
      "onUpdate:value": _cache[5] || (_cache[5] = ($event) => $setup.active = $event),
      type: "button",
      position: "right",
      onChange: $setup.onChange
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.getTabs(), (item) => {
          return openBlock(), createBlock(_component_pl_tab_item, {
            name: item.name,
            disabled: item.disabled,
            label: item.label,
            key: item.name
          }, {
            default: withCtx(() => [
              createBaseVNode("strong", null, toDisplayString($setup.active), 1),
              createBaseVNode("div", null, "\u8FD9\u91CC\u662F" + toDisplayString(item.label), 1)
            ]),
            _: 2
          }, 1032, ["name", "disabled", "label"]);
        }), 128))
      ]),
      _: 1
    }, 8, ["value", "onChange"]),
    createVNode(_component_pl_tabs, {
      value: $setup.active,
      "onUpdate:value": _cache[6] || (_cache[6] = ($event) => $setup.active = $event),
      type: "border-card",
      position: "bottom",
      onChange: $setup.onChange
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.getTabs(), (item) => {
          return openBlock(), createBlock(_component_pl_tab_item, {
            name: item.name,
            disabled: item.disabled,
            label: item.label,
            key: item.name
          }, {
            default: withCtx(() => [
              createBaseVNode("strong", null, toDisplayString($setup.active), 1),
              createBaseVNode("div", null, "\u8FD9\u91CC\u662F" + toDisplayString(item.label), 1)
            ]),
            _: 2
          }, 1032, ["name", "disabled", "label"]);
        }), 128))
      ]),
      _: 1
    }, 8, ["value", "onChange"]),
    createVNode(_component_pl_tabs, {
      value: $setup.active,
      "onUpdate:value": _cache[7] || (_cache[7] = ($event) => $setup.active = $event),
      type: "card",
      position: "left",
      onChange: $setup.onChange
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.getTabs(), (item) => {
          return openBlock(), createBlock(_component_pl_tab_item, {
            name: item.name,
            disabled: item.disabled,
            label: item.label,
            key: item.name
          }, {
            default: withCtx(() => [
              createBaseVNode("strong", null, toDisplayString($setup.active), 1),
              createBaseVNode("div", null, "\u8FD9\u91CC\u662F" + toDisplayString(item.label), 1)
            ]),
            _: 2
          }, 1032, ["name", "disabled", "label"]);
        }), 128))
      ]),
      _: 1
    }, 8, ["value", "onChange"]),
    _hoisted_4,
    createVNode(_component_pl_tabs, {
      value: $setup.active,
      "onUpdate:value": _cache[8] || (_cache[8] = ($event) => $setup.active = $event),
      type: "card"
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.getTabs(10), (item) => {
          return openBlock(), createBlock(_component_pl_tab_item, {
            name: item.name,
            disabled: item.disabled,
            key: item.name
          }, {
            title: withCtx(() => [
              createTextVNode("--" + toDisplayString(item.label) + "--", 1)
            ]),
            default: withCtx(() => [
              createBaseVNode("strong", null, toDisplayString($setup.active), 1),
              createBaseVNode("div", null, "\u8FD9\u91CC\u662F" + toDisplayString(item.label), 1)
            ]),
            _: 2
          }, 1032, ["name", "disabled"]);
        }), 128))
      ]),
      _: 1
    }, 8, ["value"])
  ]);
}
_sfc_main.render = _sfc_render;
_sfc_main.__scopeId = "data-v-6b582ae2";
export { _sfc_main as default };
