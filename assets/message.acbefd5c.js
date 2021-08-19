import _sfc_main$1 from "./swipe.efdea9dc.js";
import { g as getCurrentInstance, Q as pushScopeId, R as popScopeId, r as resolveComponent, o as openBlock, d as createElementBlock, I as createVNode, O as withCtx, C as createTextVNode } from "./vendor.f40c224e.js";
var message_vue_vue_type_style_index_0_scoped_true_lang = ".pl-button[data-v-0b53e928] {\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n";
const _sfc_main = {
  setup() {
    const app = getCurrentInstance();
    const { $alert, $confirm, $toast } = app.appContext.config.globalProperties;
    function alert() {
      $alert({
        title: "\u63D0\u793A",
        message: "\u8FD9\u4E2A\u4E00\u4E2A\u5F39\u7A97\uFF01",
        buttonText: "\u786E\u5B9A",
        action: () => {
          $toast("\u786E\u5B9A");
        }
      });
    }
    function confirm() {
      $confirm({
        title: "\u63D0\u793A",
        message: "\u8FD9\u4E2A\u4E00\u4E2A\u786E\u8BA4\u5F39\u7A97\uFF01",
        submitText: "\u786E\u5B9A",
        cancelText: "\u53D6\u6D88",
        submit: () => {
          $toast("\u786E\u5B9A");
        },
        cancel: () => {
          $toast("\u53D6\u6D88");
        }
      });
    }
    async function dialog1() {
      await $alert({
        component: _sfc_main$1,
        componentProps: {
          isMsg: true
        },
        submitText: "\u786E\u5B9A",
        cancelText: "\u53D6\u6D88"
      });
      $toast("\u786E\u5B9A");
    }
    async function dialog2() {
      try {
        await $confirm({
          component: _sfc_main$1,
          componentProps: {
            isMsg: true
          },
          submitText: "\u786E\u5B9A",
          cancelText: "\u53D6\u6D88"
        });
        $toast("\u786E\u5B9A");
      } catch (e) {
        $toast("\u53D6\u6D88");
      }
    }
    async function toast() {
      await $toast("\u6D88\u606F\u63D0\u91921", 3e3);
      await $toast("\u6D88\u606F\u63D0\u91922", 3e3);
    }
    return {
      alert,
      confirm,
      dialog1,
      dialog2,
      toast
    };
  }
};
pushScopeId("data-v-0b53e928");
const _hoisted_1 = { class: "content" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode("\u5F39\u7A97");
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u6A21\u6001\u6846");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u786E\u8BA4\u5F39\u7A97");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u786E\u8BA4\u6A21\u6001\u6846");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u6D88\u606F\u63D0\u9192");
popScopeId();
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_pl_button = resolveComponent("pl-button");
  const _component_pl_cell = resolveComponent("pl-cell");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_pl_cell, {
      span: [1, 1],
      gap: "1rem"
    }, {
      default: withCtx(() => [
        createVNode(_component_pl_button, {
          type: "primary",
          onClick: $setup.alert
        }, {
          default: withCtx(() => [
            _hoisted_2
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_pl_button, {
          type: "primary",
          onClick: $setup.dialog1
        }, {
          default: withCtx(() => [
            _hoisted_3
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      _: 1
    }),
    createVNode(_component_pl_cell, {
      span: [1, 1],
      gap: "1rem"
    }, {
      default: withCtx(() => [
        createVNode(_component_pl_button, {
          type: "primary",
          onClick: $setup.confirm
        }, {
          default: withCtx(() => [
            _hoisted_4
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_pl_button, {
          type: "primary",
          onClick: $setup.dialog2
        }, {
          default: withCtx(() => [
            _hoisted_5
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      _: 1
    }),
    createVNode(_component_pl_cell, {
      span: [1, 1],
      gap: "1rem"
    }, {
      default: withCtx(() => [
        createVNode(_component_pl_button, {
          type: "primary",
          onClick: $setup.toast
        }, {
          default: withCtx(() => [
            _hoisted_6
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      _: 1
    })
  ]);
}
_sfc_main.render = _sfc_render;
_sfc_main.__scopeId = "data-v-0b53e928";
export { _sfc_main as default };
