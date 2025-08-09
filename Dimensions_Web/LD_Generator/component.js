import {
    $a as E,
    Aa as D,
    Ba as G,
    Da as K,
    Ga as gt,
    J as me,
    Ja as ee,
    K as W,
    Ka as p,
    L as Le,
    La as h,
    M as ge,
    Ma as pt,
    Na as ht,
    O as R,
    Oa as A,
    Pa as r,
    Q as pe,
    Qa as s,
    Ra as b,
    Sa as f,
    Ta as P,
    Ua as L,
    V as m,
    Va as V,
    W as g,
    Wa as x,
    X as _,
    Xa as te,
    Y as k,
    Ya as d,
    Z as ut,
    Za as F,
    _a as l,
    a as w,
    ab as ne,
    b as I,
    bb as ft,
    cb as _t,
    da as X,
    db as Ct,
    eb as bt,
    fa as he,
    fb as Q,
    ga as mt,
    gb as xt,
    h as st,
    ha as $,
    jb as N,
    k as lt,
    kb as ie,
    mb as vt,
    oa as fe,
    ob as yt,
    p as ct,
    pa as _e,
    pb as Ne,
    qa as c,
    ta as Ce,
    tb as xe,
    u as dt,
    ua as C,
    ya as q,
    za as be
} from "./lib.js";
var Dt = (() => {
        class n {
            _renderer;
            _elementRef;
            onChange = e => {};
            onTouched = () => {};
            constructor(e, i) {
                this._renderer = e, this._elementRef = i
            }
            setProperty(e, i) {
                this._renderer.setProperty(this._elementRef.nativeElement, e, i)
            }
            registerOnTouched(e) {
                this.onTouched = e
            }
            registerOnChange(e) {
                this.onChange = e
            }
            setDisabledState(e) {
                this.setProperty("disabled", e)
            }
            static \u0275fac = function(i) {
                return new(i || n)(C(Ce), C($))
            };
            static \u0275dir = D({
                type: n
            })
        }
        return n
    })(),
    Ft = (() => {
        class n extends Dt {
            static \u0275fac = (() => {
                let e;
                return function(o) {
                    return (e || (e = mt(n)))(o || n)
                }
            })();
            static \u0275dir = D({
                type: n,
                features: [G]
            })
        }
        return n
    })(),
    Se = new R("");
var mn = {
    provide: Se,
    useExisting: W(() => De),
    multi: !0
};

function gn() {
    let n = Ne() ? Ne().getUserAgent() : "";
    return /android (\d+)/.test(n.toLowerCase())
}
var pn = new R(""),
    De = (() => {
        class n extends Dt {
            _compositionMode;
            _composing = !1;
            constructor(e, i, o) {
                super(e, i), this._compositionMode = o, this._compositionMode == null && (this._compositionMode = !gn())
            }
            writeValue(e) {
                let i = e ?? "";
                this.setProperty("value", i)
            }
            _handleInput(e) {
                (!this._compositionMode || this._compositionMode && !this._composing) && this.onChange(e)
            }
            _compositionStart() {
                this._composing = !0
            }
            _compositionEnd(e) {
                this._composing = !1, this._compositionMode && this.onChange(e)
            }
            static \u0275fac = function(i) {
                return new(i || n)(C(Ce), C($), C(pn, 8))
            };
            static \u0275dir = D({
                type: n,
                selectors: [
                    ["input", "formControlName", "", 3, "type", "checkbox"],
                    ["textarea", "formControlName", ""],
                    ["input", "formControl", "", 3, "type", "checkbox"],
                    ["textarea", "formControl", ""],
                    ["input", "ngModel", "", 3, "type", "checkbox"],
                    ["textarea", "ngModel", ""],
                    ["", "ngDefaultControl", ""]
                ],
                hostBindings: function(i, o) {
                    i & 1 && x("input", function(u) {
                        return o._handleInput(u.target.value)
                    })("blur", function() {
                        return o.onTouched()
                    })("compositionstart", function() {
                        return o._compositionStart()
                    })("compositionend", function(u) {
                        return o._compositionEnd(u.target.value)
                    })
                },
                standalone: !1,
                features: [Q([mn]), G]
            })
        }
        return n
    })();

function We(n) {
    return n == null || $e(n) === 0
}

function $e(n) {
    return n == null ? null : Array.isArray(n) || typeof n == "string" ? n.length : n instanceof Set ? n.size : null
}
var qe = new R(""),
    Ke = new R(""),
    hn = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    H = class {
        static min(t) {
            return fn(t)
        }
        static max(t) {
            return _n(t)
        }
        static required(t) {
            return Cn(t)
        }
        static requiredTrue(t) {
            return bn(t)
        }
        static email(t) {
            return xn(t)
        }
        static minLength(t) {
            return vn(t)
        }
        static maxLength(t) {
            return yn(t)
        }
        static pattern(t) {
            return Mn(t)
        }
        static nullValidator(t) {
            return At()
        }
        static compose(t) {
            return Bt(t)
        }
        static composeAsync(t) {
            return Rt(t)
        }
    };

function fn(n) {
    return t => {
        if (t.value == null || n == null) return null;
        let e = parseFloat(t.value);
        return !isNaN(e) && e < n ? {
            min: {
                min: n,
                actual: t.value
            }
        } : null
    }
}

function _n(n) {
    return t => {
        if (t.value == null || n == null) return null;
        let e = parseFloat(t.value);
        return !isNaN(e) && e > n ? {
            max: {
                max: n,
                actual: t.value
            }
        } : null
    }
}

function Cn(n) {
    return We(n.value) ? {
        required: !0
    } : null
}

function bn(n) {
    return n.value === !0 ? null : {
        required: !0
    }
}

function xn(n) {
    return We(n.value) || hn.test(n.value) ? null : {
        email: !0
    }
}

function vn(n) {
    return t => {
        let e = t.value?.length ?? $e(t.value);
        return e === null || e === 0 ? null : e < n ? {
            minlength: {
                requiredLength: n,
                actualLength: e
            }
        } : null
    }
}

function yn(n) {
    return t => {
        let e = t.value?.length ?? $e(t.value);
        return e !== null && e > n ? {
            maxlength: {
                requiredLength: n,
                actualLength: e
            }
        } : null
    }
}

function Mn(n) {
    if (!n) return At;
    let t, e;
    return typeof n == "string" ? (e = "", n.charAt(0) !== "^" && (e += "^"), e += n, n.charAt(n.length - 1) !== "$" && (e += "$"), t = new RegExp(e)) : (e = n.toString(), t = n), i => {
        if (We(i.value)) return null;
        let o = i.value;
        return t.test(o) ? null : {
            pattern: {
                requiredPattern: e,
                actualValue: o
            }
        }
    }
}

function At(n) {
    return null
}

function It(n) {
    return n != null
}

function Tt(n) {
    return gt(n) ? lt(n) : n
}

function Gt(n) {
    let t = {};
    return n.forEach(e => {
        t = e != null ? w(w({}, t), e) : t
    }), Object.keys(t).length === 0 ? null : t
}

function Lt(n, t) {
    return t.map(e => e(n))
}

function Pn(n) {
    return !n.validate
}

function Nt(n) {
    return n.map(t => Pn(t) ? t : e => t.validate(e))
}

function Bt(n) {
    if (!n) return null;
    let t = n.filter(It);
    return t.length == 0 ? null : function(e) {
        return Gt(Lt(e, t))
    }
}

function Ut(n) {
    return n != null ? Bt(Nt(n)) : null
}

function Rt(n) {
    if (!n) return null;
    let t = n.filter(It);
    return t.length == 0 ? null : function(e) {
        let i = Lt(e, t).map(Tt);
        return dt(i).pipe(ct(Gt))
    }
}

function Ht(n) {
    return n != null ? Rt(Nt(n)) : null
}

function Mt(n, t) {
    return n === null ? [t] : Array.isArray(n) ? [...n, t] : [n, t]
}

function jt(n) {
    return n._rawValidators
}

function zt(n) {
    return n._rawAsyncValidators
}

function Be(n) {
    return n ? Array.isArray(n) ? n : [n] : []
}

function ye(n, t) {
    return Array.isArray(n) ? n.includes(t) : n === t
}

function Pt(n, t) {
    let e = Be(t);
    return Be(n).forEach(o => {
        ye(e, o) || e.push(o)
    }), e
}

function Ot(n, t) {
    return Be(t).filter(e => !ye(n, e))
}
var Me = class {
        get value() {
            return this.control ? this.control.value : null
        }
        get valid() {
            return this.control ? this.control.valid : null
        }
        get invalid() {
            return this.control ? this.control.invalid : null
        }
        get pending() {
            return this.control ? this.control.pending : null
        }
        get disabled() {
            return this.control ? this.control.disabled : null
        }
        get enabled() {
            return this.control ? this.control.enabled : null
        }
        get errors() {
            return this.control ? this.control.errors : null
        }
        get pristine() {
            return this.control ? this.control.pristine : null
        }
        get dirty() {
            return this.control ? this.control.dirty : null
        }
        get touched() {
            return this.control ? this.control.touched : null
        }
        get status() {
            return this.control ? this.control.status : null
        }
        get untouched() {
            return this.control ? this.control.untouched : null
        }
        get statusChanges() {
            return this.control ? this.control.statusChanges : null
        }
        get valueChanges() {
            return this.control ? this.control.valueChanges : null
        }
        get path() {
            return null
        }
        _composedValidatorFn;_composedAsyncValidatorFn;_rawValidators = [];_rawAsyncValidators = [];_setValidators(t) {
            this._rawValidators = t || [], this._composedValidatorFn = Ut(this._rawValidators)
        }
        _setAsyncValidators(t) {
            this._rawAsyncValidators = t || [], this._composedAsyncValidatorFn = Ht(this._rawAsyncValidators)
        }
        get validator() {
            return this._composedValidatorFn || null
        }
        get asyncValidator() {
            return this._composedAsyncValidatorFn || null
        }
        _onDestroyCallbacks = [];_registerOnDestroy(t) {
            this._onDestroyCallbacks.push(t)
        }
        _invokeOnDestroyCallbacks() {
            this._onDestroyCallbacks.forEach(t => t()), this._onDestroyCallbacks = []
        }
        reset(t = void 0) {
            this.control && this.control.reset(t)
        }
        hasError(t, e) {
            return this.control ? this.control.hasError(t, e) : !1
        }
        getError(t, e) {
            return this.control ? this.control.getError(t, e) : null
        }
    },
    j = class extends Me {
        name;
        get formDirective() {
            return null
        }
        get path() {
            return null
        }
    },
    B = class extends Me {
        _parent = null;
        name = null;
        valueAccessor = null
    },
    Pe = class {
        _cd;
        constructor(t) {
            this._cd = t
        }
        get isTouched() {
            return this._cd?.control?._touched?.(), !!this._cd?.control?.touched
        }
        get isUntouched() {
            return !!this._cd?.control?.untouched
        }
        get isPristine() {
            return this._cd?.control?._pristine?.(), !!this._cd?.control?.pristine
        }
        get isDirty() {
            return !!this._cd?.control?.dirty
        }
        get isValid() {
            return this._cd?.control?._status?.(), !!this._cd?.control?.valid
        }
        get isInvalid() {
            return !!this._cd?.control?.invalid
        }
        get isPending() {
            return !!this._cd?.control?.pending
        }
        get isSubmitted() {
            return this._cd?._submitted?.(), !!this._cd?.submitted
        }
    },
    On = {
        "[class.ng-untouched]": "isUntouched",
        "[class.ng-touched]": "isTouched",
        "[class.ng-pristine]": "isPristine",
        "[class.ng-dirty]": "isDirty",
        "[class.ng-valid]": "isValid",
        "[class.ng-invalid]": "isInvalid",
        "[class.ng-pending]": "isPending"
    },
    Yi = I(w({}, On), {
        "[class.ng-submitted]": "isSubmitted"
    }),
    Wt = (() => {
        class n extends Pe {
            constructor(e) {
                super(e)
            }
            static \u0275fac = function(i) {
                return new(i || n)(C(B, 2))
            };
            static \u0275dir = D({
                type: n,
                selectors: [
                    ["", "formControlName", ""],
                    ["", "ngModel", ""],
                    ["", "formControl", ""]
                ],
                hostVars: 14,
                hostBindings: function(i, o) {
                    i & 2 && F("ng-untouched", o.isUntouched)("ng-touched", o.isTouched)("ng-pristine", o.isPristine)("ng-dirty", o.isDirty)("ng-valid", o.isValid)("ng-invalid", o.isInvalid)("ng-pending", o.isPending)
                },
                standalone: !1,
                features: [G]
            })
        }
        return n
    })(),
    $t = (() => {
        class n extends Pe {
            constructor(e) {
                super(e)
            }
            static \u0275fac = function(i) {
                return new(i || n)(C(j, 10))
            };
            static \u0275dir = D({
                type: n,
                selectors: [
                    ["", "formGroupName", ""],
                    ["", "formArrayName", ""],
                    ["", "ngModelGroup", ""],
                    ["", "formGroup", ""],
                    ["form", 3, "ngNoForm", ""],
                    ["", "ngForm", ""]
                ],
                hostVars: 16,
                hostBindings: function(i, o) {
                    i & 2 && F("ng-untouched", o.isUntouched)("ng-touched", o.isTouched)("ng-pristine", o.isPristine)("ng-dirty", o.isDirty)("ng-valid", o.isValid)("ng-invalid", o.isInvalid)("ng-pending", o.isPending)("ng-submitted", o.isSubmitted)
                },
                standalone: !1,
                features: [G]
            })
        }
        return n
    })();
var oe = "VALID",
    ve = "INVALID",
    Y = "PENDING",
    re = "DISABLED",
    U = class {},
    Oe = class extends U {
        value;
        source;
        constructor(t, e) {
            super(), this.value = t, this.source = e
        }
    },
    ae = class extends U {
        pristine;
        source;
        constructor(t, e) {
            super(), this.pristine = t, this.source = e
        }
    },
    se = class extends U {
        touched;
        source;
        constructor(t, e) {
            super(), this.touched = t, this.source = e
        }
    },
    J = class extends U {
        status;
        source;
        constructor(t, e) {
            super(), this.status = t, this.source = e
        }
    },
    Ue = class extends U {
        source;
        constructor(t) {
            super(), this.source = t
        }
    },
    Re = class extends U {
        source;
        constructor(t) {
            super(), this.source = t
        }
    };

function Qe(n) {
    return (Fe(n) ? n.validators : n) || null
}

function wn(n) {
    return Array.isArray(n) ? Ut(n) : n || null
}

function Ye(n, t) {
    return (Fe(t) ? t.asyncValidators : n) || null
}

function kn(n) {
    return Array.isArray(n) ? Ht(n) : n || null
}

function Fe(n) {
    return n != null && !Array.isArray(n) && typeof n == "object"
}

function qt(n, t, e) {
    let i = n.controls;
    if (!(t ? Object.keys(i) : i).length) throw new me(1e3, "");
    if (!i[e]) throw new me(1001, "")
}

function Kt(n, t, e) {
    n._forEachChild((i, o) => {
        if (e[o] === void 0) throw new me(1002, "")
    })
}
var Z = class {
        _pendingDirty = !1;
        _hasOwnPendingAsyncValidator = null;
        _pendingTouched = !1;
        _onCollectionChange = () => {};
        _updateOn;
        _parent = null;
        _asyncValidationSubscription;
        _composedValidatorFn;
        _composedAsyncValidatorFn;
        _rawValidators;
        _rawAsyncValidators;
        value;
        constructor(t, e) {
            this._assignValidators(t), this._assignAsyncValidators(e)
        }
        get validator() {
            return this._composedValidatorFn
        }
        set validator(t) {
            this._rawValidators = this._composedValidatorFn = t
        }
        get asyncValidator() {
            return this._composedAsyncValidatorFn
        }
        set asyncValidator(t) {
            this._rawAsyncValidators = this._composedAsyncValidatorFn = t
        }
        get parent() {
            return this._parent
        }
        get status() {
            return N(this.statusReactive)
        }
        set status(t) {
            N(() => this.statusReactive.set(t))
        }
        _status = ie(() => this.statusReactive());
        statusReactive = X(void 0);
        get valid() {
            return this.status === oe
        }
        get invalid() {
            return this.status === ve
        }
        get pending() {
            return this.status == Y
        }
        get disabled() {
            return this.status === re
        }
        get enabled() {
            return this.status !== re
        }
        errors;
        get pristine() {
            return N(this.pristineReactive)
        }
        set pristine(t) {
            N(() => this.pristineReactive.set(t))
        }
        _pristine = ie(() => this.pristineReactive());
        pristineReactive = X(!0);
        get dirty() {
            return !this.pristine
        }
        get touched() {
            return N(this.touchedReactive)
        }
        set touched(t) {
            N(() => this.touchedReactive.set(t))
        }
        _touched = ie(() => this.touchedReactive());
        touchedReactive = X(!1);
        get untouched() {
            return !this.touched
        }
        _events = new st;
        events = this._events.asObservable();
        valueChanges;
        statusChanges;
        get updateOn() {
            return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change"
        }
        setValidators(t) {
            this._assignValidators(t)
        }
        setAsyncValidators(t) {
            this._assignAsyncValidators(t)
        }
        addValidators(t) {
            this.setValidators(Pt(t, this._rawValidators))
        }
        addAsyncValidators(t) {
            this.setAsyncValidators(Pt(t, this._rawAsyncValidators))
        }
        removeValidators(t) {
            this.setValidators(Ot(t, this._rawValidators))
        }
        removeAsyncValidators(t) {
            this.setAsyncValidators(Ot(t, this._rawAsyncValidators))
        }
        hasValidator(t) {
            return ye(this._rawValidators, t)
        }
        hasAsyncValidator(t) {
            return ye(this._rawAsyncValidators, t)
        }
        clearValidators() {
            this.validator = null
        }
        clearAsyncValidators() {
            this.asyncValidator = null
        }
        markAsTouched(t = {}) {
            let e = this.touched === !1;
            this.touched = !0;
            let i = t.sourceControl ?? this;
            this._parent && !t.onlySelf && this._parent.markAsTouched(I(w({}, t), {
                sourceControl: i
            })), e && t.emitEvent !== !1 && this._events.next(new se(!0, i))
        }
        markAllAsDirty(t = {}) {
            this.markAsDirty({
                onlySelf: !0,
                emitEvent: t.emitEvent,
                sourceControl: this
            }), this._forEachChild(e => e.markAllAsDirty(t))
        }
        markAllAsTouched(t = {}) {
            this.markAsTouched({
                onlySelf: !0,
                emitEvent: t.emitEvent,
                sourceControl: this
            }), this._forEachChild(e => e.markAllAsTouched(t))
        }
        markAsUntouched(t = {}) {
            let e = this.touched === !0;
            this.touched = !1, this._pendingTouched = !1;
            let i = t.sourceControl ?? this;
            this._forEachChild(o => {
                o.markAsUntouched({
                    onlySelf: !0,
                    emitEvent: t.emitEvent,
                    sourceControl: i
                })
            }), this._parent && !t.onlySelf && this._parent._updateTouched(t, i), e && t.emitEvent !== !1 && this._events.next(new se(!1, i))
        }
        markAsDirty(t = {}) {
            let e = this.pristine === !0;
            this.pristine = !1;
            let i = t.sourceControl ?? this;
            this._parent && !t.onlySelf && this._parent.markAsDirty(I(w({}, t), {
                sourceControl: i
            })), e && t.emitEvent !== !1 && this._events.next(new ae(!1, i))
        }
        markAsPristine(t = {}) {
            let e = this.pristine === !1;
            this.pristine = !0, this._pendingDirty = !1;
            let i = t.sourceControl ?? this;
            this._forEachChild(o => {
                o.markAsPristine({
                    onlySelf: !0,
                    emitEvent: t.emitEvent
                })
            }), this._parent && !t.onlySelf && this._parent._updatePristine(t, i), e && t.emitEvent !== !1 && this._events.next(new ae(!0, i))
        }
        markAsPending(t = {}) {
            this.status = Y;
            let e = t.sourceControl ?? this;
            t.emitEvent !== !1 && (this._events.next(new J(this.status, e)), this.statusChanges.emit(this.status)), this._parent && !t.onlySelf && this._parent.markAsPending(I(w({}, t), {
                sourceControl: e
            }))
        }
        disable(t = {}) {
            let e = this._parentMarkedDirty(t.onlySelf);
            this.status = re, this.errors = null, this._forEachChild(o => {
                o.disable(I(w({}, t), {
                    onlySelf: !0
                }))
            }), this._updateValue();
            let i = t.sourceControl ?? this;
            t.emitEvent !== !1 && (this._events.next(new Oe(this.value, i)), this._events.next(new J(this.status, i)), this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), this._updateAncestors(I(w({}, t), {
                skipPristineCheck: e
            }), this), this._onDisabledChange.forEach(o => o(!0))
        }
        enable(t = {}) {
            let e = this._parentMarkedDirty(t.onlySelf);
            this.status = oe, this._forEachChild(i => {
                i.enable(I(w({}, t), {
                    onlySelf: !0
                }))
            }), this.updateValueAndValidity({
                onlySelf: !0,
                emitEvent: t.emitEvent
            }), this._updateAncestors(I(w({}, t), {
                skipPristineCheck: e
            }), this), this._onDisabledChange.forEach(i => i(!1))
        }
        _updateAncestors(t, e) {
            this._parent && !t.onlySelf && (this._parent.updateValueAndValidity(t), t.skipPristineCheck || this._parent._updatePristine({}, e), this._parent._updateTouched({}, e))
        }
        setParent(t) {
            this._parent = t
        }
        getRawValue() {
            return this.value
        }
        updateValueAndValidity(t = {}) {
            if (this._setInitialStatus(), this._updateValue(), this.enabled) {
                let i = this._cancelExistingSubscription();
                this.errors = this._runValidator(), this.status = this._calculateStatus(), (this.status === oe || this.status === Y) && this._runAsyncValidator(i, t.emitEvent)
            }
            let e = t.sourceControl ?? this;
            t.emitEvent !== !1 && (this._events.next(new Oe(this.value, e)), this._events.next(new J(this.status, e)), this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), this._parent && !t.onlySelf && this._parent.updateValueAndValidity(I(w({}, t), {
                sourceControl: e
            }))
        }
        _updateTreeValidity(t = {
            emitEvent: !0
        }) {
            this._forEachChild(e => e._updateTreeValidity(t)), this.updateValueAndValidity({
                onlySelf: !0,
                emitEvent: t.emitEvent
            })
        }
        _setInitialStatus() {
            this.status = this._allControlsDisabled() ? re : oe
        }
        _runValidator() {
            return this.validator ? this.validator(this) : null
        }
        _runAsyncValidator(t, e) {
            if (this.asyncValidator) {
                this.status = Y, this._hasOwnPendingAsyncValidator = {
                    emitEvent: e !== !1,
                    shouldHaveEmitted: t !== !1
                };
                let i = Tt(this.asyncValidator(this));
                this._asyncValidationSubscription = i.subscribe(o => {
                    this._hasOwnPendingAsyncValidator = null, this.setErrors(o, {
                        emitEvent: e,
                        shouldHaveEmitted: t
                    })
                })
            }
        }
        _cancelExistingSubscription() {
            if (this._asyncValidationSubscription) {
                this._asyncValidationSubscription.unsubscribe();
                let t = (this._hasOwnPendingAsyncValidator?.emitEvent || this._hasOwnPendingAsyncValidator?.shouldHaveEmitted) ?? !1;
                return this._hasOwnPendingAsyncValidator = null, t
            }
            return !1
        }
        setErrors(t, e = {}) {
            this.errors = t, this._updateControlsErrors(e.emitEvent !== !1, this, e.shouldHaveEmitted)
        }
        get(t) {
            let e = t;
            return e == null || (Array.isArray(e) || (e = e.split(".")), e.length === 0) ? null : e.reduce((i, o) => i && i._find(o), this)
        }
        getError(t, e) {
            let i = e ? this.get(e) : this;
            return i && i.errors ? i.errors[t] : null
        }
        hasError(t, e) {
            return !!this.getError(t, e)
        }
        get root() {
            let t = this;
            for (; t._parent;) t = t._parent;
            return t
        }
        _updateControlsErrors(t, e, i) {
            this.status = this._calculateStatus(), t && this.statusChanges.emit(this.status), (t || i) && this._events.next(new J(this.status, e)), this._parent && this._parent._updateControlsErrors(t, e, i)
        }
        _initObservables() {
            this.valueChanges = new K, this.statusChanges = new K
        }
        _calculateStatus() {
            return this._allControlsDisabled() ? re : this.errors ? ve : this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(Y) ? Y : this._anyControlsHaveStatus(ve) ? ve : oe
        }
        _anyControlsHaveStatus(t) {
            return this._anyControls(e => e.status === t)
        }
        _anyControlsDirty() {
            return this._anyControls(t => t.dirty)
        }
        _anyControlsTouched() {
            return this._anyControls(t => t.touched)
        }
        _updatePristine(t, e) {
            let i = !this._anyControlsDirty(),
                o = this.pristine !== i;
            this.pristine = i, this._parent && !t.onlySelf && this._parent._updatePristine(t, e), o && this._events.next(new ae(this.pristine, e))
        }
        _updateTouched(t = {}, e) {
            this.touched = this._anyControlsTouched(), this._events.next(new se(this.touched, e)), this._parent && !t.onlySelf && this._parent._updateTouched(t, e)
        }
        _onDisabledChange = [];
        _registerOnCollectionChange(t) {
            this._onCollectionChange = t
        }
        _setUpdateStrategy(t) {
            Fe(t) && t.updateOn != null && (this._updateOn = t.updateOn)
        }
        _parentMarkedDirty(t) {
            let e = this._parent && this._parent.dirty;
            return !t && !!e && !this._parent._anyControlsDirty()
        }
        _find(t) {
            return null
        }
        _assignValidators(t) {
            this._rawValidators = Array.isArray(t) ? t.slice() : t, this._composedValidatorFn = wn(this._rawValidators)
        }
        _assignAsyncValidators(t) {
            this._rawAsyncValidators = Array.isArray(t) ? t.slice() : t, this._composedAsyncValidatorFn = kn(this._rawAsyncValidators)
        }
    },
    we = class extends Z {
        constructor(t, e, i) {
            super(Qe(e), Ye(i, e)), this.controls = t, this._initObservables(), this._setUpdateStrategy(e), this._setUpControls(), this.updateValueAndValidity({
                onlySelf: !0,
                emitEvent: !!this.asyncValidator
            })
        }
        controls;
        registerControl(t, e) {
            return this.controls[t] ? this.controls[t] : (this.controls[t] = e, e.setParent(this), e._registerOnCollectionChange(this._onCollectionChange), e)
        }
        addControl(t, e, i = {}) {
            this.registerControl(t, e), this.updateValueAndValidity({
                emitEvent: i.emitEvent
            }), this._onCollectionChange()
        }
        removeControl(t, e = {}) {
            this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}), delete this.controls[t], this.updateValueAndValidity({
                emitEvent: e.emitEvent
            }), this._onCollectionChange()
        }
        setControl(t, e, i = {}) {
            this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}), delete this.controls[t], e && this.registerControl(t, e), this.updateValueAndValidity({
                emitEvent: i.emitEvent
            }), this._onCollectionChange()
        }
        contains(t) {
            return this.controls.hasOwnProperty(t) && this.controls[t].enabled
        }
        setValue(t, e = {}) {
            Kt(this, !0, t), Object.keys(t).forEach(i => {
                qt(this, !0, i), this.controls[i].setValue(t[i], {
                    onlySelf: !0,
                    emitEvent: e.emitEvent
                })
            }), this.updateValueAndValidity(e)
        }
        patchValue(t, e = {}) {
            t != null && (Object.keys(t).forEach(i => {
                let o = this.controls[i];
                o && o.patchValue(t[i], {
                    onlySelf: !0,
                    emitEvent: e.emitEvent
                })
            }), this.updateValueAndValidity(e))
        }
        reset(t = {}, e = {}) {
            this._forEachChild((i, o) => {
                i.reset(t ? t[o] : null, {
                    onlySelf: !0,
                    emitEvent: e.emitEvent
                })
            }), this._updatePristine(e, this), this._updateTouched(e, this), this.updateValueAndValidity(e)
        }
        getRawValue() {
            return this._reduceChildren({}, (t, e, i) => (t[i] = e.getRawValue(), t))
        }
        _syncPendingControls() {
            let t = this._reduceChildren(!1, (e, i) => i._syncPendingControls() ? !0 : e);
            return t && this.updateValueAndValidity({
                onlySelf: !0
            }), t
        }
        _forEachChild(t) {
            Object.keys(this.controls).forEach(e => {
                let i = this.controls[e];
                i && t(i, e)
            })
        }
        _setUpControls() {
            this._forEachChild(t => {
                t.setParent(this), t._registerOnCollectionChange(this._onCollectionChange)
            })
        }
        _updateValue() {
            this.value = this._reduceValue()
        }
        _anyControls(t) {
            for (let [e, i] of Object.entries(this.controls))
                if (this.contains(e) && t(i)) return !0;
            return !1
        }
        _reduceValue() {
            let t = {};
            return this._reduceChildren(t, (e, i, o) => ((i.enabled || this.disabled) && (e[o] = i.value), e))
        }
        _reduceChildren(t, e) {
            let i = t;
            return this._forEachChild((o, a) => {
                i = e(i, o, a)
            }), i
        }
        _allControlsDisabled() {
            for (let t of Object.keys(this.controls))
                if (this.controls[t].enabled) return !1;
            return Object.keys(this.controls).length > 0 || this.disabled
        }
        _find(t) {
            return this.controls.hasOwnProperty(t) ? this.controls[t] : null
        }
    };
var He = class extends we {};
var ce = new R("", {
        providedIn: "root",
        factory: () => de
    }),
    de = "always";

function Qt(n, t) {
    return [...t.path, n]
}

function je(n, t, e = de) {
    Je(n, t), t.valueAccessor.writeValue(n.value), (n.disabled || e === "always") && t.valueAccessor.setDisabledState?.(n.disabled), Vn(n, t), Dn(n, t), Sn(n, t), En(n, t)
}

function wt(n, t, e = !0) {
    let i = () => {};
    t.valueAccessor && (t.valueAccessor.registerOnChange(i), t.valueAccessor.registerOnTouched(i)), Ee(n, t), n && (t._invokeOnDestroyCallbacks(), n._registerOnCollectionChange(() => {}))
}

function ke(n, t) {
    n.forEach(e => {
        e.registerOnValidatorChange && e.registerOnValidatorChange(t)
    })
}

function En(n, t) {
    if (t.valueAccessor.setDisabledState) {
        let e = i => {
            t.valueAccessor.setDisabledState(i)
        };
        n.registerOnDisabledChange(e), t._registerOnDestroy(() => {
            n._unregisterOnDisabledChange(e)
        })
    }
}

function Je(n, t) {
    let e = jt(n);
    t.validator !== null ? n.setValidators(Mt(e, t.validator)) : typeof e == "function" && n.setValidators([e]);
    let i = zt(n);
    t.asyncValidator !== null ? n.setAsyncValidators(Mt(i, t.asyncValidator)) : typeof i == "function" && n.setAsyncValidators([i]);
    let o = () => n.updateValueAndValidity();
    ke(t._rawValidators, o), ke(t._rawAsyncValidators, o)
}

function Ee(n, t) {
    let e = !1;
    if (n !== null) {
        if (t.validator !== null) {
            let o = jt(n);
            if (Array.isArray(o) && o.length > 0) {
                let a = o.filter(u => u !== t.validator);
                a.length !== o.length && (e = !0, n.setValidators(a))
            }
        }
        if (t.asyncValidator !== null) {
            let o = zt(n);
            if (Array.isArray(o) && o.length > 0) {
                let a = o.filter(u => u !== t.asyncValidator);
                a.length !== o.length && (e = !0, n.setAsyncValidators(a))
            }
        }
    }
    let i = () => {};
    return ke(t._rawValidators, i), ke(t._rawAsyncValidators, i), e
}

function Vn(n, t) {
    t.valueAccessor.registerOnChange(e => {
        n._pendingValue = e, n._pendingChange = !0, n._pendingDirty = !0, n.updateOn === "change" && Yt(n, t)
    })
}

function Sn(n, t) {
    t.valueAccessor.registerOnTouched(() => {
        n._pendingTouched = !0, n.updateOn === "blur" && n._pendingChange && Yt(n, t), n.updateOn !== "submit" && n.markAsTouched()
    })
}

function Yt(n, t) {
    n._pendingDirty && n.markAsDirty(), n.setValue(n._pendingValue, {
        emitModelToViewChange: !1
    }), t.viewToModelUpdate(n._pendingValue), n._pendingChange = !1
}

function Dn(n, t) {
    let e = (i, o) => {
        t.valueAccessor.writeValue(i), o && t.viewToModelUpdate(i)
    };
    n.registerOnChange(e), t._registerOnDestroy(() => {
        n._unregisterOnChange(e)
    })
}

function Fn(n, t) {
    n == null, Je(n, t)
}

function An(n, t) {
    return Ee(n, t)
}

function Jt(n, t) {
    if (!n.hasOwnProperty("model")) return !1;
    let e = n.model;
    return e.isFirstChange() ? !0 : !Object.is(t, e.currentValue)
}

function In(n) {
    return Object.getPrototypeOf(n.constructor) === Ft
}

function Tn(n, t) {
    n._syncPendingControls(), t.forEach(e => {
        let i = e.control;
        i.updateOn === "submit" && i._pendingChange && (e.viewToModelUpdate(i._pendingValue), i._pendingChange = !1)
    })
}

function Zt(n, t) {
    if (!t) return null;
    Array.isArray(t);
    let e, i, o;
    return t.forEach(a => {
        a.constructor === De ? e = a : In(a) ? i = a : o = a
    }), o || i || e || null
}

function Gn(n, t) {
    let e = n.indexOf(t);
    e > -1 && n.splice(e, 1)
}

function kt(n, t) {
    let e = n.indexOf(t);
    e > -1 && n.splice(e, 1)
}

function Et(n) {
    return typeof n == "object" && n !== null && Object.keys(n).length === 2 && "value" in n && "disabled" in n
}
var le = class extends Z {
    defaultValue = null;
    _onChange = [];
    _pendingValue;
    _pendingChange = !1;
    constructor(t = null, e, i) {
        super(Qe(e), Ye(i, e)), this._applyFormState(t), this._setUpdateStrategy(e), this._initObservables(), this.updateValueAndValidity({
            onlySelf: !0,
            emitEvent: !!this.asyncValidator
        }), Fe(e) && (e.nonNullable || e.initialValueIsDefault) && (Et(t) ? this.defaultValue = t.value : this.defaultValue = t)
    }
    setValue(t, e = {}) {
        this.value = this._pendingValue = t, this._onChange.length && e.emitModelToViewChange !== !1 && this._onChange.forEach(i => i(this.value, e.emitViewToModelChange !== !1)), this.updateValueAndValidity(e)
    }
    patchValue(t, e = {}) {
        this.setValue(t, e)
    }
    reset(t = this.defaultValue, e = {}) {
        this._applyFormState(t), this.markAsPristine(e), this.markAsUntouched(e), this.setValue(this.value, e), this._pendingChange = !1
    }
    _updateValue() {}
    _anyControls(t) {
        return !1
    }
    _allControlsDisabled() {
        return this.disabled
    }
    registerOnChange(t) {
        this._onChange.push(t)
    }
    _unregisterOnChange(t) {
        kt(this._onChange, t)
    }
    registerOnDisabledChange(t) {
        this._onDisabledChange.push(t)
    }
    _unregisterOnDisabledChange(t) {
        kt(this._onDisabledChange, t)
    }
    _forEachChild(t) {}
    _syncPendingControls() {
        return this.updateOn === "submit" && (this._pendingDirty && this.markAsDirty(), this._pendingTouched && this.markAsTouched(), this._pendingChange) ? (this.setValue(this._pendingValue, {
            onlySelf: !0,
            emitModelToViewChange: !1
        }), !0) : !1
    }
    _applyFormState(t) {
        Et(t) ? (this.value = this._pendingValue = t.value, t.disabled ? this.disable({
            onlySelf: !0,
            emitEvent: !1
        }) : this.enable({
            onlySelf: !0,
            emitEvent: !1
        })) : this.value = this._pendingValue = t
    }
};
var Ln = n => n instanceof le;
var Nn = {
        provide: B,
        useExisting: W(() => Ze)
    },
    Vt = Promise.resolve(),
    Ze = (() => {
        class n extends B {
            _changeDetectorRef;
            callSetDisabledState;
            control = new le;
            static ngAcceptInputType_isDisabled;
            _registered = !1;
            viewModel;
            name = "";
            isDisabled;
            model;
            options;
            update = new K;
            constructor(e, i, o, a, u, y) {
                super(), this._changeDetectorRef = u, this.callSetDisabledState = y, this._parent = e, this._setValidators(i), this._setAsyncValidators(o), this.valueAccessor = Zt(this, a)
            }
            ngOnChanges(e) {
                if (this._checkForErrors(), !this._registered || "name" in e) {
                    if (this._registered && (this._checkName(), this.formDirective)) {
                        let i = e.name.previousValue;
                        this.formDirective.removeControl({
                            name: i,
                            path: this._getPath(i)
                        })
                    }
                    this._setUpControl()
                }
                "isDisabled" in e && this._updateDisabled(e), Jt(e, this.viewModel) && (this._updateValue(this.model), this.viewModel = this.model)
            }
            ngOnDestroy() {
                this.formDirective && this.formDirective.removeControl(this)
            }
            get path() {
                return this._getPath(this.name)
            }
            get formDirective() {
                return this._parent ? this._parent.formDirective : null
            }
            viewToModelUpdate(e) {
                this.viewModel = e, this.update.emit(e)
            }
            _setUpControl() {
                this._setUpdateStrategy(), this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this), this._registered = !0
            }
            _setUpdateStrategy() {
                this.options && this.options.updateOn != null && (this.control._updateOn = this.options.updateOn)
            }
            _isStandalone() {
                return !this._parent || !!(this.options && this.options.standalone)
            }
            _setUpStandalone() {
                je(this.control, this, this.callSetDisabledState), this.control.updateValueAndValidity({
                    emitEvent: !1
                })
            }
            _checkForErrors() {
                this._checkName()
            }
            _checkName() {
                this.options && this.options.name && (this.name = this.options.name), !this._isStandalone() && this.name
            }
            _updateValue(e) {
                Vt.then(() => {
                    this.control.setValue(e, {
                        emitViewToModelChange: !1
                    }), this._changeDetectorRef?.markForCheck()
                })
            }
            _updateDisabled(e) {
                let i = e.isDisabled.currentValue,
                    o = i !== 0 && yt(i);
                Vt.then(() => {
                    o && !this.control.disabled ? this.control.disable() : !o && this.control.disabled && this.control.enable(), this._changeDetectorRef?.markForCheck()
                })
            }
            _getPath(e) {
                return this._parent ? Qt(e, this._parent) : [e]
            }
            static \u0275fac = function(i) {
                return new(i || n)(C(j, 9), C(qe, 10), C(Ke, 10), C(Se, 10), C(vt, 8), C(ce, 8))
            };
            static \u0275dir = D({
                type: n,
                selectors: [
                    ["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]
                ],
                inputs: {
                    name: "name",
                    isDisabled: [0, "disabled", "isDisabled"],
                    model: [0, "ngModel", "model"],
                    options: [0, "ngModelOptions", "options"]
                },
                outputs: {
                    update: "ngModelChange"
                },
                exportAs: ["ngModel"],
                standalone: !1,
                features: [Q([Nn]), G, he]
            })
        }
        return n
    })();
var Xt = (() => {
    class n {
        static \u0275fac = function(i) {
            return new(i || n)
        };
        static \u0275dir = D({
            type: n,
            selectors: [
                ["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]
            ],
            hostAttrs: ["novalidate", ""],
            standalone: !1
        })
    }
    return n
})();
var Bn = {
    provide: Se,
    useExisting: W(() => Xe),
    multi: !0
};
var Un = (() => {
        class n {
            _accessors = [];
            add(e, i) {
                this._accessors.push([e, i])
            }
            remove(e) {
                for (let i = this._accessors.length - 1; i >= 0; --i)
                    if (this._accessors[i][1] === e) {
                        this._accessors.splice(i, 1);
                        return
                    }
            }
            select(e) {
                this._accessors.forEach(i => {
                    this._isSameGroup(i, e) && i[1] !== e && i[1].fireUncheck(e.value)
                })
            }
            _isSameGroup(e, i) {
                return e[0].control ? e[0]._parent === i._control._parent && e[1].name === i.name : !1
            }
            static \u0275fac = function(i) {
                return new(i || n)
            };
            static \u0275prov = Le({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            })
        }
        return n
    })(),
    Xe = (() => {
        class n extends Ft {
            _registry;
            _injector;
            _state;
            _control;
            _fn;
            setDisabledStateFired = !1;
            onChange = () => {};
            name;
            formControlName;
            value;
            callSetDisabledState = pe(ce, {
                optional: !0
            }) ?? de;
            constructor(e, i, o, a) {
                super(e, i), this._registry = o, this._injector = a
            }
            ngOnInit() {
                this._control = this._injector.get(B), this._checkName(), this._registry.add(this._control, this)
            }
            ngOnDestroy() {
                this._registry.remove(this)
            }
            writeValue(e) {
                this._state = e === this.value, this.setProperty("checked", this._state)
            }
            registerOnChange(e) {
                this._fn = e, this.onChange = () => {
                    e(this.value), this._registry.select(this)
                }
            }
            setDisabledState(e) {
                (this.setDisabledStateFired || e || this.callSetDisabledState === "whenDisabledForLegacyCode") && this.setProperty("disabled", e), this.setDisabledStateFired = !0
            }
            fireUncheck(e) {
                this.writeValue(e)
            }
            _checkName() {
                this.name && this.formControlName && (this.name, this.formControlName), !this.name && this.formControlName && (this.name = this.formControlName)
            }
            static \u0275fac = function(i) {
                return new(i || n)(C(Ce), C($), C(Un), C(ut))
            };
            static \u0275dir = D({
                type: n,
                selectors: [
                    ["input", "type", "radio", "formControlName", ""],
                    ["input", "type", "radio", "formControl", ""],
                    ["input", "type", "radio", "ngModel", ""]
                ],
                hostBindings: function(i, o) {
                    i & 1 && x("change", function() {
                        return o.onChange()
                    })("blur", function() {
                        return o.onTouched()
                    })
                },
                inputs: {
                    name: "name",
                    formControlName: "formControlName",
                    value: "value"
                },
                standalone: !1,
                features: [Q([Bn]), G]
            })
        }
        return n
    })();
var en = new R("");
var Rn = {
        provide: j,
        useExisting: W(() => et)
    },
    et = (() => {
        class n extends j {
            callSetDisabledState;
            get submitted() {
                return N(this._submittedReactive)
            }
            set submitted(e) {
                this._submittedReactive.set(e)
            }
            _submitted = ie(() => this._submittedReactive());
            _submittedReactive = X(!1);
            _oldForm;
            _onCollectionChange = () => this._updateDomValue();
            directives = [];
            form = null;
            ngSubmit = new K;
            constructor(e, i, o) {
                super(), this.callSetDisabledState = o, this._setValidators(e), this._setAsyncValidators(i)
            }
            ngOnChanges(e) {
                e.hasOwnProperty("form") && (this._updateValidators(), this._updateDomValue(), this._updateRegistrations(), this._oldForm = this.form)
            }
            ngOnDestroy() {
                this.form && (Ee(this.form, this), this.form._onCollectionChange === this._onCollectionChange && this.form._registerOnCollectionChange(() => {}))
            }
            get formDirective() {
                return this
            }
            get control() {
                return this.form
            }
            get path() {
                return []
            }
            addControl(e) {
                let i = this.form.get(e.path);
                return je(i, e, this.callSetDisabledState), i.updateValueAndValidity({
                    emitEvent: !1
                }), this.directives.push(e), i
            }
            getControl(e) {
                return this.form.get(e.path)
            }
            removeControl(e) {
                wt(e.control || null, e, !1), Gn(this.directives, e)
            }
            addFormGroup(e) {
                this._setUpFormContainer(e)
            }
            removeFormGroup(e) {
                this._cleanUpFormContainer(e)
            }
            getFormGroup(e) {
                return this.form.get(e.path)
            }
            addFormArray(e) {
                this._setUpFormContainer(e)
            }
            removeFormArray(e) {
                this._cleanUpFormContainer(e)
            }
            getFormArray(e) {
                return this.form.get(e.path)
            }
            updateModel(e, i) {
                this.form.get(e.path).setValue(i)
            }
            onSubmit(e) {
                return this._submittedReactive.set(!0), Tn(this.form, this.directives), this.ngSubmit.emit(e), this.form._events.next(new Ue(this.control)), e?.target?.method === "dialog"
            }
            onReset() {
                this.resetForm()
            }
            resetForm(e = void 0, i = {}) {
                this.form.reset(e, i), this._submittedReactive.set(!1), i?.emitEvent !== !1 && this.form._events.next(new Re(this.form))
            }
            _updateDomValue() {
                this.directives.forEach(e => {
                    let i = e.control,
                        o = this.form.get(e.path);
                    i !== o && (wt(i || null, e), Ln(o) && (je(o, e, this.callSetDisabledState), e.control = o))
                }), this.form._updateTreeValidity({
                    emitEvent: !1
                })
            }
            _setUpFormContainer(e) {
                let i = this.form.get(e.path);
                Fn(i, e), i.updateValueAndValidity({
                    emitEvent: !1
                })
            }
            _cleanUpFormContainer(e) {
                if (this.form) {
                    let i = this.form.get(e.path);
                    i && An(i, e) && i.updateValueAndValidity({
                        emitEvent: !1
                    })
                }
            }
            _updateRegistrations() {
                this.form._registerOnCollectionChange(this._onCollectionChange), this._oldForm && this._oldForm._registerOnCollectionChange(() => {})
            }
            _updateValidators() {
                Je(this.form, this), this._oldForm && Ee(this._oldForm, this)
            }
            static \u0275fac = function(i) {
                return new(i || n)(C(qe, 10), C(Ke, 10), C(ce, 8))
            };
            static \u0275dir = D({
                type: n,
                selectors: [
                    ["", "formGroup", ""]
                ],
                hostBindings: function(i, o) {
                    i & 1 && x("submit", function(u) {
                        return o.onSubmit(u)
                    })("reset", function() {
                        return o.onReset()
                    })
                },
                inputs: {
                    form: [0, "formGroup", "form"]
                },
                outputs: {
                    ngSubmit: "ngSubmit"
                },
                exportAs: ["ngForm"],
                standalone: !1,
                features: [Q([Rn]), G, he]
            })
        }
        return n
    })();
var Hn = {
        provide: B,
        useExisting: W(() => tt)
    },
    tt = (() => {
        class n extends B {
            _ngModelWarningConfig;
            _added = !1;
            viewModel;
            control;
            name = null;
            set isDisabled(e) {}
            model;
            update = new K;
            static _ngModelWarningSentOnce = !1;
            _ngModelWarningSent = !1;
            constructor(e, i, o, a, u) {
                super(), this._ngModelWarningConfig = u, this._parent = e, this._setValidators(i), this._setAsyncValidators(o), this.valueAccessor = Zt(this, a)
            }
            ngOnChanges(e) {
                this._added || this._setUpControl(), Jt(e, this.viewModel) && (this.viewModel = this.model, this.formDirective.updateModel(this, this.model))
            }
            ngOnDestroy() {
                this.formDirective && this.formDirective.removeControl(this)
            }
            viewToModelUpdate(e) {
                this.viewModel = e, this.update.emit(e)
            }
            get path() {
                return Qt(this.name == null ? this.name : this.name.toString(), this._parent)
            }
            get formDirective() {
                return this._parent ? this._parent.formDirective : null
            }
            _setUpControl() {
                this.control = this.formDirective.addControl(this), this._added = !0
            }
            static \u0275fac = function(i) {
                return new(i || n)(C(j, 13), C(qe, 10), C(Ke, 10), C(Se, 10), C(en, 8))
            };
            static \u0275dir = D({
                type: n,
                selectors: [
                    ["", "formControlName", ""]
                ],
                inputs: {
                    name: [0, "formControlName", "name"],
                    isDisabled: [0, "disabled", "isDisabled"],
                    model: [0, "ngModel", "model"]
                },
                outputs: {
                    update: "ngModelChange"
                },
                standalone: !1,
                features: [Q([Hn]), G, he]
            })
        }
        return n
    })();
var tn = (() => {
        class n {
            static \u0275fac = function(i) {
                return new(i || n)
            };
            static \u0275mod = be({
                type: n
            });
            static \u0275inj = ge({})
        }
        return n
    })(),
    ze = class extends Z {
        constructor(t, e, i) {
            super(Qe(e), Ye(i, e)), this.controls = t, this._initObservables(), this._setUpdateStrategy(e), this._setUpControls(), this.updateValueAndValidity({
                onlySelf: !0,
                emitEvent: !!this.asyncValidator
            })
        }
        controls;
        at(t) {
            return this.controls[this._adjustIndex(t)]
        }
        push(t, e = {}) {
            this.controls.push(t), this._registerControl(t), this.updateValueAndValidity({
                emitEvent: e.emitEvent
            }), this._onCollectionChange()
        }
        insert(t, e, i = {}) {
            this.controls.splice(t, 0, e), this._registerControl(e), this.updateValueAndValidity({
                emitEvent: i.emitEvent
            })
        }
        removeAt(t, e = {}) {
            let i = this._adjustIndex(t);
            i < 0 && (i = 0), this.controls[i] && this.controls[i]._registerOnCollectionChange(() => {}), this.controls.splice(i, 1), this.updateValueAndValidity({
                emitEvent: e.emitEvent
            })
        }
        setControl(t, e, i = {}) {
            let o = this._adjustIndex(t);
            o < 0 && (o = 0), this.controls[o] && this.controls[o]._registerOnCollectionChange(() => {}), this.controls.splice(o, 1), e && (this.controls.splice(o, 0, e), this._registerControl(e)), this.updateValueAndValidity({
                emitEvent: i.emitEvent
            }), this._onCollectionChange()
        }
        get length() {
            return this.controls.length
        }
        setValue(t, e = {}) {
            Kt(this, !1, t), t.forEach((i, o) => {
                qt(this, !1, o), this.at(o).setValue(i, {
                    onlySelf: !0,
                    emitEvent: e.emitEvent
                })
            }), this.updateValueAndValidity(e)
        }
        patchValue(t, e = {}) {
            t != null && (t.forEach((i, o) => {
                this.at(o) && this.at(o).patchValue(i, {
                    onlySelf: !0,
                    emitEvent: e.emitEvent
                })
            }), this.updateValueAndValidity(e))
        }
        reset(t = [], e = {}) {
            this._forEachChild((i, o) => {
                i.reset(t[o], {
                    onlySelf: !0,
                    emitEvent: e.emitEvent
                })
            }), this._updatePristine(e, this), this._updateTouched(e, this), this.updateValueAndValidity(e)
        }
        getRawValue() {
            return this.controls.map(t => t.getRawValue())
        }
        clear(t = {}) {
            this.controls.length < 1 || (this._forEachChild(e => e._registerOnCollectionChange(() => {})), this.controls.splice(0), this.updateValueAndValidity({
                emitEvent: t.emitEvent
            }))
        }
        _adjustIndex(t) {
            return t < 0 ? t + this.length : t
        }
        _syncPendingControls() {
            let t = this.controls.reduce((e, i) => i._syncPendingControls() ? !0 : e, !1);
            return t && this.updateValueAndValidity({
                onlySelf: !0
            }), t
        }
        _forEachChild(t) {
            this.controls.forEach((e, i) => {
                t(e, i)
            })
        }
        _updateValue() {
            this.value = this.controls.filter(t => t.enabled || this.disabled).map(t => t.value)
        }
        _anyControls(t) {
            return this.controls.some(e => e.enabled && t(e))
        }
        _setUpControls() {
            this._forEachChild(t => this._registerControl(t))
        }
        _allControlsDisabled() {
            for (let t of this.controls)
                if (t.enabled) return !1;
            return this.controls.length > 0 || this.disabled
        }
        _registerControl(t) {
            t.setParent(this), t._registerOnCollectionChange(this._onCollectionChange)
        }
        _find(t) {
            return this.at(t) ?? null
        }
    };

function St(n) {
    return !!n && (n.asyncValidators !== void 0 || n.validators !== void 0 || n.updateOn !== void 0)
}
var nn = (() => {
    class n {
        useNonNullable = !1;
        get nonNullable() {
            let e = new n;
            return e.useNonNullable = !0, e
        }
        group(e, i = null) {
            let o = this._reduceControls(e),
                a = {};
            return St(i) ? a = i : i !== null && (a.validators = i.validator, a.asyncValidators = i.asyncValidator), new we(o, a)
        }
        record(e, i = null) {
            let o = this._reduceControls(e);
            return new He(o, i)
        }
        control(e, i, o) {
            let a = {};
            return this.useNonNullable ? (St(i) ? a = i : (a.validators = i, a.asyncValidators = o), new le(e, I(w({}, a), {
                nonNullable: !0
            }))) : new le(e, i, o)
        }
        array(e, i, o) {
            let a = e.map(u => this._createControl(u));
            return new ze(a, i, o)
        }
        _reduceControls(e) {
            let i = {};
            return Object.keys(e).forEach(o => {
                i[o] = this._createControl(e[o])
            }), i
        }
        _createControl(e) {
            if (e instanceof le) return e;
            if (e instanceof Z) return e;
            if (Array.isArray(e)) {
                let i = e[0],
                    o = e.length > 1 ? e[1] : null,
                    a = e.length > 2 ? e[2] : null;
                return this.control(i, o, a)
            } else return this.control(e)
        }
        static \u0275fac = function(i) {
            return new(i || n)
        };
        static \u0275prov = Le({
            token: n,
            factory: n.\u0275fac,
            providedIn: "root"
        })
    }
    return n
})();
var on = (() => {
        class n {
            static withConfig(e) {
                return {
                    ngModule: n,
                    providers: [{
                        provide: ce,
                        useValue: e.callSetDisabledState ?? de
                    }]
                }
            }
            static \u0275fac = function(i) {
                return new(i || n)
            };
            static \u0275mod = be({
                type: n
            });
            static \u0275inj = ge({
                imports: [tn]
            })
        }
        return n
    })(),
    rn = (() => {
        class n {
            static withConfig(e) {
                return {
                    ngModule: n,
                    providers: [{
                        provide: en,
                        useValue: e.warnOnNgModelWithFormControl ?? "always"
                    }, {
                        provide: ce,
                        useValue: e.callSetDisabledState ?? de
                    }]
                }
            }
            static \u0275fac = function(i) {
                return new(i || n)
            };
            static \u0275mod = be({
                type: n
            });
            static \u0275inj = ge({
                imports: [tn]
            })
        }
        return n
    })();
var nt = (o => (o.CHARACTER = "character", o.VEHICLE = "vehicle", o.SPECIFIC = "specific", o.ALL = "all", o))(nt || {});
var it = {
        tagitems: [{
            id: 1,
            name: "Batman",
            color: "#0FABE7",
            pack: "Starter Pack",
            set: 71170,
            from: "DC Comics",
            img: 2e3,
            year: 1
        }, {
            id: 2,
            name: "Gandalf the Grey",
            color: "#0FABE7",
            pack: "Starter Pack",
            set: 71170,
            from: "The Lord of the Rings",
            img: 2001,
            year: 1
        }, {
            id: 3,
            name: "Wyldstyle",
            color: "#0FABE7",
            pack: "Starter Pack",
            set: 71170,
            from: "The LEGO Movie",
            img: 2002,
            year: 1
        }, {
            id: 4,
            name: "Aquaman",
            color: "#8DC740",
            pack: "Fun Pack",
            set: 71237,
            from: "DC Comics",
            img: 2e3,
            year: 1
        }, {
            id: 5,
            name: "Bad Cop",
            color: "#8DC740",
            pack: "Fun Pack",
            set: 71213,
            from: "The LEGO Movie",
            img: 2002,
            year: 1
        }, {
            id: 6,
            name: "Bane",
            color: "#8DC740",
            pack: "Fun Pack",
            set: 71240,
            from: "DC Comics",
            img: 2e3,
            year: 1
        }, {
            id: 7,
            name: "Bart Simpson",
            color: "#8DC740",
            pack: "Fun Pack",
            set: 71211,
            from: "The Simpsons",
            img: 2003,
            year: 1
        }, {
            id: 8,
            name: "Benny",
            color: "#8DC740",
            pack: "Fun Pack",
            set: 71214,
            from: "The LEGO Movie",
            img: 2002,
            year: 1
        }, {
            id: 9,
            name: "Chell",
            color: "#FFE730",
            pack: "Level Pack",
            set: 71203,
            from: "Portal 2",
            img: 2004,
            year: 1
        }, {
            id: 10,
            name: "Cole",
            color: "#E6731E",
            pack: "Team Pack",
            set: 71207,
            from: "LEGO Ninjago",
            img: 2005,
            year: 1
        }, {
            id: 11,
            name: "Cragger",
            color: "#8DC740",
            pack: "Fun Pack",
            set: 71223,
            from: "Legends of Chima",
            img: 2006,
            year: 1
        }, {
            id: 12,
            name: "Cyborg",
            color: "#8DC740",
            pack: "Fun Pack",
            set: 71210,
            from: "DC Comics",
            img: 2e3,
            year: 1
        }, {
            id: 13,
            name: "Cyberman",
            color: "#8DC740",
            pack: "Fun Pack",
            set: 71238,
            from: "BBC Doctor Who",
            img: 2007,
            year: 1
        }, {
            id: 14,
            name: "Doc Brown",
            color: "#8DC740",
            pack: "Fun Pack",
            set: 71230,
            from: "Back to the Future",
            img: 2008,
            year: 1
        }, {
            id: 15,
            name: "The Doctor",
            color: "#FFE730",
            pack: "Level Pack",
            set: 71204,
            from: "BBC Doctor Who",
            img: 2007,
            year: 1
        }, {
            id: 16,
            name: "Emmet",
            color: "#8DC740",
            pack: "Fun Pack",
            set: 71212,
            from: "The LEGO Movie",
            img: 2002,
            year: 1
        }, {
            id: 17,
            name: "Eris",
            color: "#8DC740",
            pack: "Fun Pack",
            set: 71232,
            from: "Legends of Chima",
            img: 2006,
            year: 1
        }, {
            id: 18,
            name: "Gimli",
            color: "#8DC740",
            pack: "Fun Pack",
            set: 71220,
            from: "The Lord of the Rings",
            img: 2001,
            year: 1
        }, {
            id: 19,
            name: "Gollum",
            color: "#8DC740",
            pack: "Fun Pack",
            set: 71218,
            from: "The Lord of the Rings",
            img: 2001,
            year: 1
        }, {
            id: 20,
            name: "Harley Quinn",
            color: "#E6731E",
            pack: "Team Pack",
            set: 71229,
            from: "DC Comics",
            img: 2e3,
            year: 1
        }, {
            id: 21,
            name: "Homer Simpson",
            color: "#FFE730",
            pack: "Level Pack",
            set: 71202,
            from: "The Simpsons",
            img: 2003,
            year: 1
        }, {
            id: 22,
            name: "Jay",
            color: "#8DC740",
            pack: "Fun Pack",
            set: 71215,
            from: "LEGO Ninjago",
            img: 2005,
            year: 1
        }, {
            id: 23,
            name: "The Joker",
            color: "#E6731E",
            pack: "Team Pack",
            set: 71229,
            from: "DC Comics",
            img: 2e3,
            year: 1
        }, {
            id: 24,
            name: "Kai",
            color: "#E6731E",
            pack: "Team Pack",
            set: 71207,
            from: "LEGO Ninjago",
            img: 2005,
            year: 1
        }, {
            id: 25,
            name: "ACU Trooper",
            color: "#E6731E",
            pack: "Team Pack",
            set: 71205,
            from: "Jurassic World",
            img: 2009,
            year: 1
        }, {
            id: 26,
            name: "Gamer Kid",
            color: "#FFE730",
            pack: "Level Pack",
            set: 71235,
            from: "Midway Arcade",
            img: 2010,
            year: 1
        }, {
            id: 27,
            name: "Krusty the Clown",
            color: "#8DC740",
            pack: "Fun Pack",
            set: 71227,
            from: "The Simpsons",
            img: 2003,
            year: 1
        }, {
            id: 28,
            name: "Laval",
            color: "#8DC740",
            pack: "Fun Pack",
            set: 71222,
            from: "Legends of Chima",
            img: 2006,
            year: 1
        }, {
            id: 29,
            name: "Legolas",
            color: "#8DC740",
            pack: "Fun Pack",
            set: 71219,
            from: "The Lord of the Rings",
            img: 2001,
            year: 1
        }, {
            id: 30,
            name: "Lloyd",
            color: "#8DC740",
            pack: "Fun Pack",
            set: 71239,
            from: "LEGO Ninjago",
            img: 2005,
            year: 1
        }, {
            id: 31,
            name: "Marty McFly",
            color: "#FFE730",
            pack: "Level Pack",
            set: 71201,
            from: "Back to the Future",
            img: 2008,
            year: 1
        }, {
            id: 32,
            name: "Nya",
            color: "#8DC740",
            pack: "Fun Pack",
            set: 71216,
            from: "LEGO Ninjago",
            img: 2005,
            year: 1
        }, {
            id: 33,
            name: "Owen",
            color: "#E6731E",
            pack: "Team Pack",
            set: 71205,
            from: "Jurassic World",
            img: 2009,
            year: 1
        }, {
            id: 34,
            name: "Peter Venkman",
            color: "#FFE730",
            pack: "Level Pack",
            set: 71228,
            from: "Ghostbusters",
            img: 2011,
            year: 1
        }, {
            id: 35,
            name: "Slimer",
            color: "#8DC740",
            pack: "Fun Pack",
            set: 71241,
            from: "Ghostbusters",
            img: 2011,
            year: 1
        }, {
            id: 36,
            name: "Scooby-Doo",
            color: "#E6731E",
            pack: "Team Pack",
            set: 71206,
            from: "Scooby-Doo!",
            img: 2012,
            year: 1
        }, {
            id: 37,
            name: "Sensei Wu",
            color: "#8DC740",
            pack: "Fun Pack",
            set: 71234,
            from: "LEGO Ninjago",
            img: 2005,
            year: 1
        }, {
            id: 38,
            name: "Shaggy",
            color: "#E6731E",
            pack: "Team Pack",
            set: 71206,
            from: "Scooby-Doo!",
            img: 2012,
            year: 1
        }, {
            id: 39,
            name: "Stay Puft",
            color: "#8DC740",
            pack: "Fun Pack",
            set: 71233,
            from: "Ghostbusters",
            img: 2011,
            year: 1
        }, {
            id: 40,
            name: "Superman",
            color: "#8DC740",
            pack: "Fun Pack",
            set: 71236,
            from: "DC Comics",
            img: 2e3,
            year: 1
        }, {
            id: 41,
            name: "Unikitty",
            color: "#8DC740",
            pack: "Fun Pack",
            set: 71231,
            from: "The LEGO Movie",
            img: 2002,
            year: 1
        }, {
            id: 42,
            name: "Wicked Witch",
            color: "#8DC740",
            pack: "Fun Pack",
            set: 71221,
            from: "The Wizard of Oz",
            img: 2029,
            year: 1
        }, {
            id: 43,
            name: "Wonder Woman",
            color: "#8DC740",
            pack: "Fun Pack",
            set: 71209,
            from: "DC Comics",
            img: 2e3,
            year: 1
        }, {
            id: 44,
            name: "Zane",
            color: "#8DC740",
            pack: "Fun Pack",
            set: 71217,
            from: "LEGO Ninjago",
            img: 2005,
            year: 1
        }, {
            id: 45,
            name: "Green Arrow",
            color: "#0FABE7",
            pack: "Polybag",
            set: 71342,
            from: "DC Comics",
            img: 2e3,
            year: 2
        }, {
            id: 46,
            name: "Supergirl",
            color: "#0FABE7",
            pack: "Polybag",
            set: 71340,
            from: "DC Comics",
            img: 2e3,
            year: 2
        }, {
            id: 47,
            name: "Abby Yates",
            color: "#7452A4",
            pack: "Story Pack",
            set: 71242,
            from: "Ghostbusters (2016)",
            img: 2013,
            year: 2
        }, {
            id: 48,
            name: "Finn",
            color: "#FFE730",
            pack: "Level Pack",
            set: 71245,
            from: "Adventure Time",
            img: 2014,
            year: 2
        }, {
            id: 49,
            name: "Ethan Hunt",
            color: "#FFE730",
            pack: "Level Pack",
            set: 71248,
            from: "Mission: Impossible",
            img: 2015,
            year: 2
        }, {
            id: 50,
            name: "Lumpy Space Princess",
            color: "#E6731E",
            pack: "Team Pack",
            set: 71246,
            from: "Adventure Time",
            img: 2014,
            year: 2
        }, {
            id: 51,
            name: "Jake",
            color: "#E6731E",
            pack: "Team Pack",
            set: 71246,
            from: "Adventure Time",
            img: 2014,
            year: 2
        }, {
            id: 52,
            name: "Harry Potter",
            color: "#E6731E",
            pack: "Team Pack",
            set: 71247,
            from: "Harry Potter",
            img: 2016,
            year: 2
        }, {
            id: 53,
            name: "Lord Voldemort",
            color: "#E6731E",
            pack: "Team Pack",
            set: 71247,
            from: "Harry Potter",
            img: 2016,
            year: 2
        }, {
            id: 54,
            name: "Michael Knight",
            color: "#8DC740",
            pack: "Fun Pack",
            set: 71286,
            from: "Knight Rider",
            img: 2017,
            year: 2
        }, {
            id: 55,
            name: "B.A. Baracus",
            color: "#8DC740",
            pack: "Fun Pack",
            set: 71251,
            from: "The A-Team",
            img: 2018,
            year: 2
        }, {
            id: 56,
            name: "Newt Scamander",
            color: "#7452A4",
            pack: "Story Pack",
            set: 71253,
            from: "Fantastic Beasts and Where to Find Them",
            img: 2019,
            year: 2
        }, {
            id: 57,
            name: "Sonic the Hedgehog",
            color: "#FFE730",
            pack: "Level Pack",
            set: 71244,
            from: "Sonic the Hedgehog",
            img: 2020,
            year: 2
        }, {
            id: 59,
            name: "Gizmo",
            color: "#E6731E",
            pack: "Team Pack",
            set: 71256,
            from: "Gremlins",
            img: 2021,
            year: 2
        }, {
            id: 60,
            name: "Stripe",
            color: "#E6731E",
            pack: "Team Pack",
            set: 71256,
            from: "Gremlins",
            img: 2021,
            year: 2
        }, {
            id: 61,
            name: "E.T.",
            color: "#8DC740",
            pack: "Fun Pack",
            set: 71258,
            from: "E.T. The Extra-Terrestrial",
            img: 2022,
            year: 2
        }, {
            id: 62,
            name: "Tina Goldstein",
            color: "#8DC740",
            pack: "Fun Pack",
            set: 71257,
            from: "Fantastic Beasts and Where to Find Them",
            img: 2019,
            year: 2
        }, {
            id: 63,
            name: "Marceline",
            color: "#8DC740",
            pack: "Fun Pack",
            set: 71285,
            from: "Adventure Time",
            img: 2014,
            year: 2
        }, {
            id: 64,
            name: "Batgirl",
            color: "#7452A4",
            pack: "Story Pack",
            set: 71264,
            from: "The LEGO Batman Movie",
            img: 2023,
            year: 2
        }, {
            id: 65,
            name: "Robin",
            color: "#7452A4",
            pack: "Story Pack",
            set: 71264,
            from: "The LEGO Batman Movie",
            img: 2023,
            year: 2
        }, {
            id: 66,
            name: "Sloth",
            color: "#FFE730",
            pack: "Level Pack",
            set: 71267,
            from: "The Goonies",
            img: 2024,
            year: 2
        }, {
            id: 67,
            name: "Hermione Granger",
            color: "#8DC740",
            pack: "Fun Pack",
            set: 71348,
            from: "Harry Potter",
            img: 2016,
            year: 2
        }, {
            id: 68,
            name: "Chase McCain",
            color: "#8DC740",
            pack: "Fun Pack",
            set: 71266,
            from: "LEGO City",
            img: 2025,
            year: 2
        }, {
            id: 69,
            name: "Excalibur Batman",
            color: "#8DC740",
            pack: "Fun Pack",
            set: 71344,
            from: "The LEGO Batman Movie",
            img: 2023,
            year: 2
        }, {
            id: 70,
            name: "Raven",
            color: "#E6731E",
            pack: "Team Pack",
            set: 71255,
            from: "Teen Titans Go!",
            img: 2026,
            year: 2
        }, {
            id: 71,
            name: "Beast Boy",
            color: "#E6731E",
            pack: "Team Pack",
            set: 71255,
            from: "Teen Titans Go!",
            img: 2026,
            year: 2
        }, {
            id: 72,
            name: "Betelgeuse",
            color: "#8DC740",
            pack: "Fun Pack",
            set: 71349,
            from: "Beetlejuice",
            img: 2027,
            year: 2
        }, {
            id: 74,
            name: "Blossom",
            color: "#E6731E",
            pack: "Team Pack",
            set: 71346,
            from: "The Powerpuff Girls",
            img: 2028,
            year: 2
        }, {
            id: 75,
            name: "Bubbles",
            color: "#E6731E",
            pack: "Team Pack",
            set: 71346,
            from: "The Powerpuff Girls",
            img: 2028,
            year: 2
        }, {
            id: 76,
            name: "Buttercup",
            color: "#8DC740",
            pack: "Fun Pack",
            set: 71343,
            from: "The Powerpuff Girls",
            img: 2028,
            year: 2
        }, {
            id: 77,
            name: "Starfire",
            color: "#8DC740",
            pack: "Fun Pack",
            set: 71287,
            from: "Teen Titans Go!",
            img: 2026,
            year: 2
        }, {
            id: 1e3,
            name: "Police Car",
            char: 5,
            build: 0
        }, {
            id: 1001,
            name: "Aerial Squad Car",
            char: 5,
            build: 1
        }, {
            id: 1002,
            name: "Missile Striker",
            char: 5,
            build: 2
        }, {
            id: 1003,
            name: "Gravity Sprinter",
            char: 7,
            build: 0
        }, {
            id: 1004,
            name: "Street Shredder",
            char: 7,
            build: 1
        }, {
            id: 1005,
            name: "Sky Clobberer",
            char: 7,
            build: 2
        }, {
            id: 1006,
            name: "Batmobile",
            char: 1,
            build: 0
        }, {
            id: 1007,
            name: "Batblaster",
            char: 1,
            build: 1
        }, {
            id: 1008,
            name: "Sonic Batray",
            char: 1,
            build: 2
        }, {
            id: 1009,
            name: "Benny's Spaceship",
            char: 8,
            build: 0
        }, {
            id: 1010,
            name: "Lasercraft",
            char: 8,
            build: 1
        }, {
            id: 1011,
            name: "The Annihilator",
            char: 8,
            build: 2
        }, {
            id: 1012,
            name: "DeLorean Time Machine",
            char: 31,
            build: 0
        }, {
            id: 1013,
            name: "Ultra Time Machine",
            char: 31,
            build: 1
        }, {
            id: 1014,
            name: "Electric Time Machine",
            char: 31,
            build: 2
        }, {
            id: 1015,
            name: "Hoverboard",
            char: 31,
            build: 0
        }, {
            id: 1016,
            name: "Cyclone Board",
            char: 31,
            build: 1
        }, {
            id: 1017,
            name: "Ultimate Hoverjet",
            char: 31,
            build: 2
        }, {
            id: 1018,
            name: "Eagle Interceptor",
            char: 17,
            build: 0
        }, {
            id: 1019,
            name: "Eagle Sky Blazer",
            char: 17,
            build: 1
        }, {
            id: 1020,
            name: "Eagle Swoop Diver",
            char: 17,
            build: 2
        }, {
            id: 1023,
            name: "Swamp Skimmer",
            char: 11,
            build: 0
        }, {
            id: 1021,
            name: "Cragger's Fireship",
            char: 11,
            build: 1
        }, {
            id: 1022,
            name: "Croc Command Sub",
            char: 11,
            build: 2
        }, {
            id: 1024,
            name: "Cyber-Guard",
            char: 12,
            build: 0
        }, {
            id: 1025,
            name: "Cyber-Wrecker",
            char: 12,
            build: 1
        }, {
            id: 1026,
            name: "Laser Robot Walker",
            char: 12,
            build: 2
        }, {
            id: 1027,
            name: "K-9",
            char: 15,
            build: 0
        }, {
            id: 1028,
            name: "K-9 Ruff Rover",
            char: 15,
            build: 1
        }, {
            id: 1029,
            name: "K-9 Laser Cutter",
            char: 15,
            build: 2
        }, {
            id: 1030,
            name: "TARDIS",
            char: 15,
            build: 0
        }, {
            id: 1031,
            name: "Laser-Pulse TARDIS",
            char: 15,
            build: 1
        }, {
            id: 1032,
            name: "Energy-Burst TARDIS",
            char: 15,
            build: 2
        }, {
            id: 1033,
            name: "Emmet's Excavator",
            char: 16,
            build: 0
        }, {
            id: 1034,
            name: "Destroy Dozer",
            char: 16,
            build: 1
        }, {
            id: 1035,
            name: "Destruct-o-Mech",
            char: 16,
            build: 2
        }, {
            id: 1036,
            name: "Winged Monkey",
            char: 42,
            build: 0
        }, {
            id: 1037,
            name: "Battle Monkey",
            char: 42,
            build: 1
        }, {
            id: 1038,
            name: "Commander Monkey",
            char: 42,
            build: 2
        }, {
            id: 1039,
            name: "Axe Chariot",
            char: 18,
            build: 0
        }, {
            id: 1040,
            name: "Axe Hurler",
            char: 18,
            build: 1
        }, {
            id: 1041,
            name: "Soaring Chariot",
            char: 18,
            build: 2
        }, {
            id: 1042,
            name: "Shelob the Great",
            char: 19,
            build: 0
        }, {
            id: 1043,
            name: "8-Legged Stalker",
            char: 19,
            build: 1
        }, {
            id: 1044,
            name: "Poison Slinger",
            char: 19,
            build: 2
        }, {
            id: 1045,
            name: "Homer's Car",
            char: 21,
            build: 0
        }, {
            id: 1046,
            name: "Homercraft",
            char: 21,
            build: 1
        }, {
            id: 1047,
            name: "SubmaHomer",
            char: 21,
            build: 2
        }, {
            id: 1048,
            name: "Taunt-o-Vision",
            char: 21,
            build: 0
        }, {
            id: 1049,
            name: "Blast Cam",
            char: 21,
            build: 1
        }, {
            id: 1050,
            name: "The MechaHomer",
            char: 21,
            build: 2
        }, {
            id: 1051,
            name: "Velociraptor",
            char: 33,
            build: 0
        }, {
            id: 1052,
            name: "Spike Attack Raptor",
            char: 33,
            build: 1
        }, {
            id: 1053,
            name: "Venom Raptor",
            char: 33,
            build: 2
        }, {
            id: 1054,
            name: "Gyrosphere",
            char: 25,
            build: 0
        }, {
            id: 1055,
            name: "Sonic Beam Gyrosphere",
            char: 25,
            build: 1
        }, {
            id: 1056,
            name: "Speed Boost Gyrosphere",
            char: 25,
            build: 2
        }, {
            id: 1057,
            name: "Clown Bike",
            char: 27,
            build: 0
        }, {
            id: 1058,
            name: "Cannon Bike",
            char: 27,
            build: 1
        }, {
            id: 1059,
            name: "Anti-Gravity Rocket Bike",
            char: 27,
            build: 2
        }, {
            id: 1060,
            name: "Mighty Lion Rider",
            char: 28,
            build: 0
        }, {
            id: 1061,
            name: "Lion Blazer",
            char: 28,
            build: 1
        }, {
            id: 1062,
            name: "Fire Lion",
            char: 28,
            build: 2
        }, {
            id: 1063,
            name: "Arrow Launcher",
            char: 29,
            build: 0
        }, {
            id: 1064,
            name: "Seeking Shooter",
            char: 29,
            build: 1
        }, {
            id: 1065,
            name: "Triple Ballista",
            char: 29,
            build: 2
        }, {
            id: 1066,
            name: "Mystery Machine",
            char: 38,
            build: 0
        }, {
            id: 1067,
            name: "Mystery Tow",
            char: 38,
            build: 1
        }, {
            id: 1068,
            name: "Mystery Monster",
            char: 38,
            build: 2
        }, {
            id: 1069,
            name: "Boulder Bomber",
            char: 10,
            build: 0
        }, {
            id: 1070,
            name: "Boulder Blaster",
            char: 10,
            build: 1
        }, {
            id: 1071,
            name: "Cyclone Jet",
            char: 10,
            build: 2
        }, {
            id: 1072,
            name: "Storm Fighter",
            char: 22,
            build: 0
        }, {
            id: 1073,
            name: "Lightning Jet",
            char: 22,
            build: 1
        }, {
            id: 1074,
            name: "Electro-Shooter",
            char: 22,
            build: 2
        }, {
            id: 1075,
            name: "Blade Bike",
            char: 24,
            build: 0
        }, {
            id: 1076,
            name: "Flying Fire Bike",
            char: 24,
            build: 1
        }, {
            id: 1077,
            name: "Blades of Fire",
            char: 24,
            build: 2
        }, {
            id: 1078,
            name: "Samurai Mech",
            char: 32,
            build: 0
        }, {
            id: 1079,
            name: "Samurai Shooter",
            char: 32,
            build: 1
        }, {
            id: 1080,
            name: "Soaring Samurai Mech",
            char: 32,
            build: 2
        }, {
            id: 1081,
            name: "Companion Cube",
            char: 9,
            build: 0
        }, {
            id: 1082,
            name: "Laser Deflector",
            char: 9,
            build: 1
        }, {
            id: 1083,
            name: "Gold Heart Emitter",
            char: 9,
            build: 2
        }, {
            id: 1084,
            name: "Sentry Turret",
            char: 9,
            build: 0
        }, {
            id: 1085,
            name: "Turret Striker",
            char: 9,
            build: 1
        }, {
            id: 1086,
            name: "Flying Turret Carrier",
            char: 9,
            build: 2
        }, {
            id: 1087,
            name: "Scooby Snack",
            char: 36,
            build: 0
        }, {
            id: 1088,
            name: "Scooby Fire Snack",
            char: 36,
            build: 1
        }, {
            id: 1089,
            name: "Scooby Ghost Snack",
            char: 36,
            build: 2
        }, {
            id: 1090,
            name: "Cloud Cukko Car",
            char: 41,
            build: 0
        }, {
            id: 1091,
            name: "X-Stream Soaker",
            char: 41,
            build: 1
        }, {
            id: 1092,
            name: "Rainbow Cannon",
            char: 41,
            build: 2
        }, {
            id: 1093,
            name: "Invisible Jet",
            char: 43,
            build: 0
        }, {
            id: 1094,
            name: "Stealth Laser Shooter",
            char: 43,
            build: 1
        }, {
            id: 1095,
            name: "Torpedo Bomber",
            char: 43,
            build: 2
        }, {
            id: 1096,
            name: "NinjaCopter",
            char: 44,
            build: 0
        }, {
            id: 1097,
            name: "Glaciator",
            char: 44,
            build: 1
        }, {
            id: 1098,
            name: "Freeze Fighter",
            char: 44,
            build: 2
        }, {
            id: 1099,
            name: "Traveling Time Train",
            char: 14,
            build: 0
        }, {
            id: 1100,
            name: "Flying Time Train",
            char: 14,
            build: 1
        }, {
            id: 1101,
            name: "Missile Blast Time Train",
            char: 14,
            build: 2
        }, {
            id: 1102,
            name: "Aqua Watercraft",
            char: 4,
            build: 0
        }, {
            id: 1103,
            name: "Seven Seas Speeder",
            char: 4,
            build: 1
        }, {
            id: 1104,
            name: "Trident of Fire",
            char: 4,
            build: 2
        }, {
            id: 1105,
            name: "Drill Driver",
            char: 6,
            build: 0
        }, {
            id: 1106,
            name: "Bane Dig 'n' Drill",
            char: 6,
            build: 1
        }, {
            id: 1107,
            name: "Bane Drill 'n' Blast",
            char: 6,
            build: 2
        }, {
            id: 1108,
            name: "Quinn-Mobile",
            char: 20,
            build: 0
        }, {
            id: 1109,
            name: "Quinn Ultra Racer",
            char: 20,
            build: 1
        }, {
            id: 1110,
            name: "Missile Launcher",
            char: 20,
            build: 2
        }, {
            id: 1111,
            name: "The Joker's Chopper",
            char: 23,
            build: 0
        }, {
            id: 1112,
            name: "Mischievous Missile Blaster",
            char: 23,
            build: 1
        }, {
            id: 1113,
            name: "Lock 'n' Laser Jet",
            char: 23,
            build: 2
        }, {
            id: 1114,
            name: "Hover Pod",
            char: 40,
            build: 0
        }, {
            id: 1115,
            name: "Krypton Striker",
            char: 40,
            build: 1
        }, {
            id: 1116,
            name: "Super Stealth Pod",
            char: 40,
            build: 2
        }, {
            id: 1117,
            name: "Dalek",
            char: 13,
            build: 0
        }, {
            id: 1118,
            name: "Fire 'n' Ride Dalek",
            char: 13,
            build: 1
        }, {
            id: 1119,
            name: "Silver Shooter Dalek",
            char: 13,
            build: 2
        }, {
            id: 1120,
            name: "Ecto-1",
            char: 34,
            build: 0
        }, {
            id: 1121,
            name: "Ecto-1 Blaster",
            char: 34,
            build: 1
        }, {
            id: 1122,
            name: "Ecto-1 Water Diver",
            char: 34,
            build: 2
        }, {
            id: 1123,
            name: "Ghost Trap",
            char: 34,
            build: 0
        }, {
            id: 1124,
            name: "Ghost Stun 'n' Trap",
            char: 34,
            build: 1
        }, {
            id: 1125,
            name: "Proton Zapper",
            char: 34,
            build: 2
        }, {
            id: 1132,
            name: "Lloyd's Golden Dragon",
            char: 30,
            build: 0
        }, {
            id: 1133,
            name: "Sword Projector Dragon",
            char: 30,
            build: 1
        }, {
            id: 1144,
            name: "Mega Flight Dragon",
            char: 30,
            build: 2
        }, {
            id: 1155,
            name: "Flying White Dragon",
            char: 37,
            build: 0
        }, {
            id: 1156,
            name: "Golden Fire Dragon",
            char: 37,
            build: 1
        }, {
            id: 1157,
            name: "Ultra Destruction Dragon",
            char: 37,
            build: 2
        }, {
            id: 1158,
            name: "Arcade Machine",
            char: 26,
            build: 0
        }, {
            id: 1159,
            name: "8-Bit Shooter",
            char: 26,
            build: 1
        }, {
            id: 1160,
            name: "The Pixelator",
            char: 26,
            build: 2
        }, {
            id: 1161,
            name: "G-61555 Spy Hunter",
            char: 26,
            build: 0
        }, {
            id: 1162,
            name: "The Interdiver",
            char: 26,
            build: 1
        }, {
            id: 1163,
            name: "Aerial Spyhunter",
            char: 26,
            build: 2
        }, {
            id: 1164,
            name: "Slime Shooter",
            char: 39,
            build: 0
        }, {
            id: 1165,
            name: "Slime Exploder",
            char: 39,
            build: 1
        }, {
            id: 1166,
            name: "Slime Streamer",
            char: 39,
            build: 2
        }, {
            id: 1167,
            name: "Terror Dog",
            char: 39,
            build: 0
        }, {
            id: 1168,
            name: "Terror Dog Destroyer",
            char: 39,
            build: 1
        }, {
            id: 1169,
            name: "Soaring Terror Dog",
            char: 39,
            build: 2
        }, {
            id: 1170,
            name: "Ancient Psychic Tandem War Elephant",
            char: 48,
            build: 0
        }, {
            id: 1171,
            name: "Cosmic Squid",
            char: 48,
            build: 1
        }, {
            id: 1172,
            name: "Psychic Submarine",
            char: 48,
            build: 2
        }, {
            id: 1173,
            name: "BMO",
            char: 51,
            build: 0
        }, {
            id: 1174,
            name: "DOGMO",
            char: 51,
            build: 1
        }, {
            id: 1175,
            name: "SNAKEMO",
            char: 51,
            build: 2
        }, {
            id: 1176,
            name: "Jakemoblie",
            char: 48,
            build: 0
        }, {
            id: 1177,
            name: "Snail Dude Jake",
            char: 48,
            build: 1
        }, {
            id: 1178,
            name: "Hover Jake",
            char: 48,
            build: 2
        }, {
            id: 1179,
            name: "Lumpy Car",
            char: 50,
            build: 0
        }, {
            id: 1180,
            name: "Lumpy Truck",
            char: 50,
            build: 1
        }, {
            id: 1181,
            name: "Lumpy Land Whale",
            char: 50,
            build: 2
        }, {
            id: 1182,
            name: "Lunatic Amp",
            char: 63,
            build: 0
        }, {
            id: 1183,
            name: "Shadow Scorpion",
            char: 63,
            build: 1
        }, {
            id: 1184,
            name: "Heavy Metal Monster",
            char: 63,
            build: 2
        }, {
            id: 1185,
            name: "B.A.'s Van",
            char: 55,
            build: 0
        }, {
            id: 1186,
            name: "Fool Smasher",
            char: 55,
            build: 1
        }, {
            id: 1187,
            name: "The Pain Plane",
            char: 55,
            build: 2
        }, {
            id: 1188,
            name: "Phone Home",
            char: 61,
            build: 0
        }, {
            id: 1189,
            name: "Mobile Uplink",
            char: 61,
            build: 1
        }, {
            id: 1190,
            name: "Super-Charged Satellite",
            char: 61,
            build: 2
        }, {
            id: 1191,
            name: "Niffler",
            char: 56,
            build: 0
        }, {
            id: 1192,
            name: "Sinister Scorpion",
            char: 56,
            build: 1
        }, {
            id: 1193,
            name: "Vicious Vulture",
            char: 56,
            build: 2
        }, {
            id: 1194,
            name: "Swooping Evil",
            char: 62,
            build: 0
        }, {
            id: 1195,
            name: "Brutal Bloom",
            char: 62,
            build: 1
        }, {
            id: 1196,
            name: "Crawling Creeper",
            char: 62,
            build: 2
        }, {
            id: 1197,
            name: "Ecto-1 (2016)",
            char: 47,
            build: 0
        }, {
            id: 1198,
            name: "Ectozer",
            char: 47,
            build: 1
        }, {
            id: 1199,
            name: "PerfEcto",
            char: 47,
            build: 2
        }, {
            id: 1200,
            name: "Flash 'n' Finish",
            char: 60,
            build: 0
        }, {
            id: 1201,
            name: "Rampage Record Player",
            char: 60,
            build: 1
        }, {
            id: 1202,
            name: "Stripe's Throne",
            char: 60,
            build: 2
        }, {
            id: 1203,
            name: "R.C. Racer",
            char: 59,
            build: 0
        }, {
            id: 1204,
            name: "Gadet-O-Matic",
            char: 59,
            build: 1
        }, {
            id: 1205,
            name: "Scarlet Scorpion",
            char: 59,
            build: 2
        }, {
            id: 1206,
            name: "Hogwarts Express",
            char: 53,
            build: 0
        }, {
            id: 1207,
            name: "Soaring Steam Plane",
            char: 53,
            build: 1
        }, {
            id: 1208,
            name: "Steam Warrior",
            char: 53,
            build: 2
        }, {
            id: 1209,
            name: "Enchanted Car",
            char: 52,
            build: 0
        }, {
            id: 1210,
            name: "Shark Sub",
            char: 52,
            build: 1
        }, {
            id: 1211,
            name: "Monstrous Mouth",
            char: 52,
            build: 2
        }, {
            id: 1212,
            name: "IMF Scrambler",
            char: 49,
            build: 0
        }, {
            id: 1213,
            name: "Shock Cycle",
            char: 49,
            build: 1
        }, {
            id: 1214,
            name: "IMF Covert Jet",
            char: 49,
            build: 2
        }, {
            id: 1215,
            name: "IMF Sport Car",
            char: 49,
            build: 0
        }, {
            id: 1216,
            name: "IMF Tank",
            char: 49,
            build: 1
        }, {
            id: 1217,
            name: "IMF Splorer",
            char: 49,
            build: 2
        }, {
            id: 1218,
            name: "Sonic Speedster",
            char: 57,
            build: 0
        }, {
            id: 1219,
            name: "Blue Typhoon",
            char: 57,
            build: 1
        }, {
            id: 1220,
            name: "Moto Bug",
            char: 57,
            build: 2
        }, {
            id: 1221,
            name: "The Tornado",
            char: 57,
            build: 0
        }, {
            id: 1222,
            name: "Crabmeat",
            char: 57,
            build: 1
        }, {
            id: 1223,
            name: "Eggcatcher",
            char: 57,
            build: 2
        }, {
            id: 1224,
            name: "K.I.T.T.",
            char: 54,
            build: 0
        }, {
            id: 1225,
            name: "Goliath Armored Semi",
            char: 54,
            build: 1
        }, {
            id: 1226,
            name: "K.I.T.T. Jet",
            char: 54,
            build: 2
        }, {
            id: 1227,
            name: "Police Helicopter",
            char: 68,
            build: 0
        }, {
            id: 1228,
            name: "Police Hovercraft",
            char: 68,
            build: 1
        }, {
            id: 1229,
            name: "Police Plane",
            char: 68,
            build: 2
        }, {
            id: 1230,
            name: "Bionic Steed",
            char: 69,
            build: 0
        }, {
            id: 1231,
            name: "Bat-Raptor",
            char: 69,
            build: 1
        }, {
            id: 1232,
            name: "Ultrabat",
            char: 69,
            build: 2
        }, {
            id: 1233,
            name: "Batwing",
            char: 64,
            build: 0
        }, {
            id: 1234,
            name: "The Black Thunder",
            char: 64,
            build: 1
        }, {
            id: 1235,
            name: "Bat-Tank",
            char: 64,
            build: 2
        }, {
            id: 1236,
            name: "Skeleton Organ",
            char: 66,
            build: 0
        }, {
            id: 1237,
            name: "Skeleton Jukebox",
            char: 66,
            build: 1
        }, {
            id: 1238,
            name: "Skele-Turkey",
            char: 66,
            build: 2
        }, {
            id: 1239,
            name: "One-Eyed Willy's Pirate Ship",
            char: 66,
            build: 0
        }, {
            id: 1240,
            name: "Fanged Fortune",
            char: 66,
            build: 1
        }, {
            id: 1241,
            name: "Inferno Cannon",
            char: 66,
            build: 2
        }, {
            id: 1242,
            name: "Buckbeak",
            char: 67,
            build: 0
        }, {
            id: 1243,
            name: "Giant Owl",
            char: 67,
            build: 1
        }, {
            id: 1244,
            name: "Fierce Falcon",
            char: 67,
            build: 2
        }, {
            id: 1245,
            name: "Saturn's Sandworm",
            char: 72,
            build: 0
        }, {
            id: 1246,
            name: "Spooky Spider",
            char: 72,
            build: 1
        }, {
            id: 1247,
            name: "Haunted Vacuum",
            char: 72,
            build: 2
        }, {
            id: 1248,
            name: "PPG Smartphone",
            char: 74,
            build: 0
        }, {
            id: 1249,
            name: "PPG Hotline",
            char: 74,
            build: 1
        }, {
            id: 1250,
            name: "Powerpuff Mag-Net",
            char: 74,
            build: 2
        }, {
            id: 1253,
            name: "Mega Blast Bot",
            char: 76,
            build: 0
        }, {
            id: 1251,
            name: "Slammin' Guitar",
            char: 76,
            build: 1
        }, {
            id: 1252,
            name: "Ka-Pow Cannon",
            char: 76,
            build: 2
        }, {
            id: 1254,
            name: "Octi",
            char: 75,
            build: 0
        }, {
            id: 1255,
            name: "Super Skunk",
            char: 75,
            build: 1
        }, {
            id: 1256,
            name: "Sonic Squid",
            char: 75,
            build: 2
        }, {
            id: 1257,
            name: "T-Car",
            char: 71,
            build: 0
        }, {
            id: 1258,
            name: "T-Forklift",
            char: 71,
            build: 1
        }, {
            id: 1259,
            name: "T-Plane",
            char: 71,
            build: 2
        }, {
            id: 1260,
            name: "Spellbook of Azarath",
            char: 70,
            build: 0
        }, {
            id: 1261,
            name: "Raven Wings",
            char: 70,
            build: 1
        }, {
            id: 1262,
            name: "Giant Hand",
            char: 70,
            build: 2
        }, {
            id: 1263,
            name: "Titan Robot",
            char: 77,
            build: 0
        }, {
            id: 1264,
            name: "T-Rocket",
            char: 77,
            build: 1
        }, {
            id: 1265,
            name: "Robot Retriever",
            char: 77,
            build: 2
        }]
    },
    z = class {
        static getCharacters() {
            return it.tagitems.filter(t => t.id < 1e3)
        }
        static getVehicles() {
            return it.tagitems.filter(t => t.id >= 1e3)
        }
        static getCharacterById(t) {
            return this.getCharacters().find(e => e.id === t)
        }
        static getVehiclesByCharacter(t) {
            return this.getVehicles().filter(e => e.char === t)
        }
        static getAllItems() {
            return it.tagitems
        }
    };
var T = class n {
    data;
    constructor(t) {
        this.data = new Uint8Array(t)
    }
    static alloc(t) {
        return new n(t)
    }
    static from(t, e) {
        if (e === "hex") {
            let i = new n(t.length / 2);
            for (let o = 0; o < t.length; o += 2) i.data[o / 2] = parseInt(t.substr(o, 2), 16);
            return i
        }
        throw new Error("Unsupported encoding")
    }
    writeUInt32LE(t, e) {
        this.data[e] = t & 255, this.data[e + 1] = t >> 8 & 255, this.data[e + 2] = t >> 16 & 255, this.data[e + 3] = t >> 24 & 255
    }
    writeUInt32BE(t, e) {
        this.data[e] = t >> 24 & 255, this.data[e + 1] = t >> 16 & 255, this.data[e + 2] = t >> 8 & 255, this.data[e + 3] = t & 255
    }
    readInt32LE(t) {
        return this.data[t] | this.data[t + 1] << 8 | this.data[t + 2] << 16 | this.data[t + 3] << 24
    }
    readUInt32LE(t) {
        return (this.data[t] | this.data[t + 1] << 8 | this.data[t + 2] << 16 | this.data[t + 3] << 24) >>> 0
    }
    readUInt32BE(t) {
        return (this.data[t] << 24 | this.data[t + 1] << 16 | this.data[t + 2] << 8 | this.data[t + 3]) >>> 0
    }
    copy(t, e = 0, i = 0, o) {
        let a = o ?? this.data.length;
        for (let u = i; u < a && u < this.data.length; u++) e + (u - i) < t.data.length && (t.data[e + (u - i)] = this.data[u])
    }
    get length() {
        return this.data.length
    }
    slice(t, e) {
        let i = new n(e - t);
        return i.data = this.data.slice(t, e), i
    }
    toString(t) {
        if (t === "hex") return Array.from(this.data).map(e => e.toString(16).padStart(2, "0")).join("");
        throw new Error("Unsupported encoding")
    }
};

function zn(n) {
    let t = (v, M) => (v >>> M | v << 32 - M) >>> 0,
        e = n.replace(/:/g, "").toUpperCase(),
        i = T.from(e, "hex"),
        o = T.alloc(32),
        a = "UUUUUUU(c) Copyright LEGO 2014AA";
    for (let v = 0; v < a.length; v++) o.data[v] = a.charCodeAt(v);
    i.copy(o), o.data[30] = 170, o.data[31] = 170;
    let u = 0;
    for (let v = 0; v < 8; v++) {
        let M = t(u, 25),
            S = t(u, 10);
        u = o.readUInt32LE(v * 4) + M + S - u >>> 0
    }
    let y = T.alloc(4);
    return y.writeUInt32BE(u, 0), u = y.readUInt32LE(0), ("00000000" + u.toString(16)).slice(-8).toUpperCase()
}

function Ae(n, t) {
    let e = (M, S) => (M >>> S | M << 32 - S) >>> 0,
        i = T.alloc(24),
        o = [255, 255, 255, 255, 255, 255, 255, 183, 213, 215, 230, 231, 186, 60, 168, 216, 117, 71, 104, 207, 35, 233, 254, 170];
    for (let M = 0; M < o.length; M++) i.data[M] = o[M];
    let a = n.replace(/:/g, "").toUpperCase();
    T.from(a, "hex").copy(i), i.data[t * 4 - 1] = 170;
    let y = 0;
    for (let M = 0; M < t; M++) {
        let S = e(y, 25),
            O = e(y, 10);
        y = i.readUInt32LE(M * 4) + S + O - y >>> 0
    }
    let v = T.alloc(4);
    return v.writeUInt32LE(y, 0), v.toString("hex").toUpperCase()
}

function Wn(n, t) {
    let e = n[0],
        i = n[1],
        o = 0,
        a = 2654435769,
        u = t[0],
        y = t[1],
        v = t[2],
        M = t[3];
    for (let S = 0; S < 32; S++) o += a, o >>>= 0, e += ((i << 4) + u ^ i + o ^ (i >>> 5) + y) >>> 0, i += ((e << 4) + v ^ e + o ^ (e >>> 5) + M) >>> 0;
    return [e >>> 0, i >>> 0]
}

function ot(n) {
    return /^[0-9A-Fa-f:]+$/.test(n) ? n.replace(/:/g, "").length !== 14 ? {
        isValid: !1,
        error: "Invalid UID. Must be exactly 14 hexadecimal characters."
    } : {
        isValid: !0
    } : {
        isValid: !1,
        error: "Invalid UID. Must contain only hexadecimal characters."
    }
}

function an(n) {
    return !n || isNaN(n) ? {
        isValid: !1,
        error: "Invalid item ID. Must be a number."
    } : n < 1 || n > 1265 ? {
        isValid: !1,
        error: "Invalid item ID. Must be between 1 and 1265."
    } : n > 77 && n < 1e3 ? {
        isValid: !1,
        error: "Invalid item ID. Range 78-999 is not valid."
    } : n === 58 || n === 73 ? {
        isValid: !1,
        error: "Invalid item ID. This character does not exist."
    } : n !== 1132 && n !== 1133 && n !== 1144 && n < 1155 && n > 1125 ? {
        isValid: !1,
        error: "Invalid item ID. This vehicle does not exist."
    } : {
        isValid: !0
    }
}

function sn(n, t, e = "213") {
    let i = n.replace(/:/g, "").toUpperCase(),
        o = zn(i),
        u = `${e==="215"?"A2:85":"A2:2B"}:${o}`,
        y = "",
        v = "",
        M = t,
        S = !0;
    if (t < 1e3) {
        S = !0;
        let O = T.alloc(8);
        O.writeUInt32LE(t, 0), O.writeUInt32LE(t, 4);
        let rt = O.readInt32LE(0),
            dn = O.readInt32LE(4),
            ue = T.from(Ae(i, 3) + Ae(i, 4) + Ae(i, 5) + Ae(i, 6), "hex"),
            un = [ue.readUInt32LE(0), ue.readUInt32LE(4), ue.readUInt32LE(8), ue.readUInt32LE(12)],
            at = Wn([rt, dn], un);
        O.writeUInt32LE(at[0], 0), O.writeUInt32LE(at[1], 4), y = `A2:24:${O.slice(0,4).toString("hex").toUpperCase()}`, v = `A2:25:${O.slice(4,8).toString("hex").toUpperCase()}`
    } else {
        S = !1;
        let O = "00" + t.toString(16).toUpperCase();
        O = O.slice(3, 5) + O.slice(1, 3) + "0000", y = `A2:24:${O}`, v = "A2:26:00010000", M = t
    }
    return {
        code1: y,
        code2: v,
        code3: u,
        isCharacter: S,
        characterId: M
    }
}
var Ie = class n {
    constructor(t) {
        this.el = t
    }
    maxLength = 14;
    isUpdating = !1;
    onInputChange(t) {
        if (this.isUpdating) return;
        let e = t.target,
            a = e.value.replace(/[^0-9A-Fa-f]/g, "").toUpperCase(),
            u = a.length > this.maxLength ? a.substring(0, this.maxLength) : a;
        if (e.value !== u) {
            this.isUpdating = !0, e.value = u;
            let y = new Event("input", {
                    bubbles: !0
                }),
                v = new Event("change", {
                    bubbles: !0
                });
            setTimeout(() => {
                this.isUpdating = !1, e.dispatchEvent(y), e.dispatchEvent(v)
            }, 0)
        }
    }
    onBeforeInput(t) {
        if (t.target.value.length >= this.maxLength && t.inputType !== "deleteContentBackward" && t.inputType !== "deleteContentForward") {
            t.preventDefault();
            return
        }
        t.data && !this.isHexadecimalKey(t.data) && t.preventDefault()
    }
    onKeyDown(t) {
        let e = t.target,
            i = t.key;
        if (!this.isControlKey(t)) {
            if (e.value.length >= this.maxLength) {
                t.preventDefault();
                return
            }
            this.isHexadecimalKey(i) || t.preventDefault()
        }
    }
    onPaste(t) {
        t.preventDefault();
        let e = t.clipboardData?.getData("text") || "",
            i = t.target,
            o = e.replace(/[^0-9A-Fa-f]/g, "").toUpperCase();
        o.length > this.maxLength && (o = o.substring(0, this.maxLength)), this.isUpdating = !0, i.value = o;
        let a = new Event("input", {
                bubbles: !0
            }),
            u = new Event("change", {
                bubbles: !0
            });
        setTimeout(() => {
            this.isUpdating = !1, i.dispatchEvent(a), i.dispatchEvent(u)
        }, 0)
    }
    isControlKey(t) {
        return t.ctrlKey || t.metaKey || t.altKey || ["Backspace", "Delete", "Tab", "Escape", "Enter", "Home", "End", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(t.key)
    }
    isHexadecimalKey(t) {
        return /^[0-9A-Fa-f]$/.test(t)
    }
    static \u0275fac = function(e) {
        return new(e || n)(C($))
    };
    static \u0275dir = D({
        type: n,
        selectors: [
            ["", "appHexaUid", ""]
        ],
        hostBindings: function(e, i) {
            e & 1 && x("input", function(a) {
                return i.onInputChange(a)
            })("beforeinput", function(a) {
                return i.onBeforeInput(a)
            })("keydown", function(a) {
                return i.onKeyDown(a)
            })("paste", function(a) {
                return i.onPaste(a)
            })
        }
    })
};
var $n = () => ({
        standalone: !0
    }),
    qn = (n, t) => t.id;

function Kn(n, t) {
    n & 1 && (r(0, "span", 34), l(1, "NFC UID is required"), s())
}

function Qn(n, t) {
    n & 1 && (r(0, "span", 34), l(1, "Must be exactly 14 hexadecimal characters"), s())
}

function Yn(n, t) {
    if (n & 1 && (r(0, "div", 22), p(1, Kn, 2, 0, "span", 34), p(2, Qn, 2, 0, "span", 34), s()), n & 2) {
        let e, i, o = d();
        c(), h((e = o.formGenerator.get("nfcUid")) != null && e.hasError("required") ? 1 : -1), c(), h((i = o.formGenerator.get("nfcUid")) != null && i.hasError("invalidHexaUid") ? 2 : -1)
    }
}

function Jn(n, t) {
    if (n & 1) {
        let e = V();
        r(0, "button", 48), x("click", function() {
            m(e);
            let o = d(2);
            return g(o.clearSearch())
        }), _(), r(1, "svg", 49), b(2, "line", 50)(3, "line", 51), s()()
    }
}

function Zn(n, t) {
    if (n & 1) {
        let e = V();
        r(0, "div", 43)(1, "button", 52), x("click", function() {
            m(e);
            let o = d(2);
            return g(o.setFilter("all"))
        }), l(2, " All Items "), s(), r(3, "button", 52), x("click", function() {
            m(e);
            let o = d(2);
            return g(o.setFilter("characters"))
        }), l(4, " Characters Only "), s(), r(5, "button", 52), x("click", function() {
            m(e);
            let o = d(2);
            return g(o.setFilter("vehicles"))
        }), l(6, " Vehicles Only "), s()()
    }
    if (n & 2) {
        let e = d(2);
        c(), F("active", e.currentFilter === "all"), c(2), F("active", e.currentFilter === "characters"), c(2), F("active", e.currentFilter === "vehicles")
    }
}

function Xn(n, t) {
    if (n & 1 && (l(0, ' for "'), r(1, "strong"), l(2), s(), l(3, '" ')), n & 2) {
        let e = d(3);
        c(2), E(e.searchQuery)
    }
}

function ei(n, t) {
    n & 1 && (_(), r(0, "svg", 67), b(1, "path", 68)(2, "circle", 69), s(), l(3, " Character "))
}

function ti(n, t) {
    n & 1 && (_(), r(0, "svg", 67), b(1, "path", 70)(2, "path", 71), s(), l(3, " Vehicle "))
}

function ni(n, t) {
    n & 1 && (r(0, "div", 63), _(), r(1, "svg", 67), b(2, "polyline", 72), s()())
}

function ii(n, t) {
    if (n & 1 && (r(0, "div", 66), b(1, "span", 73), r(2, "span", 74), l(3), s()()), n & 2) {
        let e = d().$implicit,
            i = d(3);
        c(), A("innerHTML", i.highlightSearchTerm(e.from), fe), c(2), E(e.pack)
    }
}

function oi(n, t) {
    if (n & 1 && b(0, "span", 73), n & 2) {
        let e, i = d(2).$implicit,
            o = d(3);
        A("innerHTML", o.highlightSearchTerm(((e = o.getCharacterForVehicle(i.char)) == null ? null : e.name) || ""), fe)
    }
}

function ri(n, t) {
    if (n & 1 && (r(0, "div", 66), p(1, oi, 1, 1, "span", 73), r(2, "span", 74), l(3), s()()), n & 2) {
        let e = d().$implicit,
            i = d(3);
        c(), h(i.getCharacterForVehicle(e.char) ? 1 : -1), c(2), ne("Build ", e.build + 1)
    }
}

function ai(n, t) {
    if (n & 1) {
        let e = V();
        r(0, "div", 58), x("click", function() {
            let o = m(e).$implicit,
                a = d(3);
            return g(a.selectItem(o))
        })("keydown.enter", function() {
            let o = m(e).$implicit,
                a = d(3);
            return g(a.selectItem(o))
        })("keydown.space", function(o) {
            let a = m(e).$implicit;
            return d(3).selectItem(a), g(o.preventDefault())
        }), r(1, "div", 59)(2, "img", 60), x("error", function(o) {
            m(e);
            let a = d(3);
            return g(a.onImageError(o))
        })("contextmenu", function(o) {
            m(e);
            let a = d(3);
            return g(a.onImageContextMenu(o))
        }), s()(), r(3, "div", 61)(4, "div", 62), p(5, ei, 4, 0)(6, ti, 4, 0), s(), p(7, ni, 3, 0, "div", 63), s(), r(8, "div", 64), b(9, "h3", 65), p(10, ii, 4, 2, "div", 66)(11, ri, 4, 2, "div", 66), s()()
    }
    if (n & 2) {
        let e, i, o = t.$implicit,
            a = d(3);
        F("selected", ((e = a.formGenerator.get("specificItem")) == null ? null : e.value) === o.id), c(2), A("src", a.getItemImageUrl(o.id), _e)("alt", o.name), c(2), ee("data-type", a.isCharacter(o) ? "character" : "vehicle"), c(), h(a.isCharacter(o) ? 5 : 6), c(2), h(((i = a.formGenerator.get("specificItem")) == null ? null : i.value) === o.id ? 7 : -1), c(2), A("innerHTML", a.highlightSearchTerm(o.name), fe), c(), h(a.isCharacter(o) ? 10 : 11)
    }
}

function si(n, t) {
    if (n & 1) {
        let e = V();
        r(0, "div", 44)(1, "div", 53)(2, "span", 54), l(3), p(4, Xn, 4, 1), s(), r(5, "button", 55), x("click", function() {
            m(e);
            let o = d(2);
            return g(o.clearSearch())
        }), _(), r(6, "svg", 49), b(7, "line", 50)(8, "line", 51), s(), l(9, " Close "), s()(), k(), r(10, "div", 56), pt(11, ai, 12, 9, "div", 57, qn), s()()
    }
    if (n & 2) {
        let e = d(2);
        c(3), ft(" ", e.filteredItems.length, " result", e.filteredItems.length > 1 ? "s" : "", " found "), c(), h(e.searchQuery ? 4 : -1), c(7), ht(e.filteredItems)
    }
}

function li(n, t) {
    if (n & 1 && (l(0, ' No items match "'), r(1, "strong"), l(2), s(), l(3, '". Try different search terms. ')), n & 2) {
        let e = d(3);
        c(2), E(e.searchQuery)
    }
}

function ci(n, t) {
    n & 1 && l(0, " No items match the current filter. ")
}

function di(n, t) {
    if (n & 1) {
        let e = V();
        r(0, "div", 45)(1, "div", 75), _(), r(2, "svg", 76), b(3, "circle", 40)(4, "path", 41), s()(), k(), r(5, "h3"), l(6, "No items found"), s(), r(7, "p"), p(8, li, 4, 1)(9, ci, 1, 0), s(), r(10, "button", 77), x("click", function() {
            m(e);
            let o = d(2);
            return g(o.clearSearch())
        }), l(11, " Show All Items "), s()()
    }
    if (n & 2) {
        let e = d(2);
        c(8), h(e.searchQuery ? 8 : 9)
    }
}

function ui(n, t) {
    if (n & 1) {
        let e = V();
        r(0, "div", 46)(1, "button", 77), x("click", function() {
            m(e);
            let o = d(2);
            return g(o.showAllItems())
        }), _(), r(2, "svg", 49), b(3, "rect", 78)(4, "rect", 79)(5, "rect", 80)(6, "rect", 81), s(), l(7), s()()
    }
    if (n & 2) {
        let e = d(2);
        c(7), ne(" Browse All ", e.allLegoItems.length, " Items ")
    }
}

function mi(n, t) {
    n & 1 && (_(), r(0, "svg", 49), b(1, "path", 68)(2, "circle", 69), s(), l(3, " Character "))
}

function gi(n, t) {
    n & 1 && (_(), r(0, "svg", 49), b(1, "path", 70)(2, "path", 71), s(), l(3, " Vehicle "))
}

function pi(n, t) {
    if (n & 1 && (r(0, "span"), l(1), s(), r(2, "span"), l(3), s()), n & 2) {
        let e = d(3);
        c(), E(e.getSelectedItem().from), c(2), E(e.getSelectedItem().pack)
    }
}

function hi(n, t) {
    if (n & 1 && (r(0, "span"), l(1), s()), n & 2) {
        let e, i = d(4);
        c(), E((e = i.getCharacterForVehicle(i.getSelectedItem().char)) == null ? null : e.name)
    }
}

function fi(n, t) {
    if (n & 1 && (p(0, hi, 2, 1, "span"), r(1, "span"), l(2), s()), n & 2) {
        let e = d(3);
        h(e.getCharacterForVehicle(e.getSelectedItem().char) ? 0 : -1), c(2), ne("Build ", e.getSelectedItem().build + 1)
    }
}

function _i(n, t) {
    if (n & 1) {
        let e = V();
        r(0, "div", 47)(1, "div", 82)(2, "span", 83), l(3, "Selected item:"), s(), r(4, "button", 84), x("click", function() {
            m(e);
            let o = d(2);
            return g(o.clearSelection())
        }), l(5, " Change selection "), s()(), r(6, "div", 85)(7, "div", 86)(8, "img", 60), x("error", function(o) {
            m(e);
            let a = d(2);
            return g(a.onImageError(o))
        })("contextmenu", function(o) {
            m(e);
            let a = d(2);
            return g(a.onImageContextMenu(o))
        }), s()(), r(9, "div", 87)(10, "div", 88), p(11, mi, 4, 0)(12, gi, 4, 0), s(), r(13, "div", 89)(14, "h4", 90), l(15), s(), r(16, "div", 91), p(17, pi, 4, 2)(18, fi, 3, 2), s()()(), r(19, "div", 92), _(), r(20, "svg", 39), b(21, "polyline", 72), s()()()()
    }
    if (n & 2) {
        let e = d(2);
        c(8), A("src", e.getItemImageUrl(e.getSelectedItem().id), _e)("alt", e.getSelectedItem().name), c(2), ee("data-type", e.isCharacter(e.getSelectedItem()) ? "character" : "vehicle"), c(), h(e.isCharacter(e.getSelectedItem()) ? 11 : 12), c(4), E(e.getSelectedItem().name), c(2), h(e.isCharacter(e.getSelectedItem()) ? 17 : 18)
    }
}

function Ci(n, t) {
    n & 1 && (r(0, "div", 22)(1, "span", 34), l(2, "Please select an item"), s()())
}

function bi(n, t) {
    if (n & 1) {
        let e = V();
        r(0, "div", 13), b(1, "div", 35), r(2, "label", 14), l(3, "Search & Select Item"), s(), r(4, "div", 36)(5, "input", 37), bt("ngModelChange", function(o) {
            m(e);
            let a = d();
            return Ct(a.searchQuery, o) || (a.searchQuery = o), g(o)
        }), x("input", function() {
            m(e);
            let o = d();
            return g(o.onSearchChange())
        })("focus", function() {
            m(e);
            let o = d();
            return g(o.onSearchFocus())
        }), s(), r(6, "div", 38), _(), r(7, "svg", 39), b(8, "circle", 40)(9, "path", 41), s()(), p(10, Jn, 4, 0, "button", 42), s(), p(11, Zn, 7, 6, "div", 43), p(12, si, 13, 3, "div", 44), p(13, di, 12, 1, "div", 45), p(14, ui, 8, 1, "div", 46), p(15, _i, 22, 6, "div", 47), p(16, Ci, 3, 0, "div", 22), s()
    }
    if (n & 2) {
        let e, i = d();
        c(5), _t("ngModel", i.searchQuery), A("ngModelOptions", xt(9, $n)), c(5), h(i.searchQuery ? 10 : -1), c(), h(i.searchQuery || i.showQuickFilters ? 11 : -1), c(), h((i.searchQuery || i.showQuickFilters) && i.filteredItems.length > 0 ? 12 : -1), c(), h((i.searchQuery || i.showQuickFilters) && i.filteredItems.length === 0 ? 13 : -1), c(), h(!i.searchQuery && !i.showQuickFilters ? 14 : -1), c(), h(i.getSelectedItem() ? 15 : -1), c(), h((e = i.formGenerator.get("specificItem")) != null && e.hasError("required") && ((e = i.formGenerator.get("specificItem")) != null && e.touched) ? 16 : -1)
    }
}

function xi(n, t) {
    n & 1 && b(0, "div", 95)
}

function vi(n, t) {
    if (n & 1) {
        let e = V();
        r(0, "button", 93)(1, "div", 94), p(2, xi, 1, 0, "div", 95), r(3, "span"), l(4), s()()(), r(5, "button", 96), x("click", function() {
            m(e);
            let o = d();
            return g(o.resetForm())
        }), l(6, " Reset "), s()
    }
    if (n & 2) {
        let e = d();
        A("disabled", e.formGenerator.invalid || e.isLoading), c(2), h(e.isLoading ? 2 : -1), c(2), E(e.isLoading ? "Generating..." : "Generate NFC Codes"), c(), A("disabled", e.isLoading)
    }
}

function yi(n, t) {
    if (n & 1) {
        let e = V();
        r(0, "button", 77), x("click", function() {
            m(e);
            let o = d();
            return g(o.resetGeneration())
        }), l(1, " Generate New Codes "), s()
    }
}

function Mi(n, t) {
    n & 1 && (_(), r(0, "svg", 49), b(1, "path", 68)(2, "circle", 69), s(), l(3, " Character "))
}

function Pi(n, t) {
    n & 1 && (_(), r(0, "svg", 49), b(1, "path", 70)(2, "path", 71), s(), l(3, " Vehicle "))
}

function Oi(n, t) {
    if (n & 1 && (r(0, "div", 118)(1, "span"), l(2), s(), r(3, "span"), l(4), s()()), n & 2) {
        let e = d();
        c(2), E(e.from), c(2), E(e.pack)
    }
}

function wi(n, t) {
    n & 1 && (r(0, "span"), l(1), s()), n & 2 && (c(), E(t.name))
}

function ki(n, t) {
    if (n & 1 && (r(0, "div", 118), p(1, wi, 2, 1, "span"), r(2, "span"), l(3), s()()), n & 2) {
        let e, i = d(),
            o = d(2);
        c(), h((e = o.getCharacterForCodes()) ? 1 : -1, e), c(2), ne("Build ", i.build + 1)
    }
}

function Ei(n, t) {
    if (n & 1) {
        let e = V();
        r(0, "div", 104)(1, "div", 114)(2, "img", 60), x("error", function(o) {
            m(e);
            let a = d(2);
            return g(a.onImageError(o))
        })("contextmenu", function(o) {
            m(e);
            let a = d(2);
            return g(a.onImageContextMenu(o))
        }), s()(), r(3, "div", 115)(4, "div", 116), p(5, Mi, 4, 0)(6, Pi, 4, 0), s(), r(7, "div", 117)(8, "h3"), l(9), s(), p(10, Oi, 5, 2, "div", 118)(11, ki, 4, 2, "div", 118), s()()()
    }
    if (n & 2) {
        let e = t,
            i = d(2);
        c(2), A("src", i.getItemImageUrl(e.id), _e)("alt", e.name), c(2), ee("data-type", i.isCharacter(e) ? "character" : "vehicle"), c(), h(i.isCharacter(e) ? 5 : 6), c(4), E(e.name), c(), h(i.isCharacter(e) ? 10 : 11)
    }
}

function Vi(n, t) {
    if (n & 1) {
        let e = V();
        r(0, "div", 33)(1, "div", 97)(2, "div", 98), _(), r(3, "svg", 99), b(4, "rect", 100)(5, "line", 101)(6, "line", 102), s(), k(), r(7, "h2"), l(8, "NFC Codes Generated Successfully!"), s()(), r(9, "p", 103), l(10, "Copy these codes to your application"), s()(), p(11, Ei, 12, 6, "div", 104), r(12, "div", 105)(13, "div", 106)(14, "div", 107)(15, "span", 108), l(16, "Code 1"), s(), r(17, "button", 109), x("click", function() {
            m(e);
            let o = d();
            return g(o.copyToClipboard(o.generatedCodes.code1))
        }), _(), r(18, "svg", 49), b(19, "rect", 110)(20, "path", 111), s()()(), k(), r(21, "div", 112), l(22), s()(), r(23, "div", 106)(24, "div", 107)(25, "span", 108), l(26, "Code 2"), s(), r(27, "button", 109), x("click", function() {
            m(e);
            let o = d();
            return g(o.copyToClipboard(o.generatedCodes.code2))
        }), _(), r(28, "svg", 49), b(29, "rect", 110)(30, "path", 111), s()()(), k(), r(31, "div", 112), l(32), s()(), r(33, "div", 106)(34, "div", 107)(35, "span", 108), l(36, "Code 3"), s(), r(37, "button", 109), x("click", function() {
            m(e);
            let o = d();
            return g(o.copyToClipboard(o.generatedCodes.code3))
        }), _(), r(38, "svg", 49), b(39, "rect", 110)(40, "path", 111), s()()(), k(), r(41, "div", 112), l(42), s()()(), r(43, "div", 113)(44, "h4"), l(45, "How to use these codes:"), s(), r(46, "ol")(47, "li"), l(48, "Open "), r(49, "strong"), l(50, "NFC Tools"), s(), l(51, " on your device"), s(), r(52, "li"), l(53, "Select "), r(54, "strong"), l(55, '"Other"'), s()(), r(56, "li"), l(57, "Choose "), r(58, "strong"), l(59, '"Advanced NFC commands"'), s(), l(60, ", click "), r(61, "strong"), l(62, '"I understand"'), s()(), r(63, "li"), l(64, "Paste the each code into the data box"), s(), r(65, "li"), l(66, "Hit "), r(67, "strong"), l(68, '"Send command"'), s(), l(69, " and you're done"), s()()()()
    }
    if (n & 2) {
        let e, i = d();
        c(11), h((e = i.getItemForCodes()) ? 11 : -1, e), c(11), E(i.generatedCodes.code1), c(10), E(i.generatedCodes.code2), c(10), E(i.generatedCodes.code3)
    }
}
var Te = class n {
    formGenerator;
    #e = pe(nn);
    isLoading = !1;
    ItemType = nt;
    allLegoItems = [];
    searchQuery = "";
    filteredItems = [];
    showQuickFilters = !1;
    currentFilter = "all";
    generatedCodes = null;
    showCodes = !1;
    constructor() {
        this.allLegoItems = [...z.getCharacters(), ...z.getVehicles()], this.filteredItems = this.allLegoItems, this.formGenerator = this.#e.group({
            nfcUid: ["", [H.required, this.hexaUidValidator]],
            nfcType: ["213", H.required],
            itemType: ["specific", H.required],
            specificItem: [""]
        }), this.formGenerator.get("itemType")?.valueChanges.subscribe(t => {
            this.formGenerator.get("specificItem")?.setValue(""), this.clearSearch(), this.showCodes = !1, this.generatedCodes = null, t === "specific" ? this.formGenerator.get("specificItem")?.setValidators([H.required]) : this.formGenerator.get("specificItem")?.clearValidators(), this.formGenerator.get("specificItem")?.updateValueAndValidity()
        })
    }
    hexaUidValidator(t) {
        let e = t.value;
        return e ? ot(e).isValid ? null : {
            invalidHexaUid: !0
        } : null
    }
    shouldShowSpecificItem() {
        return this.formGenerator.get("itemType")?.value === "specific"
    }
    getItemImageUrl(t) {
        return `/LEGO-Dimensions-NFC/Dimensions_Web/LD_Generator/assets/img/${t}.png`
    }
    onImageError(t) {
        t.target.src = "/LEGO-Dimensions-NFC/Dimensions_Web/LD_Generator/assets/img/logo.png"
    }
    onImageContextMenu(t) {
        return t.preventDefault(), !1
    }
    getSpecificItemOptions() {
        return this.allLegoItems.map(t => ({
            value: t.id,
            label: t.name,
            type: t.id < 1e3 ? "Character" : "Vehicle"
        }))
    }
    trackByValue(t, e) {
        return e.id || e.value
    }
    onSearchChange() {
        this.applyFilters()
    }
    onSearchFocus() {
        this.searchQuery || (this.showQuickFilters = !0)
    }
    applyFilters() {
        let t = this.allLegoItems;
        if (this.currentFilter === "characters" ? t = t.filter(i => this.isCharacter(i)) : this.currentFilter === "vehicles" && (t = t.filter(i => !this.isCharacter(i))), !this.searchQuery.trim()) {
            this.filteredItems = t;
            return
        }
        let e = this.searchQuery.toLowerCase().trim();
        this.filteredItems = t.filter(i => {
            if (i.id.toString().includes(e) || i.name.toLowerCase().includes(e)) return !0;
            if (this.isCharacter(i)) {
                let o = i;
                return o.from.toLowerCase().includes(e) || o.pack.toLowerCase().includes(e)
            }
            if (!this.isCharacter(i)) {
                let o = i;
                return this.getCharacterForVehicle(o.char)?.name.toLowerCase().includes(e) || !1
            }
            return !1
        })
    }
    setFilter(t) {
        this.currentFilter = t, this.applyFilters()
    }
    clearSearch() {
        this.searchQuery = "", this.showQuickFilters = !1, this.currentFilter = "all", this.filteredItems = this.allLegoItems
    }
    showAllItems() {
        this.showQuickFilters = !0, this.applyFilters()
    }
    selectItem(t) {
        this.formGenerator.get("specificItem")?.setValue(t.id), this.clearSearch()
    }
    clearSelection() {
        this.formGenerator.get("specificItem")?.setValue(""), this.clearSearch()
    }
    getSelectedItem() {
        let t = this.formGenerator.get("specificItem")?.value;
        return t && this.allLegoItems.find(e => e.id === t) || null
    }
    highlightSearchTerm(t) {
        if (!this.searchQuery || !t) return t;
        let e = this.searchQuery.trim();
        if (!e) return t;
        let i = e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
            o = new RegExp(`(${i})`, "gi");
        return t.replace(o, "<mark>$1</mark>")
    }
    highlightItemId(t) {
        let e = t.toString();
        return this.highlightSearchTerm(e)
    }
    isCharacter(t) {
        return t.id < 1e3
    }
    getCharacterForVehicle(t) {
        return z.getCharacterById(t)
    }
    onSubmit() {
        if (this.formGenerator.valid) {
            this.isLoading = !0;
            let t = this.formGenerator.value,
                e = t.nfcUid?.toUpperCase(),
                i = parseInt(t.specificItem),
                o = ot(e);
            if (!o.isValid) {
                this.isLoading = !1, alert(`UID Error: ${o.error}`);
                return
            }
            let a = an(i);
            if (!a.isValid) {
                this.isLoading = !1, alert(`Item ID Error: ${a.error}`);
                return
            }
            try {
                let u = t.nfcType;
                if (this.generatedCodes = sn(e, i, u), !this.generatedCodes.isCharacter) {
                    let v = this.allLegoItems.find(M => M.id === i);
                    v && (this.generatedCodes.characterId = v.char)
                }
                this.showCodes = !0, this.isLoading = !1;
                let y = this.getItemDetails(i);
                console.log("\u2705 NFC codes generated successfully:", {
                    uid: e,
                    item: y,
                    codes: this.generatedCodes
                })
            } catch (u) {
                this.isLoading = !1, console.error("\u274C Error generating NFC codes:", u), alert("Error generating NFC codes. Please try again.")
            }
        } else {
            console.log("\u274C Form validation failed"), this.formGenerator.markAllAsTouched();
            let t = document.querySelector(".error");
            t && t.focus()
        }
    }
    copyToClipboard(t) {
        navigator.clipboard.writeText(t).then(() => {
            console.log("Code copied to clipboard:", t)
        }).catch(e => {
            console.error("Failed to copy code:", e);
            let i = document.createElement("textarea");
            i.value = t, document.body.appendChild(i), i.select(), document.execCommand("copy"), document.body.removeChild(i)
        })
    }
    getItemForCodes() {
        if (!this.generatedCodes) return null;
        let t = this.formGenerator.get("specificItem")?.value;
        return this.allLegoItems.find(e => e.id === t) || null
    }
    getCharacterForCodes() {
        return this.generatedCodes && z.getCharacterById(this.generatedCodes.characterId) || null
    }
    resetGeneration() {
        this.showCodes = !1, this.generatedCodes = null;
        let t = this.formGenerator.get("itemType")?.value,
            e = this.formGenerator.get("nfcType")?.value;
        this.formGenerator.reset({
            itemType: t || "specific",
            nfcType: e || "213",
            nfcUid: "",
            specificItem: ""
        }), this.clearSearch()
    }
    resetForm() {
        let t = this.formGenerator.get("itemType")?.value,
            e = this.formGenerator.get("nfcType")?.value;
        this.formGenerator.reset({
            itemType: t || "specific",
            nfcType: e || "213",
            nfcUid: "",
            specificItem: ""
        }), this.clearSearch(), this.showCodes = !1, this.generatedCodes = null
    }
    getItemDetails(t) {
        let e = this.allLegoItems.find(i => i.id === t);
        return e ? w(w({
            id: e.id,
            name: e.name,
            type: this.isCharacter(e) ? "character" : "vehicle"
        }, this.isCharacter(e) && {
            from: e.from,
            pack: e.pack
        }), !this.isCharacter(e) && {
            characterName: this.getCharacterForVehicle(e.char)?.name,
            build: e.build
        }) : null
    }
    static \u0275fac = function(e) {
        return new(e || n)
    };
    static \u0275cmp = q({
        type: n,
        selectors: [
            ["lego-form-generator"]
        ],
        decls: 46,
        vars: 12,
        consts: [
            [1, "form-container"],
            [1, "form-card"],
            [1, "card-header"],
            [1, "header-content"],
            [1, "header-icon"],
            ["width", "32", "height", "32", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"],
            ["d", "M12 2L2 7L12 12L22 7L12 2Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linejoin", "round"],
            ["d", "M2 17L12 22L22 17", "stroke", "currentColor", "stroke-width", "2", "stroke-linejoin", "round"],
            ["d", "M2 12L12 17L22 12", "stroke", "currentColor", "stroke-width", "2", "stroke-linejoin", "round"],
            [1, "title"],
            [1, "subtitle"],
            [1, "form-content"],
            [3, "ngSubmit", "formGroup"],
            [1, "input-group"],
            [1, "input-label"],
            [1, "nfc-type-toggle"],
            [1, "toggle-label"],
            [1, "toggle-switch"],
            ["type", "button", 1, "toggle-btn", 3, "click"],
            [1, "input-container"],
            ["type", "text", "formControlName", "nfcUid", "placeholder", "Enter 14 hexadecimal characters", "appHexaUid", "", "autocomplete", "off", "spellcheck", "false", 1, "custom-input"],
            [1, "input-hint"],
            [1, "error-messages"],
            [1, "radio-container"],
            [1, "radio-group"],
            [1, "radio-option"],
            ["type", "radio", "formControlName", "itemType", 3, "value"],
            [1, "radio-custom"],
            [1, "radio-content"],
            [1, "radio-title"],
            [1, "radio-description"],
            [1, "actions-container"],
            ["type", "button", 1, "btn", "btn-secondary"],
            [1, "codes-section"],
            [1, "error-text"],
            [1, "divider"],
            [1, "search-container"],
            ["type", "text", "placeholder", "Type to search characters, vehicles, franchises...", "autocomplete", "off", 1, "search-input", 3, "ngModelChange", "input", "focus", "ngModel", "ngModelOptions"],
            [1, "search-icon"],
            ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"],
            ["cx", "11", "cy", "11", "r", "8", "stroke", "currentColor", "stroke-width", "2"],
            ["d", "m21 21-4.35-4.35", "stroke", "currentColor", "stroke-width", "2"],
            ["type", "button", 1, "search-clear"],
            [1, "quick-filters"],
            [1, "search-results"],
            [1, "no-results"],
            [1, "browse-all-section"],
            [1, "selected-item-display"],
            ["type", "button", 1, "search-clear", 3, "click"],
            ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"],
            ["x1", "18", "y1", "6", "x2", "6", "y2", "18", "stroke", "currentColor", "stroke-width", "2"],
            ["x1", "6", "y1", "6", "x2", "18", "y2", "18", "stroke", "currentColor", "stroke-width", "2"],
            ["type", "button", 1, "filter-btn", 3, "click"],
            [1, "results-header"],
            [1, "results-count"],
            ["type", "button", 1, "clear-search", 3, "click"],
            [1, "items-grid"],
            ["tabindex", "0", 1, "item-card", 3, "selected"],
            ["tabindex", "0", 1, "item-card", 3, "click", "keydown.enter", "keydown.space"],
            [1, "item-image"],
            ["loading", "lazy", 3, "error", "contextmenu", "src", "alt"],
            [1, "item-header"],
            [1, "item-type-badge"],
            [1, "selected-indicator"],
            [1, "item-content"],
            [1, "item-name", 3, "innerHTML"],
            [1, "item-details"],
            ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"],
            ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2", "stroke", "currentColor", "stroke-width", "2"],
            ["cx", "12", "cy", "7", "r", "4", "stroke", "currentColor", "stroke-width", "2"],
            ["d", "M8 6h13l-1.5 6-1.5-1-1 1-1-1-1 1-1-1-1 1-1-1-1.5 1L8 6Z", "stroke", "currentColor", "stroke-width", "2"],
            ["d", "M6 6L4 8v8l2 2h2l2-2V8l-2-2H6Z", "stroke", "currentColor", "stroke-width", "2"],
            ["points", "20,6 9,17 4,12", "stroke", "currentColor", "stroke-width", "2"],
            [1, "detail-item", 3, "innerHTML"],
            [1, "detail-item"],
            [1, "no-results-icon"],
            ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"],
            ["type", "button", 1, "btn", "btn-secondary", 3, "click"],
            ["x", "3", "y", "3", "width", "7", "height", "7", "stroke", "currentColor", "stroke-width", "2"],
            ["x", "14", "y", "3", "width", "7", "height", "7", "stroke", "currentColor", "stroke-width", "2"],
            ["x", "14", "y", "14", "width", "7", "height", "7", "stroke", "currentColor", "stroke-width", "2"],
            ["x", "3", "y", "14", "width", "7", "height", "7", "stroke", "currentColor", "stroke-width", "2"],
            [1, "selected-header"],
            [1, "selected-label"],
            ["type", "button", 1, "change-selection", 3, "click"],
            [1, "selected-item-card"],
            [1, "selected-item-image"],
            [1, "selected-item-content"],
            [1, "selected-item-badge"],
            [1, "selected-item-info"],
            [1, "selected-item-name"],
            [1, "selected-item-details"],
            [1, "selected-checkmark"],
            ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"],
            [1, "btn-content"],
            [1, "loading-spinner"],
            ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"],
            [1, "codes-header"],
            [1, "codes-title"],
            ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"],
            ["x", "2", "y", "3", "width", "20", "height", "14", "rx", "2", "stroke", "currentColor", "stroke-width", "2"],
            ["x1", "8", "y1", "21", "x2", "16", "y2", "21", "stroke", "currentColor", "stroke-width", "2"],
            ["x1", "12", "y1", "17", "x2", "12", "y2", "21", "stroke", "currentColor", "stroke-width", "2"],
            [1, "codes-subtitle"],
            [1, "item-info-card"],
            [1, "codes-grid"],
            [1, "code-card"],
            [1, "code-header"],
            [1, "code-label"],
            ["type", "button", "title", "Copy to clipboard", 1, "copy-btn", 3, "click"],
            ["x", "9", "y", "9", "width", "13", "height", "13", "rx", "2", "ry", "2", "stroke", "currentColor", "stroke-width", "2"],
            ["d", "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1", "stroke", "currentColor", "stroke-width", "2"],
            [1, "code-value"],
            [1, "instructions-card"],
            [1, "item-info-image"],
            [1, "item-info-header"],
            [1, "item-info-badge"],
            [1, "item-info-details"],
            [1, "item-meta"]
        ],
        template: function(e, i) {
            if (e & 1 && (r(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4), _(), r(5, "svg", 5), b(6, "path", 6)(7, "path", 7)(8, "path", 8), s()(), k(), r(9, "h1", 9), l(10, "Chteupnin's LD Generator"), s(), r(11, "p", 10), l(12, "Configure your NFC tags with modern precision"), s()()(), r(13, "div", 11)(14, "form", 12), x("ngSubmit", function() {
                    return i.onSubmit()
                }), r(15, "div", 13)(16, "label", 14), l(17, "NFC UID"), s(), r(18, "div", 15)(19, "span", 16), l(20, "Chip Type:"), s(), r(21, "div", 17)(22, "button", 18), x("click", function() {
                    let a;
                    return (a = i.formGenerator.get("nfcType")) == null ? null : a.setValue("213")
                }), l(23, " NTAG213 "), s(), r(24, "button", 18), x("click", function() {
                    let a;
                    return (a = i.formGenerator.get("nfcType")) == null ? null : a.setValue("215")
                }), l(25, " NTAG215 "), s()()(), r(26, "div", 19), b(27, "input", 20), r(28, "span", 21), l(29, "14 hexadecimal characters (0-9, A-F)"), s(), p(30, Yn, 3, 2, "div", 22), s(), r(31, "div", 23)(32, "div", 24)(33, "label", 25), b(34, "input", 26)(35, "span", 27), r(36, "div", 28)(37, "span", 29), l(38, "Specific Item"), s(), r(39, "span", 30), l(40, "Generate for one specific item"), s()()()()()(), p(41, bi, 17, 10, "div", 13), r(42, "div", 31), p(43, vi, 7, 4)(44, yi, 2, 0, "button", 32), s()(), p(45, Vi, 70, 4, "div", 33), s()()()), e & 2) {
                let o, a, u, y;
                c(14), A("formGroup", i.formGenerator), c(8), F("active", ((o = i.formGenerator.get("nfcType")) == null ? null : o.value) === "213"), c(2), F("active", ((a = i.formGenerator.get("nfcType")) == null ? null : a.value) === "215"), c(3), F("error", ((u = i.formGenerator.get("nfcUid")) == null ? null : u.hasError("required")) && ((u = i.formGenerator.get("nfcUid")) == null ? null : u.touched) || ((u = i.formGenerator.get("nfcUid")) == null ? null : u.hasError("invalidHexaUid")) && ((u = i.formGenerator.get("nfcUid")) == null ? null : u.touched)), c(3), h((y = i.formGenerator.get("nfcUid")) != null && y.touched ? 30 : -1), c(4), A("value", i.ItemType.SPECIFIC), c(7), h(i.shouldShowSpecificItem() ? 41 : -1), c(2), h(i.showCodes ? 44 : 43), c(2), h(i.showCodes && i.generatedCodes ? 45 : -1)
            }
        },
        dependencies: [xe, rn, Xt, De, Xe, Wt, $t, et, tt, on, Ze, Ie],
        styles: ['[_nghost-%COMP%]{display:block;min-height:100vh;background:linear-gradient(135deg,#667eea,#764ba2);padding:20px;font-family:Segoe UI,sans-serif}.form-container[_ngcontent-%COMP%]{max-width:800px;margin:0 auto;position:relative;z-index:1}.form-card[_ngcontent-%COMP%]{background:#fffffff2;-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);border-radius:24px;box-shadow:0 20px 40px #0000001a;overflow:hidden;border:1px solid rgba(255,255,255,.2)}.card-header[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);padding:40px;text-align:center;color:#fff}.header-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:16px}.header-icon[_ngcontent-%COMP%]{width:60px;height:60px;background:#fff3;border-radius:16px;display:flex;align-items:center;justify-content:center;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.header-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:32px;height:32px;color:#fff}.title[_ngcontent-%COMP%]{margin:0;font-size:32px;font-weight:700;letter-spacing:-.5px}.subtitle[_ngcontent-%COMP%]{margin:0;font-size:16px;opacity:.9;font-weight:400}.form-content[_ngcontent-%COMP%]{padding:40px}.input-group[_ngcontent-%COMP%]{margin-bottom:32px}.input-label[_ngcontent-%COMP%]{display:block;font-size:16px;font-weight:600;color:#333;margin-bottom:12px;letter-spacing:-.2px}.input-container[_ngcontent-%COMP%]{position:relative}.custom-input[_ngcontent-%COMP%]{width:100%;padding:16px 20px;border:2px solid #e1e5e9;border-radius:12px;font-size:16px;background:#fff;transition:all .3s ease;box-sizing:border-box}.custom-input[_ngcontent-%COMP%]::placeholder{color:#999}.custom-input[_ngcontent-%COMP%]:focus{outline:none;border-color:#667eea;box-shadow:0 0 0 3px #667eea1a}.custom-input.error[_ngcontent-%COMP%]{border-color:#e74c3c;background-color:#fef8f8}.custom-input.error[_ngcontent-%COMP%]:focus{border-color:#e74c3c;box-shadow:0 0 0 3px #e74c3c1a}.input-hint[_ngcontent-%COMP%]{display:block;font-size:14px;color:#666;margin-top:8px}.nfc-type-toggle[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin-bottom:16px;margin-top:8px}.nfc-type-toggle[_ngcontent-%COMP%]   .toggle-label[_ngcontent-%COMP%]{font-size:14px;color:#555;font-weight:500;min-width:80px}.nfc-type-toggle[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%]{display:flex;background:#f5f5f5;border-radius:20px;padding:2px;gap:2px}.nfc-type-toggle[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%]{background:transparent;border:none;padding:6px 12px;border-radius:18px;font-size:12px;font-weight:600;color:#666;cursor:pointer;transition:all .2s ease;white-space:nowrap}.nfc-type-toggle[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%]:hover{color:#333;background:#fffc}.nfc-type-toggle[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%]   .toggle-btn.active[_ngcontent-%COMP%]{background:#667eea;color:#fff;box-shadow:0 2px 4px #667eea4d}.toggle-container[_ngcontent-%COMP%]   .toggle-group[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:12px}.toggle-container[_ngcontent-%COMP%]   .toggle-option[_ngcontent-%COMP%]{display:flex;align-items:center;padding:16px;border:2px solid #e1e5e9;border-radius:12px;background:#fff;cursor:pointer;transition:all .3s ease}.toggle-container[_ngcontent-%COMP%]   .toggle-option[_ngcontent-%COMP%]:hover{border-color:#667eea;background:#667eea05}.toggle-container[_ngcontent-%COMP%]   .toggle-option.active[_ngcontent-%COMP%]{border-color:#667eea;background:linear-gradient(135deg,#667eea0d,#764ba20d);box-shadow:0 2px 8px #667eea26}.toggle-container[_ngcontent-%COMP%]   .toggle-content[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;width:100%}.toggle-container[_ngcontent-%COMP%]   .toggle-icon[_ngcontent-%COMP%]{width:40px;height:40px;background:#f8f9fa;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .3s ease}.toggle-container[_ngcontent-%COMP%]   .toggle-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:#666;transition:color .3s ease}.toggle-container[_ngcontent-%COMP%]   .toggle-option.active[_ngcontent-%COMP%]   .toggle-icon[_ngcontent-%COMP%]{background:#667eea1a}.toggle-container[_ngcontent-%COMP%]   .toggle-option.active[_ngcontent-%COMP%]   .toggle-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:#667eea}.toggle-container[_ngcontent-%COMP%]   .toggle-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px;text-align:left}.toggle-container[_ngcontent-%COMP%]   .toggle-title[_ngcontent-%COMP%]{font-size:16px;font-weight:600;color:#333;transition:color .3s ease}.toggle-container[_ngcontent-%COMP%]   .toggle-subtitle[_ngcontent-%COMP%]{font-size:13px;color:#666;transition:color .3s ease}.toggle-container[_ngcontent-%COMP%]   .toggle-option.active[_ngcontent-%COMP%]   .toggle-title[_ngcontent-%COMP%]{color:#667eea}.toggle-container[_ngcontent-%COMP%]   .toggle-option.active[_ngcontent-%COMP%]   .toggle-subtitle[_ngcontent-%COMP%]{color:#5a67d8}.search-container[_ngcontent-%COMP%]{position:relative;margin-bottom:20px}.search-input[_ngcontent-%COMP%]{width:100%;padding:16px 50px;border:2px solid #e1e5e9;border-radius:12px;font-size:16px;background:#fff;transition:all .3s ease;box-sizing:border-box}.search-input[_ngcontent-%COMP%]::placeholder{color:#999}.search-input[_ngcontent-%COMP%]:focus{outline:none;border-color:#667eea;box-shadow:0 0 0 3px #667eea1a}.search-icon[_ngcontent-%COMP%]{position:absolute;left:16px;top:50%;transform:translateY(-50%);color:#999;pointer-events:none}.search-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:20px;height:20px}.search-clear[_ngcontent-%COMP%]{position:absolute;right:16px;top:50%;transform:translateY(-50%);background:none;border:none;color:#999;cursor:pointer;padding:4px;border-radius:4px;transition:all .2s ease}.search-clear[_ngcontent-%COMP%]:hover{background:#f0f0f0;color:#666}.search-clear[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:16px;height:16px}.quick-filters[_ngcontent-%COMP%]{display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap}.filter-btn[_ngcontent-%COMP%]{padding:8px 16px;border:2px solid #e1e5e9;border-radius:8px;background:#fff;color:#666;font-size:14px;font-weight:500;cursor:pointer;transition:all .3s ease}.filter-btn[_ngcontent-%COMP%]:hover{border-color:#667eea;color:#667eea}.filter-btn.active[_ngcontent-%COMP%]{background:#667eea;border-color:#667eea;color:#fff}.search-suggestions[_ngcontent-%COMP%]{background:#fff;border:2px solid #e1e5e9;border-radius:12px;padding:20px}.suggestions-header[_ngcontent-%COMP%]{margin-bottom:12px}.suggestions-header[_ngcontent-%COMP%]   .suggestions-title[_ngcontent-%COMP%]{font-size:14px;font-weight:600;color:#333}.suggestions-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:20px}.suggestion-btn[_ngcontent-%COMP%]{padding:6px 12px;background:#f8f9fa;border:1px solid #e1e5e9;border-radius:6px;color:#666;font-size:13px;cursor:pointer;transition:all .2s ease}.suggestion-btn[_ngcontent-%COMP%]:hover{background:#667eea;color:#fff;border-color:#667eea}.browse-all[_ngcontent-%COMP%]{text-align:center}.browse-all[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{min-height:auto;padding:12px 20px}.selected-item-display[_ngcontent-%COMP%]{margin-top:20px;padding:16px;background:#667eea0d;border:2px solid rgba(102,126,234,.1);border-radius:12px}.selected-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px}.selected-label[_ngcontent-%COMP%]{font-size:14px;font-weight:600;color:#667eea}.change-selection[_ngcontent-%COMP%]{background:none;border:1px solid #667eea;color:#667eea;padding:4px 8px;border-radius:4px;font-size:12px;cursor:pointer;transition:all .2s ease}.change-selection[_ngcontent-%COMP%]:hover{background:#667eea;color:#fff}.selected-item-card[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;background:#fff;border-radius:8px;padding:12px;border:1px solid rgba(102,126,234,.2)}.selected-item-image[_ngcontent-%COMP%]{width:60px;height:60px;margin-right:12px;border-radius:8px;overflow:hidden;background:linear-gradient(135deg,#f8f9fa,#e9ecef);display:flex;align-items:center;justify-content:center;flex-shrink:0}.selected-item-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none}.selected-item-content[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;flex:1}.selected-item-badge[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;padding:4px 8px;border-radius:6px;font-size:12px;font-weight:500;flex-shrink:0}.selected-item-badge[data-type=character][_ngcontent-%COMP%]{background:#3498db1a;color:#3498db}.selected-item-badge[data-type=vehicle][_ngcontent-%COMP%]{background:#9b59b61a;color:#9b59b6}.selected-item-badge[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:14px;height:14px}.selected-item-info[_ngcontent-%COMP%]{flex:1}.selected-item-info[_ngcontent-%COMP%]   .selected-item-name[_ngcontent-%COMP%]{font-size:16px;font-weight:600;margin:0 0 4px;color:#333}.selected-item-info[_ngcontent-%COMP%]   .selected-item-details[_ngcontent-%COMP%]{display:flex;gap:8px;flex-wrap:wrap}.selected-item-info[_ngcontent-%COMP%]   .selected-item-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px;color:#666;background:#f8f9fa;padding:2px 6px;border-radius:3px}.selected-checkmark[_ngcontent-%COMP%]{width:28px;height:28px;background:#667eea;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;flex-shrink:0}.selected-checkmark[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:16px;height:16px}mark[_ngcontent-%COMP%]{background:#ffc1074d;color:inherit;padding:0;border-radius:2px}.search-results[_ngcontent-%COMP%]{background:#fff;border:2px solid #e1e5e9;border-radius:12px;max-height:500px;overflow-y:auto;box-shadow:0 8px 32px #0000001a}.results-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:16px 20px;border-bottom:1px solid #e1e5e9;background:#f8f9fa;border-radius:10px 10px 0 0}.results-count[_ngcontent-%COMP%]{font-size:14px;color:#666;font-weight:500}.clear-search[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;padding:6px 12px;background:none;border:1px solid #ddd;border-radius:6px;font-size:13px;color:#666;cursor:pointer;transition:all .2s ease}.clear-search[_ngcontent-%COMP%]:hover{background:#f0f0f0;border-color:#ccc}.clear-search[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:14px;height:14px}.items-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:12px;padding:16px;max-height:400px;overflow-y:auto}.item-card[_ngcontent-%COMP%]{background:#fff;border:2px solid #e1e5e9;border-radius:12px;padding:16px;cursor:pointer;transition:all .3s ease;position:relative}.item-card[_ngcontent-%COMP%]:hover{border-color:#667eea;box-shadow:0 4px 16px #667eea26;transform:translateY(-2px)}.item-card.selected[_ngcontent-%COMP%]{border-color:#667eea;background:linear-gradient(135deg,#667eea0d,#764ba20d);box-shadow:0 4px 16px #667eea33}.item-image[_ngcontent-%COMP%]{width:100%;height:120px;margin-bottom:12px;border-radius:8px;overflow:hidden;background:linear-gradient(135deg,#f8f9fa,#e9ecef);display:flex;align-items:center;justify-content:center}.item-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:auto;height:100%;max-width:100%;object-fit:contain;transition:transform .3s ease;-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none}.item-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{transform:scale(1.05)}.item-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px}.item-type-badge[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;padding:4px 8px;border-radius:6px;font-size:12px;font-weight:500}.item-type-badge[data-type=character][_ngcontent-%COMP%]{background:#3498db1a;color:#3498db}.item-type-badge[data-type=vehicle][_ngcontent-%COMP%]{background:#9b59b61a;color:#9b59b6}.item-type-badge[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:14px;height:14px}.selected-indicator[_ngcontent-%COMP%]{width:24px;height:24px;background:#667eea;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff}.selected-indicator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:14px;height:14px}.item-content[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%]{font-size:16px;font-weight:600;margin:0 0 8px;color:#333;line-height:1.3}.item-content[_ngcontent-%COMP%]   .item-details[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.item-content[_ngcontent-%COMP%]   .item-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]{font-size:13px;color:#666;background:#f8f9fa;padding:2px 8px;border-radius:4px;display:inline-block;width:fit-content}.no-results[_ngcontent-%COMP%]{text-align:center;padding:60px 20px;color:#666}.no-results[_ngcontent-%COMP%]   .no-results-icon[_ngcontent-%COMP%]{margin-bottom:20px;color:#ccc}.no-results[_ngcontent-%COMP%]   .no-results-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:48px;height:48px}.no-results[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 12px;font-size:20px;color:#333}.no-results[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 24px;font-size:14px}.select-container[_ngcontent-%COMP%]{position:relative;margin-bottom:16px}.custom-select[_ngcontent-%COMP%]{width:100%;padding:16px 50px 16px 20px;border:2px solid #e1e5e9;border-radius:12px;font-size:16px;background:#fff;appearance:none;cursor:pointer;transition:all .3s ease}.custom-select[_ngcontent-%COMP%]:focus{outline:none;border-color:#667eea;box-shadow:0 0 0 3px #667eea1a}.custom-select.error[_ngcontent-%COMP%]{border-color:#e74c3c;background-color:#fef8f8}.select-arrow[_ngcontent-%COMP%]{position:absolute;right:16px;top:50%;transform:translateY(-50%);pointer-events:none;color:#999}.select-arrow[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:20px;height:20px}.search-hint[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:12px 16px;background:#667eea0d;border:1px solid rgba(102,126,234,.1);border-radius:8px;font-size:14px;color:#667eea}.search-hint[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:16px;height:16px;color:#667eea}.radio-container[_ngcontent-%COMP%]{margin-top:16px}.radio-container[_ngcontent-%COMP%]   .radio-group[_ngcontent-%COMP%]{display:grid;gap:12px}.radio-container[_ngcontent-%COMP%]   .radio-option[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:16px;border:2px solid #e1e5e9;border-radius:10px;cursor:pointer;transition:all .3s ease}.radio-container[_ngcontent-%COMP%]   .radio-option[_ngcontent-%COMP%]:hover{border-color:#667eea;background:#667eea05}.radio-container[_ngcontent-%COMP%]   .radio-option[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]{display:none}.radio-container[_ngcontent-%COMP%]   .radio-option[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked + .radio-custom[_ngcontent-%COMP%]{background:#667eea;border-color:#667eea}.radio-container[_ngcontent-%COMP%]   .radio-option[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked + .radio-custom[_ngcontent-%COMP%]:after{opacity:1;transform:scale(1)}.radio-container[_ngcontent-%COMP%]   .radio-option[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked ~ .radio-content[_ngcontent-%COMP%]   .radio-title[_ngcontent-%COMP%]{color:#667eea}.radio-container[_ngcontent-%COMP%]   .radio-custom[_ngcontent-%COMP%]{width:18px;height:18px;border:2px solid #ddd;border-radius:50%;position:relative;transition:all .3s ease;flex-shrink:0;margin-top:0}.radio-container[_ngcontent-%COMP%]   .radio-custom[_ngcontent-%COMP%]:after{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) scale(0);width:7px;height:7px;background:#fff;border-radius:50%;opacity:0;transition:all .3s ease}.radio-container[_ngcontent-%COMP%]   .radio-content[_ngcontent-%COMP%]{flex:1}.radio-container[_ngcontent-%COMP%]   .radio-content[_ngcontent-%COMP%]   .radio-title[_ngcontent-%COMP%]{display:block;font-size:15px;font-weight:600;color:#333;margin-bottom:2px;transition:color .3s ease}.radio-container[_ngcontent-%COMP%]   .radio-content[_ngcontent-%COMP%]   .radio-description[_ngcontent-%COMP%]{display:block;font-size:13px;color:#666;line-height:1.3}.divider[_ngcontent-%COMP%]{height:1px;background:linear-gradient(90deg,transparent,#e1e5e9,transparent);margin:32px 0}.error-messages[_ngcontent-%COMP%]{margin-top:8px}.error-messages[_ngcontent-%COMP%]   .error-text[_ngcontent-%COMP%]{display:block;font-size:14px;color:#e74c3c;font-weight:500}.actions-container[_ngcontent-%COMP%]{display:flex;gap:16px;margin-top:40px;padding-top:32px;border-top:1px solid #e1e5e9}.btn[_ngcontent-%COMP%]{padding:16px 32px;border-radius:12px;font-size:16px;font-weight:600;border:none;cursor:pointer;transition:all .3s ease;display:flex;align-items:center;justify-content:center;min-height:32px}.btn[_ngcontent-%COMP%]:disabled{cursor:not-allowed;opacity:.6}.btn.btn-primary[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;flex:1}.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 8px 25px #667eea4d}.btn.btn-secondary[_ngcontent-%COMP%]{background:#fff;color:#667eea;border:2px solid #667eea}.btn.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled){background:#667eea;color:#fff}.btn-content[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}.loading-spinner[_ngcontent-%COMP%]{width:20px;height:20px;border:2px solid rgba(255,255,255,.3);border-radius:50%;border-top-color:#fff;animation:_ngcontent-%COMP%_spin 1s ease-in-out infinite}@keyframes _ngcontent-%COMP%_spin{to{transform:rotate(360deg)}}@media (max-width: 768px){[_nghost-%COMP%]{padding:12px;min-height:100vh}.form-card[_ngcontent-%COMP%]{border-radius:12px}.card-header[_ngcontent-%COMP%]{padding:20px 16px}.form-content[_ngcontent-%COMP%]{padding:16px}.title[_ngcontent-%COMP%]{font-size:20px}.subtitle[_ngcontent-%COMP%]{font-size:14px}.input-group[_ngcontent-%COMP%]{margin-bottom:20px}.divider[_ngcontent-%COMP%]{margin:16px 0}.radio-container[_ngcontent-%COMP%]{margin-top:12px}.radio-container[_ngcontent-%COMP%]   .radio-group[_ngcontent-%COMP%]{gap:8px}.radio-container[_ngcontent-%COMP%]   .radio-option[_ngcontent-%COMP%]{padding:10px 12px;gap:10px;border-radius:6px;border-width:1px}.radio-content[_ngcontent-%COMP%]   .radio-title[_ngcontent-%COMP%]{font-size:14px;margin-bottom:1px}.radio-content[_ngcontent-%COMP%]   .radio-description[_ngcontent-%COMP%]{display:none!important}.header-content[_ngcontent-%COMP%]{gap:8px}.header-icon[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:12px}.header-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:24px;height:24px}.items-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:8px;padding:8px;max-height:300px}.item-card[_ngcontent-%COMP%]{padding:10px;border-radius:8px}.item-card[_ngcontent-%COMP%]:hover{transform:translateY(-1px)}.item-image[_ngcontent-%COMP%]{height:80px;margin-bottom:8px;border-radius:6px}.item-header[_ngcontent-%COMP%]{margin-bottom:6px}.item-type-badge[_ngcontent-%COMP%]{padding:2px 6px;font-size:11px;border-radius:4px}.item-type-badge[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:12px;height:12px}.selected-indicator[_ngcontent-%COMP%]{width:20px;height:20px}.selected-indicator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:12px;height:12px}.item-content[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%]{font-size:14px;margin-bottom:4px;line-height:1.2}.item-details[_ngcontent-%COMP%]{gap:2px}.item-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]{font-size:11px;padding:1px 4px;border-radius:3px}.actions-container[_ngcontent-%COMP%]{flex-direction:column;gap:8px;margin-top:20px;padding-top:16px}.actions-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:100%;padding:12px 16px}.selected-item-display[_ngcontent-%COMP%]{margin-top:12px;padding:12px}.selected-header[_ngcontent-%COMP%]{margin-bottom:8px}.selected-item-card[_ngcontent-%COMP%]{padding:10px}.selected-item-image[_ngcontent-%COMP%]{width:50px;height:50px;margin-right:8px}.selected-item-badge[_ngcontent-%COMP%]{padding:2px 6px;font-size:11px}.selected-item-badge[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:12px;height:12px}.selected-item-name[_ngcontent-%COMP%]{font-size:14px}.selected-item-details[_ngcontent-%COMP%]{font-size:12px}.selected-checkmark[_ngcontent-%COMP%]{width:18px;height:18px}.selected-checkmark[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:12px;height:12px}.browse-all-section[_ngcontent-%COMP%]{margin-bottom:12px}.no-results[_ngcontent-%COMP%]{padding:40px 16px}.no-results[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px}.no-results[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px}.results-header[_ngcontent-%COMP%]{flex-direction:column;gap:8px;align-items:flex-start}.nfc-type-toggle[_ngcontent-%COMP%]{margin-top:4px;margin-bottom:8px;gap:8px}.nfc-type-toggle[_ngcontent-%COMP%]   .toggle-label[_ngcontent-%COMP%]{font-size:13px;min-width:70px}.nfc-type-toggle[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%]{padding:4px 8px;font-size:11px}}@media (max-width: 480px){[_nghost-%COMP%]{padding:8px}.card-header[_ngcontent-%COMP%]{padding:16px 12px}.form-content[_ngcontent-%COMP%]{padding:12px}.title[_ngcontent-%COMP%]{font-size:18px}.subtitle[_ngcontent-%COMP%]{font-size:13px}.search-input[_ngcontent-%COMP%], .custom-input[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{padding:10px 12px;font-size:14px;border-radius:8px}.search-input[_ngcontent-%COMP%]{padding-left:36px;padding-right:36px}.search-icon[_ngcontent-%COMP%]{left:12px}.search-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:16px;height:16px}.search-clear[_ngcontent-%COMP%]{right:12px}.input-label[_ngcontent-%COMP%]{font-size:14px;margin-bottom:6px}.input-hint[_ngcontent-%COMP%]{font-size:12px;margin-top:4px}.input-group[_ngcontent-%COMP%]{margin-bottom:16px}.divider[_ngcontent-%COMP%]{margin:12px 0}.radio-container[_ngcontent-%COMP%]{margin-top:8px}.radio-container[_ngcontent-%COMP%]   .radio-group[_ngcontent-%COMP%]{gap:6px}.radio-container[_ngcontent-%COMP%]   .radio-option[_ngcontent-%COMP%]{padding:6px 0;gap:8px;border:none;border-radius:0;background:transparent}.radio-container[_ngcontent-%COMP%]   .radio-option[_ngcontent-%COMP%]:hover{border:none;background:transparent}.radio-custom[_ngcontent-%COMP%]{width:12px!important;height:12px!important;margin-top:1px}.radio-custom[_ngcontent-%COMP%]:after{width:4px;height:4px}.radio-content[_ngcontent-%COMP%]   .radio-title[_ngcontent-%COMP%]{font-size:12px!important;margin-bottom:0}.radio-content[_ngcontent-%COMP%]   .radio-description[_ngcontent-%COMP%], .radio-container[_ngcontent-%COMP%]   .radio-option[_ngcontent-%COMP%]   .radio-content[_ngcontent-%COMP%]   .radio-description[_ngcontent-%COMP%]{display:none!important}.header-content[_ngcontent-%COMP%]{gap:6px}.header-icon[_ngcontent-%COMP%]{width:36px;height:36px;border-radius:10px}.header-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:20px;height:20px}.nfc-type-toggle[_ngcontent-%COMP%]{margin-top:3px;margin-bottom:6px;gap:6px}.nfc-type-toggle[_ngcontent-%COMP%]   .toggle-label[_ngcontent-%COMP%]{font-size:12px;min-width:60px}.nfc-type-toggle[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%]{border-radius:16px;padding:1px}.nfc-type-toggle[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%]{padding:3px 6px;font-size:10px;border-radius:14px}.filter-btn[_ngcontent-%COMP%]{padding:6px 12px;font-size:12px;border-radius:6px}.actions-container[_ngcontent-%COMP%]{gap:4px;margin-top:8px!important;padding-top:4px!important}.actions-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:8px 10px;font-size:13px;border-radius:6px;font-weight:500}.items-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:6px;padding:6px;max-height:250px}.item-card[_ngcontent-%COMP%]{padding:8px;border-radius:6px;display:flex;gap:8px;align-items:flex-start}.item-image[_ngcontent-%COMP%]{width:50px;height:50px;margin-bottom:0;border-radius:4px;flex-shrink:0}.item-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{transform:scale(1.02)}.item-content-wrapper[_ngcontent-%COMP%]{flex:1;min-width:0}.item-header[_ngcontent-%COMP%]{margin-bottom:4px}.item-type-badge[_ngcontent-%COMP%]{padding:1px 4px;font-size:10px;border-radius:3px;gap:3px}.item-type-badge[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:10px;height:10px}.selected-indicator[_ngcontent-%COMP%]{width:16px;height:16px}.selected-indicator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:10px;height:10px}.item-content[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%]{font-size:13px;margin-bottom:3px;line-height:1.1}.item-details[_ngcontent-%COMP%]{gap:1px}.item-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]{font-size:10px;padding:1px 3px;border-radius:2px}.search-results[_ngcontent-%COMP%], .results-header[_ngcontent-%COMP%]{margin-bottom:8px}.results-header[_ngcontent-%COMP%]   .results-count[_ngcontent-%COMP%]{font-size:12px}.results-header[_ngcontent-%COMP%]   .clear-search[_ngcontent-%COMP%]{font-size:11px;padding:4px 6px}.quick-filters[_ngcontent-%COMP%]{gap:4px;margin-bottom:8px}.browse-all-section[_ngcontent-%COMP%]{margin-bottom:8px}.browse-all-section[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:8px 12px;font-size:13px}.browse-all-section[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:14px;height:14px}.selected-item-display[_ngcontent-%COMP%]{margin-top:8px;padding:8px;border-radius:6px}.selected-header[_ngcontent-%COMP%]{margin-bottom:6px}.selected-header[_ngcontent-%COMP%]   .selected-label[_ngcontent-%COMP%]{font-size:12px}.selected-header[_ngcontent-%COMP%]   .change-selection[_ngcontent-%COMP%]{font-size:10px;padding:2px 6px;border-radius:3px}.selected-item-card[_ngcontent-%COMP%]{padding:6px;border-radius:4px}.selected-item-image[_ngcontent-%COMP%]{width:40px;height:40px;margin-right:6px;border-radius:4px}.selected-item-badge[_ngcontent-%COMP%]{padding:1px 4px;font-size:9px;border-radius:2px;gap:2px}.selected-item-badge[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:8px;height:8px}.selected-item-name[_ngcontent-%COMP%]{font-size:12px;margin-bottom:1px}.selected-item-details[_ngcontent-%COMP%]{font-size:10px;gap:2px}.selected-checkmark[_ngcontent-%COMP%]{width:16px;height:16px}.selected-checkmark[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:10px;height:10px}.no-results[_ngcontent-%COMP%]{padding:20px 10px}.no-results[_ngcontent-%COMP%]   .no-results-icon[_ngcontent-%COMP%]{margin-bottom:8px}.no-results[_ngcontent-%COMP%]   .no-results-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:32px;height:32px}.no-results[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px;margin-bottom:6px}.no-results[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;margin-bottom:12px}.no-results[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:8px 12px;font-size:12px}}.codes-section[_ngcontent-%COMP%]{margin-top:32px;padding:32px;background:linear-gradient(135deg,#4caf500d,#8bc34a0d);border:2px solid rgba(76,175,80,.2);border-radius:16px}.codes-header[_ngcontent-%COMP%]{text-align:center;margin-bottom:32px}.codes-header[_ngcontent-%COMP%]   .codes-title[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:12px;margin-bottom:8px}.codes-header[_ngcontent-%COMP%]   .codes-title[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:#4caf50}.codes-header[_ngcontent-%COMP%]   .codes-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:24px;font-weight:700;color:#2e7d32}.codes-header[_ngcontent-%COMP%]   .codes-subtitle[_ngcontent-%COMP%]{margin:0;font-size:16px;color:#666}.item-info-card[_ngcontent-%COMP%]{background:#fff;border-radius:12px;padding:20px;margin-bottom:24px;border:1px solid rgba(76,175,80,.2);display:flex;align-items:center;gap:20px}.item-info-image[_ngcontent-%COMP%]{width:80px;height:80px;border-radius:12px;overflow:hidden;background:linear-gradient(135deg,#f8f9fa,#e9ecef);display:flex;align-items:center;justify-content:center;flex-shrink:0}.item-info-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none}.item-info-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;flex:1}.item-info-badge[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:8px 12px;border-radius:8px;font-size:14px;font-weight:600;flex-shrink:0}.item-info-badge[data-type=character][_ngcontent-%COMP%]{background:#3498db1a;color:#3498db}.item-info-badge[data-type=vehicle][_ngcontent-%COMP%]{background:#9b59b61a;color:#9b59b6}.item-info-badge[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:16px;height:16px}.item-info-details[_ngcontent-%COMP%]{flex:1}.item-info-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 8px;font-size:20px;font-weight:700;color:#333}.item-info-details[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]{display:flex;gap:12px;flex-wrap:wrap}.item-info-details[_ngcontent-%COMP%]   .item-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px;color:#666;background:#f8f9fa;padding:4px 8px;border-radius:4px}.codes-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:16px;margin-bottom:24px}.code-card[_ngcontent-%COMP%]{background:#fff;border:2px solid rgba(76,175,80,.2);border-radius:12px;padding:20px;transition:all .3s ease}.code-card[_ngcontent-%COMP%]:hover{border-color:#4caf50;box-shadow:0 4px 16px #4caf5033}.code-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px}.code-label[_ngcontent-%COMP%]{font-size:14px;font-weight:600;color:#4caf50;text-transform:uppercase;letter-spacing:.5px}.copy-btn[_ngcontent-%COMP%]{background:none;border:1px solid #ddd;border-radius:6px;padding:6px;cursor:pointer;color:#666;transition:all .2s ease}.copy-btn[_ngcontent-%COMP%]:hover{background:#4caf50;border-color:#4caf50;color:#fff}.copy-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:16px;height:16px}.code-value[_ngcontent-%COMP%]{font-family:Courier New,Consolas,monospace;font-size:16px;font-weight:700;color:#333;background:#f8f9fa;padding:12px;border-radius:6px;border:1px solid #e1e5e9;-webkit-user-select:all;user-select:all;word-break:break-all}.copy-all-section[_ngcontent-%COMP%]{text-align:center;margin-bottom:24px}.copy-all-btn[_ngcontent-%COMP%]{min-height:auto;padding:16px 24px;display:inline-flex;align-items:center;gap:12px}.copy-all-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:20px;height:20px}.instructions-card[_ngcontent-%COMP%]{background:#fffc;border:1px solid rgba(76,175,80,.2);border-radius:12px;padding:24px}.instructions-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0 0 16px;font-size:18px;font-weight:600;color:#2e7d32}.instructions-card[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{margin:0;padding-left:20px}.instructions-card[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px;font-size:14px;line-height:1.5;color:#555}.instructions-card[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#2e7d32;font-weight:600}@media (max-width: 768px){.codes-section[_ngcontent-%COMP%]{padding:24px 20px;margin-top:24px}.codes-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:12px}.code-card[_ngcontent-%COMP%]{padding:16px}.codes-header[_ngcontent-%COMP%]   .codes-title[_ngcontent-%COMP%]{flex-direction:column;gap:8px}.codes-header[_ngcontent-%COMP%]   .codes-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px}.item-info-header[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;gap:12px}.item-meta[_ngcontent-%COMP%]{flex-direction:column;gap:8px}}@media (max-width: 480px){.codes-section[_ngcontent-%COMP%]{padding:20px 16px}.codes-header[_ngcontent-%COMP%]   .codes-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:18px}.codes-subtitle[_ngcontent-%COMP%]{font-size:14px}.code-value[_ngcontent-%COMP%]{font-size:14px;padding:10px}.instructions-card[_ngcontent-%COMP%]{padding:20px}.instructions-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px}.instructions-card[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:13px}}']
    })
};

function Si(n, t) {
    if (n & 1) {
        let e = V();
        f(0, "div", 1), te("click", function(o) {
            m(e);
            let a = d();
            return g(a.onOverlayClick(o))
        }), f(1, "div", 2)(2, "button", 3), te("click", function() {
            m(e);
            let o = d();
            return g(o.close())
        }), _(), f(3, "svg", 4), L(4, "line", 5)(5, "line", 6), P()(), k(), f(6, "div", 7)(7, "div", 8)(8, "div", 9), _(), f(9, "svg", 10), L(10, "path", 11), P()(), k(), f(11, "h2"), l(12, "Support the Project"), P(), f(13, "p", 12), l(14, "Help keep this LEGO NFC Generator free and improved"), P()(), f(15, "div", 13)(16, "div", 14)(17, "div", 15), _(), f(18, "svg", 16), L(19, "polyline", 17), P(), k(), f(20, "span"), l(21, "Free NFC code generation"), P()(), f(22, "div", 15), _(), f(23, "svg", 16), L(24, "polyline", 17), P(), k(), f(25, "span"), l(26, "All LEGO Dimensions characters & vehicles"), P()(), f(27, "div", 15), _(), f(28, "svg", 16), L(29, "polyline", 17), P(), k(), f(30, "span"), l(31, "Regular updates and improvements"), P()(), f(32, "div", 15), _(), f(33, "svg", 16), L(34, "polyline", 17), P(), k(), f(35, "span"), l(36, "No ads, no tracking"), P()()(), f(37, "div", 18)(38, "p"), l(39, "Your support helps cover hosting costs and development time. Every contribution, no matter how small, makes a difference!"), P()()(), f(40, "div", 19)(41, "button", 20), te("click", function() {
            m(e);
            let o = d();
            return g(o.donate())
        }), _(), f(42, "svg", 16), L(43, "path", 11), P(), k(), f(44, "span"), l(45, "Donate via PayPal"), P()(), f(46, "button", 21), te("click", function() {
            m(e);
            let o = d();
            return g(o.close())
        }), f(47, "span"), l(48, "Maybe Later"), P()()(), f(49, "div", 22)(50, "p"), l(51, "Secure donation through PayPal"), P(), f(52, "div", 23), _(), f(53, "svg", 24), L(54, "path", 25)(55, "path", 26), f(56, "text", 27), l(57, "PayPal"), P()()()()()()()
    }
    if (n & 2) {
        let e = d();
        F("closing", e.isAnimating)
    }
}
var Ge = class n {
    isVisible = !0;
    isAnimating = !1;
    constructor() {
        this.checkShouldShow()
    }
    checkShouldShow() {
        let t = localStorage.getItem("donation-modal-closed");
        if (t) {
            let e = parseInt(t),
                i = Date.now(),
                o = 4 * 60 * 60 * 1e3;
            i - e < o && (this.isVisible = !1)
        }
    }
    close() {
        this.isAnimating = !0, localStorage.setItem("donation-modal-closed", Date.now().toString()), setTimeout(() => {
            this.isVisible = !1
        }, 300)
    }
    show() {
        this.isVisible = !0, this.isAnimating = !1
    }
    onOverlayClick(t) {
        t.target === t.currentTarget && this.close()
    }
    donate() {
        window.open("https://paypal.me/SpitBE", "_blank", "noopener,noreferrer")
    }
    static \u0275fac = function(e) {
        return new(e || n)
    };
    static \u0275cmp = q({
        type: n,
        selectors: [
            ["paypal-donation"]
        ],
        decls: 1,
        vars: 1,
        consts: [
            [1, "donation-overlay", 3, "closing"],
            [1, "donation-overlay", 3, "click"],
            [1, "donation-modal"],
            ["aria-label", "Close donation modal", 1, "close-btn", 3, "click"],
            ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"],
            ["x1", "18", "y1", "6", "x2", "6", "y2", "18", "stroke", "currentColor", "stroke-width", "2"],
            ["x1", "6", "y1", "6", "x2", "18", "y2", "18", "stroke", "currentColor", "stroke-width", "2"],
            [1, "donation-content"],
            [1, "donation-header"],
            [1, "heart-icon"],
            ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"],
            ["d", "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z", "fill", "currentColor"],
            [1, "subtitle"],
            [1, "donation-body"],
            [1, "features-list"],
            [1, "feature-item"],
            ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"],
            ["points", "20,6 9,17 4,12", "stroke", "currentColor", "stroke-width", "2"],
            [1, "donation-message"],
            [1, "donation-actions"],
            [1, "donate-btn", "primary", 3, "click"],
            [1, "donate-btn", "secondary", 3, "click"],
            [1, "paypal-info"],
            [1, "paypal-logo"],
            ["width", "80", "height", "20", "viewBox", "0 0 100 25", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"],
            ["d", "M12 2C12 1.44772 12.4477 1 13 1H21C25.4183 1 29 4.58172 29 9C29 13.4183 25.4183 17 21 17H16L14 23H10L12 2Z", "fill", "#0070ba"],
            ["d", "M18 8C18 7.44772 18.4477 7 19 7H25C27.2091 7 29 8.79086 29 11C29 13.2091 27.2091 15 25 15H22L21 19H18L18 8Z", "fill", "#003087"],
            ["x", "35", "y", "15", "fill", "#0070ba", "font-family", "Arial, sans-serif", "font-size", "12", "font-weight", "bold"]
        ],
        template: function(e, i) {
            e & 1 && p(0, Si, 58, 2, "div", 0), e & 2 && h(i.isVisible ? 0 : -1)
        },
        dependencies: [xe],
        styles: [".donation-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;background:#000000b3;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;z-index:9999;animation:_ngcontent-%COMP%_fadeIn .3s ease-out;padding:1rem}.donation-overlay.closing[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeOut .3s ease-out forwards}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;-webkit-backdrop-filter:blur(0px);backdrop-filter:blur(0px)}to{opacity:1;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}}@keyframes _ngcontent-%COMP%_fadeOut{0%{opacity:1;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}to{opacity:0;-webkit-backdrop-filter:blur(0px);backdrop-filter:blur(0px)}}@keyframes _ngcontent-%COMP%_slideIn{0%{transform:scale(.9) translateY(20px);opacity:0}to{transform:scale(1) translateY(0);opacity:1}}@keyframes _ngcontent-%COMP%_slideOut{0%{transform:scale(1) translateY(0);opacity:1}to{transform:scale(.9) translateY(20px);opacity:0}}.donation-modal[_ngcontent-%COMP%]{background:linear-gradient(145deg,#fff,#f8fafc);border-radius:20px;box-shadow:0 25px 50px #00000040,0 0 0 1px #fffc;max-width:480px;width:100%;max-height:90vh;overflow-y:auto;position:relative;animation:_ngcontent-%COMP%_slideIn .3s cubic-bezier(.34,1.56,.64,1)}.closing[_ngcontent-%COMP%]   .donation-modal[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slideOut .3s ease-out forwards}.close-btn[_ngcontent-%COMP%]{position:absolute;top:1rem;right:1rem;background:#0000000d;border:none;border-radius:50%;width:40px;height:40px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s ease;color:#64748b;z-index:1}.close-btn[_ngcontent-%COMP%]:hover{background:#ef44441a;color:#ef4444;transform:scale(1.1)}.close-btn[_ngcontent-%COMP%]:active{transform:scale(.95)}.donation-content[_ngcontent-%COMP%]{padding:2rem}.donation-header[_ngcontent-%COMP%]{text-align:center;margin-bottom:2rem}.donation-header[_ngcontent-%COMP%]   .heart-icon[_ngcontent-%COMP%]{color:#ef4444;margin-bottom:1rem;animation:_ngcontent-%COMP%_heartbeat 2s ease-in-out infinite}.donation-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.75rem;font-weight:700;color:#1e293b;margin:0 0 .5rem;background:linear-gradient(135deg,#667eea,#764ba2);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.donation-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{color:#64748b;font-size:1rem;margin:0;line-height:1.5}@keyframes _ngcontent-%COMP%_heartbeat{0%,50%,to{transform:scale(1)}25%,75%{transform:scale(1.1)}}.donation-body[_ngcontent-%COMP%]{margin-bottom:2rem}.features-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.75rem;margin-bottom:1.5rem}.feature-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;padding:.5rem 0}.feature-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:#10b981;flex-shrink:0}.feature-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#374151;font-size:.95rem;line-height:1.4}.donation-message[_ngcontent-%COMP%]{background:linear-gradient(135deg,#f0f9ff,#e0f2fe);border:1px solid #bae6fd;border-radius:12px;padding:1.25rem}.donation-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#0c4a6e;font-size:.95rem;line-height:1.6;text-align:center}.donation-actions[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.75rem;margin-bottom:1.5rem}.donate-btn[_ngcontent-%COMP%]{border:none;border-radius:12px;padding:1rem 1.5rem;font-size:1rem;font-weight:600;cursor:pointer;transition:all .2s ease;display:flex;align-items:center;justify-content:center;gap:.5rem;min-height:48px}.donate-btn.primary[_ngcontent-%COMP%]{background:linear-gradient(135deg,#0070ba,#003087);color:#fff;box-shadow:0 4px 12px #0070ba4d}.donate-btn.primary[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 8px 20px #0070ba66;background:linear-gradient(135deg,#0079c1,#003d96)}.donate-btn.primary[_ngcontent-%COMP%]:active{transform:translateY(0);box-shadow:0 4px 12px #0070ba4d}.donate-btn.primary[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:#ffc439}.donate-btn.secondary[_ngcontent-%COMP%]{background:#64748b1a;color:#64748b;border:1px solid rgba(100,116,139,.2)}.donate-btn.secondary[_ngcontent-%COMP%]:hover{background:#64748b26;color:#475569;border-color:#64748b4d}.donate-btn.secondary[_ngcontent-%COMP%]:active{background:#64748b33}.paypal-info[_ngcontent-%COMP%]{text-align:center;padding-top:1rem;border-top:1px solid #e2e8f0}.paypal-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#64748b;font-size:.85rem;margin:0 0 .5rem}.paypal-info[_ngcontent-%COMP%]   .paypal-logo[_ngcontent-%COMP%]{opacity:.7}@media (max-width: 640px){.donation-overlay[_ngcontent-%COMP%]{padding:.5rem}.donation-modal[_ngcontent-%COMP%]{border-radius:16px;max-height:95vh}.donation-content[_ngcontent-%COMP%]{padding:1.5rem}.donation-header[_ngcontent-%COMP%]{margin-bottom:1.5rem}.donation-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.5rem}.donation-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:.9rem}.donation-actions[_ngcontent-%COMP%]{gap:.5rem}.donate-btn[_ngcontent-%COMP%]{padding:.875rem 1.25rem;font-size:.95rem}}@media (max-width: 480px){.donation-content[_ngcontent-%COMP%]{padding:1.25rem}.close-btn[_ngcontent-%COMP%]{width:36px;height:36px;top:.75rem;right:.75rem}.feature-item[_ngcontent-%COMP%]{gap:.5rem}.feature-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.9rem}.donation-message[_ngcontent-%COMP%]{padding:1rem}.donation-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9rem}}"]
    })
};
var cn = class n {
    static \u0275fac = function(e) {
        return new(e || n)
    };
    static \u0275cmp = q({
        type: n,
        selectors: [
            ["lego-generator"]
        ],
        decls: 3,
        vars: 0,
        consts: [
            [1, "generator-page"]
        ],
        template: function(e, i) {
            e & 1 && (r(0, "div", 0), b(1, "lego-form-generator")(2, "paypal-donation"), s())
        },
        dependencies: [Te, Ge],
        styles: [".generator-page[_ngcontent-%COMP%]{min-height:100vh;background:linear-gradient(135deg,#667eea,#764ba2)}"]
    })
};
export {
    cn as GeneratorPage
};