import { Q as pushScopeId, R as popScopeId, G as reactive, q as ref, X as useRouter, r as resolveComponent, o as openBlock, c as createBlock, e as createBaseVNode, I as createVNode, x as normalizeStyle, O as withCtx, d as createElementBlock, D as renderList, t as toDisplayString, F as Fragment, T as Teleport } from "./vendor.f40c224e.js";
var floatMenu_vue_vue_type_style_index_0_scoped_true_lang = ".float-menu[data-v-81d16b20] {\n  position: fixed;\n  right: 30px;\n  top: 30px;\n  z-index: 999;\n  font-size: 1.5rem;\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n  display: flex;\n  background: #fff;\n  box-shadow: 0 0 12px inset #aaa;\n}\n.float-menu .pl-icon[data-v-81d16b20] {\n  margin: auto;\n}\n.popup[data-v-81d16b20] {\n  width: 100vw;\n  height: 100vh;\n}\n.popup .popup-content[data-v-81d16b20] {\n  width: 80vw;\n  height: 80vh;\n  background: #fff;\n  border-radius: 5px;\n  overflow: scroll;\n  padding: 15px 20px;\n}\n.popup .popup-content .link[data-v-81d16b20] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 40px;\n  align-items: center;\n  cursor: pointer;\n  color: #88c9da;\n}\n.popup .popup-content .link .pl-icon[data-v-81d16b20] {\n  margin-right: 10px;\n}\n.popup .popup-content .link span[data-v-81d16b20] {\n  text-decoration: underline;\n}\n";
const _sfc_main$1 = {
  props: {
    list: Array
  },
  setup() {
    const iconStyle = reactive([Number(window.localStorage.menuPositionX) || 0, Number(window.localStorage.menuPositionY) || 0]);
    const popupCenter = ref(null);
    const showMenu = () => {
      popupCenter.value.open();
    };
    const router = useRouter();
    const goPage = (path) => {
      router.push({ path });
      popupCenter.value.close();
    };
    let startX = 0;
    let startY = 0;
    const touchHander = (e) => {
      switch (e.type) {
        case "touchstart":
          startX = e.touches[0].clientX - iconStyle[0];
          startY = e.touches[0].clientY - iconStyle[1];
          break;
        case "touchmove":
          e.preventDefault();
          e.stopPropagation();
          iconStyle[0] = e.touches[0].clientX - startX;
          iconStyle[1] = e.touches[0].clientY - startY;
          break;
        case "touchend":
        case "touchcancel":
          window.localStorage.menuPositionX = iconStyle[0];
          window.localStorage.menuPositionY = iconStyle[1];
          break;
      }
    };
    return {
      iconStyle,
      popupCenter,
      showMenu,
      goPage,
      touchHander
    };
  }
};
pushScopeId("data-v-81d16b20");
const _hoisted_1 = { class: "popup-content" };
const _hoisted_2 = ["onClick"];
popScopeId();
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_pl_icon = resolveComponent("pl-icon");
  const _component_pl_popup = resolveComponent("pl-popup");
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    createBaseVNode("div", {
      class: "float-menu",
      style: normalizeStyle({ transform: "translate(" + $setup.iconStyle[0] + "px," + $setup.iconStyle[1] + "px)" }),
      onClick: _cache[0] || (_cache[0] = (...args) => $setup.showMenu && $setup.showMenu(...args)),
      onTouchstart: _cache[1] || (_cache[1] = (...args) => $setup.touchHander && $setup.touchHander(...args)),
      onTouchmove: _cache[2] || (_cache[2] = (...args) => $setup.touchHander && $setup.touchHander(...args)),
      onTouchend: _cache[3] || (_cache[3] = (...args) => $setup.touchHander && $setup.touchHander(...args)),
      onTouchcancel: _cache[4] || (_cache[4] = (...args) => $setup.touchHander && $setup.touchHander(...args))
    }, [
      createVNode(_component_pl_icon, {
        name: "icon-yanjing",
        fill: "#666"
      })
    ], 36),
    createVNode(_component_pl_popup, {
      position: "center",
      ref: "popupCenter",
      class: "popup"
    }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($props.list, (link) => {
            return openBlock(), createElementBlock("div", {
              class: "link",
              key: link.path
            }, [
              createVNode(_component_pl_icon, { name: "icon-roundright" }),
              createBaseVNode("span", {
                onClick: ($event) => $setup.goPage(link.path)
              }, toDisplayString(link.meta.title), 9, _hoisted_2)
            ]);
          }), 128))
        ])
      ]),
      _: 1
    }, 512)
  ]);
}
_sfc_main$1.render = _sfc_render$1;
_sfc_main$1.__scopeId = "data-v-81d16b20";
var examples_vue_vue_type_style_index_0_scoped_true_lang = "section[data-v-70023048] {\n  width: 100%;\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\nsection[data-v-70023048] .content {\n  padding: 1.2em;\n  box-sizing: border-box;\n}\n";
const _sfc_main = {
  components: {
    floatMenu: _sfc_main$1
  },
  data() {
    return {
      list: this.$router.options.routes[0].children[1].children
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = resolveComponent("router-view");
  const _component_floatMenu = resolveComponent("floatMenu");
  return openBlock(), createElementBlock("section", null, [
    createVNode(_component_router_view),
    createVNode(_component_floatMenu, { list: $data.list }, null, 8, ["list"])
  ]);
}
_sfc_main.render = _sfc_render;
_sfc_main.__scopeId = "data-v-70023048";
export { _sfc_main as default };
