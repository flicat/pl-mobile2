import { q as ref, Q as pushScopeId, R as popScopeId, r as resolveComponent, o as openBlock, d as createElementBlock, e as createBaseVNode, I as createVNode, O as withCtx, F as Fragment, D as renderList, t as toDisplayString, C as createTextVNode } from "./vendor.f40c224e.js";
var list_vue_vue_type_style_index_0_scoped_true_lang = ".content[data-v-5a7bc302] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.content .title h4[data-v-5a7bc302] {\n  color: #333;\n  font-size: 1.2rem;\n  margin: 0;\n  line-height: normal;\n  padding-bottom: 1em;\n}\n.content .title h4 small[data-v-5a7bc302] {\n  margin-left: 1em;\n  color: #666;\n}\n.content .list[data-v-5a7bc302] {\n  flex: 1;\n}\n.content .card-item[data-v-5a7bc302] {\n  border: 1px solid #aaa;\n  border-radius: 0.3rem;\n  background-color: #fafafa;\n  padding: 1rem;\n  margin-bottom: 1rem;\n}\n.content .card-item p[data-v-5a7bc302] {\n  margin: 0;\n}\n.content .card-item p[data-v-5a7bc302]:nth-child(1) {\n  font-weight: 700;\n  font-size: 1.5rem;\n}\n.content .card-item p[data-v-5a7bc302]:nth-child(2) {\n  line-height: 1.5em;\n}\n.content .card-item p[data-v-5a7bc302]:nth-child(3) {\n  font-style: italic;\n  color: #666;\n}\n";
const _sfc_main = {
  setup() {
    const loading = ref(false);
    const finished = ref(false);
    const dataList = ref([]);
    let page = 1;
    let size = 10;
    let totalSize = 50;
    const reload = () => {
      page = 1;
      finished.value = false;
      getData();
    };
    const load = () => {
      if (finished.value) {
        return false;
      }
      page++;
      getData();
    };
    const getData = async () => {
      loading.value = true;
      let data = await new Promise((resolve, reject) => {
        let result = [];
        for (let i = 1; i <= size; i++) {
          let index = i + size * (page - 1);
          result.push({ label: index, value: index });
        }
        setTimeout(() => {
          resolve(result);
        }, 1e3);
      });
      if (page === 1) {
        dataList.value = data;
      } else {
        dataList.value = dataList.value.concat(data);
      }
      finished.value = dataList.value.length >= totalSize;
      loading.value = false;
    };
    reload();
    return {
      loading,
      finished,
      reload,
      load,
      dataList
    };
  }
};
pushScopeId("data-v-5a7bc302");
const _hoisted_1 = { class: "content" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "title" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, [
    /* @__PURE__ */ createTextVNode("\u6EDA\u52A8\u5217\u8868"),
    /* @__PURE__ */ createBaseVNode("small", null, "\u4E0A\u62C9\u52A0\u8F7D"),
    /* @__PURE__ */ createBaseVNode("small", null, "\u4E0B\u62C9\u5237\u65B0")
  ])
], -1);
const _hoisted_3 = { class: "list" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("p", null, "\u8FD9\u662F\u9009\u9879\u5361\u526F\u6807\u9898", -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("p", null, "\u8FD9\u662F\u9009\u9879\u5361\u5185\u5BB9\uFF0Cthis is content.", -1);
popScopeId();
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_pl_list = resolveComponent("pl-list");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    createBaseVNode("div", _hoisted_3, [
      createVNode(_component_pl_list, {
        class: "pl-list",
        autoLoad: 50,
        splitSize: 10,
        loading: $setup.loading,
        finished: $setup.finished,
        onRefresh: $setup.reload,
        onLoad: $setup.load,
        refreshText: "\u677E\u5F00\u5237\u65B0",
        loadingText: "\u52A0\u8F7D\u4E2D...",
        finishedText: "\u52A0\u8F7D\u5B8C\u6210"
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.dataList, (item) => {
            return openBlock(), createElementBlock("div", {
              key: item.value,
              class: "card-item"
            }, [
              createBaseVNode("p", null, "\u8FD9\u662F\u6807\u9898" + toDisplayString(item.label), 1),
              _hoisted_4,
              _hoisted_5
            ]);
          }), 128))
        ]),
        _: 1
      }, 8, ["loading", "finished", "onRefresh", "onLoad"])
    ])
  ]);
}
_sfc_main.render = _sfc_render;
_sfc_main.__scopeId = "data-v-5a7bc302";
export { _sfc_main as default };
