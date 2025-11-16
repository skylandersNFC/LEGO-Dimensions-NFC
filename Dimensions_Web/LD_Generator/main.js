import {
    $ as er,
    A as tt,
    Aa as ur,
    B as W,
    C as qt,
    Ca as lr,
    D as Gn,
    Da as ae,
    E as Wn,
    Ea as Me,
    F as Yn,
    Fa as dr,
    G as U,
    Ga as hr,
    H as Gt,
    Ha as pr,
    I as b,
    Ia as fr,
    J as C,
    Ka as gr,
    L as y,
    La as mr,
    N as Zn,
    O as E,
    P as S,
    Q as f,
    R as Qn,
    Ra as it,
    S as Kn,
    Sa as j,
    T as we,
    Ta as Y,
    U as L,
    Ua as ot,
    V as Xn,
    Va as vr,
    W as Jn,
    X as nt,
    Xa as Te,
    Y as Wt,
    Ya as yr,
    Z as Yt,
    Za as rn,
    _ as N,
    _a as on,
    a as l,
    aa as Zt,
    b as A,
    ba as Qt,
    c as zn,
    ca as tr,
    d as Hn,
    da as Kt,
    e as Fn,
    ea as nr,
    f as Ht,
    fa as rr,
    g as Ft,
    ga as Xt,
    h as G,
    hb as Sr,
    i as D,
    ia as ir,
    ib as Cr,
    j as F,
    ja as Jt,
    k as P,
    ka as or,
    l as h,
    la as be,
    lb as Rr,
    m as Ce,
    ma as en,
    mb as wr,
    n as Bn,
    na as tn,
    nb as br,
    o as Vn,
    p as m,
    pb as Ie,
    q as Bt,
    qa as rt,
    qb as Er,
    r as x,
    ra as Ee,
    rb as Mr,
    s as qn,
    sa as sr,
    sb as st,
    t as et,
    tb as sn,
    ub as Tr,
    v as X,
    va as ar,
    vb as Ir,
    w as ie,
    wa as cr,
    wb as Ar,
    x as Re,
    xa as nn,
    y as Vt,
    ya as se,
    z as oe
} from "./lib.js";
var ct = new E(""),
    dn = (() => {
        class t {
            _zone;
            _plugins;
            _eventNameToPlugin = new Map;
            constructor(e, n) {
                this._zone = n, e.forEach(i => {
                    i.manager = this
                }), this._plugins = e.slice().reverse()
            }
            addEventListener(e, n, i, o) {
                return this._findPluginFor(n).addEventListener(e, n, i, o)
            }
            getZone() {
                return this._zone
            }
            _findPluginFor(e) {
                let n = this._eventNameToPlugin.get(e);
                if (n) return n;
                if (n = this._plugins.find(o => o.supports(e)), !n) throw new C(5101, !1);
                return this._eventNameToPlugin.set(e, n), n
            }
            static \u0275fac = function(n) {
                return new(n || t)(S(ct), S(Me))
            };
            static \u0275prov = y({
                token: t,
                factory: t.\u0275fac
            })
        }
        return t
    })(),
    Ae = class {
        _doc;
        constructor(r) {
            this._doc = r
        }
        manager
    },
    an = "ng-app-id";

function _r(t) {
    for (let r of t) r.remove()
}

function Or(t, r) {
    let e = r.createElement("style");
    return e.textContent = t, e
}

function Di(t, r, e, n) {
    let i = t.head?.querySelectorAll(`style[${an}="${r}"],link[${an}="${r}"]`);
    if (i)
        for (let o of i) o.removeAttribute(an), o instanceof HTMLLinkElement ? n.set(o.href.slice(o.href.lastIndexOf("/") + 1), {
            usage: 0,
            elements: [o]
        }) : o.textContent && e.set(o.textContent, {
            usage: 0,
            elements: [o]
        })
}

function un(t, r) {
    let e = r.createElement("link");
    return e.setAttribute("rel", "stylesheet"), e.setAttribute("href", t), e
}
var hn = (() => {
        class t {
            doc;
            appId;
            nonce;
            inline = new Map;
            external = new Map;
            hosts = new Set;
            constructor(e, n, i, o = {}) {
                this.doc = e, this.appId = n, this.nonce = i, Di(e, n, this.inline, this.external), this.hosts.add(e.head)
            }
            addStyles(e, n) {
                for (let i of e) this.addUsage(i, this.inline, Or);
                n?.forEach(i => this.addUsage(i, this.external, un))
            }
            removeStyles(e, n) {
                for (let i of e) this.removeUsage(i, this.inline);
                n?.forEach(i => this.removeUsage(i, this.external))
            }
            addUsage(e, n, i) {
                let o = n.get(e);
                o ? o.usage++ : n.set(e, {
                    usage: 1,
                    elements: [...this.hosts].map(s => this.addElement(s, i(e, this.doc)))
                })
            }
            removeUsage(e, n) {
                let i = n.get(e);
                i && (i.usage--, i.usage <= 0 && (_r(i.elements), n.delete(e)))
            }
            ngOnDestroy() {
                for (let [, {
                        elements: e
                    }] of [...this.inline, ...this.external]) _r(e);
                this.hosts.clear()
            }
            addHost(e) {
                this.hosts.add(e);
                for (let [n, {
                        elements: i
                    }] of this.inline) i.push(this.addElement(e, Or(n, this.doc)));
                for (let [n, {
                        elements: i
                    }] of this.external) i.push(this.addElement(e, un(n, this.doc)))
            }
            removeHost(e) {
                this.hosts.delete(e)
            }
            addElement(e, n) {
                return this.nonce && n.setAttribute("nonce", this.nonce), e.appendChild(n)
            }
            static \u0275fac = function(n) {
                return new(n || t)(S(N), S(Jt), S(en, 8), S(be))
            };
            static \u0275prov = y({
                token: t,
                factory: t.\u0275fac
            })
        }
        return t
    })(),
    cn = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: "http://www.w3.org/1999/xhtml",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/",
        math: "http://www.w3.org/1998/Math/MathML"
    },
    pn = /%COMP%/g;
var Pr = "%COMP%",
    Pi = `_nghost-${Pr}`,
    xi = `_ngcontent-${Pr}`,
    Ni = !0,
    Ui = new E("", {
        providedIn: "root",
        factory: () => Ni
    });

function Li(t) {
    return xi.replace(pn, t)
}

function ki(t) {
    return Pi.replace(pn, t)
}

function xr(t, r) {
    return r.map(e => e.replace(pn, t))
}
var fn = (() => {
        class t {
            eventManager;
            sharedStylesHost;
            appId;
            removeStylesOnCompDestroy;
            doc;
            platformId;
            ngZone;
            nonce;
            tracingService;
            rendererByCompId = new Map;
            defaultRenderer;
            platformIsServer;
            constructor(e, n, i, o, s, a, c, u = null, d = null) {
                this.eventManager = e, this.sharedStylesHost = n, this.appId = i, this.removeStylesOnCompDestroy = o, this.doc = s, this.platformId = a, this.ngZone = c, this.nonce = u, this.tracingService = d, this.platformIsServer = !1, this.defaultRenderer = new _e(e, s, c, this.platformIsServer, this.tracingService)
            }
            createRenderer(e, n) {
                if (!e || !n) return this.defaultRenderer;
                let i = this.getOrCreateRenderer(e, n);
                return i instanceof at ? i.applyToHost(e) : i instanceof Oe && i.applyStyles(), i
            }
            getOrCreateRenderer(e, n) {
                let i = this.rendererByCompId,
                    o = i.get(n.id);
                if (!o) {
                    let s = this.doc,
                        a = this.ngZone,
                        c = this.eventManager,
                        u = this.sharedStylesHost,
                        d = this.removeStylesOnCompDestroy,
                        v = this.platformIsServer,
                        R = this.tracingService;
                    switch (n.encapsulation) {
                        case tn.Emulated:
                            o = new at(c, u, n, this.appId, d, s, a, v, R);
                            break;
                        case tn.ShadowDom:
                            return new ln(c, u, e, n, s, a, this.nonce, v, R);
                        default:
                            o = new Oe(c, u, n, d, s, a, v, R);
                            break
                    }
                    i.set(n.id, o)
                }
                return o
            }
            ngOnDestroy() {
                this.rendererByCompId.clear()
            }
            componentReplaced(e) {
                this.rendererByCompId.delete(e)
            }
            static \u0275fac = function(n) {
                return new(n || t)(S(dn), S(hn), S(Jt), S(Ui), S(N), S(be), S(Me), S(en), S(lr, 8))
            };
            static \u0275prov = y({
                token: t,
                factory: t.\u0275fac
            })
        }
        return t
    })(),
    _e = class {
        eventManager;
        doc;
        ngZone;
        platformIsServer;
        tracingService;
        data = Object.create(null);
        throwOnSyntheticProps = !0;
        constructor(r, e, n, i, o) {
            this.eventManager = r, this.doc = e, this.ngZone = n, this.platformIsServer = i, this.tracingService = o
        }
        destroy() {}
        destroyNode = null;
        createElement(r, e) {
            return e ? this.doc.createElementNS(cn[e] || e, r) : this.doc.createElement(r)
        }
        createComment(r) {
            return this.doc.createComment(r)
        }
        createText(r) {
            return this.doc.createTextNode(r)
        }
        appendChild(r, e) {
            (Dr(r) ? r.content : r).appendChild(e)
        }
        insertBefore(r, e, n) {
            r && (Dr(r) ? r.content : r).insertBefore(e, n)
        }
        removeChild(r, e) {
            e.remove()
        }
        selectRootElement(r, e) {
            let n = typeof r == "string" ? this.doc.querySelector(r) : r;
            if (!n) throw new C(-5104, !1);
            return e || (n.textContent = ""), n
        }
        parentNode(r) {
            return r.parentNode
        }
        nextSibling(r) {
            return r.nextSibling
        }
        setAttribute(r, e, n, i) {
            if (i) {
                e = i + ":" + e;
                let o = cn[i];
                o ? r.setAttributeNS(o, e, n) : r.setAttribute(e, n)
            } else r.setAttribute(e, n)
        }
        removeAttribute(r, e, n) {
            if (n) {
                let i = cn[n];
                i ? r.removeAttributeNS(i, e) : r.removeAttribute(`${n}:${e}`)
            } else r.removeAttribute(e)
        }
        addClass(r, e) {
            r.classList.add(e)
        }
        removeClass(r, e) {
            r.classList.remove(e)
        }
        setStyle(r, e, n, i) {
            i & (Ee.DashCase | Ee.Important) ? r.style.setProperty(e, n, i & Ee.Important ? "important" : "") : r.style[e] = n
        }
        removeStyle(r, e, n) {
            n & Ee.DashCase ? r.style.removeProperty(e) : r.style[e] = ""
        }
        setProperty(r, e, n) {
            r != null && (r[e] = n)
        }
        setValue(r, e) {
            r.nodeValue = e
        }
        listen(r, e, n, i) {
            if (typeof r == "string" && (r = Ie().getGlobalEventTarget(this.doc, r), !r)) throw new C(5102, !1);
            let o = this.decoratePreventDefault(n);
            return this.tracingService?.wrapEventListener && (o = this.tracingService.wrapEventListener(r, e, o)), this.eventManager.addEventListener(r, e, o, i)
        }
        decoratePreventDefault(r) {
            return e => {
                if (e === "__ngUnwrap__") return r;
                r(e) === !1 && e.preventDefault()
            }
        }
    };

function Dr(t) {
    return t.tagName === "TEMPLATE" && t.content !== void 0
}
var ln = class extends _e {
        sharedStylesHost;
        hostEl;
        shadowRoot;
        constructor(r, e, n, i, o, s, a, c, u) {
            super(r, o, s, c, u), this.sharedStylesHost = e, this.hostEl = n, this.shadowRoot = n.attachShadow({
                mode: "open"
            }), this.sharedStylesHost.addHost(this.shadowRoot);
            let d = i.styles;
            d = xr(i.id, d);
            for (let R of d) {
                let M = document.createElement("style");
                a && M.setAttribute("nonce", a), M.textContent = R, this.shadowRoot.appendChild(M)
            }
            let v = i.getExternalStyles?.();
            if (v)
                for (let R of v) {
                    let M = un(R, o);
                    a && M.setAttribute("nonce", a), this.shadowRoot.appendChild(M)
                }
        }
        nodeOrShadowRoot(r) {
            return r === this.hostEl ? this.shadowRoot : r
        }
        appendChild(r, e) {
            return super.appendChild(this.nodeOrShadowRoot(r), e)
        }
        insertBefore(r, e, n) {
            return super.insertBefore(this.nodeOrShadowRoot(r), e, n)
        }
        removeChild(r, e) {
            return super.removeChild(null, e)
        }
        parentNode(r) {
            return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r)))
        }
        destroy() {
            this.sharedStylesHost.removeHost(this.shadowRoot)
        }
    },
    Oe = class extends _e {
        sharedStylesHost;
        removeStylesOnCompDestroy;
        styles;
        styleUrls;
        constructor(r, e, n, i, o, s, a, c, u) {
            super(r, o, s, a, c), this.sharedStylesHost = e, this.removeStylesOnCompDestroy = i;
            let d = n.styles;
            this.styles = u ? xr(u, d) : d, this.styleUrls = n.getExternalStyles?.(u)
        }
        applyStyles() {
            this.sharedStylesHost.addStyles(this.styles, this.styleUrls)
        }
        destroy() {
            this.removeStylesOnCompDestroy && this.sharedStylesHost.removeStyles(this.styles, this.styleUrls)
        }
    },
    at = class extends Oe {
        contentAttr;
        hostAttr;
        constructor(r, e, n, i, o, s, a, c, u) {
            let d = i + "-" + n.id;
            super(r, e, n, o, s, a, c, u, d), this.contentAttr = Li(d), this.hostAttr = ki(d)
        }
        applyToHost(r) {
            this.applyStyles(), this.setAttribute(r, this.hostAttr, "")
        }
        createElement(r, e) {
            let n = super.createElement(r, e);
            return super.setAttribute(n, this.contentAttr, ""), n
        }
    };
var ut = class t extends Mr {
        supportsDOMEvents = !0;
        static makeCurrent() {
            Er(new t)
        }
        onAndCancel(r, e, n, i) {
            return r.addEventListener(e, n, i), () => {
                r.removeEventListener(e, n, i)
            }
        }
        dispatchEvent(r, e) {
            r.dispatchEvent(e)
        }
        remove(r) {
            r.remove()
        }
        createElement(r, e) {
            return e = e || this.getDefaultDocument(), e.createElement(r)
        }
        createHtmlDocument() {
            return document.implementation.createHTMLDocument("fakeTitle")
        }
        getDefaultDocument() {
            return document
        }
        isElementNode(r) {
            return r.nodeType === Node.ELEMENT_NODE
        }
        isShadowRoot(r) {
            return r instanceof DocumentFragment
        }
        getGlobalEventTarget(r, e) {
            return e === "window" ? window : e === "document" ? r : e === "body" ? r.body : null
        }
        getBaseHref(r) {
            let e = zi();
            return e == null ? null : Hi(e)
        }
        resetBaseElement() {
            Pe = null
        }
        getUserAgent() {
            return window.navigator.userAgent
        }
        getCookie(r) {
            return Tr(document.cookie, r)
        }
    },
    Pe = null;

function zi() {
    return Pe = Pe || document.head.querySelector("base"), Pe ? Pe.getAttribute("href") : null
}

function Hi(t) {
    return new URL(t, document.baseURI).pathname
}
var Fi = (() => {
        class t {
            build() {
                return new XMLHttpRequest
            }
            static \u0275fac = function(n) {
                return new(n || t)
            };
            static \u0275prov = y({
                token: t,
                factory: t.\u0275fac
            })
        }
        return t
    })(),
    Ur = (() => {
        class t extends Ae {
            constructor(e) {
                super(e)
            }
            supports(e) {
                return !0
            }
            addEventListener(e, n, i, o) {
                return e.addEventListener(n, i, o), () => this.removeEventListener(e, n, i, o)
            }
            removeEventListener(e, n, i, o) {
                return e.removeEventListener(n, i, o)
            }
            static \u0275fac = function(n) {
                return new(n || t)(S(N))
            };
            static \u0275prov = y({
                token: t,
                factory: t.\u0275fac
            })
        }
        return t
    })(),
    Nr = ["alt", "control", "meta", "shift"],
    Bi = {
        "\b": "Backspace",
        "	": "Tab",
        "\x7F": "Delete",
        "\x1B": "Escape",
        Del: "Delete",
        Esc: "Escape",
        Left: "ArrowLeft",
        Right: "ArrowRight",
        Up: "ArrowUp",
        Down: "ArrowDown",
        Menu: "ContextMenu",
        Scroll: "ScrollLock",
        Win: "OS"
    },
    Vi = {
        alt: t => t.altKey,
        control: t => t.ctrlKey,
        meta: t => t.metaKey,
        shift: t => t.shiftKey
    },
    Lr = (() => {
        class t extends Ae {
            constructor(e) {
                super(e)
            }
            supports(e) {
                return t.parseEventName(e) != null
            }
            addEventListener(e, n, i, o) {
                let s = t.parseEventName(n),
                    a = t.eventCallback(s.fullKey, i, this.manager.getZone());
                return this.manager.getZone().runOutsideAngular(() => Ie().onAndCancel(e, s.domEventName, a, o))
            }
            static parseEventName(e) {
                let n = e.toLowerCase().split("."),
                    i = n.shift();
                if (n.length === 0 || !(i === "keydown" || i === "keyup")) return null;
                let o = t._normalizeKey(n.pop()),
                    s = "",
                    a = n.indexOf("code");
                if (a > -1 && (n.splice(a, 1), s = "code."), Nr.forEach(u => {
                        let d = n.indexOf(u);
                        d > -1 && (n.splice(d, 1), s += u + ".")
                    }), s += o, n.length != 0 || o.length === 0) return null;
                let c = {};
                return c.domEventName = i, c.fullKey = s, c
            }
            static matchEventFullKeyCode(e, n) {
                let i = Bi[e.key] || e.key,
                    o = "";
                return n.indexOf("code.") > -1 && (i = e.code, o = "code."), i == null || !i ? !1 : (i = i.toLowerCase(), i === " " ? i = "space" : i === "." && (i = "dot"), Nr.forEach(s => {
                    if (s !== i) {
                        let a = Vi[s];
                        a(e) && (o += s + ".")
                    }
                }), o += i, o === n)
            }
            static eventCallback(e, n, i) {
                return o => {
                    t.matchEventFullKeyCode(o, e) && i.runGuarded(() => n(o))
                }
            }
            static _normalizeKey(e) {
                return e === "esc" ? "escape" : e
            }
            static \u0275fac = function(n) {
                return new(n || t)(S(N))
            };
            static \u0275prov = y({
                token: t,
                factory: t.\u0275fac
            })
        }
        return t
    })();

function gn(t, r) {
    let e = l({
        rootComponent: t
    }, qi(r));
    return br(e)
}

function qi(t) {
    return {
        appProviders: [...Qi, ...t?.providers ?? []],
        platformProviders: Zi
    }
}

function Gi() {
    ut.makeCurrent()
}

function Wi() {
    return new Zt
}

function Yi() {
    return ir(document), document
}
var Zi = [{
    provide: be,
    useValue: Ar
}, {
    provide: or,
    useValue: Gi,
    multi: !0
}, {
    provide: N,
    useFactory: Yi
}];
var Qi = [{
        provide: Kn,
        useValue: "root"
    }, {
        provide: Zt,
        useFactory: Wi
    }, {
        provide: ct,
        useClass: Ur,
        multi: !0,
        deps: [N]
    }, {
        provide: ct,
        useClass: Lr,
        multi: !0,
        deps: [N]
    }, fn, hn, dn, {
        provide: sr,
        useExisting: fn
    }, {
        provide: Ir,
        useClass: Fi
    },
    []
];
var kr = (() => {
    class t {
        _doc;
        constructor(e) {
            this._doc = e
        }
        getTitle() {
            return this._doc.title
        }
        setTitle(e) {
            this._doc.title = e || ""
        }
        static \u0275fac = function(n) {
            return new(n || t)(S(N))
        };
        static \u0275prov = y({
            token: t,
            factory: t.\u0275fac,
            providedIn: "root"
        })
    }
    return t
})();
var p = "primary",
    We = Symbol("RouteTitle"),
    Cn = class {
        params;
        constructor(r) {
            this.params = r || {}
        }
        has(r) {
            return Object.prototype.hasOwnProperty.call(this.params, r)
        }
        get(r) {
            if (this.has(r)) {
                let e = this.params[r];
                return Array.isArray(e) ? e[0] : e
            }
            return null
        }
        getAll(r) {
            if (this.has(r)) {
                let e = this.params[r];
                return Array.isArray(e) ? e : [e]
            }
            return []
        }
        get keys() {
            return Object.keys(this.params)
        }
    };

function te(t) {
    return new Cn(t)
}

function qr(t, r, e) {
    let n = e.path.split("/");
    if (n.length > t.length || e.pathMatch === "full" && (r.hasChildren() || n.length < t.length)) return null;
    let i = {};
    for (let o = 0; o < n.length; o++) {
        let s = n[o],
            a = t[o];
        if (s[0] === ":") i[s.substring(1)] = a;
        else if (s !== a.path) return null
    }
    return {
        consumed: t.slice(0, n.length),
        posParams: i
    }
}

function Xi(t, r) {
    if (t.length !== r.length) return !1;
    for (let e = 0; e < t.length; ++e)
        if (!$(t[e], r[e])) return !1;
    return !0
}

function $(t, r) {
    let e = t ? Rn(t) : void 0,
        n = r ? Rn(r) : void 0;
    if (!e || !n || e.length != n.length) return !1;
    let i;
    for (let o = 0; o < e.length; o++)
        if (i = e[o], !Gr(t[i], r[i])) return !1;
    return !0
}

function Rn(t) {
    return [...Object.keys(t), ...Object.getOwnPropertySymbols(t)]
}

function Gr(t, r) {
    if (Array.isArray(t) && Array.isArray(r)) {
        if (t.length !== r.length) return !1;
        let e = [...t].sort(),
            n = [...r].sort();
        return e.every((i, o) => n[o] === i)
    } else return t === r
}

function Wr(t) {
    return t.length > 0 ? t[t.length - 1] : null
}

function q(t) {
    return Bn(t) ? t : hr(t) ? P(Promise.resolve(t)) : h(t)
}
var Ji = {
        exact: Zr,
        subset: Qr
    },
    Yr = {
        exact: eo,
        subset: to,
        ignored: () => !0
    };

function jr(t, r, e) {
    return Ji[e.paths](t.root, r.root, e.matrixParams) && Yr[e.queryParams](t.queryParams, r.queryParams) && !(e.fragment === "exact" && t.fragment !== r.fragment)
}

function eo(t, r) {
    return $(t, r)
}

function Zr(t, r, e) {
    if (!J(t.segments, r.segments) || !ht(t.segments, r.segments, e) || t.numberOfChildren !== r.numberOfChildren) return !1;
    for (let n in r.children)
        if (!t.children[n] || !Zr(t.children[n], r.children[n], e)) return !1;
    return !0
}

function to(t, r) {
    return Object.keys(r).length <= Object.keys(t).length && Object.keys(r).every(e => Gr(t[e], r[e]))
}

function Qr(t, r, e) {
    return Kr(t, r, r.segments, e)
}

function Kr(t, r, e, n) {
    if (t.segments.length > e.length) {
        let i = t.segments.slice(0, e.length);
        return !(!J(i, e) || r.hasChildren() || !ht(i, e, n))
    } else if (t.segments.length === e.length) {
        if (!J(t.segments, e) || !ht(t.segments, e, n)) return !1;
        for (let i in r.children)
            if (!t.children[i] || !Qr(t.children[i], r.children[i], n)) return !1;
        return !0
    } else {
        let i = e.slice(0, t.segments.length),
            o = e.slice(t.segments.length);
        return !J(t.segments, i) || !ht(t.segments, i, n) || !t.children[p] ? !1 : Kr(t.children[p], r, o, n)
    }
}

function ht(t, r, e) {
    return r.every((n, i) => Yr[e](t[i].parameters, n.parameters))
}
var H = class {
        root;
        queryParams;
        fragment;
        _queryParamMap;
        constructor(r = new g([], {}), e = {}, n = null) {
            this.root = r, this.queryParams = e, this.fragment = n
        }
        get queryParamMap() {
            return this._queryParamMap ??= te(this.queryParams), this._queryParamMap
        }
        toString() {
            return io.serialize(this)
        }
    },
    g = class {
        segments;
        children;
        parent = null;
        constructor(r, e) {
            this.segments = r, this.children = e, Object.values(e).forEach(n => n.parent = this)
        }
        hasChildren() {
            return this.numberOfChildren > 0
        }
        get numberOfChildren() {
            return Object.keys(this.children).length
        }
        toString() {
            return pt(this)
        }
    },
    Z = class {
        path;
        parameters;
        _parameterMap;
        constructor(r, e) {
            this.path = r, this.parameters = e
        }
        get parameterMap() {
            return this._parameterMap ??= te(this.parameters), this._parameterMap
        }
        toString() {
            return Jr(this)
        }
    };

function no(t, r) {
    return J(t, r) && t.every((e, n) => $(e.parameters, r[n].parameters))
}

function J(t, r) {
    return t.length !== r.length ? !1 : t.every((e, n) => e.path === r[n].path)
}

function ro(t, r) {
    let e = [];
    return Object.entries(t.children).forEach(([n, i]) => {
        n === p && (e = e.concat(r(i, n)))
    }), Object.entries(t.children).forEach(([n, i]) => {
        n !== p && (e = e.concat(r(i, n)))
    }), e
}
var Ye = (() => {
        class t {
            static \u0275fac = function(n) {
                return new(n || t)
            };
            static \u0275prov = y({
                token: t,
                factory: () => new ne,
                providedIn: "root"
            })
        }
        return t
    })(),
    ne = class {
        parse(r) {
            let e = new bn(r);
            return new H(e.parseRootSegment(), e.parseQueryParams(), e.parseFragment())
        }
        serialize(r) {
            let e = `/${xe(r.root,!0)}`,
                n = ao(r.queryParams),
                i = typeof r.fragment == "string" ? `#${oo(r.fragment)}` : "";
            return `${e}${n}${i}`
        }
    },
    io = new ne;

function pt(t) {
    return t.segments.map(r => Jr(r)).join("/")
}

function xe(t, r) {
    if (!t.hasChildren()) return pt(t);
    if (r) {
        let e = t.children[p] ? xe(t.children[p], !1) : "",
            n = [];
        return Object.entries(t.children).forEach(([i, o]) => {
            i !== p && n.push(`${i}:${xe(o,!1)}`)
        }), n.length > 0 ? `${e}(${n.join("//")})` : e
    } else {
        let e = ro(t, (n, i) => i === p ? [xe(t.children[p], !1)] : [`${i}:${xe(n,!1)}`]);
        return Object.keys(t.children).length === 1 && t.children[p] != null ? `${pt(t)}/${e[0]}` : `${pt(t)}/(${e.join("//")})`
    }
}

function Xr(t) {
    return encodeURIComponent(t).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",")
}

function lt(t) {
    return Xr(t).replace(/%3B/gi, ";")
}

function oo(t) {
    return encodeURI(t)
}

function wn(t) {
    return Xr(t).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&")
}

function ft(t) {
    return decodeURIComponent(t)
}

function $r(t) {
    return ft(t.replace(/\+/g, "%20"))
}

function Jr(t) {
    return `${wn(t.path)}${so(t.parameters)}`
}

function so(t) {
    return Object.entries(t).map(([r, e]) => `;${wn(r)}=${wn(e)}`).join("")
}

function ao(t) {
    let r = Object.entries(t).map(([e, n]) => Array.isArray(n) ? n.map(i => `${lt(e)}=${lt(i)}`).join("&") : `${lt(e)}=${lt(n)}`).filter(e => e);
    return r.length ? `?${r.join("&")}` : ""
}
var co = /^[^\/()?;#]+/;

function mn(t) {
    let r = t.match(co);
    return r ? r[0] : ""
}
var uo = /^[^\/()?;=#]+/;

function lo(t) {
    let r = t.match(uo);
    return r ? r[0] : ""
}
var ho = /^[^=?&#]+/;

function po(t) {
    let r = t.match(ho);
    return r ? r[0] : ""
}
var fo = /^[^&#]+/;

function go(t) {
    let r = t.match(fo);
    return r ? r[0] : ""
}
var bn = class {
    url;
    remaining;
    constructor(r) {
        this.url = r, this.remaining = r
    }
    parseRootSegment() {
        return this.consumeOptional("/"), this.remaining === "" || this.peekStartsWith("?") || this.peekStartsWith("#") ? new g([], {}) : new g([], this.parseChildren())
    }
    parseQueryParams() {
        let r = {};
        if (this.consumeOptional("?"))
            do this.parseQueryParam(r); while (this.consumeOptional("&"));
        return r
    }
    parseFragment() {
        return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null
    }
    parseChildren() {
        if (this.remaining === "") return {};
        this.consumeOptional("/");
        let r = [];
        for (this.peekStartsWith("(") || r.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");) this.capture("/"), r.push(this.parseSegment());
        let e = {};
        this.peekStartsWith("/(") && (this.capture("/"), e = this.parseParens(!0));
        let n = {};
        return this.peekStartsWith("(") && (n = this.parseParens(!1)), (r.length > 0 || Object.keys(e).length > 0) && (n[p] = new g(r, e)), n
    }
    parseSegment() {
        let r = mn(this.remaining);
        if (r === "" && this.peekStartsWith(";")) throw new C(4009, !1);
        return this.capture(r), new Z(ft(r), this.parseMatrixParams())
    }
    parseMatrixParams() {
        let r = {};
        for (; this.consumeOptional(";");) this.parseParam(r);
        return r
    }
    parseParam(r) {
        let e = lo(this.remaining);
        if (!e) return;
        this.capture(e);
        let n = "";
        if (this.consumeOptional("=")) {
            let i = mn(this.remaining);
            i && (n = i, this.capture(n))
        }
        r[ft(e)] = ft(n)
    }
    parseQueryParam(r) {
        let e = po(this.remaining);
        if (!e) return;
        this.capture(e);
        let n = "";
        if (this.consumeOptional("=")) {
            let s = go(this.remaining);
            s && (n = s, this.capture(n))
        }
        let i = $r(e),
            o = $r(n);
        if (r.hasOwnProperty(i)) {
            let s = r[i];
            Array.isArray(s) || (s = [s], r[i] = s), s.push(o)
        } else r[i] = o
    }
    parseParens(r) {
        let e = {};
        for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) {
            let n = mn(this.remaining),
                i = this.remaining[n.length];
            if (i !== "/" && i !== ")" && i !== ";") throw new C(4010, !1);
            let o;
            n.indexOf(":") > -1 ? (o = n.slice(0, n.indexOf(":")), this.capture(o), this.capture(":")) : r && (o = p);
            let s = this.parseChildren();
            e[o] = Object.keys(s).length === 1 ? s[p] : new g([], s), this.consumeOptional("//")
        }
        return e
    }
    peekStartsWith(r) {
        return this.remaining.startsWith(r)
    }
    consumeOptional(r) {
        return this.peekStartsWith(r) ? (this.remaining = this.remaining.substring(r.length), !0) : !1
    }
    capture(r) {
        if (!this.consumeOptional(r)) throw new C(4011, !1)
    }
};

function ei(t) {
    return t.segments.length > 0 ? new g([], {
        [p]: t
    }) : t
}

function ti(t) {
    let r = {};
    for (let [n, i] of Object.entries(t.children)) {
        let o = ti(i);
        if (n === p && o.segments.length === 0 && o.hasChildren())
            for (let [s, a] of Object.entries(o.children)) r[s] = a;
        else(o.segments.length > 0 || o.hasChildren()) && (r[n] = o)
    }
    let e = new g(t.segments, r);
    return mo(e)
}

function mo(t) {
    if (t.numberOfChildren === 1 && t.children[p]) {
        let r = t.children[p];
        return new g(t.segments.concat(r.segments), r.children)
    }
    return t
}

function he(t) {
    return t instanceof H
}

function ni(t, r, e = null, n = null) {
    let i = ri(t);
    return ii(i, r, e, n)
}

function ri(t) {
    let r;

    function e(o) {
        let s = {};
        for (let c of o.children) {
            let u = e(c);
            s[c.outlet] = u
        }
        let a = new g(o.url, s);
        return o === t && (r = a), a
    }
    let n = e(t.root),
        i = ei(n);
    return r ?? i
}

function ii(t, r, e, n) {
    let i = t;
    for (; i.parent;) i = i.parent;
    if (r.length === 0) return vn(i, i, i, e, n);
    let o = vo(r);
    if (o.toRoot()) return vn(i, i, new g([], {}), e, n);
    let s = yo(o, i, t),
        a = s.processChildren ? Ue(s.segmentGroup, s.index, o.commands) : si(s.segmentGroup, s.index, o.commands);
    return vn(i, s.segmentGroup, a, e, n)
}

function gt(t) {
    return typeof t == "object" && t != null && !t.outlets && !t.segmentPath
}

function je(t) {
    return typeof t == "object" && t != null && t.outlets
}

function vn(t, r, e, n, i) {
    let o = {};
    n && Object.entries(n).forEach(([c, u]) => {
        o[c] = Array.isArray(u) ? u.map(d => `${d}`) : `${u}`
    });
    let s;
    t === r ? s = e : s = oi(t, r, e);
    let a = ei(ti(s));
    return new H(a, o, i)
}

function oi(t, r, e) {
    let n = {};
    return Object.entries(t.children).forEach(([i, o]) => {
        o === r ? n[i] = e : n[i] = oi(o, r, e)
    }), new g(t.segments, n)
}
var mt = class {
    isAbsolute;
    numberOfDoubleDots;
    commands;
    constructor(r, e, n) {
        if (this.isAbsolute = r, this.numberOfDoubleDots = e, this.commands = n, r && n.length > 0 && gt(n[0])) throw new C(4003, !1);
        let i = n.find(je);
        if (i && i !== Wr(n)) throw new C(4004, !1)
    }
    toRoot() {
        return this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/"
    }
};

function vo(t) {
    if (typeof t[0] == "string" && t.length === 1 && t[0] === "/") return new mt(!0, 0, t);
    let r = 0,
        e = !1,
        n = t.reduce((i, o, s) => {
            if (typeof o == "object" && o != null) {
                if (o.outlets) {
                    let a = {};
                    return Object.entries(o.outlets).forEach(([c, u]) => {
                        a[c] = typeof u == "string" ? u.split("/") : u
                    }), [...i, {
                        outlets: a
                    }]
                }
                if (o.segmentPath) return [...i, o.segmentPath]
            }
            return typeof o != "string" ? [...i, o] : s === 0 ? (o.split("/").forEach((a, c) => {
                c == 0 && a === "." || (c == 0 && a === "" ? e = !0 : a === ".." ? r++ : a != "" && i.push(a))
            }), i) : [...i, o]
        }, []);
    return new mt(e, r, n)
}
var le = class {
    segmentGroup;
    processChildren;
    index;
    constructor(r, e, n) {
        this.segmentGroup = r, this.processChildren = e, this.index = n
    }
};

function yo(t, r, e) {
    if (t.isAbsolute) return new le(r, !0, 0);
    if (!e) return new le(r, !1, NaN);
    if (e.parent === null) return new le(e, !0, 0);
    let n = gt(t.commands[0]) ? 0 : 1,
        i = e.segments.length - 1 + n;
    return So(e, i, t.numberOfDoubleDots)
}

function So(t, r, e) {
    let n = t,
        i = r,
        o = e;
    for (; o > i;) {
        if (o -= i, n = n.parent, !n) throw new C(4005, !1);
        i = n.segments.length
    }
    return new le(n, !1, i - o)
}

function Co(t) {
    return je(t[0]) ? t[0].outlets : {
        [p]: t
    }
}

function si(t, r, e) {
    if (t ??= new g([], {}), t.segments.length === 0 && t.hasChildren()) return Ue(t, r, e);
    let n = Ro(t, r, e),
        i = e.slice(n.commandIndex);
    if (n.match && n.pathIndex < t.segments.length) {
        let o = new g(t.segments.slice(0, n.pathIndex), {});
        return o.children[p] = new g(t.segments.slice(n.pathIndex), t.children), Ue(o, 0, i)
    } else return n.match && i.length === 0 ? new g(t.segments, {}) : n.match && !t.hasChildren() ? En(t, r, e) : n.match ? Ue(t, 0, i) : En(t, r, e)
}

function Ue(t, r, e) {
    if (e.length === 0) return new g(t.segments, {});
    {
        let n = Co(e),
            i = {};
        if (Object.keys(n).some(o => o !== p) && t.children[p] && t.numberOfChildren === 1 && t.children[p].segments.length === 0) {
            let o = Ue(t.children[p], r, e);
            return new g(t.segments, o.children)
        }
        return Object.entries(n).forEach(([o, s]) => {
            typeof s == "string" && (s = [s]), s !== null && (i[o] = si(t.children[o], r, s))
        }), Object.entries(t.children).forEach(([o, s]) => {
            n[o] === void 0 && (i[o] = s)
        }), new g(t.segments, i)
    }
}

function Ro(t, r, e) {
    let n = 0,
        i = r,
        o = {
            match: !1,
            pathIndex: 0,
            commandIndex: 0
        };
    for (; i < t.segments.length;) {
        if (n >= e.length) return o;
        let s = t.segments[i],
            a = e[n];
        if (je(a)) break;
        let c = `${a}`,
            u = n < e.length - 1 ? e[n + 1] : null;
        if (i > 0 && c === void 0) break;
        if (c && u && typeof u == "object" && u.outlets === void 0) {
            if (!Hr(c, u, s)) return o;
            n += 2
        } else {
            if (!Hr(c, {}, s)) return o;
            n++
        }
        i++
    }
    return {
        match: !0,
        pathIndex: i,
        commandIndex: n
    }
}

function En(t, r, e) {
    let n = t.segments.slice(0, r),
        i = 0;
    for (; i < e.length;) {
        let o = e[i];
        if (je(o)) {
            let c = wo(o.outlets);
            return new g(n, c)
        }
        if (i === 0 && gt(e[0])) {
            let c = t.segments[r];
            n.push(new Z(c.path, zr(e[0]))), i++;
            continue
        }
        let s = je(o) ? o.outlets[p] : `${o}`,
            a = i < e.length - 1 ? e[i + 1] : null;
        s && a && gt(a) ? (n.push(new Z(s, zr(a))), i += 2) : (n.push(new Z(s, {})), i++)
    }
    return new g(n, {})
}

function wo(t) {
    let r = {};
    return Object.entries(t).forEach(([e, n]) => {
        typeof n == "string" && (n = [n]), n !== null && (r[e] = En(new g([], {}), 0, n))
    }), r
}

function zr(t) {
    let r = {};
    return Object.entries(t).forEach(([e, n]) => r[e] = `${n}`), r
}

function Hr(t, r, e) {
    return t == e.path && $(r, e.parameters)
}
var Le = "imperative",
    w = function(t) {
        return t[t.NavigationStart = 0] = "NavigationStart", t[t.NavigationEnd = 1] = "NavigationEnd", t[t.NavigationCancel = 2] = "NavigationCancel", t[t.NavigationError = 3] = "NavigationError", t[t.RoutesRecognized = 4] = "RoutesRecognized", t[t.ResolveStart = 5] = "ResolveStart", t[t.ResolveEnd = 6] = "ResolveEnd", t[t.GuardsCheckStart = 7] = "GuardsCheckStart", t[t.GuardsCheckEnd = 8] = "GuardsCheckEnd", t[t.RouteConfigLoadStart = 9] = "RouteConfigLoadStart", t[t.RouteConfigLoadEnd = 10] = "RouteConfigLoadEnd", t[t.ChildActivationStart = 11] = "ChildActivationStart", t[t.ChildActivationEnd = 12] = "ChildActivationEnd", t[t.ActivationStart = 13] = "ActivationStart", t[t.ActivationEnd = 14] = "ActivationEnd", t[t.Scroll = 15] = "Scroll", t[t.NavigationSkipped = 16] = "NavigationSkipped", t
    }(w || {}),
    O = class {
        id;
        url;
        constructor(r, e) {
            this.id = r, this.url = e
        }
    },
    re = class extends O {
        type = w.NavigationStart;
        navigationTrigger;
        restoredState;
        constructor(r, e, n = "imperative", i = null) {
            super(r, e), this.navigationTrigger = n, this.restoredState = i
        }
        toString() {
            return `NavigationStart(id: ${this.id}, url: '${this.url}')`
        }
    },
    B = class extends O {
        urlAfterRedirects;
        type = w.NavigationEnd;
        constructor(r, e, n) {
            super(r, e), this.urlAfterRedirects = n
        }
        toString() {
            return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`
        }
    },
    T = function(t) {
        return t[t.Redirect = 0] = "Redirect", t[t.SupersededByNewNavigation = 1] = "SupersededByNewNavigation", t[t.NoDataFromResolver = 2] = "NoDataFromResolver", t[t.GuardRejected = 3] = "GuardRejected", t[t.Aborted = 4] = "Aborted", t
    }(T || {}),
    $e = function(t) {
        return t[t.IgnoredSameUrlNavigation = 0] = "IgnoredSameUrlNavigation", t[t.IgnoredByUrlHandlingStrategy = 1] = "IgnoredByUrlHandlingStrategy", t
    }($e || {}),
    z = class extends O {
        reason;
        code;
        type = w.NavigationCancel;
        constructor(r, e, n, i) {
            super(r, e), this.reason = n, this.code = i
        }
        toString() {
            return `NavigationCancel(id: ${this.id}, url: '${this.url}')`
        }
    },
    V = class extends O {
        reason;
        code;
        type = w.NavigationSkipped;
        constructor(r, e, n, i) {
            super(r, e), this.reason = n, this.code = i
        }
    },
    pe = class extends O {
        error;
        target;
        type = w.NavigationError;
        constructor(r, e, n, i) {
            super(r, e), this.error = n, this.target = i
        }
        toString() {
            return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`
        }
    },
    ze = class extends O {
        urlAfterRedirects;
        state;
        type = w.RoutesRecognized;
        constructor(r, e, n, i) {
            super(r, e), this.urlAfterRedirects = n, this.state = i
        }
        toString() {
            return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
        }
    },
    vt = class extends O {
        urlAfterRedirects;
        state;
        type = w.GuardsCheckStart;
        constructor(r, e, n, i) {
            super(r, e), this.urlAfterRedirects = n, this.state = i
        }
        toString() {
            return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
        }
    },
    yt = class extends O {
        urlAfterRedirects;
        state;
        shouldActivate;
        type = w.GuardsCheckEnd;
        constructor(r, e, n, i, o) {
            super(r, e), this.urlAfterRedirects = n, this.state = i, this.shouldActivate = o
        }
        toString() {
            return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`
        }
    },
    St = class extends O {
        urlAfterRedirects;
        state;
        type = w.ResolveStart;
        constructor(r, e, n, i) {
            super(r, e), this.urlAfterRedirects = n, this.state = i
        }
        toString() {
            return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
        }
    },
    Ct = class extends O {
        urlAfterRedirects;
        state;
        type = w.ResolveEnd;
        constructor(r, e, n, i) {
            super(r, e), this.urlAfterRedirects = n, this.state = i
        }
        toString() {
            return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
        }
    },
    Rt = class {
        route;
        type = w.RouteConfigLoadStart;
        constructor(r) {
            this.route = r
        }
        toString() {
            return `RouteConfigLoadStart(path: ${this.route.path})`
        }
    },
    wt = class {
        route;
        type = w.RouteConfigLoadEnd;
        constructor(r) {
            this.route = r
        }
        toString() {
            return `RouteConfigLoadEnd(path: ${this.route.path})`
        }
    },
    bt = class {
        snapshot;
        type = w.ChildActivationStart;
        constructor(r) {
            this.snapshot = r
        }
        toString() {
            return `ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
        }
    },
    Et = class {
        snapshot;
        type = w.ChildActivationEnd;
        constructor(r) {
            this.snapshot = r
        }
        toString() {
            return `ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
        }
    },
    Mt = class {
        snapshot;
        type = w.ActivationStart;
        constructor(r) {
            this.snapshot = r
        }
        toString() {
            return `ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
        }
    },
    Tt = class {
        snapshot;
        type = w.ActivationEnd;
        constructor(r) {
            this.snapshot = r
        }
        toString() {
            return `ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
        }
    };
var He = class {},
    fe = class {
        url;
        navigationBehaviorOptions;
        constructor(r, e) {
            this.url = r, this.navigationBehaviorOptions = e
        }
    };

function bo(t) {
    return !(t instanceof He) && !(t instanceof fe)
}

function Eo(t, r) {
    return t.providers && !t._injector && (t._injector = nn(t.providers, r, `Route: ${t.path}`)), t._injector ?? r
}

function k(t) {
    return t.outlet || p
}

function Mo(t, r) {
    let e = t.filter(n => k(n) === r);
    return e.push(...t.filter(n => k(n) !== r)), e
}

function ve(t) {
    if (!t) return null;
    if (t.routeConfig?._injector) return t.routeConfig._injector;
    for (let r = t.parent; r; r = r.parent) {
        let e = r.routeConfig;
        if (e?._loadedInjector) return e._loadedInjector;
        if (e?._injector) return e._injector
    }
    return null
}
var It = class {
        rootInjector;
        outlet = null;
        route = null;
        children;
        attachRef = null;
        get injector() {
            return ve(this.route?.snapshot) ?? this.rootInjector
        }
        constructor(r) {
            this.rootInjector = r, this.children = new ye(this.rootInjector)
        }
    },
    ye = (() => {
        class t {
            rootInjector;
            contexts = new Map;
            constructor(e) {
                this.rootInjector = e
            }
            onChildOutletCreated(e, n) {
                let i = this.getOrCreateContext(e);
                i.outlet = n, this.contexts.set(e, i)
            }
            onChildOutletDestroyed(e) {
                let n = this.getContext(e);
                n && (n.outlet = null, n.attachRef = null)
            }
            onOutletDeactivated() {
                let e = this.contexts;
                return this.contexts = new Map, e
            }
            onOutletReAttached(e) {
                this.contexts = e
            }
            getOrCreateContext(e) {
                let n = this.getContext(e);
                return n || (n = new It(this.rootInjector), this.contexts.set(e, n)), n
            }
            getContext(e) {
                return this.contexts.get(e) || null
            }
            static \u0275fac = function(n) {
                return new(n || t)(S(we))
            };
            static \u0275prov = y({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            })
        }
        return t
    })(),
    At = class {
        _root;
        constructor(r) {
            this._root = r
        }
        get root() {
            return this._root.value
        }
        parent(r) {
            let e = this.pathFromRoot(r);
            return e.length > 1 ? e[e.length - 2] : null
        }
        children(r) {
            let e = Mn(r, this._root);
            return e ? e.children.map(n => n.value) : []
        }
        firstChild(r) {
            let e = Mn(r, this._root);
            return e && e.children.length > 0 ? e.children[0].value : null
        }
        siblings(r) {
            let e = Tn(r, this._root);
            return e.length < 2 ? [] : e[e.length - 2].children.map(i => i.value).filter(i => i !== r)
        }
        pathFromRoot(r) {
            return Tn(r, this._root).map(e => e.value)
        }
    };

function Mn(t, r) {
    if (t === r.value) return r;
    for (let e of r.children) {
        let n = Mn(t, e);
        if (n) return n
    }
    return null
}

function Tn(t, r) {
    if (t === r.value) return [r];
    for (let e of r.children) {
        let n = Tn(t, e);
        if (n.length) return n.unshift(r), n
    }
    return []
}
var _ = class {
    value;
    children;
    constructor(r, e) {
        this.value = r, this.children = e
    }
    toString() {
        return `TreeNode(${this.value})`
    }
};

function ue(t) {
    let r = {};
    return t && t.children.forEach(e => r[e.value.outlet] = e), r
}
var Fe = class extends At {
    snapshot;
    constructor(r, e) {
        super(r), this.snapshot = e, Nn(this, r)
    }
    toString() {
        return this.snapshot.toString()
    }
};

function ai(t) {
    let r = To(t),
        e = new D([new Z("", {})]),
        n = new D({}),
        i = new D({}),
        o = new D({}),
        s = new D(""),
        a = new Q(e, n, o, s, i, p, t, r.root);
    return a.snapshot = r.root, new Fe(new _(a, []), r)
}

function To(t) {
    let r = {},
        e = {},
        n = {},
        i = "",
        o = new ee([], r, n, i, e, p, t, null, {});
    return new Be("", new _(o, []))
}
var Q = class {
    urlSubject;
    paramsSubject;
    queryParamsSubject;
    fragmentSubject;
    dataSubject;
    outlet;
    component;
    snapshot;
    _futureSnapshot;
    _routerState;
    _paramMap;
    _queryParamMap;
    title;
    url;
    params;
    queryParams;
    fragment;
    data;
    constructor(r, e, n, i, o, s, a, c) {
        this.urlSubject = r, this.paramsSubject = e, this.queryParamsSubject = n, this.fragmentSubject = i, this.dataSubject = o, this.outlet = s, this.component = a, this._futureSnapshot = c, this.title = this.dataSubject?.pipe(m(u => u[We])) ?? h(void 0), this.url = r, this.params = e, this.queryParams = n, this.fragment = i, this.data = o
    }
    get routeConfig() {
        return this._futureSnapshot.routeConfig
    }
    get root() {
        return this._routerState.root
    }
    get parent() {
        return this._routerState.parent(this)
    }
    get firstChild() {
        return this._routerState.firstChild(this)
    }
    get children() {
        return this._routerState.children(this)
    }
    get pathFromRoot() {
        return this._routerState.pathFromRoot(this)
    }
    get paramMap() {
        return this._paramMap ??= this.params.pipe(m(r => te(r))), this._paramMap
    }
    get queryParamMap() {
        return this._queryParamMap ??= this.queryParams.pipe(m(r => te(r))), this._queryParamMap
    }
    toString() {
        return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`
    }
};

function _t(t, r, e = "emptyOnly") {
    let n, {
        routeConfig: i
    } = t;
    return r !== null && (e === "always" || i?.path === "" || !r.component && !r.routeConfig?.loadComponent) ? n = {
        params: l(l({}, r.params), t.params),
        data: l(l({}, r.data), t.data),
        resolve: l(l(l(l({}, t.data), r.data), i?.data), t._resolvedData)
    } : n = {
        params: l({}, t.params),
        data: l({}, t.data),
        resolve: l(l({}, t.data), t._resolvedData ?? {})
    }, i && ui(i) && (n.resolve[We] = i.title), n
}
var ee = class {
        url;
        params;
        queryParams;
        fragment;
        data;
        outlet;
        component;
        routeConfig;
        _resolve;
        _resolvedData;
        _routerState;
        _paramMap;
        _queryParamMap;
        get title() {
            return this.data?.[We]
        }
        constructor(r, e, n, i, o, s, a, c, u) {
            this.url = r, this.params = e, this.queryParams = n, this.fragment = i, this.data = o, this.outlet = s, this.component = a, this.routeConfig = c, this._resolve = u
        }
        get root() {
            return this._routerState.root
        }
        get parent() {
            return this._routerState.parent(this)
        }
        get firstChild() {
            return this._routerState.firstChild(this)
        }
        get children() {
            return this._routerState.children(this)
        }
        get pathFromRoot() {
            return this._routerState.pathFromRoot(this)
        }
        get paramMap() {
            return this._paramMap ??= te(this.params), this._paramMap
        }
        get queryParamMap() {
            return this._queryParamMap ??= te(this.queryParams), this._queryParamMap
        }
        toString() {
            let r = this.url.map(n => n.toString()).join("/"),
                e = this.routeConfig ? this.routeConfig.path : "";
            return `Route(url:'${r}', path:'${e}')`
        }
    },
    Be = class extends At {
        url;
        constructor(r, e) {
            super(e), this.url = r, Nn(this, e)
        }
        toString() {
            return ci(this._root)
        }
    };

function Nn(t, r) {
    r.value._routerState = t, r.children.forEach(e => Nn(t, e))
}

function ci(t) {
    let r = t.children.length > 0 ? ` { ${t.children.map(ci).join(", ")} } ` : "";
    return `${t.value}${r}`
}

function yn(t) {
    if (t.snapshot) {
        let r = t.snapshot,
            e = t._futureSnapshot;
        t.snapshot = e, $(r.queryParams, e.queryParams) || t.queryParamsSubject.next(e.queryParams), r.fragment !== e.fragment && t.fragmentSubject.next(e.fragment), $(r.params, e.params) || t.paramsSubject.next(e.params), Xi(r.url, e.url) || t.urlSubject.next(e.url), $(r.data, e.data) || t.dataSubject.next(e.data)
    } else t.snapshot = t._futureSnapshot, t.dataSubject.next(t._futureSnapshot.data)
}

function In(t, r) {
    let e = $(t.params, r.params) && no(t.url, r.url),
        n = !t.parent != !r.parent;
    return e && !n && (!t.parent || In(t.parent, r.parent))
}

function ui(t) {
    return typeof t.title == "string" || t.title === null
}
var li = new E(""),
    Ze = (() => {
        class t {
            activated = null;
            get activatedComponentRef() {
                return this.activated
            }
            _activatedRoute = null;
            name = p;
            activateEvents = new ae;
            deactivateEvents = new ae;
            attachEvents = new ae;
            detachEvents = new ae;
            routerOutletData = Rr(void 0);
            parentContexts = f(ye);
            location = f(ar);
            changeDetector = f(wr);
            inputBinder = f(xt, {
                optional: !0
            });
            supportsBindingToComponentInputs = !0;
            ngOnChanges(e) {
                if (e.name) {
                    let {
                        firstChange: n,
                        previousValue: i
                    } = e.name;
                    if (n) return;
                    this.isTrackedInParentContexts(i) && (this.deactivate(), this.parentContexts.onChildOutletDestroyed(i)), this.initializeOutletWithName()
                }
            }
            ngOnDestroy() {
                this.isTrackedInParentContexts(this.name) && this.parentContexts.onChildOutletDestroyed(this.name), this.inputBinder?.unsubscribeFromRouteData(this)
            }
            isTrackedInParentContexts(e) {
                return this.parentContexts.getContext(e)?.outlet === this
            }
            ngOnInit() {
                this.initializeOutletWithName()
            }
            initializeOutletWithName() {
                if (this.parentContexts.onChildOutletCreated(this.name, this), this.activated) return;
                let e = this.parentContexts.getContext(this.name);
                e?.route && (e.attachRef ? this.attach(e.attachRef, e.route) : this.activateWith(e.route, e.injector))
            }
            get isActivated() {
                return !!this.activated
            }
            get component() {
                if (!this.activated) throw new C(4012, !1);
                return this.activated.instance
            }
            get activatedRoute() {
                if (!this.activated) throw new C(4012, !1);
                return this._activatedRoute
            }
            get activatedRouteData() {
                return this._activatedRoute ? this._activatedRoute.snapshot.data : {}
            }
            detach() {
                if (!this.activated) throw new C(4012, !1);
                this.location.detach();
                let e = this.activated;
                return this.activated = null, this._activatedRoute = null, this.detachEvents.emit(e.instance), e
            }
            attach(e, n) {
                this.activated = e, this._activatedRoute = n, this.location.insert(e.hostView), this.inputBinder?.bindActivatedRouteToOutletComponent(this), this.attachEvents.emit(e.instance)
            }
            deactivate() {
                if (this.activated) {
                    let e = this.component;
                    this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(e)
                }
            }
            activateWith(e, n) {
                if (this.isActivated) throw new C(4013, !1);
                this._activatedRoute = e;
                let i = this.location,
                    s = e.snapshot.component,
                    a = this.parentContexts.getOrCreateContext(this.name).children,
                    c = new An(e, a, i.injector, this.routerOutletData);
                this.activated = i.createComponent(s, {
                    index: i.length,
                    injector: c,
                    environmentInjector: n
                }), this.changeDetector.markForCheck(), this.inputBinder?.bindActivatedRouteToOutletComponent(this), this.activateEvents.emit(this.activated.instance)
            }
            static \u0275fac = function(n) {
                return new(n || t)
            };
            static \u0275dir = ur({
                type: t,
                selectors: [
                    ["router-outlet"]
                ],
                inputs: {
                    name: "name",
                    routerOutletData: [1, "routerOutletData"]
                },
                outputs: {
                    activateEvents: "activate",
                    deactivateEvents: "deactivate",
                    attachEvents: "attach",
                    detachEvents: "detach"
                },
                exportAs: ["outlet"],
                features: [rr]
            })
        }
        return t
    })(),
    An = class {
        route;
        childContexts;
        parent;
        outletData;
        constructor(r, e, n, i) {
            this.route = r, this.childContexts = e, this.parent = n, this.outletData = i
        }
        get(r, e) {
            return r === Q ? this.route : r === ye ? this.childContexts : r === li ? this.outletData : this.parent.get(r, e)
        }
    },
    xt = new E("");
var Un = (() => {
    class t {
        static \u0275fac = function(n) {
            return new(n || t)
        };
        static \u0275cmp = se({
            type: t,
            selectors: [
                ["ng-component"]
            ],
            exportAs: ["emptyRouterOutlet"],
            decls: 1,
            vars: 0,
            template: function(n, i) {
                n & 1 && it(0, "router-outlet")
            },
            dependencies: [Ze],
            encapsulation: 2
        })
    }
    return t
})();

function Ln(t) {
    let r = t.children && t.children.map(Ln),
        e = r ? A(l({}, t), {
            children: r
        }) : l({}, t);
    return !e.component && !e.loadComponent && (r || e.loadChildren) && e.outlet && e.outlet !== p && (e.component = Un), e
}

function Io(t, r, e) {
    let n = Ve(t, r._root, e ? e._root : void 0);
    return new Fe(n, r)
}

function Ve(t, r, e) {
    if (e && t.shouldReuseRoute(r.value, e.value.snapshot)) {
        let n = e.value;
        n._futureSnapshot = r.value;
        let i = Ao(t, r, e);
        return new _(n, i)
    } else {
        if (t.shouldAttach(r.value)) {
            let o = t.retrieve(r.value);
            if (o !== null) {
                let s = o.route;
                return s.value._futureSnapshot = r.value, s.children = r.children.map(a => Ve(t, a)), s
            }
        }
        let n = _o(r.value),
            i = r.children.map(o => Ve(t, o));
        return new _(n, i)
    }
}

function Ao(t, r, e) {
    return r.children.map(n => {
        for (let i of e.children)
            if (t.shouldReuseRoute(n.value, i.value.snapshot)) return Ve(t, n, i);
        return Ve(t, n)
    })
}

function _o(t) {
    return new Q(new D(t.url), new D(t.params), new D(t.queryParams), new D(t.fragment), new D(t.data), t.outlet, t.component, t)
}
var ge = class {
        redirectTo;
        navigationBehaviorOptions;
        constructor(r, e) {
            this.redirectTo = r, this.navigationBehaviorOptions = e
        }
    },
    di = "ngNavigationCancelingError";

function Ot(t, r) {
    let {
        redirectTo: e,
        navigationBehaviorOptions: n
    } = he(r) ? {
        redirectTo: r,
        navigationBehaviorOptions: void 0
    } : r, i = hi(!1, T.Redirect);
    return i.url = e, i.navigationBehaviorOptions = n, i
}

function hi(t, r) {
    let e = new Error(`NavigationCancelingError: ${t||""}`);
    return e[di] = !0, e.cancellationCode = r, e
}

function Oo(t) {
    return pi(t) && he(t.url)
}

function pi(t) {
    return !!t && t[di]
}
var Do = (t, r, e, n) => m(i => (new _n(r, i.targetRouterState, i.currentRouterState, e, n).activate(t), i)),
    _n = class {
        routeReuseStrategy;
        futureState;
        currState;
        forwardEvent;
        inputBindingEnabled;
        constructor(r, e, n, i, o) {
            this.routeReuseStrategy = r, this.futureState = e, this.currState = n, this.forwardEvent = i, this.inputBindingEnabled = o
        }
        activate(r) {
            let e = this.futureState._root,
                n = this.currState ? this.currState._root : null;
            this.deactivateChildRoutes(e, n, r), yn(this.futureState.root), this.activateChildRoutes(e, n, r)
        }
        deactivateChildRoutes(r, e, n) {
            let i = ue(e);
            r.children.forEach(o => {
                let s = o.value.outlet;
                this.deactivateRoutes(o, i[s], n), delete i[s]
            }), Object.values(i).forEach(o => {
                this.deactivateRouteAndItsChildren(o, n)
            })
        }
        deactivateRoutes(r, e, n) {
            let i = r.value,
                o = e ? e.value : null;
            if (i === o)
                if (i.component) {
                    let s = n.getContext(i.outlet);
                    s && this.deactivateChildRoutes(r, e, s.children)
                } else this.deactivateChildRoutes(r, e, n);
            else o && this.deactivateRouteAndItsChildren(e, n)
        }
        deactivateRouteAndItsChildren(r, e) {
            r.value.component && this.routeReuseStrategy.shouldDetach(r.value.snapshot) ? this.detachAndStoreRouteSubtree(r, e) : this.deactivateRouteAndOutlet(r, e)
        }
        detachAndStoreRouteSubtree(r, e) {
            let n = e.getContext(r.value.outlet),
                i = n && r.value.component ? n.children : e,
                o = ue(r);
            for (let s of Object.values(o)) this.deactivateRouteAndItsChildren(s, i);
            if (n && n.outlet) {
                let s = n.outlet.detach(),
                    a = n.children.onOutletDeactivated();
                this.routeReuseStrategy.store(r.value.snapshot, {
                    componentRef: s,
                    route: r,
                    contexts: a
                })
            }
        }
        deactivateRouteAndOutlet(r, e) {
            let n = e.getContext(r.value.outlet),
                i = n && r.value.component ? n.children : e,
                o = ue(r);
            for (let s of Object.values(o)) this.deactivateRouteAndItsChildren(s, i);
            n && (n.outlet && (n.outlet.deactivate(), n.children.onOutletDeactivated()), n.attachRef = null, n.route = null)
        }
        activateChildRoutes(r, e, n) {
            let i = ue(e);
            r.children.forEach(o => {
                this.activateRoutes(o, i[o.value.outlet], n), this.forwardEvent(new Tt(o.value.snapshot))
            }), r.children.length && this.forwardEvent(new Et(r.value.snapshot))
        }
        activateRoutes(r, e, n) {
            let i = r.value,
                o = e ? e.value : null;
            if (yn(i), i === o)
                if (i.component) {
                    let s = n.getOrCreateContext(i.outlet);
                    this.activateChildRoutes(r, e, s.children)
                } else this.activateChildRoutes(r, e, n);
            else if (i.component) {
                let s = n.getOrCreateContext(i.outlet);
                if (this.routeReuseStrategy.shouldAttach(i.snapshot)) {
                    let a = this.routeReuseStrategy.retrieve(i.snapshot);
                    this.routeReuseStrategy.store(i.snapshot, null), s.children.onOutletReAttached(a.contexts), s.attachRef = a.componentRef, s.route = a.route.value, s.outlet && s.outlet.attach(a.componentRef, a.route.value), yn(a.route.value), this.activateChildRoutes(r, null, s.children)
                } else s.attachRef = null, s.route = i, s.outlet && s.outlet.activateWith(i, s.injector), this.activateChildRoutes(r, null, s.children)
            } else this.activateChildRoutes(r, null, n)
        }
    },
    Dt = class {
        path;
        route;
        constructor(r) {
            this.path = r, this.route = this.path[this.path.length - 1]
        }
    },
    de = class {
        component;
        route;
        constructor(r, e) {
            this.component = r, this.route = e
        }
    };

function Po(t, r, e) {
    let n = t._root,
        i = r ? r._root : null;
    return Ne(n, i, e, [n.value])
}

function xo(t) {
    let r = t.routeConfig ? t.routeConfig.canActivateChild : null;
    return !r || r.length === 0 ? null : {
        node: t,
        guards: r
    }
}

function Se(t, r) {
    let e = Symbol(),
        n = r.get(t, e);
    return n === e ? typeof t == "function" && !Zn(t) ? t : r.get(t) : n
}

function Ne(t, r, e, n, i = {
    canDeactivateChecks: [],
    canActivateChecks: []
}) {
    let o = ue(r);
    return t.children.forEach(s => {
        No(s, o[s.value.outlet], e, n.concat([s.value]), i), delete o[s.value.outlet]
    }), Object.entries(o).forEach(([s, a]) => ke(a, e.getContext(s), i)), i
}

function No(t, r, e, n, i = {
    canDeactivateChecks: [],
    canActivateChecks: []
}) {
    let o = t.value,
        s = r ? r.value : null,
        a = e ? e.getContext(t.value.outlet) : null;
    if (s && o.routeConfig === s.routeConfig) {
        let c = Uo(s, o, o.routeConfig.runGuardsAndResolvers);
        c ? i.canActivateChecks.push(new Dt(n)) : (o.data = s.data, o._resolvedData = s._resolvedData), o.component ? Ne(t, r, a ? a.children : null, n, i) : Ne(t, r, e, n, i), c && a && a.outlet && a.outlet.isActivated && i.canDeactivateChecks.push(new de(a.outlet.component, s))
    } else s && ke(r, a, i), i.canActivateChecks.push(new Dt(n)), o.component ? Ne(t, null, a ? a.children : null, n, i) : Ne(t, null, e, n, i);
    return i
}

function Uo(t, r, e) {
    if (typeof e == "function") return e(t, r);
    switch (e) {
        case "pathParamsChange":
            return !J(t.url, r.url);
        case "pathParamsOrQueryParamsChange":
            return !J(t.url, r.url) || !$(t.queryParams, r.queryParams);
        case "always":
            return !0;
        case "paramsOrQueryParamsChange":
            return !In(t, r) || !$(t.queryParams, r.queryParams);
        case "paramsChange":
        default:
            return !In(t, r)
    }
}

function ke(t, r, e) {
    let n = ue(t),
        i = t.value;
    Object.entries(n).forEach(([o, s]) => {
        i.component ? r ? ke(s, r.children.getContext(o), e) : ke(s, null, e) : ke(s, r, e)
    }), i.component ? r && r.outlet && r.outlet.isActivated ? e.canDeactivateChecks.push(new de(r.outlet.component, i)) : e.canDeactivateChecks.push(new de(null, i)) : e.canDeactivateChecks.push(new de(null, i))
}

function Qe(t) {
    return typeof t == "function"
}

function Lo(t) {
    return typeof t == "boolean"
}

function ko(t) {
    return t && Qe(t.canLoad)
}

function jo(t) {
    return t && Qe(t.canActivate)
}

function $o(t) {
    return t && Qe(t.canActivateChild)
}

function zo(t) {
    return t && Qe(t.canDeactivate)
}

function Ho(t) {
    return t && Qe(t.canMatch)
}

function fi(t) {
    return t instanceof Vn || t?.name === "EmptyError"
}
var dt = Symbol("INITIAL_VALUE");

function me() {
    return U(t => Bt(t.map(r => r.pipe(oe(1), Yn(dt)))).pipe(m(r => {
        for (let e of r)
            if (e !== !0) {
                if (e === dt) return dt;
                if (e === !1 || Fo(e)) return e
            } return !0
    }), X(r => r !== dt), oe(1)))
}

function Fo(t) {
    return he(t) || t instanceof ge
}

function Bo(t, r) {
    return x(e => {
        let {
            targetSnapshot: n,
            currentSnapshot: i,
            guards: {
                canActivateChecks: o,
                canDeactivateChecks: s
            }
        } = e;
        return s.length === 0 && o.length === 0 ? h(A(l({}, e), {
            guardsResult: !0
        })) : Vo(s, n, i, t).pipe(x(a => a && Lo(a) ? qo(n, o, t, r) : h(a)), m(a => A(l({}, e), {
            guardsResult: a
        })))
    })
}

function Vo(t, r, e, n) {
    return P(t).pipe(x(i => Qo(i.component, i.route, e, r, n)), W(i => i !== !0, !0))
}

function qo(t, r, e, n) {
    return P(r).pipe(Re(i => qn(Wo(i.route.parent, n), Go(i.route, n), Zo(t, i.path, e), Yo(t, i.route, e))), W(i => i !== !0, !0))
}

function Go(t, r) {
    return t !== null && r && r(new Mt(t)), h(!0)
}

function Wo(t, r) {
    return t !== null && r && r(new bt(t)), h(!0)
}

function Yo(t, r, e) {
    let n = r.routeConfig ? r.routeConfig.canActivate : null;
    if (!n || n.length === 0) return h(!0);
    let i = n.map(o => et(() => {
        let s = ve(r) ?? e,
            a = Se(o, s),
            c = jo(a) ? a.canActivate(r, t) : L(s, () => a(r, t));
        return q(c).pipe(W())
    }));
    return h(i).pipe(me())
}

function Zo(t, r, e) {
    let n = r[r.length - 1],
        o = r.slice(0, r.length - 1).reverse().map(s => xo(s)).filter(s => s !== null).map(s => et(() => {
            let a = s.guards.map(c => {
                let u = ve(s.node) ?? e,
                    d = Se(c, u),
                    v = $o(d) ? d.canActivateChild(n, t) : L(u, () => d(n, t));
                return q(v).pipe(W())
            });
            return h(a).pipe(me())
        }));
    return h(o).pipe(me())
}

function Qo(t, r, e, n, i) {
    let o = r && r.routeConfig ? r.routeConfig.canDeactivate : null;
    if (!o || o.length === 0) return h(!0);
    let s = o.map(a => {
        let c = ve(r) ?? i,
            u = Se(a, c),
            d = zo(u) ? u.canDeactivate(t, r, e, n) : L(c, () => u(t, r, e, n));
        return q(d).pipe(W())
    });
    return h(s).pipe(me())
}

function Ko(t, r, e, n) {
    let i = r.canLoad;
    if (i === void 0 || i.length === 0) return h(!0);
    let o = i.map(s => {
        let a = Se(s, t),
            c = ko(a) ? a.canLoad(r, e) : L(t, () => a(r, e));
        return q(c)
    });
    return h(o).pipe(me(), gi(n))
}

function gi(t) {
    return Hn(b(r => {
        if (typeof r != "boolean") throw Ot(t, r)
    }), m(r => r === !0))
}

function Xo(t, r, e, n) {
    let i = r.canMatch;
    if (!i || i.length === 0) return h(!0);
    let o = i.map(s => {
        let a = Se(s, t),
            c = Ho(a) ? a.canMatch(r, e) : L(t, () => a(r, e));
        return q(c)
    });
    return h(o).pipe(me(), gi(n))
}
var qe = class {
        segmentGroup;
        constructor(r) {
            this.segmentGroup = r || null
        }
    },
    Ge = class extends Error {
        urlTree;
        constructor(r) {
            super(), this.urlTree = r
        }
    };

function ce(t) {
    return Ce(new qe(t))
}

function Jo(t) {
    return Ce(new C(4e3, !1))
}

function es(t) {
    return Ce(hi(!1, T.GuardRejected))
}
var On = class {
    urlSerializer;
    urlTree;
    constructor(r, e) {
        this.urlSerializer = r, this.urlTree = e
    }
    lineralizeSegments(r, e) {
        let n = [],
            i = e.root;
        for (;;) {
            if (n = n.concat(i.segments), i.numberOfChildren === 0) return h(n);
            if (i.numberOfChildren > 1 || !i.children[p]) return Jo(`${r.redirectTo}`);
            i = i.children[p]
        }
    }
    applyRedirectCommands(r, e, n, i, o) {
        return ts(e, i, o).pipe(m(s => {
            if (s instanceof H) throw new Ge(s);
            let a = this.applyRedirectCreateUrlTree(s, this.urlSerializer.parse(s), r, n);
            if (s[0] === "/") throw new Ge(a);
            return a
        }))
    }
    applyRedirectCreateUrlTree(r, e, n, i) {
        let o = this.createSegmentGroup(r, e.root, n, i);
        return new H(o, this.createQueryParams(e.queryParams, this.urlTree.queryParams), e.fragment)
    }
    createQueryParams(r, e) {
        let n = {};
        return Object.entries(r).forEach(([i, o]) => {
            if (typeof o == "string" && o[0] === ":") {
                let a = o.substring(1);
                n[i] = e[a]
            } else n[i] = o
        }), n
    }
    createSegmentGroup(r, e, n, i) {
        let o = this.createSegments(r, e.segments, n, i),
            s = {};
        return Object.entries(e.children).forEach(([a, c]) => {
            s[a] = this.createSegmentGroup(r, c, n, i)
        }), new g(o, s)
    }
    createSegments(r, e, n, i) {
        return e.map(o => o.path[0] === ":" ? this.findPosParam(r, o, i) : this.findOrReturn(o, n))
    }
    findPosParam(r, e, n) {
        let i = n[e.path.substring(1)];
        if (!i) throw new C(4001, !1);
        return i
    }
    findOrReturn(r, e) {
        let n = 0;
        for (let i of e) {
            if (i.path === r.path) return e.splice(n), i;
            n++
        }
        return r
    }
};

function ts(t, r, e) {
    if (typeof t == "string") return h(t);
    let n = t,
        {
            queryParams: i,
            fragment: o,
            routeConfig: s,
            url: a,
            outlet: c,
            params: u,
            data: d,
            title: v
        } = r;
    return q(L(e, () => n({
        params: u,
        data: d,
        queryParams: i,
        fragment: o,
        routeConfig: s,
        url: a,
        outlet: c,
        title: v
    })))
}
var Dn = {
    matched: !1,
    consumedSegments: [],
    remainingSegments: [],
    parameters: {},
    positionalParamSegments: {}
};

function ns(t, r, e, n, i) {
    let o = mi(t, r, e);
    return o.matched ? (n = Eo(r, n), Xo(n, r, e, i).pipe(m(s => s === !0 ? o : l({}, Dn)))) : h(o)
}

function mi(t, r, e) {
    if (r.path === "**") return rs(e);
    if (r.path === "") return r.pathMatch === "full" && (t.hasChildren() || e.length > 0) ? l({}, Dn) : {
        matched: !0,
        consumedSegments: [],
        remainingSegments: e,
        parameters: {},
        positionalParamSegments: {}
    };
    let i = (r.matcher || qr)(e, t, r);
    if (!i) return l({}, Dn);
    let o = {};
    Object.entries(i.posParams ?? {}).forEach(([a, c]) => {
        o[a] = c.path
    });
    let s = i.consumed.length > 0 ? l(l({}, o), i.consumed[i.consumed.length - 1].parameters) : o;
    return {
        matched: !0,
        consumedSegments: i.consumed,
        remainingSegments: e.slice(i.consumed.length),
        parameters: s,
        positionalParamSegments: i.posParams ?? {}
    }
}

function rs(t) {
    return {
        matched: !0,
        parameters: t.length > 0 ? Wr(t).parameters : {},
        consumedSegments: t,
        remainingSegments: [],
        positionalParamSegments: {}
    }
}

function Fr(t, r, e, n) {
    return e.length > 0 && ss(t, e, n) ? {
        segmentGroup: new g(r, os(n, new g(e, t.children))),
        slicedSegments: []
    } : e.length === 0 && as(t, e, n) ? {
        segmentGroup: new g(t.segments, is(t, e, n, t.children)),
        slicedSegments: e
    } : {
        segmentGroup: new g(t.segments, t.children),
        slicedSegments: e
    }
}

function is(t, r, e, n) {
    let i = {};
    for (let o of e)
        if (Nt(t, r, o) && !n[k(o)]) {
            let s = new g([], {});
            i[k(o)] = s
        } return l(l({}, n), i)
}

function os(t, r) {
    let e = {};
    e[p] = r;
    for (let n of t)
        if (n.path === "" && k(n) !== p) {
            let i = new g([], {});
            e[k(n)] = i
        } return e
}

function ss(t, r, e) {
    return e.some(n => Nt(t, r, n) && k(n) !== p)
}

function as(t, r, e) {
    return e.some(n => Nt(t, r, n))
}

function Nt(t, r, e) {
    return (t.hasChildren() || r.length > 0) && e.pathMatch === "full" ? !1 : e.path === ""
}

function cs(t, r, e) {
    return r.length === 0 && !t.children[e]
}
var Pn = class {};

function us(t, r, e, n, i, o, s = "emptyOnly") {
    return new xn(t, r, e, n, i, s, o).recognize()
}
var ls = 31,
    xn = class {
        injector;
        configLoader;
        rootComponentType;
        config;
        urlTree;
        paramsInheritanceStrategy;
        urlSerializer;
        applyRedirects;
        absoluteRedirectCount = 0;
        allowRedirects = !0;
        constructor(r, e, n, i, o, s, a) {
            this.injector = r, this.configLoader = e, this.rootComponentType = n, this.config = i, this.urlTree = o, this.paramsInheritanceStrategy = s, this.urlSerializer = a, this.applyRedirects = new On(this.urlSerializer, this.urlTree)
        }
        noMatchError(r) {
            return new C(4002, `'${r.segmentGroup}'`)
        }
        recognize() {
            let r = Fr(this.urlTree.root, [], [], this.config).segmentGroup;
            return this.match(r).pipe(m(({
                children: e,
                rootSnapshot: n
            }) => {
                let i = new _(n, e),
                    o = new Be("", i),
                    s = ni(n, [], this.urlTree.queryParams, this.urlTree.fragment);
                return s.queryParams = this.urlTree.queryParams, o.url = this.urlSerializer.serialize(s), {
                    state: o,
                    tree: s
                }
            }))
        }
        match(r) {
            let e = new ee([], Object.freeze({}), Object.freeze(l({}, this.urlTree.queryParams)), this.urlTree.fragment, Object.freeze({}), p, this.rootComponentType, null, {});
            return this.processSegmentGroup(this.injector, this.config, r, p, e).pipe(m(n => ({
                children: n,
                rootSnapshot: e
            })), ie(n => {
                if (n instanceof Ge) return this.urlTree = n.urlTree, this.match(n.urlTree.root);
                throw n instanceof qe ? this.noMatchError(n) : n
            }))
        }
        processSegmentGroup(r, e, n, i, o) {
            return n.segments.length === 0 && n.hasChildren() ? this.processChildren(r, e, n, o) : this.processSegment(r, e, n, n.segments, i, !0, o).pipe(m(s => s instanceof _ ? [s] : []))
        }
        processChildren(r, e, n, i) {
            let o = [];
            for (let s of Object.keys(n.children)) s === "primary" ? o.unshift(s) : o.push(s);
            return P(o).pipe(Re(s => {
                let a = n.children[s],
                    c = Mo(e, s);
                return this.processSegmentGroup(r, c, a, s, i)
            }), Wn((s, a) => (s.push(...a), s)), Vt(null), Gn(), x(s => {
                if (s === null) return ce(n);
                let a = vi(s);
                return ds(a), h(a)
            }))
        }
        processSegment(r, e, n, i, o, s, a) {
            return P(e).pipe(Re(c => this.processSegmentAgainstRoute(c._injector ?? r, e, c, n, i, o, s, a).pipe(ie(u => {
                if (u instanceof qe) return h(null);
                throw u
            }))), W(c => !!c), ie(c => {
                if (fi(c)) return cs(n, i, o) ? h(new Pn) : ce(n);
                throw c
            }))
        }
        processSegmentAgainstRoute(r, e, n, i, o, s, a, c) {
            return k(n) !== s && (s === p || !Nt(i, o, n)) ? ce(i) : n.redirectTo === void 0 ? this.matchSegmentAgainstRoute(r, i, n, o, s, c) : this.allowRedirects && a ? this.expandSegmentAgainstRouteUsingRedirect(r, i, e, n, o, s, c) : ce(i)
        }
        expandSegmentAgainstRouteUsingRedirect(r, e, n, i, o, s, a) {
            let {
                matched: c,
                parameters: u,
                consumedSegments: d,
                positionalParamSegments: v,
                remainingSegments: R
            } = mi(e, i, o);
            if (!c) return ce(e);
            typeof i.redirectTo == "string" && i.redirectTo[0] === "/" && (this.absoluteRedirectCount++, this.absoluteRedirectCount > ls && (this.allowRedirects = !1));
            let M = new ee(o, u, Object.freeze(l({}, this.urlTree.queryParams)), this.urlTree.fragment, Br(i), k(i), i.component ?? i._loadedComponent ?? null, i, Vr(i)),
                I = _t(M, a, this.paramsInheritanceStrategy);
            return M.params = Object.freeze(I.params), M.data = Object.freeze(I.data), this.applyRedirects.applyRedirectCommands(d, i.redirectTo, v, M, r).pipe(U(K => this.applyRedirects.lineralizeSegments(i, K)), x(K => this.processSegment(r, n, e, K.concat(R), s, !1, a)))
        }
        matchSegmentAgainstRoute(r, e, n, i, o, s) {
            let a = ns(e, n, i, r, this.urlSerializer);
            return n.path === "**" && (e.children = {}), a.pipe(U(c => c.matched ? (r = n._injector ?? r, this.getChildConfig(r, n, i).pipe(U(({
                routes: u
            }) => {
                let d = n._loadedInjector ?? r,
                    {
                        parameters: v,
                        consumedSegments: R,
                        remainingSegments: M
                    } = c,
                    I = new ee(R, v, Object.freeze(l({}, this.urlTree.queryParams)), this.urlTree.fragment, Br(n), k(n), n.component ?? n._loadedComponent ?? null, n, Vr(n)),
                    $t = _t(I, s, this.paramsInheritanceStrategy);
                I.params = Object.freeze($t.params), I.data = Object.freeze($t.data);
                let {
                    segmentGroup: K,
                    slicedSegments: zt
                } = Fr(e, R, M, u);
                if (zt.length === 0 && K.hasChildren()) return this.processChildren(d, u, K, I).pipe(m(Je => new _(I, Je)));
                if (u.length === 0 && zt.length === 0) return h(new _(I, []));
                let Oi = k(n) === o;
                return this.processSegment(d, u, K, zt, Oi ? p : o, !0, I).pipe(m(Je => new _(I, Je instanceof _ ? [Je] : [])))
            }))) : ce(e)))
        }
        getChildConfig(r, e, n) {
            return e.children ? h({
                routes: e.children,
                injector: r
            }) : e.loadChildren ? e._loadedRoutes !== void 0 ? h({
                routes: e._loadedRoutes,
                injector: e._loadedInjector
            }) : Ko(r, e, n, this.urlSerializer).pipe(x(i => i ? this.configLoader.loadChildren(r, e).pipe(b(o => {
                e._loadedRoutes = o.routes, e._loadedInjector = o.injector
            })) : es(e))) : h({
                routes: [],
                injector: r
            })
        }
    };

function ds(t) {
    t.sort((r, e) => r.value.outlet === p ? -1 : e.value.outlet === p ? 1 : r.value.outlet.localeCompare(e.value.outlet))
}

function hs(t) {
    let r = t.value.routeConfig;
    return r && r.path === ""
}

function vi(t) {
    let r = [],
        e = new Set;
    for (let n of t) {
        if (!hs(n)) {
            r.push(n);
            continue
        }
        let i = r.find(o => n.value.routeConfig === o.value.routeConfig);
        i !== void 0 ? (i.children.push(...n.children), e.add(i)) : r.push(n)
    }
    for (let n of e) {
        let i = vi(n.children);
        r.push(new _(n.value, i))
    }
    return r.filter(n => !e.has(n))
}

function Br(t) {
    return t.data || {}
}

function Vr(t) {
    return t.resolve || {}
}

function ps(t, r, e, n, i, o) {
    return x(s => us(t, r, e, n, s.extractedUrl, i, o).pipe(m(({
        state: a,
        tree: c
    }) => A(l({}, s), {
        targetSnapshot: a,
        urlAfterRedirects: c
    }))))
}

function fs(t, r) {
    return x(e => {
        let {
            targetSnapshot: n,
            guards: {
                canActivateChecks: i
            }
        } = e;
        if (!i.length) return h(e);
        let o = new Set(i.map(c => c.route)),
            s = new Set;
        for (let c of o)
            if (!s.has(c))
                for (let u of yi(c)) s.add(u);
        let a = 0;
        return P(s).pipe(Re(c => o.has(c) ? gs(c, n, t, r) : (c.data = _t(c, c.parent, t).resolve, h(void 0))), b(() => a++), qt(1), x(c => a === s.size ? h(e) : F))
    })
}

function yi(t) {
    let r = t.children.map(e => yi(e)).flat();
    return [t, ...r]
}

function gs(t, r, e, n) {
    let i = t.routeConfig,
        o = t._resolve;
    return i?.title !== void 0 && !ui(i) && (o[We] = i.title), et(() => (t.data = _t(t, t.parent, e).resolve, ms(o, t, r, n).pipe(m(s => (t._resolvedData = s, t.data = l(l({}, t.data), s), null)))))
}

function ms(t, r, e, n) {
    let i = Rn(t);
    if (i.length === 0) return h({});
    let o = {};
    return P(i).pipe(x(s => vs(t[s], r, e, n).pipe(W(), b(a => {
        if (a instanceof ge) throw Ot(new ne, a);
        o[s] = a
    }))), qt(1), m(() => o), ie(s => fi(s) ? F : Ce(s)))
}

function vs(t, r, e, n) {
    let i = ve(r) ?? n,
        o = Se(t, i),
        s = o.resolve ? o.resolve(r, e) : L(i, () => o(r, e));
    return q(s)
}

function Sn(t) {
    return U(r => {
        let e = t(r);
        return e ? P(e).pipe(m(() => r)) : h(r)
    })
}
var kn = (() => {
        class t {
            buildTitle(e) {
                let n, i = e.root;
                for (; i !== void 0;) n = this.getResolvedTitleForRoute(i) ?? n, i = i.children.find(o => o.outlet === p);
                return n
            }
            getResolvedTitleForRoute(e) {
                return e.data[We]
            }
            static \u0275fac = function(n) {
                return new(n || t)
            };
            static \u0275prov = y({
                token: t,
                factory: () => f(Si),
                providedIn: "root"
            })
        }
        return t
    })(),
    Si = (() => {
        class t extends kn {
            title;
            constructor(e) {
                super(), this.title = e
            }
            updateTitle(e) {
                let n = this.buildTitle(e);
                n !== void 0 && this.title.setTitle(n)
            }
            static \u0275fac = function(n) {
                return new(n || t)(S(kr))
            };
            static \u0275prov = y({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            })
        }
        return t
    })(),
    Ke = new E("", {
        providedIn: "root",
        factory: () => ({})
    }),
    Xe = new E(""),
    Ci = (() => {
        class t {
            componentLoaders = new WeakMap;
            childrenLoaders = new WeakMap;
            onLoadStartListener;
            onLoadEndListener;
            compiler = f(Sr);
            loadComponent(e, n) {
                if (this.componentLoaders.get(n)) return this.componentLoaders.get(n);
                if (n._loadedComponent) return h(n._loadedComponent);
                this.onLoadStartListener && this.onLoadStartListener(n);
                let i = q(L(e, () => n.loadComponent())).pipe(m(wi), b(s => {
                        this.onLoadEndListener && this.onLoadEndListener(n), n._loadedComponent = s
                    }), tt(() => {
                        this.componentLoaders.delete(n)
                    })),
                    o = new Ft(i, () => new G).pipe(Ht());
                return this.componentLoaders.set(n, o), o
            }
            loadChildren(e, n) {
                if (this.childrenLoaders.get(n)) return this.childrenLoaders.get(n);
                if (n._loadedRoutes) return h({
                    routes: n._loadedRoutes,
                    injector: n._loadedInjector
                });
                this.onLoadStartListener && this.onLoadStartListener(n);
                let o = Ri(n, this.compiler, e, this.onLoadEndListener).pipe(tt(() => {
                        this.childrenLoaders.delete(n)
                    })),
                    s = new Ft(o, () => new G).pipe(Ht());
                return this.childrenLoaders.set(n, s), s
            }
            static \u0275fac = function(n) {
                return new(n || t)
            };
            static \u0275prov = y({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            })
        }
        return t
    })();

function Ri(t, r, e, n) {
    return q(L(e, () => t.loadChildren())).pipe(m(wi), x(i => i instanceof cr || Array.isArray(i) ? h(i) : P(r.compileModuleAsync(i))), m(i => {
        n && n(t);
        let o, s, a = !1;
        return Array.isArray(i) ? (s = i, a = !0) : (o = i.create(e).injector, s = o.get(Xe, [], {
            optional: !0,
            self: !0
        }).flat()), {
            routes: s.map(Ln),
            injector: o
        }
    }))
}

function ys(t) {
    return t && typeof t == "object" && "default" in t
}

function wi(t) {
    return ys(t) ? t.default : t
}
var Ut = (() => {
        class t {
            static \u0275fac = function(n) {
                return new(n || t)
            };
            static \u0275prov = y({
                token: t,
                factory: () => f(Ss),
                providedIn: "root"
            })
        }
        return t
    })(),
    Ss = (() => {
        class t {
            shouldProcessUrl(e) {
                return !0
            }
            extract(e) {
                return e
            }
            merge(e, n) {
                return e
            }
            static \u0275fac = function(n) {
                return new(n || t)
            };
            static \u0275prov = y({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            })
        }
        return t
    })(),
    bi = new E("");
var Ei = new E(""),
    Mi = (() => {
        class t {
            currentNavigation = null;
            currentTransition = null;
            lastSuccessfulNavigation = null;
            events = new G;
            transitionAbortWithErrorSubject = new G;
            configLoader = f(Ci);
            environmentInjector = f(we);
            destroyRef = f(er);
            urlSerializer = f(Ye);
            rootContexts = f(ye);
            location = f(st);
            inputBindingEnabled = f(xt, {
                optional: !0
            }) !== null;
            titleStrategy = f(kn);
            options = f(Ke, {
                optional: !0
            }) || {};
            paramsInheritanceStrategy = this.options.paramsInheritanceStrategy || "emptyOnly";
            urlHandlingStrategy = f(Ut);
            createViewTransition = f(bi, {
                optional: !0
            });
            navigationErrorHandler = f(Ei, {
                optional: !0
            });
            navigationId = 0;
            get hasRequestedNavigation() {
                return this.navigationId !== 0
            }
            transitions;
            afterPreactivation = () => h(void 0);
            rootComponentType = null;
            destroyed = !1;
            constructor() {
                let e = i => this.events.next(new Rt(i)),
                    n = i => this.events.next(new wt(i));
                this.configLoader.onLoadEndListener = n, this.configLoader.onLoadStartListener = e, this.destroyRef.onDestroy(() => {
                    this.destroyed = !0
                })
            }
            complete() {
                this.transitions?.complete()
            }
            handleNavigationRequest(e) {
                let n = ++this.navigationId;
                this.transitions?.next(A(l({}, e), {
                    extractedUrl: this.urlHandlingStrategy.extract(e.rawUrl),
                    targetSnapshot: null,
                    targetRouterState: null,
                    guards: {
                        canActivateChecks: [],
                        canDeactivateChecks: []
                    },
                    guardsResult: null,
                    abortController: new AbortController,
                    id: n
                }))
            }
            setupNavigations(e) {
                return this.transitions = new D(null), this.transitions.pipe(X(n => n !== null), U(n => {
                    let i = !1;
                    return h(n).pipe(U(o => {
                        if (this.navigationId > n.id) return this.cancelNavigationTransition(n, "", T.SupersededByNewNavigation), F;
                        this.currentTransition = n, this.currentNavigation = {
                            id: o.id,
                            initialUrl: o.rawUrl,
                            extractedUrl: o.extractedUrl,
                            targetBrowserUrl: typeof o.extras.browserUrl == "string" ? this.urlSerializer.parse(o.extras.browserUrl) : o.extras.browserUrl,
                            trigger: o.source,
                            extras: o.extras,
                            previousNavigation: this.lastSuccessfulNavigation ? A(l({}, this.lastSuccessfulNavigation), {
                                previousNavigation: null
                            }) : null,
                            abort: () => o.abortController.abort()
                        };
                        let s = !e.navigated || this.isUpdatingInternalState() || this.isUpdatedBrowserUrl(),
                            a = o.extras.onSameUrlNavigation ?? e.onSameUrlNavigation;
                        if (!s && a !== "reload") {
                            let c = "";
                            return this.events.next(new V(o.id, this.urlSerializer.serialize(o.rawUrl), c, $e.IgnoredSameUrlNavigation)), o.resolve(!1), F
                        }
                        if (this.urlHandlingStrategy.shouldProcessUrl(o.rawUrl)) return h(o).pipe(U(c => (this.events.next(new re(c.id, this.urlSerializer.serialize(c.extractedUrl), c.source, c.restoredState)), c.id !== this.navigationId ? F : Promise.resolve(c))), ps(this.environmentInjector, this.configLoader, this.rootComponentType, e.config, this.urlSerializer, this.paramsInheritanceStrategy), b(c => {
                            n.targetSnapshot = c.targetSnapshot, n.urlAfterRedirects = c.urlAfterRedirects, this.currentNavigation = A(l({}, this.currentNavigation), {
                                finalUrl: c.urlAfterRedirects
                            });
                            let u = new ze(c.id, this.urlSerializer.serialize(c.extractedUrl), this.urlSerializer.serialize(c.urlAfterRedirects), c.targetSnapshot);
                            this.events.next(u)
                        }));
                        if (s && this.urlHandlingStrategy.shouldProcessUrl(o.currentRawUrl)) {
                            let {
                                id: c,
                                extractedUrl: u,
                                source: d,
                                restoredState: v,
                                extras: R
                            } = o, M = new re(c, this.urlSerializer.serialize(u), d, v);
                            this.events.next(M);
                            let I = ai(this.rootComponentType).snapshot;
                            return this.currentTransition = n = A(l({}, o), {
                                targetSnapshot: I,
                                urlAfterRedirects: u,
                                extras: A(l({}, R), {
                                    skipLocationChange: !1,
                                    replaceUrl: !1
                                })
                            }), this.currentNavigation.finalUrl = u, h(n)
                        } else {
                            let c = "";
                            return this.events.next(new V(o.id, this.urlSerializer.serialize(o.extractedUrl), c, $e.IgnoredByUrlHandlingStrategy)), o.resolve(!1), F
                        }
                    }), b(o => {
                        let s = new vt(o.id, this.urlSerializer.serialize(o.extractedUrl), this.urlSerializer.serialize(o.urlAfterRedirects), o.targetSnapshot);
                        this.events.next(s)
                    }), m(o => (this.currentTransition = n = A(l({}, o), {
                        guards: Po(o.targetSnapshot, o.currentSnapshot, this.rootContexts)
                    }), n)), Bo(this.environmentInjector, o => this.events.next(o)), b(o => {
                        if (n.guardsResult = o.guardsResult, o.guardsResult && typeof o.guardsResult != "boolean") throw Ot(this.urlSerializer, o.guardsResult);
                        let s = new yt(o.id, this.urlSerializer.serialize(o.extractedUrl), this.urlSerializer.serialize(o.urlAfterRedirects), o.targetSnapshot, !!o.guardsResult);
                        this.events.next(s)
                    }), X(o => o.guardsResult ? !0 : (this.cancelNavigationTransition(o, "", T.GuardRejected), !1)), Sn(o => {
                        if (o.guards.canActivateChecks.length !== 0) return h(o).pipe(b(s => {
                            let a = new St(s.id, this.urlSerializer.serialize(s.extractedUrl), this.urlSerializer.serialize(s.urlAfterRedirects), s.targetSnapshot);
                            this.events.next(a)
                        }), U(s => {
                            let a = !1;
                            return h(s).pipe(fs(this.paramsInheritanceStrategy, this.environmentInjector), b({
                                next: () => a = !0,
                                complete: () => {
                                    a || this.cancelNavigationTransition(s, "", T.NoDataFromResolver)
                                }
                            }))
                        }), b(s => {
                            let a = new Ct(s.id, this.urlSerializer.serialize(s.extractedUrl), this.urlSerializer.serialize(s.urlAfterRedirects), s.targetSnapshot);
                            this.events.next(a)
                        }))
                    }), Sn(o => {
                        let s = a => {
                            let c = [];
                            if (a.routeConfig?.loadComponent && !a.routeConfig._loadedComponent) {
                                let u = ve(a) ?? this.environmentInjector;
                                c.push(this.configLoader.loadComponent(u, a.routeConfig).pipe(b(d => {
                                    a.component = d
                                }), m(() => {})))
                            }
                            for (let u of a.children) c.push(...s(u));
                            return c
                        };
                        return Bt(s(o.targetSnapshot.root)).pipe(Vt(null), oe(1))
                    }), Sn(() => this.afterPreactivation()), U(() => {
                        let {
                            currentSnapshot: o,
                            targetSnapshot: s
                        } = n, a = this.createViewTransition?.(this.environmentInjector, o.root, s.root);
                        return a ? P(a).pipe(m(() => n)) : h(n)
                    }), m(o => {
                        let s = Io(e.routeReuseStrategy, o.targetSnapshot, o.currentRouterState);
                        return this.currentTransition = n = A(l({}, o), {
                            targetRouterState: s
                        }), this.currentNavigation.targetRouterState = s, n
                    }), b(() => {
                        this.events.next(new He)
                    }), Do(this.rootContexts, e.routeReuseStrategy, o => this.events.next(o), this.inputBindingEnabled), oe(1), Gt(new Fn(o => {
                        let s = n.abortController.signal,
                            a = () => o.next();
                        return s.addEventListener("abort", a), () => s.removeEventListener("abort", a)
                    }).pipe(X(() => !i && !n.targetRouterState), b(() => {
                        this.cancelNavigationTransition(n, n.abortController.signal.reason + "", T.Aborted)
                    }))), b({
                        next: o => {
                            i = !0, this.lastSuccessfulNavigation = this.currentNavigation, this.events.next(new B(o.id, this.urlSerializer.serialize(o.extractedUrl), this.urlSerializer.serialize(o.urlAfterRedirects))), this.titleStrategy?.updateTitle(o.targetRouterState.snapshot), o.resolve(!0)
                        },
                        complete: () => {
                            i = !0
                        }
                    }), Gt(this.transitionAbortWithErrorSubject.pipe(b(o => {
                        throw o
                    }))), tt(() => {
                        i || this.cancelNavigationTransition(n, "", T.SupersededByNewNavigation), this.currentTransition?.id === n.id && (this.currentNavigation = null, this.currentTransition = null)
                    }), ie(o => {
                        if (this.destroyed) return n.resolve(!1), F;
                        if (i = !0, pi(o)) this.events.next(new z(n.id, this.urlSerializer.serialize(n.extractedUrl), o.message, o.cancellationCode)), Oo(o) ? this.events.next(new fe(o.url, o.navigationBehaviorOptions)) : n.resolve(!1);
                        else {
                            let s = new pe(n.id, this.urlSerializer.serialize(n.extractedUrl), o, n.targetSnapshot ?? void 0);
                            try {
                                let a = L(this.environmentInjector, () => this.navigationErrorHandler?.(s));
                                if (a instanceof ge) {
                                    let {
                                        message: c,
                                        cancellationCode: u
                                    } = Ot(this.urlSerializer, a);
                                    this.events.next(new z(n.id, this.urlSerializer.serialize(n.extractedUrl), c, u)), this.events.next(new fe(a.redirectTo, a.navigationBehaviorOptions))
                                } else throw this.events.next(s), o
                            } catch (a) {
                                this.options.resolveNavigationPromiseOnError ? n.resolve(!1) : n.reject(a)
                            }
                        }
                        return F
                    }))
                }))
            }
            cancelNavigationTransition(e, n, i) {
                let o = new z(e.id, this.urlSerializer.serialize(e.extractedUrl), n, i);
                this.events.next(o), e.resolve(!1)
            }
            isUpdatingInternalState() {
                return this.currentTransition?.extractedUrl.toString() !== this.currentTransition?.currentUrlTree.toString()
            }
            isUpdatedBrowserUrl() {
                let e = this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),
                    n = this.currentNavigation?.targetBrowserUrl ?? this.currentNavigation?.extractedUrl;
                return e.toString() !== n?.toString() && !this.currentNavigation?.extras.skipLocationChange
            }
            static \u0275fac = function(n) {
                return new(n || t)
            };
            static \u0275prov = y({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            })
        }
        return t
    })();

function Cs(t) {
    return t !== Le
}
var Ti = (() => {
        class t {
            static \u0275fac = function(n) {
                return new(n || t)
            };
            static \u0275prov = y({
                token: t,
                factory: () => f(Rs),
                providedIn: "root"
            })
        }
        return t
    })(),
    Pt = class {
        shouldDetach(r) {
            return !1
        }
        store(r, e) {}
        shouldAttach(r) {
            return !1
        }
        retrieve(r) {
            return null
        }
        shouldReuseRoute(r, e) {
            return r.routeConfig === e.routeConfig
        }
    },
    Rs = (() => {
        class t extends Pt {
            static \u0275fac = (() => {
                let e;
                return function(i) {
                    return (e || (e = Xt(t)))(i || t)
                }
            })();
            static \u0275prov = y({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            })
        }
        return t
    })(),
    Ii = (() => {
        class t {
            urlSerializer = f(Ye);
            options = f(Ke, {
                optional: !0
            }) || {};
            canceledNavigationResolution = this.options.canceledNavigationResolution || "replace";
            location = f(st);
            urlHandlingStrategy = f(Ut);
            urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
            currentUrlTree = new H;
            getCurrentUrlTree() {
                return this.currentUrlTree
            }
            rawUrlTree = this.currentUrlTree;
            getRawUrlTree() {
                return this.rawUrlTree
            }
            createBrowserPath({
                finalUrl: e,
                initialUrl: n,
                targetBrowserUrl: i
            }) {
                let o = e !== void 0 ? this.urlHandlingStrategy.merge(e, n) : n,
                    s = i ?? o;
                return s instanceof H ? this.urlSerializer.serialize(s) : s
            }
            commitTransition({
                targetRouterState: e,
                finalUrl: n,
                initialUrl: i
            }) {
                n && e ? (this.currentUrlTree = n, this.rawUrlTree = this.urlHandlingStrategy.merge(n, i), this.routerState = e) : this.rawUrlTree = i
            }
            routerState = ai(null);
            getRouterState() {
                return this.routerState
            }
            stateMemento = this.createStateMemento();
            updateStateMemento() {
                this.stateMemento = this.createStateMemento()
            }
            createStateMemento() {
                return {
                    rawUrlTree: this.rawUrlTree,
                    currentUrlTree: this.currentUrlTree,
                    routerState: this.routerState
                }
            }
            resetInternalState({
                finalUrl: e
            }) {
                this.routerState = this.stateMemento.routerState, this.currentUrlTree = this.stateMemento.currentUrlTree, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, e ?? this.rawUrlTree)
            }
            static \u0275fac = function(n) {
                return new(n || t)
            };
            static \u0275prov = y({
                token: t,
                factory: () => f(ws),
                providedIn: "root"
            })
        }
        return t
    })(),
    ws = (() => {
        class t extends Ii {
            currentPageId = 0;
            lastSuccessfulId = -1;
            restoredState() {
                return this.location.getState()
            }
            get browserPageId() {
                return this.canceledNavigationResolution !== "computed" ? this.currentPageId : this.restoredState()?.\u0275routerPageId ?? this.currentPageId
            }
            registerNonRouterCurrentEntryChangeListener(e) {
                return this.location.subscribe(n => {
                    n.type === "popstate" && setTimeout(() => {
                        e(n.url, n.state, "popstate")
                    })
                })
            }
            handleRouterEvent(e, n) {
                e instanceof re ? this.updateStateMemento() : e instanceof V ? this.commitTransition(n) : e instanceof ze ? this.urlUpdateStrategy === "eager" && (n.extras.skipLocationChange || this.setBrowserUrl(this.createBrowserPath(n), n)) : e instanceof He ? (this.commitTransition(n), this.urlUpdateStrategy === "deferred" && !n.extras.skipLocationChange && this.setBrowserUrl(this.createBrowserPath(n), n)) : e instanceof z && e.code !== T.SupersededByNewNavigation && e.code !== T.Redirect ? this.restoreHistory(n) : e instanceof pe ? this.restoreHistory(n, !0) : e instanceof B && (this.lastSuccessfulId = e.id, this.currentPageId = this.browserPageId)
            }
            setBrowserUrl(e, {
                extras: n,
                id: i
            }) {
                let {
                    replaceUrl: o,
                    state: s
                } = n;
                if (this.location.isCurrentPathEqualTo(e) || o) {
                    let a = this.browserPageId,
                        c = l(l({}, s), this.generateNgRouterState(i, a));
                    this.location.replaceState(e, "", c)
                } else {
                    let a = l(l({}, s), this.generateNgRouterState(i, this.browserPageId + 1));
                    this.location.go(e, "", a)
                }
            }
            restoreHistory(e, n = !1) {
                if (this.canceledNavigationResolution === "computed") {
                    let i = this.browserPageId,
                        o = this.currentPageId - i;
                    o !== 0 ? this.location.historyGo(o) : this.getCurrentUrlTree() === e.finalUrl && o === 0 && (this.resetInternalState(e), this.resetUrlToCurrentUrlTree())
                } else this.canceledNavigationResolution === "replace" && (n && this.resetInternalState(e), this.resetUrlToCurrentUrlTree())
            }
            resetUrlToCurrentUrlTree() {
                this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()), "", this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId))
            }
            generateNgRouterState(e, n) {
                return this.canceledNavigationResolution === "computed" ? {
                    navigationId: e,
                    \u0275routerPageId: n
                } : {
                    navigationId: e
                }
            }
            static \u0275fac = (() => {
                let e;
                return function(i) {
                    return (e || (e = Xt(t)))(i || t)
                }
            })();
            static \u0275prov = y({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            })
        }
        return t
    })();

function jn(t, r) {
    t.events.pipe(X(e => e instanceof B || e instanceof z || e instanceof pe || e instanceof V), m(e => e instanceof B || e instanceof V ? 0 : (e instanceof z ? e.code === T.Redirect || e.code === T.SupersededByNewNavigation : !1) ? 2 : 1), X(e => e !== 2), oe(1)).subscribe(() => {
        r()
    })
}
var bs = {
        paths: "exact",
        fragment: "ignored",
        matrixParams: "ignored",
        queryParams: "exact"
    },
    Es = {
        paths: "subset",
        fragment: "ignored",
        matrixParams: "ignored",
        queryParams: "subset"
    },
    Lt = (() => {
        class t {
            get currentUrlTree() {
                return this.stateManager.getCurrentUrlTree()
            }
            get rawUrlTree() {
                return this.stateManager.getRawUrlTree()
            }
            disposed = !1;
            nonRouterCurrentEntryChangeSubscription;
            console = f(dr);
            stateManager = f(Ii);
            options = f(Ke, {
                optional: !0
            }) || {};
            pendingTasks = f(nr);
            urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
            navigationTransitions = f(Mi);
            urlSerializer = f(Ye);
            location = f(st);
            urlHandlingStrategy = f(Ut);
            injector = f(we);
            _events = new G;
            get events() {
                return this._events
            }
            get routerState() {
                return this.stateManager.getRouterState()
            }
            navigated = !1;
            routeReuseStrategy = f(Ti);
            onSameUrlNavigation = this.options.onSameUrlNavigation || "ignore";
            config = f(Xe, {
                optional: !0
            })?.flat() ?? [];
            componentInputBindingEnabled = !!f(xt, {
                optional: !0
            });
            constructor() {
                this.resetConfig(this.config), this.navigationTransitions.setupNavigations(this).subscribe({
                    error: e => {
                        this.console.warn(e)
                    }
                }), this.subscribeToNavigationEvents()
            }
            eventsSubscription = new zn;
            subscribeToNavigationEvents() {
                let e = this.navigationTransitions.events.subscribe(n => {
                    try {
                        let i = this.navigationTransitions.currentTransition,
                            o = this.navigationTransitions.currentNavigation;
                        if (i !== null && o !== null) {
                            if (this.stateManager.handleRouterEvent(n, o), n instanceof z && n.code !== T.Redirect && n.code !== T.SupersededByNewNavigation) this.navigated = !0;
                            else if (n instanceof B) this.navigated = !0;
                            else if (n instanceof fe) {
                                let s = n.navigationBehaviorOptions,
                                    a = this.urlHandlingStrategy.merge(n.url, i.currentRawUrl),
                                    c = l({
                                        browserUrl: i.extras.browserUrl,
                                        info: i.extras.info,
                                        skipLocationChange: i.extras.skipLocationChange,
                                        replaceUrl: i.extras.replaceUrl || this.urlUpdateStrategy === "eager" || Cs(i.source)
                                    }, s);
                                this.scheduleNavigation(a, Le, null, c, {
                                    resolve: i.resolve,
                                    reject: i.reject,
                                    promise: i.promise
                                })
                            }
                        }
                        bo(n) && this._events.next(n)
                    } catch (i) {
                        this.navigationTransitions.transitionAbortWithErrorSubject.next(i)
                    }
                });
                this.eventsSubscription.add(e)
            }
            resetRootComponentType(e) {
                this.routerState.root.component = e, this.navigationTransitions.rootComponentType = e
            }
            initialNavigation() {
                this.setUpLocationChangeListener(), this.navigationTransitions.hasRequestedNavigation || this.navigateToSyncWithBrowser(this.location.path(!0), Le, this.stateManager.restoredState())
            }
            setUpLocationChangeListener() {
                this.nonRouterCurrentEntryChangeSubscription ??= this.stateManager.registerNonRouterCurrentEntryChangeListener((e, n, i) => {
                    this.navigateToSyncWithBrowser(e, i, n)
                })
            }
            navigateToSyncWithBrowser(e, n, i) {
                let o = {
                        replaceUrl: !0
                    },
                    s = i?.navigationId ? i : null;
                if (i) {
                    let c = l({}, i);
                    delete c.navigationId, delete c.\u0275routerPageId, Object.keys(c).length !== 0 && (o.state = c)
                }
                let a = this.parseUrl(e);
                this.scheduleNavigation(a, n, s, o).catch(c => {
                    this.disposed || this.injector.get(Qt)(c)
                })
            }
            get url() {
                return this.serializeUrl(this.currentUrlTree)
            }
            getCurrentNavigation() {
                return this.navigationTransitions.currentNavigation
            }
            get lastSuccessfulNavigation() {
                return this.navigationTransitions.lastSuccessfulNavigation
            }
            resetConfig(e) {
                this.config = e.map(Ln), this.navigated = !1
            }
            ngOnDestroy() {
                this.dispose()
            }
            dispose() {
                this._events.unsubscribe(), this.navigationTransitions.complete(), this.nonRouterCurrentEntryChangeSubscription && (this.nonRouterCurrentEntryChangeSubscription.unsubscribe(), this.nonRouterCurrentEntryChangeSubscription = void 0), this.disposed = !0, this.eventsSubscription.unsubscribe()
            }
            createUrlTree(e, n = {}) {
                let {
                    relativeTo: i,
                    queryParams: o,
                    fragment: s,
                    queryParamsHandling: a,
                    preserveFragment: c
                } = n, u = c ? this.currentUrlTree.fragment : s, d = null;
                switch (a ?? this.options.defaultQueryParamsHandling) {
                    case "merge":
                        d = l(l({}, this.currentUrlTree.queryParams), o);
                        break;
                    case "preserve":
                        d = this.currentUrlTree.queryParams;
                        break;
                    default:
                        d = o || null
                }
                d !== null && (d = this.removeEmptyProps(d));
                let v;
                try {
                    let R = i ? i.snapshot : this.routerState.snapshot.root;
                    v = ri(R)
                } catch {
                    (typeof e[0] != "string" || e[0][0] !== "/") && (e = []), v = this.currentUrlTree.root
                }
                return ii(v, e, d, u ?? null)
            }
            navigateByUrl(e, n = {
                skipLocationChange: !1
            }) {
                let i = he(e) ? e : this.parseUrl(e),
                    o = this.urlHandlingStrategy.merge(i, this.rawUrlTree);
                return this.scheduleNavigation(o, Le, null, n)
            }
            navigate(e, n = {
                skipLocationChange: !1
            }) {
                return Ms(e), this.navigateByUrl(this.createUrlTree(e, n), n)
            }
            serializeUrl(e) {
                return this.urlSerializer.serialize(e)
            }
            parseUrl(e) {
                try {
                    return this.urlSerializer.parse(e)
                } catch {
                    return this.urlSerializer.parse("/")
                }
            }
            isActive(e, n) {
                let i;
                if (n === !0 ? i = l({}, bs) : n === !1 ? i = l({}, Es) : i = n, he(e)) return jr(this.currentUrlTree, e, i);
                let o = this.parseUrl(e);
                return jr(this.currentUrlTree, o, i)
            }
            removeEmptyProps(e) {
                return Object.entries(e).reduce((n, [i, o]) => (o != null && (n[i] = o), n), {})
            }
            scheduleNavigation(e, n, i, o, s) {
                if (this.disposed) return Promise.resolve(!1);
                let a, c, u;
                s ? (a = s.resolve, c = s.reject, u = s.promise) : u = new Promise((v, R) => {
                    a = v, c = R
                });
                let d = this.pendingTasks.add();
                return jn(this, () => {
                    queueMicrotask(() => this.pendingTasks.remove(d))
                }), this.navigationTransitions.handleNavigationRequest({
                    source: n,
                    restoredState: i,
                    currentUrlTree: this.currentUrlTree,
                    currentRawUrl: this.currentUrlTree,
                    rawUrl: e,
                    extras: o,
                    resolve: a,
                    reject: c,
                    promise: u,
                    currentSnapshot: this.routerState.snapshot,
                    currentRouterState: this.routerState
                }), u.catch(v => Promise.reject(v))
            }
            static \u0275fac = function(n) {
                return new(n || t)
            };
            static \u0275prov = y({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            })
        }
        return t
    })();

function Ms(t) {
    for (let r = 0; r < t.length; r++)
        if (t[r] == null) throw new C(4008, !1)
}
var Is = new E("");

function $n(t, ...r) {
    return Qn([{
            provide: Xe,
            multi: !0,
            useValue: t
        },
        [], {
            provide: Q,
            useFactory: As,
            deps: [Lt]
        }, {
            provide: pr,
            multi: !0,
            useFactory: _s
        },
        r.map(e => e.\u0275providers)
    ])
}

function As(t) {
    return t.routerState.root
}

function _s() {
    let t = f(Yt);
    return r => {
        let e = t.get(fr);
        if (r !== e.components[0]) return;
        let n = t.get(Lt),
            i = t.get(Os);
        t.get(Ds) === 1 && n.initialNavigation(), t.get(Ps, null, {
            optional: !0
        })?.setUpPreloading(), t.get(Is, null, {
            optional: !0
        })?.init(), n.resetRootComponentType(e.componentTypes[0]), i.closed || (i.next(), i.complete(), i.unsubscribe())
    }
}
var Os = new E("", {
        factory: () => new G
    }),
    Ds = new E("", {
        providedIn: "root",
        factory: () => 1
    });
var Ps = new E("");
var Ai = [{
    path: "",
    pathMatch: "full",
    loadComponent: () => import("./component.js").then(t => t.GeneratorPage)
}, {
    path: "**",
    redirectTo: ""
}];
var _i = {
    providers: [tr(), Cr(), $n(Ai)]
};

function Us(t, r) {
    if (t & 1) {
        let e = vr();
        j(0, "div", 13), Te("click", function() {
            Xn(e);
            let i = yr();
            return Jn(i.toggleMenu())
        }), Y()
    }
}
var kt = class t {
    isExpanded = !1;
    toggleMenu() {
        this.isExpanded = !this.isExpanded
    }
    openPayPal() {
        window.open("https://paypal.me/SpitBE", "_blank", "noopener,noreferrer"), this.isExpanded = !1
    }
    openDiscord() {
        window.open("https://discord.gg/kzsVVYGrW3", "_blank", "noopener,noreferrer"), this.isExpanded = !1
    }
    static \u0275fac = function(e) {
        return new(e || t)
    };
    static \u0275cmp = se({
        type: t,
        selectors: [
            ["floating-actions"]
        ],
        decls: 18,
        vars: 5,
        consts: [
            [1, "floating-actions"],
            [1, "action-buttons"],
            ["title", "Join our Discord community", 1, "action-btn", "discord-btn", 3, "click"],
            ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"],
            ["d", "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z", "fill", "currentColor"],
            [1, "btn-label"],
            ["title", "Support this project with a donation", 1, "action-btn", "donation-btn", 3, "click"],
            ["d", "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z", "fill", "currentColor"],
            ["title", "Quick actions", 1, "main-fab", 3, "click"],
            ["cx", "12", "cy", "12", "r", "1", "stroke", "currentColor", "stroke-width", "2"],
            ["cx", "19", "cy", "12", "r", "1", "stroke", "currentColor", "stroke-width", "2"],
            ["cx", "5", "cy", "12", "r", "1", "stroke", "currentColor", "stroke-width", "2"],
            [1, "fab-overlay"],
            [1, "fab-overlay", 3, "click"]
        ],
        template: function(e, n) {
            e & 1 && (j(0, "div", 0)(1, "div", 1)(2, "button", 2), Te("click", function() {
                return n.openDiscord()
            }), nt(), j(3, "svg", 3), ot(4, "path", 4), Y(), Wt(), j(5, "span", 5), on(6, "Discord"), Y()(), j(7, "button", 6), Te("click", function() {
                return n.openPayPal()
            }), nt(), j(8, "svg", 3), ot(9, "path", 7), Y(), Wt(), j(10, "span", 5), on(11, "Donate"), Y()()(), j(12, "button", 8), Te("click", function() {
                return n.toggleMenu()
            }), nt(), j(13, "svg", 3), ot(14, "circle", 9)(15, "circle", 10)(16, "circle", 11), Y()(), gr(17, Us, 1, 0, "div", 12), Y()), e & 2 && (rt(), rn("expanded", n.isExpanded), rt(11), rn("rotated", n.isExpanded), rt(5), mr(n.isExpanded ? 17 : -1))
        },
        dependencies: [sn],
        styles: ['.floating-actions[_ngcontent-%COMP%]{position:fixed;bottom:2rem;right:2rem;z-index:1000;display:flex;flex-direction:column;align-items:flex-end;gap:1rem}.fab-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;background:transparent;z-index:-1}.action-buttons[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.75rem;opacity:0;transform:translateY(20px) scale(.8);transition:all .3s cubic-bezier(.68,-.55,.265,1.55);pointer-events:none}.action-buttons.expanded[_ngcontent-%COMP%]{opacity:1;transform:translateY(0) scale(1);pointer-events:auto}.action-btn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;padding:.875rem 1.25rem;border:none;border-radius:50px;font-size:.9rem;font-weight:600;cursor:pointer;transition:all .3s ease;box-shadow:0 4px 20px #00000026;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.2);white-space:nowrap;min-width:120px;justify-content:flex-start}.action-btn[_ngcontent-%COMP%]:hover{transform:translate(-8px) scale(1.05);box-shadow:0 8px 30px #00000040}.action-btn[_ngcontent-%COMP%]:active{transform:translate(-8px) scale(.98)}.action-btn[_ngcontent-%COMP%]   .btn-label[_ngcontent-%COMP%]{font-size:.85rem;letter-spacing:.5px}.action-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{flex-shrink:0}.discord-btn[_ngcontent-%COMP%]{background:linear-gradient(135deg,#5865f2,#4752c4);color:#fff}.discord-btn[_ngcontent-%COMP%]:hover{background:linear-gradient(135deg,#6b73ff,#525fdb)}.discord-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:#fff}.donation-btn[_ngcontent-%COMP%]{background:linear-gradient(135deg,#ff6b6b,#ee5a52);color:#fff}.donation-btn[_ngcontent-%COMP%]:hover{background:linear-gradient(135deg,#ff7979,#fd6c6c)}.donation-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:#ffeb3b;filter:drop-shadow(0 1px 2px rgba(0,0,0,.3))}.main-fab[_ngcontent-%COMP%]{width:56px;height:56px;border-radius:50%;border:none;background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 6px 20px #667eea66;transition:all .3s cubic-bezier(.68,-.55,.265,1.55);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border:2px solid rgba(255,255,255,.2)}.main-fab[_ngcontent-%COMP%]:hover{transform:scale(1.1);box-shadow:0 8px 30px #667eea99;background:linear-gradient(135deg,#7c89f0,#8a5fb8)}.main-fab[_ngcontent-%COMP%]:active{transform:scale(.95)}.main-fab.rotated[_ngcontent-%COMP%]{transform:rotate(90deg)}.main-fab.rotated[_ngcontent-%COMP%]:hover{transform:rotate(90deg) scale(1.1)}.main-fab[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{transition:transform .3s ease}@media (max-width: 768px){.floating-actions[_ngcontent-%COMP%]{bottom:1.5rem;right:1.5rem;gap:.75rem}.action-buttons[_ngcontent-%COMP%]{gap:.5rem}.action-btn[_ngcontent-%COMP%]{padding:.75rem 1rem;min-width:100px;gap:.5rem}.action-btn[_ngcontent-%COMP%]   .btn-label[_ngcontent-%COMP%]{font-size:.8rem}.action-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:20px;height:20px}.main-fab[_ngcontent-%COMP%]{width:48px;height:48px}.main-fab[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:20px;height:20px}}@media (max-width: 480px){.floating-actions[_ngcontent-%COMP%]{bottom:1rem;right:1rem}.action-btn[_ngcontent-%COMP%]{padding:.625rem .875rem;min-width:80px;font-size:.8rem}.action-btn[_ngcontent-%COMP%]   .btn-label[_ngcontent-%COMP%]{display:none}.action-btn.discord-btn[_ngcontent-%COMP%]:after{content:"Discord";font-size:.7rem;margin-left:.25rem}.action-btn.donation-btn[_ngcontent-%COMP%]:after{content:"Donate";font-size:.7rem;margin-left:.25rem}}@keyframes _ngcontent-%COMP%_bounceIn{0%{opacity:0;transform:scale(.3) translateY(50px)}50%{opacity:1;transform:scale(1.05) translateY(-10px)}70%{transform:scale(.9) translateY(0)}to{opacity:1;transform:scale(1) translateY(0)}}.action-buttons.expanded[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_bounceIn .6s cubic-bezier(.68,-.55,.265,1.55)}.action-buttons.expanded[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:nth-child(1){animation-delay:.1s}.action-buttons.expanded[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:nth-child(2){animation-delay:.2s}']
    })
};
var jt = class t {
    title = Kt("legangular");
    static \u0275fac = function(e) {
        return new(e || t)
    };
    static \u0275cmp = se({
        type: t,
        selectors: [
            ["lego-root"]
        ],
        decls: 2,
        vars: 0,
        template: function(e, n) {
            e & 1 && it(0, "floating-actions")(1, "router-outlet")
        },
        dependencies: [Ze, kt],
        encapsulation: 2
    })
};
gn(jt, _i).catch(t => console.error(t));