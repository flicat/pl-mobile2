var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { openBlock, createElementBlock, mergeProps, createElementVNode, renderSlot, createStaticVNode, h, render as render$c, toDisplayString, createBlock, resolveDynamicComponent, createCommentVNode, nextTick, markRaw, ref, computed, onMounted, withDirectives, normalizeStyle, vShow, getCurrentInstance, inject, watch, onUnmounted, resolveComponent, normalizeClass, createTextVNode, Fragment, renderList, vModelCheckbox, createVNode, reactive, Teleport, withModifiers, provide, onBeforeUnmount, toHandlers, vModelDynamic, vModelText, withCtx, defineComponent, unref, useCssVars, useSlots, watchEffect } from "vue";
var index_vue_vue_type_style_index_0_lang$o = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$v = {
  name: "plLoading",
  componentName: "plLoading",
  props: {
    vertical: Boolean
  }
};
const _hoisted_1$C = /* @__PURE__ */ createStaticVNode('<div class="loading-icon"><svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g></g></svg></div>', 1);
const _hoisted_2$y = { class: "loading-text" };
function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({ class: "pl-loading" }, _ctx.$props, {
    class: [$props.vertical ? "pl-loading-vertical" : "pl-loading-horizontal"]
  }), [
    _hoisted_1$C,
    createElementVNode("div", _hoisted_2$y, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 16);
}
var loading = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$s]]);
loading.install = function(App) {
  App.component(loading.name, loading);
  const loadingMap = /* @__PURE__ */ new WeakMap();
  const createLoadingNode = (isPart) => {
    const vNode = h({
      data() {
        return {
          vertical: true,
          isShow: false,
          text: ""
        };
      },
      render() {
        return h("div", {
          class: "loading",
          style: {
            display: "flex",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)"
          }
        }, [
          h(loading, {
            vertical: this.vertical,
            style: {
              color: "#fff",
              margin: "auto"
            }
          }, {
            default: () => this.text
          })
        ]);
      }
    });
    const vNodeDom = document.createElement("div");
    vNodeDom.style.cssText = `left: 0;top: 0;right: 0;bottom: 0;z-index: 999;position: ${isPart ? "absolute" : "fixed"}`;
    vNode.appContext = App._context;
    render$c(vNode, vNodeDom);
    return { el: vNodeDom, loading: vNode };
  };
  class LoadingClass {
    constructor({ target, isPart }) {
      __publicField(this, "isPart", false);
      __publicField(this, "target", null);
      __publicField(this, "vNodeDom", null);
      __publicField(this, "loadingCount", 0);
      this.isPart = isPart;
      this.target = target;
      this.vNodeDom = createLoadingNode(isPart);
    }
    __show({ text, vertical = true } = {}) {
      if (!this.vNodeDom || !this.target) {
        return false;
      }
      if (this.loadingCount === 0) {
        if (this.isPart) {
          this.target.classList.add("pl-loading-wrap");
        }
        this.target.appendChild(this.vNodeDom.el);
        if (!loadingMap.has(this.target)) {
          loadingMap.set(this.target, this);
        }
      }
      this.vNodeDom.loading.component.proxy.text = text;
      this.vNodeDom.loading.component.proxy.vertical = vertical;
      this.loadingCount++;
    }
    close() {
      if (!this.vNodeDom || !this.target) {
        return false;
      }
      this.loadingCount--;
      if (this.loadingCount <= 0) {
        if (this.isPart) {
          this.target.classList.remove("pl-loading-wrap");
        }
        this.target.removeChild(this.vNodeDom.el);
        loadingMap.delete(this.target);
        this.target = null;
        this.vNodeDom = null;
      }
    }
  }
  const createLoading = (options) => {
    if (loadingMap.has(options.target)) {
      return loadingMap.get(options.target);
    } else {
      const loading2 = new LoadingClass(options);
      loadingMap.set(options.target, loading2);
      return loading2;
    }
  };
  const showLoading = function({ text = "", vertical = true, target } = {}) {
    const loading2 = createLoading({
      target: target || document.body,
      isPart: target !== document.body
    });
    loading2.__show({
      text,
      vertical
    });
    return loading2;
  };
  const directiveMap = /* @__PURE__ */ new Map();
  class DirectiveLoading {
    constructor(target) {
      __publicField(this, "target", null);
      __publicField(this, "loading", null);
      __publicField(this, "argMap", /* @__PURE__ */ new Map());
      this.target = target;
    }
    createLoading(text) {
      if (this.loading) {
        this.loading.__show({ text });
      } else {
        this.loading = showLoading({
          text,
          target: this.target
        });
      }
      return this.loading;
    }
    toggle(text, isShow) {
      this.argMap.set(text, isShow);
      const currentLoading = [...this.argMap].reverse().find((item) => item[1]);
      if (currentLoading) {
        this.createLoading(currentLoading[0]);
      } else if (this.loading) {
        this.loading.loadingCount = 0;
        this.loading.close();
        this.loading = null;
      }
    }
  }
  const getDirectiveTarget = (el, arg, value) => {
    let target;
    if (directiveMap.has(el)) {
      target = directiveMap.get(el);
    } else {
      target = new DirectiveLoading(el, arg, value);
      directiveMap.set(el, target);
    }
    return target;
  };
  App.directive("loading", {
    mounted(el, { arg = "", value }) {
      let target = getDirectiveTarget(el);
      target.toggle(arg, value);
    },
    updated(el, { arg = "", value }) {
      let target = getDirectiveTarget(el);
      target.toggle(arg, value);
    }
  });
  App.config.globalProperties.$loading = showLoading;
};
var index_vue_vue_type_style_index_0_lang$n = "";
const _sfc_main$u = {
  name: "plAlert",
  componentName: "plAlert",
  props: {
    title: String,
    message: String,
    comp: Object,
    componentProps: Object,
    html: Boolean,
    buttonText: String,
    action: Function
  },
  methods: {
    async confirm() {
      await new Promise((resolve, reject) => {
        if (this.$refs.child && typeof this.$refs.child.submit === "function") {
          resolve(this.$refs.child.submit());
        } else {
          resolve();
        }
      });
      if (typeof this.action === "function") {
        await this.action();
      }
    }
  }
};
const _hoisted_1$B = { class: "pl-alert" };
const _hoisted_2$x = { class: "pl-alert-inner" };
const _hoisted_3$u = { class: "pl-alert-title" };
const _hoisted_4$j = { class: "pl-alert-content" };
const _hoisted_5$e = ["innerHTML"];
const _hoisted_6$b = { key: 2 };
function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$B, [
    createElementVNode("div", _hoisted_2$x, [
      createElementVNode("div", _hoisted_3$u, toDisplayString($props.title), 1),
      createElementVNode("div", _hoisted_4$j, [
        $props.comp ? (openBlock(), createBlock(resolveDynamicComponent($props.comp), mergeProps({
          key: 0,
          ref: "child"
        }, $props.componentProps), null, 16)) : createCommentVNode("", true),
        $props.html ? (openBlock(), createElementBlock("span", {
          key: 1,
          innerHTML: $props.message
        }, null, 8, _hoisted_5$e)) : (openBlock(), createElementBlock("span", _hoisted_6$b, toDisplayString($props.message), 1))
      ]),
      createElementVNode("div", {
        class: "pl-alert-button",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.confirm && $options.confirm(...args))
      }, toDisplayString($props.buttonText), 1)
    ])
  ]);
}
var plAlert = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$r]]);
function alert(App) {
  let vNode = h({
    render() {
      return this.display && h("div", {
        style: {
          transition: "all 0.3s ease",
          opacity: this.visible ? 1 : 0,
          position: "relative",
          zIndex: 998
        }
      }, [
        h(plAlert, {
          title: this.title,
          message: this.message,
          comp: this.comp,
          componentProps: this.componentProps,
          html: this.html,
          buttonText: this.buttonText,
          action: this.action
        })
      ]) || null;
    },
    data: function() {
      return {
        display: false,
        visible: false,
        title: "",
        message: "",
        comp: null,
        componentProps: {},
        html: false,
        buttonText: "",
        action: () => {
        }
      };
    },
    methods: {
      show() {
        this.display = true;
        nextTick(() => {
          this.visible = true;
        });
      },
      async hide() {
        await new Promise((resolve) => {
          this.visible = false;
          setTimeout(() => {
            this.display = false;
            resolve();
          }, 300);
        });
      }
    }
  });
  const vNodeDom = document.createElement("div");
  document.body.appendChild(vNodeDom);
  vNode.appContext = App._context;
  render$c(vNode, vNodeDom);
  App.config.globalProperties.$alert = async function({ title, message, component, componentProps, html, buttonText, action }) {
    vNode.component.proxy.title = title || "";
    vNode.component.proxy.comp = component ? markRaw(component) : null;
    vNode.component.proxy.componentProps = componentProps || {};
    vNode.component.proxy.html = !!html && !component;
    vNode.component.proxy.message = !component && message || "";
    vNode.component.proxy.buttonText = buttonText || "\u597D";
    vNode.component.proxy.action = action || null;
    vNode.component.proxy.show();
    return new Promise((resolve, reject) => {
      vNode.component.proxy.action = async () => {
        await vNode.component.proxy.hide();
        resolve(typeof action === "function" ? action() : null);
      };
    });
  };
}
var index_vue_vue_type_style_index_0_lang$m = "";
const _sfc_main$t = {
  name: "plConfirm",
  componentName: "plConfirm",
  props: {
    title: String,
    message: String,
    html: Boolean,
    comp: Object,
    componentProps: Object,
    submitText: String,
    cancelText: String,
    submit: Function,
    cancel: Function
  },
  setup(props) {
    const child = ref(null);
    const onSubmit = async () => {
      await new Promise((resolve, reject) => {
        if (child.value && typeof child.value.submit === "function") {
          resolve(child.value.submit());
        } else {
          resolve();
        }
      });
      if (typeof props.submit === "function") {
        await props.submit();
      }
    };
    const onCancel = async () => {
      await new Promise((resolve, reject) => {
        if (child.value && typeof child.value.cancel === "function") {
          resolve(child.value.cancel());
        } else {
          resolve();
        }
      });
      if (typeof props.cancel === "function") {
        await props.cancel();
      }
    };
    return {
      child,
      onSubmit,
      onCancel
    };
  }
};
const _hoisted_1$A = { class: "pl-confirm" };
const _hoisted_2$w = { class: "pl-confirm-inner" };
const _hoisted_3$t = { class: "pl-confirm-title" };
const _hoisted_4$i = { class: "pl-confirm-content" };
const _hoisted_5$d = ["innerHTML"];
const _hoisted_6$a = { key: 2 };
const _hoisted_7$a = { class: "pl-confirm-button-wrap" };
function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$A, [
    createElementVNode("div", _hoisted_2$w, [
      createElementVNode("div", _hoisted_3$t, toDisplayString($props.title), 1),
      createElementVNode("div", _hoisted_4$i, [
        $props.comp ? (openBlock(), createBlock(resolveDynamicComponent($props.comp), mergeProps({
          key: 0,
          ref: "child"
        }, $props.componentProps), null, 16)) : createCommentVNode("", true),
        $props.html ? (openBlock(), createElementBlock("span", {
          key: 1,
          innerHTML: $props.message
        }, null, 8, _hoisted_5$d)) : (openBlock(), createElementBlock("span", _hoisted_6$a, toDisplayString($props.message), 1))
      ]),
      createElementVNode("div", _hoisted_7$a, [
        createElementVNode("div", {
          class: "pl-confirm-button-cancel",
          onClick: _cache[0] || (_cache[0] = (...args) => $setup.onCancel && $setup.onCancel(...args))
        }, toDisplayString($props.cancelText), 1),
        createElementVNode("div", {
          class: "pl-confirm-button-submit",
          onClick: _cache[1] || (_cache[1] = (...args) => $setup.onSubmit && $setup.onSubmit(...args))
        }, toDisplayString($props.submitText), 1)
      ])
    ])
  ]);
}
var plConfirm = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$q]]);
function confirm(App) {
  let vNode = h({
    render() {
      return this.display && h("div", {
        style: {
          transition: "all 0.3s ease",
          opacity: this.visible ? 1 : 0,
          position: "relative",
          zIndex: 998
        }
      }, [
        h(plConfirm, {
          title: this.title,
          message: this.message,
          html: this.html,
          comp: this.comp,
          componentProps: this.componentProps,
          submitText: this.submitText,
          cancelText: this.cancelText,
          submit: this.submit,
          cancel: this.cancel
        })
      ]) || null;
    },
    data() {
      return {
        display: false,
        visible: false,
        title: "",
        message: "",
        html: false,
        comp: null,
        componentProps: {},
        submitText: "",
        cancelText: "",
        submit: () => {
        },
        cancel: () => {
        }
      };
    },
    methods: {
      show() {
        this.display = true;
        nextTick(() => {
          this.visible = true;
        });
      },
      async hide() {
        await new Promise((resolve) => {
          this.visible = false;
          setTimeout(() => {
            this.display = false;
            resolve();
          }, 300);
        });
      }
    }
  });
  const vNodeDom = document.createElement("div");
  document.body.appendChild(vNodeDom);
  vNode.appContext = App._context;
  render$c(vNode, vNodeDom);
  App.config.globalProperties.$confirm = async function({ title, message, component, componentProps, html, submitText, cancelText, submit, cancel }) {
    vNode.component.proxy.comp = component ? markRaw(component) : null;
    vNode.component.proxy.componentProps = componentProps || {};
    vNode.component.proxy.html = !!html && !component;
    vNode.component.proxy.message = !component && message || "";
    vNode.component.proxy.title = title || "";
    vNode.component.proxy.submitText = submitText || "\u786E\u8BA4";
    vNode.component.proxy.cancelText = cancelText || "\u53D6\u6D88";
    vNode.component.proxy.show();
    return new Promise((resolve, reject) => {
      vNode.component.proxy.submit = async () => {
        await vNode.component.proxy.hide();
        typeof submit === "function" ? submit() : resolve();
      };
      vNode.component.proxy.cancel = async () => {
        await vNode.component.proxy.hide();
        typeof cancel === "function" ? cancel() : reject();
      };
    });
  };
}
var index_vue_vue_type_style_index_0_lang$l = "";
const _sfc_main$s = {
  name: "plToast",
  componentName: "plToast",
  props: {
    html: Boolean,
    text: String
  }
};
const _hoisted_1$z = { class: "pl-toast" };
const _hoisted_2$v = ["innerHTML"];
const _hoisted_3$s = { key: 1 };
function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$z, [
    $props.html ? (openBlock(), createElementBlock("span", {
      key: 0,
      innerHTML: $props.text
    }, null, 8, _hoisted_2$v)) : (openBlock(), createElementBlock("span", _hoisted_3$s, toDisplayString($props.text), 1))
  ]);
}
var plToast = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$p]]);
function toast(App) {
  let vNode = h({
    render() {
      return this.display && h("div", {
        style: {
          transition: "all 0.3s ease",
          opacity: this.visible ? 1 : 0,
          position: "relative",
          zIndex: 998
        }
      }, [
        h(plToast, {
          text: this.text,
          html: this.html
        })
      ]) || null;
    },
    data: function() {
      return {
        display: false,
        visible: false,
        timer: null,
        html: false,
        text: ""
      };
    },
    methods: {
      show() {
        this.display = true;
        nextTick(() => {
          this.visible = true;
        });
      },
      async hide() {
        await new Promise((resolve) => {
          this.visible = false;
          setTimeout(() => {
            this.display = false;
            resolve();
          }, 300);
        });
      }
    }
  });
  const vNodeDom = document.createElement("div");
  document.body.appendChild(vNodeDom);
  vNode.appContext = App._context;
  render$c(vNode, vNodeDom);
  App.config.globalProperties.$toast = async function(text, duration, html = false) {
    vNode.component.proxy.text = text;
    vNode.component.proxy.html = html;
    vNode.component.proxy.show();
    duration |= 0;
    if (!duration || !/\d+/.test(duration)) {
      duration = 3e3;
    }
    return new Promise((resolve, reject) => {
      clearTimeout(vNode.component.proxy.timer);
      vNode.component.proxy.timer = setTimeout(async () => {
        await vNode.component.proxy.hide();
        resolve();
      }, duration);
    });
  };
}
var index_vue_vue_type_style_index_0_lang$k = "";
const _sfc_main$r = {
  name: "plButton",
  componentName: "plButton",
  props: {
    size: {
      type: String,
      default: "normal"
    },
    type: {
      type: String,
      default: "default"
    },
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    disabled: Boolean
  }
};
const _hoisted_1$y = ["disabled"];
function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", mergeProps(_ctx.$attrs, {
    class: ["pl-button", [
      $props.type ? "pl-button--" + $props.type : "",
      $props.size ? "pl-button--" + $props.size : "",
      {
        "is-disabled": $props.disabled,
        "is-plain": $props.plain,
        "is-round": $props.round,
        "is-circle": $props.circle
      }
    ]],
    disabled: $props.disabled
  }), [
    renderSlot(_ctx.$slots, "default")
  ], 16, _hoisted_1$y);
}
var Button = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$o]]);
Button.install = function(App) {
  App.component(Button.name, Button);
};
var index_vue_vue_type_style_index_0_lang$j = "";
const _sfc_main$q = {
  name: "plCanvas",
  componentName: "plCanvas",
  props: {
    size: {
      type: Number,
      default: 14
    },
    orientation: {
      type: String,
      default: "top"
    },
    penId: {
      type: Number,
      default: 0
    },
    fillStyle: {
      type: String
    }
  },
  setup(props, context) {
    let canvas = ref(null);
    let wrap = ref(null);
    let penSize = props.size;
    let pointArr = [];
    let writeFlag = false;
    let startPoint = {};
    let context2D = null;
    let clientRect = null;
    let showPlaceholder = ref(true);
    let penImgList = computed(() => {
      return [
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABLUExURUxpcQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADFVjQ0AAAAYdFJOUwDNi6oneUH3CrblTzCSHsfYOlpfvphlGd7l5lMAAACySURBVCjPjZNZEsMgDEMhgZgQsi/1/U/a6UAJi51Wv28QwhZC/NAyt3pzhsMSPwJ57hOFW4xaxq7CDaayo8rxhoX6zMJhpT5xMFBz0GX00iC+9KQwzobL5nUE/KIxfu9faAwTNZhbo8crg21wtwx3z+6Dx4rBV3DvabyLx3BxdeRxiHNXQK3lXpvmg5eVC5Jpacxc3pyXzuTxYCg7q5N8h6orPzV++tB2zJ9xw7WvRvypNzPMLyiDuR4wAAAAAElFTkSuQmCC",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURUxpcQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD94JoQAAAAcdFJOUwDlxND2AxkS7/snrnEKYoWXOC7cTkIfkaeLU7nauEdWAAAAyklEQVQoz72Txw7DIBBEl2IWA6a4F/7/OxORKI4LnKKMuD20DMwA8CdVAE0GoWptb6xZ+wEQqwNr0HjWySifq5PMT2ur9h3CUhkP4lR726aTquBlHS/ihDobAAK9gUl1R0HMsSAwvIhpiRIgBcoXqAtYt1Cg8nmvPO0cFDBxooTdCHnMNaY8Ms4n9YpL3nrW4p3mxO9cqU/Y+jKeGNyrEthpMBsOjcP5+93ZMp4KqsyWDNaRsGWoLjVtVO/pvGlnBWYajqNo8Mcf5wEUtTUhHrorsgAAAABJRU5ErkJggg=="
      ].map((src) => {
        let img = new Image();
        img.src = src;
        return img;
      });
    });
    let penImg = computed(() => {
      return penImgList.value[props.penId] || penImgList.value[0];
    });
    let rotate = computed(() => {
      return {
        top: 0,
        right: 90,
        bottom: 180,
        left: 270
      }[props.orientation];
    });
    let placeholderStyle = computed(() => {
      let style = {
        transform: "translate(-50%, -50%) rotate(" + rotate.value + "deg)",
        webkitTransform: "translate(-50%, -50%) rotate(" + rotate.value + "deg)"
      };
      if (canvas.value && /^(left|right)$/.test(props.orientation)) {
        style.width = canvas.value.height + "px";
        style.height = canvas.value.width + "px";
      }
      return style;
    });
    function handlerStart(e) {
      writeFlag = true;
      clientRect = canvas.value.getBoundingClientRect();
      startPoint = getPointPosition(e);
      let x1 = startPoint.x;
      let y1 = startPoint.y;
      pointArr.unshift({ x1, y1 });
      showPlaceholder.value = false;
      context.emit("drawStart");
    }
    function handlerMove(e) {
      if (!writeFlag) {
        return false;
      }
      e.preventDefault();
      let currentPoint = getPointPosition(e);
      let prevStartPoint = startPoint;
      startPoint = currentPoint;
      let len = Math.round(distance(prevStartPoint, currentPoint) / 2) + 1;
      for (let i = 0; i < len; i++) {
        let x = prevStartPoint.x + (currentPoint.x - prevStartPoint.x) / len * i - penSize / 2;
        let y = prevStartPoint.y + (currentPoint.y - prevStartPoint.y) / len * i - penSize / 2;
        context2D.beginPath();
        pointArr.unshift({ x, y });
        context2D.drawImage(penImg.value, x, y, penSize, penSize);
        penSize = penSize - 0.2;
        if (penSize < props.size / 2) {
          penSize = Math.ceil(props.size / 2);
        }
      }
      context.emit("drawing");
    }
    function handlerEnd() {
      writeFlag = false;
      penSize = props.size;
      if (pointArr.length > 100) {
        for (let i = 0; i < 60; i++) {
          pointArr[i].x = pointArr[i].x - penSize / 4;
          pointArr[i].y = pointArr[i].y - penSize / 4;
          context2D.drawImage(penImg.value, pointArr[i].x, pointArr[i].y, penSize, penSize);
          penSize = penSize - 0.3;
          if (penSize < props.size / 4) {
            penSize = Math.ceil(props.size / 4);
          }
        }
        penSize = props.size;
        pointArr.length = 0;
      }
      if (pointArr.length === 1) {
        context2D.drawImage(penImg.value, pointArr[0].x1 - penSize / 2, pointArr[0].y1 - penSize / 2, penSize, penSize);
        pointArr.length = 0;
      }
      context.emit("drawEnd");
    }
    function getPointPosition(e) {
      let x = e.clientX || e.touches[0].clientX;
      let y = e.clientY || e.touches[0].clientY;
      return {
        x: x - clientRect.left,
        y: y - clientRect.top
      };
    }
    function distance(startPoint2, currentPoint) {
      let x = currentPoint.x - startPoint2.x;
      let y = currentPoint.y - startPoint2.y;
      return Math.sqrt(x * x + y * y);
    }
    function clear() {
      context2D.clearRect(0, 0, canvas.value.width, canvas.value.height);
      if (props.fillStyle) {
        context2D.fillStyle = props.fillStyle;
        context2D.fillRect(0, 0, canvas.value.width, canvas.value.height);
      }
      showPlaceholder.value = true;
      context.emit("clear");
    }
    function dataURLtoBlob(dataUrl) {
      let arr = dataUrl.split(","), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], { type: mime });
    }
    function setImgOrientation() {
      if (props.orientation === "top") {
        return canvas.value;
      }
      let tempCanvas = document.createElement("canvas");
      if (/^(left|right)$/.test(props.orientation)) {
        tempCanvas.width = canvas.value.height;
        tempCanvas.height = canvas.value.width;
      } else {
        tempCanvas.width = canvas.value.width;
        tempCanvas.height = canvas.value.height;
      }
      let context2 = tempCanvas.getContext("2d");
      let drawX = { right: 0, bottom: tempCanvas.width, left: tempCanvas.width }[props.orientation];
      let drawY = { right: tempCanvas.height, bottom: tempCanvas.height, left: 0 }[props.orientation];
      context2.translate(drawX, drawY);
      context2.rotate(-rotate.value * Math.PI / 180);
      context2.drawImage(canvas.value, 0, 0);
      return tempCanvas;
    }
    function getImageDataUrl(type2, encoderOptions) {
      return setImgOrientation().toDataURL(type2, encoderOptions);
    }
    function getImageBlob(type2, encoderOptions) {
      return dataURLtoBlob(getImageDataUrl(type2, encoderOptions));
    }
    onMounted(() => {
      canvas.value.width = wrap.value.clientWidth;
      canvas.value.height = wrap.value.clientHeight;
      context2D = canvas.value.getContext("2d");
      clear();
    });
    return {
      canvas,
      wrap,
      clear,
      getImageDataUrl,
      getImageBlob,
      handlerStart,
      handlerMove,
      handlerEnd,
      handlerEnd,
      showPlaceholder,
      placeholderStyle
    };
  }
};
const _hoisted_1$x = {
  class: "pl-canvas",
  ref: "wrap"
};
function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$x, [
    createElementVNode("canvas", mergeProps({ ref: "canvas" }, _ctx.$attrs, {
      onTouchstart: _cache[0] || (_cache[0] = (...args) => $setup.handlerStart && $setup.handlerStart(...args)),
      onTouchmove: _cache[1] || (_cache[1] = (...args) => $setup.handlerMove && $setup.handlerMove(...args)),
      onTouchend: _cache[2] || (_cache[2] = (...args) => $setup.handlerEnd && $setup.handlerEnd(...args)),
      onTouchcancel: _cache[3] || (_cache[3] = (...args) => $setup.handlerEnd && $setup.handlerEnd(...args))
    }), null, 16),
    withDirectives(createElementVNode("div", {
      class: "placeholder",
      style: normalizeStyle($setup.placeholderStyle)
    }, [
      renderSlot(_ctx.$slots, "placeholder")
    ], 4), [
      [vShow, $setup.showPlaceholder]
    ])
  ], 512);
}
var Canvas = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$n]]);
Canvas.install = function(App) {
  App.component(Canvas.name, Canvas);
};
function getDateFromString(dateStr) {
  let date3 = null;
  if (dateStr instanceof Date) {
    date3 = new Date(dateStr);
  } else if (/^(string|number)$/.test(typeof dateStr)) {
    let matchDate = /(\d{4})([年/-])(\d{1,2})(月|\2)(\d{1,2})/.exec(dateStr);
    if (matchDate) {
      date3 = new Date([matchDate[1], matchDate[3], matchDate[5]].join("/"));
      let matchTime = /\d{1,2}(:\d{1,2}){1,2}/.exec(dateStr);
      if (!!date3.getTime() && matchTime && matchTime[0]) {
        date3.setHours.apply(date3, matchTime[0].split(":"));
      }
    } else {
      if (/^\d+$/.test(dateStr)) {
        dateStr -= 0;
      }
      date3 = new Date(dateStr);
    }
  }
  return String(date3) === "Invalid Date" ? null : date3;
}
function getDateString(date3, format2 = "Y-M-D") {
  date3 = getDateFromString(date3);
  if (!date3) {
    return "";
  }
  let padStr = function(str) {
    return String(str).padStart(2, "0");
  };
  let weeks = ["\u5468\u65E5", "\u5468\u4E00", "\u5468\u4E8C", "\u5468\u4E09", "\u5468\u56DB", "\u5468\u4E94", "\u5468\u516D"];
  let weeks2 = ["\u661F\u671F\u65E5", "\u661F\u671F\u4E00", "\u661F\u671F\u4E8C", "\u661F\u671F\u4E09", "\u661F\u671F\u56DB", "\u661F\u671F\u4E94", "\u661F\u671F\u516D"];
  if (date3.toString() !== "Invalid Date") {
    let year = date3.getFullYear();
    let month = date3.getMonth() + 1;
    let day = date3.getDate();
    let week = date3.getDay();
    let hours = date3.getHours();
    let minutes = date3.getMinutes();
    let seconds = date3.getSeconds();
    return format2.replace(/y+/ig, year).replace(/m+/g, month).replace(/d+/g, day).replace(/M+/g, padStr(month)).replace(/D+/g, padStr(day)).replace(/h+/g, hours).replace(/i+/g, minutes).replace(/s+/g, seconds).replace(/H+/g, padStr(hours)).replace(/I+/g, padStr(minutes)).replace(/S+/g, padStr(seconds)).replace(/w+/g, weeks[week]).replace(/W+/g, weeks2[week]);
  } else {
    return "";
  }
}
function getMonthDays(yy, mm) {
  yy = Number(yy);
  mm = Number(mm);
  let getCheckYear = function(yy2) {
    return yy2 % 100 === 0 ? yy2 % 400 === 0 : yy2 % 4 === 0;
  };
  if (getCheckYear(yy) && mm === 2) {
    return 29;
  }
  if (!getCheckYear(yy) && mm === 2) {
    return 28;
  }
  if (mm === 4 || mm === 6 || mm === 9 || mm === 11) {
    return 30;
  }
  return 31;
}
function getMonthDiff(date1, date22) {
  let _date1 = getDateFromString(date1);
  let _date2 = getDateFromString(date22);
  let year1 = _date1.getFullYear();
  let month1 = _date1.getMonth();
  let year2 = _date2.getFullYear();
  let month2 = _date2.getMonth();
  let diff;
  if (year1 === year2) {
    diff = month2 - month1;
  } else {
    diff = (year2 - year1) * 12 + month2 - month1;
  }
  return diff;
}
function getType(target) {
  return Object.prototype.toString.call(target).match(/\[object (\w+)\]/)[1].toLowerCase();
}
function is(target, ...type2) {
  let typeString = getType(target);
  return type2.indexOf(typeString) > -1;
}
function nullish(...args) {
  for (let value of args) {
    if (!is(value, "null", "undefined")) {
      return value;
    }
  }
}
var index_vue_vue_type_style_index_0_lang$i = "";
const _sfc_main$p = {
  name: "plCell",
  componentName: "plCell",
  props: {
    direction: {
      type: String,
      default: "row"
    },
    span: Array,
    gap: String,
    justifyItems: {
      type: String,
      default: "normal"
    },
    alignItems: {
      type: String,
      default: "center"
    },
    justifyContent: {
      type: String,
      default: "normal"
    },
    alignContent: {
      type: String,
      default: "normal"
    }
  },
  setup(props) {
    const templates = computed(() => {
      if (props.span && props.span.length) {
        return props.span.filter((item) => item && (is(item, "string") || is(item, "number"))).map((item) => {
          if (is(item, "number")) {
            return item + "fr";
          } else {
            return item;
          }
        }).join(" ");
      }
      return null;
    });
    const rowStyle = computed(() => {
      return {
        ...templates.value ? { [props.direction === "row" ? "grid-template-columns" : "grid-template-rows"]: templates.value } : null,
        ...props.gap ? { "gap": props.gap } : null,
        ...props.justifyItems ? { "justify-items": props.justifyItems } : null,
        ...props.alignItems ? { "align-items": props.alignItems } : null,
        ...props.justifyContent ? { "justify-content": props.justifyContent } : null,
        ...props.alignContent ? { "align-content": props.alignContent } : null
      };
    });
    return {
      rowStyle
    };
  }
};
function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps(_ctx.$attrs, {
    class: ["pl-cell", "pl-cell-" + $props.direction],
    style: $setup.rowStyle
  }), [
    renderSlot(_ctx.$slots, "default")
  ], 16);
}
var Cell = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$m]]);
Cell.install = function(App) {
  App.component(Cell.name, Cell);
};
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a = [null];
      a.push.apply(a, args2);
      var Constructor = Function.bind.apply(Parent2, a);
      var instance = new Constructor();
      if (Class2)
        _setPrototypeOf(instance, Class2.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
  _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
    if (Class2 === null || !_isNativeFunction(Class2))
      return Class2;
    if (typeof Class2 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class2))
        return _cache.get(Class2);
      _cache.set(Class2, Wrapper);
    }
    function Wrapper() {
      return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class2.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class2);
  };
  return _wrapNativeSuper(Class);
}
var formatRegExp = /%[sdj%]/g;
var warning = function warning2() {
};
if (typeof process !== "undefined" && process.env && false) {
  warning = function warning3(type2, errors) {
    if (typeof console !== "undefined" && console.warn) {
      if (errors.every(function(e) {
        return typeof e === "string";
      })) {
        console.warn(type2, errors);
      }
    }
  };
}
function convertFieldsError(errors) {
  if (!errors || !errors.length)
    return null;
  var fields = {};
  errors.forEach(function(error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}
function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var i = 1;
  var f = args[0];
  var len = args.length;
  if (typeof f === "function") {
    return f.apply(null, args.slice(1));
  }
  if (typeof f === "string") {
    var str = String(f).replace(formatRegExp, function(x) {
      if (x === "%%") {
        return "%";
      }
      if (i >= len) {
        return x;
      }
      switch (x) {
        case "%s":
          return String(args[i++]);
        case "%d":
          return Number(args[i++]);
        case "%j":
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return "[Circular]";
          }
          break;
        default:
          return x;
      }
    });
    return str;
  }
  return f;
}
function isNativeStringType(type2) {
  return type2 === "string" || type2 === "url" || type2 === "hex" || type2 === "email" || type2 === "date" || type2 === "pattern";
}
function isEmptyValue(value, type2) {
  if (value === void 0 || value === null) {
    return true;
  }
  if (type2 === "array" && Array.isArray(value) && !value.length) {
    return true;
  }
  if (isNativeStringType(type2) && typeof value === "string" && !value) {
    return true;
  }
  return false;
}
function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;
  function count(errors) {
    results.push.apply(results, errors);
    total++;
    if (total === arrLength) {
      callback(results);
    }
  }
  arr.forEach(function(a) {
    func(a, count);
  });
}
function asyncSerialArray(arr, func, callback) {
  var index2 = 0;
  var arrLength = arr.length;
  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }
    var original = index2;
    index2 = index2 + 1;
    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }
  next([]);
}
function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function(k) {
    ret.push.apply(ret, objArr[k]);
  });
  return ret;
}
var AsyncValidationError = /* @__PURE__ */ function(_Error) {
  _inheritsLoose(AsyncValidationError2, _Error);
  function AsyncValidationError2(errors, fields) {
    var _this;
    _this = _Error.call(this, "Async Validation Error") || this;
    _this.errors = errors;
    _this.fields = fields;
    return _this;
  }
  return AsyncValidationError2;
}(/* @__PURE__ */ _wrapNativeSuper(Error));
function asyncMap(objArr, option, func, callback) {
  if (option.first) {
    var _pending = new Promise(function(resolve, reject) {
      var next = function next2(errors) {
        callback(errors);
        return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve();
      };
      var flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });
    _pending["catch"](function(e) {
      return e;
    });
    return _pending;
  }
  var firstFields = option.firstFields || [];
  if (firstFields === true) {
    firstFields = Object.keys(objArr);
  }
  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function(resolve, reject) {
    var next = function next2(errors) {
      results.push.apply(results, errors);
      total++;
      if (total === objArrLength) {
        callback(results);
        return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve();
      }
    };
    if (!objArrKeys.length) {
      callback(results);
      resolve();
    }
    objArrKeys.forEach(function(key) {
      var arr = objArr[key];
      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending["catch"](function(e) {
    return e;
  });
  return pending;
}
function complementError(rule) {
  return function(oe) {
    if (oe && oe.message) {
      oe.field = oe.field || rule.fullField;
      return oe;
    }
    return {
      message: typeof oe === "function" ? oe() : oe,
      field: oe.field || rule.fullField
    };
  };
}
function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];
        if (typeof value === "object" && typeof target[s] === "object") {
          target[s] = _extends({}, target[s], value);
        } else {
          target[s] = value;
        }
      }
    }
  }
  return target;
}
function required(rule, value, source, errors, options, type2) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type2 || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
}
function whitespace(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === "") {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
}
var pattern = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", "i"),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  "float": function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }
    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === "function" && typeof value.getMonth === "function" && typeof value.getYear === "function" && !isNaN(value.getTime());
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }
    return typeof value === "number";
  },
  object: function object(value) {
    return typeof value === "object" && !types.array(value);
  },
  method: function method(value) {
    return typeof value === "function";
  },
  email: function email(value) {
    return typeof value === "string" && !!value.match(pattern.email) && value.length < 255;
  },
  url: function url(value) {
    return typeof value === "string" && !!value.match(pattern.url);
  },
  hex: function hex(value) {
    return typeof value === "string" && !!value.match(pattern.hex);
  }
};
function type(rule, value, source, errors, options) {
  if (rule.required && value === void 0) {
    required(rule, value, source, errors, options);
    return;
  }
  var custom = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"];
  var ruleType = rule.type;
  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    }
  } else if (ruleType && typeof value !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
}
function range(rule, value, source, errors, options) {
  var len = typeof rule.len === "number";
  var min = typeof rule.min === "number";
  var max = typeof rule.max === "number";
  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === "number";
  var str = typeof value === "string";
  var arr = Array.isArray(value);
  if (num) {
    key = "number";
  } else if (str) {
    key = "string";
  } else if (arr) {
    key = "array";
  }
  if (!key) {
    return false;
  }
  if (arr) {
    val = value.length;
  }
  if (str) {
    val = value.replace(spRegexp, "_").length;
  }
  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
}
var ENUM = "enum";
function enumerable(rule, value, source, errors, options) {
  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
  if (rule[ENUM].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM], rule.fullField, rule[ENUM].join(", ")));
  }
}
function pattern$1(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      rule.pattern.lastIndex = 0;
      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === "string") {
      var _pattern = new RegExp(rule.pattern);
      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
}
var rules = {
  required,
  whitespace,
  type,
  range,
  "enum": enumerable,
  pattern: pattern$1
};
function string(rule, value, callback, source, options) {
  var errors = [];
  var validate3 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate3) {
    if (isEmptyValue(value, "string") && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, "string");
    if (!isEmptyValue(value, "string")) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
      rules.pattern(rule, value, source, errors, options);
      if (rule.whitespace === true) {
        rules.whitespace(rule, value, source, errors, options);
      }
    }
  }
  callback(errors);
}
function method2(rule, value, callback, source, options) {
  var errors = [];
  var validate3 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate3) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}
function number2(rule, value, callback, source, options) {
  var errors = [];
  var validate3 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate3) {
    if (value === "") {
      value = void 0;
    }
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}
function _boolean(rule, value, callback, source, options) {
  var errors = [];
  var validate3 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate3) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}
function regexp2(rule, value, callback, source, options) {
  var errors = [];
  var validate3 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate3) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}
function integer2(rule, value, callback, source, options) {
  var errors = [];
  var validate3 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate3) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}
function floatFn(rule, value, callback, source, options) {
  var errors = [];
  var validate3 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate3) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}
function array2(rule, value, callback, source, options) {
  var errors = [];
  var validate3 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate3) {
    if ((value === void 0 || value === null) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, "array");
    if (value !== void 0 && value !== null) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}
function object2(rule, value, callback, source, options) {
  var errors = [];
  var validate3 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate3) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}
var ENUM$1 = "enum";
function enumerable$1(rule, value, callback, source, options) {
  var errors = [];
  var validate3 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate3) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules[ENUM$1](rule, value, source, errors, options);
    }
  }
  callback(errors);
}
function pattern$2(rule, value, callback, source, options) {
  var errors = [];
  var validate3 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate3) {
    if (isEmptyValue(value, "string") && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value, "string")) {
      rules.pattern(rule, value, source, errors, options);
    }
  }
  callback(errors);
}
function date2(rule, value, callback, source, options) {
  var errors = [];
  var validate3 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate3) {
    if (isEmptyValue(value, "date") && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value, "date")) {
      var dateObject;
      if (value instanceof Date) {
        dateObject = value;
      } else {
        dateObject = new Date(value);
      }
      rules.type(rule, dateObject, source, errors, options);
      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }
  callback(errors);
}
function required$1(rule, value, callback, source, options) {
  var errors = [];
  var type2 = Array.isArray(value) ? "array" : typeof value;
  rules.required(rule, value, source, errors, options, type2);
  callback(errors);
}
function type$1(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate3 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate3) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, ruleType);
    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}
function any(rule, value, callback, source, options) {
  var errors = [];
  var validate3 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate3) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
  }
  callback(errors);
}
var validators = {
  string,
  method: method2,
  number: number2,
  "boolean": _boolean,
  regexp: regexp2,
  integer: integer2,
  "float": floatFn,
  array: array2,
  object: object2,
  "enum": enumerable$1,
  pattern: pattern$2,
  date: date2,
  url: type$1,
  hex: type$1,
  email: type$1,
  required: required$1,
  any
};
function newMessages() {
  return {
    "default": "Validation error on field %s",
    required: "%s is required",
    "enum": "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      "boolean": "%s is not a %s",
      integer: "%s is not an %s",
      "float": "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}
var messages = newMessages();
function Schema(descriptor) {
  this.rules = null;
  this._messages = messages;
  this.define(descriptor);
}
Schema.prototype = {
  messages: function messages2(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }
    return this._messages;
  },
  define: function define(rules2) {
    if (!rules2) {
      throw new Error("Cannot configure a schema with no rules");
    }
    if (typeof rules2 !== "object" || Array.isArray(rules2)) {
      throw new Error("Rules must be an object");
    }
    this.rules = {};
    var z;
    var item;
    for (z in rules2) {
      if (rules2.hasOwnProperty(z)) {
        item = rules2[z];
        this.rules[z] = Array.isArray(item) ? item : [item];
      }
    }
  },
  validate: function validate(source_, o, oc) {
    var _this = this;
    if (o === void 0) {
      o = {};
    }
    if (oc === void 0) {
      oc = function oc2() {
      };
    }
    var source = source_;
    var options = o;
    var callback = oc;
    if (typeof options === "function") {
      callback = options;
      options = {};
    }
    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback();
      }
      return Promise.resolve();
    }
    function complete(results) {
      var i;
      var errors = [];
      var fields = {};
      function add(e) {
        if (Array.isArray(e)) {
          var _errors;
          errors = (_errors = errors).concat.apply(_errors, e);
        } else {
          errors.push(e);
        }
      }
      for (i = 0; i < results.length; i++) {
        add(results[i]);
      }
      if (!errors.length) {
        errors = null;
        fields = null;
      } else {
        fields = convertFieldsError(errors);
      }
      callback(errors, fields);
    }
    if (options.messages) {
      var messages$1 = this.messages();
      if (messages$1 === messages) {
        messages$1 = newMessages();
      }
      deepMerge(messages$1, options.messages);
      options.messages = messages$1;
    } else {
      options.messages = this.messages();
    }
    var arr;
    var value;
    var series = {};
    var keys = options.keys || Object.keys(this.rules);
    keys.forEach(function(z) {
      arr = _this.rules[z];
      value = source[z];
      arr.forEach(function(r) {
        var rule = r;
        if (typeof rule.transform === "function") {
          if (source === source_) {
            source = _extends({}, source);
          }
          value = source[z] = rule.transform(value);
        }
        if (typeof rule === "function") {
          rule = {
            validator: rule
          };
        } else {
          rule = _extends({}, rule);
        }
        rule.validator = _this.getValidationMethod(rule);
        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this.getType(rule);
        if (!rule.validator) {
          return;
        }
        series[z] = series[z] || [];
        series[z].push({
          rule,
          value,
          source,
          field: z
        });
      });
    });
    var errorFields = {};
    return asyncMap(series, options, function(data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === "object" || rule.type === "array") && (typeof rule.fields === "object" || typeof rule.defaultField === "object");
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;
      function addFullfield(key, schema) {
        return _extends({}, schema, {
          fullField: rule.fullField + "." + key
        });
      }
      function cb(e) {
        if (e === void 0) {
          e = [];
        }
        var errors = e;
        if (!Array.isArray(errors)) {
          errors = [errors];
        }
        if (!options.suppressWarning && errors.length) {
          Schema.warning("async-validator:", errors);
        }
        if (errors.length && rule.message !== void 0) {
          errors = [].concat(rule.message);
        }
        errors = errors.map(complementError(rule));
        if (options.first && errors.length) {
          errorFields[rule.field] = 1;
          return doIt(errors);
        }
        if (!deep) {
          doIt(errors);
        } else {
          if (rule.required && !data.value) {
            if (rule.message !== void 0) {
              errors = [].concat(rule.message).map(complementError(rule));
            } else if (options.error) {
              errors = [options.error(rule, format(options.messages.required, rule.field))];
            }
            return doIt(errors);
          }
          var fieldsSchema = {};
          if (rule.defaultField) {
            for (var k in data.value) {
              if (data.value.hasOwnProperty(k)) {
                fieldsSchema[k] = rule.defaultField;
              }
            }
          }
          fieldsSchema = _extends({}, fieldsSchema, data.rule.fields);
          for (var f in fieldsSchema) {
            if (fieldsSchema.hasOwnProperty(f)) {
              var fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
              fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
            }
          }
          var schema = new Schema(fieldsSchema);
          schema.messages(options.messages);
          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }
          schema.validate(data.value, data.rule.options || options, function(errs) {
            var finalErrors = [];
            if (errors && errors.length) {
              finalErrors.push.apply(finalErrors, errors);
            }
            if (errs && errs.length) {
              finalErrors.push.apply(finalErrors, errs);
            }
            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }
      var res;
      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
      } else if (rule.validator) {
        res = rule.validator(rule, data.value, cb, data.source, options);
        if (res === true) {
          cb();
        } else if (res === false) {
          cb(rule.message || rule.field + " fails");
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }
      if (res && res.then) {
        res.then(function() {
          return cb();
        }, function(e) {
          return cb(e);
        });
      }
    }, function(results) {
      complete(results);
    });
  },
  getType: function getType2(rule) {
    if (rule.type === void 0 && rule.pattern instanceof RegExp) {
      rule.type = "pattern";
    }
    if (typeof rule.validator !== "function" && rule.type && !validators.hasOwnProperty(rule.type)) {
      throw new Error(format("Unknown rule type %s", rule.type));
    }
    return rule.type || "string";
  },
  getValidationMethod: function getValidationMethod(rule) {
    if (typeof rule.validator === "function") {
      return rule.validator;
    }
    var keys = Object.keys(rule);
    var messageIndex = keys.indexOf("message");
    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }
    if (keys.length === 1 && keys[0] === "required") {
      return validators.required;
    }
    return validators[this.getType(rule)] || false;
  }
};
Schema.register = function register(type2, validator) {
  if (typeof validator !== "function") {
    throw new Error("Cannot register a validator by type, validator is not a function");
  }
  validators[type2] = validator;
};
Schema.warning = warning;
Schema.messages = messages;
Schema.validators = validators;
function validate2(rules2, value, type2 = "any") {
  let calcRules = rules2.map((item) => {
    let proto = { ...item };
    if (!proto.type) {
      proto.type = type2;
    }
    return proto;
  });
  return new Schema({
    value: calcRules
  }).validate({ value }, { firstFields: true });
}
const _hoisted_1$w = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  style: { "width": "1.2em", "height": "1.2em", "vertical-align": "bottom", "line-height": "0", "fill": "currentColor", "overflow": "hidden" }
};
const _hoisted_2$u = /* @__PURE__ */ createElementVNode("path", { d: "M96 64h832a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm648.64 244.032L434.272 639.328l-157.696-132.48a32 32 0 1 0-41.152 48.992l180.896 152a32 32 0 0 0 43.936-2.624l331.104-353.44a32 32 0 1 0-46.72-43.744z" }, null, -1);
const _hoisted_3$r = [
  _hoisted_2$u
];
function render$b(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$w, _hoisted_3$r);
}
const _hoisted_1$v = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  style: { "width": "1.2em", "height": "1.2em", "vertical-align": "bottom", "line-height": "0", "fill": "currentColor", "overflow": "hidden" }
};
const _hoisted_2$t = /* @__PURE__ */ createElementVNode("path", { d: "M896 64H128c-35.296 0-64 28.704-64 64v768c0 35.296 28.704 64 64 64h768c35.296 0 64-28.704 64-64V128c0-35.296-28.704-64-64-64zM128 896V128h768l.064 768H128z" }, null, -1);
const _hoisted_3$q = [
  _hoisted_2$t
];
function render$a(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$v, _hoisted_3$q);
}
var index_vue_vue_type_style_index_0_lang$h = "";
const _sfc_main$o = {
  name: "plCheckbox",
  componentName: "plCheckbox",
  components: {
    iconCheck: render$b,
    iconUnCheck: render$a
  },
  props: {
    rules: {
      type: Array,
      default() {
        return [];
      }
    },
    size: String,
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    prop: {
      type: Object,
      default() {
        return { label: "label", value: "value", disabled: "disabled" };
      }
    },
    value: {
      default: null
    },
    trueValue: {
      default: null
    },
    falseValue: {
      default: null
    },
    wrap: Boolean,
    disabled: {
      type: Boolean,
      default: void 0
    },
    required: Boolean,
    button: Boolean,
    vertical: Boolean,
    showError: {
      type: Boolean,
      default: void 0
    },
    label: String,
    labelWidth: String
  },
  setup(props, context) {
    const app = getCurrentInstance();
    const ruleMessage = ref("");
    const currentValue = computed({
      get: () => {
        return props.value === void 0 ? "" : props.value;
      },
      set: (val) => {
        context.emit("update:value", val);
      }
    });
    const formSize = nullish(props.size, inject("size", null), "normal");
    const formLabelWidth = nullish(props.labelWidth, inject("labelWidth", null));
    const formDisabled = nullish(props.disabled, inject("disabled", null), false);
    const formShowError = nullish(props.showError, inject("showError", null), true);
    const formUpdateItems = inject("updateItems", () => {
    });
    const formRemoveItem = inject("removeItem", () => {
    });
    const validateField = async () => {
      if (!Array.isArray(props.rules) || !props.rules.length) {
        return false;
      }
      try {
        await validate2(props.rules, currentValue.value, "array");
        ruleMessage.value = "";
        return Promise.resolve();
      } catch (e) {
        ruleMessage.value = e.errors[0].message;
        return Promise.reject(ruleMessage.value);
      }
    };
    const clearValidate = () => {
      ruleMessage.value = "";
    };
    watch(currentValue, () => {
      validateField();
    });
    onMounted(() => {
      formUpdateItems(app);
    });
    onUnmounted(() => {
      formRemoveItem(app);
    });
    return {
      currentValue,
      ruleMessage,
      formSize,
      formLabelWidth,
      formDisabled,
      validate: validateField,
      clearValidate,
      formShowError
    };
  }
};
const _hoisted_1$u = {
  key: 0,
  class: "pl-checkbox-prepend"
};
const _hoisted_2$s = { class: "pl-checkbox-value" };
const _hoisted_3$p = { class: "pl-checkbox-inner" };
const _hoisted_4$h = ["disabled", "value"];
const _hoisted_5$c = { class: "pl-checkbox-text" };
const _hoisted_6$9 = ["disabled", "true-value", "false-value"];
const _hoisted_7$9 = { class: "pl-checkbox-text" };
const _hoisted_8$8 = {
  key: 0,
  class: "pl-checkbox-error"
};
function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_iconCheck = resolveComponent("iconCheck");
  const _component_iconUnCheck = resolveComponent("iconUnCheck");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["pl-checkbox", [
      $setup.formSize ? "pl-checkbox--" + $setup.formSize : "",
      {
        "is-vertical": $props.vertical,
        "is-disabled": $setup.formDisabled,
        "pl-checkbox--error": $setup.ruleMessage && $setup.formShowError
      }
    ]])
  }, [
    createElementVNode("div", {
      class: normalizeClass(["pl-checkbox-cell", { "pl-checkbox-cell--label": ($props.label || _ctx.$slots.label) && !$props.wrap, "pl-checkbox-cell--wrap": ($props.label || _ctx.$slots.label) && $props.wrap }])
    }, [
      createElementVNode("div", {
        class: normalizeClass(["pl-checkbox-title", { "pl-checkbox-title--require": $props.required }])
      }, [
        _ctx.$slots.prepend ? (openBlock(), createElementBlock("div", _hoisted_1$u, [
          renderSlot(_ctx.$slots, "prepend")
        ])) : createCommentVNode("", true),
        $props.label || _ctx.$slots.label ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: "pl-checkbox-label",
          style: normalizeStyle({ width: $setup.formLabelWidth })
        }, [
          renderSlot(_ctx.$slots, "label", {}, () => [
            createTextVNode(toDisplayString($props.label), 1)
          ])
        ], 4)) : createCommentVNode("", true)
      ], 2),
      createElementVNode("div", _hoisted_2$s, [
        createElementVNode("div", _hoisted_3$p, [
          $props.options && $props.options.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList($props.options, (item, i) => {
            return openBlock(), createElementBlock("div", {
              key: i,
              class: normalizeClass(["pl-checkbox-item", { "is-button": $props.button, "is-vertical": $props.vertical }])
            }, [
              withDirectives(createElementVNode("input", {
                type: "checkbox",
                disabled: $setup.formDisabled || item[$props.prop.disabled],
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.currentValue = $event),
                value: item[$props.prop.value]
              }, null, 8, _hoisted_4$h), [
                [vModelCheckbox, $setup.currentValue]
              ]),
              !$props.button ? (openBlock(), createBlock(_component_iconCheck, {
                key: 0,
                class: "pl-checkbox-icon icon-checked"
              })) : createCommentVNode("", true),
              !$props.button ? (openBlock(), createBlock(_component_iconUnCheck, {
                key: 1,
                class: "pl-checkbox-icon icon-unchecked"
              })) : createCommentVNode("", true),
              createElementVNode("span", _hoisted_5$c, [
                renderSlot(_ctx.$slots, "default", { item }, () => [
                  createTextVNode(toDisplayString(item[$props.prop.label]), 1)
                ])
              ])
            ], 2);
          }), 128)) : (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(["pl-checkbox-item pl-toggle-box", { "is-toggle": $props.button, "is-vertical": !$props.button && $props.vertical }])
          }, [
            withDirectives(createElementVNode("input", {
              type: "checkbox",
              disabled: $setup.formDisabled,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.currentValue = $event),
              "true-value": $props.trueValue,
              "false-value": $props.falseValue
            }, null, 8, _hoisted_6$9), [
              [vModelCheckbox, $setup.currentValue]
            ]),
            !$props.button ? (openBlock(), createBlock(_component_iconCheck, {
              key: 0,
              class: "pl-checkbox-icon icon-checked"
            })) : createCommentVNode("", true),
            !$props.button ? (openBlock(), createBlock(_component_iconUnCheck, {
              key: 1,
              class: "pl-checkbox-icon icon-unchecked"
            })) : createCommentVNode("", true),
            createElementVNode("span", _hoisted_7$9, [
              renderSlot(_ctx.$slots, "default")
            ])
          ], 2))
        ])
      ])
    ], 2),
    $setup.ruleMessage && $setup.formShowError ? (openBlock(), createElementBlock("div", _hoisted_8$8, toDisplayString($setup.ruleMessage), 1)) : createCommentVNode("", true)
  ], 2);
}
var Checkbox = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$l]]);
Checkbox.install = function(App) {
  App.component(Checkbox.name, Checkbox);
};
const _hoisted_1$t = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  style: { "width": "1.2em", "height": "1.2em", "vertical-align": "bottom", "line-height": "0", "fill": "currentColor", "overflow": "hidden" }
};
const _hoisted_2$r = /* @__PURE__ */ createElementVNode("path", { d: "m693.792 498.24-320-297.664a32 32 0 0 0-43.584 46.848l295.36 274.752-295.84 286.848a31.968 31.968 0 1 0 44.544 45.92l320-310.272a31.968 31.968 0 0 0-.48-46.4" }, null, -1);
const _hoisted_3$o = [
  _hoisted_2$r
];
function render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$t, _hoisted_3$o);
}
var index_vue_vue_type_style_index_0_lang$g = "";
const _sfc_main$n = {
  name: "plCollapse",
  componentName: "plCollapse",
  components: {
    iconEnter: render$9
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: Boolean,
    title: String
  },
  setup(props, context) {
    const visible = ref(!!props.value);
    const currentValue = computed({
      get: () => {
        return !!props.value;
      },
      set: (val) => {
        context.emit("update:value", val);
        context.emit("change", val);
      }
    });
    const toggle = () => {
      if (!props.disabled) {
        currentValue.value = !currentValue.value;
      }
    };
    watch(currentValue, (val) => {
      setTimeout(() => {
        visible.value = val;
      }, !val ? 150 : 0);
    });
    return {
      currentValue,
      visible,
      toggle
    };
  }
};
const _hoisted_1$s = { class: "pl-collapse-title" };
const _hoisted_2$q = { class: "pl-collapse-content" };
function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_iconEnter = resolveComponent("iconEnter");
  return openBlock(), createElementBlock("div", mergeProps({ class: "pl-collapse" }, _ctx.$attrs), [
    createElementVNode("div", {
      class: "pl-collapse-top",
      onClick: _cache[0] || (_cache[0] = (...args) => $setup.toggle && $setup.toggle(...args))
    }, [
      createElementVNode("div", _hoisted_1$s, [
        renderSlot(_ctx.$slots, "title", {}, () => [
          createTextVNode(toDisplayString($props.title), 1)
        ])
      ]),
      !$props.disabled ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["icon-arrow", $setup.currentValue ? "show" : "hide"])
      }, [
        renderSlot(_ctx.$slots, "icon", {}, () => [
          createVNode(_component_iconEnter)
        ])
      ], 2)) : createCommentVNode("", true)
    ]),
    withDirectives(createElementVNode("div", _hoisted_2$q, [
      createElementVNode("div", {
        class: normalizeClass(["pl-collapse-inner", $setup.currentValue ? "show" : "hide"])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2)
    ], 512), [
      [vShow, $setup.visible]
    ])
  ], 16);
}
var Collapse = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$k]]);
Collapse.install = function(App) {
  App.component(Collapse.name, Collapse);
};
var month_vue_vue_type_style_index_0_lang = "";
const defaultOption$2 = {
  value: null,
  startValue: null,
  endValue: null,
  min: 0,
  max: 5,
  dateLabel: "",
  startLabel: "",
  endLabel: "",
  isRange: false,
  selectRange: null,
  format: "Y-M",
  disabledDate() {
    return false;
  }
};
const getMonthValue = (dateStr) => {
  if (dateStr) {
    let date3 = getDateFromString(dateStr);
    if (date3) {
      date3.setHours(0, 0, 0, 0);
      return +date3;
    }
  }
  return null;
};
const _sfc_main$m = {
  name: "plMonthPopup",
  componentName: "plMonthPopup",
  setup(props, context) {
    const options = Object.assign({}, defaultOption$2);
    const yearList = reactive([]);
    const show = ref(false);
    const dateStartValue = ref(null);
    const dateEndValue = ref(null);
    const dateValue = ref(null);
    const open = (option) => {
      Object.assign(options, defaultOption$2, option);
      if (options.isRange) {
        dateStartValue.value = getMonthValue(options.startValue);
        dateEndValue.value = getMonthValue(options.endValue);
      } else {
        dateValue.value = getMonthValue(options.value);
      }
      createCalendar();
      show.value = true;
    };
    const close = () => {
      show.value = false;
    };
    const createCalendar = () => {
      let { min, max } = options;
      let nowYear = new Date().getFullYear();
      let minYear = nowYear + Math.min(min, max);
      let maxYear = nowYear + Math.max(min, max);
      yearList.length = 0;
      for (let i = minYear; i <= maxYear; i++) {
        let monthDate = createYear(i);
        yearList.push(monthDate);
      }
    };
    const createYear = (diff) => {
      let year = {
        title: diff + "\u5E74",
        dateArr: []
      };
      for (let i = 1; i <= 12; i++) {
        let timeStamp = +getDateFromString([diff, i, 1].join("-"));
        year.dateArr.push({
          label: i,
          timeStamp,
          get status() {
            let { isRange } = options;
            if (dateValue.value === this.timeStamp || dateStartValue.value === this.timeStamp || dateEndValue.value === this.timeStamp) {
              return "current";
            }
            if (isRange && dateStartValue.value && dateEndValue.value && dateStartValue.value < this.timeStamp && dateEndValue.value > this.timeStamp) {
              return "active";
            }
            return "normal";
          },
          get disabled() {
            let { disabledDate, selectRange, isRange } = options;
            let disabled = typeof disabledDate === "function" ? disabledDate.call(options, this.timeStamp) : false;
            if (isRange && selectRange > 0 && dateStartValue.value) {
              let daysDiff = Math.abs(getMonthDiff(this.timeStamp, dateStartValue.value));
              if (dateStartValue.value && !dateEndValue.value) {
                return disabled || daysDiff > selectRange;
              }
            }
            return disabled;
          },
          supLabel: "",
          get subLabel() {
            let { startLabel, endLabel, dateLabel } = options;
            return dateStartValue.value === this.timeStamp && startLabel || dateEndValue.value === this.timeStamp && endLabel || dateValue.value === this.timeStamp && dateLabel || "";
          }
        });
      }
      return year;
    };
    const onTapDate = ({ timeStamp, disabled } = {}) => {
      if (!timeStamp || disabled) {
        return false;
      }
      let { isRange } = options;
      if (isRange) {
        if (dateEndValue.value || !dateStartValue.value) {
          dateStartValue.value = timeStamp;
          dateEndValue.value = null;
        } else {
          if (timeStamp < dateStartValue.value) {
            dateEndValue.value = dateStartValue.value;
            dateStartValue.value = timeStamp;
          } else {
            dateEndValue.value = timeStamp;
          }
        }
      } else {
        dateValue.value = timeStamp;
      }
    };
    const cancel = () => {
      if (typeof options.callback === "function") {
        options.callback();
      }
      close();
    };
    const submit = () => {
      let { isRange, format: format2 } = options;
      if (yearList.some((month) => month.dateArr.some((date3) => date3.disabled && /current|active/.test(date3.status)))) {
        return false;
      }
      if (isRange && (!dateStartValue.value || !dateEndValue.value)) {
        return false;
      }
      let result = isRange ? [getDateString(dateStartValue.value, format2), getDateString(dateEndValue.value, format2)] : getDateString(dateValue.value, format2);
      if (typeof options.callback === "function") {
        options.callback(result);
      }
      context.emit("submit", result);
      close();
    };
    return {
      open,
      show,
      yearList,
      onTapDate,
      cancel,
      submit
    };
  }
};
const _hoisted_1$r = { class: "year-wrap" };
const _hoisted_2$p = { class: "year-list" };
const _hoisted_3$n = { class: "title-date" };
const _hoisted_4$g = { class: "month-list" };
const _hoisted_5$b = ["onClick"];
const _hoisted_6$8 = { class: "sup-label" };
const _hoisted_7$8 = { class: "month-label" };
const _hoisted_8$7 = { class: "sub-label" };
const _hoisted_9$5 = { class: "btn-wrap" };
function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    createElementVNode("div", mergeProps(_ctx.$attrs, {
      class: ["pl-datetime-popup", $setup.show ? "" : "hidden"]
    }), [
      createElementVNode("div", _hoisted_1$r, [
        createElementVNode("div", _hoisted_2$p, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.yearList, (month) => {
            return openBlock(), createElementBlock("div", {
              class: "year-item",
              key: month.title
            }, [
              createElementVNode("div", _hoisted_3$n, toDisplayString(month.title), 1),
              createElementVNode("div", _hoisted_4$g, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(month.dateArr, (date3) => {
                  return openBlock(), createElementBlock("div", {
                    key: date3.timeStamp,
                    onClick: ($event) => $setup.onTapDate(date3),
                    class: normalizeClass(["month-item", date3.status, date3.disabled ? "disabled" : ""])
                  }, [
                    createElementVNode("span", _hoisted_6$8, toDisplayString(date3.supLabel), 1),
                    createElementVNode("span", _hoisted_7$8, toDisplayString(date3.label) + "\u6708", 1),
                    createElementVNode("span", _hoisted_8$7, toDisplayString(date3.subLabel), 1)
                  ], 10, _hoisted_5$b);
                }), 128))
              ])
            ]);
          }), 128))
        ])
      ]),
      createElementVNode("div", _hoisted_9$5, [
        createElementVNode("button", {
          class: "btn-cancel",
          type: "primary",
          onClick: _cache[0] || (_cache[0] = (...args) => $setup.cancel && $setup.cancel(...args))
        }, "\u53D6\u6D88"),
        createElementVNode("button", {
          class: "btn-submit",
          type: "primary",
          onClick: _cache[1] || (_cache[1] = (...args) => $setup.submit && $setup.submit(...args))
        }, "\u9009\u62E9\u6708\u4EFD")
      ])
    ], 16)
  ]);
}
var plMonth = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$j]]);
var time_vue_vue_type_style_index_0_lang = "";
const defaultOption$1 = {
  value: null,
  startValue: null,
  endValue: null,
  isRange: false,
  selectRange: null,
  format: "H:I"
};
const getTimeValue = (timeStr) => {
  if (timeStr) {
    let time = getDateFromString(timeStr);
    if (time) {
      return [time.getHours(), time.getMinutes()];
    }
  }
  return [0, 0];
};
const getTimeFormat = (hour, minute, format2) => {
  let date3 = new Date();
  date3.setHours(hour, minute, 0, 0);
  return getDateString(date3, format2);
};
const _sfc_main$l = {
  name: "plTimePopup",
  componentName: "plTimePopup",
  setup(props, context) {
    const watch2 = ref(null);
    const options = reactive(Object.assign({}, defaultOption$1));
    const currentHour = ref(0);
    const currentMinute = ref(0);
    const startHour = ref(0);
    const startMinute = ref(0);
    const endHour = ref(0);
    const endMinute = ref(0);
    const currentPointer = ref(null);
    let watchClientRect = null;
    const show = ref(false);
    const hours = new Array(12).fill("").map((item, i) => String(i * 2).padStart(2, "0"));
    const minutes = new Array(12).fill("").map((item, i) => String(i * 5).padStart(2, "0"));
    const currentTime = computed(() => {
      return [currentHour.value, currentMinute.value].map((item) => String(item).padStart(2, "0")).join(":");
    });
    const currentStartTime = computed(() => {
      return [startHour.value, startMinute.value].map((item) => String(item).padStart(2, "0")).join(":");
    });
    const currentEndTime = computed(() => {
      return [endHour.value, endMinute.value].map((item) => String(item).padStart(2, "0")).join(":");
    });
    const hourAngle = computed(() => {
      return currentHour.value * 15;
    });
    const menuteAngle = computed(() => {
      return currentMinute.value * 6;
    });
    const startHourAngle = computed(() => {
      return startHour.value * 15;
    });
    const startMenuteAngle = computed(() => {
      return startMinute.value * 6;
    });
    const endHourAngle = computed(() => {
      return endHour.value * 15;
    });
    const endMenuteAngle = computed(() => {
      return endMinute.value * 6;
    });
    const selectedRange = computed(() => {
      let hourDiff = endHour.value - startHour.value;
      if (hourDiff < 0) {
        hourDiff += 24;
      }
      return {
        rotate: startHour.value * 15 - 90,
        offset: 377 - parseInt(hourDiff / 24 * 377)
      };
    });
    const open = (option) => {
      Object.assign(options, defaultOption$1, option);
      if (options.isRange) {
        [startHour.value, startMinute.value] = getTimeValue(options.startValue);
        [endHour.value, endMinute.value] = getTimeValue(options.endValue);
        currentPointer.value = { name: "startHour", angle: 15 };
      } else {
        [currentHour.value, currentMinute.value] = getTimeValue(options.value);
        currentPointer.value = { name: "currentHour", angle: 15 };
      }
      show.value = true;
    };
    const close = () => {
      show.value = false;
    };
    const getTimePosition = (angle, diameter) => {
      let radian = 2 * Math.PI / 360 * ((540 - angle) % 360);
      return {
        x: 125 + diameter * Math.sin(radian),
        y: 125 + diameter * Math.cos(radian)
      };
    };
    const setHours = (name) => {
      if (!name) {
        if (/Hour$/.test(currentPointer.value.name)) {
          name = currentPointer.value.name;
        } else {
          name = options.isRange ? "startHour" : "currentHour";
        }
      }
      currentPointer.value = { name, angle: 15 };
    };
    const setMinutes = (name) => {
      if (!name) {
        if (/Minute$/.test(currentPointer.value.name)) {
          name = currentPointer.value.name;
        } else {
          name = options.isRange ? currentPointer.value.name === "startHour" ? "startMinute" : "endMinute" : "currentMinute";
        }
      }
      currentPointer.value = { name, angle: 6 };
    };
    const touchHandler = ({ type: type2, touches }) => {
      if (!touches.length) {
        return false;
      }
      if (type2 === "touchstart" && !watchClientRect) {
        watchClientRect = watch2.value.getBoundingClientRect();
      }
      getTimeFromAngle(touches[0]);
    };
    const getTimeFromAngle = ({ clientX, clientY }) => {
      if (!watchClientRect || !currentPointer.value) {
        return false;
      }
      let { left, top, width, height } = watchClientRect;
      let x = clientX - left - width / 2;
      let y = clientY - top - height / 2;
      let angle = Math.atan(Math.abs(y / x)) / Math.PI * 180;
      if (x <= 0 && y <= 0) {
        angle += 270;
      } else if (x >= 0 && y <= 0) {
        angle = 90 - angle;
      } else if (x <= 0 && y >= 0) {
        angle = 270 - angle;
      } else if (x >= 0 && y >= 0) {
        angle += 90;
      }
      let time = Math.round(angle / currentPointer.value.angle);
      if (time * currentPointer.value.angle === 360) {
        time = 0;
      }
      switch (currentPointer.value.name) {
        case "startHour":
          startHour.value = time;
          break;
        case "endHour":
          endHour.value = time;
          break;
        case "currentHour":
          currentHour.value = time;
          break;
        case "startMinute":
          startMinute.value = time;
          break;
        case "endMinute":
          endMinute.value = time;
          break;
        case "currentMinute":
          currentMinute.value = time;
          break;
      }
    };
    const cancel = () => {
      if (typeof options.callback === "function") {
        options.callback();
      }
      close();
    };
    const submit = () => {
      let { isRange, format: format2 } = options;
      let result;
      if (isRange) {
        result = [getTimeFormat(startHour.value, startMinute.value, format2), getTimeFormat(endHour.value, endMinute.value, format2)];
      } else {
        result = getTimeFormat(currentHour.value, currentMinute.value, format2);
      }
      if (typeof options.callback === "function") {
        options.callback(result);
      }
      context.emit("submit", result);
      close();
    };
    return {
      watch: watch2,
      hours,
      minutes,
      options,
      currentPointer,
      show,
      open,
      close,
      touchHandler,
      getTimePosition,
      selectedRange,
      setMinutes,
      setHours,
      hourAngle,
      menuteAngle,
      startMenuteAngle,
      endMenuteAngle,
      startHourAngle,
      endHourAngle,
      currentTime,
      currentStartTime,
      currentEndTime,
      cancel,
      submit
    };
  }
};
const _hoisted_1$q = /* @__PURE__ */ createElementVNode("circle", {
  id: "watch-bg",
  cx: "125",
  cy: "125",
  r: "110",
  class: "watch-bg"
}, null, -1);
const _hoisted_2$o = /* @__PURE__ */ createElementVNode("rect", {
  id: "text-bg",
  x: "0",
  y: "0",
  height: "60",
  width: "250",
  class: "text-bg"
}, null, -1);
const _hoisted_3$m = { id: "hour-num" };
const _hoisted_4$f = { id: "minute-num" };
const _hoisted_5$a = /* @__PURE__ */ createElementVNode("g", { id: "minute-pointer" }, [
  /* @__PURE__ */ createElementVNode("circle", {
    class: "pointer-circle",
    cx: "125",
    cy: "35",
    r: "15"
  }),
  /* @__PURE__ */ createElementVNode("circle", {
    class: "needle-center",
    cx: "125",
    cy: "125",
    r: "5"
  }),
  /* @__PURE__ */ createElementVNode("rect", {
    class: "needle",
    x: "125",
    y: "50",
    height: "75",
    width: "1"
  })
], -1);
const _hoisted_6$7 = /* @__PURE__ */ createElementVNode("g", { id: "hour-pointer" }, [
  /* @__PURE__ */ createElementVNode("circle", {
    class: "pointer-circle",
    cx: "125",
    cy: "64",
    r: "12"
  }),
  /* @__PURE__ */ createElementVNode("circle", {
    class: "needle-center",
    cx: "125",
    cy: "125",
    r: "5"
  }),
  /* @__PURE__ */ createElementVNode("rect", {
    class: "needle",
    x: "125",
    y: "76",
    height: "54",
    width: "1"
  })
], -1);
const _hoisted_7$7 = { ref: "watch" };
const _hoisted_8$6 = /* @__PURE__ */ createElementVNode("use", {
  "xlink:href": "#watch-bg",
  x: "0",
  y: "60"
}, null, -1);
const _hoisted_9$4 = ["transform", "stroke-dashoffset"];
const _hoisted_10$3 = ["transform"];
const _hoisted_11$1 = /* @__PURE__ */ createElementVNode("use", {
  "xlink:href": "#hour-pointer",
  x: "0",
  y: "60",
  style: { "fill": "var(--watch-hour-pointer)" }
}, null, -1);
const _hoisted_12$1 = [
  _hoisted_11$1
];
const _hoisted_13$1 = ["transform"];
const _hoisted_14$1 = /* @__PURE__ */ createElementVNode("use", {
  "xlink:href": "#minute-pointer",
  x: "0",
  y: "60",
  style: { "fill": "var(--watch-minute-pointer)" }
}, null, -1);
const _hoisted_15 = [
  _hoisted_14$1
];
const _hoisted_16 = ["transform"];
const _hoisted_17 = /* @__PURE__ */ createElementVNode("use", {
  "xlink:href": "#minute-pointer",
  x: "0",
  y: "60",
  style: { "fill": "var(--watch-minute-pointer)" }
}, null, -1);
const _hoisted_18 = [
  _hoisted_17
];
const _hoisted_19 = ["transform"];
const _hoisted_20 = /* @__PURE__ */ createElementVNode("use", {
  "xlink:href": "#minute-pointer",
  x: "0",
  y: "60",
  style: { "fill": "var(--watch-end-minute-pointer)" }
}, null, -1);
const _hoisted_21 = [
  _hoisted_20
];
const _hoisted_22 = ["transform"];
const _hoisted_23 = /* @__PURE__ */ createElementVNode("use", {
  "xlink:href": "#hour-pointer",
  x: "0",
  y: "60",
  style: { "fill": "var(--watch-hour-pointer)" }
}, null, -1);
const _hoisted_24 = [
  _hoisted_23
];
const _hoisted_25 = ["transform"];
const _hoisted_26 = /* @__PURE__ */ createElementVNode("use", {
  "xlink:href": "#hour-pointer",
  x: "0",
  y: "60",
  style: { "fill": "var(--watch-end-hour-pointer)" }
}, null, -1);
const _hoisted_27 = [
  _hoisted_26
];
const _hoisted_28 = /* @__PURE__ */ createElementVNode("use", {
  "xlink:href": "#text-bg",
  x: "0",
  y: "0"
}, null, -1);
const _hoisted_29 = {
  key: 0,
  class: "current-time",
  x: "125",
  y: "42"
};
const _hoisted_30 = {
  key: 1,
  class: "current-time",
  x: "125",
  y: "42"
};
const _hoisted_31 = /* @__PURE__ */ createElementVNode("use", {
  "xlink:href": "#text-bg",
  x: "0",
  y: "310"
}, null, -1);
const _hoisted_32 = /* @__PURE__ */ createElementVNode("text", {
  class: "btn-text",
  x: "125",
  y: "347"
}, "|", -1);
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    createElementVNode("div", mergeProps(_ctx.$attrs, {
      class: ["pl-watch-popup", $setup.show ? "" : "hidden"],
      onClick: _cache[16] || (_cache[16] = withModifiers((...args) => $setup.close && $setup.close(...args), ["self"]))
    }), [
      (openBlock(), createElementBlock("svg", {
        class: "watch-content",
        viewBox: "0 0 250 370",
        onTouchstart: _cache[14] || (_cache[14] = withModifiers((...args) => $setup.touchHandler && $setup.touchHandler(...args), ["stop", "prevent"])),
        onTouchmove: _cache[15] || (_cache[15] = withModifiers((...args) => $setup.touchHandler && $setup.touchHandler(...args), ["stop", "prevent"]))
      }, [
        createElementVNode("defs", null, [
          _hoisted_1$q,
          _hoisted_2$o,
          createElementVNode("g", _hoisted_3$m, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($setup.hours, (item, i) => {
              return openBlock(), createElementBlock("text", mergeProps({
                class: "hour-item",
                key: "hour-" + item
              }, $setup.getTimePosition(i * 30, 60), { dy: "5px" }), toDisplayString(item), 17);
            }), 128))
          ]),
          createElementVNode("g", _hoisted_4$f, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($setup.minutes, (item, i) => {
              return openBlock(), createElementBlock("text", mergeProps({
                class: "minute-item",
                key: "minute-" + item
              }, $setup.getTimePosition(i * 30, 90), { dy: "6px" }), toDisplayString(item), 17);
            }), 128))
          ]),
          _hoisted_5$a,
          _hoisted_6$7
        ]),
        createElementVNode("g", _hoisted_7$7, [
          _hoisted_8$6,
          $setup.options.isRange ? (openBlock(), createElementBlock("circle", {
            key: 0,
            id: "time-range",
            cx: "125",
            cy: "185",
            r: "61",
            class: "time-range",
            transform: "rotate(" + $setup.selectedRange.rotate + " 125 185)",
            "stroke-dashoffset": $setup.selectedRange.offset
          }, null, 8, _hoisted_9$4)) : createCommentVNode("", true),
          createElementVNode("use", {
            "xlink:href": "#minute-num",
            fill: "#222",
            x: "0",
            y: "60",
            onTouchstart: _cache[0] || (_cache[0] = ($event) => $setup.setMinutes())
          }, null, 32),
          createElementVNode("use", {
            "xlink:href": "#hour-num",
            fill: "#444",
            x: "0",
            y: "60",
            onTouchstart: _cache[1] || (_cache[1] = ($event) => $setup.setHours())
          }, null, 32)
        ], 512),
        !$setup.options.isRange ? (openBlock(), createElementBlock("g", {
          key: 0,
          transform: "rotate(" + $setup.hourAngle + " 125 185)",
          onTouchstart: _cache[2] || (_cache[2] = ($event) => $setup.setHours("currentHour"))
        }, _hoisted_12$1, 40, _hoisted_10$3)) : createCommentVNode("", true),
        !$setup.options.isRange ? (openBlock(), createElementBlock("g", {
          key: 1,
          transform: "rotate(" + $setup.menuteAngle + " 125 185)",
          onTouchstart: _cache[3] || (_cache[3] = ($event) => $setup.setMinutes("currentMinute"))
        }, _hoisted_15, 40, _hoisted_13$1)) : createCommentVNode("", true),
        $setup.options.isRange ? withDirectives((openBlock(), createElementBlock("g", {
          key: 2,
          transform: "rotate(" + $setup.startMenuteAngle + " 125 185)",
          onTouchstart: _cache[4] || (_cache[4] = ($event) => $setup.setMinutes("startMinute"))
        }, _hoisted_18, 40, _hoisted_16)), [
          [vShow, /startMinute|startHour/.test($setup.currentPointer.name)]
        ]) : createCommentVNode("", true),
        $setup.options.isRange ? withDirectives((openBlock(), createElementBlock("g", {
          key: 3,
          transform: "rotate(" + $setup.endMenuteAngle + " 125 185)",
          onTouchstart: _cache[5] || (_cache[5] = ($event) => $setup.setMinutes("endMinute"))
        }, _hoisted_21, 40, _hoisted_19)), [
          [vShow, /endMinute|endHour/.test($setup.currentPointer.name)]
        ]) : createCommentVNode("", true),
        $setup.options.isRange ? (openBlock(), createElementBlock("g", {
          key: 4,
          transform: "rotate(" + $setup.startHourAngle + " 125 185)",
          onTouchstart: _cache[6] || (_cache[6] = ($event) => $setup.setHours("startHour"))
        }, _hoisted_24, 40, _hoisted_22)) : createCommentVNode("", true),
        $setup.options.isRange ? (openBlock(), createElementBlock("g", {
          key: 5,
          transform: "rotate(" + $setup.endHourAngle + " 125 185)",
          onTouchstart: _cache[7] || (_cache[7] = ($event) => $setup.setHours("endHour"))
        }, _hoisted_27, 40, _hoisted_25)) : createCommentVNode("", true),
        createElementVNode("g", {
          onTouchstart: _cache[8] || (_cache[8] = withModifiers(() => {
          }, ["stop", "prevent"])),
          onTouchmove: _cache[9] || (_cache[9] = withModifiers(() => {
          }, ["stop", "prevent"]))
        }, [
          _hoisted_28,
          !$setup.options.isRange ? (openBlock(), createElementBlock("text", _hoisted_29, toDisplayString($setup.currentTime), 1)) : (openBlock(), createElementBlock("text", _hoisted_30, toDisplayString($setup.currentStartTime) + "~" + toDisplayString($setup.currentEndTime), 1))
        ], 32),
        createElementVNode("g", {
          onTouchstart: _cache[12] || (_cache[12] = withModifiers(() => {
          }, ["stop", "prevent"])),
          onTouchmove: _cache[13] || (_cache[13] = withModifiers(() => {
          }, ["stop", "prevent"]))
        }, [
          _hoisted_31,
          createElementVNode("text", {
            class: "btn-text",
            x: "63",
            y: "347",
            onTouchstart: _cache[10] || (_cache[10] = (...args) => $setup.cancel && $setup.cancel(...args))
          }, "\u53D6\u6D88", 32),
          _hoisted_32,
          createElementVNode("text", {
            class: "btn-text",
            x: "187",
            y: "347",
            onTouchstart: _cache[11] || (_cache[11] = (...args) => $setup.submit && $setup.submit(...args))
          }, "\u786E\u5B9A", 32)
        ], 32)
      ], 32))
    ], 16)
  ]);
}
var plTime = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$i]]);
var datetime_vue_vue_type_style_index_0_lang = "";
const defaultOption = {
  value: null,
  startValue: null,
  endValue: null,
  min: 0,
  max: 11,
  dateLabel: "",
  startLabel: "",
  endLabel: "",
  type: "date",
  isRange: false,
  selectRange: null,
  format: "Y-M-D",
  disabledDate() {
    return false;
  }
};
const DAY_STAMP = 864e5;
const getDateValue = (dateStr) => {
  if (dateStr) {
    let date3 = getDateFromString(dateStr);
    if (date3) {
      date3.setHours(0, 0, 0, 0);
      return +date3;
    }
  }
  return null;
};
const _sfc_main$k = {
  name: "plDatePopup",
  componentName: "plDatePopup",
  setup(props, context) {
    const options = Object.assign({}, defaultOption);
    const monthList = reactive([]);
    const show = ref(false);
    const dateStartValue = ref(null);
    const dateEndValue = ref(null);
    const dateValue = ref(null);
    const open = (option) => {
      Object.assign(options, defaultOption, option);
      if (options.isRange) {
        dateStartValue.value = getDateValue(options.startValue);
        dateEndValue.value = getDateValue(options.endValue);
      } else {
        dateValue.value = getDateValue(options.value);
      }
      createCalendar();
      show.value = true;
    };
    const close = () => {
      show.value = false;
    };
    const createCalendar = () => {
      let { min, max } = options;
      let minMonth = Math.min(min, max);
      let maxMonth = Math.max(min, max);
      monthList.length = 0;
      for (let i = minMonth; i <= maxMonth; i++) {
        let monthDate = createMonth(i);
        monthList.push(monthDate);
      }
    };
    const createMonth = (diff) => {
      let today = new Date();
      today.setDate(1);
      today.setHours(0, 0, 0, 0);
      today.setMonth(today.getMonth() + diff);
      let dateNum = getMonthDays(today.getFullYear(), today.getMonth() + 1);
      let month = {
        title: getDateString(today, "Y\u5E74m\u6708"),
        dateArr: []
      };
      let todayStamp = today.getTime();
      for (let i = 0; i < dateNum; i++) {
        let timeStamp = todayStamp + i * DAY_STAMP;
        month.dateArr.push({
          label: i + 1,
          timeStamp,
          get status() {
            let { isRange } = options;
            if (dateValue.value === this.timeStamp || dateStartValue.value === this.timeStamp || dateEndValue.value === this.timeStamp) {
              return "current";
            }
            if (isRange && dateStartValue.value && dateEndValue.value && dateStartValue.value < this.timeStamp && dateEndValue.value > this.timeStamp) {
              return "active";
            }
            return "normal";
          },
          get disabled() {
            let { disabledDate, selectRange, isRange } = options;
            let disabled = typeof disabledDate === "function" ? disabledDate.call(options, this.timeStamp) : false;
            if (isRange && selectRange > 0) {
              let daysDiff = (Number(selectRange) || 0) * DAY_STAMP;
              if (dateStartValue.value && !dateEndValue.value) {
                return disabled || this.timeStamp > dateStartValue.value + daysDiff || this.timeStamp < dateStartValue.value - daysDiff;
              }
            }
            return disabled;
          },
          supLabel: "",
          get subLabel() {
            let { startLabel, endLabel, dateLabel } = options;
            return dateStartValue.value === this.timeStamp && startLabel || dateEndValue.value === this.timeStamp && endLabel || dateValue.value === this.timeStamp && dateLabel || "";
          }
        });
      }
      let firstDay = today.getDay();
      let lastDay = (firstDay + dateNum) % 7 - 1;
      for (let i = 0; i < firstDay; i++) {
        month.dateArr.unshift({
          label: ""
        });
      }
      for (let i = 0; i < 6 - lastDay; i++) {
        month.dateArr.push({
          label: ""
        });
      }
      return month;
    };
    const onTapDate = ({ timeStamp, disabled } = {}) => {
      if (!timeStamp || disabled) {
        return false;
      }
      let { isRange } = options;
      if (isRange) {
        if (dateEndValue.value || !dateStartValue.value) {
          dateStartValue.value = timeStamp;
          dateEndValue.value = null;
        } else {
          if (timeStamp < dateStartValue.value) {
            dateEndValue.value = dateStartValue.value;
            dateStartValue.value = timeStamp;
          } else {
            dateEndValue.value = timeStamp;
          }
        }
      } else {
        dateValue.value = timeStamp;
      }
    };
    const cancel = () => {
      if (typeof options.callback === "function") {
        options.callback();
      }
      close();
    };
    const submit = () => {
      let { isRange, format: format2 } = options;
      if (monthList.some((month) => month.dateArr.some((date3) => date3.disabled && /current|active/.test(date3.status)))) {
        return false;
      }
      if (isRange && (!dateStartValue.value || !dateEndValue.value)) {
        return false;
      }
      let result = isRange ? [getDateString(dateStartValue.value, format2), getDateString(dateEndValue.value, format2)] : getDateString(dateValue.value, format2);
      if (typeof options.callback === "function") {
        options.callback(result);
      }
      context.emit("submit", result);
      close();
    };
    return {
      show,
      open,
      monthList,
      onTapDate,
      cancel,
      submit
    };
  }
};
const _hoisted_1$p = /* @__PURE__ */ createElementVNode("div", { class: "top-week" }, [
  /* @__PURE__ */ createElementVNode("span", { class: "week-item" }, "\u65E5"),
  /* @__PURE__ */ createElementVNode("span", { class: "week-item" }, "\u4E00"),
  /* @__PURE__ */ createElementVNode("span", { class: "week-item" }, "\u4E8C"),
  /* @__PURE__ */ createElementVNode("span", { class: "week-item" }, "\u4E09"),
  /* @__PURE__ */ createElementVNode("span", { class: "week-item" }, "\u56DB"),
  /* @__PURE__ */ createElementVNode("span", { class: "week-item" }, "\u4E94"),
  /* @__PURE__ */ createElementVNode("span", { class: "week-item" }, "\u516D")
], -1);
const _hoisted_2$n = { class: "month-wrap" };
const _hoisted_3$l = { class: "month-list" };
const _hoisted_4$e = { class: "title-date" };
const _hoisted_5$9 = { class: "date-list" };
const _hoisted_6$6 = ["onClick"];
const _hoisted_7$6 = { class: "sup-label" };
const _hoisted_8$5 = { class: "date-label" };
const _hoisted_9$3 = { class: "sub-label" };
const _hoisted_10$2 = { class: "btn-wrap" };
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    createElementVNode("div", mergeProps(_ctx.$attrs, {
      class: ["pl-datetime-popup", $setup.show ? "" : "hidden"]
    }), [
      _hoisted_1$p,
      createElementVNode("div", _hoisted_2$n, [
        createElementVNode("div", _hoisted_3$l, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.monthList, (month) => {
            return openBlock(), createElementBlock("div", {
              class: "month-item",
              key: month.title
            }, [
              createElementVNode("div", _hoisted_4$e, toDisplayString(month.title), 1),
              createElementVNode("div", _hoisted_5$9, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(month.dateArr, (date3) => {
                  return openBlock(), createElementBlock("div", {
                    key: date3.timeStamp,
                    onClick: ($event) => $setup.onTapDate(date3),
                    class: normalizeClass(["date-item", date3.status, date3.disabled ? "disabled" : ""])
                  }, [
                    createElementVNode("span", _hoisted_7$6, toDisplayString(date3.supLabel), 1),
                    createElementVNode("span", _hoisted_8$5, toDisplayString(date3.label), 1),
                    createElementVNode("span", _hoisted_9$3, toDisplayString(date3.subLabel), 1)
                  ], 10, _hoisted_6$6);
                }), 128))
              ])
            ]);
          }), 128))
        ])
      ]),
      createElementVNode("div", _hoisted_10$2, [
        createElementVNode("button", {
          class: "btn-cancel",
          type: "primary",
          onClick: _cache[0] || (_cache[0] = (...args) => $setup.cancel && $setup.cancel(...args))
        }, "\u53D6\u6D88"),
        createElementVNode("button", {
          class: "btn-submit",
          type: "primary",
          onClick: _cache[1] || (_cache[1] = (...args) => $setup.submit && $setup.submit(...args))
        }, "\u9009\u62E9\u65E5\u671F")
      ])
    ], 16)
  ]);
}
var plDate = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$h]]);
const _hoisted_1$o = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  style: { "width": "1.2em", "height": "1.2em", "vertical-align": "bottom", "line-height": "0", "fill": "currentColor", "overflow": "hidden" }
};
const _hoisted_2$m = /* @__PURE__ */ createElementVNode("path", { d: "M512 64C264.992 64 64 264.96 64 512s200.96 448 448 448c247.008 0 448-200.96 448-448S759.04 64 512 64zm182.752 585.984c12.48 12.544 12.448 32.768-.064 45.248a31.94 31.94 0 0 1-22.592 9.344c-8.224 0-16.416-3.136-22.656-9.408l-137.6-138.016-138.048 136.576c-6.24 6.144-14.368 9.248-22.496 9.248a31.884 31.884 0 0 1-22.752-9.504c-12.416-12.576-12.32-32.8.256-45.248L466.688 511.84 329.312 374.016c-12.48-12.512-12.448-32.768.064-45.248 12.512-12.512 32.736-12.448 45.248.064l137.568 137.984L650.24 330.24c12.544-12.448 32.832-12.32 45.248.256 12.448 12.576 12.32 32.832-.256 45.248L557.344 512.128l137.408 137.856z" }, null, -1);
const _hoisted_3$k = [
  _hoisted_2$m
];
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$o, _hoisted_3$k);
}
var index_vue_vue_type_style_index_0_lang$f = "";
const _sfc_main$j = {
  name: "plDatetime",
  componentName: "plDatetime",
  components: {
    iconClose: render$8,
    plMonth,
    plTime,
    plDate
  },
  props: {
    rules: {
      type: Array,
      default() {
        return [];
      }
    },
    value: [Date, String, Number, Array],
    size: String,
    type: String,
    isRange: Boolean,
    placeholder: String,
    startPlaceholder: String,
    endPlaceholder: String,
    rangeSeparator: {
      type: String,
      default: "\u81F3"
    },
    options: Object,
    format: String,
    valueFormat: String,
    wrap: Boolean,
    disabled: {
      type: Boolean,
      default: void 0
    },
    readonly: Boolean,
    required: Boolean,
    showError: {
      type: Boolean,
      default: void 0
    },
    label: String,
    labelWidth: String,
    clearable: Boolean
  },
  setup(props, context) {
    const app = getCurrentInstance();
    const month = ref(null);
    const time = ref(null);
    const datetime = ref(null);
    const ruleMessage = ref("");
    const emitValue = computed({
      get: () => {
        return props.value === void 0 ? "" : props.value;
      },
      set: (val) => {
        context.emit("update:value", val);
        context.emit("change", val);
      }
    });
    const formSize = nullish(props.size, inject("size", null), "normal");
    const formLabelWidth = nullish(props.labelWidth, inject("labelWidth", null));
    const formDisabled = nullish(props.disabled, inject("disabled", null), false);
    const formShowError = nullish(props.showError, inject("showError", null), true);
    const formUpdateItems = inject("updateItems", () => {
    });
    const formRemoveItem = inject("removeItem", () => {
    });
    const showClear = computed(() => {
      return props.clearable && !formDisabled && (calcIsRange.value ? emitValue.value && emitValue.value.length : emitValue.value);
    });
    const calcType = computed(() => {
      return props.type || props.options && props.options.type || "date";
    });
    const calcIsRange = computed(() => {
      return props.isRange !== void 0 && props.isRange || props.options && props.options.isRange || false;
    });
    const calcFormat = computed(() => {
      return props.valueFormat || props.options && props.options.format;
    });
    const validateField = async () => {
      if (!Array.isArray(props.rules) || !props.rules.length) {
        return false;
      }
      try {
        await validate2(props.rules, emitValue.value, calcIsRange.value ? "array" : "string");
        ruleMessage.value = "";
        return Promise.resolve();
      } catch (e) {
        ruleMessage.value = e.errors[0].message;
        return Promise.reject(ruleMessage.value);
      }
    };
    const clearValidate = () => {
      ruleMessage.value = "";
    };
    const open = () => {
      if (formDisabled || props.readonly) {
        return false;
      }
      const options = Object.assign({}, props.options || {}, {
        type: calcType.value,
        isRange: calcIsRange.value
      });
      if (calcFormat.value) {
        options.format = calcFormat.value;
      }
      if (options.isRange) {
        options.startValue = Array.isArray(emitValue.value) && emitValue.value[0] || props.options && props.options.startValue;
        options.endValue = Array.isArray(emitValue.value) && emitValue.value[1] || props.options && props.options.endValue;
      } else {
        options.value = emitValue.value || props.options && props.options.value;
      }
      switch (options.type) {
        case "month":
          month.value.open(options);
          break;
        case "date":
          datetime.value.open(options);
          break;
        case "time":
          time.value.open(options);
          break;
      }
    };
    const submit = (result) => {
      emitValue.value = result;
    };
    const clear = () => {
      emitValue.value = null;
      context.emit("clear");
    };
    watch(emitValue, () => {
      validateField();
    });
    onMounted(() => {
      formUpdateItems(app);
    });
    onUnmounted(() => {
      formRemoveItem(app);
    });
    return {
      month,
      time,
      datetime,
      emitValue,
      formSize,
      formDisabled,
      ruleMessage,
      formLabelWidth,
      calcIsRange,
      open,
      clear,
      showClear,
      ruleMessage,
      submit,
      validate: validateField,
      clearValidate,
      formShowError
    };
  }
};
const _hoisted_1$n = {
  key: 0,
  class: "pl-datetime-prepend"
};
const _hoisted_2$l = { class: "pl-datetime-value" };
const _hoisted_3$j = { class: "pl-datetime-inner" };
const _hoisted_4$d = {
  key: 0,
  class: "pl-datetime-inner-flex"
};
const _hoisted_5$8 = { class: "range-separator" };
const _hoisted_6$5 = {
  key: 0,
  class: "title"
};
const _hoisted_7$5 = {
  key: 1,
  class: "placeholder"
};
const _hoisted_8$4 = {
  key: 0,
  class: "pl-datetime-append"
};
const _hoisted_9$2 = {
  key: 0,
  class: "pl-datetime-error"
};
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_iconClose = resolveComponent("iconClose");
  const _component_pl_month = resolveComponent("pl-month");
  const _component_pl_time = resolveComponent("pl-time");
  const _component_pl_date = resolveComponent("pl-date");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["pl-datetime", [
      $setup.formSize ? "pl-datetime--" + $setup.formSize : "",
      {
        "is-disabled": $setup.formDisabled,
        "pl-datetime--error": $setup.ruleMessage && $setup.formShowError
      }
    ]])
  }, [
    createElementVNode("div", {
      class: normalizeClass(["pl-datetime-cell", { "pl-datetime-cell--label": ($props.label || _ctx.$slots.label) && !$props.wrap, "pl-datetime-cell--wrap": ($props.label || _ctx.$slots.label) && $props.wrap }])
    }, [
      createElementVNode("div", {
        class: normalizeClass(["pl-datetime-title", { "pl-datetime-title--require": $props.required }])
      }, [
        _ctx.$slots.prepend ? (openBlock(), createElementBlock("div", _hoisted_1$n, [
          renderSlot(_ctx.$slots, "prepend")
        ])) : createCommentVNode("", true),
        $props.label || _ctx.$slots.label ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(["pl-datetime-label", { "pl-datetime-label--require": $props.required }]),
          style: normalizeStyle({ width: $setup.formLabelWidth })
        }, [
          renderSlot(_ctx.$slots, "label", {}, () => [
            createTextVNode(toDisplayString($props.label), 1)
          ])
        ], 6)) : createCommentVNode("", true)
      ], 2),
      createElementVNode("div", _hoisted_2$l, [
        createElementVNode("div", _hoisted_3$j, [
          $setup.calcIsRange ? (openBlock(), createElementBlock("div", _hoisted_4$d, [
            $setup.emitValue && $setup.emitValue[0] ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: "title",
              onClick: _cache[0] || (_cache[0] = ($event) => $setup.open())
            }, toDisplayString($setup.emitValue[0]), 1)) : (openBlock(), createElementBlock("span", {
              key: 1,
              class: "placeholder",
              onClick: _cache[1] || (_cache[1] = ($event) => $setup.open())
            }, toDisplayString($props.startPlaceholder), 1)),
            createElementVNode("span", _hoisted_5$8, toDisplayString($props.rangeSeparator), 1),
            $setup.emitValue && $setup.emitValue[1] ? (openBlock(), createElementBlock("span", {
              key: 2,
              class: "title",
              onClick: _cache[2] || (_cache[2] = ($event) => $setup.open())
            }, toDisplayString($setup.emitValue[1]), 1)) : (openBlock(), createElementBlock("span", {
              key: 3,
              class: "placeholder",
              onClick: _cache[3] || (_cache[3] = ($event) => $setup.open())
            }, toDisplayString($props.endPlaceholder), 1))
          ])) : (openBlock(), createElementBlock("div", {
            key: 1,
            onClick: _cache[4] || (_cache[4] = ($event) => $setup.open())
          }, [
            $setup.emitValue ? (openBlock(), createElementBlock("span", _hoisted_6$5, toDisplayString($setup.emitValue), 1)) : (openBlock(), createElementBlock("span", _hoisted_7$5, toDisplayString($props.placeholder), 1))
          ]))
        ]),
        createElementVNode("div", {
          class: "pl-datetime-clear",
          onTouchstart: _cache[5] || (_cache[5] = withModifiers((...args) => $setup.clear && $setup.clear(...args), ["stop", "prevent"])),
          onMousedown: _cache[6] || (_cache[6] = withModifiers((...args) => $setup.clear && $setup.clear(...args), ["stop", "prevent"]))
        }, [
          $setup.showClear ? (openBlock(), createBlock(_component_iconClose, {
            key: 0,
            class: "pl-datetime-clear-icon"
          })) : createCommentVNode("", true)
        ], 32),
        _ctx.$slots.append ? (openBlock(), createElementBlock("div", _hoisted_8$4, [
          renderSlot(_ctx.$slots, "append")
        ])) : createCommentVNode("", true)
      ])
    ], 2),
    $setup.ruleMessage && $setup.formShowError ? (openBlock(), createElementBlock("div", _hoisted_9$2, toDisplayString($setup.ruleMessage), 1)) : createCommentVNode("", true),
    createVNode(_component_pl_month, {
      ref: "month",
      onSubmit: $setup.submit
    }, null, 8, ["onSubmit"]),
    createVNode(_component_pl_time, {
      ref: "time",
      onSubmit: $setup.submit
    }, null, 8, ["onSubmit"]),
    createVNode(_component_pl_date, {
      ref: "datetime",
      onSubmit: $setup.submit
    }, null, 8, ["onSubmit"])
  ], 2);
}
var Datetime = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$g]]);
Datetime.install = function(App) {
  App.component(Datetime.name, Datetime);
  let vNode = h({
    render() {
      return this.display && h("div", {
        style: {
          transition: "all 0.3s ease",
          opacity: this.visible ? 1 : 0
        }
      }, [
        h(plMonth, {
          ref: "month"
        }),
        h(plTime, {
          ref: "time"
        }),
        h(plDate, {
          ref: "date"
        })
      ]) || null;
    },
    data: function() {
      return {
        display: false,
        visible: false,
        options: {}
      };
    },
    methods: {
      show() {
        this.display = true;
        nextTick(() => {
          this.visible = true;
          const type2 = this.options.type;
          if (type2 === "month") {
            this.$refs.month.open(this.options);
          } else if (type2 === "time") {
            this.$refs.time.open(this.options);
          } else {
            this.$refs.date.open(this.options);
          }
        });
      },
      hide() {
        this.visible = false;
        setTimeout(() => {
          this.display = false;
        }, 300);
      }
    }
  });
  const vNodeDom = document.createElement("div");
  document.body.appendChild(vNodeDom);
  vNode.appContext = App._context;
  render$c(vNode, vNodeDom);
  App.config.globalProperties.$calendar = function(options) {
    return new Promise((resolve, reject) => {
      vNode.component.proxy.options = Object.assign({}, options, {
        callback: (result) => {
          if (result) {
            let time = result;
            if (options.format) {
              if (options.isRange) {
                time = result.map((item) => getDateString(item, options.format));
              } else {
                time = getDateString(result, options.format);
              }
            }
            resolve(time);
          } else {
            reject("\u672A\u9009\u62E9\u65E5\u671F");
          }
        }
      });
      vNode.component.proxy.show();
    });
  };
};
function polyfill() {
  var classCallCheck = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  var createClass = function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  var get = function get2(object3, property, receiver) {
    if (object3 === null)
      object3 = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object3, property);
    if (desc === void 0) {
      var parent = Object.getPrototypeOf(object3);
      if (parent === null) {
        return void 0;
      } else {
        return get2(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;
      if (getter === void 0) {
        return void 0;
      }
      return getter.call(receiver);
    }
  };
  var inherits = function(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass)
      Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };
  var possibleConstructorReturn = function(self2, call) {
    if (!self2) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self2;
  };
  var Emitter = function() {
    function Emitter2() {
      classCallCheck(this, Emitter2);
      this.listeners = {};
    }
    createClass(Emitter2, [{
      key: "addEventListener",
      value: function addEventListener(type2, callback) {
        if (!(type2 in this.listeners)) {
          this.listeners[type2] = [];
        }
        this.listeners[type2].push(callback);
      }
    }, {
      key: "removeEventListener",
      value: function removeEventListener(type2, callback) {
        if (!(type2 in this.listeners)) {
          return;
        }
        var stack = this.listeners[type2];
        for (var i = 0, l = stack.length; i < l; i++) {
          if (stack[i] === callback) {
            stack.splice(i, 1);
            return;
          }
        }
      }
    }, {
      key: "dispatchEvent",
      value: function dispatchEvent(event) {
        var _this = this;
        if (!(event.type in this.listeners)) {
          return;
        }
        var debounce = function debounce2(callback) {
          setTimeout(function() {
            return callback.call(_this, event);
          });
        };
        var stack = this.listeners[event.type];
        for (var i = 0, l = stack.length; i < l; i++) {
          debounce(stack[i]);
        }
        return !event.defaultPrevented;
      }
    }]);
    return Emitter2;
  }();
  var AbortSignal = function(_Emitter) {
    inherits(AbortSignal2, _Emitter);
    function AbortSignal2() {
      classCallCheck(this, AbortSignal2);
      var _this2 = possibleConstructorReturn(this, (AbortSignal2.__proto__ || Object.getPrototypeOf(AbortSignal2)).call(this));
      _this2.aborted = false;
      _this2.onabort = null;
      return _this2;
    }
    createClass(AbortSignal2, [{
      key: "toString",
      value: function toString() {
        return "[object AbortSignal]";
      }
    }, {
      key: "dispatchEvent",
      value: function dispatchEvent(event) {
        if (event.type === "abort") {
          this.aborted = true;
          if (typeof this.onabort === "function") {
            this.onabort.call(this, event);
          }
        }
        get(AbortSignal2.prototype.__proto__ || Object.getPrototypeOf(AbortSignal2.prototype), "dispatchEvent", this).call(this, event);
      }
    }]);
    return AbortSignal2;
  }(Emitter);
  var AbortController = function() {
    function AbortController2() {
      classCallCheck(this, AbortController2);
      this.signal = new AbortSignal();
    }
    createClass(AbortController2, [{
      key: "abort",
      value: function abort() {
        var event = void 0;
        try {
          event = new Event("abort");
        } catch (e) {
          if (typeof document !== "undefined") {
            event = document.createEvent("Event");
            event.initEvent("abort", false, false);
          } else {
            event = {
              type: "abort",
              bubbles: false,
              cancelable: false
            };
          }
        }
        this.signal.dispatchEvent(event);
      }
    }, {
      key: "toString",
      value: function toString() {
        return "[object AbortController]";
      }
    }]);
    return AbortController2;
  }();
  if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
    AbortController.prototype[Symbol.toStringTag] = "AbortController";
    AbortSignal.prototype[Symbol.toStringTag] = "AbortSignal";
  }
  function abortableFetchDecorator(patchTargets) {
    if ("function" === typeof patchTargets) {
      patchTargets = { fetch: patchTargets };
    }
    var _patchTargets = patchTargets, fetch2 = _patchTargets.fetch, _patchTargets$Request = _patchTargets.Request, NativeRequest = _patchTargets$Request === void 0 ? fetch2.Request : _patchTargets$Request, _patchTargets$AbortCo = _patchTargets.AbortController, NativeAbortController = _patchTargets$AbortCo === void 0 ? AbortController : _patchTargets$AbortCo;
    var Request = NativeRequest;
    if (Request) {
      var controller = new NativeAbortController();
      var signal = controller.signal;
      var request2 = new Request("/", { signal });
      if (request2.signal) {
        return { fetch: fetch2, Request };
      }
      Request = function Request2(input, init) {
        var request3 = new NativeRequest(input, init);
        if (init && init.signal) {
          request3.signal = init.signal;
        }
        return request3;
      };
      Request.prototype = NativeRequest.prototype;
    }
    var realFetch = fetch2;
    var abortableFetch = function abortableFetch2(input, init) {
      var signal2 = Request && Request.prototype.isPrototypeOf(input) ? input.signal : init ? init.signal : void 0;
      if (signal2) {
        var abortError = void 0;
        try {
          abortError = new DOMException("Aborted", "AbortError");
        } catch (err) {
          abortError = new Error("Aborted");
          abortError.name = "AbortError";
        }
        if (signal2.aborted) {
          return Promise.reject(abortError);
        }
        var cancellation = new Promise(function(_, reject) {
          signal2.addEventListener("abort", function() {
            return reject(abortError);
          }, { once: true });
        });
        return Promise.race([cancellation, realFetch(input, init)]);
      }
      return realFetch(input, init);
    };
    return { fetch: abortableFetch, Request };
  }
  (function(self2) {
    if (self2.AbortController) {
      return;
    }
    self2.AbortController = AbortController;
    self2.AbortSignal = AbortSignal;
    if (!self2.fetch) {
      console.warn("fetch() is not available, cannot install abortcontroller-polyfill");
      return;
    }
    var _abortableFetch = abortableFetchDecorator(self2), fetch2 = _abortableFetch.fetch, Request = _abortableFetch.Request;
    self2.fetch = fetch2;
    self2.Request = Request;
  })(typeof self !== "undefined" ? self : global);
}
/*!
 * @author liyuelong1020@gmail.com
 * @date 2018/7/28 028
 * @description Description
 */
function request({ url: url2 = "", baseUrl = "", method: method3 = "POST", data, headers = {}, type: type2 = "json", mode, credentials, cache = "no-cache", signal, onDownload, redirect }) {
  let requestUrl = /^https?:\/\//.test(url2) ? url2 : [baseUrl.replace(/\/$/, ""), url2.replace(/^\//, "")].join("/");
  let param = {
    method: String(method3).toUpperCase(),
    headers: Object.assign({
      "Accept": "application/json, text/plain, */*",
      "Content-Type": "application/x-www-form-urlencoded"
    }, headers),
    mode,
    credentials,
    cache,
    signal
  };
  if (!is(data, "null", "undefined")) {
    if (param.method === "GET") {
      let searchParam;
      if (is(data, "object")) {
        searchParam = Object.keys(data).map((name) => [name, encodeURIComponent(data[name])].join("=")).join("&");
      } else {
        searchParam = JSON.stringify(data);
      }
      requestUrl = [requestUrl, searchParam].join(/\?/.test(requestUrl) ? "&" : "?");
    } else {
      param.body = data;
      if (is(data, "formdata")) {
        delete param.headers["Content-Type"];
      }
      if (is(data, "urlsearchparams")) {
        param.headers["Content-Type"] = "application/x-www-form-urlencoded;charset=utf-8";
        param.body = data.toString();
      }
      if (is(data, "array", "object")) {
        param.headers["Content-Type"] = "application/json;charset=utf-8";
        param.body = JSON.stringify(data);
      }
    }
  } else {
    delete param.headers["Content-Type"];
  }
  if (redirect) {
    setTimeout(() => {
      window.location = requestUrl;
    }, 0);
    return Promise.resolve();
  } else {
    return fetch(requestUrl, param).then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res;
      }
      return Promise.reject(res);
    }).then((res) => {
      if (typeof onDownload === "function") {
        let resCopy = res.clone();
        let loaded = 0;
        const total = Number(resCopy.headers.get("content-length")) || 0;
        const reader = resCopy.body.getReader();
        const read = () => {
          reader.read().then(({ value, done }) => {
            if (done) {
              return;
            }
            loaded += value.length;
            onDownload(loaded, total, resCopy);
            read();
          });
        };
        read();
      }
      return res;
    }).then((res) => {
      if (typeof res[type2] === "function") {
        return res[type2]();
      } else {
        return res.json();
      }
    }).catch((e) => {
      if (e.name !== "AbortError") {
        return Promise.reject(e);
      }
    });
  }
}
/*!
 * @author liyuelong1020@gmail.com
 * @date 2018/7/28 028
 * @description api 接口
 */
const beforeHandlerArr = [];
const afterHandlerArr = [];
const handler = async function(option) {
  for (let i = beforeHandlerArr.length; i--; ) {
    await beforeHandlerArr[i](option);
  }
  let response = request(option);
  for (let i = afterHandlerArr.length; i--; ) {
    response = await afterHandlerArr[i](response);
  }
  return response;
};
class Fetch {
  constructor(option) {
    if (is(option, "object")) {
      this.option = option;
    }
  }
  options(option) {
    if (is(option, "object")) {
      Object.assign(this.option, option);
    }
    return this;
  }
  url(...args) {
    this.option.url = [this.option.url, ...args].join("/");
    return this;
  }
  headers(headers) {
    if (!is(this.option.headers, "object")) {
      this.option.headers = {};
    }
    if (is(headers, "object")) {
      Object.assign(this.option.headers, headers);
    }
    return this;
  }
  request(option) {
    return handler(Object.assign({}, this.option, option));
  }
  get(url2, data, option) {
    let getOption = {
      method: "get"
    };
    if (url2) {
      getOption.url = url2;
    }
    if (data) {
      getOption.data = data;
    }
    return handler(Object.assign({}, this.option, option, getOption));
  }
  post(url2, data, option) {
    let postOption = {
      method: "post"
    };
    if (url2) {
      postOption.url = url2;
    }
    if (data) {
      postOption.data = data;
    }
    return handler(Object.assign({}, this.option, option, postOption));
  }
}
const fetchProxy = new Proxy(handler, {
  get(target, propKey, receiver) {
    switch (propKey) {
      case "options":
        return function(option) {
          return new Fetch(option);
        };
      case "url":
        return function(...args) {
          const target2 = new Fetch({});
          target2.url(...args);
          return target2;
        };
      case "headers":
        return function(headers) {
          const target2 = new Fetch({});
          target2.headers(headers);
          return target2;
        };
      case "request":
        return function(option) {
          return handler(option);
        };
      case "get":
        return function(url2, data, option) {
          let getOption = {
            method: "get"
          };
          if (url2) {
            getOption.url = url2;
          }
          if (data) {
            getOption.data = data;
          }
          return handler(Object.assign({}, option, getOption));
        };
      case "post":
        return function(url2, data, option) {
          let postOption = {
            method: "post"
          };
          if (url2) {
            postOption.url = url2;
          }
          if (data) {
            postOption.data = data;
          }
          return handler(Object.assign({}, option, postOption));
        };
      case "before":
        return function(func) {
          if (is(func, "function")) {
            beforeHandlerArr.push(func);
          }
          return receiver;
        };
      case "after":
        return function(func) {
          if (is(func, "function")) {
            afterHandlerArr.push(func);
          }
          return receiver;
        };
    }
    return Reflect.get(target, propKey, receiver);
  }
});
fetchProxy.install = function(App) {
  polyfill();
  App.config.globalProperties.$fetch = fetchProxy;
};
var index_vue_vue_type_style_index_0_lang$e = "";
const _sfc_main$i = {
  name: "plForm",
  componentName: "plForm",
  props: {
    size: String,
    labelWidth: String,
    disabled: {
      type: Boolean,
      default: void 0
    },
    showError: {
      type: Boolean,
      default: void 0
    }
  },
  setup(props) {
    const children = [];
    const updateItems = (item) => {
      if (children.indexOf(item) < 0) {
        children.push(item);
      }
    };
    const removeItem = (item) => {
      const index2 = children.indexOf(item);
      if (index2 > -1) {
        children.splice(index2, 1);
      }
    };
    const validate3 = () => {
      return Promise.all(children.map((item) => item.proxy.validate())).then(() => {
        return Promise.resolve();
      }).catch((e) => {
        return Promise.reject(e);
      });
    };
    const clearValidate = () => {
      children.map((item) => item.proxy.clearValidate());
    };
    provide("size", props.size);
    provide("labelWidth", props.labelWidth);
    provide("disabled", props.disabled);
    provide("showError", props.showError);
    provide("updateItems", updateItems);
    provide("removeItem", removeItem);
    return {
      validate: validate3,
      clearValidate
    };
  }
};
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({ class: "pl-form" }, _ctx.$props), [
    renderSlot(_ctx.$slots, "default")
  ], 16);
}
var Form = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$f]]);
Form.install = function(App) {
  App.component(Form.name, Form);
};
const _hoisted_1$m = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  style: { "width": "1.2em", "height": "1.2em", "vertical-align": "bottom", "line-height": "0", "fill": "currentColor", "overflow": "hidden" }
};
const _hoisted_2$k = /* @__PURE__ */ createElementVNode("path", { d: "M822.784 502.784c-12.288 12.288-32.768 12.288-45.056 0L544.256 269.312V832c0 17.92-14.336 32.256-32.256 32.256S479.744 849.92 479.744 832V269.312l-232.96 233.472c-12.288 12.288-32.768 12.288-45.056 0-12.288-12.288-12.288-32.768 0-45.056l288.256-287.744c3.072-3.072 6.656-5.12 10.24-7.168 4.096-1.536 8.192-2.56 12.288-2.56s8.192 1.024 12.288 2.56 7.68 4.096 10.24 7.168l288.256 287.744c11.776 12.288 11.776 32.256-.512 45.056z" }, null, -1);
const _hoisted_3$i = [
  _hoisted_2$k
];
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$m, _hoisted_3$i);
}
var index_vue_vue_type_style_index_0_lang$d = "";
const _sfc_main$h = {
  name: "plGoTopButton",
  componentName: "plGoTopButton",
  components: {
    iconUp: render$7
  },
  props: {
    target: [Node, Window],
    offset: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const scrollTop = ref(0);
    const scrollToTop = () => {
      let target = props.target;
      let top = scrollTop.value;
      let step = top / 1e3 * 60;
      let animate = () => {
        top -= step;
        if (top < 0) {
          top = 0;
        } else {
          requestAnimationFrame(animate);
        }
        target.scrollTop = top;
      };
      animate();
      scrollTop.value = 0;
    };
    const scrollHandler = (e) => {
      scrollTop.value = e.target.scrollTop;
    };
    watch(() => props.target, (target) => {
      if (target) {
        target.addEventListener("scroll", scrollHandler);
      }
    });
    onUnmounted(() => {
      props.target.removeEventListener("scroll", scrollHandler);
    });
    return {
      scrollToTop,
      scrollTop
    };
  }
};
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_iconUp = resolveComponent("iconUp");
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    $setup.scrollTop > $props.offset ? (openBlock(), createElementBlock("div", mergeProps({ key: 0 }, _ctx.$attrs, {
      class: "pl-to-top",
      onClick: _cache[0] || (_cache[0] = (...args) => $setup.scrollToTop && $setup.scrollToTop(...args))
    }), [
      createVNode(_component_iconUp, { class: "icon-up" })
    ], 16)) : createCommentVNode("", true)
  ]);
}
var GoTopButton = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$e]]);
GoTopButton.install = function(App) {
  App.component(GoTopButton.name, GoTopButton);
};
var index_vue_vue_type_style_index_0_lang$c = "";
let hasLoadScgIcon = false;
async function loadSvgIcon() {
  if (hasLoadScgIcon) {
    return;
  }
  hasLoadScgIcon = true;
  const iconfontUrl = new URL("data:application/javascript;base64,IWZ1bmN0aW9uKHMpe3ZhciBhLG89Jzxzdmc+PHN5bWJvbCBpZD0iaWNvbi1yb3VuZGNsb3NlZmlsbCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCI+PHBhdGggZD0iTTUxMiA2NEMyNjQuOTkyIDY0IDY0IDI2NC45NiA2NCA1MTJzMjAwLjk2IDQ0OCA0NDggNDQ4YzI0Ny4wMDggMCA0NDgtMjAwLjk2IDQ0OC00NDhTNzU5LjA0IDY0IDUxMiA2NHpNNjk0Ljc1MiA2NDkuOTg0YzEyLjQ4IDEyLjU0NCAxMi40NDggMzIuNzY4LTAuMDY0IDQ1LjI0OC02LjI0IDYuMjA4LTE0LjQgOS4zNDQtMjIuNTkyIDkuMzQ0LTguMjI0IDAtMTYuNDE2LTMuMTM2LTIyLjY1Ni05LjQwOGwtMTM3LjYtMTM4LjAxNi0xMzguMDQ4IDEzNi41NzZjLTYuMjQgNi4xNDQtMTQuMzY4IDkuMjQ4LTIyLjQ5NiA5LjI0OC04LjI1NiAwLTE2LjQ4LTMuMTY4LTIyLjc1Mi05LjUwNC0xMi40MTYtMTIuNTc2LTEyLjMyLTMyLjggMC4yNTYtNDUuMjQ4bDEzNy44ODgtMTM2LjM4NC0xMzcuMzc2LTEzNy44MjRjLTEyLjQ4LTEyLjUxMi0xMi40NDgtMzIuNzY4IDAuMDY0LTQ1LjI0OCAxMi41MTItMTIuNTEyIDMyLjczNi0xMi40NDggNDUuMjQ4IDAuMDY0bDEzNy41NjggMTM3Ljk4NCAxMzguMDQ4LTEzNi41NzZjMTIuNTQ0LTEyLjQ0OCAzMi44MzItMTIuMzIgNDUuMjQ4IDAuMjU2IDEyLjQ0OCAxMi41NzYgMTIuMzIgMzIuODMyLTAuMjU2IDQ1LjI0OGwtMTM3Ljg4OCAxMzYuMzg0TDY5NC43NTIgNjQ5Ljk4NHoiICA+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgaWQ9Imljb24tcm91bmRjbG9zZSIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCI+PHBhdGggZD0iTTUxMiA5NjBDMjY0Ljk2IDk2MCA2NCA3NTkuMDQgNjQgNTEyUzI2NC45NiA2NCA1MTIgNjRzNDQ4IDIwMC45NiA0NDggNDQ4Uzc1OS4wNCA5NjAgNTEyIDk2MHpNNTEyIDEyOC4yODhDMzAwLjQxNiAxMjguMjg4IDEyOC4yODggMzAwLjQxNiAxMjguMjg4IDUxMmMwIDIxMS41NTIgMTcyLjEyOCAzODMuNzEyIDM4My43MTIgMzgzLjcxMiAyMTEuNTUyIDAgMzgzLjcxMi0xNzIuMTYgMzgzLjcxMi0zODMuNzEyQzg5NS43MTIgMzAwLjQxNiA3MjMuNTUyIDEyOC4yODggNTEyIDEyOC4yODh6IiAgPjwvcGF0aD48cGF0aCBkPSJNNTU3LjA1NiA1MTMuMzc2bDEzOC4zNjgtMTM2Ljg2NGMxMi41NzYtMTIuNDE2IDEyLjY3Mi0zMi42NzIgMC4yNTYtNDUuMjQ4LTEyLjQxNi0xMi41NzYtMzIuNzA0LTEyLjY3Mi00NS4yNDgtMC4yNTZsLTEzOC41NiAxMzcuMDI0LTEzNi40NDgtMTM2Ljg2NGMtMTIuNTEyLTEyLjUxMi0zMi43MzYtMTIuNTc2LTQ1LjI0OC0wLjA2NC0xMi41MTIgMTIuNDgtMTIuNTQ0IDMyLjczNi0wLjA2NCA0NS4yNDhsMTM2LjI1NiAxMzYuNjcyLTEzNy4zNzYgMTM1LjkwNGMtMTIuNTc2IDEyLjQ0OC0xMi42NzIgMzIuNjcyLTAuMjU2IDQ1LjI0OCA2LjI3MiA2LjMzNiAxNC40OTYgOS41MDQgMjIuNzUyIDkuNTA0IDguMTI4IDAgMTYuMjU2LTMuMTA0IDIyLjQ5Ni05LjI0OGwxMzcuNTY4LTEzNi4wNjQgMTM4LjY4OCAxMzkuMTM2YzYuMjQgNi4yNzIgMTQuNDMyIDkuNDA4IDIyLjY1NiA5LjQwOCA4LjE5MiAwIDE2LjM1Mi0zLjEzNiAyMi41OTItOS4zNDQgMTIuNTEyLTEyLjQ4IDEyLjU0NC0zMi43MDQgMC4wNjQtNDUuMjQ4TDU1Ny4wNTYgNTEzLjM3NnoiICA+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgaWQ9Imljb24tcm91bmRyaWdodGZpbGwiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxwYXRoIGQ9Ik01MTIgNjRDMjY0Ljk2IDY0IDY0IDI2NC45NiA2NCA1MTJzMjAwLjk2IDQ0OCA0NDggNDQ4IDQ0OC0yMDAuOTYgNDQ4LTQ0OFM3NTkuMDQgNjQgNTEyIDY0ek02NjEuNzYgNTM1Ljk2OGwtMTYwLjI1NiAxNTguNDk2Yy02LjI0IDYuMTQ0LTE0LjM2OCA5LjI0OC0yMi40OTYgOS4yNDgtOC4yNTYgMC0xNi41MTItMy4xNjgtMjIuNzUyLTkuNTA0LTEyLjQxNi0xMi41NzYtMTIuMzItMzIuOCAwLjI1Ni00NS4yNDhsMTM3LjQwOC0xMzUuOTA0LTEzNi4yODgtMTM2LjY3MmMtMTIuNDgtMTIuNTEyLTEyLjQ0OC0zMi43NjggMC4wNjQtNDUuMjQ4IDEyLjUxMi0xMi41MTIgMzIuNzY4LTEyLjQ0OCA0NS4yNDggMC4wNjRsMTU4LjkxMiAxNTkuMzZjMC4wMzIgMC4wMzIgMC4wMzIgMC4wNjQgMC4wNjQgMC4wOTZzMC4wNjQgMC4wMzIgMC4wOTYgMC4wNjRjMi45NDQgMi45NzYgNS4wNTYgNi40MzIgNi41OTIgMTAuMDQ4IDAuMDY0IDAuMTI4IDAuMjI0IDAuMjU2IDAuMjU2IDAuMzg0QzY3My42IDUxMi43NjggNjcxLjIzMiA1MjYuNTkyIDY2MS43NiA1MzUuOTY4eiIgID48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCBpZD0iaWNvbi1yb3VuZHJpZ2h0IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Ij48cGF0aCBkPSJNNTEyIDk2MEMyNjQuOTYgOTYwIDY0IDc1OS4wNCA2NCA1MTJTMjY0Ljk2IDY0IDUxMiA2NHM0NDggMjAwLjk2IDQ0OCA0NDhTNzU5LjA0IDk2MCA1MTIgOTYwek01MTIgMTI4QzMwMC4yNTYgMTI4IDEyOCAzMDAuMjU2IDEyOCA1MTJjMCAyMTEuNzQ0IDE3Mi4yNTYgMzg0IDM4NCAzODQgMjExLjc0NCAwIDM4NC0xNzIuMjU2IDM4NC0zODRDODk2IDMwMC4yNTYgNzIzLjc0NCAxMjggNTEyIDEyOHoiICA+PC9wYXRoPjxwYXRoIGQ9Ik02NjguODMyIDUwMS4xNTJjLTAuMDMyLTAuMTI4LTAuMTkyLTAuMjU2LTAuMjU2LTAuMzg0LTEuNTM2LTMuNjE2LTMuNjQ4LTcuMDcyLTYuNTkyLTEwLjA0OC0wLjAzMi0wLjAzMi0wLjA2NC0wLjAzMi0wLjA5Ni0wLjA2NHMtMC4wMzItMC4wNjQtMC4wNjQtMC4wOTZsLTE1OC45MTItMTU5LjM2Yy0xMi40OC0xMi41MTItMzIuNzM2LTEyLjU3Ni00NS4yNDgtMC4wNjQtMTIuNTEyIDEyLjQ4LTEyLjU0NCAzMi43MzYtMC4wNjQgNDUuMjQ4bDEzNi4yODggMTM2LjY3Mi0xMzcuNDA4IDEzNS45MDRjLTEyLjU3NiAxMi40NDgtMTIuNjcyIDMyLjY3Mi0wLjI1NiA0NS4yNDggNi4yNCA2LjMzNiAxNC40OTYgOS41MDQgMjIuNzUyIDkuNTA0IDguMTI4IDAgMTYuMjU2LTMuMTA0IDIyLjQ5Ni05LjI0OGwxNjAuMjU2LTE1OC40OTZDNjcxLjIzMiA1MjYuNTkyIDY3My42IDUxMi43NjggNjY4LjgzMiA1MDEuMTUyeiIgID48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCBpZD0iaWNvbi1wZW9wbGUiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxwYXRoIGQ9Ik04MDAgMzg0YzAtMTYwLTEyOC0yODgtMjg4LTI4OFMyMjQgMjI0IDIyNCAzODRjMCAxMDguOCA1Ny42IDIwMS42IDE0Ny4yIDI0OS42LTEyMS42IDQ4LTIxNC40IDE1My42LTI0MCAyODgtMy4yIDE2IDYuNCAzNS4yIDI1LjYgMzguNGg2LjRjMTYgMCAyOC44LTkuNiAzMi0yNS42QzIyNCA3ODQgMzU1LjIgNjc1LjIgNTA4LjggNjcyaDYuNEM2NzIgNjcyIDgwMCA1NDQgODAwIDM4NHogbS01MTIgMGMwLTEyNC44IDk5LjItMjI0IDIyNC0yMjRzMjI0IDk5LjIgMjI0IDIyNGMwIDEyMS42LTk5LjIgMjIwLjgtMjIwLjggMjI0aC05LjZDMzg0IDYwNC44IDI4OCA1MDUuNiAyODggMzg0eiBtNDM1LjIgMjkxLjJjLTE2LTkuNi0zNS4yLTYuNC00NC44IDkuNi05LjYgMTYtNi40IDM1LjIgOS42IDQ0LjggNzMuNiA1MS4yIDEyNC44IDEyMS42IDE0MC44IDIwNC44IDMuMiAxNiAxNiAyNS42IDMyIDI1LjZoNi40YzE2LTMuMiAyOC44LTE5LjIgMjUuNi0zOC40LTE5LjItOTkuMi04MC0xODUuNi0xNjkuNi0yNDYuNHoiICA+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgaWQ9Imljb24tcm91bmRsZWZ0ZmlsbCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCI+PHBhdGggZD0iTTUxMiA2NEMyNjQuOTYgNjQgNjQgMjY0Ljk2IDY0IDUxMnMyMDAuOTYgNDQ4IDQ0OCA0NDggNDQ4LTIwMC45NiA0NDgtNDQ4Uzc1OS4wNCA2NCA1MTIgNjR6TTU2Ni4zNjggNjQ3LjYxNmMxMi40OCAxMi41MTIgMTIuNDQ4IDMyLjc2OC0wLjA2NCA0NS4yNDgtNi4yNCA2LjIwOC0xNC40IDkuMzQ0LTIyLjU5MiA5LjM0NC04LjE5MiAwLTE2LjQxNi0zLjEzNi0yMi42NTYtOS40MDhsLTE1OC45MTItMTU5LjM2Yy0wLjAzMi0wLjAzMi0wLjAzMi0wLjA2NC0wLjA2NC0wLjA5NnMtMC4wNjQtMC4wMzItMC4wOTYtMC4wNjRjLTIuNDk2LTIuNTI4LTQuMTI4LTUuNTA0LTUuNi04LjU0NC0wLjMyLTAuNjcyLTAuOTkyLTEuMjE2LTEuMjgtMS45Mi00LjcwNC0xMS42MTYtMi4zMzYtMjUuNDA4IDcuMTM2LTM0Ljc4NGwxNjAuMjU2LTE1OC40OTZjMTIuNTc2LTEyLjQ0OCAzMi44MzItMTIuMzIgNDUuMjQ4IDAuMjU2IDEyLjQ0OCAxMi41NzYgMTIuMzIgMzIuODMyLTAuMjU2IDQ1LjI0OGwtMTM3LjQwOCAxMzUuOTA0TDU2Ni4zNjggNjQ3LjYxNnoiICA+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgaWQ9Imljb24tZG93biIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCI+PHBhdGggZD0iTTgyMi42MjQ5MTYgNTIxLjM3NjgwNGMtMTIuNTEyNzI3LTEyLjUxMjcyNy0zMi43MzUzODUtMTIuNTEyNzI3LTQ1LjI0ODExMiAwTDU0NC4wMDA4NiA3NTQuNzUyNzQ4IDU0NC4wMDA4NiAxOTJjMC0xNy42NjQ3MjItMTQuMzM2MTM4LTMyLjAwMDg2LTMyLjAwMDg2LTMyLjAwMDg2cy0zMi4wMDA4NiAxNC4zMzYxMzgtMzIuMDAwODYgMzIuMDAwODZsMCA1NjIuNzUyNzQ4TDI0Ni42MjMxOTYgNTIxLjM3NjgwNGMtMTIuNTEyNzI3LTEyLjUxMjcyNy0zMi43MzUzODUtMTIuNTEyNzI3LTQ1LjI0ODExMiAwcy0xMi41MTI3MjcgMzIuNzM1Mzg1IDAgNDUuMjQ4MTEybDI4OC4wMDA4NiAyODcuOTY4MTc2YzIuOTQzMjYgMi45NzU5NDQgNi40OTU0NzEgNS4zMTE5NzQgMTAuNDMxMjg2IDYuOTQ0NDQzIDMuODcyMTY4IDEuNjMyNDY5IDguMDMxNjA5IDIuNDYzMzI1IDEyLjE5Mjc3IDIuNDYzMzI1IDQuMTU5NDQxIDAgOC4zMjA2MDItMC44MzI1NzYgMTIuMjIzNzMzLTIuNDYzMzI1IDMuOTM1ODE1LTEuNjMyNDY5IDcuNDU1MzQyLTMuOTY4NDk5IDEwLjQzMTI4Ni02Ljk0NDQ0M2wyODguMDAwODYtMjg3Ljk2ODE3NkM4MzUuMTM1OTIzIDU1NC4xMTIxODkgODM1LjEzNTkyMyA1MzMuODg3ODExIDgyMi42MjQ5MTYgNTIxLjM3NjgwNHoiICA+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgaWQ9Imljb24tamlhIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Ij48cGF0aCBkPSJNNTQ0LjgzIDU1Ny41MzZsMzc0LjE5IDAuOTczYzE3LjY5NCAwLjA0NiAzMi4wMzktMTQuMjEgMzIuMDg1LTMxLjkwNCAwLjA0NS0xNy43NC0xNC4yMS0zMi4wNC0zMS45MDQtMzIuMDg2bC0zNzQuMjU4LTAuOTk1IDAuNTY2LTM3Mi41NjFjMC4wMjItMTcuNjI3LTE0LjI1Ni0zMS45OTUtMzEuOTUtMzIuMDQxLTE3LjY3Mi0wLjAyMi0zMi4wMTggMTQuMjc4LTMyLjA2NCAzMS45NzNsLTAuNTY0IDM3Mi40Ny0zNzMuOTg2LTAuOTk2Yy0xNy42OTUtMC4wNDUtMzIuMDQgMTQuMjEtMzIuMDg2IDMxLjkwNC0wLjAyMiA4Ljg0OSAzLjU1MiAxNi45MDMgOS4zNjggMjIuNzE5IDUuNzY5IDUuNzcgMTMuNzM0IDkuMzQ1IDIyLjUzNyA5LjM2N2wzNzQuMDc2IDAuOTk2LTAuNTY1IDM3NS45NTVjLTAuMDIzIDguODQ2IDMuNTUzIDE2Ljg1NiA5LjM2OCAyMi42NzEgNS43OTMgNS43OTMgMTMuNzggOS4zNDYgMjIuNTgzIDkuMzY5IDE3LjY3MiAwLjAyMiAzMS45OTUtMTQuMjU2IDMyLjA0LTMxLjk1TDU0NC44MyA1NTcuNTM2IDU0NC44MyA1NTcuNTM2eiIgID48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCBpZD0iaWNvbi1kaW5nd2VpIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Ij48cGF0aCBkPSJNOTIzLjYzOTA0IDQyNC44Mjk0NGMwLTIzMS44NTc5Mi0xODQuMjk1NjgtNDE5LjgwNTQ0LTQxMS42NDQxNi00MTkuODA1NDQtMjI3LjM0MjA4IDAtNDExLjYzOTA0IDE4Ny45NDc1Mi00MTEuNjM5MDQgNDE5LjgwNTQ0IDAgNy4zNTg3MiAwLjcxMDQgMTQuNDcxNjggMS4wODI4OCAyMS42NzU1Mi0wLjMzNzkyIDMuNTU4NC0xLjA4Mjg4IDYuOTkwMDgtMS4wODI4OCAxMC42NDE5MiAwIDI1OC4zODU5MiAzNzkuOTc5NTIgNTUxLjA2Njg4IDM3OS45Nzk1MiA1NTEuMDY2ODhzMzEuNjYzMzYgMjQuMjE1MDQgNjMuMzI4IDBjMzEuNjYzMzYtMjQuMjQxOTIgMzc5Ljk3OTUyLTI5Mi42ODA5NiAzNzkuOTc5NTItNTUxLjA2Njg4IDAtMy42NTE4NC0wLjc0NDk2LTcuMDgzNTItMS4wODI4OC0xMC42NDE5MkM5MjIuOTI4NjQgNDM5LjMwMTEyIDkyMy42MzkwNCA0MzIuMTg4MTYgOTIzLjYzOTA0IDQyNC44Mjk0NEw5MjMuNjM5MDQgNDI0LjgyOTQ0ek01MTEuOTk0ODggNTg2LjMzNmMtODcuNDQ4MzIgMC0xNTguMzE5MzYtNzIuMjkzMTItMTU4LjMxOTM2LTE2MS41MDY1NiAwLTg5LjE1MDcyIDcwLjg2OTc2LTE2MS40NDY0IDE1OC4zMTkzNi0xNjEuNDQ2NCA4Ny40NTM0NCAwIDE1OC4zMjgzMiA3Mi4yOTU2OCAxNTguMzI4MzIgMTYxLjQ0NjRDNjcwLjMyMzIgNTE0LjA0Mjg4IDU5OS40NDgzMiA1ODYuMzM2IDUxMS45OTQ4OCA1ODYuMzM2TDUxMS45OTQ4OCA1ODYuMzM2ek01MTEuOTk0ODggNTg2LjMzNiIgID48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCBpZD0iaWNvbi1pY29uLS0iIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxwYXRoIGQ9Ik01NzYgNDE5Ljg0aC0xMDIuNHYtMTAyLjRjMC0xNS4zNi0xMC4yNC0yNS42LTI1LjYtMjUuNnMtMjUuNiAxMC4yNC0yNS42IDI1LjZ2MTAyLjRoLTEwMi40Yy0xNS4zNiAwLTI1LjYgNS4xMi0yNS42IDE3LjkyIDAgMTUuMzYgMTAuMjQgMzMuMjggMjUuNiAzMy4yOGgxMDIuNHYxMDIuNGMwIDE1LjM2IDEwLjI0IDI1LjYgMjUuNiAyNS42czI1LjYtMTAuMjQgMjUuNi0yNS42di0xMDIuNGgxMDIuNGMxNS4zNiAwIDI1LjYtMTAuMjQgMjUuNi0yNS42IDAtMTIuOC0xMC4yNC0yNS42LTI1LjYtMjUuNnogbTMzNy45MiA0NTguMjRsLTIxMi40OC0yMDcuMzZjNTYuMzItNjEuNDQgODkuNi0xNDAuOCA4OS42LTIyNy44NCAwLTE4Ni44OC0xNTMuNi0zMzcuOTItMzQ1LjYtMzM3LjkyQzI1NiAxMDIuNCAxMDIuNCAyNTMuNDQgMTAyLjQgNDQwLjMyczE1My42IDMzNy45MiAzNDUuNiAzMzcuOTJjODEuOTIgMCAxNTguNzItMjguMTYgMjE3LjYtNzYuOGwyMTIuNDggMjA5LjkyYzEwLjI0IDEwLjI0IDI4LjE2IDEwLjI0IDM4LjQgMCA3LjY4LTcuNjggNy42OC0yMy4wNC0yLjU2LTMzLjI4eiBtLTQ2NS45Mi0xNDguNDhjLTE2MS4yOCAwLTI5MS44NC0xMjgtMjkxLjg0LTI4Ni43MkMxNTYuMTYgMjg0LjE2IDI4Ni43MiAxNTMuNiA0NDggMTUzLjZjMTYxLjI4IDAgMjkxLjg0IDEyOCAyOTEuODQgMjg2LjcyIDAgMTU4LjcyLTEzMC41NiAyODkuMjgtMjkxLjg0IDI4OS4yOHoiICA+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgaWQ9Imljb24taWNvbi0tMSIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCI+PHBhdGggZD0iTTU4MS4xMiA0MTkuODRoLTI1NmMtMTIuOCAwLTI1LjYgMTAuMjQtMjUuNiAyNS42IDAgMTIuOCAxMC4yNCAyNS42IDI1LjYgMjUuNmgyNTZjMTIuOCAwIDI1LjYtMTAuMjQgMjUuNi0yNS42cy0xMi44LTI1LjYtMjUuNi0yNS42eiBtMzMyLjggNDU4LjI0bC0yMTIuNDgtMjA3LjM2YzU2LjMyLTYxLjQ0IDg5LjYtMTQwLjggODkuNi0yMjcuODQgMC0xODYuODgtMTUzLjYtMzM3LjkyLTM0NS42LTMzNy45MlMxMDIuNCAyNTMuNDQgMTAyLjQgNDQwLjMyczE1My42IDMzNy45MiAzNDUuNiAzMzcuOTJjODEuOTIgMCAxNTguNzItMjguMTYgMjE3LjYtNzYuOGwyMTIuNDggMjA5LjkyYzEwLjI0IDEwLjI0IDI4LjE2IDEwLjI0IDM4LjQgMCA3LjY4LTcuNjggNy42OC0yMy4wNC0yLjU2LTMzLjI4eiBtLTQ2NS45Mi0xNDguNDhjLTE2MS4yOCAwLTI5MS44NC0xMjgtMjkxLjg0LTI4Ni43MkMxNTYuMTYgMjg0LjE2IDI4Ni43MiAxNTMuNiA0NDggMTUzLjZjMTYxLjI4IDAgMjkxLjg0IDEyOCAyOTEuODQgMjg2LjcyIDAgMTU4LjcyLTEzMC41NiAyODkuMjgtMjkxLjg0IDI4OS4yOHoiICA+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgaWQ9Imljb24tamluZ2dhbyIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCI+PHBhdGggZD0iTTUxMiAzMkMyNDYuOTEyIDMyIDMyIDI0Ni45MTIgMzIgNTEyYzAgMjY1LjA4OCAyMTQuOTEyIDQ4MCA0ODAgNDgwIDI2NS4wODggMCA0ODAtMjE0LjkxMiA0ODAtNDgwIDAtMjY1LjA4OC0yMTQuOTEyLTQ4MC00ODAtNDgweiBtMCA4OTZDMjgyLjI0IDkyOCA5NiA3NDEuNzYgOTYgNTEyUzI4Mi4yNCA5NiA1MTIgOTZzNDE2IDE4Ni4yNCA0MTYgNDE2LTE4Ni4yNCA0MTYtNDE2IDQxNnoiICA+PC9wYXRoPjxwYXRoIGQ9Ik01MTIgMzg0YTMyIDMyIDAgMCAwLTMyIDMydjM1MmEzMiAzMiAwIDAgMCA2NCAwVjQxNmEzMiAzMiAwIDAgMC0zMi0zMnoiICA+PC9wYXRoPjxwYXRoIGQ9Ik01MTIgMjcybS00OCAwYTQ4IDQ4IDAgMSAwIDk2IDAgNDggNDggMCAxIDAtOTYgMFoiICA+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgaWQ9Imljb24tZ3VhbmJpIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Ij48cGF0aCBkPSJNNTQ4Ljk5MiA1MDMuNzQ0TDg4NS40NCAxNjcuMzI4YTMxLjk2OCAzMS45NjggMCAxIDAtNDUuMjQ4LTQ1LjI0OEw1MDMuNzQ0IDQ1OC40OTYgMTY3LjMyOCAxMjIuMDhhMzEuOTY4IDMxLjk2OCAwIDEgMC00NS4yNDggNDUuMjQ4bDMzNi40MTYgMzM2LjQxNkwxMjIuMDggODQwLjE2YTMxLjk2OCAzMS45NjggMCAxIDAgNDUuMjQ4IDQ1LjI0OGwzMzYuNDE2LTMzNi40MTZMODQwLjE2IDg4NS40NGEzMS45NjggMzEuOTY4IDAgMSAwIDQ1LjI0OC00NS4yNDhMNTQ4Ljk5MiA1MDMuNzQ0eiIgID48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCBpZD0iaWNvbi1pY29uX2xvYWRpbmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxwYXRoIGQ9Ik00ODAgOTZhMzIgMzIgMCAwIDEgNjQgMHYxOTJhMzIgMzIgMCAwIDEtNjQgMFY5NnogbTI1MC42MjQgNjAuNjRhMzIgMzIgMCAxIDEgNTEuNzc2IDM3LjYzMmwtMTEyLjgzMiAxNTUuMzI4YTMyIDMyIDAgMCAxLTUxLjgwOC0zNy42MzJsMTEyLjg2NC0xNTUuMzI4eiBtMTY3LjEzNiAxOTYuMzg0YTMyIDMyIDAgMSAxIDE5Ljc3NiA2MC44NjRsLTE4Mi42MjQgNTkuMzI4YTMyIDMyIDAgMCAxLTE5Ljc3Ni02MC44NjRsMTgyLjYyNC01OS4zMjh6IG0xOS43NzYgMjU3LjA4OGEzMiAzMiAwIDEgMS0xOS43NzYgNjAuODY0bC0xODIuNjI0LTU5LjMyOGEzMiAzMiAwIDAgMSAxOS43NzYtNjAuODY0bDE4Mi42MjQgNTkuMzI4ek03ODIuNCA4MjkuNzZhMzIgMzIgMCAwIDEtNTEuNzc2IDM3LjYzMmwtMTEyLjg2NC0xNTUuMzI4YTMyIDMyIDAgMSAxIDUxLjgwOC0zNy42MzJsMTEyLjgzMiAxNTUuMzI4ek01NDQgOTI4YTMyIDMyIDAgMCAxLTY0IDB2LTE5MmEzMiAzMiAwIDAgMSA2NCAwdjE5MnogbS0yNTAuNjI0LTYwLjY0YTMyIDMyIDAgMCAxLTUxLjc3Ni0zNy42MzJsMTEyLjgzMi0xNTUuMzI4YTMyIDMyIDAgMCAxIDUxLjgwOCAzNy42MzJsLTExMi44NjQgMTU1LjMyOHogbS0xNjcuMTM2LTE5Ni4zODRhMzIgMzIgMCAxIDEtMTkuNzc2LTYwLjg2NGwxODIuNjI0LTU5LjMyOGEzMiAzMiAwIDAgMSAxOS43NzYgNjAuODY0bC0xODIuNjI0IDU5LjMyOHogbS0xOS43NzYtMjU3LjA4OGEzMiAzMiAwIDAgMSAxOS43NzYtNjAuODY0bDE4Mi42MjQgNTkuMzI4YTMyIDMyIDAgMSAxLTE5Ljc3NiA2MC44NjRsLTE4Mi42MjQtNTkuMzI4ek0yNDEuNiAxOTQuMjRhMzIgMzIgMCAxIDEgNTEuNzc2LTM3LjYzMmwxMTIuODY0IDE1NS4zMjhhMzIgMzIgMCAxIDEtNTEuODA4IDM3LjYzMkwyNDEuNiAxOTQuMjR6IiAgPjwvcGF0aD48L3N5bWJvbD48c3ltYm9sIGlkPSJpY29uLWljb25fcnVrb3UiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxwYXRoIGQ9Ik0xOTIgMzQ0LjY0SDEyOFYxOTJhOTYgOTYgMCAwIDEgOTYtOTZoNjA4YTk2IDk2IDAgMCAxIDk2IDk2djY0MGE5NiA5NiAwIDAgMS05NiA5NkgyMjRhOTYgOTYgMCAwIDEtOTYtOTZ2LTEyNi4yNzJoNjRWODMyYTMyIDMyIDAgMCAwIDMyIDMyaDYwOGEzMiAzMiAwIDAgMCAzMi0zMlYxOTJhMzIgMzIgMCAwIDAtMzItMzJIMjI0YTMyIDMyIDAgMCAwLTMyIDMydjE1Mi42NHoiICA+PC9wYXRoPjxwYXRoIGQ9Ik01MzguNjg4IDQxMC44NDhhMzIgMzIgMCAxIDEgMzkuODA4LTUwLjExMmwxNDguMzIgMTE3Ljg1NmMyMy43NDQgMTguODQ4IDEwLjQgNTcuMDU2LTE5LjkwNCA1Ny4wNTZINzIuODMyYTMyIDMyIDAgMSAxIDAtNjRoNTQyLjM2OGwtNzYuNDgtNjAuOHoiICA+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgaWQ9Imljb24taWNvbl96aGFuZ2hhbyIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCI+PHBhdGggZD0iTTYyMC4yNTYgODA2LjE3NmEzMiAzMiAwIDAgMS0yOC4yNTYtMzEuNzc2di04MC43MzZhMzIgMzIgMCAwIDEgMTMuMjE2LTI1LjkyYzUyLjg2NC0zOC4yNzIgOTkuMTY4LTk5LjY4IDEyNC43MzYtMTY5LjE1MmEzMiAzMiAwIDAgMSAxOS41ODQtMTkuMmM5Ljc2LTMuMzYgMjEuNTM2LTI0LjIyNCAzMi40MTYtNzAuNzIgNS45Mi0yNS4xNTItMS4wMjQtNDAuOTYtMTYuNTc2LTUwLjRhMzIgMzIgMCAwIDEtMTUuMjY0LTI0LjQ4QzczNi40NDggMTgxLjMxMiA2NTAuMTQ0IDk2IDUxNC4yNCA5NmMtMTM4LjI0IDAtMjI3LjkzNiA4OC4wNjQtMjQwLjY3MiAyNDIuNDMyYTMyIDMyIDAgMCAxLTE1LjA0IDI0LjU0NGMtMTYuNDE2IDEwLjI0LTIyLjI3MiAyMy4zNi0xNi4yMjQgNDQuMDMyIDExLjM5MiAzOC44OCAyMy44NCA2MC4zNTIgMzYuOCA2OC40OGEzMiAzMiAwIDAgMSAxMy4xMiAxNi4zODRjMjUuMDg4IDcwLjQ5NiA3Mi4yMjQgMTMzLjUzNiAxMjYuNzIgMTczLjUwNGEzMiAzMiAwIDAgMSAxMy4wNTYgMjUuNzkyVjc3NC40YTMyIDMyIDAgMCAxLTI4LjI1NiAzMS43NzZjLTEyNS4xMiAxNC43Mi0yMTIuNjA4IDU0LjQtMjI1Ljk1MiA4OC42NzIgMi4zMDQgMS4wNTYgNS4xMiAyLjE3NiA4LjM4NCAzLjI5NiAxNy4xODQgNi4wMTYgNDMuNTIgMTEuNTIgNzcuMTIgMTYuMDk2IDY1LjUwNCA4Ljg5NiAxNTUuMTY4IDEzLjc2IDI0OC43MDQgMTMuNzZzMTgzLjItNC44NjQgMjQ4LjcwNC0xMy43NmMzMy42LTQuNTc2IDU5LjkzNi0xMC4wOCA3Ny4xMi0xNi4wOTYgMy4yOTYtMS4xMiA2LjA4LTIuMjQgOC4zODQtMy4yOTYtMTMuMzQ0LTM0LjI3Mi0xMDAuODMyLTczLjkyLTIyNS45Mi04OC42NHogbTM1Ljc0NC01OS43NzZjMTUxLjM2IDIyLjY1NiAyNTYgNzkuMTY4IDI1NiAxNTcuMzc2QzkxMiA5NzAuNzg0IDc1NS44NCA5OTIgNTEyIDk5MnMtNDAwLTIxLjIxNi00MDAtODguMjI0YzAtNzguMjA4IDEwNC42NC0xMzQuNzIgMjU2LTE1Ny4zNzZWNzA2Ljg4Yy01Ni42NC00NS41MzYtMTA0LjU3Ni0xMTAuOTQ0LTEzMi41NzYtMTg0LjEyOC0yMy45MzYtMTkuMzkyLTQwLjkyOC01MS4yOTYtNTQuNTI4LTk3Ljc5Mi0xMi44LTQzLjY0OCAwLjA2NC04MS4zNDQgMzAuMzM2LTEwNi41OTJDMjMxLjQ1NiAxNDAuNDggMzQ2LjMzNiAzMiA1MTQuMjQgMzJjMTY1LjYgMCAyNzYuOTkyIDEwNS43MjggMjk4LjA4IDI4MS40NCAyOS40NCAyNC44NjQgNDIuNzIgNjMuOTA0IDMxLjk2OCAxMDkuODU2LTEzLjMxMiA1Ni43NjgtMzAuODQ4IDkyLjUxMi01OC45NzYgMTA5LjYzMi0yOC40NDggNzAuNjI0LTc0Ljk3NiAxMzMuMTg0LTEyOS4zMTIgMTc2LjU3NnYzNi44OTZ6IiAgPjwvcGF0aD48L3N5bWJvbD48c3ltYm9sIGlkPSJpY29uLWR1aWdvdSIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCI+PHBhdGggZD0iTTg5Mi4wNjQgMjYxLjg4OGEzMS45MzYgMzEuOTM2IDAgMCAwLTQ1LjIxNiAxLjQ3Mkw0MjEuNjY0IDcxNy4yNDhsLTIyMC40NDgtMTg1LjIxNmEzMiAzMiAwIDEgMC00MS4xNTIgNDguOTkybDI0My42NDggMjA0LjcwNGEzMS44NzIgMzEuODcyIDAgMCAwIDIwLjU3NiA3LjQ4OCAzMS44MDggMzEuODA4IDAgMCAwIDIzLjM2LTEwLjExMkw4OTMuNTM2IDMwNy4xMzZhMzIgMzIgMCAwIDAtMS40NzItNDUuMjQ4eiIgID48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCBpZD0iaWNvbi14aWF5aWJ1IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Ij48cGF0aCBkPSJNNTEyIDk5MkMyNDYuOTEyIDk5MiAzMiA3NzcuMDg4IDMyIDUxMiAzMiAyNDYuOTEyIDI0Ni45MTIgMzIgNTEyIDMyYzI2NS4wODggMCA0ODAgMjE0LjkxMiA0ODAgNDgwIDAgMjY1LjA4OC0yMTQuOTEyIDQ4MC00ODAgNDgweiBtMC02NGMyMjkuNzYgMCA0MTYtMTg2LjI0IDQxNi00MTZTNzQxLjc2IDk2IDUxMiA5NiA5NiAyODIuMjQgOTYgNTEyczE4Ni4yNCA0MTYgNDE2IDQxNnoiICA+PC9wYXRoPjxwYXRoIGQ9Ik02ODggNDgwYTMyIDMyIDAgMCAxIDAgNjRoLTQxNmEzMiAzMiAwIDAgMSAwLTY0aDQxNnoiICA+PC9wYXRoPjxwYXRoIGQ9Ik03MDcuMDcyIDUxMmwtMTUxLjM2LTE3MC43ODRhMzIgMzIgMCAxIDEgNDcuODcyLTQyLjQzMmwxNzAuMjA4IDE5MmEzMiAzMiAwIDAgMSAwIDQyLjQzMmwtMTcwLjI0IDE5MmEzMiAzMiAwIDEgMS00Ny44NzItNDIuNDMyTDcwNy4wNzIgNTEyeiIgID48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCBpZD0iaWNvbi1zaGFuZ3lpYnUiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxwYXRoIGQ9Ik01MTIgOTkyQzI0Ni45MTIgOTkyIDMyIDc3Ny4wODggMzIgNTEyIDMyIDI0Ni45MTIgMjQ2LjkxMiAzMiA1MTIgMzJjMjY1LjA4OCAwIDQ4MCAyMTQuOTEyIDQ4MCA0ODAgMCAyNjUuMDg4LTIxNC45MTIgNDgwLTQ4MCA0ODB6IG0wLTY0YzIyOS43NiAwIDQxNi0xODYuMjQgNDE2LTQxNlM3NDEuNzYgOTYgNTEyIDk2IDk2IDI4Mi4yNCA5NiA1MTJzMTg2LjI0IDQxNiA0MTYgNDE2eiIgID48L3BhdGg+PHBhdGggZD0iTTMzNiA0ODBhMzIgMzIgMCAwIDAgMCA2NGg0MTZhMzIgMzIgMCAwIDAgMC02NGgtNDE2eiIgID48L3BhdGg+PHBhdGggZD0iTTMxNi45MjggNTEybDE1MS4zNi0xNzAuNzg0YTMyIDMyIDAgMSAwLTQ3Ljg3Mi00Mi40MzJsLTE3MC4yMDggMTkyYTMyIDMyIDAgMCAwIDAgNDIuNDMybDE3MC4yNCAxOTJhMzIgMzIgMCAxIDAgNDcuODcyLTQyLjQzMkwzMTYuOTI4IDUxMnoiICA+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgaWQ9Imljb24ta29uZ2ppYW54dWFuemhvbmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxwYXRoIGQ9Ik05NiA2NGg4MzJhMzIgMzIgMCAwIDEgMzIgMzJ2ODMyYTMyIDMyIDAgMCAxLTMyIDMySDk2YTMyIDMyIDAgMCAxLTMyLTMyVjk2YTMyIDMyIDAgMCAxIDMyLTMyeiBtNjQ4LjY0IDI0NC4wMzJsLTMxMC4zNjggMzMxLjI5Ni0xNTcuNjk2LTEzMi40OGEzMiAzMiAwIDEgMC00MS4xNTIgNDguOTkybDE4MC44OTYgMTUyYTMyIDMyIDAgMCAwIDQzLjkzNi0yLjYyNEw3OTEuMzYgMzUxLjc3NmEzMiAzMiAwIDEgMC00Ni43Mi00My43NDR6IiAgPjwvcGF0aD48L3N5bWJvbD48c3ltYm9sIGlkPSJpY29uLWtvbmdqaWFud2VpeHVhbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCI+PHBhdGggZD0iTTg5NiA2NEgxMjhjLTM1LjI5NiAwLTY0IDI4LjcwNC02NCA2NHY3NjhjMCAzNS4yOTYgMjguNzA0IDY0IDY0IDY0aDc2OGMzNS4yOTYgMCA2NC0yOC43MDQgNjQtNjRWMTI4YzAtMzUuMjk2LTI4LjcwNC02NC02NC02NHpNMTI4IDg5NlYxMjhoNzY4bDAuMDY0IDc2OEgxMjh6IiAgPjwvcGF0aD48L3N5bWJvbD48c3ltYm9sIGlkPSJpY29uLWZhbmdrdWFpIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Ij48cGF0aCBkPSJNODk2IDk2MEgxMjhjLTM1LjI5NiAwLTY0LTI4LjcwNC02NC02NFYxMjhjMC0zNS4yOTYgMjguNzA0LTY0IDY0LTY0aDc2OGMzNS4yOTYgMCA2NCAyOC43MDQgNjQgNjR2NzY4YzAgMzUuMjk2LTI4LjcwNCA2NC02NCA2NHpNMTI4IDEyOHY3NjhoNzY4LjA2NEw4OTYgMTI4SDEyOHoiICA+PC9wYXRoPjxwYXRoIGQ9Ik01NDQgNDgwaDIwOGEzMiAzMiAwIDAgMSAwIDY0SDU0NHYyMDhhMzIgMzIgMCAwIDEtNjQgMFY1NDRIMjcyYTMyIDMyIDAgMCAxIDAtNjRINDgwVjI3MmEzMiAzMiAwIDAgMSA2NCAwVjQ4MHoiICA+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgaWQ9Imljb24tZmFuZ2t1YWktIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Ij48cGF0aCBkPSJNODk2IDY0SDEyOGMtMzUuMjk2IDAtNjQgMjguNzA0LTY0IDY0djc2OGMwIDM1LjI5NiAyOC43MDQgNjQgNjQgNjRoNzY4YzM1LjI5NiAwIDY0LTI4LjcwNCA2NC02NFYxMjhjMC0zNS4yOTYtMjguNzA0LTY0LTY0LTY0ek0xMjggODk2VjEyOGg3NjhsMC4wNjQgNzY4SDEyOHoiICA+PC9wYXRoPjxwYXRoIGQ9Ik03NTIgNDgwaC00ODBhMzIgMzIgMCAwIDAgMCA2NGg0ODBhMzIgMzIgMCAwIDAgMC02NHoiICA+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgaWQ9Imljb24tc2h1YXhpbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCI+PHBhdGggZD0iTTk2MCA0MTZWMTkybC03My4wNTYgNzMuMDU2YTQ0Ny43MTIgNDQ3LjcxMiAwIDAgMC0zNzMuNi0yMDEuMDg4QzI2NS45MiA2My45NjggNjUuMzEyIDI2NC41NDQgNjUuMzEyIDUxMlMyNjUuOTIgOTYwLjAzMiA1MTMuMzQ0IDk2MC4wMzJhNDQ4LjA2NCA0NDguMDY0IDAgMCAwIDQxNS4yMzItMjc5LjQ4OCAzOC4zNjggMzguMzY4IDAgMSAwLTcxLjEzNi0yOC44OTYgMzcxLjM2IDM3MS4zNiAwIDAgMS0zNDQuMDk2IDIzMS41ODRDMzA4LjMyIDg4My4yMzIgMTQyLjExMiA3MTcuMDI0IDE0Mi4xMTIgNTEyUzMwOC4zMiAxNDAuNzY4IDUxMy4zNDQgMTQwLjc2OGMxMzIuNDQ4IDAgMjUxLjkzNiA3MC4wOCAzMTguMDE2IDE3OS44NEw3MzYgNDE2aDIyNHoiICA+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgaWQ9Imljb24tYmFvY3VuIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Ij48cGF0aCBkPSJNOTI1LjI0OCAzNTYuOTI4bC0yNTguMTc2LTI1OC4xNzZhNjQgNjQgMCAwIDAtNDUuMjQ4LTE4Ljc1MkgxNDRhNjQgNjQgMCAwIDAtNjQgNjR2NzM2YTY0IDY0IDAgMCAwIDY0IDY0aDczNmE2NCA2NCAwIDAgMCA2NC02NFY0MDIuMTc2YTY0IDY0IDAgMCAwLTE4Ljc1Mi00NS4yNDh6TTI4OCAxNDRoMTkyVjI1NkgyODhWMTQ0eiBtNDQ4IDczNkgyODhWNzM2aDQ0OHYxNDR6IG0xNDQgMEg4MDBWNzA0YTMyIDMyIDAgMCAwLTMyLTMySDI1NmEzMiAzMiAwIDAgMC0zMiAzMnYxNzZIMTQ0di03MzZIMjI0VjI4OGEzMiAzMiAwIDAgMCAzMiAzMmgyNTZhMzIgMzIgMCAwIDAgMzItMzJWMTQ0aDc3LjgyNGwyNTguMTc2IDI1OC4xNzZWODgweiIgID48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCBpZD0iaWNvbi1mYWJ1IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Ij48cGF0aCBkPSJNODY0IDEyOGgtNTYuNjRhMzIgMzIgMCAwIDAgMCA2NEg4NjRhMzIgMzIgMCAwIDEgMzIgMzJ2NjQwYTMyIDMyIDAgMCAxLTMyIDMySDE2MGEzMiAzMiAwIDAgMS0zMi0zMlYyMjRhMzIgMzIgMCAwIDEgMzItMzJoNjIuMjcyYTMyIDMyIDAgMCAwIDAtNjRIMTYwYTk2IDk2IDAgMCAwLTk2IDk2djY0MGE5NiA5NiAwIDAgMCA5NiA5Nmg3MDRhOTYgOTYgMCAwIDAgOTYtOTZWMjI0YTk2IDk2IDAgMCAwLTk2LTk2eiIgID48L3BhdGg+PHBhdGggZD0iTTM0MS4yMTYgMzA4LjMyTDQ4MCAxODUuMzEyVjY4OGEzMiAzMiAwIDAgMCA2NCAwVjE4NS4zMTJsMTM4Ljc4NCAxMjMuMDA4YTMyLjAzMiAzMi4wMzIgMCAwIDAgNDIuNDY0LTQ3LjkwNGwtMTkyLTE3MC4yMDhhMzIgMzIgMCAwIDAtNDIuNDY0IDBsLTE5MiAxNzAuMjA4YTMyIDMyIDAgMSAwIDQyLjQzMiA0Ny45MDR6IiAgPjwvcGF0aD48L3N5bWJvbD48c3ltYm9sIGlkPSJpY29uLXNoYW5jaHUiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxwYXRoIGQ9Ik05MjguMTYgMTQ0SDczNlY2NGEzMiAzMiAwIDAgMC0zMi0zMkgzMjBhMzIgMzIgMCAwIDAtMzIgMzJ2ODBIOTUuODRhMzIgMzIgMCAwIDAgMCA2NEgxMjkuNmw3Ny45MiA2OTguNjU2QTk2IDk2IDAgMCAwIDMwMi45MTIgOTkyaDQxOC4xNDRhOTYuMDMyIDk2LjAzMiAwIDAgMCA5NS40MjQtODUuMzQ0TDg5NC40IDIwOGgzMy43MjhhMzIgMzIgMCAwIDAgMC4wMzItNjR6TTM1MiA5NmgzMjB2NDhIMzUyVjk2eiBtNDAwLjg5NiA4MDMuNTUyYTMyIDMyIDAgMCAxLTMxLjgwOCAyOC40NDhIMzAyLjkxMmEzMiAzMiAwIDAgMS0zMS44MDgtMjguNDQ4TDE5My45ODQgMjA4aDYzNi4wMzJsLTc3LjEyIDY5MS41NTJ6IiAgPjwvcGF0aD48cGF0aCBkPSJNNjA4IDgyMC45MjhhMzIgMzIgMCAwIDAgMzItMzJWMzE5LjEwNGEzMiAzMiAwIDAgMC02NCAwdjQ2OS44MjRhMzIgMzIgMCAwIDAgMzIgMzJ6TTQzMiA4MjAuOTI4YTMyIDMyIDAgMCAwIDMyLTMyVjMxOS4xMDRhMzIgMzIgMCAwIDAtNjQgMHY0NjkuODI0YTMyIDMyIDAgMCAwIDMyIDMyeiIgID48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCBpZD0iaWNvbi16aGlodWFuIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Ij48cGF0aCBkPSJNODU5LjA0IDM1Mkg5NS45MzZhMzIgMzIgMCAxIDAgMCA2NGg4MzJhMzIgMzIgMCAwIDAgMjQuNDQ4LTUyLjY0bC0xODkuMDg4LTIyNGEzMiAzMiAwIDAgMC00OC44OTYgNDEuMjhMODU5LjA0IDM1MnpNMTY0Ljg5NiA2NDBIOTI4YTMyIDMyIDAgMSAwIDAtNjRIOTZhMzIgMzIgMCAwIDAtMjQuNDQ4IDUyLjY0bDE4OS4wODggMjI0YTMyIDMyIDAgMCAwIDQ4Ljg5Ni00MS4yOEwxNjQuODk2IDY0MHoiICA+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgaWQ9Imljb24tc2hleGlhbmd0b3UiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxwYXRoIGQ9Ik05MDcuNzEyIDY0Mi41OTJsLTIuNjI0LTMwMi41OTItMjA0LjI1NiAxNDUuMDU2IDIwNi44OCAxNTcuNTM2eiBtLTM5LjY4LTM1NC43ODRhNjQgNjQgMCAwIDEgMTAxLjA1NiA1MS42NDhsMi42MjQgMzAyLjU5MmE2NCA2NCAwIDAgMS0xMDIuNzUyIDUxLjQ1NmwtMjA2LjkxMi0xNTcuNTM2YTY0IDY0IDAgMCAxIDEuNzI4LTEwMy4xMDRsMjA0LjI1Ni0xNDUuMDU2eiIgID48L3BhdGg+PHBhdGggZD0iTTE0NCAyNTZhMzIgMzIgMCAwIDAtMzIgMzJ2NDE3LjM3NmEzMiAzMiAwIDAgMCAzMiAzMmg0NTYuMzJhMzIgMzIgMCAwIDAgMzItMzJWMjg4YTMyIDMyIDAgMCAwLTMyLTMySDE0NHogbTAtNjRoNDU2LjMyYTk2IDk2IDAgMCAxIDk2IDk2djQxNy4zNzZhOTYgOTYgMCAwIDEtOTYgOTZIMTQ0YTk2IDk2IDAgMCAxLTk2LTk2VjI4OGE5NiA5NiAwIDAgMSA5Ni05NnoiICA+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgaWQ9Imljb24tZW50ZXIiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxwYXRoIGQ9Ik02OTMuNzkyIDQ5OC4yNGwtMzIwLTI5Ny42NjRhMzIgMzIgMCAwIDAtNDMuNTg0IDQ2Ljg0OGwyOTUuMzYgMjc0Ljc1Mi0yOTUuODQgMjg2Ljg0OGEzMS45NjggMzEuOTY4IDAgMSAwIDQ0LjU0NCA0NS45MmwzMjAtMzEwLjI3MmEzMS45NjggMzEuOTY4IDAgMCAwLTAuNDgtNDYuNCIgID48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCBpZD0iaWNvbi1sb2NrX2ZpbGwiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxwYXRoIGQ9Ik0zOTQuMzA0IDMxNi42MDhBMTI0LjY3MiAxMjQuNjcyIDAgMCAxIDUxOC43MiAxOTJhMTI0LjcwNCAxMjQuNzA0IDAgMCAxIDEyNC40OCAxMjQuNjA4VjQxNmgtMjQ4Ljg5NlYzMTYuNjA4ek01NDQgNzA0YTMyIDMyIDAgMCAxLTY0IDB2LTEyOGEzMiAzMiAwIDAgMSA2NCAwdjEyOHogbTI1Ni4yNTYtMjg4SDcwNy4yVjMxNi42MDhBMTg4LjczNiAxODguNzM2IDAgMCAwIDUxOC43MiAxMjhjLTEwMy45MDQgMC0xODguNDE2IDg0LjYwOC0xODguNDE2IDE4OC42MDhWNDE2aC0xMDYuNTZBNjQgNjQgMCAwIDAgMTYwIDQ4MC4wOTZ2MzE5Ljg0QTY0IDY0IDAgMCAwIDIyMy43NDQgODY0aDU3Ni41MTJBNjQgNjQgMCAwIDAgODY0IDc5OS45MzZ2LTMxOS44NEE2NCA2NCAwIDAgMCA4MDAuMjU2IDQxNnoiICA+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgaWQ9Imljb24tbG9jayIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCI+PHBhdGggZD0iTTIyNCA3OTkuOTM2di0zMTkuODRMMjIzLjc0NCA0ODAgODAwIDQ4MC4wOTYgODAwLjI1NiA4MDAgMjI0IDc5OS45MzZ6IG0xNzAuMzA0LTQ4My4zMjhBMTI0LjY3MiAxMjQuNjcyIDAgMCAxIDUxOC43MiAxOTJhMTI0LjcwNCAxMjQuNzA0IDAgMCAxIDEyNC40OCAxMjQuNjA4VjQxNmgtMjQ4Ljg5NlYzMTYuNjA4ek04MDAuMjU2IDQxNkg3MDcuMlYzMTYuNjA4QTE4OC43MzYgMTg4LjczNiAwIDAgMCA1MTguNzIgMTI4Yy0xMDMuOTA0IDAtMTg4LjQxNiA4NC42MDgtMTg4LjQxNiAxODguNjA4VjQxNmgtMTA2LjU2QTY0IDY0IDAgMCAwIDE2MCA0ODAuMDk2djMxOS44NEE2NCA2NCAwIDAgMCAyMjMuNzQ0IDg2NGg1NzYuNTEyQTY0IDY0IDAgMCAwIDg2NCA3OTkuOTM2di0zMTkuODRBNjQgNjQgMCAwIDAgODAwLjI1NiA0MTZ6IiAgPjwvcGF0aD48cGF0aCBkPSJNNTEyIDU0NGEzMiAzMiAwIDAgMC0zMiAzMnYxMjhhMzIgMzIgMCAwIDAgNjQgMHYtMTI4YTMyIDMyIDAgMCAwLTMyLTMyIiAgPjwvcGF0aD48L3N5bWJvbD48c3ltYm9sIGlkPSJpY29uLXBlb3BsZV9maWxsIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Ij48cGF0aCBkPSJNODEzLjcyOCA2NDBjLTMuOTA0LTEuNzI4LTU4LjU2LTI1LjYtMTI5LjMxMi00NS43OTJhODgzLjYxNiA4ODMuNjE2IDAgMCAwLTcyLjYwOC0xNy41NjhjMzYuMDk2LTMwLjU5MiA1OS41NTItNzUuNjggNTkuNTUyLTEyNi42NTZ2LTEyMy4xMDRBMTY3LjE2OCAxNjcuMTY4IDAgMCAwIDUwNC4xOTIgMTYwYy05Mi4xNiAwLTE2Ny4yIDc0LjcyLTE2Ny4yIDE2Ni44OHYxMjMuMTA0YzAgNTIuMzUyIDI0Ljc2OCA5OC42MjQgNjIuNzIgMTI5LjI0OC0yNS40NzIgNS40MDgtNTAuMTEyIDExLjkwNC03Mi44IDE4LjY4OGExMDk4LjY1NiAxMDk4LjY1NiAwIDAgMC0xMTUuNjQ4IDQxLjY2NEMxODIuMDE2IDY1MS4zMjggMTYwIDY4NC4xOTIgMTYwIDcxNnYxMzEuNjhsMS42OTYgNC45OTJjOS41MDQgMjcuOTM2IDM1LjEzNiA0Ni42ODggNjMuODA4IDQ2LjY4OGg1NzIuOTkyYTY1LjUzNiA2NS41MzYgMCAwIDAgNjQuOTYtNTYuOTZsMC41NDQtMTI2LjRjMC0zMS41ODQtMjEuOTUyLTY0LjM4NC01MC4yNzItNzYiICA+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgaWQ9Imljb24tcGVvcGxlMSIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCI+PHBhdGggZD0iTTgwMCA4MzUuMzI4bC01NzQuNDk2IDAuMDMyQTIuNDY0IDIuNDY0IDAgMCAxIDIyNCA4MzQuNjU2di0xMTguNjU2YzAtNS44NTYgNS45Mi0xNC45NDQgMTIuMDk2LTE3LjQ0IDEuMDU2LTAuNDQ4IDY5LjQwOC0zMC4yNzIgMTQ5Ljk1Mi01MC40NjQgNDEuMjQ4LTEwLjMzNiA4NS42MzItMTguMjA4IDEyNS45NTItMTguMjA4IDM2LjY0IDAgNzYuNzM2IDYuNDk2IDExNC44MTYgMTUuNDU2YTEwNjEuNiAxMDYxLjYgMCAwIDEgMTYxLjg1NiA1My41MzZjNS4zMTIgMi4xNzYgMTEuMzI4IDExLjI5NiAxMS4zMjggMTcuMTJ2MTE5LjM2ek00MDAuOTkyIDMyNi44OEExMDMuMTM2IDEwMy4xMzYgMCAwIDEgNTA0LjE2IDIyNGExMDMuMTY4IDEwMy4xNjggMCAwIDEgMTAzLjIgMTAyLjg4djEyMy4xMDRhMTAzLjE2OCAxMDMuMTY4IDAgMCAxLTEwMy4yIDEwMi44OCAxMDMuMTM2IDEwMy4xMzYgMCAwIDEtMTAzLjE2OC0xMDIuODh2LTEyMy4xMDR6TTgxMy43MjggNjQwYy0zLjkwNC0xLjcyOC01OC41Ni0yNS42LTEyOS4zMTItNDUuNzZhODgzLjYxNiA4ODMuNjE2IDAgMCAwLTcyLjYwOC0xNy42YzM2LjA5Ni0zMC41OTIgNTkuNTUyLTc1LjY4IDU5LjU1Mi0xMjYuNjU2di0xMjMuMTA0QTE2Ny4xNjggMTY3LjE2OCAwIDAgMCA1MDQuMTkyIDE2MGMtOTIuMTYgMC0xNjcuMiA3NC43Mi0xNjcuMiAxNjYuODh2MTIzLjEwNGMwIDUyLjM1MiAyNC43NjggOTguNjI0IDYyLjcyIDEyOS4yOC0yNS40NzIgNS4zNzYtNTAuMTEyIDExLjg3Mi03Mi44IDE4LjY1NmExMDk4LjY1NiAxMDk4LjY1NiAwIDAgMC0xMTUuNjQ4IDQxLjY2NEMxODIuMDE2IDY1MS4zMjggMTYwIDY4NC4xOTIgMTYwIDcxNnYxMzEuNjhsMS42OTYgNC45OTJjOS41MDQgMjcuOTM2IDM1LjEzNiA0Ni43MiA2My44MDggNDYuNzJoNTcyLjk5MmE2NS41MzYgNjUuNTM2IDAgMCAwIDY0Ljk2LTU2Ljk2bDAuNTQ0LTEyNi40YzAtMzEuNjE2LTIxLjk1Mi02NC40MTYtNTAuMjcyLTc2LjAzMnoiICA+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgaWQ9Imljb24tcHJvbXB0X2ZpbGwiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxwYXRoIGQ9Ik01NDQgNTc2YTMyIDMyIDAgMCAxLTY0IDB2LTI1NmEzMiAzMiAwIDAgMSA2NCAwdjI1NnogbS0zMiAxNjBhMzIgMzIgMCAxIDEgMC02NCAzMiAzMiAwIDAgMSAwIDY0eiBtMC02MDhDMzAwLjI1NiAxMjggMTI4IDMwMC4yNTYgMTI4IDUxMnMxNzIuMjU2IDM4NCAzODQgMzg0IDM4NC0xNzIuMjU2IDM4NC0zODRTNzIzLjc0NCAxMjggNTEyIDEyOHoiICA+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgaWQ9Imljb24tcHJvbXB0IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Ij48cGF0aCBkPSJNNTEyIDgzMmMtMTc2LjQ0OCAwLTMyMC0xNDMuNTUyLTMyMC0zMjAgMC0xMDQuMzg0IDUwLjQ2NC0xOTYuOTI4IDEyOC0yNTUuMzkyQTMxOC4wMTYgMzE4LjAxNiAwIDAgMSA1MTIgMTkyYzcyLjA5NiAwIDEzOC40MzIgMjQuMjU2IDE5MiA2NC42MDggNzcuNTM2IDU4LjQ2NCAxMjggMTUxLjAwOCAxMjggMjU1LjM5MiAwIDE3Ni40NDgtMTQzLjU1MiAzMjAtMzIwIDMyMG0xOTItNjUyLjAzMkEzODEuMjE2IDM4MS4yMTYgMCAwIDAgNTEyIDEyOGMtNjkuOTg0IDAtMTM1LjQyNCAxOS4xMzYtMTkyIDUxLjk2OEMyMDUuNDA4IDI0Ni40OTYgMTI4IDM3MC4yNCAxMjggNTEyYzAgMjExLjc0NCAxNzIuMjU2IDM4NCAzODQgMzg0czM4NC0xNzIuMjU2IDM4NC0zODRjMC0xNDEuNzYtNzcuNDA4LTI2NS41MDQtMTkyLTMzMi4wMzIiICA+PC9wYXRoPjxwYXRoIGQ9Ik01MTIgNDE2YTMyIDMyIDAgMCAwLTMyIDMydjI1NmEzMiAzMiAwIDAgMCA2NCAwdi0yNTZhMzIgMzIgMCAwIDAtMzItMzJNNTEyIDI4OGEzMiAzMiAwIDEgMCAwIDY0IDMyIDMyIDAgMCAwIDAtNjQiICA+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgaWQ9Imljb24tcmV0dXJuIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Ij48cGF0aCBkPSJNNjk0LjI3MiA4MDkuMDI0bC0yOTUuODA4LTI4Ni44NDggMjk1LjM2LTI3NC43NTJhMzIgMzIgMCAwIDAtNDMuNjE2LTQ2Ljg0OGwtMzIwIDI5Ny42OTZhMzIgMzIgMCAwIDAtMC41MTIgNDYuNGwzMjAgMzEwLjMwNGEzMi4wMzIgMzIuMDMyIDAgMCAwIDQ0LjU3Ni00NS45NTIiICA+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgaWQ9Imljb24tdGltZV9maWxsIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Ij48cGF0aCBkPSJNNjQxLjkyIDY0OC45NmEzMS45MDQgMzEuOTA0IDAgMCAxLTQ1LjI0OCAwbC0xMDcuMjk2LTEwNy4yMzJhMzEuODcyIDMxLjg3MiAwIDAgMS05LjM3Ni0yMi42MjRWMzIwYTMyIDMyIDAgMCAxIDY0IDB2MTg1Ljg1Nmw5Ny45MiA5Ny44ODhhMzEuOTY4IDMxLjk2OCAwIDAgMSAwIDQ1LjI0OE01MTIgMTI4QzMwMC4yNTYgMTI4IDEyOCAzMDAuMjU2IDEyOCA1MTJzMTcyLjI1NiAzODQgMzg0IDM4NCAzODQtMTcyLjI1NiAzODQtMzg0UzcyMy43NDQgMTI4IDUxMiAxMjgiICA+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgaWQ9Imljb24tdGltZSIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCI+PHBhdGggZD0iTTUxMiA4MzJjLTE3Ni40NDggMC0zMjAtMTQzLjU1Mi0zMjAtMzIwUzMzNS41NTIgMTkyIDUxMiAxOTJzMzIwIDE0My41NTIgMzIwIDMyMC0xNDMuNTUyIDMyMC0zMjAgMzIwbTAtNzA0QzMwMC4yNTYgMTI4IDEyOCAzMDAuMjU2IDEyOCA1MTJzMTcyLjI1NiAzODQgMzg0IDM4NCAzODQtMTcyLjI1NiAzODQtMzg0UzcyMy43NDQgMTI4IDUxMiAxMjgiICA+PC9wYXRoPjxwYXRoIGQ9Ik01NDQgNTA1Ljg1NlYzMjBhMzIgMzIgMCAwIDAtNjQgMHYxOTkuMTA0YzAgOC40OCAzLjM2IDE2LjY0IDkuMzc2IDIyLjYyNGwxMDcuMjk2IDEwNy4yOTZhMzEuOTA0IDMxLjkwNCAwIDAgMCA0NS4yNDggMCAzMiAzMiAwIDAgMCAwLTQ1LjI0OEw1NDQgNTA1Ljg1NnoiICA+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgaWQ9Imljb24tdW5sb2NrX2ZpbGwiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxwYXRoIGQ9Ik01NDQgNzA0YTMyIDMyIDAgMCAxLTY0IDB2LTEyOGEzMiAzMiAwIDAgMSA2NCAwdjEyOHogbTI1Ni4yNTYtMjg4SDM5NC4zMDRWMzE2LjYwOEExMjQuNjcyIDEyNC42NzIgMCAwIDEgNTE4LjcyIDE5MmExMjQuNzA0IDEyNC43MDQgMCAwIDEgMTI0LjQ4IDEyNC42MDggMzIgMzIgMCAxIDAgNjQgMEExODguNzM2IDE4OC43MzYgMCAwIDAgNTE4LjcyIDEyOGMtMTAzLjkwNCAwLTE4OC40MTYgODQuNjA4LTE4OC40MTYgMTg4LjYwOFY0MTZoLTEwNi41NkE2NCA2NCAwIDAgMCAxNjAgNDgwLjA5NnYzMTkuODRBNjQgNjQgMCAwIDAgMjIzLjc0NCA4NjRoNTc2LjUxMkE2NCA2NCAwIDAgMCA4NjQgNzk5LjkzNnYtMzE5Ljg0QTY0IDY0IDAgMCAwIDgwMC4yNTYgNDE2eiIgID48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCBpZD0iaWNvbi11bmxvY2siIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxwYXRoIGQ9Ik0yMjQgNzk5LjkzNnYtMzE5Ljg0TDIyMy43NDQgNDgwaDEyNC44MzJhMzEuNDg4IDMxLjQ4OCAwIDAgMCAxMy43MjggMy4zOTIgMzEuMzYgMzEuMzYgMCAwIDAgMTMuNjk2LTMuMzZsNDI0IDAuMDY0IDAuMjU2IDMxOS45MDRMMjI0IDc5OS45MzZ6TTgwMC4yNTYgNDE2SDM5NC4zMDRWMzE2LjYwOEExMjQuNjcyIDEyNC42NzIgMCAwIDEgNTE4LjcyIDE5MmExMjQuNzA0IDEyNC43MDQgMCAwIDEgMTI0LjQ4IDEyNC42MDggMzIgMzIgMCAxIDAgNjQgMEExODguNzM2IDE4OC43MzYgMCAwIDAgNTE4LjcyIDEyOGMtMTAzLjkwNCAwLTE4OC40MTYgODQuNjA4LTE4OC40MTYgMTg4LjYwOFY0MTZoLTEwNi41NkE2NCA2NCAwIDAgMCAxNjAgNDgwLjA5NnYzMTkuODRBNjQgNjQgMCAwIDAgMjIzLjc0NCA4NjRoNTc2LjUxMkE2NCA2NCAwIDAgMCA4NjQgNzk5LjkzNnYtMzE5Ljg0QTY0IDY0IDAgMCAwIDgwMC4yNTYgNDE2eiIgID48L3BhdGg+PHBhdGggZD0iTTUxMiA1NDRhMzIgMzIgMCAwIDAtMzIgMzJ2MTI4YTMyIDMyIDAgMCAwIDY0IDB2LTEyOGEzMiAzMiAwIDAgMC0zMi0zMiIgID48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCBpZD0iaWNvbi1zZWFyY2giIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxwYXRoIGQ9Ik0xOTIgNDgwYTI1NiAyNTYgMCAxIDEgNTEyIDAgMjU2IDI1NiAwIDAgMS01MTIgMG02MzEuNzc2IDM2Mi40OTZsLTE0My4yLTE0My4xNjhBMzE4LjQ2NCAzMTguNDY0IDAgMCAwIDc2OCA0ODBjMC0xNzYuNzM2LTE0My4yNjQtMzIwLTMyMC0zMjBTMTI4IDMwMy4yNjQgMTI4IDQ4MHMxNDMuMjY0IDMyMCAzMjAgMzIwYTMxOC4wMTYgMzE4LjAxNiAwIDAgMCAxODQuMTYtNTguNTkybDE0Ni4zMzYgMTQ2LjM2OGMxMi41MTIgMTIuNDggMzIuNzY4IDEyLjQ4IDQ1LjI4IDAgMTIuNDgtMTIuNTEyIDEyLjQ4LTMyLjc2OCAwLTQ1LjI4IiAgPjwvcGF0aD48L3N5bWJvbD48c3ltYm9sIGlkPSJpY29uLXBhY2t1cCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCI+PHBhdGggZD0iTTc5My4wMjQgNzEwLjI3MmEzMiAzMiAwIDEgMCA0NS45NTItNDQuNTQ0bC0zMTAuMzA0LTMyMGEzMiAzMiAwIDAgMC00Ni40IDAuNDhsLTI5Ny42OTYgMzIwYTMyIDMyIDAgMCAwIDQ2Ljg0OCA0My41ODRsMjc0Ljc1Mi0yOTUuMzI4IDI4Ni44NDggMjk1LjgwOHoiICA+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgaWQ9Imljb24tdW5mb2xkMSIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCI+PHBhdGggZD0iTTIzMS40MjQgMzQ2LjIwOGEzMiAzMiAwIDAgMC00Ni44NDggNDMuNTg0bDI5Ny42OTYgMzIwYTMyIDMyIDAgMCAwIDQ2LjQgMC40OGwzMTAuMzA0LTMyMGEzMiAzMiAwIDEgMC00NS45NTItNDQuNTQ0bC0yODYuODQ4IDI5NS44MDgtMjc0Ljc1Mi0yOTUuMzZ6IiAgPjwvcGF0aD48L3N5bWJvbD48c3ltYm9sIGlkPSJpY29uLWJpeWFuIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Ij48cGF0aCBkPSJNOTMwLjAyNCAzMzkuMzU4YzguNjA3LTEyLjg0IDUuNjQ0LTI5LjkxNC01LjY0NC0zOS45MzMtMTIuODQtMTAuMDE4LTI5LjkxNS03LjE5Ni0zOS45MzMgNS42NDQtMS40MTEgMS40MTEtMTU5LjczMSAxODguMjM1LTM0Ny45NjUgMTg4LjIzNS0xODIuNTkgMC0zNDcuOTY2LTE4OC4yMzUtMzQ5LjM3Ny0xODkuNjQ2LTEwLjAxOC0xMS40My0yOC41MDMtMTIuODQtMzkuOTMyLTIuODIyLTExLjQzIDEwLjAxOS0xMi44NCAyOC41MDMtMi44MjIgMzkuOTMzIDIuODIyIDQuMjMzIDM3LjExIDQyLjc1NSA5MS4yOTUgODUuNTFsLTcyLjgxIDc1LjYzMmMtMTEuNDMgMTEuNDMtMTAuMDIgMjkuOTE0IDEuNDEgMzkuOTMzIDIuODIyIDUuNjQ0IDEwLjAxOSA4LjYwNyAxNy4wNzQgOC42MDcgNy4xOTYgMCAxNC4yNTItMi44MjIgMjAuMDM3LTguNjA3bDc4LjQ1NC04MS4yNzdjMzcuMTExIDI1LjY4MSA4MS4yNzcgNDkuOTUxIDEyOS44MTcgNjcuMDI1bC0yOS45MTQgMTAxLjMxNGMtNC4yMzMgMTUuNjYyIDQuMjMzIDMxLjMyNSAyMC4wMzcgMzUuN2g4LjYwN2MxMi44NCAwIDI0LjI3LTguNjA4IDI3LjA5Mi0yMS40NDlsMjkuOTE1LTEwMS4zMTNjMjIuODU5IDQuMjMzIDQ3LjEyOSA3LjE5NiA3MS4yNTggNy4xOTYgMjQuMjcgMCA0OC41NC0yLjgyMiA3MS4yNTgtNy4xOTZsMjkuOTE0IDk5LjkwMmMyLjgyMiAxMi44NCAxNS42NjMgMjEuNDQ4IDI3LjA5MiAyMS40NDggMi44MjMgMCA1LjY0NSAwIDcuMTk3LTEuNDEgMTUuNjYyLTQuMjM0IDI0LjI3LTIwLjAzOCAyMC4wMzctMzUuN2wtMzAuMzM4LTk5LjkwM2M0OC41NC0xNy4wNzQgOTIuNzA2LTQxLjM0NCAxMjkuODE3LTY3LjAyNWw3Ny4wNDMgNzkuODY2YzUuNjQ0IDUuNjQ0IDEyLjg0IDguNjA3IDIwLjAzNyA4LjYwN3MxNC4yNTItMi44MjIgMjAuMDM3LTguNjA3YzExLjQzLTExLjQzIDExLjQzLTI4LjUwNCAxLjQxMS0zOS45MzNsLTcyLjY2OS03NS42MzJjNTguMjc2LTQyLjc1NSA5Mi41NjUtODQuMSA5Mi41NjUtODQuMXogbTAgMCIgID48L3BhdGg+PC9zeW1ib2w+PHN5bWJvbCBpZD0iaWNvbi15YW5qaW5nIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Ij48cGF0aCBkPSJNNTExLjQ2NiAyNjkuNTY5YzE2OS40NTIgMCAzMTUuMzA4IDk5LjM5IDM4My41NjUgMjQyLjg0aDY2LjUxNGMtNzIuMDktMTc3LjkxLTI0Ni4yOTMtMzAzLjUyNy00NTAuMDgtMzAzLjUyNy0yMDMuNzU0IDAtMzc3Ljk1NyAxMjUuNjE3LTQ1MC4wNDYgMzAzLjUyNmg2Ni41MTVjNjguMjU1LTE0My40NDkgMjE0LjExMS0yNDIuODQgMzgzLjUzMi0yNDIuODR6IiAgPjwvcGF0aD48cGF0aCBkPSJNNTExLjQ2NiA3NTUuMjQ4Yy0xNjkuNDIgMC0zMTUuMjc3LTk5LjM5LTM4My41MzItMjQyLjg0SDYxLjQxOUMxMzMuNTA3IDY5MC4zNSAzMDcuNzEgODE1Ljk2NiA1MTEuNDY2IDgxNS45NjZjMjAzLjc4NiAwIDM3Ny45OS0xMjUuNjE3IDQ1MC4wNzktMzAzLjU1OEg4OTUuMDNjLTY4LjI1NyAxNDMuNDUtMjE0LjExMiAyNDIuODQtMzgzLjU2NSAyNDIuODR6IiAgPjwvcGF0aD48cGF0aCBkPSJNMzQ5LjU5NCA1MTIuNDI0YzAgODkuNDEyIDcyLjQ3NCAxNjEuODg2IDE2MS44ODUgMTYxLjg4NiA4OS40MTQgMCAxNjEuODg2LTcyLjQ3NCAxNjEuODg2LTE2MS44ODYgMC04OS40MTQtNzIuNDcyLTE2MS44ODYtMTYxLjg4Ni0xNjEuODg2LTg5LjQxMiAwLTE2MS44ODUgNzIuNDcyLTE2MS44ODUgMTYxLjg4NnogbTI2My4wODQgMGMwIDU1Ljg4LTQ1LjMyIDEwMS4xOTctMTAxLjE5OSAxMDEuMTk3cy0xMDEuMTY2LTQ1LjMxOC0xMDEuMTY2LTEwMS4xOTdjMC01NS44OCA0NS4yODctMTAxLjIgMTAxLjE2Ni0xMDEuMnMxMDEuMTk5IDQ1LjMyIDEwMS4xOTkgMTAxLjJ6IiAgPjwvcGF0aD48L3N5bWJvbD48c3ltYm9sIGlkPSJpY29uLWppYW5oYW8iIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxwYXRoIGQ9Ik05MjggNTQ0SDk2Yy0xOS4yIDAtMzItMTIuOC0zMi0zMnMxMi44LTMyIDMyLTMyaDgzMmMxOS4yIDAgMzIgMTIuOCAzMiAzMnMtMTIuOCAzMi0zMiAzMnoiICA+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgaWQ9Imljb24taWNvbl9jb2RlIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Ij48cGF0aCBkPSJNNTEyIDEwMDUuMzgxODE4Yy0yNy45MjcyNzMgMC01NS44NTQ1NDUtOS4zMDkwOTEtNzkuMTI3MjczLTI3LjkyNzI3M2wtMjc5LjI3MjcyNy0yMzcuMzgxODE4Yy0yNy45MjcyNzMtMjMuMjcyNzI3LTQxLjg5MDkwOS01NS44NTQ1NDUtNDEuODkwOTA5LTkzLjA5MDkwOXYtMzcyLjM2MzYzNmMwLTUxLjIgMjcuOTI3MjczLTkzLjA5MDkwOSA3NC40NzI3MjctMTExLjcwOTA5MUw0NjUuNDU0NTQ1IDQxLjg5MDkwOWMzMi41ODE4MTgtMTMuOTYzNjM2IDY1LjE2MzYzNi0xMy45NjM2MzYgOTcuNzQ1NDU1IDBsMjc5LjI3MjcyNyAxMjEuMDE4MTgyYzQ2LjU0NTQ1NSAxOC42MTgxODIgNzQuNDcyNzI3IDY1LjE2MzYzNiA3NC40NzI3MjggMTExLjcwOTA5MXYzNzIuMzYzNjM2YzAgMzcuMjM2MzY0LTEzLjk2MzYzNiA2OS44MTgxODItNDEuODkwOTEgOTMuMDkwOTA5bC0yNzkuMjcyNzI3IDIzNy4zODE4MThjLTI3LjkyNzI3MyAxOC42MTgxODItNTUuODU0NTQ1IDI3LjkyNzI3My04My43ODE4MTggMjcuOTI3Mjczek01MTIgOTMuMDkwOTA5Yy05LjMwOTA5MSAwLTEzLjk2MzYzNiAwLTIzLjI3MjcyNyA0LjY1NDU0NmwtMjc5LjI3MjcyOCAxMjEuMDE4MTgxYy0yMy4yNzI3MjcgOS4zMDkwOTEtNDEuODkwOTA5IDMyLjU4MTgxOC00MS44OTA5MDkgNTUuODU0NTQ2djM3Mi4zNjM2MzZjMCAxOC42MTgxODIgOS4zMDkwOTEgMzcuMjM2MzY0IDIzLjI3MjcyOCA0Ni41NDU0NTVsMjc5LjI3MjcyNyAyMzcuMzgxODE4YzIzLjI3MjcyNyAxOC42MTgxODIgNTUuODU0NTQ1IDE4LjYxODE4MiA4My43ODE4MTggMGwyNzkuMjcyNzI3LTIzNy4zODE4MThjMTMuOTYzNjM2LTEzLjk2MzYzNiAyMy4yNzI3MjctMjcuOTI3MjczIDIzLjI3MjcyOC00Ni41NDU0NTV2LTM3Mi4zNjM2MzZjMC0yMy4yNzI3MjctMTMuOTYzNjM2LTQ2LjU0NTQ1NS0zNy4yMzYzNjQtNTUuODU0NTQ2IDAgMC0yMDkuNDU0NTQ1LTkzLjA5MDkwOS0yNzkuMjcyNzI3LTEyMS4wMTgxODFDNTMwLjYxODE4MiA5My4wOTA5MDkgNTIxLjMwOTA5MSA5My4wOTA5MDkgNTEyIDkzLjA5MDkwOXoiICA+PC9wYXRoPjxwYXRoIGQ9Ik01NjMuMiA1NTMuODkwOTA5Yy03NC40NzI3MjcgMC0xMzQuOTgxODE4LTYwLjUwOTA5MS0xMzQuOTgxODE4LTEzNC45ODE4MThzNjAuNTA5MDkxLTEzNC45ODE4MTggMTM0Ljk4MTgxOC0xMzQuOTgxODE4UzY5OC4xODE4MTggMzQ0LjQzNjM2NCA2OTguMTgxODE4IDQxOC45MDkwOTFzLTU1Ljg1NDU0NSAxMzQuOTgxODE4LTEzNC45ODE4MTggMTM0Ljk4MTgxOHogbTAtMjA5LjQ1NDU0NWMtNDEuODkwOTA5IDAtNzQuNDcyNzI3IDMyLjU4MTgxOC03NC40NzI3MjcgNzQuNDcyNzI3czMyLjU4MTgxOCA3NC40NzI3MjcgNzQuNDcyNzI3IDc0LjQ3MjcyN2M0MS44OTA5MDkgMCA3NC40NzI3MjctMzIuNTgxODE4IDc0LjQ3MjcyNy03NC40NzI3MjdzLTMyLjU4MTgxOC03NC40NzI3MjctNzQuNDcyNzI3LTc0LjQ3MjcyN3oiICA+PC9wYXRoPjxwYXRoIGQ9Ik0zNzcuMDE4MTgyIDYzNy42NzI3MjdjLTkuMzA5MDkxIDAtMTMuOTYzNjM2LTQuNjU0NTQ1LTIzLjI3MjcyNy05LjMwOTA5MS0xMy45NjM2MzYtMTMuOTYzNjM2LTEzLjk2MzYzNi0zMi41ODE4MTggMC00MS44OTA5MDlMNDY1LjQ1NDU0NSA0NzkuNDE4MTgyYzkuMzA5MDkxLTEzLjk2MzYzNiAyNy45MjcyNzMtMTMuOTYzNjM2IDQxLjg5MDkxIDAgMTMuOTYzNjM2IDEzLjk2MzYzNiAxMy45NjM2MzYgMzIuNTgxODE4IDAgNDEuODkwOTA5bC0xMDcuMDU0NTQ2IDEwNy4wNTQ1NDVjLTQuNjU0NTQ1IDQuNjU0NTQ1LTEzLjk2MzYzNiA5LjMwOTA5MS0yMy4yNzI3MjcgOS4zMDkwOTF6IiAgPjwvcGF0aD48L3N5bWJvbD48c3ltYm9sIGlkPSJpY29uLWljb25fbW9yZV91cCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCI+PHBhdGggZD0iTTUyOS42MSA0NDMuNDNjLTAuODctMC40NS0xLjU5LTEuMTgtMi40OS0xLjU3LTE2LjAxLTcuNy0zNS42LTUuMTgtNDguNDggOC40NUwxODYuMzkgNzU5LjNjLTE1LjkzIDE2Ljg1LTE1LjE3IDQzLjQxIDEuNjUgNTkuMzcgMTYuODUgMTUuOTMgNDMuNDEgMTUuMiA1OS4zNy0xLjY1bDI2Mi4yNy0yNzcuMjQgMjY2LjE3IDI3Ni4xNmMxNi4wOSAxNi42OCA0Mi42NiAxNy4xOSA1OS4zNyAxLjA5IDguNTYtOC4yMyAxMi44NS0xOS4yMyAxMi44NS0zMC4yMyAwLTEwLjUtMy45Mi0yMC45OS0xMS43Ni0yOS4xNEw1NDEuMiA0NTEuNDZjLTAuNTktMC41OS0xLjQtMC44MS0yLjAxLTEuNC0wLjQyLTAuNDUtMC43My0wLjkyLTEuMTgtMS4zNy0yLjUtMi4zOC01LjU1LTMuNjMtOC40LTUuMjZ6IiAgPjwvcGF0aD48cGF0aCBkPSJNNTI5LjYxIDEzNC4yOGMtMC44Ny0wLjQ1LTEuNTktMS4xOC0yLjQ5LTEuNTctMTYuMDEtNy43LTM1LjYtNS4xOC00OC40OCA4LjQ1TDE4Ni4zOSA0NTAuMTVjLTE1LjkzIDE2Ljg1LTE1LjE3IDQzLjQxIDEuNjUgNTkuMzcgMTYuODUgMTUuOTMgNDMuNDEgMTUuMiA1OS4zNy0xLjY1bDI2Mi4yNy0yNzcuMjUgMjY2LjE3IDI3Ni4xNmMxNi4wOSAxNi42OCA0Mi42NiAxNy4xOSA1OS4zNyAxLjA5IDguNTYtOC4yMyAxMi44NS0xOS4yMyAxMi44NS0zMC4yMyAwLTEwLjUtMy45Mi0yMC45OS0xMS43Ni0yOS4xNEw1NDEuMiAxNDIuMzFjLTAuNTktMC41OS0xLjQtMC44MS0yLjAxLTEuNC0wLjQyLTAuNDUtMC43My0wLjkyLTEuMTgtMS4zNy0yLjUtMi4zOC01LjU1LTMuNjQtOC40LTUuMjZ6IiAgPjwvcGF0aD48L3N5bWJvbD48c3ltYm9sIGlkPSJpY29uLWljb25fbW9yZV9kb3duIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Ij48cGF0aCBkPSJNNTI5LjYxIDU4MC41N2MtMC44NyAwLjQ1LTEuNTkgMS4xOC0yLjQ5IDEuNTctMTYuMDEgNy43LTM1LjYgNS4xOC00OC40OC04LjQ1bC0yOTIuMjYtMzA5Yy0xNS45My0xNi44NS0xNS4xNy00My40MSAxLjY1LTU5LjM3IDE2Ljg1LTE1LjkzIDQzLjQxLTE1LjIgNTkuMzcgMS42NWwyNjIuMjcgMjc3LjI1IDI2Ni4xNy0yNzYuMTZjMTYuMDktMTYuNjggNDIuNjYtMTcuMTkgNTkuMzctMS4wOSA4LjU2IDguMjMgMTIuODUgMTkuMjMgMTIuODUgMzAuMjMgMCAxMC41LTMuOTIgMjAuOTktMTEuNzYgMjkuMTRsLTI5NS4xIDMwNi4yYy0wLjU5IDAuNTktMS40IDAuODEtMi4wMSAxLjQtMC40MiAwLjQ1LTAuNzMgMC45Mi0xLjE4IDEuMzctMi41IDIuMzgtNS41NSAzLjYzLTguNCA1LjI2eiIgID48L3BhdGg+PHBhdGggZD0iTTUyOS42MSA4ODkuNzJjLTAuODcgMC40NS0xLjU5IDEuMTgtMi40OSAxLjU3LTE2LjAxIDcuNy0zNS42IDUuMTgtNDguNDgtOC40NWwtMjkyLjI2LTMwOWMtMTUuOTMtMTYuODUtMTUuMTctNDMuNDEgMS42NS01OS4zNyAxNi44NS0xNS45MyA0My40MS0xNS4yIDU5LjM3IDEuNjVsMjYyLjI3IDI3Ny4yNSAyNjYuMTctMjc2LjE1YzE2LjA5LTE2LjY4IDQyLjY2LTE3LjE5IDU5LjM3LTEuMDkgOC41NiA4LjIzIDEyLjg1IDE5LjIzIDEyLjg1IDMwLjIzIDAgMTAuNS0zLjkyIDIwLjk5LTExLjc2IDI5LjE0TDU0MS4yIDg4MS42OWMtMC41OSAwLjU5LTEuNCAwLjgxLTIuMDEgMS40LTAuNDIgMC40NS0wLjczIDAuOTItMS4xOCAxLjM3LTIuNSAyLjM4LTUuNTUgMy42NC04LjQgNS4yNnoiICA+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgaWQ9Imljb24tYnRuX2NpY2xlX3VuY2hvb3NlIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Ij48cGF0aCBkPSJNNTEyIDk1OS44MWMtMjQ2LjkxIDAtNDQ3LjgxLTIwMC45LTQ0Ny44MS00NDcuODFTMjY1LjA5IDY0LjE5IDUxMiA2NC4xOSA5NTkuODEgMjY1LjA5IDk1OS44MSA1MTIgNzU4LjkxIDk1OS44MSA1MTIgOTU5LjgxeiBtMC04NTAuODRjLTIyMi4yNCAwLTQwMy4wMyAxODAuNzgtNDAzLjAzIDQwMy4wM1MyODkuNzYgOTE1LjAzIDUxMiA5MTUuMDMgOTE1LjAzIDczNC4yNCA5MTUuMDMgNTEyIDczNC4yNCAxMDguOTcgNTEyIDEwOC45N3oiICA+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgaWQ9Imljb24taWNvbl9uYW1lIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Ij48cGF0aCBkPSJNOTg4LjQxIDU0OC40MUg4ODEuNjR2LTczLjEyaDEwNi43N2MxOS42NiAwIDM1LjU5LTE2LjM3IDM1LjU5LTM2LjU2cy0xNS45My0zNi41Ni0zNS41OS0zNi41Nkg4NDYuMDRjLTE5LjY2IDAtMzUuNTkgMTYuMzctMzUuNTkgMzYuNTZ2MjYwLjMyYy03OS40NSAxOC41Ni0xMzIuNjMgOTUuNS0xMjMuNTIgMTc4LjY4IDkuMTEgODMuMTkgNzcuNjIgMTQ2LjA0IDE1OS4xIDE0NS45OSA4OC40NSAwIDE2MC4xNi03My42NSAxNjAuMTYtMTY0LjUyLTAuMDktNzYuNjktNTEuNzctMTQzLjE0LTEyNC41Ny0xNjAuMTN2LTc3LjUxaDEwNi43N2MxOS42NiAwIDM1LjU5LTE2LjM3IDM1LjU5LTM2LjU2IDAuMDEtMjAuMjEtMTUuOTMtMzYuNTktMzUuNTctMzYuNTl6IG0tNTMuMzkgMzEwLjc3YzAgNTAuNDgtMzkuODQgOTEuNC04OC45NyA5MS40LTQ5LjE0IDAtODguOTctNDAuOTItODguOTctOTEuNCAwLTUwLjQ4IDM5Ljg0LTkxLjQgODguOTctOTEuNCA0OS4xMyAwIDg4Ljk3IDQwLjkyIDg4Ljk3IDkxLjR6IG0tMzQxLjg4IDgwLjgzbC0wLjk2IDAuMzNjLTIyMS4wNSAxNi41My00NjYuNzYtMi44MS01MTguOTMtMzAuNzUgMTIuNTMtMzQuNTEgOTIuMTgtODUuNDQgMjQ3Ljg4LTEwMi45OSAxOC4wNC0yLjAzIDMxLjcxLTE3LjcgMzEuNzEtMzYuMzV2LTQzLjQ2YzAtMTIuMzktNi4xMi0yMy45NS0xNi4yNy0zMC43MS01Ni45NC0zNy44LTEwNi45Mi0xMDAuMDMtMTM3LjEtMTcwLjY3LTMuMzctNy44My05LjI3LTE0LjIyLTE2LjcyLTE4LjA2LTkuNjQtNC45My0yNC4xNi0yMi43NC0zOC41NC03OS42NC01LjUxLTIxLjc5LTEuNzQtMzcuNDQgMTEuODItNDkuMTcgNy41OC02LjU5IDEyLjE0LTE2LjA4IDEyLjYtMjYuMjggNy42Mi0xNzQuOCAxMDIuNjQtMjc5LjE0IDI1NC4xMS0yNzkuMTQgMTQ4LjQ0IDAgMjM5LjI0IDk4Ljg2IDI0OS4wNiAyNzEuMjEgMC42OCAxMS41OSA2LjY2IDIyLjE1IDE2LjA4IDI4LjQ4IDE0LjQ1IDkuNjkgMTguOCAyMy41NCAxMy43OCA0My41OS0xMy45NSA1NS4xNy0yNy44NCA2Ni44LTMzLjIgNjkuMjEtOC43OSA0LTE1LjY0IDExLjQ5LTE4Ljk3IDIwLjc3LTI3LjggNzcuNDgtODAuNDcgMTQ4LjIyLTE0MC44NyAxODkuMjgtOS45NSA2Ljc3LTE1Ljk1IDE4LjIzLTE1Ljk1IDMwLjQ5djQ0LjA5YzAgMTguNjUgMTMuNjcgMzQuMzEgMzEuNzEgMzYuMzUgMTIuNTcgMS4zOSAzMi4yMSA0LjU0IDU5IDkuMzIgMTkuMzMgMy4zMyAzNy44LTkuOSA0MS4xNC0yOS43NnMtOS42NC0zOC44Mi0yOC45Ny00Mi4yN2MtOC4xOS0xLjQ3LTE2LjM5LTIuODktMjQuNTktNC4yNCA2MC4xNS00OCAxMTAuMjYtMTE3LjQ3IDE0MC42NS0xOTUuNDIgMzMuNDgtMjMuOTUgNDkuMDQtNzAuMjQgNTguOTQtMTA5LjQzIDExLTQzLjUxIDAuMjEtODMuODctMjguOS0xMTEuMzdDNzI0LjMzIDEyMy40MyA2MDMuMzMgMCA0MjIuNzUgMCAyMzUuOSAwIDExMi42MiAxMjcuNzEgOTguMzEgMzM0LjM5Yy0yNS4zNyAyOS4yNS0zMy43OCA2OS4wNy0yMi45OSAxMTEuNjUgMTUuNTUgNjEuNTMgMzUuNDggOTkuMTYgNjMuNyAxMTkuNDEgMzEuMzkgNjguODEgNzkuMDEgMTMwLjQxIDEzNCAxNzMuODlDMTA1Ljk5IDc2NS45OSAwLjMgODM0LjU0IDAuMyA5MTguODFjMCAxMC4zOCAzLjEzIDI1Ljc4IDE4LjAxIDQwIDQ4LjA1IDQ1Ljc3IDIzNS4yMSA2MC40IDQwMC43NCA2MC40IDY4LjMgMCAxMzIuOTMtMi40OSAxODIuNTQtNi4zMyAyLjc3LTAuMjIgNS41MS0wLjc2IDguMTktMS42NGw1LjAyLTEuNjRjMTguNzEtNi4xNyAyOS4wMi0yNi43NCAyMy4wMy00NS45NS0yLjg0LTkuMjUtOS4xNS0xNi45NS0xNy41NC0yMS4zOWEzNC41MDkgMzQuNTA5IDAgMCAwLTI3LjE1LTIuMjV6IiAgPjwvcGF0aD48L3N5bWJvbD48c3ltYm9sIGlkPSJpY29uLWljb25fZXhpdCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCI+PHBhdGggZD0iTTgwMi45MSA0ODQuMzRMNjQ5LjA4IDMyNy4wNmMtMTMuNDEtMTMuNzItMzUuMTYtMTMuNzItNDguNTggMGwtNC4wNSA0LjE0Yy0xMy40MSAxMy43Mi0xMy40MSAzNS45NiAwIDQ5LjY3bDkwLjg4IDkyLjkySDQxOC43N2MtMTguOTcgMC0zNC4zNSAxNS43My0zNC4zNSAzNS4xMnY1Ljg1YzAgMTkuNCAxNS4zOCAzNS4xMiAzNC4zNSAzNS4xMmgyNjguNTZsLTkwLjg4IDkyLjkyYy0xMy40MSAxMy43Mi0xMy40MSAzNS45NSAwIDQ5LjY3bDQuMDUgNC4xNGMxMy40MSAxMy43MiAzNS4xNiAxMy43MiA0OC41OCAwbDE1My44My0xNTcuMjljNy4zOC03LjU1IDExLjc4LTE3LjYgMTEuNzgtMjcuNDlzLTQuMzktMTkuOTQtMTEuNzgtMjcuNDl6IiAgPjwvcGF0aD48cGF0aCBkPSJNNDg0LjQ2IDg4My40NkgxNzIuNDlWMTQwLjA0aDMxNC44NGMxOC45NyAwIDM0LjM1LTE1LjcyIDM0LjM1LTM1LjEydi01Ljg2YzAtMTkuNC0xNS4zOC0zNS4xMi0zNC4zNS0zNS4xMkgxMzIuNDFjLTE4Ljk3IDAtMzQuMzUgMTYuMDQtMzQuMzUgMzUuODNWOTIzLjljMCAxOS43OSAxNS4zOCAzNS44MyAzNC4zNSAzNS44M2g1LjcyYzAuMjkgMCAwLjU0LTAuMTcgMC44My0wLjE4aDM0NS41YzIwLjU1IDAgMzcuMjEtMTcuMDMgMzcuMjEtMzguMDUgMC4wMS0yMS4wMS0xNi42NS0zOC4wNC0zNy4yMS0zOC4wNHoiICA+PC9wYXRoPjwvc3ltYm9sPjxzeW1ib2wgaWQ9Imljb24tYnRuX2Nob29zZSIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCI+PHBhdGggZD0iTTUxMiA2NC41MTJjLTI0Ni43ODQgMC00NDcuNDg4IDIwMC43MDQtNDQ3LjQ4OCA0NDcuNDg4czIwMC43MDQgNDQ3LjQ4OCA0NDcuNDg4IDQ0Ny40ODggNDQ3LjQ4OC0yMDAuNzA0IDQ0Ny40ODgtNDQ3LjQ4OC0yMDAuNzA0LTQ0Ny40ODgtNDQ3LjQ4OC00NDcuNDg4eiBtMjE2LjA2NCAzMzEuMjY0TDQ3MS4wNCA2NTUuMzZoLTAuNTEydjAuNTEyYy0yLjA0OCAyLjA0OC00LjYwOCAzLjA3Mi03LjE2OCA0LjYwOC0xLjAyNCAwLjUxMi0yLjA0OCAxLjUzNi0zLjU4NCAyLjA0OC00LjA5NiAxLjUzNi03LjY4IDIuNTYtMTEuNzc2IDIuNTYtNC4wOTYgMC04LjE5Mi0xLjAyNC0xMi4yODgtMi41Ni0xLjAyNC0wLjUxMi0yLjU2LTEuNTM2LTMuNTg0LTIuNTYtMi41Ni0xLjUzNi00LjYwOC0yLjU2LTYuNjU2LTQuNjA4di0wLjUxMkg0MjQuOTZsLTEyNi40NjQtMTMwLjA0OGMtMTIuMjg4LTEyLjgtMTIuMjg4LTMzLjI4IDAuNTEyLTQ1LjU2OCAxMi44LTEyLjI4OCAzMi43NjgtMTIuMjg4IDQ1LjU2OCAwLjUxMmwxMDMuNDI0IDEwNi40OTYgMjMzLjk4NC0yMzYuNTQ0YzEyLjI4OC0xMi44IDMyLjc2OC0xMi44IDQ1LjU2OC0wLjUxMiAxMi44IDEzLjMxMiAxMi44IDMzLjc5MiAwLjUxMiA0Ni41OTJ6IiAgPjwvcGF0aD48L3N5bWJvbD48c3ltYm9sIGlkPSJpY29uLXVwIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Ij48cGF0aCBkPSJNODIyLjc4NCA1MDIuNzg0Yy0xMi4yODggMTIuMjg4LTMyLjc2OCAxMi4yODgtNDUuMDU2IDBsLTIzMy40NzItMjMzLjQ3MnY1NjIuNjg4YzAgMTcuOTItMTQuMzM2IDMyLjI1Ni0zMi4yNTYgMzIuMjU2cy0zMi4yNTYtMTQuMzM2LTMyLjI1Ni0zMi4yNTZWMjY5LjMxMkwyNDYuNzg0IDUwMi43ODRjLTEyLjI4OCAxMi4yODgtMzIuNzY4IDEyLjI4OC00NS4wNTYgMC0xMi4yODgtMTIuMjg4LTEyLjI4OC0zMi43NjggMC00NS4wNTZsMjg4LjI1Ni0yODcuNzQ0YzMuMDcyLTMuMDcyIDYuNjU2LTUuMTIgMTAuMjQtNy4xNjggNC4wOTYtMS41MzYgOC4xOTItMi41NiAxMi4yODgtMi41NiA0LjA5NiAwIDguMTkyIDEuMDI0IDEyLjI4OCAyLjU2IDQuMDk2IDEuNTM2IDcuNjggNC4wOTYgMTAuMjQgNy4xNjhsMjg4LjI1NiAyODcuNzQ0YzExLjc3NiAxMi4yODggMTEuNzc2IDMyLjI1Ni0wLjUxMiA0NS4wNTZ6IiAgPjwvcGF0aD48L3N5bWJvbD48L3N2Zz4nLGM9KGE9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoInNjcmlwdCIpKVthLmxlbmd0aC0xXS5nZXRBdHRyaWJ1dGUoImRhdGEtaW5qZWN0Y3NzIik7aWYoYyYmIXMuX19pY29uZm9udF9fc3ZnX19jc3NpbmplY3RfXyl7cy5fX2ljb25mb250X19zdmdfX2Nzc2luamVjdF9fPSEwO3RyeXtkb2N1bWVudC53cml0ZSgiPHN0eWxlPi5zdmdmb250IHtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7d2lkdGg6IDFlbTtoZWlnaHQ6IDFlbTtmaWxsOiBjdXJyZW50Q29sb3I7dmVydGljYWwtYWxpZ246IC0wLjFlbTtmb250LXNpemU6MTZweDt9PC9zdHlsZT4iKX1jYXRjaChhKXtjb25zb2xlJiZjb25zb2xlLmxvZyhhKX19IWZ1bmN0aW9uKGEpe2lmKGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIpaWYoflsiY29tcGxldGUiLCJsb2FkZWQiLCJpbnRlcmFjdGl2ZSJdLmluZGV4T2YoZG9jdW1lbnQucmVhZHlTdGF0ZSkpc2V0VGltZW91dChhLDApO2Vsc2V7dmFyIGM9ZnVuY3Rpb24oKXtkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCJET01Db250ZW50TG9hZGVkIixjLCExKSxhKCl9O2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoIkRPTUNvbnRlbnRMb2FkZWQiLGMsITEpfWVsc2UgZG9jdW1lbnQuYXR0YWNoRXZlbnQmJihsPWEsdD1zLmRvY3VtZW50LGk9ITEsKGg9ZnVuY3Rpb24oKXt0cnl7dC5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGwoImxlZnQiKX1jYXRjaChhKXtyZXR1cm4gdm9pZCBzZXRUaW1lb3V0KGgsNTApfW8oKX0pKCksdC5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXsiY29tcGxldGUiPT10LnJlYWR5U3RhdGUmJih0Lm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLG8oKSl9KTtmdW5jdGlvbiBvKCl7aXx8KGk9ITAsbCgpKX12YXIgbCx0LGksaH0oZnVuY3Rpb24oKXt2YXIgYSxjOyhhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImRpdiIpKS5pbm5lckhUTUw9byxvPW51bGwsKGM9YS5nZXRFbGVtZW50c0J5VGFnTmFtZSgic3ZnIilbMF0pJiYoYy5zZXRBdHRyaWJ1dGUoImFyaWEtaGlkZGVuIiwidHJ1ZSIpLGMuc3R5bGUucG9zaXRpb249ImFic29sdXRlIixjLnN0eWxlLndpZHRoPTAsYy5zdHlsZS5oZWlnaHQ9MCxjLnN0eWxlLm92ZXJmbG93PSJoaWRkZW4iLGZ1bmN0aW9uKGEsYyl7Yy5maXJzdENoaWxkP2Z1bmN0aW9uKGEsYyl7Yy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLGMpfShhLGMuZmlyc3RDaGlsZCk6Yy5hcHBlbmRDaGlsZChhKX0oYyxkb2N1bWVudC5ib2R5KSl9KX0od2luZG93KTs=", self.location);
  let script = document.createElement("script");
  script.setAttribute("src", iconfontUrl);
  document.head.appendChild(script);
  script.onload = script.onreadystatechange = function() {
    script = null;
  };
}
const _sfc_main$g = {
  name: "plIcon",
  componentName: "plIcon",
  props: {
    name: {
      type: String,
      default: ""
    },
    src: {
      type: String,
      default: ""
    },
    fill: String,
    stroke: String
  },
  setup(props) {
    loadSvgIcon();
    const style = computed(() => {
      if (props.src) {
        return {
          backgroundImage: "url(" + props.src + ")"
        };
      } else {
        return null;
      }
    });
    const href = computed(() => {
      return props.name ? "#" + props.name : "";
    });
    return {
      style,
      href
    };
  }
};
const _hoisted_1$l = {
  key: 0,
  class: "icon-svg",
  "aria-hidden": "true"
};
const _hoisted_2$j = ["fill", "stroke", "xlink:href"];
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("i", mergeProps({ class: "pl-icon" }, _ctx.$attrs, { style: $setup.style }), [
    $setup.href && !$props.src ? (openBlock(), createElementBlock("svg", _hoisted_1$l, [
      createElementVNode("use", {
        fill: $props.fill,
        stroke: $props.stroke,
        "xlink:href": $setup.href
      }, null, 8, _hoisted_2$j)
    ])) : createCommentVNode("", true)
  ], 16);
}
var Icon = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$d]]);
Icon.install = function(App) {
  App.component(Icon.name, Icon);
};
var index_vue_vue_type_style_index_0_lang$b = "";
const _sfc_main$f = {
  name: "plInput",
  componentName: "plInput",
  components: {
    iconClose: render$8
  },
  props: {
    rules: {
      type: Array,
      default() {
        return [];
      }
    },
    size: String,
    type: {
      type: String,
      default: "text"
    },
    value: [String, Number],
    wrap: Boolean,
    disabled: {
      type: Boolean,
      default: void 0
    },
    required: Boolean,
    rows: String,
    cols: String,
    showError: {
      type: Boolean,
      default: void 0
    },
    label: String,
    labelWidth: String,
    clearable: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const app = getCurrentInstance();
    const input = ref(null);
    const formSize = nullish(props.size, inject("size", null), "normal");
    const formLabelWidth = nullish(props.labelWidth, inject("labelWidth", null));
    const formDisabled = nullish(props.disabled, inject("disabled", null), false);
    const formShowError = nullish(props.showError, inject("showError", null), true);
    const formUpdateItems = inject("updateItems", () => {
    });
    const formRemoveItem = inject("removeItem", () => {
    });
    const ruleMessage = ref("");
    const currentValue = computed({
      get: () => {
        return props.value === void 0 ? "" : props.value;
      },
      set: (val) => {
        context.emit("update:value", val);
      }
    });
    const focused = ref(false);
    const handlers = [];
    const showClear = computed(() => {
      return props.clearable && !formDisabled && currentValue.value !== "" && focused.value;
    });
    const validateField = async () => {
      if (!Array.isArray(props.rules) || !props.rules.length) {
        return false;
      }
      try {
        await validate2(props.rules, currentValue.value, "string");
        ruleMessage.value = "";
        return Promise.resolve();
      } catch (e) {
        ruleMessage.value = e.errors[0].message;
        return Promise.reject(ruleMessage.value);
      }
    };
    const clearValidate = () => {
      ruleMessage.value = "";
    };
    const focus = () => {
      input.value.focus();
    };
    const clear = () => {
      context.emit("clear");
      currentValue.value = "";
      focus();
    };
    const emit = (e) => {
      focused.value = e.type === "focus";
    };
    const bindEvent = () => {
      if (!Array.isArray(props.rules) || !props.rules.length) {
        return false;
      }
      props.rules.forEach((rule) => {
        let event = rule.trigger;
        if (!event) {
          event = "change";
        }
        let handler2 = async () => {
          await nextTick();
          try {
            await validate2([rule], currentValue.value, "string");
            ruleMessage.value = "";
          } catch (e) {
            ruleMessage.value = e.errors[0].message;
          }
        };
        input.value.addEventListener(event, handler2);
        handlers.push({ event, handler: handler2 });
      });
    };
    const unbindEvent = () => {
      handlers.forEach((handler2) => {
        input.value.removeEventListener(handler2.event, handler2.handler);
      });
      handlers.length = 0;
    };
    watch(() => props.rules, (val) => {
      if (Array.isArray(val)) {
        unbindEvent();
        bindEvent();
      }
    });
    onMounted(() => {
      bindEvent();
      formUpdateItems(app);
    });
    onBeforeUnmount(() => {
      unbindEvent();
    });
    onUnmounted(() => {
      formRemoveItem(app);
    });
    return {
      input,
      formSize,
      formDisabled,
      ruleMessage,
      formLabelWidth,
      emit,
      currentValue,
      clear,
      showClear,
      validate: validateField,
      clearValidate,
      formShowError
    };
  }
};
const _hoisted_1$k = {
  key: 0,
  class: "pl-input-prepend"
};
const _hoisted_2$i = { class: "pl-input-value" };
const _hoisted_3$h = { class: "pl-input-inner" };
const _hoisted_4$c = ["type", "disabled"];
const _hoisted_5$7 = {
  key: 0,
  class: "pl-input-append"
};
const _hoisted_6$4 = {
  key: 1,
  class: "pl-input-inner"
};
const _hoisted_7$4 = ["rows", "cols", "disabled"];
const _hoisted_8$3 = {
  key: 0,
  class: "pl-input-error"
};
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_iconClose = resolveComponent("iconClose");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["pl-input", [
      $setup.formSize ? "pl-input--" + $setup.formSize : "",
      {
        "is-disabled": $setup.formDisabled,
        "pl-input-group": _ctx.$slots.prepend || _ctx.$slots.append,
        "pl-input-group--append": _ctx.$slots.append,
        "pl-input-group--prepend": _ctx.$slots.prepend,
        "pl-input--error": $setup.ruleMessage && $setup.formShowError
      }
    ]])
  }, [
    createElementVNode("div", {
      class: normalizeClass(["pl-input-cell", { "pl-input-cell--label": ($props.label || _ctx.$slots.label) && !$props.wrap, "pl-input-cell--wrap": ($props.label || _ctx.$slots.label) && $props.wrap }])
    }, [
      createElementVNode("div", {
        class: normalizeClass(["pl-input-title", { "pl-input-title--require": $props.required, "pl-input-title--start": $props.type === "textarea" && !$props.wrap }])
      }, [
        _ctx.$slots.prepend ? (openBlock(), createElementBlock("div", _hoisted_1$k, [
          renderSlot(_ctx.$slots, "prepend")
        ])) : createCommentVNode("", true),
        $props.label || _ctx.$slots.label ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: "pl-input-label",
          style: normalizeStyle({ width: $setup.formLabelWidth })
        }, [
          renderSlot(_ctx.$slots, "label", {}, () => [
            createTextVNode(toDisplayString($props.label), 1)
          ])
        ], 4)) : createCommentVNode("", true)
      ], 2),
      createElementVNode("div", _hoisted_2$i, [
        $props.type !== "textarea" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createElementVNode("div", _hoisted_3$h, [
            $props.type !== "textarea" ? withDirectives((openBlock(), createElementBlock("input", mergeProps({ key: 0 }, _ctx.$attrs, toHandlers({ focus: $setup.emit, blur: $setup.emit }), {
              type: $props.type,
              disabled: $setup.formDisabled,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.currentValue = $event),
              ref: "input"
            }), null, 16, _hoisted_4$c)), [
              [vModelDynamic, $setup.currentValue]
            ]) : createCommentVNode("", true)
          ]),
          withDirectives(createElementVNode("div", {
            class: "pl-input-clear",
            onTouchstart: _cache[1] || (_cache[1] = (...args) => $setup.clear && $setup.clear(...args)),
            onMousedown: _cache[2] || (_cache[2] = (...args) => $setup.clear && $setup.clear(...args))
          }, [
            createVNode(_component_iconClose, { class: "pl-input-clear-icon" })
          ], 544), [
            [vShow, $setup.showClear]
          ]),
          _ctx.$slots.append ? (openBlock(), createElementBlock("div", _hoisted_5$7, [
            renderSlot(_ctx.$slots, "append")
          ])) : createCommentVNode("", true)
        ], 64)) : (openBlock(), createElementBlock("div", _hoisted_6$4, [
          withDirectives(createElementVNode("textarea", mergeProps(_ctx.$attrs, {
            rows: $props.rows,
            cols: $props.cols
          }, toHandlers({ focus: $setup.emit, blur: $setup.emit }), {
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.currentValue = $event),
            ref: "input",
            disabled: $setup.formDisabled
          }), null, 16, _hoisted_7$4), [
            [vModelText, $setup.currentValue]
          ])
        ]))
      ])
    ], 2),
    $setup.ruleMessage && $setup.formShowError ? (openBlock(), createElementBlock("div", _hoisted_8$3, toDisplayString($setup.ruleMessage), 1)) : createCommentVNode("", true)
  ], 2);
}
var Input = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$c]]);
Input.install = function(App) {
  App.component(Input.name, Input);
};
const _sfc_main$e = {
  name: "plListSlot",
  componentName: "plListSlot",
  props: {
    splitSize: {
      type: Number,
      default: 0
    }
  },
  setup(props, { slots }) {
    const nodeMap = /* @__PURE__ */ new Map();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ intersectionRatio, target }) => {
        let vNode = nodeMap.get(target);
        if (!vNode) {
          return false;
        }
        if (intersectionRatio > 0) {
          vNode.toggleShow(true);
        } else {
          vNode.toggleShow(false);
        }
      });
    }, {
      threshold: 0
    });
    const createBlock2 = (nodeList) => {
      const children = [...nodeList];
      const list2 = [];
      while (children.length) {
        let renderList2 = children.splice(0, props.splitSize);
        list2.push(h({
          data() {
            return {
              renderList: renderList2,
              isShow: true,
              clientHeight: "auto",
              timer: null
            };
          },
          render() {
            return h("div", {
              style: {
                height: this.clientHeight,
                overflow: "hidden"
              }
            }, this.isShow ? this.renderList.map((vNode) => h(vNode)) : null);
          },
          mounted() {
            observer.observe(this.$el);
            nodeMap.set(this.$el, this);
            this.clientHeight = this.$el.scrollHeight + "px";
          },
          beforeUnmount() {
            observer.unobserve(this.$el);
            nodeMap.delete(this.$el);
          },
          methods: {
            toggleShow(val) {
              clearTimeout(this.timer);
              this.timer = setTimeout(() => {
                this.isShow = !!val;
              }, 100);
            }
          }
        }));
      }
      return list2;
    };
    const componentList = computed(() => {
      let listWrap = slots.default()[0].children.find((item) => Array.isArray(item.children));
      if (listWrap) {
        return h(Fragment, createBlock2(listWrap.children));
      } else {
        return slots.default;
      }
    });
    onUnmounted(() => {
      observer.disconnect();
      nodeMap.clear();
    });
    return {
      componentList
    };
  }
};
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($setup.componentList), { key: $setup.componentList });
}
var list = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$b]]);
var index_vue_vue_type_style_index_0_lang$a = "";
const _sfc_main$d = {
  name: "plList",
  componentName: "plList",
  components: {
    loading,
    list
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    finished: {
      type: Boolean,
      default: false
    },
    autoLoad: {
      type: [Boolean, Number],
      default: false
    },
    loadingText: {
      type: String,
      default: "\u52A0\u8F7D\u4E2D..."
    },
    refreshText: {
      type: String,
      default: "\u677E\u5F00\u5237\u65B0"
    },
    finishedText: {
      type: String,
      default: "\u52A0\u8F7D\u5B8C\u6210"
    },
    splitSize: {
      type: Number,
      default: 0
    }
  },
  setup(props, context) {
    const listRef = ref(null);
    const innerRef = ref(null);
    const translate = ref(0);
    let transition = ref(null);
    let transDiff = 0;
    let canDrag = true;
    let scrollTop = 0;
    let scrollBottom = 0;
    const innerStyle = computed(() => {
      return {
        "transform": `translateY(${-translate.value}px)`,
        "webkitTransform": `translateY(${-translate.value}px)`,
        ...transition.value ? {
          "transition": transition.value,
          "webkitTransition": transition.value
        } : null
      };
    });
    const touchEvent = (e) => {
      let diff = 0;
      switch (e.type) {
        case "touchstart":
          scrollTop = listRef.value.scrollTop;
          scrollBottom = listRef.value.scrollHeight - scrollTop - listRef.value.clientHeight;
          canDrag = (scrollTop < 2 || scrollBottom < 2) && !props.loading;
          if (canDrag) {
            transDiff = e.touches[0].clientY;
            transition.value = "none";
          }
          break;
        case "touchmove":
          if (canDrag) {
            diff = (transDiff - e.touches[0].clientY) / 2;
            if (scrollTop < 2 && diff < 0 || scrollBottom < 2 && diff > 0) {
              if (diff > 80) {
                diff = 80;
              }
              if (diff < -80) {
                diff = -80;
              }
              translate.value = diff;
              e.preventDefault();
              e.stopPropagation();
            }
          }
          break;
        case "touchend":
        case "touchcancel":
          if (canDrag) {
            if (Math.abs(translate.value) >= 80 && !props.loading) {
              if (translate.value < 0 && scrollTop < 2) {
                context.emit("refresh");
              }
              if (translate.value > 0 && scrollBottom < 2 && !props.finished) {
                context.emit("load");
              }
            }
            nextTick(() => {
              if (!props.loading || props.finished) {
                translate.value = 0;
              }
            });
            transition.value = null;
          }
          break;
      }
    };
    const handlerScroll = ({ target: { scrollTop: scrollTop2, clientHeight, scrollHeight } }) => {
      if (props.autoLoad === false || props.finished || props.loading) {
        return false;
      }
      if (scrollHeight - scrollTop2 - clientHeight <= Number(props.autoLoad)) {
        context.emit("load");
      }
    };
    watch(() => props.loading, (val) => {
      if (!val) {
        translate.value = 0;
        if (!props.finished && !props.loading) {
          nextTick(() => {
            if (listRef.value && innerRef.value && listRef.value.clientHeight > 0 && innerRef.value.scrollHeight < listRef.value.clientHeight) {
              context.emit("load");
            }
          });
        }
      }
    });
    return {
      listRef,
      handlerScroll,
      touchEvent,
      translate,
      innerStyle,
      innerRef
    };
  }
};
const _hoisted_1$j = { class: "pl-list" };
const _hoisted_2$h = { class: "pl-list-loading-top" };
const _hoisted_3$g = { class: "pl-list-refresh-tip" };
const _hoisted_4$b = { class: "pl-list-loading-bottom" };
const _hoisted_5$6 = { class: "pl-list-loading-finished" };
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_loading = resolveComponent("loading");
  const _component_list = resolveComponent("list");
  return openBlock(), createElementBlock("div", _hoisted_1$j, [
    createElementVNode("div", {
      class: "pl-list-wrap",
      ref: "listRef",
      onScroll: _cache[0] || (_cache[0] = withModifiers(($event) => $setup.handlerScroll($event), ["stop"])),
      onTouchstart: _cache[1] || (_cache[1] = withModifiers(($event) => $setup.touchEvent($event), ["stop"])),
      onTouchmove: _cache[2] || (_cache[2] = withModifiers(($event) => $setup.touchEvent($event), ["stop"])),
      onTouchend: _cache[3] || (_cache[3] = withModifiers(($event) => $setup.touchEvent($event), ["stop"])),
      onTouchcancel: _cache[4] || (_cache[4] = withModifiers(($event) => $setup.touchEvent($event), ["stop"]))
    }, [
      withDirectives(createElementVNode("div", _hoisted_2$h, [
        renderSlot(_ctx.$slots, "top-loading", {}, () => [
          createVNode(_component_loading, null, {
            default: withCtx(() => [
              createTextVNode(toDisplayString($props.loadingText), 1)
            ]),
            _: 1
          })
        ])
      ], 512), [
        [vShow, $setup.translate < 0 && $props.loading]
      ]),
      withDirectives(createElementVNode("div", _hoisted_3$g, [
        renderSlot(_ctx.$slots, "top-refresh", {}, () => [
          createTextVNode(toDisplayString($props.refreshText), 1)
        ])
      ], 512), [
        [vShow, $setup.translate < 0 && !$props.loading]
      ]),
      createElementVNode("div", {
        class: "pl-list-inner",
        style: normalizeStyle($setup.innerStyle),
        ref: "innerRef"
      }, [
        $props.splitSize > 0 ? (openBlock(), createBlock(_component_list, {
          key: 0,
          splitSize: $props.splitSize
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 8, ["splitSize"])) : renderSlot(_ctx.$slots, "default", { key: 1 }),
        withDirectives(createElementVNode("div", _hoisted_4$b, [
          renderSlot(_ctx.$slots, "bottom-loading", {}, () => [
            createVNode(_component_loading, null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString($props.loadingText), 1)
              ]),
              _: 1
            })
          ])
        ], 512), [
          [vShow, ($setup.translate > 0 || $setup.translate === 0 && $props.loading) && !$props.finished]
        ]),
        withDirectives(createElementVNode("div", _hoisted_5$6, [
          renderSlot(_ctx.$slots, "bottom-finished", {}, () => [
            createTextVNode(toDisplayString($props.finishedText), 1)
          ])
        ], 512), [
          [vShow, $setup.translate > 0 && $props.finished]
        ])
      ], 4)
    ], 544)
  ]);
}
var List = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$a]]);
List.install = function(App) {
  App.component(List.name, List);
};
var index_vue_vue_type_style_index_0_lang$9 = "";
const _sfc_main$c = {
  name: "plPopup",
  componentName: "plPopup",
  props: {
    position: {
      type: String,
      default: "center"
    },
    clickClose: {
      type: Boolean,
      default: true
    }
  },
  setup(props, { emit }) {
    const isOpen = ref(false);
    const visible = ref(false);
    const open = () => {
      visible.value = true;
      isOpen.value = true;
      emit("open");
    };
    const close = async (e) => {
      await new Promise((resolve) => {
        isOpen.value = false;
        setTimeout(() => {
          visible.value = false;
          resolve();
          if (e && e.type === "click") {
            emit("close");
          }
        }, 300);
      });
    };
    return {
      isOpen,
      visible,
      open,
      close
    };
  }
};
const _hoisted_1$i = /* @__PURE__ */ createElementVNode("div", { class: "pl-popup-layer" }, null, -1);
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    createElementVNode("div", mergeProps(_ctx.$attrs, {
      class: ["pl-popup", [$setup.isOpen ? "pl-popup--open" : "pl-popup--close", $setup.visible ? "" : "pl-popup--hide", "pl-popup--" + $props.position]]
    }), [
      createElementVNode("div", {
        class: "pl-popup-content",
        onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $props.clickClose ? $setup.close($event) : null, ["self"]))
      }, [
        renderSlot(_ctx.$slots, "default")
      ]),
      _hoisted_1$i
    ], 16)
  ]);
}
var popup = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$9]]);
var index_vue_vue_type_style_index_0_lang$8 = "";
const _hoisted_1$h = { class: "pl-picker-content" };
const _hoisted_2$g = { class: "pl-picker-top" };
const _hoisted_3$f = { class: "pl-picker-title" };
const _hoisted_4$a = ["onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"];
const __default__$2 = defineComponent({
  name: "plPicker"
});
const _sfc_main$b = /* @__PURE__ */ Object.assign(__default__$2, {
  props: {
    title: String,
    defaultValue: Array,
    options: {
      type: [Array, Object],
      default() {
        return [];
      }
    },
    prop: {
      type: Object,
      default() {
        return {};
      }
    },
    submit: Function,
    cancel: Function
  },
  setup(__props) {
    const props = __props;
    const popupEl = ref(null);
    const pickerInner = ref(null);
    const pickerHeight = ref(0);
    const currentValue = reactive(Object.assign([], props.defaultValue));
    const translate = reactive([]);
    const transition = ref("");
    let transStart = 0;
    let transEnd = 0;
    const treeToArray = (target, arr = [], index2 = 0) => {
      let children = getChildren(target);
      if (children && children.length) {
        arr.push(children);
        let itemIndex = 0;
        if (currentValue[index2]) {
          itemIndex = children.findIndex((item) => getValue(item) === currentValue[index2]);
          if (itemIndex < 0) {
            itemIndex = 0;
          }
        }
        treeToArray(children[itemIndex], arr, index2++);
      }
      return arr;
    };
    const computedOption = computed(() => {
      if (is(props.options, "object")) {
        return treeToArray(props.options);
      } else if (Array.isArray(props.options) && props.options.every((item) => typeof item === "function")) {
        return props.options.map((func, i) => {
          return func.apply(null, currentValue.slice(0, i + 1));
        });
      }
    });
    const computedIndex = computed(() => {
      return computedOption.value.map((options, i) => {
        let index2 = 0;
        if (currentValue[i]) {
          index2 = options.findIndex((item) => getValue(item) === currentValue[i]);
          if (index2 < 0) {
            index2 = 0;
          }
        }
        return index2;
      });
    });
    const computedPosition = computed(() => {
      return computedOption.value.map((options, i) => {
        return -((computedIndex.value[i] - 2) * pickerHeight.value) + Number(translate[i] || 0);
      });
    });
    const cancel = async () => {
      await popupEl.value.close();
      if (typeof props.cancel === "function") {
        props.cancel();
      }
    };
    const submit = async () => {
      await popupEl.value.close();
      if (typeof props.submit === "function") {
        props.submit(computedOption.value.map((options, i) => getValue(options[computedIndex.value[i]])));
      }
    };
    const handlerTouch = (e, index2) => {
      switch (e.type) {
        case "touchstart":
          transStart = e.touches[0].clientY;
          transition.value = "none";
          break;
        case "touchmove":
          e.preventDefault();
          e.stopPropagation();
          transEnd = e.touches[0].clientY;
          translate[index2] = transEnd - transStart;
          break;
        case "touchend":
        case "touchcancel":
          if (translate[index2]) {
            let itemIndex = computedIndex.value[index2] - Math.round(translate[index2] / pickerHeight.value);
            if (itemIndex < 0) {
              itemIndex = 0;
            }
            if (itemIndex >= computedOption.value[index2].length) {
              itemIndex = computedOption.value[index2].length - 1;
            }
            currentValue[index2] = getValue(computedOption.value[index2][itemIndex]);
            for (let i = index2 + 1; i < currentValue.length; i++) {
              currentValue[i] = getValue(computedOption.value[i][computedIndex.value[i]]);
            }
          }
          transition.value = "";
          translate[index2] = 0;
          break;
      }
    };
    const getLabel = (target) => {
      return props.prop.label && is(target, "object") ? target[props.prop.label] : target;
    };
    const getValue = (target) => {
      return props.prop.value && is(target, "object") ? target[props.prop.value] : target;
    };
    const getChildren = (target) => {
      return props.prop.children && is(target, "object") ? target[props.prop.children] : target;
    };
    onMounted(() => {
      popupEl.value.open();
      pickerHeight.value = pickerInner.value.clientHeight / 5;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(popup, {
        ref_key: "popupEl",
        ref: popupEl,
        position: "bottom",
        onClose: cancel
      }, {
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1$h, [
            createElementVNode("div", _hoisted_2$g, [
              createElementVNode("div", {
                class: "pl-picker-btn--cancel",
                onClick: cancel
              }, "\u53D6\u6D88"),
              createElementVNode("div", _hoisted_3$f, toDisplayString(__props.title), 1),
              createElementVNode("div", {
                class: "pl-picker-btn--submit",
                onClick: submit
              }, "\u786E\u8BA4")
            ]),
            createElementVNode("div", {
              class: "pl-picker-inner",
              ref_key: "pickerInner",
              ref: pickerInner
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(computedOption), (items, i) => {
                return openBlock(), createElementBlock("div", {
                  class: "pl-picker-inner-col",
                  key: i,
                  onTouchstart: ($event) => handlerTouch($event, i),
                  onTouchmove: ($event) => handlerTouch($event, i),
                  onTouchend: ($event) => handlerTouch($event, i),
                  onTouchcancel: ($event) => handlerTouch($event, i),
                  style: normalizeStyle({ width: 1 / unref(computedOption).length * 100 + "%" })
                }, [
                  createElementVNode("ul", {
                    class: "pl-picker-inner-row",
                    style: normalizeStyle({ transform: "translateY(" + unref(computedPosition)[i] + "px)", transition: transition.value })
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(items, (item, j) => {
                      return openBlock(), createElementBlock("li", {
                        class: "pl-picker-inner-item",
                        key: j
                      }, toDisplayString(getLabel(item)), 1);
                    }), 128))
                  ], 4)
                ], 44, _hoisted_4$a);
              }), 128))
            ], 512)
          ])
        ]),
        _: 1
      }, 512);
    };
  }
});
function picker(App) {
  let vNode = h({
    render() {
      return this.display && h(_sfc_main$b, {
        title: this.title,
        defaultValue: this.defaultValue,
        options: this.options,
        prop: this.prop,
        submit: this.submit,
        cancel: this.cancel
      }) || null;
    },
    data() {
      return {
        display: false,
        title: "\u8BF7\u9009\u62E9",
        defaultValue: [],
        options: [],
        prop: {
          label: "label",
          value: "value",
          children: "children"
        },
        submit: () => {
        },
        cancel: () => {
        }
      };
    },
    methods: {
      show() {
        this.display = true;
      },
      hide() {
        this.display = false;
      }
    }
  });
  const vNodeDom = document.createElement("div");
  document.body.appendChild(vNodeDom);
  vNode.appContext = App._context;
  render$c(vNode, vNodeDom);
  App.config.globalProperties.$picker = async function({
    title = "\u8BF7\u9009\u62E9",
    defaultValue = [],
    options = [],
    prop = {
      label: "label",
      value: "value",
      children: "children"
    },
    submit,
    cancel
  }) {
    if (is(title, "string")) {
      vNode.component.proxy.title = title;
    }
    if (is(defaultValue, "array")) {
      vNode.component.proxy.defaultValue = defaultValue;
    }
    if (is(options, "array", "object")) {
      vNode.component.proxy.options = options;
    }
    if (is(prop, "object")) {
      vNode.component.proxy.prop = prop;
    }
    vNode.component.proxy.show();
    return new Promise((resolve, reject) => {
      vNode.component.proxy.submit = async (result) => {
        await vNode.component.proxy.hide();
        typeof submit === "function" ? submit(result) : resolve(result);
      };
      vNode.component.proxy.cancel = async (error) => {
        await vNode.component.proxy.hide();
        typeof cancel === "function" ? cancel(error) : reject(error);
      };
    });
  };
}
popup.install = function(App) {
  App.component(popup.name, popup);
};
var index_vue_vue_type_style_index_0_lang$7 = "";
const _sfc_main$a = {
  name: "plProgress",
  componentName: "plProgress",
  props: {
    progress: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: "bar"
    }
  },
  setup(props) {
    const value = ref(0);
    const finalValue = ref(0);
    const animate = async () => {
      let progress = Number(props.progress);
      if (!progress || progress < 0) {
        progress = 0;
      }
      if (progress > 100) {
        progress = 100;
      }
      finalValue.value = progress;
      let step = Math.round((progress - value.value) / 20);
      while (Math.abs(progress - value.value) > Math.abs(step)) {
        await new Promise((resolve) => {
          value.value += step;
          requestAnimationFrame(resolve);
        });
      }
      if (value.value != finalValue.value) {
        value.value = finalValue.value;
      }
    };
    watch(() => props.progress, () => {
      animate();
    });
    onMounted(() => {
      animate();
    });
    return {
      value,
      finalValue
    };
  }
};
const _hoisted_1$g = {
  key: 0,
  class: "progress-circle",
  viewBox: "0 0 100 100"
};
const _hoisted_2$f = {
  class: "progress-value",
  x: "50",
  y: "57"
};
const _hoisted_3$e = ["stroke-dashoffset"];
const _hoisted_4$9 = {
  key: 1,
  class: "progress-bar"
};
const _hoisted_5$5 = { class: "progress-inner" };
const _hoisted_6$3 = { class: "progress-value" };
const _hoisted_7$3 = { class: "value" };
const _hoisted_8$2 = { class: "placeholder" };
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({ class: "pl-progress" }, _ctx.$attrs), [
    $props.type === "circle" ? (openBlock(), createElementBlock("svg", _hoisted_1$g, [
      createElementVNode("text", _hoisted_2$f, toDisplayString($setup.value) + "%", 1),
      createElementVNode("circle", {
        cx: "50",
        cy: "50",
        r: "45",
        class: normalizeClass(["progress-track", $setup.value >= 100 ? "full" : ""]),
        transform: "rotate(-90 50 50)",
        "stroke-dashoffset": 280 - $setup.value * 2.8
      }, null, 10, _hoisted_3$e)
    ])) : (openBlock(), createElementBlock("div", _hoisted_4$9, [
      createElementVNode("div", _hoisted_5$5, [
        createElementVNode("div", {
          class: "progress-track",
          style: normalizeStyle({ "--track-width": $setup.value + "%" })
        }, null, 4)
      ]),
      createElementVNode("div", _hoisted_6$3, [
        createElementVNode("span", _hoisted_7$3, toDisplayString($setup.value) + "%", 1),
        createElementVNode("span", _hoisted_8$2, toDisplayString($setup.finalValue) + "%", 1)
      ])
    ]))
  ], 16);
}
var Progress = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$8]]);
Progress.install = function(App) {
  App.component(Progress.name, Progress);
};
const _hoisted_1$f = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  style: { "width": "1.2em", "height": "1.2em", "vertical-align": "bottom", "line-height": "0", "fill": "currentColor", "overflow": "hidden" }
};
const _hoisted_2$e = /* @__PURE__ */ createElementVNode("path", { d: "M512 64.512C265.216 64.512 64.512 265.216 64.512 512S265.216 959.488 512 959.488 959.488 758.784 959.488 512 758.784 64.512 512 64.512zm216.064 331.264L471.04 655.36h-.512v.512c-2.048 2.048-4.608 3.072-7.168 4.608-1.024.512-2.048 1.536-3.584 2.048-4.096 1.536-7.68 2.56-11.776 2.56s-8.192-1.024-12.288-2.56c-1.024-.512-2.56-1.536-3.584-2.56-2.56-1.536-4.608-2.56-6.656-4.608v-.512h-.512L298.496 524.8c-12.288-12.8-12.288-33.28.512-45.568 12.8-12.288 32.768-12.288 45.568.512L448 586.24l233.984-236.544c12.288-12.8 32.768-12.8 45.568-.512 12.8 13.312 12.8 33.792.512 46.592z" }, null, -1);
const _hoisted_3$d = [
  _hoisted_2$e
];
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$f, _hoisted_3$d);
}
const _hoisted_1$e = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  style: { "width": "1.2em", "height": "1.2em", "vertical-align": "bottom", "line-height": "0", "fill": "currentColor", "overflow": "hidden" }
};
const _hoisted_2$d = /* @__PURE__ */ createElementVNode("path", { d: "M512 959.81c-246.91 0-447.81-200.9-447.81-447.81S265.09 64.19 512 64.19 959.81 265.09 959.81 512 758.91 959.81 512 959.81zm0-850.84c-222.24 0-403.03 180.78-403.03 403.03S289.76 915.03 512 915.03 915.03 734.24 915.03 512 734.24 108.97 512 108.97z" }, null, -1);
const _hoisted_3$c = [
  _hoisted_2$d
];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$e, _hoisted_3$c);
}
var index_vue_vue_type_style_index_0_lang$6 = "";
const _sfc_main$9 = {
  name: "plRadio",
  componentName: "plRadio",
  components: {
    iconCicleChoose: render$6,
    iconCicleUnchoose: render$5
  },
  props: {
    rules: {
      type: Array,
      default() {
        return [];
      }
    },
    size: String,
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    prop: {
      type: Object,
      default() {
        return { label: "label", value: "value", disabled: "disabled" };
      }
    },
    value: {
      default: null
    },
    wrap: Boolean,
    disabled: {
      type: Boolean,
      default: void 0
    },
    required: Boolean,
    button: Boolean,
    vertical: Boolean,
    showError: {
      type: Boolean,
      default: void 0
    },
    label: String,
    labelWidth: String
  },
  setup(props, context) {
    const app = getCurrentInstance();
    const formSize = nullish(props.size, inject("size", null), "normal");
    const formLabelWidth = nullish(props.labelWidth, inject("labelWidth", null));
    const formDisabled = nullish(props.disabled, inject("disabled", null), false);
    const formShowError = nullish(props.showError, inject("showError", null), true);
    const formUpdateItems = inject("updateItems", () => {
    });
    const formRemoveItem = inject("removeItem", () => {
    });
    const ruleMessage = ref("");
    const currentValue = computed({
      get: () => {
        return props.value === void 0 ? "" : props.value;
      },
      set: (val) => {
        context.emit("update:value", val);
        context.emit("change", val);
      }
    });
    const validateField = async () => {
      if (!Array.isArray(props.rules) || !props.rules.length) {
        return false;
      }
      let type2 = "string";
      if (props.options.find((item) => item[props.prop.value] === currentValue.value)) {
        type2 = getType(currentValue.value);
      }
      try {
        await validate2(props.rules, currentValue.value, type2);
        ruleMessage.value = "";
        return Promise.resolve();
      } catch (e) {
        ruleMessage.value = e.errors[0].message;
        return Promise.reject(ruleMessage.value);
      }
    };
    const clearValidate = () => {
      ruleMessage.value = "";
    };
    const emit = (value) => {
      if (value === currentValue.value) {
        return false;
      }
      currentValue.value = value;
    };
    watch(currentValue, () => {
      validateField();
    });
    onMounted(() => {
      formUpdateItems(app);
    });
    onUnmounted(() => {
      formRemoveItem(app);
    });
    return {
      formSize,
      formDisabled,
      ruleMessage,
      formLabelWidth,
      currentValue,
      formDisabled,
      ruleMessage,
      emit,
      validate: validateField,
      clearValidate,
      formShowError
    };
  }
};
const _hoisted_1$d = {
  key: 0,
  class: "pl-radio-prepend"
};
const _hoisted_2$c = { class: "pl-radio-value" };
const _hoisted_3$b = { class: "pl-radio-inner" };
const _hoisted_4$8 = ["onClick"];
const _hoisted_5$4 = {
  key: 0,
  class: "pl-radio-error"
};
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_iconCicleChoose = resolveComponent("iconCicleChoose");
  const _component_iconCicleUnchoose = resolveComponent("iconCicleUnchoose");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["pl-radio", [
      $setup.formSize ? "pl-radio--" + $setup.formSize : "",
      {
        "is-vertical": $props.vertical,
        "is-disabled": $setup.formDisabled,
        "pl-radio--error": $setup.ruleMessage && $setup.formShowError
      }
    ]])
  }, [
    createElementVNode("div", {
      class: normalizeClass(["pl-radio-cell", { "pl-radio-cell--label": ($props.label || _ctx.$slots.label) && !$props.wrap, "pl-radio-cell--wrap": ($props.label || _ctx.$slots.label) && $props.wrap }])
    }, [
      createElementVNode("div", {
        class: normalizeClass(["pl-radio-title", { "pl-radio-title--require": $props.required }])
      }, [
        _ctx.$slots.prepend ? (openBlock(), createElementBlock("div", _hoisted_1$d, [
          renderSlot(_ctx.$slots, "prepend")
        ])) : createCommentVNode("", true),
        $props.label || _ctx.$slots.label ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: "pl-radio-label",
          style: normalizeStyle({ width: $setup.formLabelWidth })
        }, [
          renderSlot(_ctx.$slots, "label", {}, () => [
            createTextVNode(toDisplayString($props.label), 1)
          ])
        ], 4)) : createCommentVNode("", true)
      ], 2),
      createElementVNode("div", _hoisted_2$c, [
        createElementVNode("div", _hoisted_3$b, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($props.options, (item, i) => {
            return openBlock(), createElementBlock("div", {
              class: normalizeClass(["pl-radio-item", { "is-active": item[$props.prop.value] === $setup.currentValue, "is-disabled": $setup.formDisabled || item[$props.prop.disabled], "is-button": $props.button, "is-vertical": $props.vertical }]),
              key: i,
              onClick: ($event) => !($setup.formDisabled || item[$props.prop.disabled]) && $setup.emit(item[$props.prop.value])
            }, [
              !$props.button ? withDirectives((openBlock(), createBlock(_component_iconCicleChoose, {
                key: 0,
                class: normalizeClass(["pl-radio-icon", "icon-checked", $setup.formDisabled || item[$props.prop.disabled] ? "disabled" : ""])
              }, null, 8, ["class"])), [
                [vShow, item[$props.prop.value] === $setup.currentValue]
              ]) : createCommentVNode("", true),
              !$props.button ? withDirectives((openBlock(), createBlock(_component_iconCicleUnchoose, {
                key: 1,
                class: normalizeClass(["pl-radio-icon", "icon-unchecked", $setup.formDisabled || item[$props.prop.disabled] ? "disabled" : ""])
              }, null, 8, ["class"])), [
                [vShow, item[$props.prop.value] !== $setup.currentValue]
              ]) : createCommentVNode("", true),
              createElementVNode("span", null, [
                renderSlot(_ctx.$slots, "default", { item }, () => [
                  createTextVNode(toDisplayString(item[$props.prop.label]), 1)
                ])
              ])
            ], 10, _hoisted_4$8);
          }), 128))
        ])
      ])
    ], 2),
    $setup.ruleMessage && $setup.formShowError ? (openBlock(), createElementBlock("div", _hoisted_5$4, toDisplayString($setup.ruleMessage), 1)) : createCommentVNode("", true)
  ], 2);
}
var Radio = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$7]]);
Radio.install = function(App) {
  App.component(Radio.name, Radio);
};
var index_vue_vue_type_style_index_0_lang$5 = "";
const _sfc_main$8 = {
  name: "plRange",
  componentName: "plRange",
  props: {
    rules: {
      type: Array,
      default() {
        return [];
      }
    },
    size: String,
    value: Number,
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    wrap: Boolean,
    disabled: {
      type: Boolean,
      default: void 0
    },
    required: Boolean,
    showError: {
      type: Boolean,
      default: void 0
    },
    label: String,
    labelWidth: String
  },
  setup(props, context) {
    const app = getCurrentInstance();
    const track = ref(null);
    const ruleMessage = ref("");
    const currentValue = computed({
      get: () => {
        return props.value === void 0 ? "" : props.value;
      },
      set: (val) => {
        context.emit("update:value", val);
        context.emit("change", val);
      }
    });
    let rangeWidth = 0;
    let transDiff = 0;
    let transStart = 0;
    let transEnd = 0;
    const formSize = nullish(props.size, inject("size", null), "normal");
    const formLabelWidth = nullish(props.labelWidth, inject("labelWidth", null));
    const formDisabled = nullish(props.disabled, inject("disabled", null), false);
    const formShowError = nullish(props.showError, inject("showError", null), true);
    const formUpdateItems = inject("updateItems", () => {
    });
    const formRemoveItem = inject("removeItem", () => {
    });
    const diff = computed(() => {
      return currentValue.value / (props.max - props.min) * rangeWidth;
    });
    const progressStyle = computed(() => {
      return {
        width: diff.value + "px"
      };
    });
    const thumbStyle = computed(() => {
      return {
        "transform": `translateX(${diff.value}px)`,
        "-webkit-transform": `translateX(${diff.value}px)`
      };
    });
    const validateField = async () => {
      if (!Array.isArray(props.rules) || !props.rules.length) {
        return false;
      }
      try {
        await validate2(props.rules, currentValue.value, "number");
        ruleMessage.value = "";
        return Promise.resolve();
      } catch (e) {
        ruleMessage.value = e.errors[0].message;
        return Promise.reject(ruleMessage.value);
      }
    };
    const clearValidate = () => {
      ruleMessage.value = "";
    };
    const touchEvent = (e) => {
      if (formDisabled) {
        return false;
      }
      let moveValue = 0;
      switch (e.type) {
        case "touchstart":
          transStart = e.touches[0].clientX;
          transDiff = diff.value;
          break;
        case "touchmove":
          e.preventDefault();
          e.stopPropagation();
          transEnd = e.touches[0].clientX;
          moveValue = Math.round((transDiff + transEnd - transStart) / rangeWidth * (props.max - props.min) / props.step) * props.step;
          if (moveValue < props.min) {
            moveValue = props.min;
          }
          if (moveValue > props.max) {
            moveValue = props.max;
          }
          currentValue.value = moveValue;
          break;
      }
    };
    watch(currentValue, () => {
      validateField();
    });
    onMounted(() => {
      formUpdateItems(app);
      if (track) {
        rangeWidth = track.value.clientWidth;
      }
    });
    onUnmounted(() => {
      formRemoveItem(app);
    });
    return {
      track,
      formSize,
      formDisabled,
      ruleMessage,
      formLabelWidth,
      progressStyle,
      thumbStyle,
      touchEvent,
      validate: validateField,
      clearValidate,
      formShowError
    };
  }
};
const _hoisted_1$c = {
  key: 0,
  class: "pl-range-prepend"
};
const _hoisted_2$b = { class: "pl-range-value" };
const _hoisted_3$a = { class: "pl-range-inner" };
const _hoisted_4$7 = {
  class: "slider-runnable-track",
  ref: "track"
};
const _hoisted_5$3 = /* @__PURE__ */ createElementVNode("div", { class: "thumb-icon" }, null, -1);
const _hoisted_6$2 = {
  key: 0,
  class: "pl-range-append"
};
const _hoisted_7$2 = {
  key: 0,
  class: "pl-range-error"
};
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["pl-range", [
      $setup.formSize ? "pl-range--" + $setup.formSize : "",
      {
        "is-disabled": $setup.formDisabled,
        "pl-range--error": $setup.ruleMessage && $setup.formShowError
      }
    ]])
  }, [
    createElementVNode("div", {
      class: normalizeClass(["pl-range-cell", { "pl-range-cell--label": ($props.label || _ctx.$slots.label) && !$props.wrap, "pl-range-cell--wrap": ($props.label || _ctx.$slots.label) && $props.wrap }])
    }, [
      createElementVNode("div", {
        class: normalizeClass(["pl-range-title", { "pl-range-title--require": $props.required }])
      }, [
        _ctx.$slots.prepend ? (openBlock(), createElementBlock("div", _hoisted_1$c, [
          renderSlot(_ctx.$slots, "prepend")
        ])) : createCommentVNode("", true),
        $props.label || _ctx.$slots.label ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(["pl-range-label", { "pl-range-label--require": $props.required }]),
          style: normalizeStyle({ width: $setup.formLabelWidth })
        }, [
          renderSlot(_ctx.$slots, "label", {}, () => [
            createTextVNode(toDisplayString($props.label), 1)
          ])
        ], 6)) : createCommentVNode("", true)
      ], 2),
      createElementVNode("div", _hoisted_2$b, [
        createElementVNode("div", _hoisted_3$a, [
          createElementVNode("div", _hoisted_4$7, [
            createElementVNode("div", {
              class: "progress",
              style: normalizeStyle($setup.progressStyle)
            }, null, 4),
            createElementVNode("div", {
              class: "thumb",
              style: normalizeStyle($setup.thumbStyle),
              onTouchstart: _cache[0] || (_cache[0] = ($event) => $setup.touchEvent($event)),
              onTouchmove: _cache[1] || (_cache[1] = ($event) => $setup.touchEvent($event)),
              onTouchend: _cache[2] || (_cache[2] = ($event) => $setup.touchEvent($event)),
              onTouchcancel: _cache[3] || (_cache[3] = ($event) => $setup.touchEvent($event))
            }, [
              renderSlot(_ctx.$slots, "thumb", {}, () => [
                _hoisted_5$3
              ])
            ], 36)
          ], 512)
        ]),
        _ctx.$slots.append ? (openBlock(), createElementBlock("div", _hoisted_6$2, [
          renderSlot(_ctx.$slots, "append")
        ])) : createCommentVNode("", true)
      ])
    ], 2),
    $setup.ruleMessage && $setup.formShowError ? (openBlock(), createElementBlock("div", _hoisted_7$2, toDisplayString($setup.ruleMessage), 1)) : createCommentVNode("", true)
  ], 2);
}
var Range = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$6]]);
Range.install = function(App) {
  App.component(Range.name, Range);
};
const _hoisted_1$b = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  style: { "width": "1.2em", "height": "1.2em", "vertical-align": "bottom", "line-height": "0", "fill": "currentColor", "overflow": "hidden" }
};
const _hoisted_2$a = /* @__PURE__ */ createElementVNode("path", { d: "M892.064 261.888a31.936 31.936 0 0 0-45.216 1.472L421.664 717.248 201.216 532.032a32 32 0 1 0-41.152 48.992l243.648 204.704a31.872 31.872 0 0 0 20.576 7.488 31.808 31.808 0 0 0 23.36-10.112l445.888-475.968a32 32 0 0 0-1.472-45.248z" }, null, -1);
const _hoisted_3$9 = [
  _hoisted_2$a
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$b, _hoisted_3$9);
}
const _hoisted_1$a = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  style: { "width": "1.2em", "height": "1.2em", "vertical-align": "bottom", "line-height": "0", "fill": "currentColor", "overflow": "hidden" }
};
const _hoisted_2$9 = /* @__PURE__ */ createElementVNode("path", { d: "M231.424 346.208a32 32 0 0 0-46.848 43.584l297.696 320a32 32 0 0 0 46.4.48l310.304-320a32 32 0 1 0-45.952-44.544L506.176 641.536l-274.752-295.36z" }, null, -1);
const _hoisted_3$8 = [
  _hoisted_2$9
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$a, _hoisted_3$8);
}
var index_vue_vue_type_style_index_0_lang$4 = "";
const _sfc_main$7 = {
  name: "plSelect",
  componentName: "plSelect",
  components: {
    iconClose: render$8,
    iconHook: render$4,
    iconUnfold: render$3,
    popup
  },
  props: {
    rules: {
      type: Array,
      default() {
        return [];
      }
    },
    value: {
      default: ""
    },
    size: String,
    placeholder: String,
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    prop: {
      type: Object,
      default() {
        return { label: "label", value: "value" };
      }
    },
    wrap: Boolean,
    multiple: Boolean,
    disabled: {
      type: Boolean,
      default: void 0
    },
    readonly: Boolean,
    required: Boolean,
    showError: {
      type: Boolean,
      default: void 0
    },
    label: String,
    labelWidth: String,
    clearable: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const app = getCurrentInstance();
    const picker2 = ref(null);
    const formSize = nullish(props.size, inject("size", null), "normal");
    const formLabelWidth = nullish(props.labelWidth, inject("labelWidth", null));
    const formDisabled = nullish(props.disabled, inject("disabled", null), false);
    const formShowError = nullish(props.showError, inject("showError", null), true);
    const formUpdateItems = inject("updateItems", () => {
    });
    const formRemoveItem = inject("removeItem", () => {
    });
    const ruleMessage = ref("");
    const popupValue = ref("");
    const currentValue = computed({
      get: () => {
        return props.value === void 0 ? "" : props.value;
      },
      set: (val) => {
        context.emit("update:value", val);
        context.emit("change", val);
      }
    });
    const showClear = computed(() => {
      return props.clearable && !formDisabled && (!props.multiple ? currentValue.value : currentValue.value && currentValue.value.length);
    });
    const calcOptions = computed(() => {
      return new Map(props.options.map((item) => [getValue(item), getLabel(item)]));
    });
    const validateField = async () => {
      if (!Array.isArray(props.rules) || !props.rules.length) {
        return false;
      }
      let type2 = "string";
      if (props.multiple) {
        type2 = "array";
      } else if (calcOptions.value.get(currentValue.value)) {
        type2 = getType(currentValue.value);
      }
      try {
        await validate2(props.rules, currentValue.value, type2);
        ruleMessage.value = "";
        return Promise.resolve();
      } catch (e) {
        ruleMessage.value = e.errors[0].message;
        return Promise.reject(ruleMessage.value);
      }
    };
    const clearValidate = () => {
      ruleMessage.value = "";
    };
    const open = () => {
      if (formDisabled || props.readonly || !props.options.length) {
        return false;
      }
      if (Array.isArray(props.value)) {
        popupValue.value = [...props.value];
      } else {
        popupValue.value = props.value;
      }
      picker2.value.open();
    };
    const close = () => {
      picker2.value.close();
    };
    const clear = () => {
      currentValue.value = null;
      context.emit("clear");
    };
    const submit = () => {
      currentValue.value = popupValue.value;
      close();
    };
    const getLabel = (target) => {
      return props.prop.label ? target[props.prop.label] : String(target);
    };
    const getValue = (target) => {
      return props.prop.value ? target[props.prop.value] : target;
    };
    watch(currentValue, () => {
      validateField();
    });
    onMounted(() => {
      formUpdateItems(app);
    });
    onUnmounted(() => {
      formRemoveItem(app);
    });
    return {
      picker: picker2,
      formSize,
      formDisabled,
      ruleMessage,
      formLabelWidth,
      open,
      close,
      currentValue,
      calcOptions,
      clear,
      showClear,
      submit,
      popupValue,
      getValue,
      validate: validateField,
      clearValidate,
      formShowError
    };
  }
};
const _hoisted_1$9 = {
  key: 0,
  class: "pl-select-prepend"
};
const _hoisted_2$8 = { class: "pl-select-value" };
const _hoisted_3$7 = {
  key: 0,
  class: "title"
};
const _hoisted_4$6 = { key: 1 };
const _hoisted_5$2 = {
  key: 2,
  class: "placeholder"
};
const _hoisted_6$1 = { class: "pl-select-icon" };
const _hoisted_7$1 = {
  key: 0,
  class: "pl-select-append"
};
const _hoisted_8$1 = {
  key: 0,
  class: "pl-select-error"
};
const _hoisted_9$1 = { class: "pl-select-popup-content" };
const _hoisted_10$1 = { class: "pl-select-popup-top" };
const _hoisted_11 = { class: "pl-select-popup-title" };
const _hoisted_12 = { class: "pl-select-popup-inner" };
const _hoisted_13 = { class: "pl-select-popup-inner-row" };
const _hoisted_14 = ["type", "value", "disabled"];
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_iconClose = resolveComponent("iconClose");
  const _component_iconUnfold = resolveComponent("iconUnfold");
  const _component_iconHook = resolveComponent("iconHook");
  const _component_popup = resolveComponent("popup");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["pl-select", [
      $setup.formSize ? "pl-select--" + $setup.formSize : "",
      $props.multiple ? "pl-select--multiple" : "",
      {
        "is-disabled": $setup.formDisabled,
        "pl-select--error": $setup.ruleMessage && $setup.formShowError
      }
    ]])
  }, [
    createElementVNode("div", {
      class: normalizeClass(["pl-select-cell", { "pl-select-cell--label": ($props.label || _ctx.$slots.label) && !$props.wrap, "pl-select-cell--wrap": $props.wrap && ($props.label || _ctx.$slots.label) }])
    }, [
      createElementVNode("div", {
        class: normalizeClass(["pl-select-title", { "pl-select-title--require": $props.required }])
      }, [
        _ctx.$slots.prepend ? (openBlock(), createElementBlock("div", _hoisted_1$9, [
          renderSlot(_ctx.$slots, "prepend")
        ])) : createCommentVNode("", true),
        $props.label || _ctx.$slots.label ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: "pl-select-label",
          style: normalizeStyle({ width: $setup.formLabelWidth })
        }, [
          renderSlot(_ctx.$slots, "label", {}, () => [
            createTextVNode(toDisplayString($props.label), 1)
          ])
        ], 4)) : createCommentVNode("", true)
      ], 2),
      createElementVNode("div", _hoisted_2$8, [
        createElementVNode("div", {
          class: "pl-select-inner",
          onClick: _cache[0] || (_cache[0] = (...args) => $setup.open && $setup.open(...args))
        }, [
          $props.multiple && $setup.currentValue && $setup.currentValue.length ? (openBlock(), createElementBlock("span", _hoisted_3$7, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($setup.currentValue, (item, i) => {
              return openBlock(), createElementBlock("em", {
                class: "tag",
                key: i
              }, toDisplayString($setup.calcOptions.get(item)), 1);
            }), 128))
          ])) : !$props.multiple && $setup.currentValue !== null && $setup.currentValue !== void 0 ? (openBlock(), createElementBlock("span", _hoisted_4$6, toDisplayString($setup.calcOptions.get($setup.currentValue)), 1)) : (openBlock(), createElementBlock("span", _hoisted_5$2, toDisplayString($props.placeholder), 1))
        ]),
        withDirectives(createElementVNode("div", {
          class: "pl-select-clear",
          onTouchstart: _cache[1] || (_cache[1] = withModifiers((...args) => $setup.clear && $setup.clear(...args), ["stop", "prevent"])),
          onMousedown: _cache[2] || (_cache[2] = withModifiers((...args) => $setup.clear && $setup.clear(...args), ["stop", "prevent"]))
        }, [
          createVNode(_component_iconClose, { class: "pl-select-icon" })
        ], 544), [
          [vShow, $setup.showClear]
        ]),
        createElementVNode("div", _hoisted_6$1, [
          createVNode(_component_iconUnfold, { class: "pl-select-icon" })
        ]),
        _ctx.$slots.append ? (openBlock(), createElementBlock("div", _hoisted_7$1, [
          renderSlot(_ctx.$slots, "append")
        ])) : createCommentVNode("", true)
      ])
    ], 2),
    $setup.ruleMessage && $setup.formShowError ? (openBlock(), createElementBlock("div", _hoisted_8$1, toDisplayString($setup.ruleMessage), 1)) : createCommentVNode("", true),
    createVNode(_component_popup, {
      ref: "picker",
      position: "bottom"
    }, {
      default: withCtx(() => [
        createElementVNode("div", _hoisted_9$1, [
          createElementVNode("div", _hoisted_10$1, [
            createElementVNode("div", {
              class: "pl-select-popup-btn--cancel",
              onClick: _cache[3] || (_cache[3] = (...args) => $setup.close && $setup.close(...args))
            }, "\u53D6\u6D88"),
            createElementVNode("div", _hoisted_11, toDisplayString($props.placeholder), 1),
            createElementVNode("div", {
              class: "pl-select-popup-btn--submit",
              onClick: _cache[4] || (_cache[4] = (...args) => $setup.submit && $setup.submit(...args))
            }, "\u786E\u8BA4")
          ]),
          createElementVNode("div", _hoisted_12, [
            createElementVNode("ul", _hoisted_13, [
              (openBlock(true), createElementBlock(Fragment, null, renderList($props.options, (item, i) => {
                return openBlock(), createElementBlock("li", {
                  class: "pl-select-popup-inner-item",
                  key: i
                }, [
                  withDirectives(createElementVNode("input", {
                    type: $props.multiple ? "checkbox" : "radio",
                    class: "inner-input",
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.popupValue = $event),
                    value: $setup.getValue(item),
                    disabled: item.disabled,
                    onChange: _cache[6] || (_cache[6] = withModifiers(() => {
                    }, ["stop"])),
                    onClick: _cache[7] || (_cache[7] = withModifiers(() => {
                    }, ["stop"]))
                  }, null, 40, _hoisted_14), [
                    [vModelDynamic, $setup.popupValue]
                  ]),
                  createElementVNode("span", null, [
                    renderSlot(_ctx.$slots, "default", { item }, () => [
                      createTextVNode(toDisplayString(item[$props.prop.label]), 1)
                    ])
                  ]),
                  createVNode(_component_iconHook, { class: "pl-select-icon checked-icon" })
                ]);
              }), 128))
            ])
          ])
        ])
      ]),
      _: 3
    }, 512)
  ], 2);
}
var Select = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$5]]);
Select.install = function(App) {
  App.component(Select.name, Select);
};
var stepItem_vue_vue_type_style_index_0_lang = "";
const _sfc_main$6 = {
  name: "plStepItem",
  componentName: "plStepItem",
  components: {
    iconCicleChoose: render$6
  },
  setup() {
    const app = getCurrentInstance();
    const active = inject("active");
    const items = inject("items");
    const direction = inject("direction");
    const activeColor = inject("activeColor", "currentColor");
    const inactiveColor = inject("inactiveColor", "currentColor");
    const updateItems = inject("updateItems");
    const removeItem = inject("removeItem");
    const isLast = computed(() => {
      return items.indexOf(app) === items.length - 1;
    });
    const isActive = computed(() => {
      return items.indexOf(app) === active.value;
    });
    onMounted(() => {
      updateItems(app);
    });
    onUnmounted(() => {
      removeItem(app);
    });
    return {
      direction,
      isActive,
      activeColor,
      inactiveColor,
      isLast
    };
  }
};
const _hoisted_1$8 = { class: "pl-step-circle" };
const _hoisted_2$7 = { class: "pl-step-icon" };
const _hoisted_3$6 = {
  key: 1,
  class: "icon-default"
};
const _hoisted_4$5 = {
  key: 0,
  class: "pl-step-line"
};
const _hoisted_5$1 = { class: "pl-step-title" };
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_iconCicleChoose = resolveComponent("iconCicleChoose");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["pl-step-item", ["pl-step--" + $setup.direction, $setup.isActive && "pl-step--active"]]),
    style: normalizeStyle({ color: $setup.isActive ? $setup.activeColor : $setup.inactiveColor })
  }, [
    createElementVNode("div", _hoisted_1$8, [
      createElementVNode("div", _hoisted_2$7, [
        renderSlot(_ctx.$slots, "icon", {}, () => [
          $setup.isActive ? (openBlock(), createBlock(_component_iconCicleChoose, {
            key: 0,
            class: "pl-step-item-icon"
          })) : (openBlock(), createElementBlock("i", _hoisted_3$6))
        ])
      ]),
      !$setup.isLast ? (openBlock(), createElementBlock("div", _hoisted_4$5)) : createCommentVNode("", true)
    ]),
    createElementVNode("div", _hoisted_5$1, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 6);
}
var StepItem = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$4]]);
StepItem.install = function(App) {
  App.component(StepItem.name, StepItem);
};
const _hoisted_1$7 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  style: { "width": "1.2em", "height": "1.2em", "vertical-align": "bottom", "line-height": "0", "fill": "currentColor", "overflow": "hidden" }
};
const _hoisted_2$6 = /* @__PURE__ */ createElementVNode("path", { d: "M529.61 580.57c-.87.45-1.59 1.18-2.49 1.57-16.01 7.7-35.6 5.18-48.48-8.45l-292.26-309c-15.93-16.85-15.17-43.41 1.65-59.37 16.85-15.93 43.41-15.2 59.37 1.65l262.27 277.25 266.17-276.16c16.09-16.68 42.66-17.19 59.37-1.09 8.56 8.23 12.85 19.23 12.85 30.23 0 10.5-3.92 20.99-11.76 29.14l-295.1 306.2c-.59.59-1.4.81-2.01 1.4-.42.45-.73.92-1.18 1.37-2.5 2.38-5.55 3.63-8.4 5.26z" }, null, -1);
const _hoisted_3$5 = /* @__PURE__ */ createElementVNode("path", { d: "M529.61 889.72c-.87.45-1.59 1.18-2.49 1.57-16.01 7.7-35.6 5.18-48.48-8.45l-292.26-309c-15.93-16.85-15.17-43.41 1.65-59.37 16.85-15.93 43.41-15.2 59.37 1.65l262.27 277.25 266.17-276.15c16.09-16.68 42.66-17.19 59.37-1.09 8.56 8.23 12.85 19.23 12.85 30.23 0 10.5-3.92 20.99-11.76 29.14L541.2 881.69c-.59.59-1.4.81-2.01 1.4-.42.45-.73.92-1.18 1.37-2.5 2.38-5.55 3.64-8.4 5.26z" }, null, -1);
const _hoisted_4$4 = [
  _hoisted_2$6,
  _hoisted_3$5
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, _hoisted_4$4);
}
const _hoisted_1$6 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  style: { "width": "1.2em", "height": "1.2em", "vertical-align": "bottom", "line-height": "0", "fill": "currentColor", "overflow": "hidden" }
};
const _hoisted_2$5 = /* @__PURE__ */ createElementVNode("path", { d: "M529.61 443.43c-.87-.45-1.59-1.18-2.49-1.57-16.01-7.7-35.6-5.18-48.48 8.45L186.39 759.3c-15.93 16.85-15.17 43.41 1.65 59.37 16.85 15.93 43.41 15.2 59.37-1.65l262.27-277.24 266.17 276.16c16.09 16.68 42.66 17.19 59.37 1.09 8.56-8.23 12.85-19.23 12.85-30.23 0-10.5-3.92-20.99-11.76-29.14L541.2 451.46c-.59-.59-1.4-.81-2.01-1.4-.42-.45-.73-.92-1.18-1.37-2.5-2.38-5.55-3.63-8.4-5.26z" }, null, -1);
const _hoisted_3$4 = /* @__PURE__ */ createElementVNode("path", { d: "M529.61 134.28c-.87-.45-1.59-1.18-2.49-1.57-16.01-7.7-35.6-5.18-48.48 8.45L186.39 450.15c-15.93 16.85-15.17 43.41 1.65 59.37 16.85 15.93 43.41 15.2 59.37-1.65l262.27-277.25 266.17 276.16c16.09 16.68 42.66 17.19 59.37 1.09 8.56-8.23 12.85-19.23 12.85-30.23 0-10.5-3.92-20.99-11.76-29.14L541.2 142.31c-.59-.59-1.4-.81-2.01-1.4-.42-.45-.73-.92-1.18-1.37-2.5-2.38-5.55-3.64-8.4-5.26z" }, null, -1);
const _hoisted_4$3 = [
  _hoisted_2$5,
  _hoisted_3$4
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_4$3);
}
var index_vue_vue_type_style_index_0_lang$3 = "";
const _sfc_main$5 = {
  name: "plSteps",
  componentName: "plSteps",
  components: {
    iconMoreDown: render$2,
    iconMoreUp: render$1
  },
  props: {
    active: {
      type: Number,
      default: 0
    },
    activeColor: {
      type: String,
      default: null
    },
    inactiveColor: {
      type: String,
      default: null
    },
    direction: {
      type: String,
      default: "vertical"
    },
    showFold: {
      type: Boolean,
      default: false
    },
    fold: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const currentItem = ref(props.active === void 0 ? 0 : props.active);
    provide("active", currentItem);
    const isFold = ref(props.fold === void 0 ? true : props.fold);
    const items = reactive([]);
    provide("items", items);
    provide("direction", props.direction);
    provide("activeColor", props.activeColor);
    provide("inactiveColor", props.inactiveColor);
    const setCurrentItem = (value) => {
      if (currentItem.value === value) {
        return false;
      }
      currentItem.value = value;
    };
    const updateItems = (child) => {
      if (child && !items.includes(child)) {
        items.push(child);
      }
    };
    provide("updateItems", updateItems);
    const removeItem = (item) => {
      const index2 = items.indexOf(item);
      if (index2 > -1) {
        items.splice(index2, 1);
      }
    };
    provide("removeItem", removeItem);
    const toggle = () => {
      isFold.value = !isFold.value;
    };
    watch(() => props.active, (val) => {
      setCurrentItem(val);
    });
    watch(() => props.fold, (val) => {
      isFold.value = val;
    });
    onMounted(() => {
      updateItems();
    });
    return {
      isFold,
      items,
      toggle
    };
  }
};
const _hoisted_1$5 = { key: 0 };
const _hoisted_2$4 = /* @__PURE__ */ createTextVNode("\u5C55\u5F00 ");
const _hoisted_3$3 = { key: 1 };
const _hoisted_4$2 = /* @__PURE__ */ createTextVNode("\u6536\u8D77 ");
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_iconMoreDown = resolveComponent("iconMoreDown");
  const _component_iconMoreUp = resolveComponent("iconMoreUp");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["pl-steps", ["pl-steps--" + $props.direction]])
  }, [
    createElementVNode("div", {
      class: normalizeClass(["pl-steps-items", { "pl-steps-fold": $props.showFold && $setup.isFold }])
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2),
    $props.showFold && $props.direction === "vertical" && $setup.items.length > 1 ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: "pl-steps-toggle",
      onClick: _cache[0] || (_cache[0] = (...args) => $setup.toggle && $setup.toggle(...args))
    }, [
      $setup.isFold ? (openBlock(), createElementBlock("span", _hoisted_1$5, [
        createVNode(_component_iconMoreDown, { class: "pl-steps-icon" }),
        _hoisted_2$4
      ])) : (openBlock(), createElementBlock("span", _hoisted_3$3, [
        createVNode(_component_iconMoreUp, { class: "pl-steps-icon" }),
        _hoisted_4$2
      ]))
    ])) : createCommentVNode("", true)
  ], 2);
}
var Steps = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$3]]);
Steps.install = function(App) {
  App.component(Steps.name, Steps);
};
var swipeItem_vue_vue_type_style_index_0_lang = "";
const __default__$1 = defineComponent({
  name: "plSwipeItem"
});
const _sfc_main$4 = /* @__PURE__ */ Object.assign(__default__$1, {
  setup(__props) {
    const itemStyle = reactive({
      transform: "translate(0, 0)"
    });
    const setTransform = (index2, vertical) => {
      itemStyle.transform = vertical ? `translateY(${index2 * 100}%)` : `translateX(${index2 * 100}%)`;
    };
    const updateItems = inject("updateItems");
    const item = ref(null);
    onMounted(() => {
      const index2 = Array.from(item.value.parentNode.children).indexOf(item.value);
      updateItems({
        el: item.value,
        index: index2,
        setTransform
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "pl-swipe-item",
        ref_key: "item",
        ref: item,
        style: normalizeStyle(itemStyle)
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 4);
    };
  }
});
_sfc_main$4.install = function(App) {
  App.component(_sfc_main$4.name, _sfc_main$4);
};
var index_vue_vue_type_style_index_0_lang$2 = "";
const _hoisted_1$4 = { class: "pl-swipe" };
const _hoisted_2$3 = {
  key: 0,
  class: "pl-indicators"
};
const __default__ = defineComponent({
  name: "plSwipe"
});
const _sfc_main$3 = /* @__PURE__ */ Object.assign(__default__, {
  props: {
    auto: Number,
    pageSize: {
      type: Number,
      default: 1
    },
    scrollSize: {
      type: Number,
      default: 1
    },
    duration: {
      type: Number,
      default: 300
    },
    index: {
      type: Number,
      default: 0
    },
    loop: Boolean,
    indicators: {
      type: Boolean,
      default: true
    },
    indicatorColor: {
      type: String,
      default: "#fff"
    },
    indicatorActiveColor: {
      type: String,
      default: "#5074FF"
    },
    indicatorSize: {
      type: String,
      default: "0.5em"
    },
    vertical: Boolean,
    reverse: Boolean,
    touchable: {
      type: Boolean,
      default: true
    }
  },
  emits: ["scroll"],
  setup(__props, { emit }) {
    const props = __props;
    useCssVars((_ctx) => ({
      "ae66aebe": unref(transformSize),
      "413177be": props.duration,
      "6aa39f0d": unref(scrollItemSize)
    }));
    const slots = useSlots();
    const children = reactive([]);
    const findSwipeItem = (children2, nodeArr = []) => {
      children2.forEach((item) => {
        if (item.type && item.type.name === "plSwipeItem") {
          nodeArr.push(item);
        } else if (Array.isArray(item.children) && item.children.length) {
          findSwipeItem(item.children, nodeArr);
        }
      });
      return nodeArr;
    };
    const swipeItem = defineComponent({
      render() {
        return findSwipeItem(slots.default());
      }
    });
    const updateItems = (child) => {
      if (child && !children.includes(child)) {
        children[child.index] = child;
        child.setTransform(child.index, props.vertical);
      }
    };
    provide("updateItems", updateItems);
    const scrollWrap = ref(null);
    const scrollView = reactive({
      width: 0,
      height: 0
    });
    onMounted(() => {
      scrollView.width = scrollWrap.value.clientWidth;
      scrollView.height = scrollWrap.value.clientHeight;
    });
    const scrollItemSize = computed(() => {
      let size = (props.vertical ? scrollView.height : scrollView.width) / props.pageSize;
      if (size < 10) {
        size = 10;
      }
      return size;
    });
    const pageTotal = computed(() => Math.ceil(children.length / props.pageSize));
    const currentIndex = ref(/^\d+$/.test(props.index) ? Number(props.index) : 0);
    const transformSize = computed(() => currentIndex.value * scrollItemSize.value * -1);
    const noTransition = ref(false);
    const minIndex = computed(() => props.loop && pageTotal.value > 2 ? -props.scrollSize : 0);
    const maxIndex = computed(() => props.loop && pageTotal.value > 2 ? children.length : children.length - props.pageSize);
    const scrollTo = (diff) => {
      if (noTransition.value) {
        noTransition.value = false;
      }
      currentIndex.value += props.scrollSize * diff;
      if (props.loop && pageTotal.value > 2) {
        if (currentIndex.value < minIndex.value) {
          currentIndex.value = minIndex.value;
        }
        if (currentIndex.value > maxIndex.value) {
          currentIndex.value = maxIndex.value;
        }
        emit("scroll", currentIndex.value < 0 ? children.length + currentIndex.value : currentIndex.value >= children.length ? currentIndex.value - children.length : currentIndex.value);
      } else {
        if (currentIndex.value < minIndex.value && currentIndex.value > -props.scrollSize) {
          currentIndex.value = 0;
        } else if (currentIndex.value <= -props.scrollSize) {
          currentIndex.value = maxIndex.value;
        }
        if (currentIndex.value > maxIndex.value && currentIndex.value < maxIndex.value + props.scrollSize) {
          currentIndex.value = maxIndex.value;
        } else if (currentIndex.value >= maxIndex.value + props.scrollSize) {
          currentIndex.value = 0;
        }
        emit("scroll", currentIndex.value);
      }
    };
    const setPrevChildren = (flag) => {
      children.slice(-props.pageSize).map((child, i) => {
        child.setTransform(flag ? i - props.pageSize : child.index, props.vertical);
      });
    };
    const setNextChildren = (flag) => {
      children.slice(0, props.pageSize).map((child, i) => {
        child.setTransform(flag ? i + children.length : child.index, props.vertical);
      });
    };
    onMounted(() => {
      if (props.loop && pageTotal.value > 2) {
        watchEffect(() => {
          if (currentIndex.value === maxIndex.value) {
            setTimeout(() => {
              currentIndex.value = 0;
              noTransition.value = true;
            }, props.duration);
          }
          if (currentIndex.value === minIndex.value) {
            setTimeout(() => {
              currentIndex.value = maxIndex.value - props.scrollSize;
              noTransition.value = true;
            }, props.duration);
          }
          setNextChildren(currentIndex.value >= children.length - props.pageSize);
          setPrevChildren(currentIndex.value <= 0);
        });
      }
    });
    let loopTimer;
    const autoScroll = () => {
      if (props.auto && props.auto > 0 && pageTotal.value > 1) {
        loopTimer = setInterval(() => {
          scrollTo(props.reverse ? -1 : 1);
        }, props.auto);
      }
    };
    const stopAutoScroll = () => {
      clearInterval(loopTimer);
    };
    onMounted(autoScroll);
    onUnmounted(stopAutoScroll);
    const scrollList = ref(null);
    let transStart = 0;
    let transEnd = 0;
    let transDiff = 0;
    const touchHandler = (e) => {
      if (!props.touchable) {
        return false;
      }
      e.preventDefault();
      e.stopPropagation();
      switch (e.type) {
        case "touchstart":
          transDiff = -transformSize.value;
          transStart = props.vertical ? e.touches[0].clientY : e.touches[0].clientX;
          noTransition.value = true;
          stopAutoScroll();
          break;
        case "touchmove":
          transEnd = props.vertical ? e.touches[0].clientY : e.touches[0].clientX;
          scrollList.value.style.transform = scrollList.value.style.webkitTransform = `translate${props.vertical ? "Y" : "X"}(${-(transDiff + transStart - transEnd)}px)`;
          break;
        case "touchend":
        case "touchcancel":
          noTransition.value = false;
          scrollList.value.style.transform = scrollList.value.style.webkitTransform = "";
          scrollTo(transStart - transEnd > 0 ? 1 : -1);
          autoScroll();
          break;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createElementVNode("div", {
          class: "pl-swipe-wrap",
          ref_key: "scrollWrap",
          ref: scrollWrap
        }, [
          createElementVNode("div", {
            ref_key: "scrollList",
            ref: scrollList,
            class: normalizeClass({ "pl-swipe-list": true, "vertical": props.vertical, "no-trans": noTransition.value }),
            onTouchstart: touchHandler,
            onTouchmove: touchHandler,
            onTouchend: touchHandler,
            onTouchcancel: touchHandler
          }, [
            createVNode(unref(swipeItem))
          ], 34)
        ], 512),
        props.indicators ? (openBlock(), createElementBlock("div", _hoisted_2$3, [
          renderSlot(_ctx.$slots, "indicators", { index: currentIndex.value }, () => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(children.length, (i) => {
              return openBlock(), createElementBlock("svg", {
                viewBox: "0 0 100 100",
                class: "indicator-item",
                key: i,
                style: normalizeStyle({ width: __props.indicatorSize, height: __props.indicatorSize })
              }, [
                createElementVNode("circle", {
                  cx: "50",
                  cy: "50",
                  r: "50",
                  style: normalizeStyle({ fill: currentIndex.value === i - 1 || i === 1 && currentIndex.value === children.length || i === children.length && currentIndex.value === -1 ? __props.indicatorActiveColor : __props.indicatorColor })
                }, null, 4)
              ], 4);
            }), 128))
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
_sfc_main$3.install = function(App) {
  App.component(_sfc_main$3.name, _sfc_main$3);
};
const _sfc_main$2 = {
  name: "plTabItem",
  componentName: "plTabItem",
  props: {
    label: String,
    name: [String, Number],
    disabled: Boolean,
    index: Number
  },
  setup(props) {
    const app = getCurrentInstance();
    const currentName = inject("currentName", "");
    const updateItems = inject("updateItems", () => {
    });
    const removeItem = inject("removeItem", () => {
    });
    const active = computed(() => {
      return currentName.value === props.name;
    });
    onMounted(() => {
      updateItems(app);
    });
    onUnmounted(() => {
      removeItem(app);
    });
    return {
      active
    };
  }
};
const _hoisted_1$3 = { class: "pl-tab-item" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("div", _hoisted_1$3, [
    renderSlot(_ctx.$slots, "default")
  ], 512)), [
    [vShow, $setup.active]
  ]);
}
var TabItem = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
TabItem.install = function(App) {
  App.component(TabItem.name, TabItem);
};
var index_vue_vue_type_style_index_0_lang$1 = "";
const _sfc_main$1 = {
  name: "plTabs",
  componentName: "plTabs",
  props: {
    type: {
      type: String,
      default: "card"
    },
    value: {
      type: [String, Number],
      default: ""
    },
    position: {
      type: String,
      default: "top"
    }
  },
  setup(props, context) {
    const tabNode = ref(null);
    const titleNode = ref(null);
    const children = reactive([]);
    const transition = ref(null);
    const translate = ref(0);
    const currentName = computed({
      get: () => {
        return props.value === void 0 ? "" : props.value;
      },
      set: (val) => {
        context.emit("update:value", val);
        context.emit("change", val);
      }
    });
    provide("currentName", currentName);
    const swipeDir = computed(() => {
      return /^(top|bottom)$/.test(props.position) ? "column" : "row";
    });
    const tabSize = computed(() => {
      if (tabNode.value && swipeDir.value === "column") {
        return tabNode.value.clientWidth;
      }
      return 0;
    });
    const titleSize = computed(() => {
      if (titleNode.value && swipeDir.value === "column") {
        return titleNode.value.scrollWidth;
      }
      return 0;
    });
    const titleArray = computed(() => {
      return children.map((item) => {
        let index2 = Number(item.proxy.index);
        if (Number.isNaN(index2)) {
          const el = item.proxy.$el;
          index2 = Array.from(el.parentNode.children).indexOf(el);
        }
        return {
          index: index2,
          name: item.proxy.name,
          label: item.proxy.label,
          titleSlot: {
            render() {
              return h(item.proxy.$slots.title);
            }
          },
          disabled: item.proxy.disabled
        };
      }).sort((a, b) => a.index - b.index);
    });
    const currentIndex = computed(() => {
      return titleArray.value.findIndex((item) => item.name === currentName.value);
    });
    watch(currentIndex, (index2) => {
      nextTick(() => {
        let currentTarget = titleNode.value.children[index2];
        if (swipeDir.value === "column" && currentTarget && titleSize.value > tabSize.value) {
          let width = currentTarget.offsetWidth;
          let offset = currentTarget.offsetLeft + width / 2 - tabSize.value / 2;
          if (offset < 0) {
            offset = 0;
          }
          if (offset > titleSize.value - tabSize.value) {
            offset = titleSize.value - tabSize.value;
          }
          translate.value = offset;
        }
      });
    });
    const titleStyle = computed(() => {
      let transform = swipeDir.value === "column" ? `translateX(${-translate.value}px)` : `none`;
      return {
        transform,
        transition: transition.value
      };
    });
    const setCurrentName = (value, disabled) => {
      if (disabled) {
        return false;
      }
      if (currentName.value === value) {
        return false;
      }
      currentName.value = value;
    };
    const updateItems = (item) => {
      if (children.indexOf(item) < 0) {
        children.push(item);
      }
    };
    provide("updateItems", updateItems);
    const removeItem = (item) => {
      const index2 = children.indexOf(item);
      if (index2 > -1) {
        children.splice(index2, 1);
      }
    };
    provide("removeItem", removeItem);
    let transDiff = 0;
    let transStart = 0;
    const touchEvent = (e) => {
      if (swipeDir.value === "row" || tabSize.value >= titleSize.value) {
        return false;
      }
      switch (e.type) {
        case "touchstart":
          transDiff = translate.value;
          transStart = e.touches[0].clientX;
          transition.value = "none";
          break;
        case "touchmove":
          e.preventDefault();
          e.stopPropagation();
          translate.value = transDiff + transStart - e.touches[0].clientX;
          break;
        case "touchend":
        case "touchcancel":
          transition.value = null;
          if (translate.value < 0) {
            translate.value = 0;
          } else if (translate.value + tabSize.value > titleSize.value) {
            translate.value = titleSize.value - tabSize.value;
          }
          break;
      }
    };
    return {
      tab: tabNode,
      title: titleNode,
      touchEvent,
      titleStyle,
      titleArray,
      setCurrentName,
      currentName
    };
  }
};
const _hoisted_1$2 = ["onClick"];
const _hoisted_2$2 = { class: "tab-title-text" };
const _hoisted_3$2 = { key: 0 };
const _hoisted_4$1 = { class: "pl-tab-content" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["pl-tabs", ["is-" + $props.type, "is-" + $props.position]]),
    ref: "tab"
  }, [
    createElementVNode("div", {
      class: "pl-tab-title",
      onTouchstart: _cache[0] || (_cache[0] = ($event) => $setup.touchEvent($event)),
      onTouchmove: _cache[1] || (_cache[1] = ($event) => $setup.touchEvent($event)),
      onTouchend: _cache[2] || (_cache[2] = ($event) => $setup.touchEvent($event)),
      onTouchcancel: _cache[3] || (_cache[3] = ($event) => $setup.touchEvent($event))
    }, [
      createElementVNode("div", {
        class: "pl-tab-title-inner",
        ref: "title",
        style: normalizeStyle($setup.titleStyle)
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.titleArray, (title) => {
          return openBlock(), createElementBlock("div", {
            class: normalizeClass(["tab-title", { "is-active": title.name === $setup.currentName, "is-disabled": title.disabled }]),
            key: title.name,
            onClick: ($event) => $setup.setCurrentName(title.name, title.disabled)
          }, [
            createElementVNode("div", _hoisted_2$2, [
              title.label ? (openBlock(), createElementBlock("span", _hoisted_3$2, toDisplayString(title.label), 1)) : (openBlock(), createBlock(resolveDynamicComponent(title.titleSlot), { key: 1 }))
            ])
          ], 10, _hoisted_1$2);
        }), 128))
      ], 4)
    ], 32),
    createElementVNode("div", _hoisted_4$1, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 2);
}
var Tabs = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
Tabs.install = function(App) {
  App.component(Tabs.name, Tabs);
};
const _hoisted_1$1 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  style: { "width": "1.2em", "height": "1.2em", "vertical-align": "bottom", "line-height": "0", "fill": "currentColor", "overflow": "hidden" }
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", { d: "m544.83 557.536 374.19.973c17.694.046 32.039-14.21 32.085-31.904.045-17.74-14.21-32.04-31.904-32.086l-374.258-.995.566-372.561c.022-17.627-14.256-31.995-31.95-32.041-17.672-.022-32.018 14.278-32.064 31.973l-.564 372.47-373.986-.996c-17.695-.045-32.04 14.21-32.086 31.904a31.938 31.938 0 0 0 9.368 22.719c5.769 5.77 13.734 9.345 22.537 9.367l374.076.996-.565 375.955c-.023 8.846 3.553 16.856 9.368 22.671a31.942 31.942 0 0 0 22.583 9.369c17.672.022 31.995-14.256 32.04-31.95l.564-375.864z" }, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
var index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  name: "plUpload",
  componentName: "plUpload",
  components: {
    iconClose: render$8,
    iconPlus: render
  },
  props: {
    value: Array,
    accept: {
      type: String,
      default: "*/*"
    },
    rows: {
      type: Number,
      default: 4
    },
    multiple: Boolean,
    disabled: Boolean,
    capture: String,
    beforeRead: Function,
    afterRead: Function,
    maxSize: {
      type: Number,
      default: Infinity
    },
    maxCount: {
      type: Number,
      default: Infinity
    }
  },
  setup(props, context) {
    const dialogPreview = ref(false);
    const previewIndex = ref(0);
    const fileArray = computed({
      get: () => {
        if (Array.isArray(props.value)) {
          return props.value.map((file) => {
            if (file instanceof Blob) {
              return {
                type: getFileType(file),
                url: getFileUrl(file),
                preview: getFilePreview(file),
                file
              };
            }
            if (!file.url) {
              file.url = getFileUrl(file);
            }
            if (!file.type) {
              file.type = getFileType(file);
            }
            if (file.type === "image" && !file.preview) {
              file.preview = getFilePreview(file);
            }
            return file;
          });
        }
        return [];
      },
      set: (val) => {
        context.emit("update:value", val);
        context.emit("change", val);
      }
    });
    const delFile = (index2) => {
      props.value.splice(index2, 1);
      context.emit("change", fileArray.value);
    };
    const getFileType = (file) => {
      return /image/.test(file.type) || /\.(jpe?g|png|gif|bmp)$/i.test(file.name) ? "image" : /\.doc(x|m)?$/i.test(file.name) ? "doc" : /\.xls(x|b|m)?$/i.test(file.name) ? "xls" : /\.ppt(x|m)?$/i.test(file.name) ? "ppt" : /\.pdf$/i.test(file.name) ? "pdf" : "";
    };
    const getFilePreview = (file) => {
      if (getFileType(file) === "image") {
        return getFileUrl(file);
      } else {
        return null;
      }
    };
    const getFileUrl = (file) => {
      if (file.url) {
        return file.url;
      }
      if (file instanceof File) {
        return window.URL.createObjectURL(file);
      }
      return null;
    };
    const setFiles = (e) => {
      let files = Array.from(e.target.files);
      let normalFiles = [];
      let oversizeFiles = [];
      files.forEach((file) => {
        if (file.size > props.maxSize) {
          oversizeFiles.push(file);
        } else {
          normalFiles.push(file);
        }
      });
      if (oversizeFiles.length) {
        context.emit("oversize", oversizeFiles);
      }
      let beforeResult = true;
      if (typeof props.beforeRead == "function") {
        beforeResult = props.beforeRead(normalFiles) !== false;
      }
      if (normalFiles.length && beforeResult) {
        let fileLength = normalFiles.length + fileArray.value.length;
        if (fileLength > props.maxCount) {
          context.emit("exceed", fileLength - props.maxCount);
          normalFiles = normalFiles.slice(0, props.maxCount - fileLength);
        }
        fileArray.value = [...fileArray.value, ...normalFiles.map((file) => {
          return {
            type: getFileType(file),
            url: getFileUrl(file),
            preview: getFilePreview(file),
            file
          };
        })];
        if (typeof props.afterRead == "function") {
          props.afterRead(normalFiles);
        }
      }
    };
    const previewList = ref([]);
    const preview = (file) => {
      if (file.type === "image") {
        previewList.value = props.value.filter((item) => item.type === "image");
        previewIndex.value = previewList.value.findIndex((item) => item === file);
        dialogPreview.value = true;
      } else {
        window.open(file.url);
      }
    };
    const closePreview = () => {
      dialogPreview.value = false;
    };
    const translateX = computed(() => {
      return previewIndex.value * window.innerWidth;
    });
    const previewListStyle = reactive({
      transition: "none",
      transform: `translateX(${-translateX.value}px)`
    });
    watch(translateX, (val) => {
      previewListStyle.transform = `translateX(${-val}px)`;
    });
    let transStart = 0;
    let transDiff = 0;
    const touchEvent = (e) => {
      switch (e.type) {
        case "touchstart":
          transStart = e.touches[0].clientX;
          previewListStyle.transition = "none";
          break;
        case "touchmove":
          transDiff = e.touches[0].clientX - transStart;
          previewListStyle.transform = `translateX(${transDiff - translateX.value}px)`;
          break;
        case "touchend":
        case "touchcancel":
          previewListStyle.transition = "";
          if (transDiff > 0) {
            previewIndex.value--;
          } else {
            previewIndex.value++;
          }
          if (previewIndex.value < 0) {
            previewIndex.value = 0;
          }
          if (previewIndex.value >= previewList.value.length) {
            previewIndex.value = previewList.value.length - 1;
          }
          previewListStyle.transform = `translateX(${-translateX.value}px)`;
          break;
      }
    };
    return {
      fileArray,
      preview,
      delFile,
      setFiles,
      dialogPreview,
      translateX,
      touchEvent,
      closePreview,
      previewList,
      previewIndex,
      previewListStyle
    };
  }
};
const _hoisted_1 = { class: "pl-upload" };
const _hoisted_2 = { class: "pl-file-preview" };
const _hoisted_3 = ["onClick"];
const _hoisted_4 = ["onClick"];
const _hoisted_5 = {
  key: 0,
  class: "cols"
};
const _hoisted_6 = { class: "pl-upload-button" };
const _hoisted_7 = ["multiple", "accept", "capture"];
const _hoisted_8 = { class: "pl-add-button" };
const _hoisted_9 = {
  key: 0,
  class: "pl-preview-dialog"
};
const _hoisted_10 = { class: "preview-index" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_iconClose = resolveComponent("iconClose");
  const _component_iconPlus = resolveComponent("iconPlus");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", {
      class: "rows",
      style: normalizeStyle({ "grid-template-columns": "repeat(" + $props.rows + ", 1fr)" })
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.fileArray, (file, i) => {
        return openBlock(), createElementBlock("div", {
          class: "cols",
          key: i
        }, [
          createElementVNode("div", _hoisted_2, [
            createElementVNode("div", {
              class: normalizeClass(["pl-upload-img", [file.type]]),
              style: normalizeStyle(file.preview ? { "background-image": `url(${file.preview})` } : null),
              onClick: ($event) => $setup.preview(file)
            }, null, 14, _hoisted_3),
            !$props.disabled ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "pl-upload-del",
              onClick: ($event) => $setup.delFile(i)
            }, [
              renderSlot(_ctx.$slots, "close", {}, () => [
                createVNode(_component_iconClose)
              ])
            ], 8, _hoisted_4)) : createCommentVNode("", true),
            renderSlot(_ctx.$slots, "default", { file })
          ])
        ]);
      }), 128)),
      !$props.disabled && $setup.fileArray.length < $props.maxCount ? (openBlock(), createElementBlock("div", _hoisted_5, [
        createElementVNode("div", _hoisted_6, [
          createElementVNode("input", {
            type: "file",
            class: "file-input",
            multiple: $props.multiple,
            accept: $props.accept,
            capture: $props.capture,
            onChange: _cache[0] || (_cache[0] = withModifiers((...args) => $setup.setFiles && $setup.setFiles(...args), ["stop"]))
          }, null, 40, _hoisted_7),
          renderSlot(_ctx.$slots, "button", {}, () => [
            createElementVNode("div", _hoisted_8, [
              createVNode(_component_iconPlus, { class: "pl-upload-add" })
            ])
          ])
        ])
      ])) : createCommentVNode("", true)
    ], 4),
    renderSlot(_ctx.$slots, "tips"),
    (openBlock(), createBlock(Teleport, { to: "body" }, [
      $setup.dialogPreview ? (openBlock(), createElementBlock("div", _hoisted_9, [
        createElementVNode("ul", {
          class: "preview-list",
          style: normalizeStyle($setup.previewListStyle),
          onTouchstart: _cache[1] || (_cache[1] = ($event) => $setup.touchEvent($event)),
          onTouchmove: _cache[2] || (_cache[2] = ($event) => $setup.touchEvent($event)),
          onTouchend: _cache[3] || (_cache[3] = ($event) => $setup.touchEvent($event)),
          onTouchcancel: _cache[4] || (_cache[4] = ($event) => $setup.touchEvent($event)),
          onClick: _cache[5] || (_cache[5] = (...args) => $setup.closePreview && $setup.closePreview(...args))
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.previewList, (file, i) => {
            return openBlock(), createElementBlock("li", {
              class: "preview-item",
              key: i,
              style: normalizeStyle({ "background-image": `url(${file.preview})`, "left": i * 100 + "%" })
            }, null, 4);
          }), 128))
        ], 36),
        createElementVNode("div", _hoisted_10, toDisplayString($setup.previewIndex + 1) + "/" + toDisplayString($setup.previewList.length), 1)
      ])) : createCommentVNode("", true)
    ]))
  ]);
}
var Upload = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
Upload.install = function(App) {
  App.component(Upload.name, Upload);
};
var variables = "";
/*!
 * @author liyuelong1020@gmail.com
 * @date 2019/6/28 028
 * @description Description
 */
function install(App) {
  [
    Button,
    Canvas,
    Cell,
    Checkbox,
    Collapse,
    Form,
    GoTopButton,
    Icon,
    Input,
    List,
    popup,
    Progress,
    Radio,
    Range,
    Select,
    StepItem,
    Steps,
    _sfc_main$4,
    _sfc_main$3,
    TabItem,
    Tabs,
    Upload
  ].forEach((component) => {
    App.component(component.name, component);
  });
  App.use(loading);
  App.use(alert);
  App.use(confirm);
  App.use(toast);
  App.use(Datetime);
  App.use(fetchProxy);
  App.use(picker);
}
var index = {
  version: "1.0.0",
  install,
  loading,
  alert,
  confirm,
  toast,
  button: Button,
  canvas: Canvas,
  cell: Cell,
  checkbox: Checkbox,
  collapse: Collapse,
  datetime: Datetime,
  fetch: fetchProxy,
  form: Form,
  goTopButton: GoTopButton,
  icon: Icon,
  input: Input,
  list: List,
  picker,
  popup,
  progress: Progress,
  radio: Radio,
  range: Range,
  select: Select,
  stepItem: StepItem,
  steps: Steps,
  swipeItem: _sfc_main$4,
  swipe: _sfc_main$3,
  tabItem: TabItem,
  tabs: Tabs,
  upload: Upload
};
export { alert, Button as button, Canvas as canvas, Cell as cell, Checkbox as checkbox, Collapse as collapse, confirm, Datetime as datetime, index as default, fetchProxy as fetch, Form as form, GoTopButton as goTopButton, Icon as icon, Input as input, List as list, loading, picker, popup, Progress as progress, Radio as radio, Range as range, Select as select, StepItem as stepItem, Steps as steps, _sfc_main$3 as swipe, _sfc_main$4 as swipeItem, TabItem as tabItem, Tabs as tabs, toast, Upload as upload };
