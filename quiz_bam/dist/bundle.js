//*=================================================*//
//*-------------------------------------------------*//
//*----------------- BAM Quiz ----------------------*//
//*--------------- Instant Game --------------------*//
//*-------------- By Mohammed Cha ------------------*//
//*-------------- Re-Skinning grp ------------------*//
//*-------------------------------------------------*//
//*=================================================*//

! function(t) {
    var e = {};

    function r(n) {
        if (e[n]) return e[n].exports;
        var o = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }
    r.m = t, r.c = e, r.d = function(t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, r.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, r.t = function(t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) r.d(n, o, function(e) {
                return t[e]
            }.bind(null, o));
        return n
    }, r.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return r.d(e, "a", e), e
    }, r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, r.p = "", r(r.s = 55)
}([function(t, e, r) {
    var n = r(10),
        o = r(26),
        i = r(3);
    Env = {
        locale: "en",
        entryPointData: {},
        user: !1,
        tracking: !1,
        init: function() {
            return this.tracking = a, this.ads = s, this.bot = u, new Promise(function(t, e) {
                Env.entryPointData = FBInstant.getEntryPointData(), Env.user = o, Env.user.init(Env).then(function() {
                    Env.entryPointData && Env.entryPointData.locale && n[Env.entryPointData.locale] ? Env.locale = Env.entryPointData.locale : Env.locale = Env._ourLocaleFromFbLocale(o.fbLocale), Env.entryPointData && "share" == Env.entryPointData.source ? source = "share" : Env.entryPointData && "bot" == Env.entryPointData.source ? source = "bot" : source = "direct", ["he", "ar", "ur", "pa"].indexOf(Env.locale) >= 0 && (document.querySelector("body").className += "rtl"), FBInstant.getEntryPointAsync().then(function(t) {
                        Env.tracking.entryPoint({
                            source: source,
                            fbSource: t
                        }, Env.entryPointData)
                    }, function() {
                        Env.tracking.entryPoint({
                            source: source
                        }, Env.entryPointData)
                    }), setTimeout(function() {
                        Env.ads.init()
                    }, 3e3), i.i18n.use(n[Env.locale]), FBInstant.logEvent("envBeforeResolve"), t()
                })
            })
        },
        dataForShare: function() {
            return Object.assign({
                locale: Env.locale
            }, Env.user.dataForShare())
        },
        startQuiz: function() {
            return !(!Env.entryPointData || !Env.entryPointData.quiz_id) && Env.entryPointData.quiz_id
        },
        _ourLocaleFromFbLocale: function(t) {
            var e = t.split("_"),
                r = e[0];
            e[1];
            switch (r) {
                case "in":
                    mappedLanguage = "id";
                    break;
                case "pt":
                    mappedLanguage = "br";
                    break;
                case "cs":
                    mappedLanguage = "cz";
                    break;
                case "tl":
                    mappedLanguage = "ph";
                    break;
                default:
                    mappedLanguage = r
            }
            return n[mappedLanguage] ? mappedLanguage : "en"
        }
    };
    var a = r(32)(Env),
        s = r(33)(Env),
        u = r(34)(Env);
    t.exports = Env
}, function(t, e, r) {
    "use strict";
    var n = r(37);
    t.exports = Function.prototype.bind || n
}, function(t, e, r) {
    var n = r(0);
    r(4);
    t.exports = {
        baseUrl: API.quiz,
        baseTrackUrl: API.track,
        data: function(t) {
            return Object.assign({}, {
                session_id: n.user.sessionId,
                gender: n.user.gender,
                locale: n.locale
            }, t)
        },
        url: function(t) {
            return this.baseUrl + t
        },
        trackUrl: function(t) {
            return this.baseTrackUrl + t
        },
        getQuizzes: function(t) {
            var e = this.url("quizzes/list"),
                r = this.data({});
            return e += "?" + this.serialize(r), this._get(e)
        },
        getQuiz: function(t) {
            var e = this.url("quizzes/" + t),
                r = this.data({});
            return e += "?" + this.serialize(r), this._get(e)
        },
        getQuizResultWithPicture: function(t, e) {
            var r = this.url("quizzes/" + t + "/result_picture");
            e = this.data(e);
            return this._post(r, e)
        },
        screenshot: function(t) {
            var e = this.url("screenshots/" + t + "?" + Math.floor(1e5 * Math.random()));
            return this._get(e)
        },
        _post: function(t, e) {
            return new Promise(function(r, n) {
                var o = new XMLHttpRequest;
                o.open("POST", t, !0), o.send(JSON.stringify(e)), o.onreadystatechange = function() {
                    if (4 === o.readyState)
                        if (200 === o.status) {
                            var t = o.responseText,
                                e = JSON.parse(t);
                            r(e)
                            console.log('bougassa:',e);
                        } else n(o.status)
                }
            })
        },
        _get: function(t) {
            return new Promise(function(e, r) {
                var n = new XMLHttpRequest;
                n.open("GET", t, !0), n.send(), n.onreadystatechange = function() {
                    if (4 === n.readyState)
                        if (200 === n.status) {
                            var t = n.responseText,
                                o = JSON.parse(t);
                            e(o)
                        } else r(n.status)
                }
            })
        },
        serialize: function(t) {
            var e = [];
            for (var r in t) t.hasOwnProperty(r) && e.push(encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
            return e.join("&")
        }
    }
}, function(t, e, r) {
    var n = r(30),
        o = r(31)(n),
        i = r(10),
        a = r(8);
    bLazy = new a;
    var s = !0;
    Renderer = {
        i18n: o,
        Mustache: n,
        setLocale: function() {
            Renderer.i18n.use(i[ENV.locale])
        },
        getTemplate: function(t) {
            return document.querySelector("#" + t).innerHTML
        },
        showScene: function(t) {
            return new Promise(function(e, r) {
                Renderer.showLoader(), t.then(function(t) {
                    document.querySelector("#scene").innerHTML = t.html, s && (FBInstant.logEvent("firstScene"), s = !1), bLazy.revalidate(), e(), Renderer.hideLoader(), window.scrollTo(0, 0)
                })
            })
        },
        showLoader: function() {
            document.querySelector("#main-loader").style.display = "block"
        },
        hideLoader: function() {
            document.querySelector("#main-loader").style.display = "none"
        }
    }, t.exports = Renderer
}, function(t, e) {
    t.exports = "2.1.6"
}, function(t, e, r) {
    "use strict";
    t.exports = function() {
        if ("function" != typeof Promise) throw new TypeError("`Promise.prototype.finally` requires a global `Promise` be available.")
    }
}, function(t, e, r) {
    "use strict";
    var n = r(1);
    t.exports = n.call(Function.call, Object.prototype.hasOwnProperty)
}, function(t, e, r) {
    "use strict";
    var n = Function.prototype.toString,
        o = /^\s*class\b/,
        i = function(t) {
            try {
                var e = n.call(t);
                return o.test(e)
            } catch (t) {
                return !1
            }
        },
        a = Object.prototype.toString,
        s = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
    t.exports = function(t) {
        if (!t) return !1;
        if ("function" != typeof t && "object" != typeof t) return !1;
        if ("function" == typeof t && !t.prototype) return !0;
        if (s) return function(t) {
            try {
                return !i(t) && (n.call(t), !0)
            } catch (t) {
                return !1
            }
        }(t);
        if (i(t)) return !1;
        var e = a.call(t);
        return "[object Function]" === e || "[object GeneratorFunction]" === e
    }
}, function(t, e, r) {
    var n, o;
    /*!
      hey, [be]Lazy.js - v1.8.2 - 2016.10.25
      A fast, small and dependency free lazy load script (https://github.com/dinbror/blazy)
      (c) Bjoern Klinggaard - @bklinggaard - http://dinbror.dk/blazy
    */
    void 0 === (o = "function" == typeof(n = function() {
        "use strict";
        var t, e, r, n, o = "src";
        return function(o) {
            if (!document.querySelectorAll) {
                var s = document.createStyleSheet();
                document.querySelectorAll = function(t, e, r, n, o) {
                    for (o = document.all, e = [], t = t.replace(/\[for\b/gi, "[htmlFor").split(","), r = t.length; r--;) {
                        for (s.addRule(t[r], "k:v"), n = o.length; n--;) o[n].currentStyle.k && e.push(o[n]);
                        s.removeRule(0)
                    }
                    return e
                }
            }
            var u = this,
                c = u._util = {};
            c.elements = [], c.destroyed = !0, u.options = o || {}, u.options.error = u.options.error || !1, u.options.offset = u.options.offset || 100, u.options.root = u.options.root || document, u.options.success = u.options.success || !1, u.options.selector = u.options.selector || ".b-lazy", u.options.separator = u.options.separator || "|", u.options.containerClass = u.options.container, u.options.container = !!u.options.containerClass && document.querySelectorAll(u.options.containerClass), u.options.errorClass = u.options.errorClass || "b-error", u.options.breakpoints = u.options.breakpoints || !1, u.options.loadInvisible = u.options.loadInvisible || !1, u.options.successClass = u.options.successClass || "b-loaded", u.options.validateDelay = u.options.validateDelay || 25, u.options.saveViewportOffsetDelay = u.options.saveViewportOffsetDelay || 50, u.options.srcset = u.options.srcset || "data-srcset", u.options.src = t = u.options.src || "data-src", n = Element.prototype.closest, r = window.devicePixelRatio > 1, (e = {}).top = 0 - u.options.offset, e.left = 0 - u.options.offset, u.revalidate = function() {
                i(u)
            }, u.load = function(t, e) {
                var r = this.options;
                t && void 0 === t.length ? l(t, 0, r) : S(t, function(t) {
                    l(t, 0, r)
                })
            }, u.destroy = function() {
                var t = u._util;
                u.options.container && S(u.options.container, function(e) {
                    w(e, "scroll", t.validateT)
                }), w(window, "scroll", t.validateT), w(window, "resize", t.validateT), w(window, "resize", t.saveViewportOffsetT), t.count = 0, t.elements.length = 0, t.destroyed = !0
            }, c.validateT = P(function() {
                a(u)
            }, u.options.validateDelay, u), c.saveViewportOffsetT = P(function() {
                m(u.options.offset)
            }, u.options.saveViewportOffsetDelay, u), m(u.options.offset), S(u.options.breakpoints, function(e) {
                if (e.width >= window.screen.width) return t = e.src, !1
            }), setTimeout(function() {
                i(u)
            })
        };

        function i(t) {
            var e = t._util;
            e.elements = function(t) {
                for (var e = [], r = t.root.querySelectorAll(t.selector), n = r.length; n--; e.unshift(r[n]));
                return e
            }(t.options), e.count = e.elements.length, e.destroyed && (e.destroyed = !1, t.options.container && S(t.options.container, function(t) {
                b(t, "scroll", e.validateT)
            }), b(window, "resize", e.saveViewportOffsetT), b(window, "resize", e.validateT), b(window, "scroll", e.validateT)), a(t)
        }

        function a(t) {
            for (var e = t._util, r = 0; r < e.count; r++) {
                var n = e.elements[r];
                (s(n, t.options) || g(n, t.options.successClass)) && (t.load(n), e.elements.splice(r, 1), e.count--, r--)
            }
            0 === e.count && t.destroy()
        }

        function s(t, r) {
            var o = t.getBoundingClientRect();
            if (r.container && n) {
                var i = t.closest(r.containerClass);
                if (i) {
                    var a = i.getBoundingClientRect();
                    if (u(a, e)) {
                        var s = a.top - r.offset,
                            l = a.right + r.offset,
                            c = a.bottom + r.offset,
                            p = a.left - r.offset,
                            f = {
                                top: s > e.top ? s : e.top,
                                right: l < e.right ? l : e.right,
                                bottom: c < e.bottom ? c : e.bottom,
                                left: p > e.left ? p : e.left
                            };
                        return u(o, f)
                    }
                    return !1
                }
            }
            return u(o, e)
        }

        function u(t, e) {
            return t.right >= e.left && t.bottom >= e.top && t.left <= e.right && t.top <= e.bottom
        }

        function l(e, n, i) {
            if (!g(e, i.successClass)) {
                var a = d(e, t) || d(e, i.src);
                if (a) {
                    var s = a.split(i.separator),
                        u = s[r && s.length > 1 ? 1 : 0],
                        l = (d(e, i.srcset), h(e, "img")),
                        f = e.parentNode,
                        y = (f && h(f, "picture"), new XMLHttpRequest);
                    return y.open("GET", u, !0), y.responseType = "blob", y.onload = function(t) {
                        var r = y.response,
                            n = URL.createObjectURL(r);
                        v(e, i.successClass), l ? e.src = n : e.style.backgroundImage = 'url("' + n + '")'
                    }, y.onerror = function() {
                        console.log("unable to load", u)
                    }, void y.send()
                }
                h(e, "video") ? (S(e.getElementsByTagName("source"), function(t) {
                    p(t, o, i.src)
                }), e.load(), c(e, i)) : (i.error && i.error(e, "missing"), v(e, i.errorClass))
            }
        }

        function c(t, e) {
            v(t, e.successClass), e.success && e.success(t), y(t, e.src), y(t, e.srcset), S(e.breakpoints, function(e) {
                y(t, e.src)
            })
        }

        function p(t, e, r) {
            var n = d(t, r);
            n && (f(t, e, n), y(t, r))
        }

        function f(t, e, r) {
            t.setAttribute(e, r)
        }

        function d(t, e) {
            return t.getAttribute(e)
        }

        function y(t, e) {
            t.removeAttribute(e)
        }

        function h(t, e) {
            return t.nodeName.toLowerCase() === e
        }

        function g(t, e) {
            return -1 !== (" " + t.className + " ").indexOf(" " + e + " ")
        }

        function v(t, e) {
            g(t, e) || (t.className += " " + e)
        }

        function m(t) {
            e.bottom = (window.innerHeight || document.documentElement.clientHeight) + t, e.right = (window.innerWidth || document.documentElement.clientWidth) + t
        }

        function b(t, e, r) {
            t.attachEvent ? t.attachEvent && t.attachEvent("on" + e, r) : t.addEventListener(e, r, {
                capture: !1,
                passive: !0
            })
        }

        function w(t, e, r) {
            t.detachEvent ? t.detachEvent && t.detachEvent("on" + e, r) : t.removeEventListener(e, r, {
                capture: !1,
                passive: !0
            })
        }

        function S(t, e) {
            if (t && e)
                for (var r = t.length, n = 0; n < r && !1 !== e(t[n], n); n++);
        }

        function P(t, e, r) {
            var n = 0;
            return function() {
                var o = +new Date;
                o - n < e || (n = o, t.apply(r, arguments))
            }
        }
    }) ? n.call(e, r, e, t) : n) || (t.exports = o)
}, function(t, e) {
    t.exports = {
        NumHistory: new Array,
        resetHistory: function() {
            this.NumHistory = new Array
        },
        generate: function(t) {
            var e = Math.round(Math.random() * (t - 1));
            if (t > 1 && this.NumHistory.length > 0) {
                if (this.NumHistory.length != t) {
                    for (; this.NumHistory.indexOf(e) > -1;) e = Math.round(Math.random() * (t - 1));
                    return this.NumHistory.push(e), e
                }
                return e
            }
            return this.NumHistory.push(e), e
        }
    }
}, function(t, e) {
    languages = {
        en: {
            loadMore: "More trending games...",
            share: "Share",
            loadingYourResult: "Loading your result....",
            tryAgain: "try again",
            disclaimer: "All content is provided for entertainment purposes only!",
            bot_title: "english title",
            bot_body: "english body",
            bot_optin: "english optin",
            bot_optout: "english optout"
        },
        ar: {
            loadMore: "المزيد من الألعاب الشائعة ...",
            share: "مشاركة",
            loadingYourResult: "جار تحميل نتيجتك",
            tryAgain: "حاول مرة أخرى",
            disclaimer: "جميع المحتويات موجودة لأغراض الترفيه فقط!"
        },
        br: {
            loadMore: "Mais jogos populares...",
            share: "Compartilhar",
            loadingYourResult: "Carregando seu resultado...",
            tryAgain: "tentar novamente",
            disclaimer: "Todo este conteúdo é disponibilizado apenas com o propósito de entretenimento!",
            bot_title: "portugeish title",
            bot_body: "portugeish body",
            bot_optin: "portugeish optin",
            bot_optout: "portugeish optout"
        },
        hr: {
            loadMore: "Više popularnih igara...",
            share: "Podijeli",
            loadingYourResult: "Učitavanje tvog rezultata...",
            tryAgain: "Pokušaj ponovo",
            disclaimer: "Sadržaj je u potpunosti i isključivo namijenjen za zabavu!"
        },
        cz: {
            loadMore: "Více populárních her...",
            share: "Sdílet",
            loadingYourResult: "Načítává váš výsledek...",
            tryAgain: "zkusit znova",
            disclaimer: "Všechen obsah je poskytován pouze za úèelem zábavy!"
        },
        nl: {
            loadMore: "Meer populaire spelletjes...",
            share: "Delen",
            loadingYourResult: "Je resultaat wordt geladen...",
            tryAgain: "probeer opnieuw",
            disclaimer: "Alle inhoud is slechts bedoeld voor entertainment doeleinden!"
        },
        es: {
            loadMore: "Más juegos populares...",
            share: "Compartir",
            loadingYourResult: "Cargando tu resultado...",
            tryAgain: "Inténtalo de nuevo",
            disclaimer: "¡Todo el contenido que se ofrece aquí tiene el propósito de entretener únicamente!",
            bot_title: "español title",
            bot_body: "español body",
            bot_optin: "español optin",
            bot_optout: "español optout"
        },
        et: {
            loadMore: "Veel uusi mänge...",
            share: "Jaga",
            loadingYourResult: "Sinu tulemuse laadmine...",
            tryAgain: "proovi uuesti",
            disclaimer: "Kogu sisu on mõeldud ainult meelelahutuseks!"
        },
        fr: {
            loadMore: "Plus de jeux tendance...",
            share: "Partager",
            loadingYourResult: "Chargement du résultat...",
            tryAgain: "Refaire le test",
            disclaimer: "Tout le contenu est proposé à des fins de divertissement uniquement!"
        },
        de: {
            loadMore: "Mehr neue Spiele ...",
            share: "Teilen",
            loadingYourResult: "Dein Ergebnis wird berechnet ....",
            tryAgain: "nochmal probieren",
            disclaimer: "Sämtliche Inhalte werden ausschließlich zum Zweck der Unterhaltung zur Verfügung gestellt!"
        },
        gu: {
            loadMore: "વધારે વલણ ગેમ્સ...",
            share: "શેર કરો",
            loadingYourResult: "તમારું પરિણામ લોડ થઈ રહ્યું છે...",
            tryAgain: "ફરીથી પ્રયત્ન કરો",
            disclaimer: "નિવેદન: તમામ કન્ટેન્ટ નો હેતુ ફક્ત મનોરંજન પુરતો જ છે!"
        },
        he: {
            loadMore: "משחקים טרנדיים נוספים...",
            share: "שתפו",
            loadingYourResult: "טוען את התוצאה שלך...",
            tryAgain: "נסה שוב",
            disclaimer: "כל התוכן מסופק למטרות בידור בלבד!"
        },
        hi: {
            loadMore: "अधिक प्रचलन वाले गेम्स",
            share: "साझा करें",
            loadingYourResult: "आपके परिणाम को लोड किया जा रहा है ",
            tryAgain: "पुनः प्रयास करें",
            disclaimer: "अस्वीकरण: सभी सामग्री केवल मनोरंजन हेतु दी गई है!"
        },
        hu: {
            loadMore: "Még több trendi játék...",
            share: "Megosztás",
            loadingYourResult: "Eredményeid betöltése",
            tryAgain: "még egyszer",
            disclaimer: "Az összes közzétett tartalom kizárólag szórakoztatás céljából jött létre!"
        },
        id: {
            loadMore: "Permainan tren lainnya...",
            share: "Bagikan",
            loadingYourResult: "Memuat hasil Anda...",
            tryAgain: "coba lagi",
            disclaimer: "Semua konten disediakan hanya untuk tujuan hiburan!"
        },
        it: {
            loadMore: "Più giochi di tendenza...",
            share: "Condividi",
            loadingYourResult: "Carica il tuo risultato...",
            tryAgain: "Prova ancora",
            disclaimer: "Tutti i contenuti forniti hanno il solo scopo di divertire!"
        },
        kn: {
            loadMore: "ಇನ್ನಷ್ಟು ಟ್ರೆಂಡಿಂಗ್ ಆಟಗಳು...",
            share: "ಹಂಚಿಕೊಳ್ಳಿ",
            loadingYourResult: "ನಿಮ್ಮ ಫಲಿತಾಂಶವನ್ನು ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ...",
            tryAgain: "ಮತ್ತೊಮ್ಮೆ ಪ್ರಯತ್ನಿಸಿ",
            disclaimer: "ಹಕ್ಕು ನಿರಾಕರಣೆ: ಎಲ್ಲ ವಿಷಯವನ್ನು ಕೇವಲ ಮನೋರಂಜನೆಯ ಉದ್ದೇಶದಿಂದ ಕೊಡಲಾಗಿದೆ!"
        },
        mr: {
            loadMore: "अधिक ट्रेंडिंग खेळ...",
            share: "सामायिक",
            loadingYourResult: "तुमची परिणाम लोड करीत आहे...",
            tryAgain: "पुन्हा प्रयत्न करा",
            disclaimer: "अस्वीकृती: सर्व सामग्री ही फक्त मनोरंजनासाठी दिली आहे!"
        },
        ms: {
            loadMore: "Permainan yang lebih popular",
            share: "Kongsi",
            loadingYourResult: "Sedang memuatkan keputusan anda...",
            tryAgain: "Cuba lagi",
            disclaimer: "Penafian: Semua kandungan yang disediakan adalah untuk tujuan hiburan semata-mata!"
        },
        ne: {
            loadMore: "थप प्रचलित खेलहरु...",
            share: "शेयर गर्नुहोस",
            loadingYourResult: "तपाईंको परिणाम लोड गर्दै...",
            tryAgain: "पुन: प्रयास गर्नुहोस्",
            disclaimer: "अस्वीकरण: सम्पूर्ण सामाग्रीहरू मनोरञ्जन उद्देश्यका लागि प्रदान गरिएको छ!"
        },
        ph: {
            loadMore: "Mas marami pang mga larong trending...",
            share: "I-share",
            loadingYourResult: "Nilo-load ang iyong resulta",
            tryAgain: "muling subukan",
            disclaimer: "Disclaimer: Ang lahat ng nilalaman ay para lamang sa libangan!"
        },
        pl: {
            loadMore: "Więcej popularnych gier...",
            share: "Udostępnij",
            loadingYourResult: "Ładowanie Twoich wyników...",
            tryAgain: "Spróbuj ponownie",
            disclaimer: "Wszystkie treści zostały udostępniane wyłącznie w celach rozrywkowych!"
        },
        ro: {
            loadMore: "Mai multe jocuri populare acum...",
            share: "Distribuie",
            loadingYourResult: "Încărcăm rezultatul tău...",
            tryAgain: "Încearcă din nou",
            disclaimer: "Tot conținutul de pe această pagină este oferit doar în scop de divertisment!"
        },
        ru: {
            loadMore: "Больше популярных игр...",
            share: "Поделиться",
            loadingYourResult: "Загружаем ваш результат...",
            tryAgain: "Пройти еще раз",
            disclaimer: "Уведомление: Весь контент предоставляется только для развлекательных целей!"
        },
        sk: {
            loadMore: "Viac populárnych hier...",
            share: "Zdieľať",
            loadingYourResult: "Načítava váš výsledok...",
            tryAgain: "skúsiť znova",
            disclaimer: "Všetok obsah je poskytovaný iba pre účely zábavy!"
        },
        sl: {
            loadMore: "Več popularnih iger...",
            share: "Deli",
            loadingYourResult: "Nalaganje tvojih rezultatov...",
            tryAgain: "poskusi ponovno",
            disclaimer: "Vsa vsebina je na voljo samo za namene zabave!"
        },
        th: {
            loadMore: "เกมส์ที่กำลังนิยมอีกมากมาย...",
            share: "แชร์",
            loadingYourResult: "กำลังรับคำตอบ...",
            tryAgain: "ลองอีกครั้ง",
            disclaimer: "ข้อสงวนสิทธิการใช้งาน: เนื้อหาทุกอย่างจัดทำขึ้นเพื่อความบันเทิงเท่านั้น!"
        },
        uk: {
            loadMore: "Більше популярних ігор...",
            share: "Поділитися",
            loadingYourResult: "Завантажуємо ваш результат...",
            tryAgain: "спробуйте ще раз",
            disclaimer: "Відмова від відповідальності: Всі матеріали надаються тільки для розважальних цілей!"
        },
        vi: {
            loadMore: "Thêm trò chơi đang thịnh hành...",
            share: "Chia sẻ",
            loadingYourResult: "Đang tải kết quả của bạn...",
            tryAgain: "thử lại",
            disclaimer: "Miễn trách: Tất cả nội dung được cung cấp chỉ nhằm mục đích giải trí!"
        }
    }, languages.pt = languages.br, languages.cs = languages.cz, languages.tl = languages.ph, t.exports = languages
}, function(t, e) {
    SCROLL_TOP_OFFSET = 60, t.exports = {
        urlToDataURL: function(t, e) {
            var r = new XMLHttpRequest;
            r.onload = function() {
                var t = new FileReader;
                t.onloadend = function() {
                    e(t.result)
                }, t.readAsDataURL(r.response)
            }, r.open("GET", t), r.responseType = "blob", r.send()
        },
        _scrollToElement: function(t) {
            var e = SCROLL_TOP_OFFSET,
                r = t.offsetTop - e;
            window.scroll({
                top: r,
                left: 0,
                behavior: "smooth"
            })
        }
    }
}, function(t, e, r) {
    var n = r(0),
        o = r(2),
        i = {
            data: {},
            quiz: !1,
            resultImage: {
                image: !1,
                width: !1,
                height: !1
            },
            dataForShare: function() {
                return {
                    result_id: i.data.result_id,
                    generated_result_id: i.data.id,
                    content_set_item_ids: i.data.csi || []
                }
            },
            pollForResultImage: function() {
                return new Promise(function(t, e) {
                    var r = 0,
                        n = !1,
                        a = setInterval(function() {
                            ++r > 30 && clearInterval(a), s()
                        }, 500),
                        s = function() {
                            o.screenshot(i.data.id).then(function(e) {
                                e.image && !n && (clearInterval(a), n = !0, t(e))
                            })
                        }
                })
            },
            display: function() {
                i.pollForResultImage().then(function(t) {
                    window.clearInterval(i._showLoaderInterval), i.resultImage.image = t.image, i.resultImage.width = t.width, i.resultImage.height = t.height;
                    var e = Renderer.getTemplate("result-template-with-image"),
                        r = Renderer.Mustache.render(e, {
                            width: i.resultImage.width,
                            height: i.resultImage.height,
                            src: i.resultImage.image
                        }),
                        o = document.querySelector("#result-wrapper");
                    o.innerHTML = r, o.style.height = "auto";
                    for (var a = document.querySelectorAll(".fb-share, .tryagain "), s = 0; s < a.length; s++) a[s].classList.remove("disabled");
                    n.user.playedQuiz(i.quiz.id), n.tracking.resultViewed(i), setTimeout(n.ads.possibleAdBeforeResult, 300)
                })
            },
            _showLoaderInterval: !1,
            _showLoader: function() {
                document.querySelector("#loader-text").classList.add("typewriter");
                var t = document.querySelectorAll("#loader-images img"),
                    e = 0;
                cycleImages = function() {
                    for (var r = 0; r < t.length; r++) r == e % t.length ? t[r].style.display = "block" : t[r].style.display = "none";
                    e++
                }, this._showLoaderInterval = setInterval(cycleImages, 500), cycleImages()
            },
            load: function(t) {
                i.data = {}, i.quiz = t, document.querySelector("#result").style.display = "block", i._showLoader(), n.user.image.then(function(e) {
                    o.getQuizResultWithPicture(t.id, {
                        answers: t.selectedAnswers,
                        user: {
                            image: e,
                            name: n.user.name
                        },
                        gender: n.user.gender,
                        first_name: n.user.name
                    }).then(function(t) {
                        i.data = t, i.display()
                    })
                })
            }
        };
    t.exports = i
}, function(t, e, r) {
    "use strict";
    var n = r(38),
        o = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
        i = Object.prototype.toString,
        a = Array.prototype.concat,
        s = Object.defineProperty,
        u = s && function() {
            var t = {};
            try {
                for (var e in s(t, "x", {
                        enumerable: !1,
                        value: t
                    }), t) return !1;
                return t.x === t
            } catch (t) {
                return !1
            }
        }(),
        l = function(t, e, r, n) {
            (!(e in t) || function(t) {
                return "function" == typeof t && "[object Function]" === i.call(t)
            }(n) && n()) && (u ? s(t, e, {
                configurable: !0,
                enumerable: !1,
                value: r,
                writable: !0
            }) : t[e] = r)
        },
        c = function(t, e) {
            var r = arguments.length > 2 ? arguments[2] : {},
                i = n(e);
            o && (i = a.call(i, Object.getOwnPropertySymbols(e)));
            for (var s = 0; s < i.length; s += 1) l(t, i[s], e[i[s]], r[i[s]])
        };
    c.supportsDescriptors = !!u, t.exports = c
}, function(t, e, r) {
    "use strict";
    r(5)();
    var n = r(40),
        o = r(1),
        i = function(t, e) {
            return new t(function(t) {
                t(e)
            })
        },
        a = Promise,
        s = o.call(Function.call, a.prototype.then),
        u = function(t) {
            s(this, null, function() {});
            var e = n.SpeciesConstructor(this, a),
                r = t,
                o = t;
            return n.IsCallable(t) && (r = function(t, e) {
                return function(r) {
                    var n = e();
                    return i(t, n).then(function() {
                        return r
                    })
                }
            }(e, t), o = function(t, e) {
                return function(r) {
                    var n = e();
                    return i(t, n).then(function() {
                        throw r
                    })
                }
            }(e, t)), this.then(r, o)
        };
    if (Object.getOwnPropertyDescriptor) {
        var l = Object.getOwnPropertyDescriptor(u, "name");
        l && l.configurable && Object.defineProperty(u, "name", {
            configurable: !0,
            value: "finally"
        })
    }
    t.exports = u
}, function(t, e) {
    t.exports = function(t) {
        return null === t || "function" != typeof t && "object" != typeof t
    }
}, function(t, e, r) {
    "use strict";
    var n = Object.getOwnPropertyDescriptor ? function() {
            return Object.getOwnPropertyDescriptor(arguments, "callee").get
        }() : function() {
            throw new TypeError
        },
        o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator,
        i = Object.getPrototypeOf || function(t) {
            return t.__proto__
        },
        a = void 0,
        s = "undefined" == typeof Uint8Array ? void 0 : i(Uint8Array),
        u = {
            "$ %Array%": Array,
            "$ %ArrayBuffer%": "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer,
            "$ %ArrayBufferPrototype%": "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer.prototype,
            "$ %ArrayIteratorPrototype%": o ? i([][Symbol.iterator]()) : void 0,
            "$ %ArrayPrototype%": Array.prototype,
            "$ %ArrayProto_entries%": Array.prototype.entries,
            "$ %ArrayProto_forEach%": Array.prototype.forEach,
            "$ %ArrayProto_keys%": Array.prototype.keys,
            "$ %ArrayProto_values%": Array.prototype.values,
            "$ %AsyncFromSyncIteratorPrototype%": void 0,
            "$ %AsyncFunction%": void 0,
            "$ %AsyncFunctionPrototype%": void 0,
            "$ %AsyncGenerator%": void 0,
            "$ %AsyncGeneratorFunction%": void 0,
            "$ %AsyncGeneratorPrototype%": void 0,
            "$ %AsyncIteratorPrototype%": a && o && Symbol.asyncIterator ? a[Symbol.asyncIterator]() : void 0,
            "$ %Atomics%": "undefined" == typeof Atomics ? void 0 : Atomics,
            "$ %Boolean%": Boolean,
            "$ %BooleanPrototype%": Boolean.prototype,
            "$ %DataView%": "undefined" == typeof DataView ? void 0 : DataView,
            "$ %DataViewPrototype%": "undefined" == typeof DataView ? void 0 : DataView.prototype,
            "$ %Date%": Date,
            "$ %DatePrototype%": Date.prototype,
            "$ %decodeURI%": decodeURI,
            "$ %decodeURIComponent%": decodeURIComponent,
            "$ %encodeURI%": encodeURI,
            "$ %encodeURIComponent%": encodeURIComponent,
            "$ %Error%": Error,
            "$ %ErrorPrototype%": Error.prototype,
            "$ %eval%": eval,
            "$ %EvalError%": EvalError,
            "$ %EvalErrorPrototype%": EvalError.prototype,
            "$ %Float32Array%": "undefined" == typeof Float32Array ? void 0 : Float32Array,
            "$ %Float32ArrayPrototype%": "undefined" == typeof Float32Array ? void 0 : Float32Array.prototype,
            "$ %Float64Array%": "undefined" == typeof Float64Array ? void 0 : Float64Array,
            "$ %Float64ArrayPrototype%": "undefined" == typeof Float64Array ? void 0 : Float64Array.prototype,
            "$ %Function%": Function,
            "$ %FunctionPrototype%": Function.prototype,
            "$ %Generator%": void 0,
            "$ %GeneratorFunction%": void 0,
            "$ %GeneratorPrototype%": void 0,
            "$ %Int8Array%": "undefined" == typeof Int8Array ? void 0 : Int8Array,
            "$ %Int8ArrayPrototype%": "undefined" == typeof Int8Array ? void 0 : Int8Array.prototype,
            "$ %Int16Array%": "undefined" == typeof Int16Array ? void 0 : Int16Array,
            "$ %Int16ArrayPrototype%": "undefined" == typeof Int16Array ? void 0 : Int8Array.prototype,
            "$ %Int32Array%": "undefined" == typeof Int32Array ? void 0 : Int32Array,
            "$ %Int32ArrayPrototype%": "undefined" == typeof Int32Array ? void 0 : Int32Array.prototype,
            "$ %isFinite%": isFinite,
            "$ %isNaN%": isNaN,
            "$ %IteratorPrototype%": o ? i(i([][Symbol.iterator]())) : void 0,
            "$ %JSON%": JSON,
            "$ %JSONParse%": JSON.parse,
            "$ %Map%": "undefined" == typeof Map ? void 0 : Map,
            "$ %MapIteratorPrototype%": "undefined" != typeof Map && o ? i((new Map)[Symbol.iterator]()) : void 0,
            "$ %MapPrototype%": "undefined" == typeof Map ? void 0 : Map.prototype,
            "$ %Math%": Math,
            "$ %Number%": Number,
            "$ %NumberPrototype%": Number.prototype,
            "$ %Object%": Object,
            "$ %ObjectPrototype%": Object.prototype,
            "$ %ObjProto_toString%": Object.prototype.toString,
            "$ %ObjProto_valueOf%": Object.prototype.valueOf,
            "$ %parseFloat%": parseFloat,
            "$ %parseInt%": parseInt,
            "$ %Promise%": "undefined" == typeof Promise ? void 0 : Promise,
            "$ %PromisePrototype%": "undefined" == typeof Promise ? void 0 : Promise.prototype,
            "$ %PromiseProto_then%": "undefined" == typeof Promise ? void 0 : Promise.prototype.then,
            "$ %Promise_all%": "undefined" == typeof Promise ? void 0 : Promise.all,
            "$ %Promise_reject%": "undefined" == typeof Promise ? void 0 : Promise.reject,
            "$ %Promise_resolve%": "undefined" == typeof Promise ? void 0 : Promise.resolve,
            "$ %Proxy%": "undefined" == typeof Proxy ? void 0 : Proxy,
            "$ %RangeError%": RangeError,
            "$ %RangeErrorPrototype%": RangeError.prototype,
            "$ %ReferenceError%": ReferenceError,
            "$ %ReferenceErrorPrototype%": ReferenceError.prototype,
            "$ %Reflect%": "undefined" == typeof Reflect ? void 0 : Reflect,
            "$ %RegExp%": RegExp,
            "$ %RegExpPrototype%": RegExp.prototype,
            "$ %Set%": "undefined" == typeof Set ? void 0 : Set,
            "$ %SetIteratorPrototype%": "undefined" != typeof Set && o ? i((new Set)[Symbol.iterator]()) : void 0,
            "$ %SetPrototype%": "undefined" == typeof Set ? void 0 : Set.prototype,
            "$ %SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer,
            "$ %SharedArrayBufferPrototype%": "undefined" == typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer.prototype,
            "$ %String%": String,
            "$ %StringIteratorPrototype%": o ? i("" [Symbol.iterator]()) : void 0,
            "$ %StringPrototype%": String.prototype,
            "$ %Symbol%": o ? Symbol : void 0,
            "$ %SymbolPrototype%": o ? Symbol.prototype : void 0,
            "$ %SyntaxError%": SyntaxError,
            "$ %SyntaxErrorPrototype%": SyntaxError.prototype,
            "$ %ThrowTypeError%": n,
            "$ %TypedArray%": s,
            "$ %TypedArrayPrototype%": s ? s.prototype : void 0,
            "$ %TypeError%": TypeError,
            "$ %TypeErrorPrototype%": TypeError.prototype,
            "$ %Uint8Array%": "undefined" == typeof Uint8Array ? void 0 : Uint8Array,
            "$ %Uint8ArrayPrototype%": "undefined" == typeof Uint8Array ? void 0 : Uint8Array.prototype,
            "$ %Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? void 0 : Uint8ClampedArray,
            "$ %Uint8ClampedArrayPrototype%": "undefined" == typeof Uint8ClampedArray ? void 0 : Uint8ClampedArray.prototype,
            "$ %Uint16Array%": "undefined" == typeof Uint16Array ? void 0 : Uint16Array,
            "$ %Uint16ArrayPrototype%": "undefined" == typeof Uint16Array ? void 0 : Uint16Array.prototype,
            "$ %Uint32Array%": "undefined" == typeof Uint32Array ? void 0 : Uint32Array,
            "$ %Uint32ArrayPrototype%": "undefined" == typeof Uint32Array ? void 0 : Uint32Array.prototype,
            "$ %URIError%": URIError,
            "$ %URIErrorPrototype%": URIError.prototype,
            "$ %WeakMap%": "undefined" == typeof WeakMap ? void 0 : WeakMap,
            "$ %WeakMapPrototype%": "undefined" == typeof WeakMap ? void 0 : WeakMap.prototype,
            "$ %WeakSet%": "undefined" == typeof WeakSet ? void 0 : WeakSet,
            "$ %WeakSetPrototype%": "undefined" == typeof WeakSet ? void 0 : WeakSet.prototype
        };
    t.exports = function(t, e) {
        if (arguments.length > 1 && "boolean" != typeof e) throw new TypeError('"allowMissing" argument must be a boolean');
        var r = "$ " + t;
        if (!(r in u)) throw new SyntaxError("intrinsic " + t + " does not exist!");
        if (void 0 === u[r] && !e) throw new TypeError("intrinsic " + t + " exists, but is not available. Please file an issue!");
        return u[r]
    }
}, function(t, e) {
    t.exports = Number.isNaN || function(t) {
        return t != t
    }
}, function(t, e) {
    var r = Number.isNaN || function(t) {
        return t != t
    };
    t.exports = Number.isFinite || function(t) {
        return "number" == typeof t && !r(t) && t !== 1 / 0 && t !== -1 / 0
    }
}, function(t, e, r) {
    var n = r(1).call(Function.call, Object.prototype.hasOwnProperty),
        o = Object.assign;
    t.exports = function(t, e) {
        if (o) return o(t, e);
        for (var r in e) n(e, r) && (t[r] = e[r]);
        return t
    }
}, function(t, e) {
    t.exports = function(t) {
        return t >= 0 ? 1 : -1
    }
}, function(t, e) {
    t.exports = function(t, e) {
        var r = t % e;
        return Math.floor(r >= 0 ? r : r + e)
    }
}, function(t, e, r) {
    "use strict";
    var n = r(5),
        o = r(14);
    t.exports = function() {
        return n(), "function" == typeof Promise.prototype.finally ? Promise.prototype.finally : o
    }
}, function(t, e, r) {
    ! function() {
        "use strict";
        t.exports = {
            polyfill: function() {
                var t = window,
                    e = document;
                if (!("scrollBehavior" in e.documentElement.style && !0 !== t.__forceSmoothScrollPolyfill__)) {
                    var r = t.HTMLElement || t.Element,
                        n = 468,
                        o = {
                            scroll: t.scroll || t.scrollTo,
                            scrollBy: t.scrollBy,
                            elementScroll: r.prototype.scroll || s,
                            scrollIntoView: r.prototype.scrollIntoView
                        },
                        i = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now,
                        a = function(t) {
                            return new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(t)
                        }(t.navigator.userAgent) ? 1 : 0;
                    t.scroll = t.scrollTo = function() {
                        void 0 !== arguments[0] && (!0 !== u(arguments[0]) ? d.call(t, e.body, void 0 !== arguments[0].left ? ~~arguments[0].left : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : t.scrollY || t.pageYOffset) : o.scroll.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : t.scrollY || t.pageYOffset))
                    }, t.scrollBy = function() {
                        void 0 !== arguments[0] && (u(arguments[0]) ? o.scrollBy.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : d.call(t, e.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset)))
                    }, r.prototype.scroll = r.prototype.scrollTo = function() {
                        if (void 0 !== arguments[0])
                            if (!0 !== u(arguments[0])) {
                                var t = arguments[0].left,
                                    e = arguments[0].top;
                                d.call(this, this, void 0 === t ? this.scrollLeft : ~~t, void 0 === e ? this.scrollTop : ~~e)
                            } else {
                                if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                                o.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                            }
                    }, r.prototype.scrollBy = function() {
                        void 0 !== arguments[0] && (!0 !== u(arguments[0]) ? this.scroll({
                            left: ~~arguments[0].left + this.scrollLeft,
                            top: ~~arguments[0].top + this.scrollTop,
                            behavior: arguments[0].behavior
                        }) : o.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                    }, r.prototype.scrollIntoView = function() {
                        if (!0 !== u(arguments[0])) {
                            var r = function(t) {
                                    var r;
                                    do {
                                        r = (t = t.parentNode) === e.body
                                    } while (!1 === r && !1 === p(t));
                                    return r = null, t
                                }(this),
                                n = r.getBoundingClientRect(),
                                i = this.getBoundingClientRect();
                            r !== e.body ? (d.call(this, r, r.scrollLeft + i.left - n.left, r.scrollTop + i.top - n.top), "fixed" !== t.getComputedStyle(r).position && t.scrollBy({
                                left: n.left,
                                top: n.top,
                                behavior: "smooth"
                            })) : t.scrollBy({
                                left: i.left,
                                top: i.top,
                                behavior: "smooth"
                            })
                        } else o.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                    }
                }

                function s(t, e) {
                    this.scrollLeft = t, this.scrollTop = e
                }

                function u(t) {
                    if (null === t || "object" != typeof t || void 0 === t.behavior || "auto" === t.behavior || "instant" === t.behavior) return !0;
                    if ("object" == typeof t && "smooth" === t.behavior) return !1;
                    throw new TypeError("behavior member of ScrollOptions " + t.behavior + " is not a valid value for enumeration ScrollBehavior.")
                }

                function l(t, e) {
                    return "Y" === e ? t.clientHeight + a < t.scrollHeight : "X" === e ? t.clientWidth + a < t.scrollWidth : void 0
                }

                function c(e, r) {
                    var n = t.getComputedStyle(e, null)["overflow" + r];
                    return "auto" === n || "scroll" === n
                }

                function p(t) {
                    var e = l(t, "Y") && c(t, "Y"),
                        r = l(t, "X") && c(t, "X");
                    return e || r
                }

                function f(e) {
                    var r, o, a, s = (i() - e.startTime) / n;
                    r = function(t) {
                        return .5 * (1 - Math.cos(Math.PI * t))
                    }(s = s > 1 ? 1 : s), o = e.startX + (e.x - e.startX) * r, a = e.startY + (e.y - e.startY) * r, e.method.call(e.scrollable, o, a), o === e.x && a === e.y || t.requestAnimationFrame(f.bind(t, e))
                }

                function d(r, n, a) {
                    var u, l, c, p, d = i();
                    r === e.body ? (u = t, l = t.scrollX || t.pageXOffset, c = t.scrollY || t.pageYOffset, p = o.scroll) : (u = r, l = r.scrollLeft, c = r.scrollTop, p = s), f({
                        scrollable: u,
                        method: p,
                        startTime: d,
                        startX: l,
                        startY: c,
                        x: n,
                        y: a
                    })
                }
            }
        }
    }()
}, function(t, e) {
    Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
            value: function(t, e) {
                if (null == this) throw new TypeError('"this" is null or not defined');
                var r = Object(this),
                    n = r.length >>> 0;
                if (0 === n) return !1;
                var o = 0 | e,
                    i = Math.max(o >= 0 ? o : n - Math.abs(o), 0);

                function a(t, e) {
                    return t === e || "number" == typeof t && "number" == typeof e && isNaN(t) && isNaN(e)
                }
                for (; i < n;) {
                    if (a(r[i], t)) return !0;
                    i++
                }
                return !1
            }
        }), "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
            value: function(t, e) {
                "use strict";
                if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                for (var r = Object(t), n = 1; n < arguments.length; n++) {
                    var o = arguments[n];
                    if (null != o)
                        for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (r[i] = o[i])
                }
                return r
            },
            writable: !0,
            configurable: !0
        }), Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(t) {
            var e = this;
            if (!document.documentElement.contains(e)) return null;
            do {
                if (e.matches(t)) return e;
                e = e.parentElement || e.parentNode
            } while (null !== e && 1 === e.nodeType);
            return null
        }), Object.keys || (Object.keys = function() {
            "use strict";
            var t = Object.prototype.hasOwnProperty,
                e = !{
                    toString: null
                }.propertyIsEnumerable("toString"),
                r = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                n = r.length;
            return function(o) {
                if ("function" != typeof o && ("object" != typeof o || null === o)) throw new TypeError("Object.keys called on non-object");
                var i, a, s = [];
                for (i in o) t.call(o, i) && s.push(i);
                if (e)
                    for (a = 0; a < n; a++) t.call(o, r[a]) && s.push(r[a]);
                return s
            }
        }())
        /*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
        , "document" in self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) || function(t) {
            "use strict";
            if ("Element" in t) {
                var e = t.Element.prototype,
                    r = Object,
                    n = String.prototype.trim || function() {
                        return this.replace(/^\s+|\s+$/g, "")
                    },
                    o = Array.prototype.indexOf || function(t) {
                        for (var e = 0, r = this.length; e < r; e++)
                            if (e in this && this[e] === t) return e;
                        return -1
                    },
                    i = function(t, e) {
                        this.name = t, this.code = DOMException[t], this.message = e
                    },
                    a = function(t, e) {
                        if ("" === e) throw new i("SYNTAX_ERR", "The token must not be empty.");
                        if (/\s/.test(e)) throw new i("INVALID_CHARACTER_ERR", "The token must not contain space characters.");
                        return o.call(t, e)
                    },
                    s = function(t) {
                        for (var e = n.call(t.getAttribute("class") || ""), r = e ? e.split(/\s+/) : [], o = 0, i = r.length; o < i; o++) this.push(r[o]);
                        this._updateClassName = function() {
                            t.setAttribute("class", this.toString())
                        }
                    },
                    u = s.prototype = [],
                    l = function() {
                        return new s(this)
                    };
                if (i.prototype = Error.prototype, u.item = function(t) {
                        return this[t] || null
                    }, u.contains = function(t) {
                        return ~a(this, t + "")
                    }, u.add = function() {
                        var t, e = arguments,
                            r = 0,
                            n = e.length,
                            o = !1;
                        do {
                            t = e[r] + "", ~a(this, t) || (this.push(t), o = !0)
                        } while (++r < n);
                        o && this._updateClassName()
                    }, u.remove = function() {
                        var t, e, r = arguments,
                            n = 0,
                            o = r.length,
                            i = !1;
                        do {
                            for (t = r[n] + "", e = a(this, t); ~e;) this.splice(e, 1), i = !0, e = a(this, t)
                        } while (++n < o);
                        i && this._updateClassName()
                    }, u.toggle = function(t, e) {
                        var r = this.contains(t),
                            n = r ? !0 !== e && "remove" : !1 !== e && "add";
                        return n && this[n](t), !0 === e || !1 === e ? e : !r
                    }, u.replace = function(t, e) {
                        var r = a(t + "");
                        ~r && (this.splice(r, 1, e), this._updateClassName())
                    }, u.toString = function() {
                        return this.join(" ")
                    }, r.defineProperty) {
                    var c = {
                        get: l,
                        enumerable: !0,
                        configurable: !0
                    };
                    try {
                        r.defineProperty(e, "classList", c)
                    } catch (t) {
                        void 0 !== t.number && -2146823252 !== t.number || (c.enumerable = !1, r.defineProperty(e, "classList", c))
                    }
                } else r.prototype.__defineGetter__ && e.__defineGetter__("classList", l)
            }
        }(self), function() {
            "use strict";
            var t = document.createElement("_");
            if (t.classList.add("c1", "c2"), !t.classList.contains("c2")) {
                var e = function(t) {
                    var e = DOMTokenList.prototype[t];
                    DOMTokenList.prototype[t] = function(t) {
                        var r, n = arguments.length;
                        for (r = 0; r < n; r++) t = arguments[r], e.call(this, t)
                    }
                };
                e("add"), e("remove")
            }
            if (t.classList.toggle("c3", !1), t.classList.contains("c3")) {
                var r = DOMTokenList.prototype.toggle;
                DOMTokenList.prototype.toggle = function(t, e) {
                    return 1 in arguments && !this.contains(t) == !e ? e : r.call(this, t)
                }
            }
            "replace" in document.createElement("_").classList || (DOMTokenList.prototype.replace = function(t, e) {
                var r = this.toString().split(" "),
                    n = r.indexOf(t + "");
                ~n && (r = r.slice(n), this.remove.apply(this, r), this.add(e), this.add.apply(this, r.slice(1)))
            }), t = null
        }())
}, function(t, e, r) {
    var n = r(2),
        o = r(0),
        i = r(3);
    Related = {
        _data: !1,
        apiData: function() {
            return new Promise(function(t, e) {
                Related._data ? t(Related._data) : n.getQuizzes().then(function(e) {
                    Related._data = e, e.country && (o.user.country = e.country), t(Related._data)
                })
            })
        },
        relatedQuizzesHtml: function(t) {
            var e = (t = t || {}).featureFirst || !1,
                r = t.currentQuizId || "";
            return new Promise(function(t, n) {
                Related.quizList(r).then(function(r) {
                    var n = {
                        quizzes: r,
                        featured_quiz: !1
                    };
                    e && (n = {
                        featured_quiz: n.quizzes.shift(),
                        quizzes: n.quizzes
                    });
                    var o = i.getTemplate("related-partial"),
                        a = {
                            featuredPartial: i.getTemplate("featured-partial")
                        },
                        s = i.Mustache.to_html(o, n, a);
                    t(s)
                })
            })
        },
        quizList: function(t) {
            return new Promise(function(e, r) {
                Related.apiData().then(function(r) {
                    for (var n in genderData = JSON.parse(JSON.stringify(r[o.user.gender])), genderData) genderData[n].position = parseInt(n) + Math.floor(4 * Math.random()), o.user.hasPlayedQuiz(genderData[n].id) && (genderData[n].position += 20), genderData[n].id == t && (genderData[n].position += 500);
                    randomizedQuizzes = genderData.sort(function(t, e) {
                        return t.position - e.position
                    }), e(randomizedQuizzes), o.user.setMessageQuizzes(randomizedQuizzes)
                })
            })
        }
    }, t.exports = Related
}, function(t, e, r) {
    var n = r(27),
        o = r(11),
        i = r(9);
    User = {
        name: "",
        id: "",
        image: !1,
        fbLocale: !1,
        _imageUrl: "",
        gender: "none",
        country: "NA",
        Env: !1,
        recircList: [],
        init: function(t) {
            return this.Env = t, new Promise(function(t, e) {
                User.sessionId = n(), User.id = FBInstant.player.getID(), User.name = FBInstant.player.getName(), User._imageUrl = FBInstant.player.getPhoto(), User.fbLocale = FBInstant.getLocale() || "xx_XX", User.timezone = (new Date).getTimezoneOffset() || 0, FBInstant.player.getDataAsync(["takenQuizzes"]).then(function(e) {
                    console.log("FB Player data is loaded", e), User._extractFbData(e), FBInstant.logEvent("userBeforeResolve"), t()
                }), User._imageToBase64()
            })
        },
        _extractFbData: function(t) {
            try {
                if ("length" in t.takenQuizzes)
                    for (var e = 0; e < t.takenQuizzes.length; e++) {
                        var r = t.takenQuizzes[e];
                        User._playedQuizIds[r] = !0
                    }
                console.log(User._playedQuizIds)
            } catch (t) {
                console.log("Error when parsing data from Facebook", t.message)
            }
        },
        dataForShare: function() {
            return {
                gender: this.gender,
                country: this.country,
                user_id: this.id
            }
        },
        setMessageQuizzes: function(t) {
            var e = 15;
            t.length < 15 && (e = t.length), i.resetHistory();
            for (var r = [], n = [], o = 0; o < 6; o++) r.push(i.generate(e));
            for (o = 0; o < r.length; o++) {
                var a = t[r[o]];
                n.push(a.id)
            }
            User.recircList = n, User.setSessionData()
        },
        setSessionData: function(t) {
            t = t || {};
            var e = Object.assign({}, t, {
                locale: this.Env.locale,
                quiz_ids: User.recircList,
                session_id: User.sessionId
            });
            console.log("setting session data", e), FBInstant.setSessionData(e)
        },
        _playedQuizIds: {},
        playedQuiz: function(t) {
            this._playedQuizIds[t] = !0, FBInstant.player.setDataAsync({
                takenQuizzes: Object.keys(this._playedQuizIds)
            })
        },
        hasPlayedQuiz: function(t) {
            return Object.keys(this._playedQuizIds).indexOf(t) > -1
        },
        _imageToBase64: function() {
            this.image = new Promise(function(t, e) {
                var r = setInterval(function() {
                        n()
                    }, 300),
                    n = function() {
                        o.urlToDataURL(User._imageUrl, function(e) {
                            t(e), clearInterval(r)
                        })
                    };
                n()
            })
        }
    }, t.exports = User
}, function(t, e, r) {
    var n, o, i = r(28),
        a = r(29),
        s = 0,
        u = 0;
    t.exports = function(t, e, r) {
        var l = e && r || 0,
            c = e || [],
            p = (t = t || {}).node || n,
            f = void 0 !== t.clockseq ? t.clockseq : o;
        if (null == p || null == f) {
            var d = i();
            null == p && (p = n = [1 | d[0], d[1], d[2], d[3], d[4], d[5]]), null == f && (f = o = 16383 & (d[6] << 8 | d[7]))
        }
        var y = void 0 !== t.msecs ? t.msecs : (new Date).getTime(),
            h = void 0 !== t.nsecs ? t.nsecs : u + 1,
            g = y - s + (h - u) / 1e4;
        if (g < 0 && void 0 === t.clockseq && (f = f + 1 & 16383), (g < 0 || y > s) && void 0 === t.nsecs && (h = 0), h >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        s = y, u = h, o = f;
        var v = (1e4 * (268435455 & (y += 122192928e5)) + h) % 4294967296;
        c[l++] = v >>> 24 & 255, c[l++] = v >>> 16 & 255, c[l++] = v >>> 8 & 255, c[l++] = 255 & v;
        var m = y / 4294967296 * 1e4 & 268435455;
        c[l++] = m >>> 8 & 255, c[l++] = 255 & m, c[l++] = m >>> 24 & 15 | 16, c[l++] = m >>> 16 & 255, c[l++] = f >>> 8 | 128, c[l++] = 255 & f;
        for (var b = 0; b < 6; ++b) c[l + b] = p[b];
        return e || a(c)
    }
}, function(t, e) {
    var r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
    if (r) {
        var n = new Uint8Array(16);
        t.exports = function() {
            return r(n), n
        }
    } else {
        var o = new Array(16);
        t.exports = function() {
            for (var t, e = 0; e < 16; e++) 0 == (3 & e) && (t = 4294967296 * Math.random()), o[e] = t >>> ((3 & e) << 3) & 255;
            return o
        }
    }
}, function(t, e) {
    for (var r = [], n = 0; n < 256; ++n) r[n] = (n + 256).toString(16).substr(1);
    t.exports = function(t, e) {
        var n = e || 0,
            o = r;
        return [o[t[n++]], o[t[n++]], o[t[n++]], o[t[n++]], "-", o[t[n++]], o[t[n++]], "-", o[t[n++]], o[t[n++]], "-", o[t[n++]], o[t[n++]], "-", o[t[n++]], o[t[n++]], o[t[n++]], o[t[n++]], o[t[n++]], o[t[n++]]].join("")
    }
}, function(t, e, r) {
    var n, o, i;
    /*!
     * mustache.js - Logic-less {{mustache}} templates with JavaScript
     * http://github.com/janl/mustache.js
     */
    /*!
     * mustache.js - Logic-less {{mustache}} templates with JavaScript
     * http://github.com/janl/mustache.js
     */
    ! function(r, a) {
        e && "string" != typeof e.nodeName ? a(e) : (o = [e], void 0 === (i = "function" == typeof(n = a) ? n.apply(e, o) : n) || (t.exports = i))
    }(0, function(t) {
        var e = Object.prototype.toString,
            r = Array.isArray || function(t) {
                return "[object Array]" === e.call(t)
            };

        function n(t) {
            return "function" == typeof t
        }

        function o(t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        }

        function i(t, e) {
            return null != t && "object" == typeof t && e in t
        }

        function a(t, e) {
            return null != t && "object" != typeof t && t.hasOwnProperty && t.hasOwnProperty(e)
        }
        var s = RegExp.prototype.test;
        var u = /\S/;

        function l(t) {
            return ! function(t, e) {
                return s.call(t, e)
            }(u, t)
        }
        var c = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;",
            "`": "&#x60;",
            "=": "&#x3D;"
        };
        var p = /\s*/,
            f = /\s+/,
            d = /\s*=/,
            y = /\s*\}/,
            h = /#|\^|\/|>|\{|&|=|!/;

        function g(t) {
            this.string = t, this.tail = t, this.pos = 0
        }

        function v(t, e) {
            this.view = t, this.cache = {
                ".": this.view
            }, this.parent = e
        }

        function m() {
            this.cache = {}
        }
        g.prototype.eos = function() {
            return "" === this.tail
        }, g.prototype.scan = function(t) {
            var e = this.tail.match(t);
            if (!e || 0 !== e.index) return "";
            var r = e[0];
            return this.tail = this.tail.substring(r.length), this.pos += r.length, r
        }, g.prototype.scanUntil = function(t) {
            var e, r = this.tail.search(t);
            switch (r) {
                case -1:
                    e = this.tail, this.tail = "";
                    break;
                case 0:
                    e = "";
                    break;
                default:
                    e = this.tail.substring(0, r), this.tail = this.tail.substring(r)
            }
            return this.pos += e.length, e
        }, v.prototype.push = function(t) {
            return new v(t, this)
        }, v.prototype.lookup = function(t) {
            var e, r = this.cache;
            if (r.hasOwnProperty(t)) e = r[t];
            else {
                for (var o, s, u, l = this, c = !1; l;) {
                    if (t.indexOf(".") > 0)
                        for (o = l.view, s = t.split("."), u = 0; null != o && u < s.length;) u === s.length - 1 && (c = i(o, s[u]) || a(o, s[u])), o = o[s[u++]];
                    else o = l.view[t], c = i(l.view, t);
                    if (c) {
                        e = o;
                        break
                    }
                    l = l.parent
                }
                r[t] = e
            }
            return n(e) && (e = e.call(this.view)), e
        }, m.prototype.clearCache = function() {
            this.cache = {}
        }, m.prototype.parse = function(e, n) {
            var i = this.cache,
                a = e + ":" + (n || t.tags).join(":"),
                s = i[a];
            return null == s && (s = i[a] = function(e, n) {
                if (!e) return [];
                var i, a, s, u = [],
                    c = [],
                    v = [],
                    m = !1,
                    b = !1;

                function w() {
                    if (m && !b)
                        for (; v.length;) delete c[v.pop()];
                    else v = [];
                    m = !1, b = !1
                }

                function S(t) {
                    if ("string" == typeof t && (t = t.split(f, 2)), !r(t) || 2 !== t.length) throw new Error("Invalid tags: " + t);
                    i = new RegExp(o(t[0]) + "\\s*"), a = new RegExp("\\s*" + o(t[1])), s = new RegExp("\\s*" + o("}" + t[1]))
                }
                S(n || t.tags);
                for (var P, O, A, I, j, T, E = new g(e); !E.eos();) {
                    if (P = E.pos, A = E.scanUntil(i))
                        for (var _ = 0, z = A.length; _ < z; ++_) l(I = A.charAt(_)) ? v.push(c.length) : b = !0, c.push(["text", I, P, P + 1]), P += 1, "\n" === I && w();
                    if (!E.scan(i)) break;
                    if (m = !0, O = E.scan(h) || "name", E.scan(p), "=" === O ? (A = E.scanUntil(d), E.scan(d), E.scanUntil(a)) : "{" === O ? (A = E.scanUntil(s), E.scan(y), E.scanUntil(a), O = "&") : A = E.scanUntil(a), !E.scan(a)) throw new Error("Unclosed tag at " + E.pos);
                    if (j = [O, A, P, E.pos], c.push(j), "#" === O || "^" === O) u.push(j);
                    else if ("/" === O) {
                        if (!(T = u.pop())) throw new Error('Unopened section "' + A + '" at ' + P);
                        if (T[1] !== A) throw new Error('Unclosed section "' + T[1] + '" at ' + P)
                    } else "name" === O || "{" === O || "&" === O ? b = !0 : "=" === O && S(A)
                }
                if (T = u.pop()) throw new Error('Unclosed section "' + T[1] + '" at ' + E.pos);
                return function(t) {
                    for (var e, r = [], n = r, o = [], i = 0, a = t.length; i < a; ++i) switch ((e = t[i])[0]) {
                        case "#":
                        case "^":
                            n.push(e), o.push(e), n = e[4] = [];
                            break;
                        case "/":
                            o.pop()[5] = e[2], n = o.length > 0 ? o[o.length - 1][4] : r;
                            break;
                        default:
                            n.push(e)
                    }
                    return r
                }(function(t) {
                    for (var e, r, n = [], o = 0, i = t.length; o < i; ++o)(e = t[o]) && ("text" === e[0] && r && "text" === r[0] ? (r[1] += e[1], r[3] = e[3]) : (n.push(e), r = e));
                    return n
                }(c))
            }(e, n)), s
        }, m.prototype.render = function(t, e, r, n) {
            var o = this.parse(t, n),
                i = e instanceof v ? e : new v(e);
            return this.renderTokens(o, i, r, t)
        }, m.prototype.renderTokens = function(t, e, r, n) {
            for (var o, i, a, s = "", u = 0, l = t.length; u < l; ++u) a = void 0, "#" === (i = (o = t[u])[0]) ? a = this.renderSection(o, e, r, n) : "^" === i ? a = this.renderInverted(o, e, r, n) : ">" === i ? a = this.renderPartial(o, e, r, n) : "&" === i ? a = this.unescapedValue(o, e) : "name" === i ? a = this.escapedValue(o, e) : "text" === i && (a = this.rawValue(o)), void 0 !== a && (s += a);
            return s
        }, m.prototype.renderSection = function(t, e, o, i) {
            var a = this,
                s = "",
                u = e.lookup(t[1]);
            if (u) {
                if (r(u))
                    for (var l = 0, c = u.length; l < c; ++l) s += this.renderTokens(t[4], e.push(u[l]), o, i);
                else if ("object" == typeof u || "string" == typeof u || "number" == typeof u) s += this.renderTokens(t[4], e.push(u), o, i);
                else if (n(u)) {
                    if ("string" != typeof i) throw new Error("Cannot use higher-order sections without the original template");
                    null != (u = u.call(e.view, i.slice(t[3], t[5]), function(t) {
                        return a.render(t, e, o)
                    })) && (s += u)
                } else s += this.renderTokens(t[4], e, o, i);
                return s
            }
        }, m.prototype.renderInverted = function(t, e, n, o) {
            var i = e.lookup(t[1]);
            if (!i || r(i) && 0 === i.length) return this.renderTokens(t[4], e, n, o)
        }, m.prototype.renderPartial = function(t, e, r) {
            if (r) {
                var o = n(r) ? r(t[1]) : r[t[1]];
                return null != o ? this.renderTokens(this.parse(o), e, r, o) : void 0
            }
        }, m.prototype.unescapedValue = function(t, e) {
            var r = e.lookup(t[1]);
            if (null != r) return r
        }, m.prototype.escapedValue = function(e, r) {
            var n = r.lookup(e[1]);
            if (null != n) return t.escape(n)
        }, m.prototype.rawValue = function(t) {
            return t[1]
        }, t.name = "mustache.js", t.version = "3.0.0", t.tags = ["{{", "}}"];
        var b = new m;
        return t.clearCache = function() {
            return b.clearCache()
        }, t.parse = function(t, e) {
            return b.parse(t, e)
        }, t.render = function(t, e, n, o) {
            if ("string" != typeof t) throw new TypeError('Invalid template! Template should be a "string" but "' + function(t) {
                return r(t) ? "array" : typeof t
            }(t) + '" was given as the first argument for mustache#render(template, view, partials)');
            return b.render(t, e, n, o)
        }, t.to_html = function(e, r, o, i) {
            var a = t.render(e, r, o);
            if (!n(i)) return a;
            i(a)
        }, t.escape = function(t) {
            return String(t).replace(/[&<>"'`=\/]/g, function(t) {
                return c[t]
            })
        }, t.Scanner = g, t.Context = v, t.Writer = m, t
    })
}, function(t, e, r) {
    "use strict";
    var n, o, i = t.exports = function(t) {
        var e = t.Context;
        return o = e.prototype.lookup, e.prototype.lookup = function(t) {
            return "i18n" === t ? i.lambda : o.apply(this, arguments)
        }, i
    };
    i.lambda = function(t, e) {
        if (!n) throw new Error("i18n dict was not set up, do `i18n.use(dict)`.");
        return e(t = n[t] || t)
    }, i.use = function(t) {
        if (!o) throw new Error("i18n was not properly set up, pass in `Mustache`:\n```js\nvar Mustache = require('mustache')\nvar i18n = require('mustache-i18n')(Mustache)\n```");
        n = t
    }
}, function(t, e, r) {
    var n = r(4);
    t.exports = function(t) {
        return Tracking = {
            baseTrackUrl: API.track,
            url: function(t) {
                return this.baseTrackUrl + t
            },
            entryPoint: function(e, r) {
                var o = {
                    source: e.source,
                    fb_source: e.fbSource,
                    locale_fb: t.user.fbLocale,
                    timezone: t.user.timezone,
                    version: n
                };
                "share" == source ? o = Object.assign(o, {
                    quiz_id: r.quiz_id,
                    result_id: r.result_id,
                    generated_result_id: r.generated_result_id,
                    content_set_item_ids: r.content_set_item_ids,
                    gender: r.gender,
                    country: r.country
                }) : "bot" == source ? o = Object.assign(o, {
                    quiz_id: r.quiz_id,
                    bot_quiz_position: r.quiz_position,
                    bot_message_id: r.message_id,
                    bot_message_sent_timestamp: r.message_sent_timestamp
                }) : source, o = Object.assign({}, Tracking._defaultData(), o);
                this._post(this.url("entry"), o);
                FBInstant.logEvent("EntryTrack"), FBInstant.logEvent("entry-" + source)
            },
            indexViewed: function() {
                data = Object.assign({}, Tracking._defaultData());
                var t = this._post(this.url("index-viewed"), data);
                return FBInstant.logEvent("index-viewed"), t
            },
            quizLoaded: function(t) {
                data = Object.assign({
                    quiz_id: t.id
                }, Tracking._defaultData());
                var e = this._post(this.url("quiz-loaded"), data);
                return FBInstant.logEvent("quiz-loaded"), e
            },
            resultViewed: function(t) {
                var e = {
                    quiz_id: t.quiz.id,
                    result_id: t.data.result_id,
                    generated_result_id: t.data.id,
                    content_set_item_ids: t.data.csi || []
                };
                e = Object.assign(e, Tracking._defaultData());
                var r = this._post(this.url("result-viewed"), e);
                return FBInstant.logEvent("result-viewed"), r
            },
            questionsFinished: function(t) {
                data = Object.assign({
                    quiz_id: t.id
                }, Tracking._defaultData());
                var e = this._post(this.url("questions-finished"), data);
                return FBInstant.logEvent("questions-finished"), e
            },
            resultShared: function(t) {
                var e = {
                    quiz_id: t.quiz.id,
                    result_id: t.data.result_id,
                    generated_result_id: t.data.id,
                    content_set_item_ids: t.data.csi || []
                };
                e = Object.assign(e, Tracking._defaultData());
                var r = this._post(this.url("result-shared"), e);
                return FBInstant.logEvent("result-shared"), r
            },
            botPopupView: function(t) {
                var e = {
                    bot_popup_view: t
                };
                e = Object.assign(e, Tracking._defaultData());
                var r = this._post(this.url("bot-popup-view"), e);
                return FBInstant.logEvent("bot-popup-view"), r
            },
            botOptIn: function(t) {
                var e = {
                    bot_opt_in: t
                };
                e = Object.assign(e, Tracking._defaultData());
                var r = this._post(this.url("bot-opt-in"), e);
                return FBInstant.logEvent("bot-opt-in"), r
            },
            _defaultData: function() {
                return {
                    session_id: t.user.sessionId,
                    locale: t.locale,
                    gender: t.user.gender
                }
            },
            _post: function(t, e) {
                return new Promise(function(r, n) {
                    var o = new XMLHttpRequest;
                    o.open("POST", t, !0), o.send(JSON.stringify(e)), o.onreadystatechange = function() {
                        if (4 === o.readyState)
                            if (200 === o.status) {
                                var t = o.responseText,
                                    e = JSON.parse(t);
                                r(e)
                            } else 204 === o.status ? r() : n(o.status)
                    }
                })
            }
        }, Tracking
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = null,
            r = null,
            n = !1,
            o = !1,
            i = 2;
        return Debug = {
            log: function(t) {
                console.log(t)
            }
        }, Ads = {
            init: function() {},
            areAdsSupported: function() {
                return FBInstant.getSupportedAPIs().includes("getInterstitialAdAsync")
            },
            possibleAdBeforeResult: function() {
                i++, console.log("result counter" + i), i % 4 == 0 ? Ads.showInterstitial() : i % 4 == 3 ? Ads.preloadInterstitial() : console.log("no ad should be shown")
            },
            _quizzesWithMoreAds: function() {
                return !("en" != t.locale || !t.entryPointData || "5c0273ab16b7b6002af6cebd" != t.entryPointData.quiz_id && "5be9d112991488000c60e896" != t.entryPointData.quiz_id)
            },
            preloadInterstitial: function() {
                console.log("attempt to preload ad"), n = !1, Ads.areAdsSupported() ? FBInstant.getInterstitialAdAsync( INTERSTITIAL_PLACEMENT_ID ).then(function(t) {
                    return (r = t).loadAsync()
                }).then(function() {
                    n = !0, console.log("interstitial preloaded")
                }).catch(function(t) {
                    console.log("Interstitial failed to preload: " + t.message)
                }) : console.log("Ads not supported in this session")
            },
            preloadRewardedVideo: function() {
                o = !1, Ads.areAdsSupported() && FBInstant.getRewardedVideoAsync( REWARDED_PLACEMENT_ID ).then(function(t) {
                    return (e = t).loadAsync()
                }).then(function() {
                    o = !0
                }).catch(function(t) {
                    console.log("Rewarded video failed to preload:" + t.message)
                })
            },
            showInterstitial: function() {
                n && r.showAsync().then(function() {
                    0,
                    console.log("interstitial ad shown")
                }).catch(function(t) {
                    console.log(t.message)
                })
            },
            showRewardedVideo: function() {
                o && e.showAsync().then(function() {
                    0,
                    console.log("reward video ad shown")
                }).catch(function(t) {
                    console.log(t.message)
                })
            }
        }, Ads
    }
}, function(t, e) {
    t.exports = function(t) {
        return Debug = {
            surfaceError: function(t) {
                document.querySelector(".header").innerHTML = t
            }
        }, Bot = {
            canSubscribeBot: function() {
                try {
                    return FBInstant.player.canSubscribeBotAsync()
                } catch (t) {
                    return new Promise(function(t, e) {
                        t(!1)
                    })
                }
            },
            subscribeBot: function() {
                t.tracking.botPopupView(!0), FBInstant.player.subscribeBotAsync().then(function(e) {
                    console.log(e), t.tracking.botOptIn(!0)
                }).catch(function(e) {
                    console.log(e), t.tracking.botOptIn(!1)
                })
            },
            showBotPopup: function() {
                Bot.canSubscribeBot().then(function(t) {
                    t && Bot.subscribeBot()
                })
            }
        }, Bot
    }
}, function(t, e, r) {
    var n = r(2),
        o = r(0),
        i = r(12),
        a = r(11),
        s = function(t) {
            this.id = t, this._data = !1, this.selectedAnswers = {}
        };
    s.prototype.data = function() {
        var t = this;
        return new Promise(function(e, r) {
            n.getQuiz(t.id).then(function(r) {
                t._data = r, e(t._data)
            })
        })
    }, s.prototype.dataForShare = function() {
        return {
            quiz_id: this.id
        }
    }, s.prototype.hasQuestions = function() {
        if (!this._data) throw new Error("quiz data hasn't been loaded yet");
        return this._data.has_questions
    }, s.prototype.render = function() {
        var t = this;
        return u._currentQuizId = t.id, new Promise(function(e, r) {
            t.data().then(function(t) {
                var r = Renderer.getTemplate("quiz-template"),
                    n = {
                        questionsPartial: Renderer.getTemplate("questions-partial")
                    },
                    o = Renderer.Mustache.to_html(r, t, n);
                e(o)
            })
        })
    }, s.prototype.nextUnansweredQuestion = function() {
        return document.querySelector(".question:not(.answered)")
    }, s.prototype.selectAnswer = function(t) {
        var e = t.closest(".question");
        this.markQuestionAsAnswered(e, t), this.recordAnswer(e, t), this.nextQuestion()
    }, s.prototype.markQuestionAsAnswered = function(t, e) {
        for (var r = e.parentElement.children, n = 0; n < r.length; n++) r[n].classList.remove("selected");
        e.classList.add("selected"), t.classList.add("answered")
    }, s.prototype.recordAnswer = function(t, e) {
        var r = t.dataset.id,
            n = e.dataset.id,
            i = e.dataset.value;
        this.selectedAnswers[r] = {
            id: n,
            data: i
        }, "default.gender" != r || "male" != i && "female" != i || (o.user.gender = i)
    }, s.prototype.nextQuestion = function() {
        var t = this.nextUnansweredQuestion();
        t ? a._scrollToElement(t) : (console.log("all questions answered"), i.load(this), a._scrollToElement(document.querySelector("#first-share")), o.tracking.questionsFinished(this))
    };
    var u = {
        _quizzes: {},
        _currentQuizId: !1,
        currentQuiz: function() {
            return !!u._currentQuizId && u.get(u._currentQuizId)
        },
        get: function(t) {
            return u._quizzes[t] || (u._quizzes[t] = new s(t)), u._quizzes[t]
        }
    };
    t.exports = u
}, function(t, e, r) {
    "use strict";
    var n = r(1),
        o = r(13),
        i = r(14),
        a = r(22),
        s = r(54),
        u = n.call(Function.call, a());
    o(u, {
        getPolyfill: a,
        implementation: i,
        shim: s
    }), t.exports = u
}, function(t, e, r) {
    "use strict";
    var n = Array.prototype.slice,
        o = Object.prototype.toString;
    t.exports = function(t) {
        var e = this;
        if ("function" != typeof e || "[object Function]" !== o.call(e)) throw new TypeError("Function.prototype.bind called on incompatible " + e);
        for (var r, i = n.call(arguments, 1), a = Math.max(0, e.length - i.length), s = [], u = 0; u < a; u++) s.push("$" + u);
        if (r = Function("binder", "return function (" + s.join(",") + "){ return binder.apply(this,arguments); }")(function() {
                if (this instanceof r) {
                    var o = e.apply(this, i.concat(n.call(arguments)));
                    return Object(o) === o ? o : this
                }
                return e.apply(t, i.concat(n.call(arguments)))
            }), e.prototype) {
            var l = function() {};
            l.prototype = e.prototype, r.prototype = new l, l.prototype = null
        }
        return r
    }
}, function(t, e, r) {
    "use strict";
    var n = Object.prototype.hasOwnProperty,
        o = Object.prototype.toString,
        i = Array.prototype.slice,
        a = r(39),
        s = Object.prototype.propertyIsEnumerable,
        u = !s.call({
            toString: null
        }, "toString"),
        l = s.call(function() {}, "prototype"),
        c = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
        p = function(t) {
            var e = t.constructor;
            return e && e.prototype === t
        },
        f = {
            $applicationCache: !0,
            $console: !0,
            $external: !0,
            $frame: !0,
            $frameElement: !0,
            $frames: !0,
            $innerHeight: !0,
            $innerWidth: !0,
            $outerHeight: !0,
            $outerWidth: !0,
            $pageXOffset: !0,
            $pageYOffset: !0,
            $parent: !0,
            $scrollLeft: !0,
            $scrollTop: !0,
            $scrollX: !0,
            $scrollY: !0,
            $self: !0,
            $webkitIndexedDB: !0,
            $webkitStorageInfo: !0,
            $window: !0
        },
        d = function() {
            if ("undefined" == typeof window) return !1;
            for (var t in window) try {
                if (!f["$" + t] && n.call(window, t) && null !== window[t] && "object" == typeof window[t]) try {
                    p(window[t])
                } catch (t) {
                    return !0
                }
            } catch (t) {
                return !0
            }
            return !1
        }(),
        y = function(t) {
            var e = null !== t && "object" == typeof t,
                r = "[object Function]" === o.call(t),
                i = a(t),
                s = e && "[object String]" === o.call(t),
                f = [];
            if (!e && !r && !i) throw new TypeError("Object.keys called on a non-object");
            var y = l && r;
            if (s && t.length > 0 && !n.call(t, 0))
                for (var h = 0; h < t.length; ++h) f.push(String(h));
            if (i && t.length > 0)
                for (var g = 0; g < t.length; ++g) f.push(String(g));
            else
                for (var v in t) y && "prototype" === v || !n.call(t, v) || f.push(String(v));
            if (u)
                for (var m = function(t) {
                        if ("undefined" == typeof window || !d) return p(t);
                        try {
                            return p(t)
                        } catch (t) {
                            return !1
                        }
                    }(t), b = 0; b < c.length; ++b) m && "constructor" === c[b] || !n.call(t, c[b]) || f.push(c[b]);
            return f
        };
    y.shim = function() {
        if (Object.keys) {
            if (! function() {
                    return 2 === (Object.keys(arguments) || "").length
                }(1, 2)) {
                var t = Object.keys;
                Object.keys = function(e) {
                    return a(e) ? t(i.call(e)) : t(e)
                }
            }
        } else Object.keys = y;
        return Object.keys || y
    }, t.exports = y
}, function(t, e, r) {
    "use strict";
    var n = Object.prototype.toString;
    t.exports = function(t) {
        var e = n.call(t),
            r = "[object Arguments]" === e;
        return r || (r = "[object Array]" !== e && null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && "[object Function]" === n.call(t.callee)), r
    }
}, function(t, e, r) {
    "use strict";
    t.exports = r(41)
}, function(t, e, r) {
    "use strict";
    var n = r(42),
        o = r(19),
        i = o(o({}, n), {
            SameValueNonNumber: function(t, e) {
                if ("number" == typeof t || typeof t != typeof e) throw new TypeError("SameValueNonNumber requires two non-number values of the same type.");
                return this.SameValue(t, e)
            }
        });
    t.exports = i
}, function(t, e, r) {
    "use strict";
    var n = r(6),
        o = r(43),
        i = r(16),
        a = i("%TypeError%"),
        s = i("%SyntaxError%"),
        u = i("%Array%"),
        l = i("%String%"),
        c = i("%Object%"),
        p = i("%Number%"),
        f = i("%Symbol%", !0),
        d = i("%RegExp%"),
        y = !!f,
        h = r(17),
        g = r(18),
        v = p.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1,
        m = r(19),
        b = r(20),
        w = r(21),
        S = r(50),
        P = parseInt,
        O = r(1),
        A = O.call(Function.call, u.prototype.slice),
        I = O.call(Function.call, l.prototype.slice),
        j = O.call(Function.call, d.prototype.test, /^0b[01]+$/i),
        T = O.call(Function.call, d.prototype.test, /^0o[0-7]+$/i),
        E = O.call(Function.call, d.prototype.exec),
        _ = new d("[" + ["", "​", "￾"].join("") + "]", "g"),
        z = O.call(Function.call, d.prototype.test, _),
        x = O.call(Function.call, d.prototype.test, /^[-+]0x[0-9a-f]+$/i),
        k = O.call(Function.call, l.prototype.charCodeAt),
        D = O.call(Function.call, Object.prototype.toString),
        R = Math.floor,
        $ = Math.abs,
        M = Object.create,
        F = c.getOwnPropertyDescriptor,
        C = c.isExtensible,
        q = ["\t\n\v\f\r   ᠎    ", "         　\u2028", "\u2029\ufeff"].join(""),
        L = new RegExp("(^[" + q + "]+)|([" + q + "]+$)", "g"),
        U = O.call(Function.call, l.prototype.replace),
        B = r(51),
        N = r(53),
        V = m(m({}, B), {
            Call: function(t, e) {
                var r = arguments.length > 2 ? arguments[2] : [];
                if (!this.IsCallable(t)) throw new a(t + " is not a function");
                return t.apply(e, r)
            },
            ToPrimitive: o,
            ToNumber: function(t) {
                var e = S(t) ? t : o(t, p);
                if ("symbol" == typeof e) throw new a("Cannot convert a Symbol value to a number");
                if ("string" == typeof e) {
                    if (j(e)) return this.ToNumber(P(I(e, 2), 2));
                    if (T(e)) return this.ToNumber(P(I(e, 2), 8));
                    if (z(e) || x(e)) return NaN;
                    var r = function(t) {
                        return U(t, L, "")
                    }(e);
                    if (r !== e) return this.ToNumber(r)
                }
                return p(e)
            },
            ToInt16: function(t) {
                var e = this.ToUint16(t);
                return e >= 32768 ? e - 65536 : e
            },
            ToInt8: function(t) {
                var e = this.ToUint8(t);
                return e >= 128 ? e - 256 : e
            },
            ToUint8: function(t) {
                var e = this.ToNumber(t);
                if (h(e) || 0 === e || !g(e)) return 0;
                var r = b(e) * R($(e));
                return w(r, 256)
            },
            ToUint8Clamp: function(t) {
                var e = this.ToNumber(t);
                if (h(e) || e <= 0) return 0;
                if (e >= 255) return 255;
                var r = R(t);
                return r + .5 < e ? r + 1 : e < r + .5 ? r : r % 2 != 0 ? r + 1 : r
            },
            ToString: function(t) {
                if ("symbol" == typeof t) throw new a("Cannot convert a Symbol value to a string");
                return l(t)
            },
            ToObject: function(t) {
                return this.RequireObjectCoercible(t), c(t)
            },
            ToPropertyKey: function(t) {
                var e = this.ToPrimitive(t, l);
                return "symbol" == typeof e ? e : this.ToString(e)
            },
            ToLength: function(t) {
                var e = this.ToInteger(t);
                return e <= 0 ? 0 : e > v ? v : e
            },
            CanonicalNumericIndexString: function(t) {
                if ("[object String]" !== D(t)) throw new a("must be a string");
                if ("-0" === t) return -0;
                var e = this.ToNumber(t);
                return this.SameValue(this.ToString(e), t) ? e : void 0
            },
            RequireObjectCoercible: B.CheckObjectCoercible,
            IsArray: u.isArray || function(t) {
                return "[object Array]" === D(t)
            },
            IsConstructor: function(t) {
                return "function" == typeof t && !!t.prototype
            },
            IsExtensible: Object.preventExtensions ? function(t) {
                return !S(t) && C(t)
            } : function(t) {
                return !0
            },
            IsInteger: function(t) {
                if ("number" != typeof t || h(t) || !g(t)) return !1;
                var e = $(t);
                return R(e) === e
            },
            IsPropertyKey: function(t) {
                return "string" == typeof t || "symbol" == typeof t
            },
            IsRegExp: function(t) {
                if (!t || "object" != typeof t) return !1;
                if (y) {
                    var e = t[f.match];
                    if (void 0 !== e) return B.ToBoolean(e)
                }
                return N(t)
            },
            SameValueZero: function(t, e) {
                return t === e || h(t) && h(e)
            },
            GetV: function(t, e) {
                if (!this.IsPropertyKey(e)) throw new a("Assertion failed: IsPropertyKey(P) is not true");
                return this.ToObject(t)[e]
            },
            GetMethod: function(t, e) {
                if (!this.IsPropertyKey(e)) throw new a("Assertion failed: IsPropertyKey(P) is not true");
                var r = this.GetV(t, e);
                if (null != r) {
                    if (!this.IsCallable(r)) throw new a(e + "is not a function");
                    return r
                }
            },
            Get: function(t, e) {
                if ("Object" !== this.Type(t)) throw new a("Assertion failed: Type(O) is not Object");
                if (!this.IsPropertyKey(e)) throw new a("Assertion failed: IsPropertyKey(P) is not true");
                return t[e]
            },
            Type: function(t) {
                return "symbol" == typeof t ? "Symbol" : B.Type(t)
            },
            SpeciesConstructor: function(t, e) {
                if ("Object" !== this.Type(t)) throw new a("Assertion failed: Type(O) is not Object");
                var r = t.constructor;
                if (void 0 === r) return e;
                if ("Object" !== this.Type(r)) throw new a("O.constructor is not an Object");
                var n = y && f.species ? r[f.species] : void 0;
                if (null == n) return e;
                if (this.IsConstructor(n)) return n;
                throw new a("no constructor found")
            },
            CompletePropertyDescriptor: function(t) {
                if (!this.IsPropertyDescriptor(t)) throw new a("Desc must be a Property Descriptor");
                return this.IsGenericDescriptor(t) || this.IsDataDescriptor(t) ? (n(t, "[[Value]]") || (t["[[Value]]"] = void 0), n(t, "[[Writable]]") || (t["[[Writable]]"] = !1)) : (n(t, "[[Get]]") || (t["[[Get]]"] = void 0), n(t, "[[Set]]") || (t["[[Set]]"] = void 0)), n(t, "[[Enumerable]]") || (t["[[Enumerable]]"] = !1), n(t, "[[Configurable]]") || (t["[[Configurable]]"] = !1), t
            },
            Set: function(t, e, r, n) {
                if ("Object" !== this.Type(t)) throw new a("O must be an Object");
                if (!this.IsPropertyKey(e)) throw new a("P must be a Property Key");
                if ("Boolean" !== this.Type(n)) throw new a("Throw must be a Boolean");
                if (n) return t[e] = r, !0;
                try {
                    t[e] = r
                } catch (t) {
                    return !1
                }
            },
            HasOwnProperty: function(t, e) {
                if ("Object" !== this.Type(t)) throw new a("O must be an Object");
                if (!this.IsPropertyKey(e)) throw new a("P must be a Property Key");
                return n(t, e)
            },
            HasProperty: function(t, e) {
                if ("Object" !== this.Type(t)) throw new a("O must be an Object");
                if (!this.IsPropertyKey(e)) throw new a("P must be a Property Key");
                return e in t
            },
            IsConcatSpreadable: function(t) {
                if ("Object" !== this.Type(t)) return !1;
                if (y && "symbol" == typeof f.isConcatSpreadable) {
                    var e = this.Get(t, Symbol.isConcatSpreadable);
                    if (void 0 !== e) return this.ToBoolean(e)
                }
                return this.IsArray(t)
            },
            Invoke: function(t, e) {
                if (!this.IsPropertyKey(e)) throw new a("P must be a Property Key");
                var r = A(arguments, 2),
                    n = this.GetV(t, e);
                return this.Call(n, t, r)
            },
            GetIterator: function(t, e) {
                if (!y) throw new SyntaxError("ES.GetIterator depends on native iterator support.");
                var r = e;
                arguments.length < 2 && (r = this.GetMethod(t, f.iterator));
                var n = this.Call(r, t);
                if ("Object" !== this.Type(n)) throw new a("iterator must return an object");
                return n
            },
            IteratorNext: function(t, e) {
                var r = this.Invoke(t, "next", arguments.length < 2 ? [] : [e]);
                if ("Object" !== this.Type(r)) throw new a("iterator next must return an object");
                return r
            },
            IteratorComplete: function(t) {
                if ("Object" !== this.Type(t)) throw new a("Assertion failed: Type(iterResult) is not Object");
                return this.ToBoolean(this.Get(t, "done"))
            },
            IteratorValue: function(t) {
                if ("Object" !== this.Type(t)) throw new a("Assertion failed: Type(iterResult) is not Object");
                return this.Get(t, "value")
            },
            IteratorStep: function(t) {
                var e = this.IteratorNext(t);
                return !0 !== this.IteratorComplete(e) && e
            },
            IteratorClose: function(t, e) {
                if ("Object" !== this.Type(t)) throw new a("Assertion failed: Type(iterator) is not Object");
                if (!this.IsCallable(e)) throw new a("Assertion failed: completion is not a thunk for a Completion Record");
                var r, n = e,
                    o = this.GetMethod(t, "return");
                if (void 0 === o) return n();
                try {
                    var i = this.Call(o, t, [])
                } catch (t) {
                    throw r = n(), n = null, t
                }
                if (r = n(), n = null, "Object" !== this.Type(i)) throw new a("iterator .return must return an object");
                return r
            },
            CreateIterResultObject: function(t, e) {
                if ("Boolean" !== this.Type(e)) throw new a("Assertion failed: Type(done) is not Boolean");
                return {
                    value: t,
                    done: e
                }
            },
            RegExpExec: function(t, e) {
                if ("Object" !== this.Type(t)) throw new a("R must be an Object");
                if ("String" !== this.Type(e)) throw new a("S must be a String");
                var r = this.Get(t, "exec");
                if (this.IsCallable(r)) {
                    var n = this.Call(r, t, [e]);
                    if (null === n || "Object" === this.Type(n)) return n;
                    throw new a('"exec" method must return `null` or an Object')
                }
                return E(t, e)
            },
            ArraySpeciesCreate: function(t, e) {
                if (!this.IsInteger(e) || e < 0) throw new a("Assertion failed: length must be an integer >= 0");
                var r, n = 0 === e ? 0 : e;
                if (this.IsArray(t) && (r = this.Get(t, "constructor"), "Object" === this.Type(r) && y && f.species && null === (r = this.Get(r, f.species)) && (r = void 0)), void 0 === r) return u(n);
                if (!this.IsConstructor(r)) throw new a("C must be a constructor");
                return new r(n)
            },
            CreateDataProperty: function(t, e, r) {
                if ("Object" !== this.Type(t)) throw new a("Assertion failed: Type(O) is not Object");
                if (!this.IsPropertyKey(e)) throw new a("Assertion failed: IsPropertyKey(P) is not true");
                var n = F(t, e),
                    o = n || "function" != typeof C || C(t);
                if (n && (!n.writable || !n.configurable) || !o) return !1;
                var i = {
                    configurable: !0,
                    enumerable: !0,
                    value: r,
                    writable: !0
                };
                return Object.defineProperty(t, e, i), !0
            },
            CreateDataPropertyOrThrow: function(t, e, r) {
                if ("Object" !== this.Type(t)) throw new a("Assertion failed: Type(O) is not Object");
                if (!this.IsPropertyKey(e)) throw new a("Assertion failed: IsPropertyKey(P) is not true");
                var n = this.CreateDataProperty(t, e, r);
                if (!n) throw new a("unable to create data property");
                return n
            },
            ObjectCreate: function(t, e) {
                if (null !== t && "Object" !== this.Type(t)) throw new a("Assertion failed: proto must be null or an object");
                if ((arguments.length < 2 ? [] : e).length > 0) throw new s("es-abstract does not yet support internal slots");
                if (null === t && !M) throw new s("native Object.create support is required to create null objects");
                return M(t)
            },
            AdvanceStringIndex: function(t, e, r) {
                if ("String" !== this.Type(t)) throw new a("S must be a String");
                if (!this.IsInteger(e) || e < 0 || e > v) throw new a("Assertion failed: length must be an integer >= 0 and <= 2**53");
                if ("Boolean" !== this.Type(r)) throw new a("Assertion failed: unicode must be a Boolean");
                if (!r) return e + 1;
                if (e + 1 >= t.length) return e + 1;
                var n = k(t, e);
                if (n < 55296 || n > 56319) return e + 1;
                var o = k(t, e + 1);
                return o < 56320 || o > 57343 ? e + 1 : e + 2
            }
        });
    delete V.CheckObjectCoercible, t.exports = V
}, function(t, e, r) {
    "use strict";
    t.exports = r(44)
}, function(t, e, r) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator,
        o = r(15),
        i = r(7),
        a = r(45),
        s = r(46);
    t.exports = function(t) {
        if (o(t)) return t;
        var e, r = "default";
        if (arguments.length > 1 && (arguments[1] === String ? r = "string" : arguments[1] === Number && (r = "number")), n && (Symbol.toPrimitive ? e = function(t, e) {
                var r = t[e];
                if (null !== r && void 0 !== r) {
                    if (!i(r)) throw new TypeError(r + " returned for property " + e + " of object " + t + " is not a function");
                    return r
                }
            }(t, Symbol.toPrimitive) : s(t) && (e = Symbol.prototype.valueOf)), void 0 !== e) {
            var u = e.call(t, r);
            if (o(u)) return u;
            throw new TypeError("unable to convert exotic object to primitive")
        }
        return "default" === r && (a(t) || s(t)) && (r = "string"),
            function(t, e) {
                if (void 0 === t || null === t) throw new TypeError("Cannot call method on " + t);
                if ("string" != typeof e || "number" !== e && "string" !== e) throw new TypeError('hint must be "string" or "number"');
                var r, n, a, s = "string" === e ? ["toString", "valueOf"] : ["valueOf", "toString"];
                for (a = 0; a < s.length; ++a)
                    if (r = t[s[a]], i(r) && (n = r.call(t), o(n))) return n;
                throw new TypeError("No default value")
            }(t, "default" === r ? "number" : r)
    }
}, function(t, e, r) {
    "use strict";
    var n = Date.prototype.getDay,
        o = Object.prototype.toString,
        i = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
    t.exports = function(t) {
        return "object" == typeof t && null !== t && (i ? function(t) {
            try {
                return n.call(t), !0
            } catch (t) {
                return !1
            }
        }(t) : "[object Date]" === o.call(t))
    }
}, function(t, e, r) {
    "use strict";
    var n = Object.prototype.toString;
    if (r(47)()) {
        var o = Symbol.prototype.toString,
            i = /^Symbol\(.*\)$/;
        t.exports = function(t) {
            if ("symbol" == typeof t) return !0;
            if ("[object Symbol]" !== n.call(t)) return !1;
            try {
                return function(t) {
                    return "symbol" == typeof t.valueOf() && i.test(o.call(t))
                }(t)
            } catch (t) {
                return !1
            }
        }
    } else t.exports = function(t) {
        return !1
    }
}, function(t, e, r) {
    "use strict";
    (function(e) {
        var n = e.Symbol,
            o = r(49);
        t.exports = function() {
            return "function" == typeof n && ("function" == typeof Symbol && ("symbol" == typeof n("foo") && ("symbol" == typeof Symbol("bar") && o())))
        }
    }).call(this, r(48))
}, function(t, e) {
    var r;
    r = function() {
        return this
    }();
    try {
        r = r || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" == typeof window && (r = window)
    }
    t.exports = r
}, function(t, e, r) {
    "use strict";
    t.exports = function() {
        if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
        if ("symbol" == typeof Symbol.iterator) return !0;
        var t = {},
            e = Symbol("test"),
            r = Object(e);
        if ("string" == typeof e) return !1;
        if ("[object Symbol]" !== Object.prototype.toString.call(e)) return !1;
        if ("[object Symbol]" !== Object.prototype.toString.call(r)) return !1;
        for (e in t[e] = 42, t) return !1;
        if ("function" == typeof Object.keys && 0 !== Object.keys(t).length) return !1;
        if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(t).length) return !1;
        var n = Object.getOwnPropertySymbols(t);
        if (1 !== n.length || n[0] !== e) return !1;
        if (!Object.prototype.propertyIsEnumerable.call(t, e)) return !1;
        if ("function" == typeof Object.getOwnPropertyDescriptor) {
            var o = Object.getOwnPropertyDescriptor(t, e);
            if (42 !== o.value || !0 !== o.enumerable) return !1
        }
        return !0
    }
}, function(t, e) {
    t.exports = function(t) {
        return null === t || "function" != typeof t && "object" != typeof t
    }
}, function(t, e, r) {
    "use strict";
    var n = r(16),
        o = n("%Object%"),
        i = n("%TypeError%"),
        a = n("%String%"),
        s = r(17),
        u = r(18),
        l = r(20),
        c = r(21),
        p = r(7),
        f = r(52),
        d = r(6),
        y = {
            ToPrimitive: f,
            ToBoolean: function(t) {
                return !!t
            },
            ToNumber: function(t) {
                return +t
            },
            ToInteger: function(t) {
                var e = this.ToNumber(t);
                return s(e) ? 0 : 0 !== e && u(e) ? l(e) * Math.floor(Math.abs(e)) : e
            },
            ToInt32: function(t) {
                return this.ToNumber(t) >> 0
            },
            ToUint32: function(t) {
                return this.ToNumber(t) >>> 0
            },
            ToUint16: function(t) {
                var e = this.ToNumber(t);
                if (s(e) || 0 === e || !u(e)) return 0;
                var r = l(e) * Math.floor(Math.abs(e));
                return c(r, 65536)
            },
            ToString: function(t) {
                return a(t)
            },
            ToObject: function(t) {
                return this.CheckObjectCoercible(t), o(t)
            },
            CheckObjectCoercible: function(t, e) {
                if (null == t) throw new i(e || "Cannot call method on " + t);
                return t
            },
            IsCallable: p,
            SameValue: function(t, e) {
                return t === e ? 0 !== t || 1 / t == 1 / e : s(t) && s(e)
            },
            Type: function(t) {
                return null === t ? "Null" : void 0 === t ? "Undefined" : "function" == typeof t || "object" == typeof t ? "Object" : "number" == typeof t ? "Number" : "boolean" == typeof t ? "Boolean" : "string" == typeof t ? "String" : void 0
            },
            IsPropertyDescriptor: function(t) {
                if ("Object" !== this.Type(t)) return !1;
                var e = {
                    "[[Configurable]]": !0,
                    "[[Enumerable]]": !0,
                    "[[Get]]": !0,
                    "[[Set]]": !0,
                    "[[Value]]": !0,
                    "[[Writable]]": !0
                };
                for (var r in t)
                    if (d(t, r) && !e[r]) return !1;
                var n = d(t, "[[Value]]"),
                    o = d(t, "[[Get]]") || d(t, "[[Set]]");
                if (n && o) throw new i("Property Descriptors may not be both accessor and data descriptors");
                return !0
            },
            IsAccessorDescriptor: function(t) {
                if (void 0 === t) return !1;
                if (!this.IsPropertyDescriptor(t)) throw new i("Desc must be a Property Descriptor");
                return !(!d(t, "[[Get]]") && !d(t, "[[Set]]"))
            },
            IsDataDescriptor: function(t) {
                if (void 0 === t) return !1;
                if (!this.IsPropertyDescriptor(t)) throw new i("Desc must be a Property Descriptor");
                return !(!d(t, "[[Value]]") && !d(t, "[[Writable]]"))
            },
            IsGenericDescriptor: function(t) {
                if (void 0 === t) return !1;
                if (!this.IsPropertyDescriptor(t)) throw new i("Desc must be a Property Descriptor");
                return !this.IsAccessorDescriptor(t) && !this.IsDataDescriptor(t)
            },
            FromPropertyDescriptor: function(t) {
                if (void 0 === t) return t;
                if (!this.IsPropertyDescriptor(t)) throw new i("Desc must be a Property Descriptor");
                if (this.IsDataDescriptor(t)) return {
                    value: t["[[Value]]"],
                    writable: !!t["[[Writable]]"],
                    enumerable: !!t["[[Enumerable]]"],
                    configurable: !!t["[[Configurable]]"]
                };
                if (this.IsAccessorDescriptor(t)) return {
                    get: t["[[Get]]"],
                    set: t["[[Set]]"],
                    enumerable: !!t["[[Enumerable]]"],
                    configurable: !!t["[[Configurable]]"]
                };
                throw new i("FromPropertyDescriptor must be called with a fully populated Property Descriptor")
            },
            ToPropertyDescriptor: function(t) {
                if ("Object" !== this.Type(t)) throw new i("ToPropertyDescriptor requires an object");
                var e = {};
                if (d(t, "enumerable") && (e["[[Enumerable]]"] = this.ToBoolean(t.enumerable)), d(t, "configurable") && (e["[[Configurable]]"] = this.ToBoolean(t.configurable)), d(t, "value") && (e["[[Value]]"] = t.value), d(t, "writable") && (e["[[Writable]]"] = this.ToBoolean(t.writable)), d(t, "get")) {
                    var r = t.get;
                    if (void 0 !== r && !this.IsCallable(r)) throw new TypeError("getter must be a function");
                    e["[[Get]]"] = r
                }
                if (d(t, "set")) {
                    var n = t.set;
                    if (void 0 !== n && !this.IsCallable(n)) throw new i("setter must be a function");
                    e["[[Set]]"] = n
                }
                if ((d(e, "[[Get]]") || d(e, "[[Set]]")) && (d(e, "[[Value]]") || d(e, "[[Writable]]"))) throw new i("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
                return e
            }
        };
    t.exports = y
}, function(t, e, r) {
    "use strict";
    var n = Object.prototype.toString,
        o = r(15),
        i = r(7),
        a = function(t) {
            var e;
            if ((e = arguments.length > 1 ? arguments[1] : "[object Date]" === n.call(t) ? String : Number) === String || e === Number) {
                var r, a, s = e === String ? ["toString", "valueOf"] : ["valueOf", "toString"];
                for (a = 0; a < s.length; ++a)
                    if (i(t[s[a]]) && (r = t[s[a]](), o(r))) return r;
                throw new TypeError("No default value")
            }
            throw new TypeError("invalid [[DefaultValue]] hint supplied")
        };
    t.exports = function(t) {
        return o(t) ? t : arguments.length > 1 ? a(t, arguments[1]) : a(t)
    }
}, function(t, e, r) {
    "use strict";
    var n = r(6),
        o = RegExp.prototype.exec,
        i = Object.getOwnPropertyDescriptor,
        a = Object.prototype.toString,
        s = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
    t.exports = function(t) {
        if (!t || "object" != typeof t) return !1;
        if (!s) return "[object RegExp]" === a.call(t);
        var e = i(t, "lastIndex");
        return !(!e || !n(e, "value")) && function(t) {
            try {
                var e = t.lastIndex;
                return t.lastIndex = 0, o.call(t), !0
            } catch (t) {
                return !1
            } finally {
                t.lastIndex = e
            }
        }(t)
    }
}, function(t, e, r) {
    "use strict";
    var n = r(5),
        o = r(22),
        i = r(13);
    t.exports = function() {
        n();
        var t = o();
        return i(Promise.prototype, {
            finally: t
        }, {
            finally: function() {
                return Promise.prototype.finally !== t
            }
        }), t
    }
}, function(t, e, r) {
    "use strict";

    function n() {
        if (!(this instanceof n)) return new n;
        this.size = 0, this.uid = 0, this.selectors = [], this.indexes = Object.create(this.indexes), this.activeIndexes = []
    }
    r.r(e);
    var o = window.document.documentElement,
        i = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector;
    n.prototype.matchesSelector = function(t, e) {
        return i.call(t, e)
    }, n.prototype.querySelectorAll = function(t, e) {
        return e.querySelectorAll(t)
    }, n.prototype.indexes = [];
    var a = /^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
    n.prototype.indexes.push({
        name: "ID",
        selector: function(t) {
            var e;
            if (e = t.match(a)) return e[0].slice(1)
        },
        element: function(t) {
            if (t.id) return [t.id]
        }
    });
    var s = /^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
    n.prototype.indexes.push({
        name: "CLASS",
        selector: function(t) {
            var e;
            if (e = t.match(s)) return e[0].slice(1)
        },
        element: function(t) {
            var e = t.className;
            if (e) {
                if ("string" == typeof e) return e.split(/\s/);
                if ("object" == typeof e && "baseVal" in e) return e.baseVal.split(/\s/)
            }
        }
    });
    var u, l = /^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
    n.prototype.indexes.push({
        name: "TAG",
        selector: function(t) {
            var e;
            if (e = t.match(l)) return e[0].toUpperCase()
        },
        element: function(t) {
            return [t.nodeName.toUpperCase()]
        }
    }), n.prototype.indexes.default = {
        name: "UNIVERSAL",
        selector: function() {
            return !0
        },
        element: function() {
            return [!0]
        }
    }, u = "function" == typeof window.Map ? window.Map : function() {
        function t() {
            this.map = {}
        }
        return t.prototype.get = function(t) {
            return this.map[t + " "]
        }, t.prototype.set = function(t, e) {
            this.map[t + " "] = e
        }, t
    }();
    var c = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;

    function p(t, e) {
        var r, n, o, i, a, s, u = (t = t.slice(0).concat(t.default)).length,
            l = e,
            p = [];
        do {
            if (c.exec(""), (o = c.exec(l)) && (l = o[3], o[2] || !l))
                for (r = 0; r < u; r++)
                    if (a = (s = t[r]).selector(o[1])) {
                        for (n = p.length, i = !1; n--;)
                            if (p[n].index === s && p[n].key === a) {
                                i = !0;
                                break
                            } i || p.push({
                            index: s,
                            key: a
                        });
                        break
                    }
        } while (o);
        return p
    }

    function f(t, e) {
        var r, n, o;
        for (r = 0, n = t.length; r < n; r++)
            if (o = t[r], e.isPrototypeOf(o)) return o
    }

    function d(t, e) {
        return t.id - e.id
    }
    n.prototype.logDefaultIndexUsed = function() {}, n.prototype.add = function(t, e) {
        var r, n, o, i, a, s, l, c, d = this.activeIndexes,
            y = this.selectors;
        if ("string" == typeof t) {
            for (r = {
                    id: this.uid++,
                    selector: t,
                    data: e
                }, l = p(this.indexes, t), n = 0; n < l.length; n++) i = (c = l[n]).key, (a = f(d, o = c.index)) || ((a = Object.create(o)).map = new u, d.push(a)), o === this.indexes.default && this.logDefaultIndexUsed(r), (s = a.map.get(i)) || (s = [], a.map.set(i, s)), s.push(r);
            this.size++, y.push(t)
        }
    }, n.prototype.remove = function(t, e) {
        if ("string" == typeof t) {
            var r, n, o, i, a, s, u, l, c = this.activeIndexes,
                f = {},
                d = 1 === arguments.length;
            for (r = p(this.indexes, t), o = 0; o < r.length; o++)
                for (n = r[o], i = c.length; i--;)
                    if (s = c[i], n.index.isPrototypeOf(s)) {
                        if (u = s.map.get(n.key))
                            for (a = u.length; a--;)(l = u[a]).selector !== t || !d && l.data !== e || (u.splice(a, 1), f[l.id] = !0);
                        break
                    } this.size -= Object.keys(f).length
        }
    }, n.prototype.queryAll = function(t) {
        if (!this.selectors.length) return [];
        var e, r, n, o, i, a, s, u, l = {},
            c = [],
            p = this.querySelectorAll(this.selectors.join(", "), t);
        for (e = 0, n = p.length; e < n; e++)
            for (i = p[e], r = 0, o = (a = this.matches(i)).length; r < o; r++) l[(u = a[r]).id] ? s = l[u.id] : (s = {
                id: u.id,
                selector: u.selector,
                data: u.data,
                elements: []
            }, l[u.id] = s, c.push(s)), s.elements.push(i);
        return c.sort(d)
    }, n.prototype.matches = function(t) {
        if (!t) return [];
        var e, r, n, o, i, a, s, u, l, c, p, f = this.activeIndexes,
            y = {},
            h = [];
        for (e = 0, o = f.length; e < o; e++)
            if (u = (s = f[e]).element(t))
                for (r = 0, i = u.length; r < i; r++)
                    if (l = s.map.get(u[r]))
                        for (n = 0, a = l.length; n < a; n++) !y[p = (c = l[n]).id] && this.matchesSelector(t, c.selector) && (y[p] = !0, h.push(c));
        return h.sort(d)
    };
    var y = {},
        h = {},
        g = new WeakMap,
        v = new WeakMap,
        m = new WeakMap,
        b = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");

    function w(t, e, r) {
        var n = t[e];
        return t[e] = function() {
            return r.apply(t, arguments), n.apply(t, arguments)
        }, t
    }

    function S() {
        g.set(this, !0)
    }

    function P() {
        g.set(this, !0), v.set(this, !0)
    }

    function O() {
        return m.get(this) || null
    }

    function A(t, e) {
        b && Object.defineProperty(t, "currentTarget", {
            configurable: !0,
            enumerable: !0,
            get: e || b.get
        })
    }

    function I(t) {
        var e = (1 === t.eventPhase ? h : y)[t.type];
        if (e) {
            var r = function(t, e, r) {
                var n = [],
                    o = e;
                do {
                    if (1 !== o.nodeType) break;
                    var i = t.matches(o);
                    if (i.length) {
                        var a = {
                            node: o,
                            observers: i
                        };
                        r ? n.unshift(a) : n.push(a)
                    }
                } while (o = o.parentElement);
                return n
            }(e, t.target, 1 === t.eventPhase);
            if (r.length) {
                w(t, "stopPropagation", S), w(t, "stopImmediatePropagation", P), A(t, O);
                for (var n = 0, o = r.length; n < o && !g.get(t); n++) {
                    var i = r[n];
                    m.set(t, i.node);
                    for (var a = 0, s = i.observers.length; a < s && !v.get(t); a++) i.observers[a].data.call(i.node, t)
                }
                m.delete(t), A(t)
            }
        }
    }

    function j(t, e, r) {
        var o = !!(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}).capture,
            i = o ? h : y,
            a = i[t];
        a || (a = new n, i[t] = a, document.addEventListener(t, I, o)), a.add(e, r)
    }
    var T = r(23),
        E = r.n(T);
    r(24);
    var _ = r(8),
        z = (r(9), r(25)),
        x = r(3),
        k = r(35),
        D = r(12);
    E.a.polyfill();
    r(36);
    var R = r(0);
    r(4);
    bLazy = new _, document.startApp = function() {
        $.start()
    };
    var $ = {
        start: function() {
            R.init().then(function() {
                FBInstant.setSessionData({
                    status: "afterEnvInitialized"
                }), console.log("env is initialized", R), $.initEventListeners(), FBInstant.logEvent("afterSetEnv");
                var t = R.startQuiz();
                t ? $.showQuiz(t) : $.showHome()
            })
        },
        showHome: function() {
            var t = "",
                e = new Promise(function(e, r) {
                    var n = x.getTemplate("home-template"),
                        o = x.Mustache.to_html(n, {});
                    z.relatedQuizzesHtml({
                        featureFirst: !0
                    }).then(function(r) {
                        console.log("received related quizzes html"), t = r, e({
                            html: o
                        })
                    })
                });
            x.showScene(e).then(function() {
                document.querySelector("#home-quiz-list").innerHTML = t, R.tracking.indexViewed(), bLazy.revalidate()
            })
        },
        showQuiz: function(t) {
            var e = k.get(t),
                r = new Promise(function(t, r) {
                    e.render().then(function(e) {
                        t({
                            html: e
                        })
                    })
                });
            x.showScene(r).then(function() {
                R.tracking.quizLoaded(e), z.relatedQuizzesHtml({
                    currentQuizId: e.id
                }).then(function(t) {
                    document.querySelector("#related-quizzes-wrapper").innerHTML = t, bLazy.revalidate()
                }), e.hasQuestions() || D.load(e)
            })
        },
        shareResult: function() {
            var t = k.currentQuiz(),
                e = Object.assign({
                    source: "share"
                }, t.dataForShare(), D.dataForShare(), R.dataForShare());
            FBInstant.shareAsync({
                intent: "SHARE",
                image: D.resultImage.image,
                text: t._data.title,
                data: e
            }), R.tracking.resultShared(D)
        },
        initEventListeners: function() {
            FBInstant.onPause(function() {
                console.log("Pause event was triggered!")
            }), j("click", "#logo, .house-icon", function(t) {
                $.showHome()
            }), j("click", ".quiz-holder", function(t) {
                $.showQuiz(this.dataset.id)
            }), j("click", ".question:not(.answered) .answer-wrapper", function(t) {
                k.currentQuiz().selectAnswer(this)
            }), j("click", ".fb-share:not(.disabled), .result-image.share", function(t) {
                $.shareResult()
            }), j("click", ".tryagain", function(t) {
                $.showQuiz(document.querySelector("#quiz-result").dataset.id)
            }), j("click", "#bot-optin, #bot-optout", function(t) {
                "bot-optin" == this.id && R.bot.subscribeBot(), document.querySelectorAll(".bot-popup").forEach(function(t) {
                    t.style.display = "none"
                })
            })
        }
    }
}]);

//*=================================================*//
//*-------------------------------------------------*//
//*----------------- BAM Quiz ----------------------*//
//*--------------- Instant Game --------------------*//
//*-------------- By Mohammed Cha ------------------*//
//*-------------- Re-Skinning grp ------------------*//
//*-------------------------------------------------*//
//*=================================================*//