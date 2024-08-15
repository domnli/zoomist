var Ut = Object.defineProperty;
var kt = (s, t, e) => t in s ? Ut(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var T = (s, t, e) => (kt(s, typeof t != "symbol" ? t + "" : t, e), e), Gt = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
};
var O = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
};
var v = (s, t, e) => (Gt(s, t, "access private method"), e);
const rt = (s) => document.contains(k(s)), zt = (s) => {
  if (!s)
    return !1;
  try {
    const { constructor: t } = s, { prototype: e } = t, { hasOwnProperty: n } = Object.prototype;
    return t && e && n.call(e, "isPrototypeOf");
  } catch {
    return !1;
  }
}, St = (s) => typeof s == "function", V = (s) => !isNaN(Number(s)), lt = (s) => s == null, k = (s) => s instanceof HTMLElement ? s : document.querySelector(s), ct = (s, t) => t ? s.closest(`.${t}`) : null, R = (s) => {
  const t = "touches" in s ? s.touches[0] : s;
  return {
    clientX: t.clientX,
    clientY: t.clientY
  };
}, W = (s) => ({
  clientX: [...s].map((t) => t.clientX).reduce((t, e) => t + e) / s.length,
  clientY: [...s].map((t) => t.clientY).reduce((t, e) => t + e) / s.length
}), Y = (s) => {
  const { width: t, height: e, top: n, left: a, bottom: o } = s.getBoundingClientRect();
  return {
    width: t,
    height: e,
    top: n,
    left: a,
    bottom: o
  };
}, bt = (s) => s.length >= 2 ? Math.hypot(s[0].clientX - s[1].clientX, s[0].clientY - s[1].clientY) : 0, M = (s, t) => {
  for (const [e, n] of Object.entries(t))
    typeof n == "string" && s.style.setProperty(e, n);
}, x = (s, t) => {
  for (const [e, n] of Object.entries(t))
    s.setAttribute(e, n);
}, S = (s, t) => {
  for (const [e, n] of Object.entries(t))
    s[e] = n;
}, z = (s, t, e) => Math.min(Math.max(s, t), e), D = (s) => {
  const t = +(Math.round(+(s + "e+2")) + "e-2");
  return isNaN(t) ? 0 : t;
}, Ot = (s) => {
  throw new Error(s);
}, ht = (s) => console.warn(s), I = (s = "div", t, e, n) => {
  const a = document.createElement(s);
  return t && a.classList.add(...t.split(" ")), e && x(a, e), n && (a.innerHTML = n), a;
}, p = "zoomist", jt = `${p}-container`, vt = `${p}-wrapper`, dt = `${p}-image`, Pt = `${p}-not-draggable`, Ft = `${p}-not-wheelable`, N = `${p}-slider`, qt = `${p}-slider-wrapper`, Kt = `${p}-slider-bar`, Jt = `${p}-slider-button`, G = `${p}-zoomer`, Qt = `${p}-zoomer-button`, ot = `${p}-zoomer-icon`, ut = `${p}-zoomer-in`, mt = `${p}-zoomer-out`, y = `${p}-zoomer-reset`, te = `${p}-zoomer-disabled`, ee = {
  tabindex: "0",
  role: "slider",
  "aria-label": "slider for zoomist",
  "aria-valuemin": "0",
  "aria-valuemax": "100",
  "aria-valuenow": "0",
  "aria-disabled": "false"
}, ft = {
  tabindex: "0",
  role: "button",
  type: "button",
  "aria-disabled": "false"
}, se = {
  ...ft,
  "aria-label": "button for zoom in zoomist"
}, ne = {
  ...ft,
  "aria-label": "button for zoom out zoomist"
}, Tt = {
  ...ft,
  "aria-label": "button for reset zoomist scale"
}, ie = typeof window < "u" && typeof window.document < "u", L = ie && "ontouchstart" in window, oe = L ? "touchstart" : "mousedown", Z = L ? "touchmove" : "mousemove", U = L ? "touchend" : "mouseup", ae = "wheel", re = ["left", "right", "center"], le = ["top", "bottom", "center"], Dt = "--scale", wt = "--translate-x", Rt = "--translate-y", ce = "--value", Yt = "--rotate", Xt = {
  // set is draggable or not
  draggable: !0,
  // set is wheelable or not
  wheelable: !0,
  // set is pinchable or not
  pinchable: !0,
  // set image stuck on bounds
  bounds: !0,
  // the ratio of zooming at one time
  zoomRatio: 0.1,
  // the max scale of zoomist-image (must be number larger then initScale)
  maxScale: 10,
  // the min scale of zoomist-image (must be number smaller then initScale)
  minScale: 1,
  // set initial scale of zoomist-image
  initScale: null,
  rotateRatio: 1,
  // if set to true, enable to release touch events to allow for further page scrolling when .zoomist-image is on bounds.
  dragReleaseOnBounds: !1,
  // if set to true, enable to release wheel events to allow for further page scrolling when .zoomist-image is on mixScale or maxScale.
  wheelReleaseOnMinMax: !1,
  // elements matched this class will not be dragged.
  disableDraggingClass: Pt,
  // elements matched this class will not be zoomed by mouse wheel.
  disableWheelingClass: Ft
}, he = {
  // the css selector string or a element of the slider
  el: null,
  // the direction of the slider 'horizontal' or 'vertical'
  direction: "horizontal"
}, de = {
  el: `.${N}`
}, ue = {
  el: null,
  // the css selector string or a element for in-zoomer
  inEl: null,
  // the css selector string or a element for out-zoomer
  outEl: null,
  // the css selector string or a element for reset-zoomer
  resetEl: null,
  rotateEl: null,
  // in zoomer and out zoomer will be disabled when image comes to maximin or minimum
  disabledClass: te
}, me = {
  el: `.${G}`,
  inEl: `.${ut}`,
  outEl: `.${mt}`,
  resetEl: `.${y}`,
  rotateEl: `.${y}`
}, fe = {
  // invoked when zoomist instance ready
  ready: null,
  // invoked when reset methods be used
  reset: null,
  // invoked when image changes it's size
  resize: null,
  // invoked before destroy methods be used
  beforeDestroy: null,
  // invoked after destroy methods be used
  destroy: null,
  // invoked before update methods be used
  beforeUpdate: null,
  // invoked when update methods be used
  update: null,
  // invoked when image is zooming
  zoom: null,
  // invoked when wheeling
  wheel: null,
  // invoked when mousedown on wrapper
  dragStart: null,
  // invoked when dragging the image
  drag: null,
  // invoked when mouseup on wrapper
  dragEnd: null,
  // invoked when mousedown on wrapper
  pinchStart: null,
  // invoked when pinching the image
  pinch: null,
  // invoked when mouseup on wrapper
  pinchEnd: null,
  // invoked when mousedown on slider
  slideStart: null,
  // invoked when sliding the slider
  slide: null,
  // invoked when mouseup on slider
  slideEnd: null
}, ge = {
  // slider options
  slider: null,
  // zoomer options
  zoomer: null
}, _e = `
<svg viewBox="0 0 12 12" class="${ot}">
  <polygon points="12,5.5 6.5,5.5 6.5,0 5.5,0 5.5,5.5 0,5.5 0,6.5 5.5,6.5 5.5,12 6.5,12 6.5,6.5 12,6.5 "/>
</svg>
`, pe = `
<svg viewBox="0 0 12 12" class="${ot}">
  <rect y="5.5" width="12" height="1"/>
</svg>
`, Ee = `
<svg viewBox="0 0 12 12" class="${ot}">
  <path d="m7.45,1.27l.35-.22c.26-.17.34-.52.17-.78-.17-.27-.52-.34-.78-.17l-1.54.99-.19.13-.11.46,1.12,1.75c.11.17.29.26.48.26.1,0,.21-.03.31-.09.26-.17.34-.52.17-.78l-.29-.46c1.85.5,3.22,2.17,3.22,4.18,0,2.39-1.95,4.34-4.34,4.34S1.66,8.92,1.66,6.52c0-1.15.44-2.23,1.25-3.05.22-.22.22-.58,0-.8-.22-.22-.58-.22-.8,0-1.02,1.03-1.58,2.4-1.58,3.85,0,3.02,2.46,5.48,5.48,5.48s5.48-2.46,5.48-5.48c0-2.51-1.71-4.62-4.02-5.26Z"/>
</svg>
`, Se = `
<svg viewBox="0 0 1024 1024" class="${ot}">
  <path d="M694.4 960H195.2C131.7 960 80 908.4 80 845.1V462c0-63.4 51.7-114.9 115.2-114.9h499.2c63.5 0 115.2 51.6 115.2 114.9v383.1c0 63.3-51.7 114.9-115.2 114.9zM195.2 423.7c-21.2 0-38.4 17.2-38.4 38.3v383.1c0 21.1 17.2 38.3 38.4 38.3h499.2c21.2 0 38.4-17.2 38.4-38.3V462c0-21.1-17.2-38.3-38.4-38.3H195.2z" fill="#333333" p-id="1697"></path><path d="M905.6 450.3c-14.8 0-28.9-8.6-35.2-23C788.6 240.8 592.7 213 483.2 213c-21.2 0-38.4-17.2-38.4-38.3s17.2-38.3 38.4-38.3c218.2 0 385 94.9 457.6 260.3 8.5 19.4-0.4 42-19.8 50.5-5 2.1-10.3 3.1-15.4 3.1z" fill="#333333" p-id="1698"></path><path d="M473.6 285.4c-9.8 0-19.7-3.7-27.2-11.2l-72.5-72.4c-15-15-15-39.2 0-54.2l72.5-72.4c15-15 39.3-15 54.3 0s15 39.2 0 54.2l-45.4 45.3 45.4 45.3c15 15 15 39.2 0 54.2-7.4 7.4-17.3 11.2-27.1 11.2z" fill="#333333" p-id="1699"></path>
</svg>`, be = {
  on(s, t) {
    if (!t || !St(t))
      return this;
    const { __events__: e } = this;
    return s.split(" ").forEach((n) => {
      const a = n;
      e[a] || (e[a] = []), e[a].push(t);
    }), this;
  },
  emit(s, ...t) {
    const { __events__: e } = this;
    return e[s] ? (e[s].forEach((n) => {
      St(n) && n.apply(this, t);
    }), this) : this;
  },
  zoom(s, t) {
    const { scale: e } = this.transform, n = this.useFixedRatio(D(e * (s + 1)));
    return e === n ? this : (this.zoomTo(n, t), this);
  },
  zoomTo(s, t = !0) {
    const { image: e, transform: { scale: n, translateX: a, translateY: o }, options: { bounds: r } } = this;
    if (s = this.useFixedRatio(s), s === n)
      return this;
    if (this.transform.scale = s, !t)
      return this.emit("zoom", this, this.transform.scale), this;
    t = typeof t == "boolean" ? this.getContainerCenterClient() : t;
    const { clientX: l, clientY: c } = t, { top: h, left: i, width: d, height: _ } = Y(e), { width: u, height: f } = this.getImageDiff(), E = s / n - 1, g = (d / 2 - l + i) * E + a, m = (_ / 2 - c + h) * E + o, b = r ? z(g, u, -u) : g, w = r ? z(m, f, -f) : m;
    return S(this.transform, {
      translateX: b,
      translateY: w
    }), this.emit("zoom", this, this.transform.scale), this;
  },
  move(s) {
    const { options: { bounds: t }, transform: { translateX: e, translateY: n } } = this, { x: a, y: o } = s, { width: r, height: l } = this.getImageDiff();
    if (V(a)) {
      const c = e + a, h = t ? z(c, r, -r) : c;
      this.transform.translateX = h;
    }
    if (V(o)) {
      const c = n + o, h = t ? z(c, l, -l) : c;
      this.transform.translateY = h;
    }
    return this;
  },
  moveTo(s) {
    const { options: { bounds: t } } = this, { x: e, y: n } = s, { width: a, height: o } = this.getImageDiff();
    if (V(e)) {
      const r = Number(e), l = t ? z(r, a, -a) : r;
      this.transform.translateX = l;
    }
    if (re.some((r) => r === e)) {
      const l = {
        left: -a,
        right: a,
        center: 0
      }[e];
      this.transform.translateX = l;
    }
    if (V(n)) {
      const r = Number(n), l = t ? z(r, o, -o) : r;
      this.transform.translateY = l;
    }
    if (le.some((r) => r === n)) {
      const l = {
        top: -o,
        bottom: o,
        center: 0
      }[n];
      this.transform.translateY = l;
    }
    return this;
  },
  slideTo(s) {
    const { options: { minScale: t, maxScale: e } } = this, n = (e - t) * s / 100 + t;
    return this.zoomTo(n), this;
  },
  reset() {
    const { options: { initScale: s } } = this;
    return S(this.transform, {
      scale: s,
      translateX: 0,
      translateY: 0
    }), this.emit("reset", this), this;
  },
  rotate(s) {
    const { rotate: t } = this.transform;
    return S(this.transform, {
      rotate: t + s
    }), this;
  },
  destroy(s = !1) {
    const { element: t, image: e, controller: n } = this;
    return this.mounted && (this.emit("beforeDestroy", this), n.abort(), this.destroyModules(), s && e && (this.reset(), e.removeAttribute("style")), t[p] = null, this.mounted = !1, this.emit("destroy", this)), null;
  },
  update(s) {
    const { element: t, controller: e } = this;
    return this.emit("beforeUpdate", this), t[p] = null, this.mounted = !1, e.abort(), this.destroyModules(), s && (this.options = Object.assign({}, Xt, zt(s) && s)), this.init(), this.emit("update", this), this;
  },
  getImageData() {
    return { ...this.data.imageData };
  },
  getContainerData() {
    return { ...this.data.containerData };
  },
  getSliderValue() {
    const { __modules__: { slider: s } } = this;
    return s && s.value !== void 0 ? s.value : null;
  },
  isOnBoundTop() {
    const { options: { bounds: s } } = this;
    if (!s)
      return !1;
    const { transform: { translateY: t } } = this, { height: e } = this.getImageDiff();
    return t * -1 === D(e);
  },
  isOnBoundBottom() {
    const { options: { bounds: s } } = this;
    if (!s)
      return !1;
    const { transform: { translateY: t } } = this, { height: e } = this.getImageDiff();
    return t === D(e);
  },
  isOnBoundLeft() {
    const { options: { bounds: s } } = this;
    if (!s)
      return !1;
    const { transform: { translateX: t } } = this, { width: e } = this.getImageDiff();
    return t * -1 === D(e);
  },
  isOnBoundRight() {
    const { options: { bounds: s } } = this;
    if (!s)
      return !1;
    const { transform: { translateX: t } } = this, { width: e } = this.getImageDiff();
    return t === D(e);
  },
  isOnBoundX() {
    const { options: { bounds: s } } = this;
    if (!s)
      return !1;
    const { transform: { translateX: t } } = this, { width: e } = this.getImageDiff();
    return Math.abs(t) === Math.abs(D(e));
  },
  isOnBoundY() {
    const { options: { bounds: s } } = this;
    if (!s)
      return !1;
    const { transform: { translateY: t } } = this, { height: e } = this.getImageDiff();
    return Math.abs(t) === Math.abs(D(e));
  },
  isOnMinScale() {
    const { options: { minScale: s } } = this, { transform: { scale: t } } = this;
    return t === s;
  },
  isOnMaxScale() {
    const { options: { maxScale: s } } = this, { transform: { scale: t } } = this;
    return t === s;
  },
  // private methods
  getImageDiff() {
    const { width: s, height: t } = this.getContainerData(), { width: e, height: n } = this.getImageData();
    return {
      width: (s - e) / 2,
      height: (t - n) / 2
    };
  },
  // private methods
  getContainerCenterClient() {
    const { element: s } = this, { top: t, left: e, width: n, height: a } = Y(s);
    return {
      clientX: e + n / 2,
      clientY: t + a / 2
    };
  },
  // private methods
  getScaleRatio() {
    const { transform: { scale: s }, options: { minScale: t, maxScale: e } } = this;
    return (s - t) / (e - t);
  },
  // private methods
  useFixedRatio(s) {
    const { options: { minScale: t, maxScale: e } } = this;
    return z(s, t, e);
  }
}, { defineProperty: $ } = Object;
var j, Lt, P, At, F, Mt, q, yt, K, Ct, J, It, Q, $t, tt, xt, et, Nt, st, Bt, nt, Ht, it, Vt;
class Oe {
  constructor(t, e) {
    // create initial data
    O(this, j);
    // mount elements and bind events
    O(this, P);
    // resize, drag, pinch, wheel
    O(this, F);
    // on wheel
    O(this, q);
    // on drag (mouse)
    O(this, K);
    // on touch (pinch and touchmove)
    O(this, J);
    // resize observer on element
    O(this, Q);
    // check modules and create
    O(this, tt);
    // mount slider
    O(this, et);
    // slider events
    O(this, st);
    // mount zoomer
    O(this, nt);
    // zoomer event
    O(this, it);
    T(this, "element");
    T(this, "options");
    T(this, "wrapper");
    T(this, "image");
    T(this, "mounted");
    T(this, "data");
    T(this, "transform");
    T(this, "states");
    T(this, "controller");
    T(this, "__events__");
    T(this, "__modules__");
    t || Ot("The first argument is required."), rt(t) || Ot(`Element ${t} is not exist.`), this.element = k(t), this.options = Object.assign({}, Xt, zt(e) && e), this.init();
  }
  // check zoomist-image is exist
  init() {
    const { element: t } = this, { options: { bounds: e, minScale: n, maxScale: a, initScale: o } } = this;
    if (t[p])
      return;
    t[p] = this;
    const r = t.querySelector(`.${vt}`), l = t.querySelector(`.${dt}`);
    if (!r)
      return ht(`${p} needs a ".${vt}" element.`);
    if (!l)
      return ht(`${p} needs a ".${dt}" element.`);
    this.options.minScale = e && n < 1 ? 1 : n, this.options.maxScale = Math.max(a, n), this.options.initScale = z(o || n, n, a), this.wrapper = r, this.image = l, v(this, j, Lt).call(this);
  }
  // destory modules
  destroyModules() {
    const { slider: t, zoomer: e } = this.__modules__;
    t && this.destroySlider(), e && this.destroyZoomer();
  }
  // destroy slider
  destroySlider() {
    var o, r;
    const { __modules__: { slider: t } } = this;
    if (!t || !t.mounted)
      return;
    const { options: { el: e }, controller: n } = t;
    e === `.${N}` ? (o = t.sliderEl) == null || o.remove() : (r = t.sliderTrack) == null || r.remove(), n == null || n.abort(), t.mounted = !1;
  }
  // destroy zoomer
  destroyZoomer() {
    const { __modules__: { zoomer: t } } = this;
    if (!t || !t.mounted)
      return;
    const { options: { el: e, inEl: n, outEl: a, resetEl: o, rotateEl: r }, controller: l, zoomerEl: c, zoomerInEl: h, zoomerOutEl: i, zoomerResetEl: d, zoomerRotateEl: _ } = t, u = (f, E, g) => {
      f === `.${E}` && (g == null || g.remove());
    };
    [
      { target: e, className: G, el: c },
      { target: n, className: ut, el: h },
      { target: a, className: mt, el: i },
      { target: o, className: y, el: d },
      { target: r, className: y, el: _ }
    ].forEach((f) => u(f.target, f.className, f.el)), l == null || l.abort(), t.mounted = !1;
  }
}
j = new WeakSet(), Lt = function() {
  const { element: t, image: e, options: n } = this, { draggable: a, pinchable: o } = n, { offsetWidth: r, offsetHeight: l } = t, { offsetWidth: c, offsetHeight: h } = e, { width: i, height: d } = Y(e);
  if (!c || !h)
    return ht(`The width or height of ${dt} should not be 0.`);
  if (this.transform = {
    scale: 0,
    translateX: 0,
    translateY: 0,
    rotate: 0
  }, this.data = {
    imageData: {
      originWidth: c,
      originHeight: h,
      width: i,
      height: d
    },
    containerData: {
      width: r,
      height: l
    }
  }, L && (a || o) && (this.data.touchData = {
    hypot: 0,
    startX: 0,
    startY: 0,
    prevX: 0,
    prevY: 0,
    imageTop: 0,
    imageLeft: 0,
    widthDiff: 0,
    heightDiff: 0
  }), !L && a && (this.data.dragData = {
    startX: 0,
    startY: 0
  }), this.__events__ = { ...fe }, n.on)
    for (const [_, u] of Object.entries(n.on))
      this.__events__[_] = [u];
  if (this.__modules__ = { ...ge }, n.slider) {
    const _ = n.slider === !0 ? de : n.slider;
    this.__modules__.slider = {
      options: Object.assign({}, he, _)
    };
  }
  if (n.zoomer) {
    const _ = n.zoomer === !0 ? me : n.zoomer;
    this.__modules__.zoomer = {
      options: Object.assign({}, ue, _)
    };
  }
  this.controller = new AbortController(), v(this, P, At).call(this);
}, P = new WeakSet(), At = function() {
  if (this.mounted)
    return;
  const { element: t, image: e, options: { minScale: n, maxScale: a, initScale: o }, __modules__: { slider: r, zoomer: l } } = this, c = this;
  M(e, {
    transform: `
        translate(var(${wt}, 0px), var(${Rt}, 0px))
        scale(var(${Dt}, 0)) rotate(var(${Yt}, 0deg))`
  }), $(this.transform, "scale", {
    get() {
      return c.transform.__scale__;
    },
    set(h) {
      const i = c.useFixedRatio(h);
      if (!(lt(i) || c.transform.__scale__ === i)) {
        if (c.transform.__scale__ = i, M(e, { [Dt]: i.toString() }), S(c.data.imageData, {
          width: Y(e).width,
          height: Y(e).height
        }), r) {
          const d = Math.round(c.getScaleRatio() * 100);
          r.value = d;
        }
        if (l && l.options.disabledClass) {
          const { zoomerInEl: d, zoomerOutEl: _, zoomerResetEl: u, options: { disabledClass: f } } = l;
          d && (d.classList[i === a ? "add" : "remove"](f), x(d, { "aria-disabled": i === a ? "true" : "false" })), _ && (_.classList[i === n ? "add" : "remove"](f), x(_, { "aria-disabled": i === n ? "true" : "false" })), u && (u.classList[i === o ? "add" : "remove"](f), x(u, { "aria-disabled": i === o ? "true" : "false" }));
        }
      }
    }
  }), $(this.transform, "translateX", {
    get() {
      return c.transform.__translateX__;
    },
    set(h) {
      const i = D(h);
      lt(i) || c.transform.__translateX__ === i || (c.transform.__translateX__ = i, M(e, { [wt]: `${i}px` }));
    }
  }), $(this.transform, "translateY", {
    get() {
      return c.transform.__translateY__;
    },
    set(h) {
      const i = D(h);
      lt(i) || c.transform.__translateY__ === i || (c.transform.__translateY__ = i, M(e, { [Rt]: `${i}px` }));
    }
  }), $(this.transform, "rotate", {
    get() {
      return c.transform.__rotate__;
    },
    set(h) {
      const i = h % 4;
      c.transform.__rotate__ = i, M(e, { [Yt]: `-${i * 90}deg` });
    }
  }), v(this, F, Mt).call(this), v(this, tt, xt).call(this), S(this.transform, {
    scale: o,
    translateX: 0,
    translateY: 0,
    rotate: 0
  }), t.classList.add(jt), this.mounted = !0, this.emit("ready", this);
}, F = new WeakSet(), Mt = function() {
  const { wrapper: t, options: e, controller: { signal: n } } = this, { draggable: a, pinchable: o, wheelable: r } = e;
  if (this.states = {}, r) {
    this.states.wheeling = !1;
    const l = (c) => v(this, q, yt).call(this, c);
    t.addEventListener(ae, l, { signal: n });
  }
  if (L && (a || o)) {
    a && (this.states.dragging = !1), o && (this.states.pinching = !1);
    const l = (c) => v(this, J, It).call(this, c);
    t.addEventListener("touchstart", l, { signal: n });
  }
  if (!L && a) {
    this.states.dragging = !1;
    const l = (c) => v(this, K, Ct).call(this, c);
    t.addEventListener("mousedown", l, { signal: n });
  }
  v(this, Q, $t).call(this);
}, q = new WeakSet(), yt = function(t) {
  const { options: { zoomRatio: e, wheelReleaseOnMinMax: n, disableWheelingClass: a } } = this, o = (t.deltaY || t.detail) > 0 ? -1 : 1;
  if (n) {
    const r = this.isOnMinScale(), l = this.isOnMaxScale();
    r && o === -1 || l && o === 1 || t.preventDefault();
  } else
    t.preventDefault();
  this.states.wheeling || ct(t.target, a) || (this.states.wheeling = !0, setTimeout(() => {
    this.states.wheeling = !1;
  }, 30), this.zoom(o * e, R(t)), this.emit("wheel", this, this.transform.scale, t));
}, K = new WeakSet(), Ct = function(t) {
  const { data: e, transform: n, options: { disableDraggingClass: a } } = this, { dragData: o, imageData: r } = e;
  if (!o || !r)
    return;
  const l = (i) => {
    i && i.button !== 0 || (i.preventDefault(), !ct(i.target, a) && (S(o, {
      startX: R(i).clientX,
      startY: R(i).clientY
    }), this.states.dragging = !0, this.emit("dragStart", this, { x: n.translateX, y: n.translateY }, i), document.addEventListener(Z, c), document.addEventListener(U, h)));
  }, c = (i) => {
    if (i.touches || !this.states.dragging)
      return;
    i.preventDefault();
    const d = R(i).clientX, _ = R(i).clientY, u = d - o.startX + n.translateX, f = _ - o.startY + n.translateY;
    this.moveTo({ x: u, y: f }), S(o, {
      startX: R(i).clientX,
      startY: R(i).clientY
    }), this.emit("drag", this, { x: u, y: f }, i);
  }, h = (i) => {
    i.touches || (this.states.dragging = !1, this.emit("dragEnd", this, { x: n.translateX, y: n.translateY }, i), document.removeEventListener(Z, c), document.removeEventListener(U, h));
  };
  l(t);
}, J = new WeakSet(), It = function(t) {
  const { data: e, transform: n, options: { maxScale: a, minScale: o, draggable: r, pinchable: l, bounds: c, dragReleaseOnBounds: h, disableDraggingClass: i } } = this, { touchData: d, imageData: _ } = e;
  if (!d || !_)
    return;
  const u = (g) => {
    const m = g.touches;
    if (!m)
      return;
    if (c && h) {
      const B = this.isOnBoundX(), H = this.isOnBoundY(), A = m.length === 1 && (B || H);
      console.log(A), A || g.preventDefault();
    } else
      g.preventDefault();
    if (ct(g.target, i) && m.length <= 1)
      return;
    const { top: b, left: w } = Y(this.image), { width: X, height: C } = this.getImageDiff();
    S(d, {
      hypot: bt(m),
      startX: W(m).clientX,
      startY: W(m).clientY,
      prevX: 0,
      prevY: 0,
      imageTop: b,
      imageLeft: w,
      widthDiff: X,
      heightDiff: C
    }), r && (this.states.dragging = !0, this.emit("dragStart", this, { x: n.translateX, y: n.translateY }, g)), l && m.length === 2 && (this.states.pinching = !0, this.emit("pinchStart", this, n.scale, g)), document.addEventListener("touchmove", f), document.addEventListener("touchend", E);
  }, f = (g) => {
    const m = g.touches;
    if (!m)
      return;
    const { states: { dragging: b, pinching: w } } = this, { top: X, left: C } = Y(this.image), { width: B, height: H } = this.getImageDiff(), A = bt(m), gt = A ? A / d.hypot : 1, at = this.useFixedRatio(gt * n.scale), _t = W(m).clientX + d.prevX, pt = W(m).clientY + d.prevY;
    if (w && m.length === 2 && this.zoomTo(at, !1), b) {
      const Et = at !== a && at !== o && l ? gt : 1, Wt = D(_t - d.imageLeft - (B - d.widthDiff) - (d.startX - d.imageLeft) * Et + n.translateX), Zt = D(pt - d.imageTop - (H - d.heightDiff) - (d.startY - d.imageTop) * Et + n.translateY);
      this.moveTo({ x: Wt, y: Zt });
    }
    S(d, {
      hypot: A,
      startX: _t,
      startY: pt,
      imageTop: X,
      imageLeft: C,
      widthDiff: B,
      heightDiff: H
    }), w && m.length === 2 && this.emit("pinch", this, n.scale, g), b && this.emit("drag", this, { x: n.translateX, y: n.translateY }, g);
  }, E = (g) => {
    const m = g.touches;
    if (!m)
      return;
    const { states: { dragging: b, pinching: w } } = this;
    if (b && !m.length && (this.states.dragging = !1, this.emit("dragEnd", this, { x: n.translateX, y: n.translateY }, g)), w && m.length < 2 && (this.states.pinching = !1, this.emit("pinchEnd", this, n.scale, g)), b && m.length === 1) {
      const X = R(g).clientX, C = R(g).clientY;
      S(d, {
        prevX: d.startX - X,
        prevY: d.startY - C
      });
    }
    m.length || (document.removeEventListener("touchmove", f), document.removeEventListener("touchend", E));
  };
  u(t);
}, Q = new WeakSet(), $t = function() {
  const { element: t, image: e, transform: n } = this;
  new ResizeObserver(() => {
    const { offsetWidth: o, offsetHeight: r } = t, { width: l, height: c } = this.getContainerData();
    if (o === l && r === c)
      return;
    const h = n.translateX, i = n.translateY;
    if (h) {
      const E = o / l * h;
      this.transform.translateX = E;
    }
    if (i) {
      const E = r / c * i;
      this.transform.translateY = E;
    }
    const { offsetWidth: d, offsetHeight: _ } = e, { width: u, height: f } = Y(e);
    S(this.data.containerData, {
      width: o,
      height: r
    }), S(this.data.imageData, {
      originWidth: d,
      originHeight: _,
      width: u,
      height: f
    }), this.emit("resize", this);
  }).observe(t);
}, tt = new WeakSet(), xt = function() {
  const { slider: t, zoomer: e } = this.__modules__;
  t && v(this, et, Nt).call(this), e && v(this, nt, Ht).call(this);
}, et = new WeakSet(), Nt = function() {
  const { element: t, __modules__: { slider: e } } = this;
  if (!e || e.mounted)
    return;
  const { options: { el: n, direction: a } } = e, o = n === `.${N}`;
  if (!n || !o && !rt(n))
    return;
  const r = o ? I("div", N) : k(n), l = I("div", qt), c = I("span", Kt), h = I("span", Jt, { ...ee, "aria-orientation": a });
  r.classList.add(`${N}-${a}`), $(e, "value", {
    get() {
      return e.__value__;
    },
    set(i) {
      e.__value__ !== i && (e.__value__ = i, M(r, { [ce]: i.toString() }), x(h, { "aria-valuenow": i.toString() }));
    }
  }), S(e, {
    value: this.getScaleRatio() * 100,
    controller: new AbortController(),
    sliding: !1,
    sliderEl: r,
    sliderTrack: l,
    sliderButton: h
  }), v(this, st, Bt).call(this), l.append(c, h), r.append(l), o && t.append(r), e.mounted = !0;
}, st = new WeakSet(), Bt = function() {
  const { options: { minScale: t, maxScale: e }, __modules__: { slider: n } } = this;
  if (!n)
    return;
  const { options: { direction: a }, controller: o, sliderEl: r, sliderTrack: l } = n;
  if (!r || !l)
    return;
  const c = a === "vertical", h = (u) => {
    const f = Y(l), E = f[c ? "height" : "width"], g = f[c ? "bottom" : "left"], m = R(u)[c ? "clientY" : "clientX"], b = D(z((m - g) * (c ? -1 : 1) / E, 0, 1));
    return (e - t) * b + t;
  }, i = (u) => {
    if (u instanceof MouseEvent && u.button !== 0)
      return;
    n.sliding = !0;
    const f = h(u);
    this.zoomTo(f), this.emit("slideStart", this, this.getSliderValue(), u), document.addEventListener(Z, d), document.addEventListener(U, _);
  }, d = (u) => {
    if (!n.sliding)
      return;
    const f = h(u);
    this.zoomTo(f), this.emit("slide", this, this.getSliderValue(), u);
  }, _ = (u) => {
    this.emit("slideEnd", this, this.getSliderValue(), u), n.sliding = !1, document.removeEventListener(Z, d), document.removeEventListener(U, _);
  };
  r.addEventListener(oe, i, { signal: o == null ? void 0 : o.signal });
}, nt = new WeakSet(), Ht = function() {
  const { element: t, __modules__: { zoomer: e } } = this;
  if (!e || e.mounted)
    return;
  const { options: { el: n, inEl: a, outEl: o, resetEl: r, rotateEl: l } } = e, c = [a, o, r, l], h = (E, g, m, b, w) => {
    const X = E === `.${m}`;
    return !E || !X && !rt(E) ? null : (m = c.includes(E) ? `${m} ${Qt}` : m, X ? I(g, m, b, w) : k(E));
  }, i = h(n, "div", G), d = h(a, "button", ut, se, _e), _ = h(o, "button", mt, ne, pe), u = h(r, "button", y, Tt, Ee), f = h(l, "button", y, Tt, Se);
  S(e, {
    controller: new AbortController(),
    zoomerEl: i,
    zoomerInEl: d,
    zoomerOutEl: _,
    zoomerResetEl: u,
    zoomerRotateEl: f
  }), i && (d && i.append(d), _ && i.append(_), u && i.append(u), f && i.append(f), n === `.${G}` && t.append(i)), v(this, it, Vt).call(this), e.mounted = !0;
}, it = new WeakSet(), Vt = function() {
  const { options: { zoomRatio: t, rotateRatio: e }, __modules__: { zoomer: n } } = this, a = this;
  if (!n)
    return;
  const { controller: o, zoomerInEl: r, zoomerOutEl: l, zoomerResetEl: c, zoomerRotateEl: h } = n;
  r && r.addEventListener("click", () => {
    a.zoom(t);
  }, { signal: o == null ? void 0 : o.signal }), l && l.addEventListener("click", () => {
    a.zoom(-t);
  }, { signal: o == null ? void 0 : o.signal }), c && c.addEventListener("click", () => {
    a.reset();
  }, { signal: o == null ? void 0 : o.signal }), h && h.addEventListener("click", () => {
    a.rotate(e);
  }, { signal: o == null ? void 0 : o.signal });
};
Object.assign(Oe.prototype, be);
export {
  Oe as default
};
