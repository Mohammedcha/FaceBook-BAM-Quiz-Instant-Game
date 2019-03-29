//*=================================================*//
//*-------------------------------------------------*//
//*----------------- BAM Quiz ----------------------*//
//*--------------- Instant Game --------------------*//
//*-------------- By Mohammed Cha ------------------*//
//*-------------- Re-Skinning grp ------------------*//
//*-------------------------------------------------*//
//*=================================================*//

/*! @sentry/browser 4.4.1 (70b24ed2) | https://github.com/getsentry/sentry-javascript */
var Sentry = function(t) {
    "use strict";
    var e = function(t, n) {
        return (e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            })(t, n)
    };

    function n(t, n) {
        function r() {
            this.constructor = t
        }
        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
    }
    var r, o, i = function() {
        return (i = Object.assign || function(t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
        }).apply(this, arguments)
    };

    function s(t, e, n, r) {
        return new(n || (n = Promise))(function(o, i) {
            function s(t) {
                try {
                    u(r.next(t))
                } catch (t) {
                    i(t)
                }
            }

            function a(t) {
                try {
                    u(r.throw(t))
                } catch (t) {
                    i(t)
                }
            }

            function u(t) {
                t.done ? o(t.value) : new n(function(e) {
                    e(t.value)
                }).then(s, a)
            }
            u((r = r.apply(t, e || [])).next())
        })
    }

    function a(t, e) {
        var n, r, o, i, s = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function a(i) {
            return function(a) {
                return function(i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return s.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    s.label = i[1];
                                    break
                                }
                                if (6 === i[0] && s.label < o[1]) {
                                    s.label = o[1], o = i;
                                    break
                                }
                                if (o && s.label < o[2]) {
                                    s.label = o[2], s.ops.push(i);
                                    break
                                }
                                o[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        i = e.call(t, s)
                    } catch (t) {
                        i = [6, t], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, a])
            }
        }
    }

    function u(t) {
        var e = "function" == typeof Symbol && t[Symbol.iterator],
            n = 0;
        return e ? e.call(t) : {
            next: function() {
                return t && n >= t.length && (t = void 0), {
                    value: t && t[n++],
                    done: !t
                }
            }
        }
    }

    function c(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t),
            s = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(r = i.next()).done;) s.push(r.value)
        } catch (t) {
            o = {
                error: t
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o) throw o.error
            }
        }
        return s
    }

    function l() {
        for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(c(arguments[e]));
        return t
    }

    function p(t) {
        switch (Object.prototype.toString.call(t)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return t instanceof Error
        }
    }

    function f(t) {
        return "[object ErrorEvent]" === Object.prototype.toString.call(t)
    }

    function h(t) {
        return "[object DOMError]" === Object.prototype.toString.call(t)
    }

    function d(t) {
        return void 0 === t
    }

    function v(t) {
        return "function" == typeof t
    }

    function g(t) {
        return "[object String]" === Object.prototype.toString.call(t)
    }

    function y(t) {
        return "[object Object]" === Object.prototype.toString.call(t)
    }

    function m(t) {
        return t != t
    }

    function b() {
        return "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0) ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}
    }

    function E() {
        var t = b(),
            e = t.crypto || t.msCrypto;
        if (void 0 !== e && e.getRandomValues) {
            var n = new Uint16Array(8);
            e.getRandomValues(n), n[3] = 4095 & n[3] | 16384, n[4] = 16383 & n[4] | 32768;
            var r = function(t) {
                for (var e = t.toString(16); e.length < 4;) e = "0" + e;
                return e
            };
            return r(n[0]) + r(n[1]) + r(n[2]) + r(n[3]) + r(n[4]) + r(n[5]) + r(n[6]) + r(n[7])
        }
        return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(t) {
            var e = 16 * Math.random() | 0;
            return ("x" === t ? e : 3 & e | 8).toString(16)
        })
    }

    function _(t) {
        var e, n, r, o, i, s = [];
        if (!t || !t.tagName) return "";
        if (s.push(t.tagName.toLowerCase()), t.id && s.push("#" + t.id), (e = t.className) && g(e))
            for (n = e.split(/\s+/), i = 0; i < n.length; i++) s.push("." + n[i]);
        var a = ["type", "name", "title", "alt"];
        for (i = 0; i < a.length; i++) r = a[i], (o = t.getAttribute(r)) && s.push("[" + r + '="' + o + '"]');
        return s.join("")
    }

    function x(t) {
        if (!t) return {};
        var e = t.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
        if (!e) return {};
        var n = e[6] || "",
            r = e[8] || "";
        return {
            host: e[4],
            path: e[5],
            protocol: e[2],
            relative: e[5] + n + r
        }
    }

    function S(t) {
        if (t.message) return t.message;
        if (t.exception && t.exception.values && t.exception.values[0]) {
            var e = t.exception.values[0];
            return e.type && e.value ? e.type + ": " + e.value : e.type || e.value || t.event_id || "<unknown>"
        }
        return t.event_id || "<unknown>"
    }

    function w(t) {
        var e = b();
        if (!("console" in e)) return t();
        var n = e.console,
            r = {};
        ["debug", "info", "warn", "error", "log"].forEach(function(t) {
            t in e.console && n[t].__sentry__ && (r[t] = n[t].__sentry_wrapped__, n[t] = n[t].__sentry_original__)
        });
        var o = t();
        return Object.keys(r).forEach(function(t) {
            n[t] = r[t]
        }), o
    }(r = t.Severity || (t.Severity = {})).Fatal = "fatal", r.Error = "error", r.Warning = "warning", r.Log = "log", r.Info = "info", r.Debug = "debug", r.Critical = "critical",
        function(t) {
            t.fromString = function(e) {
                switch (e) {
                    case "debug":
                        return t.Debug;
                    case "info":
                        return t.Info;
                    case "warn":
                    case "warning":
                        return t.Warning;
                    case "error":
                        return t.Error;
                    case "fatal":
                        return t.Fatal;
                    case "critical":
                        return t.Critical;
                    case "log":
                    default:
                        return t.Log
                }
            }
        }(t.Severity || (t.Severity = {})), (o = t.Status || (t.Status = {})).Unknown = "unknown", o.Skipped = "skipped", o.Success = "success", o.RateLimit = "rate_limit", o.Invalid = "invalid", o.Failed = "failed",
        function(t) {
            t.fromHttpCode = function(e) {
                return e >= 200 && e < 300 ? t.Success : 429 === e ? t.RateLimit : e >= 400 && e < 500 ? t.Invalid : e >= 500 ? t.Failed : t.Unknown
            }
        }(t.Status || (t.Status = {}));
    var k = "[NaN]",
        O = "[undefined]";

    function T() {
        var t = [],
            e = [];
        return function(n, r) {
            var o = r;
            if (m(r) ? o = k : d(r) && (o = O), t.length > 0) {
                var i = t.indexOf(this); - 1 !== i ? (t.splice(i + 1), e.splice(i, 1 / 0, n)) : (t.push(this), e.push(n)), -1 !== t.indexOf(o) && (o = function(n, r) {
                    return t[0] === r ? "[Circular ~]" : "[Circular ~." + e.slice(0, t.indexOf(r)).join(".") + "]"
                }.call(this, n, o))
            } else t.push(o);
            return o instanceof Error ? function(t) {
                var e = {
                    message: t.message,
                    name: t.name,
                    stack: t.stack
                };
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e
            }(o) : o
        }
    }

    function I(t, e) {
        return e === k ? NaN : e !== O ? e : void 0
    }

    function j(t) {
        return JSON.stringify(t, T())
    }

    function R(t, e, n) {
        if (e in t && !t[e].__sentry__) {
            var r = t[e],
                o = n(r);
            o.__sentry__ = !0, o.__sentry_original__ = r, o.__sentry_wrapped__ = o, t[e] = o
        }
    }
    var F = 3,
        C = 102400,
        B = 40;

    function N(t) {
        return function(t) {
            return ~-encodeURI(t).split(/%..|./).length
        }(JSON.stringify(t))
    }

    function U(t) {
        if ("string" == typeof t) return t.length <= 40 ? t : t.substr(0, 39) + "…";
        if ("number" == typeof t || "boolean" == typeof t || void 0 === t) return t;
        if (m(t)) return "[NaN]";
        if (d(t)) return "[undefined]";
        var e = Object.prototype.toString.call(t);
        if ("[object Object]" === e) return "[Object]";
        if ("[object Array]" === e) return "[Array]";
        if ("[object Function]" === e) {
            var n = t.name;
            return n ? "[Function: " + n + "]" : "[Function]"
        }
        return t
    }

    function L(t, e) {
        if (0 === e) return U(t);
        if (y(t)) {
            var n = {},
                r = t;
            return Object.keys(r).forEach(function(t) {
                n[t] = L(r[t], e - 1)
            }), n
        }
        return Array.isArray(t) ? t.map(function(t) {
            return L(t, e - 1)
        }) : U(t)
    }

    function D(t) {
        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        if (null === t || void 0 === t) throw new TypeError("Cannot convert undefined or null to object");
        for (var r = Object(t), o = 0; o < e.length; o++) {
            var i = e[o];
            if (null !== i)
                for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (r[s] = i[s])
        }
        return r
    }
    var M = function() {
        function t() {
            this.notifyingListeners = !1, this.scopeListeners = [], this.eventProcessors = [], this.breadcrumbs = [], this.user = {}, this.tags = {}, this.extra = {}
        }
        return t.prototype.addScopeListener = function(t) {
            this.scopeListeners.push(t)
        }, t.prototype.addEventProcessor = function(t) {
            return this.eventProcessors.push(t), this
        }, t.prototype.notifyScopeListeners = function() {
            var t = this;
            this.notifyingListeners || (this.notifyingListeners = !0, setTimeout(function() {
                t.scopeListeners.forEach(function(e) {
                    e(t)
                }), t.notifyingListeners = !1
            }, 0))
        }, t.prototype.notifyEventProcessors = function(t, e) {
            return s(this, void 0, void 0, function() {
                var n, r, o, s, c, p, f;
                return a(this, function(a) {
                    switch (a.label) {
                        case 0:
                            o = t, a.label = 1;
                        case 1:
                            a.trys.push([1, 8, 9, 10]), s = u(l(A(), this.eventProcessors)), c = s.next(), a.label = 2;
                        case 2:
                            if (c.done) return [3, 7];
                            p = c.value, a.label = 3;
                        case 3:
                            return a.trys.push([3, 5, , 6]), [4, p(i({}, o), e)];
                        case 4:
                            return null === (o = a.sent()) ? [2, null] : [3, 6];
                        case 5:
                            return a.sent(), [3, 6];
                        case 6:
                            return c = s.next(), [3, 2];
                        case 7:
                            return [3, 10];
                        case 8:
                            return f = a.sent(), n = {
                                error: f
                            }, [3, 10];
                        case 9:
                            try {
                                c && !c.done && (r = s.return) && r.call(s)
                            } finally {
                                if (n) throw n.error
                            }
                            return [7];
                        case 10:
                            return [2, o]
                    }
                })
            })
        }, t.prototype.setUser = function(t) {
            return this.user = t, this.notifyScopeListeners(), this
        }, t.prototype.setTag = function(t, e) {
            var n;
            return this.tags = i({}, this.tags, ((n = {})[t] = e, n)), this.notifyScopeListeners(), this
        }, t.prototype.setExtra = function(t, e) {
            var n;
            return this.extra = i({}, this.extra, ((n = {})[t] = e, n)), this.notifyScopeListeners(), this
        }, t.prototype.setFingerprint = function(t) {
            return this.fingerprint = t, this.notifyScopeListeners(), this
        }, t.prototype.setLevel = function(t) {
            return this.level = t, this.notifyScopeListeners(), this
        }, t.clone = function(e) {
            var n = new t;
            return D(n, e, {
                scopeListeners: []
            }), e && (n.extra = D(e.extra), n.tags = D(e.tags), n.breadcrumbs = l(e.breadcrumbs), n.eventProcessors = l(e.eventProcessors)), n
        }, t.prototype.clear = function() {
            this.breadcrumbs = [], this.tags = {}, this.extra = {}, this.user = {}, this.level = void 0, this.fingerprint = void 0, this.notifyScopeListeners()
        }, t.prototype.addBreadcrumb = function(t, e) {
            this.breadcrumbs = void 0 !== e && e >= 0 ? l(this.breadcrumbs, [t]).slice(-e) : l(this.breadcrumbs, [t]), this.notifyScopeListeners()
        }, t.prototype.applyFingerprint = function(t) {
            t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [t.fingerprint] : [], this.fingerprint ? t.fingerprint = t.fingerprint.concat(this.fingerprint) : t.message && (t.fingerprint = t.fingerprint.concat(t.message)), t.fingerprint && !t.fingerprint.length && delete t.fingerprint
        }, t.prototype.applyToEvent = function(t, e, n) {
            return s(this, void 0, void 0, function() {
                return a(this, function(r) {
                    return this.extra && Object.keys(this.extra).length && (t.extra = i({}, this.extra, t.extra)), this.tags && Object.keys(this.tags).length && (t.tags = i({}, this.tags, t.tags)), this.user && Object.keys(this.user).length && (t.user = i({}, this.user, t.user)), this.level && (t.level = this.level), this.applyFingerprint(t), (!t.breadcrumbs || 0 === t.breadcrumbs.length) && this.breadcrumbs.length > 0 && (t.breadcrumbs = void 0 !== n && n >= 0 ? this.breadcrumbs.slice(-n) : this.breadcrumbs), [2, this.notifyEventProcessors(t, e)]
                })
            })
        }, t
    }();

    function A() {
        var t = b();
        return t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.globalEventProcessors = t.__SENTRY__.globalEventProcessors || [], t.__SENTRY__.globalEventProcessors
    }

    function P(t) {
        A().push(t)
    }
    var H = b(),
        $ = new(function() {
            function t() {
                this.enabled = !1
            }
            return t.prototype.disable = function() {
                this.enabled = !1
            }, t.prototype.enable = function() {
                this.enabled = !0
            }, t.prototype.log = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                this.enabled && w(function() {
                    H.console.log("Sentry Logger [Log]: " + t.join(" "))
                })
            }, t.prototype.warn = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                this.enabled && w(function() {
                    H.console.warn("Sentry Logger [Warn]: " + t.join(" "))
                })
            }, t.prototype.error = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                this.enabled && w(function() {
                    H.console.error("Sentry Logger [Error]: " + t.join(" "))
                })
            }, t
        }()),
        q = 3,
        W = function() {
            function t(t, e, n) {
                void 0 === e && (e = new M), void 0 === n && (n = q), this.version = n, this.stack = [], this.stack.push({
                    client: t,
                    scope: e
                })
            }
            return t.prototype.invokeClient = function(t) {
                for (var e, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                var o = this.getStackTop();
                o && o.client && o.client[t] && (e = o.client)[t].apply(e, l(n, [o.scope]))
            }, t.prototype.invokeClientAsync = function(t) {
                for (var e, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                var o = this.getStackTop();
                o && o.client && o.client[t] && (e = o.client)[t].apply(e, l(n, [o.scope])).catch(function(t) {
                    $.error(t)
                })
            }, t.prototype.isOlderThan = function(t) {
                return this.version < t
            }, t.prototype.bindClient = function(t) {
                var e = this.getStackTop();
                e.client = t, e && e.scope && t && e.scope.addScopeListener(function(e) {
                    if (t.getBackend) try {
                        t.getBackend().storeScope(e)
                    } catch (t) {}
                })
            }, t.prototype.pushScope = function() {
                var t = this.getStack(),
                    e = t.length > 0 ? t[t.length - 1].scope : void 0,
                    n = M.clone(e);
                return this.getStack().push({
                    client: this.getClient(),
                    scope: n
                }), n
            }, t.prototype.popScope = function() {
                return void 0 !== this.getStack().pop()
            }, t.prototype.withScope = function(t) {
                var e = this.pushScope();
                try {
                    t(e)
                } finally {
                    this.popScope()
                }
            }, t.prototype.getClient = function() {
                return this.getStackTop().client
            }, t.prototype.getScope = function() {
                return this.getStackTop().scope
            }, t.prototype.getStack = function() {
                return this.stack
            }, t.prototype.getStackTop = function() {
                return this.stack[this.stack.length - 1]
            }, t.prototype.captureException = function(t, e) {
                var n = this._lastEventId = E();
                return this.invokeClientAsync("captureException", t, i({}, e, {
                    event_id: n
                })), n
            }, t.prototype.captureMessage = function(t, e, n) {
                var r = this._lastEventId = E();
                return this.invokeClientAsync("captureMessage", t, e, i({}, n, {
                    event_id: r
                })), r
            }, t.prototype.captureEvent = function(t, e) {
                var n = this._lastEventId = E();
                return this.invokeClientAsync("captureEvent", t, i({}, e, {
                    event_id: n
                })), n
            }, t.prototype.lastEventId = function() {
                return this._lastEventId
            }, t.prototype.addBreadcrumb = function(t, e) {
                this.invokeClient("addBreadcrumb", t, i({}, e))
            }, t.prototype.configureScope = function(t) {
                var e = this.getStackTop();
                e.scope && e.client && t(e.scope)
            }, t.prototype.run = function(t) {
                var e = Y(this);
                try {
                    t(this)
                } finally {
                    Y(e)
                }
            }, t.prototype.getIntegration = function(t) {
                try {
                    return this.getClient().getIntegration(t)
                } catch (e) {
                    return $.warn("Cannot retrieve integration " + t.id + " from the current Hub"), null
                }
            }, t
        }();

    function V() {
        var t = b();
        return t.__SENTRY__ = t.__SENTRY__ || {
            hub: void 0
        }, t
    }

    function Y(t) {
        var e = V(),
            n = z(e);
        return K(e, t), n
    }

    function G() {
        var t, e, n = V();
        X(n) && !z(n).isOlderThan(q) || K(n, new W);
        try {
            var r = (t = module, e = "domain", t.require(e)).active;
            if (!r) return z(n);
            if (!X(r) || z(r).isOlderThan(q)) {
                var o = z(n).getStackTop();
                K(r, new W(o.client, M.clone(o.scope)))
            }
            return z(r)
        } catch (t) {
            return z(n)
        }
    }

    function X(t) {
        return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
    }

    function z(t) {
        return t && t.__SENTRY__ && t.__SENTRY__.hub ? t.__SENTRY__.hub : (t.__SENTRY__ = {}, t.__SENTRY__.hub = new W, t.__SENTRY__.hub)
    }

    function K(t, e) {
        return !!t && (t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.hub = e, !0)
    }

    function J(t) {
        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        var r = G();
        if (r && r[t]) return r[t].apply(r, l(e));
        throw new Error("No hub defined or " + t + " was not found on the hub, please open a bug report.")
    }

    function captureException(t) {
        var e;
        try {
            throw new Error("Sentry syntheticException")
        } catch (t) {
            e = t
        }
        return J("captureException", t, {
            originalException: t,
            syntheticException: e
        })
    }

    function captureMessage(t, e) {
        var n;
        try {
            throw new Error(t)
        } catch (t) {
            n = t
        }
        return J("captureMessage", t, e, {
            originalException: t,
            syntheticException: n
        })
    }

    function Z(t) {
        J("withScope", t)
    }
    var Q = function(t) {
            function e(e) {
                var n = this.constructor,
                    r = t.call(this, e) || this;
                return r.message = e, r.name = n.prototype.constructor.name, Object.setPrototypeOf(r, n.prototype), r
            }
            return n(e, t), e
        }(Error),
        tt = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w\.-]+)(?::(\d+))?\/(.+)/,
        et = function() {
            function t(t) {
                "string" == typeof t ? this.fromString(t) : this.fromComponents(t), this.validate()
            }
            return t.prototype.toString = function(t) {
                void 0 === t && (t = !1);
                var e = this,
                    n = e.host,
                    r = e.path,
                    o = e.pass,
                    i = e.port,
                    s = e.projectId;
                return e.protocol + "://" + e.user + (t && o ? ":" + o : "") + "@" + n + (i ? ":" + i : "") + "/" + (r ? r + "/" : r) + s
            }, t.prototype.fromString = function(t) {
                var e = tt.exec(t);
                if (!e) throw new Q("Invalid Dsn");
                var n = c(e.slice(1), 6),
                    r = n[0],
                    o = n[1],
                    i = n[2],
                    s = void 0 === i ? "" : i,
                    a = n[3],
                    u = n[4],
                    l = void 0 === u ? "" : u,
                    p = "",
                    f = n[5],
                    h = f.split("/");
                h.length > 1 && (p = h.slice(0, -1).join("/"), f = h.pop()), D(this, {
                    host: a,
                    pass: s,
                    path: p,
                    projectId: f,
                    port: l,
                    protocol: r,
                    user: o
                })
            }, t.prototype.fromComponents = function(t) {
                this.protocol = t.protocol, this.user = t.user, this.pass = t.pass || "", this.host = t.host, this.port = t.port || "", this.path = t.path || "", this.projectId = t.projectId
            }, t.prototype.validate = function() {
                var t, e;
                try {
                    for (var n = u(["protocol", "user", "host", "projectId"]), r = n.next(); !r.done; r = n.next()) {
                        var o = r.value;
                        if (!this[o]) throw new Q("Invalid Dsn: Missing " + o)
                    }
                } catch (e) {
                    t = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (e = n.return) && e.call(n)
                    } finally {
                        if (t) throw t.error
                    }
                }
                if ("http" !== this.protocol && "https" !== this.protocol) throw new Q('Invalid Dsn: Unsupported protocol "' + this.protocol + '"');
                if (this.port && m(parseInt(this.port, 10))) throw new Q('Invalid Dsn: Invalid port number "' + this.port + '"')
            }, t
        }(),
        nt = function() {
            function t(t) {
                this.dsn = t, this.dsnObject = new et(t)
            }
            return t.prototype.getDsn = function() {
                return this.dsnObject
            }, t.prototype.getStoreEndpoint = function() {
                return "" + this.getBaseUrl() + this.getStoreEndpointPath()
            }, t.prototype.getStoreEndpointWithUrlEncodedAuth = function() {
                var t, e = {
                    sentry_key: this.dsnObject.user,
                    sentry_version: "7"
                };
                return this.getStoreEndpoint() + "?" + (t = e, Object.keys(t).map(function(e) {
                    return encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
                }).join("&"))
            }, t.prototype.getBaseUrl = function() {
                var t = this.dsnObject,
                    e = t.protocol ? t.protocol + ":" : "",
                    n = t.port ? ":" + t.port : "";
                return e + "//" + t.host + n
            }, t.prototype.getStoreEndpointPath = function() {
                var t = this.dsnObject;
                return (t.path ? "/" + t.path : "") + "/api/" + t.projectId + "/store/"
            }, t.prototype.getRequestHeaders = function(t, e) {
                var n = this.dsnObject,
                    r = ["Sentry sentry_version=7"];
                return r.push("sentry_timestamp=" + (new Date).getTime()), r.push("sentry_client=" + t + "/" + e), r.push("sentry_key=" + n.user), n.pass && r.push("sentry_secret=" + n.pass), {
                    "Content-Type": "application/json",
                    "X-Sentry-Auth": r.join(", ")
                }
            }, t.prototype.getReportDialogEndpoint = function(t) {
                void 0 === t && (t = {});
                var e = this.dsnObject,
                    n = this.getBaseUrl() + (e.path ? "/" + e.path : "") + "/api/embed/error-page/",
                    r = [];
                for (var o in r.push("dsn=" + e.toString()), t)
                    if ("user" === o) {
                        if (!t.user) continue;
                        t.user.name && r.push("name=" + encodeURIComponent(t.user.name)), t.user.email && r.push("email=" + encodeURIComponent(t.user.email))
                    } else r.push(encodeURIComponent(o) + "=" + encodeURIComponent(t[o]));
                return r.length ? n + "?" + r.join("&") : n
            }, t
        }();

    function rt(t, e) {
        return void 0 === e && (e = 0), 0 !== e && g(t) ? t.length <= e ? t : t.substr(0, e) + "…" : t
    }

    function ot(t, e) {
        if (!Array.isArray(t)) return "";
        for (var n = [], r = 0; r < t.length; r++) {
            var o = t[r];
            try {
                n.push(String(o))
            } catch (t) {
                n.push("[value cannot be serialized]")
            }
        }
        return n.join(e)
    }

    function it(t, e) {
        return !(e.length > t.length) && -1 !== t.indexOf(e)
    }
    var st = [];

    function at(t) {
        var e = {};
        return function(t) {
            var e, n, r, o, i = t.defaultIntegrations && l(t.defaultIntegrations) || [],
                s = t.integrations,
                a = [];
            if (Array.isArray(s)) {
                var c = s.map(function(t) {
                        return t.name
                    }),
                    p = [];
                try {
                    for (var f = u(i), h = f.next(); !h.done; h = f.next()) {
                        var d = h.value; - 1 === c.indexOf(ut(d)) && -1 === p.indexOf(ut(d)) && (a.push(d), p.push(ut(d)))
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        h && !h.done && (n = f.return) && n.call(f)
                    } finally {
                        if (e) throw e.error
                    }
                }
                try {
                    for (var v = u(s), g = v.next(); !g.done; g = v.next()) {
                        var y = g.value; - 1 === p.indexOf(ut(y)) && (a.push(y), p.push(ut(y)))
                    }
                } catch (t) {
                    r = {
                        error: t
                    }
                } finally {
                    try {
                        g && !g.done && (o = v.return) && o.call(v)
                    } finally {
                        if (r) throw r.error
                    }
                }
            } else {
                if ("function" != typeof s) return l(i);
                a = s(i), a = Array.isArray(a) ? a : [a]
            }
            return a
        }(t).forEach(function(n) {
            e[ut(n)] = n,
                function(t, e) {
                    if (-1 === st.indexOf(ut(t))) {
                        try {
                            t.setupOnce()
                        } catch (n) {
                            $.warn("Integration " + ut(t) + ': The install method is deprecated. Use "setupOnce".'), t.install && t.install(e)
                        }
                        st.push(ut(t)), $.log("Integration installed: " + ut(t))
                    }
                }(n, t)
        }), e
    }

    function ut(t) {
        return t.constructor.id || t.name
    }
    var ct, lt = function() {
            function e(t, e) {
                this.backend = new t(e), this.options = e, e.dsn && (this.dsn = new et(e.dsn)), this.integrations = at(this.options)
            }
            return e.prototype.install = function() {
                if (!this.isEnabled()) return this.installed = !1;
                var t = this.getBackend();
                return !this.installed && t.install && t.install(), this.installed = !0
            }, e.prototype.buffer = function(t) {
                return s(this, void 0, void 0, function() {
                    return a(this, function(e) {
                        return [2, this.getBackend().getBuffer().add(t)]
                    })
                })
            }, e.prototype.captureException = function(t, e, n) {
                return s(this, void 0, void 0, function() {
                    var r = this;
                    return a(this, function(o) {
                        return [2, this.buffer(s(r, void 0, void 0, function() {
                            var r;
                            return a(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, this.getBackend().eventFromException(t, e)];
                                    case 1:
                                        return r = o.sent(), [2, this.captureEvent(r, e, n)]
                                }
                            })
                        }))]
                    })
                })
            }, e.prototype.captureMessage = function(t, e, n, r) {
                return s(this, void 0, void 0, function() {
                    var o = this;
                    return a(this, function(i) {
                        return [2, this.buffer(s(o, void 0, void 0, function() {
                            var o;
                            return a(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.getBackend().eventFromMessage(t, e, n)];
                                    case 1:
                                        return o = i.sent(), [2, this.captureEvent(o, n, r)]
                                }
                            })
                        }))]
                    })
                })
            }, e.prototype.captureEvent = function(t, e, n) {
                return s(this, void 0, void 0, function() {
                    var r = this;
                    return a(this, function(o) {
                        return [2, this.buffer(s(r, void 0, void 0, function() {
                            var r = this;
                            return a(this, function(o) {
                                return [2, this.processEvent(t, function(t) {
                                    return s(r, void 0, void 0, function() {
                                        return a(this, function(e) {
                                            return [2, this.getBackend().sendEvent(t)]
                                        })
                                    })
                                }, e, n)]
                            })
                        }))]
                    })
                })
            }, e.prototype.addBreadcrumb = function(t, e, n) {
                var r = this.getOptions(),
                    o = r.beforeBreadcrumb,
                    s = r.maxBreadcrumbs,
                    a = void 0 === s ? 30 : s;
                if (!(a <= 0)) {
                    var u = (new Date).getTime() / 1e3,
                        c = i({
                            timestamp: u
                        }, t),
                        l = o ? w(function() {
                            return o(c, e)
                        }) : c;
                    null !== l && this.getBackend().storeBreadcrumb(l) && n && n.addBreadcrumb(l, Math.min(a, 100))
                }
            }, e.prototype.getDsn = function() {
                return this.dsn
            }, e.prototype.getOptions = function() {
                return this.options
            }, e.prototype.getBackend = function() {
                return this.backend
            }, e.prototype.isEnabled = function() {
                return !1 !== this.getOptions().enabled && void 0 !== this.dsn
            }, e.prototype.prepareEvent = function(t, e, n) {
                return s(this, void 0, void 0, function() {
                    var r, o, s, u, c, l, p, f, h;
                    return a(this, function(a) {
                        return r = this.getOptions(), o = r.environment, s = r.maxBreadcrumbs, u = void 0 === s ? 30 : s, c = r.release, l = r.dist, void 0 === (p = i({}, t)).environment && void 0 !== o && (p.environment = o), void 0 === p.release && void 0 !== c && (p.release = c), void 0 === p.dist && void 0 !== l && (p.dist = l), p.message && (p.message = rt(p.message, 250)), (f = p.exception && p.exception.values && p.exception.values[0]) && f.value && (f.value = rt(f.value, 250)), (h = p.request) && h.url && (h.url = rt(h.url, 250)), void 0 === p.event_id && (p.event_id = E()), e ? [2, e.applyToEvent(p, n, Math.min(u, 100))] : [2, p]
                    })
                })
            }, e.prototype.processEvent = function(e, n, r, o) {
                return s(this, void 0, void 0, function() {
                    var i, s, u, c, l, p, f;
                    return a(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return this.isEnabled() ? (i = this.getOptions(), s = i.beforeSend, "number" == typeof(u = i.sampleRate) && Math.random() > u ? [2, {
                                    status: t.Status.Skipped
                                }] : [4, this.prepareEvent(e, o, r)]) : [2, {
                                    status: t.Status.Skipped
                                }];
                            case 1:
                                if (null === (c = a.sent())) return [2, {
                                    status: t.Status.Skipped
                                }];
                                l = c, a.label = 2;
                            case 2:
                                return a.trys.push([2, 5, , 6]), r && r.data && !0 === r.data.__sentry__ || !s ? [3, 4] : [4, s(c, r)];
                            case 3:
                                void 0 === (l = a.sent()) && $.error("`beforeSend` method has to return `null` or a valid event"), a.label = 4;
                            case 4:
                                return [3, 6];
                            case 5:
                                return p = a.sent(), this.captureException(p, {
                                    data: {
                                        __sentry__: !0
                                    },
                                    originalException: p
                                }).catch(function(t) {
                                    console.error(t)
                                }), [2, {
                                    reason: "Event processing in beforeSend method threw an exception",
                                    status: t.Status.Invalid
                                }];
                            case 6:
                                return null === l ? [2, {
                                    reason: "Event dropped due to being discarded by beforeSend method",
                                    status: t.Status.Skipped
                                }] : [4, n(l)];
                            case 7:
                                return (f = a.sent()).event = l, f.status, t.Status.RateLimit, [2, f]
                        }
                    })
                })
            }, e.prototype.close = function(t) {
                return s(this, void 0, void 0, function() {
                    return a(this, function(e) {
                        return [2, this.getBackend().getBuffer().drain(t)]
                    })
                })
            }, e.prototype.getIntegrations = function() {
                return this.integrations || {}
            }, e.prototype.getIntegration = function(t) {
                try {
                    return this.integrations[t.id] || null
                } catch (e) {
                    return $.warn("Cannot retrieve integration " + t.id + " from the current Client"), null
                }
            }, e
        }(),
        pt = function() {
            function t() {
                this.buffer = []
            }
            return t.prototype.add = function(t) {
                return s(this, void 0, void 0, function() {
                    var e = this;
                    return a(this, function(n) {
                        return -1 === this.buffer.indexOf(t) && this.buffer.push(t), t.then(function() {
                            return s(e, void 0, void 0, function() {
                                return a(this, function(e) {
                                    return [2, this.remove(t)]
                                })
                            })
                        }).catch(function() {
                            return s(e, void 0, void 0, function() {
                                return a(this, function(e) {
                                    return [2, this.remove(t)]
                                })
                            })
                        }), [2, t]
                    })
                })
            }, t.prototype.remove = function(t) {
                return s(this, void 0, void 0, function() {
                    return a(this, function(e) {
                        return [2, this.buffer.splice(this.buffer.indexOf(t), 1)[0]]
                    })
                })
            }, t.prototype.length = function() {
                return this.buffer.length
            }, t.prototype.drain = function(t) {
                return s(this, void 0, void 0, function() {
                    var e = this;
                    return a(this, function(n) {
                        return [2, new Promise(function(n) {
                            var r = setTimeout(function() {
                                t && t > 0 && n(!1)
                            }, t);
                            Promise.all(e.buffer).then(function() {
                                clearTimeout(r), n(!0)
                            }).catch(function() {
                                n(!0)
                            })
                        })]
                    })
                })
            }, t
        }(),
        ft = function() {
            function t(t) {
                this.buffer = new pt, this.options = t, this.options.dsn || $.warn("No DSN provided, backend will not do anything.")
            }
            return t.prototype.eventFromException = function(t, e) {
                return s(this, void 0, void 0, function() {
                    return a(this, function(t) {
                        throw new Q("Backend has to implement `eventFromException` method")
                    })
                })
            }, t.prototype.eventFromMessage = function(t, e, n) {
                return s(this, void 0, void 0, function() {
                    return a(this, function(t) {
                        throw new Q("Backend has to implement `eventFromMessage` method")
                    })
                })
            }, t.prototype.sendEvent = function(t) {
                return s(this, void 0, void 0, function() {
                    return a(this, function(t) {
                        throw new Q("Backend has to implement `sendEvent` method")
                    })
                })
            }, t.prototype.storeBreadcrumb = function(t) {
                return !0
            }, t.prototype.storeScope = function(t) {}, t.prototype.getBuffer = function() {
                return this.buffer
            }, t
        }();
    ! function(t) {
        t[t.None = 0] = "None", t[t.Error = 1] = "Error", t[t.Debug = 2] = "Debug", t[t.Verbose = 3] = "Verbose"
    }(ct || (ct = {}));
    var ht, dt = function() {
            function t() {
                this.name = t.id
            }
            return t.prototype.setupOnce = function() {
                var e = this;
                P(function(n) {
                    return s(e, void 0, void 0, function() {
                        var e;
                        return a(this, function(r) {
                            if (e = G().getIntegration(t)) {
                                try {
                                    if (e.shouldDropEvent(n, e.previousEvent)) return [2, null]
                                } catch (t) {
                                    return [2, e.previousEvent = n]
                                }
                                return [2, e.previousEvent = n]
                            }
                            return [2, n]
                        })
                    })
                })
            }, t.prototype.shouldDropEvent = function(t, e) {
                return !!e && (this.isSameMessageEvent(t, e) ? ($.warn("Event dropped due to being a duplicate of previous event (same message).\nEvent: " + S(t)), !0) : !!this.isSameExceptionEvent(t, e) && ($.warn("Event dropped due to being a duplicate of previous event (same exception).\nEvent: " + S(t)), !0))
            }, t.prototype.isSameMessageEvent = function(t, e) {
                var n = t.message,
                    r = e.message;
                return !(!n && !r) && (!(n && !r || !n && r) && (n === r && (!!this.isSameFingerprint(t, e) && !!this.isSameStacktrace(t, e))))
            }, t.prototype.getFramesFromEvent = function(t) {
                var e = t.exception;
                if (!e) return t.stacktrace ? t.stacktrace.frames : void 0;
                try {
                    return e.values[0].stacktrace.frames
                } catch (t) {
                    return
                }
            }, t.prototype.isSameStacktrace = function(t, e) {
                var n = this.getFramesFromEvent(t),
                    r = this.getFramesFromEvent(e);
                if (!n && !r) return !0;
                if (n && !r || !n && r) return !1;
                if (n = n, (r = r).length !== n.length) return !1;
                for (var o = 0; o < r.length; o++) {
                    var i = r[o],
                        s = n[o];
                    if (i.filename !== s.filename || i.lineno !== s.lineno || i.colno !== s.colno || i.function !== s.function) return !1
                }
                return !0
            }, t.prototype.getExceptionFromEvent = function(t) {
                return t.exception && t.exception.values && t.exception.values[0]
            }, t.prototype.isSameExceptionEvent = function(t, e) {
                var n = this.getExceptionFromEvent(e),
                    r = this.getExceptionFromEvent(t);
                return !(!n || !r) && (n.type === r.type && n.value === r.value && (!!this.isSameFingerprint(t, e) && !!this.isSameStacktrace(t, e)))
            }, t.prototype.isSameFingerprint = function(t, e) {
                var n = t.fingerprint,
                    r = e.fingerprint;
                if (!n && !r) return !0;
                if (n && !r || !n && r) return !1;
                n = n, r = r;
                try {
                    return !(n.join("") !== r.join(""))
                } catch (t) {
                    return !1
                }
            }, t.id = "Dedupe", t
        }(),
        vt = function() {
            function t() {
                this.name = t.id
            }
            return t.prototype.setupOnce = function() {
                ht = Function.prototype.toString, Function.prototype.toString = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    var n = this.__sentry__ ? this.__sentry_original__ : this;
                    return ht.apply(n, t)
                }
            }, t.id = "FunctionToString", t
        }(),
        gt = function() {
            function t() {
                this.name = "SDKInformation"
            }
            return t.prototype.setupOnce = function() {
                $.warn("SDKInformation Integration is deprecated and can be safely removed. It's functionality has been merged into the SDK's core.")
            }, t
        }(),
        yt = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
        mt = function() {
            function t(e) {
                void 0 === e && (e = {}), this.options = e, this.name = t.id
            }
            return t.prototype.setupOnce = function() {
                var e = this;
                P(function(n) {
                    return s(e, void 0, void 0, function() {
                        var e, r, o, i, s;
                        return a(this, function(a) {
                            return (e = G()) && (r = e.getIntegration(t)) && (o = e.getClient(), i = o ? o.getOptions() : {}, s = r.mergeOptions(i), r.shouldDropEvent(n, s)) ? [2, null] : [2, n]
                        })
                    })
                })
            }, t.prototype.shouldDropEvent = function(t, e) {
                return this.isSentryError(t, e) ? ($.warn("Event dropped due to being internal Sentry Error.\nEvent: " + S(t)), !0) : this.isIgnoredError(t, e) ? ($.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + S(t)), !0) : this.isBlacklistedUrl(t, e) ? ($.warn("Event dropped due to being matched by `blacklistUrls` option.\nEvent: " + S(t) + ".\nUrl: " + this.getEventFilterUrl(t)), !0) : !this.isWhitelistedUrl(t, e) && ($.warn("Event dropped due to not being matched by `whitelistUrls` option.\nEvent: " + S(t) + ".\nUrl: " + this.getEventFilterUrl(t)), !0)
            }, t.prototype.isSentryError = function(t, e) {
                if (void 0 === e && (e = {}), !e.ignoreInternal) return !1;
                try {
                    return "SentryError" === t.exception.values[0].type
                } catch (t) {
                    return !1
                }
            }, t.prototype.isIgnoredError = function(t, e) {
                var n = this;
                return void 0 === e && (e = {}), !(!e.ignoreErrors || !e.ignoreErrors.length) && this.getPossibleEventMessages(t).some(function(t) {
                    return e.ignoreErrors.some(function(e) {
                        return n.isMatchingPattern(t, e)
                    })
                })
            }, t.prototype.isBlacklistedUrl = function(t, e) {
                var n = this;
                if (void 0 === e && (e = {}), !e.blacklistUrls || !e.blacklistUrls.length) return !1;
                var r = this.getEventFilterUrl(t);
                return !!r && e.blacklistUrls.some(function(t) {
                    return n.isMatchingPattern(r, t)
                })
            }, t.prototype.isWhitelistedUrl = function(t, e) {
                var n = this;
                if (void 0 === e && (e = {}), !e.whitelistUrls || !e.whitelistUrls.length) return !0;
                var r = this.getEventFilterUrl(t);
                return !r || e.whitelistUrls.some(function(t) {
                    return n.isMatchingPattern(r, t)
                })
            }, t.prototype.mergeOptions = function(t) {
                return void 0 === t && (t = {}), {
                    blacklistUrls: l(this.options.blacklistUrls || [], t.blacklistUrls || []),
                    ignoreErrors: l(this.options.ignoreErrors || [], t.ignoreErrors || [], yt),
                    ignoreInternal: void 0 === this.options.ignoreInternal || this.options.ignoreInternal,
                    whitelistUrls: l(this.options.whitelistUrls || [], t.whitelistUrls || [])
                }
            }, t.prototype.isMatchingPattern = function(t, e) {
                return n = e, "[object RegExp]" === Object.prototype.toString.call(n) ? e.test(t) : "string" == typeof e && it(t, e);
                var n
            }, t.prototype.getPossibleEventMessages = function(t) {
                if (t.message) return [t.message];
                if (!t.exception) return [];
                try {
                    var e = t.exception.values[0],
                        n = e.type,
                        r = e.value;
                    return ["" + r, n + ": " + r]
                } catch (e) {
                    return $.error("Cannot extract message for event " + S(t)), []
                }
            }, t.prototype.getEventFilterUrl = function(t) {
                try {
                    return t.stacktrace ? t.stacktrace.frames[0].filename : t.exception ? t.exception.values[0].stacktrace.frames[0].filename : null
                } catch (e) {
                    return $.error("Cannot extract url for event " + S(t)), null
                }
            }, t.id = "InboundFilters", t
        }(),
        bt = function() {
            function t(e) {
                this.name = t.id, this.options = i({
                    debugger: !1,
                    stringify: !1
                }, e)
            }
            return t.prototype.setupOnce = function() {
                var e = this;
                P(function(n, r) {
                    return s(e, void 0, void 0, function() {
                        var e;
                        return a(this, function(o) {
                            return (e = G().getIntegration(t)) && (e.options.debugger, e.options.stringify ? (console.log(JSON.stringify(n, null, 2)), r && console.log(JSON.stringify(r, null, 2))) : (console.log(n), r && console.log(r))), [2, n]
                        })
                    })
                })
            }, t.id = "Debug", t
        }();
    var Et = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;

    function _t() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        for (var n = "", r = !1, o = t.length - 1; o >= -1 && !r; o--) {
            var i = o >= 0 ? t[o] : "/";
            i && (n = i + "/" + n, r = "/" === i.charAt(0))
        }
        return n = function(t, e) {
            for (var n = 0, r = t.length - 1; r >= 0; r--) {
                var o = t[r];
                "." === o ? t.splice(r, 1) : ".." === o ? (t.splice(r, 1), n++) : n && (t.splice(r, 1), n--)
            }
            if (e)
                for (; n--; n) t.unshift("..");
            return t
        }(n.split("/").filter(function(t) {
            return !!t
        }), !r).join("/"), (r ? "/" : "") + n || "."
    }

    function xt(t) {
        for (var e = 0; e < t.length && "" === t[e]; e++);
        for (var n = t.length - 1; n >= 0 && "" === t[n]; n--);
        return e > n ? [] : t.slice(e, n - e + 1)
    }

    function St(t, e) {
        var n, r, o = (n = t, r = Et.exec(n), r ? r.slice(1) : [])[2];
        return e && o.substr(-1 * e.length) === e && (o = o.substr(0, o.length - e.length)), o
    }
    var wt = function() {
            function t(e) {
                void 0 === e && (e = {});
                var n = this;
                this.name = t.id, this.iteratee = function(t) {
                    return s(n, void 0, void 0, function() {
                        var e;
                        return a(this, function(n) {
                            return t.filename && t.filename.startsWith("/") && (e = this.root ? function(t, e) {
                                t = _t(t).substr(1), e = _t(e).substr(1);
                                for (var n = xt(t.split("/")), r = xt(e.split("/")), o = Math.min(n.length, r.length), i = o, s = 0; s < o; s++)
                                    if (n[s] !== r[s]) {
                                        i = s;
                                        break
                                    } var a = [];
                                for (s = i; s < n.length; s++) a.push("..");
                                return (a = a.concat(r.slice(i))).join("/")
                            }(this.root, t.filename) : St(t.filename), t.filename = "app:///" + e), [2, t]
                        })
                    })
                }, e.root && (this.root = e.root), e.iteratee && (this.iteratee = e.iteratee)
            }
            return t.prototype.setupOnce = function() {
                var e = this;
                P(function(n) {
                    return s(e, void 0, void 0, function() {
                        var e;
                        return a(this, function(r) {
                            return (e = G().getIntegration(t)) ? [2, e.process(n)] : [2, n]
                        })
                    })
                })
            }, t.prototype.process = function(t) {
                return s(this, void 0, void 0, function() {
                    var e, n, r, o, i, s, u;
                    return a(this, function(a) {
                        switch (a.label) {
                            case 0:
                                if (!(e = this.getFramesFromEvent(t))) return [3, 4];
                                for (r in n = [], e) n.push(r);
                                o = 0, a.label = 1;
                            case 1:
                                return o < n.length ? (i = n[o], s = e, u = i, [4, this.iteratee(e[i])]) : [3, 4];
                            case 2:
                                s[u] = a.sent(), a.label = 3;
                            case 3:
                                return o++, [3, 1];
                            case 4:
                                return [2, t]
                        }
                    })
                })
            }, t.prototype.getFramesFromEvent = function(t) {
                var e = t.exception;
                if (!e) return t.stacktrace ? t.stacktrace.frames : void 0;
                try {
                    return e.values[0].stacktrace.frames
                } catch (t) {
                    return
                }
            }, t.id = "RewriteFrames", t
        }(),
        kt = Object.freeze({
            Dedupe: dt,
            FunctionToString: vt,
            SDKInformation: gt,
            InboundFilters: mt,
            Debug: bt,
            RewriteFrames: wt
        });

    function Ot() {
        if (!("fetch" in b())) return !1;
        try {
            return new Headers, new Request(""), new Response, !0
        } catch (t) {
            return !1
        }
    }

    function Tt() {
        var t = b();
        return "navigator" in t && "sendBeacon" in t.navigator
    }

    function It(t, e) {
        var n = (65535 & t) + (65535 & e);
        return (t >> 16) + (e >> 16) + (n >> 16) << 16 | 65535 & n
    }

    function jt(t, e, n, r, o, i) {
        return It((s = It(It(e, t), It(r, i))) << (a = o) | s >>> 32 - a, n);
        var s, a
    }

    function Rt(t, e, n, r, o, i, s) {
        return jt(e & n | ~e & r, t, e, o, i, s)
    }

    function Ft(t, e, n, r, o, i, s) {
        return jt(e & r | n & ~r, t, e, o, i, s)
    }

    function Ct(t, e, n, r, o, i, s) {
        return jt(e ^ n ^ r, t, e, o, i, s)
    }

    function Bt(t, e, n, r, o, i, s) {
        return jt(n ^ (e | ~r), t, e, o, i, s)
    }

    function Nt(t, e) {
        var n, r, o, i, s;
        t[e >> 5] |= 128 << e % 32, t[14 + (e + 64 >>> 9 << 4)] = e;
        var a = 1732584193,
            u = -271733879,
            c = -1732584194,
            l = 271733878;
        for (n = 0; n < t.length; n += 16) r = a, o = u, i = c, s = l, u = Bt(u = Bt(u = Bt(u = Bt(u = Ct(u = Ct(u = Ct(u = Ct(u = Ft(u = Ft(u = Ft(u = Ft(u = Rt(u = Rt(u = Rt(u = Rt(u, c = Rt(c, l = Rt(l, a = Rt(a, u, c, l, t[n], 7, -680876936), u, c, t[n + 1], 12, -389564586), a, u, t[n + 2], 17, 606105819), l, a, t[n + 3], 22, -1044525330), c = Rt(c, l = Rt(l, a = Rt(a, u, c, l, t[n + 4], 7, -176418897), u, c, t[n + 5], 12, 1200080426), a, u, t[n + 6], 17, -1473231341), l, a, t[n + 7], 22, -45705983), c = Rt(c, l = Rt(l, a = Rt(a, u, c, l, t[n + 8], 7, 1770035416), u, c, t[n + 9], 12, -1958414417), a, u, t[n + 10], 17, -42063), l, a, t[n + 11], 22, -1990404162), c = Rt(c, l = Rt(l, a = Rt(a, u, c, l, t[n + 12], 7, 1804603682), u, c, t[n + 13], 12, -40341101), a, u, t[n + 14], 17, -1502002290), l, a, t[n + 15], 22, 1236535329), c = Ft(c, l = Ft(l, a = Ft(a, u, c, l, t[n + 1], 5, -165796510), u, c, t[n + 6], 9, -1069501632), a, u, t[n + 11], 14, 643717713), l, a, t[n], 20, -373897302), c = Ft(c, l = Ft(l, a = Ft(a, u, c, l, t[n + 5], 5, -701558691), u, c, t[n + 10], 9, 38016083), a, u, t[n + 15], 14, -660478335), l, a, t[n + 4], 20, -405537848), c = Ft(c, l = Ft(l, a = Ft(a, u, c, l, t[n + 9], 5, 568446438), u, c, t[n + 14], 9, -1019803690), a, u, t[n + 3], 14, -187363961), l, a, t[n + 8], 20, 1163531501), c = Ft(c, l = Ft(l, a = Ft(a, u, c, l, t[n + 13], 5, -1444681467), u, c, t[n + 2], 9, -51403784), a, u, t[n + 7], 14, 1735328473), l, a, t[n + 12], 20, -1926607734), c = Ct(c, l = Ct(l, a = Ct(a, u, c, l, t[n + 5], 4, -378558), u, c, t[n + 8], 11, -2022574463), a, u, t[n + 11], 16, 1839030562), l, a, t[n + 14], 23, -35309556), c = Ct(c, l = Ct(l, a = Ct(a, u, c, l, t[n + 1], 4, -1530992060), u, c, t[n + 4], 11, 1272893353), a, u, t[n + 7], 16, -155497632), l, a, t[n + 10], 23, -1094730640), c = Ct(c, l = Ct(l, a = Ct(a, u, c, l, t[n + 13], 4, 681279174), u, c, t[n], 11, -358537222), a, u, t[n + 3], 16, -722521979), l, a, t[n + 6], 23, 76029189), c = Ct(c, l = Ct(l, a = Ct(a, u, c, l, t[n + 9], 4, -640364487), u, c, t[n + 12], 11, -421815835), a, u, t[n + 15], 16, 530742520), l, a, t[n + 2], 23, -995338651), c = Bt(c, l = Bt(l, a = Bt(a, u, c, l, t[n], 6, -198630844), u, c, t[n + 7], 10, 1126891415), a, u, t[n + 14], 15, -1416354905), l, a, t[n + 5], 21, -57434055), c = Bt(c, l = Bt(l, a = Bt(a, u, c, l, t[n + 12], 6, 1700485571), u, c, t[n + 3], 10, -1894986606), a, u, t[n + 10], 15, -1051523), l, a, t[n + 1], 21, -2054922799), c = Bt(c, l = Bt(l, a = Bt(a, u, c, l, t[n + 8], 6, 1873313359), u, c, t[n + 15], 10, -30611744), a, u, t[n + 6], 15, -1560198380), l, a, t[n + 13], 21, 1309151649), c = Bt(c, l = Bt(l, a = Bt(a, u, c, l, t[n + 4], 6, -145523070), u, c, t[n + 11], 10, -1120210379), a, u, t[n + 2], 15, 718787259), l, a, t[n + 9], 21, -343485551), a = It(a, r), u = It(u, o), c = It(c, i), l = It(l, s);
        return [a, u, c, l]
    }

    function Ut(t) {
        var e, n = "",
            r = 32 * t.length;
        for (e = 0; e < r; e += 8) n += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);
        return n
    }

    function Lt(t) {
        var e, n = [];
        for (n[(t.length >> 2) - 1] = void 0, e = 0; e < n.length; e += 1) n[e] = 0;
        var r = 8 * t.length;
        for (e = 0; e < r; e += 8) n[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
        return n
    }

    function Dt(t) {
        var e, n, r = "";
        for (n = 0; n < t.length; n += 1) e = t.charCodeAt(n), r += "0123456789abcdef".charAt(e >>> 4 & 15) + "0123456789abcdef".charAt(15 & e);
        return r
    }

    function Mt(t) {
        return unescape(encodeURIComponent(t))
    }

    function At(t) {
        return function(t) {
            return Ut(Nt(Lt(t), 8 * t.length))
        }(Mt(t))
    }

    function Pt(t, e) {
        return function(t, e) {
            var n, r, o = Lt(t),
                i = [],
                s = [];
            for (i[15] = s[15] = void 0, o.length > 16 && (o = Nt(o, 8 * t.length)), n = 0; n < 16; n += 1) i[n] = 909522486 ^ o[n], s[n] = 1549556828 ^ o[n];
            return r = Nt(i.concat(Lt(e)), 512 + 8 * e.length), Ut(Nt(s.concat(r), 640))
        }(Mt(t), Mt(e))
    }

    function Ht(t, e, n) {
        return e ? n ? Pt(e, t) : Dt(Pt(e, t)) : n ? At(t) : Dt(At(t))
    }
    var $t = b(),
        qt = {
            wrap: function() {
                return function() {}
            },
            report: !1,
            collectWindowErrors: !1,
            computeStackTrace: !1,
            remoteFetching: !1,
            linesOfContext: !1,
            extendToAsynchronousCallbacks: !1
        },
        Wt = [].slice,
        Vt = "?",
        Yt = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;

    function Gt(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }

    function Xt() {
        return "undefined" == typeof document || null == document.location ? "" : document.location.href
    }
    qt.wrap = function(t) {
        return function() {
            try {
                return t.apply(this, arguments)
            } catch (t) {
                throw qt.report(t), t
            }
        }
    }, qt.report = function() {
        var t, e, n, r, o = [],
            s = null,
            a = null;

        function u(t, e, n) {
            var r = null;
            if (!e || qt.collectWindowErrors) {
                for (var i in o)
                    if (Gt(o, i)) try {
                        o[i](t, e, n)
                    } catch (t) {
                        r = t
                    }
                if (r) throw r
            }
        }

        function c(e, n, r, o, s) {
            var c = null;
            if (s = f(s) ? s.error : s, e = f(e) ? e.message : e, a) qt.computeStackTrace.augmentStackTraceWithInitialElement(a, n, r, e), h();
            else if (s && p(s))(c = qt.computeStackTrace(s)).mechanism = "onerror", u(c, !0, s);
            else {
                var l, d = {
                        url: n,
                        line: r,
                        column: o
                    },
                    v = e;
                if ("[object String]" === {}.toString.call(e)) {
                    var g = e.match(Yt);
                    g && (l = g[1], v = g[2])
                }
                d.func = qt.computeStackTrace.guessFunctionName(d.url, d.line), d.context = qt.computeStackTrace.gatherContext(d.url, d.line), u(c = {
                    name: l,
                    message: v,
                    mode: "onerror",
                    mechanism: "onerror",
                    stack: [i({}, d, {
                        url: d.url || Xt()
                    })]
                }, !0, null)
            }
            return !!t && t.apply(this, arguments)
        }

        function l(t) {
            var e = t && (t.detail ? t.detail.reason : t.reason) || t,
                n = qt.computeStackTrace(e);
            n.mechanism = "onunhandledrejection", u(n, !0, e)
        }

        function h() {
            var t = a,
                e = s;
            a = null, s = null, u(t, !1, e)
        }

        function d(t) {
            if (a) {
                if (s === t) return;
                h()
            }
            var e = qt.computeStackTrace(t);
            throw a = e, s = t, setTimeout(function() {
                s === t && h()
            }, e.incomplete ? 2e3 : 0), t
        }
        return d.subscribe = function(t) {
            o.push(t)
        }, d.unsubscribe = function(i) {
            for (var s = o.length - 1; s >= 0; --s) o[s] === i && o.splice(s, 1);
            0 === o.length && (e && ($t.onerror = t, e = !1), r && ($t.onerror = n, r = !1))
        }, d.installGlobalHandler = function() {
            !0 !== e && (t = $t.onerror, $t.onerror = c, e = !0)
        }, d.installGlobalUnhandledRejectionHandler = function() {
            !0 !== r && (n = $t.onunhandledrejection, $t.onunhandledrejection = l, r = !0)
        }, d
    }(), qt.computeStackTrace = function() {
        var t = !1,
            e = {};

        function n(t) {
            if ("string" != typeof t) return [];
            if (!Gt(e, t)) {
                var n = "",
                    r = "";
                try {
                    r = $t.document.domain
                } catch (t) {}
                var o = /(.*)\:\/\/([^:\/]+)([:\d]*)\/{0,1}([\s\S]*)/.exec(t);
                o && o[2] === r && (n = function(t) {
                    if (!qt.remoteFetching) return "";
                    try {
                        var e = function() {
                            try {
                                return new $t.XMLHttpRequest
                            } catch (t) {
                                return new $t.ActiveXObject("Microsoft.XMLHTTP")
                            }
                        }();
                        return e.open("GET", t, !1), e.send(""), e.responseText
                    } catch (t) {
                        return ""
                    }
                }(t)), e[t] = n ? n.split("\n") : []
            }
            return e[t]
        }

        function r(t, e) {
            var r, o = /function ([^(]*)\(([^)]*)\)/,
                i = /['"]?([0-9A-Za-z$_]+)['"]?\s*[:=]\s*(function|eval|new Function)/,
                s = "",
                a = n(t);
            if (!a.length) return Vt;
            for (var u = 0; u < 10; ++u)
                if (!d(s = a[e - u] + s)) {
                    if (r = i.exec(s)) return r[1];
                    if (r = o.exec(s)) return r[1]
                } return Vt
        }

        function o(t, e) {
            var r = n(t);
            if (!r.length) return null;
            var o = [],
                i = Math.floor(qt.linesOfContext / 2),
                s = i + qt.linesOfContext % 2,
                a = Math.max(0, e - i - 1),
                u = Math.min(r.length, e + s - 1);
            e -= 1;
            for (var c = a; c < u; ++c) d(r[c]) || o.push(r[c]);
            return o.length > 0 ? o : null
        }

        function i(t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g, "\\$&")
        }

        function s(t) {
            return i(t).replace("<", "(?:<|&lt;)").replace(">", "(?:>|&gt;)").replace("&", "(?:&|&amp;)").replace('"', '(?:"|&quot;)').replace(/\s+/g, "\\s+")
        }

        function a(t, e) {
            for (var r, o, i = 0, s = e.length; i < s; ++i)
                if ((r = n(e[i])).length && (r = r.join("\n"), o = t.exec(r))) return {
                    url: e[i],
                    line: r.substring(0, o.index).split("\n").length,
                    column: o.index - r.lastIndexOf("\n", o.index) - 1
                };
            return null
        }

        function u(t, e, r) {
            var o, s = n(e),
                a = new RegExp("\\b" + i(t) + "\\b");
            return r -= 1, s && s.length > r && (o = a.exec(s[r])) ? o.index : null
        }

        function c(t) {
            if (!d($t && $t.document)) {
                for (var e, n, r, o, u = [Xt()], c = $t.document.getElementsByTagName("script"), l = "" + t, p = 0; p < c.length; ++p) {
                    var f = c[p];
                    f.src && u.push(f.src)
                }
                if (r = /^function(?:\s+([\w$]+))?\s*\(([\w\s,]*)\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/.exec(l)) {
                    var h = r[1] ? "\\s+" + r[1] : "",
                        v = r[2].split(",").join("\\s*,\\s*");
                    e = i(r[3]).replace(/;$/, ";?"), n = new RegExp("function" + h + "\\s*\\(\\s*" + v + "\\s*\\)\\s*{\\s*" + e + "\\s*}")
                } else n = new RegExp(i(l).replace(/\s+/g, "\\s+"));
                if (o = a(n, u)) return o;
                if (r = /^function on([\w$]+)\s*\(event\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/.exec(l)) {
                    var g = r[1];
                    if (e = s(r[2]), o = a(n = new RegExp("on" + g + "=[\\'\"]\\s*" + e + "\\s*[\\'\"]", "i"), u[0])) return o;
                    if (o = a(n = new RegExp(e), u)) return o
                }
                return null
            }
        }

        function l(t) {
            if (!t.stack) return null;
            for (var e, n, i, s = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, a = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i, c = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, l = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, p = /\((\S*)(?::(\d+))(?::(\d+))\)/, f = t.stack.split("\n"), h = [], v = /^(.*) is undefined$/.exec(t.message), g = 0, y = f.length; g < y; ++g) {
                if (n = s.exec(f[g])) {
                    var m = n[2] && 0 === n[2].indexOf("native");
                    n[2] && 0 === n[2].indexOf("eval") && (e = p.exec(n[2])) && (n[2] = e[1]), i = {
                        url: m ? null : n[2],
                        func: n[1] || Vt,
                        args: m ? [n[2]] : [],
                        line: n[3] ? +n[3] : null,
                        column: n[4] ? +n[4] : null
                    }
                } else if (n = c.exec(f[g])) i = {
                    url: n[2],
                    func: n[1] || Vt,
                    args: [],
                    line: +n[3],
                    column: n[4] ? +n[4] : null
                };
                else {
                    if (!(n = a.exec(f[g]))) continue;
                    n[3] && n[3].indexOf(" > eval") > -1 && (e = l.exec(n[3])) ? n[3] = e[1] : 0 !== g || n[5] || d(t.columnNumber) || (h[0].column = t.columnNumber + 1), i = {
                        url: n[3],
                        func: n[1] || Vt,
                        args: n[2] ? n[2].split(",") : [],
                        line: n[4] ? +n[4] : null,
                        column: n[5] ? +n[5] : null
                    }
                }
                if (!i.func && i.line && (i.func = r(i.url, i.line)), qt.remoteFetching && i.url && "blob:" === i.url.substr(0, 5)) {
                    var b = new XMLHttpRequest;
                    if (b.open("GET", i.url, !1), b.send(""), 200 === b.status) {
                        var E = b.responseText || "",
                            _ = (E = E.slice(-300)).match(/\/\/# sourceMappingURL=(.*)$/);
                        if (_) {
                            var x = _[1];
                            "~" === x.charAt(0) && (x = ("undefined" == typeof document || null == document.location ? "" : document.location.origin ? document.location.origin : document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "")) + x.slice(1)), i.url = x.slice(0, -4)
                        }
                    }
                }
                i.context = i.line ? o(i.url, i.line) : null, h.push(i)
            }
            return h.length ? (h[0] && h[0].line && !h[0].column && v && (h[0].column = u(v[1], h[0].url, h[0].line)), {
                mode: "stack",
                name: t.name,
                message: t.message,
                stack: h
            }) : null
        }

        function p(t, e, n, i) {
            var s = {
                url: e,
                line: n
            };
            if (s.url && s.line) {
                t.incomplete = !1, s.func || (s.func = r(s.url, s.line)), s.context || (s.context = o(s.url, s.line));
                var a = / '([^']+)' /.exec(i);
                if (a && (s.column = u(a[1], s.url, s.line)), t.stack.length > 0 && t.stack[0].url === s.url) {
                    if (t.stack[0].line === s.line) return !1;
                    if (!t.stack[0].line && t.stack[0].func === s.func) return t.stack[0].line = s.line, t.stack[0].context = s.context, !1
                }
                return t.stack.unshift(s), t.partial = !0, !0
            }
            return t.incomplete = !0, !1
        }

        function f(t, e) {
            for (var n, o, i, s = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, a = [], l = {}, d = !1, v = f.caller; v && !d; v = v.caller)
                if (v !== h && v !== qt.report) {
                    if (o = {
                            url: null,
                            func: Vt,
                            args: [],
                            line: null,
                            column: null
                        }, v.name ? o.func = v.name : (n = s.exec(v.toString())) && (o.func = n[1]), void 0 === o.func) try {
                        o.func = n.input.substring(0, n.input.indexOf("{"))
                    } catch (t) {}
                    if (i = c(v)) {
                        o.url = i.url, o.line = i.line, o.func === Vt && (o.func = r(o.url, o.line));
                        var g = / '([^']+)' /.exec(t.message || t.description);
                        g && (o.column = u(g[1], i.url, i.line))
                    }
                    l["" + v] ? d = !0 : l["" + v] = !0, a.push(o)
                } e && a.splice(0, e);
            var y = {
                mode: "callers",
                name: t.name,
                message: t.message,
                stack: a
            };
            return p(y, t.sourceURL || t.fileName, t.line || t.lineNumber, t.message || t.description), y
        }

        function h(e, i) {
            var u = null;
            i = null == i ? 0 : +i;
            try {
                if (u = function(t) {
                        var e = t.stacktrace;
                        if (e) {
                            for (var n, i = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, s = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i, a = e.split("\n"), u = [], c = 0; c < a.length; c += 2) {
                                var l = null;
                                if ((n = i.exec(a[c])) ? l = {
                                        url: n[2],
                                        line: +n[1],
                                        column: null,
                                        func: n[3],
                                        args: []
                                    } : (n = s.exec(a[c])) && (l = {
                                        url: n[6],
                                        line: +n[1],
                                        column: +n[2],
                                        func: n[3] || n[4],
                                        args: n[5] ? n[5].split(",") : []
                                    }), l) {
                                    if (!l.func && l.line && (l.func = r(l.url, l.line)), l.line) try {
                                        l.context = o(l.url, l.line)
                                    } catch (t) {}
                                    l.context || (l.context = [a[c + 1]]), u.push(l)
                                }
                            }
                            return u.length ? {
                                mode: "stacktrace",
                                name: t.name,
                                message: t.message,
                                stack: u
                            } : null
                        }
                    }(e)) return u
            } catch (e) {
                if (t) throw e
            }
            try {
                if (u = l(e)) return u
            } catch (e) {
                if (t) throw e
            }
            try {
                if (u = function(t) {
                        var e = t.message.split("\n");
                        if (e.length < 4) return null;
                        var i, u = /^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,
                            c = /^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,
                            l = /^\s*Line (\d+) of function script\s*$/i,
                            p = [],
                            f = $t && $t.document && $t.document.getElementsByTagName("script"),
                            h = [];
                        for (var d in f) Gt(f, d) && !f[d].src && h.push(f[d]);
                        for (var v = 2; v < e.length; v += 2) {
                            var g = null;
                            if (i = u.exec(e[v])) g = {
                                url: i[2],
                                func: i[3],
                                args: [],
                                line: +i[1],
                                column: null
                            };
                            else if (i = c.exec(e[v])) {
                                g = {
                                    url: i[3],
                                    func: i[4],
                                    args: [],
                                    line: +i[1],
                                    column: null
                                };
                                var y = +i[1],
                                    m = h[i[2] - 1];
                                if (m) {
                                    var b = n(g.url);
                                    if (b) {
                                        var E = (b = b.join("\n")).indexOf(m.innerText);
                                        E >= 0 && (g.line = y + b.substring(0, E).split("\n").length)
                                    }
                                }
                            } else if (i = l.exec(e[v])) {
                                var _ = Xt().replace(/#.*$/, ""),
                                    x = a(new RegExp(s(e[v + 1])), [_]);
                                g = {
                                    url: _,
                                    func: "",
                                    args: [],
                                    line: x ? x.line : i[1],
                                    column: null
                                }
                            }
                            if (g) {
                                g.func || (g.func = r(g.url, g.line));
                                var S = o(g.url, g.line),
                                    w = S ? S[Math.floor(S.length / 2)] : null;
                                S && w.replace(/^\s*/, "") === e[v + 1].replace(/^\s*/, "") ? g.context = S : g.context = [e[v + 1]], p.push(g)
                            }
                        }
                        return p.length ? {
                            mode: "multiline",
                            name: t.name,
                            message: e[0],
                            stack: p
                        } : null
                    }(e)) return u
            } catch (e) {
                if (t) throw e
            }
            try {
                if (u = f(e, i + 1)) return u
            } catch (e) {
                if (t) throw e
            }
            return {
                name: e.name,
                message: e.message,
                mode: "failed"
            }
        }
        return h.augmentStackTraceWithInitialElement = p, h.computeStackTraceFromStackProp = l, h.guessFunctionName = r, h.gatherContext = o, h.ofCaller = function(t) {
            t = 1 + (null == t ? 0 : +t);
            try {
                throw new Error
            } catch (e) {
                return h(e, t + 1)
            }
        }, h.getSource = n, h
    }(), qt.extendToAsynchronousCallbacks = function() {
        var t = function(t) {
            var e = $t[t];
            $t[t] = function() {
                var t = Wt.call(arguments),
                    n = t[0];
                return "function" == typeof n && (t[0] = qt.wrap(n)), e.apply ? e.apply(this, t) : e(t[0], t[1])
            }
        };
        t("setTimeout"), t("setInterval")
    }, qt.remoteFetching = !1, qt.collectWindowErrors = !0, qt.linesOfContext = 11;
    var zt = qt.report.subscribe,
        Kt = qt.report.installGlobalHandler,
        Jt = qt.report.installGlobalUnhandledRejectionHandler,
        Zt = qt.computeStackTrace,
        Qt = 50;

    function te(t) {
        var e = {
            stacktrace: {
                frames: re(t.stack)
            },
            type: t.name,
            value: t.message
        };
        return void 0 === e.type && "" === e.value && (e.value = "Unrecoverable error caught"), e
    }

    function ee(t, e) {
        var n = Object.keys(t).sort(),
            r = {
                extra: {
                    __serialized__: function t(e, n, r) {
                        void 0 === n && (n = F), void 0 === r && (r = C);
                        var o = L(e, n);
                        return N(j(o)) > r ? t(e, n - 1) : o
                    }(t)
                },
                fingerprint: [Ht(n.join(""))],
                message: "Non-Error exception captured with keys: " + function(t, e) {
                    if (void 0 === e && (e = B), !t.length) return "[object has no keys]";
                    if (t[0].length >= e) return t[0];
                    for (var n = t.length; n > 0; n--) {
                        var r = t.slice(0, n).join(", ");
                        if (!(r.length > e)) return n === t.length ? r : r + "…"
                    }
                    return ""
                }(n)
            };
        if (e) {
            var o = re(Zt(e).stack);
            r.stacktrace = {
                frames: o
            }
        }
        return r
    }

    function ne(t) {
        return {
            exception: {
                values: [te(t)]
            }
        }
    }

    function re(t) {
        if (!t || !t.length) return [];
        var e = t,
            n = e[0].func || "",
            r = e[e.length - 1].func || "";
        return (it(n, "captureMessage") || it(n, "captureException")) && (e = e.slice(1)), it(r, "sentryWrapped") && (e = e.slice(0, -1)), e.map(function(t) {
            return {
                colno: t.column,
                filename: t.url || e[0].url,
                function: t.func || "?",
                in_app: !0,
                lineno: t.line
            }
        }).slice(0, Qt).reverse()
    }
    var oe, ie, se = function() {
            function t(t) {
                this.options = t, this.url = new nt(this.options.dsn).getStoreEndpointWithUrlEncodedAuth()
            }
            return t.prototype.captureEvent = function(t) {
                return s(this, void 0, void 0, function() {
                    return a(this, function(t) {
                        throw new Q("Transport Class has to implement `captureEvent` method")
                    })
                })
            }, t
        }(),
        ae = b(),
        ue = function(e) {
            function r() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(r, e), r.prototype.captureEvent = function(e) {
                return s(this, void 0, void 0, function() {
                    var n, r;
                    return a(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return n = {
                                    body: j(e),
                                    method: "POST",
                                    referrerPolicy: function() {
                                        if (!Ot()) return !1;
                                        try {
                                            return new Request("pickleRick", {
                                                referrerPolicy: "origin"
                                            }), !0
                                        } catch (t) {
                                            return !1
                                        }
                                    }() ? "origin" : ""
                                }, [4, ae.fetch(this.url, n)];
                            case 1:
                                return r = o.sent(), [2, {
                                    status: t.Status.fromHttpCode(r.status)
                                }]
                        }
                    })
                })
            }, r
        }(se),
        ce = function(e) {
            function r() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(r, e), r.prototype.captureEvent = function(e) {
                return s(this, void 0, void 0, function() {
                    var n = this;
                    return a(this, function(r) {
                        return [2, new Promise(function(r, o) {
                            var i = new XMLHttpRequest;
                            i.onreadystatechange = function() {
                                4 === i.readyState && (200 === i.status && r({
                                    status: t.Status.fromHttpCode(i.status)
                                }), o(i))
                            }, i.open("POST", n.url), i.send(j(e))
                        })]
                    })
                })
            }, r
        }(se),
        le = b(),
        pe = function(e) {
            function r() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(r, e), r.prototype.captureEvent = function(e) {
                return s(this, void 0, void 0, function() {
                    var n;
                    return a(this, function(r) {
                        return n = j(e), [2, {
                            status: le.navigator.sendBeacon(this.url, n) ? t.Status.Success : t.Status.Failed
                        }]
                    })
                })
            }, r
        }(se),
        fe = Object.freeze({
            BaseTransport: se,
            FetchTransport: ue,
            XHRTransport: ce,
            BeaconTransport: pe
        }),
        he = function(e) {
            function r() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(r, e), r.prototype.install = function() {
                if (!this.options.dsn) throw new Q("Invariant exception: install() must not be called when disabled");
                return Error.stackTraceLimit = 50, !0
            }, r.prototype.eventFromException = function(t, e) {
                return s(this, void 0, void 0, function() {
                    var n, r, o, s;
                    return a(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return f(t) && t.error ? (t = (s = t).error, n = ne(Zt(t)), [3, 7]) : [3, 1];
                            case 1:
                                return h(t) || (u = t, "[object DOMException]" === Object.prototype.toString.call(u)) ? (r = (s = t).name || (h(s) ? "DOMError" : "DOMException"), o = s.message ? r + ": " + s.message : r, [4, this.eventFromMessage(o, void 0, e)]) : [3, 3];
                            case 2:
                                return n = a.sent(), [3, 7];
                            case 3:
                                return p(t) ? (n = ne(Zt(t)), [3, 7]) : [3, 4];
                            case 4:
                                return y(t) && e && e.syntheticException ? (n = ee(s = t, e.syntheticException), [3, 7]) : [3, 5];
                            case 5:
                                return s = t, [4, this.eventFromMessage(s, void 0, e)];
                            case 6:
                                n = a.sent(), a.label = 7;
                            case 7:
                                return [2, n = i({}, n, {
                                    event_id: e && e.event_id,
                                    exception: i({}, n.exception, {
                                        mechanism: {
                                            handled: !0,
                                            type: "generic"
                                        }
                                    })
                                })]
                        }
                        var u
                    })
                })
            }, r.prototype.eventFromMessage = function(e, n, r) {
                return void 0 === n && (n = t.Severity.Info), s(this, void 0, void 0, function() {
                    var t, o, i;
                    return a(this, function(s) {
                        return t = {
                            event_id: r && r.event_id,
                            level: n,
                            message: e
                        }, this.options.attachStacktrace && r && r.syntheticException && (o = Zt(r.syntheticException), i = re(o.stack), t.stacktrace = {
                            frames: i
                        }), [2, t]
                    })
                })
            }, r.prototype.sendEvent = function(e) {
                return s(this, void 0, void 0, function() {
                    var n;
                    return a(this, function(r) {
                        return this.options.dsn ? (this.transport || (n = this.options.transportOptions ? this.options.transportOptions : {
                            dsn: this.options.dsn
                        }, this.options.transport ? this.transport = new this.options.transport({
                            dsn: this.options.dsn
                        }) : Tt() ? this.transport = new pe(n) : Ot() ? this.transport = new ue(n) : this.transport = new ce(n)), [2, this.transport.captureEvent(e)]) : ($.warn("Event has been skipped because no Dsn is configured."), [2, {
                            status: t.Status.Skipped,
                            reason: "Event has been skipped because no Dsn is configured."
                        }])
                    })
                })
            }, r
        }(ft),
        de = "sentry.javascript.browser",
        ve = function(t) {
            function e(e) {
                return t.call(this, he, e) || this
            }
            return n(e, t), e.prototype.prepareEvent = function(e, n, r) {
                return s(this, void 0, void 0, function() {
                    return a(this, function(o) {
                        return e.platform = e.platform || "javascript", e.sdk = i({}, e.sdk, {
                            name: de,
                            packages: l(e.sdk && e.sdk.packages || [], [{
                                name: "npm:@sentry/browser",
                                version: "4.4.1"
                            }]),
                            version: "4.4.1"
                        }), [2, t.prototype.prepareEvent.call(this, e, n, r)]
                    })
                })
            }, e.prototype.showReportDialog = function(t) {
                void 0 === t && (t = {});
                var e = b().document;
                if (e) {
                    var n = t.dsn || this.getDsn();
                    if (!t.eventId) throw new Q("Missing `eventId` option in showReportDialog call");
                    if (!n) throw new Q("Missing `Dsn` option in showReportDialog call");
                    var r = e.createElement("script");
                    r.async = !0, r.src = new nt(n).getReportDialogEndpoint(t), (e.head || e.body).appendChild(r)
                }
            }, e
        }(lt),
        ge = 1e3,
        ye = 0;

    function me(t, e, n) {
        if (void 0 === e && (e = {}), !v(t)) return t;
        try {
            if (t.__sentry__) return t;
            if (t.__sentry_wrapped__) return t.__sentry_wrapped__
        } catch (e) {
            return t
        }
        var sentryWrapped = function() {
            var r = this;
            n && v(n) && n.apply(this, arguments);
            var o = Array.prototype.slice.call(arguments);
            try {
                var u = o.map(function(t) {
                    return me(t, e)
                });
                return t.handleEvent ? t.handleEvent.apply(this, u) : t.apply(this, u)
            } catch (t) {
                throw ye += 1, setTimeout(function() {
                    ye -= 1
                }), Z(function(n) {
                    return s(r, void 0, void 0, function() {
                        var r = this;
                        return a(this, function(u) {
                            return n.addEventProcessor(function(t) {
                                return s(r, void 0, void 0, function() {
                                    var n;
                                    return a(this, function(r) {
                                        return n = i({}, t), e.mechanism && (n.exception = n.exception || {}, n.exception.mechanism = e.mechanism), n.extra = i({}, n.extra, {
                                            arguments: L(o, 2)
                                        }), [2, n]
                                    })
                                })
                            }), captureException(t), [2]
                        })
                    })
                }), t
            }
        };
        try {
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (sentryWrapped[r] = t[r])
        } catch (t) {}
        return sentryWrapped.prototype = t.prototype, t.__sentry_wrapped__ = sentryWrapped, sentryWrapped.__sentry__ = !0, sentryWrapped.__sentry_original__ = t, sentryWrapped
    }

    function be(t) {
        return function(e) {
            if (oe = void 0, ie !== e) {
                var n;
                ie = e;
                try {
                    n = function(t) {
                        for (var e, n = t, r = [], o = 0, i = 0, s = " > ".length; n && o++ < 5 && !("html" === (e = _(n)) || o > 1 && i + r.length * s + e.length >= 80);) r.push(e), i += e.length, n = n.parentNode;
                        return r.reverse().join(" > ")
                    }(e.target)
                } catch (t) {
                    n = "<unknown>"
                }
                G().addBreadcrumb({
                    category: "ui." + t,
                    message: n
                }, {
                    event: e,
                    name: t
                })
            }
        }
    }

    function Ee() {
        return function(t) {
            var e;
            try {
                e = t.target
            } catch (t) {
                return
            }
            var n = e && e.tagName;
            n && ("INPUT" === n || "TEXTAREA" === n || e.isContentEditable) && (oe || be("input")(t), clearTimeout(oe), oe = setTimeout(function() {
                oe = void 0
            }, ge))
        }
    }
    var _e, xe = function() {
            function t(e) {
                this.name = t.id, this.options = i({
                    onerror: !0,
                    onunhandledrejection: !0
                }, e)
            }
            return t.prototype.setupOnce = function() {
                zt(function(e, n, r) {
                    if (!(ye > 0)) {
                        var o = G().getIntegration(t);
                        o && G().captureEvent(o.eventFromGlobalHandler(e), {
                            originalException: r,
                            data: {
                                stack: e
                            }
                        })
                    }
                }), this.options.onerror && ($.log("Global Handler attached: onerror"), Kt()), this.options.onunhandledrejection && ($.log("Global Handler attached: onunhandledrejection"), Jt())
            }, t.prototype.eventFromGlobalHandler = function(t) {
                var e = ne(t);
                return i({}, e, {
                    exception: i({}, e.exception, {
                        mechanism: {
                            data: {
                                mode: t.mode
                            },
                            handled: !1,
                            type: t.mechanism
                        }
                    })
                })
            }, t.id = "GlobalHandlers", t
        }(),
        Se = function() {
            function t() {
                this.ignoreOnError = 0, this.name = t.id
            }
            return t.prototype.wrapTimeFunction = function(t) {
                return function() {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    var r = e[0];
                    return e[0] = me(r, {
                        mechanism: {
                            data: {
                                function: t.name || "<anonymous>"
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }), t.apply(this, e)
                }
            }, t.prototype.wrapRAF = function(t) {
                return function(e) {
                    return t(me(e, {
                        mechanism: {
                            data: {
                                function: "requestAnimationFrame",
                                handler: t && t.name || "<anonymous>"
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }))
                }
            }, t.prototype.wrapEventTarget = function(t) {
                var e = b(),
                    n = e[t] && e[t].prototype;
                n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (R(n, "addEventListener", function(e) {
                    return function(n, r, o) {
                        try {
                            r.handleEvent = me(r.handleEvent.bind(r), {
                                mechanism: {
                                    data: {
                                        function: "handleEvent",
                                        handler: r && r.name || "<anonymous>",
                                        target: t
                                    },
                                    handled: !0,
                                    type: "instrument"
                                }
                            })
                        } catch (t) {}
                        var i, s, a;
                        return "EventTarget" !== t && "Node" !== t || (s = be("click"), a = Ee(), i = function(t) {
                            if (t) {
                                var e;
                                try {
                                    e = t.type
                                } catch (t) {
                                    return
                                }
                                return "click" === e ? s(t) : "keypress" === e ? a(t) : void 0
                            }
                        }), e.call(this, n, me(r, {
                            mechanism: {
                                data: {
                                    function: "addEventListener",
                                    handler: r && r.name || "<anonymous>",
                                    target: t
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        }, i), o)
                    }
                }), R(n, "removeEventListener", function(t) {
                    return function(e, n, r) {
                        var o = n;
                        try {
                            o = o && (o.__sentry_wrapped__ || o)
                        } catch (t) {}
                        return t.call(this, e, o, r)
                    }
                }))
            }, t.prototype.setupOnce = function() {
                this.ignoreOnError = this.ignoreOnError;
                var t = b();
                R(t, "setTimeout", this.wrapTimeFunction.bind(this)), R(t, "setInterval", this.wrapTimeFunction.bind(this)), R(t, "requestAnimationFrame", this.wrapRAF.bind(this)), ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"].forEach(this.wrapEventTarget.bind(this))
            }, t.id = "TryCatch", t
        }(),
        we = b(),
        ke = function() {
            function e(t) {
                this.name = e.id, this.options = i({
                    beacon: !0,
                    console: !0,
                    dom: !0,
                    fetch: !0,
                    history: !0,
                    sentry: !0,
                    xhr: !0
                }, t)
            }
            return e.prototype.instrumentBeacon = function() {
                Tt() && R(we.navigator, "sendBeacon", function(n) {
                    return function() {
                        for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
                        var i = r[0],
                            s = r[1],
                            a = n.apply(this, r),
                            u = G().getClient(),
                            c = u && u.getDsn();
                        if (c) {
                            var l = new nt(c).getStoreEndpoint();
                            if (l && it(i, l)) return Oe(s), a
                        }
                        var p = {
                            category: "beacon",
                            data: s,
                            type: "http"
                        };
                        return a || (p.level = t.Severity.Error), e.addBreadcrumb(p, {
                            input: r,
                            result: a
                        }), a
                    }
                })
            }, e.prototype.instrumentConsole = function() {
                "console" in we && ["debug", "info", "warn", "error", "log"].forEach(function(n) {
                    n in we.console && R(we.console, n, function(r) {
                        return function() {
                            for (var o = [], i = 0; i < arguments.length; i++) o[i] = arguments[i];
                            var s = {
                                category: "console",
                                data: {
                                    extra: {
                                        arguments: L(o, 2)
                                    },
                                    logger: "console"
                                },
                                level: t.Severity.fromString(n),
                                message: ot(o, " ")
                            };
                            "assert" === n && !1 === o[0] && (s.message = "Assertion failed: " + (ot(o.slice(1), " ") || "console.assert"), s.data.extra.arguments = L(o.slice(1), 2)), e.addBreadcrumb(s, {
                                input: o,
                                level: n
                            }), r && Function.prototype.apply.call(r, we.console, o)
                        }
                    })
                })
            }, e.prototype.instrumentDOM = function() {
                "document" in we && (we.document.addEventListener("click", be("click"), !1), we.document.addEventListener("keypress", Ee(), !1))
            }, e.prototype.instrumentFetch = function() {
                Ot() && -1 !== b().fetch.toString().indexOf("native") && R(we, "fetch", function(n) {
                    return function() {
                        for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
                        var i, s = r[0],
                            a = "GET";
                        "string" == typeof s ? i = s : "Request" in we && s instanceof Request ? (i = s.url, s.method && (a = s.method)) : i = String(s), r[1] && r[1].method && (a = r[1].method);
                        var u = G().getClient(),
                            c = u && u.getDsn();
                        if (c) {
                            var l = new nt(c).getStoreEndpoint();
                            if (l && it(i, l)) return "POST" === a && r[1] && r[1].body && Oe(r[1].body), n.apply(we, r)
                        }
                        var p = {
                            method: a,
                            url: i
                        };
                        return n.apply(we, r).then(function(t) {
                            return p.status_code = t.status, e.addBreadcrumb({
                                category: "fetch",
                                data: p,
                                type: "http"
                            }, {
                                input: r,
                                response: t
                            }), t
                        }).catch(function(n) {
                            throw e.addBreadcrumb({
                                category: "fetch",
                                data: p,
                                level: t.Severity.Error,
                                type: "http"
                            }, {
                                error: n,
                                input: r
                            }), n
                        })
                    }
                })
            }, e.prototype.instrumentHistory = function() {
                var t = this;
                if (n = b(), r = n.chrome, o = r && r.app && r.app.runtime, i = "history" in n && !!n.history.pushState && !!n.history.replaceState, !o && i) {
                    var n, r, o, i, s = function(t, n) {
                            var r = x(we.location.href),
                                o = x(n),
                                i = x(t);
                            i.path || (i = r), _e = n, r.protocol === o.protocol && r.host === o.host && (n = o.relative), r.protocol === i.protocol && r.host === i.host && (t = i.relative), e.addBreadcrumb({
                                category: "navigation",
                                data: {
                                    from: t,
                                    to: n
                                }
                            })
                        },
                        a = we.onpopstate;
                    we.onpopstate = function() {
                        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                        var r = we.location.href;
                        if (s(_e, r), a) return a.apply(t, e)
                    }, R(we.history, "pushState", u), R(we.history, "replaceState", u)
                }

                function u(t) {
                    return function() {
                        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                        var r = e.length > 2 ? e[2] : void 0;
                        return r && s(_e, String(r)), t.apply(this, e)
                    }
                }
            }, e.prototype.instrumentXHR = function() {
                if ("XMLHttpRequest" in we) {
                    var t = XMLHttpRequest.prototype;
                    R(t, "open", function(t) {
                        return function() {
                            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                            var r = e[1];
                            this.__sentry_xhr__ = {
                                method: e[0],
                                url: e[1]
                            };
                            var o = G().getClient(),
                                i = o && o.getDsn();
                            if (i) {
                                var s = new nt(i).getStoreEndpoint();
                                g(r) && s && it(r, s) && (this.__sentry_own_request__ = !0)
                            }
                            return t.apply(this, e)
                        }
                    }), R(t, "send", function(t) {
                        return function() {
                            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                            var o = this;

                            function i() {
                                if (4 === o.readyState) {
                                    if (o.__sentry_own_request__) return;
                                    try {
                                        o.__sentry_xhr__ && (o.__sentry_xhr__.status_code = o.status)
                                    } catch (t) {}
                                    e.addBreadcrumb({
                                        category: "xhr",
                                        data: o.__sentry_xhr__,
                                        type: "http"
                                    }, {
                                        xhr: o
                                    })
                                }
                            }
                            return o.__sentry_own_request__ && Oe(n[0]), ["onload", "onerror", "onprogress"].forEach(function(t) {
                                ! function(t, e) {
                                    t in e && v(e[t]) && R(e, t, function(e) {
                                        return me(e, {
                                            mechanism: {
                                                data: {
                                                    function: t,
                                                    handler: e && e.name || "<anonymous>"
                                                },
                                                handled: !0,
                                                type: "instrument"
                                            }
                                        })
                                    })
                                }(t, o)
                            }), "onreadystatechange" in o && v(o.onreadystatechange) ? R(o, "onreadystatechange", function(t) {
                                return me(t, {
                                    mechanism: {
                                        data: {
                                            function: "onreadystatechange",
                                            handler: t && t.name || "<anonymous>"
                                        },
                                        handled: !0,
                                        type: "instrument"
                                    }
                                }, i)
                            }) : o.onreadystatechange = i, t.apply(this, n)
                        }
                    })
                }
            }, e.addBreadcrumb = function(t, n) {
                G().getIntegration(e) && G().addBreadcrumb(t, n)
            }, e.prototype.setupOnce = function() {
                this.options.console && this.instrumentConsole(), this.options.dom && this.instrumentDOM(), this.options.xhr && this.instrumentXHR(), this.options.fetch && this.instrumentFetch(), this.options.beacon && this.instrumentBeacon(), this.options.history && this.instrumentHistory()
            }, e.id = "Breadcrumbs", e
        }();

    function Oe(e) {
        try {
            var n = (r = e, JSON.parse(r, I));
            ke.addBreadcrumb({
                category: "sentry",
                event_id: n.event_id,
                level: n.level || t.Severity.fromString("error"),
                message: S(n)
            }, {
                event: n
            })
        } catch (t) {
            $.error("Error while adding sentry type breadcrumb")
        }
        var r
    }
    var Te, Ie = "cause",
        je = 5,
        Re = function() {
            function t(e) {
                void 0 === e && (e = {}), this.name = t.id, this.key = e.key || Ie, this.limit = e.limit || je
            }
            return t.prototype.setupOnce = function() {
                var e = this;
                P(function(n, r) {
                    return s(e, void 0, void 0, function() {
                        var e;
                        return a(this, function(o) {
                            return (e = G().getIntegration(t)) ? [2, e.handler(n, r)] : [2, n]
                        })
                    })
                })
            }, t.prototype.handler = function(t, e) {
                if (!(t.exception && t.exception.values && e && e.originalException instanceof Error)) return t;
                var n = this.walkErrorTree(e.originalException, this.key);
                return t.exception.values = l(n, t.exception.values), t
            }, t.prototype.walkErrorTree = function(t, e, n) {
                if (void 0 === n && (n = []), !(t[e] instanceof Error) || n.length + 1 >= this.limit) return n;
                var r = te(Zt(t[e]));
                return this.walkErrorTree(t[e], e, l([r], n))
            }, t.id = "LinkedErrors", t
        }(),
        Fe = b(),
        Ce = function() {
            function t() {
                this.name = t.id
            }
            return t.prototype.setupOnce = function() {
                var e = this;
                P(function(n) {
                    return s(e, void 0, void 0, function() {
                        var e;
                        return a(this, function(r) {
                            return G().getIntegration(t) && Fe.navigator && Fe.location ? ((e = n.request || {}).url = e.url || Fe.location.href, e.headers = e.headers || {}, e.headers["User-Agent"] = Fe.navigator.userAgent, [2, i({}, n, {
                                request: e
                            })]) : [2, n]
                        })
                    })
                })
            }, t.id = "UserAgent", t
        }(),
        Be = function() {
            function t(e) {
                void 0 === e && (e = {}), this.name = t.id, this.Ember = e.Ember || b().Ember
            }
            return t.prototype.setupOnce = function() {
                var e = this;
                if (this.Ember) {
                    var n = this.Ember.onerror;
                    this.Ember.onerror = function(r) {
                        if (G().getIntegration(t) && Z(function(t) {
                                e.addIntegrationToSdkInfo(t), captureException(r)
                            }), "function" == typeof n) n.call(e.Ember, r);
                        else if (e.Ember.testing) throw r
                    }, this.Ember.RSVP.on("error", function(n) {
                        G().getIntegration(t) && Z(function(t) {
                            n instanceof Error ? (t.setExtra("context", "Unhandled Promise error detected"), e.addIntegrationToSdkInfo(t), captureException(n)) : (t.setExtra("reason", n), e.addIntegrationToSdkInfo(t), captureMessage("Unhandled Promise error detected"))
                        })
                    })
                }
            }, t.prototype.addIntegrationToSdkInfo = function(t) {
                var e = this;
                t.addEventProcessor(function(t) {
                    return s(e, void 0, void 0, function() {
                        var e;
                        return a(this, function(n) {
                            return t.sdk && (e = t.sdk.integrations || [], t.sdk = i({}, t.sdk, {
                                integrations: l(e, ["ember"])
                            })), [2, t]
                        })
                    })
                })
            }, t.id = "Ember", t
        }(),
        Ne = function() {
            function t(e) {
                void 0 === e && (e = {}), this.name = t.id, this.Vue = e.Vue || b().Vue
            }
            return t.prototype.formatComponentName = function(t) {
                if (t.$root === t) return "root instance";
                var e = t._isVue ? t.$options.name || t.$options._componentTag : t.name;
                return (e ? "component <" + e + ">" : "anonymous component") + (t._isVue && t.$options.__file ? " at " + t.$options.__file : "")
            }, t.prototype.setupOnce = function() {
                var e = this;
                if (this.Vue && this.Vue.config) {
                    var n = this.Vue.config.errorHandler;
                    this.Vue.config.errorHandler = function(r, o, u) {
                        var c = {};
                        y(o) && (c.componentName = e.formatComponentName(o), c.propsData = o.$options.propsData), d(u) || (c.lifecycleHook = u), G().getIntegration(t) && Z(function(t) {
                            Object.keys(c).forEach(function(e) {
                                t.setExtra(e, c[e])
                            }), t.addEventProcessor(function(t) {
                                return s(e, void 0, void 0, function() {
                                    var e;
                                    return a(this, function(n) {
                                        return t.sdk && (e = t.sdk.integrations || [], t.sdk = i({}, t.sdk, {
                                            integrations: l(e, ["vue"])
                                        })), [2, t]
                                    })
                                })
                            }), captureException(r)
                        }), "function" == typeof n && n.call(e.Vue, r, o, u)
                    }
                }
            }, t.id = "Vue", t
        }();
    ! function(t) {
        t.Crash = "crash", t.Deprecation = "deprecation", t.Intervention = "intervention"
    }(Te || (Te = {}));
    var Ue = function() {
            function t(e) {
                void 0 === e && (e = {
                    types: [Te.Crash, Te.Deprecation, Te.Intervention]
                }), this.options = e, this.name = t.id
            }
            return t.prototype.setupOnce = function() {
                "ReportingObserver" in b() && new(b().ReportingObserver)(this.handler.bind(this), {
                    buffered: !0,
                    types: this.options.types
                }).observe()
            }, t.prototype.handler = function(e) {
                var n, r;
                if (G().getIntegration(t)) {
                    var o = function(t) {
                        Z(function(e) {
                            e.setExtra("url", t.url);
                            var n = "ReportingObserver [" + t.type + "]",
                                r = "No details available";
                            if (t.body) {
                                var o, i = {};
                                for (var s in t.body) i[s] = t.body[s];
                                if (e.setExtra("body", i), t.type === Te.Crash) r = [(o = t.body).crashId || "", o.reason || ""].join(" ").trim() || r;
                                else r = (o = t.body).message || r
                            }
                            captureMessage(n + ": " + r)
                        })
                    };
                    try {
                        for (var i = u(e), s = i.next(); !s.done; s = i.next()) {
                            o(s.value)
                        }
                    } catch (t) {
                        n = {
                            error: t
                        }
                    } finally {
                        try {
                            s && !s.done && (r = i.return) && r.call(i)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                }
            }, t.id = "ReportingObserver", t
        }(),
        Le = Object.freeze({
            GlobalHandlers: xe,
            TryCatch: Se,
            Breadcrumbs: ke,
            LinkedErrors: Re,
            UserAgent: Ce,
            Ember: Be,
            Vue: Ne,
            ReportingObserver: Ue
        }),
        De = [new dt, new mt, new vt, new Se, new ke, new xe, new Re, new Ce];
    var Me = i({}, kt, Le);
    return t.Integrations = Me, t.Transports = fe, t.addGlobalEventProcessor = P, t.addBreadcrumb = function(t) {
        J("addBreadcrumb", t)
    }, t.captureException = captureException, t.captureEvent = function(t) {
        return J("captureEvent", t)
    }, t.captureMessage = captureMessage, t.configureScope = function(t) {
        J("configureScope", t)
    }, t.withScope = Z, t.getHubFromCarrier = z, t.getCurrentHub = G, t.Hub = W, t.Scope = M, t.BrowserBackend = he, t.BrowserClient = ve, t.defaultIntegrations = De, t.forceLoad = function() {}, t.init = function(t) {
        void 0 === t && (t = {}), void 0 === t.defaultIntegrations && (t.defaultIntegrations = De),
            function(t, e) {
                if (!0 === e.debug && $.enable(), !G().getClient()) {
                    var n = new t(e);
                    G().bindClient(n), n.install()
                }
            }(ve, t)
    }, t.lastEventId = function() {
        return G().lastEventId()
    }, t.onLoad = function(t) {
        t()
    }, t.showReportDialog = function(t) {
        void 0 === t && (t = {}), t.eventId || (t.eventId = G().lastEventId()), G().getClient().showReportDialog(t)
    }, t.SDK_NAME = de, t.SDK_VERSION = "4.4.1", t
}({});


//*=================================================*//
//*-------------------------------------------------*//
//*----------------- BAM Quiz ----------------------*//
//*--------------- Instant Game --------------------*//
//*-------------- By Mohammed Cha ------------------*//
//*-------------- Re-Skinning grp ------------------*//
//*-------------------------------------------------*//
//*=================================================*//
