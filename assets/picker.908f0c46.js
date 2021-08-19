import { g as getDateString, a as getMonthDays } from "./index.d9994bd8.js";
import { q as ref, g as getCurrentInstance, r as resolveComponent, o as openBlock, d as createElementBlock, I as createVNode, O as withCtx, C as createTextVNode, t as toDisplayString } from "./vendor.f40c224e.js";
const _sfc_main = {
  setup() {
    const result = ref([]);
    const app = getCurrentInstance();
    const { $picker } = app.appContext.config.globalProperties;
    async function picker() {
      try {
        result.value = await $picker({
          title: "\u8BF7\u9009\u62E9",
          defaultValue: result.value,
          options: [
            function() {
              return new Array(20).fill("").map((i, index) => ({ label: index + 1990 + "\u5E74", value: index + 1990 }));
            },
            function() {
              return new Array(12).fill("").map((i, index) => ({ label: index + 1 + "\u6708", value: index + 1 }));
            },
            function(year, month) {
              return new Array(getMonthDays(year, month)).fill("").map((i, index) => ({ label: index + 1 + "\u65E5", value: index + 1 }));
            }
          ],
          prop: {
            label: "label",
            value: "value",
            children: "children"
          }
        });
        console.log(result.value);
      } catch (e) {
        console.log(e);
      }
    }
    return {
      getDateString,
      result,
      picker
    };
  }
};
const _hoisted_1 = { class: "content" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_pl_button = resolveComponent("pl-button");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_pl_button, {
      onClick: $setup.picker,
      type: "primary"
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString($setup.result.length ? $setup.getDateString($setup.result.join("-"), "Y\u5E74M\u6708D\u65E5") : "\u6253\u5F00\u65E5\u671F\u9009\u62E9\u5668"), 1)
      ]),
      _: 1
    }, 8, ["onClick"])
  ]);
}
_sfc_main.render = _sfc_render;
export { _sfc_main as default };
