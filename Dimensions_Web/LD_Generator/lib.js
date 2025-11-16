var Gd = Object.defineProperty,
    zd = Object.defineProperties;
var Wd = Object.getOwnPropertyDescriptors;
var va = Object.getOwnPropertySymbols;
var qd = Object.prototype.hasOwnProperty,
    Zd = Object.prototype.propertyIsEnumerable;
var Ea = (e, t, n) => t in e ? Gd(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    W = (e, t) => {
        for (var n in t ||= {}) qd.call(t, n) && Ea(e, n, t[n]);
        if (va)
            for (var n of va(t)) Zd.call(t, n) && Ea(e, n, t[n]);
        return e
    },
    q = (e, t) => zd(e, Wd(t));
var bo;

function An() {
    return bo
}

function fe(e) {
    let t = bo;
    return bo = e, t
}
var Ia = Symbol("NotFound");

function pt(e) {
    return e === Ia || e?.name === "\u0275NotFound"
}

function Pn(e, t) {
    return Object.is(e, t)
}
var P = null,
    Rn = !1,
    To = 1,
    Yd = null,
    U = Symbol("SIGNAL");

function m(e) {
    let t = P;
    return P = e, t
}

function Ln() {
    return P
}
var je = {
    version: 0,
    lastCleanEpoch: 0,
    dirty: !1,
    producerNode: void 0,
    producerLastReadVersion: void 0,
    producerIndexOfThis: void 0,
    nextProducerIndex: 0,
    liveConsumerNode: void 0,
    liveConsumerIndexOfThis: void 0,
    consumerAllowSignalWrites: !1,
    consumerIsAlwaysLive: !1,
    kind: "unknown",
    producerMustRecompute: () => !1,
    producerRecomputeValue: () => {},
    consumerMarkedDirty: () => {},
    consumerOnSignalRead: () => {}
};

function ht(e) {
    if (Rn) throw new Error("");
    if (P === null) return;
    P.consumerOnSignalRead(e);
    let t = P.nextProducerIndex++;
    if (Hn(P), t < P.producerNode.length && P.producerNode[t] !== e && Ht(P)) {
        let n = P.producerNode[t];
        Bn(n, P.producerIndexOfThis[t])
    }
    P.producerNode[t] !== e && (P.producerNode[t] = e, P.producerIndexOfThis[t] = Ht(P) ? wa(e, P, t) : 0), P.producerLastReadVersion[t] = e.version
}

function Ca() {
    To++
}

function jn(e) {
    if (!(Ht(e) && !e.dirty) && !(!e.dirty && e.lastCleanEpoch === To)) {
        if (!e.producerMustRecompute(e) && !$t(e)) {
            kn(e);
            return
        }
        e.producerRecomputeValue(e), kn(e)
    }
}

function Mo(e) {
    if (e.liveConsumerNode === void 0) return;
    let t = Rn;
    Rn = !0;
    try {
        for (let n of e.liveConsumerNode) n.dirty || Qd(n)
    } finally {
        Rn = t
    }
}

function So() {
    return P?.consumerAllowSignalWrites !== !1
}

function Qd(e) {
    e.dirty = !0, Mo(e), e.consumerMarkedDirty?.(e)
}

function kn(e) {
    e.dirty = !1, e.lastCleanEpoch = To
}

function Ve(e) {
    return e && (e.nextProducerIndex = 0), m(e)
}

function gt(e, t) {
    if (m(t), !(!e || e.producerNode === void 0 || e.producerIndexOfThis === void 0 || e.producerLastReadVersion === void 0)) {
        if (Ht(e))
            for (let n = e.nextProducerIndex; n < e.producerNode.length; n++) Bn(e.producerNode[n], e.producerIndexOfThis[n]);
        for (; e.producerNode.length > e.nextProducerIndex;) e.producerNode.pop(), e.producerLastReadVersion.pop(), e.producerIndexOfThis.pop()
    }
}

function $t(e) {
    Hn(e);
    for (let t = 0; t < e.producerNode.length; t++) {
        let n = e.producerNode[t],
            r = e.producerLastReadVersion[t];
        if (r !== n.version || (jn(n), r !== n.version)) return !0
    }
    return !1
}

function Vn(e) {
    if (Hn(e), Ht(e))
        for (let t = 0; t < e.producerNode.length; t++) Bn(e.producerNode[t], e.producerIndexOfThis[t]);
    e.producerNode.length = e.producerLastReadVersion.length = e.producerIndexOfThis.length = 0, e.liveConsumerNode && (e.liveConsumerNode.length = e.liveConsumerIndexOfThis.length = 0)
}

function wa(e, t, n) {
    if (_a(e), e.liveConsumerNode.length === 0 && ba(e))
        for (let r = 0; r < e.producerNode.length; r++) e.producerIndexOfThis[r] = wa(e.producerNode[r], e, r);
    return e.liveConsumerIndexOfThis.push(n), e.liveConsumerNode.push(t) - 1
}

function Bn(e, t) {
    if (_a(e), e.liveConsumerNode.length === 1 && ba(e))
        for (let r = 0; r < e.producerNode.length; r++) Bn(e.producerNode[r], e.producerIndexOfThis[r]);
    let n = e.liveConsumerNode.length - 1;
    if (e.liveConsumerNode[t] = e.liveConsumerNode[n], e.liveConsumerIndexOfThis[t] = e.liveConsumerIndexOfThis[n], e.liveConsumerNode.length--, e.liveConsumerIndexOfThis.length--, t < e.liveConsumerNode.length) {
        let r = e.liveConsumerIndexOfThis[t],
            o = e.liveConsumerNode[t];
        Hn(o), o.producerIndexOfThis[r] = t
    }
}

function Ht(e) {
    return e.consumerIsAlwaysLive || (e?.liveConsumerNode?.length ?? 0) > 0
}

function Hn(e) {
    e.producerNode ??= [], e.producerIndexOfThis ??= [], e.producerLastReadVersion ??= []
}

function _a(e) {
    e.liveConsumerNode ??= [], e.liveConsumerIndexOfThis ??= []
}

function ba(e) {
    return e.producerNode !== void 0
}

function $n(e) {
    Yd?.(e)
}

function Un(e, t) {
    let n = Object.create(Kd);
    n.computation = e, t !== void 0 && (n.equal = t);
    let r = () => {
        if (jn(n), ht(n), n.value === Bt) throw n.error;
        return n.value
    };
    return r[U] = n, $n(n), r
}
var On = Symbol("UNSET"),
    Fn = Symbol("COMPUTING"),
    Bt = Symbol("ERRORED"),
    Kd = q(W({}, je), {
        value: On,
        dirty: !0,
        error: null,
        equal: Pn,
        kind: "computed",
        producerMustRecompute(e) {
            return e.value === On || e.value === Fn
        },
        producerRecomputeValue(e) {
            if (e.value === Fn) throw new Error("");
            let t = e.value;
            e.value = Fn;
            let n = Ve(e),
                r, o = !1;
            try {
                r = e.computation(), m(null), o = t !== On && t !== Bt && r !== Bt && e.equal(t, r)
            } catch (i) {
                r = Bt, e.error = i
            } finally {
                gt(e, n)
            }
            if (o) {
                e.value = t;
                return
            }
            e.value = r, e.version++
        }
    });

function Jd() {
    throw new Error
}
var Ta = Jd;

function Ma(e) {
    Ta(e)
}

function No(e) {
    Ta = e
}
var Xd = null;

function xo(e, t) {
    let n = Object.create(Gn);
    n.value = e, t !== void 0 && (n.equal = t);
    let r = () => Sa(n);
    return r[U] = n, $n(n), [r, s => mt(n, s), s => Ao(n, s)]
}

function Sa(e) {
    return ht(e), e.value
}

function mt(e, t) {
    So() || Ma(e), e.equal(e.value, t) || (e.value = t, ef(e))
}

function Ao(e, t) {
    So() || Ma(e), mt(e, t(e.value))
}
var Gn = q(W({}, je), {
    equal: Pn,
    value: void 0,
    kind: "signal"
});

function ef(e) {
    e.version++, Ca(), Mo(e), Xd?.(e)
}

function y(e) {
    return typeof e == "function"
}

function yt(e) {
    let n = e(r => {
        Error.call(r), r.stack = new Error().stack
    });
    return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n
}
var zn = yt(e => function(n) {
    e(this), this.message = n ? `${n.length} errors occurred during unsubscription:
${n.map((r,o)=>`${o+1}) ${r.toString()}`).join(`
  `)}` : "", this.name = "UnsubscriptionError", this.errors = n
});

function Ut(e, t) {
    if (e) {
        let n = e.indexOf(t);
        0 <= n && e.splice(n, 1)
    }
}
var L = class e {
    constructor(t) {
        this.initialTeardown = t, this.closed = !1, this._parentage = null, this._finalizers = null
    }
    unsubscribe() {
        let t;
        if (!this.closed) {
            this.closed = !0;
            let {
                _parentage: n
            } = this;
            if (n)
                if (this._parentage = null, Array.isArray(n))
                    for (let i of n) i.remove(this);
                else n.remove(this);
            let {
                initialTeardown: r
            } = this;
            if (y(r)) try {
                r()
            } catch (i) {
                t = i instanceof zn ? i.errors : [i]
            }
            let {
                _finalizers: o
            } = this;
            if (o) {
                this._finalizers = null;
                for (let i of o) try {
                    Na(i)
                } catch (s) {
                    t = t ?? [], s instanceof zn ? t = [...t, ...s.errors] : t.push(s)
                }
            }
            if (t) throw new zn(t)
        }
    }
    add(t) {
        var n;
        if (t && t !== this)
            if (this.closed) Na(t);
            else {
                if (t instanceof e) {
                    if (t.closed || t._hasParent(this)) return;
                    t._addParent(this)
                }(this._finalizers = (n = this._finalizers) !== null && n !== void 0 ? n : []).push(t)
            }
    }
    _hasParent(t) {
        let {
            _parentage: n
        } = this;
        return n === t || Array.isArray(n) && n.includes(t)
    }
    _addParent(t) {
        let {
            _parentage: n
        } = this;
        this._parentage = Array.isArray(n) ? (n.push(t), n) : n ? [n, t] : t
    }
    _removeParent(t) {
        let {
            _parentage: n
        } = this;
        n === t ? this._parentage = null : Array.isArray(n) && Ut(n, t)
    }
    remove(t) {
        let {
            _finalizers: n
        } = this;
        n && Ut(n, t), t instanceof e && t._removeParent(this)
    }
};
L.EMPTY = (() => {
    let e = new L;
    return e.closed = !0, e
})();
var Ro = L.EMPTY;

function Wn(e) {
    return e instanceof L || e && "closed" in e && y(e.remove) && y(e.add) && y(e.unsubscribe)
}

function Na(e) {
    y(e) ? e() : e.unsubscribe()
}
var ae = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: void 0,
    useDeprecatedSynchronousErrorHandling: !1,
    useDeprecatedNextContext: !1
};
var Dt = {
    setTimeout(e, t, ...n) {
        let {
            delegate: r
        } = Dt;
        return r?.setTimeout ? r.setTimeout(e, t, ...n) : setTimeout(e, t, ...n)
    },
    clearTimeout(e) {
        let {
            delegate: t
        } = Dt;
        return (t?.clearTimeout || clearTimeout)(e)
    },
    delegate: void 0
};

function qn(e) {
    Dt.setTimeout(() => {
        let {
            onUnhandledError: t
        } = ae;
        if (t) t(e);
        else throw e
    })
}

function Gt() {}
var xa = Oo("C", void 0, void 0);

function Aa(e) {
    return Oo("E", void 0, e)
}

function Ra(e) {
    return Oo("N", e, void 0)
}

function Oo(e, t, n) {
    return {
        kind: e,
        value: t,
        error: n
    }
}
var Be = null;

function vt(e) {
    if (ae.useDeprecatedSynchronousErrorHandling) {
        let t = !Be;
        if (t && (Be = {
                errorThrown: !1,
                error: null
            }), e(), t) {
            let {
                errorThrown: n,
                error: r
            } = Be;
            if (Be = null, n) throw r
        }
    } else e()
}

function Oa(e) {
    ae.useDeprecatedSynchronousErrorHandling && Be && (Be.errorThrown = !0, Be.error = e)
}
var He = class extends L {
        constructor(t) {
            super(), this.isStopped = !1, t ? (this.destination = t, Wn(t) && t.add(this)) : this.destination = rf
        }
        static create(t, n, r) {
            return new Et(t, n, r)
        }
        next(t) {
            this.isStopped ? ko(Ra(t), this) : this._next(t)
        }
        error(t) {
            this.isStopped ? ko(Aa(t), this) : (this.isStopped = !0, this._error(t))
        }
        complete() {
            this.isStopped ? ko(xa, this) : (this.isStopped = !0, this._complete())
        }
        unsubscribe() {
            this.closed || (this.isStopped = !0, super.unsubscribe(), this.destination = null)
        }
        _next(t) {
            this.destination.next(t)
        }
        _error(t) {
            try {
                this.destination.error(t)
            } finally {
                this.unsubscribe()
            }
        }
        _complete() {
            try {
                this.destination.complete()
            } finally {
                this.unsubscribe()
            }
        }
    },
    tf = Function.prototype.bind;

function Fo(e, t) {
    return tf.call(e, t)
}
var Po = class {
        constructor(t) {
            this.partialObserver = t
        }
        next(t) {
            let {
                partialObserver: n
            } = this;
            if (n.next) try {
                n.next(t)
            } catch (r) {
                Zn(r)
            }
        }
        error(t) {
            let {
                partialObserver: n
            } = this;
            if (n.error) try {
                n.error(t)
            } catch (r) {
                Zn(r)
            } else Zn(t)
        }
        complete() {
            let {
                partialObserver: t
            } = this;
            if (t.complete) try {
                t.complete()
            } catch (n) {
                Zn(n)
            }
        }
    },
    Et = class extends He {
        constructor(t, n, r) {
            super();
            let o;
            if (y(t) || !t) o = {
                next: t ?? void 0,
                error: n ?? void 0,
                complete: r ?? void 0
            };
            else {
                let i;
                this && ae.useDeprecatedNextContext ? (i = Object.create(t), i.unsubscribe = () => this.unsubscribe(), o = {
                    next: t.next && Fo(t.next, i),
                    error: t.error && Fo(t.error, i),
                    complete: t.complete && Fo(t.complete, i)
                }) : o = t
            }
            this.destination = new Po(o)
        }
    };

function Zn(e) {
    ae.useDeprecatedSynchronousErrorHandling ? Oa(e) : qn(e)
}

function nf(e) {
    throw e
}

function ko(e, t) {
    let {
        onStoppedNotification: n
    } = ae;
    n && Dt.setTimeout(() => n(e, t))
}
var rf = {
    closed: !0,
    next: Gt,
    error: nf,
    complete: Gt
};
var It = typeof Symbol == "function" && Symbol.observable || "@@observable";

function Q(e) {
    return e
}

function of(...e) {
    return Lo(e)
}

function Lo(e) {
    return e.length === 0 ? Q : e.length === 1 ? e[0] : function(n) {
        return e.reduce((r, o) => o(r), n)
    }
}
var T = (() => {
    class e {
        constructor(n) {
            n && (this._subscribe = n)
        }
        lift(n) {
            let r = new e;
            return r.source = this, r.operator = n, r
        }
        subscribe(n, r, o) {
            let i = af(n) ? n : new Et(n, r, o);
            return vt(() => {
                let {
                    operator: s,
                    source: a
                } = this;
                i.add(s ? s.call(i, a) : a ? this._subscribe(i) : this._trySubscribe(i))
            }), i
        }
        _trySubscribe(n) {
            try {
                return this._subscribe(n)
            } catch (r) {
                n.error(r)
            }
        }
        forEach(n, r) {
            return r = Fa(r), new r((o, i) => {
                let s = new Et({
                    next: a => {
                        try {
                            n(a)
                        } catch (c) {
                            i(c), s.unsubscribe()
                        }
                    },
                    error: i,
                    complete: o
                });
                this.subscribe(s)
            })
        }
        _subscribe(n) {
            var r;
            return (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)
        } [It]() {
            return this
        }
        pipe(...n) {
            return Lo(n)(this)
        }
        toPromise(n) {
            return n = Fa(n), new n((r, o) => {
                let i;
                this.subscribe(s => i = s, s => o(s), () => r(i))
            })
        }
    }
    return e.create = t => new e(t), e
})();

function Fa(e) {
    var t;
    return (t = e ?? ae.Promise) !== null && t !== void 0 ? t : Promise
}

function sf(e) {
    return e && y(e.next) && y(e.error) && y(e.complete)
}

function af(e) {
    return e && e instanceof He || sf(e) && Wn(e)
}

function jo(e) {
    return y(e?.lift)
}

function _(e) {
    return t => {
        if (jo(t)) return t.lift(function(n) {
            try {
                return e(n, this)
            } catch (r) {
                this.error(r)
            }
        });
        throw new TypeError("Unable to lift unknown Observable type")
    }
}

function w(e, t, n, r, o) {
    return new Vo(e, t, n, r, o)
}
var Vo = class extends He {
    constructor(t, n, r, o, i, s) {
        super(t), this.onFinalize = i, this.shouldUnsubscribe = s, this._next = n ? function(a) {
            try {
                n(a)
            } catch (c) {
                t.error(c)
            }
        } : super._next, this._error = o ? function(a) {
            try {
                o(a)
            } catch (c) {
                t.error(c)
            } finally {
                this.unsubscribe()
            }
        } : super._error, this._complete = r ? function() {
            try {
                r()
            } catch (a) {
                t.error(a)
            } finally {
                this.unsubscribe()
            }
        } : super._complete
    }
    unsubscribe() {
        var t;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            let {
                closed: n
            } = this;
            super.unsubscribe(), !n && ((t = this.onFinalize) === null || t === void 0 || t.call(this))
        }
    }
};

function Bo() {
    return _((e, t) => {
        let n = null;
        e._refCount++;
        let r = w(t, void 0, void 0, void 0, () => {
            if (!e || e._refCount <= 0 || 0 < --e._refCount) {
                n = null;
                return
            }
            let o = e._connection,
                i = n;
            n = null, o && (!i || o === i) && o.unsubscribe(), t.unsubscribe()
        });
        e.subscribe(r), r.closed || (n = e.connect())
    })
}
var Ho = class extends T {
    constructor(t, n) {
        super(), this.source = t, this.subjectFactory = n, this._subject = null, this._refCount = 0, this._connection = null, jo(t) && (this.lift = t.lift)
    }
    _subscribe(t) {
        return this.getSubject().subscribe(t)
    }
    getSubject() {
        let t = this._subject;
        return (!t || t.isStopped) && (this._subject = this.subjectFactory()), this._subject
    }
    _teardown() {
        this._refCount = 0;
        let {
            _connection: t
        } = this;
        this._subject = this._connection = null, t?.unsubscribe()
    }
    connect() {
        let t = this._connection;
        if (!t) {
            t = this._connection = new L;
            let n = this.getSubject();
            t.add(this.source.subscribe(w(n, void 0, () => {
                this._teardown(), n.complete()
            }, r => {
                this._teardown(), n.error(r)
            }, () => this._teardown()))), t.closed && (this._connection = null, t = L.EMPTY)
        }
        return t
    }
    refCount() {
        return Bo()(this)
    }
};
var ka = yt(e => function() {
    e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed"
});
var De = (() => {
        class e extends T {
            constructor() {
                super(), this.closed = !1, this.currentObservers = null, this.observers = [], this.isStopped = !1, this.hasError = !1, this.thrownError = null
            }
            lift(n) {
                let r = new Yn(this, this);
                return r.operator = n, r
            }
            _throwIfClosed() {
                if (this.closed) throw new ka
            }
            next(n) {
                vt(() => {
                    if (this._throwIfClosed(), !this.isStopped) {
                        this.currentObservers || (this.currentObservers = Array.from(this.observers));
                        for (let r of this.currentObservers) r.next(n)
                    }
                })
            }
            error(n) {
                vt(() => {
                    if (this._throwIfClosed(), !this.isStopped) {
                        this.hasError = this.isStopped = !0, this.thrownError = n;
                        let {
                            observers: r
                        } = this;
                        for (; r.length;) r.shift().error(n)
                    }
                })
            }
            complete() {
                vt(() => {
                    if (this._throwIfClosed(), !this.isStopped) {
                        this.isStopped = !0;
                        let {
                            observers: n
                        } = this;
                        for (; n.length;) n.shift().complete()
                    }
                })
            }
            unsubscribe() {
                this.isStopped = this.closed = !0, this.observers = this.currentObservers = null
            }
            get observed() {
                var n;
                return ((n = this.observers) === null || n === void 0 ? void 0 : n.length) > 0
            }
            _trySubscribe(n) {
                return this._throwIfClosed(), super._trySubscribe(n)
            }
            _subscribe(n) {
                return this._throwIfClosed(), this._checkFinalizedStatuses(n), this._innerSubscribe(n)
            }
            _innerSubscribe(n) {
                let {
                    hasError: r,
                    isStopped: o,
                    observers: i
                } = this;
                return r || o ? Ro : (this.currentObservers = null, i.push(n), new L(() => {
                    this.currentObservers = null, Ut(i, n)
                }))
            }
            _checkFinalizedStatuses(n) {
                let {
                    hasError: r,
                    thrownError: o,
                    isStopped: i
                } = this;
                r ? n.error(o) : i && n.complete()
            }
            asObservable() {
                let n = new T;
                return n.source = this, n
            }
        }
        return e.create = (t, n) => new Yn(t, n), e
    })(),
    Yn = class extends De {
        constructor(t, n) {
            super(), this.destination = t, this.source = n
        }
        next(t) {
            var n, r;
            (r = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null || r === void 0 || r.call(n, t)
        }
        error(t) {
            var n, r;
            (r = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null || r === void 0 || r.call(n, t)
        }
        complete() {
            var t, n;
            (n = (t = this.destination) === null || t === void 0 ? void 0 : t.complete) === null || n === void 0 || n.call(t)
        }
        _subscribe(t) {
            var n, r;
            return (r = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(t)) !== null && r !== void 0 ? r : Ro
        }
    };
var zt = class extends De {
    constructor(t) {
        super(), this._value = t
    }
    get value() {
        return this.getValue()
    }
    _subscribe(t) {
        let n = super._subscribe(t);
        return !n.closed && t.next(this._value), n
    }
    getValue() {
        let {
            hasError: t,
            thrownError: n,
            _value: r
        } = this;
        if (t) throw n;
        return this._throwIfClosed(), r
    }
    next(t) {
        super.next(this._value = t)
    }
};
var Wt = new T(e => e.complete());

function Pa(e) {
    return e && y(e.schedule)
}

function La(e) {
    return e[e.length - 1]
}

function Qn(e) {
    return y(La(e)) ? e.pop() : void 0
}

function Te(e) {
    return Pa(La(e)) ? e.pop() : void 0
}

function Va(e, t, n, r) {
    function o(i) {
        return i instanceof n ? i : new n(function(s) {
            s(i)
        })
    }
    return new(n || (n = Promise))(function(i, s) {
        function a(l) {
            try {
                u(r.next(l))
            } catch (d) {
                s(d)
            }
        }

        function c(l) {
            try {
                u(r.throw(l))
            } catch (d) {
                s(d)
            }
        }

        function u(l) {
            l.done ? i(l.value) : o(l.value).then(a, c)
        }
        u((r = r.apply(e, t || [])).next())
    })
}

function ja(e) {
    var t = typeof Symbol == "function" && Symbol.iterator,
        n = t && e[t],
        r = 0;
    if (n) return n.call(e);
    if (e && typeof e.length == "number") return {
        next: function() {
            return e && r >= e.length && (e = void 0), {
                value: e && e[r++],
                done: !e
            }
        }
    };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}

function $e(e) {
    return this instanceof $e ? (this.v = e, this) : new $e(e)
}

function Ba(e, t, n) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var r = n.apply(e, t || []),
        o, i = [];
    return o = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", s), o[Symbol.asyncIterator] = function() {
        return this
    }, o;

    function s(f) {
        return function(h) {
            return Promise.resolve(h).then(f, d)
        }
    }

    function a(f, h) {
        r[f] && (o[f] = function(E) {
            return new Promise(function(x, C) {
                i.push([f, E, x, C]) > 1 || c(f, E)
            })
        }, h && (o[f] = h(o[f])))
    }

    function c(f, h) {
        try {
            u(r[f](h))
        } catch (E) {
            p(i[0][3], E)
        }
    }

    function u(f) {
        f.value instanceof $e ? Promise.resolve(f.value.v).then(l, d) : p(i[0][2], f)
    }

    function l(f) {
        c("next", f)
    }

    function d(f) {
        c("throw", f)
    }

    function p(f, h) {
        f(h), i.shift(), i.length && c(i[0][0], i[0][1])
    }
}

function Ha(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t = e[Symbol.asyncIterator],
        n;
    return t ? t.call(e) : (e = typeof ja == "function" ? ja(e) : e[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
        return this
    }, n);

    function r(i) {
        n[i] = e[i] && function(s) {
            return new Promise(function(a, c) {
                s = e[i](s), o(a, c, s.done, s.value)
            })
        }
    }

    function o(i, s, a, c) {
        Promise.resolve(c).then(function(u) {
            i({
                value: u,
                done: a
            })
        }, s)
    }
}
var Kn = e => e && typeof e.length == "number" && typeof e != "function";

function Jn(e) {
    return y(e?.then)
}

function Xn(e) {
    return y(e[It])
}

function er(e) {
    return Symbol.asyncIterator && y(e?.[Symbol.asyncIterator])
}

function tr(e) {
    return new TypeError(`You provided ${e!==null&&typeof e=="object"?"an invalid object":`'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)
}

function cf() {
    return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator
}
var nr = cf();

function rr(e) {
    return y(e?.[nr])
}

function or(e) {
    return Ba(this, arguments, function*() {
        let n = e.getReader();
        try {
            for (;;) {
                let {
                    value: r,
                    done: o
                } = yield $e(n.read());
                if (o) return yield $e(void 0);
                yield yield $e(r)
            }
        } finally {
            n.releaseLock()
        }
    })
}

function ir(e) {
    return y(e?.getReader)
}

function k(e) {
    if (e instanceof T) return e;
    if (e != null) {
        if (Xn(e)) return uf(e);
        if (Kn(e)) return lf(e);
        if (Jn(e)) return df(e);
        if (er(e)) return $a(e);
        if (rr(e)) return ff(e);
        if (ir(e)) return pf(e)
    }
    throw tr(e)
}

function uf(e) {
    return new T(t => {
        let n = e[It]();
        if (y(n.subscribe)) return n.subscribe(t);
        throw new TypeError("Provided object does not correctly implement Symbol.observable")
    })
}

function lf(e) {
    return new T(t => {
        for (let n = 0; n < e.length && !t.closed; n++) t.next(e[n]);
        t.complete()
    })
}

function df(e) {
    return new T(t => {
        e.then(n => {
            t.closed || (t.next(n), t.complete())
        }, n => t.error(n)).then(null, qn)
    })
}

function ff(e) {
    return new T(t => {
        for (let n of e)
            if (t.next(n), t.closed) return;
        t.complete()
    })
}

function $a(e) {
    return new T(t => {
        hf(e, t).catch(n => t.error(n))
    })
}

function pf(e) {
    return $a(or(e))
}

function hf(e, t) {
    var n, r, o, i;
    return Va(this, void 0, void 0, function*() {
        try {
            for (n = Ha(e); r = yield n.next(), !r.done;) {
                let s = r.value;
                if (t.next(s), t.closed) return
            }
        } catch (s) {
            o = {
                error: s
            }
        } finally {
            try {
                r && !r.done && (i = n.return) && (yield i.call(n))
            } finally {
                if (o) throw o.error
            }
        }
        t.complete()
    })
}

function Z(e, t, n, r = 0, o = !1) {
    let i = t.schedule(function() {
        n(), o ? e.add(this.schedule(null, r)) : this.unsubscribe()
    }, r);
    if (e.add(i), !o) return i
}

function sr(e, t = 0) {
    return _((n, r) => {
        n.subscribe(w(r, o => Z(r, e, () => r.next(o), t), () => Z(r, e, () => r.complete(), t), o => Z(r, e, () => r.error(o), t)))
    })
}

function ar(e, t = 0) {
    return _((n, r) => {
        r.add(e.schedule(() => n.subscribe(r), t))
    })
}

function Ua(e, t) {
    return k(e).pipe(ar(t), sr(t))
}

function Ga(e, t) {
    return k(e).pipe(ar(t), sr(t))
}

function za(e, t) {
    return new T(n => {
        let r = 0;
        return t.schedule(function() {
            r === e.length ? n.complete() : (n.next(e[r++]), n.closed || this.schedule())
        })
    })
}

function Wa(e, t) {
    return new T(n => {
        let r;
        return Z(n, t, () => {
            r = e[nr](), Z(n, t, () => {
                let o, i;
                try {
                    ({
                        value: o,
                        done: i
                    } = r.next())
                } catch (s) {
                    n.error(s);
                    return
                }
                i ? n.complete() : n.next(o)
            }, 0, !0)
        }), () => y(r?.return) && r.return()
    })
}

function cr(e, t) {
    if (!e) throw new Error("Iterable cannot be null");
    return new T(n => {
        Z(n, t, () => {
            let r = e[Symbol.asyncIterator]();
            Z(n, t, () => {
                r.next().then(o => {
                    o.done ? n.complete() : n.next(o.value)
                })
            }, 0, !0)
        })
    })
}

function qa(e, t) {
    return cr(or(e), t)
}

function Za(e, t) {
    if (e != null) {
        if (Xn(e)) return Ua(e, t);
        if (Kn(e)) return za(e, t);
        if (Jn(e)) return Ga(e, t);
        if (er(e)) return cr(e, t);
        if (rr(e)) return Wa(e, t);
        if (ir(e)) return qa(e, t)
    }
    throw tr(e)
}

function Me(e, t) {
    return t ? Za(e, t) : k(e)
}

function gf(...e) {
    let t = Te(e);
    return Me(e, t)
}

function mf(e, t) {
    let n = y(e) ? e : () => e,
        r = o => o.error(n());
    return new T(t ? o => t.schedule(r, 0, o) : r)
}

function yf(e) {
    return !!e && (e instanceof T || y(e.lift) && y(e.subscribe))
}
var Ue = yt(e => function() {
    e(this), this.name = "EmptyError", this.message = "no elements in sequence"
});

function Ge(e, t) {
    return _((n, r) => {
        let o = 0;
        n.subscribe(w(r, i => {
            r.next(e.call(t, i, o++))
        }))
    })
}
var {
    isArray: Df
} = Array;

function vf(e, t) {
    return Df(t) ? e(...t) : e(t)
}

function ur(e) {
    return Ge(t => vf(e, t))
}
var {
    isArray: Ef
} = Array, {
    getPrototypeOf: If,
    prototype: Cf,
    keys: wf
} = Object;

function lr(e) {
    if (e.length === 1) {
        let t = e[0];
        if (Ef(t)) return {
            args: t,
            keys: null
        };
        if (_f(t)) {
            let n = wf(t);
            return {
                args: n.map(r => t[r]),
                keys: n
            }
        }
    }
    return {
        args: e,
        keys: null
    }
}

function _f(e) {
    return e && typeof e == "object" && If(e) === Cf
}

function dr(e, t) {
    return e.reduce((n, r, o) => (n[r] = t[o], n), {})
}

function bf(...e) {
    let t = Te(e),
        n = Qn(e),
        {
            args: r,
            keys: o
        } = lr(e);
    if (r.length === 0) return Me([], t);
    let i = new T(Tf(r, t, o ? s => dr(o, s) : Q));
    return n ? i.pipe(ur(n)) : i
}

function Tf(e, t, n = Q) {
    return r => {
        Ya(t, () => {
            let {
                length: o
            } = e, i = new Array(o), s = o, a = o;
            for (let c = 0; c < o; c++) Ya(t, () => {
                let u = Me(e[c], t),
                    l = !1;
                u.subscribe(w(r, d => {
                    i[c] = d, l || (l = !0, a--), a || r.next(n(i.slice()))
                }, () => {
                    --s || r.complete()
                }))
            }, r)
        }, r)
    }
}

function Ya(e, t, n) {
    e ? Z(n, e, t) : t()
}

function Qa(e, t, n, r, o, i, s, a) {
    let c = [],
        u = 0,
        l = 0,
        d = !1,
        p = () => {
            d && !c.length && !u && t.complete()
        },
        f = E => u < r ? h(E) : c.push(E),
        h = E => {
            i && t.next(E), u++;
            let x = !1;
            k(n(E, l++)).subscribe(w(t, C => {
                o?.(C), i ? f(C) : t.next(C)
            }, () => {
                x = !0
            }, void 0, () => {
                if (x) try {
                    for (u--; c.length && u < r;) {
                        let C = c.shift();
                        s ? Z(t, s, () => h(C)) : h(C)
                    }
                    p()
                } catch (C) {
                    t.error(C)
                }
            }))
        };
    return e.subscribe(w(t, f, () => {
        d = !0, p()
    })), () => {
        a?.()
    }
}

function ze(e, t, n = 1 / 0) {
    return y(t) ? ze((r, o) => Ge((i, s) => t(r, i, o, s))(k(e(r, o))), n) : (typeof t == "number" && (n = t), _((r, o) => Qa(r, o, e, n)))
}

function Ka(e = 1 / 0) {
    return ze(Q, e)
}

function Ja() {
    return Ka(1)
}

function fr(...e) {
    return Ja()(Me(e, Te(e)))
}

function Mf(e) {
    return new T(t => {
        k(e()).subscribe(t)
    })
}

function Sf(...e) {
    let t = Qn(e),
        {
            args: n,
            keys: r
        } = lr(e),
        o = new T(i => {
            let {
                length: s
            } = n;
            if (!s) {
                i.complete();
                return
            }
            let a = new Array(s),
                c = s,
                u = s;
            for (let l = 0; l < s; l++) {
                let d = !1;
                k(n[l]).subscribe(w(i, p => {
                    d || (d = !0, u--), a[l] = p
                }, () => c--, void 0, () => {
                    (!c || !d) && (u || i.next(r ? dr(r, a) : a), i.complete())
                }))
            }
        });
    return t ? o.pipe(ur(t)) : o
}

function qt(e, t) {
    return _((n, r) => {
        let o = 0;
        n.subscribe(w(r, i => e.call(t, i, o++) && r.next(i)))
    })
}

function Xa(e) {
    return _((t, n) => {
        let r = null,
            o = !1,
            i;
        r = t.subscribe(w(n, void 0, void 0, s => {
            i = k(e(s, Xa(e)(t))), r ? (r.unsubscribe(), r = null, i.subscribe(n)) : o = !0
        })), o && (r.unsubscribe(), r = null, i.subscribe(n))
    })
}

function ec(e, t, n, r, o) {
    return (i, s) => {
        let a = n,
            c = t,
            u = 0;
        i.subscribe(w(s, l => {
            let d = u++;
            c = a ? e(c, l, d) : (a = !0, l), r && s.next(c)
        }, o && (() => {
            a && s.next(c), s.complete()
        })))
    }
}

function Nf(e, t) {
    return y(t) ? ze(e, t, 1) : ze(e, 1)
}

function Zt(e) {
    return _((t, n) => {
        let r = !1;
        t.subscribe(w(n, o => {
            r = !0, n.next(o)
        }, () => {
            r || n.next(e), n.complete()
        }))
    })
}

function $o(e) {
    return e <= 0 ? () => Wt : _((t, n) => {
        let r = 0;
        t.subscribe(w(n, o => {
            ++r <= e && (n.next(o), e <= r && n.complete())
        }))
    })
}

function pr(e = xf) {
    return _((t, n) => {
        let r = !1;
        t.subscribe(w(n, o => {
            r = !0, n.next(o)
        }, () => r ? n.complete() : n.error(e())))
    })
}

function xf() {
    return new Ue
}

function Af(e) {
    return _((t, n) => {
        try {
            t.subscribe(n)
        } finally {
            n.add(e)
        }
    })
}

function Rf(e, t) {
    let n = arguments.length >= 2;
    return r => r.pipe(e ? qt((o, i) => e(o, i, r)) : Q, $o(1), n ? Zt(t) : pr(() => new Ue))
}

function Uo(e) {
    return e <= 0 ? () => Wt : _((t, n) => {
        let r = [];
        t.subscribe(w(n, o => {
            r.push(o), e < r.length && r.shift()
        }, () => {
            for (let o of r) n.next(o);
            n.complete()
        }, void 0, () => {
            r = null
        }))
    })
}

function Of(e, t) {
    let n = arguments.length >= 2;
    return r => r.pipe(e ? qt((o, i) => e(o, i, r)) : Q, Uo(1), n ? Zt(t) : pr(() => new Ue))
}

function Ff(e, t) {
    return _(ec(e, t, arguments.length >= 2, !0))
}

function kf(...e) {
    let t = Te(e);
    return _((n, r) => {
        (t ? fr(e, n, t) : fr(e, n)).subscribe(r)
    })
}

function Pf(e, t) {
    return _((n, r) => {
        let o = null,
            i = 0,
            s = !1,
            a = () => s && !o && r.complete();
        n.subscribe(w(r, c => {
            o?.unsubscribe();
            let u = 0,
                l = i++;
            k(e(c, l)).subscribe(o = w(r, d => r.next(t ? t(c, d, l, u++) : d), () => {
                o = null, a()
            }))
        }, () => {
            s = !0, a()
        }))
    })
}

function Lf(e) {
    return _((t, n) => {
        k(e).subscribe(w(n, () => n.complete(), Gt)), !n.closed && t.subscribe(n)
    })
}

function jf(e, t, n) {
    let r = y(e) || t || n ? {
        next: e,
        error: t,
        complete: n
    } : e;
    return r ? _((o, i) => {
        var s;
        (s = r.subscribe) === null || s === void 0 || s.call(r);
        let a = !0;
        o.subscribe(w(i, c => {
            var u;
            (u = r.next) === null || u === void 0 || u.call(r, c), i.next(c)
        }, () => {
            var c;
            a = !1, (c = r.complete) === null || c === void 0 || c.call(r), i.complete()
        }, c => {
            var u;
            a = !1, (u = r.error) === null || u === void 0 || u.call(r, c), i.error(c)
        }, () => {
            var c, u;
            a && ((c = r.unsubscribe) === null || c === void 0 || c.call(r)), (u = r.finalize) === null || u === void 0 || u.call(r)
        }))
    }) : Q
}

function tc(e) {
    let t = m(null);
    try {
        return e()
    } finally {
        m(t)
    }
}
var Dr = "https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",
    M = class extends Error {
        code;
        constructor(t, n) {
            super(vr(t, n)), this.code = t
        }
    };

function Vf(e) {
    return `NG0${Math.abs(e)}`
}

function vr(e, t) {
    return `${Vf(e)}${t?": "+t:""}`
}
var wt = globalThis;

function N(e) {
    for (let t in e)
        if (e[t] === N) return t;
    throw Error("")
}

function oc(e, t) {
    for (let n in t) t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n])
}

function Ee(e) {
    if (typeof e == "string") return e;
    if (Array.isArray(e)) return `[${e.map(Ee).join(", ")}]`;
    if (e == null) return "" + e;
    let t = e.overriddenName || e.name;
    if (t) return `${t}`;
    let n = e.toString();
    if (n == null) return "" + n;
    let r = n.indexOf(`
`);
    return r >= 0 ? n.slice(0, r) : n
}

function ti(e, t) {
    return e ? t ? `${e} ${t}` : e : t || ""
}
var Bf = N({
    __forward_ref__: N
});

function Er(e) {
    return e.__forward_ref__ = Er, e.toString = function() {
        return Ee(this())
    }, e
}

function V(e) {
    return ni(e) ? e() : e
}

function ni(e) {
    return typeof e == "function" && e.hasOwnProperty(Bf) && e.__forward_ref__ === Er
}

function ic(e, t) {
    e == null && ri(t, e, null, "!=")
}

function ri(e, t, n, r) {
    throw new Error(`ASSERTION ERROR: ${e}` + (r == null ? "" : ` [Expected=> ${n} ${r} ${t} <=Actual]`))
}

function O(e) {
    return {
        token: e.token,
        providedIn: e.providedIn || null,
        factory: e.factory,
        value: void 0
    }
}

function Ir(e) {
    return {
        providers: e.providers || [],
        imports: e.imports || []
    }
}

function Xt(e) {
    return $f(e, Cr)
}

function Hf(e) {
    return Xt(e) !== null
}

function $f(e, t) {
    return e.hasOwnProperty(t) && e[t] || null
}

function Uf(e) {
    let t = e?.[Cr] ?? null;
    return t || null
}

function zo(e) {
    return e && e.hasOwnProperty(gr) ? e[gr] : null
}
var Cr = N({
        \u0275prov: N
    }),
    gr = N({
        \u0275inj: N
    }),
    S = class {
        _desc;
        ngMetadataName = "InjectionToken";
        \u0275prov;
        constructor(t, n) {
            this._desc = t, this.\u0275prov = void 0, typeof n == "number" ? this.__NG_ELEMENT_ID__ = n : n !== void 0 && (this.\u0275prov = O({
                token: this,
                providedIn: n.providedIn || "root",
                factory: n.factory
            }))
        }
        get multi() {
            return this
        }
        toString() {
            return `InjectionToken ${this._desc}`
        }
    };

function oi(e) {
    return e && !!e.\u0275providers
}
var ii = N({
        \u0275cmp: N
    }),
    si = N({
        \u0275dir: N
    }),
    ai = N({
        \u0275pipe: N
    }),
    ci = N({
        \u0275mod: N
    }),
    Kt = N({
        \u0275fac: N
    }),
    Xe = N({
        __NG_ELEMENT_ID__: N
    }),
    nc = N({
        __NG_ENV_ID__: N
    });

function xe(e) {
    return typeof e == "string" ? e : e == null ? "" : String(e)
}

function mr(e) {
    return typeof e == "function" ? e.name || e.toString() : typeof e == "object" && e != null && typeof e.type == "function" ? e.type.name || e.type.toString() : xe(e)
}
var ui = N({
        ngErrorCode: N
    }),
    sc = N({
        ngErrorMessage: N
    }),
    Qt = N({
        ngTokenPath: N
    });

function li(e, t) {
    return ac("", -200, t)
}

function wr(e, t) {
    throw new M(-201, !1)
}

function Gf(e, t) {
    e[Qt] ??= [];
    let n = e[Qt],
        r;
    typeof t == "object" && "multi" in t && t?.multi === !0 ? (ic(t.provide, "Token with multi: true should have a provide property"), r = mr(t.provide)) : r = mr(t), n[0] !== r && e[Qt].unshift(r)
}

function zf(e, t) {
    let n = e[Qt],
        r = e[ui],
        o = e[sc] || e.message;
    return e.message = qf(o, r, n, t), e
}

function ac(e, t, n) {
    let r = new M(t, e);
    return r[ui] = t, r[sc] = e, n && (r[Qt] = n), r
}

function Wf(e) {
    return e[ui]
}

function qf(e, t, n = [], r = null) {
    let o = "";
    n && n.length > 1 && (o = ` Path: ${n.join(" -> ")}.`);
    let i = r ? ` Source: ${r}.` : "";
    return vr(t, `${e}${i}${o}`)
}
var Wo;

function cc() {
    return Wo
}

function K(e) {
    let t = Wo;
    return Wo = e, t
}

function di(e, t, n) {
    let r = Xt(e);
    if (r && r.providedIn == "root") return r.value === void 0 ? r.value = r.factory() : r.value;
    if (n & 8) return null;
    if (t !== void 0) return t;
    wr(e, "Injector")
}
var Zf = {},
    We = Zf,
    Yf = "__NG_DI_FLAG__",
    qo = class {
        injector;
        constructor(t) {
            this.injector = t
        }
        retrieve(t, n) {
            let r = qe(n) || 0;
            try {
                return this.injector.get(t, r & 8 ? null : We, r)
            } catch (o) {
                if (pt(o)) return o;
                throw o
            }
        }
    };

function Qf(e, t = 0) {
    let n = An();
    if (n === void 0) throw new M(-203, !1);
    if (n === null) return di(e, void 0, t);
    {
        let r = Kf(t),
            o = n.retrieve(e, r);
        if (pt(o)) {
            if (r.optional) return null;
            throw o
        }
        return o
    }
}

function B(e, t = 0) {
    return (cc() || Qf)(V(e), t)
}

function D(e, t) {
    return B(e, qe(t))
}

function qe(e) {
    return typeof e > "u" || typeof e == "number" ? e : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4)
}

function Kf(e) {
    return {
        optional: !!(e & 8),
        host: !!(e & 1),
        self: !!(e & 2),
        skipSelf: !!(e & 4)
    }
}

function Zo(e) {
    let t = [];
    for (let n = 0; n < e.length; n++) {
        let r = V(e[n]);
        if (Array.isArray(r)) {
            if (r.length === 0) throw new M(900, !1);
            let o, i = 0;
            for (let s = 0; s < r.length; s++) {
                let a = r[s],
                    c = Jf(a);
                typeof c == "number" ? c === -1 ? o = a.token : i |= c : o = a
            }
            t.push(B(o, i))
        } else t.push(B(r))
    }
    return t
}

function Jf(e) {
    return e[Yf]
}

function Ze(e, t) {
    let n = e.hasOwnProperty(Kt);
    return n ? e[Kt] : null
}

function _r(e, t) {
    e.forEach(n => Array.isArray(n) ? _r(n, t) : t(n))
}

function fi(e, t, n) {
    t >= e.length ? e.push(n) : e.splice(t, 0, n)
}

function en(e, t) {
    return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0]
}

function uc(e, t, n, r) {
    let o = e.length;
    if (o == t) e.push(n, r);
    else if (o === 1) e.push(r, e[0]), e[0] = n;
    else {
        for (o--, e.push(e[o - 1], e[o]); o > t;) {
            let i = o - 2;
            e[o] = e[i], o--
        }
        e[t] = n, e[t + 1] = r
    }
}

function lc(e, t, n) {
    let r = _t(e, t);
    return r >= 0 ? e[r | 1] = n : (r = ~r, uc(e, r, t, n)), r
}

function br(e, t) {
    let n = _t(e, t);
    if (n >= 0) return e[n | 1]
}

function _t(e, t) {
    return Xf(e, t, 1)
}

function Xf(e, t, n) {
    let r = 0,
        o = e.length >> n;
    for (; o !== r;) {
        let i = r + (o - r >> 1),
            s = e[i << n];
        if (t === s) return i << n;
        s > t ? o = i : r = i + 1
    }
    return ~(o << n)
}
var Ae = {},
    J = [],
    Re = new S(""),
    pi = new S("", -1),
    hi = new S(""),
    Jt = class {
        get(t, n = We) {
            if (n === We) {
                let o = ac("", -201);
                throw o.name = "\u0275NotFound", o
            }
            return n
        }
    };

function gi(e) {
    return e[ci] || null
}

function Oe(e) {
    return e[ii] || null
}

function mi(e) {
    return e[si] || null
}

function dc(e) {
    return e[ai] || null
}

function tn(e) {
    return {
        \u0275providers: e
    }
}

function fc(e) {
    return tn([{
        provide: Re,
        multi: !0,
        useValue: e
    }])
}

function pc(...e) {
    return {
        \u0275providers: yi(!0, e),
        \u0275fromNgModule: !0
    }
}

function yi(e, ...t) {
    let n = [],
        r = new Set,
        o, i = s => {
            n.push(s)
        };
    return _r(t, s => {
        let a = s;
        yr(a, i, [], r) && (o ||= [], o.push(a))
    }), o !== void 0 && hc(o, i), n
}

function hc(e, t) {
    for (let n = 0; n < e.length; n++) {
        let {
            ngModule: r,
            providers: o
        } = e[n];
        Di(o, i => {
            t(i, r)
        })
    }
}

function yr(e, t, n, r) {
    if (e = V(e), !e) return !1;
    let o = null,
        i = zo(e),
        s = !i && Oe(e);
    if (!i && !s) {
        let c = e.ngModule;
        if (i = zo(c), i) o = c;
        else return !1
    } else {
        if (s && !s.standalone) return !1;
        o = e
    }
    let a = r.has(o);
    if (s) {
        if (a) return !1;
        if (r.add(o), s.dependencies) {
            let c = typeof s.dependencies == "function" ? s.dependencies() : s.dependencies;
            for (let u of c) yr(u, t, n, r)
        }
    } else if (i) {
        if (i.imports != null && !a) {
            r.add(o);
            let u;
            try {
                _r(i.imports, l => {
                    yr(l, t, n, r) && (u ||= [], u.push(l))
                })
            } finally {}
            u !== void 0 && hc(u, t)
        }
        if (!a) {
            let u = Ze(o) || (() => new o);
            t({
                provide: o,
                useFactory: u,
                deps: J
            }, o), t({
                provide: hi,
                useValue: o,
                multi: !0
            }, o), t({
                provide: Re,
                useValue: () => B(o),
                multi: !0
            }, o)
        }
        let c = i.providers;
        if (c != null && !a) {
            let u = e;
            Di(c, l => {
                t(l, u)
            })
        }
    } else return !1;
    return o !== e && e.providers !== void 0
}

function Di(e, t) {
    for (let n of e) oi(n) && (n = n.\u0275providers), Array.isArray(n) ? Di(n, t) : t(n)
}
var ep = N({
    provide: String,
    useValue: N
});

function gc(e) {
    return e !== null && typeof e == "object" && ep in e
}

function tp(e) {
    return !!(e && e.useExisting)
}

function np(e) {
    return !!(e && e.useFactory)
}

function Ye(e) {
    return typeof e == "function"
}

function mc(e) {
    return !!e.useClass
}
var vi = new S(""),
    hr = {},
    rc = {},
    Go;

function nn() {
    return Go === void 0 && (Go = new Jt), Go
}
var te = class {},
    Qe = class extends te {
        parent;
        source;
        scopes;
        records = new Map;
        _ngOnDestroyHooks = new Set;
        _onDestroyHooks = [];
        get destroyed() {
            return this._destroyed
        }
        _destroyed = !1;
        injectorDefTypes;
        constructor(t, n, r, o) {
            super(), this.parent = n, this.source = r, this.scopes = o, Qo(t, s => this.processProvider(s)), this.records.set(pi, Ct(void 0, this)), o.has("environment") && this.records.set(te, Ct(void 0, this));
            let i = this.records.get(vi);
            i != null && typeof i.value == "string" && this.scopes.add(i.value), this.injectorDefTypes = new Set(this.get(hi, J, {
                self: !0
            }))
        }
        retrieve(t, n) {
            let r = qe(n) || 0;
            try {
                return this.get(t, We, r)
            } catch (o) {
                if (pt(o)) return o;
                throw o
            }
        }
        destroy() {
            Yt(this), this._destroyed = !0;
            let t = m(null);
            try {
                for (let r of this._ngOnDestroyHooks) r.ngOnDestroy();
                let n = this._onDestroyHooks;
                this._onDestroyHooks = [];
                for (let r of n) r()
            } finally {
                this.records.clear(), this._ngOnDestroyHooks.clear(), this.injectorDefTypes.clear(), m(t)
            }
        }
        onDestroy(t) {
            return Yt(this), this._onDestroyHooks.push(t), () => this.removeOnDestroy(t)
        }
        runInContext(t) {
            Yt(this);
            let n = fe(this),
                r = K(void 0),
                o;
            try {
                return t()
            } finally {
                fe(n), K(r)
            }
        }
        get(t, n = We, r) {
            if (Yt(this), t.hasOwnProperty(nc)) return t[nc](this);
            let o = qe(r),
                i, s = fe(this),
                a = K(void 0);
            try {
                if (!(o & 4)) {
                    let u = this.records.get(t);
                    if (u === void 0) {
                        let l = ap(t) && Xt(t);
                        l && this.injectableDefInScope(l) ? u = Ct(Yo(t), hr) : u = null, this.records.set(t, u)
                    }
                    if (u != null) return this.hydrate(t, u, o)
                }
                let c = o & 2 ? nn() : this.parent;
                return n = o & 8 && n === We ? null : n, c.get(t, n)
            } catch (c) {
                let u = Wf(c);
                throw u === -200 || u === -201 ? new M(u, null) : c
            } finally {
                K(a), fe(s)
            }
        }
        resolveInjectorInitializers() {
            let t = m(null),
                n = fe(this),
                r = K(void 0),
                o;
            try {
                let i = this.get(Re, J, {
                    self: !0
                });
                for (let s of i) s()
            } finally {
                fe(n), K(r), m(t)
            }
        }
        toString() {
            let t = [],
                n = this.records;
            for (let r of n.keys()) t.push(Ee(r));
            return `R3Injector[${t.join(", ")}]`
        }
        processProvider(t) {
            t = V(t);
            let n = Ye(t) ? t : V(t && t.provide),
                r = op(t);
            if (!Ye(t) && t.multi === !0) {
                let o = this.records.get(n);
                o || (o = Ct(void 0, hr, !0), o.factory = () => Zo(o.multi), this.records.set(n, o)), n = t, o.multi.push(t)
            }
            this.records.set(n, r)
        }
        hydrate(t, n, r) {
            let o = m(null);
            try {
                if (n.value === rc) throw li(Ee(t));
                return n.value === hr && (n.value = rc, n.value = n.factory(void 0, r)), typeof n.value == "object" && n.value && sp(n.value) && this._ngOnDestroyHooks.add(n.value), n.value
            } finally {
                m(o)
            }
        }
        injectableDefInScope(t) {
            if (!t.providedIn) return !1;
            let n = V(t.providedIn);
            return typeof n == "string" ? n === "any" || this.scopes.has(n) : this.injectorDefTypes.has(n)
        }
        removeOnDestroy(t) {
            let n = this._onDestroyHooks.indexOf(t);
            n !== -1 && this._onDestroyHooks.splice(n, 1)
        }
    };

function Yo(e) {
    let t = Xt(e),
        n = t !== null ? t.factory : Ze(e);
    if (n !== null) return n;
    if (e instanceof S) throw new M(204, !1);
    if (e instanceof Function) return rp(e);
    throw new M(204, !1)
}

function rp(e) {
    if (e.length > 0) throw new M(204, !1);
    let n = Uf(e);
    return n !== null ? () => n.factory(e) : () => new e
}

function op(e) {
    if (gc(e)) return Ct(void 0, e.useValue);
    {
        let t = Ei(e);
        return Ct(t, hr)
    }
}

function Ei(e, t, n) {
    let r;
    if (Ye(e)) {
        let o = V(e);
        return Ze(o) || Yo(o)
    } else if (gc(e)) r = () => V(e.useValue);
    else if (np(e)) r = () => e.useFactory(...Zo(e.deps || []));
    else if (tp(e)) r = (o, i) => B(V(e.useExisting), i !== void 0 && i & 8 ? 8 : void 0);
    else {
        let o = V(e && (e.useClass || e.provide));
        if (ip(e)) r = () => new o(...Zo(e.deps));
        else return Ze(o) || Yo(o)
    }
    return r
}

function Yt(e) {
    if (e.destroyed) throw new M(205, !1)
}

function Ct(e, t, n = !1) {
    return {
        factory: e,
        value: t,
        multi: n ? [] : void 0
    }
}

function ip(e) {
    return !!e.deps
}

function sp(e) {
    return e !== null && typeof e == "object" && typeof e.ngOnDestroy == "function"
}

function ap(e) {
    return typeof e == "function" || typeof e == "object" && e.ngMetadataName === "InjectionToken"
}

function Qo(e, t) {
    for (let n of e) Array.isArray(n) ? Qo(n, t) : n && oi(n) ? Qo(n.\u0275providers, t) : t(n)
}

function Tr(e, t) {
    let n;
    e instanceof Qe ? (Yt(e), n = e) : n = new qo(e);
    let r, o = fe(n),
        i = K(void 0);
    try {
        return t()
    } finally {
        fe(o), K(i)
    }
}

function yc() {
    return cc() !== void 0 || An() != null
}
var ce = 0,
    g = 1,
    v = 2,
    j = 3,
    ne = 4,
    re = 5,
    bt = 6,
    Tt = 7,
    F = 8,
    et = 9,
    pe = 10,
    R = 11,
    Mt = 12,
    Ii = 13,
    tt = 14,
    X = 15,
    nt = 16,
    rt = 17,
    ot = 18,
    rn = 19,
    Ci = 20,
    ve = 21,
    Mr = 22,
    on = 23,
    ee = 24,
    Sr = 25,
    H = 26,
    Dc = 1,
    wi = 6,
    Fe = 7,
    sn = 8,
    an = 9,
    $ = 10;

function he(e) {
    return Array.isArray(e) && typeof e[Dc] == "object"
}

function ue(e) {
    return Array.isArray(e) && e[Dc] === !0
}

function _i(e) {
    return (e.flags & 4) !== 0
}

function ke(e) {
    return e.componentOffset > -1
}

function Nr(e) {
    return (e.flags & 1) === 1
}

function ge(e) {
    return !!e.template
}

function St(e) {
    return (e[v] & 512) !== 0
}

function it(e) {
    return (e[v] & 256) === 256
}
var bi = "svg",
    vc = "math";

function oe(e) {
    for (; Array.isArray(e);) e = e[ce];
    return e
}

function Ti(e, t) {
    return oe(t[e])
}

function le(e, t) {
    return oe(t[e.index])
}

function cn(e, t) {
    return e.data[t]
}

function ie(e, t) {
    let n = t[e];
    return he(n) ? n : n[ce]
}

function xr(e) {
    return (e[v] & 128) === 128
}

function Ec(e) {
    return ue(e[j])
}

function me(e, t) {
    return t == null ? null : e[t]
}

function Mi(e) {
    e[rt] = 0
}

function Si(e) {
    e[v] & 1024 || (e[v] |= 1024, xr(e) && ln(e))
}

function Ic(e, t) {
    for (; e > 0;) t = t[tt], e--;
    return t
}

function un(e) {
    return !!(e[v] & 9216 || e[ee]?.dirty)
}

function Ar(e) {
    e[pe].changeDetectionScheduler?.notify(8), e[v] & 64 && (e[v] |= 1024), un(e) && ln(e)
}

function ln(e) {
    e[pe].changeDetectionScheduler?.notify(0);
    let t = Se(e);
    for (; t !== null && !(t[v] & 8192 || (t[v] |= 8192, !xr(t)));) t = Se(t)
}

function Ni(e, t) {
    if (it(e)) throw new M(911, !1);
    e[ve] === null && (e[ve] = []), e[ve].push(t)
}

function Cc(e, t) {
    if (e[ve] === null) return;
    let n = e[ve].indexOf(t);
    n !== -1 && e[ve].splice(n, 1)
}

function Se(e) {
    let t = e[j];
    return ue(t) ? t[j] : t
}

function wc(e) {
    return e[Tt] ??= []
}

function _c(e) {
    return e.cleanup ??= []
}
var I = {
        lFrame: Hc(null),
        bindingsEnabled: !0,
        skipHydrationRootTNode: null
    },
    dn = function(e) {
        return e[e.Off = 0] = "Off", e[e.Exhaustive = 1] = "Exhaustive", e[e.OnlyDirtyViews = 2] = "OnlyDirtyViews", e
    }(dn || {}),
    cp = 0,
    Ko = !1;

function bc() {
    return I.lFrame.elementDepthCount
}

function Tc() {
    I.lFrame.elementDepthCount++
}

function xi() {
    I.lFrame.elementDepthCount--
}

function Mc() {
    return I.bindingsEnabled
}

function Sc() {
    return I.skipHydrationRootTNode !== null
}

function Ai(e) {
    return I.skipHydrationRootTNode === e
}

function Ri() {
    I.skipHydrationRootTNode = null
}

function b() {
    return I.lFrame.lView
}

function G() {
    return I.lFrame.tView
}

function Nc(e) {
    return I.lFrame.contextLView = e, e[F]
}

function xc(e) {
    return I.lFrame.contextLView = null, e
}

function z() {
    let e = Oi();
    for (; e !== null && e.type === 64;) e = e.parent;
    return e
}

function Oi() {
    return I.lFrame.currentTNode
}

function Ac() {
    let e = I.lFrame,
        t = e.currentTNode;
    return e.isParent ? t : t.parent
}

function Nt(e, t) {
    let n = I.lFrame;
    n.currentTNode = e, n.isParent = t
}

function Fi() {
    return I.lFrame.isParent
}

function Rc() {
    I.lFrame.isParent = !1
}

function ki(e) {
    ri("Must never be called in production mode"), cp = e
}

function Pi() {
    return Ko
}

function Li(e) {
    let t = Ko;
    return Ko = e, t
}

function Oc() {
    let e = I.lFrame,
        t = e.bindingRootIndex;
    return t === -1 && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t
}

function Fc() {
    return I.lFrame.bindingIndex
}

function kc(e) {
    return I.lFrame.bindingIndex = e
}

function st() {
    return I.lFrame.bindingIndex++
}

function ji(e) {
    let t = I.lFrame,
        n = t.bindingIndex;
    return t.bindingIndex = t.bindingIndex + e, n
}

function Pc() {
    return I.lFrame.inI18n
}

function Lc(e, t) {
    let n = I.lFrame;
    n.bindingIndex = n.bindingRootIndex = e, Rr(t)
}

function jc() {
    return I.lFrame.currentDirectiveIndex
}

function Rr(e) {
    I.lFrame.currentDirectiveIndex = e
}

function Vc(e) {
    let t = I.lFrame.currentDirectiveIndex;
    return t === -1 ? null : e[t]
}

function Vi(e) {
    I.lFrame.currentQueryIndex = e
}

function up(e) {
    let t = e[g];
    return t.type === 2 ? t.declTNode : t.type === 1 ? e[re] : null
}

function Bi(e, t, n) {
    if (n & 4) {
        let o = t,
            i = e;
        for (; o = o.parent, o === null && !(n & 1);)
            if (o = up(i), o === null || (i = i[tt], o.type & 10)) break;
        if (o === null) return !1;
        t = o, e = i
    }
    let r = I.lFrame = Bc();
    return r.currentTNode = t, r.lView = e, !0
}

function Or(e) {
    let t = Bc(),
        n = e[g];
    I.lFrame = t, t.currentTNode = n.firstChild, t.lView = e, t.tView = n, t.contextLView = e, t.bindingIndex = n.bindingStartIndex, t.inI18n = !1
}

function Bc() {
    let e = I.lFrame,
        t = e === null ? null : e.child;
    return t === null ? Hc(e) : t
}

function Hc(e) {
    let t = {
        currentTNode: null,
        isParent: !0,
        lView: null,
        tView: null,
        selectedIndex: -1,
        contextLView: null,
        elementDepthCount: 0,
        currentNamespace: null,
        currentDirectiveIndex: -1,
        bindingRootIndex: -1,
        bindingIndex: -1,
        currentQueryIndex: 0,
        parent: e,
        child: null,
        inI18n: !1
    };
    return e !== null && (e.child = t), t
}

function $c() {
    let e = I.lFrame;
    return I.lFrame = e.parent, e.currentTNode = null, e.lView = null, e
}
var Hi = $c;

function Fr() {
    let e = $c();
    e.isParent = !0, e.tView = null, e.selectedIndex = -1, e.contextLView = null, e.elementDepthCount = 0, e.currentDirectiveIndex = -1, e.currentNamespace = null, e.bindingRootIndex = -1, e.bindingIndex = -1, e.currentQueryIndex = 0
}

function Uc(e) {
    return (I.lFrame.contextLView = Ic(e, I.lFrame.contextLView))[F]
}

function Ie() {
    return I.lFrame.selectedIndex
}

function Pe(e) {
    I.lFrame.selectedIndex = e
}

function kr() {
    let e = I.lFrame;
    return cn(e.tView, e.selectedIndex)
}

function Gc() {
    I.lFrame.currentNamespace = bi
}

function zc() {
    lp()
}

function lp() {
    I.lFrame.currentNamespace = null
}

function Wc() {
    return I.lFrame.currentNamespace
}
var qc = !0;

function Pr() {
    return qc
}

function Lr(e) {
    qc = e
}

function Jo(e, t = null, n = null, r) {
    let o = $i(e, t, n, r);
    return o.resolveInjectorInitializers(), o
}

function $i(e, t = null, n = null, r, o = new Set) {
    let i = [n || J, pc(e)];
    return r = r || (typeof e == "object" ? void 0 : Ee(e)), new Qe(i, t || nn(), r || null, o)
}
var Ke = class e {
        static THROW_IF_NOT_FOUND = We;
        static NULL = new Jt;
        static create(t, n) {
            if (Array.isArray(t)) return Jo({
                name: ""
            }, n, t, "");
            {
                let r = t.name ?? "";
                return Jo({
                    name: r
                }, t.parent, t.providers, r)
            }
        }
        static \u0275prov = O({
            token: e,
            providedIn: "any",
            factory: () => B(pi)
        });
        static __NG_ELEMENT_ID__ = -1
    },
    xt = new S(""),
    fn = (() => {
        class e {
            static __NG_ELEMENT_ID__ = dp;
            static __NG_ENV_ID__ = n => n
        }
        return e
    })(),
    Xo = class extends fn {
        _lView;
        constructor(t) {
            super(), this._lView = t
        }
        get destroyed() {
            return it(this._lView)
        }
        onDestroy(t) {
            let n = this._lView;
            return Ni(n, t), () => Cc(n, t)
        }
    };

function dp() {
    return new Xo(b())
}
var Je = class {
        _console = console;
        handleError(t) {
            this._console.error("ERROR", t)
        }
    },
    Ce = new S("", {
        providedIn: "root",
        factory: () => {
            let e = D(te),
                t;
            return n => {
                e.destroyed && !t ? setTimeout(() => {
                    throw n
                }) : (t ??= e.get(Je), t.handleError(n))
            }
        }
    }),
    Zc = {
        provide: Re,
        useValue: () => void D(Je),
        multi: !0
    },
    fp = new S("", {
        providedIn: "root",
        factory: () => {
            let e = D(xt).defaultView;
            if (!e) return;
            let t = D(Ce),
                n = i => {
                    t(i.reason), i.preventDefault()
                },
                r = i => {
                    i.error ? t(i.error) : t(new Error(i.message, {
                        cause: i
                    })), i.preventDefault()
                },
                o = () => {
                    e.addEventListener("unhandledrejection", n), e.addEventListener("error", r)
                };
            typeof Zone < "u" ? Zone.root.run(o) : o(), D(fn).onDestroy(() => {
                e.removeEventListener("error", r), e.removeEventListener("unhandledrejection", n)
            })
        }
    });

function pp() {
    return tn([fc(() => void D(fp))])
}

function Ui(e) {
    return typeof e == "function" && e[U] !== void 0
}

function Yc(e, t) {
    let [n, r, o] = xo(e, t?.equal), i = n, s = i[U];
    return i.set = r, i.update = o, i.asReadonly = Qc.bind(i), i
}

function Qc() {
    let e = this[U];
    if (e.readonlyFn === void 0) {
        let t = () => this();
        t[U] = e, e.readonlyFn = t
    }
    return e.readonlyFn
}

function Gi(e) {
    return Ui(e) && typeof e.set == "function"
}
var Ne = class {},
    pn = new S("", {
        providedIn: "root",
        factory: () => !1
    });
var zi = new S(""),
    jr = new S("");
var at = (() => {
    class e {
        taskId = 0;
        pendingTasks = new Set;
        destroyed = !1;
        pendingTask = new zt(!1);
        get hasPendingTasks() {
            return this.destroyed ? !1 : this.pendingTask.value
        }
        get hasPendingTasksObservable() {
            return this.destroyed ? new T(n => {
                n.next(!1), n.complete()
            }) : this.pendingTask
        }
        add() {
            !this.hasPendingTasks && !this.destroyed && this.pendingTask.next(!0);
            let n = this.taskId++;
            return this.pendingTasks.add(n), n
        }
        has(n) {
            return this.pendingTasks.has(n)
        }
        remove(n) {
            this.pendingTasks.delete(n), this.pendingTasks.size === 0 && this.hasPendingTasks && this.pendingTask.next(!1)
        }
        ngOnDestroy() {
            this.pendingTasks.clear(), this.hasPendingTasks && this.pendingTask.next(!1), this.destroyed = !0, this.pendingTask.unsubscribe()
        }
        static \u0275prov = O({
            token: e,
            providedIn: "root",
            factory: () => new e
        })
    }
    return e
})();

function hn(...e) {}
var Wi = (() => {
        class e {
            static \u0275prov = O({
                token: e,
                providedIn: "root",
                factory: () => new ei
            })
        }
        return e
    })(),
    ei = class {
        dirtyEffectCount = 0;
        queues = new Map;
        add(t) {
            this.enqueue(t), this.schedule(t)
        }
        schedule(t) {
            t.dirty && this.dirtyEffectCount++
        }
        remove(t) {
            let n = t.zone,
                r = this.queues.get(n);
            r.has(t) && (r.delete(t), t.dirty && this.dirtyEffectCount--)
        }
        enqueue(t) {
            let n = t.zone;
            this.queues.has(n) || this.queues.set(n, new Set);
            let r = this.queues.get(n);
            r.has(t) || r.add(t)
        }
        flush() {
            for (; this.dirtyEffectCount > 0;) {
                let t = !1;
                for (let [n, r] of this.queues) n === null ? t ||= this.flushQueue(r) : t ||= n.run(() => this.flushQueue(r));
                t || (this.dirtyEffectCount = 0)
            }
        }
        flushQueue(t) {
            let n = !1;
            for (let r of t) r.dirty && (this.dirtyEffectCount--, n = !0, r.run());
            return n
        }
    };

function _n(e) {
    return {
        toString: e
    }.toString()
}

function wp(e) {
    return typeof e == "function"
}
var qr = class {
    previousValue;
    currentValue;
    firstChange;
    constructor(t, n, r) {
        this.previousValue = t, this.currentValue = n, this.firstChange = r
    }
    isFirstChange() {
        return this.firstChange
    }
};

function xu(e, t, n, r) {
    t !== null ? t.applyValueToInputSignal(t, r) : e[n] = r
}
var Au = (() => {
    let e = () => Ru;
    return e.ngInherit = !0, e
})();

function Ru(e) {
    return e.type.prototype.ngOnChanges && (e.setInput = bp), _p
}

function _p() {
    let e = Fu(this),
        t = e?.current;
    if (t) {
        let n = e.previous;
        if (n === Ae) e.previous = t;
        else
            for (let r in t) n[r] = t[r];
        e.current = null, this.ngOnChanges(t)
    }
}

function bp(e, t, n, r, o) {
    let i = this.declaredInputs[r],
        s = Fu(e) || Tp(e, {
            previous: Ae,
            current: null
        }),
        a = s.current || (s.current = {}),
        c = s.previous,
        u = c[i];
    a[i] = new qr(u && u.currentValue, n, c === Ae), xu(e, t, o, n)
}
var Ou = "__ngSimpleChanges__";

function Fu(e) {
    return e[Ou] || null
}

function Tp(e, t) {
    return e[Ou] = t
}
var Kc = [];
var A = function(e, t = null, n) {
    for (let r = 0; r < Kc.length; r++) {
        let o = Kc[r];
        o(e, t, n)
    }
};

function Mp(e, t, n) {
    let {
        ngOnChanges: r,
        ngOnInit: o,
        ngDoCheck: i
    } = t.type.prototype;
    if (r) {
        let s = Ru(t);
        (n.preOrderHooks ??= []).push(e, s), (n.preOrderCheckHooks ??= []).push(e, s)
    }
    o && (n.preOrderHooks ??= []).push(0 - e, o), i && ((n.preOrderHooks ??= []).push(e, i), (n.preOrderCheckHooks ??= []).push(e, i))
}

function Sp(e, t) {
    for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
        let i = e.data[n].type.prototype,
            {
                ngAfterContentInit: s,
                ngAfterContentChecked: a,
                ngAfterViewInit: c,
                ngAfterViewChecked: u,
                ngOnDestroy: l
            } = i;
        s && (e.contentHooks ??= []).push(-n, s), a && ((e.contentHooks ??= []).push(n, a), (e.contentCheckHooks ??= []).push(n, a)), c && (e.viewHooks ??= []).push(-n, c), u && ((e.viewHooks ??= []).push(n, u), (e.viewCheckHooks ??= []).push(n, u)), l != null && (e.destroyHooks ??= []).push(n, l)
    }
}

function Ur(e, t, n) {
    ku(e, t, 3, n)
}

function Gr(e, t, n, r) {
    (e[v] & 3) === n && ku(e, t, n, r)
}

function qi(e, t) {
    let n = e[v];
    (n & 3) === t && (n &= 16383, n += 1, e[v] = n)
}

function ku(e, t, n, r) {
    let o = r !== void 0 ? e[rt] & 65535 : 0,
        i = r ?? -1,
        s = t.length - 1,
        a = 0;
    for (let c = o; c < s; c++)
        if (typeof t[c + 1] == "number") {
            if (a = t[c], r != null && a >= r) break
        } else t[c] < 0 && (e[rt] += 65536), (a < i || i == -1) && (Np(e, n, t, c), e[rt] = (e[rt] & 4294901760) + c + 2), c++
}

function Jc(e, t) {
    A(4, e, t);
    let n = m(null);
    try {
        t.call(e)
    } finally {
        m(n), A(5, e, t)
    }
}

function Np(e, t, n, r) {
    let o = n[r] < 0,
        i = n[r + 1],
        s = o ? -n[r] : n[r],
        a = e[s];
    o ? e[v] >> 14 < e[rt] >> 16 && (e[v] & 3) === t && (e[v] += 16384, Jc(a, i)) : Jc(a, i)
}
var Rt = -1,
    ut = class {
        factory;
        name;
        injectImpl;
        resolving = !1;
        canSeeViewProviders;
        multi;
        componentProviders;
        index;
        providerFactory;
        constructor(t, n, r, o) {
            this.factory = t, this.name = o, this.canSeeViewProviders = n, this.injectImpl = r
        }
    };

function xp(e) {
    return (e.flags & 8) !== 0
}

function Ap(e) {
    return (e.flags & 16) !== 0
}

function Rp(e, t, n) {
    let r = 0;
    for (; r < n.length;) {
        let o = n[r];
        if (typeof o == "number") {
            if (o !== 0) break;
            r++;
            let i = n[r++],
                s = n[r++],
                a = n[r++];
            e.setAttribute(t, s, a, i)
        } else {
            let i = o,
                s = n[++r];
            Fp(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s), r++
        }
    }
    return r
}

function Op(e) {
    return e === 3 || e === 4 || e === 6
}

function Fp(e) {
    return e.charCodeAt(0) === 64
}

function Ot(e, t) {
    if (!(t === null || t.length === 0))
        if (e === null || e.length === 0) e = t.slice();
        else {
            let n = -1;
            for (let r = 0; r < t.length; r++) {
                let o = t[r];
                typeof o == "number" ? n = o : n === 0 || (n === -1 || n === 2 ? Xc(e, n, o, null, t[++r]) : Xc(e, n, o, null, null))
            }
        } return e
}

function Xc(e, t, n, r, o) {
    let i = 0,
        s = e.length;
    if (t === -1) s = -1;
    else
        for (; i < e.length;) {
            let a = e[i++];
            if (typeof a == "number") {
                if (a === t) {
                    s = -1;
                    break
                } else if (a > t) {
                    s = i - 1;
                    break
                }
            }
        }
    for (; i < e.length;) {
        let a = e[i];
        if (typeof a == "number") break;
        if (a === n) {
            o !== null && (e[i + 1] = o);
            return
        }
        i++, o !== null && i++
    }
    s !== -1 && (e.splice(s, 0, t), i = s + 1), e.splice(i++, 0, n), o !== null && e.splice(i++, 0, o)
}

function Pu(e) {
    return e !== Rt
}

function Zr(e) {
    return e & 32767
}

function kp(e) {
    return e >> 16
}

function Yr(e, t) {
    let n = kp(e),
        r = t;
    for (; n > 0;) r = r[tt], n--;
    return r
}
var rs = !0;

function eu(e) {
    let t = rs;
    return rs = e, t
}
var Pp = 256,
    Lu = Pp - 1,
    ju = 5,
    Lp = 0,
    ye = {};

function jp(e, t, n) {
    let r;
    typeof n == "string" ? r = n.charCodeAt(0) || 0 : n.hasOwnProperty(Xe) && (r = n[Xe]), r == null && (r = n[Xe] = Lp++);
    let o = r & Lu,
        i = 1 << o;
    t.data[e + (o >> ju)] |= i
}

function Qr(e, t) {
    let n = Vu(e, t);
    if (n !== -1) return n;
    let r = t[g];
    r.firstCreatePass && (e.injectorIndex = t.length, Zi(r.data, e), Zi(t, null), Zi(r.blueprint, null));
    let o = As(e, t),
        i = e.injectorIndex;
    if (Pu(o)) {
        let s = Zr(o),
            a = Yr(o, t),
            c = a[g].data;
        for (let u = 0; u < 8; u++) t[i + u] = a[s + u] | c[s + u]
    }
    return t[i + 8] = o, i
}

function Zi(e, t) {
    e.push(0, 0, 0, 0, 0, 0, 0, 0, t)
}

function Vu(e, t) {
    return e.injectorIndex === -1 || e.parent && e.parent.injectorIndex === e.injectorIndex || t[e.injectorIndex + 8] === null ? -1 : e.injectorIndex
}

function As(e, t) {
    if (e.parent && e.parent.injectorIndex !== -1) return e.parent.injectorIndex;
    let n = 0,
        r = null,
        o = t;
    for (; o !== null;) {
        if (r = Gu(o), r === null) return Rt;
        if (n++, o = o[tt], r.injectorIndex !== -1) return r.injectorIndex | n << 16
    }
    return Rt
}

function os(e, t, n) {
    jp(e, t, n)
}

function Bu(e, t, n) {
    if (n & 8 || e !== void 0) return e;
    wr(t, "NodeInjector")
}

function Hu(e, t, n, r) {
    if (n & 8 && r === void 0 && (r = null), (n & 3) === 0) {
        let o = e[et],
            i = K(void 0);
        try {
            return o ? o.get(t, r, n & 8) : di(t, r, n & 8)
        } finally {
            K(i)
        }
    }
    return Bu(r, t, n)
}

function $u(e, t, n, r = 0, o) {
    if (e !== null) {
        if (t[v] & 2048 && !(r & 2)) {
            let s = Gp(e, t, n, r, ye);
            if (s !== ye) return s
        }
        let i = Uu(e, t, n, r, ye);
        if (i !== ye) return i
    }
    return Hu(t, n, r, o)
}

function Uu(e, t, n, r, o) {
    let i = Hp(n);
    if (typeof i == "function") {
        if (!Bi(t, e, r)) return r & 1 ? Bu(o, n, r) : Hu(t, n, r, o);
        try {
            let s;
            if (s = i(r), s == null && !(r & 8)) wr(n);
            else return s
        } finally {
            Hi()
        }
    } else if (typeof i == "number") {
        let s = null,
            a = Vu(e, t),
            c = Rt,
            u = r & 1 ? t[X][re] : null;
        for ((a === -1 || r & 4) && (c = a === -1 ? As(e, t) : t[a + 8], c === Rt || !nu(r, !1) ? a = -1 : (s = t[g], a = Zr(c), t = Yr(c, t))); a !== -1;) {
            let l = t[g];
            if (tu(i, a, l.data)) {
                let d = Vp(a, t, n, s, r, u);
                if (d !== ye) return d
            }
            c = t[a + 8], c !== Rt && nu(r, t[g].data[a + 8] === u) && tu(i, a, t) ? (s = l, a = Zr(c), t = Yr(c, t)) : a = -1
        }
    }
    return o
}

function Vp(e, t, n, r, o, i) {
    let s = t[g],
        a = s.data[e + 8],
        c = r == null ? ke(a) && rs : r != s && (a.type & 3) !== 0,
        u = o & 1 && i === a,
        l = Bp(a, s, n, c, u);
    return l !== null ? Kr(t, s, l, a, o) : ye
}

function Bp(e, t, n, r, o) {
    let i = e.providerIndexes,
        s = t.data,
        a = i & 1048575,
        c = e.directiveStart,
        u = e.directiveEnd,
        l = i >> 20,
        d = r ? a : a + l,
        p = o ? a + l : u;
    for (let f = d; f < p; f++) {
        let h = s[f];
        if (f < c && n === h || f >= c && h.type === n) return f
    }
    if (o) {
        let f = s[c];
        if (f && ge(f) && f.type === n) return c
    }
    return null
}

function Kr(e, t, n, r, o) {
    let i = e[n],
        s = t.data;
    if (i instanceof ut) {
        let a = i;
        if (a.resolving) {
            let f = mr(s[n]);
            throw li(f)
        }
        let c = eu(a.canSeeViewProviders);
        a.resolving = !0;
        let u = s[n].type || s[n],
            l, d = a.injectImpl ? K(a.injectImpl) : null,
            p = Bi(e, r, 0);
        try {
            i = e[n] = a.factory(void 0, o, s, e, r), t.firstCreatePass && n >= r.directiveStart && Mp(n, s[n], t)
        } finally {
            d !== null && K(d), eu(c), a.resolving = !1, Hi()
        }
    }
    return i
}

function Hp(e) {
    if (typeof e == "string") return e.charCodeAt(0) || 0;
    let t = e.hasOwnProperty(Xe) ? e[Xe] : void 0;
    return typeof t == "number" ? t >= 0 ? t & Lu : $p : t
}

function tu(e, t, n) {
    let r = 1 << e;
    return !!(n[t + (e >> ju)] & r)
}

function nu(e, t) {
    return !(e & 2) && !(e & 1 && t)
}
var ct = class {
    _tNode;
    _lView;
    constructor(t, n) {
        this._tNode = t, this._lView = n
    }
    get(t, n, r) {
        return $u(this._tNode, this._lView, t, qe(r), n)
    }
};

function $p() {
    return new ct(z(), b())
}

function Up(e) {
    return _n(() => {
        let t = e.prototype.constructor,
            n = t[Kt] || is(t),
            r = Object.prototype,
            o = Object.getPrototypeOf(e.prototype).constructor;
        for (; o && o !== r;) {
            let i = o[Kt] || is(o);
            if (i && i !== n) return i;
            o = Object.getPrototypeOf(o)
        }
        return i => new i
    })
}

function is(e) {
    return ni(e) ? () => {
        let t = is(V(e));
        return t && t()
    } : Ze(e)
}

function Gp(e, t, n, r, o) {
    let i = e,
        s = t;
    for (; i !== null && s !== null && s[v] & 2048 && !St(s);) {
        let a = Uu(i, s, n, r | 2, ye);
        if (a !== ye) return a;
        let c = i.parent;
        if (!c) {
            let u = s[Ci];
            if (u) {
                let l = u.get(n, ye, r);
                if (l !== ye) return l
            }
            c = Gu(s), s = s[tt]
        }
        i = c
    }
    return o
}

function Gu(e) {
    let t = e[g],
        n = t.type;
    return n === 2 ? t.declTNode : n === 1 ? e[re] : null
}

function zp() {
    return Rs(z(), b())
}

function Rs(e, t) {
    return new Os(le(e, t))
}
var Os = (() => {
    class e {
        nativeElement;
        constructor(n) {
            this.nativeElement = n
        }
        static __NG_ELEMENT_ID__ = zp
    }
    return e
})();

function zu(e) {
    return (e.flags & 128) === 128
}
var Fs = function(e) {
        return e[e.OnPush = 0] = "OnPush", e[e.Default = 1] = "Default", e
    }(Fs || {}),
    Wu = new Map,
    Wp = 0;

function qp() {
    return Wp++
}

function Zp(e) {
    Wu.set(e[rn], e)
}

function ss(e) {
    Wu.delete(e[rn])
}
var ru = "__ngContext__";

function Ft(e, t) {
    he(t) ? (e[ru] = t[rn], Zp(t)) : e[ru] = t
}

function qu(e) {
    return Yu(e[Mt])
}

function Zu(e) {
    return Yu(e[ne])
}

function Yu(e) {
    for (; e !== null && !ue(e);) e = e[ne];
    return e
}
var as;

function Yp(e) {
    as = e
}

function ks() {
    if (as !== void 0) return as;
    if (typeof document < "u") return document;
    throw new M(210, !1)
}
var Qp = new S("", {
        providedIn: "root",
        factory: () => Kp
    }),
    Kp = "ng",
    Qu = new S(""),
    Jp = new S("", {
        providedIn: "platform",
        factory: () => "unknown"
    });
var Xp = new S("", {
    providedIn: "root",
    factory: () => ks().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") || null
});
var eh = "h",
    th = "b";
var Ku = "r";
var Ju = "di";
var Xu = !1,
    el = new S("", {
        providedIn: "root",
        factory: () => Xu
    });
var nh = (e, t, n, r) => {};

function rh(e, t, n, r) {
    nh(e, t, n, r)
}

function Ps(e) {
    return (e.flags & 32) === 32
}
var oh = () => null;

function tl(e, t, n = !1) {
    return oh(e, t, n)
}

function nl(e, t) {
    let n = e.contentQueries;
    if (n !== null) {
        let r = m(null);
        try {
            for (let o = 0; o < n.length; o += 2) {
                let i = n[o],
                    s = n[o + 1];
                if (s !== -1) {
                    let a = e.data[s];
                    Vi(i), a.contentQueries(2, t[s], s)
                }
            }
        } finally {
            m(r)
        }
    }
}

function cs(e, t, n) {
    Vi(0);
    let r = m(null);
    try {
        t(e, n)
    } finally {
        m(r)
    }
}

function rl(e, t, n) {
    if (_i(t)) {
        let r = m(null);
        try {
            let o = t.directiveStart,
                i = t.directiveEnd;
            for (let s = o; s < i; s++) {
                let a = e.data[s];
                if (a.contentQueries) {
                    let c = n[s];
                    a.contentQueries(1, c, s)
                }
            }
        } finally {
            m(r)
        }
    }
}
var kt = function(e) {
        return e[e.Emulated = 0] = "Emulated", e[e.None = 2] = "None", e[e.ShadowDom = 3] = "ShadowDom", e
    }(kt || {}),
    Vr;

function ih() {
    if (Vr === void 0 && (Vr = null, wt.trustedTypes)) try {
        Vr = wt.trustedTypes.createPolicy("angular", {
            createHTML: e => e,
            createScript: e => e,
            createScriptURL: e => e
        })
    } catch {}
    return Vr
}

function po(e) {
    return ih()?.createHTML(e) || e
}
var Br;

function sh() {
    if (Br === void 0 && (Br = null, wt.trustedTypes)) try {
        Br = wt.trustedTypes.createPolicy("angular#unsafe-bypass", {
            createHTML: e => e,
            createScript: e => e,
            createScriptURL: e => e
        })
    } catch {}
    return Br
}

function ou(e) {
    return sh()?.createHTML(e) || e
}
var Jr = class {
    changingThisBreaksApplicationSecurity;
    constructor(t) {
        this.changingThisBreaksApplicationSecurity = t
    }
    toString() {
        return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Dr})`
    }
};

function ho(e) {
    return e instanceof Jr ? e.changingThisBreaksApplicationSecurity : e
}

function Ls(e, t) {
    let n = ol(e);
    if (n != null && n !== t) {
        if (n === "ResourceURL" && t === "URL") return !0;
        throw new Error(`Required a safe ${t}, got a ${n} (see ${Dr})`)
    }
    return n === t
}

function ol(e) {
    return e instanceof Jr && e.getTypeName() || null
}

function ah(e) {
    let t = new ls(e);
    return ch() ? new us(t) : t
}
var us = class {
        inertDocumentHelper;
        constructor(t) {
            this.inertDocumentHelper = t
        }
        getInertBodyElement(t) {
            t = "<body><remove></remove>" + t;
            try {
                let n = new window.DOMParser().parseFromString(po(t), "text/html").body;
                return n === null ? this.inertDocumentHelper.getInertBodyElement(t) : (n.firstChild?.remove(), n)
            } catch {
                return null
            }
        }
    },
    ls = class {
        defaultDoc;
        inertDocument;
        constructor(t) {
            this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")
        }
        getInertBodyElement(t) {
            let n = this.inertDocument.createElement("template");
            return n.innerHTML = po(t), n
        }
    };

function ch() {
    try {
        return !!new window.DOMParser().parseFromString(po(""), "text/html")
    } catch {
        return !1
    }
}
var uh = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;

function js(e) {
    return e = String(e), e.match(uh) ? e : "unsafe:" + e
}

function be(e) {
    let t = {};
    for (let n of e.split(",")) t[n] = !0;
    return t
}

function bn(...e) {
    let t = {};
    for (let n of e)
        for (let r in n) n.hasOwnProperty(r) && (t[r] = !0);
    return t
}
var il = be("area,br,col,hr,img,wbr"),
    sl = be("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
    al = be("rp,rt"),
    lh = bn(al, sl),
    dh = bn(sl, be("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),
    fh = bn(al, be("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),
    iu = bn(il, dh, fh, lh),
    cl = be("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
    ph = be("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),
    hh = be("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),
    gh = bn(cl, ph, hh),
    mh = be("script,style,template"),
    ds = class {
        sanitizedSomething = !1;
        buf = [];
        sanitizeChildren(t) {
            let n = t.firstChild,
                r = !0,
                o = [];
            for (; n;) {
                if (n.nodeType === Node.ELEMENT_NODE ? r = this.startElement(n) : n.nodeType === Node.TEXT_NODE ? this.chars(n.nodeValue) : this.sanitizedSomething = !0, r && n.firstChild) {
                    o.push(n), n = vh(n);
                    continue
                }
                for (; n;) {
                    n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
                    let i = Dh(n);
                    if (i) {
                        n = i;
                        break
                    }
                    n = o.pop()
                }
            }
            return this.buf.join("")
        }
        startElement(t) {
            let n = su(t).toLowerCase();
            if (!iu.hasOwnProperty(n)) return this.sanitizedSomething = !0, !mh.hasOwnProperty(n);
            this.buf.push("<"), this.buf.push(n);
            let r = t.attributes;
            for (let o = 0; o < r.length; o++) {
                let i = r.item(o),
                    s = i.name,
                    a = s.toLowerCase();
                if (!gh.hasOwnProperty(a)) {
                    this.sanitizedSomething = !0;
                    continue
                }
                let c = i.value;
                cl[a] && (c = js(c)), this.buf.push(" ", s, '="', au(c), '"')
            }
            return this.buf.push(">"), !0
        }
        endElement(t) {
            let n = su(t).toLowerCase();
            iu.hasOwnProperty(n) && !il.hasOwnProperty(n) && (this.buf.push("</"), this.buf.push(n), this.buf.push(">"))
        }
        chars(t) {
            this.buf.push(au(t))
        }
    };

function yh(e, t) {
    return (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) !== Node.DOCUMENT_POSITION_CONTAINED_BY
}

function Dh(e) {
    let t = e.nextSibling;
    if (t && e !== t.previousSibling) throw ul(t);
    return t
}

function vh(e) {
    let t = e.firstChild;
    if (t && yh(e, t)) throw ul(t);
    return t
}

function su(e) {
    let t = e.nodeName;
    return typeof t == "string" ? t : "FORM"
}

function ul(e) {
    return new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`)
}
var Eh = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
    Ih = /([^\#-~ |!])/g;

function au(e) {
    return e.replace(/&/g, "&amp;").replace(Eh, function(t) {
        let n = t.charCodeAt(0),
            r = t.charCodeAt(1);
        return "&#" + ((n - 55296) * 1024 + (r - 56320) + 65536) + ";"
    }).replace(Ih, function(t) {
        return "&#" + t.charCodeAt(0) + ";"
    }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
}
var Hr;

function ll(e, t) {
    let n = null;
    try {
        Hr = Hr || ah(e);
        let r = t ? String(t) : "";
        n = Hr.getInertBodyElement(r);
        let o = 5,
            i = r;
        do {
            if (o === 0) throw new Error("Failed to sanitize html because the input is unstable");
            o--, r = i, i = n.innerHTML, n = Hr.getInertBodyElement(r)
        } while (r !== i);
        let a = new ds().sanitizeChildren(cu(n) || n);
        return po(a)
    } finally {
        if (n) {
            let r = cu(n) || n;
            for (; r.firstChild;) r.firstChild.remove()
        }
    }
}

function cu(e) {
    return "content" in e && Ch(e) ? e.content : null
}

function Ch(e) {
    return e.nodeType === Node.ELEMENT_NODE && e.nodeName === "TEMPLATE"
}
var go = function(e) {
    return e[e.NONE = 0] = "NONE", e[e.HTML = 1] = "HTML", e[e.STYLE = 2] = "STYLE", e[e.SCRIPT = 3] = "SCRIPT", e[e.URL = 4] = "URL", e[e.RESOURCE_URL = 5] = "RESOURCE_URL", e
}(go || {});

function wh(e) {
    let t = dl();
    return t ? ou(t.sanitize(go.HTML, e) || "") : Ls(e, "HTML") ? ou(ho(e)) : ll(ks(), xe(e))
}

function _h(e) {
    let t = dl();
    return t ? t.sanitize(go.URL, e) || "" : Ls(e, "URL") ? ho(e) : js(xe(e))
}

function dl() {
    let e = b();
    return e && e[pe].sanitizer
}

function fl(e) {
    return e instanceof Function ? e() : e
}

function bh(e, t, n) {
    let r = e.length;
    for (;;) {
        let o = e.indexOf(t, n);
        if (o === -1) return o;
        if (o === 0 || e.charCodeAt(o - 1) <= 32) {
            let i = t.length;
            if (o + i === r || e.charCodeAt(o + i) <= 32) return o
        }
        n = o + 1
    }
}
var pl = "ng-template";

function Th(e, t, n, r) {
    let o = 0;
    if (r) {
        for (; o < t.length && typeof t[o] == "string"; o += 2)
            if (t[o] === "class" && bh(t[o + 1].toLowerCase(), n, 0) !== -1) return !0
    } else if (Vs(e)) return !1;
    if (o = t.indexOf(1, o), o > -1) {
        let i;
        for (; ++o < t.length && typeof(i = t[o]) == "string";)
            if (i.toLowerCase() === n) return !0
    }
    return !1
}

function Vs(e) {
    return e.type === 4 && e.value !== pl
}

function Mh(e, t, n) {
    let r = e.type === 4 && !n ? pl : e.value;
    return t === r
}

function Sh(e, t, n) {
    let r = 4,
        o = e.attrs,
        i = o !== null ? Ah(o) : 0,
        s = !1;
    for (let a = 0; a < t.length; a++) {
        let c = t[a];
        if (typeof c == "number") {
            if (!s && !de(r) && !de(c)) return !1;
            if (s && de(c)) continue;
            s = !1, r = c | r & 1;
            continue
        }
        if (!s)
            if (r & 4) {
                if (r = 2 | r & 1, c !== "" && !Mh(e, c, n) || c === "" && t.length === 1) {
                    if (de(r)) return !1;
                    s = !0
                }
            } else if (r & 8) {
            if (o === null || !Th(e, o, c, n)) {
                if (de(r)) return !1;
                s = !0
            }
        } else {
            let u = t[++a],
                l = Nh(c, o, Vs(e), n);
            if (l === -1) {
                if (de(r)) return !1;
                s = !0;
                continue
            }
            if (u !== "") {
                let d;
                if (l > i ? d = "" : d = o[l + 1].toLowerCase(), r & 2 && u !== d) {
                    if (de(r)) return !1;
                    s = !0
                }
            }
        }
    }
    return de(r) || s
}

function de(e) {
    return (e & 1) === 0
}

function Nh(e, t, n, r) {
    if (t === null) return -1;
    let o = 0;
    if (r || !n) {
        let i = !1;
        for (; o < t.length;) {
            let s = t[o];
            if (s === e) return o;
            if (s === 3 || s === 6) i = !0;
            else if (s === 1 || s === 2) {
                let a = t[++o];
                for (; typeof a == "string";) a = t[++o];
                continue
            } else {
                if (s === 4) break;
                if (s === 0) {
                    o += 4;
                    continue
                }
            }
            o += i ? 1 : 2
        }
        return -1
    } else return Rh(t, e)
}

function xh(e, t, n = !1) {
    for (let r = 0; r < t.length; r++)
        if (Sh(e, t[r], n)) return !0;
    return !1
}

function Ah(e) {
    for (let t = 0; t < e.length; t++) {
        let n = e[t];
        if (Op(n)) return t
    }
    return e.length
}

function Rh(e, t) {
    let n = e.indexOf(4);
    if (n > -1)
        for (n++; n < e.length;) {
            let r = e[n];
            if (typeof r == "number") return -1;
            if (r === t) return n;
            n++
        }
    return -1
}

function uu(e, t) {
    return e ? ":not(" + t.trim() + ")" : t
}

function Oh(e) {
    let t = e[0],
        n = 1,
        r = 2,
        o = "",
        i = !1;
    for (; n < e.length;) {
        let s = e[n];
        if (typeof s == "string")
            if (r & 2) {
                let a = e[++n];
                o += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]"
            } else r & 8 ? o += "." + s : r & 4 && (o += " " + s);
        else o !== "" && !de(s) && (t += uu(i, o), o = ""), r = s, i = i || !de(r);
        n++
    }
    return o !== "" && (t += uu(i, o)), t
}

function Fh(e) {
    return e.map(Oh).join(",")
}

function kh(e) {
    let t = [],
        n = [],
        r = 1,
        o = 2;
    for (; r < e.length;) {
        let i = e[r];
        if (typeof i == "string") o === 2 ? i !== "" && t.push(i, e[++r]) : o === 8 && n.push(i);
        else {
            if (!de(o)) break;
            o = i
        }
        r++
    }
    return n.length && t.push(1, ...n), t
}
var se = {};

function Ph(e, t) {
    return e.createText(t)
}

function Lh(e, t, n) {
    e.setValue(t, n)
}

function hl(e, t, n) {
    return e.createElement(t, n)
}

function Xr(e, t, n, r, o) {
    e.insertBefore(t, n, r, o)
}

function gl(e, t, n) {
    e.appendChild(t, n)
}

function lu(e, t, n, r, o) {
    r !== null ? Xr(e, t, n, r, o) : gl(e, t, n)
}

function ml(e, t, n) {
    e.removeChild(null, t, n)
}

function jh(e, t, n) {
    e.setAttribute(t, "style", n)
}

function Vh(e, t, n) {
    n === "" ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n)
}

function yl(e, t, n) {
    let {
        mergedAttrs: r,
        classes: o,
        styles: i
    } = n;
    r !== null && Rp(e, t, r), o !== null && Vh(e, t, o), i !== null && jh(e, t, i)
}

function Bs(e, t, n, r, o, i, s, a, c, u, l) {
    let d = H + r,
        p = d + o,
        f = Bh(d, p),
        h = typeof u == "function" ? u() : u;
    return f[g] = {
        type: e,
        blueprint: f,
        template: n,
        queries: null,
        viewQuery: a,
        declTNode: t,
        data: f.slice().fill(null, d),
        bindingStartIndex: d,
        expandoStartIndex: p,
        hostBindingOpCodes: null,
        firstCreatePass: !0,
        firstUpdatePass: !0,
        staticViewQueries: !1,
        staticContentQueries: !1,
        preOrderHooks: null,
        preOrderCheckHooks: null,
        contentHooks: null,
        contentCheckHooks: null,
        viewHooks: null,
        viewCheckHooks: null,
        destroyHooks: null,
        cleanup: null,
        contentQueries: null,
        components: null,
        directiveRegistry: typeof i == "function" ? i() : i,
        pipeRegistry: typeof s == "function" ? s() : s,
        firstChild: null,
        schemas: c,
        consts: h,
        incompleteFirstPass: !1,
        ssrId: l
    }
}

function Bh(e, t) {
    let n = [];
    for (let r = 0; r < t; r++) n.push(r < e ? null : se);
    return n
}

function Hh(e) {
    let t = e.tView;
    return t === null || t.incompleteFirstPass ? e.tView = Bs(1, null, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts, e.id) : t
}

function Hs(e, t, n, r, o, i, s, a, c, u, l) {
    let d = t.blueprint.slice();
    return d[ce] = o, d[v] = r | 4 | 128 | 8 | 64 | 1024, (u !== null || e && e[v] & 2048) && (d[v] |= 2048), Mi(d), d[j] = d[tt] = e, d[F] = n, d[pe] = s || e && e[pe], d[R] = a || e && e[R], d[et] = c || e && e[et] || null, d[re] = i, d[rn] = qp(), d[bt] = l, d[Ci] = u, d[X] = t.type == 2 ? e[X] : d, d
}

function $h(e, t, n) {
    let r = le(t, e),
        o = Hh(n),
        i = e[pe].rendererFactory,
        s = $s(e, Hs(e, o, null, Dl(n), r, t, null, i.createRenderer(r, n), null, null, null));
    return e[t.index] = s
}

function Dl(e) {
    let t = 16;
    return e.signals ? t = 4096 : e.onPush && (t = 64), t
}

function vl(e, t, n, r) {
    if (n === 0) return -1;
    let o = t.length;
    for (let i = 0; i < n; i++) t.push(r), e.blueprint.push(r), e.data.push(null);
    return o
}

function $s(e, t) {
    return e[Mt] ? e[Ii][ne] = t : e[Mt] = t, e[Ii] = t, t
}

function Uh(e = 1) {
    El(G(), b(), Ie() + e, !1)
}

function El(e, t, n, r) {
    if (!r)
        if ((t[v] & 3) === 3) {
            let i = e.preOrderCheckHooks;
            i !== null && Ur(t, i, n)
        } else {
            let i = e.preOrderHooks;
            i !== null && Gr(t, i, 0, n)
        } Pe(n)
}
var mo = function(e) {
    return e[e.None = 0] = "None", e[e.SignalBased = 1] = "SignalBased", e[e.HasDecoratorInputTransform = 2] = "HasDecoratorInputTransform", e
}(mo || {});

function fs(e, t, n, r) {
    let o = m(null);
    try {
        let [i, s, a] = e.inputs[n], c = null;
        (s & mo.SignalBased) !== 0 && (c = t[i][U]), c !== null && c.transformFn !== void 0 ? r = c.transformFn(r) : a !== null && (r = a.call(t, r)), e.setInput !== null ? e.setInput(t, c, r, n, i) : xu(t, c, i, r)
    } finally {
        m(o)
    }
}
var eo = function(e) {
        return e[e.Important = 1] = "Important", e[e.DashCase = 2] = "DashCase", e
    }(eo || {}),
    Gh;

function Us(e, t) {
    return Gh(e, t)
}

function At(e, t, n, r, o) {
    if (r != null) {
        let i, s = !1;
        ue(r) ? i = r : he(r) && (s = !0, r = r[ce]);
        let a = oe(r);
        e === 0 && n !== null ? o == null ? gl(t, n, a) : Xr(t, n, a, o || null, !0) : e === 1 && n !== null ? Xr(t, n, a, o || null, !0) : e === 2 ? ml(t, a, s) : e === 3 && t.destroyNode(a), i != null && ng(t, e, i, n, o)
    }
}

function zh(e, t) {
    Il(e, t), t[ce] = null, t[re] = null
}

function Wh(e, t, n, r, o, i) {
    r[ce] = o, r[re] = t, Do(e, r, n, 1, o, i)
}

function Il(e, t) {
    t[pe].changeDetectionScheduler?.notify(9), Do(e, t, t[R], 2, null, null)
}

function qh(e) {
    let t = e[Mt];
    if (!t) return Yi(e[g], e);
    for (; t;) {
        let n = null;
        if (he(t)) n = t[Mt];
        else {
            let r = t[$];
            r && (n = r)
        }
        if (!n) {
            for (; t && !t[ne] && t !== e;) he(t) && Yi(t[g], t), t = t[j];
            t === null && (t = e), he(t) && Yi(t[g], t), n = t && t[ne]
        }
        t = n
    }
}

function Gs(e, t) {
    let n = e[an],
        r = n.indexOf(t);
    n.splice(r, 1)
}

function yo(e, t) {
    if (it(t)) return;
    let n = t[R];
    n.destroyNode && Do(e, t, n, 3, null, null), qh(t)
}

function Yi(e, t) {
    if (it(t)) return;
    let n = m(null);
    try {
        t[v] &= -129, t[v] |= 256, t[ee] && Vn(t[ee]), Yh(e, t), Zh(e, t), t[g].type === 1 && t[R].destroy();
        let r = t[nt];
        if (r !== null && ue(t[j])) {
            r !== t[j] && Gs(r, t);
            let o = t[ot];
            o !== null && o.detachView(e)
        }
        ss(t)
    } finally {
        m(n)
    }
}

function Zh(e, t) {
    let n = e.cleanup,
        r = t[Tt];
    if (n !== null)
        for (let s = 0; s < n.length - 1; s += 2)
            if (typeof n[s] == "string") {
                let a = n[s + 3];
                a >= 0 ? r[a]() : r[-a].unsubscribe(), s += 2
            } else {
                let a = r[n[s + 1]];
                n[s].call(a)
            } r !== null && (t[Tt] = null);
    let o = t[ve];
    if (o !== null) {
        t[ve] = null;
        for (let s = 0; s < o.length; s++) {
            let a = o[s];
            a()
        }
    }
    let i = t[on];
    if (i !== null) {
        t[on] = null;
        for (let s of i) s.destroy()
    }
}

function Yh(e, t) {
    let n;
    if (e != null && (n = e.destroyHooks) != null)
        for (let r = 0; r < n.length; r += 2) {
            let o = t[n[r]];
            if (!(o instanceof ut)) {
                let i = n[r + 1];
                if (Array.isArray(i))
                    for (let s = 0; s < i.length; s += 2) {
                        let a = o[i[s]],
                            c = i[s + 1];
                        A(4, a, c);
                        try {
                            c.call(a)
                        } finally {
                            A(5, a, c)
                        }
                    } else {
                        A(4, o, i);
                        try {
                            i.call(o)
                        } finally {
                            A(5, o, i)
                        }
                    }
            }
        }
}

function Qh(e, t, n) {
    return Kh(e, t.parent, n)
}

function Kh(e, t, n) {
    let r = t;
    for (; r !== null && r.type & 168;) t = r, r = t.parent;
    if (r === null) return n[ce];
    if (ke(r)) {
        let {
            encapsulation: o
        } = e.data[r.directiveStart + r.componentOffset];
        if (o === kt.None || o === kt.Emulated) return null
    }
    return le(r, n)
}

function Jh(e, t, n) {
    return eg(e, t, n)
}

function Xh(e, t, n) {
    return e.type & 40 ? le(e, n) : null
}
var eg = Xh,
    du;

function zs(e, t, n, r) {
    let o = Qh(e, r, t),
        i = t[R],
        s = r.parent || t[re],
        a = Jh(s, r, t);
    if (o != null)
        if (Array.isArray(n))
            for (let c = 0; c < n.length; c++) lu(i, o, n[c], a, !1);
        else lu(i, o, n, a, !1);
    du !== void 0 && du(i, r, t, n, o)
}

function gn(e, t) {
    if (t !== null) {
        let n = t.type;
        if (n & 3) return le(t, e);
        if (n & 4) return ps(-1, e[t.index]);
        if (n & 8) {
            let r = t.child;
            if (r !== null) return gn(e, r);
            {
                let o = e[t.index];
                return ue(o) ? ps(-1, o) : oe(o)
            }
        } else {
            if (n & 128) return gn(e, t.next);
            if (n & 32) return Us(t, e)() || oe(e[t.index]);
            {
                let r = Cl(e, t);
                if (r !== null) {
                    if (Array.isArray(r)) return r[0];
                    let o = Se(e[X]);
                    return gn(o, r)
                } else return gn(e, t.next)
            }
        }
    }
    return null
}

function Cl(e, t) {
    if (t !== null) {
        let r = e[X][re],
            o = t.projection;
        return r.projection[o]
    }
    return null
}

function ps(e, t) {
    let n = $ + e + 1;
    if (n < t.length) {
        let r = t[n],
            o = r[g].firstChild;
        if (o !== null) return gn(r, o)
    }
    return t[Fe]
}

function Ws(e, t, n, r, o, i, s) {
    for (; n != null;) {
        if (n.type === 128) {
            n = n.next;
            continue
        }
        let a = r[n.index],
            c = n.type;
        if (s && t === 0 && (a && Ft(oe(a), r), n.flags |= 2), !Ps(n))
            if (c & 8) Ws(e, t, n.child, r, o, i, !1), At(t, e, o, a, i);
            else if (c & 32) {
            let u = Us(n, r),
                l;
            for (; l = u();) At(t, e, o, l, i);
            At(t, e, o, a, i)
        } else c & 16 ? tg(e, t, r, n, o, i) : At(t, e, o, a, i);
        n = s ? n.projectionNext : n.next
    }
}

function Do(e, t, n, r, o, i) {
    Ws(n, r, e.firstChild, t, o, i, !1)
}

function tg(e, t, n, r, o, i) {
    let s = n[X],
        c = s[re].projection[r.projection];
    if (Array.isArray(c))
        for (let u = 0; u < c.length; u++) {
            let l = c[u];
            At(t, e, o, l, i)
        } else {
            let u = c,
                l = s[j];
            zu(r) && (u.flags |= 128), Ws(e, t, u, l, o, i, !0)
        }
}

function ng(e, t, n, r, o) {
    let i = n[Fe],
        s = oe(n);
    i !== s && At(t, e, r, i, o);
    for (let a = $; a < n.length; a++) {
        let c = n[a];
        Do(c[g], c, e, t, r, i)
    }
}

function rg(e, t, n, r, o) {
    if (t) o ? e.addClass(n, r) : e.removeClass(n, r);
    else {
        let i = r.indexOf("-") === -1 ? void 0 : eo.DashCase;
        o == null ? e.removeStyle(n, r, i) : (typeof o == "string" && o.endsWith("!important") && (o = o.slice(0, -10), i |= eo.Important), e.setStyle(n, r, o, i))
    }
}

function wl(e, t, n, r, o) {
    let i = Ie(),
        s = r & 2;
    try {
        Pe(-1), s && t.length > H && El(e, t, H, !1), A(s ? 2 : 0, o, n), n(r, o)
    } finally {
        Pe(i), A(s ? 3 : 1, o, n)
    }
}

function _l(e, t, n) {
    lg(e, t, n), (n.flags & 64) === 64 && dg(e, t, n)
}

function qs(e, t, n = le) {
    let r = t.localNames;
    if (r !== null) {
        let o = t.index + 1;
        for (let i = 0; i < r.length; i += 2) {
            let s = r[i + 1],
                a = s === -1 ? n(t, e) : e[s];
            e[o++] = a
        }
    }
}

function og(e, t, n, r) {
    let i = r.get(el, Xu) || n === kt.ShadowDom,
        s = e.selectRootElement(t, i);
    return ig(s), s
}

function ig(e) {
    sg(e)
}
var sg = () => null;

function ag(e) {
    return e === "class" ? "className" : e === "for" ? "htmlFor" : e === "formaction" ? "formAction" : e === "innerHtml" ? "innerHTML" : e === "readonly" ? "readOnly" : e === "tabindex" ? "tabIndex" : e
}

function bl(e, t, n, r, o, i) {
    let s = t[g];
    if (Zs(e, s, t, n, r)) {
        ke(e) && ug(t, e.index);
        return
    }
    e.type & 3 && (n = ag(n)), cg(e, t, n, r, o, i)
}

function cg(e, t, n, r, o, i) {
    if (e.type & 3) {
        let s = le(e, t);
        r = i != null ? i(r, e.value || "", n) : r, o.setProperty(s, n, r)
    } else e.type & 12
}

function ug(e, t) {
    let n = ie(t, e);
    n[v] & 16 || (n[v] |= 64)
}

function lg(e, t, n) {
    let r = n.directiveStart,
        o = n.directiveEnd;
    ke(n) && $h(t, n, e.data[r + n.componentOffset]), e.firstCreatePass || Qr(n, t);
    let i = n.initialInputs;
    for (let s = r; s < o; s++) {
        let a = e.data[s],
            c = Kr(t, e, s, n);
        if (Ft(c, t), i !== null && mg(t, s - r, c, a, n, i), ge(a)) {
            let u = ie(n.index, t);
            u[F] = Kr(t, e, s, n)
        }
    }
}

function dg(e, t, n) {
    let r = n.directiveStart,
        o = n.directiveEnd,
        i = n.index,
        s = jc();
    try {
        Pe(i);
        for (let a = r; a < o; a++) {
            let c = e.data[a],
                u = t[a];
            Rr(a), (c.hostBindings !== null || c.hostVars !== 0 || c.hostAttrs !== null) && fg(c, u)
        }
    } finally {
        Pe(-1), Rr(s)
    }
}

function fg(e, t) {
    e.hostBindings !== null && e.hostBindings(1, t)
}

function pg(e, t) {
    let n = e.directiveRegistry,
        r = null;
    if (n)
        for (let o = 0; o < n.length; o++) {
            let i = n[o];
            xh(t, i.selectors, !1) && (r ??= [], ge(i) ? r.unshift(i) : r.push(i))
        }
    return r
}

function hg(e, t, n, r, o, i) {
    let s = le(e, t);
    gg(t[R], s, i, e.value, n, r, o)
}

function gg(e, t, n, r, o, i, s) {
    if (i == null) e.removeAttribute(t, o, n);
    else {
        let a = s == null ? xe(i) : s(i, r || "", o);
        e.setAttribute(t, o, a, n)
    }
}

function mg(e, t, n, r, o, i) {
    let s = i[t];
    if (s !== null)
        for (let a = 0; a < s.length; a += 2) {
            let c = s[a],
                u = s[a + 1];
            fs(r, n, c, u)
        }
}

function Tl(e, t, n, r, o) {
    let i = H + n,
        s = t[g],
        a = o(s, t, e, r, n);
    t[i] = a, Nt(e, !0);
    let c = e.type === 2;
    return c ? (yl(t[R], a, e), (bc() === 0 || Nr(e)) && Ft(a, t), Tc()) : Ft(a, t), Pr() && (!c || !Ps(e)) && zs(s, t, a, e), e
}

function Ml(e) {
    let t = e;
    return Fi() ? Rc() : (t = t.parent, Nt(t, !1)), t
}

function yg(e, t) {
    let n = e[et];
    if (!n) return;
    n.get(Ce, null)?.(t)
}

function Zs(e, t, n, r, o) {
    let i = e.inputs?.[r],
        s = e.hostDirectiveInputs?.[r],
        a = !1;
    if (s)
        for (let c = 0; c < s.length; c += 2) {
            let u = s[c],
                l = s[c + 1],
                d = t.data[u];
            fs(d, n[u], l, o), a = !0
        }
    if (i)
        for (let c of i) {
            let u = n[c],
                l = t.data[c];
            fs(l, u, r, o), a = !0
        }
    return a
}

function Dg(e, t) {
    let n = ie(t, e),
        r = n[g];
    vg(r, n);
    let o = n[ce];
    o !== null && n[bt] === null && (n[bt] = tl(o, n[et])), A(18), Ys(r, n, n[F]), A(19, n[F])
}

function vg(e, t) {
    for (let n = t.length; n < e.blueprint.length; n++) t.push(e.blueprint[n])
}

function Ys(e, t, n) {
    Or(t);
    try {
        let r = e.viewQuery;
        r !== null && cs(1, r, n);
        let o = e.template;
        o !== null && wl(e, t, o, 1, n), e.firstCreatePass && (e.firstCreatePass = !1), t[ot]?.finishViewCreation(e), e.staticContentQueries && nl(e, t), e.staticViewQueries && cs(2, e.viewQuery, n);
        let i = e.components;
        i !== null && Eg(t, i)
    } catch (r) {
        throw e.firstCreatePass && (e.incompleteFirstPass = !0, e.firstCreatePass = !1), r
    } finally {
        t[v] &= -5, Fr()
    }
}

function Eg(e, t) {
    for (let n = 0; n < t.length; n++) Dg(e, t[n])
}

function Qs(e, t, n, r) {
    let o = m(null);
    try {
        let i = t.tView,
            a = e[v] & 4096 ? 4096 : 16,
            c = Hs(e, i, n, a, null, t, null, null, r?.injector ?? null, r?.embeddedViewInjector ?? null, r?.dehydratedView ?? null),
            u = e[t.index];
        c[nt] = u;
        let l = e[ot];
        return l !== null && (c[ot] = l.createEmbeddedView(i)), Ys(i, c, n), c
    } finally {
        m(o)
    }
}

function yn(e, t) {
    return !t || t.firstChild === null || zu(e)
}
var fu = !1,
    Ig = new S("");

function Dn(e, t, n, r, o = !1) {
    for (; n !== null;) {
        if (n.type === 128) {
            n = o ? n.projectionNext : n.next;
            continue
        }
        let i = t[n.index];
        i !== null && r.push(oe(i)), ue(i) && Sl(i, r);
        let s = n.type;
        if (s & 8) Dn(e, t, n.child, r);
        else if (s & 32) {
            let a = Us(n, t),
                c;
            for (; c = a();) r.push(c)
        } else if (s & 16) {
            let a = Cl(t, n);
            if (Array.isArray(a)) r.push(...a);
            else {
                let c = Se(t[X]);
                Dn(c[g], c, a, r, !0)
            }
        }
        n = o ? n.projectionNext : n.next
    }
    return r
}

function Sl(e, t) {
    for (let n = $; n < e.length; n++) {
        let r = e[n],
            o = r[g].firstChild;
        o !== null && Dn(r[g], r, o, t)
    }
    e[Fe] !== e[ce] && t.push(e[Fe])
}

function Nl(e) {
    if (e[Sr] !== null) {
        for (let t of e[Sr]) t.impl.addSequence(t);
        e[Sr].length = 0
    }
}
var xl = [];

function Cg(e) {
    return e[ee] ?? wg(e)
}

function wg(e) {
    let t = xl.pop() ?? Object.create(bg);
    return t.lView = e, t
}

function _g(e) {
    e.lView[ee] !== e && (e.lView = null, xl.push(e))
}
var bg = q(W({}, je), {
    consumerIsAlwaysLive: !0,
    kind: "template",
    consumerMarkedDirty: e => {
        ln(e.lView)
    },
    consumerOnSignalRead() {
        this.lView[ee] = this
    }
});

function Tg(e) {
    let t = e[ee] ?? Object.create(Mg);
    return t.lView = e, t
}
var Mg = q(W({}, je), {
    consumerIsAlwaysLive: !0,
    kind: "template",
    consumerMarkedDirty: e => {
        let t = Se(e.lView);
        for (; t && !Al(t[g]);) t = Se(t);
        t && Si(t)
    },
    consumerOnSignalRead() {
        this.lView[ee] = this
    }
});

function Al(e) {
    return e.type !== 2
}

function Rl(e) {
    if (e[on] === null) return;
    let t = !0;
    for (; t;) {
        let n = !1;
        for (let r of e[on]) r.dirty && (n = !0, r.zone === null || Zone.current === r.zone ? r.run() : r.zone.run(() => r.run()));
        t = n && !!(e[v] & 8192)
    }
}
var Sg = 100;

function Ks(e, t = 0) {
    let r = e[pe].rendererFactory,
        o = !1;
    o || r.begin?.();
    try {
        Ng(e, t)
    } finally {
        o || r.end?.()
    }
}

function Ng(e, t) {
    let n = Pi();
    try {
        Li(!0), hs(e, t);
        let r = 0;
        for (; un(e);) {
            if (r === Sg) throw new M(103, !1);
            r++, hs(e, 1)
        }
    } finally {
        Li(n)
    }
}

function Ol(e, t) {
    ki(t ? dn.Exhaustive : dn.OnlyDirtyViews);
    try {
        Ks(e)
    } finally {
        ki(dn.Off)
    }
}

function xg(e, t, n, r) {
    if (it(t)) return;
    let o = t[v],
        i = !1,
        s = !1;
    Or(t);
    let a = !0,
        c = null,
        u = null;
    i || (Al(e) ? (u = Cg(t), c = Ve(u)) : Ln() === null ? (a = !1, u = Tg(t), c = Ve(u)) : t[ee] && (Vn(t[ee]), t[ee] = null));
    try {
        Mi(t), kc(e.bindingStartIndex), n !== null && wl(e, t, n, 2, r);
        let l = (o & 3) === 3;
        if (!i)
            if (l) {
                let f = e.preOrderCheckHooks;
                f !== null && Ur(t, f, null)
            } else {
                let f = e.preOrderHooks;
                f !== null && Gr(t, f, 0, null), qi(t, 0)
            } if (s || Ag(t), Rl(t), Fl(t, 0), e.contentQueries !== null && nl(e, t), !i)
            if (l) {
                let f = e.contentCheckHooks;
                f !== null && Ur(t, f)
            } else {
                let f = e.contentHooks;
                f !== null && Gr(t, f, 1), qi(t, 1)
            } Og(e, t);
        let d = e.components;
        d !== null && Pl(t, d, 0);
        let p = e.viewQuery;
        if (p !== null && cs(2, p, r), !i)
            if (l) {
                let f = e.viewCheckHooks;
                f !== null && Ur(t, f)
            } else {
                let f = e.viewHooks;
                f !== null && Gr(t, f, 2), qi(t, 2)
            } if (e.firstUpdatePass === !0 && (e.firstUpdatePass = !1), t[Mr]) {
            for (let f of t[Mr]) f();
            t[Mr] = null
        }
        i || (Nl(t), t[v] &= -73)
    } catch (l) {
        throw i || ln(t), l
    } finally {
        u !== null && (gt(u, c), a && _g(u)), Fr()
    }
}

function Fl(e, t) {
    for (let n = qu(e); n !== null; n = Zu(n))
        for (let r = $; r < n.length; r++) {
            let o = n[r];
            kl(o, t)
        }
}

function Ag(e) {
    for (let t = qu(e); t !== null; t = Zu(t)) {
        if (!(t[v] & 2)) continue;
        let n = t[an];
        for (let r = 0; r < n.length; r++) {
            let o = n[r];
            Si(o)
        }
    }
}

function Rg(e, t, n) {
    A(18);
    let r = ie(t, e);
    kl(r, n), A(19, r[F])
}

function kl(e, t) {
    xr(e) && hs(e, t)
}

function hs(e, t) {
    let r = e[g],
        o = e[v],
        i = e[ee],
        s = !!(t === 0 && o & 16);
    if (s ||= !!(o & 64 && t === 0), s ||= !!(o & 1024), s ||= !!(i?.dirty && $t(i)), s ||= !1, i && (i.dirty = !1), e[v] &= -9217, s) xg(r, e, r.template, e[F]);
    else if (o & 8192) {
        let a = m(null);
        try {
            Rl(e), Fl(e, 1);
            let c = r.components;
            c !== null && Pl(e, c, 1), Nl(e)
        } finally {
            m(a)
        }
    }
}

function Pl(e, t, n) {
    for (let r = 0; r < t.length; r++) Rg(e, t[r], n)
}

function Og(e, t) {
    let n = e.hostBindingOpCodes;
    if (n !== null) try {
        for (let r = 0; r < n.length; r++) {
            let o = n[r];
            if (o < 0) Pe(~o);
            else {
                let i = o,
                    s = n[++r],
                    a = n[++r];
                Lc(s, i);
                let c = t[i];
                A(24, c), a(2, c), A(25, c)
            }
        }
    } finally {
        Pe(-1)
    }
}

function Js(e, t) {
    let n = Pi() ? 64 : 1088;
    for (e[pe].changeDetectionScheduler?.notify(t); e;) {
        e[v] |= n;
        let r = Se(e);
        if (St(e) && !r) return e;
        e = r
    }
    return null
}

function Ll(e, t, n, r) {
    return [e, !0, 0, t, null, r, null, n, null, null]
}

function jl(e, t) {
    let n = $ + t;
    if (n < e.length) return e[n]
}

function vo(e, t, n, r = !0) {
    let o = t[g];
    if (Fg(o, t, e, n), r) {
        let s = ps(n, e),
            a = t[R],
            c = a.parentNode(e[Fe]);
        c !== null && Wh(o, e[re], a, t, c, s)
    }
    let i = t[bt];
    i !== null && i.firstChild !== null && (i.firstChild = null)
}

function Vl(e, t) {
    let n = vn(e, t);
    return n !== void 0 && yo(n[g], n), n
}

function vn(e, t) {
    if (e.length <= $) return;
    let n = $ + t,
        r = e[n];
    if (r) {
        let o = r[nt];
        o !== null && o !== e && Gs(o, r), t > 0 && (e[n - 1][ne] = r[ne]);
        let i = en(e, $ + t);
        zh(r[g], r);
        let s = i[ot];
        s !== null && s.detachView(i[g]), r[j] = null, r[ne] = null, r[v] &= -129
    }
    return r
}

function Fg(e, t, n, r) {
    let o = $ + r,
        i = n.length;
    r > 0 && (n[o - 1][ne] = t), r < i - $ ? (t[ne] = n[o], fi(n, $ + r, t)) : (n.push(t), t[ne] = null), t[j] = n;
    let s = t[nt];
    s !== null && n !== s && Bl(s, t);
    let a = t[ot];
    a !== null && a.insertView(e), Ar(t), t[v] |= 128
}

function Bl(e, t) {
    let n = e[an],
        r = t[j];
    if (he(r)) e[v] |= 2;
    else {
        let o = r[j][X];
        t[X] !== o && (e[v] |= 2)
    }
    n === null ? e[an] = [t] : n.push(t)
}
var lt = class {
    _lView;
    _cdRefInjectingView;
    _appRef = null;
    _attachedToViewContainer = !1;
    exhaustive;
    get rootNodes() {
        let t = this._lView,
            n = t[g];
        return Dn(n, t, n.firstChild, [])
    }
    constructor(t, n) {
        this._lView = t, this._cdRefInjectingView = n
    }
    get context() {
        return this._lView[F]
    }
    set context(t) {
        this._lView[F] = t
    }
    get destroyed() {
        return it(this._lView)
    }
    destroy() {
        if (this._appRef) this._appRef.detachView(this);
        else if (this._attachedToViewContainer) {
            let t = this._lView[j];
            if (ue(t)) {
                let n = t[sn],
                    r = n ? n.indexOf(this) : -1;
                r > -1 && (vn(t, r), en(n, r))
            }
            this._attachedToViewContainer = !1
        }
        yo(this._lView[g], this._lView)
    }
    onDestroy(t) {
        Ni(this._lView, t)
    }
    markForCheck() {
        Js(this._cdRefInjectingView || this._lView, 4)
    }
    detach() {
        this._lView[v] &= -129
    }
    reattach() {
        Ar(this._lView), this._lView[v] |= 128
    }
    detectChanges() {
        this._lView[v] |= 1024, Ks(this._lView)
    }
    checkNoChanges() {
        //return;
        try {
            this.exhaustive ??= this._lView[et].get(Ig, fu)
        } catch {
            this.exhaustive = fu
        }
    }
    attachToViewContainerRef() {
        if (this._appRef) throw new M(902, !1);
        this._attachedToViewContainer = !0
    }
    detachFromAppRef() {
        this._appRef = null;
        let t = St(this._lView),
            n = this._lView[nt];
        n !== null && !t && Gs(n, this._lView), Il(this._lView[g], this._lView)
    }
    attachToAppRef(t) {
        if (this._attachedToViewContainer) throw new M(902, !1);
        this._appRef = t;
        let n = St(this._lView),
            r = this._lView[nt];
        r !== null && !n && Bl(r, this._lView), Ar(this._lView)
    }
};

function Eo(e, t, n, r, o) {
    let i = e.data[t];
    if (i === null) i = kg(e, t, n, r, o), Pc() && (i.flags |= 32);
    else if (i.type & 64) {
        i.type = n, i.value = r, i.attrs = o;
        let s = Ac();
        i.injectorIndex = s === null ? -1 : s.injectorIndex
    }
    return Nt(i, !0), i
}

function kg(e, t, n, r, o) {
    let i = Oi(),
        s = Fi(),
        a = s ? i : i && i.parent,
        c = e.data[t] = Lg(e, a, n, t, r, o);
    return Pg(e, c, i, s), c
}

function Pg(e, t, n, r) {
    e.firstChild === null && (e.firstChild = t), n !== null && (r ? n.child == null && t.parent !== null && (n.child = t) : n.next === null && (n.next = t, t.prev = n))
}

function Lg(e, t, n, r, o, i) {
    let s = t ? t.injectorIndex : -1,
        a = 0;
    return Sc() && (a |= 128), {
        type: n,
        index: r,
        insertBeforeIndex: null,
        injectorIndex: s,
        directiveStart: -1,
        directiveEnd: -1,
        directiveStylingLast: -1,
        componentOffset: -1,
        propertyBindings: null,
        flags: a,
        providerIndexes: 0,
        value: o,
        attrs: i,
        mergedAttrs: null,
        localNames: null,
        initialInputs: null,
        inputs: null,
        hostDirectiveInputs: null,
        outputs: null,
        hostDirectiveOutputs: null,
        directiveToIndex: null,
        tView: null,
        next: null,
        prev: null,
        projectionNext: null,
        child: null,
        parent: t,
        projection: null,
        styles: null,
        stylesWithoutHost: null,
        residualStyles: void 0,
        classes: null,
        classesWithoutHost: null,
        residualClasses: void 0,
        classBindings: 0,
        styleBindings: 0
    }
}
var Cb = new RegExp(`^(\\d+)*(${th}|${eh})*(.*)`);

function jg(e) {
    let t = e[wi] ?? [],
        r = e[j][R],
        o = [];
    for (let i of t) i.data[Ju] !== void 0 ? o.push(i) : Vg(i, r);
    e[wi] = o
}

function Vg(e, t) {
    let n = 0,
        r = e.firstChild;
    if (r) {
        let o = e.data[Ku];
        for (; n < o;) {
            let i = r.nextSibling;
            ml(t, r, !1), r = i, n++
        }
    }
}
var Bg = () => null,
    Hg = () => null;

function gs(e, t) {
    return Bg(e, t)
}

function Hl(e, t, n) {
    return Hg(e, t, n)
}
var $l = class {},
    Io = class {},
    ms = class {
        resolveComponentFactory(t) {
            throw new M(917, !1)
        }
    },
    Tn = class {
        static NULL = new ms
    },
    En = class {},
    Ul = (() => {
        class e {
            destroyNode = null;
            static __NG_ELEMENT_ID__ = () => $g()
        }
        return e
    })();

function $g() {
    let e = b(),
        t = z(),
        n = ie(t.index, e);
    return (he(n) ? n : e)[R]
}
var Gl = (() => {
    class e {
        static \u0275prov = O({
            token: e,
            providedIn: "root",
            factory: () => null
        })
    }
    return e
})();
var zr = {},
    ys = class {
        injector;
        parentInjector;
        constructor(t, n) {
            this.injector = t, this.parentInjector = n
        }
        get(t, n, r) {
            let o = this.injector.get(t, zr, r);
            return o !== zr || n === zr ? o : this.parentInjector.get(t, n, r)
        }
    };

function to(e, t, n) {
    let r = n ? e.styles : null,
        o = n ? e.classes : null,
        i = 0;
    if (t !== null)
        for (let s = 0; s < t.length; s++) {
            let a = t[s];
            if (typeof a == "number") i = a;
            else if (i == 1) o = ti(o, a);
            else if (i == 2) {
                let c = a,
                    u = t[++s];
                r = ti(r, c + ": " + u + ";")
            }
        }
    n ? e.styles = r : e.stylesWithoutHost = r, n ? e.classes = o : e.classesWithoutHost = o
}

function Mn(e, t = 0) {
    let n = b();
    if (n === null) return B(e, t);
    let r = z();
    return $u(r, n, V(e), t)
}

function Ug(e, t, n, r, o) {
    let i = r === null ? null : {
            "": -1
        },
        s = o(e, n);
    if (s !== null) {
        let a = s,
            c = null,
            u = null;
        for (let l of s)
            if (l.resolveHostDirectives !== null) {
                [a, c, u] = l.resolveHostDirectives(s);
                break
            } Wg(e, t, n, a, i, c, u)
    }
    i !== null && r !== null && Gg(n, r, i)
}

function Gg(e, t, n) {
    let r = e.localNames = [];
    for (let o = 0; o < t.length; o += 2) {
        let i = n[t[o + 1]];
        if (i == null) throw new M(-301, !1);
        r.push(t[o], i)
    }
}

function zg(e, t, n) {
    t.componentOffset = n, (e.components ??= []).push(t.index)
}

function Wg(e, t, n, r, o, i, s) {
    let a = r.length,
        c = !1;
    for (let p = 0; p < a; p++) {
        let f = r[p];
        !c && ge(f) && (c = !0, zg(e, n, p)), os(Qr(n, t), e, f.type)
    }
    Jg(n, e.data.length, a);
    for (let p = 0; p < a; p++) {
        let f = r[p];
        f.providersResolver && f.providersResolver(f)
    }
    let u = !1,
        l = !1,
        d = vl(e, t, a, null);
    a > 0 && (n.directiveToIndex = new Map);
    for (let p = 0; p < a; p++) {
        let f = r[p];
        if (n.mergedAttrs = Ot(n.mergedAttrs, f.hostAttrs), Zg(e, n, t, d, f), Kg(d, f, o), s !== null && s.has(f)) {
            let [E, x] = s.get(f);
            n.directiveToIndex.set(f.type, [d, E + n.directiveStart, x + n.directiveStart])
        } else(i === null || !i.has(f)) && n.directiveToIndex.set(f.type, d);
        f.contentQueries !== null && (n.flags |= 4), (f.hostBindings !== null || f.hostAttrs !== null || f.hostVars !== 0) && (n.flags |= 64);
        let h = f.type.prototype;
        !u && (h.ngOnChanges || h.ngOnInit || h.ngDoCheck) && ((e.preOrderHooks ??= []).push(n.index), u = !0), !l && (h.ngOnChanges || h.ngDoCheck) && ((e.preOrderCheckHooks ??= []).push(n.index), l = !0), d++
    }
    qg(e, n, i)
}

function qg(e, t, n) {
    for (let r = t.directiveStart; r < t.directiveEnd; r++) {
        let o = e.data[r];
        if (n === null || !n.has(o)) pu(0, t, o, r), pu(1, t, o, r), gu(t, r, !1);
        else {
            let i = n.get(o);
            hu(0, t, i, r), hu(1, t, i, r), gu(t, r, !0)
        }
    }
}

function pu(e, t, n, r) {
    let o = e === 0 ? n.inputs : n.outputs;
    for (let i in o)
        if (o.hasOwnProperty(i)) {
            let s;
            e === 0 ? s = t.inputs ??= {} : s = t.outputs ??= {}, s[i] ??= [], s[i].push(r), zl(t, i)
        }
}

function hu(e, t, n, r) {
    let o = e === 0 ? n.inputs : n.outputs;
    for (let i in o)
        if (o.hasOwnProperty(i)) {
            let s = o[i],
                a;
            e === 0 ? a = t.hostDirectiveInputs ??= {} : a = t.hostDirectiveOutputs ??= {}, a[s] ??= [], a[s].push(r, i), zl(t, s)
        }
}

function zl(e, t) {
    t === "class" ? e.flags |= 8 : t === "style" && (e.flags |= 16)
}

function gu(e, t, n) {
    let {
        attrs: r,
        inputs: o,
        hostDirectiveInputs: i
    } = e;
    if (r === null || !n && o === null || n && i === null || Vs(e)) {
        e.initialInputs ??= [], e.initialInputs.push(null);
        return
    }
    let s = null,
        a = 0;
    for (; a < r.length;) {
        let c = r[a];
        if (c === 0) {
            a += 4;
            continue
        } else if (c === 5) {
            a += 2;
            continue
        } else if (typeof c == "number") break;
        if (!n && o.hasOwnProperty(c)) {
            let u = o[c];
            for (let l of u)
                if (l === t) {
                    s ??= [], s.push(c, r[a + 1]);
                    break
                }
        } else if (n && i.hasOwnProperty(c)) {
            let u = i[c];
            for (let l = 0; l < u.length; l += 2)
                if (u[l] === t) {
                    s ??= [], s.push(u[l + 1], r[a + 1]);
                    break
                }
        }
        a += 2
    }
    e.initialInputs ??= [], e.initialInputs.push(s)
}

function Zg(e, t, n, r, o) {
    e.data[r] = o;
    let i = o.factory || (o.factory = Ze(o.type, !0)),
        s = new ut(i, ge(o), Mn, null);
    e.blueprint[r] = s, n[r] = s, Yg(e, t, r, vl(e, n, o.hostVars, se), o)
}

function Yg(e, t, n, r, o) {
    let i = o.hostBindings;
    if (i) {
        let s = e.hostBindingOpCodes;
        s === null && (s = e.hostBindingOpCodes = []);
        let a = ~t.index;
        Qg(s) != a && s.push(a), s.push(n, r, i)
    }
}

function Qg(e) {
    let t = e.length;
    for (; t > 0;) {
        let n = e[--t];
        if (typeof n == "number" && n < 0) return n
    }
    return 0
}

function Kg(e, t, n) {
    if (n) {
        if (t.exportAs)
            for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
        ge(t) && (n[""] = e)
    }
}

function Jg(e, t, n) {
    e.flags |= 1, e.directiveStart = t, e.directiveEnd = t + n, e.providerIndexes = t
}

function Wl(e, t, n, r, o, i, s, a) {
    let c = t[g],
        u = c.consts,
        l = me(u, s),
        d = Eo(c, e, n, r, l);
    return i && Ug(c, t, d, me(u, a), o), d.mergedAttrs = Ot(d.mergedAttrs, d.attrs), d.attrs !== null && to(d, d.attrs, !1), d.mergedAttrs !== null && to(d, d.mergedAttrs, !0), c.queries !== null && c.queries.elementStart(c, d), d
}

function ql(e, t) {
    Sp(e, t), _i(t) && e.queries.elementEnd(t)
}

function Xg(e, t, n, r, o, i) {
    let s = t.consts,
        a = me(s, o),
        c = Eo(t, e, n, r, a);
    if (c.mergedAttrs = Ot(c.mergedAttrs, c.attrs), i != null) {
        let u = me(s, i);
        c.localNames = [];
        for (let l = 0; l < u.length; l += 2) c.localNames.push(u[l], -1)
    }
    return c.attrs !== null && to(c, c.attrs, !1), c.mergedAttrs !== null && to(c, c.mergedAttrs, !0), t.queries !== null && t.queries.elementStart(t, c), c
}

function em(e, t, n) {
    return e[t] = n
}

function tm(e, t) {
    return e[t]
}

function _e(e, t, n) {
    if (n === se) return !1;
    let r = e[t];
    return Object.is(r, n) ? !1 : (e[t] = n, !0)
}

function nm(e, t, n, r) {
    let o = _e(e, t, n);
    return _e(e, t + 1, r) || o
}

function Wr(e, t, n) {
    return function r(o) {
        let i = ke(e) ? ie(e.index, t) : t;
        Js(i, 5);
        let s = t[F],
            a = mu(t, s, n, o),
            c = r.__ngNextListenerFn__;
        for (; c;) a = mu(t, s, c, o) && a, c = c.__ngNextListenerFn__;
        return a
    }
}

function mu(e, t, n, r) {
    let o = m(null);
    try {
        return A(6, t, n), n(r) !== !1
    } catch (i) {
        return yg(e, i), !1
    } finally {
        A(7, t, n), m(o)
    }
}

function Zl(e, t, n, r, o, i, s, a) {
    let c = Nr(e),
        u = !1,
        l = null;
    if (!r && c && (l = rm(t, n, i, e.index)), l !== null) {
        let d = l.__ngLastListenerFn__ || l;
        d.__ngNextListenerFn__ = s, l.__ngLastListenerFn__ = s, u = !0
    } else {
        let d = le(e, n),
            p = r ? r(d) : d;
        rh(n, p, i, a);
        let f = o.listen(p, i, a),
            h = r ? E => r(oe(E[e.index])) : e.index;
        Yl(h, t, n, i, a, f, !1)
    }
    return u
}

function rm(e, t, n, r) {
    let o = e.cleanup;
    if (o != null)
        for (let i = 0; i < o.length - 1; i += 2) {
            let s = o[i];
            if (s === n && o[i + 1] === r) {
                let a = t[Tt],
                    c = o[i + 2];
                return a && a.length > c ? a[c] : null
            }
            typeof s == "string" && (i += 2)
        }
    return null
}

function Yl(e, t, n, r, o, i, s) {
    let a = t.firstCreatePass ? _c(t) : null,
        c = wc(n),
        u = c.length;
    c.push(o, i), a && a.push(r, e, u, (u + 1) * (s ? -1 : 1))
}

function yu(e, t, n, r, o, i) {
    let s = t[n],
        a = t[g],
        u = a.data[n].outputs[r],
        d = s[u].subscribe(i);
    Yl(e.index, a, t, o, i, d, !0)
}
var Ds = Symbol("BINDING");
var no = class extends Tn {
    ngModule;
    constructor(t) {
        super(), this.ngModule = t
    }
    resolveComponentFactory(t) {
        let n = Oe(t);
        return new Pt(n, this.ngModule)
    }
};

function om(e) {
    return Object.keys(e).map(t => {
        let [n, r, o] = e[t], i = {
            propName: n,
            templateName: t,
            isSignal: (r & mo.SignalBased) !== 0
        };
        return o && (i.transform = o), i
    })
}

function im(e) {
    return Object.keys(e).map(t => ({
        propName: e[t],
        templateName: t
    }))
}

function sm(e, t, n) {
    let r = t instanceof te ? t : t?.injector;
    return r && e.getStandaloneInjector !== null && (r = e.getStandaloneInjector(r) || r), r ? new ys(n, r) : n
}

function am(e) {
    let t = e.get(En, null);
    if (t === null) throw new M(407, !1);
    let n = e.get(Gl, null),
        r = e.get(Ne, null);
    return {
        rendererFactory: t,
        sanitizer: n,
        changeDetectionScheduler: r,
        ngReflect: !1
    }
}

function cm(e, t) {
    let n = (e.selectors[0][0] || "div").toLowerCase();
    return hl(t, n, n === "svg" ? bi : n === "math" ? vc : null)
}
var Pt = class extends Io {
    componentDef;
    ngModule;
    selector;
    componentType;
    ngContentSelectors;
    isBoundToModule;
    cachedInputs = null;
    cachedOutputs = null;
    get inputs() {
        return this.cachedInputs ??= om(this.componentDef.inputs), this.cachedInputs
    }
    get outputs() {
        return this.cachedOutputs ??= im(this.componentDef.outputs), this.cachedOutputs
    }
    constructor(t, n) {
        super(), this.componentDef = t, this.ngModule = n, this.componentType = t.type, this.selector = Fh(t.selectors), this.ngContentSelectors = t.ngContentSelectors ?? [], this.isBoundToModule = !!n
    }
    create(t, n, r, o, i, s) {
        A(22);
        let a = m(null);
        try {
            let c = this.componentDef,
                u = um(r, c, s, i),
                l = sm(c, o || this.ngModule, t),
                d = am(l),
                p = d.rendererFactory.createRenderer(null, c),
                f = r ? og(p, r, c.encapsulation, l) : cm(c, p),
                h = s?.some(Du) || i?.some(C => typeof C != "function" && C.bindings.some(Du)),
                E = Hs(null, u, null, 512 | Dl(c), null, null, d, p, l, null, tl(f, l, !0));
            E[H] = f, Or(E);
            let x = null;
            try {
                let C = Wl(H, E, 2, "#host", () => u.directiveRegistry, !0, 0);
                f && (yl(p, f, C), Ft(f, E)), _l(u, E, C), rl(u, C, E), ql(u, C), n !== void 0 && dm(C, this.ngContentSelectors, n), x = ie(C.index, E), E[F] = x[F], Ys(u, E, null)
            } catch (C) {
                throw x !== null && ss(x), ss(E), C
            } finally {
                A(23), Fr()
            }
            return new ro(this.componentType, E, !!h)
        } finally {
            m(a)
        }
    }
};

function um(e, t, n, r) {
    let o = e ? ["ng-version", "20.1.3"] : kh(t.selectors[0]),
        i = null,
        s = null,
        a = 0;
    if (n)
        for (let l of n) a += l[Ds].requiredVars, l.create && (l.targetIdx = 0, (i ??= []).push(l)), l.update && (l.targetIdx = 0, (s ??= []).push(l));
    if (r)
        for (let l = 0; l < r.length; l++) {
            let d = r[l];
            if (typeof d != "function")
                for (let p of d.bindings) {
                    a += p[Ds].requiredVars;
                    let f = l + 1;
                    p.create && (p.targetIdx = f, (i ??= []).push(p)), p.update && (p.targetIdx = f, (s ??= []).push(p))
                }
        }
    let c = [t];
    if (r)
        for (let l of r) {
            let d = typeof l == "function" ? l : l.type,
                p = mi(d);
            c.push(p)
        }
    return Bs(0, null, lm(i, s), 1, a, c, null, null, null, [o], null)
}

function lm(e, t) {
    return !e && !t ? null : n => {
        if (n & 1 && e)
            for (let r of e) r.create();
        if (n & 2 && t)
            for (let r of t) r.update()
    }
}

function Du(e) {
    let t = e[Ds].kind;
    return t === "input" || t === "twoWay"
}
var ro = class extends $l {
    _rootLView;
    _hasInputBindings;
    instance;
    hostView;
    changeDetectorRef;
    componentType;
    location;
    previousInputValues = null;
    _tNode;
    constructor(t, n, r) {
        super(), this._rootLView = n, this._hasInputBindings = r, this._tNode = cn(n[g], H), this.location = Rs(this._tNode, n), this.instance = ie(this._tNode.index, n)[F], this.hostView = this.changeDetectorRef = new lt(n, void 0), this.componentType = t
    }
    setInput(t, n) {
        this._hasInputBindings;
        let r = this._tNode;
        if (this.previousInputValues ??= new Map, this.previousInputValues.has(t) && Object.is(this.previousInputValues.get(t), n)) return;
        let o = this._rootLView,
            i = Zs(r, o[g], o, t, n);
        this.previousInputValues.set(t, n);
        let s = ie(r.index, o);
        Js(s, 1)
    }
    get injector() {
        return new ct(this._tNode, this._rootLView)
    }
    destroy() {
        this.hostView.destroy()
    }
    onDestroy(t) {
        this.hostView.onDestroy(t)
    }
};

function dm(e, t, n) {
    let r = e.projection = [];
    for (let o = 0; o < t.length; o++) {
        let i = n[o];
        r.push(i != null && i.length ? Array.from(i) : null)
    }
}
var Xs = (() => {
    class e {
        static __NG_ELEMENT_ID__ = fm
    }
    return e
})();

function fm() {
    let e = z();
    return hm(e, b())
}
var pm = Xs,
    Ql = class extends pm {
        _lContainer;
        _hostTNode;
        _hostLView;
        constructor(t, n, r) {
            super(), this._lContainer = t, this._hostTNode = n, this._hostLView = r
        }
        get element() {
            return Rs(this._hostTNode, this._hostLView)
        }
        get injector() {
            return new ct(this._hostTNode, this._hostLView)
        }
        get parentInjector() {
            let t = As(this._hostTNode, this._hostLView);
            if (Pu(t)) {
                let n = Yr(t, this._hostLView),
                    r = Zr(t),
                    o = n[g].data[r + 8];
                return new ct(o, n)
            } else return new ct(null, this._hostLView)
        }
        clear() {
            for (; this.length > 0;) this.remove(this.length - 1)
        }
        get(t) {
            let n = vu(this._lContainer);
            return n !== null && n[t] || null
        }
        get length() {
            return this._lContainer.length - $
        }
        createEmbeddedView(t, n, r) {
            let o, i;
            typeof r == "number" ? o = r : r != null && (o = r.index, i = r.injector);
            let s = gs(this._lContainer, t.ssrId),
                a = t.createEmbeddedViewImpl(n || {}, i, s);
            return this.insertImpl(a, o, yn(this._hostTNode, s)), a
        }
        createComponent(t, n, r, o, i, s, a) {
            let c = t && !wp(t),
                u;
            if (c) u = n;
            else {
                let x = n || {};
                u = x.index, r = x.injector, o = x.projectableNodes, i = x.environmentInjector || x.ngModuleRef, s = x.directives, a = x.bindings
            }
            let l = c ? t : new Pt(Oe(t)),
                d = r || this.parentInjector;
            if (!i && l.ngModule == null) {
                let C = (c ? d : this.parentInjector).get(te, null);
                C && (i = C)
            }
            let p = Oe(l.componentType ?? {}),
                f = gs(this._lContainer, p?.id ?? null),
                h = f?.firstChild ?? null,
                E = l.create(d, o, h, i, s, a);
            return this.insertImpl(E.hostView, u, yn(this._hostTNode, f)), E
        }
        insert(t, n) {
            return this.insertImpl(t, n, !0)
        }
        insertImpl(t, n, r) {
            let o = t._lView;
            if (Ec(o)) {
                let a = this.indexOf(t);
                if (a !== -1) this.detach(a);
                else {
                    let c = o[j],
                        u = new Ql(c, c[re], c[j]);
                    u.detach(u.indexOf(t))
                }
            }
            let i = this._adjustIndex(n),
                s = this._lContainer;
            return vo(s, o, i, r), t.attachToViewContainerRef(), fi(Qi(s), i, t), t
        }
        move(t, n) {
            return this.insert(t, n)
        }
        indexOf(t) {
            let n = vu(this._lContainer);
            return n !== null ? n.indexOf(t) : -1
        }
        remove(t) {
            let n = this._adjustIndex(t, -1),
                r = vn(this._lContainer, n);
            r && (en(Qi(this._lContainer), n), yo(r[g], r))
        }
        detach(t) {
            let n = this._adjustIndex(t, -1),
                r = vn(this._lContainer, n);
            return r && en(Qi(this._lContainer), n) != null ? new lt(r) : null
        }
        _adjustIndex(t, n = 0) {
            return t ?? this.length + n
        }
    };

function vu(e) {
    return e[sn]
}

function Qi(e) {
    return e[sn] || (e[sn] = [])
}

function hm(e, t) {
    let n, r = t[e.index];
    return ue(r) ? n = r : (n = Ll(r, t, null, e), t[e.index] = n, $s(t, n)), mm(n, t, e, r), new Ql(n, e, t)
}

function gm(e, t) {
    let n = e[R],
        r = n.createComment(""),
        o = le(t, e),
        i = n.parentNode(o);
    return Xr(n, i, r, n.nextSibling(o), !1), r
}
var mm = vm,
    ym = () => !1;

function Dm(e, t, n) {
    return ym(e, t, n)
}

function vm(e, t, n, r) {
    if (e[Fe]) return;
    let o;
    n.type & 8 ? o = oe(r) : o = gm(t, n), e[Fe] = o
}
var Eu = new Set;

function ft(e) {
    Eu.has(e) || (Eu.add(e), performance?.mark?.("mark_feature_usage", {
        detail: {
            feature: e
        }
    }))
}
var Lt = class {},
    Kl = class {};
var oo = class extends Lt {
        ngModuleType;
        _parent;
        _bootstrapComponents = [];
        _r3Injector;
        instance;
        destroyCbs = [];
        componentFactoryResolver = new no(this);
        constructor(t, n, r, o = !0) {
            super(), this.ngModuleType = t, this._parent = n;
            let i = gi(t);
            this._bootstrapComponents = fl(i.bootstrap), this._r3Injector = $i(t, n, [{
                provide: Lt,
                useValue: this
            }, {
                provide: Tn,
                useValue: this.componentFactoryResolver
            }, ...r], Ee(t), new Set(["environment"])), o && this.resolveInjectorInitializers()
        }
        resolveInjectorInitializers() {
            this._r3Injector.resolveInjectorInitializers(), this.instance = this._r3Injector.get(this.ngModuleType)
        }
        get injector() {
            return this._r3Injector
        }
        destroy() {
            let t = this._r3Injector;
            !t.destroyed && t.destroy(), this.destroyCbs.forEach(n => n()), this.destroyCbs = null
        }
        onDestroy(t) {
            this.destroyCbs.push(t)
        }
    },
    io = class extends Kl {
        moduleType;
        constructor(t) {
            super(), this.moduleType = t
        }
        create(t) {
            return new oo(this.moduleType, t, [])
        }
    };
var In = class extends Lt {
    injector;
    componentFactoryResolver = new no(this);
    instance = null;
    constructor(t) {
        super();
        let n = new Qe([...t.providers, {
            provide: Lt,
            useValue: this
        }, {
            provide: Tn,
            useValue: this.componentFactoryResolver
        }], t.parent || nn(), t.debugName, new Set(["environment"]));
        this.injector = n, t.runEnvironmentInitializers && n.resolveInjectorInitializers()
    }
    destroy() {
        this.injector.destroy()
    }
    onDestroy(t) {
        this.injector.onDestroy(t)
    }
};

function Jl(e, t, n = null) {
    return new In({
        providers: e,
        parent: t,
        debugName: n,
        runEnvironmentInitializers: !0
    }).injector
}
var Em = (() => {
    class e {
        _injector;
        cachedInjectors = new Map;
        constructor(n) {
            this._injector = n
        }
        getOrCreateStandaloneInjector(n) {
            if (!n.standalone) return null;
            if (!this.cachedInjectors.has(n)) {
                let r = yi(!1, n.type),
                    o = r.length > 0 ? Jl([r], this._injector, `Standalone[${n.type.name}]`) : null;
                this.cachedInjectors.set(n, o)
            }
            return this.cachedInjectors.get(n)
        }
        ngOnDestroy() {
            try {
                for (let n of this.cachedInjectors.values()) n !== null && n.destroy()
            } finally {
                this.cachedInjectors.clear()
            }
        }
        static \u0275prov = O({
            token: e,
            providedIn: "environment",
            factory: () => new e(B(te))
        })
    }
    return e
})();

function Im(e) {
    return _n(() => {
        let t = ed(e),
            n = q(W({}, t), {
                decls: e.decls,
                vars: e.vars,
                template: e.template,
                consts: e.consts || null,
                ngContentSelectors: e.ngContentSelectors,
                onPush: e.changeDetection === Fs.OnPush,
                directiveDefs: null,
                pipeDefs: null,
                dependencies: t.standalone && e.dependencies || null,
                getStandaloneInjector: t.standalone ? o => o.get(Em).getOrCreateStandaloneInjector(n) : null,
                getExternalStyles: null,
                signals: e.signals ?? !1,
                data: e.data || {},
                encapsulation: e.encapsulation || kt.Emulated,
                styles: e.styles || J,
                _: null,
                schemas: e.schemas || null,
                tView: null,
                id: ""
            });
        t.standalone && ft("NgStandalone"), td(n);
        let r = e.dependencies;
        return n.directiveDefs = Iu(r, Cm), n.pipeDefs = Iu(r, dc), n.id = bm(n), n
    })
}

function Cm(e) {
    return Oe(e) || mi(e)
}

function ea(e) {
    return _n(() => ({
        type: e.type,
        bootstrap: e.bootstrap || J,
        declarations: e.declarations || J,
        imports: e.imports || J,
        exports: e.exports || J,
        transitiveCompileScopes: null,
        schemas: e.schemas || null,
        id: e.id || null
    }))
}

function wm(e, t) {
    if (e == null) return Ae;
    let n = {};
    for (let r in e)
        if (e.hasOwnProperty(r)) {
            let o = e[r],
                i, s, a, c;
            Array.isArray(o) ? (a = o[0], i = o[1], s = o[2] ?? i, c = o[3] || null) : (i = o, s = o, a = mo.None, c = null), n[i] = [r, a, c], t[i] = s
        } return n
}

function _m(e) {
    if (e == null) return Ae;
    let t = {};
    for (let n in e) e.hasOwnProperty(n) && (t[e[n]] = n);
    return t
}

function Xl(e) {
    return _n(() => {
        let t = ed(e);
        return td(t), t
    })
}

function ed(e) {
    let t = {};
    return {
        type: e.type,
        providersResolver: null,
        factory: null,
        hostBindings: e.hostBindings || null,
        hostVars: e.hostVars || 0,
        hostAttrs: e.hostAttrs || null,
        contentQueries: e.contentQueries || null,
        declaredInputs: t,
        inputConfig: e.inputs || Ae,
        exportAs: e.exportAs || null,
        standalone: e.standalone ?? !0,
        signals: e.signals === !0,
        selectors: e.selectors || J,
        viewQuery: e.viewQuery || null,
        features: e.features || null,
        setInput: null,
        resolveHostDirectives: null,
        hostDirectives: null,
        inputs: wm(e.inputs, t),
        outputs: _m(e.outputs),
        debugInfo: null
    }
}

function td(e) {
    e.features?.forEach(t => t(e))
}

function Iu(e, t) {
    return e ? () => {
        let n = typeof e == "function" ? e() : e,
            r = [];
        for (let o of n) {
            let i = t(o);
            i !== null && r.push(i)
        }
        return r
    } : null
}

function bm(e) {
    let t = 0,
        n = typeof e.consts == "function" ? "" : e.consts,
        r = [e.selectors, e.ngContentSelectors, e.hostVars, e.hostAttrs, n, e.vars, e.decls, e.encapsulation, e.standalone, e.signals, e.exportAs, JSON.stringify(e.inputs), JSON.stringify(e.outputs), Object.getOwnPropertyNames(e.type.prototype), !!e.contentQueries, !!e.viewQuery];
    for (let i of r.join("|")) t = Math.imul(31, t) + i.charCodeAt(0) << 0;
    return t += 2147483648, "c" + t
}

function Tm(e) {
    return Object.getPrototypeOf(e.prototype).constructor
}

function nd(e) {
    let t = Tm(e.type),
        n = !0,
        r = [e];
    for (; t;) {
        let o;
        if (ge(e)) o = t.\u0275cmp || t.\u0275dir;
        else {
            if (t.\u0275cmp) throw new M(903, !1);
            o = t.\u0275dir
        }
        if (o) {
            if (n) {
                r.push(o);
                let s = e;
                s.inputs = Ki(e.inputs), s.declaredInputs = Ki(e.declaredInputs), s.outputs = Ki(e.outputs);
                let a = o.hostBindings;
                a && Am(e, a);
                let c = o.viewQuery,
                    u = o.contentQueries;
                if (c && Nm(e, c), u && xm(e, u), Mm(e, o), oc(e.outputs, o.outputs), ge(o) && o.data.animation) {
                    let l = e.data;
                    l.animation = (l.animation || []).concat(o.data.animation)
                }
            }
            let i = o.features;
            if (i)
                for (let s = 0; s < i.length; s++) {
                    let a = i[s];
                    a && a.ngInherit && a(e), a === nd && (n = !1)
                }
        }
        t = Object.getPrototypeOf(t)
    }
    Sm(r)
}

function Mm(e, t) {
    for (let n in t.inputs) {
        if (!t.inputs.hasOwnProperty(n) || e.inputs.hasOwnProperty(n)) continue;
        let r = t.inputs[n];
        r !== void 0 && (e.inputs[n] = r, e.declaredInputs[n] = t.declaredInputs[n])
    }
}

function Sm(e) {
    let t = 0,
        n = null;
    for (let r = e.length - 1; r >= 0; r--) {
        let o = e[r];
        o.hostVars = t += o.hostVars, o.hostAttrs = Ot(o.hostAttrs, n = Ot(n, o.hostAttrs))
    }
}

function Ki(e) {
    return e === Ae ? {} : e === J ? [] : e
}

function Nm(e, t) {
    let n = e.viewQuery;
    n ? e.viewQuery = (r, o) => {
        t(r, o), n(r, o)
    } : e.viewQuery = t
}

function xm(e, t) {
    let n = e.contentQueries;
    n ? e.contentQueries = (r, o, i) => {
        t(r, o, i), n(r, o, i)
    } : e.contentQueries = t
}

function Am(e, t) {
    let n = e.hostBindings;
    n ? e.hostBindings = (r, o) => {
        t(r, o), n(r, o)
    } : e.hostBindings = t
}

function Rm(e, t, n, r, o, i, s, a) {
    if (n.firstCreatePass) {
        e.mergedAttrs = Ot(e.mergedAttrs, e.attrs);
        let l = e.tView = Bs(2, e, o, i, s, n.directiveRegistry, n.pipeRegistry, null, n.schemas, n.consts, null);
        n.queries !== null && (n.queries.template(n, e), l.queries = n.queries.embeddedTView(e))
    }
    a && (e.flags |= a), Nt(e, !1);
    let c = Om(n, t, e, r);
    Pr() && zs(n, t, c, e), Ft(c, t);
    let u = Ll(c, t, c, e);
    t[r + H] = u, $s(t, u), Dm(u, e, t)
}

function so(e, t, n, r, o, i, s, a, c, u, l) {
    let d = n + H,
        p;
    if (t.firstCreatePass) {
        if (p = Eo(t, d, 4, s || null, a || null), u != null) {
            let f = me(t.consts, u);
            p.localNames = [];
            for (let h = 0; h < f.length; h += 2) p.localNames.push(f[h], -1)
        }
    } else p = t.data[d];
    return Rm(p, e, t, n, r, o, i, c), u != null && qs(e, p, l), p
}
var Om = Fm;

function Fm(e, t, n, r) {
    return Lr(!0), t[R].createComment("")
}
var ta = function(e) {
        return e[e.CHANGE_DETECTION = 0] = "CHANGE_DETECTION", e[e.AFTER_NEXT_RENDER = 1] = "AFTER_NEXT_RENDER", e
    }(ta || {}),
    na = new S(""),
    rd = !1,
    vs = class extends De {
        __isAsync;
        destroyRef = void 0;
        pendingTasks = void 0;
        constructor(t = !1) {
            super(), this.__isAsync = t, yc() && (this.destroyRef = D(fn, {
                optional: !0
            }) ?? void 0, this.pendingTasks = D(at, {
                optional: !0
            }) ?? void 0)
        }
        emit(t) {
            let n = m(null);
            try {
                super.next(t)
            } finally {
                m(n)
            }
        }
        subscribe(t, n, r) {
            let o = t,
                i = n || (() => null),
                s = r;
            if (t && typeof t == "object") {
                let c = t;
                o = c.next?.bind(c), i = c.error?.bind(c), s = c.complete?.bind(c)
            }
            this.__isAsync && (i = this.wrapInTimeout(i), o && (o = this.wrapInTimeout(o)), s && (s = this.wrapInTimeout(s)));
            let a = super.subscribe({
                next: o,
                error: i,
                complete: s
            });
            return t instanceof L && t.add(a), a
        }
        wrapInTimeout(t) {
            return n => {
                let r = this.pendingTasks?.add();
                setTimeout(() => {
                    try {
                        t(n)
                    } finally {
                        r !== void 0 && this.pendingTasks?.remove(r)
                    }
                })
            }
        }
    },
    we = vs;

function od(e) {
    let t, n;

    function r() {
        e = hn;
        try {
            n !== void 0 && typeof cancelAnimationFrame == "function" && cancelAnimationFrame(n), t !== void 0 && clearTimeout(t)
        } catch {}
    }
    return t = setTimeout(() => {
        e(), r()
    }), typeof requestAnimationFrame == "function" && (n = requestAnimationFrame(() => {
        e(), r()
    })), () => r()
}

function Cu(e) {
    return queueMicrotask(() => e()), () => {
        e = hn
    }
}
var ra = "isAngularZone",
    ao = ra + "_ID",
    km = 0,
    Y = class e {
        hasPendingMacrotasks = !1;
        hasPendingMicrotasks = !1;
        isStable = !0;
        onUnstable = new we(!1);
        onMicrotaskEmpty = new we(!1);
        onStable = new we(!1);
        onError = new we(!1);
        constructor(t) {
            let {
                enableLongStackTrace: n = !1,
                shouldCoalesceEventChangeDetection: r = !1,
                shouldCoalesceRunChangeDetection: o = !1,
                scheduleInRootZone: i = rd
            } = t;
            if (typeof Zone > "u") throw new M(908, !1);
            Zone.assertZonePatched();
            let s = this;
            s._nesting = 0, s._outer = s._inner = Zone.current, Zone.TaskTrackingZoneSpec && (s._inner = s._inner.fork(new Zone.TaskTrackingZoneSpec)), n && Zone.longStackTraceZoneSpec && (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)), s.shouldCoalesceEventChangeDetection = !o && r, s.shouldCoalesceRunChangeDetection = o, s.callbackScheduled = !1, s.scheduleInRootZone = i, jm(s)
        }
        static isInAngularZone() {
            return typeof Zone < "u" && Zone.current.get(ra) === !0
        }
        static assertInAngularZone() {
            if (!e.isInAngularZone()) throw new M(909, !1)
        }
        static assertNotInAngularZone() {
            if (e.isInAngularZone()) throw new M(909, !1)
        }
        run(t, n, r) {
            return this._inner.run(t, n, r)
        }
        runTask(t, n, r, o) {
            let i = this._inner,
                s = i.scheduleEventTask("NgZoneEvent: " + o, t, Pm, hn, hn);
            try {
                return i.runTask(s, n, r)
            } finally {
                i.cancelTask(s)
            }
        }
        runGuarded(t, n, r) {
            return this._inner.runGuarded(t, n, r)
        }
        runOutsideAngular(t) {
            return this._outer.run(t)
        }
    },
    Pm = {};

function oa(e) {
    if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable) try {
        e._nesting++, e.onMicrotaskEmpty.emit(null)
    } finally {
        if (e._nesting--, !e.hasPendingMicrotasks) try {
            e.runOutsideAngular(() => e.onStable.emit(null))
        } finally {
            e.isStable = !0
        }
    }
}

function Lm(e) {
    if (e.isCheckStableRunning || e.callbackScheduled) return;
    e.callbackScheduled = !0;

    function t() {
        od(() => {
            e.callbackScheduled = !1, Es(e), e.isCheckStableRunning = !0, oa(e), e.isCheckStableRunning = !1
        })
    }
    e.scheduleInRootZone ? Zone.root.run(() => {
        t()
    }) : e._outer.run(() => {
        t()
    }), Es(e)
}

function jm(e) {
    let t = () => {
            Lm(e)
        },
        n = km++;
    e._inner = e._inner.fork({
        name: "angular",
        properties: {
            [ra]: !0,
            [ao]: n,
            [ao + n]: !0
        },
        onInvokeTask: (r, o, i, s, a, c) => {
            if (Vm(c)) return r.invokeTask(i, s, a, c);
            try {
                return wu(e), r.invokeTask(i, s, a, c)
            } finally {
                (e.shouldCoalesceEventChangeDetection && s.type === "eventTask" || e.shouldCoalesceRunChangeDetection) && t(), _u(e)
            }
        },
        onInvoke: (r, o, i, s, a, c, u) => {
            try {
                return wu(e), r.invoke(i, s, a, c, u)
            } finally {
                e.shouldCoalesceRunChangeDetection && !e.callbackScheduled && !Bm(c) && t(), _u(e)
            }
        },
        onHasTask: (r, o, i, s) => {
            r.hasTask(i, s), o === i && (s.change == "microTask" ? (e._hasPendingMicrotasks = s.microTask, Es(e), oa(e)) : s.change == "macroTask" && (e.hasPendingMacrotasks = s.macroTask))
        },
        onHandleError: (r, o, i, s) => (r.handleError(i, s), e.runOutsideAngular(() => e.onError.emit(s)), !1)
    })
}

function Es(e) {
    e._hasPendingMicrotasks || (e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) && e.callbackScheduled === !0 ? e.hasPendingMicrotasks = !0 : e.hasPendingMicrotasks = !1
}

function wu(e) {
    e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null))
}

function _u(e) {
    e._nesting--, oa(e)
}
var Cn = class {
    hasPendingMicrotasks = !1;
    hasPendingMacrotasks = !1;
    isStable = !0;
    onUnstable = new we;
    onMicrotaskEmpty = new we;
    onStable = new we;
    onError = new we;
    run(t, n, r) {
        return t.apply(n, r)
    }
    runGuarded(t, n, r) {
        return t.apply(n, r)
    }
    runOutsideAngular(t) {
        return t()
    }
    runTask(t, n, r, o) {
        return t.apply(n, r)
    }
};

function Vm(e) {
    return id(e, "__ignore_ng_zone__")
}

function Bm(e) {
    return id(e, "__scheduler_tick__")
}

function id(e, t) {
    return !Array.isArray(e) || e.length !== 1 ? !1 : e[0]?.data?.[t] === !0
}
var sd = (() => {
    class e {
        impl = null;
        execute() {
            this.impl?.execute()
        }
        static \u0275prov = O({
            token: e,
            providedIn: "root",
            factory: () => new e
        })
    }
    return e
})();
var Hm = (() => {
    class e {
        log(n) {
            console.log(n)
        }
        warn(n) {
            console.warn(n)
        }
        static \u0275fac = function(r) {
            return new(r || e)
        };
        static \u0275prov = O({
            token: e,
            factory: e.\u0275fac,
            providedIn: "platform"
        })
    }
    return e
})();
var ad = new S("");

function ia(e) {
    return !!e && typeof e.then == "function"
}

function cd(e) {
    return !!e && typeof e.subscribe == "function"
}
var ud = new S("");
var sa = (() => {
        class e {
            resolve;
            reject;
            initialized = !1;
            done = !1;
            donePromise = new Promise((n, r) => {
                this.resolve = n, this.reject = r
            });
            appInits = D(ud, {
                optional: !0
            }) ?? [];
            injector = D(Ke);
            constructor() {}
            runInitializers() {
                if (this.initialized) return;
                let n = [];
                for (let o of this.appInits) {
                    let i = Tr(this.injector, o);
                    if (ia(i)) n.push(i);
                    else if (cd(i)) {
                        let s = new Promise((a, c) => {
                            i.subscribe({
                                complete: a,
                                error: c
                            })
                        });
                        n.push(s)
                    }
                }
                let r = () => {
                    this.done = !0, this.resolve()
                };
                Promise.all(n).then(() => {
                    r()
                }).catch(o => {
                    this.reject(o)
                }), n.length === 0 && r(), this.initialized = !0
            }
            static \u0275fac = function(r) {
                return new(r || e)
            };
            static \u0275prov = O({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            })
        }
        return e
    })(),
    ld = new S("");

function dd() {
    No(() => {
        let e = "";
        throw new M(600, e)
    })
}

function fd(e) {
    return e.isBoundToModule
}
var $m = 10;
var Sn = (() => {
    class e {
        _runningTick = !1;
        _destroyed = !1;
        _destroyListeners = [];
        _views = [];
        internalErrorHandler = D(Ce);
        afterRenderManager = D(sd);
        zonelessEnabled = D(pn);
        rootEffectScheduler = D(Wi);
        dirtyFlags = 0;
        tracingSnapshot = null;
        allTestViews = new Set;
        autoDetectTestViews = new Set;
        includeAllTestViews = !1;
        afterTick = new De;
        get allViews() {
            return [...(this.includeAllTestViews ? this.allTestViews : this.autoDetectTestViews).keys(), ...this._views]
        }
        get destroyed() {
            return this._destroyed
        }
        componentTypes = [];
        components = [];
        internalPendingTask = D(at);
        get isStable() {
            return this.internalPendingTask.hasPendingTasksObservable.pipe(Ge(n => !n))
        }
        constructor() {
            D(na, {
                optional: !0
            })
        }
        whenStable() {
            let n;
            return new Promise(r => {
                n = this.isStable.subscribe({
                    next: o => {
                        o && r()
                    }
                })
            }).finally(() => {
                n.unsubscribe()
            })
        }
        _injector = D(te);
        _rendererFactory = null;
        get injector() {
            return this._injector
        }
        bootstrap(n, r) {
            return this.bootstrapImpl(n, r)
        }
        bootstrapImpl(n, r, o = Ke.NULL) {
            return this._injector.get(Y).run(() => {
                A(10);
                let s = n instanceof Io;
                if (!this._injector.get(sa).done) {
                    let h = "";
                    throw new M(405, h)
                }
                let c;
                s ? c = n : c = this._injector.get(Tn).resolveComponentFactory(n), this.componentTypes.push(c.componentType);
                let u = fd(c) ? void 0 : this._injector.get(Lt),
                    l = r || c.selector,
                    d = c.create(o, [], l, u),
                    p = d.location.nativeElement,
                    f = d.injector.get(ad, null);
                return f?.registerApplication(p), d.onDestroy(() => {
                    this.detachView(d.hostView), mn(this.components, d), f?.unregisterApplication(p)
                }), this._loadComponent(d), A(11, d), d
            })
        }
        tick() {
            this.zonelessEnabled || (this.dirtyFlags |= 1), this._tick()
        }
        _tick() {
            A(12), this.tracingSnapshot !== null ? this.tracingSnapshot.run(ta.CHANGE_DETECTION, this.tickImpl) : this.tickImpl()
        }
        tickImpl = () => {
            if (this._runningTick) throw new M(101, !1);
            let n = m(null);
            try {
                this._runningTick = !0, this.synchronize()
            } finally {
                this._runningTick = !1, this.tracingSnapshot?.dispose(), this.tracingSnapshot = null, m(n), this.afterTick.next(), A(13)
            }
        };
        synchronize() {
            this._rendererFactory === null && !this._injector.destroyed && (this._rendererFactory = this._injector.get(En, null, {
                optional: !0
            }));
            let n = 0;
            for (; this.dirtyFlags !== 0 && n++ < $m;) A(14), this.synchronizeOnce(), A(15)
        }
        synchronizeOnce() {
            this.dirtyFlags & 16 && (this.dirtyFlags &= -17, this.rootEffectScheduler.flush());
            let n = !1;
            if (this.dirtyFlags & 7) {
                let r = !!(this.dirtyFlags & 1);
                this.dirtyFlags &= -8, this.dirtyFlags |= 8;
                for (let {
                        _lView: o
                    }
                    of this.allViews) {
                    if (!r && !un(o)) continue;
                    let i = r && !this.zonelessEnabled ? 0 : 1;
                    Ks(o, i), n = !0
                }
                if (this.dirtyFlags &= -5, this.syncDirtyFlagsWithViews(), this.dirtyFlags & 23) return
            }
            n || (this._rendererFactory?.begin?.(), this._rendererFactory?.end?.()), this.dirtyFlags & 8 && (this.dirtyFlags &= -9, this.afterRenderManager.execute()), this.syncDirtyFlagsWithViews()
        }
        syncDirtyFlagsWithViews() {
            if (this.allViews.some(({
                    _lView: n
                }) => un(n))) {
                this.dirtyFlags |= 2;
                return
            } else this.dirtyFlags &= -8
        }
        attachView(n) {
            let r = n;
            this._views.push(r), r.attachToAppRef(this)
        }
        detachView(n) {
            let r = n;
            mn(this._views, r), r.detachFromAppRef()
        }
        _loadComponent(n) {
            this.attachView(n.hostView);
            try {
                this.tick()
            } catch (o) {
                this.internalErrorHandler(o)
            }
            this.components.push(n), this._injector.get(ld, []).forEach(o => o(n))
        }
        ngOnDestroy() {
            if (!this._destroyed) try {
                this._destroyListeners.forEach(n => n()), this._views.slice().forEach(n => n.destroy())
            } finally {
                this._destroyed = !0, this._views = [], this._destroyListeners = []
            }
        }
        onDestroy(n) {
            return this._destroyListeners.push(n), () => mn(this._destroyListeners, n)
        }
        destroy() {
            if (this._destroyed) throw new M(406, !1);
            let n = this._injector;
            n.destroy && !n.destroyed && n.destroy()
        }
        get viewCount() {
            return this._views.length
        }
        static \u0275fac = function(r) {
            return new(r || e)
        };
        static \u0275prov = O({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
})();

function mn(e, t) {
    let n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}

function pd(e, t, n, r) {
    let o = b(),
        i = st();
    if (_e(o, i, t)) {
        let s = G(),
            a = kr();
        hg(a, o, e, t, n, r)
    }
    return pd
}
var Is = class {
    destroy(t) {}
    updateValue(t, n) {}
    swap(t, n) {
        let r = Math.min(t, n),
            o = Math.max(t, n),
            i = this.detach(o);
        if (o - r > 1) {
            let s = this.detach(r);
            this.attach(r, i), this.attach(o, s)
        } else this.attach(r, i)
    }
    move(t, n) {
        this.attach(n, this.detach(t))
    }
};

function Ji(e, t, n, r, o) {
    return e === n && Object.is(t, r) ? 1 : Object.is(o(e, t), o(n, r)) ? -1 : 0
}

function Um(e, t, n) {
    let r, o, i = 0,
        s = e.length - 1,
        a = void 0;
    if (Array.isArray(t)) {
        let c = t.length - 1;
        for (; i <= s && i <= c;) {
            let u = e.at(i),
                l = t[i],
                d = Ji(i, u, i, l, n);
            if (d !== 0) {
                d < 0 && e.updateValue(i, l), i++;
                continue
            }
            let p = e.at(s),
                f = t[c],
                h = Ji(s, p, c, f, n);
            if (h !== 0) {
                h < 0 && e.updateValue(s, f), s--, c--;
                continue
            }
            let E = n(i, u),
                x = n(s, p),
                C = n(i, l);
            if (Object.is(C, x)) {
                let Vt = n(c, f);
                Object.is(Vt, E) ? (e.swap(i, s), e.updateValue(s, f), c--, s--) : e.move(s, i), e.updateValue(i, l), i++;
                continue
            }
            if (r ??= new co, o ??= Tu(e, i, s, n), Cs(e, r, i, C)) e.updateValue(i, l), i++, s++;
            else if (o.has(C)) r.set(E, e.detach(i)), s--;
            else {
                let Vt = e.create(i, t[i]);
                e.attach(i, Vt), i++, s++
            }
        }
        for (; i <= c;) bu(e, r, n, i, t[i]), i++
    } else if (t != null) {
        let c = t[Symbol.iterator](),
            u = c.next();
        for (; !u.done && i <= s;) {
            let l = e.at(i),
                d = u.value,
                p = Ji(i, l, i, d, n);
            if (p !== 0) p < 0 && e.updateValue(i, d), i++, u = c.next();
            else {
                r ??= new co, o ??= Tu(e, i, s, n);
                let f = n(i, d);
                if (Cs(e, r, i, f)) e.updateValue(i, d), i++, s++, u = c.next();
                else if (!o.has(f)) e.attach(i, e.create(i, d)), i++, s++, u = c.next();
                else {
                    let h = n(i, l);
                    r.set(h, e.detach(i)), s--
                }
            }
        }
        for (; !u.done;) bu(e, r, n, e.length, u.value), u = c.next()
    }
    for (; i <= s;) e.destroy(e.detach(s--));
    r?.forEach(c => {
        e.destroy(c)
    })
}

function Cs(e, t, n, r) {
    return t !== void 0 && t.has(r) ? (e.attach(n, t.get(r)), t.delete(r), !0) : !1
}

function bu(e, t, n, r, o) {
    if (Cs(e, t, r, n(r, o))) e.updateValue(r, o);
    else {
        let i = e.create(r, o);
        e.attach(r, i)
    }
}

function Tu(e, t, n, r) {
    let o = new Set;
    for (let i = t; i <= n; i++) o.add(r(i, e.at(i)));
    return o
}
var co = class {
    kvMap = new Map;
    _vMap = void 0;
    has(t) {
        return this.kvMap.has(t)
    }
    delete(t) {
        if (!this.has(t)) return !1;
        let n = this.kvMap.get(t);
        return this._vMap !== void 0 && this._vMap.has(n) ? (this.kvMap.set(t, this._vMap.get(n)), this._vMap.delete(n)) : this.kvMap.delete(t), !0
    }
    get(t) {
        return this.kvMap.get(t)
    }
    set(t, n) {
        if (this.kvMap.has(t)) {
            let r = this.kvMap.get(t);
            this._vMap === void 0 && (this._vMap = new Map);
            let o = this._vMap;
            for (; o.has(r);) r = o.get(r);
            o.set(r, n)
        } else this.kvMap.set(t, n)
    }
    forEach(t) {
        for (let [n, r] of this.kvMap)
            if (t(r, n), this._vMap !== void 0) {
                let o = this._vMap;
                for (; o.has(r);) r = o.get(r), t(r, n)
            }
    }
};

function Gm(e, t, n, r, o, i, s, a) {
    ft("NgControlFlow");
    let c = b(),
        u = G(),
        l = me(u.consts, i);
    return so(c, u, e, t, n, r, o, l, 256, s, a), aa
}

function aa(e, t, n, r, o, i, s, a) {
    ft("NgControlFlow");
    let c = b(),
        u = G(),
        l = me(u.consts, i);
    return so(c, u, e, t, n, r, o, l, 512, s, a), aa
}

function zm(e, t) {
    ft("NgControlFlow");
    let n = b(),
        r = st(),
        o = n[r] !== se ? n[r] : -1,
        i = o !== -1 ? uo(n, H + o) : void 0,
        s = 0;
    if (_e(n, r, e)) {
        let a = m(null);
        try {
            if (i !== void 0 && Vl(i, s), e !== -1) {
                let c = H + e,
                    u = uo(n, c),
                    l = Ts(n[g], c),
                    d = Hl(u, l, n),
                    p = Qs(n, l, t, {
                        dehydratedView: d
                    });
                vo(u, p, s, yn(l, d))
            }
        } finally {
            m(a)
        }
    } else if (i !== void 0) {
        let a = jl(i, s);
        a !== void 0 && (a[F] = t)
    }
}
var ws = class {
    lContainer;
    $implicit;
    $index;
    constructor(t, n, r) {
        this.lContainer = t, this.$implicit = n, this.$index = r
    }
    get $count() {
        return this.lContainer.length - $
    }
};
var _s = class {
    hasEmptyBlock;
    trackByFn;
    liveCollection;
    constructor(t, n, r) {
        this.hasEmptyBlock = t, this.trackByFn = n, this.liveCollection = r
    }
};

function Wm(e, t, n, r, o, i, s, a, c, u, l, d, p) {
    ft("NgControlFlow");
    let f = b(),
        h = G(),
        E = c !== void 0,
        x = b(),
        C = a ? s.bind(x[X][F]) : s,
        Vt = new _s(E, C);
    x[H + e] = Vt, so(f, h, e + 1, t, n, r, o, me(h.consts, i), 256), E && so(f, h, e + 2, c, u, l, d, me(h.consts, p), 512)
}
var bs = class extends Is {
    lContainer;
    hostLView;
    templateTNode;
    operationsCounter = void 0;
    needsIndexUpdate = !1;
    constructor(t, n, r) {
        super(), this.lContainer = t, this.hostLView = n, this.templateTNode = r
    }
    get length() {
        return this.lContainer.length - $
    }
    at(t) {
        return this.getLView(t)[F].$implicit
    }
    attach(t, n) {
        let r = n[bt];
        this.needsIndexUpdate ||= t !== this.length, vo(this.lContainer, n, t, yn(this.templateTNode, r))
    }
    detach(t) {
        return this.needsIndexUpdate ||= t !== this.length - 1, Zm(this.lContainer, t)
    }
    create(t, n) {
        let r = gs(this.lContainer, this.templateTNode.tView.ssrId),
            o = Qs(this.hostLView, this.templateTNode, new ws(this.lContainer, n, t), {
                dehydratedView: r
            });
        return this.operationsCounter?.recordCreate(), o
    }
    destroy(t) {
        yo(t[g], t), this.operationsCounter?.recordDestroy()
    }
    updateValue(t, n) {
        this.getLView(t)[F].$implicit = n
    }
    reset() {
        this.needsIndexUpdate = !1, this.operationsCounter?.reset()
    }
    updateIndexes() {
        if (this.needsIndexUpdate)
            for (let t = 0; t < this.length; t++) this.getLView(t)[F].$index = t
    }
    getLView(t) {
        return Ym(this.lContainer, t)
    }
};

function qm(e) {
    let t = m(null),
        n = Ie();
    try {
        let r = b(),
            o = r[g],
            i = r[n],
            s = n + 1,
            a = uo(r, s);
        if (i.liveCollection === void 0) {
            let u = Ts(o, s);
            i.liveCollection = new bs(a, r, u)
        } else i.liveCollection.reset();
        let c = i.liveCollection;
        if (Um(c, e, i.trackByFn), c.updateIndexes(), i.hasEmptyBlock) {
            let u = st(),
                l = c.length === 0;
            if (_e(r, u, l)) {
                let d = n + 2,
                    p = uo(r, d);
                if (l) {
                    let f = Ts(o, d),
                        h = Hl(p, f, r),
                        E = Qs(r, f, void 0, {
                            dehydratedView: h
                        });
                    vo(p, E, 0, yn(f, h))
                } else o.firstUpdatePass && jg(p), Vl(p, 0)
            }
        }
    } finally {
        m(t)
    }
}

function uo(e, t) {
    return e[t]
}

function Zm(e, t) {
    return vn(e, t)
}

function Ym(e, t) {
    return jl(e, t)
}

function Ts(e, t) {
    return cn(e, t)
}

function hd(e, t, n) {
    let r = b(),
        o = st();
    if (_e(r, o, t)) {
        let i = G(),
            s = kr();
        bl(s, r, e, t, r[R], n)
    }
    return hd
}

function Mu(e, t, n, r, o) {
    Zs(t, e, n, o ? "class" : "style", r)
}

function ca(e, t, n, r) {
    let o = b(),
        i = o[g],
        s = e + H,
        a = i.firstCreatePass ? Wl(s, o, 2, t, pg, Mc(), n, r) : i.data[s];
    if (Tl(a, o, e, t, yd), Nr(a)) {
        let c = o[g];
        _l(c, o, a), rl(c, a, o)
    }
    return r != null && qs(o, a), ca
}

function ua() {
    let e = G(),
        t = z(),
        n = Ml(t);
    return e.firstCreatePass && ql(e, n), Ai(n) && Ri(), xi(), n.classesWithoutHost != null && xp(n) && Mu(e, n, b(), n.classesWithoutHost, !0), n.stylesWithoutHost != null && Ap(n) && Mu(e, n, b(), n.stylesWithoutHost, !1), ua
}

function gd(e, t, n, r) {
    return ca(e, t, n, r), ua(), gd
}

function la(e, t, n, r) {
    let o = b(),
        i = o[g],
        s = e + H,
        a = i.firstCreatePass ? Xg(s, i, 2, t, n, r) : i.data[s];
    return Tl(a, o, e, t, yd), r != null && qs(o, a), la
}

function da() {
    let e = z(),
        t = Ml(e);
    return Ai(t) && Ri(), xi(), da
}

function md(e, t, n, r) {
    return la(e, t, n, r), da(), md
}
var yd = (e, t, n, r, o) => (Lr(!0), hl(t[R], r, Wc()));

function Qm() {
    return b()
}
var Nn = "en-US";
var Km = Nn;

function Dd(e) {
    typeof e == "string" && (Km = e.toLowerCase().replace(/_/g, "-"))
}

function vd(e, t, n) {
    let r = b(),
        o = G(),
        i = z();
    return Id(o, r, r[R], i, e, t, n), vd
}

function Ed(e, t, n) {
    let r = b(),
        o = G(),
        i = z();
    return (i.type & 3 || n) && Zl(i, o, r, n, r[R], e, t, Wr(i, r, t)), Ed
}

function Id(e, t, n, r, o, i, s) {
    let a = !0,
        c = null;
    if ((r.type & 3 || s) && (c ??= Wr(r, t, i), Zl(r, e, t, s, n, o, i, c) && (a = !1)), a) {
        let u = r.outputs?.[o],
            l = r.hostDirectiveOutputs?.[o];
        if (l && l.length)
            for (let d = 0; d < l.length; d += 2) {
                let p = l[d],
                    f = l[d + 1];
                c ??= Wr(r, t, i), yu(r, t, p, f, o, c)
            }
        if (u && u.length)
            for (let d of u) c ??= Wr(r, t, i), yu(r, t, d, o, o, c)
    }
}

function Jm(e = 1) {
    return Uc(e)
}

function $r(e, t) {
    return e << 17 | t << 2
}

function dt(e) {
    return e >> 17 & 32767
}

function Xm(e) {
    return (e & 2) == 2
}

function ey(e, t) {
    return e & 131071 | t << 17
}

function Ms(e) {
    return e | 2
}

function jt(e) {
    return (e & 131068) >> 2
}

function Xi(e, t) {
    return e & -131069 | t << 2
}

function ty(e) {
    return (e & 1) === 1
}

function Ss(e) {
    return e | 1
}

function ny(e, t, n, r, o, i) {
    let s = i ? t.classBindings : t.styleBindings,
        a = dt(s),
        c = jt(s);
    e[r] = n;
    let u = !1,
        l;
    if (Array.isArray(n)) {
        let d = n;
        l = d[1], (l === null || _t(d, l) > 0) && (u = !0)
    } else l = n;
    if (o)
        if (c !== 0) {
            let p = dt(e[a + 1]);
            e[r + 1] = $r(p, a), p !== 0 && (e[p + 1] = Xi(e[p + 1], r)), e[a + 1] = ey(e[a + 1], r)
        } else e[r + 1] = $r(a, 0), a !== 0 && (e[a + 1] = Xi(e[a + 1], r)), a = r;
    else e[r + 1] = $r(c, 0), a === 0 ? a = r : e[c + 1] = Xi(e[c + 1], r), c = r;
    u && (e[r + 1] = Ms(e[r + 1])), Su(e, l, r, !0), Su(e, l, r, !1), ry(t, l, e, r, i), s = $r(a, c), i ? t.classBindings = s : t.styleBindings = s
}

function ry(e, t, n, r, o) {
    let i = o ? e.residualClasses : e.residualStyles;
    i != null && typeof t == "string" && _t(i, t) >= 0 && (n[r + 1] = Ss(n[r + 1]))
}

function Su(e, t, n, r) {
    let o = e[n + 1],
        i = t === null,
        s = r ? dt(o) : jt(o),
        a = !1;
    for (; s !== 0 && (a === !1 || i);) {
        let c = e[s],
            u = e[s + 1];
        oy(c, t) && (a = !0, e[s + 1] = r ? Ss(u) : Ms(u)), s = r ? dt(u) : jt(u)
    }
    a && (e[n + 1] = r ? Ms(o) : Ss(o))
}

function oy(e, t) {
    return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t ? !0 : Array.isArray(e) && typeof t == "string" ? _t(e, t) >= 0 : !1
}

function Cd(e, t) {
    return iy(e, t, null, !0), Cd
}

function iy(e, t, n, r) {
    let o = b(),
        i = G(),
        s = ji(2);
    if (i.firstUpdatePass && ay(i, e, s, r), t !== se && _e(o, s, t)) {
        let a = i.data[Ie()];
        fy(i, a, o, o[R], e, o[s + 1] = py(t, n), r, s)
    }
}

function sy(e, t) {
    return t >= e.expandoStartIndex
}

function ay(e, t, n, r) {
    let o = e.data;
    if (o[n + 1] === null) {
        let i = o[Ie()],
            s = sy(e, n);
        hy(i, r) && t === null && !s && (t = !1), t = cy(o, i, t, r), ny(o, i, t, n, s, r)
    }
}

function cy(e, t, n, r) {
    let o = Vc(e),
        i = r ? t.residualClasses : t.residualStyles;
    if (o === null)(r ? t.classBindings : t.styleBindings) === 0 && (n = es(null, e, t, n, r), n = wn(n, t.attrs, r), i = null);
    else {
        let s = t.directiveStylingLast;
        if (s === -1 || e[s] !== o)
            if (n = es(o, e, t, n, r), i === null) {
                let c = uy(e, t, r);
                c !== void 0 && Array.isArray(c) && (c = es(null, e, t, c[1], r), c = wn(c, t.attrs, r), ly(e, t, r, c))
            } else i = dy(e, t, r)
    }
    return i !== void 0 && (r ? t.residualClasses = i : t.residualStyles = i), n
}

function uy(e, t, n) {
    let r = n ? t.classBindings : t.styleBindings;
    if (jt(r) !== 0) return e[dt(r)]
}

function ly(e, t, n, r) {
    let o = n ? t.classBindings : t.styleBindings;
    e[dt(o)] = r
}

function dy(e, t, n) {
    let r, o = t.directiveEnd;
    for (let i = 1 + t.directiveStylingLast; i < o; i++) {
        let s = e[i].hostAttrs;
        r = wn(r, s, n)
    }
    return wn(r, t.attrs, n)
}

function es(e, t, n, r, o) {
    let i = null,
        s = n.directiveEnd,
        a = n.directiveStylingLast;
    for (a === -1 ? a = n.directiveStart : a++; a < s && (i = t[a], r = wn(r, i.hostAttrs, o), i !== e);) a++;
    return e !== null && (n.directiveStylingLast = a), r
}

function wn(e, t, n) {
    let r = n ? 1 : 2,
        o = -1;
    if (t !== null)
        for (let i = 0; i < t.length; i++) {
            let s = t[i];
            typeof s == "number" ? o = s : o === r && (Array.isArray(e) || (e = e === void 0 ? [] : ["", e]), lc(e, s, n ? !0 : t[++i]))
        }
    return e === void 0 ? null : e
}

function fy(e, t, n, r, o, i, s, a) {
    if (!(t.type & 3)) return;
    let c = e.data,
        u = c[a + 1],
        l = ty(u) ? Nu(c, t, n, o, jt(u), s) : void 0;
    if (!lo(l)) {
        lo(i) || Xm(u) && (i = Nu(c, null, n, o, a, s));
        let d = Ti(Ie(), n);
        rg(r, s, d, o, i)
    }
}

function Nu(e, t, n, r, o, i) {
    let s = t === null,
        a;
    for (; o > 0;) {
        let c = e[o],
            u = Array.isArray(c),
            l = u ? c[1] : c,
            d = l === null,
            p = n[o + 1];
        p === se && (p = d ? J : void 0);
        let f = d ? br(p, r) : l === r ? p : void 0;
        if (u && !lo(f) && (f = br(c, r)), lo(f) && (a = f, s)) return a;
        let h = e[o + 1];
        o = s ? dt(h) : jt(h)
    }
    if (t !== null) {
        let c = i ? t.residualClasses : t.residualStyles;
        c != null && (a = br(c, r))
    }
    return a
}

function lo(e) {
    return e !== void 0
}

function py(e, t) {
    return e == null || e === "" || (typeof t == "string" ? e = e + t : typeof e == "object" && (e = Ee(ho(e)))), e
}

function hy(e, t) {
    return (e.flags & (t ? 8 : 16)) !== 0
}

function gy(e, t = "") {
    let n = b(),
        r = G(),
        o = e + H,
        i = r.firstCreatePass ? Eo(r, o, 1, t, null) : r.data[o],
        s = my(r, n, i, t, e);
    n[o] = s, Pr() && zs(r, n, s, i), Nt(i, !1)
}
var my = (e, t, n, r, o) => (Lr(!0), Ph(t[R], r));

function yy(e, t, n, r = "") {
    return _e(e, st(), n) ? t + xe(n) + r : se
}

function Dy(e, t, n, r, o, i = "") {
    let s = Fc(),
        a = nm(e, s, n, o);
    return ji(2), a ? t + xe(n) + r + xe(o) + i : se
}

function wd(e) {
    return fa("", e), wd
}

function fa(e, t, n) {
    let r = b(),
        o = yy(r, e, t, n);
    return o !== se && bd(r, Ie(), o), fa
}

function _d(e, t, n, r, o) {
    let i = b(),
        s = Dy(i, e, t, n, r, o);
    return s !== se && bd(i, Ie(), s), _d
}

function bd(e, t, n) {
    let r = Ti(t, e);
    Lh(e[R], r, n)
}

function Td(e, t, n) {
    Gi(t) && (t = t());
    let r = b(),
        o = st();
    if (_e(r, o, t)) {
        let i = G(),
            s = kr();
        bl(s, r, e, t, r[R], n)
    }
    return Td
}

function vy(e, t) {
    let n = Gi(e);
    return n && e.set(t), n
}

function Md(e, t) {
    let n = b(),
        r = G(),
        o = z();
    return Id(r, n, n[R], o, e, t), Md
}

function Ey(e, t, n) {
    let r = G();
    if (r.firstCreatePass) {
        let o = ge(e);
        Ns(n, r.data, r.blueprint, o, !0), Ns(t, r.data, r.blueprint, o, !1)
    }
}

function Ns(e, t, n, r, o) {
    if (e = V(e), Array.isArray(e))
        for (let i = 0; i < e.length; i++) Ns(e[i], t, n, r, o);
    else {
        let i = G(),
            s = b(),
            a = z(),
            c = Ye(e) ? e : V(e.provide),
            u = Ei(e),
            l = a.providerIndexes & 1048575,
            d = a.directiveStart,
            p = a.providerIndexes >> 20;
        if (Ye(e) || !e.multi) {
            let f = new ut(u, o, Mn, null),
                h = ns(c, t, o ? l : l + p, d);
            h === -1 ? (os(Qr(a, s), i, c), ts(i, e, t.length), t.push(c), a.directiveStart++, a.directiveEnd++, o && (a.providerIndexes += 1048576), n.push(f), s.push(f)) : (n[h] = f, s[h] = f)
        } else {
            let f = ns(c, t, l + p, d),
                h = ns(c, t, l, l + p),
                E = f >= 0 && n[f],
                x = h >= 0 && n[h];
            if (o && !x || !o && !E) {
                os(Qr(a, s), i, c);
                let C = wy(o ? Cy : Iy, n.length, o, r, u, e);
                !o && x && (n[h].providerFactory = C), ts(i, e, t.length, 0), t.push(c), a.directiveStart++, a.directiveEnd++, o && (a.providerIndexes += 1048576), n.push(C), s.push(C)
            } else {
                let C = Sd(n[o ? h : f], u, !o && r);
                ts(i, e, f > -1 ? f : h, C)
            }!o && r && x && n[h].componentProviders++
        }
    }
}

function ts(e, t, n, r) {
    let o = Ye(t),
        i = mc(t);
    if (o || i) {
        let c = (i ? V(t.useClass) : t).prototype.ngOnDestroy;
        if (c) {
            let u = e.destroyHooks || (e.destroyHooks = []);
            if (!o && t.multi) {
                let l = u.indexOf(n);
                l === -1 ? u.push(n, [r, c]) : u[l + 1].push(r, c)
            } else u.push(n, c)
        }
    }
}

function Sd(e, t, n) {
    return n && e.componentProviders++, e.multi.push(t) - 1
}

function ns(e, t, n, r) {
    for (let o = n; o < r; o++)
        if (t[o] === e) return o;
    return -1
}

function Iy(e, t, n, r, o) {
    return xs(this.multi, [])
}

function Cy(e, t, n, r, o) {
    let i = this.multi,
        s;
    if (this.providerFactory) {
        let a = this.providerFactory.componentProviders,
            c = Kr(r, r[g], this.providerFactory.index, o);
        s = c.slice(0, a), xs(i, s);
        for (let u = a; u < c.length; u++) s.push(c[u])
    } else s = [], xs(i, s);
    return s
}

function xs(e, t) {
    for (let n = 0; n < e.length; n++) {
        let r = e[n];
        t.push(r())
    }
    return t
}

function wy(e, t, n, r, o, i) {
    let s = new ut(e, n, Mn, null);
    return s.multi = [], s.index = t, s.componentProviders = 0, Sd(s, o, r && !n), s
}

function _y(e, t = []) {
    return n => {
        n.providersResolver = (r, o) => Ey(r, o ? o(e) : e, t)
    }
}

function by(e, t, n) {
    let r = Oc() + e,
        o = b();
    return o[r] === se ? em(o, r, n ? t.call(n) : t()) : tm(o, r)
}
var fo = class {
        ngModuleFactory;
        componentFactories;
        constructor(t, n) {
            this.ngModuleFactory = t, this.componentFactories = n
        }
    },
    Ty = (() => {
        class e {
            compileModuleSync(n) {
                return new io(n)
            }
            compileModuleAsync(n) {
                return Promise.resolve(this.compileModuleSync(n))
            }
            compileModuleAndAllComponentsSync(n) {
                let r = this.compileModuleSync(n),
                    o = gi(n),
                    i = fl(o.declarations).reduce((s, a) => {
                        let c = Oe(a);
                        return c && s.push(new Pt(c)), s
                    }, []);
                return new fo(r, i)
            }
            compileModuleAndAllComponentsAsync(n) {
                return Promise.resolve(this.compileModuleAndAllComponentsSync(n))
            }
            clearCache() {}
            clearCacheFor(n) {}
            getModuleId(n) {}
            static \u0275fac = function(r) {
                return new(r || e)
            };
            static \u0275prov = O({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            })
        }
        return e
    })();
var My = (() => {
    class e {
        zone = D(Y);
        changeDetectionScheduler = D(Ne);
        applicationRef = D(Sn);
        applicationErrorHandler = D(Ce);
        _onMicrotaskEmptySubscription;
        initialize() {
            this._onMicrotaskEmptySubscription || (this._onMicrotaskEmptySubscription = this.zone.onMicrotaskEmpty.subscribe({
                next: () => {
                    this.changeDetectionScheduler.runningTick || this.zone.run(() => {
                        try {
                            this.applicationRef.dirtyFlags |= 1, this.applicationRef._tick()
                        } catch (n) {
                            this.applicationErrorHandler(n)
                        }
                    })
                }
            }))
        }
        ngOnDestroy() {
            this._onMicrotaskEmptySubscription?.unsubscribe()
        }
        static \u0275fac = function(r) {
            return new(r || e)
        };
        static \u0275prov = O({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
})();

function Nd({
    ngZoneFactory: e,
    ignoreChangesOutsideZone: t,
    scheduleInRootZone: n
}) {
    return e ??= () => new Y(q(W({}, xd()), {
        scheduleInRootZone: n
    })), [{
        provide: Y,
        useFactory: e
    }, {
        provide: Re,
        multi: !0,
        useFactory: () => {
            let r = D(My, {
                optional: !0
            });
            return () => r.initialize()
        }
    }, {
        provide: Re,
        multi: !0,
        useFactory: () => {
            let r = D(Sy);
            return () => {
                r.initialize()
            }
        }
    }, t === !0 ? {
        provide: zi,
        useValue: !0
    } : [], {
        provide: jr,
        useValue: n ?? rd
    }, {
        provide: Ce,
        useFactory: () => {
            let r = D(Y),
                o = D(te),
                i;
            return s => {
                r.runOutsideAngular(() => {
                    o.destroyed && !i ? setTimeout(() => {
                        throw s
                    }) : (i ??= o.get(Je), i.handleError(s))
                })
            }
        }
    }]
}

function xd(e) {
    return {
        enableLongStackTrace: !1,
        shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1,
        shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1
    }
}
var Sy = (() => {
    class e {
        subscription = new L;
        initialized = !1;
        zone = D(Y);
        pendingTasks = D(at);
        initialize() {
            if (this.initialized) return;
            this.initialized = !0;
            let n = null;
            !this.zone.isStable && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (n = this.pendingTasks.add()), this.zone.runOutsideAngular(() => {
                this.subscription.add(this.zone.onStable.subscribe(() => {
                    Y.assertNotInAngularZone(), queueMicrotask(() => {
                        n !== null && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (this.pendingTasks.remove(n), n = null)
                    })
                }))
            }), this.subscription.add(this.zone.onUnstable.subscribe(() => {
                Y.assertInAngularZone(), n ??= this.pendingTasks.add()
            }))
        }
        ngOnDestroy() {
            this.subscription.unsubscribe()
        }
        static \u0275fac = function(r) {
            return new(r || e)
        };
        static \u0275prov = O({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
})();
var pa = (() => {
    class e {
        applicationErrorHandler = D(Ce);
        appRef = D(Sn);
        taskService = D(at);
        ngZone = D(Y);
        zonelessEnabled = D(pn);
        tracing = D(na, {
            optional: !0
        });
        disableScheduling = D(zi, {
            optional: !0
        }) ?? !1;
        zoneIsDefined = typeof Zone < "u" && !!Zone.root.run;
        schedulerTickApplyArgs = [{
            data: {
                __scheduler_tick__: !0
            }
        }];
        subscriptions = new L;
        angularZoneId = this.zoneIsDefined ? this.ngZone._inner?.get(ao) : null;
        scheduleInRootZone = !this.zonelessEnabled && this.zoneIsDefined && (D(jr, {
            optional: !0
        }) ?? !1);
        cancelScheduledCallback = null;
        useMicrotaskScheduler = !1;
        runningTick = !1;
        pendingRenderTaskId = null;
        constructor() {
            this.subscriptions.add(this.appRef.afterTick.subscribe(() => {
                this.runningTick || this.cleanup()
            })), this.subscriptions.add(this.ngZone.onUnstable.subscribe(() => {
                this.runningTick || this.cleanup()
            })), this.disableScheduling ||= !this.zonelessEnabled && (this.ngZone instanceof Cn || !this.zoneIsDefined)
        }
        notify(n) {
            if (!this.zonelessEnabled && n === 5) return;
            let r = !1;
            switch (n) {
                case 0: {
                    this.appRef.dirtyFlags |= 2;
                    break
                }
                case 3:
                case 2:
                case 4:
                case 5:
                case 1: {
                    this.appRef.dirtyFlags |= 4;
                    break
                }
                case 6: {
                    this.appRef.dirtyFlags |= 2, r = !0;
                    break
                }
                case 12: {
                    this.appRef.dirtyFlags |= 16, r = !0;
                    break
                }
                case 13: {
                    this.appRef.dirtyFlags |= 2, r = !0;
                    break
                }
                case 11: {
                    r = !0;
                    break
                }
                case 9:
                case 8:
                case 7:
                case 10:
                default:
                    this.appRef.dirtyFlags |= 8
            }
            if (this.appRef.tracingSnapshot = this.tracing?.snapshot(this.appRef.tracingSnapshot) ?? null, !this.shouldScheduleTick(r)) return;
            let o = this.useMicrotaskScheduler ? Cu : od;
            this.pendingRenderTaskId = this.taskService.add(), this.scheduleInRootZone ? this.cancelScheduledCallback = Zone.root.run(() => o(() => this.tick())) : this.cancelScheduledCallback = this.ngZone.runOutsideAngular(() => o(() => this.tick()))
        }
        shouldScheduleTick(n) {
            return !(this.disableScheduling && !n || this.appRef.destroyed || this.pendingRenderTaskId !== null || this.runningTick || this.appRef._runningTick || !this.zonelessEnabled && this.zoneIsDefined && Zone.current.get(ao + this.angularZoneId))
        }
        tick() {
            if (this.runningTick || this.appRef.destroyed) return;
            if (this.appRef.dirtyFlags === 0) {
                this.cleanup();
                return
            }!this.zonelessEnabled && this.appRef.dirtyFlags & 7 && (this.appRef.dirtyFlags |= 1);
            let n = this.taskService.add();
            try {
                this.ngZone.run(() => {
                    this.runningTick = !0, this.appRef._tick()
                }, void 0, this.schedulerTickApplyArgs)
            } catch (r) {
                this.taskService.remove(n), this.applicationErrorHandler(r)
            } finally {
                this.cleanup()
            }
            this.useMicrotaskScheduler = !0, Cu(() => {
                this.useMicrotaskScheduler = !1, this.taskService.remove(n)
            })
        }
        ngOnDestroy() {
            this.subscriptions.unsubscribe(), this.cleanup()
        }
        cleanup() {
            if (this.runningTick = !1, this.cancelScheduledCallback?.(), this.cancelScheduledCallback = null, this.pendingRenderTaskId !== null) {
                let n = this.pendingRenderTaskId;
                this.pendingRenderTaskId = null, this.taskService.remove(n)
            }
        }
        static \u0275fac = function(r) {
            return new(r || e)
        };
        static \u0275prov = O({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
})();

function Ny() {
    return ft("NgZoneless"), tn([{
            provide: Ne,
            useExisting: pa
        }, {
            provide: Y,
            useClass: Cn
        }, {
            provide: pn,
            useValue: !0
        }, {
            provide: jr,
            useValue: !1
        },
        []
    ])
}

function xy() {
    return typeof $localize < "u" && $localize.locale || Nn
}
var ha = new S("", {
    providedIn: "root",
    factory: () => D(ha, {
        optional: !0,
        skipSelf: !0
    }) || xy()
});

function Ay(e) {
    return tc(e)
}

function Ry(e, t) {
    return Un(e, t?.equal)
}
var Ad = class {
    [U];
    constructor(t) {
        this[U] = t
    }
    destroy() {
        this[U].destroy()
    }
};
var Od = Symbol("InputSignalNode#UNSET"),
    jy = q(W({}, Gn), {
        transformFn: void 0,
        applyValueToInputSignal(e, t) {
            mt(e, t)
        }
    });

function Fd(e, t) {
    let n = Object.create(jy);
    n.value = e, n.transformFn = t?.transform;

    function r() {
        if (ht(n), n.value === Od) {
            let o = null;
            throw new M(-950, o)
        }
        return n.value
    }
    return r[U] = n, r
}
var Vy = new S("");
Vy.__NG_ELEMENT_ID__ = e => {
    let t = z();
    if (t === null) throw new M(204, !1);
    if (t.type & 2) return t.value;
    if (e & 8) return null;
    throw new M(204, !1)
};

function Rd(e, t) {
    return Fd(e, t)
}

function By(e) {
    return Fd(Od, e)
}
var sA = (Rd.required = By, Rd);
var ga = new S(""),
    Hy = new S("");

function xn(e) {
    return !e.moduleRef
}

function $y(e) {
    let t = xn(e) ? e.r3Injector : e.moduleRef.injector,
        n = t.get(Y);
    return n.run(() => {
        xn(e) ? e.r3Injector.resolveInjectorInitializers() : e.moduleRef.resolveInjectorInitializers();
        let r = t.get(Ce),
            o;
        if (n.runOutsideAngular(() => {
                o = n.onError.subscribe({
                    next: r
                })
            }), xn(e)) {
            let i = () => t.destroy(),
                s = e.platformInjector.get(ga);
            s.add(i), t.onDestroy(() => {
                o.unsubscribe(), s.delete(i)
            })
        } else {
            let i = () => e.moduleRef.destroy(),
                s = e.platformInjector.get(ga);
            s.add(i), e.moduleRef.onDestroy(() => {
                mn(e.allPlatformModules, e.moduleRef), o.unsubscribe(), s.delete(i)
            })
        }
        return Gy(r, n, () => {
            let i = t.get(at),
                s = i.add(),
                a = t.get(sa);
            return a.runInitializers(), a.donePromise.then(() => {
                let c = t.get(ha, Nn);
                if (Dd(c || Nn), !t.get(Hy, !0)) return xn(e) ? t.get(Sn) : (e.allPlatformModules.push(e.moduleRef), e.moduleRef);
                if (xn(e)) {
                    let l = t.get(Sn);
                    return e.rootComponent !== void 0 && l.bootstrap(e.rootComponent), l
                } else return Uy?.(e.moduleRef, e.allPlatformModules), e.moduleRef
            }).finally(() => void i.remove(s))
        })
    })
}
var Uy;

function Gy(e, t, n) {
    try {
        let r = n();
        return ia(r) ? r.catch(o => {
            throw t.runOutsideAngular(() => e(o)), o
        }) : r
    } catch (r) {
        throw t.runOutsideAngular(() => e(r)), r
    }
}
var Co = null;

function zy(e = [], t) {
    return Ke.create({
        name: t,
        providers: [{
            provide: vi,
            useValue: "platform"
        }, {
            provide: ga,
            useValue: new Set([() => Co = null])
        }, ...e]
    })
}

function Wy(e = []) {
    if (Co) return Co;
    let t = zy(e);
    return Co = t, dd(), qy(t), t
}

function qy(e) {
    let t = e.get(Qu, null);
    Tr(e, () => {
        t?.forEach(n => n())
    })
}
var Zy = (() => {
    class e {
        static __NG_ELEMENT_ID__ = Yy
    }
    return e
})();

function Yy(e) {
    return Qy(z(), b(), (e & 16) === 16)
}

function Qy(e, t, n) {
    if (ke(e) && !n) {
        let r = ie(e.index, t);
        return new lt(r, r)
    } else if (e.type & 175) {
        let r = t[X];
        return new lt(r, t)
    }
    return null
}

function aA(e) {
    A(8);
    try {
        let {
            rootComponent: t,
            appProviders: n,
            platformProviders: r
        } = e, o = Wy(r), i = [Nd({}), {
            provide: Ne,
            useExisting: pa
        }, Zc, ...n || []], s = new In({
            providers: i,
            parent: o,
            debugName: "",
            runEnvironmentInitializers: !1
        });
        return $y({
            r3Injector: s.injector,
            platformInjector: o,
            rootComponent: t
        })
    } catch (t) {
        return Promise.reject(t)
    } finally {
        A(9)
    }
}

function cA(e) {
    return typeof e == "boolean" ? e : e != null && e !== "false"
}
var jd = null;

function wo() {
    return jd
}

function Ky(e) {
    jd ??= e
}
var ma = class {},
    ya = (() => {
        class e {
            historyGo(n) {
                throw new Error("")
            }
            static \u0275fac = function(r) {
                return new(r || e)
            };
            static \u0275prov = O({
                token: e,
                factory: () => D(Vd),
                providedIn: "platform"
            })
        }
        return e
    })();
var Vd = (() => {
    class e extends ya {
        _location;
        _history;
        _doc = D(xt);
        constructor() {
            super(), this._location = window.location, this._history = window.history
        }
        getBaseHrefFromDOM() {
            return wo().getBaseHref(this._doc)
        }
        onPopState(n) {
            let r = wo().getGlobalEventTarget(this._doc, "window");
            return r.addEventListener("popstate", n, !1), () => r.removeEventListener("popstate", n)
        }
        onHashChange(n) {
            let r = wo().getGlobalEventTarget(this._doc, "window");
            return r.addEventListener("hashchange", n, !1), () => r.removeEventListener("hashchange", n)
        }
        get href() {
            return this._location.href
        }
        get protocol() {
            return this._location.protocol
        }
        get hostname() {
            return this._location.hostname
        }
        get port() {
            return this._location.port
        }
        get pathname() {
            return this._location.pathname
        }
        get search() {
            return this._location.search
        }
        get hash() {
            return this._location.hash
        }
        set pathname(n) {
            this._location.pathname = n
        }
        pushState(n, r, o) {
            this._history.pushState(n, r, o)
        }
        replaceState(n, r, o) {
            this._history.replaceState(n, r, o)
        }
        forward() {
            this._history.forward()
        }
        back() {
            this._history.back()
        }
        historyGo(n = 0) {
            this._history.go(n)
        }
        getState() {
            return this._history.state
        }
        static \u0275fac = function(r) {
            return new(r || e)
        };
        static \u0275prov = O({
            token: e,
            factory: () => new e,
            providedIn: "platform"
        })
    }
    return e
})();

function Bd(e, t) {
    return e ? t ? e.endsWith("/") ? t.startsWith("/") ? e + t.slice(1) : e + t : t.startsWith("/") ? e + t : `${e}/${t}` : e : t
}

function Pd(e) {
    let t = e.search(/#|\?|$/);
    return e[t - 1] === "/" ? e.slice(0, t - 1) + e.slice(t) : e
}

function Le(e) {
    return e && e[0] !== "?" ? `?${e}` : e
}
var _o = (() => {
        class e {
            historyGo(n) {
                throw new Error("")
            }
            static \u0275fac = function(r) {
                return new(r || e)
            };
            static \u0275prov = O({
                token: e,
                factory: () => D($d),
                providedIn: "root"
            })
        }
        return e
    })(),
    Hd = new S(""),
    $d = (() => {
        class e extends _o {
            _platformLocation;
            _baseHref;
            _removeListenerFns = [];
            constructor(n, r) {
                super(), this._platformLocation = n, this._baseHref = r ?? this._platformLocation.getBaseHrefFromDOM() ?? D(xt).location?.origin ?? ""
            }
            ngOnDestroy() {
                for (; this._removeListenerFns.length;) this._removeListenerFns.pop()()
            }
            onPopState(n) {
                this._removeListenerFns.push(this._platformLocation.onPopState(n), this._platformLocation.onHashChange(n))
            }
            getBaseHref() {
                return this._baseHref
            }
            prepareExternalUrl(n) {
                return Bd(this._baseHref, n)
            }
            path(n = !1) {
                let r = this._platformLocation.pathname + Le(this._platformLocation.search),
                    o = this._platformLocation.hash;
                return o && n ? `${r}${o}` : r
            }
            pushState(n, r, o, i) {
                let s = this.prepareExternalUrl(o + Le(i));
                this._platformLocation.pushState(n, r, s)
            }
            replaceState(n, r, o, i) {
                let s = this.prepareExternalUrl(o + Le(i));
                this._platformLocation.replaceState(n, r, s)
            }
            forward() {
                this._platformLocation.forward()
            }
            back() {
                this._platformLocation.back()
            }
            getState() {
                return this._platformLocation.getState()
            }
            historyGo(n = 0) {
                this._platformLocation.historyGo?.(n)
            }
            static \u0275fac = function(r) {
                return new(r || e)(B(ya), B(Hd, 8))
            };
            static \u0275prov = O({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            })
        }
        return e
    })(),
    Ud = (() => {
        class e {
            _subject = new De;
            _basePath;
            _locationStrategy;
            _urlChangeListeners = [];
            _urlChangeSubscription = null;
            constructor(n) {
                this._locationStrategy = n;
                let r = this._locationStrategy.getBaseHref();
                this._basePath = eD(Pd(Ld(r))), this._locationStrategy.onPopState(o => {
                    this._subject.next({
                        url: this.path(!0),
                        pop: !0,
                        state: o.state,
                        type: o.type
                    })
                })
            }
            ngOnDestroy() {
                this._urlChangeSubscription?.unsubscribe(), this._urlChangeListeners = []
            }
            path(n = !1) {
                return this.normalize(this._locationStrategy.path(n))
            }
            getState() {
                return this._locationStrategy.getState()
            }
            isCurrentPathEqualTo(n, r = "") {
                return this.path() == this.normalize(n + Le(r))
            }
            normalize(n) {
                return e.stripTrailingSlash(Xy(this._basePath, Ld(n)))
            }
            prepareExternalUrl(n) {
                return n && n[0] !== "/" && (n = "/" + n), this._locationStrategy.prepareExternalUrl(n)
            }
            go(n, r = "", o = null) {
                this._locationStrategy.pushState(o, "", n, r), this._notifyUrlChangeListeners(this.prepareExternalUrl(n + Le(r)), o)
            }
            replaceState(n, r = "", o = null) {
                this._locationStrategy.replaceState(o, "", n, r), this._notifyUrlChangeListeners(this.prepareExternalUrl(n + Le(r)), o)
            }
            forward() {
                this._locationStrategy.forward()
            }
            back() {
                this._locationStrategy.back()
            }
            historyGo(n = 0) {
                this._locationStrategy.historyGo?.(n)
            }
            onUrlChange(n) {
                return this._urlChangeListeners.push(n), this._urlChangeSubscription ??= this.subscribe(r => {
                    this._notifyUrlChangeListeners(r.url, r.state)
                }), () => {
                    let r = this._urlChangeListeners.indexOf(n);
                    this._urlChangeListeners.splice(r, 1), this._urlChangeListeners.length === 0 && (this._urlChangeSubscription?.unsubscribe(), this._urlChangeSubscription = null)
                }
            }
            _notifyUrlChangeListeners(n = "", r) {
                this._urlChangeListeners.forEach(o => o(n, r))
            }
            subscribe(n, r, o) {
                return this._subject.subscribe({
                    next: n,
                    error: r ?? void 0,
                    complete: o ?? void 0
                })
            }
            static normalizeQueryParams = Le;
            static joinWithSlash = Bd;
            static stripTrailingSlash = Pd;
            static \u0275fac = function(r) {
                return new(r || e)(B(_o))
            };
            static \u0275prov = O({
                token: e,
                factory: () => Jy(),
                providedIn: "root"
            })
        }
        return e
    })();

function Jy() {
    return new Ud(B(_o))
}

function Xy(e, t) {
    if (!e || !t.startsWith(e)) return t;
    let n = t.substring(e.length);
    return n === "" || ["/", ";", "?", "#"].includes(n[0]) ? n : t
}

function Ld(e) {
    return e.replace(/\/index.html$/, "")
}

function eD(e) {
    if (new RegExp("^(https?:)?//").test(e)) {
        let [, n] = e.split(/\/\/[^\/]+/);
        return n
    }
    return e
}
var tD = (() => {
    class e {
        static \u0275fac = function(r) {
            return new(r || e)
        };
        static \u0275mod = ea({
            type: e
        });
        static \u0275inj = Ir({})
    }
    return e
})();

function nD(e, t) {
    t = encodeURIComponent(t);
    for (let n of e.split(";")) {
        let r = n.indexOf("="),
            [o, i] = r == -1 ? [n, ""] : [n.slice(0, r), n.slice(r + 1)];
        if (o.trim() === t) return decodeURIComponent(i)
    }
    return null
}
var Da = class {};
var RR = "browser";
export {
    W as a, q as b, L as c, of as d, T as e, Bo as f, Ho as g, De as h, zt as i, Wt as j, Me as k, gf as l, mf as m, yf as n, Ue as o, Ge as p, bf as q, ze as r, fr as s, Mf as t, Sf as u, qt as v, Xa as w, Nf as x, Zt as y, $o as z, Af as A, Rf as B, Uo as C, Of as D, Ff as E, kf as F, Pf as G, Lf as H, jf as I, M as J, Er as K, O as L, Ir as M, Hf as N, S as O, B as P, D as Q, tn as R, vi as S, te as T, Tr as U, Nc as V, xc as W, Gc as X, zc as Y, Ke as Z, xt as _, fn as $, Je as aa, Ce as ba, pp as ca, Yc as da, at as ea, Au as fa, Up as ga, Os as ha, Yp as ia, Qp as ja, Qu as ka, Jp as la, Xp as ma, kt as na, wh as oa, _h as pa, Uh as qa, eo as ra, En as sa, Ul as ta, Mn as ua, Xs as va, Kl as wa, Jl as xa, Im as ya, ea as za, Xl as Aa, nd as Ba, na as Ca, we as Da, Y as Ea, Hm as Fa, ia as Ga, ld as Ha, Sn as Ia, pd as Ja, Gm as Ka, zm as La, Wm as Ma, qm as Na, hd as Oa, ca as Pa, ua as Qa, gd as Ra, la as Sa, da as Ta, md as Ua, Qm as Va, vd as Wa, Ed as Xa, Jm as Ya, Cd as Za, gy as _a, wd as $a, fa as ab, _d as bb, Td as cb, vy as db, Md as eb, _y as fb, by as gb, Ty as hb, Ny as ib, Ay as jb, Ry as kb, sA as lb, Zy as mb, aA as nb, cA as ob, wo as pb, Ky as qb, ma as rb, Ud as sb, tD as tb, nD as ub, Da as vb, RR as wb
};