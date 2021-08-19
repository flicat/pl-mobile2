import { Q as pushScopeId, R as popScopeId, r as resolveComponent, o as openBlock, d as createElementBlock, F as Fragment, D as renderList, I as createVNode, e as createBaseVNode, t as toDisplayString } from "./vendor.f40c224e.js";
var icon_vue_vue_type_style_index_0_scoped_true_lang = ".icons[data-v-0d3f4b66] {\n  display: inline-block;\n  width: 80px;\n  height: 80px;\n  margin: 10px;\n  text-align: center;\n  vertical-align: top;\n}\n.icons .pl-icon[data-v-0d3f4b66] {\n  font-size: 1.5em;\n}\n.icons p[data-v-0d3f4b66] {\n  word-break: break-all;\n}\n";
const _sfc_main = {
  setup() {
    return {
      iconList: ["icon-dingwei", "icon-unlock", "icon-unlock_fill", "icon-lock_fill", "icon-prompt", "icon-prompt_fill", "icon-people1", "icon-people_fill", "icon-roundleftfill", "icon-icon_more_down", "icon-icon_more_up", "icon-up", "icon-down", "icon-jianhao", "icon-jia", "icon-time", "icon-time_fill", "icon-btn_choose", "icon-btn_cicle_unchoose", "icon-icon--1", "icon-icon--", "icon-icon_exit", "icon-icon_name", "icon-biyan", "icon-yanjing", "icon-unfold1", "icon-packup", "icon-search", "icon-return", "icon-enter", "icon-roundright", "icon-roundrightfill", "icon-roundclose", "icon-roundclosefill", "icon-icon_code", "icon-lock", "icon-people", "icon-shexiangtou", "icon-zhihuan", "icon-shanchu", "icon-fabu", "icon-baocun", "icon-shuaxin", "icon-fangkuai-", "icon-fangkuai", "icon-kongjianweixuan", "icon-kongjianxuanzhong", "icon-shangyibu", "icon-xiayibu", "icon-duigou", "icon-icon_zhanghao", "icon-icon_rukou", "icon-icon_loading", "icon-guanbi", "icon-jinggao"]
    };
  }
};
pushScopeId("data-v-0d3f4b66");
const _hoisted_1 = { class: "content" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h4", null, "\u9ED8\u8BA4\u52A0\u8F7D\u7684\u56FE\u6807\u5E93", -1);
popScopeId();
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_pl_icon = resolveComponent("pl-icon");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.iconList, (name) => {
      return openBlock(), createElementBlock("div", {
        class: "icons",
        key: name
      }, [
        createVNode(_component_pl_icon, { name }, null, 8, ["name"]),
        createBaseVNode("p", null, toDisplayString(name), 1)
      ]);
    }), 128))
  ]);
}
_sfc_main.render = _sfc_render;
_sfc_main.__scopeId = "data-v-0d3f4b66";
export { _sfc_main as default };
