import client from '@sanity/client';
import { c as createAstro, a as createComponent, r as renderTemplate, d as defineScriptVars, b as addAttribute, s as spreadAttributes, u as unescapeHTML, e as renderComponent, m as maybeRenderHead, f as renderSlot, g as renderHead } from '../astro.ae63679d.mjs';
/* empty css                         */
const sanityClient = client({"projectId":"8xcmf6z5","dataset":"production","apiVersion":"2022-11-15","useCdn":true});

globalThis.sanityClient = sanityClient;

var on = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Te(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Qe = { exports: {} };
(function(t, e) {
  (function(r, n) {
    t.exports = n();
  })(on, function() {
    function r() {
      return r = Object.assign || function(l) {
        for (var c = 1; c < arguments.length; c++) {
          var p = arguments[c];
          for (var f in p)
            Object.prototype.hasOwnProperty.call(p, f) && (l[f] = p[f]);
        }
        return l;
      }, r.apply(this, arguments);
    }
    function n(l, c) {
      if (l) {
        if (typeof l == "string")
          return i(l, c);
        var p = Object.prototype.toString.call(l).slice(8, -1);
        if (p === "Object" && l.constructor && (p = l.constructor.name), p === "Map" || p === "Set")
          return Array.from(l);
        if (p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))
          return i(l, c);
      }
    }
    function i(l, c) {
      (c == null || c > l.length) && (c = l.length);
      for (var p = 0, f = new Array(c); p < c; p++)
        f[p] = l[p];
      return f;
    }
    function s(l, c) {
      var p = typeof Symbol < "u" && l[Symbol.iterator] || l["@@iterator"];
      if (p)
        return (p = p.call(l)).next.bind(p);
      if (Array.isArray(l) || (p = n(l)) || c && l && typeof l.length == "number") {
        p && (l = p);
        var f = 0;
        return function() {
          return f >= l.length ? {
            done: !0
          } : {
            done: !1,
            value: l[f++]
          };
        };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var o = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";
    function u(l) {
      var c = l.split("-"), p = c[1], f = c[2], O = c[3];
      if (!p || !f || !O)
        throw new Error("Malformed asset _ref '" + l + `'. Expected an id like "` + o + '".');
      var b = f.split("x"), S = b[0], M = b[1], q = +S, F = +M, $ = isFinite(q) && isFinite(F);
      if (!$)
        throw new Error("Malformed asset _ref '" + l + `'. Expected an id like "` + o + '".');
      return {
        id: p,
        width: q,
        height: F,
        format: O
      };
    }
    var d = function(c) {
      var p = c;
      return p ? typeof p._ref == "string" : !1;
    }, g = function(c) {
      var p = c;
      return p ? typeof p._id == "string" : !1;
    }, a = function(c) {
      var p = c;
      return p && p.asset ? typeof p.asset.url == "string" : !1;
    };
    function h(l) {
      if (!l)
        return null;
      var c;
      if (typeof l == "string" && y(l))
        c = {
          asset: {
            _ref: w(l)
          }
        };
      else if (typeof l == "string")
        c = {
          asset: {
            _ref: l
          }
        };
      else if (d(l))
        c = {
          asset: l
        };
      else if (g(l))
        c = {
          asset: {
            _ref: l._id || ""
          }
        };
      else if (a(l))
        c = {
          asset: {
            _ref: w(l.asset.url)
          }
        };
      else if (typeof l.asset == "object")
        c = r({}, l);
      else
        return null;
      var p = l;
      return p.crop && (c.crop = p.crop), p.hotspot && (c.hotspot = p.hotspot), C(c);
    }
    function y(l) {
      return /^https?:\/\//.test("" + l);
    }
    function w(l) {
      var c = l.split("/").slice(-1);
      return ("image-" + c[0]).replace(/\.([a-z]+)$/, "-$1");
    }
    function C(l) {
      if (l.crop && l.hotspot)
        return l;
      var c = r({}, l);
      return c.crop || (c.crop = {
        left: 0,
        top: 0,
        bottom: 0,
        right: 0
      }), c.hotspot || (c.hotspot = {
        x: 0.5,
        y: 0.5,
        height: 1,
        width: 1
      }), c;
    }
    var m = [["width", "w"], ["height", "h"], ["format", "fm"], ["download", "dl"], ["blur", "blur"], ["sharpen", "sharp"], ["invert", "invert"], ["orientation", "or"], ["minHeight", "min-h"], ["maxHeight", "max-h"], ["minWidth", "min-w"], ["maxWidth", "max-w"], ["quality", "q"], ["fit", "fit"], ["crop", "crop"], ["saturation", "sat"], ["auto", "auto"], ["dpr", "dpr"], ["pad", "pad"]];
    function v(l) {
      var c = r({}, l || {}), p = c.source;
      delete c.source;
      var f = h(p);
      if (!f)
        throw new Error("Unable to resolve image URL from source (" + JSON.stringify(p) + ")");
      var O = f.asset._ref || f.asset._id || "", b = u(O), S = Math.round(f.crop.left * b.width), M = Math.round(f.crop.top * b.height), q = {
        left: S,
        top: M,
        width: Math.round(b.width - f.crop.right * b.width - S),
        height: Math.round(b.height - f.crop.bottom * b.height - M)
      }, F = f.hotspot.height * b.height / 2, $ = f.hotspot.width * b.width / 2, H = f.hotspot.x * b.width, J = f.hotspot.y * b.height, D = {
        left: H - $,
        top: J - F,
        right: H + $,
        bottom: J + F
      };
      return c.rect || c.focalPoint || c.ignoreImageParams || c.crop || (c = r({}, c, k({
        crop: q,
        hotspot: D
      }, c))), E(r({}, c, {
        asset: b
      }));
    }
    function E(l) {
      var c = (l.baseUrl || "https://cdn.sanity.io").replace(/\/+$/, ""), p = l.asset.id + "-" + l.asset.width + "x" + l.asset.height + "." + l.asset.format, f = c + "/images/" + l.projectId + "/" + l.dataset + "/" + p, O = [];
      if (l.rect) {
        var b = l.rect, S = b.left, M = b.top, q = b.width, F = b.height, $ = S !== 0 || M !== 0 || F !== l.asset.height || q !== l.asset.width;
        $ && O.push("rect=" + S + "," + M + "," + q + "," + F);
      }
      l.bg && O.push("bg=" + l.bg), l.focalPoint && (O.push("fp-x=" + l.focalPoint.x), O.push("fp-y=" + l.focalPoint.y));
      var H = [l.flipHorizontal && "h", l.flipVertical && "v"].filter(Boolean).join("");
      return H && O.push("flip=" + H), m.forEach(function(J) {
        var D = J[0], Y = J[1];
        typeof l[D] < "u" ? O.push(Y + "=" + encodeURIComponent(l[D])) : typeof l[Y] < "u" && O.push(Y + "=" + encodeURIComponent(l[Y]));
      }), O.length === 0 ? f : f + "?" + O.join("&");
    }
    function k(l, c) {
      var p, f = c.width, O = c.height;
      if (!(f && O))
        return {
          width: f,
          height: O,
          rect: l.crop
        };
      var b = l.crop, S = l.hotspot, M = f / O, q = b.width / b.height;
      if (q > M) {
        var F = Math.round(b.height), $ = Math.round(F * M), H = Math.max(0, Math.round(b.top)), J = Math.round((S.right - S.left) / 2 + S.left), D = Math.max(0, Math.round(J - $ / 2));
        D < b.left ? D = b.left : D + $ > b.left + b.width && (D = b.left + b.width - $), p = {
          left: D,
          top: H,
          width: $,
          height: F
        };
      } else {
        var Y = b.width, Mt = Math.round(Y / M), nn = Math.max(0, Math.round(b.left)), sn = Math.round((S.bottom - S.top) / 2 + S.top), mt = Math.max(0, Math.round(sn - Mt / 2));
        mt < b.top ? mt = b.top : mt + Mt > b.top + b.height && (mt = b.top + b.height - Mt), p = {
          left: nn,
          top: mt,
          width: Y,
          height: Mt
        };
      }
      return {
        width: f,
        height: O,
        rect: p
      };
    }
    var T = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"], x = ["top", "bottom", "left", "right", "center", "focalpoint", "entropy"], W = ["format"];
    function B(l) {
      return l && "config" in l ? typeof l.config == "function" : !1;
    }
    function G(l) {
      return l && "clientConfig" in l ? typeof l.clientConfig == "object" : !1;
    }
    function st(l) {
      for (var c = m, p = s(c), f; !(f = p()).done; ) {
        var O = f.value, b = O[0], S = O[1];
        if (l === b || l === S)
          return b;
      }
      return l;
    }
    function ot(l) {
      if (B(l)) {
        var c = l.config(), p = c.apiHost, f = c.projectId, O = c.dataset, b = p || "https://api.sanity.io";
        return new yt(null, {
          baseUrl: b.replace(/^https:\/\/api\./, "https://cdn."),
          projectId: f,
          dataset: O
        });
      }
      var S = l;
      if (G(S)) {
        var M = S.clientConfig, q = M.apiHost, F = M.projectId, $ = M.dataset, H = q || "https://api.sanity.io";
        return new yt(null, {
          baseUrl: H.replace(/^https:\/\/api\./, "https://cdn."),
          projectId: F,
          dataset: $
        });
      }
      return new yt(null, l);
    }
    var yt = /* @__PURE__ */ function() {
      function l(p, f) {
        this.options = void 0, this.options = p ? r({}, p.options || {}, f || {}) : r({}, f || {});
      }
      var c = l.prototype;
      return c.withOptions = function(f) {
        var O = f.baseUrl || this.options.baseUrl, b = {
          baseUrl: O
        };
        for (var S in f)
          if (f.hasOwnProperty(S)) {
            var M = st(S);
            b[M] = f[S];
          }
        return new l(this, r({
          baseUrl: O
        }, b));
      }, c.image = function(f) {
        return this.withOptions({
          source: f
        });
      }, c.dataset = function(f) {
        return this.withOptions({
          dataset: f
        });
      }, c.projectId = function(f) {
        return this.withOptions({
          projectId: f
        });
      }, c.bg = function(f) {
        return this.withOptions({
          bg: f
        });
      }, c.dpr = function(f) {
        return this.withOptions(f && f !== 1 ? {
          dpr: f
        } : {});
      }, c.width = function(f) {
        return this.withOptions({
          width: f
        });
      }, c.height = function(f) {
        return this.withOptions({
          height: f
        });
      }, c.focalPoint = function(f, O) {
        return this.withOptions({
          focalPoint: {
            x: f,
            y: O
          }
        });
      }, c.maxWidth = function(f) {
        return this.withOptions({
          maxWidth: f
        });
      }, c.minWidth = function(f) {
        return this.withOptions({
          minWidth: f
        });
      }, c.maxHeight = function(f) {
        return this.withOptions({
          maxHeight: f
        });
      }, c.minHeight = function(f) {
        return this.withOptions({
          minHeight: f
        });
      }, c.size = function(f, O) {
        return this.withOptions({
          width: f,
          height: O
        });
      }, c.blur = function(f) {
        return this.withOptions({
          blur: f
        });
      }, c.sharpen = function(f) {
        return this.withOptions({
          sharpen: f
        });
      }, c.rect = function(f, O, b, S) {
        return this.withOptions({
          rect: {
            left: f,
            top: O,
            width: b,
            height: S
          }
        });
      }, c.format = function(f) {
        return this.withOptions({
          format: f
        });
      }, c.invert = function(f) {
        return this.withOptions({
          invert: f
        });
      }, c.orientation = function(f) {
        return this.withOptions({
          orientation: f
        });
      }, c.quality = function(f) {
        return this.withOptions({
          quality: f
        });
      }, c.forceDownload = function(f) {
        return this.withOptions({
          download: f
        });
      }, c.flipHorizontal = function() {
        return this.withOptions({
          flipHorizontal: !0
        });
      }, c.flipVertical = function() {
        return this.withOptions({
          flipVertical: !0
        });
      }, c.ignoreImageParams = function() {
        return this.withOptions({
          ignoreImageParams: !0
        });
      }, c.fit = function(f) {
        if (T.indexOf(f) === -1)
          throw new Error('Invalid fit mode "' + f + '"');
        return this.withOptions({
          fit: f
        });
      }, c.crop = function(f) {
        if (x.indexOf(f) === -1)
          throw new Error('Invalid crop mode "' + f + '"');
        return this.withOptions({
          crop: f
        });
      }, c.saturation = function(f) {
        return this.withOptions({
          saturation: f
        });
      }, c.auto = function(f) {
        if (W.indexOf(f) === -1)
          throw new Error('Invalid auto mode "' + f + '"');
        return this.withOptions({
          auto: f
        });
      }, c.pad = function(f) {
        return this.withOptions({
          pad: f
        });
      }, c.url = function() {
        return v(this.options);
      }, c.toString = function() {
        return this.url();
      }, l;
    }();
    return ot;
  });
})(Qe);
var an = Qe.exports;
const cn = /* @__PURE__ */ Te(an);
function ks(t) {
  return cn(t);
}
const Ln = typeof navigator > "u" ? !1 : navigator.product === "ReactNative", be = {
  timeout: Ln ? 6e4 : 12e4
};
function Wn(t) {
  const e = typeof t == "string" ? Object.assign({
    url: t
  }, be) : Object.assign({}, be, t), r = new URL(e.url, "http://localhost");
  if (e.timeout = ur(e.timeout), e.query) {
    for (const [n, i] of Object.entries(e.query))
      if (i !== void 0)
        if (Array.isArray(i))
          for (const s of i)
            r.searchParams.append(n, s);
        else
          r.searchParams.append(n, i);
  }
  return e.method = e.body && !e.method ? "POST" : (e.method || "GET").toUpperCase(), e.url = r.origin === "http://localhost" ? "".concat(r.pathname, "?").concat(r.searchParams) : r.toString(), e;
}
function ur(t) {
  if (t === !1 || t === 0)
    return !1;
  if (t.connect || t.socket)
    return t;
  const e = Number(t);
  return isNaN(e) ? ur(be.timeout) : {
    connect: e,
    socket: e
  };
}
const Hn = /^https?:\/\//i;
function Bn(t) {
  if (!Hn.test(t.url))
    throw new Error('"'.concat(t.url, '" is not a valid URL'));
}
var he = function(t) {
  return t.replace(/^\s+|\s+$/g, "");
}, zn = function(t) {
  return Object.prototype.toString.call(t) === "[object Array]";
}, Nn = function(t) {
  if (!t)
    return {};
  for (var e = {}, r = he(t).split(`
`), n = 0; n < r.length; n++) {
    var i = r[n], s = i.indexOf(":"), o = he(i.slice(0, s)).toLowerCase(), u = he(i.slice(s + 1));
    typeof e[o] > "u" ? e[o] = u : zn(e[o]) ? e[o].push(u) : e[o] = [e[o], u];
  }
  return e;
};
const Vn = /* @__PURE__ */ Te(Nn);
var Gn = (t) => function(r, n) {
  const i = r === "onError";
  let s = n;
  for (var o = arguments.length, u = new Array(o > 2 ? o - 2 : 0), d = 2; d < o; d++)
    u[d - 2] = arguments[d];
  for (let g = 0; g < t[r].length; g++) {
    const a = t[r][g];
    if (s = a(s, ...u), i && !s)
      break;
  }
  return s;
};
function Jn() {
  const t = /* @__PURE__ */ Object.create(null);
  let e = 0;
  function r(i) {
    const s = e++;
    return t[s] = i, function() {
      delete t[s];
    };
  }
  function n(i) {
    for (const s in t)
      t[s](i);
  }
  return {
    publish: n,
    subscribe: r
  };
}
const Yn = ["request", "response", "progress", "error", "abort"], Le = ["processOptions", "validateOptions", "interceptRequest", "finalizeOptions", "onRequest", "onResponse", "onError", "onReturn", "onHeaders"];
function lr(t, e) {
  const r = [], n = Le.reduce((s, o) => (s[o] = s[o] || [], s), {
    processOptions: [Wn],
    validateOptions: [Bn]
  });
  function i(s) {
    const o = Yn.reduce((C, m) => (C[m] = Jn(), C), {}), u = Gn(n), d = u("processOptions", s);
    u("validateOptions", d);
    const g = {
      options: d,
      channels: o,
      applyMiddleware: u
    };
    let a = null;
    const h = o.request.subscribe((C) => {
      a = e(C, (m, v) => w(m, v, C));
    });
    o.abort.subscribe(() => {
      h(), a && a.abort();
    });
    const y = u("onReturn", o, g);
    return y === o && o.request.publish(g), y;
    function w(C, m, v) {
      let E = C, k = m;
      if (!E)
        try {
          k = u("onResponse", m, v);
        } catch (T) {
          k = null, E = T;
        }
      E = E && u("onError", E, v), E ? o.error.publish(E) : k && o.response.publish(k);
    }
  }
  return i.use = function(o) {
    if (!o)
      throw new Error("Tried to add middleware that resolved to falsey value");
    if (typeof o == "function")
      throw new Error("Tried to add middleware that was a function. It probably expects you to pass options to it.");
    if (o.onReturn && n.onReturn.length > 0)
      throw new Error("Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event");
    return Le.forEach((u) => {
      o[u] && n[u].push(o[u]);
    }), r.push(o), i;
  }, i.clone = function() {
    return lr(r, e);
  }, t.forEach(i.use), i;
}
var fr = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
}, U = (t, e, r) => (fr(t, e, "read from private field"), r ? r.call(t) : e.get(t)), wt = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, at = (t, e, r, n) => (fr(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), $t, qt, ct, jt, z;
class Xn {
  constructor() {
    this.readyState = 0, this.responseType = "", wt(this, $t, void 0), wt(this, qt, void 0), wt(this, ct, void 0), wt(this, jt, {}), wt(this, z, void 0);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- _async is only declared for typings compatibility
  open(e, r, n) {
    at(this, $t, e), at(this, qt, r), at(this, ct, ""), this.readyState = 1, this.onreadystatechange(), at(this, z, void 0);
  }
  abort() {
    U(this, z) && U(this, z).abort();
  }
  getAllResponseHeaders() {
    return U(this, ct);
  }
  setRequestHeader(e, r) {
    U(this, jt)[e] = r;
  }
  send(e) {
    const r = this.responseType !== "arraybuffer", n = {
      method: U(this, $t),
      headers: U(this, jt),
      body: e
    };
    typeof AbortController == "function" && (at(this, z, new AbortController()), typeof EventTarget < "u" && U(this, z).signal instanceof EventTarget && (n.signal = U(this, z).signal)), typeof document < "u" && (n.credentials = this.withCredentials ? "include" : "omit"), fetch(U(this, qt), n).then((i) => (i.headers.forEach((s, o) => {
      at(this, ct, U(this, ct) + "".concat(o, ": ").concat(s, `\r
`));
    }), this.status = i.status, this.statusText = i.statusText, this.readyState = 3, r ? i.text() : i.arrayBuffer())).then((i) => {
      typeof i == "string" ? this.responseText = i : this.response = i, this.readyState = 4, this.onreadystatechange();
    }).catch((i) => {
      var s;
      if (i.name === "AbortError") {
        this.onabort();
        return;
      }
      (s = this.onerror) == null || s.call(this, i);
    });
  }
}
$t = /* @__PURE__ */ new WeakMap();
qt = /* @__PURE__ */ new WeakMap();
ct = /* @__PURE__ */ new WeakMap();
jt = /* @__PURE__ */ new WeakMap();
z = /* @__PURE__ */ new WeakMap();
const Ce = typeof XMLHttpRequest == "function" ? "xhr" : "fetch", Kn = Ce === "xhr" ? XMLHttpRequest : Xn;
var Qn = (t, e) => {
  const r = t.options, n = t.applyMiddleware("finalizeOptions", r), i = {}, s = t.applyMiddleware("interceptRequest", void 0, {
    adapter: Ce,
    context: t
  });
  if (s) {
    const T = setTimeout(e, 0, null, s);
    return {
      abort: () => clearTimeout(T)
    };
  }
  let o = new Kn();
  const u = n.headers, d = n.timeout;
  let g = !1, a = !1, h = !1;
  if (o.onerror = v, o.ontimeout = v, o.onabort = () => {
    m(!0), g = !0;
  }, o.onreadystatechange = () => {
    C(), !(g || o.readyState !== 4) && o.status !== 0 && k();
  }, o.open(
    n.method,
    n.url,
    !0
    // Always async
  ), o.withCredentials = !!n.withCredentials, u && o.setRequestHeader)
    for (const T in u)
      u.hasOwnProperty(T) && o.setRequestHeader(T, u[T]);
  return n.rawBody && (o.responseType = "arraybuffer"), t.applyMiddleware("onRequest", {
    options: n,
    adapter: Ce,
    request: o,
    context: t
  }), o.send(n.body || null), d && (i.connect = setTimeout(() => w("ETIMEDOUT"), d.connect)), {
    abort: y
  };
  function y() {
    g = !0, o && o.abort();
  }
  function w(T) {
    h = !0, o.abort();
    const x = new Error(T === "ESOCKETTIMEDOUT" ? "Socket timed out on request to ".concat(n.url) : "Connection timed out on request to ".concat(n.url));
    x.code = T, t.channels.error.publish(x);
  }
  function C() {
    d && (m(), i.socket = setTimeout(() => w("ESOCKETTIMEDOUT"), d.socket));
  }
  function m(T) {
    (T || g || o.readyState >= 2 && i.connect) && clearTimeout(i.connect), i.socket && clearTimeout(i.socket);
  }
  function v(T) {
    if (a)
      return;
    m(!0), a = !0, o = null;
    const x = T || new Error("Network error while attempting to reach ".concat(n.url));
    x.isNetworkError = !0, x.request = n, e(x);
  }
  function E() {
    return {
      body: o.response || (o.responseType === "" || o.responseType === "text" ? o.responseText : ""),
      url: n.url,
      method: n.method,
      headers: Vn(o.getAllResponseHeaders()),
      statusCode: o.status,
      statusMessage: o.statusText
    };
  }
  function k() {
    if (!(g || a || h)) {
      if (o.status === 0) {
        v(new Error("Unknown XHR error"));
        return;
      }
      m(), a = !0, e(null, E());
    }
  }
};
const Zn = function() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Qn;
  return lr(t, e);
};
var We = { exports: {} }, de, He;
function ti() {
  if (He)
    return de;
  He = 1;
  var t = 1e3, e = t * 60, r = e * 60, n = r * 24, i = n * 7, s = n * 365.25;
  de = function(a, h) {
    h = h || {};
    var y = typeof a;
    if (y === "string" && a.length > 0)
      return o(a);
    if (y === "number" && isFinite(a))
      return h.long ? d(a) : u(a);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(a)
    );
  };
  function o(a) {
    if (a = String(a), !(a.length > 100)) {
      var h = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        a
      );
      if (h) {
        var y = parseFloat(h[1]), w = (h[2] || "ms").toLowerCase();
        switch (w) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return y * s;
          case "weeks":
          case "week":
          case "w":
            return y * i;
          case "days":
          case "day":
          case "d":
            return y * n;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return y * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return y * e;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return y * t;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return y;
          default:
            return;
        }
      }
    }
  }
  function u(a) {
    var h = Math.abs(a);
    return h >= n ? Math.round(a / n) + "d" : h >= r ? Math.round(a / r) + "h" : h >= e ? Math.round(a / e) + "m" : h >= t ? Math.round(a / t) + "s" : a + "ms";
  }
  function d(a) {
    var h = Math.abs(a);
    return h >= n ? g(a, h, n, "day") : h >= r ? g(a, h, r, "hour") : h >= e ? g(a, h, e, "minute") : h >= t ? g(a, h, t, "second") : a + " ms";
  }
  function g(a, h, y, w) {
    var C = h >= y * 1.5;
    return Math.round(a / y) + " " + w + (C ? "s" : "");
  }
  return de;
}
function ei(t) {
  r.debug = r, r.default = r, r.coerce = d, r.disable = s, r.enable = i, r.enabled = o, r.humanize = ti(), r.destroy = g, Object.keys(t).forEach((a) => {
    r[a] = t[a];
  }), r.names = [], r.skips = [], r.formatters = {};
  function e(a) {
    let h = 0;
    for (let y = 0; y < a.length; y++)
      h = (h << 5) - h + a.charCodeAt(y), h |= 0;
    return r.colors[Math.abs(h) % r.colors.length];
  }
  r.selectColor = e;
  function r(a) {
    let h, y = null, w, C;
    function m(...v) {
      if (!m.enabled)
        return;
      const E = m, k = Number(/* @__PURE__ */ new Date()), T = k - (h || k);
      E.diff = T, E.prev = h, E.curr = k, h = k, v[0] = r.coerce(v[0]), typeof v[0] != "string" && v.unshift("%O");
      let x = 0;
      v[0] = v[0].replace(/%([a-zA-Z%])/g, (B, G) => {
        if (B === "%%")
          return "%";
        x++;
        const st = r.formatters[G];
        if (typeof st == "function") {
          const ot = v[x];
          B = st.call(E, ot), v.splice(x, 1), x--;
        }
        return B;
      }), r.formatArgs.call(E, v), (E.log || r.log).apply(E, v);
    }
    return m.namespace = a, m.useColors = r.useColors(), m.color = r.selectColor(a), m.extend = n, m.destroy = r.destroy, Object.defineProperty(m, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => y !== null ? y : (w !== r.namespaces && (w = r.namespaces, C = r.enabled(a)), C),
      set: (v) => {
        y = v;
      }
    }), typeof r.init == "function" && r.init(m), m;
  }
  function n(a, h) {
    const y = r(this.namespace + (typeof h > "u" ? ":" : h) + a);
    return y.log = this.log, y;
  }
  function i(a) {
    r.save(a), r.namespaces = a, r.names = [], r.skips = [];
    let h;
    const y = (typeof a == "string" ? a : "").split(/[\s,]+/), w = y.length;
    for (h = 0; h < w; h++)
      y[h] && (a = y[h].replace(/\*/g, ".*?"), a[0] === "-" ? r.skips.push(new RegExp("^" + a.slice(1) + "$")) : r.names.push(new RegExp("^" + a + "$")));
  }
  function s() {
    const a = [
      ...r.names.map(u),
      ...r.skips.map(u).map((h) => "-" + h)
    ].join(",");
    return r.enable(""), a;
  }
  function o(a) {
    if (a[a.length - 1] === "*")
      return !0;
    let h, y;
    for (h = 0, y = r.skips.length; h < y; h++)
      if (r.skips[h].test(a))
        return !1;
    for (h = 0, y = r.names.length; h < y; h++)
      if (r.names[h].test(a))
        return !0;
    return !1;
  }
  function u(a) {
    return a.toString().substring(2, a.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function d(a) {
    return a instanceof Error ? a.stack || a.message : a;
  }
  function g() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return r.enable(r.load()), r;
}
var ri = ei;
(function(t, e) {
  e.formatArgs = n, e.save = i, e.load = s, e.useColors = r, e.storage = o(), e.destroy = (() => {
    let d = !1;
    return () => {
      d || (d = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })(), e.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33"
  ];
  function r() {
    return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function n(d) {
    if (d[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + d[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), !this.useColors)
      return;
    const g = "color: " + this.color;
    d.splice(1, 0, g, "color: inherit");
    let a = 0, h = 0;
    d[0].replace(/%[a-zA-Z%]/g, (y) => {
      y !== "%%" && (a++, y === "%c" && (h = a));
    }), d.splice(h, 0, g);
  }
  e.log = console.debug || console.log || (() => {
  });
  function i(d) {
    try {
      d ? e.storage.setItem("debug", d) : e.storage.removeItem("debug");
    } catch {
    }
  }
  function s() {
    let d;
    try {
      d = e.storage.getItem("debug");
    } catch {
    }
    return !d && typeof process < "u" && "env" in process && (d = process.env.DEBUG), d;
  }
  function o() {
    try {
      return localStorage;
    } catch {
    }
  }
  t.exports = ri(e);
  const { formatters: u } = t.exports;
  u.j = function(d) {
    try {
      return JSON.stringify(d);
    } catch (g) {
      return "[UnexpectedJSONParseError]: " + g.message;
    }
  };
})(We, We.exports);
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function Be(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function ni(t) {
  var e, r;
  return Be(t) === !1 ? !1 : (e = t.constructor, e === void 0 ? !0 : (r = e.prototype, !(Be(r) === !1 || r.hasOwnProperty("isPrototypeOf") === !1)));
}
const ii = typeof Buffer > "u" ? () => !1 : (t) => Buffer.isBuffer(t), si = ["boolean", "string", "number"];
function oi() {
  return {
    processOptions: (t) => {
      const e = t.body;
      return !e || !(!(typeof e.pipe == "function") && !ii(e) && (si.indexOf(typeof e) !== -1 || Array.isArray(e) || ni(e))) ? t : Object.assign({}, t, {
        body: JSON.stringify(t.body),
        headers: Object.assign({}, t.headers, {
          "Content-Type": "application/json"
        })
      });
    }
  };
}
function ai(t) {
  return {
    onResponse: (r) => {
      const n = r.headers["content-type"] || "", i = t && t.force || n.indexOf("application/json") !== -1;
      return !r.body || !n || !i ? r : Object.assign({}, r, {
        body: e(r.body)
      });
    },
    processOptions: (r) => Object.assign({}, r, {
      headers: Object.assign({
        Accept: "application/json"
      }, r.headers)
    })
  };
  function e(r) {
    try {
      return JSON.parse(r);
    } catch (n) {
      throw n.message = "Failed to parsed response body as JSON: ".concat(n.message), n;
    }
  }
}
let ut;
typeof globalThis < "u" ? ut = globalThis : typeof window < "u" ? ut = window : typeof global < "u" ? ut = global : typeof self < "u" ? ut = self : ut = {};
var ci = ut;
function ui() {
  const e = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).implementation || ci.Observable;
  if (!e)
    throw new Error("`Observable` is not available in global scope, and no implementation was passed");
  return {
    onReturn: (r, n) => new e((i) => (r.error.subscribe((s) => i.error(s)), r.progress.subscribe((s) => i.next(Object.assign({
      type: "progress"
    }, s))), r.response.subscribe((s) => {
      i.next(Object.assign({
        type: "response"
      }, s)), i.complete();
    }), r.request.publish(n), () => r.abort.publish()))
  };
}
function li() {
  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onRequest: (t) => {
      if (t.adapter !== "xhr")
        return;
      const e = t.request, r = t.context;
      "upload" in e && "onprogress" in e.upload && (e.upload.onprogress = n("upload")), "onprogress" in e && (e.onprogress = n("download"));
      function n(i) {
        return (s) => {
          const o = s.lengthComputable ? s.loaded / s.total * 100 : -1;
          r.channels.progress.publish({
            stage: i,
            percent: o,
            total: s.total,
            loaded: s.loaded,
            lengthComputable: s.lengthComputable
          });
        };
      }
    }
  };
}
var _e = function(t, e) {
  return _e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n)
      Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, _e(t, e);
};
function xe(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  _e(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
function ze(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, r = e && t[e], n = 0;
  if (r)
    return r.call(t);
  if (t && typeof t.length == "number")
    return {
      next: function() {
        return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Jt(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var n = r.call(t), i, s = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = n.next()).done; )
      s.push(i.value);
  } catch (u) {
    o = { error: u };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return s;
}
function Yt(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = e.length, s; n < i; n++)
      (s || !(n in e)) && (s || (s = Array.prototype.slice.call(e, 0, n)), s[n] = e[n]);
  return t.concat(s || Array.prototype.slice.call(e));
}
function L(t) {
  return typeof t == "function";
}
function dr(t) {
  var e = function(n) {
    Error.call(n), n.stack = new Error().stack;
  }, r = t(e);
  return r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, r;
}
var pe = dr(function(t) {
  return function(r) {
    t(this), this.message = r ? r.length + ` errors occurred during unsubscription:
` + r.map(function(n, i) {
      return i + 1 + ") " + n.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = r;
  };
});
function Ne(t, e) {
  if (t) {
    var r = t.indexOf(e);
    0 <= r && t.splice(r, 1);
  }
}
var Ie = function() {
  function t(e) {
    this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return t.prototype.unsubscribe = function() {
    var e, r, n, i, s;
    if (!this.closed) {
      this.closed = !0;
      var o = this._parentage;
      if (o)
        if (this._parentage = null, Array.isArray(o))
          try {
            for (var u = ze(o), d = u.next(); !d.done; d = u.next()) {
              var g = d.value;
              g.remove(this);
            }
          } catch (m) {
            e = { error: m };
          } finally {
            try {
              d && !d.done && (r = u.return) && r.call(u);
            } finally {
              if (e)
                throw e.error;
            }
          }
        else
          o.remove(this);
      var a = this.initialTeardown;
      if (L(a))
        try {
          a();
        } catch (m) {
          s = m instanceof pe ? m.errors : [m];
        }
      var h = this._finalizers;
      if (h) {
        this._finalizers = null;
        try {
          for (var y = ze(h), w = y.next(); !w.done; w = y.next()) {
            var C = w.value;
            try {
              Ve(C);
            } catch (m) {
              s = s ?? [], m instanceof pe ? s = Yt(Yt([], Jt(s)), Jt(m.errors)) : s.push(m);
            }
          }
        } catch (m) {
          n = { error: m };
        } finally {
          try {
            w && !w.done && (i = y.return) && i.call(y);
          } finally {
            if (n)
              throw n.error;
          }
        }
      }
      if (s)
        throw new pe(s);
    }
  }, t.prototype.add = function(e) {
    var r;
    if (e && e !== this)
      if (this.closed)
        Ve(e);
      else {
        if (e instanceof t) {
          if (e.closed || e._hasParent(this))
            return;
          e._addParent(this);
        }
        (this._finalizers = (r = this._finalizers) !== null && r !== void 0 ? r : []).push(e);
      }
  }, t.prototype._hasParent = function(e) {
    var r = this._parentage;
    return r === e || Array.isArray(r) && r.includes(e);
  }, t.prototype._addParent = function(e) {
    var r = this._parentage;
    this._parentage = Array.isArray(r) ? (r.push(e), r) : r ? [r, e] : e;
  }, t.prototype._removeParent = function(e) {
    var r = this._parentage;
    r === e ? this._parentage = null : Array.isArray(r) && Ne(r, e);
  }, t.prototype.remove = function(e) {
    var r = this._finalizers;
    r && Ne(r, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}();
Ie.EMPTY;
function pr(t) {
  return t instanceof Ie || t && "closed" in t && L(t.remove) && L(t.add) && L(t.unsubscribe);
}
function Ve(t) {
  L(t) ? t() : t.unsubscribe();
}
var gr = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1
}, Oe = {
  setTimeout: function(t, e) {
    for (var r = [], n = 2; n < arguments.length; n++)
      r[n - 2] = arguments[n];
    return setTimeout.apply(void 0, Yt([t, e], Jt(r)));
  },
  clearTimeout: function(t) {
    return (clearTimeout)(t);
  },
  delegate: void 0
};
function di(t) {
  Oe.setTimeout(function() {
    throw t;
  });
}
function Ge() {
}
function pi(t) {
  t();
}
var Ae = function(t) {
  xe(e, t);
  function e(r) {
    var n = t.call(this) || this;
    return n.isStopped = !1, r ? (n.destination = r, pr(r) && r.add(n)) : n.destination = vi, n;
  }
  return e.create = function(r, n, i) {
    return new Ee(r, n, i);
  }, e.prototype.next = function(r) {
    this.isStopped || this._next(r);
  }, e.prototype.error = function(r) {
    this.isStopped || (this.isStopped = !0, this._error(r));
  }, e.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, e.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this), this.destination = null);
  }, e.prototype._next = function(r) {
    this.destination.next(r);
  }, e.prototype._error = function(r) {
    try {
      this.destination.error(r);
    } finally {
      this.unsubscribe();
    }
  }, e.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, e;
}(Ie), gi = Function.prototype.bind;
function ge(t, e) {
  return gi.call(t, e);
}
var yi = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var r = this.partialObserver;
    if (r.next)
      try {
        r.next(e);
      } catch (n) {
        Ft(n);
      }
  }, t.prototype.error = function(e) {
    var r = this.partialObserver;
    if (r.error)
      try {
        r.error(e);
      } catch (n) {
        Ft(n);
      }
    else
      Ft(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (r) {
        Ft(r);
      }
  }, t;
}(), Ee = function(t) {
  xe(e, t);
  function e(r, n, i) {
    var s = t.call(this) || this, o;
    if (L(r) || !r)
      o = {
        next: r ?? void 0,
        error: n ?? void 0,
        complete: i ?? void 0
      };
    else {
      var u;
      s && gr.useDeprecatedNextContext ? (u = Object.create(r), u.unsubscribe = function() {
        return s.unsubscribe();
      }, o = {
        next: r.next && ge(r.next, u),
        error: r.error && ge(r.error, u),
        complete: r.complete && ge(r.complete, u)
      }) : o = r;
    }
    return s.destination = new yi(o), s;
  }
  return e;
}(Ae);
function Ft(t) {
  di(t);
}
function mi(t) {
  throw t;
}
var vi = {
  closed: !0,
  next: Ge,
  error: mi,
  complete: Ge
}, wi = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function bi(t) {
  return t;
}
function Ci(t) {
  return t.length === 0 ? bi : t.length === 1 ? t[0] : function(r) {
    return t.reduce(function(n, i) {
      return i(n);
    }, r);
  };
}
var Tt = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var r = new t();
    return r.source = this, r.operator = e, r;
  }, t.prototype.subscribe = function(e, r, n) {
    var i = this, s = Oi(e) ? e : new Ee(e, r, n);
    return pi(function() {
      var o = i, u = o.operator, d = o.source;
      s.add(u ? u.call(s, d) : d ? i._subscribe(s) : i._trySubscribe(s));
    }), s;
  }, t.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (r) {
      e.error(r);
    }
  }, t.prototype.forEach = function(e, r) {
    var n = this;
    return r = Je(r), new r(function(i, s) {
      var o = new Ee({
        next: function(u) {
          try {
            e(u);
          } catch (d) {
            s(d), o.unsubscribe();
          }
        },
        error: s,
        complete: i
      });
      n.subscribe(o);
    });
  }, t.prototype._subscribe = function(e) {
    var r;
    return (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(e);
  }, t.prototype[wi] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], r = 0; r < arguments.length; r++)
      e[r] = arguments[r];
    return Ci(e)(this);
  }, t.prototype.toPromise = function(e) {
    var r = this;
    return e = Je(e), new e(function(n, i) {
      var s;
      r.subscribe(function(o) {
        return s = o;
      }, function(o) {
        return i(o);
      }, function() {
        return n(s);
      });
    });
  }, t.create = function(e) {
    return new t(e);
  }, t;
}();
function Je(t) {
  var e;
  return (e = t ?? gr.Promise) !== null && e !== void 0 ? e : Promise;
}
function _i(t) {
  return t && L(t.next) && L(t.error) && L(t.complete);
}
function Oi(t) {
  return t && t instanceof Ae || _i(t) && pr(t);
}
(function(t) {
  xe(e, t);
  function e(r, n, i, s, o, u) {
    var d = t.call(this, r) || this;
    return d.onFinalize = o, d.shouldUnsubscribe = u, d._next = n ? function(g) {
      try {
        n(g);
      } catch (a) {
        r.error(a);
      }
    } : t.prototype._next, d._error = s ? function(g) {
      try {
        s(g);
      } catch (a) {
        r.error(a);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._error, d._complete = i ? function() {
      try {
        i();
      } catch (g) {
        r.error(g);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._complete, d;
  }
  return e.prototype.unsubscribe = function() {
    var r;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var n = this.closed;
      t.prototype.unsubscribe.call(this), !n && ((r = this.onFinalize) === null || r === void 0 || r.call(this));
    }
  }, e;
})(Ae); dr(function(t) {
  return function() {
    t(this), this.name = "EmptyError", this.message = "no elements in sequence";
  };
});
var Ti = [];
const ye = 5;
class xi extends Error {
  constructor(e) {
    const r = vr(e);
    super(r.message), this.statusCode = 400, Object.assign(this, r);
  }
}
class Ii extends Error {
  constructor(e) {
    const r = vr(e);
    super(r.message), this.statusCode = 500, Object.assign(this, r);
  }
}
function vr(t) {
  const e = t.body, r = {
    response: t,
    statusCode: t.statusCode,
    responseBody: Mi(e, t),
    message: "",
    details: void 0
  };
  if (e.error && e.message)
    return r.message = "".concat(e.error, " - ").concat(e.message), r;
  if (Ai(e)) {
    const n = e.error.items || [], i = n.slice(0, ye).map((o) => {
      var u;
      return (u = o.error) == null ? void 0 : u.description;
    }).filter(Boolean);
    let s = i.length ? `:
- `.concat(i.join(`
- `)) : "";
    return n.length > ye && (s += `
...and `.concat(n.length - ye, " more")), r.message = "".concat(e.error.description).concat(s), r.details = e.error, r;
  }
  return e.error && e.error.description ? (r.message = e.error.description, r.details = e.error, r) : (r.message = e.error || e.message || Pi(t), r);
}
function Ai(t) {
  return Ye(t) && Ye(t.error) && t.error.type === "mutationError" && typeof t.error.description == "string";
}
function Ye(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
function Pi(t) {
  const e = t.statusMessage ? " ".concat(t.statusMessage) : "";
  return "".concat(t.method, "-request to ").concat(t.url, " resulted in HTTP ").concat(t.statusCode).concat(e);
}
function Mi(t, e) {
  return (e.headers["content-type"] || "").toLowerCase().indexOf("application/json") !== -1 ? JSON.stringify(t, null, 2) : t;
}
const Ri = {
  onResponse: (t) => {
    if (t.statusCode >= 500)
      throw new Ii(t);
    if (t.statusCode >= 400)
      throw new xi(t);
    return t;
  }
}, Fi = {
  onResponse: (t) => {
    const e = t.headers["x-sanity-warning"];
    return (Array.isArray(e) ? e : [e]).filter(Boolean).forEach((n) => console.warn(n)), t;
  }
};
function $i(t) {
  const e = Zn([...t, Fi, oi(), ai(), li(), Ri, ui({
    implementation: Tt
  })]);
  function r(n) {
    return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e)({
      maxRedirects: 0,
      ...n
    });
  }
  return r.defaultRequester = e, r;
}
$i(Ti);
function Is() {
  return globalThis.sanityClient || console.error("Sanity client has not been initialized correctly"), globalThis.sanityClient;
}

const imageBuilder = ks(Is());

function urlForImage(source) {
  return imageBuilder.image(source);
}

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$c = createAstro("https://kingwoodbuilders.com");
const $$HoverPrefetch = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$HoverPrefetch;
  const props = { ...Astro2.props };
  if (typeof props.max !== "number") {
    props.max = 8;
  }
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<script>(function(){", "\n  const prefetchList = [];\n\n  document.addEventListener('mouseover', (e) => {\n    if (e.target.tagName === 'A' && prefetchList.length < max) {\n      const url = e.target.getAttribute('href');\n\n      if (url.startsWith('/' && url !== window.location.pathname )) {\n        if (prefetchList.includes(url) === false) {\n          // console.log(`prefetching url ${url}`);\n          const link = document.createElement('link');\n          link.rel = 'prefetch';\n          link.as = 'document';\n          link.href = url;\n          document.head.appendChild(link);\n          prefetchList.push(url);\n        }\n      }\n    }\n  });\n})();<\/script>"], ["<script>(function(){", "\n  const prefetchList = [];\n\n  document.addEventListener('mouseover', (e) => {\n    if (e.target.tagName === 'A' && prefetchList.length < max) {\n      const url = e.target.getAttribute('href');\n\n      if (url.startsWith('/' && url !== window.location.pathname )) {\n        if (prefetchList.includes(url) === false) {\n          // console.log(\\`prefetching url \\${url}\\`);\n          const link = document.createElement('link');\n          link.rel = 'prefetch';\n          link.as = 'document';\n          link.href = url;\n          document.head.appendChild(link);\n          prefetchList.push(url);\n        }\n      }\n    }\n  });\n})();<\/script>"])), defineScriptVars({ max: props.max }));
}, "/Users/bricechristian/Documents/GitHub/kingwood-builders/node_modules/astro-hover-prefetch/HoverPrefetch.astro");

const $$Astro$b = createAstro("https://kingwoodbuilders.com");
const $$OpenGraphArticleTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}
${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}
${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}
${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}
${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}
${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "/Users/bricechristian/Documents/GitHub/kingwood-builders/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro");

const $$Astro$a = createAstro("https://kingwoodbuilders.com");
const $$OpenGraphBasicTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}>
<meta property="og:type"${addAttribute(openGraph.basic.type, "content")}>
<meta property="og:image"${addAttribute(openGraph.basic.image, "content")}>
<meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "/Users/bricechristian/Documents/GitHub/kingwood-builders/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro");

const $$Astro$9 = createAstro("https://kingwoodbuilders.com");
const $$OpenGraphImageTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>
${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}
${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}
${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}
${!(height === null) ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}
${!(alt === null) ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "/Users/bricechristian/Documents/GitHub/kingwood-builders/node_modules/astro-seo/src/components/OpenGraphImageTags.astro");

const $$Astro$8 = createAstro("https://kingwoodbuilders.com");
const $$OpenGraphOptionalTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}
${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}
${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}
${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}
${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}
${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}
${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "/Users/bricechristian/Documents/GitHub/kingwood-builders/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro");

const $$Astro$7 = createAstro("https://kingwoodbuilders.com");
const $$ExtendedTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}
${props.extend.meta?.map(({ content, httpEquiv, name, property }) => renderTemplate`<meta${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(name, "name")}${addAttribute(property, "property")}>`)}`;
}, "/Users/bricechristian/Documents/GitHub/kingwood-builders/node_modules/astro-seo/src/components/ExtendedTags.astro");

const $$Astro$6 = createAstro("https://kingwoodbuilders.com");
const $$TwitterTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}
${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}
${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}
${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}
${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}
${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}
${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "/Users/bricechristian/Documents/GitHub/kingwood-builders/node_modules/astro-seo/src/components/TwitterTags.astro");

const $$Astro$5 = createAstro("https://kingwoodbuilders.com");
const $$SEO = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || props.openGraph.basic.title == null || props.openGraph.basic.type == null || props.openGraph.basic.image == null) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is stongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}

${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}

<link rel="canonical"${addAttribute(Astro2.props.canonical || Astro2.url.href, "href")}>

${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}

<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>

${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}
${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}
${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}
${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}
${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}
${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}`;
}, "/Users/bricechristian/Documents/GitHub/kingwood-builders/node_modules/astro-seo/src/SEO.astro");

const $$Astro$4 = createAstro("https://kingwoodbuilders.com");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead($$result)}<header class="py-6 absolute z-[999] w-full md:py-3">
    <nav class="grid-layout">
        <div class="col-start-2 col-span-10 md:col-start-2 md:col-span-8">
            <div class="flex items-center justify-between">
                <a href="/" class="text-24 leading-none font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" id="logo" class="w-[60px] h-[68px] [&_path]:fill-black md:w-[34px] md:h-[38px]" viewBox="0 0 208.39 237.03"><g><path d="M205.1 112.53c0 8.28-.02 16.56.02 24.83 0 .93-.29 1.53-1.01 2.12-15.69 12.89-31.36 25.8-47.04 38.71-.27.23-.56.43-.91.7-5.5-5.16-10.97-10.28-16.52-15.49 21.77-17.44 43.47-34.82 65.17-52.2.1.05.19.1.29.15v1.18ZM126.31 18.19c-.34-.23-.65-.45-.97-.67-1.79-1.28-2.54-3.52-1.9-5.63.62-2.03 2.51-3.45 4.68-3.5 2.25-.05 4.16 1.24 4.91 3.33a5.016 5.016 0 0 1-4.09 6.68c-.35.05-.71.06-1.2.09l-1.43-.3ZM115.78 218.11c.26.87.29 9.85.04 11.1h-11.04v-11.1h11ZM115.78 201.79c.24.83.32 9.48.07 11.16h-10.94c-.26-.86-.32-9.6-.08-11.16h10.95ZM79.54 48.68c12.74-8.12 36.23-9.89 53.14.56-2.64 3.2-5.31 6.35-8.05 9.62-6.04-2.63-12.37-3.97-18.95-3.98-6.54-.01-12.85 1.23-18.98 3.86-2.44-3.42-4.8-6.74-7.16-10.06ZM87.45 218.24c.82-.26 9.53-.33 11.15-.08v11.03H87.58c-.25-.85-.35-8.6-.13-10.95ZM98.46 201.79c.25.81.32 9.47.07 11.16H87.6c-.27-.85-.34-9.51-.09-11.16h10.95Z"></path><path d="M81.74 9.21c2.43-.48 4.67.61 5.69 2.77 1.1 2.35.44 4.47-2.18 6.68 3.82 4.99 7.65 9.98 11.62 15.17 2.6-8.1 5.13-15.98 7.67-23.9-2.97-1.71-4-3.61-3.42-6.08.52-2.19 2.49-3.77 4.79-3.85 2.15-.08 4.2 1.33 4.91 3.37.86 2.48-.05 4.48-3.02 6.52l9.85 23.92c2.99-5.31 5.77-10.44 8.66-15.62l1.43.3c-.03 1.01-.08 2.02-.08 3.04-.01 4.68 0 9.36 0 14.04-.01 1.48-.05 2.96-.09 4.43-.01.19-.06.38-.12.67-14.81-5.2-29.57-5.1-44.42.16V19.27c-1.81-.19-3.34-.78-4.35-2.29-.67-1.01-.94-2.11-.85-3.3.15-2.15 1.83-4.05 3.91-4.47ZM31.64 236.87c-.02-.2-.05-.39-.05-.59v-24.96c0-.23.09-.46.16-.79-1.59-1.33-3.21-2.69-4.83-4.05-8.68-7.25-17.36-14.51-26.07-21.75-.6-.5-.86-1.01-.86-1.82.03-8.44.02-16.88.02-25.31v-1.24c4.21 3.33 8.18 6.59 12.18 9.81 4.01 3.23 8.02 6.48 12.04 9.72 3.98 3.22 7.96 6.43 11.95 9.64 4 3.24 8.01 6.48 12.09 9.78 15.39-14.43 30.71-28.8 46.16-43.29-.4-.12-.64-.22-.89-.27-8.85-1.97-16.71-5.88-23.4-12.03-7.73-7.09-12.69-15.84-15.39-25.93-1.44-5.4-2.08-10.91-2.05-16.49.05-8.86 1.61-17.42 5.43-25.47 2.83-5.97 6.69-11.16 11.69-15.5.29-.26.6-.5 1.02-.84 4.65 5.03 9.28 10.04 14.02 15.18-.45.43-.87.83-1.29 1.22-3.36 3.16-6.05 6.8-7.93 11.03-2.28 5.12-3.03 10.5-2.65 16.04.5 7.4 2.91 14.06 7.89 19.66 4.16 4.68 9.33 7.72 15.39 9.23 7.46 1.87 14.86 1.66 22.04-1.11 10.21-3.95 16.46-11.46 18.94-22.05 1.68-7.19 1.28-14.29-1.58-21.17-1.93-4.67-4.92-8.58-8.63-11.96-.29-.27-.57-.54-.95-.9 4.67-5.06 9.3-10.07 13.98-15.14.28.2.54.37.78.56 7.08 6.02 11.88 13.54 14.68 22.35 2.45 7.71 3.22 15.62 2.69 23.68-.5 7.67-2.27 15-5.64 21.92-5.35 10.96-13.48 19.13-24.6 24.23-1.08.5-1.97 1.16-2.81 1.98-2.67 2.59-5.37 5.14-8.05 7.71-.15.14-.28.3-.41.44.52.76 40.73 34.32 43.55 36.34 15.93-13.01 31.9-26.05 48.01-39.2.04.47.1.77.1 1.06 0 8.52-.01 17.04.01 25.56.01.7-.22 1.17-.76 1.62-9.82 8.33-19.62 16.69-29.45 25-.79.66-1.07 1.32-1.06 2.33.04 7.92.02 15.84.02 23.76v1.3c-.09.04-.18.08-.26.12-25.6-20.73-51.19-41.46-76.87-62.25-22.74 21.04-45.44 42.04-68.1 63-.13-.04-.18-.04-.21-.06s-.05-.06-.06-.1Z"></path><path d="M1.92 111.3c21.54 17.24 43.07 34.48 64.6 51.73.13.1.27.18.5.34l-16.54 15.51c-.22-.15-.39-.25-.54-.37-15.8-13.01-31.59-26.03-47.41-39.02-.75-.62-1.06-1.23-1.05-2.22.04-8.27.02-16.55.02-24.83v-1.12c.13-.06.16-.09.2-.09.04-.01.08 0 .12.02.04.01.07.02.1.05Z"></path></g></svg>
                </a>
                <a href="#" class="contact-trigger text-24 leading-none font-bold inline-flex items-center md:text-16">
                    <span>Get Started</span>
                    <svg class="w-7 ml-2 md:w-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="square" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                    </svg>                    
                </a>
            </div>
        </div>
    </nav>
</header>`;
}, "/Users/bricechristian/Documents/GitHub/kingwood-builders/src/components/Header.astro");

const $$Astro$3 = createAstro("https://kingwoodbuilders.com");
const $$GridLines = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$GridLines;
  return renderTemplate`${maybeRenderHead($$result)}<div class="grid-layout fixed z-[999] w-full h-full inset-0 pointer-events-none">
    <div class="w-px h-full bg-[rgba(44,44,44,.07)] dark:bg-[rgba(255,255,255,0.07)]"></div>
    <div class="w-px h-full bg-[rgba(44,44,44,.07)] dark:bg-[rgba(255,255,255,0.07)]"></div>
    <div class="w-px h-full bg-[rgba(44,44,44,.07)] dark:bg-[rgba(255,255,255,0.07)]"></div>
    <div class="w-px h-full bg-[rgba(44,44,44,.07)] dark:bg-[rgba(255,255,255,0.07)]"></div>
    <div class="w-px h-full bg-[rgba(44,44,44,.07)] dark:bg-[rgba(255,255,255,0.07)]"></div>
    <div class="w-px h-full bg-[rgba(44,44,44,.07)] dark:bg-[rgba(255,255,255,0.07)]"></div>
    <div class="w-px h-full bg-[rgba(44,44,44,.07)] dark:bg-[rgba(255,255,255,0.07)]"></div>
    <div class="w-px h-full bg-[rgba(44,44,44,.07)] dark:bg-[rgba(255,255,255,0.07)]"></div>
    <div class="w-px h-full bg-[rgba(44,44,44,.07)] dark:bg-[rgba(255,255,255,0.07)]"></div>
    <div class="w-px h-full bg-[rgba(44,44,44,.07)] dark:bg-[rgba(255,255,255,0.07)]"></div>
    <div class="w-px h-full bg-[rgba(44,44,44,.07)] dark:bg-[rgba(255,255,255,0.07)] md:hidden"></div>
    <div class="w-px h-full bg-[rgba(44,44,44,.07)] dark:bg-[rgba(255,255,255,0.07)] md:hidden"></div>
</div>`;
}, "/Users/bricechristian/Documents/GitHub/kingwood-builders/src/components/GridLines.astro");

const $$Astro$2 = createAstro("https://kingwoodbuilders.com");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${maybeRenderHead($$result)}<section id="contact" class="fixed inset-0 z-[999] flex items-center justify-center backdrop-blur-md invisible transition-smooth">
	<div class="overlay fixed inset-0"></div>
	<div class="container-1060 relative z-10 text-[clamp(20px,2.5vw,40px)] font-medium py-8 overflow-auto max-h-full md:text-20 sm:text-18 xs:text-16">
		<form id="contact-form" name="contact" netlify-honeypot="bot-field" netlify>
			<div class="form-body">
				<p class="hidden">
					<label>
						Don’t fill this out if you’re human: <input name="bot-field">
					</label>
				</p>
				<p class="inline-flex flex-wrap items-end gap-3 gap-x-1.5 [&_span]:inline-flex sm:gap-y-1.5">
					<span>Hey,</span> <span>my</span> <span>name</span> <span>is</span> <input type="text" name="name" class="form__input-line md_min:h-[clamp(30px,3.5vw,55px)] md_min:border-b-[clamp(1px,.25vw,4px)]" placeholder="Name" required> <span>and</span> <span>I'm</span> <span>looking</span> <span>for</span> <select name="reason" class="form__input-line md_min:h-[clamp(30px,3.5vw,55px)] md_min:border-b-[clamp(1px,.25vw,4px)]" required>
						<option value="New Home Build">New Home Build</option>
						<option value="Whole Home Renovation">Whole Home Renovation</option>
						<option value="Kitchen Renovation">Kitchen Renovation</option>
						<option value="Bathroom Renovation">Bathroom Renovation</option>
						<option value="Special Project">Special Project</option>
					</select> in <input type="text" name="location" class="form__input-line md_min:h-[clamp(30px,3.5vw,55px)] md_min:border-b-[clamp(1px,.25vw,4px)]" placeholder="Location" required> <span>. Ideally,</span> <span>I'd</span> <span>love</span> <span>to</span> <span>have</span> <span>the</span> <span>project</span> <span>start</span> <span>around</span> <input type="date" name="start_date" class="form__input-line md_min:h-[clamp(30px,3.5vw,55px)] md_min:border-b-[clamp(1px,.25vw,4px)]" placeholder="Start Date" required> <span>and</span> <span>end</span> <span>around</span> <input type="date" name="end_date" class="form__input-line md_min:h-[clamp(30px,3.5vw,55px)] md_min:border-b-[clamp(1px,.25vw,4px)]" placeholder="End Date" required> <span>. My</span> <span>current</span> <span>budget</span> <span>for</span> <span>the</span> <span>project</span> <span>is</span> <span>in</span> <span>the</span> <span>range</span> <span>of</span> <select name="budget" class="form__input-line md_min:h-[clamp(30px,3.5vw,55px)] md_min:border-b-[clamp(1px,.25vw,4px)]" required>
						<option value="$250K - $500K">$250K - $500K</option>
						<option value="$500K - $1M">$500K - $1M</option>
						<option value="$1M - $2M">$1M - $2M</option>
						<option value="$2M - $5M">$2M - $5M</option>
						<option value="$5M - $10M">$5M - $10M</option>
					</select> <span>. Feel</span> <span>free</span> <span>to</span> <span>reach</span> <span>out</span> <span>to</span> <span>me</span> <span>at</span> <input type="email" name="email" class="form__input-line md_min:h-[clamp(30px,3.5vw,55px)] md_min:border-b-[clamp(1px,.25vw,4px)]" placeholder="Email Address" required> or at <input type="tel" name="phone" class="form__input-line md_min:h-[clamp(30px,3.5vw,55px)] md_min:border-b-[clamp(1px,.25vw,4px)]" placeholder="Phone Number">.
					<button type="submit" class="button w-full mt-6 rounded-full">Send</button>
				</p>
			</div>
		</form>
	</div>
</section>`;
}, "/Users/bricechristian/Documents/GitHub/kingwood-builders/src/components/Contact.astro");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://kingwoodbuilders.com");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const global = await Is().fetch(`*[_type=='global'][0]`);
  const {
    title = global.site_title,
    description = global.site_description,
    image = global.site_image.asset,
    imageTitle = title,
    canonical = Astro2.url.href,
    noindex = false
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en">\n	<head>\n		<meta charset="utf-8">\n		', '\n		<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2c2c2c">\n		<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">\n		<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">\n		<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">\n		<link rel="icon" type="image/svg+xml" href="/favicon.svg">\n		<link rel="manifest" href="/site.webmanifest">\n		<meta name="msapplication-TileColor" content="#da532c">\n		<meta name="theme-color" content="#ffffff">\n\n		<link rel="icon" href="/favicon.ico" sizes="any">\n		<link rel="manifest" href="/manifest.webmanifest">\n		<link rel="sitemap" href="/sitemap-index.xml">\n		<meta name="viewport" content="width=device-width">\n		', `
		<link rel="prefetch" href="/" as="document">

		<!-- Google tag (gtag.js) -->
		<script type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=G-TMGCPLVT7W"><\/script>
		<script type="text/partytown">
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());

			gtag('config', 'G-TMGCPLVT7W');
		<\/script>

	`, "</head>\n	<body>\n		", "\n		<main>\n			", "\n			", "\n			", "\n		</main>\n		\n	</body>\n</html>"])), renderComponent($$result, "SEO", $$SEO, { "title": title, "titleTemplate": Astro2.url.pathname === "/" ? "" : `%s | ${global.site_title}`, "description": description, "canonical": canonical, "openGraph": {
    basic: {
      title: imageTitle,
      type: "image",
      image: urlForImage(image).width(1200).height(630).url()
    }
  }, "noindex": noindex, "nofollow": noindex }), renderComponent($$result, "HoverPrefetch", $$HoverPrefetch, { "max": 8 }), renderHead($$result), renderComponent($$result, "Header", $$Header, {}), renderComponent($$result, "GridLines", $$GridLines, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Contact", $$Contact, {}));
}, "/Users/bricechristian/Documents/GitHub/kingwood-builders/src/layouts/Layout.astro");

const $$Astro = createAstro("https://kingwoodbuilders.com");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  if (Astro2.url.pathname.includes("/admin")) {
    return Astro2.redirect("/admin");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead($$result2)}<section class="py-40">
		<div class="grid-layout text-center">
			<div class="grid-span-xl">
                <a href="/">Return Home</a>
            </div>
        </div>
    </section>
` })}`;
}, "/Users/bricechristian/Documents/GitHub/kingwood-builders/src/pages/404.astro");

const $$file = "/Users/bricechristian/Documents/GitHub/kingwood-builders/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
        __proto__: null,
        default: $$404,
        file: $$file,
        url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, Is as I, _404 as _, urlForImage as u };
