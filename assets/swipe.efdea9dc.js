import { g as getCurrentInstance, q as ref, Q as pushScopeId, R as popScopeId, r as resolveComponent, o as openBlock, d as createElementBlock, e as createBaseVNode, I as createVNode, O as withCtx, t as toDisplayString, l as createCommentVNode, C as createTextVNode } from "./vendor.f40c224e.js";
var swipe_vue_vue_type_style_index_0_scoped_true_lang = ".pl-swipe-item[data-v-e390345e] {\n  width: 100%;\n  height: 12rem;\n  text-align: center;\n  font-size: 56px;\n  line-height: 12rem;\n}\n.pl-swipe-item[data-v-e390345e]:nth-child(1) {\n  background-color: #f56c6c;\n}\n.pl-swipe-item[data-v-e390345e]:nth-child(2) {\n  background-color: #f5d770;\n}\n.pl-swipe-item[data-v-e390345e]:nth-child(3) {\n  background-color: #68f565;\n}\n.pl-swipe-item[data-v-e390345e]:nth-child(4) {\n  background-color: #9b6ff5;\n}\np[data-v-e390345e] {\n  text-align: center;\n}\n";
const _sfc_main = {
  props: {
    isMsg: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const app = getCurrentInstance();
    const { $loadingShow, $loadingHide, $toast } = app.appContext.config.globalProperties;
    const scrollIndex1 = ref(0);
    const scrollIndex2 = ref(0);
    const onScroll1 = (index) => {
      scrollIndex1.value = index;
    };
    const onScroll2 = (index) => {
      scrollIndex2.value = index;
    };
    const submit = () => {
      return new Promise((resolve, reject) => {
        $loadingShow("\u63D0\u4EA4\u4E2D\u3002\u3002\u3002");
        setTimeout(() => {
          resolve();
          $loadingHide();
          $toast("\u63D0\u4EA4\u6210\u529F");
        }, 2e3);
      });
    };
    const cancel = () => {
      return new Promise((resolve, reject) => {
        $loadingShow("\u53D6\u6D88\u4E2D\u3002\u3002\u3002");
        setTimeout(() => {
          reject("\u53D6\u6D88\u5931\u8D25");
          $loadingHide();
          $toast("\u53D6\u6D88\u5931\u8D25");
        }, 2e3);
      });
    };
    return {
      scrollIndex1,
      scrollIndex2,
      onScroll1,
      onScroll2,
      submit,
      cancel
    };
  }
};
pushScopeId("data-v-e390345e");
const _hoisted_1 = { class: "content" };
const _hoisted_2 = { class: "swipe-1" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("1");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("2");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("3");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("4");
const _hoisted_7 = {
  key: 0,
  class: "swipe-2"
};
const _hoisted_8 = /* @__PURE__ */ createTextVNode("1");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("2");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("3");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("4");
popScopeId();
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_pl_swipe_item = resolveComponent("pl-swipe-item");
  const _component_pl_swipe = resolveComponent("pl-swipe");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createVNode(_component_pl_swipe, {
        onScroll: $setup.onScroll1,
        auto: 2e3,
        loop: ""
      }, {
        default: withCtx(() => [
          createBaseVNode("div", null, [
            createVNode(_component_pl_swipe_item, { class: "pl-swipe-item" }, {
              default: withCtx(() => [
                _hoisted_3
              ]),
              _: 1
            }),
            createVNode(_component_pl_swipe_item, { class: "pl-swipe-item" }, {
              default: withCtx(() => [
                _hoisted_4
              ]),
              _: 1
            }),
            createVNode(_component_pl_swipe_item, { class: "pl-swipe-item" }, {
              default: withCtx(() => [
                _hoisted_5
              ]),
              _: 1
            }),
            createVNode(_component_pl_swipe_item, { class: "pl-swipe-item" }, {
              default: withCtx(() => [
                _hoisted_6
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      }, 8, ["onScroll"]),
      createBaseVNode("p", null, toDisplayString($setup.scrollIndex1 + 1) + " / 4", 1)
    ]),
    !$props.isMsg ? (openBlock(), createElementBlock("div", _hoisted_7, [
      createVNode(_component_pl_swipe, {
        onScroll: $setup.onScroll2,
        auto: 2e3,
        vertical: ""
      }, {
        default: withCtx(() => [
          createBaseVNode("div", null, [
            createVNode(_component_pl_swipe_item, { class: "pl-swipe-item" }, {
              default: withCtx(() => [
                _hoisted_8
              ]),
              _: 1
            }),
            createVNode(_component_pl_swipe_item, { class: "pl-swipe-item" }, {
              default: withCtx(() => [
                _hoisted_9
              ]),
              _: 1
            }),
            createVNode(_component_pl_swipe_item, { class: "pl-swipe-item" }, {
              default: withCtx(() => [
                _hoisted_10
              ]),
              _: 1
            }),
            createVNode(_component_pl_swipe_item, { class: "pl-swipe-item" }, {
              default: withCtx(() => [
                _hoisted_11
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      }, 8, ["onScroll"]),
      createBaseVNode("p", null, toDisplayString($setup.scrollIndex2 + 1) + " / 4", 1)
    ])) : createCommentVNode("", true)
  ]);
}
_sfc_main.render = _sfc_render;
_sfc_main.__scopeId = "data-v-e390345e";
export { _sfc_main as default };
