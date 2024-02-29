window.TILE_VERSION = {
    "ditu": {
        "normal": {
            "version": "088",
            "updateDate": "20231009"
        },
        "satellite": {
            "version": "009",
            "updateDate": "20231009"
        },
        "normalTraffic": {
            "version": "081",
            "updateDate": "20231009"
        },
        "satelliteTraffic": {
            "version": "083",
            "updateDate": "20231009"
        },
        "mapJS": {
            "version": "104",
            "updateDate": "20231009"
        },
        "satelliteStreet": {
            "version": "083",
            "updateDate": "20231009"
        },
        "earthVector": {
            "version": "001",
            "updateDate": "20231009"
        }
    },
    "webapp": {
        "high_normal": {
            "version": "001",
            "updateDate": "20231009"
        },
        "lower_normal": {
            "version": "002",
            "updateDate": "20231009"
        }
    },
    "api_for_mobile": {
        "vector": {
            "version": "002",
            "updateDate": "20231009"
        },
        "vectorIcon": {
            "version": "002",
            "updateDate": "20231009"
        }
    }
};
window.BMAP_AUTHENTIC_KEY = "9yGKNYpC5WQYbAoIuxYSTtfVQXWIw68G"; (function() {
    function aa(a) {
        throw a;
    }
    var l = void 0,
    p = !0,
    s = null,
    t = !1;
    function u() {
        return function() {}
    }
    function ca(a) {
        return function(b) {
            this[a] = b
        }
    }
    function x(a) {
        return function() {
            return this[a]
        }
    }
    function da(a) {
        return function() {
            return a
        }
    }
    var fa, ga = [];
    function ha(a) {
        return function() {
            return ga[a].apply(this, arguments)
        }
    }
    function ia(a, b) {
        return ga[a] = b
    }
    var ja, A = ja = A || {
        version: "1.3.4"
    };
    A.da = "$BAIDU$";
    window[A.da] = window[A.da] || {};
    A.object = A.object || {};
    A.extend = A.object.extend = function(a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
        return a
    };
    A.U = A.U || {};
    A.U.fa = function(a) {
        return "string" == typeof a || a instanceof String ? document.getElementById(a) : a && a.nodeName && (1 == a.nodeType || 9 == a.nodeType) ? a: s
    };
    A.fa = A.Ic = A.U.fa;
    A.U.aa = function(a) {
        a = A.U.fa(a);
        if (a === s) return a;
        a.style.display = "none";
        return a
    };
    A.aa = A.U.aa;
    A.lang = A.lang || {};
    A.lang.Ig = function(a) {
        return "[object String]" == Object.prototype.toString.call(a)
    };
    A.Ig = A.lang.Ig;
    A.lang.EE = function(a) {
        if ("[object Object]" === Object.prototype.toString.call(a)) {
            for (var b in a) return t;
            return p
        }
        return t
    };
    A.EE = A.lang.EE;
    A.U.gk = function(a) {
        return A.lang.Ig(a) ? document.getElementById(a) : a
    };
    A.gk = A.U.gk;
    A.U.getElementsByClassName = function(a, b) {
        var c;
        if (a.getElementsByClassName) c = a.getElementsByClassName(b);
        else {
            var e = a;
            e == s && (e = document);
            c = [];
            var e = e.getElementsByTagName("*"),
            f = e.length,
            g = RegExp("(^|\\s)" + b + "(\\s|$)"),
            i,
            k;
            for (k = i = 0; i < f; i++) g.test(e[i].className) && (c[k] = e[i], k++)
        }
        return c
    };
    A.getElementsByClassName = A.U.getElementsByClassName;
    A.U.contains = function(a, b) {
        var c = A.U.gk,
        a = c(a),
        b = c(b);
        return a.contains ? a != b && a.contains(b) : !!(a.compareDocumentPosition(b) & 16)
    };
    A.ga = A.ga || {};
    /msie (\d+\.\d)/i.test(navigator.userAgent) && (A.ga.oa = A.oa = document.documentMode || +RegExp.$1);
    var ka = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        rowspan: "rowSpan",
        valign: "vAlign",
        usemap: "useMap",
        frameborder: "frameBorder"
    };
    8 > A.ga.oa ? (ka["for"] = "htmlFor", ka["class"] = "className") : (ka.htmlFor = "for", ka.className = "class");
    A.U.dH = ka;
    A.U.DF = function(a, b, c) {
        a = A.U.fa(a);
        if (a === s) return a;
        if ("style" == b) a.style.cssText = c;
        else {
            b = A.U.dH[b] || b;
            a.setAttribute(b, c)
        }
        return a
    };
    A.DF = A.U.DF;
    A.U.EF = function(a, b) {
        a = A.U.fa(a);
        if (a === s) return a;
        for (var c in b) A.U.DF(a, c, b[c]);
        return a
    };
    A.EF = A.U.EF;
    A.kl = A.kl || {}; (function() {
        var a = RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
        A.kl.trim = function(b) {
            return ("" + b).replace(a, "")
        }
    })();
    A.trim = A.kl.trim;
    A.kl.xp = function(a, b) {
        var a = "" + a,
        c = Array.prototype.slice.call(arguments, 1),
        e = Object.prototype.toString;
        if (c.length) {
            c = c.length == 1 ? b !== s && /\[object Array\]|\[object Object\]/.test(e.call(b)) ? b: c: c;
            return a.replace(/#\{(.+?)\}/g,
            function(a, b) {
                var i = c[b];
                "[object Function]" == e.call(i) && (i = i(b));
                return "undefined" == typeof i ? "": i
            })
        }
        return a
    };
    A.xp = A.kl.xp;
    A.U.rc = function(a, b) {
        a = A.U.fa(a);
        if (a === s) return a;
        for (var c = a.className.split(/\s+/), e = b.split(/\s+/), f, g = e.length, i, k = 0; k < g; ++k) {
            i = 0;
            for (f = c.length; i < f; ++i) if (c[i] == e[k]) {
                c.splice(i, 1);
                break
            }
        }
        a.className = c.join(" ");
        return a
    };
    A.rc = A.U.rc;
    A.U.fy = function(a, b, c) {
        a = A.U.fa(a);
        if (a === s) return a;
        var e;
        if (a.insertAdjacentHTML) a.insertAdjacentHTML(b, c);
        else {
            e = a.ownerDocument.createRange();
            b = b.toUpperCase();
            if (b == "AFTERBEGIN" || b == "BEFOREEND") {
                e.selectNodeContents(a);
                e.collapse(b == "AFTERBEGIN")
            } else {
                b = b == "BEFOREBEGIN";
                e[b ? "setStartBefore": "setEndAfter"](a);
                e.collapse(b)
            }
            e.insertNode(e.createContextualFragment(c))
        }
        return a
    };
    A.fy = A.U.fy;
    A.U.show = function(a) {
        a = A.U.fa(a);
        if (a === s) return a;
        a.style.display = "";
        return a
    };
    A.show = A.U.show;
    A.U.YD = function(a) {
        a = A.U.fa(a);
        return a === s ? a: a.nodeType == 9 ? a: a.ownerDocument || a.document
    };
    A.U.ib = function(a, b) {
        a = A.U.fa(a);
        if (a === s) return a;
        for (var c = b.split(/\s+/), e = a.className, f = " " + e + " ", g = 0, i = c.length; g < i; g++) f.indexOf(" " + c[g] + " ") < 0 && (e = e + (" " + c[g]));
        a.className = e;
        return a
    };
    A.ib = A.U.ib;
    A.U.UB = A.U.UB || {};
    A.U.hm = A.U.hm || [];
    A.U.hm.filter = function(a, b, c) {
        for (var e = 0,
        f = A.U.hm,
        g; g = f[e]; e++) if (g = g[c]) b = g(a, b);
        return b
    };
    A.kl.YO = function(a) {
        return a.indexOf("-") < 0 && a.indexOf("_") < 0 ? a: a.replace(/[-_][^-_]/g,
        function(a) {
            return a.charAt(1).toUpperCase()
        })
    };
    A.U.Y0 = function(a) {
        A.U.Dt(a, "expand") ? A.U.rc(a, "expand") : A.U.ib(a, "expand")
    };
    A.U.Dt = function(a) {
        if (arguments.length <= 0 || typeof a === "function") return this;
        if (this.size() <= 0) return t;
        var a = a.replace(/^\s+/g, "").replace(/\s+$/g, "").replace(/\s+/g, " "),
        b = a.split(" "),
        c;
        A.forEach(this,
        function(a) {
            for (var a = a.className,
            f = 0; f < b.length; f++) if (!~ (" " + a + " ").indexOf(" " + b[f] + " ")) {
                c = t;
                return
            }
            c !== t && (c = p)
        });
        return c
    };
    A.U.wf = function(a, b) {
        var c = A.U,
        a = c.fa(a);
        if (a === s) return a;
        var b = A.kl.YO(b),
        e = a.style[b];
        if (!e) var f = c.UB[b],
        e = a.currentStyle || (A.ga.oa ? a.style: getComputedStyle(a, s)),
        e = f && f.get ? f.get(a, e) : e[f || b];
        if (f = c.hm) e = f.filter(b, e, "get");
        return e
    };
    A.wf = A.U.wf;
    /opera\/(\d+\.\d)/i.test(navigator.userAgent) && (A.ga.opera = +RegExp.$1);
    A.ga.OM = /webkit/i.test(navigator.userAgent);
    A.ga.rZ = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent);
    A.ga.LE = "CSS1Compat" == document.compatMode;
    A.U.ma = function(a) {
        a = A.U.fa(a);
        if (a === s) return a;
        var b = A.U.YD(a),
        c = A.ga,
        e = A.U.wf;
        c.rZ > 0 && b.getBoxObjectFor && e(a, "position");
        var f = {
            left: 0,
            top: 0
        },
        g;
        if (a == (c.oa && !c.LE ? b.body: b.documentElement)) return f;
        if (a.getBoundingClientRect) {
            a = a.getBoundingClientRect();
            f.left = Math.floor(a.left) + Math.max(b.documentElement.scrollLeft, b.body.scrollLeft);
            f.top = Math.floor(a.top) + Math.max(b.documentElement.scrollTop, b.body.scrollTop);
            f.left = f.left - b.documentElement.clientLeft;
            f.top = f.top - b.documentElement.clientTop;
            a = b.body;
            b = parseInt(e(a, "borderLeftWidth"));
            e = parseInt(e(a, "borderTopWidth"));
            if (c.oa && !c.LE) {
                f.left = f.left - (isNaN(b) ? 2 : b);
                f.top = f.top - (isNaN(e) ? 2 : e)
            }
        } else {
            g = a;
            do {
                f.left = f.left + g.offsetLeft;
                f.top = f.top + g.offsetTop;
                if (c.OM > 0 && e(g, "position") == "fixed") {
                    f.left = f.left + b.body.scrollLeft;
                    f.top = f.top + b.body.scrollTop;
                    break
                }
                g = g.offsetParent
            } while ( g && g != a );
            if (c.opera > 0 || c.OM > 0 && e(a, "position") == "absolute") f.top = f.top - b.body.offsetTop;
            for (g = a.offsetParent; g && g != b.body;) {
                f.left = f.left - g.scrollLeft;
                if (!c.opera || g.tagName != "TR") f.top = f.top - g.scrollTop;
                g = g.offsetParent
            }
        }
        return f
    };
    /firefox\/(\d+\.\d)/i.test(navigator.userAgent) && (A.ga.We = +RegExp.$1);
    /BIDUBrowser/i.test(navigator.userAgent) && (A.ga.p3 = p);
    var la = navigator.userAgent;
    /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(la) && !/chrome/i.test(la) && (A.ga.Qy = +(RegExp.$1 || RegExp.$2));
    /chrome\/(\d+\.\d)/i.test(navigator.userAgent) && (A.ga.dx = +RegExp.$1);
    A.oc = A.oc || {};
    A.oc.Rb = function(a, b) {
        var c, e, f = a.length;
        if ("function" == typeof b) for (e = 0; e < f; e++) {
            c = a[e];
            c = b.call(a, c, e);
            if (c === t) break
        }
        return a
    };
    A.Rb = A.oc.Rb;
    A.lang.da = function() {
        return "TANGRAM__" + (window[A.da]._counter++).toString(36)
    };
    window[A.da]._counter = window[A.da]._counter || 1;
    window[A.da]._instances = window[A.da]._instances || {};
    A.lang.Mt = function(a) {
        return "[object Function]" == Object.prototype.toString.call(a)
    };
    A.lang.Ja = function(a) {
        this.da = a || A.lang.da();
        window[A.da]._instances[this.da] = this
    };
    window[A.da]._instances = window[A.da]._instances || {};
    A.lang.Ja.prototype.qi = ha(0);
    A.lang.Ja.prototype.toString = function() {
        return "[object " + (this.aR || "Object") + "]"
    };
    A.lang.av = function(a, b) {
        this.type = a;
        this.returnValue = p;
        this.target = b || s;
        this.currentTarget = s
    };
    A.lang.Ja.prototype.addEventListener = function(a, b, c) {
        if (A.lang.Mt(b)) { ! b.xl && (b.xl = {}); ! this.Vi && (this.Vi = {});
            var e = this.Vi,
            f;
            if (typeof c == "string" && c) { / [ ^ \w\ - ] / .test(c) && aa("nonstandard key:" + c);
                f = b.Vx = c
            }
            a.indexOf("on") != 0 && (a = "on" + a);
            typeof e[a] != "object" && (e[a] = {});
            typeof b.xl[a] != "object" && (b.xl[a] = {});
            f = f || A.lang.da();
            b.xl[a].Vx = f;
            e[a][f] = b
        }
    };
    A.lang.Ja.prototype.removeEventListener = function(a, b) {
        a.indexOf("on") != 0 && (a = "on" + a);
        if (A.lang.Mt(b)) {
            if (!b.xl || !b.xl[a]) return;
            b = b.xl[a].Vx
        } else if (!A.lang.Ig(b)) return; ! this.Vi && (this.Vi = {});
        var c = this.Vi;
        c[a] && c[a][b] && delete c[a][b]
    };
    A.lang.Ja.prototype.dispatchEvent = function(a, b) {
        A.lang.Ig(a) && (a = new A.lang.av(a)); ! this.Vi && (this.Vi = {});
        var b = b || {},
        c;
        for (c in b) a[c] = b[c];
        var e = this.Vi,
        f = a.type;
        a.target = a.target || this;
        a.currentTarget = this;
        f.indexOf("on") != 0 && (f = "on" + f);
        A.lang.Mt(this[f]) && this[f].apply(this, arguments);
        if (typeof e[f] == "object") for (c in e[f]) e[f][c].apply(this, arguments);
        return a.returnValue
    };
    A.lang.xa = function(a, b, c) {
        var e, f, g = a.prototype;
        f = new Function;
        f.prototype = b.prototype;
        f = a.prototype = new f;
        for (e in g) f[e] = g[e];
        a.prototype.constructor = a;
        a.L0 = b.prototype;
        if ("string" == typeof c) f.aR = c
    };
    A.xa = A.lang.xa;
    A.lang.Uc = function(a) {
        return window[A.da]._instances[a] || s
    };
    A.platform = A.platform || {};
    A.platform.IM = /macintosh/i.test(navigator.userAgent);
    A.platform.C5 = /MicroMessenger/i.test(navigator.userAgent);
    A.platform.PM = /windows/i.test(navigator.userAgent);
    A.platform.AZ = /x11/i.test(navigator.userAgent);
    A.platform.Fj = /android/i.test(navigator.userAgent);
    /android (\d+(\.\d)?)/i.test(navigator.userAgent) && (A.platform.qC = A.qC = RegExp.$1);
    A.platform.tZ = /ipad/i.test(navigator.userAgent);
    A.platform.HE = /iphone/i.test(navigator.userAgent);
    function ma(a, b) {
        a.domEvent = b = window.event || b;
        a.clientX = b.clientX || b.pageX;
        a.clientY = b.clientY || b.pageY;
        a.offsetX = b.offsetX || b.layerX;
        a.offsetY = b.offsetY || b.layerY;
        a.screenX = b.screenX;
        a.screenY = b.screenY;
        a.ctrlKey = b.ctrlKey || b.metaKey;
        a.shiftKey = b.shiftKey;
        a.altKey = b.altKey;
        if (b.touches) {
            a.touches = [];
            for (var c = 0; c < b.touches.length; c++) a.touches.push({
                clientX: b.touches[c].clientX,
                clientY: b.touches[c].clientY,
                screenX: b.touches[c].screenX,
                screenY: b.touches[c].screenY,
                pageX: b.touches[c].pageX,
                pageY: b.touches[c].pageY,
                target: b.touches[c].target,
                identifier: b.touches[c].identifier
            })
        }
        if (b.changedTouches) {
            a.changedTouches = [];
            for (c = 0; c < b.changedTouches.length; c++) a.changedTouches.push({
                clientX: b.changedTouches[c].clientX,
                clientY: b.changedTouches[c].clientY,
                screenX: b.changedTouches[c].screenX,
                screenY: b.changedTouches[c].screenY,
                pageX: b.changedTouches[c].pageX,
                pageY: b.changedTouches[c].pageY,
                target: b.changedTouches[c].target,
                identifier: b.changedTouches[c].identifier
            })
        }
        if (b.targetTouches) {
            a.targetTouches = [];
            for (c = 0; c < b.targetTouches.length; c++) a.targetTouches.push({
                clientX: b.targetTouches[c].clientX,
                clientY: b.targetTouches[c].clientY,
                screenX: b.targetTouches[c].screenX,
                screenY: b.targetTouches[c].screenY,
                pageX: b.targetTouches[c].pageX,
                pageY: b.targetTouches[c].pageY,
                target: b.targetTouches[c].target,
                identifier: b.targetTouches[c].identifier
            })
        }
        a.rotation = b.rotation;
        a.scale = b.scale;
        return a
    }
    A.lang.qx = function(a) {
        var b = window[A.da];
        b.gT && delete b.gT[a]
    };
    A.event = {};
    A.V = A.event.V = function(a, b, c) {
        if (! (a = A.fa(a))) return a;
        b = b.replace(/^on/, "");
        a.addEventListener ? a.addEventListener(b, c, t) : a.attachEvent && a.attachEvent("on" + b, c);
        return a
    };
    A.kd = A.event.kd = function(a, b, c) {
        if (! (a = A.fa(a))) return a;
        b = b.replace(/^on/, "");
        a.removeEventListener ? a.removeEventListener(b, c, t) : a.detachEvent && a.detachEvent("on" + b, c);
        return a
    };
    A.U.Dt = function(a, b) {
        if (!a || !a.className || typeof a.className != "string") return t;
        var c = -1;
        try {
            c = a.className == b || a.className.search(RegExp("(\\s|^)" + b + "(\\s|$)"))
        } catch(e) {
            return t
        }
        return c > -1
    };
    A.rL = function() {
        function a(a) {
            document.addEventListener && (this.element = a, this.uL = this.Tk ? "touchstart": "mousedown", this.ED = this.Tk ? "touchmove": "mousemove", this.DD = this.Tk ? "touchend": "mouseup", this.Eh = t, this.Hu = this.Gu = 0, this.element.addEventListener(this.uL, this, t), ja.V(this.element, "mousedown", u()), this.handleEvent(s))
        }
        a.prototype = {
            Tk: "ontouchstart" in window || "createTouch" in document,
            start: function(a) {
                na(a);
                this.Eh = t;
                this.Gu = this.Tk ? a.touches[0].clientX: a.clientX;
                this.Hu = this.Tk ? a.touches[0].clientY: a.clientY;
                this.element.addEventListener(this.ED, this, t);
                this.element.addEventListener(this.DD, this, t)
            },
            move: function(a) {
                oa(a);
                var c = this.Tk ? a.touches[0].clientY: a.clientY;
                if (10 < Math.abs((this.Tk ? a.touches[0].clientX: a.clientX) - this.Gu) || 10 < Math.abs(c - this.Hu)) this.Eh = p
            },
            end: function(a) {
                oa(a);
                this.Eh || (a = document.createEvent("Event"), a.initEvent("tap", t, p), this.element.dispatchEvent(a));
                this.element.removeEventListener(this.ED, this, t);
                this.element.removeEventListener(this.DD, this, t)
            },
            handleEvent: function(a) {
                if (a) switch (a.type) {
                case this.uL:
                    this.start(a);
                    break;
                case this.ED:
                    this.move(a);
                    break;
                case this.DD:
                    this.end(a)
                }
            }
        };
        return function(b) {
            return new a(b)
        }
    } ();
    var F = window.BMap || {};
    F.version = "3.0";
    function pa(a, b) {
        if (navigator.cookieEnabled) {
            var c = new Date;
            c.setTime(c.getTime() + 2592E6);
            document.cookie = a + "=" + escape(b) + ";expires=" + c.toGMTString()
        } else localStorage ? localStorage.setItem(a, b) : sessionStorage && sessionStorage.setItem(a, b)
    }
    F.f3 = 0.34 > Math.random();
    0 <= F.version.indexOf("#") && (F.version = "3.1");
    F.$r = [];
    F.df = function(a) {
        this.$r.push(a)
    };
    F.Sr = [];
    F.Zk = function(a) {
        this.Sr.push(a)
    };
    F.tV = F.apiLoad || u();
    F.mz = F.verify ||
    function(a) {
        if (F.version && F.version >= 1.5) {
            var b = F.cd + "?qt=verify&ak=" + qa;
            a && (b = b + "&fromPanorama=" + a);
            ra(b,
            function(a) {
                if (a && a.error !== 0) {
                    F = s;
                    var b = "\u60a8\u63d0\u4f9b\u7684\u5bc6\u94a5\u4e0d\u662f\u6709\u6548\u7684\u767e\u5ea6LBS\u5f00\u653e\u5e73\u53f0\u5bc6\u94a5\uff0c\u6216\u6b64\u5bc6\u94a5\u672a\u5bf9\u672c\u5e94\u7528\u7684\u767e\u5ea6\u5730\u56feJavaScriptAPI\u6388\u6743\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttps://lbsyun.baidu.com/apiconsole/key#\u3002";
                    a.error && sa[a.error] && (b = sa[a.error] + "\u8be6\u60c5\u67e5\u770b\uff1ahttps://lbsyun.baidu.com/apiconsole/key#\u3002");
                    alert(b);
                    if (typeof map !== "undefined" && typeof map.Ta === "function") {
                        map.Ta().innerHTML = "";
                        map.Vi = {}
                    }
                }
            })
        }
        var a = +new Date,
        c = J("script", {
            type: "text/javascript",
            async: ""
        });
        c.charset = "utf-8";
        c.src = "https://dlswbr.baidu.com/heicha/mw/abclite-2063-s.js?_t=" + a;
        c.onload = function() {
            window.___abvk && pa("SECKEY_ABVK", window.___abvk)
        };
        window.__abbaidu_2063_cb = function(a) {
            a = JSON.parse(a);
            pa("BMAP_SECKEY", a.data)
        };
        c.addEventListener ? c.addEventListener("load",
        function(a) {
            a = a.target;
            a.parentNode.removeChild(a)
        },
        t) : c.attachEvent && c.attachEvent("onreadystatechange",
        function() {
            var a = window.event.srcElement;
            a && (a.readyState == "loaded" || a.readyState == "complete") && a.parentNode.removeChild(a)
        });
        setTimeout(function() {
            document.getElementsByTagName("head")[0].appendChild(c);
            c = s
        },
        1)
    };
    var qa = window.BMAP_AUTHENTIC_KEY;
    window.BMAP_AUTHENTIC_KEY = s;
    var va = window.BMap_loadScriptTime,
    wa = (new Date).getTime(),
    xa = s,
    ya = p,
    za = 5042,
    Aa = 5002,
    Ca = 5003,
    Da = "load_mapclick",
    Ea = 5038,
    Fa = 5041,
    Ga = 5047,
    Ha = 5036,
    Ia = 5039,
    Ka = 5037,
    La = 5040,
    Ma = 5011,
    Na = 7E3,
    sa = {
        101 : "\u60a8\u6240\u4f7f\u7528\u7684\u5bc6\u94a5ak\u6709\u95ee\u9898\uff0c\u4e0d\u652f\u6301jsapi\u670d\u52a1\uff0c\u53ef\u4ee5\u8bbf\u95ee\u8be5\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u5bc6\u94a5\u3002",
        102 : "MCODE\u53c2\u6570\u4e0d\u5b58\u5728\uff0cmobile\u7c7b\u578bMCODE\u53c2\u6570\u5fc5\u9700\u3002",
        200 : "APP\u4e0d\u5b58\u5728\uff0cAK\u6709\u8bef\u8bf7\u68c0\u67e5\u518d\u91cd\u8bd5\u3002",
        201 : "APP\u88ab\u60a8\u7981\u7528\u5566\u3002",
        202 : "APP\u88ab\u7ba1\u7406\u5458\u5220\u9664\u5566\u3002",
        203 : "APP\u7c7b\u578b\u9519\u8bef\u3002",
        210 : "APP IP\u6821\u9a8c\u5931\u8d25\u3002",
        220 : "APP Referer\u6821\u9a8c\u5931\u8d25\u3002\u8bf7\u68c0\u67e5\u8be5ak\u8bbe\u7f6e\u7684\u767d\u540d\u5355\u4e0e\u8bbf\u95ee\u6240\u6709\u7684\u57df\u540d\u662f\u5426\u4e00\u81f4\u3002",
        230 : "APP Mcode\u7801\u6821\u9a8c\u5931\u8d25\u3002",
        240 : "APP\u670d\u52a1\u88ab\u7981\u7528\u4e86\u3002",
        250 : "\u8be5\u7528\u6237\u4e0d\u5b58\u5728...",
        251 : "\u8be5\u7528\u6237\u88ab\u81ea\u5df1\u5220\u9664\u5566\u3002",
        252 : "\u8be5\u7528\u6237\u88ab\u7ba1\u7406\u5458\u5220\u9664\u5566\u3002",
        260 : "\u60a8\u6240\u4f7f\u7528\u7684\u5bc6\u94a5AK\u4e0d\u5305\u542b\u8be5\u670d\u52a1\u5462\uff0c",
        261 : "\u60a8\u6240\u4f7f\u7528\u7684\u5bc6\u94a5AK\u7684\u8be5\u670d\u52a1\u88ab\u7981\u7528\u5566\uff0c",
        401 : "\u60a8\u6240\u4f7f\u7528\u7684AK\u5e76\u53d1\u8d85\u9650\u4e86\uff0c",
        302 : "\u60a8\u6240\u4f7f\u7528\u7684AK\u5929\u914d\u989d\u8d85\u9650\u4e86\uff0c"
    };
    var Oa = 0;
    function Pa(a, b) {
        if (a = A.fa(a)) {
            var c = this;
            A.lang.Ja.call(c);
            b = b || {};
            c.M = {
                FC: 200,
                jc: p,
                wx: t,
                tD: p,
                sp: p,
                vp: b.enableWheelZoom || t,
                pL: p,
                vD: p,
                up: p,
                dt: p,
                AD: p,
                qp: b.enable3DBuilding || t,
                Nc: 25,
                T1: 240,
                gV: 450,
                Ac: K.Ac,
                Ld: K.Ld,
                Ot: !!b.Ot,
                kc: Math.round(b.minZoom) || 1,
                qc: Math.round(b.maxZoom) || 19,
                Wa: b.mapType || Qa,
                E6: t,
                mL: b.drawer || Oa,
                vx: p,
                ux: 500,
                nX: b.enableHighResolution !== t,
                Em: b.enableMapClick !== t,
                devicePixelRatio: b.devicePixelRatio || window.devicePixelRatio || 1,
                pG: 99,
                Ee: b.mapStyle || s,
                HZ: b.logoControl === t ? t: p,
                AV: [],
                s3: b.beforeClickIcon || s,
                Zf: t,
                Gk: t,
                kp: t,
                gF: p,
                pD: b.enableBizAuthLogo === t ? t: p,
                Ma: b.coordsType || 5,
                j7: b.touchZoomCenter || 0,
                xD: b.enablePinchDragging === t ? t: p
            };
            c.M.Ee && (this.fZ(c.M.Ee.controls), this.DM(c.M.Ee.geotableId));
            c.M.Ee && c.M.Ee.styleId && c.V4(c.M.Ee.styleId);
            c.M.IC = {
                dark: {
                    backColor: "#2D2D2D",
                    textColor: "#bfbfbf",
                    iconUrl: "dicons"
                },
                normal: {
                    backColor: "#F3F1EC",
                    textColor: "#c61b1b",
                    iconUrl: "icons"
                },
                light: {
                    backColor: "#EBF8FC",
                    textColor: "#017fb4",
                    iconUrl: "licons"
                }
            };
            b.enableAutoResize && (c.M.dt = b.enableAutoResize);
            b.enableStreetEntrance === t && (c.M.AD = b.enableStreetEntrance);
            b.enableDeepZoom === t && (c.M.pL = b.enableDeepZoom);
            var e = c.M.AV;
            if (L()) for (var f = 0,
            g = e.length; f < g; f++) if (A.ga[e[f]]) {
                c.M.devicePixelRatio = 1;
                break
            }
            e = -1 < navigator.userAgent.toLowerCase().indexOf("android");
            f = -1 < navigator.userAgent.toLowerCase().indexOf("mqqbrowser");
            if ( - 1 < navigator.userAgent.toLowerCase().indexOf("UCBrowser") || e && f) c.M.pG = 99;
            c.bb = a;
            c.OB(a);
            a.unselectable = "on";
            a.innerHTML = "";
            a.appendChild(c.Ba());
            b.size && this.He(b.size);
            e = c.wb();
            c.width = e.width;
            c.height = e.height;
            c.offsetX = 0;
            c.offsetY = 0;
            c.platform = a.firstChild;
            c.Fe = c.platform.firstChild;
            c.Fe.style.width = c.width + "px";
            c.Fe.style.height = c.height + "px";
            c.ce = {};
            c.ge = new M(0, 0);
            c.Jb = new M(0, 0);
            c.Za = 3;
            c.Bc = 0;
            c.TC = s;
            c.SC = s;
            c.Qb = "";
            c.ex = "";
            c.Vh = {};
            c.Vh.custom = {};
            c.Xi = {};
            c.$a = 0;
            b.useWebGL === t && Ra(t);
            c.W = new Sa(a, {
                Xe: "api",
                kT: p
            });
            c.W.aa();
            c.W.KF(c);
            b = b || {};
            e = c.Wa = c.M.Wa;
            c.Dc = e.Bj();
            e && e.NF(c.M.Ma);
            Ta(Ua(1, 1), ["instance", "engine"]);
            e === Va && Wa(Aa);
            e === Xa && Wa(Ca);
            e === Ya || e === Xa ? Ta(Ua(3, 2), ["layer", "raster"]) : Ta(Ua(3, 17), ["layer", "normal_map"]);
            e = c.M;
            e.qP = Math.round(b.minZoom);
            e.pP = Math.round(b.maxZoom);
            c.tv();
            c.ba = {
                Pc: t,
                pc: 0,
                Tt: 0,
                UM: 0,
                G5: 0,
                xC: t,
                rF: -1,
                xe: []
            };
            c.platform.style.cursor = c.M.Ac;
            for (f = 0; f < F.$r.length; f++) F.$r[f](c);
            c.ba.rF = f;
            c.ha();
            Za.load("map",
            function() {
                c.ob()
            });
            c.M.Em && (setTimeout(function() {
                Wa(Da)
            },
            1E3), Za.load("mapclick",
            function() {
                window.MPC_Mgr = window.MPC_Mgr || {};
                window.MPC_Mgr[c.da] = new $a(c)
            },
            p));
            bb() && Za.load("oppc",
            function() {
                c.jv()
            });
            L() && Za.load("opmb",
            function() {
                c.jv()
            });
            a = s;
            c.bC = []
        }
    }
    A.lang.xa(Pa, A.lang.Ja, "Map");
    A.extend(Pa.prototype, {
        Ba: function() {
            var a = J("div"),
            b = a.style;
            b.overflow = "visible";
            b.position = "absolute";
            b.zIndex = "0";
            b.top = b.left = "0px";
            var b = J("div", {
                "class": "BMap_mask"
            }),
            c = b.style;
            c.position = "absolute";
            c.top = c.left = "0px";
            c.zIndex = "9";
            c.overflow = "hidden";
            c.WebkitUserSelect = "none";
            a.appendChild(b);
            return a
        },
        OB: function(a) {
            var b = a.style;
            b.overflow = "hidden";
            "absolute" !== cb(a).position && (b.position = "relative", b.zIndex = 0);
            b.backgroundColor = "#F3F1EC";
            b.color = "#000";
            b.textAlign = "left"
        },
        ha: function() {
            var a = this;
            a.Ro = function() {
                var b = a.wb();
                if (a.width !== b.width || a.height !== b.height) {
                    var c = new P(a.width, a.height),
                    e = new Q("onbeforeresize");
                    e.size = c;
                    a.dispatchEvent(e);
                    a.xk((b.width - a.width) / 2, (b.height - a.height) / 2);
                    a.Fe.style.width = (a.width = b.width) + "px";
                    a.Fe.style.height = (a.height = b.height) + "px";
                    c = new Q("onresize");
                    c.size = b;
                    a.dispatchEvent(c)
                }
            };
            a.M.dt && (a.ba.rm = setInterval(a.Ro, 80))
        },
        xk: function(a, b, c, e) {
            var f = this.ya().Wb(this.la()),
            g = this.Dc,
            i = p;
            if (c && (c instanceof R || c instanceof M)) c = db(c, this.M.Ma);
            c && R.GE(c) && (this.ge = new M(c.lng, c.lat), i = t);
            if (c = c && e ? g.Ai(c, this.Qb) : this.Jb) if (this.Jb = new M(c.lng + a * f, c.lat - b * f), (a = g.Dh(this.Jb, this.Qb)) && i) this.ge = a
        },
        Vg: function(a, b) {
            if (eb(a) && (this.tv(), this.dispatchEvent(new Q("onzoomstart")), a = this.oo(a).zoom, a !== this.Za)) {
                this.Bc = this.Za;
                this.Za = a;
                var c;
                b ? c = b: this.wh() && (c = this.wh().ma());
                c && (c = this.Bo(db(c, this.M.Ma), this.Bc), this.xk(this.width / 2 - c.x, this.height / 2 - c.y, this.tg(c, this.Bc), p));
                this.dispatchEvent(new Q("onzoomstartcode"))
            }
        },
        Xc: function(a) {
            this.Vg(a)
        },
        vG: function(a) {
            this.Vg(this.Za + 1, a)
        },
        wG: function(a) {
            this.Vg(this.Za - 1, a)
        },
        Ii: function(a) {
            if (a instanceof R || a instanceof M) a = db(a, this.M.Ma),
            this.Jb = this.Dc.Ai(a, this.Qb),
            this.ge = R.GE(a) ? new M(a.lng, a.lat) : this.Dc.Dh(this.Jb, this.Qb)
        },
        Og: function(a, b) {
            a = Math.round(a) || 0;
            b = Math.round(b) || 0;
            this.xk( - a, -b)
        },
        Vo: function(a) {
            a && fb(a.Le) && (a.Le(this), this.dispatchEvent(new Q("onaddcontrol", a)))
        },
        dO: function(a) {
            a && fb(a.remove) && (a.remove(), this.dispatchEvent(new Q("onremovecontrol", a)))
        },
        mm: function(a) {
            a && fb(a.za) && (a.za(this), this.dispatchEvent(new Q("onaddcontextmenu", a)))
        },
        hq: function(a) {
            a && fb(a.remove) && (this.dispatchEvent(new Q("onremovecontextmenu", a)), a.remove())
        },
        Ra: function(a) {
            a && fb(a.Le) && (a.Le(this), this.dispatchEvent(new Q("onaddoverlay", a)))
        },
        Lb: function(a) {
            a && fb(a.remove) && (a.remove(), this.dispatchEvent(new Q("onremoveoverlay", a)))
        },
        IK: function() {
            this.dispatchEvent(new Q("onclearoverlays"))
        },
        Te: function(a) {
            a && this.dispatchEvent(new Q("onaddtilelayer", a))
        },
        gg: function(a) {
            a && this.dispatchEvent(new Q("onremovetilelayer", a))
        },
        Sg: function(a) {
            if (this.Wa !== a) {
                this.M.KZ && this.j0(a);
                var b = new Q("onsetmaptype");
                b.v6 = this.Wa;
                this.Wa = this.M.Wa = a;
                this.Dc = this.Wa.Bj();
                this.xk(0, 0, this.Fv(), p);
                this.tv();
                var c = this.oo(this.la()).zoom;
                this.Vg(c);
                this.dispatchEvent(b);
                b = new Q("onmaptypechange");
                b.Za = c;
                b.Wa = a;
                this.dispatchEvent(b);
                a.NF(this.M.Ma);
                a === Ya || a === Xa ? (Wa(Ca), Ta(Ua(3, 2), ["layer", "raster"])) : Ta(Ua(3, 17), ["layer", "normal_map"])
            }
        },
        j0: function(a) {
            a === Ya || a === Xa ? (this.Uy(p), this.vO(t), this.M.Zf = t, this.M.Gk = t, Ta(Ua(3, 2), ["layer", "raster"])) : (this.Uy(t), this.vO(p), this.M.Zf = p, this.M.Gk = p, Ta(Ua(3, 1), ["layer", "vector"]))
        },
        Bf: function(a) {
            var b = this;
            if (a instanceof R || a instanceof M) b.Ii(a, {
                noAnimation: p
            });
            else if (gb(a)) if (b.Wa === Va) {
                var c = K.BC[a];
                c && (pt = c.o, b.Bf(pt))
            } else {
                var e = this.eI();
                e.vu(function(c) {
                    0 === e.Pm() && 2 === e.Ka.result.type && (c = c.Qk(0).point, c = new M(c.lng, c.lat), c = hb(c, b.M.Ma), b.Bf(c), Va.Kk(a) && b.GF(a))
                });
                e.search(a, {
                    log: "center"
                })
            }
        },
        xd: function(a, b) {
            "[object Undefined]" !== Object.prototype.toString.call(b) && (b = parseInt(b));
            F.Vq("cus.fire", "time", {
                z_loadscripttime: wa - va
            });
            var c = this;
            ra(F.cd + "?qt=business&ak=" + qa,
            function(a) {
                a && (0 === a.error && a.content && 0 === a.content.business && 1 === a.content.unauth) && (new ib).yE({
                    oz: c.bb.getAttribute("id"),
                    yP: "\u672a\u83b7\u5f97\u767e\u5ea6\u5730\u56fe\u5546\u7528\u6388\u6743"
                })
            });
            if (gb(a)) if (c.Wa === Va) {
                var e = K.BC[a];
                e && (pt = e.o, c.xd(pt, b))
            } else {
                var f = c.eI();
                f.vu(function(e) {
                    if (0 === f.Pm() && (2 === f.Ka.result.type || 11 === f.Ka.result.type)) {
                        var g = e.Qk(0).point,
                        e = b || jb.Bx(f.Ka.content.level, c),
                        g = new M(g.lng, g.lat);
                        c.xd(g, e);
                        Va.Kk(a) && c.GF(a)
                    }
                });
                f.search(a, {
                    log: "center"
                })
            } else if ((a instanceof R || a instanceof M) && b) {
                b = c.oo(b).zoom;
                c.Bc = c.Za || b;
                c.Za = b;
                e = c.ge;
                a = db(a, this.M.Ma);
                c.ge = new M(a.lng, a.lat);
                c.Jb = c.Dc.Ai(c.ge, c.Qb);
                c.TC = c.TC || c.Za;
                c.SC = c.SC || c.ge;
                var g = new Q("onload"),
                i = new Q("onloadcode");
                g.point = new M(a.lng, a.lat);
                g.pixel = c.Bo(c.ge, c.Za);
                g.zoom = b;
                c.loaded || (c.loaded = p, c.dispatchEvent(g), xa || (xa = kb()));
                c.dispatchEvent(i);
                g = new Q("onmoveend");
                g.lA = "centerAndZoom";
                e.Vb(c.ge) || c.dispatchEvent(g);
                c.dispatchEvent(new Q("onmoveend"));
                c.Bc !== c.Za && (e = new Q("onzoomend"), e.lA = "centerAndZoom", c.dispatchEvent(e));
                c.M.qp && c.qp()
            }
        },
        eI: function() {
            this.ba.eN || (this.ba.eN = new lb(1));
            return this.ba.eN
        },
        reset: function() {
            this.xd(this.SC, this.TC, p)
        },
        enableDragging: function() {
            this.M.jc = p
        },
        disableDragging: function() {
            this.M.jc = t
        },
        enableInertialDragging: function() {
            this.M.vx = p
        },
        disableInertialDragging: function() {
            this.M.vx = t
        },
        enableScrollWheelZoom: function() {
            this.M.vp = p
        },
        disableScrollWheelZoom: function() {
            this.M.vp = t
        },
        enableContinuousZoom: function() {
            this.M.sp = p
        },
        disableContinuousZoom: function() {
            this.M.sp = t
        },
        enableDoubleClickZoom: function() {
            this.M.tD = p
        },
        disableDoubleClickZoom: function() {
            this.M.tD = t
        },
        enableKeyboard: function() {
            this.M.wx = p
        },
        disableKeyboard: function() {
            this.M.wx = t
        },
        enablePinchToZoom: function() {
            this.M.up = p
        },
        disablePinchToZoom: function() {
            this.M.up = t
        },
        enableAutoResize: function() {
            this.M.dt = p;
            this.Ro();
            this.ba.rm || (this.ba.rm = setInterval(this.Ro, 80))
        },
        disableAutoResize: function() {
            this.M.dt = t;
            this.ba.rm && (clearInterval(this.ba.rm), this.ba.rm = s)
        },
        enableBizAuthLogo: function() {
            this.M.pD = p;
            this.$o && this.$o.show()
        },
        disableBizAuthLogo: function() {
            this.M.pD = t;
            this.$o && this.$o.aa()
        },
        enableMapClick: function() {
            this.M.Em = p;
            var a = this;
            window.MPC_Mgr && window.MPC_Mgr[a.da] ? window.MPC_Mgr[a.da].open() : (setTimeout(function() {
                Wa(Da)
            },
            1E3), Za.load("mapclick",
            function() {
                window.MPC_Mgr = window.MPC_Mgr || {};
                window.MPC_Mgr[a.da] = new $a(a)
            },
            p))
        },
        disableMapClick: function() {
            window.MPC_Mgr && window.MPC_Mgr[this.da] && window.MPC_Mgr[this.da].close();
            this.M.Em = t
        },
        qp: function() {
            this.M.qp = p;
            this.ao || (this.ao = new BuildingLayer({
                c4: p
            }), this.Te(this.ao))
        },
        OW: function() {
            this.M.qp = t;
            this.ao && (this.gg(this.ao), this.ao = s, delete this.ao)
        },
        wb: function() {
            return this.Rs && this.Rs instanceof P ? new P(this.Rs.width, this.Rs.height) : new P(this.bb.clientWidth, this.bb.clientHeight)
        },
        He: function(a) {
            a && a instanceof P ? (this.Rs = a, this.bb.style.width = a.width + "px", this.bb.style.height = a.height + "px") : this.Rs = s
        },
        Hb: function() {
            return hb(this.ge, this.M.Ma)
        },
        Fv: x("ge"),
        la: x("Za"),
        ZV: function() {
            this.Ro()
        },
        oo: function(a) {
            var b = this.M.kc,
            c = this.M.qc,
            e = t,
            a = Math.round(a);
            a < b && (e = p, a = b);
            a > c && (e = p, a = c);
            return {
                zoom: a,
                FD: e
            }
        },
        Ta: x("bb"),
        vc: function(a, b) {
            a = db(a, this.M.Ma);
            b = b || this.la();
            return this.Dc.vc(a, b, this.Jb, this.wb(), this.Qb)
        },
        Bo: function(a, b) {
            b = b || this.la();
            return this.Dc.vc(a, b, this.Jb, this.wb(), this.Qb)
        },
        tg: function(a, b) {
            b = b || this.la();
            return this.Dc.cc(a, b, this.Jb, this.wb(), this.Qb)
        },
        ST: function(a, b) {
            b = b || this.la();
            return this.Dc.Hy(a, b, this.Jb, this.wb())
        },
        Hy: function(a, b) {
            return this.ST(a, b)
        },
        cc: function(a, b) {
            return hb(this.tg(a, b), this.M.Ma)
        },
        cf: function(a, b) {
            if (a) {
                var a = db(a, this.M.Ma),
                c = this.Bo(new M(a.lng, a.lat), b);
                c.x -= this.offsetX;
                c.y -= this.offsetY;
                return c
            }
        },
        NZ: function(a, b) {
            b = b || this.la();
            return this.Dc.OZ(a, b, this.Jb, this.wb(), this.Qb)
        },
        MZ: function(a, b) {
            if (a) {
                var c = this.NZ(new M(a.lng, a.lat), b);
                c.x -= this.offsetX;
                c.y -= this.offsetY;
                return c
            }
        },
        ON: function(a, b) {
            if (a) {
                var c = new S(a.x, a.y);
                c.x += this.offsetX;
                c.y += this.offsetY;
                return this.cc(c, b)
            }
        },
        NT: function(a, b) {
            if (a) {
                var c = new S(a.x, a.y);
                c.x += this.offsetX;
                c.y += this.offsetY;
                return this.tg(c, b)
            }
        },
        pointToPixelFor3D: function(a, b) {
            var c = map.Qb;
            this.Wa === Va && c && mb.OK(a, this, b)
        },
        m6: function(a, b) {
            var c = map.Qb;
            this.Wa === Va && c && mb.NK(a, this, b)
        },
        n6: function(a, b) {
            var c = this,
            e = map.Qb;
            c.Wa === Va && e && mb.OK(a, c,
            function(a) {
                a.x -= c.offsetX;
                a.y -= c.offsetY;
                b && b(a)
            })
        },
        k6: function(a, b) {
            var c = map.Qb;
            this.Wa === Va && c && (a.x += this.offsetX, a.y += this.offsetY, mb.NK(a, this, b))
        },
        ke: function(a) {
            if (!this.Nt()) return new nb;
            var b = a || {},
            a = b.margins || [0, 0, 0, 0],
            c = b.zoom || s,
            b = this.cc({
                x: a[3],
                y: this.height - a[2]
            },
            c),
            a = this.cc({
                x: this.width - a[1],
                y: a[0]
            },
            c);
            return new nb(b, a)
        },
        RX: function(a) {
            if (!this.Nt()) return new nb;
            var b = a || {},
            a = b.margins || [0, 0, 0, 0],
            c = b.zoom || s,
            b = this.Hy({
                x: a[3],
                y: this.height - a[2]
            },
            c),
            a = this.Hy({
                x: this.width - a[1],
                y: a[0]
            },
            c);
            return new nb(b, a)
        },
        Nt: function() {
            return !! this.loaded
        },
        pS: function(a, b) {
            for (var c = this.ya(), e = b.margins || [10, 10, 10, 10], f = b.zoomFactor || 0, g = e[1] + e[3], e = e[0] + e[2], i = c.sf(), k = c = c.Ye(); k >= i; k--) {
                var m = this.ya().Wb(k);
                if (a.hG().lng / m < this.width - g && a.hG().lat / m < this.height - e) break
            }
            k += f;
            k < i && (k = i);
            k > c && (k = c);
            return k
        },
        Ct: function(a, b) {
            var c = {
                center: this.Hb(),
                zoom: this.la()
            };
            if (!a || !a instanceof nb && 0 === a.length || a instanceof nb && a.Hj()) return c;
            var e = [];
            a instanceof nb ? (e.push(a.tf()), e.push(a.Be())) : e = a.slice(0);
            for (var b = b || {},
            f = [], g = 0, i = e.length; g < i; g++) {
                var k = db(e[g], this.M.Ma);
                f.push(this.Dc.Ai(k, this.Qb))
            }
            e = new nb;
            for (g = f.length - 1; 0 <= g; g--) e.extend(f[g]);
            if (e.Hj()) return c;
            c = e.Hb();
            f = this.pS(e, b);
            b.margins && (e = b.margins, g = (e[1] - e[3]) / 2, e = (e[0] - e[2]) / 2, i = this.ya().Wb(f), b.offset && (g = b.offset.width, e = b.offset.height), c.lng += i * g, c.lat += i * e);
            c = this.Dc.Dh(c, this.Qb);
            return {
                center: hb(new M(c.lng, c.lat), this.M.Ma),
                zoom: f
            }
        },
        Tg: function(a, b) {
            var c;
            c = a && a.center ? a: this.Ct(a, b);
            var b = b || {},
            e = b.delay || 200;
            if (c.zoom === this.Za && b.enableAnimation !== t) {
                var f = this;
                setTimeout(function() {
                    f.Ii(c.center, {
                        duration: 210
                    })
                },
                e)
            } else this.xd(c.center, c.zoom)
        },
        $f: x("ce"),
        wh: function() {
            return this.ba.xb && this.ba.xb.eb() ? this.ba.xb: s
        },
        getDistance: function(a, b) {
            if (a && b) {
                if (a.Vb(b)) return 0;
                var c = this.M ? this.M.Ma: 5,
                a = db(a, c),
                b = db(b, c),
                c = 0,
                c = T.Mk(a, b);
                if (c === s || c === l) c = 0;
                return c
            }
        },
        Nx: function() {
            var a = [],
            b = this.ua,
            c = this.Ie;
            if (b) for (var e in b) b[e] instanceof ob && a.push(b[e]);
            if (c) {
                e = 0;
                for (b = c.length; e < b; e++) a.push(c[e])
            }
            return a
        },
        ya: function() {
            this.Wa.NF(this.M.Ma);
            return this.Wa
        },
        JY: x("Id"),
        jv: function() {
            for (var a = this.ba.rF; a < F.$r.length; a++) F.$r[a](this);
            this.ba.rF = a
        },
        GF: function(a) {
            this.Qb = Va.Kk(a);
            this.ex = Va.KL(this.Qb);
            this.Wa === Va && this.Dc instanceof pb && (this.Dc.sj = this.Qb)
        },
        setDefaultCursor: function(a) {
            this.M.Ac = a;
            this.platform && (this.platform.style.cursor = this.M.Ac)
        },
        getDefaultCursor: function() {
            return this.M.Ac
        },
        setDraggingCursor: function(a) {
            this.M.Ld = a
        },
        getDraggingCursor: function() {
            return this.M.Ld
        },
        $x: function() {
            return this.M.nX && 1.5 <= this.M.devicePixelRatio
        },
        hC: function(a, b) {
            b ? this.Vh[b] || (this.Vh[b] = {}) : b = "custom";
            a.tag = b;
            a instanceof qb && (this.Vh[b][a.da] = a, a.za(this));
            var c = this;
            Za.load("hotspot",
            function() {
                c.jv()
            },
            p)
        },
        H_: function(a, b) {
            b || (b = "custom");
            this.Vh[b][a.da] && delete this.Vh[b][a.da]
        },
        gx: function(a) {
            a || (a = "custom");
            this.Vh[a] = {}
        },
        tv: function() {
            var a = this.Wa.sf(),
            b = this.Wa.Ye(),
            c = this.M;
            c.kc = c.qP || a;
            c.qc = c.pP || b;
            c.kc < a && (c.kc = a);
            c.qc > b && (c.qc = b)
        },
        setMinZoom: function(a) {
            a = Math.round(a);
            a > this.M.qc && (a = this.M.qc);
            this.M.qP = a;
            this.TJ()
        },
        setMaxZoom: function(a) {
            a = Math.round(a);
            a < this.M.kc && (a = this.M.kc);
            this.M.pP = a;
            this.TJ()
        },
        TJ: function() {
            this.tv();
            var a = this.M;
            this.Za < a.kc ? this.Xc(a.kc) : this.Za > a.qc && this.Xc(a.qc);
            var b = new Q("onzoomspanchange");
            b.kc = a.kc;
            b.qc = a.qc;
            this.dispatchEvent(b)
        },
        Z4: x("bC"),
        getKey: function() {
            return qa
        },
        l0: function(a) {
            function b(a) {
                c.H0 = a;
                var b = F.cd + "custom/v2/mapstyle",
                g = "qt=custom_v2&version=4&ak=" + qa + "&",
                g = g + "is_all=true&is_new=1&" + ("styles=" + encodeURIComponent(c.aG(a, f))),
                a = rb(b + "?" + g),
                g = a.substring(a.indexOf("?") + 1);
                sb(b, g, window[e + "cb"])
            }
            var c = this,
            e = this.da;
            F.Vq("cus.fire", "count", "z_setmapstylev2count");
            Ta(Ua(1, 2, 1), ["instance", "custom_style", "vector"]);
            this.Uy(t);
            this.M.KZ = p;
            window.MPC_Mgr && window.MPC_Mgr[c.da] && window.MPC_Mgr[c.da].close();
            c.M.Em = t;
            this.addEventListener("hidecopyright",
            function() {
                c.Dk.aa();
                c.M.kp = !!a.customEditor;
                c.M.kp === t && c.FF(new P(1, 1))
            });
            c.Dk && c.Dk.aa();
            this.M.kp = !!a.customEditor;
            this.M.T6 = !!a.sharing;
            this.M.z6 = !!a.preview;
            this.M.kp === t && this.FF(new P(1, 1));
            Za.load("hotspot",
            function() {
                c.jv()
            },
            p);
            window[e + "zoomRegion"] = {};
            window.I7 = [];
            window[e + "zoomStyleBody"] = [];
            window[e + "zoomFrontStyle"] = {};
            var f = this.la();
            A.extend({},
            a);
            window[e + "cb"] = function(a) {
                a = JSON.parse(a);
                0 === a.status && (3 === a.data.style.length ? (window[e + "_bmap_baseFs"] = a.data.style, window[e + "StyleBody"] = a.data.style[2]) : window[e + "StyleBody"] = a.data.style, c.lP(), c.mZ())
            };
            if (a.styleId) {
                var g = "jsapi";
                a.sharing ? g = "sharing": a.preview && (g = "preview");
                this.hY(a.styleId, g, b)
            } else b(a.styleJson);
            window.iconSetInfo_high || ra(F.url.proto + F.url.domain.TILE_ONLINE_URLS[0] + "/sty/icons_na2x.js?udt=20190108&v=001&from=jsapi")
        },
        hY: function(a, b, c) {
            var e = this,
            f = this.da,
            g = (1E5 * Math.random()).toFixed(0);
            window[f + "_cbk_si_phpui" + g] = function(a) {
                var b = [];
                a.result && (0 === a.result.error && a.content && 0 === a.content.status) && (b = e.Ey(a.content.data.json));
                c && c(b)
            };
            window[f + "_cbk_si_api" + g] = function(a) {
                var b = [];
                0 === a.status && (b = a.info ? e.Ey(a.info.json) : e.Ey(a.data.json));
                c && c(b)
            };
            var i = "/apiconsole/custommap/";
            switch (b) {
            case "jsapi":
                i = F.cd + "?qt=custom_map&v=3.0";
                i += "&style_id=" + a + "&type=publish&ak=" + qa;
                i += "&callback=" + f + "_cbk_si_phpui" + g;
                break;
            case "sharing":
                i = i + "getSharingJson" + ("?styleid=" + a + "&type=edit") + ("&ck=" + f + "_cbk_si_api" + g);
                break;
            case "preview":
                i = i + "getJson" + ("?styleid=" + a + "&type=edit") + ("&ck=" + f + "_cbk_si_api" + g)
            }
            ra(i)
        },
        HW: function() {
            Array.prototype.map || (Array.prototype.map = function(a, b) {
                var c, e, f;
                this == s && aa(new TypeError(" this is null or not defined"));
                var g = Object(this),
                i = g.length >>> 0;
                "[object Function]" != Object.prototype.toString.call(a) && aa(new TypeError(a + " is not a function"));
                b && (c = b);
                e = Array(i);
                for (f = 0; f < i;) {
                    var k;
                    f in g && (k = g[f], k = a.call(c, k, f, g), e[f] = k);
                    f++
                }
                return e
            })
        },
        Ey: function(a) {
            if (a === s || "" === a) return [];
            this.HW();
            var b = {
                t: "featureType",
                e: "elementType",
                v: "visibility",
                c: "color",
                l: "lightness",
                s: "saturation",
                w: "weight",
                z: "level",
                h: "hue",
                f: "fontsize",
                zri: "curZoomRegionId",
                zr: "curZoomRegion"
            },
            c = {
                all: "all",
                g: "geometry",
                "g.f": "geometry.fill",
                "g.s": "geometry.stroke",
                l: "labels",
                "l.t.f": "labels.text.fill",
                "l.t.s": "labels.text.stroke",
                "l.t": "labels.text",
                "l.i": "labels.icon",
                "g.tf": "geometry.fill"
            };
            return a.split(",").map(function(a) {
                var a = a.split("|").map(function(a) {
                    var e = b[a.split(":")[0]],
                    a = c[a.split(":")[1]] ? c[a.split(":")[1]] : a.split(":")[1];
                    switch (a) {
                    case "poi":
                        a = "poilabel";
                        break;
                    case "districtlabel":
                        a = "districtlabel"
                    }
                    var f = {};
                    f[e] = a;
                    return f
                }),
                f = a[0],
                g = 1;
                a[1].elementType && (g = 2, A.extend(f, a[1]));
                for (var i = {}; g < a.length; g++) A.extend(i, a[g]);
                return A.extend(f, {
                    stylers: i
                })
            })
        },
        OY: function() {
            return this.ef.og
        },
        K4: function(a, b) {
            var c = this,
            e = this.da,
            f = (1E5 * Math.random()).toFixed(0);
            window[e + "_cbk" + f] = function(b) {
                b = JSON.parse(b);
                b = 3 === b.data.style.length ? b.data.style[2] : b.data.style;
                c.q1(b, a);
                c.lP(a);
                b = new Q("onzoomfeatureload" + a);
                c.dispatchEvent(b);
                delete window[e + "_cbk" + f]
            };
            var g = F.cd + "custom/v2/mapstyle",
            i = "qt=custom_v2&ak=" + qa + "&",
            i = i + "is_all=true&is_new=1&";
            b.styleJson ? i += "styles=" + encodeURIComponent(this.aG(b.styleJson, parseInt(a, 10))) : b.styleId && (i += "styles=" + encodeURIComponent(c.aG(c.H0, parseInt(a, 10))));
            i = rb(g + "?" + i);
            i = i.substring(i.indexOf("?") + 1);
            sb(g, i, window[e + "_cbk" + f])
        },
        FF: function(a, b) {
            var c = new Q("oncopyrightoffsetchange", {
                WE: a,
                uW: b
            });
            this.M.SK = b;
            this.dispatchEvent(c)
        },
        su: function(a) {
            var b = this;
            window.MPC_Mgr && window.MPC_Mgr[b.da] && window.MPC_Mgr[b.da].close();
            b.M.Em = t;
            F.Vq("cus.fire", "count", "z_setmapstylecount");
            if (a) {
                b = this;
                a.styleJson && (a.styleStr = b.I0(a.styleJson));
                L() && A.ga.Qy ? setTimeout(function() {
                    b.M.Ee = a;
                    b.dispatchEvent(new Q("onsetcustomstyles", a))
                },
                50) : (this.M.Ee = a, this.dispatchEvent(new Q("onsetcustomstyles", a)), this.DM(b.M.Ee.geotableId));
                var c = {
                    style: a.style
                };
                a.features && 0 < a.features.length && (c.features = p);
                a.styleJson && 0 < a.styleJson.length && (c.styleJson = p);
                Wa(5050, c);
                a.style && (c = b.M.IC[a.style] ? b.M.IC[a.style].backColor: b.M.IC.normal.backColor) && (this.Ta().style.backgroundColor = c)
            }
        },
        fZ: function(a) {
            this.controls || (this.controls = {
                navigationControl: new tb,
                scaleControl: new ub,
                overviewMapControl: new vb,
                mapTypeControl: new wb
            });
            var b = this,
            c;
            for (c in this.controls) b.dO(b.controls[c]);
            a = a || [];
            A.oc.Rb(a,
            function(a) {
                b.Vo(b.controls[a])
            })
        },
        DM: function(a) {
            a ? this.Ps && this.Ps.Lf === a || (this.gg(this.Ps), this.Ps = new xb({
                geotableId: a
            }), this.Te(this.Ps)) : this.gg(this.Ps)
        },
        Vd: function() {
            var a = this.la() >= this.M.pG && this.ya() === Qa && 18 >= this.la(),
            b = t;
            try {
                document.createElement("canvas").getContext("2d"),
                b = p
            } catch(c) {
                b = t
            }
            return a && b
        },
        getCurrentCity: function() {
            return {
                name: this.qh,
                code: this.Cs
            }
        },
        xt: function() {
            this.W.to();
            return this.W
        },
        jZ: function(a) {
            Qa.setMaxZoom(a.maxZoom || 19);
            var b = new Q("oninitindoorlayer");
            b.$e = a;
            this.dispatchEvent(b);
            this.M.Zf = t
        },
        mZ: function(a) {
            if (this.M.Zf) {
                var b = new Q("onupdatestyles");
                this.dispatchEvent(b)
            } else b = new Q("oninitindoorlayer"),
            b.$e = a,
            this.dispatchEvent(b),
            this.M.Zf = p,
            this.M.Gk = p
        },
        Uy: function(a) {
            this.M.gF = a;
            this.ef.Mb || (this.ef.Mb = this.ef.Jj[0].Mb);
            this.ef.Mb.parentElement.style.display = a ? "block": "none"
        },
        vO: function(a) {
            this.ef.og.style.display = a ? "block": "none"
        },
        setPanorama: function(a) {
            this.W = a;
            this.W.KF(this)
        },
        aG: function(a, b) {
            for (var c = this.da,
            e = {
                featureType: "t",
                elementType: "e",
                visibility: "v",
                color: "c",
                lightness: "l",
                saturation: "s",
                weight: "w",
                level: "z",
                hue: "h",
                fontsize: "f"
            },
            f = {
                all: "all",
                geometry: "g",
                "geometry.fill": "g.f",
                "geometry.stroke": "g.s",
                labels: "l",
                "labels.text.fill": "l.t.f",
                "labels.text.stroke": "l.t.s",
                "labels.text": "l.t",
                "labels.icon": "l.i",
                "geometry.topfill": "g.f"
            },
            g = [], i = this.Wa.sf(); i <= this.Wa.Ye(); i++) window[c + "zoomFrontStyle"][i] = {};
            window[c + "zoomFrontStyle"].main = {};
            for (var i = 0,
            k; k = a[i]; i++) if (!this.uZ(k)) {
                b = this.bY(k, b);
                if (("land" === k.featureType || "all" === k.featureType || "background" === k.featureType) && "string" === typeof k.elementType && ("geometry" === k.elementType || "geometry.fill" === k.elementType || "all" === k.elementType) && k.stylers && (!k.stylers.visibility || "off" !== k.stylers.visibility)) k.stylers.color && (window[c + "zoomFrontStyle"][b].bmapLandColor = k.stylers.color);
                "railway" === k.featureType && ("string" === typeof k.elementType && k.stylers) && (k.stylers.color && ("geometry" === k.elementType && (window[c + "zoomFrontStyle"][b].bmapRailwayFillColor = k.stylers.color, window[c + "zoomFrontStyle"][b].bmapRailwayStrokeColor = k.stylers.color), "geometry.fill" === k.elementType && (window[c + "zoomFrontStyle"][b].bmapRailwayFillColor = k.stylers.color), "geometry.stroke" === k.elementType && (window[c + "zoomFrontStyle"][b].bmapRailwayStrokeColor = k.stylers.color)), k.stylers.visibility && (window[c + "zoomFrontStyle"][b].bmapRailwayVisibility = k.stylers.visibility));
                "roadarrow" === k.featureType && ("labels.icon" === k.elementType && k.stylers) && (window[c + "zoomFrontStyle"][b].bmapRoadarrowVisibility = k.stylers.visibility);
                var m = {};
                A.extend(m, k);
                k = m.stylers;
                delete m.stylers;
                A.extend(m, k);
                k = [];
                for (var n in e) if (m[n] && !this.qZ(n)) if ("elementType" === n) k.push(e[n] + ":" + f[m[n]]);
                else {
                    switch (m[n]) {
                    case "poilabel":
                        m[n] = "poi";
                        break;
                    case "districtlabel":
                        m[n] = "label"
                    }
                    k.push(e[n] + ":" + m[n])
                }
                2 < k.length && g.push(k.join("|"))
            }
            return g.join(",")
        },
        I0: function(a) {
            for (var b = {
                featureType: "t",
                elementType: "e",
                visibility: "v",
                color: "c",
                lightness: "l",
                saturation: "s",
                weight: "w",
                zoom: "z",
                hue: "h"
            },
            c = {
                all: "all",
                geometry: "g",
                "geometry.fill": "g.f",
                "geometry.stroke": "g.s",
                labels: "l",
                "labels.text.fill": "l.t.f",
                "labels.text.stroke": "l.t.s",
                "lables.text": "l.t",
                "labels.icon": "l.i"
            },
            e = [], f = 0, g; g = a[f]; f++) {
                var i = g.stylers;
                delete g.stylers;
                A.extend(g, i);
                var i = [],
                k;
                for (k in b) if (g[k]) if ("elementType" === k) i.push(b[k] + ":" + c[g[k]]);
                else {
                    switch (g[k]) {
                    case "poilabel":
                        g[k] = "poi";
                        break;
                    case "districtlabel":
                        g[k] = "label"
                    }
                    i.push(b[k] + ":" + g[k])
                }
                2 < i.length && e.push(i.join("|"))
            }
            return e.join(",")
        },
        bY: function(a) {
            a = a.stylers.level;
            return a === l ? "main": parseInt(a, 10)
        },
        uZ: function(a) {
            var b = {};
            A.extend(b, a.stylers);
            delete b.curZoomRegionId;
            delete b.curZoomRegion;
            delete b.level;
            return A.EE(b) ? p: t
        },
        y5: function(a, b) {
            var c = a.stylers.level;
            return c === l ? p: c === b + "" ? p: t
        },
        qZ: function(a) {
            return {
                curZoomRegionId: p,
                curZoomRegion: p
            } [a] ? p: t
        },
        a5: function(a, b) {
            var c = a.stylers.level,
            e = {};
            A.extend(e, b);
            c !== l && (e[parseInt(c, 10)] = p);
            return e
        },
        q1: function(a, b) {
            var c = this.da;
            window[c + "zoomStyleBody"][b] = a;
            if (!window[c + "zoomRegion"][b]) for (var e = this.Wa.sf(), f = this.Wa.Ye(); e <= f; e++) window[c + "zoomRegion"][e] || (window[c + "zoomStyleBody"][e] = a)
        },
        lP: function() {
            var a = this.da;
            if (window[a + "zoomFrontStyle"].main.bmapRoadarrowVisibility) for (var b = this.Wa.sf(); b <= this.Wa.Ye(); b++) window[a + "zoomFrontStyle"][b].bmapRoadarrowVisibility || (window[a + "zoomFrontStyle"][b].bmapRoadarrowVisibility = window[a + "zoomFrontStyle"].main.bmapRoadarrowVisibility);
            if (window[a + "zoomFrontStyle"].main.bmapLandColor) for (b = this.Wa.sf(); b <= this.Wa.Ye(); b++) window[a + "zoomFrontStyle"][b].bmapLandColor || (window[a + "zoomFrontStyle"][b].bmapLandColor = window[a + "zoomFrontStyle"].main.bmapLandColor);
            if (window[a + "zoomFrontStyle"].main.bmapRailwayFillColor) for (b = this.Wa.sf(); b <= this.Wa.Ye(); b++) window[a + "zoomFrontStyle"][b].bmapRailwayFillColor || (window[a + "zoomFrontStyle"][b].bmapRailwayFillColor = window[a + "zoomFrontStyle"].main.bmapRailwayFillColor);
            if (window[a + "zoomFrontStyle"].main.bmapRailwayStrokeColor) for (b = this.Wa.sf(); b <= this.Wa.Ye(); b++) window[a + "zoomFrontStyle"][b].bmapRailwayStrokeColor || (window[a + "zoomFrontStyle"][b].bmapRailwayStrokeColor = window[a + "zoomFrontStyle"].main.bmapRailwayStrokeColor);
            if (window[a + "zoomFrontStyle"].main.bmapRailwayVisibility) for (b = this.Wa.sf(); b <= this.Wa.Ye(); b++) window[a + "zoomFrontStyle"][b].bmapRailwayVisibility || (window[a + "zoomFrontStyle"][b].bmapRailwayVisibility = window[a + "zoomFrontStyle"].main.bmapRailwayVisibility)
        },
        v3: function(a, b) {
            var c = {};
            A.extend(c, a);
            if (c[b]) {
                for (var e = this.Wa.sf(), f = this.Wa.Ye(); e <= f; e++) if (!c[e]) {
                    c[e] = p;
                    break
                }
                delete c[b]
            }
            return c
        },
        w5: function(a) {
            return a.Lt || "0" === a.uid ? t: p
        },
        cW: function() {
            delete this.Xi.w_
        },
        A3: function() {
            this.Xi = {}
        },
        Uo: function(a, b, c) {
            if (!this.M.kp) return t;
            a = a || "sp" + this.ba.W6++;
            if (b && 0 !== b.length) return c = c || {},
            this.Xi[a] = this.Xi[a] || {
                polygon: [],
                polyline: []
            },
            this.Xi = this.Xi || {},
            this.Xi[a][c.type].push({
                WF: b,
                Yb: c.Yb,
                type: c.type,
                style: c.style
            }),
            a
        },
        L1: function(a) {
            return yb / Math.pow(2, 18 - a)
        }
    });
    var yb = 4.007545274461451E7;
    function Wa(a, b) {
        if (a) {
            var b = b || {},
            c = "",
            e;
            for (e in b) c = c + "&" + e + "=" + encodeURIComponent(b[e]);
            var f = function(a) {
                a && (zb = p, setTimeout(function() {
                    Ab.src = F.cd + "images/blank.gif?" + a.src
                },
                50))
            },
            g = function() {
                var a = Bb.shift();
                a && f(a)
            };
            e = (1E8 * Math.random()).toFixed(0);
            zb ? Bb.push({
                src: "product=jsapi&sub_product=jsapi&v=" + F.version + "&sub_product_v=" + F.version + "&t=" + e + "&code=" + a + "&da_src=" + a + c
            }) : f({
                src: "product=jsapi&sub_product=jsapi&v=" + F.version + "&sub_product_v=" + F.version + "&t=" + e + "&code=" + a + "&da_src=" + a + c
            });
            Cb || (A.V(Ab, "load",
            function() {
                zb = t;
                g()
            }), A.V(Ab, "error",
            function() {
                zb = t;
                g()
            }), Cb = p)
        }
    }
    var zb, Cb, Bb = [],
    Ab = new Image;
    Wa(5E3, {
        device_pixel_ratio: window.devicePixelRatio,
        platform: navigator.platform
    });
    F.xM = {
        TILE_BASE_URLS: ["maponline0.bdimg.com/starpic/?qt=satepc&", "maponline1.bdimg.com/starpic/?qt=satepc&", "maponline2.bdimg.com/starpic/?qt=satepc&", "maponline3.bdimg.com/starpic/?qt=satepc&"],
        TILE_ONLINE_URLS: ["maponline0.bdimg.com", "maponline1.bdimg.com", "maponline2.bdimg.com", "maponline3.bdimg.com"],
        TIlE_PERSPECT_URLS: ["gss0.bdstatic.com/-OR1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-ON1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-OZ1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-OV1cTe9KgQFm2e88IuM_a"],
        geolocControl: "gsp0.baidu.com/8LkJsjOpB1gCo2Kml5_Y_D3",
        TILES_YUN_HOST: ["gsp0.baidu.com/-eR1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eN1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eZ1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eV1bSahKgkFkRGko9WTAnF6hhy"],
        traffic: "itsmap2.baidu.com",
        message: "j.map.baidu.com",
        baidumap: "map.baidu.com",
        wuxian: "gsp0.baidu.com/6a1OdTeaKgQFm2e88IuM_a",
        pano: ["apisv0.bdimg.com", "apisv1.bdimg.com"],
        panoVerify: "api.map.baidu.com",
        main_domain_nocdn: {
            baidu: "api.map.baidu.com",
            other: "api.map.baidu.com"
        },
        main_domain_cdn: {
            baidu: ["mapapip0.bdimg.com", "mapapip1.bdimg.com", "mapapip2.bdimg.com"],
            other: ["api.map.baidu.com"],
            webmap: ["webmap0.bdimg.com"]
        },
        map_click: "gsp0.baidu.com/80MWbzKh2wt3n2qy8IqW0jdnxx1xbK",
        vector_traffic: "maponline0.bdimg.com"
    };
    F.YY = {
        TILE_BASE_URLS: ["maponline0.bdimg.com/starpic/?qt=satepc&", "maponline1.bdimg.com/starpic/?qt=satepc&", "maponline2.bdimg.com/starpic/?qt=satepc&", "maponline3.bdimg.com/starpic/?qt=satepc&"],
        TILE_ONLINE_URLS: ["maponline0.bdimg.com", "maponline1.bdimg.com", "maponline2.bdimg.com", "maponline3.bdimg.com"],
        TIlE_PERSPECT_URLS: ["d0.map.baidu.com", "d1.map.baidu.com", "d2.map.baidu.com", "d3.map.baidu.com"],
        geolocControl: "loc.map.baidu.com",
        TILES_YUN_HOST: ["g0.api.map.baidu.com", "g1.api.map.baidu.com", "g2.api.map.baidu.com", "g3.api.map.baidu.com"],
        traffic: "itsmap2.baidu.com",
        message: "j.map.baidu.com",
        baidumap: "map.baidu.com",
        wuxian: "wuxian.baidu.com",
        pano: ["apisv0.bdimg.com", "apisv1.bdimg.com"],
        panoVerify: "api.map.baidu.com",
        main_domain_nocdn: {
            baidu: "api.map.baidu.com"
        },
        main_domain_cdn: {
            baidu: ["mapapip0.bdimg.com", "mapapip1.bdimg.com", "mapapip2.bdimg.com"],
            webmap: ["webmap0.bdimg.com"]
        },
        map_click: "mapclick.map.baidu.com",
        vector_traffic: "maponline0.bdimg.com"
    };
    F.r1 = {
        "0": {
            proto: "https://",
            domain: F.YY
        },
        1 : {
            proto: "https://",
            domain: F.xM
        },
        2 : {
            proto: "https://",
            domain: F.xM
        }
    };
    window.BMAP_PROTOCOL && "https" === window.BMAP_PROTOCOL && (window.HOST_TYPE = 2);
    F.Su = window.HOST_TYPE || "0";
    F.url = F.r1[F.Su];
    F.Xp = F.url.proto + F.url.domain.baidumap + "/";
    F.cd = F.url.proto + ("2" == F.Su ? F.url.domain.main_domain_nocdn.other: F.url.domain.main_domain_nocdn.baidu) + "/";
    F.pa = F.url.proto + ("2" == F.Su ? F.url.domain.main_domain_cdn.other[0] : F.url.domain.main_domain_nocdn.baidu) + "/";
    F.qj = F.url.proto + F.url.domain.main_domain_cdn.webmap[0] + "/";
    F.PN = F.url.proto + F.url.domain.panoVerify + "/";
    F.xh = function(a, b) {
        var c, e, b = b || "";
        switch (a) {
        case "main_domain_nocdn":
            c = F.cd + b;
            break;
        case "main_domain_cdn":
            c = F.pa + b;
            break;
        default:
            e = F.url.domain[a],
            "[object Array]" == Object.prototype.toString.call(e) ? (c = [], A.oc.Rb(e,
            function(a, e) {
                c[e] = F.url.proto + a + "/" + b
            })) : c = F.url.proto + F.url.domain[a] + "/" + b
        }
        return c
    };
    function Db(a) {
        var b = {
            duration: 1E3,
            Nc: 30,
            np: 0,
            fc: Eb.bN,
            du: u()
        };
        this.ig = [];
        if (a) for (var c in a) b[c] = a[c];
        this.m = b;
        if (eb(b.np)) {
            var e = this;
            setTimeout(function() {
                e.start()
            },
            b.np)
        } else b.np != Fb && this.start()
    }
    var Fb = "INFINITE";
    Db.prototype.start = function() {
        this.lv = kb();
        this.kA = this.lv + this.m.duration;
        Gb(this)
    };
    Db.prototype.add = function(a) {
        this.ig.push(a)
    };
    function Gb(a) {
        var b = kb();
        b >= a.kA ? (fb(a.m.Ba) && a.m.Ba(a.m.fc(1)), fb(a.m.finish) && a.m.finish(), 0 < a.ig.length && (b = a.ig[0], b.ig = [].concat(a.ig.slice(1)), b.start())) : (a.Ry = a.m.fc((b - a.lv) / a.m.duration), fb(a.m.Ba) && a.m.Ba(a.Ry), a.bG || (a.rs = setTimeout(function() {
            Gb(a)
        },
        1E3 / a.m.Nc)))
    }
    Db.prototype.stop = function(a) {
        this.bG = p;
        for (var b = 0; b < this.ig.length; b++) this.ig[b].stop(),
        this.ig[b] = s;
        this.ig.length = 0;
        this.rs && (clearTimeout(this.rs), this.rs = s);
        this.m.du(this.Ry);
        a && (this.kA = this.lv, Gb(this))
    };
    Db.prototype.cancel = ha(1);
    var Eb = {
        bN: function(a) {
            return a
        },
        reverse: function(a) {
            return 1 - a
        },
        nD: function(a) {
            return a * a
        },
        lD: function(a) {
            return Math.pow(a, 3)
        },
        bt: function(a) {
            return - (a * (a - 2))
        },
        nL: function(a) {
            return Math.pow(a - 1, 3) + 1
        },
        mD: function(a) {
            return 0.5 > a ? 2 * a * a: -2 * (a - 2) * a - 1
        },
        R3: function(a) {
            return 0.5 > a ? 4 * Math.pow(a, 3) : 4 * Math.pow(a - 1, 3) + 1
        },
        S3: function(a) {
            return (1 - Math.cos(Math.PI * a)) / 2
        }
    };
    Eb["ease-in"] = Eb.nD;
    Eb["ease-out"] = Eb.bt;
    var K = {
        zG: 34,
        AG: 21,
        BG: new P(21, 32),
        HP: new P(10, 32),
        GP: new P(24, 36),
        FP: new P(12, 36),
        xG: new P(13, 1),
        ta: F.pa + "images/",
        q5: "https://mapapip0.bdimg.com/images/",
        yG: F.pa + "images/markers_new.png",
        DP: 24,
        EP: 73,
        BC: {
            "\u5317\u4eac": {
                Gy: "bj",
                o: new M(116.403874, 39.914889)
            },
            "\u4e0a\u6d77": {
                Gy: "sh",
                o: new M(121.487899, 31.249162)
            },
            "\u6df1\u5733": {
                Gy: "sz",
                o: new M(114.025974, 22.546054)
            },
            "\u5e7f\u5dde": {
                Gy: "gz",
                o: new M(113.30765, 23.120049)
            }
        },
        fontFamily: "arial,sans-serif"
    };
    A.ga.We ? (A.extend(K, {
        ZK: "url(" + K.ta + "ruler.cur),crosshair",
        Ac: "-moz-grab",
        Ld: "-moz-grabbing"
    }), A.platform.PM && (K.fontFamily = "arial,simsun,sans-serif")) : A.ga.dx || A.ga.Qy ? A.extend(K, {
        ZK: "url(" + K.ta + "ruler.cur) 2 6,crosshair",
        Ac: "url(" + K.ta + "openhand.cur) 8 8,default",
        Ld: "url(" + K.ta + "closedhand.cur) 8 8,move"
    }) : A.extend(K, {
        ZK: "url(" + K.ta + "ruler.cur),crosshair",
        Ac: "url(" + K.ta + "openhand.cur),default",
        Ld: "url(" + K.ta + "closedhand.cur),move"
    });
    function Hb(a, b) {
        var c = a.style;
        c.left = b[0] + "px";
        c.top = b[1] + "px"
    }
    function Ib(a) {
        0 < A.ga.oa ? a.unselectable = "on": a.style.MozUserSelect = "none"
    }
    function Jb(a) {
        return a && a.parentNode && 11 !== a.parentNode.nodeType
    }
    function Kb(a, b) {
        A.U.fy(a, "beforeEnd", b);
        return a.lastChild
    }
    function Lb(a) {
        for (var b = {
            left: 0,
            top: 0
        }; a && a.offsetParent;) b.left += a.offsetLeft,
        b.top += a.offsetTop,
        a = a.offsetParent;
        return b
    }
    function na(a) {
        a = window.event || a;
        a.stopPropagation ? a.stopPropagation() : a.cancelBubble = p
    }
    function Mb(a) {
        a = window.event || a;
        a.preventDefault ? a.preventDefault() : a.returnValue = t;
        return t
    }
    function oa(a) {
        na(a);
        return Mb(a)
    }
    function Nb() {
        var a = document.documentElement,
        b = document.body;
        return a && (a.scrollTop || a.scrollLeft) ? [a.scrollTop, a.scrollLeft] : b ? [b.scrollTop, b.scrollLeft] : [0, 0]
    }
    function Ob(a, b) {
        if (a && b) return Math.round(Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)))
    }
    function Pb(a, b) {
        var c = [],
        b = b ||
        function(a) {
            return a
        },
        e;
        for (e in a) c.push(e + "=" + b(a[e]));
        return c.join("&")
    }
    function J(a, b, c) {
        var e = document.createElement(a);
        c && (e = document.createElementNS(c, a));
        return A.U.EF(e, b || {})
    }
    function cb(a) {
        if (a.currentStyle) return a.currentStyle;
        if (a.ownerDocument && a.ownerDocument.defaultView) return a.ownerDocument.defaultView.getComputedStyle(a, s)
    }
    function fb(a) {
        return "function" === typeof a
    }
    function eb(a) {
        return "number" === typeof a
    }
    function gb(a) {
        return "string" == typeof a
    }
    function Qb(a) {
        return "undefined" != typeof a
    }
    function Rb(a) {
        return "object" == typeof a
    }
    var Sb = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    function Tb(a) {
        for (var b = "",
        c = 0; c < a.length; c++) {
            var e = a.charCodeAt(c) << 1,
            f = e = e.toString(2);
            8 > e.length && (f = "00000000" + e, f = f.substr(e.length, 8));
            b += f
        }
        a = 5 - b.length % 5;
        e = [];
        for (c = 0; c < a; c++) e[c] = "0";
        b = e.join("") + b;
        f = [];
        for (c = 0; c < b.length / 5; c++) e = b.substr(5 * c, 5),
        f.push(String.fromCharCode(parseInt(e, 2) + 50));
        return f.join("") + a.toString()
    }
    function Ub(a) {
        var b = "",
        c, e, f = "",
        g, i = "",
        k = 0;
        g = /[^A-Za-z0-9\+\/\=]/g;
        if (!a || g.exec(a)) return a;
        a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        do c = Sb.indexOf(a.charAt(k++)),
        e = Sb.indexOf(a.charAt(k++)),
        g = Sb.indexOf(a.charAt(k++)),
        i = Sb.indexOf(a.charAt(k++)),
        c = c << 2 | e >> 4,
        e = (e & 15) << 4 | g >> 2,
        f = (g & 3) << 6 | i,
        b += String.fromCharCode(c),
        64 != g && (b += String.fromCharCode(e)),
        64 != i && (b += String.fromCharCode(f));
        while (k < a.length);
        return b
    }
    var Q = A.lang.av;
    function L() {
        return ! (!A.platform.HE && !A.platform.tZ && !A.platform.Fj)
    }
    function bb() {
        return ! (!A.platform.PM && !A.platform.IM && !A.platform.AZ)
    }
    function kb() {
        return (new Date).getTime()
    }
    function Vb(a) {
        a = a.split("//");
        if (2 <= a.length) {
            var b = a[1].split("?");
            if (1 <= b.length) {
                var c = b[0].split("/"),
                e = 1;
                window.urlSplitBeginIndex && (e = window.urlSplitBeginIndex);
                var f = e,
                e = b.length - 1,
                g = "/",
                i = c.length;
                f || (f = 0);
                e || (e = i - 1);
                g || (g = "");
                if (f > i - 1 || e > i - 1) e = "";
                else {
                    for (i = ""; f <= e; f++) i = f === e ? i + c[f] : i + (c[f] + g);
                    e = i
                }
                return {
                    host: b[0],
                    origin: a[0] + "//" + c[0],
                    path: "/" + e
                }
            }
        }
        return s
    }
    function Wb() {
        var a = document.body.appendChild(J("div"));
        a.innerHTML = '<v:shape id="vml_tester1" adj="1" />';
        var b = a.firstChild;
        if (!b.style) return t;
        b.style.behavior = "url(#default#VML)";
        b = b ? "object" === typeof b.adj: p;
        a.parentNode.removeChild(a);
        return b
    }
    function Xb() {
        return !! document.implementation.hasFeature("https://www.w3.org/TR/SVG11/feature#Shape", "1.1")
    }
    function Yb() {
        return !! J("canvas").getContext
    }
    function Zb(a) {
        return a * Math.PI / 180
    }
    F.GZ = function() {
        var a = p,
        b = p,
        c = p,
        e = p,
        f = 0,
        g = 0,
        i = 0,
        k = 0;
        return {
            lR: function() {
                f += 1;
                a && (a = t, setTimeout(function() {
                    Wa(5054, {
                        pic: f
                    });
                    a = p;
                    f = 0
                },
                1E4))
            },
            r2: function() {
                g += 1;
                b && (b = t, setTimeout(function() {
                    Wa(5055, {
                        move: g
                    });
                    b = p;
                    g = 0
                },
                1E4))
            },
            t2: function() {
                i += 1;
                c && (c = t, setTimeout(function() {
                    Wa(5056, {
                        zoom: i
                    });
                    c = p;
                    i = 0
                },
                1E4))
            },
            s2: function(a) {
                k += a;
                e && (e = t, setTimeout(function() {
                    Wa(5057, {
                        tile: k
                    });
                    e = p;
                    k = 0
                },
                5E3))
            }
        }
    } ();
    F.Nq = {
        PG: "#83a1ff",
        Pq: "#808080"
    };
    function $b(a, b, c) {
        b.ZE || (b.ZE = [], b.handle = {});
        b.ZE.push({
            filter: c,
            it: a
        });
        b.addEventListener || (b.addEventListener = function(a, c) {
            b.attachEvent("on" + a, c)
        });
        b.handle.click || (b.addEventListener("click",
        function(a) {
            for (var c = a.target || a.srcElement; c != b;) {
                ac(b.ZE,
                function(b, i) {
                    RegExp(i.filter).test(c.getAttribute("filter")) && i.it.call(c, a, c.getAttribute("filter"))
                });
                c = c.parentNode
            }
        },
        t), b.handle.click = p)
    }
    function ac(a, b) {
        for (var c = 0,
        e = a.length; c < e; c++) b(c, a[c])
    }
    void
    function(a, b, c) {
        void
        function(a, b, c) {
            function i(a) {
                if (!a.mp) {
                    for (var c = p,
                    e = [], g = a.K_, k = 0; g && k < g.length; k++) {
                        var m = g[k],
                        n = ea[m] = ea[m] || {};
                        if (n.mp || n == a) e.push(n.Uc);
                        else {
                            c = t;
                            if (!n.IW && (m = (Ba.get("alias") || {})[m] || m + ".js", !H[m])) {
                                H[m] = p;
                                var o = b.createElement("script"),
                                q = b.getElementsByTagName("script")[0];
                                o.async = p;
                                o.src = m;
                                q.parentNode.insertBefore(o, q)
                            }
                            n.nz = n.nz || {};
                            n.nz[a.name] = a
                        }
                    }
                    if (c) {
                        a.mp = p;
                        a.UK && (a.Uc = a.UK.apply(a, e));
                        for (var v in a.nz) i(a.nz[v])
                    }
                }
            }
            function k(a) {
                return (a || new Date) - G
            }
            function m(a, b, c) {
                if (a) {
                    "string" == typeof a && (c = b, b = a, a = I);
                    try {
                        a == I ? (N[b] = N[b] || [], N[b].unshift(c)) : a.addEventListener ? a.addEventListener(b, c, t) : a.attachEvent && a.attachEvent("on" + b, c)
                    } catch(e) {}
                }
            }
            function n(a, b, c) {
                if (a) {
                    "string" == typeof a && (c = b, b = a, a = I);
                    try {
                        if (a == I) {
                            var e = N[b];
                            if (e) for (var f = e.length; f--;) e[f] === c && e.splice(f, 1)
                        } else a.removeEventListener ? a.removeEventListener(b, c, t) : a.detachEvent && a.detachEvent("on" + b, c)
                    } catch(g) {}
                }
            }
            function o(a) {
                var b = N[a],
                c = 0;
                if (b) {
                    for (var e = [], f = arguments, g = 1; g < f.length; g++) e.push(f[g]);
                    for (g = b.length; g--;) b[g].apply(this, e) && c++;
                    return c
                }
            }
            function q(a, b) {
                if (a && b) {
                    var c = new Image(1, 1),
                    e = [],
                    f = "img_" + +new Date,
                    g;
                    for (g in b) b[g] && e.push(g + "=" + encodeURIComponent(b[g]));
                    I[f] = c;
                    c.onload = c.onerror = function() {
                        I[f] = c = c.onload = c.onerror = s;
                        delete I[f]
                    };
                    c.src = a + "?" + e.join("&")
                }
            }
            function v() {
                var a = arguments,
                b = a[0];
                if (this.TK || /^(on|un|set|get|create)$/.test(b)) {
                    for (var b = y.prototype[b], c = [], e = 1, f = a.length; e < f; e++) c.push(a[e]);
                    "function" == typeof b && b.apply(this, c)
                } else this.rK.push(a)
            }
            function w(a, b) {
                var c = {},
                e;
                for (e in a) a.hasOwnProperty(e) && (c[e] = a[e]);
                for (e in b) b.hasOwnProperty(e) && (c[e] = b[e]);
                return c
            }
            function y(a) {
                this.name = a;
                this.gt = {
                    protocolParameter: {
                        postUrl: s,
                        protocolParameter: s
                    }
                };
                this.rK = [];
                this.alog = I
            }
            function z(a) {
                a = a || "default";
                if ("*" == a) {
                    var a = [],
                    b;
                    for (b in O) a.push(O[b]);
                    return a
                } (b = O[a]) || (b = O[a] = new y(a));
                return b
            }
            var B = c.alog;
            if (!B || !B.mp) {
                var D = b.all && a.attachEvent,
                G = B && B.PE || +new Date,
                E = a.J5 || ( + new Date).toString(36) + Math.random().toString(36).substr(2, 3),
                C = 0,
                H = {},
                I = function(a) {
                    var b = arguments,
                    c, e, f, g;
                    if ("define" == a || "require" == a) {
                        for (e = 1; e < b.length; e++) switch (typeof b[e]) {
                        case "string":
                            c = b[e];
                            break;
                        case "object":
                            f = b[e];
                            break;
                        case "function":
                            g = b[e]
                        }
                        "require" == a && (c && !f && (f = [c]), c = s);
                        c = !c ? "#" + C++:c;
                        e = ea[c] = ea[c] || {};
                        e.mp || (e.name = c, e.K_ = f, e.UK = g, "define" == a && (e.IW = p), i(e))
                    } else "function" == typeof a ? a(I) : ("" + a).replace(/^(?:([\w$_]+)\.)?(\w+)$/,
                    function(a, c, e) {
                        b[0] = e;
                        v.apply(I.lG(c), b)
                    })
                },
                N = {},
                O = {},
                ea = {
                    i3: {
                        name: "alog",
                        mp: p,
                        Uc: I
                    }
                };
                y.prototype.start = y.prototype.create = function(a) {
                    if (!this.TK) {
                        "object" == typeof a && this.set(a);
                        this.TK = new Date;
                        for (this.ht("create", this); a = this.rK.shift();) v.apply(this, a)
                    }
                };
                y.prototype.send = function(a, b) {
                    var c = w({
                        ts: k().toString(36),
                        t: a,
                        sid: E
                    },
                    this.gt);
                    if ("object" == typeof b) c = w(c, b);
                    else {
                        var e = arguments;
                        switch (a) {
                        case "pageview":
                            e[1] && (c.page = e[1]);
                            e[2] && (c.title = e[2]);
                            break;
                        case "event":
                            e[1] && (c.eventCategory = e[1]);
                            e[2] && (c.eventAction = e[2]);
                            e[3] && (c.eventLabel = e[3]);
                            e[4] && (c.eventValue = e[4]);
                            break;
                        case "timing":
                            e[1] && (c.timingCategory = e[1]);
                            e[2] && (c.timingVar = e[2]);
                            e[3] && (c.timingValue = e[3]);
                            e[4] && (c.timingLabel = e[4]);
                            break;
                        case "exception":
                            e[1] && (c.exDescription = e[1]);
                            e[2] && (c.exFatal = e[2]);
                            break;
                        default:
                            return
                        }
                    }
                    this.ht("send", c);
                    var f;
                    if (e = this.gt.protocolParameter) {
                        var g = {};
                        for (f in c) e[f] !== s && (g[e[f] || f] = c[f]);
                        f = g
                    } else f = c;
                    q(this.gt.postUrl, f)
                };
                y.prototype.set = function(a, b) {
                    if ("string" == typeof a)"protocolParameter" == a && (b = w({
                        postUrl: s,
                        protocolParameter: s
                    },
                    b)),
                    this.gt[a] = b;
                    else if ("object" == typeof a) for (var c in a) this.set(c, a[c])
                };
                y.prototype.get = function(a, b) {
                    var c = this.gt[a];
                    "function" == typeof b && b(c);
                    return c
                };
                y.prototype.ht = function(a, b) {
                    return I.ht(this.name + "." + a, b)
                };
                y.prototype.V = function(a, b) {
                    I.V(this.name + "." + a, b)
                };
                y.prototype.kd = function(a, b) {
                    I.kd(this.name + "." + a, b)
                };
                I.name = "alog";
                I.Yb = E;
                I.mp = p;
                I.timestamp = k;
                I.kd = n;
                I.V = m;
                I.ht = o;
                I.lG = z;
                I("init");
                var ba = y.prototype;
                U(ba, {
                    start: ba.start,
                    create: ba.create,
                    send: ba.send,
                    set: ba.set,
                    get: ba.get,
                    on: ba.V,
                    un: ba.kd,
                    fire: ba.ht
                });
                var Ba = z();
                Ba.set("protocolParameter", {
                    h3: s
                });
                if (B) {
                    ba = [].concat(B.zb || [], B.ku || []);
                    B.zb = B.ku = s;
                    for (var ua in I) I.hasOwnProperty(ua) && (B[ua] = I[ua]);
                    I.zb = I.ku = {
                        push: function(a) {
                            I.apply(I, a)
                        }
                    };
                    for (B = 0; B < ba.length; B++) I.apply(I, ba[B])
                }
                c.alog = I;
                D && m(b, "mouseup",
                function(a) {
                    a = a.target || a.srcElement;
                    1 == a.nodeType && /^ajavascript:/i.test(a.tagName + a.href)
                });
                var Ja = t;
                a.onerror = function(a, b, e, f) {
                    var i = p; ! b && /^script error/i.test(a) && (Ja ? i = t: Ja = p);
                    i && c.alog("exception.send", "exception", {
                        $t: a,
                        OE: b,
                        Wt: e,
                        Bg: f
                    });
                    return t
                };
                c.alog("exception.on", "catch",
                function(a) {
                    c.alog("exception.send", "exception", {
                        $t: a.$t,
                        OE: a.path,
                        Wt: a.Wt,
                        method: a.method,
                        yL: "catch"
                    })
                })
            }
        } (a, b, c);
        void
        function(a, b, c) {
            var i = "18_3";
            L() && (i = "18_4");
            var k = "https://static.tieba.baidu.com";
            "https:" === a.location.protocol && (k = "https://gsp0.baidu.com/5aAHeD3nKhI2p27j8IqW0jdnxx1xbK");
            var m = Math.random,
            k = k + "/tb/pms/img/st.gif",
            n = {
                Ih: "0.1"
            },
            o = {
                Ih: "0.1"
            },
            q = {
                Ih: "0.1"
            },
            v = {
                Ih: "0"
            };
            if (n && n.Ih && m() < n.Ih) {
                var w = c.alog.lG("monkey"),
                y,
                n = a.screen,
                z = b.referrer;
                w.set("ver", 5);
                w.set("pid", 241);
                n && w.set("px", n.width + "*" + n.height);
                w.set("ref", z);
                c.alog("monkey.on", "create",
                function() {
                    y = c.alog.timestamp;
                    w.set("protocolParameter", {
                        reports: s
                    })
                });
                c.alog("monkey.on", "send",
                function(a) {
                    "pageview" == a.t && (a.cmd = "open");
                    a.now && (a.ts = y(a.now).toString(36), a.now = "")
                });
                c.alog("monkey.create", {
                    page: i,
                    pid: "241",
                    p: "18",
                    dv: 6,
                    postUrl: k,
                    reports: {
                        refer: 1
                    }
                });
                c.alog("monkey.send", "pageview", {
                    now: +new Date
                })
            }
            if (o && o.Ih && m() < o.Ih) {
                var B = t;
                a.onerror = function(a, b, e, f) {
                    var i = p; ! b && /^script error/i.test(a) && (B ? i = t: B = p);
                    i && c.alog("exception.send", "exception", {
                        $t: a,
                        OE: b,
                        Wt: e,
                        Bg: f
                    });
                    return t
                };
                c.alog("exception.on", "catch",
                function(a) {
                    c.alog("exception.send", "exception", {
                        $t: a.$t,
                        OE: a.path,
                        Wt: a.Wt,
                        method: a.method,
                        yL: "catch"
                    })
                });
                c.alog("exception.create", {
                    postUrl: k,
                    dv: 7,
                    page: i,
                    pid: "170",
                    p: "18"
                })
            }
            q && (q.Ih && m() < q.Ih) && (c.alog("cus.on", "time",
            function(a) {
                var b = {},
                e = t,
                f;
                if ("[object Object]" === a.toString()) {
                    for (var i in a)"page" == i ? b.page = a[i] : (f = parseInt(a[i]), 0 < f && /^z_/.test(i) && (e = p, b[i] = f));
                    e && c.alog("cus.send", "time", b)
                }
            }), c.alog("cus.on", "count",
            function(a) {
                var b = {},
                e = t;
                "string" === typeof a && (a = [a]);
                if (a instanceof Array) for (var f = 0; f < a.length; f++) / ^z_ / .test(a[f]) ? (e = p, b[a[f]] = 1) : /^page:/.test(a[f]) && (b.page = a[f].substring(5));
                e && c.alog("cus.send", "count", b)
            }), c.alog("cus.create", {
                dv: 3,
                postUrl: k,
                page: i,
                p: "18"
            }));
            if (v && v.Ih && m() < v.Ih) {
                var D = ["Moz", "O", "ms", "Webkit"],
                G = ["-webkit-", "-moz-", "-o-", "-ms-"],
                E = function() {
                    return typeof b.createElement !== "function" ? b.createElement(arguments[0]) : b.createElement.apply(b, arguments)
                },
                C = E("dpFeatureTest").style,
                H = function(a) {
                    return I(a, l, l)
                },
                I = function(a, b, c) {
                    var e = a.charAt(0).toUpperCase() + a.slice(1),
                    f = (a + " " + D.join(e + " ") + e).split(" ");
                    if (typeof b === "string" || typeof b === "undefined") return N(f, b);
                    f = (a + " " + D.join(e + " ") + e).split(" ");
                    a: {
                        var a = f,
                        g;
                        for (g in a) if (a[g] in b) {
                            if (c === t) {
                                b = a[g];
                                break a
                            }
                            g = b[a[g]];
                            b = typeof g === "function" ? fnBind(g, c || b) : g;
                            break a
                        }
                        b = t
                    }
                    return b
                },
                N = function(a, b) {
                    var c, e, f;
                    e = a.length;
                    for (c = 0; c < e; c++) {
                        f = a[c];~ ("" + f).indexOf("-") && (f = O(f));
                        if (C[f] !== l) return b == "pfx" ? f: p
                    }
                    return t
                },
                O = function(a) {
                    return a.replace(/([a-z])-([a-z])/g,
                    function(a, b, c) {
                        return b + c.toUpperCase()
                    }).replace(/^-/, "")
                },
                ea = function(a, b, c) {
                    if (a.indexOf("@") === 0) return atRule(a);
                    a.indexOf("-") != -1 && (a = O(a));
                    return ! b ? I(a, "pfx") : I(a, b, c)
                },
                ba = function() {
                    var a = E("canvas");
                    return ! (!a.getContext || !a.getContext("2d"))
                },
                Ba = function() {
                    var a = E("div");
                    return "draggable" in a || "ondragstart" in a && "ondrop" in a
                },
                ua = function() {
                    try {
                        localStorage.setItem("localStorage", "localStorage");
                        localStorage.removeItem("localStorage");
                        return p
                    } catch(a) {
                        return t
                    }
                },
                Ja = function() {
                    return "content" in b.createElement("template")
                },
                ta = function() {
                    return "createShadowRoot" in b.createElement("a")
                },
                ab = function() {
                    return "registerElement" in b
                },
                Re = function() {
                    return "import" in b.createElement("link")
                },
                ed = function() {
                    return "getItems" in b
                },
                Nj = function() {
                    return "EventSource" in window
                },
                Se = function(a, b) {
                    var c = new Image;
                    c.onload = function() {
                        b(a, c.width > 0 && c.height > 0)
                    };
                    c.onerror = function() {
                        b(a, t)
                    };
                    c.src = "data:image/webp;base64," + {
                        M5: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
                        L5: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
                        alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
                        Bk: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
                    } [a]
                },
                Te = function(a, b) {
                    return fc.si["WebP-" + a] = b
                },
                Oj = function() {
                    return "openDatabase" in a
                },
                Pj = function() {
                    return "performance" in a && "timing" in a.performance
                },
                Qj = function() {
                    return "performance" in a && "mark" in a.performance
                },
                Rj = function() {
                    return ! (!Array.prototype || !Array.prototype.every || !Array.prototype.filter || !Array.prototype.forEach || !Array.prototype.indexOf || !Array.prototype.lastIndexOf || !Array.prototype.map || !Array.prototype.some || !Array.prototype.reduce || !Array.prototype.reduceRight || !Array.isArray)
                },
                Sj = function() {
                    return "Promise" in a && "cast" in a.Qq && "resolve" in a.Qq && "reject" in a.Qq && "all" in a.Qq && "race" in a.Qq &&
                    function() {
                        var b;
                        new a.Qq(function(a) {
                            b = a
                        });
                        return typeof b === "function"
                    } ()
                },
                Tj = function() {
                    var b = !!a.b2,
                    c = a.XMLHttpRequest && "withCredentials" in new XMLHttpRequest;
                    return !! a.g2 && b && c
                },
                Uj = function() {
                    return "geolocation" in navigator
                },
                Vj = function() {
                    var b = E("canvas"),
                    c = "probablySupportsContext" in b ? "probablySupportsContext": "supportsContext";
                    return c in b ? b[c]("webgl") || b[c]("experimental-webgl") : "WebGLRenderingContext" in a
                },
                Wj = function() {
                    return !! b.createElementNS && !!b.createElementNS("https://www.w3.org/2000/svg", "svg").G3
                },
                Xj = function() {
                    return !! a.o2
                },
                Yj = function() {
                    return "WebSocket" in a && a.l2.X1 === 2
                },
                Zj = function() {
                    return !! b.createElement("video").canPlayType
                },
                $j = function() {
                    return !! b.createElement("audio").canPlayType
                },
                ak = function() {
                    return !! (a.history && "pushState" in a.history)
                },
                bk = function() {
                    return ! (!a.Z1 || !a.a2)
                },
                ck = function() {
                    return "postMessage" in window
                },
                dk = function() {
                    return !! a.webkitNotifications || "Notification" in a && "permission" in a.$P && "requestPermission" in a.$P
                },
                ek = function() {
                    for (var b = ["webkit", "moz", "o", "ms"], c = a.requestAnimationFrame, f = 0; f < b.length && !c; ++f) c = a[b[f] + "RequestAnimationFrame"];
                    return !! c
                },
                fk = function() {
                    return "JSON" in a && "parse" in JSON && "stringify" in JSON
                },
                gk = function() {
                    return ! (!ea("exitFullscreen", b, t) && !ea("cancelFullScreen", b, t))
                },
                hk = function() {
                    return !! ea("Intl", a)
                },
                ik = function() {
                    return H("flexBasis")
                },
                jk = function() {
                    return !! H("perspective")
                },
                kk = function() {
                    return H("shapeOutside")
                },
                lk = function() {
                    var a = E("div");
                    a.style.cssText = G.join("filter:blur(2px); ");
                    return !! a.style.length && (b.documentMode === l || b.documentMode > 9)
                },
                mk = function() {
                    return "XMLHttpRequest" in a && "withCredentials" in new XMLHttpRequest
                },
                nk = function() {
                    return E("progress").max !== l
                },
                ok = function() {
                    return E("meter").max !== l
                },
                pk = function() {
                    return "sendBeacon" in navigator
                },
                qk = function() {
                    return H("borderRadius")
                },
                rk = function() {
                    return H("boxShadow")
                },
                sk = function() {
                    var a = E("div").style;
                    a.cssText = G.join("opacity:.55;");
                    return /^0.55$/.test(a.opacity)
                },
                tk = function() {
                    return N(["textShadow"], l)
                },
                uk = function() {
                    return H("animationName")
                },
                vk = function() {
                    return H("transition")
                },
                wk = function() {
                    return navigator.userAgent.indexOf("Android 2.") === -1 && H("transform")
                },
                fc = {
                    si: {},
                    sa: function(a, b, c) {
                        this.si[a] = b.apply(this, [].slice.call(arguments, 2))
                    },
                    Jd: function(a, b) {
                        a.apply(this, [].slice.call(arguments, 1))
                    },
                    P_: function() {
                        this.sa("bdrs", qk);
                        this.sa("bxsd", rk);
                        this.sa("opat", sk);
                        this.sa("txsd", tk);
                        this.sa("anim", uk);
                        this.sa("trsi", vk);
                        this.sa("trfm", wk);
                        this.sa("flex", ik);
                        this.sa("3dtr", jk);
                        this.sa("shpe", kk);
                        this.sa("fltr", lk);
                        this.sa("cavs", ba);
                        this.sa("dgdp", Ba);
                        this.sa("locs", ua);
                        this.sa("wctem", Ja);
                        this.sa("wcsdd", ta);
                        this.sa("wccse", ab);
                        this.sa("wchti", Re);
                        this.Jd(Se, "lossy", Te);
                        this.Jd(Se, "lossless", Te);
                        this.Jd(Se, "alpha", Te);
                        this.Jd(Se, "animation", Te);
                        this.sa("wsql", Oj);
                        this.sa("natm", Pj);
                        this.sa("ustm", Qj);
                        this.sa("arra", Rj);
                        this.sa("prms", Sj);
                        this.sa("xhr2", Tj);
                        this.sa("wbgl", Vj);
                        this.sa("geol", Uj);
                        this.sa("svg", Wj);
                        this.sa("work", Xj);
                        this.sa("wbsk", Yj);
                        this.sa("vido", Zj);
                        this.sa("audo", $j);
                        this.sa("hsty", ak);
                        this.sa("file", bk);
                        this.sa("psmg", ck);
                        this.sa("wknf", dk);
                        this.sa("rqaf", ek);
                        this.sa("json", fk);
                        this.sa("flsc", gk);
                        this.sa("i18n", hk);
                        this.sa("cors", mk);
                        this.sa("prog", nk);
                        this.sa("metr", ok);
                        this.sa("becn", pk);
                        this.sa("mcrd", ed);
                        this.sa("esrc", Nj)
                    }
                },
                w = c.alog.lG("feature");
                w.V("commit",
                function() {
                    fc.P_();
                    var a = setInterval(function() {
                        if ("WebP-lossy" in fc.si && "WebP-lossless" in fc.si && "WebP-alpha" in fc.si && "WebP-animation" in fc.si) {
                            for (var b in fc.si) fc.si[b] = fc.si[b] ? "y": "n";
                            w.send("feature", fc.si);
                            clearInterval(a)
                        }
                    },
                    500)
                });
                c.alog("feature.create", {
                    P3: 4,
                    r6: k,
                    page: i,
                    zb: "18"
                });
                c.alog("feature.fire", "commit")
            }
        } (a, b, c)
    } (window, document, F);
    F.Vq = F.alog || u();
    F.alog("cus.fire", "count", "z_loadscriptcount");
    "https:" === location.protocol && F.alog("cus.fire", "count", "z_httpscount");
    function bc(a) {
        var b = window.TILE_VERSION,
        c = "20190410";
        b && b.ditu && (b = b.ditu, b[a] && b[a].updateDate && (c = b[a].updateDate));
        return c
    }
    var cc = [72.6892532, 0.1939743381, 136.1168614, 54.392257],
    dc = [72.69566833, 0.1999420909, 136.1232863, 54.39791217],
    ec = 158,
    gc = [98.795985, 122.960792, 107.867379, 118.093451, 119.139658, 128.035888, 79.948212, 99.029524, 119.923388, 122.094977, 127.918527, 130.94789, 106.50606, 108.076783, 119.8329, 126.382207, 111.803567, 119.324928, 100.749858, 102.227985, 99.860885, 100.788921, 97.529435, 98.841564, 99.100017, 99.90035, 122.917416, 123.774367, 123.728314, 125.507211, 123.736065, 124.767299, 125.488463, 126.410675, 125.484326, 126.07764, 130.830784, 133.620042, 127.912178, 128.668957, 128.658937, 129.638599, 132.894179, 134.119086, 117.379378, 119.244569, 116.086736, 117.431212, 114.420233, 116.137458, 116.492775, 119.605527, 110.579401, 111.86488, 74.468228, 80.001908, 82.867432, 91.353788, 85.721075, 98.976964, 127.664757, 129.546833, 129.476893, 130.22449, 133.730358, 134.745235, 134.381034, 135.1178, 130.868117, 131.34409, 115.513245, 117.544751, 115.779271, 116.748045, 108.536254, 110.614326, 121.365534, 124.626434, 126.165992, 127.347013, 91.281869, 95.611754, 79.879648, 82.945041, 76.413314, 78.345207, 78.275229, 80.002329, 83.956612, 85.734098, 85.510186, 89.356499, 97.997001, 98.948845, 106.653208, 108.610811, 111.400183, 111.824179, 111.592224, 111.817136, 116.00682, 117.024631, 116.258574, 116.689291, 119.436876, 119.922961, 120.659806, 121.395479, 120.349116, 120.676014, 124.59389, 125.787788, 126.221756, 126.788962, 95.572955, 102.046581, 95.583772, 96.165551, 95.564318, 97.806095, 91.30446, 93.356438, 93.330319, 94.698145, 89.349129, 90.548677, 82.268802, 82.892025, 78.335615, 80.032266, 76.625755, 78.361413, 73.498248, 74.490992, 74.846872, 76.488771, 91.563521, 94.878444, 88.768214, 89.244787, 83.247076, 83.974127, 82.29595, 83.256003, 81.885315, 83.26249, 80.760619, 81.472404, 86.470983, 88.276988, 102.207537, 104.234614, 112.164795, 116.833667, 108.965663, 113.032246, 111.166575, 117.983363],
    hc = [22.551183, 42.284787, 17.227969, 22.738314, 41.300981, 50.749638, 30.368087, 42.332701, 21.705055, 22.696452, 42.426047, 48.944674, 21.432184, 22.651387, 50.657409, 52.92296, 42.212192, 45.206905, 21.137031, 22.57186, 21.444502, 22.586566, 23.741571, 25.301472, 22.006806, 22.56637, 38.985114, 41.346531, 40.295617, 41.338581, 39.740021, 40.351012, 40.974644, 41.331562, 40.726852, 41.067192, 44.877158, 48.018285, 41.344597, 42.451798, 42.016305, 42.443235, 45.880906, 48.214001, 45.140027, 46.792775, 45.141083, 46.400433, 45.156418, 45.748281, 47.485889, 50.071879, 42.223667, 43.469487, 37.019867, 40.668675, 42.226823, 47.321605, 27.72944, 30.469853, 48.919002, 49.650614, 48.840188, 49.443166, 46.949801, 48.382798, 47.660603, 48.472692, 42.859946, 44.913298, 47.605896, 48.445914, 48.41698, 48.909667, 42.23507, 42.914193, 52.8281, 53.585952, 50.709311, 51.662219, 42.29968, 44.399225, 42.302746, 45.391958, 34.680866, 37.03377, 30.743515, 37.07228, 28.245649, 30.408935, 47.277693, 48.504255, 25.241528, 27.780726, 42.223363, 42.548418, 43.435888, 44.696952, 44.693193, 45.00187, 48.886267, 49.326755, 49.288642, 49.632304, 50.717486, 51.314369, 52.914204, 53.33964, 52.910094, 53.115926, 52.908382, 53.258095, 51.64533, 52.408305, 42.236825, 42.699126, 43.068466, 43.898632, 42.670403, 43.082219, 44.379045, 45.187742, 44.382336, 44.981379, 47.310362, 48.06019, 45.359099, 46.814439, 40.569751, 42.047741, 40.587956, 41.41263, 38.519192, 40.185033, 35.790476, 37.029005, 26.825605, 27.763896, 27.199658, 27.751649, 29.150192, 30.381073, 29.573886, 30.065162, 30.047775, 30.384089, 30.001277, 30.388525, 48.494118, 49.173841, 22.398528, 22.601198, 7.441114, 11.505968, 3.767491, 9.005209, 12.642067, 17.410886],
    ic = 95,
    jc = [110.3961374, 105.0743788, 96.8991824, 95.61810411, 93.82412598, 91.3892353, 91.38931858, 89.08325955, 87.22469808, 86.26278402, 85.17353, 85.23741211, 82.86627441, 81.90481038, 79.59687147, 80.39829237, 79.93319363, 77.80279948, 75.2557704, 73.49357829, 73.1892532, 73.87758816, 74.4064738, 74.10215224, 75.46409695, 76.77739692, 78.28299615, 78.15499485, 78.37920654, 78.89145345, 79.69282199, 81.19938178, 81.80830295, 83.89093424, 85.94149523, 87.86447266, 89.03414958, 90.05918132, 91.10026937, 92.15733832, 93.74361735, 95.82597331, 97.95655545, 97.12363037, 98.2129739, 99.2068571, 101.6587874, 102.5239084, 102.2356106, 105.0249238, 106.0992342, 107.8617093, 111.6439372, 109.591869, 112.284586, 117.7961157, 118.9495128, 114.2076584, 118.693565, 123.1475225, 122.730705, 120.9361393, 123.4207441, 122.3787782, 122.1385425, 121.5904281, 121.1773763, 120.6805404, 120.2483355, 122.795807, 122.8759077, 121.3060262, 122.1392177, 123.7418799, 126.4177599, 128.5647409, 129.7194884, 131.2259136, 131.9950494, 133.6289931, 135.6168614, 131.3875545, 130.8743365, 128.6303223, 126.0997773, 124.4015375, 122.22161, 119.6586483, 119.7866827, 118.5685878, 116.5177976, 114.819101, 119.0812964, 116.453265, 111.7431171],
    kc = [43.2190351, 42.38053385, 43.17417589, 44.42226915, 45.09863634, 45.56708116, 47.33599718, 48.68832709, 49.62448486, 48.9482175, 48.4800472, 47.33564399, 47.43948676, 46.03452067, 45.20221788, 43.34563043, 42.32965739, 41.39690972, 40.82972331, 39.95567654, 39.25892877, 38.36098768, 38.05441569, 37.16878445, 36.38899414, 35.36126817, 34.30953451, 32.58503879, 31.56975694, 30.77800266, 30.43559814, 29.7744892, 30.0931977, 28.71103299, 27.70739665, 27.5775472, 27.01096137, 27.77857883, 27.50707954, 26.50328315, 26.70387804, 27.95548557, 27.29428901, 23.64685493, 23.62310601, 21.67493381, 20.77751465, 21.32070991, 22.1824113, 22.31232964, 22.51316054, 16.80037679, 13.19749864, 0.6939743381, 1.541660428, 10.50208252, 15.58926975, 17.89090007, 19.94928467, 22.18490153, 25.37285292, 25.61456434, 30.62532552, 31.08099284, 31.89238173, 32.50092692, 32.80325765, 34.25546956, 35.15486138, 36.90170139, 37.8348272, 37.941604, 38.6480797, 38.96797201, 40.98146918, 41.25573296, 42.07218153, 42.49132813, 44.65259766, 44.69330702, 48.62286865, 48.09383952, 49.19628499, 50.03402317, 53.27678901, 53.62976345, 53.89420546, 52.98933322, 52.01872884, 50.23210259, 50.18807048, 47.49769857, 47.34362712, 46.50502143, 45.24770128],
    lc = [98.7895, 122.954182, 107.860913, 118.087007, 119.133165, 128.029533, 79.941749, 99.023087, 119.916883, 122.08841, 127.912143, 130.941471, 106.499502, 108.070244, 119.826245, 126.375818, 111.797006, 119.318387, 100.743285, 102.221517, 99.854448, 100.782445, 97.522928, 98.835028, 99.093518, 99.893783, 122.910927, 123.767769, 123.721954, 125.50077, 123.729657, 124.760724, 125.481902, 126.404079, 125.477737, 126.071019, 130.824331, 133.613395, 127.905767, 128.662524, 128.652527, 129.6321, 132.887552, 134.11249, 117.37297, 119.237999, 116.080154, 117.424589, 114.413586, 116.130948, 116.486264, 119.598927, 110.5728, 111.858437, 74.465162, 79.995337, 82.860821, 91.347291, 85.716024, 98.970481, 127.658331, 129.540202, 129.470528, 130.21808, 133.723748, 134.738785, 134.374555, 135.111443, 130.861475, 131.337438, 115.506627, 117.538123, 115.772783, 116.741632, 108.529656, 110.60782, 121.358945, 124.619773, 126.159424, 127.340582, 91.275275, 95.605228, 79.874427, 82.938601, 76.413314, 78.338763, 78.275229, 79.995765, 83.956612, 85.727511, 85.503554, 89.349858, 97.990418, 98.942257, 106.646704, 108.604437, 111.393667, 111.817723, 111.585811, 111.810645, 116.000232, 117.018216, 116.252108, 116.682705, 119.430384, 119.916417, 120.653168, 121.38883, 120.342727, 120.669383, 124.587426, 125.781376, 126.215282, 126.782323, 95.566367, 102.040026, 95.577158, 96.159009, 95.557772, 97.799728, 91.298032, 93.350057, 93.323794, 94.691771, 89.342471, 90.542019, 82.264229, 82.885485, 78.335615, 80.025844, 76.623947, 78.355027, 73.495149, 74.484473, 74.846872, 76.482208, 91.560117, 94.871859, 88.761692, 89.23822, 83.240549, 83.967602, 82.292367, 83.2495, 81.878825, 83.256003, 80.75421, 81.465955, 86.465421, 88.270356, 102.201019, 104.228033, 112.158282, 116.827153, 108.965663, 113.025767, 111.166575, 117.97687],
    mc = [22.545421, 42.279053, 17.226272, 22.731982, 41.294917, 50.743316, 30.361986, 42.326603, 21.699185, 22.690751, 42.419757, 48.938435, 21.426505, 22.64567, 50.651745, 52.916705, 42.20641, 45.201064, 21.131326, 22.565685, 21.438288, 22.580379, 23.735785, 25.295582, 22.001087, 22.560315, 38.979333, 41.340757, 40.28938, 41.332289, 39.734164, 40.344718, 40.968803, 41.325813, 40.721073, 41.061503, 44.871533, 48.012179, 41.338366, 42.445601, 42.010343, 42.436934, 45.875217, 48.208327, 45.134237, 46.786509, 45.135376, 46.394665, 45.150734, 45.742257, 47.480099, 50.065931, 42.217982, 43.46329, 37.014057, 40.662848, 42.221079, 47.315558, 27.723432, 30.46385, 48.913298, 49.644555, 48.83396, 49.436824, 46.944059, 48.376613, 47.654503, 48.466331, 42.854333, 44.907682, 47.600253, 48.440245, 48.410926, 48.903468, 42.229292, 42.908294, 52.822466, 53.58012, 50.703491, 51.656037, 42.29378, 44.393379, 42.296912, 45.385809, 34.679282, 37.027699, 30.740622, 37.066377, 28.241967, 30.403134, 47.271949, 48.49848, 25.235818, 27.774976, 42.217425, 42.542102, 43.429763, 44.691016, 44.687044, 44.995758, 48.880431, 49.320551, 49.282865, 49.626267, 50.711607, 51.308382, 52.908547, 53.333963, 52.904419, 53.109706, 52.902338, 53.251938, 51.639701, 52.402205, 42.231045, 42.693581, 43.062756, 43.892771, 42.664519, 43.075927, 44.372942, 45.1815, 44.376327, 44.975476, 47.304623, 48.054453, 45.353174, 46.808493, 40.563653, 42.041556, 40.582164, 41.4064, 38.51618, 40.179105, 35.789745, 37.023144, 26.825402, 27.757641, 27.193806, 27.745766, 29.144229, 30.375186, 29.567889, 30.059102, 30.041938, 30.378006, 29.995047, 30.382338, 48.48834, 49.169021, 22.392816, 22.595333, 7.439914, 11.500161, 3.766676, 9.000793, 12.640512, 17.406563],
    nc = 3E3,
    oc = 2.0E-5,
    pc = 3.0E-6,
    qc = 0.0174532925194,
    rc = 0.0065,
    sc = 0.0060,
    tc = 4E4,
    uc = 0,
    vc = 3,
    wc = 1.0E-10,
    xc = 6370996.81,
    yc = 1E8;
    function zc(a, b, c) {
        for (var e = ec,
        f = 0; f < e; f += 2) if (a.lng >= b[f] && a.lng <= b[f + 1] && a.lat >= c[f] && a.lat <= c[f + 1]) return p;
        return t
    }
    function Ac(a) {
        var b = a.lng,
        c = a.lat,
        a = Math.sqrt(b * b + c * c) + Math.sin(c * nc * qc) * oc,
        b = Math.atan2(c, b) + Math.cos(b * nc * qc) * pc;
        return {
            lng: a * Math.cos(b) + rc,
            lat: a * Math.sin(b) + sc
        }
    }
    function Bc(a) {
        var b = Cc,
        c = {},
        e = a.lng,
        f = a.lat,
        g = 1,
        i = a.lng,
        k = a.lat,
        m = e - g,
        n = 0,
        o = f + g,
        q = 0,
        v = e - g,
        w = 0,
        y = f - g,
        z = 0,
        B = e + g,
        D = 0,
        G = f - g,
        E = 0,
        C = e + g,
        H = 0,
        I = f + g,
        N = 0,
        o = m = 0,
        o = Dc(b, e, f),
        m = o.lng,
        o = o.lat;
        if (1.0E-6 >= Ec(m, o, i, k)) return c.lng = e,
        c.lat = f,
        c;
        for (;;) {
            m = e - g;
            o = f + g;
            v = e - g;
            y = f - g;
            B = e + g;
            G = f - g;
            C = e + g;
            I = f + g;
            e = Dc(b, m, o);
            n = e.lng;
            q = e.lat;
            e = Dc(b, v, y);
            w = e.lng;
            z = e.lat;
            e = Dc(b, B, G);
            D = e.lng;
            E = e.lat;
            e = Dc(b, C, I);
            H = e.lng;
            N = e.lat;
            e = Ec(n, q, i, k);
            n = Ec(w, z, i, k);
            w = Ec(D, E, i, k);
            H = Ec(H, N, i, k);
            if (1.0E-6 > e) return c.lng = m,
            c.lat = o,
            c;
            if (1.0E-6 > n) return c.lng = v,
            c.lat = y,
            c;
            if (1.0E-6 > w) return c.lng = B,
            c.lat = G,
            c;
            if (1.0E-6 > H) return c.lng = C,
            c.lat = I,
            c;
            D = 1 / e;
            n = 1 / n;
            w = 1 / w;
            H = 1 / H;
            e = (m * D + v * n + B * w + C * H) / (D + n + w + H);
            f = (o * D + y * n + G * w + I * H) / (D + n + w + H);
            o = Dc(b, e, f);
            m = o.lng;
            o = o.lat;
            if (1.0E-6 >= Ec(m, o, i, k)) return c.lng = e,
            c.lat = f,
            c;
            g *= 0.6;
            if (1.0E-6 > g) {
                a: {
                    c = (a.lng + 0.03 - (a.lng - 0.03)) / 1.0E-4 + 0.5;
                    g = (a.lat + 0.03 - (a.lat - 0.03)) / 1.0E-4 + 0.5;
                    i = a.lng * yc;
                    k = a.lat * yc;
                    y = 1.0E-4 * yc;
                    m = i - y;
                    o = i + y;
                    v = k - y;
                    B = k + y;
                    D = n = w = H = l;
                    C = n = y = G = w = H = 0;
                    b(a);
                    D = l;
                    for (I = 0; I <= c; I++) {
                        for (e = 0; e <= g; e++) if (D = b(l), H = l.lng * yc, w = l.lat * yc, n = D.lng * yc, D = D.lat * yc, !(n < m || D < v || n > o || D > B)) {
                            H -= n;
                            w -= D;
                            n = Math.sqrt((i - n) * (i - n) + (k - D) * (k - D));
                            if (1 > n) {
                                c = {};
                                c.lng = l.lng;
                                c.lat = l.lat;
                                break a
                            }
                            G += 1 * H / n;
                            y += 1 * w / n;
                            C += 1 / n
                        }
                        G /= C * yc;
                        y /= C * yc
                    }
                    b = G * yc / yc;
                    g = y * yc / yc;
                    c = {};
                    c.lng = a.lng + b;
                    c.lat = a.lat + g
                }
                return c
            }
        }
    }
    function Dc(a, b, c) {
        a = a({
            lng: b,
            lat: c
        });
        b = {};
        b.lng = a.lng;
        b.lat = a.lat;
        return b
    }
    function Fc(a, b, c, e) {
        var f = arguments.length;
        this.Kg = {};
        this.Rg = {};
        0 !== f && 4 === f && this.normalize(a, b, c, e)
    }
    Fc.prototype.contains = function(a) {
        return a.lng > this.Kg.lng && a.lng < this.Rg.lng && a.lat > this.Kg.lat && a.lat < this.Rg.lat ? vc: Math.abs(a.lng - this.Kg.lng) < wc || Math.abs(a.lng - this.Rg.lng) < wc || Math.abs(a.lat - this.Kg.lat) < wc || Math.abs(a.y - this.Rg.lat) > wc ? 2 : uc
    };
    Fc.prototype.normalize = function(a, b, c, e) {
        a > c ? (this.Kg.lng = c, this.Rg.lng = a) : (this.Kg.lng = a, this.Rg.lng = c);
        b > e ? (this.Kg.lat = e, this.Rg.lat = b) : (this.Kg.lat = b, this.Rg.lat = e)
    };
    function Gc(a, b, c, e) {
        this.Du = {
            lng: a,
            lat: b
        };
        this.xx = {
            lng: c,
            lat: e
        };
        this.uy = new Fc(a, b, c, e)
    }
    function Hc(a, b) {
        var c = a.lat * qc,
        e = b.lat * qc,
        f = c - e,
        g = a.lng * qc - b.lng * qc;
        return 2 * Math.asin(Math.sqrt(Math.sin(f / 2) * Math.sin(f / 2) + Math.cos(c) * Math.cos(e) * Math.sin(g / 2) * Math.sin(g / 2))) * xc
    }
    function Ec(a, b, c, e) {
        return Math.sqrt((a - c) * (a - c) + (b - e) * (b - e))
    }
    function Ic(a, b, c) {
        return (b.lng - a.lng) * (c.lat - a.lat) - (c.lng - a.lng) * (b.lat - a.lat)
    }
    function Cc(a) {
        var b = {};
        if (a.lng < cc[0] - 0.4 || a.lat < cc[1] - 0.4 || a.lng > cc[2] + 0.4 || a.lat > cc[3] + 0.4) return b.lng = a.lng,
        b.lat = a.lat,
        b;
        if (zc(a, lc, mc)) return b = Ac(a);
        for (var b = 0,
        c = tc,
        e = 0,
        f = new Fc,
        g = 0,
        e = 0; e < ic; ++e) kc[e] <= a.lat ? kc[(e + 1) % ic] > a.lat && 0 < Ic({
            lng: jc[e],
            lat: kc[e]
        },
        {
            lng: jc[(e + 1) % ic],
            lat: kc[(e + 1) % ic]
        },
        a) && ++g: kc[(e + 1) % ic] <= a.lat && 0 > Ic({
            lng: jc[e],
            lat: kc[e]
        },
        {
            lng: jc[(e + 1) % ic],
            lat: kc[(e + 1) % ic]
        },
        a) && --g;
        if ((0 === g ? uc: vc) === uc) {
            for (g = 0; g < ic; ++g) if (e = new Gc(jc[g], kc[g], jc[(g + 1) % ic], kc[(g + 1) % ic]), f.Kg.lng = e.uy.Kg.lng - 0.5, f.Kg.lat = e.uy.Kg.lat - 0.5, f.Rg.lng = e.uy.Rg.lng + 0.5, f.Rg.lat = e.uy.Rg.lat + 0.5, f.contains(a) !== uc) {
                var i;
                var k = e.Du.lng,
                m = e.Du.lat,
                n = e.xx.lng,
                o = e.xx.lat;
                i = o - m;
                var q = k - n; ! (Math.abs(i - 0) > wc) && !(Math.abs(q - 0) > wc) ? i = e.Du: (k = n * m - k * o, m = q * a.lng - i * a.lat, n = i * i - q * q, i = {
                    lng: (q * m - i * k) / n,
                    lat: -(i * m + q * k) / n
                });
                q = 180;
                k = 90;
                m = -180;
                n = -90;
                n = e.Du;
                o = e.xx;
                q = n.lng < o.lng ? n.lng: o.lng;
                k = n.lat < o.lat ? n.lat: o.lat;
                m = n.lng < o.lng ? n.lng: o.lng;
                n = n.lat < o.lat ? n.lat: o.lat;
                i.lng <= m && i.lng >= q && i.lng <= n && i.lat >= k ? (e = a.lat * qc, q = a.lng * qc, k = i.lat * qc, i = i.lng * qc, m = Math.cos(e) * Math.cos(k), e = m * Math.cos(q) * Math.cos(i) + m * Math.sin(q) * Math.sin(i) + Math.sin(e) * Math.sin(k), -1 > e ? e = -1 : 1 < e && (e = 1), e = Math.acos(e) * xc) : (i = Hc(a, e.Du), e = Hc(a, e.xx), e = i < e ? i: e);
                e < c && (c = e)
            }
            c < tc && (b = (tc - c) / tc)
        } else b = 1;
        c = Ac(a);
        return b = {
            lng: a.lng + (c.lng - a.lng) * b,
            lat: a.lat + (c.lat - a.lat) * b
        }
    }
    function Jc(a) {
        var b = {};
        if (a.lng < dc[0] - 0.4 || a.lat < dc[1] - 0.4 || a.lng > dc[2] + 0.4 || a.lat > dc[3] + 0.4) return b.lng = a.lng,
        b.lat = a.lat,
        b;
        if (zc(a, gc, hc)) {
            var b = a.lng - rc,
            c = a.lat - sc,
            a = Math.sqrt(b * b + c * c) - Math.sin(c * nc * qc) * oc,
            b = Math.atan2(c, b) - Math.cos(b * nc * qc) * pc;
            return b = {
                lng: a * Math.cos(b),
                lat: a * Math.sin(b)
            }
        }
        c = Cc(a);
        return a.lng === c.lng && a.lat === c.lng ? (b.lng = a.lng, b.lat = a.lat, b) : Bc(a)
    }
    function db(a, b) {
        if (3 === b && a instanceof R) {
            var c = Cc(a);
            return new M(c.lng, c.lat)
        }
        return a
    }
    function hb(a, b) {
        if (3 === b && a instanceof M) {
            var c = Jc(a);
            return new R(c.lng, c.lat)
        }
        return 5 === b && a instanceof M ? new R(a.lng, a.lat) : a
    }
    function Ua(a, b, c) {
        return 50331648 | (a || 0) << 16 | (b || 0) << 8 | (c || 0)
    };
    function ra(a, b, c) {
        if (b) {
            var e = (1E5 * Math.random()).toFixed(0);
            F._rd["_cbk" + e] = function(a) {
                a.result && a.result.error && 403 === a.result.error ? F.Yp !== s && F.Yp.update("\u672a\u83b7\u5f97\u767e\u5ea6\u5730\u56fe\u5546\u7528\u6388\u6743\uff0c\u53ef\u80fd\u5bfc\u81f4\u90e8\u5206\u5730\u56fe\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u540e\u91cd\u8bd5\u3002") : (b && b(a), delete F._rd["_cbk" + e])
            };
            a += "&callback=BMap._rd._cbk" + e
        }
        c || (a = rb(a));
        var f = J("script", {
            type: "text/javascript"
        });
        f.charset = "utf-8";
        f.src = a;
        f.addEventListener ? f.addEventListener("load",
        function(a) {
            a = a.target;
            a.parentNode.removeChild(a)
        },
        t) : f.attachEvent && f.attachEvent("onreadystatechange",
        function() {
            var a = window.event.srcElement;
            a && ("loaded" == a.readyState || "complete" == a.readyState) && a.parentNode.removeChild(a)
        });
        setTimeout(function() {
            document.getElementsByTagName("head")[0].appendChild(f);
            f = s
        },
        1)
    }
    function Kc(a) {
        if (navigator.cookieEnabled) return (a = document.cookie.match(RegExp("(^| )" + a + "=([^;]*)(;|$)"))) ? unescape(a[2]) : -1;
        if (localStorage) return localStorage.getItem(a) ? localStorage.getItem(a) : -1;
        if (sessionStorage) return sessionStorage.getItem(a) ? localStorage.getItem(a) : -1
    }
    function rb(a) {
        var b = decodeURIComponent(a.substring(a.indexOf("?") + 1)),
        c = (new Date).getTime(),
        e = window.___abvk ? window.___abvk: Kc("SECKEY_ABVK"),
        f = Kc("BMAP_SECKEY"),
        a = a + "&v=3.0&seckey=" + encodeURIComponent(e + "," + f) + "&timeStamp=" + c;
        return a += Lc()(b + ("&v=3.0&seckey=" + e + "," + f + "&timeStamp=" + c))
    };
    var Mc = {
        map: "5mwzxo",
        common: "lbduti",
        style: "gtkxpz",
        tile: "l5drcj",
        groundoverlay: "mntms5",
        pointcollection: "neob4u",
        marker: "advlns",
        symbol: "lhxasv",
        canvablepath: "xcv4km",
        vmlcontext: "tbh3mb",
        markeranimation: "s20coj",
        poly: "ds4rk3",
        draw: "ptagms",
        drawbysvg: "eddtxd",
        drawbyvml: "ak5zhq",
        drawbycanvas: "c3mr1i",
        infowindow: "vpfrkg",
        oppc: "bss4ex",
        opmb: "s4lekb",
        menu: "lwnjip",
        control: "syyrrn",
        navictrl: "0vefdn",
        geoctrl: "1zpa4q",
        copyrightctrl: "w3h3s5",
        citylistcontrol: "fnul1h",
        scommon: "xs2rea",
        local: "bqnr41",
        route: "0eqjop",
        othersearch: "bhq2dd",
        mapclick: "yawbrb",
        buslinesearch: "fnzrak",
        hotspot: "fy4ero",
        autocomplete: "1xbzvn",
        coordtrans: "1se0u3",
        coordtransutils: "gykzzf",
        convertor: "xg3ivk",
        clayer: "v4a30q",
        pservice: "0afpmx",
        pcommon: "nomixy",
        panorama: "x1ffvt",
        panoramaflash: "lsjwm0"
    };
    A.ez = function() {
        function a(a) {
            return e && !!c[b + a + "_" + Mc[a]]
        }
        var b = "BMap_",
        c = window.localStorage,
        e = "localStorage" in window && c !== s && c !== l;
        return {
            vZ: e,
            set: function(a, g) {
                if (e) {
                    for (var i = b + a + "_",
                    k = c.length,
                    m; k--;) m = c.key(k),
                    -1 < m.indexOf(i) && c.removeItem(m);
                    try {
                        c.setItem(b + a + "_" + Mc[a], g)
                    } catch(n) {
                        c.clear()
                    }
                }
            },
            get: function(f) {
                return e && a(f) ? c.getItem(b + f + "_" + Mc[f]) : t
            },
            FK: a
        }
    } ();
    function Za() {}
    A.object.extend(Za, {
        Tj: {
            QG: -1,
            oQ: 0,
            Jq: 1
        },
        NL: function() {
            var a = "canvablepath";
            if (!L() || !Yb()) Xb() || (Wb() ? a = "vmlcontext": Yb());
            return {
                tile: ["style"],
                control: [],
                marker: ["symbol"],
                symbol: ["canvablepath", "common"],
                canvablepath: "canvablepath" === a ? [] : [a],
                vmlcontext: [],
                style: [],
                poly: ["marker", "drawbycanvas", "drawbysvg", "drawbyvml"],
                drawbysvg: ["draw"],
                drawbyvml: ["draw"],
                drawbycanvas: ["draw"],
                infowindow: ["common", "marker"],
                menu: [],
                oppc: [],
                opmb: [],
                scommon: [],
                local: ["scommon"],
                route: ["scommon"],
                othersearch: ["scommon"],
                autocomplete: ["scommon"],
                citylistcontrol: ["autocomplete"],
                mapclick: ["scommon"],
                buslinesearch: ["route"],
                hotspot: [],
                coordtransutils: ["coordtrans"],
                convertor: [],
                clayer: ["tile"],
                pservice: [],
                pcommon: ["style", "pservice"],
                panorama: ["pcommon"],
                panoramaflash: ["pcommon"]
            }
        },
        u6: {},
        HG: {
            AQ: F.pa + "getmodules?v=3.0",
            YU: 5E3
        },
        VC: t,
        Xd: {
            Ql: {},
            Vn: [],
            xw: []
        },
        load: function(a, b, c) {
            var e = this.qb(a);
            if (e.Re == this.Tj.Jq) c && b();
            else {
                if (e.Re == this.Tj.QG) {
                    this.KK(a);
                    this.$N(a);
                    var f = this;
                    f.VC == t && (f.VC = p, setTimeout(function() {
                        for (var a = [], b = 0, c = f.Xd.Vn.length; b < c; b++) {
                            var e = f.Xd.Vn[b],
                            n = "";
                            ja.ez.FK(e) ? n = ja.ez.get(e) : (n = "", a.push(e + "_" + Mc[e]));
                            f.Xd.xw.push({
                                qN: e,
                                cF: n
                            })
                        }
                        f.VC = t;
                        f.Xd.Vn.length = 0;
                        0 == a.length ? f.tL() : ra(f.HG.AQ + "&mod=" + a.join(","))
                    },
                    1));
                    e.Re = this.Tj.oQ
                }
                e.pv.push(b)
            }
        },
        KK: function(a) {
            if (a && this.NL()[a]) for (var a = this.NL()[a], b = 0; b < a.length; b++) this.KK(a[b]),
            this.Xd.Ql[a[b]] || this.$N(a[b])
        },
        $N: function(a) {
            for (var b = 0; b < this.Xd.Vn.length; b++) if (this.Xd.Vn[b] == a) return;
            this.Xd.Vn.push(a)
        },
        O_: function(a, b) {
            var c = this.qb(a);
            try {
                eval(b)
            } catch(e) {
                return
            }
            c.Re = this.Tj.Jq;
            for (var f = 0,
            g = c.pv.length; f < g; f++) c.pv[f]();
            c.pv.length = 0
        },
        FK: function(a, b) {
            var c = this;
            c.timeout = setTimeout(function() {
                c.Xd.Ql[a].Re != c.Tj.Jq ? (c.remove(a), c.load(a, b)) : clearTimeout(c.timeout)
            },
            c.HG.YU)
        },
        qb: function(a) {
            this.Xd.Ql[a] || (this.Xd.Ql[a] = {},
            this.Xd.Ql[a].Re = this.Tj.QG, this.Xd.Ql[a].pv = []);
            return this.Xd.Ql[a]
        },
        remove: function(a) {
            delete this.qb(a)
        },
        WV: function(a, b) {
            for (var c = this.Xd.xw,
            e = p,
            f = 0,
            g = c.length; f < g; f++)"" == c[f].cF && (c[f].qN == a ? c[f].cF = b: e = t);
            e && this.tL()
        },
        tL: function() {
            for (var a = this.Xd.xw,
            b = 0,
            c = a.length; b < c; b++) this.O_(a[b].qN, a[b].cF);
            this.Xd.xw.length = 0
        }
    });
    function S(a, b) {
        this.x = a || 0;
        this.y = b || 0;
        this.x = this.x;
        this.y = this.y
    }
    S.prototype.Vb = function(a) {
        return a && a.x == this.x && a.y == this.y
    };
    function P(a, b) {
        this.width = a || 0;
        this.height = b || 0
    }
    P.prototype.Vb = function(a) {
        return a && this.width == a.width && this.height == a.height
    };
    function sb(a, b, c) {
        var e = new XMLHttpRequest;
        e.open("POST", a, p);
        e.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        e.timeout = 1E4;
        e.ontimeout = u();
        e.onreadystatechange = function() {
            4 === this.readyState && 200 === this.status && c && c(e.responseText)
        };
        e.send(b)
    }; (function(a) {
        function b(a, b) {
            var c = (a & 65535) + (b & 65535);
            return (a >> 16) + (b >> 16) + (c >> 16) << 16 | c & 65535
        }
        function c(a, c, e, f, g, i) {
            return b(b(b(c, a), b(f, i)) << g | b(b(c, a), b(f, i)) >>> 32 - g, e)
        }
        function e(a, b, e, f, g, i, k) {
            return c(b & e | ~b & f, a, b, g, i, k)
        }
        function f(a, b, e, f, g, i, k) {
            return c(b & f | e & ~f, a, b, g, i, k)
        }
        function g(a, b, e, f, g, i, k) {
            return c(e ^ (b | ~f), a, b, g, i, k)
        }
        function i(a, i) {
            a[i >> 5] |= 128 << i % 32;
            a[(i + 64 >>> 9 << 4) + 14] = i;
            var k, m, n, o, q, E = 1732584193,
            C = -271733879,
            H = -1732584194,
            I = 271733878;
            for (k = 0; k < a.length; k += 16) m = E,
            n = C,
            o = H,
            q = I,
            E = e(E, C, H, I, a[k], 7, -680876936),
            I = e(I, E, C, H, a[k + 1], 12, -389564586),
            H = e(H, I, E, C, a[k + 2], 17, 606105819),
            C = e(C, H, I, E, a[k + 3], 22, -1044525330),
            E = e(E, C, H, I, a[k + 4], 7, -176418897),
            I = e(I, E, C, H, a[k + 5], 12, 1200080426),
            H = e(H, I, E, C, a[k + 6], 17, -1473231341),
            C = e(C, H, I, E, a[k + 7], 22, -45705983),
            E = e(E, C, H, I, a[k + 8], 7, 1770035416),
            I = e(I, E, C, H, a[k + 9], 12, -1958414417),
            H = e(H, I, E, C, a[k + 10], 17, -42063),
            C = e(C, H, I, E, a[k + 11], 22, -1990404162),
            E = e(E, C, H, I, a[k + 12], 7, 1804603682),
            I = e(I, E, C, H, a[k + 13], 12, -40341101),
            H = e(H, I, E, C, a[k + 14], 17, -1502002290),
            C = e(C, H, I, E, a[k + 15], 22, 1236535329),
            E = f(E, C, H, I, a[k + 1], 5, -165796510),
            I = f(I, E, C, H, a[k + 6], 9, -1069501632),
            H = f(H, I, E, C, a[k + 11], 14, 643717713),
            C = f(C, H, I, E, a[k], 20, -373897302),
            E = f(E, C, H, I, a[k + 5], 5, -701558691),
            I = f(I, E, C, H, a[k + 10], 9, 38016083),
            H = f(H, I, E, C, a[k + 15], 14, -660478335),
            C = f(C, H, I, E, a[k + 4], 20, -405537848),
            E = f(E, C, H, I, a[k + 9], 5, 568446438),
            I = f(I, E, C, H, a[k + 14], 9, -1019803690),
            H = f(H, I, E, C, a[k + 3], 14, -187363961),
            C = f(C, H, I, E, a[k + 8], 20, 1163531501),
            E = f(E, C, H, I, a[k + 13], 5, -1444681467),
            I = f(I, E, C, H, a[k + 2], 9, -51403784),
            H = f(H, I, E, C, a[k + 7], 14, 1735328473),
            C = f(C, H, I, E, a[k + 12], 20, -1926607734),
            E = c(C ^ H ^ I, E, C, a[k + 5], 4, -378558),
            I = c(E ^ C ^ H, I, E, a[k + 8], 11, -2022574463),
            H = c(I ^ E ^ C, H, I, a[k + 11], 16, 1839030562),
            C = c(H ^ I ^ E, C, H, a[k + 14], 23, -35309556),
            E = c(C ^ H ^ I, E, C, a[k + 1], 4, -1530992060),
            I = c(E ^ C ^ H, I, E, a[k + 4], 11, 1272893353),
            H = c(I ^ E ^ C, H, I, a[k + 7], 16, -155497632),
            C = c(H ^ I ^ E, C, H, a[k + 10], 23, -1094730640),
            E = c(C ^ H ^ I, E, C, a[k + 13], 4, 681279174),
            I = c(E ^ C ^ H, I, E, a[k], 11, -358537222),
            H = c(I ^ E ^ C, H, I, a[k + 3], 16, -722521979),
            C = c(H ^ I ^ E, C, H, a[k + 6], 23, 76029189),
            E = c(C ^ H ^ I, E, C, a[k + 9], 4, -640364487),
            I = c(E ^ C ^ H, I, E, a[k + 12], 11, -421815835),
            H = c(I ^ E ^ C, H, I, a[k + 15], 16, 530742520),
            C = c(H ^ I ^ E, C, H, a[k + 2], 23, -995338651),
            E = g(E, C, H, I, a[k], 6, -198630844),
            I = g(I, E, C, H, a[k + 7], 10, 1126891415),
            H = g(H, I, E, C, a[k + 14], 15, -1416354905),
            C = g(C, H, I, E, a[k + 5], 21, -57434055),
            E = g(E, C, H, I, a[k + 12], 6, 1700485571),
            I = g(I, E, C, H, a[k + 3], 10, -1894986606),
            H = g(H, I, E, C, a[k + 10], 15, -1051523),
            C = g(C, H, I, E, a[k + 1], 21, -2054922799),
            E = g(E, C, H, I, a[k + 8], 6, 1873313359),
            I = g(I, E, C, H, a[k + 15], 10, -30611744),
            H = g(H, I, E, C, a[k + 6], 15, -1560198380),
            C = g(C, H, I, E, a[k + 13], 21, 1309151649),
            E = g(E, C, H, I, a[k + 4], 6, -145523070),
            I = g(I, E, C, H, a[k + 11], 10, -1120210379),
            H = g(H, I, E, C, a[k + 2], 15, 718787259),
            C = g(C, H, I, E, a[k + 9], 21, -343485551),
            E = b(E, m),
            C = b(C, n),
            H = b(H, o),
            I = b(I, q);
            return [E, C, H, I]
        }
        function k(a) {
            var b, c = "",
            e = 32 * a.length;
            for (b = 0; b < e; b += 8) c += String.fromCharCode(a[b >> 5] >>> b % 32 & 255);
            return c
        }
        function m(a) {
            var b, c = [];
            c[(a.length >> 2) - 1] = l;
            for (b = 0; b < c.length; b += 1) c[b] = 0;
            var e = 8 * a.length;
            for (b = 0; b < e; b += 8) c[b >> 5] |= (a.charCodeAt(b / 8) & 255) << b % 32;
            return c
        }
        function n(a) {
            var b = "",
            c, e;
            for (e = 0; e < a.length; e += 1) c = a.charCodeAt(e),
            b += "0123456789abcdef".charAt(c >>> 4 & 15) + "0123456789abcdef".charAt(c & 15);
            return b
        }
        function o(a, b) {
            var c = unescape(encodeURIComponent(a)),
            e = unescape(encodeURIComponent(b)),
            f = m(c),
            g = [],
            n = [];
            g[15] = n[15] = l;
            16 < f.length && (f = i(f, 8 * c.length));
            for (c = 0; 16 > c; c += 1) g[c] = f[c] ^ 909522486,
            n[c] = f[c] ^ 1549556828;
            e = i(g.concat(m(e)), 512 + 8 * e.length);
            return k(i(n.concat(e), 640))
        }
        function q(a, b, c) {
            return ! b ? !c ? n(k(i(m(unescape(encodeURIComponent(a))), 8 * unescape(encodeURIComponent(a)).length))) : k(i(m(unescape(encodeURIComponent(a))), 8 * unescape(encodeURIComponent(a)).length)) : !c ? n(o(b, a)) : o(b, a)
        }
        "function" === typeof define && define.j3 ? define(function() {
            return q
        }) : "object" === typeof module && module.uX ? module.uX = q: a.md5 = q
    })(this);
    function ib() {
        function a() {
            if (1 === arguments.length && "object" === typeof arguments[0]) {
                var a = arguments[0] || {};
                for (key in a) if (!a[key] || !(g[key] && a[key] === g[key])) if (a[key] || 0 === a[key]) g[key] = a[key]
            }
            a = document.getElementById(g.Mh);
            a.parentNode.removeChild(a);
            m.disconnect()
        }
        function b(a) {
            if (1 === arguments.length && "object" === typeof arguments[0]) {
                var b = arguments[0] || {};
                for (key in b) if (!b[key] || !(g[key] && b[key] === g[key])) if (b[key] || 0 === b[key]) g[key] = b[key]
            } (b = document.getElementById(g.Mh)) && b.parentNode && b.parentNode.removeChild(b);
            if (b = document.getElementById(g.oz)) {
                var c = b ? b: document.body;
                if (A.ga.oa) f = parseFloat(A.U.wf(c, "width")),
                e = parseFloat(A.U.wf(c, "height"));
                else var e = getComputedStyle(c, s),
                f = parseFloat(e.width),
                e = parseFloat(e.height);
                var i = document.getElementById(g.Mh),
                o = s;
                if (i) i.shadowRoot && (o = i.shadowRoot);
                else {
                    i = document.createElement("div");
                    i.id = g.Mh;
                    i.setAttribute("style", "pointer-events: none !important; display: block !important");
                    var o = "function" === typeof i.attachShadow ? i.attachShadow({
                        mode: "closed"
                    }) : i,
                    G = c.children,
                    E = Math.floor(Math.random() * (G.length - 1));
                    G[E] ? c.insertBefore(i, G[E]) : c.appendChild(i)
                }
                g.ol = parseInt((f - g.Dq) / (g.Kn + g.Ln)) || 1;
                i = parseInt((f - g.Dq - g.Kn * g.ol) / g.ol);
                g.Ln = i ? g.Ln: i;
                g.pl = parseInt((e - g.Eq) / (g.Jn + g.Mn)) || 1;
                i = parseInt((e - g.Eq - g.Jn * g.pl) / g.pl);
                g.Mn = i ? g.Mn: i;
                b ? (i = g.Dq + g.Kn * g.ol + g.Ln * (g.ol - 1), G = g.Eq + g.Jn * g.pl + g.Mn * (g.pl - 1)) : (i = 0 + g.Dq + g.Kn * g.ol + g.Ln * (g.ol - 1), G = 0 + g.Eq + g.Jn * g.pl + g.Mn * (g.pl - 1));
                for (var C, H = document.createDocumentFragment(), I = 0; I < g.pl; I++) {
                    C = b ? 0 + g.Eq + (g.Mn + g.Jn) * I: g.Eq + (e - G) / 2 + (g.Mn + g.Jn) * I;
                    for (var N = 0; N < g.ol; N++) {
                        var E = b ? 0 + g.Dq + (f - i) / 2 + (g.Kn + g.Ln) * N: g.Dq + (f - i) / 2 + (g.Kn + g.Ln) * N,
                        O = document.createElement("div");
                        O.appendChild(document.createTextNode(g.yP));
                        O.id = g.pz + I + N;
                        O.style.webkitTransform = "rotate(-" + g.Vu + "deg)";
                        O.style.MozTransform = "rotate(-" + g.Vu + "deg)";
                        O.style.msTransform = "rotate(-" + g.Vu + "deg)";
                        O.style.f2 = "rotate(-" + g.Vu + "deg)";
                        O.style.transform = "rotate(-" + g.Vu + "deg)";
                        O.style.visibility = "";
                        O.style.position = "absolute";
                        O.style.left = E + "px";
                        O.style.top = C + "px";
                        O.style.overflow = "hidden";
                        O.style.zIndex = "9999999";
                        O.style.opacity = g.C1;
                        O.style.fontSize = g.F1;
                        O.style.fontFamily = g.E1;
                        O.style.color = g.D1;
                        O.style.textAlign = "center";
                        O.style.width = g.Kn + "px";
                        O.style.height = g.Jn + "px";
                        O.style.display = "block";
                        O.style["-ms-user-select"] = "none";
                        H.appendChild(O)
                    }
                }
                o.appendChild(H);
                if ((a.dF === l ? g.dF: a.dF) && k) m.observe(c, n),
                m.observe(document.getElementById(g.Mh), n)
            }
        }
        function c(a) {
            if (f) f = t;
            else {
                for (var c = t,
                e = 0,
                i = 0,
                k = 0; k < a.length; k++) {
                    if (o && a[k].target && a[k].target.getAttribute) {
                        var m = a[k].target.getAttribute("id");
                        if (m && (m === g.Mh || 0 <= m.indexOf(g.pz))) {
                            c = p;
                            break
                        }
                    }
                    for (var n = 0; n < a[k].addedNodes.length; n++) if (m = a[k].addedNodes[n], m = m.getAttribute("id"), o && m && (m === g.Mh || 0 <= m.indexOf(g.pz))) {
                        e += 1;
                        break
                    }
                    for (n = 0; n < a[k].removedNodes.length; n++) if (m = a[k].removedNodes[n], m = m.getAttribute("id"), o && m && (m === g.Mh || 0 <= m.indexOf(g.pz))) {
                        i += 1;
                        break
                    }
                } (c || !e && 0 < i) && b(o)
            }
        }
        var e = {},
        f = t,
        g = {
            Mh: "baidu_jsapi_watermark",
            pz: "baidu_jsapi_watermark_span",
            yP: "\u6d4b\u8bd5\u6c34\u5370",
            Dq: 20,
            Eq: 20,
            pl: 0,
            ol: 0,
            Ln: 40,
            Mn: 40,
            E1: "\u5fae\u8f6f\u96c5\u9ed1",
            D1: "black",
            F1: "18px",
            C1: 0.15,
            Kn: 200,
            Jn: 50,
            Vu: 15,
            A7: 0,
            z7: 0,
            oz: s,
            dF: p
        },
        i = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
        k = i !== l,
        m = k ? new i(c) : s,
        n = {
            childList: p,
            attributes: p
        },
        o;
        e.yE = function(a) {
            o = a;
            var c = t;
            if (a.oz) {
                var e = document.getElementById(a.oz);
                if (e) for (var e = e.children,
                f = 0; f < e.length; f++) if (e[f].id && -1 < e[f].id.indexOf("baidu_jsapi_watermark")) {
                    c = p;
                    break
                }
            }
            if (!c) {
                c = g.Mh;
                e = document.getElementById(c);
                for (f = 0; e;) c = g.Mh + "_" + f,
                e = document.getElementById(c),
                f++;
                0 < f && (g.Mh = c)
            }
            b(a);
            A.V(window, "resize",
            function() {
                b(a)
            })
        };
        e.load = function(a) {
            o = a;
            b(a)
        };
        e.remove = function() {
            f = p;
            a()
        };
        return e
    };
    var Nc = Date.now(),
    Oc = s,
    Pc = s,
    Qc = {},
    Rc = {};
    function Ta(a, b) {
        if (!window.navigator || navigator.onLine) Pc || (Pc = function() {
            Sc()
        }),
        18E5 < Date.now() - Nc && (Nc = Date.now(), Qc = {},
        Rc = {}),
        Qc[a] || (Qc[a] = p, Rc[a] = b),
        !Oc && Pc && (Oc = setInterval(Pc, 1E3))
    }
    function Sc() {
        if (0 === Object.keys(Rc).length) clearInterval(Oc),
        Oc = s;
        else {
            var a = Object.keys(Rc)[0],
            b = (new Date).getTime(),
            c = "logCbk" + Math.floor(1E10 * Math.random());
            window.BMap[c] = function() {
                delete window.BMap[c]
            };
            b = "//api.map.baidu.com?qt=jsapi_log&uid=" + qa + "&bmap3=1&device=" + (L() ? 1 : 0) + "&module=" + (Rc[a][0] || "") + "&func=" + (Rc[a][1] || "") + "&subfunc=" + (Rc[a][2] || "") + "&t=" + b + "&callback=BMap." + c;
            b += Lc()(b);
            try {
                ra(b, s, p),
                delete Rc[a]
            } catch(e) {}
            0 === Object.keys(Rc).length && (clearInterval(Oc), Oc = s)
        }
    };
    for (var Tc = function(a, b) {
        function c(a) {
            return f(a,
            function(a) {
                return e(a)
            })
        }
        function e(a) {
            return g.axmim(a, "")[g.xiama][g.axmim(g.aeacm(m, "Char"), k)](a)
        }
        function f(a, b) {
            for (var c = "ccc"; c !== g.ieami;) switch (c) {
            case "mhx":
                for (c = 0; g.hlxed(c, i); c++) {
                    var e = b(a[c]);
                    f.push(e)
                }
                c = g.mlllh;
                break;
            case g.eedem:
                var f = [],
                c = "mhx";
                break;
            case g.mlllh:
                return f;
            case g.eaiha:
                var i = a.length,
                c = "iec"
            }
        }
        var g = {
            ieami: "laxx",
            hlxed: function(a, b) {
                return a < b
            },
            mlllh: "dea",
            eedem: "iec",
            eaiha: "ccc",
            axmim: function(a, b) {
                return a + b
            },
            xiama: "constructor",
            aeacm: function(a, b) {
                return a + b
            },
            echid: function(a, b) {
                return a(b)
            },
            amxxh: function(a, b) {
                return a + b
            },
            meacx: function(a, b) {
                return a(b)
            },
            ihadh: function(a, b, c) {
                return a(b, c)
            },
            chxcd: function(a, b, c) {
                return a(b, c)
            }
        },
        i,
        k,
        m,
        n = decodeURIComponent;
        i = "de";
        m = g.aeacm("fro", "m");
        k = g.amxxh("Co", i);
        var o = c.call(e, [39, 34, 37, 96, 60, 120, 97, 65, 98, 66, 99, 67, 100, 68, 101, 69, 102, 70, 103, 110, 109, 111, 112, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57]);
        i = f([28782, 27702, 26416, 25167, 24183],
        function(a) {
            return g.echid(n, a)
        });
        var q = c.call(i, [22354, 22749, 24415, 23346, 22257, 22688, 24306, 25174, 23595, 25547, 22984, 25690, 22212, 27547, 21594, 27210, 23090, 29193, 22394, 29368, 29532, 29459, 29530, 24146, 24500, 26352, 27441, 28788, 29370, 27673, 26925, 25249, 24430]),
        v = {};
        i = g.meacx(c, i);
        var w = RegExp(i.join("|"));
        for (i = 0; i < o.length; i++) v[q[i]] = o[i];
        b = g.ihadh(f, b.split(""),
        function(a) {
            return v[a] || a
        }).join("");
        return g.chxcd(f, b.split(w),
        function(a) {
            return g.echid(n, a)
        })
    } (this, "\u58a0\u735ci\u59c8l\u6730\u59c8\u735cl\u5ef2\u545a\u706e\u59c8\u59c8i\u56c4\u5ef2\u624f\u59c8\u545a\u59c8\u5ef2\u58a0\u5e77\u735c\u56c4i\u545ah\u5e77\u735c\u59c8\u5ef2\u545al\u6c36\u545ai\u735c\u5ef2\u58a0\u706eSJv\u6a4aY\u72bah\u6b31\u692dZ\u6b9bh\u72ba\u735aHS\u706e\u59c8\u735ci\u735c\u56c4\u706e\u545ah\u545a\u545a\u545a\u706e\u5ef2\u545ah\u5ef2\u545a\u6c36\u5f5f\u66f0\u6c19\u59c8\u5ef2ll\u5c2b\u5ef2\u59c8k\u5f5f\u6b31\u6b9b\u6730\u5ef2\u59c8\u58a0\u545al\u706e\u545ah\u58a0\u545al\u6c36\u5f5f\u6b31\u7209qt\u5f5f\u6b31\u6b9b\u735a\u5ef2\u72b8\u7313_\u545a\u72b8try\u5f5f\u66f0\u6c19v\u5f5f\u6b31\u6b9b\u6c36\u5ef2\u545a\u5ef2\u5ef2l\u706e\u5a32u\u72b8\u59c8ti\u7313\u72b8\u624f\u58a0\u5ef2\u59c8i\u545a\u706e\u56c4l\u56c4\u735c\u58a0\u6c36\u5f5f\u6a4a\u6c19\u5f5f\u62a1\u66f0\u5f5f\u6256\u62a1\u5f5f\u6a4a\u5f6e\u5f5f\u5f6e\u645a\u5f5f\u62a1\u5e52\u5f5f\u6a4a\u62a1\u5f5f\u6256\u6c19\u5f5f\u62a1\u5fb4\u5f5f\u6a4a\u692d\u5f5f\u5f6e\u7074\u5f5f\u63cb\u6b31\u5f5f\u6a4a\u62a1\u5f5f\u6256\u7209\u5f5f\u63cb\u692d\u5f5f\u6a4a\u72ba\u5f5f\u62a1\u72ba\u5f5f\u6256\u62a1\u5f5f\u6a4a\u6c19\u5f5f\u5f6e\u5f6e\u5f5f\u6256\u7209\u5f5f\u6a4a\u72ba\u5f5f\u5f6e\u645a\u5f5f\u63cb\u5e52\u5f5f\u6a4a\u72ba\u5f5f\u5f6e\u63cb\u5f5f\u63cb\u6a4a\u5f5f\u6a4a\u6c19\u5f5f\u5f6e\u645a\u5f5f\u62a1\u6b9b\u5f5f\u6a4a\u72ba\u5f5f\u62a1\u6256\u5f5f\u6256\u5fb4\u5f5f\u6a4a\u7074\u5f5f\u63cb\u6b9b\u5f5f\u63cb\u7209\u5f5f\u6a4a\u692d\u5f5f\u5f6e\u7074\u5f5f\u6256\u62a1\u5f5f\u6a4a\u6c19\u5f5f\u5f6e\u6b9b\u5f5f\u62a1\u6b31\u5f5f\u6a4a\u5f6e\u5f5f\u5f6e\u5f6e\u5f5f\u5f6e\u5e52\u6c36i\u545a\u545ah\u706ei\u58a0\u5ef2\u706e\u5ef2ih\u624f\u5ef2hl\u59c8\u624f\u58a0\u5ef2h\u6c36i\u735c\u545a\u6c36i\u56c4\u545aih\u6730\u545a\u545a\u735chi\u624f\u545a\u59c8\u58a0\u735c\u545a\u624f\u59c8\u59c8i\u5e77\u545arr\u7313r\u6c36\u59c8\u58a0ii\u735c\u6c36\u56c4hh\u545a\u5ef2\u706e\u5ef2\u59c8l\u58a0\u545a\u6730i\u59c8\u58a0h\u58a0\u6c36i\u545a\u5ef2\u735c\u5ef2\u5e77\u56c4\u56c4h\u58a0\u56c4\u624f\u545a\u5ef2\u545a\u58a0\u545a\u6730\u58a0\u735c\u545a\u5ef2\u545a\u6730\u58a0\u5ef2h\u545a\u59c8\u624fh\u5ef2l\u56c4\u735c\u6730ih\u545a\u59c8\u735c\u5e77\u5ef2i\u5ef2\u56c4\u59c8\u6c36\u5f5f\u6b31\u7209qt\u5f5f\u6b31\u6b9b\u735a\u5ef2\u72b8\u7313_\u59c8\u7313u\u72b8t\u5f5f\u66f0\u6c19v\u5f5f\u6b31\u6b9b\u6730\u5f5f\u66f0\u6c19\u5ef2k\u5f5f\u6b31\u6b9b\u624f\u5f5f\u66f0\u6c19\u59c8\u7313\u72b8su\u735c\u545a\u5f5f\u6b31\u6b9b\u5e77\u59c8\u5ef2il\u735c\u706e\u545a\u59c8\u56c4l\u5ef2\u706e\u5ef2l\u5ef2\u56c4l\u6c36\u56c4\u545a\u5ef2\u545a\u59c8\u6c36\u735c\u735c\u58a0\u5ef2\u56c4\u706eP\u6256NOR\u6256M\u6256\u706ei\u735c\u5ef2\u735ch\u6c36\u545a\u545ai\u59c8\u5ef2\u706e\u5ef2i\u5ef2\u545a\u545a\u6730ll\u545a\u5e77\u545a\u59c8\u56c4\u5ef2\u545a\u624f\u545ahi\u735c\u545a\u6c36\u56c4\u56c4\u545a\u706e\u5ef2i\u56c4\u706e\u5ef2\u59c8\u735c\u624f\u58a0\u545a\u545a\u6730il\u56c4\u5e77i\u59c8\u5ef2\u5e77ih\u545a\u5e77\u5ef2\u545ah\u6730\u56c4l\u735c\u6c36\u545a\u545a\u735c\u706eh\u59c8\u5ef2\u706e\u735cll\u706eh\u56c4i\u706ei\u59c8i\u624f\u735c\u59c8i\u58a0\u59c8\u706el\u58a0i\u735c\u56c4\u624f\u735c\u735c\u735ch\u56c4\u5e77\u5ef2i\u5ef2i\u545a\u624fl\u735c\u56c4\u6730\u735ch\u5ef2h\u56c4\u624f\u56c4\u59c8\u545a\u56c4\u58a0\u706e\u545al\u56c4\u59c8\u59c8\u5e77\u58a0\u735c\u58a0\u59c8\u545a\u6c36\u5ef2\u735c\u545a\u545a\u545a\u6730\u5ef2uth_k\u545ay\u5f5f\u6b31\u6b9b\u6730\u56c4\u58a0l\u59c8\u5ef2"), Uc = 188, Vc = ++Uc; --Vc;) Tc.push(Tc.shift());
    function V(a) {
        return Tc[a - 0]
    }
    var Yc = function(a) {
        for (var b = {
            cxiim: function(a, b, c) {
                return a(b, c)
            },
            dhhea: V("0x0"),
            aclxe: function(a, b) {
                return a + b
            },
            icxhx: function(a, b) {
                return a + b
            },
            ieama: function(a, b) {
                return a + b
            },
            ddhxd: "eac",
            eaexe: V("0x1"),
            ideih: V("0x2"),
            eemhi: V("0x3"),
            ecxme: V("0x4"),
            ehime: V("0x5")
        },
        c = b[V("0x6")]; c !== b[V("0x7")];) switch (c) {
        case b[V("0x8")]:
            var e = 0,
            c = V("0x5");
            break;
        case V("0x9"):
            return function(a) {
                var c = {
                    ecdla: V("0xa"),
                    aladl: function(a, b) {
                        return a(b)
                    },
                    deaec: function(a, b) {
                        return a !== b
                    },
                    mmxad: function(a, c, e) {
                        return b[V("0xb")](a, c, e)
                    },
                    xmeae: b[V("0xc")],
                    xahec: "dcx",
                    haldm: function(a, c) {
                        return b[V("0xd")](a, c)
                    },
                    ihecm: function(a, c) {
                        return b[V("0xe")](a, c)
                    },
                    aiadc: function(a, c) {
                        return b[V("0xf")](a, c)
                    },
                    cailm: b[V("0x10")],
                    aiaee: "lle",
                    ecdae: b[V("0x11")]
                };
                e += a;
                f || (f = setTimeout(function() {
                    for (var a = "dcx"; a !== c[V("0x12")];) switch (a) {
                    case c[V("0x13")]:
                        var b = c.haldm(c[V("0x14")](c[V("0x15")](c[V("0x16")](F.PN, V("0x17")), F.version) + V("0x18"), qa) + V("0x19"), e),
                        a = c[V("0x1a")];
                        break;
                    case V("0x1"):
                        f = s;
                        a = V("0x0");
                        break;
                    case c[V("0x1a")]:
                        ra(b,
                        function(a) {
                            var b = {
                                imamh: c[V("0x1b")],
                                eeica: function(a, b) {
                                    return c[V("0x1c")](a, b)
                                }
                            };
                            if (!a || a[c[V("0x1b")]] === l || c[V("0x1d")](a[V("0xa")], 0)) c[V("0x1e")](Wc, V("0x1f"),
                            function(a) {
                                if (!a || a[b.imamh] === l || 0 !== a[b[V("0x20")]]) b[V("0x21")](Xc, V("0x1f"))
                            })
                        });
                        a = c[V("0x22")];
                        break;
                    case V("0x23"):
                        e = 0,
                        a = c[V("0x24")]
                    }
                },
                g))
            };
        case b[V("0x6")]:
            var f = s,
            c = V("0x4");
            break;
        case b[V("0x25")]:
            var g = a ? a: 5E3,
            c = "cci"
        }
    } ();
    function Zc(a, b) {
        for (var c = {
            mcixc: function(a, b) {
                return a !== b
            },
            lximd: "xlle",
            mmmhd: V("0x26"),
            aiaie: V("0x27"),
            mhahd: V("0x28"),
            dcedx: V("0x29"),
            laaxh: V("0x2a"),
            eldcc: V("0x2b"),
            xmxce: function(a, b) {
                return a + b
            },
            leacx: function(a, b) {
                return a + b
            },
            ameee: function(a, b) {
                return a + b
            },
            dxlca: function(a, b) {
                return a + b
            },
            xmicl: V("0x2c"),
            cmlae: V("0x2d"),
            xeeee: V("0x2e"),
            cmimd: V("0x2f"),
            ccida: V("0x30"),
            eaexe: "lmd",
            cecax: V("0x31"),
            aheme: V("0x32"),
            mdieh: function(a, b) {
                return a(b)
            },
            mcael: V("0x33"),
            eimax: function(a, b) {
                return a(b)
            },
            eheee: function(a, b) {
                return a + b
            },
            xemai: function(a, b) {
                return a + b
            },
            aehae: function(a, b) {
                return a + b
            }
        },
        e = V("0x26"); c[V("0x34")](e, c[V("0x35")]);) switch (e) {
        case c[V("0x36")]:
            var f, g, e = c[V("0x37")];
            break;
        case V("0x38"):
            g = b.Qp === t ? t: p;
            e = c[V("0x39")];
            break;
        case V("0x27"):
            e = !b ? c[V("0x3a")] : c.laaxh;
            break;
        case "hca":
            var i = Date.parse(new Date),
            e = V("0x2d");
            break;
        case c[V("0x3b")]:
            var k = c[V("0x3c")](c.leacx(c[V("0x3d")](c[V("0x3d")](V("0x3e"), c[V("0x3f")](m, n)) + "-" + i, "-"), qa), "-") + o,
            e = c[V("0x40")];
            break;
        case c[V("0x41")]:
            var m = i / 1E3,
            e = c.xeeee;
            break;
        case c.cmimd:
            var n = 1800,
            e = c[V("0x42")];
            break;
        case "ild":
            f = b.oW ? b.oW: 1;
            e = c[V("0x11")];
            break;
        case c.dcedx:
            f = 1;
            e = c[V("0x43")];
            break;
        case V("0x31"):
            g = p;
            e = c[V("0x39")];
            break;
        case c.aheme:
            return k;
        case "ihe":
            g && c[V("0x44")](Yc, f);
            e = "hdi";
            break;
        case c[V("0x45")]:
            var o = c[V("0x46")](md5, v),
            e = c[V("0x3b")];
            break;
        case V("0x28"):
            var q = V("0x47"),
            e = c[V("0x48")];
            break;
        case V("0x2e"):
            var v = c[V("0x49")](c.xemai(c.xemai(a + "-" + c[V("0x4a")](m, n) + "-" + i, "-"), qa), "-") + q,
            e = c[V("0x45")]
        }
    }
    function Wc(a, b) {
        var c = {
            acxel: function(a, b) {
                return a + b
            },
            ehxel: function(a, b) {
                return a + b
            },
            idmde: V("0x18"),
            aeaal: function(a, b) {
                return a === b
            },
            axxae: function(a, b) {
                return a + b
            },
            xacie: function(a, b) {
                return a + b
            },
            dldmx: V("0x4b")
        };
        switch (a) {
        case "PANORAMA":
            var e = c[V("0x4c")](c[V("0x4c")](c[V("0x4d")](F.PN + V("0x4e"), F.version), c.idmde), qa);
            c[V("0x4f")](typeof b, V("0x50")) ? ra(e, b) : ra(c.axxae(c[V("0x51")](e, c[V("0x52")]), b))
        }
    }
    function Xc(a) {
        var b = {
            aadaa: function(a, b) {
                return a(b)
            },
            eaexe: V("0x53")
        };
        switch (a) {
        case "PANORAMA":
            b.aadaa(alert, b[V("0x11")])
        }
    };
    function Lc() {
        function a(a) {
            return b[a - 0]
        }
        var b = function(a, b) {
            function f(a) {
                var b = {
                    eexem: function(a, b) {
                        return k.aaxeh(a, b)
                    }
                };
                return i(a,
                function(a) {
                    return b.eexem(g, a)
                })
            }
            function g(a) {
                return (a + "").constructor[k.aamcc(k.aamcc(o, "Char"), n)](a)
            }
            function i(a, b) {
                for (var c = k.aedal; k.ledia(c, k.hmmhe);) switch (c) {
                case "aed":
                    var e = [],
                    c = k.dmaai;
                    break;
                case "ahd":
                    for (c = 0; c < g; c++) {
                        var f = b(a[c]);
                        e.push(f)
                    }
                    c = "dxa";
                    break;
                case "mee":
                    var g = a.length,
                    c = k.icihe;
                    break;
                case k.ecaae:
                    return e
                }
            }
            var k = {
                aedal: "mee",
                ledia: function(a, b) {
                    return a !== b
                },
                hmmhe: "iicx",
                dmaai: "ahd",
                icihe: "aed",
                ecaae: "dxa",
                aamcc: function(a, b) {
                    return a + b
                },
                aaxeh: function(a, b) {
                    return a(b)
                },
                hidxa: function(a, b) {
                    return a(b)
                },
                ahacc: function(a, b) {
                    return a < b
                },
                ddddm: function(a, b, c) {
                    return a(b, c)
                },
                aaaxe: function(a, b, c) {
                    return a(b, c)
                }
            },
            m,
            n,
            o,
            q = decodeURIComponent;
            m = "de";
            o = k.aamcc("fro", "m");
            n = k.aamcc("Co", m);
            var v = f.call(g, [39, 34, 37, 96, 60, 120, 97, 65, 98, 66, 99, 67, 100, 68, 101, 69, 102, 70, 103, 110, 109, 111, 112, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57]);
            m = i([28782, 27702, 26416, 25167, 24183],
            function(a) {
                return k.aaxeh(q, a)
            });
            var w = f.call(m, [22354, 22749, 24415, 23346, 22257, 22688, 24306, 25174, 23595, 25547, 22984, 25690, 22212, 27547, 21594, 27210, 23090, 29193, 22394, 29368, 29532, 29459, 29530, 24146, 24500, 26352, 27441, 28788, 29370, 27673, 26925, 25249, 24430]),
            y = {};
            m = k.hidxa(f, m);
            var z = RegExp(m.join("|"));
            for (m = 0; k.ahacc(m, v.length); m++) y[w[m]] = v[m];
            b = k.ddddm(i, b.split(""),
            function(a) {
                return y[a] || a
            }).join("");
            return k.aaaxe(i, b.split(z),
            function(a) {
                return q(a)
            })
        } (this, "\u5f5f\u66f0\u6c19si\u577a\u72b8\u5f5f\u6b31\u6b9b\u6730\u58a0lh\u6730\u5ef2i\u5ef2\u5e77H\u5e52\u6256\u5f6eP\u62a1P\u692dY\u6c19\u6256\u63cbQO\u5e52\u6730\u545a\u59c8\u545ai\u545a\u6730\u59c8\u5ef2h\u735ch\u5e77\u7209\u72baL\u66f0O\u6c19R\u6c19\u6256\u6b9b\u62a1\u5f6e\u5f6e\u5e52O\u5e77\u545a\u56c4iih\u624f\u58a0\u59c8\u58a0\u5ef2\u5ef2\u6c36l\u545a\u72b8\u577ath\u6c36l\u59c8i\u59c8\u545a\u624f\u545a\u58a0\u5ef2l\u59c8\u6730h\u58a0\u56c4\u735c\u56c4\u706e\u5ef2\u5ef2\u59c8\u56c4\u545a\u5e77l\u545a\u545a\u58a0\u706el\u545al\u5e77\u56c4\u735c\u59c8"); (function(a, b) {
            for (var f = ++b; --f;) a.push(a.shift())
        })(b, 456);
        return function(b) {
            for (var e = {
                eceie: function(a, b) {
                    return a !== b
                },
                ilahl: a("0x0"),
                cahmh: a("0x1"),
                ediih: a("0x2"),
                xcxaa: function(a, b) {
                    return a + b
                },
                dmmam: a("0x3"),
                lcice: a("0x4"),
                exalc: function(a, b) {
                    return a(b)
                },
                hxdmd: a("0x5"),
                aacde: a("0x6")
            },
            f = "lel"; e[a("0x7")](f, e.ilahl);) switch (f) {
            case e[a("0x8")]:
                var g = a("0x9"),
                f = a("0x5");
                break;
            case e[a("0xa")]:
                return e[a("0xb")](e.dmmam, i.substring(i[a("0xc")] - 12));
            case e[a("0xd")]:
                var i = e[a("0xe")](md5, md5(b + g) + k),
                f = "dmc";
                break;
            case e[a("0xf")]:
                var k = e[a("0x10")],
                f = a("0x4")
            }
        }
    };
    function qb(a, b) {
        a && (this.Ob = a, this.da = "spot" + qb.da++, b = b || {},
        this.nh = b.text || "", this.aw = b.offsets ? b.offsets.slice(0) : [5, 5, 5, 5], this.$B = b.userData || s, this.Xh = b.minZoom || s, this.Qf = b.maxZoom || s)
    }
    qb.da = 0;
    A.extend(qb.prototype, {
        za: function(a) {
            this.Xh == s && (this.Xh = a.M.kc);
            this.Qf == s && (this.Qf = a.M.qc)
        },
        va: function(a) {
            if (a instanceof R || a instanceof M) this.Ob = a
        },
        ma: x("Ob"),
        wu: ca("nh"),
        lE: x("nh"),
        setUserData: ca("$B"),
        getUserData: x("$B")
    });
    function $c() {
        this.P = s;
        this.Pb = "control";
        this.Va = this.wK = p
    }
    A.lang.xa($c, A.lang.Ja, "Control");
    A.extend($c.prototype, {
        initialize: function(a) {
            this.P = a;
            if (this.R) return a.bb.appendChild(this.R),
            this.R
        },
        Le: function(a) { ! this.R && (this.initialize && fb(this.initialize)) && (this.R = this.initialize(a));
            this.m = this.m || {
                Qg: t
            };
            this.OB();
            this.Go();
            this.R && (this.R.Kr = this)
        },
        OB: function() {
            var a = this.R;
            if (a) {
                var b = a.style;
                b.position = "absolute";
                b.zIndex = this.cr || "10";
                b.MozUserSelect = "none";
                b.WebkitTextSizeAdjust = "none";
                this.m.Qg || A.U.ib(a, "BMap_noprint");
                L() || A.V(a, "contextmenu", oa)
            }
        },
        remove: function() {
            this.P = s;
            this.R && (this.R.parentNode && this.R.parentNode.removeChild(this.R), this.R = this.R.Kr = s)
        },
        Ha: function() {
            this.R = Kb(this.P.bb, "<div unselectable='on'></div>");
            this.Va == t && A.U.aa(this.R);
            return this.R
        },
        Go: function() {
            this.wc(this.m.anchor)
        },
        wc: function(a) {
            if (this.k3 || !eb(a) || isNaN(a) || a < ad || 3 < a) a = this.defaultAnchor;
            this.m = this.m || {
                Qg: t
            };
            this.m.Ga = this.m.Ga || this.defaultOffset;
            var b = this.m.anchor;
            this.m.anchor = a;
            if (this.R) {
                var c = this.R,
                e = this.m.Ga.width,
                f = this.m.Ga.height;
                c.style.left = c.style.top = c.style.right = c.style.bottom = "auto";
                switch (a) {
                case ad:
                    c.style.top = f + "px";
                    c.style.left = e + "px";
                    break;
                case bd:
                    c.style.top = f + "px";
                    c.style.right = e + "px";
                    break;
                case cd:
                    c.style.bottom = f + "px";
                    c.style.left = e + "px";
                    break;
                case 3:
                    c.style.bottom = f + "px",
                    c.style.right = e + "px"
                }
                c = ["TL", "TR", "BL", "BR"];
                A.U.rc(this.R, "anchor" + c[b]);
                A.U.ib(this.R, "anchor" + c[a])
            }
        },
        QD: function() {
            return this.m.anchor
        },
        getContainer: x("R"),
        Rd: function(a) {
            a instanceof P && (this.m = this.m || {
                Qg: t
            },
            this.m.Ga = new P(a.width, a.height), this.R && this.wc(this.m.anchor))
        },
        zj: function() {
            return this.m.Ga
        },
        fd: x("R"),
        show: function() {
            this.Va != p && (this.Va = p, this.R && A.U.show(this.R))
        },
        aa: function() {
            this.Va != t && (this.Va = t, this.R && A.U.aa(this.R))
        },
        isPrintable: function() {
            return !! this.m.Qg
        },
        Oc: function() {
            return ! this.R && !this.P ? t: !!this.Va
        }
    });
    var ad = 0,
    bd = 1,
    cd = 2;
    function tb(a) {
        $c.call(this);
        a = a || {};
        this.m = {
            Qg: t,
            UF: a.showZoomInfo || p,
            anchor: a.anchor,
            Ga: a.offset,
            type: a.type,
            mX: a.enableGeolocation || t
        };
        this.defaultAnchor = L() ? 3 : ad;
        this.defaultOffset = new P(10, 10);
        this.wc(a.anchor);
        this.An(a.type);
        this.Hf()
    }
    A.lang.xa(tb, $c, "NavigationControl");
    A.extend(tb.prototype, {
        initialize: function(a) {
            this.P = a;
            return this.R
        },
        An: function(a) {
            this.m.type = eb(a) && 0 <= a && 3 >= a ? a: 0
        },
        Kp: function() {
            return this.m.type
        },
        Hf: function() {
            var a = this;
            Za.load("navictrl",
            function() {
                a.Gf()
            })
        }
    });
    function dd(a) {
        $c.call(this);
        a = a || {};
        this.m = {
            anchor: a.anchor || cd,
            Ga: a.offset || new P(10, 30),
            x0: a.showAddressBar !== t,
            U3: a.enableAutoLocation || t,
            iN: a.locationIcon || s
        };
        var b = this;
        this.cr = 1200;
        b.u1 = [];
        this.ue = [];
        Za.load("geoctrl",
        function() { (function e() {
                if (0 !== b.ue.length) {
                    var a = b.ue.shift();
                    b[a.method].apply(b, a.arguments);
                    e()
                }
            })();
            b.zQ()
        });
        Wa(Na)
    }
    A.lang.xa(dd, $c, "GeolocationControl");
    A.extend(dd.prototype, {
        location: function() {
            this.ue.push({
                method: "location",
                arguments: arguments
            })
        },
        getAddressComponent: da(s)
    });
    function fd(a) {
        $c.call(this);
        a = a || {};
        this.m = {
            Qg: t,
            anchor: a.anchor,
            Ga: a.offset
        };
        this.hc = [];
        this.defaultAnchor = cd;
        this.defaultOffset = new P(5, 2);
        this.wc(a.anchor);
        this.wK = t;
        this.Hf()
    }
    A.lang.xa(fd, $c, "CopyrightControl");
    A.object.extend(fd.prototype, {
        initialize: function(a) {
            this.P = a;
            return this.R
        },
        Tw: function(a) {
            if (a && eb(a.id) && !isNaN(a.id)) {
                var b = {
                    bounds: s,
                    content: ""
                },
                c;
                for (c in a) b[c] = a[c];
                if (a = this.Im(a.id)) for (var e in b) a[e] = b[e];
                else this.hc.push(b)
            }
        },
        Im: function(a) {
            for (var b = 0,
            c = this.hc.length; b < c; b++) if (this.hc[b].id == a) return this.hc[b]
        },
        XD: x("hc"),
        sF: function(a) {
            for (var b = 0,
            c = this.hc.length; b < c; b++) this.hc[b].id == a && (r = this.hc.splice(b, 1), b--, c = this.hc.length)
        },
        Hf: function() {
            var a = this;
            Za.load("copyrightctrl",
            function() {
                a.Gf()
            })
        }
    });
    function vb(a) {
        $c.call(this);
        a = a || {};
        this.m = {
            Qg: t,
            size: a.size || new P(150, 150),
            padding: 5,
            eb: a.isOpen === p ? p: t,
            R1: 4,
            Ga: a.offset,
            anchor: a.anchor
        };
        this.defaultAnchor = 3;
        this.defaultOffset = new P(0, 0);
        this.$q = this.br = 13;
        this.wc(a.anchor);
        this.He(this.m.size);
        this.Hf()
    }
    A.lang.xa(vb, $c, "OverviewMapControl");
    A.extend(vb.prototype, {
        initialize: function(a) {
            this.P = a;
            return this.R
        },
        wc: function(a) {
            $c.prototype.wc.call(this, a)
        },
        ve: function() {
            this.ve.Eo = p;
            this.m.eb = !this.m.eb;
            this.R || (this.ve.Eo = t)
        },
        He: function(a) {
            a instanceof P || (a = new P(150, 150));
            a.width = 0 < a.width ? a.width: 150;
            a.height = 0 < a.height ? a.height: 150;
            this.m.size = a
        },
        wb: function() {
            return this.m.size
        },
        eb: function() {
            return this.m.eb
        },
        Hf: function() {
            var a = this;
            Za.load("control",
            function() {
                a.Gf()
            })
        }
    });
    function gd(a) {
        $c.call(this);
        a = a || {};
        this.defaultAnchor = ad;
        this.UV = a.canCheckSize === t ? t: p;
        this.sj = "";
        this.defaultOffset = new P(10, 10);
        this.onChangeBefore = [];
        this.onChangeAfter = [];
        this.onChangeSuccess = [];
        this.m = {
            Qg: t,
            Ga: a.offset || this.defaultOffset,
            anchor: a.anchor || this.defaultAnchor,
            expand: !!a.expand
        };
        a.onChangeBefore && fb(a.onChangeBefore) && this.onChangeBefore.push(a.onChangeBefore);
        a.onChangeAfter && fb(a.onChangeAfter) && this.onChangeAfter.push(a.onChangeAfter);
        a.onChangeSuccess && fb(a.onChangeSuccess) && this.onChangeSuccess.push(a.onChangeSuccess);
        this.wc(a.anchor);
        this.Hf();
        Ta(Ua(5, 3), ["control", "city"])
    }
    A.lang.xa(gd, $c, "CityListControl");
    A.object.extend(gd.prototype, {
        initialize: function(a) {
            this.P = a;
            return this.R
        },
        Hf: function() {
            var a = this;
            Za.load("citylistcontrol",
            function() {
                a.Gf()
            },
            p)
        }
    });
    function ub(a) {
        $c.call(this);
        a = a || {};
        this.m = {
            Qg: t,
            color: "black",
            ld: "metric",
            Ga: a.offset
        };
        this.defaultAnchor = cd;
        this.defaultOffset = new P(81, 18);
        this.wc(a.anchor);
        this.hi = {
            metric: {
                name: "metric",
                MK: 1,
                CM: 1E3,
                jP: "\u7c73",
                kP: "\u516c\u91cc"
            },
            us: {
                name: "us",
                MK: 3.2808,
                CM: 5280,
                jP: "\u82f1\u5c3a",
                kP: "\u82f1\u91cc"
            }
        };
        this.hi[this.m.ld] || (this.m.ld = "metric");
        this.oJ = s;
        this.KI = {};
        this.Hf()
    }
    A.lang.xa(ub, $c, "ScaleControl");
    A.object.extend(ub.prototype, {
        initialize: function(a) {
            this.P = a;
            return this.R
        },
        dl: function(a) {
            this.m.color = a + ""
        },
        s4: function() {
            return this.m.color
        },
        QF: function(a) {
            this.m.ld = this.hi[a] && this.hi[a].name || this.m.ld
        },
        NY: function() {
            return this.m.ld
        },
        Hf: function() {
            var a = this;
            Za.load("control",
            function() {
                a.Gf()
            })
        }
    });
    var hd = 0;
    function wb(a) {
        $c.call(this);
        a = a || {};
        this.defaultAnchor = bd;
        this.defaultOffset = new P(10, 10);
        this.m = {
            Qg: t,
            Bh: [Qa, Ya, Xa, Va],
            GW: ["B_DIMENSIONAL_MAP", "B_SATELLITE_MAP", "B_NORMAL_MAP"],
            type: a.type || hd,
            Ga: a.offset || this.defaultOffset,
            qX: p
        };
        this.wc(a.anchor);
        "[object Array]" == Object.prototype.toString.call(a.mapTypes) && (this.m.Bh = a.mapTypes.slice(0));
        this.Hf()
    }
    A.lang.xa(wb, $c, "MapTypeControl");
    A.object.extend(wb.prototype, {
        initialize: function(a) {
            this.P = a;
            return this.R
        },
        fz: function(a) {
            this.P.ro = a
        },
        Hf: function() {
            var a = this;
            Za.load("control",
            function() {
                a.Gf()
            },
            p)
        }
    });
    function id(a) {
        $c.call(this);
        a = a || {};
        this.m = {
            Qg: t,
            Ga: a.offset,
            anchor: a.anchor
        };
        this.gj = t;
        this.Bw = s;
        this.VI = new jd({
            Xe: "api"
        });
        this.WI = new kd(s, {
            Xe: "api"
        });
        this.defaultAnchor = bd;
        this.defaultOffset = new P(10, 10);
        this.wc(a.anchor);
        this.Hf();
        Wa(za)
    }
    A.lang.xa(id, $c, "PanoramaControl");
    A.extend(id.prototype, {
        initialize: function(a) {
            this.P = a;
            return this.R
        },
        Hf: function() {
            var a = this;
            Za.load("control",
            function() {
                a.Gf()
            })
        }
    });
    function ld(a) {
        A.lang.Ja.call(this);
        this.m = {
            bb: s,
            cursor: "default"
        };
        this.m = A.extend(this.m, a);
        this.Pb = "contextmenu";
        this.P = s;
        this.Da = [];
        this.Sf = [];
        this.Je = [];
        this.nx = this.Ls = s;
        this.Wh = t;
        Ta(Ua(5, 2), ["control", "menu"]);
        var b = this;
        Za.load("menu",
        function() {
            b.ob()
        })
    }
    A.lang.xa(ld, A.lang.Ja, "ContextMenu");
    A.object.extend(ld.prototype, {
        za: function(a, b) {
            this.P = a;
            this.Ul = b || s
        },
        remove: function() {
            this.P = this.Ul = s
        },
        zs: function(a) {
            if (a && !("menuitem" != a.Pb || "" == a.nh || 0 >= a.nj)) {
                for (var b = 0,
                c = this.Da.length; b < c; b++) if (this.Da[b] === a) return;
                this.Da.push(a);
                this.Sf.push(a)
            }
        },
        removeItem: function(a) {
            if (a && "menuitem" == a.Pb) {
                for (var b = 0,
                c = this.Da.length; b < c; b++) this.Da[b] === a && (this.Da[b].remove(), this.Da.splice(b, 1), c--);
                b = 0;
                for (c = this.Sf.length; b < c; b++) this.Sf[b] === a && (this.Sf[b].remove(), this.Sf.splice(b, 1), c--)
            }
        },
        kC: function() {
            this.Da.push({
                Pb: "divider",
                bk: this.Je.length
            });
            this.Je.push({
                U: s
            })
        },
        vF: function(a) {
            if (this.Je[a]) {
                for (var b = 0,
                c = this.Da.length; b < c; b++) this.Da[b] && ("divider" == this.Da[b].Pb && this.Da[b].bk == a) && (this.Da.splice(b, 1), c--),
                this.Da[b] && ("divider" == this.Da[b].Pb && this.Da[b].bk > a) && this.Da[b].bk--;
                this.Je.splice(a, 1)
            }
        },
        fd: x("R"),
        show: function() {
            this.Wh != p && (this.Wh = p)
        },
        aa: function() {
            this.Wh != t && (this.Wh = t)
        },
        c0: function(a) {
            a && (this.m.cursor = a)
        },
        getItem: function(a) {
            return this.Sf[a]
        }
    });
    var md = K.ta + "menu_zoom_in.png",
    nd = K.ta + "menu_zoom_out.png";
    function od(a, b, c) {
        if (a && fb(b)) {
            A.lang.Ja.call(this);
            this.m = {
                width: 100,
                id: "",
                Vm: ""
            };
            c = c || {};
            this.m.width = 1 * c.width ? c.width: 100;
            this.m.id = c.id ? c.id: "";
            this.m.Vm = c.iconUrl ? c.iconUrl: "";
            this.nh = a + "";
            this.Rz = b;
            this.P = s;
            this.Pb = "menuitem";
            this.ns = this.Rv = this.R = this.Rh = s;
            this.Uh = p;
            var e = this;
            Za.load("menu",
            function() {
                e.ob()
            })
        }
    }
    A.lang.xa(od, A.lang.Ja, "MenuItem");
    A.object.extend(od.prototype, {
        za: function(a, b) {
            this.P = a;
            this.Rh = b
        },
        remove: function() {
            this.P = this.Rh = s
        },
        wu: function(a) {
            a && (this.nh = a + "")
        },
        Xb: function(a) {
            a && (this.m.Vm = a)
        },
        fd: x("R"),
        enable: function() {
            this.Uh = p
        },
        disable: function() {
            this.Uh = t
        }
    });
    function nb(a, b) {
        a && !b && (b = a);
        this.Me = this.be = this.Se = this.de = this.nf = this.kf = s;
        a && (this.nf = new R(a.lng, a.lat), this.kf = new R(b.lng, b.lat), this.Se = a.lng, this.de = a.lat, this.Me = b.lng, this.be = b.lat)
    }
    A.object.extend(nb.prototype, {
        Hj: function() {
            return ! this.nf || !this.kf
        },
        Vb: function(a) {
            return ! (a instanceof nb) || this.Hj() ? t: this.Be().Vb(a.Be()) && this.tf().Vb(a.tf())
        },
        Be: x("nf"),
        tf: x("kf"),
        kW: function(a) {
            return ! (a instanceof nb) || this.Hj() || a.Hj() ? t: a.Se > this.Se && a.Me < this.Me && a.de > this.de && a.be < this.be
        },
        Hb: function() {
            return this.Hj() ? s: new R((this.Se + this.Me) / 2, (this.de + this.be) / 2)
        },
        Jt: function(a) {
            if (! (a instanceof nb) || Math.max(a.Se, a.Me) < Math.min(this.Se, this.Me) || Math.min(a.Se, a.Me) > Math.max(this.Se, this.Me) || Math.max(a.de, a.be) < Math.min(this.de, this.be) || Math.min(a.de, a.be) > Math.max(this.de, this.be)) return s;
            var b = Math.max(this.Se, a.Se),
            c = Math.min(this.Me, a.Me),
            e = Math.max(this.de, a.de),
            a = Math.min(this.be, a.be);
            return new nb(new R(b, e), new R(c, a))
        },
        Hs: function(a) {
            return ! (a instanceof R || a instanceof M) || this.Hj() ? t: a.lng >= this.Se && a.lng <= this.Me && a.lat >= this.de && a.lat <= this.be
        },
        extend: function(a) {
            if (a instanceof R || a instanceof M) {
                var b = a.lng,
                a = a.lat;
                this.nf || (this.nf = new R(0, 0));
                this.kf || (this.kf = new R(0, 0));
                if (!this.Se || this.Se > b) this.nf.lng = this.Se = b;
                if (!this.Me || this.Me < b) this.kf.lng = this.Me = b;
                if (!this.de || this.de > a) this.nf.lat = this.de = a;
                if (!this.be || this.be < a) this.kf.lat = this.be = a
            }
        },
        hG: function() {
            return this.Hj() ? new R(0, 0) : new R(Math.abs(this.Me - this.Se), Math.abs(this.be - this.de))
        }
    });
    function R(a, b) {
        isNaN(a) && (a = Ub(a), a = isNaN(a) ? 0 : a);
        gb(a) && (a = parseFloat(a));
        isNaN(b) && (b = Ub(b), b = isNaN(b) ? 0 : b);
        gb(b) && (b = parseFloat(b));
        this.lng = a;
        this.lat = b
    }
    R.GE = function(a) {
        return a && 180 >= a.lng && -180 <= a.lng && 74 >= a.lat && -74 <= a.lat
    };
    R.prototype.Vb = function(a) {
        return a && this.lat == a.lat && this.lng == a.lng
    };
    function M(a, b) {
        isNaN(a) && (a = Ub(a), a = isNaN(a) ? 0 : a);
        gb(a) && (a = parseFloat(a));
        isNaN(b) && (b = Ub(b), b = isNaN(b) ? 0 : b);
        gb(b) && (b = parseFloat(b));
        this.lng = a;
        this.lat = b;
        this.Xe = "inner"
    }
    M.GE = function(a) {
        return a && 180 >= a.lng && -180 <= a.lng && 74 >= a.lat && -74 <= a.lat
    };
    M.prototype.Vb = function(a) {
        return a && this.lat == a.lat && this.lng == a.lng
    };
    function pd() {}
    pd.prototype.Lg = function() {
        aa("lngLatToPoint\u65b9\u6cd5\u672a\u5b9e\u73b0")
    };
    pd.prototype.Lj = function() {
        aa("pointToLngLat\u65b9\u6cd5\u672a\u5b9e\u73b0")
    };
    function qd() {};
    var mb = {
        OK: function(a, b, c) {
            Za.load("coordtransutils",
            function() {
                mb.wV(a, b, c)
            },
            p)
        },
        NK: function(a, b, c) {
            Za.load("coordtransutils",
            function() {
                mb.vV(a, b, c)
            },
            p)
        }
    };
    function rd() {
        this.Qa = [];
        var a = this;
        Za.load("convertor",
        function() {
            a.xQ()
        })
    }
    A.xa(rd, A.lang.Ja, "Convertor");
    A.extend(rd.prototype, {
        translate: function(a, b, c, e) {
            this.Qa.push({
                method: "translate",
                arguments: [a, b, c, e]
            })
        }
    });
    U(rd.prototype, {
        translate: rd.prototype.translate
    });
    function T() {}
    T.prototype = new pd;
    A.extend(T, {
        RP: 6370996.81,
        UG: [1.289059486E7, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
        ev: [86, 60, 45, 30, 15, 0],
        XP: [[1.410526172116255E-8, 8.98305509648872E-6, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653, 1.73379812E7], [ - 7.435856389565537E-9, 8.983055097726239E-6, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 1.026014486E7], [ - 3.030883460898826E-8, 8.98305509983578E-6, 0.30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 6856817.37], [ - 1.981981304930552E-8, 8.983055099779535E-6, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 4482777.06], [3.09191371068437E-9, 8.983055096812155E-6, 6.995724062E-5, 23.10934304144901, -2.3663490511E-4, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 2555164.4], [2.890871144776878E-9, 8.983055095805407E-6, -3.068298E-8, 7.47137025468032, -3.53937994E-6, -0.02145144861037, -1.234426596E-5, 1.0322952773E-4, -3.23890364E-6, 826088.5]],
        RG: [[ - 0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340, 26112667856603880, -35149669176653700, 26595700718403920, -10725012454188240, 1800819912950474, 82.5], [8.277824516172526E-4, 111320.7020463578, 6.477955746671607E8, -4.082003173641316E9, 1.077490566351142E10, -1.517187553151559E10, 1.205306533862167E10, -5.124939663577472E9, 9.133119359512032E8, 67.5], [0.00337398766765, 111320.7020202162, 4481351.045890365, -2.339375119931662E7, 7.968221547186455E7, -1.159649932797253E8, 9.723671115602145E7, -4.366194633752821E7, 8477230.501135234, 52.5], [0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5], [ - 3.441963504368392E-4, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5], [ - 3.218135878613132E-4, 111320.7020701615, 0.00369383431289, 823725.6402795718, 0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45]],
        y4: function(a, b) {
            if (!a || !b) return 0;
            var c, e, a = this.Zb(a);
            if (!a) return 0;
            c = this.ml(a.lng);
            e = this.ml(a.lat);
            b = this.Zb(b);
            return ! b ? 0 : this.Nd(c, this.ml(b.lng), e, this.ml(b.lat))
        },
        Mk: function(a, b) {
            if (!a || !b) return 0;
            a.lng = this.cE(a.lng, -180, 180);
            a.lat = this.hE(a.lat, -80, 84);
            b.lng = this.cE(b.lng, -180, 180);
            b.lat = this.hE(b.lat, -80, 84);
            return this.Nd(this.ml(a.lng), this.ml(b.lng), this.ml(a.lat), this.ml(b.lat))
        },
        Zb: function(a) {
            if (a === s || a === l) return new M(0, 0);
            var b, c;
            b = new M(Math.abs(a.lng), Math.abs(a.lat));
            for (var e = 0; e < this.UG.length; e++) if (b.lat >= this.UG[e]) {
                c = this.XP[e];
                break
            }
            a = this.PK(a, c);
            return a = new M(a.lng, a.lat)
        },
        Sa: function(a) {
            if (a === s || a === l || 180 < a.lng || -180 > a.lng || 90 < a.lat || -90 > a.lat) return new M(0, 0);
            var b, c;
            a.lng = this.cE(a.lng, -180, 180);
            a.lat = this.hE(a.lat, -85, 85);
            b = new M(a.lng, a.lat);
            for (var e = 0; e < this.ev.length; e++) if (b.lat >= this.ev[e]) {
                c = this.RG[e];
                break
            }
            if (!c) for (e = 0; e < this.ev.length; e++) if (b.lat <= -this.ev[e]) {
                c = this.RG[e];
                break
            }
            a = this.PK(a, c);
            return a = new M(a.lng, a.lat)
        },
        PK: function(a, b) {
            if (a && b) {
                var c = b[0] + b[1] * Math.abs(a.lng),
                e = Math.abs(a.lat) / b[9],
                e = b[2] + b[3] * e + b[4] * e * e + b[5] * e * e * e + b[6] * e * e * e * e + b[7] * e * e * e * e * e + b[8] * e * e * e * e * e * e,
                c = c * (0 > a.lng ? -1 : 1),
                e = e * (0 > a.lat ? -1 : 1);
                return new M(c, e)
            }
        },
        Nd: function(a, b, c, e) {
            return this.RP * Math.acos(Math.sin(c) * Math.sin(e) + Math.cos(c) * Math.cos(e) * Math.cos(b - a))
        },
        ml: function(a) {
            return Math.PI * a / 180
        },
        d7: function(a) {
            return 180 * a / Math.PI
        },
        hE: function(a, b, c) {
            b != s && (a = Math.max(a, b));
            c != s && (a = Math.min(a, c));
            return a
        },
        cE: function(a, b, c) {
            for (; a > c;) a -= c - b;
            for (; a < b;) a += c - b;
            return a
        }
    });
    A.extend(T.prototype, {
        Ai: function(a) {
            return T.Sa(a)
        },
        Lg: function(a) {
            a = T.Sa(a);
            return new S(a.lng, a.lat)
        },
        Dh: function(a) {
            return T.Zb(a)
        },
        Lj: function(a) {
            a = new M(a.x, a.y);
            a = T.Zb(a);
            return new R(a.lng, a.lat)
        },
        vc: function(a, b, c, e, f) {
            if (a) return a = this.Ai(a, f),
            b = this.Wb(b),
            new S(Math.round((a.lng - c.lng) / b + e.width / 2), Math.round((c.lat - a.lat) / b + e.height / 2))
        },
        OZ: function(a, b, c, e) {
            if (a) return b = this.Wb(b),
            new S(Math.round((a.lng - c.lng) / b + e.width / 2), Math.round((c.lat - a.lat) / b + e.height / 2))
        },
        cc: function(a, b, c, e, f) {
            if (a) return b = this.Wb(b),
            this.Dh(new M(c.lng + b * (a.x - e.width / 2), c.lat - b * (a.y - e.height / 2)), f)
        },
        Hy: function(a, b, c, e) {
            if (a) return b = this.Wb(b),
            new M(c.lng + b * (a.x - e.width / 2), c.lat - b * (a.y - e.height / 2))
        },
        Wb: function(a) {
            return Math.pow(2, 18 - a)
        },
        tO: ca("Ma")
    });
    function pb() {
        this.sj = "bj"
    }
    pb.prototype = new T;
    A.extend(pb.prototype, {
        Ai: function(a, b) {
            return this.iR(b, T.Sa(a))
        },
        Dh: function(a, b) {
            return T.Zb(this.jR(b, a))
        },
        lngLatToPointFor3D: function(a, b) {
            var c = this,
            e = T.Sa(a);
            Za.load("coordtrans",
            function() {
                var a = qd.fE(c.sj || "bj", e),
                a = new S(a.x, a.y);
                b && b(a)
            },
            p)
        },
        pointToLngLatFor3D: function(a, b) {
            var c = this,
            e = new R(a.x, a.y);
            Za.load("coordtrans",
            function() {
                var a = qd.dE(c.sj || "bj", e),
                a = new R(a.lng, a.lat),
                a = T.Zb(a);
                b && b(a)
            },
            p)
        },
        iR: function(a, b) {
            if (Za.qb("coordtrans").Re == Za.Tj.Jq) {
                var c = qd.fE(a || "bj", b);
                return new R(c.x, c.y)
            }
            Za.load("coordtrans", u());
            return new R(0, 0)
        },
        jR: function(a, b) {
            if (Za.qb("coordtrans").Re == Za.Tj.Jq) {
                var c = qd.dE(a || "bj", b);
                return new R(c.lng, c.lat)
            }
            Za.load("coordtrans", u());
            return new R(0, 0)
        },
        Wb: function(a) {
            return Math.pow(2, 20 - a)
        },
        tO: ca("Ma")
    });
    function sd() {
        this.Pb = "overlay"
    }
    A.lang.xa(sd, A.lang.Ja, "Overlay");
    sd.Sk = function(a) {
        a *= 1;
        return ! a ? 0 : 1E5 * (90 - a) << 1
    };
    A.extend(sd.prototype, {
        Le: function(a) {
            if (!this.ca && fb(this.initialize) && (this.ca = this.initialize(a))) this.ca.style.WebkitUserSelect = "none";
            this.draw()
        },
        initialize: function() {
            aa("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        draw: function() {
            aa("draw\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        remove: function() {
            this.ca && this.ca.parentNode && this.ca.parentNode.removeChild(this.ca);
            this.ca = s;
            this.dispatchEvent(new Q("onremove"))
        },
        aa: function() {
            this.ca && A.U.aa(this.ca)
        },
        show: function() {
            this.ca && A.U.show(this.ca)
        },
        Oc: function() {
            return ! this.ca || "none" == this.ca.style.display || "hidden" == this.ca.style.visibility ? t: p
        }
    });
    F.df(function(a) {
        function b(a, b) {
            var c = J("div"),
            i = c.style;
            i.position = "absolute";
            i.top = i.left = i.width = i.height = "0";
            i.zIndex = b;
            a.appendChild(c);
            return c
        }
        var c = a.ba;
        c.Wc = a.Wc = b(a.platform, 200);
        a.ce.JD = b(c.Wc, 800);
        a.ce.YE = b(c.Wc, 700);
        a.ce.zL = b(c.Wc, 600);
        a.ce.QE = b(c.Wc, 500);
        a.ce.mN = b(c.Wc, 400);
        a.ce.nN = b(c.Wc, 300);
        a.ce.vP = b(c.Wc, 201);
        a.ce.Xt = b(c.Wc, 200)
    });
    function ob() {
        A.lang.Ja.call(this);
        sd.call(this);
        this.map = s;
        this.Va = p;
        this.Fb = s;
        this.GH = 0
    }
    A.lang.xa(ob, sd, "OverlayInternal");
    A.extend(ob.prototype, {
        initialize: function(a) {
            this.map = a;
            A.lang.Ja.call(this, this.da);
            return s
        },
        Kx: x("map"),
        draw: u(),
        Vj: u(),
        remove: function() {
            this.map = s;
            A.lang.qx(this.da);
            sd.prototype.remove.call(this)
        },
        aa: function() {
            this.Va !== t && (this.Va = t)
        },
        show: function() {
            this.Va !== p && (this.Va = p)
        },
        Oc: function() {
            return ! this.ca ? t: !!this.Va
        },
        Ta: x("ca"),
        sO: function(a) {
            var a = a || {},
            b;
            for (b in a) this.K[b] = a[b]
        },
        vq: ca("zIndex"),
        xj: function() {
            this.K.xj = p
        },
        QW: function() {
            this.K.xj = t
        },
        mm: ca("sg"),
        hq: function() {
            this.sg = s
        }
    });
    function td() {
        this.map = s;
        this.ua = {};
        this.Ie = []
    }
    F.df(function(a) {
        var b = new td;
        b.map = a;
        a.ua = b.ua;
        a.Ie = b.Ie;
        a.addEventListener("load",
        function(a) {
            b.draw(a)
        });
        a.addEventListener("moveend",
        function(a) {
            b.draw(a)
        });
        A.ga.oa && 8 > A.ga.oa || "BackCompat" === document.compatMode ? a.addEventListener("zoomend",
        function(a) {
            setTimeout(function() {
                b.draw(a)
            },
            20)
        }) : a.addEventListener("zoomend",
        function(a) {
            b.draw(a)
        });
        a.addEventListener("maptypechange",
        function(a) {
            b.draw(a)
        });
        a.addEventListener("addoverlay",
        function(a) {
            a = a.target;
            if (a instanceof ob) b.ua[a.da] || (b.ua[a.da] = a);
            else {
                for (var e = t,
                f = 0,
                g = b.Ie.length; f < g; f++) if (b.Ie[f] === a) {
                    e = p;
                    break
                }
                e || b.Ie.push(a)
            }
        });
        a.addEventListener("removeoverlay",
        function(a) {
            a = a.target;
            if (a instanceof ob) delete b.ua[a.da];
            else for (var e = 0,
            f = b.Ie.length; e < f; e++) if (b.Ie[e] === a) {
                b.Ie.splice(e, 1);
                break
            }
        });
        a.addEventListener("clearoverlays",
        function() {
            this.Mc();
            for (var a in b.ua) b.ua[a].K.xj && (b.ua[a].remove(), delete b.ua[a]);
            a = 0;
            for (var e = b.Ie.length; a < e; a++) b.Ie[a].enableMassClear !== t && (b.Ie[a].remove(), b.Ie[a] = s, b.Ie.splice(a, 1), a--, e--)
        });
        a.addEventListener("infowindowopen",
        function() {
            var a = this.Fb;
            a && (A.U.aa(a.Cc), A.U.aa(a.dc))
        });
        a.addEventListener("movestart",
        function() {
            this.wh() && this.wh().vJ()
        });
        a.addEventListener("moveend",
        function() {
            this.wh() && this.wh().jJ()
        })
    });
    td.prototype.draw = function(a) {
        if (F.Mq) {
            var b = F.Mq.nt(this.map);
            "canvas" === b.Pb && b.canvas && b.dR(b.canvas.getContext("2d"))
        }
        for (var c in this.ua) this.ua[c].draw(a);
        A.oc.Rb(this.Ie,
        function(a) {
            a.draw()
        });
        this.map.ba.xb && this.map.ba.xb.va();
        F.Mq && b.MF()
    };
    function ud(a) {
        ob.call(this);
        a = a || {};
        this.K = {
            strokeColor: a.strokeColor || "#3a6bdb",
            tc: a.strokeWeight || 5,
            Ad: a.strokeOpacity || 0.65,
            strokeStyle: a.strokeStyle || "solid",
            xj: a.enableMassClear === t ? t: p,
            Pk: s,
            Nm: s,
            ze: a.enableEditing === p ? p: t,
            rN: 5,
            s1: t,
            of: a.enableClicking === t ? t: p,
            xi: a.icons && 0 < a.icons.length ? a.icons: s,
            LX: a.geodesic === p ? p: t,
            UE: a.linkRight === p ? p: t
        };
        0 >= this.K.tc && (this.K.tc = 5);
        if (0 > this.K.Ad || 1 < this.K.Ad) this.K.Ad = 0.65;
        if (0 > this.K.Eg || 1 < this.K.Eg) this.K.Eg = 0.65;
        "solid" != this.K.strokeStyle && "dashed" != this.K.strokeStyle && (this.K.strokeStyle = "solid");
        this.ca = s;
        this.mv = new nb(0, 0);
        this.lf = [];
        this.uc = [];
        this.Ya = {}
    }
    A.lang.xa(ud, ob, "Graph");
    ud.Gx = function(a) {
        var b = [];
        if (!a) return b;
        gb(a) && A.oc.Rb(a.split(";"),
        function(a) {
            a = a.split(",");
            b.push(new R(a[0], a[1]))
        });
        "[object Array]" == Object.prototype.toString.apply(a) && 0 < a.length && (b = a);
        return b
    };
    ud.jF = [0.09, 0.0050, 1.0E-4, 1.0E-5];
    A.extend(ud.prototype, {
        initialize: function(a) {
            this.map = a;
            return s
        },
        draw: u(),
        fs: function(a) {
            this.lf.length = 0;
            this.ja = ud.Gx(a).slice(0);
            this.Oh()
        },
        Sd: function(a) {
            this.fs(a)
        },
        Oh: function() {
            if (this.ja) {
                var a = this;
                a.mv = new nb;
                A.oc.Rb(this.ja,
                function(b) {
                    a.mv.extend(b)
                })
            }
        },
        Ze: x("ja"),
        zn: function(a, b) {
            b && this.ja[a] && (this.lf.length = 0, this.ja[a] = new R(b.lng, b.lat), this.Oh())
        },
        setStrokeColor: function(a) {
            this.K.strokeColor = a
        },
        EY: function() {
            return this.K.strokeColor
        },
        uq: function(a) {
            0 < a && (this.K.tc = a)
        },
        dM: function() {
            return this.K.tc
        },
        rq: function(a) {
            a == l || (1 < a || 0 > a) || (this.K.Ad = a)
        },
        FY: function() {
            return this.K.Ad
        },
        qu: function(a) {
            1 < a || 0 > a || (this.K.Eg = a)
        },
        $X: function() {
            return this.K.Eg
        },
        tq: function(a) {
            "solid" != a && "dashed" != a || (this.K.strokeStyle = a)
        },
        cM: function() {
            return this.K.strokeStyle
        },
        setFillColor: function(a) {
            this.K.fillColor = a || ""
        },
        ZX: function() {
            return this.K.fillColor
        },
        ke: x("mv"),
        remove: function() {
            this.map && this.map.removeEventListener("onmousemove", this.Ov);
            ob.prototype.remove.call(this);
            this.lf.length = 0
        },
        ze: function() {
            if (! (2 > this.ja.length)) {
                this.K.ze = p;
                var a = this;
                Za.load("poly",
                function() {
                    a.Ak()
                },
                p)
            }
        },
        PW: function() {
            this.K.ze = t;
            var a = this;
            Za.load("poly",
            function() {
                a.mi()
            },
            p)
        },
        WX: function() {
            return this.K.ze
        },
        cY: function() {
            for (var a = [], b = 0; b < this.ja.length - 1; b++) var c = this.QV(this.ja[b], this.ja[b + 1]),
            a = a.concat(c);
            return a = a.concat(this.ja[this.ja.length - 1])
        },
        QV: function(a, b) {
            if (a.Vb(b)) return [a];
            var c = T.Nd(Zb(a.lng), Zb(a.lat), Zb(b.lng), Zb(b.lat)),
            c = T.Mk(a, b);
            if (25E4 > c) return [a];
            var e = [],
            c = Math.round(c / 15E4),
            f = this.zK(a, b);
            e.push(a);
            for (var g = 0; g < c; g++) {
                var i = this.AK(a, b, g / c, f);
                e.push(i)
            }
            e.push(b);
            return e
        },
        AK: function(a, b, c, e) {
            var f = Zb(a.lat),
            g = Zb(b.lat),
            a = Zb(a.lng),
            i = Zb(b.lng),
            b = Math.sin((1 - c) * e) / Math.sin(e),
            c = Math.sin(c * e) / Math.sin(e),
            e = b * Math.cos(f) * Math.cos(a) + c * Math.cos(g) * Math.cos(i),
            a = b * Math.cos(f) * Math.sin(a) + c * Math.cos(g) * Math.sin(i);
            return new R(180 * (Math.atan2(a, e) / Math.PI), 180 * (Math.atan2(b * Math.sin(f) + c * Math.sin(g), Math.sqrt(Math.pow(e, 2) + Math.pow(a, 2))) / Math.PI))
        },
        zK: function(a, b) {
            var c = Zb(a.lat),
            e = Zb(b.lat);
            return Math.acos(Math.sin(c) * Math.sin(e) + Math.cos(c) * Math.cos(e) * Math.cos(Math.abs(Zb(b.lng) - Zb(a.lng))))
        }
    });
    function vd(a) {
        ob.call(this);
        this.ca = this.map = s;
        this.K = {
            width: 0,
            height: 0,
            Ga: new P(0, 0),
            opacity: 1,
            background: "transparent",
            ny: 1,
            $M: "#000",
            FZ: "solid",
            point: s
        };
        this.sO(a);
        this.point = this.K.point
    }
    A.lang.xa(vd, ob, "Division");
    A.extend(vd.prototype, {
        Vj: function() {
            var a = this.K,
            b = this.content,
            c = ['<div class="BMap_Division" style="position:absolute;'];
            c.push("width:" + a.width + "px;display:block;");
            c.push("overflow:hidden;");
            "none" != a.borderColor && c.push("border:" + a.ny + "px " + a.FZ + " " + a.$M + ";");
            c.push("opacity:" + a.opacity + "; filter:(opacity=" + 100 * a.opacity + ")");
            c.push("background:" + a.background + ";");
            c.push('z-index:60;">');
            c.push(b);
            c.push("</div>");
            this.ca = Kb(this.map.$f().YE, c.join(""))
        },
        initialize: function(a) {
            this.map = a;
            this.Vj();
            this.ca && A.V(this.ca, L() ? "touchstart": "mousedown",
            function(a) {
                na(a)
            });
            return this.ca
        },
        draw: function() {
            var a = this.map.cf(this.K.point);
            this.K.Ga = new P( - Math.round(this.K.width / 2) - Math.round(this.K.ny), -Math.round(this.K.height / 2) - Math.round(this.K.ny));
            this.ca.style.left = a.x + this.K.Ga.width + "px";
            this.ca.style.top = a.y + this.K.Ga.height + "px"
        },
        ma: function() {
            return this.K.point
        },
        J2: function() {
            return this.map.Bo(this.ma())
        },
        va: function(a) {
            this.K.point = a;
            this.draw()
        },
        d0: function(a, b) {
            this.K.width = Math.round(a);
            this.K.height = Math.round(b);
            this.ca && (this.ca.style.width = this.K.width + "px", this.ca.style.height = this.K.height + "px", this.draw())
        }
    });
    function wd(a, b, c) {
        a && b && (this.imageUrl = a, this.size = b, a = new P(Math.floor(b.width / 2), Math.floor(b.height / 2)), c = c || {},
        a = c.anchor || a, b = c.imageOffset || new P(0, 0), this.imageSize = c.imageSize, this.anchor = a, this.imageOffset = b, this.infoWindowAnchor = c.infoWindowAnchor || this.anchor, this.printImageUrl = c.printImageUrl || "")
    }
    A.extend(wd.prototype, {
        uO: function(a) {
            a && (this.imageUrl = a)
        },
        u0: function(a) {
            a && (this.printImageUrl = a)
        },
        He: function(a) {
            a && (this.size = new P(a.width, a.height))
        },
        wc: function(a) {
            a && (this.anchor = new P(a.width, a.height))
        },
        ru: function(a) {
            a && (this.imageOffset = new P(a.width, a.height))
        },
        i0: function(a) {
            a && (this.infoWindowAnchor = new P(a.width, a.height))
        },
        f0: function(a) {
            a && (this.imageSize = new P(a.width, a.height))
        },
        toString: da("Icon")
    });
    function xd(a, b) {
        if (a) {
            b = b || {};
            this.style = {
                anchor: b.anchor || new P(0, 0),
                fillColor: b.fillColor || "#000",
                Eg: b.fillOpacity || 0,
                scale: b.scale || 1,
                rotation: b.rotation || 0,
                strokeColor: b.strokeColor || "#000",
                Ad: b.strokeOpacity || 1,
                tc: b.strokeWeight
            };
            this.Pb = "number" === typeof a ? a: "UserDefined";
            this.Wi = this.style.anchor;
            this.Pr = new P(0, 0);
            this.anchor = s;
            this.AB = a;
            var c = this;
            Za.load("symbol",
            function() {
                c.$n()
            },
            p)
        }
    }
    A.extend(xd.prototype, {
        setPath: ca("AB"),
        setAnchor: function(a) {
            this.Wi = this.style.anchor = a
        },
        setRotation: function(a) {
            this.style.rotation = a
        },
        setScale: function(a) {
            this.style.scale = a
        },
        setStrokeWeight: function(a) {
            this.style.tc = a
        },
        setStrokeColor: function(a) {
            a = A.Fs.LC(a, this.style.Ad);
            this.style.strokeColor = a
        },
        setStrokeOpacity: function(a) {
            this.style.Ad = a
        },
        setFillOpacity: function(a) {
            this.style.Eg = a
        },
        setFillColor: function(a) {
            this.style.fillColor = a
        }
    });
    function yd(a, b, c, e) {
        a && (this.gw = {},
        this.xL = e ? !!e: t, this.ad = [], this.M0 = a instanceof xd ? a: s, this.aJ = b === l ? p: !!(b.indexOf("%") + 1), this.qk = isNaN(parseFloat(b)) ? 1 : this.aJ ? parseFloat(b) / 100 : parseFloat(b), this.bJ = !!(c.indexOf("%") + 1), this.repeat = c != l ? this.bJ ? parseFloat(c) / 100 : parseFloat(c) : 0)
    };
    function zd(a, b) {
        A.lang.Ja.call(this);
        this.content = a;
        this.map = s;
        b = b || {};
        this.K = {
            width: b.width || 0,
            height: b.height || 0,
            maxWidth: b.maxWidth || 730,
            Ga: b.offset || new P(0, 0),
            title: b.title || "",
            $E: b.maxContent || "",
            uh: b.enableMaximize || t,
            ct: b.enableAutoPan === t ? t: p,
            rD: b.enableCloseOnClick === t ? t: p,
            margin: b.margin || [10, 10, 40, 10],
            HC: b.collisions || [[10, 10], [10, 10], [10, 10], [10, 10]],
            aZ: t,
            d_: b.onClosing || da(p),
            qL: t,
            wD: b.enableParano === p ? p: t,
            message: b.message,
            zD: b.enableSearchTool === p ? p: t,
            Wx: b.headerContent || "",
            sD: b.enableContentScroll || t
        };
        if (0 != this.K.width && (220 > this.K.width && (this.K.width = 220), 730 < this.K.width)) this.K.width = 730;
        if (0 != this.K.height && (60 > this.K.height && (this.K.height = 60), 650 < this.K.height)) this.K.height = 650;
        if (0 != this.K.maxWidth && (220 > this.K.maxWidth && (this.K.maxWidth = 220), 730 < this.K.maxWidth)) this.K.maxWidth = 730;
        this.me = t;
        this.Ri = K.ta;
        this.yb = s;
        Ta(Ua(2, 10), ["overlay", "infowindow"]);
        var c = this;
        Za.load("infowindow",
        function() {
            c.ob()
        })
    }
    A.lang.xa(zd, A.lang.Ja, "InfoWindow");
    A.extend(zd.prototype, {
        setWidth: function(a) { ! a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220), 730 < a && (a = 730)), this.K.width = a)
        },
        setHeight: function(a) { ! a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (60 > a && (a = 60), 650 < a && (a = 650)), this.K.height = a)
        },
        yO: function(a) { ! a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220), 730 < a && (a = 730)), this.K.maxWidth = a)
        },
        Hc: function(a) {
            this.K.title = a
        },
        getTitle: function() {
            return this.K.title
        },
        Qc: ca("content"),
        Lk: x("content"),
        tu: function(a) {
            this.K.$E = a + ""
        },
        re: u(),
        ct: function() {
            this.K.ct = p
        },
        disableAutoPan: function() {
            this.K.ct = t
        },
        enableCloseOnClick: function() {
            this.K.rD = p
        },
        disableCloseOnClick: function() {
            this.K.rD = t
        },
        uh: function() {
            this.K.uh = p
        },
        tx: function() {
            this.K.uh = t
        },
        show: function() {
            this.Va = p
        },
        aa: function() {
            this.Va = t
        },
        close: function() {
            this.aa()
        },
        ty: function() {
            this.me = p
        },
        restore: function() {
            this.me = t
        },
        Oc: function() {
            return this.eb()
        },
        eb: da(t),
        ma: function() {
            if (this.yb && this.yb.ma) return this.yb.ma()
        },
        zj: function() {
            return this.K.Ga
        }
    });
    Pa.prototype.Vc = function(a, b) {
        if (a instanceof zd && (b instanceof R || b instanceof M)) {
            var c = this.ba;
            c.Zm ? c.Zm.va(b) : (c.Zm = new W(b, {
                icon: new wd(K.ta + "blank.gif", {
                    width: 1,
                    height: 1
                }),
                offset: new P(0, 0),
                clickable: t
            }), c.Zm.dS = 1);
            this.Ra(c.Zm);
            c.Zm.Vc(a)
        }
    };
    Pa.prototype.Mc = function() {
        var a = this.ba.xb || this.ba.Jl;
        a && a.yb && a.yb.Mc()
    };
    ob.prototype.Vc = function(a) {
        this.map && (this.map.Mc(), a.Va = p, this.map.ba.Jl = a, a.yb = this, A.lang.Ja.call(a, a.da))
    };
    ob.prototype.Mc = function() {
        this.map && this.map.ba.Jl && (this.map.ba.Jl.Va = t, A.lang.qx(this.map.ba.Jl.da), this.map.ba.Jl = s)
    };
    function Ad(a, b) {
        ob.call(this);
        this.content = a;
        this.ca = this.map = s;
        b = b || {};
        this.K = {
            width: 0,
            Ga: b.offset || new P(0, 0),
            zq: {
                backgroundColor: "#fff",
                border: "1px solid #f00",
                padding: "1px",
                whiteSpace: "nowrap",
                font: "12px " + K.fontFamily,
                zIndex: "80",
                MozUserSelect: "none"
            },
            position: b.position || s,
            xj: b.enableMassClear === t ? t: p,
            of: p
        };
        0 > this.K.width && (this.K.width = 0);
        Qb(b.enableClicking) && (this.K.of = b.enableClicking);
        this.point = this.K.position;
        Ta(Ua(2, 6), ["overlay", "dom_lable"]);
        var c = this;
        Za.load("marker",
        function() {
            c.ob()
        })
    }
    A.lang.xa(Ad, ob, "Label");
    A.extend(Ad.prototype, {
        ma: function() {
            return this.vo ? this.vo.ma() : this.map ? hb(this.point, this.map.M.Ma) : this.point
        },
        ik: function() {
            return this.vo ? this.vo.ik() : this.point
        },
        va: function(a) {
            if ((a instanceof R || a instanceof M) && !this.Lx()) this.point = this.K.position = new R(a.lng, a.lat)
        },
        Qc: ca("content"),
        LF: function(a) {
            0 <= a && 1 >= a && (this.K.opacity = a)
        },
        Rd: function(a) {
            a instanceof P && (this.K.Ga = new P(a.width, a.height))
        },
        zj: function() {
            return this.K.Ga
        },
        Td: function(a) {
            a = a || {};
            this.K.zq = A.extend(this.K.zq, a)
        },
        Li: function(a) {
            return this.Td(a)
        },
        Hc: function(a) {
            this.K.title = a || ""
        },
        getTitle: function() {
            return this.K.title
        },
        xO: function(a) {
            this.point = (this.vo = a) ? this.K.position = a.ik() : this.K.position = s
        },
        Lx: function() {
            return this.vo || s
        },
        Lk: x("content")
    });
    function Bd(a, b) {
        if (0 !== arguments.length) {
            ob.apply(this, arguments);
            b = b || {};
            this.K = {
                jb: a,
                opacity: b.opacity || 1,
                Op: b.imageURL || "",
                Us: b.displayOnMinLevel || 1,
                xj: b.enableMassClear === t ? t: p,
                Ts: b.displayOnMaxLevel || 19,
                G0: b.stretch || t
            };
            0 === b.opacity && (this.K.opacity = 0);
            Ta(Ua(2, 8), ["overlay", "ground_box"]);
            var c = this;
            Za.load("groundoverlay",
            function() {
                c.ob()
            })
        }
    }
    A.lang.xa(Bd, ob, "GroundOverlay");
    A.extend(Bd.prototype, {
        setBounds: function(a) {
            this.K.jb = a
        },
        getBounds: function() {
            return this.K.jb
        },
        setOpacity: function(a) {
            this.K.opacity = a
        },
        getOpacity: function() {
            return this.K.opacity
        },
        setImageURL: function(a) {
            this.K.Op = a
        },
        getImageURL: function() {
            return this.K.Op
        },
        setDisplayOnMinLevel: function(a) {
            this.K.Us = a
        },
        getDisplayOnMinLevel: function() {
            return this.K.Us
        },
        setDisplayOnMaxLevel: function(a) {
            this.K.Ts = a
        },
        getDisplayOnMaxLevel: function() {
            return this.K.Ts
        }
    });
    var Cd = 3,
    Dd = 4;
    function Ed() {
        var a = document.createElement("canvas");
        return ! (!a.getContext || !a.getContext("2d"))
    }
    function Fd(a, b) {
        var c = this;
        Ed() && (a === l && aa(Error("\u6ca1\u6709\u4f20\u5165points\u6570\u636e")), "[object Array]" !== Object.prototype.toString.call(a) && aa(Error("points\u6570\u636e\u4e0d\u662f\u6570\u7ec4")), b = b || {},
        ob.apply(c, arguments), c.ia = {
            ja: a
        },
        c.K = {
            shape: b.shape || Cd,
            size: b.size || Dd,
            color: b.color || "#fa937e",
            xj: p
        },
        this.xB = [], this.ue = [], Za.load("pointcollection",
        function() {
            for (var a = 0,
            b; b = c.xB[a]; a++) c[b.method].apply(c, b.arguments);
            for (a = 0; b = c.ue[a]; a++) c[b.method].apply(c, b.arguments)
        }))
    }
    A.lang.xa(Fd, ob, "PointCollection");
    A.extend(Fd.prototype, {
        initialize: function(a) {
            this.xB && this.xB.push({
                method: "initialize",
                arguments: arguments
            })
        },
        setPoints: function(a) {
            this.ue && this.ue.push({
                method: "setPoints",
                arguments: arguments
            })
        },
        setStyles: function(a) {
            this.ue && this.ue.push({
                method: "setStyles",
                arguments: arguments
            })
        },
        clear: function() {
            this.ue && this.ue.push({
                method: "clear",
                arguments: arguments
            })
        },
        remove: function() {
            this.ue && this.ue.push({
                method: "remove",
                arguments: arguments
            })
        }
    });
    var Gd = new wd(K.ta + "marker_red_sprite.png", new P(19, 25), {
        anchor: new P(10, 25),
        infoWindowAnchor: new P(10, 0)
    }),
    Hd = new wd(K.ta + "marker_red_sprite.png", new P(20, 11), {
        anchor: new P(6, 11),
        imageOffset: new P( - 19, -13)
    });
    function W(a, b) {
        ob.call(this);
        b = b || {};
        this.point = a;
        this.Ma = (this.Xq = this.map = s) ? this.map.M.Ma: 5;
        this.K = {
            Ga: b.offset || new P(0, 0),
            Ce: b.icon || Gd,
            fl: Hd,
            title: b.title || "",
            label: s,
            uK: b.baseZIndex || 0,
            of: p,
            H7: t,
            ME: t,
            xj: b.enableMassClear === t ? t: p,
            jc: t,
            bO: b.raiseOnDrag === p ? p: t,
            iO: t,
            Ld: b.draggingCursor || K.Ld,
            rotation: b.rotation || 0
        };
        b.icon && !b.shadow && (this.K.fl = s);
        b.enableDragging && (this.K.jc = b.enableDragging);
        Qb(b.enableClicking) && (this.K.of = b.enableClicking);
        Ta(Ua(2, 1), ["overlay", "marker"]);
        var c = this;
        Za.load("marker",
        function() {
            c.ob()
        })
    }
    W.hv = sd.Sk( - 90) + 1E6;
    W.LG = W.hv + 1E6;
    A.lang.xa(W, ob, "Marker");
    A.extend(W.prototype, {
        Xb: function(a) {
            if (a instanceof wd || a instanceof xd) this.K.Ce = a
        },
        Cp: function() {
            return this.K.Ce
        },
        Yy: function(a) {
            a instanceof wd && (this.K.fl = a)
        },
        getShadow: function() {
            return this.K.fl
        },
        Mj: function(a) {
            this.K.label = a || s
        },
        ot: function() {
            return this.K.label
        },
        jc: function() {
            this.K.jc = p
        },
        Ss: function() {
            this.K.jc = t
        },
        ik: x("point"),
        ma: function() {
            return this.point instanceof R || this.point instanceof M ? this.map ? hb(this.point, this.map.M.Ma) : new R(this.point.lng, this.point.lat) : this.point
        },
        va: function(a) {
            if (a instanceof R || a instanceof M) this.point = this.map ? db(a, this.map.M.Ma) : new M(a.lng, a.lat)
        },
        Mi: function(a, b) {
            this.K.ME = !!a;
            a && (this.iH = b || 0)
        },
        Hc: function(a) {
            this.K.title = a + ""
        },
        getTitle: function() {
            return this.K.title
        },
        Rd: function(a) {
            a instanceof P && (this.K.Ga = a)
        },
        zj: function() {
            return this.K.Ga
        },
        vn: ca("Xq"),
        Wy: function(a) {
            this.K.rotation = a
        },
        $L: function() {
            return this.K.rotation
        }
    });
    function Id(a) {
        this.options = a || {};
        this.h_ = this.options.paneName || "labelPane";
        this.zIndex = this.options.zIndex || 0;
        this.lW = this.options.contextType || "2d"
    }
    Id.prototype = new sd;
    Id.prototype.initialize = function(a) {
        this.P = a;
        var b = this.canvas = document.createElement("canvas"),
        c = this.canvas.getContext(this.lW);
        b.style.cssText = "position:absolute;left:0;top:0;z-index:" + this.zIndex + ";";
        Jd(this);
        Kd(c);
        a.getPanes()[this.h_].appendChild(b);
        var e = this;
        a.addEventListener("resize",
        function() {
            Jd(e);
            Kd(c);
            e.ob()
        });
        return this.canvas
    };
    function Jd(a) {
        var b = a.P.wb(),
        a = a.canvas;
        a.width = b.width;
        a.height = b.height;
        a.style.width = a.width + "px";
        a.style.height = a.height + "px"
    }
    function Kd(a) {
        var b = (window.devicePixelRatio || 1) / (a.zV || a.B7 || a.V5 || a.W5 || a.a6 || a.zV || 1),
        c = a.canvas.width,
        e = a.canvas.height;
        a.canvas.width = c * b;
        a.canvas.height = e * b;
        a.canvas.style.width = c + "px";
        a.canvas.style.height = e + "px";
        a.scale(b, b)
    }
    Id.prototype.draw = function() {
        var a = this,
        b = arguments;
        clearTimeout(a.V0);
        a.V0 = setTimeout(function() {
            a.ob.apply(a, b)
        },
        15)
    };
    fa = Id.prototype;
    fa.ob = function() {
        var a = this.P;
        this.canvas.style.left = -a.offsetX + "px";
        this.canvas.style.top = -a.offsetY + "px";
        this.dispatchEvent("draw");
        this.options.update && this.options.update.apply(this, arguments)
    };
    fa.Ta = x("canvas");
    fa.show = function() {
        this.canvas || this.P.Ra(this);
        this.canvas.style.display = "block"
    };
    fa.aa = function() {
        this.canvas.style.display = "none"
    };
    fa.vq = function(a) {
        this.canvas.style.zIndex = a
    };
    fa.Sk = x("zIndex");
    function Ld(a, b) {
        ud.call(this, b);
        b = b || {};
        this.K.Eg = b.fillOpacity ? b.fillOpacity: 0.65;
        this.K.fillColor = "" == b.fillColor ? "": b.fillColor ? b.fillColor: "#fff";
        this.Sd(a);
        var c = this;
        Ta(Ua(2, 4), ["overlay", "polygon"]);
        Za.load("poly",
        function() {
            c.ob()
        })
    }
    A.lang.xa(Ld, ud, "Polygon");
    A.extend(Ld.prototype, {
        Sd: function(a, b) {
            this.Po = ud.Gx(a).slice(0);
            var c = ud.Gx(a).slice(0);
            1 < c.length && c.push(new R(c[0].lng, c[0].lat));
            ud.prototype.Sd.call(this, c, b)
        },
        zn: function(a, b) {
            this.Po[a] && (this.Po[a] = new R(b.lng, b.lat), this.ja[a] = new R(b.lng, b.lat), 0 == a && !this.ja[0].Vb(this.ja[this.ja.length - 1]) && (this.ja[this.ja.length - 1] = new R(b.lng, b.lat)), this.Oh())
        },
        Ze: function() {
            var a = this.Po;
            0 == a.length && (a = this.ja);
            return a
        }
    });
    function Md(a, b) {
        ud.call(this, b);
        this.fs(a);
        var c = this;
        Ta(Ua(2, 3), ["overlay", "polyline"]);
        Za.load("poly",
        function() {
            c.ob()
        })
    }
    A.lang.xa(Md, ud, "Polyline");
    function Nd(a, b, c) {
        this.point = a;
        this.Fa = Math.abs(b);
        Ld.call(this, [], c)
    }
    Nd.jF = [0.01, 1.0E-4, 1.0E-5, 4.0E-6];
    A.lang.xa(Nd, Ld, "Circle");
    A.extend(Nd.prototype, {
        initialize: function(a) {
            this.map = a;
            this.ja = this.Iv(this.point, this.Fa);
            this.Oh();
            return s
        },
        Hb: function() {
            return this.map ? hb(this.point, this.map.M.Ma) : this.point
        },
        Fv: x("point"),
        Bf: function(a) {
            a && (this.point = a)
        },
        YL: x("Fa"),
        Cf: function(a) {
            this.Fa = Math.abs(a)
        },
        Iv: function(a, b) {
            if (!a || !b || !this.map) return [];
            for (var c = [], e = b / 6378800, f = Math.PI / 180 * a.lat, g = Math.PI / 180 * a.lng, i = 0; 360 > i; i += 9) {
                var k = Math.PI / 180 * i,
                m = Math.asin(Math.sin(f) * Math.cos(e) + Math.cos(f) * Math.sin(e) * Math.cos(k)),
                k = new R(((g - Math.atan2(Math.sin(k) * Math.sin(e) * Math.cos(f), Math.cos(e) - Math.sin(f) * Math.sin(m)) + Math.PI) % (2 * Math.PI) - Math.PI) * (180 / Math.PI), m * (180 / Math.PI));
                c.push(k)
            }
            e = c[0];
            c.push(new R(e.lng, e.lat));
            return c
        }
    });
    var Od = {};
    function Pd(a) {
        this.map = a;
        this.Jj = [];
        this.Ef = [];
        this.Ug = [];
        this.OV = 300;
        this.pF = 0;
        this.Mg = {};
        this.rj = {};
        this.Wk = 0;
        this.FE = p;
        this.DW = {};
        this.uo = this.jr(1);
        this.yg = this.jr(2);
        this.og = this.jr(3);
        this.Tl = this.jr(4);
        a.platform.appendChild(this.uo);
        a.platform.appendChild(this.yg);
        a.platform.appendChild(this.Tl);
        a.platform.appendChild(this.og);
        var b = 256 * Math.pow(2, 15),
        c = 3 * b,
        a = T.Sa(new M(180, 0)).lng,
        c = c - a,
        b = -3 * b,
        e = T.Sa(new M( - 180, 0)).lng;
        this.rg = a;
        this.hh = e;
        this.Ol = c + (e - b);
        this.ih = a - e
    }
    F.df(function(a) {
        var b = new Pd(a);
        b.za();
        a.ef = b
    });
    A.extend(Pd.prototype, {
        za: function() {
            var a = this,
            b = a.map;
            b.addEventListener("loadcode",
            function() {
                a.Wp()
            });
            b.addEventListener("addtilelayer",
            function(b) {
                a.Te(b)
            });
            b.addEventListener("removetilelayer",
            function(b) {
                a.gg(b)
            });
            b.addEventListener("setmaptype",
            function(b) {
                a.Sg(b)
            });
            b.addEventListener("zoomstartcode",
            function(b) {
                a.Sc(b)
            });
            b.addEventListener("setcustomstyles",
            function(b) {
                a.su(b.target);
                a.eg(p)
            });
            b.addEventListener("initindoorlayer",
            function(b) {
                a.BE(b)
            })
        },
        Wp: function() {
            var a = this;
            if (A.ga.oa) try {
                document.execCommand("BackgroundImageCache", t, p)
            } catch(b) {}
            this.loaded || a.dy();
            a.eg();
            this.loaded || (this.loaded = p, Za.load("tile",
            function() {
                a.yQ()
            }))
        },
        BE: function(a) {
            this.Tu = new Qd(this);
            this.Tu.Te(new Rd(this.map, this.Tu, a.$e))
        },
        dy: function() {
            for (var a = this.map.ya().jf, b = 0; b < a.length; b++) {
                var c = new Sd;
                A.extend(c, a[b]);
                this.Jj.push(c);
                c.za(this.map, this.uo)
            }
            this.su()
        },
        jr: function(a) {
            var b = J("div");
            b.style.position = "absolute";
            b.style.overflow = "visible";
            b.style.left = b.style.top = "0";
            b.style.zIndex = a;
            return b
        },
        If: function() {
            this.Wk--;
            var a = this;
            this.FE && (this.map.dispatchEvent(new Q("onfirsttileloaded")), this.FE = t);
            0 == this.Wk && (this.aj && (clearTimeout(this.aj), this.aj = s), this.aj = setTimeout(function() {
                if (a.Wk == 0) {
                    a.map.dispatchEvent(new Q("ontilesloaded"));
                    a.FE = p
                }
                a.aj = s
            },
            80))
        },
        mE: function(a, b) {
            return "TILE-" + b.da + "-" + a[0] + "-" + a[1] + "-" + a[2]
        },
        Zx: function(a) {
            var b = a.Ib;
            b && Jb(b) && b.parentNode.removeChild(b);
            delete this.Mg[a.name];
            a.loaded || (Td(a), a.Ib = s, a.$m = s)
        },
        iM: function(a, b, c) {
            var e = this.map,
            f = e.ya(),
            g = e.Za,
            i = e.Jb,
            k = f.Wb(g),
            m = this.TX(),
            n = m[0],
            o = m[1],
            q = m[2],
            v = m[3],
            w = m[4],
            c = "undefined" != typeof c ? c: 0,
            f = f.le(),
            m = e.da.replace(/^TANGRAM_/, "");
            for (this.Oi ? this.Oi.length = 0 : this.Oi = []; n < q; n++) for (var y = o; y < v; y++) {
                var z = n,
                B = y;
                this.Oi.push([z, B]);
                z = m + "_" + b + "_" + z + "_" + B + "_" + g;
                this.DW[z] = z
            }
            this.Oi.sort(function(a) {
                return function(b, c) {
                    return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
                }
            } ([w[0] - 1, w[1] - 1]));
            i = [Math.round( - i.lng / k), Math.round(i.lat / k)];
            n = -e.offsetY + e.height / 2;
            a.style.left = -e.offsetX + e.width / 2 + "px";
            a.style.top = n + "px";
            this.Ue ? this.Ue.length = 0 : this.Ue = [];
            n = 0;
            for (e = a.childNodes.length; n < e; n++) y = a.childNodes[n],
            y.Hr = t,
            this.Ue.push(y);
            if (n = this.fn) for (var D in n) delete n[D];
            else this.fn = {};
            this.Ve ? this.Ve.length = 0 : this.Ve = [];
            n = 0;
            for (e = this.Oi.length; n < e; n++) {
                D = this.Oi[n][0];
                k = this.Oi[n][1];
                y = 0;
                for (o = this.Ue.length; y < o; y++) if (q = this.Ue[y], q.id == m + "_" + b + "_" + D + "_" + k + "_" + g) {
                    q.Hr = p;
                    this.fn[q.id] = q;
                    break
                }
            }
            n = 0;
            for (e = this.Ue.length; n < e; n++) q = this.Ue[n],
            q.Hr || this.Ve.push(q);
            this.eG = [];
            y = (f + c) * this.map.M.devicePixelRatio;
            n = 0;
            for (e = this.Oi.length; n < e; n++) D = this.Oi[n][0],
            k = this.Oi[n][1],
            v = D * f + i[0] - c / 2,
            w = ( - 1 - k) * f + i[1] - c / 2,
            z = m + "_" + b + "_" + D + "_" + k + "_" + g,
            o = this.fn[z],
            q = s,
            o ? (q = o.style, q.left = v + "px", q.top = w + "px", o.io || this.eG.push([D, k, o])) : (0 < this.Ve.length ? (o = this.Ve.shift(), o.getContext("2d").clearRect( - c / 2, -c / 2, y, y), q = o.style) : (o = document.createElement("canvas"), q = o.style, q.position = "absolute", q.width = f + c + "px", q.height = f + c + "px", this.yZ() && (q.WebkitTransform = "scale(1.001)"), o.setAttribute("width", y), o.setAttribute("height", y), a.appendChild(o)), o.id = z, q.left = v + "px", q.top = w + "px", -1 < z.indexOf("bg") && (v = "#F3F1EC", this.map.M.xV && (v = this.map.M.xV), q.background = v ? v: ""), this.eG.push([D, k, o])),
            o.style.visibility = "";
            n = 0;
            for (e = this.Ve.length; n < e; n++) this.Ve[n].style.visibility = "hidden";
            return this.eG
        },
        yZ: function() {
            return /M040/i.test(navigator.userAgent)
        },
        TX: function() {
            var a = this.map,
            b = a.ya(),
            c = b.nM(a.Za),
            e = a.Jb,
            f = Math.ceil(e.lng / c),
            g = Math.ceil(e.lat / c),
            b = b.le(),
            c = [f, g, (e.lng - f * c) / c * b, (e.lat - g * c) / c * b];
            return [c[0] - Math.ceil((a.width / 2 - c[2]) / b), c[1] - Math.ceil((a.height / 2 - c[3]) / b), c[0] + Math.ceil((a.width / 2 + c[2]) / b), c[1] + Math.ceil((a.height / 2 + c[3]) / b), c]
        },
        A0: function(a, b, c, e) {
            var f = this;
            f.y3 = b;
            var g = this.map.ya(),
            i = f.mE(a, c),
            k = g.le(),
            b = [a[0] * k + b[0], ( - 1 - a[1]) * k + b[1]],
            m = this.Mg[i];
            if (this.map.ya() !== Ya && this.map.ya() !== Xa) {
                var n = this.vm(a[0], a[2]).offsetX;
                b[0] += n;
                b.Q2 = n
            }
            m && m.Ib ? (Hb(m.Ib, b), e && (e = new S(a[0], a[1]), g = this.map.M.Ee ? this.map.M.Ee.style: "normal", e = c.getTilesUrl(e, a[2], g), m.loaded = t, Ud(m, e)), m.loaded ? this.If() : Vd(m,
            function() {
                f.If()
            })) : (m = this.rj[i]) && m.Ib ? (c.Mb.insertBefore(m.Ib, c.Mb.lastChild), this.Mg[i] = m, Hb(m.Ib, b), e && (e = new S(a[0], a[1]), g = this.map.M.Ee ? this.map.M.Ee.style: "normal", e = c.getTilesUrl(e, a[2], g), m.loaded = t, Ud(m, e)), m.loaded ? this.If() : Vd(m,
            function() {
                f.If()
            })) : (m = k * Math.pow(2, g.Ye() - a[2]), new M(a[0] * m, a[1] * m), e = new S(a[0], a[1]), g = this.map.M.Ee ? this.map.M.Ee.style: "normal", e = c.getTilesUrl(e, a[2], g), m = new Wd(this, e, b, a, c), Vd(m,
            function() {
                f.If()
            }), m.to(), this.Mg[i] = m)
        },
        If: function() {
            this.Wk--;
            var a = this;
            0 == this.Wk && (this.aj && (clearTimeout(this.aj), this.aj = s), this.aj = setTimeout(function() {
                if (a.Wk == 0) {
                    a.map.dispatchEvent(new Q("ontilesloaded"));
                    if (ya) {
                        if (va && wa && xa) {
                            var b = kb(),
                            c = a.map.wb();
                            setTimeout(function() {
                                Wa(5030, {
                                    load_script_time: wa - va,
                                    load_tiles_time: b - xa,
                                    map_width: c.width,
                                    map_height: c.height,
                                    map_size: c.width * c.height
                                })
                            },
                            1E4);
                            F.Vq("cus.fire", "time", {
                                z_imgfirstloaded: b - xa
                            })
                        }
                        ya = t
                    }
                }
                a.aj = s
            },
            80))
        },
        mE: function(a, b) {
            return this.map.ya() === Va ? "TILE-" + b.da + "-" + this.map.ex + "-" + a[0] + "-" + a[1] + "-" + a[2] : "TILE-" + b.da + "-" + a[0] + "-" + a[1] + "-" + a[2]
        },
        Zx: function(a) {
            var b = a.Ib;
            b && (Xd(b), Jb(b) && b.parentNode.removeChild(b));
            delete this.Mg[a.name];
            a.loaded || (Xd(b), Td(a), a.Ib = s, a.$m = s)
        },
        vm: function(a, b) {
            for (var c = 0,
            e = 6 * Math.pow(2, b - 3), f = e / 2 - 1, g = -e / 2; a > f;) a -= e,
            c -= this.Ol;
            for (; a < g;) a += e,
            c += this.Ol;
            c = Math.round(c / Math.pow(2, 18 - b));
            return {
                offsetX: c,
                Bg: a
            }
        },
        vC: function(a) {
            for (var b = a.lng; b > this.rg;) b -= this.ih;
            for (; b < this.hh;) b += this.ih;
            a.lng = b;
            return a
        },
        wC: function(a, b) {
            for (var c = 256 * Math.pow(2, 18 - b), e = Math.floor(this.rg / c), f = Math.floor(this.hh / c), c = Math.floor(this.Ol / c), g = [], i = 0; i < a.length; i++) {
                var k = a[i],
                m = k[0],
                k = k[1];
                if (m >= e) {
                    var m = m + c,
                    n = "id_" + m + "_" + k + "_" + b;
                    a[n] || (a[n] = p, g.push([m, k]))
                } else m <= f && (m -= c, n = "id_" + m + "_" + k + "_" + b, a[n] || (a[n] = p, g.push([m, k])))
            }
            for (i = 0; i < g.length; i++) a.push(g[i]);
            return a
        },
        eg: function(a) {
            var b = this;
            if (b.map.ya() == Va) Za.load("coordtrans",
            function() {
                b.map.Qb || (b.map.Qb = Va.Kk(b.map.qh), b.map.ex = Va.KL(b.map.Qb));
                b.GI()
            },
            p);
            else {
                if (a && a) for (var c in this.rj) delete this.rj[c];
                b.GI(a)
            }
        },
        GI: function(a) {
            var b = this.map.M.Zf ? this.Ef: this.Jj.concat(this.Ef),
            c = b.length,
            e = this.map,
            f = e.ya(),
            g = e.Jb,
            i = e.width,
            i = e.ya().Wb(e.Za) * i,
            k = g.lng + i / 2,
            i = this.FM(g.lng - i / 2, k);
            this.map.ya() !== Ya && this.map.ya() !== Xa && (g = this.vC(g));
            for (var m = 0; m < c; m++) {
                var n = b[m];
                if (n.kc && e.Za < n.kc) break;
                if (n.Zw) {
                    k = this.Mb = n.Mb;
                    if (a) {
                        var o = k;
                        if (o && o.childNodes) for (var q = o.childNodes.length,
                        v = q - 1; 0 <= v; v--) q = o.childNodes[v],
                        o.removeChild(q),
                        q = s
                    }
                    if (this.map.Vd()) {
                        this.yg.style.display = "block";
                        k.style.display = "none";
                        this.map.dispatchEvent(new Q("vectorchanged"), {
                            isvector: p
                        });
                        continue
                    } else k.style.display = "block",
                    this.yg.style.display = "none",
                    this.map.dispatchEvent(new Q("vectorchanged"), {
                        isvector: t
                    })
                }
                if (!n.P2 && !(n.jy && !this.map.Vd() || n.NM && this.map.Vd())) {
                    e = this.map;
                    f = e.ya();
                    q = f.Bj();
                    k = e.Za;
                    g = e.Jb;
                    f == Va && g.Vb(new M(0, 0)) && (g = e.Jb = q.Ai(e.ge, e.Qb));
                    var w = f.Wb(k),
                    q = f.nM(k),
                    o = Math.ceil(g.lng / q),
                    y = Math.ceil(g.lat / q),
                    z = f.le(),
                    q = [o, y, (g.lng - o * q) / q * z, (g.lat - y * q) / q * z],
                    y = i ? 1.5 * (e.width / 2) : e.width / 2,
                    v = q[0] - Math.ceil((y - q[2]) / z),
                    o = q[1] - Math.ceil((e.height / 2 - q[3]) / z),
                    y = q[0] + Math.ceil((y + q[2]) / z),
                    B = 0;
                    f === Va && 15 == e.la() && (B = 1);
                    f = q[1] + Math.ceil((e.height / 2 + q[3]) / z) + B;
                    this.pK = new M(g.lng, g.lat);
                    var D = this.Mg,
                    z = -this.pK.lng / w,
                    B = this.pK.lat / w,
                    g = [Math.ceil(z), Math.ceil(B)],
                    w = e.la(),
                    G;
                    for (G in D) {
                        var E = D[G],
                        C = E.info; (C[2] != w || C[2] == w && (v > C[0] || y <= C[0] || o > C[1] || f <= C[1])) && this.Zx(E)
                    }
                    D = -e.offsetX + e.width / 2;
                    E = -e.offsetY + e.height / 2;
                    n.Mb && (n.Mb.style.left = Math.ceil(z + D) - g[0] + "px", n.Mb.style.top = Math.ceil(B + E) - g[1] + "px", n.Mb.style.WebkitTransform = "translate3d(0,0,0)");
                    z = [];
                    for (e.bC = []; v < y; v++) for (B = o; B < f; B++) z.push([v, B]),
                    e.bC.push({
                        x: v,
                        y: B
                    });
                    this.map.ya() !== Ya && this.map.ya() !== Xa && (z = this.wC(z, k));
                    z.sort(function(a) {
                        return function(b, c) {
                            return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
                        }
                    } ([q[0] - 1, q[1] - 1]));
                    k = Math.ceil(this.rg / (256 * Math.pow(2, 18 - w)));
                    q = z.length;
                    this.Wk += q;
                    for (v = 0; v < q; v++) {
                        if (n.HO === p && (o = this.vm(z[v][0], w), o.Bg > k - 1 || o.Bg < -k)) continue;
                        this.A0([z[v][0], z[v][1], w], g, n, a)
                    }
                }
            }
        },
        FM: function(a, b) {
            return a < this.hh || b > this.rg
        },
        Te: function(a) {
            var b = this,
            c = a.target;
            b.map.Vd();
            c.Gn && this.map.Te(c.Gn);
            if (c.jy) {
                for (a = 0; a < b.Ug.length; a++) if (b.Ug[a] == c) return;
                Za.load("vector",
                function() {
                    c.za(b.map, b.yg);
                    b.Ug.push(c)
                },
                p)
            } else {
                for (a = 0; a < b.Ef.length; a++) if (b.Ef[a] == c) return;
                c.za(this.map, this.Tl);
                b.Ef.push(c)
            }
        },
        gg: function(a) {
            a = a.target;
            this.map.Vd();
            a.Gn && this.map.gg(a.Gn);
            if (a.jy) for (var b = 0,
            c = this.Ug.length; b < c; b++) a == this.Ug[b] && this.Ug.splice(b, 1);
            else {
                b = 0;
                for (c = this.Ef.length; b < c; b++) a == this.Ef[b] && this.Ef.splice(b, 1)
            }
            a.remove()
        },
        Sg: function() {
            for (var a = this.Jj,
            b = 0,
            c = a.length; b < c; b++) a[b].remove();
            delete this.Mb;
            this.Jj = [];
            this.rj = this.Mg = {};
            this.dy();
            this.eg()
        },
        Sc: function() {
            var a = this;
            a.Cd && A.U.aa(a.Cd);
            setTimeout(function() {
                a.eg();
                a.map.dispatchEvent(new Q("onzoomend"))
            },
            10)
        },
        r7: u(),
        su: function(a) {
            var b = this.map.ya();
            if (!this.map.Vd() && (a ? this.map.M.J0 = a: a = this.map.M.J0, a)) for (var c = s,
            c = "2" == F.Su ? [F.url.proto + F.url.domain.main_domain_cdn.other[0] + "/"] : [F.url.proto + F.url.domain.main_domain_cdn.baidu[0] + "/", F.url.proto + F.url.domain.main_domain_cdn.baidu[1] + "/", F.url.proto + F.url.domain.main_domain_cdn.baidu[2] + "/"], e = 0, f; f = this.Jj[e]; e++) if (f.HO == p) {
                b.m.qc = 18;
                f.getTilesUrl = function(b, e) {
                    var f = b.x,
                    f = this.map.ef.vm(f, e).Bg,
                    m = b.y,
                    n = bc("normal"),
                    o = 1;
                    this.map.$x() && (o = 2);
                    n = "customimage/tile?qt=customimage&x=" + f + "&y=" + m + "&z=" + e + "&udt=" + n + "&scale=" + o + "&ak=" + qa;
                    n = a.styleStr ? n + ("&styles=" + encodeURIComponent(a.styleStr)) : n + ("&customid=" + a.style);
                    n = c[Math.abs(f + m) % c.length] + n;
                    return n = rb(n)
                };
                break
            }
        }
    });
    function Wd(a, b, c, e, f) {
        this.$m = a;
        this.position = c;
        this.rv = [];
        this.name = a.mE(e, f);
        this.info = e;
        this.SJ = f.Rt();
        e = J("img");
        Ib(e);
        e.DL = t;
        var g = e.style,
        a = a.map.ya();
        g.position = "absolute";
        g.border = "none";
        g.width = a.le() + "px";
        g.height = a.le() + "px";
        g.left = c[0] + "px";
        g.top = c[1] + "px";
        g.maxWidth = "none";
        this.Ib = e;
        this.src = b;
        Yd && (this.Ib.style.opacity = 0);
        var i = this;
        this.Ib.onload = function() {
            F.GZ.lR();
            i.loaded = p;
            if (i.$m) {
                var a = i.$m,
                b = a.rj;
                if (!b[i.name]) {
                    a.pF++;
                    b[i.name] = i
                }
                if (i.Ib && !Jb(i.Ib) && f.Mb) {
                    f.Mb.appendChild(i.Ib);
                    if (A.ga.oa <= 6 && A.ga.oa > 0 && i.SJ) i.Ib.style.cssText = i.Ib.style.cssText + (';filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + i.src + '",sizingMethod=scale);')
                }
                var c = a.pF - a.OV,
                e;
                for (e in b) {
                    if (c <= 0) break;
                    if (!a.Mg[e]) {
                        b[e].$m = s;
                        var g = b[e].Ib;
                        if (g && g.parentNode) {
                            g.parentNode.removeChild(g);
                            Xd(g)
                        }
                        g = s;
                        b[e].Ib = s;
                        delete b[e];
                        a.pF--;
                        c--
                    }
                }
                Yd && new Db({
                    Nc: 20,
                    duration: 200,
                    Ba: function(a) {
                        if (i.Ib && i.Ib.style) i.Ib.style.opacity = a * 1
                    },
                    finish: function() {
                        i.Ib && i.Ib.style && delete i.Ib.style.opacity
                    }
                });
                Td(i)
            }
        };
        this.Ib.onerror = function() {
            Td(i);
            if (i.$m) {
                var a = i.$m.map.ya();
                if (a.m.CD) {
                    i.error = p;
                    i.Ib.src = a.m.CD;
                    i.Ib && !Jb(i.Ib) && f.Mb.appendChild(i.Ib)
                }
            }
        };
        e = s
    }
    function Vd(a, b) {
        a.rv.push(b)
    }
    Wd.prototype.to = function() {
        this.Ib.src = 0 < A.ga.oa && 6 >= A.ga.oa && this.SJ ? K.ta + "blank.gif": "" !== this.src && this.Ib.src == this.src ? this.src + "&t = " + Date.now() : this.src
    };
    function Td(a) {
        for (var b = 0; b < a.rv.length; b++) a.rv[b]();
        a.rv.length = 0
    }
    function Xd(a) {
        if (a) {
            a.onload = a.onerror = s;
            var b = a.attributes,
            c, e, f;
            if (b) {
                e = b.length;
                for (c = 0; c < e; c += 1) f = b[c].name,
                fb(a[f]) && (a[f] = s)
            }
            if (b = a.children) {
                e = b.length;
                for (c = 0; c < e; c += 1) Xd(a.children[c])
            }
        }
    }
    function Ud(a, b) {
        a.src = b;
        a.to()
    }
    var Yd = !A.ga.oa || 8 < A.ga.oa;
    function Sd(a) {
        this.$e = a || {};
        this.nW = this.$e.copyright || s;
        this.m1 = this.$e.transparentPng || t;
        this.Zw = this.$e.baseLayer || t;
        this.zIndex = this.$e.zIndex || 0;
        this.da = Sd.VS++
    }
    Sd.VS = 0;
    A.lang.xa(Sd, A.lang.Ja, "TileLayer");
    A.extend(Sd.prototype, {
        za: function(a, b) {
            this.Zw && (this.zIndex = -100);
            this.map = a;
            if (!this.Mb) {
                var c = J("div"),
                e = c.style;
                e.position = "absolute";
                e.overflow = "visible";
                e.zIndex = this.zIndex;
                e.left = Math.ceil( - a.offsetX + a.width / 2) + "px";
                e.top = Math.ceil( - a.offsetY + a.height / 2) + "px";
                b.appendChild(c);
                this.Mb = c
            }
        },
        remove: function() {
            this.Mb && this.Mb.parentNode && (this.Mb.innerHTML = "", this.Mb.parentNode.removeChild(this.Mb));
            delete this.Mb
        },
        Rt: x("m1"),
        getTilesUrl: function(a, b) {
            if (this.map.ya() !== Ya && this.map.ya() !== Xa) var c = this.map.ef.vm(a.x, b).Bg;
            var e = "";
            this.$e.tileUrlTemplate && (e = this.$e.tileUrlTemplate.replace(/\{X\}/, c), e = e.replace(/\{Y\}/, a.y), e = e.replace(/\{Z\}/, b));
            return e
        },
        Im: x("nW"),
        ya: function() {
            return this.Wa || Qa
        }
    });
    function Zd(a) {
        Sd.call(this, a);
        this.m = a || {};
        this.NM = p;
        if (this.m.predictDate) {
            if (1 > this.m.predictDate.weekday || 7 < this.m.predictDate.weekday) this.m.predictDate = 1;
            if (0 > this.m.predictDate.hour || 23 < this.m.predictDate.hour) this.m.predictDate.hour = 0
        }
        this.XU = F.url.proto + F.url.domain.traffic + "/traffic/"
    }
    Zd.prototype = new Sd;
    Zd.prototype.za = function(a, b) {
        Sd.prototype.za.call(this, a, b);
        this.P = a;
        Ta(Ua(3, 3), ["layer", "traffic"])
    };
    Zd.prototype.Rt = da(p);
    Zd.prototype.getTilesUrl = function(a, b) {
        var c = "";
        this.m.predictDate ? c = "HistoryService?day=" + (this.m.predictDate.weekday - 1) + "&hour=" + this.m.predictDate.hour + "&t=" + (new Date).getTime() + "&": (c = "TrafficTileService?time=" + (new Date).getTime() + "&", c = this.P.M.Zf ? c + "v=016&": c + "label=web2D&v=016&");
        var c = this.XU + c + "level=" + b + "&x=" + a.x + "&y=" + a.y,
        e = 1;
        this.P.$x() && (e = 2);
        return (c + "&scaler=" + e).replace(/-(\d+)/gi, "M$1")
    };
    var $d = [F.url.proto + F.url.domain.TILES_YUN_HOST[0] + "/georender/gss", F.url.proto + F.url.domain.TILES_YUN_HOST[1] + "/georender/gss", F.url.proto + F.url.domain.TILES_YUN_HOST[2] + "/georender/gss", F.url.proto + F.url.domain.TILES_YUN_HOST[3] + "/georender/gss"],
    ae = F.url.proto + F.url.domain.main_domain_nocdn.baidu + "/style/poi/rangestyle",
    be = 100;
    function xb(a, b) {
        Sd.call(this);
        var c = this;
        this.NM = p;
        try {
            document.createElement("canvas").getContext("2d")
        } catch(e) {}
        Rb(a) ? b = a || {}: (c.ho = a, b = b || {});
        b.geotableId && (c.Lf = b.geotableId);
        b.databoxId && (c.ho = b.databoxId);
        var f = F.cd + "geosearch";
        c.fb = {
            WN: b.pointDensity || be,
            WY: f + "/detail/",
            XY: f + "/v2/detail/",
            mK: b.age || 36E5,
            ku: b.q || "",
            U0: "png",
            n5: [5, 5, 5, 5],
            CZ: {
                backgroundColor: "#FFFFD5",
                borderColor: "#808080"
            },
            pC: b.ak || qa,
            TO: b.tags || "",
            filter: b.filter || "",
            KO: b.sortby || "",
            sE: b.hotspotName || "tile_md_" + (1E5 * Math.random()).toFixed(0),
            oG: p
        };
        Za.load("clayer",
        function() {
            c.Ed()
        })
    }
    xb.prototype = new Sd;
    xb.prototype.za = function(a, b) {
        Sd.prototype.za.call(this, a, b);
        this.P = a
    };
    xb.prototype.getTilesUrl = function(a, b) {
        var c = a.x,
        e = a.y,
        f = this.fb,
        c = $d[Math.abs(c + e) % $d.length] + "/image?grids=" + c + "_" + e + "_" + b + "&q=" + f.ku + "&tags=" + f.TO + "&filter=" + f.filter + "&sortby=" + f.KO + "&ak=" + this.fb.pC + "&age=" + f.mK + "&page_size=" + f.WN + "&format=" + f.U0;
        f.oG || (f = (1E5 * Math.random()).toFixed(0), c += "&timeStamp=" + f);
        this.Lf ? c += "&geotable_id=" + this.Lf: this.ho && (c += "&databox_id=" + this.ho);
        return c
    };
    xb.prototype.enableUseCache = function() {
        this.fb.oG = p
    };
    xb.prototype.disableUseCache = function() {
        this.fb.oG = t
    };
    xb.uU = /^point\(|\)$/ig;
    xb.vU = /\s+/;
    xb.xU = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    var ce = {};
    function de(a, b) {
        this.bd = a;
        this.BQ = 18;
        this.m = {
            Lu: 256,
            Dc: new T
        };
        A.extend(this.m, b || {})
    }
    var ee = [0, 0, 0, 8, 7, 7, 6, 6, 5, 5, 4, 3, 3, 3, 2, 2, 1, 1, 0, 0, 0, 0],
    fe = [512, 2048, 4096, 32768, 65536, 262144, 1048576, 4194304, 8388608],
    ge = [0, 0, 0, 3, 5, 5, 7, 7, 9, 9, 10, 12, 12, 12, 15, 15, 17, 17, 19, 19, 19, 19],
    he = [0, 0, 0, 256, 256, 512, 256, 512, 256, 512, 256, 256, 512, 1024, 256, 512, 512, 1024, 512, 1024, 2048, 4096];
    de.prototype = {
        getName: x("bd"),
        le: function(a) {
            return "na" === this.bd ? he[a] : this.m.Lu
        },
        Bp: function(a) {
            return "na" === this.bd ? ge[a] : a
        },
        Bj: function() {
            return this.m.Dc
        },
        Wb: function(a) {
            return Math.pow(2, this.BQ - a)
        },
        eE: function(a) {
            return "na" === this.bd ? fe[ee[a]] : this.Wb(a) * this.le(a)
        },
        PX: function(a) {
            a = Math.floor(a);
            return "na" === this.bd ? he[ge[a]] : this.m.Lu
        }
    };
    var ie = {
        drawPoly: function(a, b, c, e, f, g) {
            var i = a[1];
            if (i) for (var a = a[6], k = 0; k < i.length; k++) {
                var m = i[k][0],
                n = f.Dj(m, "polygon", c, g);
                if (n && n.length) for (var o = i[k][1], q = 0; q < o.length; q++) {
                    var v = o[q][1];
                    f.Oc(v[0], c) && (v["cache" + c] || (v["cache" + c] = f.hn(v[1], c, e, a)), v = v["cache" + c], f.P.Uo(b.canvas.id, v, {
                        type: "polygon",
                        Yb: m,
                        style: n
                    }), this.hX(b, v, n, c))
                }
            }
        },
        hX: function(a, b, c, e) {
            c = c[0];
            if (!c.Yb || !(6 < e && (71013 === c.Yb || 71012 === c.Yb || 71011 === c.Yb) || 6 === e && (71011 === c.Yb || 71012 === c.Yb) || 5 === e && (71011 === c.Yb || 71013 === c.Yb) || 5 > e && (71012 === c.Yb || 71013 === c.Yb))) {
                a.fillStyle = c.Ax;
                a.beginPath();
                a.moveTo(b[0], b[1]);
                for (var e = 2,
                f = b.length; e < f; e += 2) a.lineTo(b[e], b[e + 1]);
                a.closePath();
                c.borderWidth && (a.strokeStyle = c.ap, a.lineWidth = c.borderWidth / 2, a.stroke());
                a.fill()
            }
        },
        drawGaoqingRoadBorder: function(a, b, c, e, f) {
            var g = a[1];
            if (g) for (var a = a[6], i = 0; i < g.length; i++) {
                var k = g[i][0],
                m = f.Dj(k, "polygon", c);
                if (m && m.length && m[0].borderWidth) for (var n = g[i][1], o = 0; o < n.length; o++) {
                    var q = n[o][1];
                    f.Oc(q[0], c) && (q["cache" + c] || (q["cache" + c] = f.hn(q[1], c, e, a)), q = q["cache" + c], f.P.Uo(b.canvas.id, q, {
                        type: "polygon",
                        Yb: k,
                        style: m
                    }), this.jX(b, q, m))
                }
            }
        },
        drawGaoqingRoadFill: function(a, b, c, e, f) {
            var g = a[1];
            if (g) for (var a = a[6], i = 0; i < g.length; i++) {
                var k = g[i][0],
                m = f.Dj(k, "polygon", c);
                if (m && m.length) for (var n = g[i][1], o = 0; o < n.length; o++) {
                    var q = n[o][1];
                    f.Oc(q[0], c) && (q["cache" + c] || (q["cache" + c] = f.hn(q[1], c, e, a)), q = q["cache" + c], f.P.Uo(b.canvas.id, q, {
                        type: "polygon",
                        Yb: k,
                        style: m
                    }), this.kX(b, q, m))
                }
            }
        },
        jX: function(a, b, c) {
            c = c[0];
            a.beginPath();
            a.moveTo(b[0], b[1]);
            for (var e = 2,
            f = b.length; e < f; e += 2) a.lineTo(b[e], b[e + 1]);
            a.closePath();
            a.strokeStyle = c.ap;
            a.lineWidth = c.borderWidth / 2;
            a.stroke()
        },
        kX: function(a, b, c) {
            a.fillStyle = c[0].Ax;
            a.beginPath();
            a.moveTo(b[0], b[1]);
            for (var c = 2,
            e = b.length; c < e; c += 2) a.lineTo(b[c], b[c + 1]);
            a.closePath();
            a.fill()
        }
    };
    var je = {
        drawArrow: function(a, b, c, e, f, g) {
            b.lineWidth = 1.5;
            b.lineCap = "butt";
            b.lineJoin = "miter";
            b.strokeStyle = "rgba(153,153,153,1)";
            var i = a[7];
            if (i) {
                a = i[1];
                e = g.hn(i[0], c, e);
                for (i = 0; i < a.length; i++) if (g.Oc(a[i], c)) {
                    var k = e[4 * i],
                    m = e[4 * i + 1],
                    n = e[4 * i + 2],
                    o = e[4 * i + 3],
                    q = (k + n) / 2,
                    v = (m + o) / 2,
                    n = (k - n) / f,
                    o = (m - o) / f,
                    k = q + n / 2,
                    n = q - n / 2,
                    m = v + o / 2,
                    o = v - o / 2;
                    this.$W(b, k, m, n, o)
                }
            }
        },
        $W: function(a, b, c, e, f) {
            a.beginPath();
            a.moveTo(b, c);
            a.lineTo(e, f);
            a.stroke();
            c = this.PV([b, c], [e, f]);
            b = c[0];
            c = c[1];
            a.beginPath();
            a.moveTo(b[0], b[1]);
            a.lineTo(c[0], c[1]);
            a.lineTo(e, f);
            a.closePath();
            a.stroke()
        },
        PV: function(a, b) {
            var c = b[0] - a[0],
            e = b[1] - a[1],
            f = 1.8 * Math.sqrt(c * c + e * e),
            g = b[0] + 4.8410665352790705 * (c / f),
            f = b[1] + 4.8410665352790705 * (e / f),
            c = Math.atan2(e, c) + Math.PI;
            return [[g + 4.8410665352790705 * Math.cos(c - 0.3), f + 4.8410665352790705 * Math.sin(c - 0.3)], [g + 4.8410665352790705 * Math.cos(c + 0.3), f + 4.8410665352790705 * Math.sin(c + 0.3)]]
        }
    };
    var ke = {
        drawHregion: function(a, b, c, e, f) {
            var g = a[1];
            if (g) for (var a = a[6], i = 0; i < g.length; i++) {
                var k = g[i][0],
                m = f.Dj(k, "polygon3d", c);
                if (m && m.length) for (var n = g[i][1], o = 0; o < n.length; o++) {
                    var q = n[o][2];
                    if (f.Oc(q[0], c)) {
                        var v = q[2];
                        q["cache" + c] || (q["cache" + c] = f.hn(q[1], c, e, a));
                        q = q["cache" + c];
                        f.P.Uo(b.canvas.id, q, {
                            type: "polygon",
                            Yb: k,
                            style: m
                        });
                        this.iX(b, q, v, m)
                    }
                }
            }
        },
        iX: function(a, b, c, e) {
            e = e[0];
            if (! (c < e.filter)) {
                a.fillStyle = e.AX;
                a.beginPath();
                a.moveTo(b[0], b[1]);
                for (var c = 2,
                f = b.length; c < f; c += 2) a.lineTo(b[c], b[c + 1]);
                a.closePath();
                e.borderWidth && (a.strokeStyle = e.ap, a.lineWidth = e.borderWidth / 2, a.stroke());
                a.fill()
            }
        }
    };
    var le = {
        parse: function(a, b, c, e, f) {
            for (var g = e.P,
            i = g.la(), k = Math.pow(2, 18 - i), m = g.Dc.Ai(g.Hb()), n = m.lng, o = m.lat, m = g.wb(), q = m.width, v = m.height, m = [], w = 0; w < a.length; w++) {
                var y = [],
                z = a[w].S0;
                y.x = z[0];
                y.y = z[1];
                y.G7 = z[2];
                for (var B = (z[0] * c * k - n) / k + q / 2, D = (o - (z[1] + 1) * c * k) / k + v / 2, G = 0; G < a[w].length; G++) a[w][G].TM ? this.SN(a[w][G].TM, z, e, b, c, B, D, i, k, q, v, y) : a[w][G].cZ ? this.SN(a[w][G].cZ, z, e, b, c, B, D, i, k, q, v, y, p, window.r5) : this.n_(a[w][G].DZ, z, e, b, c, B, D, i, k, q, v, y, f);
                m.push(y)
            }
            if (/collision=0/.test(location.search)) {
                a = [];
                for (w = 0; w < m.length; w++) for (G = 0; G < m[w].length; G++) a.push(m[w][G])
            } else a = this.B_(m, e.P.la());
            g.cW();
            for (w = 0; w < a.length; w++) if (c = a[w], !c.Lt) if (G = [c.cg, c.dg, c.cg, c.Ei, c.Di, c.Ei, c.Di, c.dg, c.cg, c.dg], c.style && g.Uo("poi", G, {
                type: "polygon",
                Yb: c.style.Yb,
                style: c.style
            }), "fixed" === c.type) {
                G = t;
                c.Ce && (c.style && 4 === c.direction) && (G = p);
                if (c.Ce) if (G) {
                    var E = this;
                    this.at(b, c, e, G,
                    function(a) {
                        for (var c = 0; c < a.Df.length; c++) E.jL(b, a.Df[c].he, a.Df[c].ie, a.Df[c].text, a.style, e)
                    })
                } else this.at(b, c, e);
                if (c.style && !G) for (G = 0; G < c.Df.length; G++) this.jL(b, c.Df[G].he, c.Df[G].ie, c.Df[G].text, c.style, e)
            } else if ("line" === c.type) for (G = 0; G < c.BP.length; G++) f = c.BP[G],
            le.cX(b, f.he, f.ie, f.sV, f.zP, f.width, f.height, c.style, e);
            return m
        },
        SN: function(a, b, c, e, f, g, i, k, m, n, o, q, v, w) {
            if (a = a[1]) for (b = 0; b < a.length; b++) {
                var y = a[b],
                z = y[0],
                B = c.Dj(z, "point", k, w),
                z = c.Dj(z, "pointText", k, w),
                y = y[1],
                D = s,
                G = 100,
                E = 0,
                C = 0;
                B && B[0] && (B = B[0], D = B.Ce, G = B.zoom || 100);
                z = z && z[0] ? z[0] : s;
                for (B = 0; B < y.length; B++) {
                    var H = y[B][4];
                    if (H && c.Oc(H[2], k)) {
                        var I = Math.round(H[0] / 100) / m + g,
                        N = f - Math.round(H[1] / 100) / m + i;
                        if (v || !( - 50 > I || -50 > N || I > n + 50 || N > o + 50)) {
                            var O = H[7] || "",
                            ea = {
                                type: "fixed",
                                uid: H[3] || "",
                                name: O,
                                Ny: H[4],
                                Gt: s,
                                Df: [],
                                Ay: [I, N],
                                style: z
                            };
                            if (D) {
                                var ba = window.iconSetInfo_high[D] || window.iconSetInfo_high["MapRes/" + D];
                                if (!ba) {
                                    var Ba = D.charCodeAt(0);
                                    48 <= Ba && 57 >= Ba && (ba = window.iconSetInfo_high["_" + D])
                                }
                                ba && (E = ba[2], C = ba[3], E = E / 2 * G / 100, C = C / 2 * G / 100, ea.Gt = {
                                    he: I - E / 2,
                                    ie: N - C / 2,
                                    width: E,
                                    height: C
                                },
                                ea.Ce = D)
                            }
                            if (z) {
                                H = H[5];
                                "number" !== typeof H && (H = 0);
                                var ua = ba = 0,
                                Ba = (z.fontSize || 12) / 2,
                                Ja = 0.2 * Ba;
                                e.font = le.Fx(z, c);
                                var O = O.split("\\"),
                                ta = O.length;
                                ea.direction = H;
                                for (var ab = 0; ab < ta; ab++) {
                                    var Re = O[ab],
                                    ed = e.measureText(Re).width;
                                    switch (H) {
                                    case 3:
                                        ua = N - Ba / 2 * ta - Ja * (ta - 1) / 2;
                                        ba = I - ed - E / 2;
                                        ua = ua + Ba * ab + Ja * ab;
                                        break;
                                    case 1:
                                        ua = N - Ba / 2 * ta - Ja * (ta - 1) / 2;
                                        ba = I + E / 2;
                                        ua = ua + Ba * ab + Ja * ab;
                                        break;
                                    case 2:
                                        ua = N - C / 2 - Ba * ta - Ja * (ta - 1) - Ja;
                                        ba = I - ed / 2;
                                        ua = ua + Ba * ab + Ja * ab;
                                        break;
                                    case 0:
                                        ua = N + C / 2 + Ja / 2;
                                        ba = I - ed / 2;
                                        ua = ua + Ba * ab + Ja * ab;
                                        break;
                                    case 4:
                                        ua = N - Ba / 2 * ta - Ja * (ta - 1) / 2,
                                        ba = I - ed / 2,
                                        ua = ua + Ba * ab + Ja * ab
                                    }
                                    ea.Df.push({
                                        he: ba,
                                        ie: ua,
                                        width: ed,
                                        height: Ba,
                                        text: Re
                                    })
                                }
                            }
                            q.push(ea)
                        }
                    }
                }
            }
        },
        n_: function(a, b, c, e, f, g, i, k, m, n, o, q, v) {
            b = a[7].length;
            if ((n = c.Dj(a[0], "pointText", k)) && n.length) {
                n = n[0];
                e.font = le.Fx(n, c);
                var o = n.fontSize / 2,
                w = a[1],
                y = a[2];
                if (y) {
                    for (var z = y.split("").length, B = a[4], D = B.slice(0, 2), G = 2; G < B.length; G += 2) D[G] = D[G - 2] + B[G],
                    D[G + 1] = D[G - 1] + B[G + 1];
                    for (G = 2; G < B.length; G += 2) 0 === G % (2 * z) || 1 === G % (2 * z) || (D[G] = D[G - 2] + B[G] / v, D[G + 1] = D[G - 1] + B[G + 1] / v);
                    for (v = 0; v < b; v++) if (c.Oc(a[7][v], k)) {
                        var G = [],
                        E = l,
                        C = l,
                        H = l,
                        I = l,
                        N = y.split("");
                        a[6][v] && N.reverse();
                        for (var B = 2 * v * z,
                        B = D.slice(B, B + 2 * z), O = 0; O < z; O++) {
                            var ea = a[5][z * v + O],
                            ba = B[2 * O] / 100 / m + g,
                            Ba = f - B[2 * O + 1] / 100 / m + i,
                            ua = N[O],
                            Ja = e.measureText(ua).width;
                            if (E === l) E = ba - Ja / 2,
                            C = Ba - o / 2,
                            H = E + Ja,
                            I = C + o;
                            else {
                                var ta = ba - Ja / 2,
                                ab = Ba - o / 2;
                                ta < E && (E = ta);
                                ab < C && (C = ab);
                                ta + Ja > H && (H = ta + Ja);
                                ab + o > I && (I = ab + o)
                            }
                            G.push({
                                zP: ua,
                                he: ba,
                                ie: Ba,
                                sV: ea,
                                width: Ja,
                                height: o
                            })
                        }
                        q.push({
                            type: "line",
                            Ny: w,
                            style: n,
                            BP: G,
                            cg: E,
                            dg: C,
                            Di: H,
                            Ei: I
                        })
                    }
                }
            }
        },
        at: function(a, b, c, e, f) {
            var g = b.Ce;
            if ("lanche" !== g) if (le.ay[g]) this.gL(a, b, le.ay[g], e, f);
            else if (c = c.RL(g)) {
                var i = new Image;
                i.setAttribute("crossOrigin", "anonymous");
                var k = this;
                i.onload = function() {
                    le.ay[g] = this;
                    k.gL(a, b, this, e, f);
                    i.onload = s
                };
                i.src = c
            }
        },
        gL: function(a, b, c, e, f) {
            var g = b.Gt,
            i = g.he,
            k = g.ie,
            m = s,
            n = s,
            o = p,
            q = b.style ? b.style.Yb: s;
            if (b.style && 62203 === q) {
                for (var v = n = m = 0; v < b.Df.length; v++) m < b.Df[v].width && (m = b.Df[v].width),
                n += 20;
                m = Math.ceil(m) + 10
            }
            e && 519 === q && (o = t);
            m !== s && n !== s ? this.gX(a, b, c, 8, m, n) : e && o ? (m = Math.ceil(b.Df[0].width) + 6, this.ZW(a, b, c, 12, m, c.height / 2)) : a.drawImage(c, i, k, g.width, g.height);
            f && f(b)
        },
        gX: function(a, b, c, e, f, g) {
            var i = b.Ay[0] - f / 2,
            b = b.Ay[1] - g / 2;
            0 < navigator.userAgent.indexOf("iPhone") && (b += 1);
            var k = e / 2;
            a.drawImage(c, 0, 0, e, e, i, b, k, k);
            a.drawImage(c, e, 0, 1, e, i + k, b, f - 2 * k, k);
            a.drawImage(c, c.width - e, 0, e, e, i + f - k, b, k, k);
            a.drawImage(c, 0, e, e, 1, i, b + k, k, g - 2 * k);
            a.drawImage(c, e, e, 1, 1, i + k, b + k, f - 2 * k, g - 2 * k);
            a.drawImage(c, c.width - e, e, e, 1, i + f - k, b + k, k, g - 2 * k);
            a.drawImage(c, 0, c.height - e, e, e, i, b + g - k, k, k);
            a.drawImage(c, e, c.height - e, 1, e, i + k, b + g - k, f - 2 * k, k);
            a.drawImage(c, c.width - e, c.height - e, e, e, i + f - k, b + g - k, k, k)
        },
        ZW: function(a, b, c, e, f, g) {
            var i = b.Ay[0] - f / 2,
            b = b.Ay[1] - g / 2,
            g = e / 2;
            a.drawImage(c, 0, 0, e, c.height, i, b, g, c.height / 2);
            a.drawImage(c, e, 0, 1, c.height, i + g, b, f - 2 * g, c.height / 2);
            a.drawImage(c, c.width - e, 0, e, c.height, i + f - g, b, g, c.height / 2)
        },
        cX: function(a, b, c, e, f, g, i, k, m) {
            a.font = le.Fx(k, m);
            a.fillStyle = k.AL;
            g /= 2;
            i /= 2;
            a.save();
            a.translate(b, c);
            a.rotate( - e / 180 * Math.PI);
            0 < k.Tx && (a.lineWidth = k.Tx, a.strokeStyle = k.sM, a.strokeText(f, -g, -i));
            a.fillText(f, -g, -i);
            a.restore()
        },
        jL: function(a, b, c, e, f, g) {
            a.font = le.Fx(f, g);
            a.fillStyle = f.AL;
            0 < f.Tx && (a.lineWidth = f.Tx, a.strokeStyle = f.sM, a.strokeText(e, b, c));
            a.fillText(e, b, c)
        },
        Fx: function(a, b) {
            var c = a.fontSize / 2,
            e = 10 * a.fontWeight;
            return e = b.HE ? e + " bold" + (" " + c + "px") + ' arial, "PingFang SC", sans-serif': e + (" " + c + "px") + " arial, sans-serif"
        },
        B_: function(a, b) {
            var c = [],
            e = 0;
            5 === b && (e = 1);
            a.sort(function(a, b) {
                return a.x * a.y < b.x * b.y ? -1 : 1
            });
            for (var f = 0,
            g = a.length; f < g; f++) for (var i = a[f], k = 0, m = i.length; k < m; k++) {
                var n = i[k],
                o = l,
                q = l,
                v = l,
                w = l;
                if ("fixed" === n.type) {
                    var y = n.Gt,
                    z = n.Df;
                    y && (o = y.he, q = y.ie, v = y.he + y.width, w = y.ie + y.height);
                    for (y = 0; y < z.length; y++) {
                        var B = z[y];
                        o !== l ? (B.he < o && (o = B.he), B.ie < q && (q = B.ie), B.he + B.width > v && (v = B.he + B.width), B.ie + B.height > w && (w = B.ie + B.height)) : (o = B.he, q = B.ie, v = B.he + B.width, w = B.ie + B.height)
                    }
                } else "line" === n.type ? (o = n.cg, q = n.dg, v = n.Di, w = n.Ei) : "biaopai" === n.type && (w = n.q6, o = w.he, q = w.ie, v = w.he + w.width, w = w.ie + w.height);
                o !== l && (n.cg = o, n.dg = q, n.Di = v, n.Ei = w, c.push(n))
            }
            c.sort(function(a, b) {
                return b.Ny - a.Ny || b.cg - a.cg || b.dg - a.dg
            });
            f = 0;
            for (g = c.length; f < g; f++) {
                m = c[f];
                m.Lt = t;
                m.sK = [];
                for (k = f + 1; k < g; k++) i = c[k],
                m.Di - e < i.cg || (m.cg > i.Di - e || m.Ei - e < i.dg || m.dg > i.Ei - e) || m.sK.push(k)
            }
            f = 0;
            for (g = c.length; f < g; f++) if (k = c[f], k.Lt === t) {
                e = k.sK;
                k = 0;
                for (m = e.length; k < m; k++) c[e[k]].Lt = p
            }
            return c
        },
        ay: {}
    };
    var ne = ["round", "butt", "square"],
    oe = ["miter", "round", "bevel"],
    pe = {
        daojiao: [{
            stroke: "#FF6600",
            tb: 1,
            rb: "round",
            sb: "round",
            Zc: [4, 3]
        }],
        daojiao_bai: [{
            stroke: "#f5f3f0",
            tb: 1,
            rb: "round",
            sb: "round",
            Zc: [4, 3]
        }],
        junhuoxian: [],
        lundu: [{
            stroke: "#5c91c5",
            tb: 1,
            rb: "round",
            sb: "round",
            Zc: [10, 11]
        }],
        shengjie: [],
        weidingguojie: [{
            stroke: "#aea08a",
            tb: 1,
            rb: "round",
            sb: "round",
            Zc: [4, 3]
        }],
        weidingguojie_guowai: [{
            stroke: "#a29e96",
            tb: 2,
            rb: "round",
            sb: "round",
            Zc: [4, 3]
        }],
        weidingguojie_guonei: [],
        weidingshengjie_guowai: []
    },
    qe = {
        weidingshengjie_guowai: [{
            stroke: "#737373",
            tb: 1,
            rb: "round",
            sb: "round",
            Zc: [4, 3]
        }],
        junhuoxian: [{
            stroke: "#DB7093",
            tb: 1.5,
            rb: "round",
            sb: "round",
            Zc: [4, 3]
        }],
        shengjie: [{
            stroke: "#737373",
            tb: 1,
            rb: "round",
            sb: "round",
            Zc: [10, 4, 5, 4]
        }],
        weidingguojie_guonei: [{
            stroke: "#b2a471",
            tb: 2,
            rb: "round",
            sb: "round",
            Zc: [4, 3]
        }]
    },
    re = {};
    function se(a, b, c) {
        if (/^tielu|^MapRes\/tielu/.test(a)) {
            if ("off" === window[c + "zoomFrontStyle"][b].bmapRailwayVisibility) return [];
            var e = "#ffffff",
            f = "#949494";
            window[c + "zoomFrontStyle"] && (window[c + "zoomFrontStyle"][b] && window[c + "zoomFrontStyle"][b].bmapRailwayStrokeColor) && (e = window[c + "zoomFrontStyle"][b].bmapRailwayStrokeColor);
            window[c + "zoomFrontStyle"] && (window[c + "zoomFrontStyle"][b] && window[c + "zoomFrontStyle"][b].bmapRailwayFillColor) && (f = window[c + "zoomFrontStyle"][b].bmapRailwayFillColor);
            if (4 <= b && 9 >= b || 10 <= b && 16 >= b) return [{
                stroke: e,
                tb: 1.5,
                rb: "butt",
                sb: "round",
                Zc: [10, 11]
            },
            {
                stroke: f,
                tb: 2,
                rb: "round",
                sb: "round"
            }];
            if (17 <= b && 18 >= b) return [{
                stroke: e,
                tb: 2.5,
                rb: "butt",
                sb: "round",
                Zc: [15, 16]
            },
            {
                stroke: f,
                tb: 5,
                rb: "round",
                sb: "round"
            }];
            if (19 <= b && 20 >= b) return [{
                stroke: e,
                tb: 4.5,
                rb: "butt",
                sb: "round",
                Zc: [25, 26]
            },
            {
                stroke: f,
                tb: 5,
                rb: "round",
                sb: "round"
            }]
        } else if (0 === a.indexOf("ditie_zj") || 0 === a.indexOf("MapRes/ditie_zj")) {
            if (12 <= b && 16 >= b) return [{
                stroke: "#868686",
                tb: 1,
                rb: "round",
                sb: "round",
                Zc: [7, 4]
            }];
            if (17 <= b && 18 >= b || 19 <= b && 20 >= b) return [{
                stroke: "#6e6e6e",
                tb: 1,
                rb: "round",
                sb: "round",
                Zc: [7, 4]
            }]
        } else if (/^tongdaomian|^MapRes\/tongdaomian/.test(a)) {
            if (17 === b) return [{
                stroke: "#e5e5e5",
                tb: 4,
                rb: "square",
                sb: "round"
            },
            {
                stroke: "#a8a8a8",
                tb: 6,
                rb: "square",
                sb: "round"
            }];
            if (18 === b) return [{
                stroke: "#e5e5e5",
                tb: 6,
                rb: "square",
                sb: "round"
            },
            {
                stroke: "#a8a8a8",
                tb: 8,
                rb: "square",
                sb: "round"
            }];
            if (19 <= b && 21 >= b) return [{
                stroke: "#e5e5e5",
                tb: 8,
                rb: "square",
                sb: "round"
            },
            {
                stroke: "#a8a8a8",
                tb: 10,
                rb: "square",
                sb: "round"
            }]
        } else if (/^jietizhongduan|^dixiatongdaojieti|^MapRes\/jietizhongduan|^MapRes\/dixiatongdaojieti/.test(a)) {
            if (17 === b) return [{
                stroke: "#e5e5e5",
                tb: 4,
                rb: "butt",
                sb: "round",
                Zc: [2, 1]
            },
            {
                stroke: "#bebebe",
                tb: 6,
                rb: "butt",
                sb: "round"
            }];
            if (18 === b) return [{
                stroke: "#e5e5e5",
                tb: 6,
                rb: "butt",
                sb: "round",
                Zc: [3, 1]
            },
            {
                stroke: "#bebebe",
                tb: 8,
                rb: "butt",
                sb: "round"
            }];
            if (19 <= b && 21 >= b) return [{
                stroke: "#e5e5e5",
                tb: 8,
                rb: "butt",
                sb: "round",
                Zc: [4, 2]
            },
            {
                stroke: "#bebebe",
                tb: 10,
                rb: "butt",
                sb: "round"
            }]
        } else if (/^guojietianqiao|^MapRes\/guojietianqiao/.test(a)) return 18 === b ? [{
            stroke: "#ffffff",
            tb: 6,
            rb: "butt",
            sb: "round",
            Zc: [4, 2]
        },
        {
            stroke: "#bebebe",
            tb: 8,
            rb: "butt",
            sb: "round"
        }] : [{
            stroke: "#ffffff",
            tb: 8,
            rb: "butt",
            sb: "round",
            Zc: [4, 2]
        },
        {
            stroke: "#bebebe",
            tb: 10,
            rb: "butt",
            sb: "round"
        }];
        return pe[a] || pe[a.replace("MapRes/", "")]
    }
    var te = {
        drawLink: function(a, b, c, e, f) {
            this.da = f.P.da;
            var g = a[1];
            g && (a = a[6], this.iP(g, c, e, b, a, f, p), this.iP(g, c, e, b, a, f, t))
        },
        iP: function(a, b, c, e, f, g, i) {
            for (var k = 0; k < a.length; k++) {
                var m = a[k][0],
                n = g.Dj(m, "line", b);
                if (n && n.length && (!i || n[0].borderWidth)) if (!n[0].Gm || se(n[0].Gm, b, this.da)) for (var o = a[k][1], q = 0; q < o.length; q++) {
                    var v = o[q][3];
                    g.Oc(v[0], b) && (v["cache" + b] || (v["cache" + b] = g.hn(v[1], b, c, f)), v = v["cache" + b], g.P.Uo(e.canvas.id, v, {
                        type: "polyline",
                        Yb: m,
                        style: n
                    }), this.dX(e, v, n, i, b))
                }
            }
        },
        drawSingleTexture: function(a, b, c, e, f) {
            var g = a[1];
            if (g) for (var a = a[6], i = 0; i < g.length; i++) {
                var k = f.Dj(g[i][0], "line", c);
                if (k && k.length) for (var m = g[i][1], n = 0; n < m.length; n++) {
                    var o = m[n][11];
                    if (f.Oc(o[0], c)) {
                        var q;
                        o["cache" + c] || (o["cache" + c] = f.hn(o[1], c, e, a));
                        q = o["cache" + c];
                        o = o[3];
                        o *= Math.pow(2, c - f.Q1[c].Tc);
                        this.eX(b, q, k, o, f)
                    }
                }
            }
        },
        eX: function(a, b, c, e, f) {
            var g = c[0].Gm,
            i = this;
            if (re[g]) i.at(b, e, a, re[g]);
            else if (c = f.RL(g)) {
                var k = new Image;
                k.onload = function() {
                    re[g] = k;
                    i.at(b, e, a, k);
                    k.onload = s
                };
                k.src = c
            }
        },
        at: function(a, b, c, e) {
            var f = [a[0], a[1]],
            g = [a[2], a[3]],
            a = g[0] - f[0],
            g = g[1] - f[1],
            f = [f[0] + a / 2, f[1] + g / 2],
            i = Math.sqrt(a * a + g * g),
            b = b / 10,
            a = Math.atan2(g, a);
            c.save();
            c.translate(f[0], f[1]);
            c.rotate(Math.PI / 2 + a);
            c.drawImage(e, -b / 2, -i / 2, b, i);
            c.restore()
        },
        dX: function(a, b, c, e, f) {
            c = c[0];
            if (!e && c.Gm) {
                var f = se(c.Gm, f, this.da),
                g = qe[c.Gm] || qe[c.Gm.replace("MapRes/", "")];
                if (g) {
                    this.kL(a, b, c, g, p);
                    return
                }
                if (f) {
                    this.kL(a, b, c, f, t);
                    return
                }
            }
            a.beginPath();
            a.moveTo(b[0], b[1]);
            f = 2;
            for (g = b.length; f < g; f += 2) a.lineTo(b[f], b[f + 1]);
            c.borderWidth && e ? (a.strokeStyle = c.ap, a.lineCap = ne[c.IV], a.lineJoin = oe[1], a.lineWidth = c.borderWidth / 2, a.stroke()) : e || (a.strokeStyle = c.Ax, a.lineCap = ne[c.zX], a.lineJoin = oe[1], a.lineWidth = c.wL / 2, a.stroke())
        },
        kL: function(a, b, c, e, f) {
            if (c = e[1]) {
                a.strokeStyle = c.stroke;
                a.lineCap = c.rb;
                a.lineJoin = c.sb;
                a.lineWidth = c.tb;
                a.beginPath();
                a.moveTo(b[0], b[1]);
                for (var c = 2,
                g = b.length; c < g; c += 2) a.lineTo(b[c], b[c + 1]);
                a.stroke()
            }
            if (e = e[0]) if (e.Zc) f ? this.fX(a, b, e) : this.bX(a, b, e);
            else {
                a.strokeStyle = e.stroke;
                a.lineCap = e.rb;
                a.lineJoin = e.sb;
                a.lineWidth = e.tb;
                a.beginPath();
                a.moveTo(b[0], b[1]);
                c = 2;
                for (g = b.length; c < g; c += 2) a.lineTo(b[c], b[c + 1]);
                a.stroke()
            }
        },
        fX: function(a, b, c) {
            a.strokeStyle = c.stroke;
            a.lineCap = c.rb;
            a.lineJoin = c.sb;
            a.lineWidth = c.tb;
            a.setLineDash(c.Zc);
            a.beginPath();
            for (c = 0; c < b.length - 2; c += 2) a.lineTo(b[c], b[c + 1]);
            a.stroke();
            a.setLineDash([])
        },
        bX: function(a, b, c) {
            a.strokeStyle = c.stroke;
            a.lineCap = c.rb;
            a.lineJoin = c.sb;
            a.lineWidth = c.tb;
            var e = p,
            c = c.Zc[0];
            a.beginPath();
            for (var f = 0; f < b.length - 2; f += 2) {
                var g = b[f],
                i = b[f + 1],
                k = b[f + 2] - g,
                m = b[f + 3] - i,
                n = 0 !== k ? m / k: 0 < m ? 1E15: -1E15,
                m = Math.sqrt(k * k + m * m),
                o = c;
                for (a.moveTo(g, i); 0.1 <= m;) {
                    o > m && (o = m);
                    var q = Math.sqrt(o * o / (1 + n * n));
                    0 > k && (q = -q);
                    g += q;
                    i += n * q;
                    a[e ? "lineTo": "moveTo"](g, i);
                    m -= o;
                    e = !e
                }
            }
            a.stroke()
        }
    };
    var ue = 3,
    ve = 4,
    we = 7,
    xe = 8,
    ye = 15,
    ze = 16,
    Ae = {},
    Be = {},
    Ce = {},
    De, Ee = {
        3 : {
            start: 3,
            Tc: 3
        },
        4 : {
            start: 4,
            Tc: 5
        },
        5 : {
            start: 4,
            Tc: 5
        },
        6 : {
            start: 6,
            Tc: 7
        },
        7 : {
            start: 6,
            Tc: 7
        },
        8 : {
            start: 8,
            Tc: 9
        },
        9 : {
            start: 8,
            Tc: 9
        },
        10 : {
            start: 10,
            Tc: 10
        },
        11 : {
            start: 11,
            Tc: 12
        },
        12 : {
            start: 11,
            Tc: 12
        },
        13 : {
            start: 11,
            Tc: 12
        },
        14 : {
            start: 14,
            Tc: 15
        },
        15 : {
            start: 14,
            Tc: 15
        },
        16 : {
            start: 16,
            Tc: 17
        },
        17 : {
            start: 16,
            Tc: 17
        },
        18 : {
            start: 18,
            Tc: 19
        },
        19 : {
            start: 18,
            Tc: 19
        },
        20 : {
            start: 18,
            Tc: 19
        },
        21 : {
            start: 18,
            Tc: 19
        }
    };
    function Fe(a) {
        this.P = a;
        this.Lc = a.M.devicePixelRatio;
        this.Q1 = Ee
    }
    Fe.prototype = {
        hD: function(a, b, c, e, f, g, i, k, m) {
            this.P.OO = {};
            var n = this,
            o = n.P.da;
            m || (m = 0);
            if (!window[o + "StyleBody"] && 100 > m) setTimeout(function() {
                n.hD(a, b, c, e, f, g, i, k, m + 1)
            },
            100);
            else {
                De || (De = k);
                var q = b.getContext("2d"),
                v = b.parentNode;
                v.removeChild(b);
                q.clearRect(0, 0, g, g);
                v.appendChild(b);
                v = this.Lc;
                1 < v && !b._scale && (q.scale(v, v), b._scale = p);
                q.fillStyle = this.RN("#F5F3F0");
                window[o + "zoomFrontStyle"][f].bmapLandColor && (q.fillStyle = this.RN(window[o + "zoomFrontStyle"][f].bmapLandColor));
                o = b.style.width;
                b.style.width = "0px";
                b.style.width = o; (o = Ge.IY(c, g, i)) ? q.fillRect(o[0], o[1], o[2], o[3]) : q.fillRect(0, 0, g, g);
                if (a[0]) for (o = 0; o < a[0].length; o++) v = a[0][o],
                v[0] === we && ie.drawPoly(v, q, f, g, this);
                17 <= this.P.la() ? (n.iL(a, q, f, g, i, c, e), b.io = p) : setTimeout(function() {
                    if (!b.KH) {
                        n.iL(a, q, f, g, i, c, e);
                        b.io = p
                    }
                },
                1)
            }
        },
        iL: function(a, b, c, e) {
            var f = this.P.da;
            if (a[0]) for (var g = 0; g < a[0].length; g++) {
                var i = a[0][g],
                k = i[0];
                k === ve ? te.drawLink(i, b, c, e, this) : k === ze ? te.drawLink(i, b, c, e, this) : k === ye ? (ie.drawGaoqingRoadBorder(i, b, c, e, this), ie.drawGaoqingRoadFill(i, b, c, e, this)) : 18 === k ? window[f + "zoomFrontStyle"] && (window[f + "zoomFrontStyle"][c] && "off" !== window[f + "zoomFrontStyle"][c].bmapRoadarrowVisibility) && je.drawArrow(i, b, c, e, Math.pow(2, c - Ee[c].Tc), this) : k === xe ? ke.drawHregion(i, b, c, e, this) : 19 === k && te.drawSingleTexture(i, b, c, e, this)
            }
        },
        hL: function(a, b, c, e, f, g, i) {
            var k = this,
            m = k.P.da;
            i || (i = 0); ! window[m + "StyleBody"] && 100 > i ? setTimeout(function() {
                k.hL(a, b, c, e, f, g, i + 1)
            },
            100) : (De || (De = b), a.u_ = le.parse(a, c, e, this, f))
        },
        Dj: function(a, b, c, e) {
            var f = a + "-" + b + "-" + c;
            if (e) return Ae[f] || (Ae[f] = this.wf(a, b, c, e)),
            Ae[f];
            this.P.OO[f] = this.wf(a, b, c);
            return this.P.OO[f]
        },
        wf: function(a, b, c, e) {
            var f = this.P.da,
            g;
            g = e || window[f + "_bmap_baseFs"];
            f = window[f + "StyleBody"];
            e = g[2];
            if ("arrow" === b) return this.j_(e[2]);
            switch (b) {
            case "point":
                e = e[0];
                f = f[0] || {};
                break;
            case "pointText":
                e = e[1];
                f = f[1] || {};
                break;
            case "line":
                e = e[3];
                f = f[3] || {};
                break;
            case "polygon":
                e = e[4];
                f = f[4] || {};
                break;
            case "polygon3d":
                e = e[5],
                f = f[5] || {}
            }
            var i = [],
            c = g[1][c - 1][0][a];
            if (!c) return i;
            for (g = 0; g < c.length; g++) {
                var k = f[c[g]] || e[c[g]];
                if (k) {
                    switch (b) {
                    case "polygon":
                        k = this.s_(k, a);
                        break;
                    case "line":
                        k = this.o_(k, a);
                        break;
                    case "pointText":
                        k = this.q_(k, a);
                        break;
                    case "point":
                        k = this.p_(k, a);
                        break;
                    case "polygon3d":
                        k = this.r_(k, a)
                    }
                    k.X6 = c[g];
                    i[i.length] = k
                }
            }
            return i
        },
        q_: function(a, b) {
            return {
                Yb: b,
                AL: this.Pg(a[0]),
                sM: this.Pg(a[1]),
                o3: this.Pg(a[2]),
                fontSize: a[3],
                Tx: a[4],
                fontWeight: a[5],
                fontStyle: a[6],
                LW: a[7]
            }
        },
        p_: function(a, b) {
            return {
                Yb: b,
                Ny: a[0],
                p7: a[1],
                Ce: a[2],
                ZY: a[3],
                Y5: a[4],
                LW: a[5],
                zoom: a[6]
            }
        },
        o_: function(a, b) {
            return {
                Yb: b,
                ap: this.Pg(a[0]),
                Ax: this.Pg(a[1]),
                borderWidth: a[2],
                wL: a[3],
                IV: a[4],
                zX: a[5],
                f5: a[6],
                g5: a[7],
                h5: a[8],
                z5: a[9],
                A5: a[10],
                JV: a[11],
                Gm: a[12],
                KV: a[13],
                b4: a[14],
                x5: a[15],
                d5: a[16],
                X5: a[17],
                C6: a[18]
            }
        },
        s_: function(a, b) {
            return {
                Yb: b,
                Ax: this.Pg(a[0]),
                ap: this.Pg(a[1]),
                borderWidth: a[2],
                JV: a[3],
                KV: a[4],
                y7: a[5],
                c5: a[6],
                b7: a[7],
                c7: this.Pg(a[8])
            }
        },
        r_: function(a, b) {
            return {
                Yb: b,
                filter: a[0],
                cO: a[1],
                e5: a[2],
                borderWidth: a[3],
                ap: this.Pg(a[4]),
                AX: this.Pg(a[5]),
                a4: this.Pg(a[6]),
                o6: a[7]
            }
        },
        j_: function(a) {
            for (var b in a) return a = a[b],
            {
                color: this.Pg(a[0]),
                ZY: a[1],
                Ce: a[2]
            }
        },
        Pg: function(a) {
            var b = a;
            if (Ce[b]) return Ce[b];
            a >>>= 0;
            Ce[b] = "rgba(" + (a & 255) + "," + (a >> 8 & 255) + "," + (a >> 16 & 255) + "," + (a >> 24 & 255) / 255 + ")";
            return Ce[b]
        },
        RN: function(a) {
            a = a.replace("#", "");
            6 === a.length && (a += "ff");
            for (var b = "rgba(",
            c = 0; 8 > c; c += 2) b = 6 > c ? b + (parseInt(a.slice(c, c + 2), 16) + ",") : b + (parseInt(a.slice(c, c + 2), 16) / 255 + ")");
            return b
        },
        Oc: function(a, b) {
            var c;
            Be[a] || (c = a.toString(2), 8 > c.length && (c = Array(8 - c.length + 1).join("0") + c), Be[a] = c);
            c = Be[a];
            return "1" === c[b - Ee[b].start]
        },
        hn: function(a, b, c) {
            var e = [],
            b = Math.pow(2, b - Ee[b].Tc) / 100,
            f = a[0] * b,
            g = a[1] * b;
            e[e.length] = f;
            e[e.length] = c - g;
            for (var i = 2; i < a.length; i += 2) f += a[i] * b,
            g += a[i + 1] * b,
            e[e.length] = f,
            e[e.length] = c - g;
            return e
        },
        RL: function(a) {
            if (a) {
                var b = a.length % De.length,
                c = this.eY();
                return De[b] + a + ".png?v=" + c.qG + "&udt=" + c.mG
            }
        },
        eY: function() {
            if (this.vE) return this.vE;
            var a = "undefined" !== typeof MSV ? MSV.O5: {};
            return this.vE = {
                qG: a.version ? a.version: "001",
                mG: a.n1 ? a.n1: "20150621"
            }
        }
    };
    Q = A.lang.av;
    ue = 3;
    ve = 4;
    we = 7;
    xe = 8;
    ye = 15;
    ze = 16;
    function Rd(a, b, c) {
        c = c || {};
        this.P = a;
        this.Iw = b;
        this.Lc = b.cO;
        this.fb = {
            T0: "na",
            zIndex: 0,
            VO: c.tileUrls || {
                https: ["https://maponline0.bdimg.com/pvd/?qt=vtile", "https://maponline1.bdimg.com/pvd/?qt=vtile", "https://maponline2.bdimg.com/pvd/?qt=vtile", "https://maponline3.bdimg.com/pvd/?qt=vtile", "https://maponline0.bdimg.com/pvd/?qt=vtile"],
                https: ["https://maponline0.bdimg.com/pvd/?qt=vtile", "https://maponline1.bdimg.com/pvd/?qt=vtile", "https://maponline2.bdimg.com/pvd/?qt=vtile", "https://maponline3.bdimg.com/pvd/?qt=vtile", "https://maponline0.bdimg.com/pvd/?qt=vtile"]
            },
            uE: c.iconUrls || ["https://maponline0.bdimg.com/sty/map_icons2x/", "https://maponline1.bdimg.com/sty/map_icons2x/"],
            SF: p
        };
        this.ZB = "";
        this.rT = {};
        var c = c.urlOpts || {
            styles: "pl",
            extdata: 1,
            textimg: 0,
            mesh3d: 0,
            limit: 30
        },
        e;
        for (e in c) c.hasOwnProperty(e) && (this.ZB = this.ZB + "&" + e + "=" + c[e]);
        this.th = {};
        this.Ms = [];
        this.St = 0;
        this.hy = t;
        this.ay = {};
        a = this.fb.T0;
        ce[a] ? a = ce[a] : (b = new de(a, l), a = ce[a] = b);
        this.Id = a;
        this.P.Id = this.Id
    }
    window.VectorIndoorTileLayer = "VectorIndoorTileLayer";
    fa = Rd.prototype;
    fa.za = function() {
        var a = this.P,
        b = a.ef;
        if (!this.Qo) {
            var c = b.jr(this.fb.zIndex);
            c.style.WebkitTransform = "translate3d(0px, 0px, 0)";
            this.Qo = c
        }
        b.og.appendChild(this.Qo);
        b.s5 = c;
        if (this.fb.SF) {
            He(this);
            var e = this;
            a.addEventListener("checkvectorclick",
            function(a) {
                var b;
                a: {
                    b = a.offsetX;
                    var c = a.offsetY,
                    k = e.Ms.u_;
                    if (k) for (var m = 0; m < k.length; m++) for (var n = k[m], o = 0; o < n.length; o++) if (a = n[o], !a.Lt && a.Gt && b > a.cg && b < a.Di && c > a.dg && c < a.Ei) {
                        b = a.Gt;
                        b = {
                            type: 9,
                            name: a.name,
                            uid: a.uid,
                            point: {
                                x: b.he + b.width / 2,
                                y: b.ie + 6
                            }
                        };
                        break a
                    }
                    b = s
                }
                b && (a = new Q("onvectorclick"), a.o5 = b, a.Xe = "base", this.dispatchEvent(a))
            })
        }
    };
    function He(a) {
        var b = a.P,
        c = b.ef,
        e = a.Lc,
        f = b.wb(),
        g = f.width,
        f = f.height,
        i = J("canvas");
        i.style.cssText = "position: absolute;left:0;top:0;width:" + g + "px;height:" + f + "px;z-index:2;";
        i.width = g * e;
        i.height = f * e;
        a.ly = i;
        a.Tp = i.getContext("2d");
        a.Tp.scale(e, e);
        a.Tp.textBaseline = "top";
        c.og.appendChild(i);
        b.bT = i
    }
    fa.JY = x("Id");
    fa.update = function(a, b) {
        b = b || {};
        this.nG = b.nG;
        b.Fm && (this.o1 = b.Fm);
        if (this.fb.SF && (b.wm && this.wm(), b.B0)) {
            var c = this.Lc,
            e = this.P.wb(),
            f = e.width,
            e = e.height,
            g = this.ly,
            i = g.style;
            i.width = f + "px";
            i.height = e + "px";
            g.width = f * c;
            g.height = e * c;
            this.Tp.scale(c, c);
            this.Tp.textBaseline = "top"
        }
        if (b.s7) {
            c = this.Qo;
            f = 0;
            for (e = c.childNodes.length; f < e; f++) c.childNodes[f].io = t
        }
        this.ox = a;
        this.Wp(a)
    };
    fa.Wp = function(a) {
        this.Ms = [];
        var b = this.P,
        c = b.la(),
        e = b.Dc.Ai(b.ge),
        f = this.Id.Wb(c),
        e = [Math.round( - e.lng / f), Math.round(e.lat / f)],
        f = this.Id.le(c),
        g = b.da.replace(/^TANGRAM_/, ""),
        i = this.Id.Bp(c),
        b = this.P,
        k = -b.offsetY + b.height / 2,
        m = this.Qo;
        m.style.left = -b.offsetX + b.width / 2 + "px";
        m.style.top = k + "px";
        this.Ue ? this.Ue.length = 0 : this.Ue = [];
        b = 0;
        for (k = m.childNodes.length; b < k; b++) {
            var n = m.childNodes[b];
            n.Hr = t;
            this.Ue.push(n)
        }
        if (b = this.fn) for (var o in b) delete b[o];
        else this.fn = {};
        this.Ve ? this.Ve.length = 0 : this.Ve = [];
        b = 0;
        for (k = a.length; b < k; b++) {
            var n = a[b][0],
            q = a[b][1];
            o = Ge.vm(a[b][0], a[b][2], a[b][3]);
            o.offsetX && (a[b][0] = o.Bg, a[b][4] = n, a[b][5] = o.offsetX / 2, n = o.Bg);
            o = 0;
            for (var v = this.Ue.length; o < v; o++) {
                var w = this.Ue[o];
                if (w.id === g + "_" + n + "_" + q + "_" + i + "_" + c) {
                    w.Hr = p;
                    this.fn[w.id] = w;
                    break
                }
            }
        }
        b = 0;
        for (k = this.Ue.length; b < k; b++) w = this.Ue[b],
        w.Hr || (w.cC = s, delete w.cC, w.io = t, this.Ve.push(w));
        o = [];
        v = f * this.Lc;
        b = 0;
        for (k = a.length; b < k; b++) {
            var n = a[b][0],
            q = a[b][1],
            w = a[b][4] ? a[b][4] * f + e[0] + a[b][5] : n * f + e[0],
            y = ( - 1 - q) * f + e[1],
            z = g + "_" + n + "_" + q + "_" + i + "_" + c,
            B = this.fn[z],
            D = s;
            if (B) D = B.style,
            D.left = w + "px",
            D.top = y + "px",
            D.width = f + "px",
            D.height = f + "px",
            B.io ? B.dG && B.dG && this.Ms.push(B.dG) : (B.KH = p, B.cC = s, delete B.cC, o.push([n, q, B]));
            else {
                if (0 < this.Ve.length) {
                    var B = this.Ve.shift(),
                    G = B.getContext("2d");
                    B.getAttribute("width") !== v && (B._scale = t);
                    B.setAttribute("width", v);
                    B.setAttribute("height", v);
                    D = B.style;
                    D.width = f + "px";
                    D.height = f + "px";
                    G.clearRect(0, 0, v, v)
                } else B = document.createElement("canvas"),
                D = B.style,
                D.position = "absolute",
                this.fb.backgroundColor && (D.background = this.fb.backgroundColor),
                D.width = f + "px",
                D.height = f + "px",
                B.setAttribute("width", v),
                B.setAttribute("height", v),
                m.appendChild(B);
                B.id = z;
                D.left = w + "px";
                D.top = y + "px";
                o.push([n, q, B])
            }
            B.style.visibility = ""
        }
        b = 0;
        for (k = this.Ve.length; b < k; b++) this.Ve[b].style.visibility = "hidden";
        if (0 === o.length) {
            Ie(this);
            a = this.P.da.replace(/^TANGRAM_/, "");
            c = this.P.la();
            e = this.Id.Bp(c);
            f = {};
            for (g = 0; g < this.ox.length; g++) i = this.ox[g],
            i = a + "_" + i[0] + "_" + i[1] + "_" + e + "_" + c,
            this.th[i] && (f[i] = this.th[i], this.nG && this.Iw.iD.hD(this.th[i].B1, this.th[i].R0, this.th[i].Bg, this.th[i].qn, this.th[i].XE, this.Id.le(this.th[i].XE), this.Id.eE(this.th[i].XE), this.fb.uE));
            this.th = f
        } else {
            this.St = o.length;
            this.hy = t;
            c = this.Id.Bp(this.P.la());
            for (e = 0; e < a.length; e++) a[e][3] = c;
            for (e = 0; e < o.length; e++) a = o[e][2],
            f = o[e][0],
            g = o[e][1],
            o[e][3] = c,
            a.io = t,
            a.KH = t,
            Je(this, f, g, c, a)
        }
    };
    function Je(a, b, c, e, f) {
        var g = b + "_" + c + "_" + e,
        i = a.rT;
        if (i[g]) {
            if ("loading" === i[g].status) return
        } else i[g] = {
            status: "init",
            jO: 0
        };
        var k = a,
        m = k.P,
        n = [],
        n = "0" === F.Su ? k.fb.VO.https: k.fb.VO.https,
        o = Math.abs(b + c) % n.length,
        q = "x=" + b + "&y=" + c + "&z=" + e,
        v = Ke(a.Iw),
        w = v.qG,
        v = v.mG,
        y = "_" + (0 > b ? "_": "") + (0 > c ? "$": "") + parseInt(Math.abs(b) + "" + Math.abs(c) + "" + e, 10).toString(36),
        q = q + a.ZB + "v=" + w + "&udt=" + v + "&fn=window." + y,
        w = n[o] + "&" + q,
        w = n[o] + "&param=" + window.encodeURIComponent(Tb(q));
        window[y] = function(a) {
            clearTimeout(i[g].ll);
            i[g] = s;
            if (a) {
                var n = m.la(),
                o;
                a: {
                    for (o = 0; o < k.ox.length; o++) {
                        var q = k.ox[o];
                        if (q[0] === b && q[1] === c && q[3] === e) {
                            o = p;
                            break a
                        }
                    }
                    o = t
                }
                if (o !== t) {
                    o = new Q("updateindoor");
                    o.IndoorCanvas = [];
                    o.IndoorCanvas.push({
                        canvasDom: f,
                        data: a,
                        canvasID: f.id,
                        ratio: k.Lc
                    });
                    m.dispatchEvent(o);
                    if (m.M.Gk) {
                        if (k.th[f.id] = {
                            B1: a,
                            R0: f,
                            Bg: b,
                            qn: c,
                            XE: n
                        },
                        k.Iw.iD.hD(a, f, b, c, n, k.Id.le(n), k.Id.eE(n), k.fb.uE), k.fb.SF) {
                            n = [];
                            n.S0 = [b, c, e];
                            if (a[0]) for (o = 0; o < a[0].length; o++) a[0][o][0] === ue && n.push({
                                TM: a[0][o]
                            });
                            if (a[2]) for (o = 0; o < a[2].length; o++) n.push({
                                DZ: a[2][o]
                            });
                            f.dG = n;
                            k.Ms.push(n);
                            k.hy === t && k.St--; (0 === k.St || k.hy === p) && Ie(k)
                        }
                    } else k.St--,
                    (0 === k.St || k.hy === p) && Ie(k);
                    delete window[y]
                }
            }
        };
        ra(w);
        i[g].status = "loading";
        k = a;
        i[g].ll = setTimeout(function() {
            3 > i[g].jO ? (i[g].jO++, i[g].status = "init", Je(k, b, c, e, f)) : i[g] = s
        },
        4E3)
    }
    function Ie(a) {
        if (a.ly) {
            var b = a.P;
            a.ly.style.left = -b.offsetX + "px";
            a.ly.style.top = -b.offsetY + "px";
            var c = new Q("updateindoorlabel");
            c.labelCanvasDom = b.bT;
            b.dispatchEvent(c);
            if (b.M.Gk) {
                a.wm();
                var c = a.Id,
                e = b.la(),
                f = c.Bp(b.la());
                a.Iw.iD.hL(a.Ms, a.fb.uE, a.Tp, c.le(e), Math.pow(2, e - f), e);
                "moving" !== a.o1 && b.dispatchEvent(new Q("ontilesloaded"))
            }
        }
    }
    fa.wm = function() {
        var a = this.P.wb(),
        b = this.Lc;
        this.Tp.clearRect(0, 0, a.width * b, a.height * b)
    };
    fa.remove = function() {
        var a = this.P.ef;
        this.Qo && a.og.removeChild(this.Qo)
    };
    function Qd(a) {
        this.P = a.map;
        this.jf = [];
        this.qs = {};
        this.cO = this.P.M.devicePixelRatio;
        this.iD = new Fe(this.P);
        this.za()
    }
    window.VectorIndoorTileMgr = "VectorIndoorTileMgr";
    fa = Qd.prototype;
    fa.za = function() {
        var a = this,
        b = this.P;
        b.addEventListener("addtilelayer",
        function(b) {
            a.Te(b.target)
        });
        b.addEventListener("removetilelayer",
        function(b) {
            a.gg(b.target)
        });
        setTimeout(function() {
            b.addEventListener("onmoveend",
            function(b) {
                "centerAndZoom" !== b.lA && a.update({
                    Fm: "moveend"
                })
            });
            b.addEventListener("onmoving",
            function() {
                a.update({
                    Fm: "moving"
                })
            });
            b.addEventListener("onzoomend",
            function(b) {
                "centerAndZoom" !== b.lA && a.update({
                    wm: p,
                    Fm: "zoomend"
                })
            });
            b.addEventListener("centerandzoom",
            function() {
                a.update({
                    wm: p,
                    Fm: "centerandzoom"
                })
            });
            b.addEventListener("onupdatestyles",
            function() {
                a.update({
                    wm: p,
                    nG: p,
                    Fm: "updatestyles"
                });
                a.P.Bf(a.P.Hb());
                setTimeout(function() {
                    a.P.dispatchEvent(new Q("onvectordrawend"))
                },
                10)
            });
            b.addEventListener("onmaptypechange",
            function(b) {
                b.Wa === Qa && a.update({
                    wm: p,
                    Fm: "maptypechange"
                })
            })
        },
        1);
        b.addEventListener("indoor_data_refresh", u());
        b.addEventListener("onresize",
        function() {
            a.update({
                B0: p
            })
        });
        a.update()
    };
    fa.Te = function(a) {
        if (a instanceof Rd) {
            for (var b = 0; b < this.jf.length; b++) if (this.jf[b] === a) return;
            this.jf.push(a);
            a.za();
            this.P.loaded && this.update()
        }
    };
    fa.gg = function(a) {
        if (a instanceof Rd) {
            for (var b = 0; b < this.jf.length; b++) if (this.jf[b] === a) {
                this.jf.splice(b, 1);
                break
            }
            a.remove()
        }
    };
    fa.iM = function(a) {
        var b = a.getName();
        if (this.qs[b]) return this.qs[b];
        var c = this.P,
        e = c.la(),
        f = a.Bp(e),
        g = c.Jb,
        g = Ge.vC(g),
        i = a.eE(Math.floor(e)),
        a = a.PX(e);
        c.da.replace(/^TANGRAM_/, "");
        var e = Math.ceil(g.lng / i),
        g = Math.ceil(g.lat / i),
        k = 0,
        m = 0,
        n = c.RX(),
        n = Ge.SV(n, c.Jb);
        n.kf.lng > Ge.rg && (c = Ge.aM(f), k = Math.ceil(c / a));
        n.nf.lng < Ge.hh && (c = Ge.aM(f), m = Math.ceil(c / a));
        if (1.9505879362428114E7 < n.kf.lat || -1.5949096637571886E7 > n.nf.lat) n.kf.lat = 1.9505879362428114E7,
        n.nf.lat = -1.5949096637571886E7;
        for (var c = [Math.floor(n.nf.lng / i) - m, Math.floor(n.nf.lat / i)], o = [Math.floor(n.kf.lng / i) + k, Math.floor(n.kf.lat / i)], k = [], n = o[0] + 1, m = c[1], o = o[1] + 1, c = c[0]; c < n; c++) if (Ge.iy(c, f, a) !== p) for (var q = m; q < o; q++) k.push([c, q, f, a]);
        k = Ge.wC(k, f, a, i);
        k.sort(function(a) {
            return function(b, c) {
                return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
            }
        } ([e, g]));
        this.qs[b] = k;
        return this.qs[b]
    };
    function Ke(a) {
        if (a.rG) return a.rG;
        a.rG = {
            qG: "001",
            mG: bc("normal")
        };
        return a.rG
    }
    fa.update = function(a) {
        this.qs = {};
        for (var b = 0; b < this.jf.length; b++) {
            var c = this.jf[b],
            e = this.iM(c.Id);
            c.update(e, a)
        }
    };
    function Le(a, b, c) {
        this.bd = a;
        this.jf = b instanceof Sd ? [b] : b.slice(0);
        c = c || {};
        this.m = {
            W0: c.tips || "",
            RE: "",
            kc: c.minZoom || 4,
            qc: c.maxZoom || 18,
            m5: c.minZoom || 4,
            l5: c.maxZoom || 18,
            Lu: 256,
            cG: c.textColor || "black",
            CD: c.errorImageUrl || "",
            jb: new nb(new R( - 21364736, -16023552), new R(23855104, 19431424)),
            Dc: c.projection || new T
        };
        1 <= this.jf.length && (this.jf[0].Zw = p);
        A.extend(this.m, c)
    }
    A.extend(Le.prototype, {
        getName: x("bd"),
        At: function() {
            return this.m.W0
        },
        G4: function() {
            return this.m.RE
        },
        HY: function() {
            return this.jf[0]
        },
        W4: x("jf"),
        le: function() {
            return this.m.Lu
        },
        sf: function() {
            return this.m.kc
        },
        Ye: function() {
            return this.m.qc
        },
        setMaxZoom: function(a) {
            this.m.qc = a
        },
        Rm: function() {
            return this.m.cG
        },
        Bj: function() {
            return this.m.Dc
        },
        z4: function() {
            return this.m.CD
        },
        le: function() {
            return this.m.Lu
        },
        Wb: function(a) {
            return Math.pow(2, 18 - a)
        },
        nM: function(a) {
            return this.Wb(a) * this.le()
        },
        NF: function(a) {
            this.Bj().tO(a)
        }
    });
    var Me = [F.url.proto + F.url.domain.TILE_BASE_URLS[0], F.url.proto + F.url.domain.TILE_BASE_URLS[1], F.url.proto + F.url.domain.TILE_BASE_URLS[2], F.url.proto + F.url.domain.TILE_BASE_URLS[3]],
    Ne = [F.url.proto + F.url.domain.TILE_ONLINE_URLS[0] + "/tile/", F.url.proto + F.url.domain.TILE_ONLINE_URLS[1] + "/tile/", F.url.proto + F.url.domain.TILE_ONLINE_URLS[2] + "/tile/", F.url.proto + F.url.domain.TILE_ONLINE_URLS[3] + "/tile/"],
    Oe = {
        dark: "dl",
        light: "ll",
        normal: "pl"
    },
    Pe = new Sd;
    Pe.HO = p;
    Pe.getTilesUrl = function(a, b, c) {
        var e = a.x,
        a = a.y,
        f = bc("normal"),
        g = 1,
        c = Oe[c];
        this.map.$x() && (g = 2);
        e = this.map.ef.vm(e, b).Bg;
        return (Ne[Math.abs(e + a) % Ne.length] + "?qt=vtile&x=" + (e + "").replace(/-/gi, "M") + "&y=" + (a + "").replace(/-/gi, "M") + "&z=" + b + "&styles=" + c + "&scaler=" + g + (6 == A.ga.oa ? "&color_dep=32&colors=50": "") + "&udt=" + f + "&from=jsapi3_0").replace(/-(\d+)/gi, "M$1")
    };
    var Qa = new Le("\u5730\u56fe", Pe, {
        tips: "\u663e\u793a\u666e\u901a\u5730\u56fe",
        maxZoom: 19
    }),
    Qe = new Sd;
    Qe.UO = [F.url.proto + F.url.domain.TIlE_PERSPECT_URLS[0] + "/resource/mappic/", F.url.proto + F.url.domain.TIlE_PERSPECT_URLS[1] + "/resource/mappic/", F.url.proto + F.url.domain.TIlE_PERSPECT_URLS[2] + "/resource/mappic/", F.url.proto + F.url.domain.TIlE_PERSPECT_URLS[3] + "/resource/mappic/"];
    Qe.getTilesUrl = function(a, b) {
        var c = a.x,
        e = a.y,
        f = 256 * Math.pow(2, 20 - b),
        e = Math.round((9998336 - f * e) / f) - 1;
        return url = this.UO[Math.abs(c + e) % this.UO.length] + this.map.Qb + "/" + this.map.ex + "/3/lv" + (21 - b) + "/" + c + "," + e + ".jpg"
    };
    var Va = new Le("\u4e09\u7ef4", Qe, {
        tips: "\u663e\u793a\u4e09\u7ef4\u5730\u56fe",
        minZoom: 15,
        maxZoom: 20,
        textColor: "white",
        projection: new pb
    });
    Va.Wb = function(a) {
        return Math.pow(2, 20 - a)
    };
    Va.Kk = function(a) {
        if (!a) return "";
        var b = K.BC,
        c;
        for (c in b) if ( - 1 < a.search(c)) return b[c].Gy;
        return ""
    };
    Va.KL = function(a) {
        return {
            bj: 2,
            gz: 1,
            sz: 14,
            sh: 4
        } [a]
    };
    var Ue = new Sd({
        Zw: p
    });
    Ue.getTilesUrl = function(a, b) {
        var c = a.x,
        e = a.y;
        return (Me[Math.abs(c + e) % Me.length] + "u=x=" + c + ";y=" + e + ";z=" + b + ";v=009;type=sate&fm=46&udt=" + bc("satellite")).replace(/-(\d+)/gi, "M$1")
    };
    var Ya = new Le("\u536b\u661f", Ue, {
        tips: "\u663e\u793a\u536b\u661f\u5f71\u50cf",
        minZoom: 4,
        maxZoom: 19,
        textColor: "white"
    }),
    Ve = new Sd({
        transparentPng: p
    });
    Ve.getTilesUrl = function(a, b) {
        var c = a.x,
        e = a.y,
        f = bc("satelliteStreet");
        return (Ne[Math.abs(c + e) % Ne.length] + "?qt=vtile&x=" + (c + "").replace(/-/gi, "M") + "&y=" + (e + "").replace(/-/gi, "M") + "&z=" + b + "&styles=sl" + (6 == A.ga.oa ? "&color_dep=32&colors=50": "") + "&udt=" + f).replace(/-(\d+)/gi, "M$1")
    };
    var Xa = new Le("\u6df7\u5408", [Ue, Ve], {
        tips: "\u663e\u793a\u5e26\u6709\u8857\u9053\u7684\u536b\u661f\u5f71\u50cf",
        labelText: "\u8def\u7f51",
        minZoom: 4,
        maxZoom: 19,
        textColor: "white"
    });
    var We = 1,
    X = {};
    window.U1 = X;
    function Y(a, b) {
        A.lang.Ja.call(this);
        this.qd = {};
        this.wn(a);
        b = b || {};
        b.na = b.renderOptions || {};
        this.m = {
            na: {
                Aa: b.na.panel || s,
                map: b.na.map || s,
                Ag: b.na.autoViewport || p,
                ou: b.na.selectFirstResult,
                Tm: b.na.highlightMode,
                jc: b.na.enableDragging || t
            },
            cu: b.onSearchComplete || u(),
            GN: b.onMarkersSet || u(),
            FN: b.onInfoHtmlSet || u(),
            IN: b.onResultsHtmlSet || u(),
            EN: b.onGetBusListComplete || u(),
            DN: b.onGetBusLineComplete || u(),
            BN: b.onBusListHtmlSet || u(),
            AN: b.onBusLineHtmlSet || u(),
            hF: b.onPolylinesSet || u(),
            iq: b.reqFrom || ""
        };
        this.m.na.Ag = "undefined" != typeof b && "undefined" != typeof b.renderOptions && "undefined" != typeof b.renderOptions.autoViewport ? b.renderOptions.autoViewport: p;
        this.m.na.Aa = A.Ic(this.m.na.Aa)
    }
    A.xa(Y, A.lang.Ja);
    A.extend(Y.prototype, {
        getResults: function() {
            return this.Kc ? this.Yi: this.ka
        },
        enableAutoViewport: function() {
            this.m.na.Ag = p
        },
        disableAutoViewport: function() {
            this.m.na.Ag = t
        },
        wn: function(a) {
            a && (this.qd.src = a)
        },
        vu: function(a) {
            this.m.cu = a || u()
        },
        setMarkersSetCallback: function(a) {
            this.m.GN = a || u()
        },
        setPolylinesSetCallback: function(a) {
            this.m.hF = a || u()
        },
        setInfoHtmlSetCallback: function(a) {
            this.m.FN = a || u()
        },
        setResultsHtmlSetCallback: function(a) {
            this.m.IN = a || u()
        },
        Pm: x("Re")
    });
    var Xe = {
        WG: F.cd,
        lb: function(a, b, c, e, f) {
            this.E_(b);
            var g = (1E5 * Math.random()).toFixed(0);
            F._rd["_cbk" + g] = function(b) {
                b.result && b.result.error && 202 === b.result.error ? alert("\u8be5AK\u56e0\u4e3a\u6076\u610f\u884c\u4e3a\u5df2\u7ecf\u88ab\u7ba1\u7406\u5458\u5c01\u7981\uff01") : b.result && b.result.error && 403 === b.result.error ? F.Yp !== s && F.Yp.update("\u672a\u83b7\u5f97\u767e\u5ea6\u5730\u56fe\u5546\u7528\u6388\u6743\uff0c\u53ef\u80fd\u5bfc\u81f4\u90e8\u5206\u5730\u56fe\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u540e\u91cd\u8bd5\u3002") : (c = c || {},
                a && a(b, c), delete F._rd["_cbk" + g])
            };
            e = e || "";
            b = c && c.t1 ? Pb(b, encodeURI) : Pb(b, encodeURIComponent);
            this.WG = c && c.sL ? c.hO ? c.hO: F.Xp: F.cd;
            e = this.WG + e + "?" + b + "&ie=utf-8&oue=1&fromproduct=jsapi";
            f || (e += "&res=api");
            e += "&ak=" + qa;
            ra(e + ("&callback=BMap._rd._cbk" + g))
        },
        E_: function(a) {
            if (a.qt) {
                var b = "";
                switch (a.qt) {
                case "bt":
                    b = "z_qt|bt";
                    break;
                case "nav":
                    b = "z_qt|nav";
                    break;
                case "walk":
                    b = "z_qt|walk";
                    break;
                case "bse":
                    b = "z_qt|bse";
                    break;
                case "nse":
                    b = "z_qt|nse";
                    break;
                case "drag":
                    b = "z_qt|drag"
                }
                "" !== b && F.alog("cus.fire", "count", b)
            }
        }
    };
    window.j2 = Xe;
    F._rd = {};
    var jb = {};
    window.i2 = jb;
    jb.tF = function(a) {
        a = a.replace(/<\/?[^>]*>/g, "");
        return a = a.replace(/[ | ]* /g, " ")
    };
    jb.k_ = function(a) {
        return a.replace(/([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*),([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*)(,)/g, "$1,$2;")
    };
    jb.l_ = function(a, b) {
        return a.replace(RegExp("(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);)(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);){" + b + "}", "ig"), "$1")
    };
    var Ye = 2,
    Ze = 6,
    $e = 8,
    af = 2,
    bf = 3,
    cf = 6,
    df = 0,
    ef = "bt",
    ff = "nav",
    gf = "walk",
    hf = "bl",
    jf = "bsl",
    kf = "ride",
    lf = 15,
    mf = 18;
    F.I = window.Instance = A.lang.Uc;
    function nf(a, b, c) {
        A.lang.Ja.call(this);
        if (a) {
            this.bb = "object" == typeof a ? a: A.Ic(a);
            this.page = 1;
            this.Od = 100;
            this.qK = "pg";
            this.fg = 4;
            this.BK = b;
            this.update = p;
            a = {
                page: 1,
                h7: 100,
                Od: 100,
                fg: 4,
                qK: "pg",
                update: p
            };
            c || (c = a);
            for (var e in c)"undefined" != typeof c[e] && (this[e] = c[e]);
            this.Ba()
        }
    }
    A.extend(nf.prototype, {
        Ba: function() {
            this.za()
        },
        za: function() {
            this.YV();
            this.bb.innerHTML = this.xW()
        },
        YV: function() {
            isNaN(parseInt(this.page)) && (this.page = 1);
            isNaN(parseInt(this.Od)) && (this.Od = 1);
            1 > this.page && (this.page = 1);
            1 > this.Od && (this.Od = 1);
            this.page > this.Od && (this.page = this.Od);
            this.page = parseInt(this.page);
            this.Od = parseInt(this.Od)
        },
        N4: function() {
            location.search.match(RegExp("[?&]?" + this.qK + "=([^&]*)[&$]?", "gi"));
            this.page = RegExp.$1
        },
        xW: function() {
            var a = [],
            b = this.page - 1,
            c = this.page + 1;
            a.push('<p style="margin:0;padding:0;white-space:nowrap">');
            if (! (1 > b)) {
                if (this.page >= this.fg) {
                    var e;
                    a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp1}">\u9996\u9875</a></span>'.replace("{temp1}", "BMap.I('" + this.da + "').toPage(1);"))
                }
                a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp2}">\u4e0a\u4e00\u9875</a></span>'.replace("{temp2}", "BMap.I('" + this.da + "').toPage(" + b + ");"))
            }
            if (this.page < this.fg) e = 0 == this.page % this.fg ? this.page - this.fg - 1 : this.page - this.page % this.fg + 1,
            b = e + this.fg - 1;
            else {
                e = Math.floor(this.fg / 2);
                var f = this.fg % 2 - 1,
                b = this.Od > this.page + e ? this.page + e: this.Od;
                e = this.page - e - f
            }
            this.page > this.Od - this.fg && this.page >= this.fg && (e = this.Od - this.fg + 1, b = this.Od);
            for (f = e; f <= b; f++) 0 < f && (f == this.page ? a.push('<span style="margin-right:3px">' + f + "</span>") : 1 <= f && f <= this.Od && (e = '<span><a style="color:#7777cc;margin-right:3px" href="javascript:void(0)" onclick="{temp3}">[' + f + "]</a></span>", a.push(e.replace("{temp3}", "BMap.I('" + this.da + "').toPage(" + f + ");"))));
            c > this.Od || a.push('<span><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp4}">\u4e0b\u4e00\u9875</a></span>'.replace("{temp4}", "BMap.I('" + this.da + "').toPage(" + c + ");"));
            a.push("</p>");
            return a.join("")
        },
        toPage: function(a) {
            a = a ? a: 1;
            "function" == typeof this.BK && (this.BK(a), this.page = a);
            this.update && this.Ba()
        }
    });
    function lb(a, b) {
        Y.call(this, a, b);
        b = b || {};
        b.renderOptions = b.renderOptions || {};
        this.xn(b.pageCapacity);
        "undefined" != typeof b.renderOptions.selectFirstResult && !b.renderOptions.selectFirstResult ? this.aD() : this.uD();
        this.ua = [];
        this.Ff = [];
        this.La = -1;
        this.Qa = [];
        var c = this;
        Za.load("local",
        function() {
            c.Uz()
        },
        p)
    }
    A.xa(lb, Y, "LocalSearch");
    lb.Lq = 10;
    lb.d2 = 1;
    lb.Sn = 100;
    lb.KG = 2E3;
    lb.TG = 1E5;
    A.extend(lb.prototype, {
        search: function(a, b) {
            this.Qa.push({
                method: "search",
                arguments: [a, b]
            })
        },
        tn: function(a, b, c) {
            this.Qa.push({
                method: "searchInBounds",
                arguments: [a, b, c]
            })
        },
        oq: function(a, b, c, e) {
            this.Qa.push({
                method: "searchNearby",
                arguments: [a, b, c, e]
            })
        },
        we: function() {
            delete this.Ka;
            delete this.Re;
            delete this.ka;
            delete this.ra;
            this.La = -1;
            this.Xa();
            this.m.na.Aa && (this.m.na.Aa.innerHTML = "")
        },
        Sm: u(),
        uD: function() {
            this.m.na.ou = p
        },
        aD: function() {
            this.m.na.ou = t
        },
        xn: function(a) {
            this.m.Yk = "number" == typeof a && !isNaN(a) ? 1 > a ? lb.Lq: a > lb.Sn ? lb.Lq: a: lb.Lq
        },
        uf: function() {
            return this.m.Yk
        },
        toString: da("LocalSearch")
    });
    var of = lb.prototype;
    U(of, {
        clearResults: of.we,
        setPageCapacity: of.xn,
        getPageCapacity: of.uf,
        gotoPage: of.Sm,
        searchNearby: of.oq,
        searchInBounds: of.tn,
        search: of.search,
        enableFirstResultSelection: of.uD,
        disableFirstResultSelection: of.aD
    });
    function pf(a, b) {
        Y.call(this, a, b)
    }
    A.xa(pf, Y, "BaseRoute");
    A.extend(pf.prototype, {
        we: u()
    });
    function qf(a, b) {
        Y.call(this, a, b);
        b = b || {};
        this.yn(b.policy);
        this.JF(b.intercityPolicy);
        this.OF(b.transitTypePolicy);
        this.xn(b.pageCapacity);
        this.Eb = ef;
        this.Tn = We;
        this.ua = [];
        this.La = -1;
        this.m.Dl = b.enableTraffic || t;
        this.Qa = [];
        var c = this;
        Za.load("route",
        function() {
            c.Ed()
        })
    }
    qf.Sn = 100;
    qf.SP = [0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1];
    qf.TP = [0, 3, 4, 0, 0, 0, 5];
    A.xa(qf, pf, "TransitRoute");
    A.extend(qf.prototype, {
        yn: function(a) {
            this.m.Pd = 0 <= a && 5 >= a ? a: 0
        },
        JF: function(a) {
            this.m.Xm = 0 <= a && 2 >= a ? a: 0
        },
        OF: function(a) {
            this.m.Dn = 0 <= a && 2 >= a ? a: 0
        },
        TA: function(a, b) {
            this.Qa.push({
                method: "_internalSearch",
                arguments: [a, b]
            })
        },
        search: function(a, b) {
            this.Qa.push({
                method: "search",
                arguments: [a, b]
            })
        },
        xn: function(a) {
            if ("string" === typeof a && (a = parseInt(a, 10), isNaN(a))) {
                this.m.Yk = qf.Sn;
                return
            }
            this.m.Yk = "number" !== typeof a ? qf.Sn: 1 <= a && a <= qf.Sn ? Math.round(a) : qf.Sn
        },
        toString: da("TransitRoute"),
        Y2: function(a) {
            return a.replace(/\(.*\)/, "")
        }
    });
    var rf = qf.prototype;
    U(rf, {
        _internalSearch: rf.TA
    });
    function sf(a, b) {
        Y.call(this, a, b);
        this.ua = [];
        this.La = -1;
        this.Qa = [];
        var c = this,
        e = this.m.na;
        1 !== e.Tm && 2 !== e.Tm && (e.Tm = 1);
        this.ko = this.m.na.jc ? p: t;
        Za.load("route",
        function() {
            c.Ed()
        });
        this.ey && this.ey()
    }
    sf.hQ = " \u73af\u5c9b \u65e0\u5c5e\u6027\u9053\u8def \u4e3b\u8def \u9ad8\u901f\u8fde\u63a5\u8def \u4ea4\u53c9\u70b9\u5185\u8def\u6bb5 \u8fde\u63a5\u9053\u8def \u505c\u8f66\u573a\u5185\u90e8\u9053\u8def \u670d\u52a1\u533a\u5185\u90e8\u9053\u8def \u6865 \u6b65\u884c\u8857 \u8f85\u8def \u531d\u9053 \u5168\u5c01\u95ed\u9053\u8def \u672a\u5b9a\u4e49\u4ea4\u901a\u533a\u57df POI\u8fde\u63a5\u8def \u96a7\u9053 \u6b65\u884c\u9053 \u516c\u4ea4\u4e13\u7528\u9053 \u63d0\u524d\u53f3\u8f6c\u9053".split(" ");
    A.xa(sf, pf, "DWRoute");
    A.extend(sf.prototype, {
        search: function(a, b, c) {
            this.Qa.push({
                method: "search",
                arguments: [a, b, c]
            })
        }
    });
    function tf(a, b) {
        sf.call(this, a, b);
        b = b || {};
        this.m.Dl = b.enableTraffic || t;
        this.yn(b.policy);
        this.Eb = ff;
        this.Tn = bf;
        Ta(Ua(4, 1), ["service", "drive"])
    }
    A.xa(tf, sf, "DrivingRoute");
    tf.prototype.yn = function(a) {
        this.m.Pd = 0 <= a && 5 >= a ? a: 0
    };
    function uf(a, b) {
        sf.call(this, a, b);
        this.Eb = gf;
        this.Tn = af;
        this.ko = t;
        Ta(Ua(4, 4), ["service", "walk"])
    }
    A.xa(uf, sf, "WalkingRoute");
    function vf(a, b) {
        sf.call(this, a, b);
        b = b || {};
        this.m.Dl = b.enableTraffic || t;
        this.mT = b.renderOptions.lineType || 0;
        this.Eb = ff;
        this.Tn = bf;
        Ta(Ua(4, 2), ["service", "truck"])
    }
    A.xa(vf, sf, "TruckRoute");
    vf.prototype.yn = function(a) {
        this.m.Pd = 0 <= a && 5 >= a ? a: 0
    };
    function wf(a, b) {
        sf.call(this, a, b);
        this.Eb = kf;
        this.Tn = cf;
        this.ko = t;
        Ta(Ua(4, 3), ["service", "ride"])
    }
    A.xa(wf, sf, "RidingRoute");
    function xf(a, b) {
        A.lang.Ja.call(this);
        this.bg = [];
        this.$k = [];
        this.m = b;
        this.Ij = a;
        this.map = this.m.na.map || s;
        this.pO = this.m.pO;
        this.Fb = s;
        this.Ek = 0;
        this.$F = "";
        this.rf = 1;
        this.BD = "";
        this.jq = [0, 0, 0, 0, 0, 0, 0];
        this.dN = [];
        this.Ks = [1, 1, 1, 1, 1, 1, 1];
        this.bP = [1, 1, 1, 1, 1, 1, 1];
        this.kq = [0, 0, 0, 0, 0, 0, 0];
        this.nn = [0, 0, 0, 0, 0, 0, 0];
        this.Kb = [{
            B: "",
            Jd: 0,
            En: 0,
            x: 0,
            y: 0,
            sa: -1
        },
        {
            B: "",
            Jd: 0,
            En: 0,
            x: 0,
            y: 0,
            sa: -1
        },
        {
            B: "",
            Jd: 0,
            En: 0,
            x: 0,
            y: 0,
            sa: -1
        },
        {
            B: "",
            Jd: 0,
            En: 0,
            x: 0,
            y: 0,
            sa: -1
        },
        {
            B: "",
            Jd: 0,
            En: 0,
            x: 0,
            y: 0,
            sa: -1
        },
        {
            B: "",
            Jd: 0,
            En: 0,
            x: 0,
            y: 0,
            sa: -1
        },
        {
            B: "",
            Jd: 0,
            En: 0,
            x: 0,
            y: 0,
            sa: -1
        }];
        this.pi = -1;
        this.Nu = [];
        this.kG = [];
        Za.load("route", u())
    }
    A.lang.xa(xf, A.lang.Ja, "RouteAddr");
    var yf = navigator.userAgent;
    /ipad|iphone|ipod|iph/i.test(yf);
    var zf = /android/i.test(yf);
    function Af(a) {
        this.$e = a || {}
    }
    A.extend(Af.prototype, {
        oO: function(a, b, c) {
            var e = this;
            Za.load("route",
            function() {
                e.Ed(a, b, c)
            })
        }
    });
    function Bf(a) {
        this.m = {};
        A.extend(this.m, a);
        this.Qa = [];
        var b = this;
        Za.load("othersearch",
        function() {
            b.Ed()
        })
    }
    A.xa(Bf, A.lang.Ja, "Geocoder");
    A.extend(Bf.prototype, {
        Om: function(a, b, c) {
            this.Qa.push({
                method: "getPoint",
                arguments: [a, b, c]
            })
        },
        Lm: function(a, b, c) {
            this.Qa.push({
                method: "getLocation",
                arguments: [a, b, c]
            })
        },
        toString: da("Geocoder")
    });
    var Cf = Bf.prototype;
    U(Cf, {
        getPoint: Cf.Om,
        getLocation: Cf.Lm
    });
    function Geolocation(a) {
        a = a || {};
        this.M = {
            timeout: a.timeout || 1E4,
            maximumAge: a.maximumAge || 6E5,
            enableHighAccuracy: a.enableHighAccuracy || t,
            Si: a.SDKLocation || t
        };
        this.ue = [];
        var b = this;
        Za.load("othersearch",
        function() {
            for (var a = 0,
            e; e = b.ue[a]; a++) b[e.method].apply(b, e.arguments)
        })
    }
    A.extend(Geolocation.prototype, {
        getCurrentPosition: function(a, b) {
            this.ue.push({
                method: "getCurrentPosition",
                arguments: arguments
            })
        },
        getStatus: function() {
            return Ye
        },
        enableSDKLocation: function() {
            L() && (this.M.Si = p)
        },
        disableSDKLocation: function() {
            this.M.Si = t
        }
    });
    function Df(a) {
        a = a || {};
        a.na = a.renderOptions || {};
        this.m = {
            na: {
                map: a.na.map || s
            }
        };
        this.Qa = [];
        var b = this;
        Za.load("othersearch",
        function() {
            b.Ed()
        })
    }
    A.xa(Df, A.lang.Ja, "LocalCity");
    A.extend(Df.prototype, {
        get: function(a) {
            this.Qa.push({
                method: "get",
                arguments: [a]
            })
        },
        toString: da("LocalCity")
    });
    function Ef() {
        this.Qa = [];
        var a = this;
        Za.load("othersearch",
        function() {
            a.Ed()
        })
    }
    A.xa(Ef, A.lang.Ja, "Boundary");
    A.extend(Ef.prototype, {
        get: function(a, b) {
            this.Qa.push({
                method: "get",
                arguments: [a, b]
            })
        },
        toString: da("Boundary")
    });
    function Ff(a, b) {
        Y.call(this, a, b);
        this.eQ = hf;
        this.gQ = lf;
        this.dQ = jf;
        this.fQ = mf;
        this.Qa = [];
        Ta(Ua(4, 5), ["service", "bus"]);
        var c = this;
        Za.load("buslinesearch",
        function() {
            c.Ed()
        })
    }
    Ff.Sv = K.ta + "iw_plus.gif";
    Ff.aT = K.ta + "iw_minus.gif";
    Ff.TU = K.ta + "stop_icon.png";
    A.xa(Ff, Y);
    A.extend(Ff.prototype, {
        getBusList: function(a) {
            this.Qa.push({
                method: "getBusList",
                arguments: [a]
            })
        },
        getBusLine: function(a) {
            this.Qa.push({
                method: "getBusLine",
                arguments: [a]
            })
        },
        setGetBusListCompleteCallback: function(a) {
            this.m.EN = a || u()
        },
        setGetBusLineCompleteCallback: function(a) {
            this.m.DN = a || u()
        },
        setBusListHtmlSetCallback: function(a) {
            this.m.BN = a || u()
        },
        setBusLineHtmlSetCallback: function(a) {
            this.m.AN = a || u()
        },
        setPolylinesSetCallback: function(a) {
            this.m.hF = a || u()
        }
    });
    function Gf(a) {
        Y.call(this, a);
        a = a || {};
        this.fb = {
            input: a.input || s,
            sC: a.baseDom || s,
            types: a.types || [],
            cu: a.onSearchComplete || u()
        };
        this.qd.src = a.location || "\u5168\u56fd";
        this.oj = "";
        this.xg = s;
        this.rI = "";
        this.fj();
        Wa(Ma);
        var b = this;
        Za.load("autocomplete",
        function() {
            b.Ed()
        })
    }
    A.xa(Gf, Y, "Autocomplete");
    A.extend(Gf.prototype, {
        fj: u(),
        show: u(),
        aa: u(),
        PF: function(a) {
            this.fb.types = a
        },
        wn: function(a) {
            this.qd.src = a
        },
        search: ca("oj"),
        Ty: ca("rI"),
        vu: function(a) {
            this.fb.cu = a
        }
    });
    var $a;
    function Sa(a, b) {
        function c() {
            f.m.visible ? ("inter" === f.Oe && bb() && f.m.haveBreakId && f.m.indoorExitControl === p ? A.U.show(f.Er) : A.U.aa(f.Er), this.vd && this.m.closeControl && this.Jf && this.P && this.P.Ta() === this.R ? A.U.show(f.Jf) : A.U.aa(f.Jf), this.m.forceCloseControl && A.U.show(f.Jf), Ta(Ua(3, 5), ["layer", "pano"])) : (A.U.aa(f.Jf), A.U.aa(f.Er))
        }
        this.R = "string" == typeof a ? A.fa(a) : a;
        this.da = Hf++;
        this.m = {
            enableScrollWheelZoom: p,
            panoramaRenderer: Ra() ? "javascript": "flash",
            swfSrc: F.xh("main_domain_nocdn", "res/swf/") + "APILoader.swf",
            visible: p,
            indoorExitControl: p,
            indoorFloorControl: t,
            linksControl: p,
            clickOnRoad: p,
            navigationControl: p,
            closeControl: p,
            indoorSceneSwitchControl: p,
            albumsControl: t,
            albumsControlOptions: {},
            copyrightControlOptions: {},
            forceCloseControl: t,
            haveBreakId: t
        };
        var b = b || {},
        e;
        for (e in b) this.m[e] = b[e];
        b.closeControl === p && (this.m.forceCloseControl = p);
        b.useWebGL === t && Ra(t);
        this.Oa = {
            heading: 0,
            pitch: 0
        };
        this.so = [];
        this.Ob = this.hb = s;
        this.tk = this.Br();
        this.ua = [];
        this.Sc = 1;
        this.Oe = this.yT = this.$g = "";
        this.Ne = {};
        this.Vf = s;
        this.kh = [];
        this.Tr = [];
        "cvsRender" == this.tk || Ra() ? (this.mk = 90, this.ok = -90) : "cssRender" == this.tk && (this.mk = 45, this.ok = -45);
        this.Xr = t;
        var f = this,
        g = (1E5 * Math.random()).toFixed(0);
        F._rd = F._rd || {};
        F._rd["_cbk" + g] = function(a) {
            if (!a || a.error === l || a.error !== 0) Xc("PANORAMA");
            else {
                this.tk === "flashRender" ? Za.load("panoramaflash",
                function() {
                    f.fj()
                },
                p) : Za.load("panorama",
                function() {
                    f.ob()
                },
                p);
                b.Xe == "api" ? Wa(Ha) : Wa(Ia)
            }
            delete F._rd["_cbk" + g]
        };
        this.to = function() {
            Wc("PANORAMA", "BMap._rd._cbk" + g);
            this.to = u()
        };
        this.m.kT !== p && (this.to(), F.Vq("cus.fire", "count", "z_loadpanoramacount"));
        this.eU(this.R);
        this.addEventListener("id_changed",
        function() {
            Wa(Ga, {
                from: b.Xe
            })
        });
        this.tQ();
        this.addEventListener("indoorexit_options_changed", c);
        this.addEventListener("scene_type_changed", c);
        this.addEventListener("onclose_options_changed", c);
        this.addEventListener("onvisible_changed", c)
    }
    var If = 4,
    Jf = 1,
    Kf = 5,
    Hf = 0;
    A.lang.xa(Sa, A.lang.Ja, "Panorama");
    A.extend(Sa.prototype, {
        tQ: function() {
            var a = this,
            b = this.Jf = J("div");
            b.className = "pano_close";
            b.style.cssText = "z-index: 1201;display: none";
            b.title = "\u9000\u51fa\u5168\u666f";
            b.onclick = function() {
                a.aa()
            };
            this.R.appendChild(b);
            var c = this.Er = J("a");
            c.className = "pano_pc_indoor_exit";
            c.style.cssText = "z-index: 1201;display: none";
            c.innerHTML = '<span style="float:right;margin-right:12px;">\u51fa\u53e3</span>';
            c.title = "\u9000\u51fa\u5ba4\u5185\u666f";
            c.onclick = function() {
                a.wp()
            };
            this.R.appendChild(c);
            window.ActiveXObject && !document.addEventListener && (b.style.backgroundColor = "rgb(37,37,37)", c.style.backgroundColor = "rgb(37,37,37)")
        },
        wp: u(),
        eU: function(a) {
            var b, c;
            b = a.style;
            c = cb(a).position;
            "absolute" != c && "relative" != c && (b.position = "relative", b.zIndex = 0);
            if ("absolute" === c || "relative" === c) if (a = cb(a).zIndex, !a || "auto" === a) b.zIndex = 0
        },
        jY: x("so"),
        ac: x("hb"),
        KY: x("Cw"),
        FO: x("Cw"),
        ma: x("Ob"),
        Na: x("Oa"),
        la: x("Sc"),
        Gg: x("$g"),
        P4: function() {
            return this.U2 || []
        },
        I4: x("yT"),
        zt: x("Oe"),
        Xy: function(a) {
            a !== this.Oe && (this.Oe = a, this.dispatchEvent(new Q("onscene_type_changed")))
        },
        EO: function(a) {
            a !== Kf && (Kf = a)
        },
        zO: function(a) {
            a !== If && (If = a)
        },
        Gc: function(a, b, c) {
            "object" === typeof b && (c = b, b = l);
            a != this.hb && (this.Ml = this.hb, this.Nl = this.Ob, this.hb = a, this.Oe = b || "street", this.Ob = s, c && c.pov && this.zd(c.pov))
        },
        va: function(a) {
            a.Vb(this.Ob) || (this.Ml = this.hb, this.Nl = this.Ob, this.Ob = a, this.hb = s)
        },
        zd: function(a) {
            if (a) {
                var a = this.Oa.pitch,
                b = this.Oa.heading,
                b = this.UC(b);
                a > this.mk ? a = this.mk: a < this.ok && (a = this.ok);
                this.Xr = p;
                this.Oa.pitch = a;
                this.Oa.heading = b
            }
        },
        r0: function(a, b) {
            this.ok = 0 <= a ? 0 : a;
            this.mk = 0 >= b ? 0 : b
        },
        UC: function(a) {
            return a - 360 * Math.floor(a / 360)
        },
        Xc: function(a) {
            a != this.Sc && (a > If && (a = If), a < Jf && (a = Jf), a != this.Sc && (this.Sc = a), "cssRender" === this.tk && this.zd(this.Oa))
        },
        MB: function() {
            if (this.P) for (var a = this.P.Nx(), b = 0; b < a.length; b++)(a[b] instanceof W || a[b] instanceof Ad) && a[b].point && this.ua.push(a[b])
        },
        KF: ca("P"),
        uu: function(a) {
            this.Vf = a || "none"
        },
        Nj: function(a) {
            for (var b in a) {
                if ("object" == typeof a[b]) for (var c in a[b]) this.m[b][c] = a[b][c];
                else this.m[b] = a[b];
                a.closeControl === p && (this.m.forceCloseControl = p);
                a.closeControl === t && (this.m.forceCloseControl = t);
                switch (b) {
                case "linksControl":
                    this.dispatchEvent(new Q("onlinks_visible_changed"));
                    break;
                case "clickOnRoad":
                    this.dispatchEvent(new Q("onclickonroad_changed"));
                    break;
                case "navigationControl":
                    this.dispatchEvent(new Q("onnavigation_visible_changed"));
                    break;
                case "indoorSceneSwitchControl":
                    this.dispatchEvent(new Q("onindoor_default_switch_mode_changed"));
                    break;
                case "albumsControl":
                    this.dispatchEvent(new Q("onalbums_visible_changed"));
                    break;
                case "albumsControlOptions":
                    this.dispatchEvent(new Q("onalbums_options_changed"));
                    break;
                case "copyrightControlOptions":
                    this.dispatchEvent(new Q("oncopyright_options_changed"));
                    break;
                case "closeControl":
                    this.dispatchEvent(new Q("onclose_options_changed"));
                    break;
                case "indoorExitControl":
                    this.dispatchEvent(new Q("onindoorexit_options_changed"));
                    break;
                case "indoorFloorControl":
                    this.dispatchEvent(new Q("onindoorfloor_options_changed"))
                }
            }
        },
        Uk: function() {
            this.Vl.style.visibility = "hidden"
        },
        az: function() {
            this.Vl.style.visibility = "visible"
        },
        pX: function() {
            this.m.enableScrollWheelZoom = p
        },
        RW: function() {
            this.m.enableScrollWheelZoom = t
        },
        show: function() {
            this.m.visible = p
        },
        aa: function() {
            this.m.visible = t
        },
        Br: function() {
            return bb() && !L() && "javascript" != this.m.panoramaRenderer ? "flashRender": !L() && Yb() ? "cvsRender": "cssRender"
        },
        Ra: function(a) {
            this.Ne[a.rd] = a
        },
        Lb: function(a) {
            delete this.Ne[a]
        },
        Sx: function() {
            return this.m.visible
        },
        vh: function() {
            return new P(this.R.clientWidth, this.R.clientHeight)
        },
        Ta: x("R"),
        HL: function() {
            var a = F.xh("baidumap", "?"),
            b = this.ac();
            if (b) {
                var b = {
                    panotype: this.zt(),
                    heading: this.Na().heading,
                    pitch: this.Na().pitch,
                    pid: b,
                    panoid: b,
                    from: "api"
                },
                c;
                for (c in b) a += c + "=" + b[c] + "&"
            }
            return a.slice(0, -1)
        },
        Xx: function() {
            this.Nj({
                copyrightControlOptions: {
                    logoVisible: t
                }
            })
        },
        TF: function() {
            this.Nj({
                copyrightControlOptions: {
                    logoVisible: p
                }
            })
        },
        jC: function(a) {
            function b(a, b) {
                return function() {
                    a.Tr.push({
                        pN: b,
                        oN: arguments
                    })
                }
            }
            for (var c = a.getPanoMethodList(), e = "", f = 0, g = c.length; f < g; f++) e = c[f],
            this[e] = b(this, e);
            this.kh.push(a)
        },
        uF: function(a) {
            for (var b = this.kh.length; b--;) this.kh[b] === a && this.kh.splice(b, 1)
        },
        IF: u()
    });
    var Lf = Sa.prototype;
    U(Lf, {
        setId: Lf.Gc,
        setPosition: Lf.va,
        setPov: Lf.zd,
        setZoom: Lf.Xc,
        setOptions: Lf.Nj,
        getId: Lf.ac,
        getPosition: Lf.ma,
        getPov: Lf.Na,
        getZoom: Lf.la,
        getLinks: Lf.jY,
        getBaiduMapUrl: Lf.HL,
        hideMapLogo: Lf.Xx,
        showMapLogo: Lf.TF,
        enableDoubleClickZoom: Lf.W3,
        disableDoubleClickZoom: Lf.N3,
        enableScrollWheelZoom: Lf.pX,
        disableScrollWheelZoom: Lf.RW,
        show: Lf.show,
        hide: Lf.aa,
        addPlugin: Lf.jC,
        removePlugin: Lf.uF,
        getVisible: Lf.Sx,
        addOverlay: Lf.Ra,
        removeOverlay: Lf.Lb,
        getSceneType: Lf.zt,
        setPanoramaPOIType: Lf.uu,
        exitInter: Lf.wp,
        setInteractiveState: Lf.IF
    });
    U(window, {
        BMAP_PANORAMA_POI_HOTEL: "hotel",
        BMAP_PANORAMA_POI_CATERING: "catering",
        BMAP_PANORAMA_POI_MOVIE: "movie",
        BMAP_PANORAMA_POI_TRANSIT: "transit",
        BMAP_PANORAMA_POI_INDOOR_SCENE: "indoor_scene",
        BMAP_PANORAMA_POI_NONE: "none",
        BMAP_PANORAMA_INDOOR_SCENE: "inter",
        BMAP_PANORAMA_STREET_SCENE: "street"
    });
    function Mf() {
        A.lang.Ja.call(this);
        this.rd = "PanoramaOverlay_" + this.da;
        this.W = s;
        this.Va = p
    }
    A.lang.xa(Mf, A.lang.Ja, "PanoramaOverlayBase");
    A.extend(Mf.prototype, {
        L4: x("rd"),
        za: function() {
            aa("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        remove: function() {
            aa("remove\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        Uf: function() {
            aa("_setOverlayProperty\u65b9\u6cd5\u672a\u5b9e\u73b0")
        }
    });
    function Nf(a, b) {
        Mf.call(this);
        var c = {
            position: s,
            altitude: 2,
            displayDistance: p
        },
        b = b || {},
        e;
        for (e in b) c[e] = b[e];
        this.Ob = c.position;
        this.Zj = a;
        this.Wq = c.altitude;
        this.GR = c.displayDistance;
        this.cG = c.color;
        this.vM = c.hoverColor;
        this.backgroundColor = c.backgroundColor;
        this.tK = c.backgroundHoverColor;
        this.borderColor = c.borderColor;
        this.xK = c.borderHoverColor;
        this.fontSize = c.fontSize;
        this.padding = c.padding;
        this.wE = c.imageUrl;
        this.size = c.size;
        this.De = c.image;
        this.width = c.width;
        this.height = c.height;
        this.bZ = c.imageData;
        this.borderWidth = c.borderWidth
    }
    A.lang.xa(Nf, Mf, "PanoramaLabel");
    A.extend(Nf.prototype, {
        o4: x("borderWidth"),
        getImageData: x("bZ"),
        Rm: x("cG"),
        D4: x("vM"),
        k4: x("backgroundColor"),
        l4: x("tK"),
        m4: x("borderColor"),
        n4: x("xK"),
        B4: x("fontSize"),
        M4: x("padding"),
        E4: x("wE"),
        wb: x("size"),
        Hx: x("De"),
        va: function(a) {
            this.Ob = a;
            this.Uf("position", a)
        },
        ma: x("Ob"),
        Qc: function(a) {
            this.Zj = a;
            this.Uf("content", a)
        },
        Lk: x("Zj"),
        CF: function(a) {
            this.Wq = a;
            this.Uf("altitude", a)
        },
        zp: x("Wq"),
        Na: function() {
            var a = this.ma(),
            b = s,
            c = s;
            this.W && (c = this.W.ma());
            if (a && c) if (a.Vb(c)) b = this.W.Na();
            else {
                b = {};
                b.heading = Of(a.lng - c.lng, a.lat - c.lat) || 0;
                var a = b,
                c = this.zp(),
                e = this.no();
                a.pitch = Math.round(180 * (Math.atan(c / e) / Math.PI)) || 0
            }
            return b
        },
        no: function() {
            var a = 0,
            b, c;
            this.W && (b = this.W.ma(), (c = this.ma()) && !c.Vb(b) && (a = T.Mk(b, c)));
            return a
        },
        aa: function() {
            aa("hide\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        show: function() {
            aa("show\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        Uf: u()
    });
    var Pf = Nf.prototype;
    U(Pf, {
        setPosition: Pf.va,
        getPosition: Pf.ma,
        setContent: Pf.Qc,
        getContent: Pf.Lk,
        setAltitude: Pf.CF,
        getAltitude: Pf.zp,
        getPov: Pf.Na,
        show: Pf.show,
        hide: Pf.aa
    });
    function Qf(a, b) {
        Mf.call(this);
        var c = {
            icon: "",
            title: "",
            panoInfo: s,
            altitude: 2
        },
        b = b || {},
        e;
        for (e in b) c[e] = b[e];
        this.Ob = a;
        this.oI = c.icon;
        this.NJ = c.title;
        this.Wq = c.altitude;
        this.QT = c.panoInfo;
        this.Oa = {
            heading: 0,
            pitch: 0
        }
    }
    A.lang.xa(Qf, Mf, "PanoramaMarker");
    A.extend(Qf.prototype, {
        va: function(a) {
            this.Ob = a;
            this.Uf("position", a)
        },
        ma: x("Ob"),
        Hc: function(a) {
            this.NJ = a;
            this.Uf("title", a)
        },
        Ip: x("NJ"),
        Xb: function(a) {
            this.oI = icon;
            this.Uf("icon", a)
        },
        Cp: x("oI"),
        CF: function(a) {
            this.Wq = a;
            this.Uf("altitude", a)
        },
        zp: x("Wq"),
        gE: x("QT"),
        Na: function() {
            var a = s;
            if (this.W) {
                var a = this.W.ma(),
                b = this.ma(),
                a = Of(b.lng - a.lng, b.lat - a.lat);
                isNaN(a) && (a = 0);
                a = {
                    heading: a,
                    pitch: 0
                }
            } else a = this.Oa;
            return a
        },
        Uf: u()
    });
    var Rf = Qf.prototype;
    U(Rf, {
        setPosition: Rf.va,
        getPosition: Rf.ma,
        setTitle: Rf.Hc,
        getTitle: Rf.Ip,
        setAltitude: Rf.CF,
        getAltitude: Rf.zp,
        getPanoInfo: Rf.gE,
        getIcon: Rf.Cp,
        setIcon: Rf.Xb,
        getPov: Rf.Na
    });
    function Of(a, b) {
        var c = 0;
        if (0 !== a && 0 !== b) {
            var c = 180 * (Math.atan(a / b) / Math.PI),
            e = 0;
            0 < a && 0 > b && (e = 90);
            0 > a && 0 > b && (e = 180);
            0 > a && 0 < b && (e = 270);
            c = (c + 90) % 90 + e
        } else 0 === a ? c = 0 > b ? 180 : 0 : 0 === b && (c = 0 < a ? 90 : 270);
        return Math.round(c)
    }
    function Ra(a) {
        if ("boolean" === typeof Sf) return Sf;
        if (a === t || !window.WebGLRenderingContext) return Sf = t;
        if (A.platform.Fj) {
            a = 0;
            try {
                var b = s,
                c = navigator.userAgent.toLowerCase();
                0 < c.indexOf("android") && (b = (c.match(/android [\d._]+/gi) + "").replace(/[^0-9|_.]/gi, "").replace(/_/gi, "."), b = parseInt(b.split(".")[0], 10));
                a = b
            } catch(e) {
                console.error("\u83b7\u53d6\u5b89\u5353\u7248\u672c\u5931\u8d25 => " + e)
            }
            if (5 > a) return Sf = t
        }
        c = document.createElement("canvas");
        a = s;
        try {
            a = c.getContext("webgl")
        } catch(f) {
            Sf = t
        }
        return Sf = a === s ? t: p
    }
    var Sf;
    function Tf() {
        if ("boolean" === typeof Uf) return Uf;
        Uf = p;
        if (A.platform.HE) return p;
        var a = navigator.userAgent;
        return - 1 < a.indexOf("Chrome") || -1 < a.indexOf("SAMSUNG-GT-I9508") ? p: Uf = t
    }
    var Uf;
    function kd(a, b) {
        this.W = a || s;
        var c = this;
        c.W && c.ha();
        Za.load("pservice",
        function() {
            c.ZQ()
        });
        "api" == (b || {}).Xe ? Wa(Ka) : Wa(La);
        this.Dd = {
            getPanoramaById: [],
            getPanoramaByLocation: [],
            getVisiblePOIs: [],
            getRecommendPanosById: [],
            getPanoramaVersions: [],
            checkPanoSupportByCityCode: [],
            getPanoramaByPOIId: [],
            getCopyrightProviders: []
        }
    }
    F.Zk(function(a) {
        "flashRender" !== a.Br() && new kd(a, {
            Xe: "api"
        })
    });
    A.extend(kd.prototype, {
        ha: function() {
            function a(a) {
                if (a) {
                    if (a.id != b.Cw) {
                        b.FO(a.id);
                        b.ia = a;
                        Tf() || b.dispatchEvent(new Q("onthumbnail_complete"));
                        b.hb != s && (b.Nl = b._position);
                        for (var c in a) if (a.hasOwnProperty(c)) switch (b["_" + c] = a[c], c) {
                        case "position":
                            b.Ob = a[c];
                            break;
                        case "id":
                            b.hb = a[c];
                            break;
                        case "links":
                            b.so = a[c];
                            break;
                        case "zoom":
                            b.Sc = a[c]
                        }
                        if (b.Nl) {
                            var g = b.Nl,
                            i = b._position;
                            c = g.lat;
                            var k = i.lat,
                            m = Zb(k - c),
                            g = Zb(i.lng - g.lng);
                            c = Math.sin(m / 2) * Math.sin(m / 2) + Math.cos(Zb(c)) * Math.cos(Zb(k)) * Math.sin(g / 2) * Math.sin(g / 2);
                            b.HH = 6371E3 * 2 * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c))
                        }
                        c = new Q("ondataload");
                        b.show();
                        c.data = a;
                        b.dispatchEvent(c);
                        b.dispatchEvent(new Q("onposition_changed"));
                        b.dispatchEvent(new Q("onlinks_changed"));
                        b.dispatchEvent(new Q("oncopyright_changed"), {
                            copyright: a.copyright
                        });
                        a.tm ? (b.Nj({
                            haveBreakId: p
                        }), bb() && b.m.closeControl && A.U.show(b.Er)) : A.U.aa(b.Er)
                    }
                } else b.hb = b.Ml,
                b.Ob = b.Nl,
                b.dispatchEvent(new Q("onnoresult"))
            }
            var b = this.W,
            c = this;
            b.addEventListener("id_changed",
            function() {
                F.mz("y");
                c.Gp(b.ac(), a)
            });
            b.addEventListener("iid_changed",
            function() {
                F.mz("y");
                c.wg(kd.wl + "qt=idata&iid=" + b.JA + "&fn=",
                function(b) {
                    if (b && b.result && 0 == b.result.error) {
                        var b = b.content[0].interinfo,
                        f = {};
                        f.tm = b.BreakID;
                        for (var g = b.Defaultfloor,
                        i = s,
                        k = 0; k < b.Floors.length; k++) if (b.Floors[k].Floor == g) {
                            i = b.Floors[k];
                            break
                        }
                        f.id = i.StartID || i.Points[0].PID;
                        c.Gp(f.id, a, f)
                    }
                },
                p)
            });
            b.addEventListener("position_changed_inner",
            function() {
                F.mz("y");
                c.Aj(b.ma(), a)
            })
        },
        Gp: function(a, b) {
            this.Dd.getPanoramaById.push(arguments)
        },
        Aj: function(a, b, c) {
            this.Dd.getPanoramaByLocation.push(arguments)
        },
        qE: function(a, b, c, e) {
            this.Dd.getVisiblePOIs.push(arguments)
        },
        Qx: function(a, b) {
            this.Dd.getRecommendPanosById.push(arguments)
        },
        Px: function(a) {
            this.Dd.getPanoramaVersions.push(arguments)
        },
        zC: function(a, b) {
            this.Dd.checkPanoSupportByCityCode.push(arguments)
        },
        Ox: function(a, b) {
            this.Dd.getPanoramaByPOIId.push(arguments)
        },
        LL: function(a) {
            this.Dd.getCopyrightProviders.push(arguments)
        }
    });
    var Vf = kd.prototype;
    U(Vf, {
        getPanoramaById: Vf.Gp,
        getPanoramaByLocation: Vf.Aj,
        getPanoramaByPOIId: Vf.Ox
    });
    function jd(a) {
        Sd.call(this);
        "api" == (a || {}).Xe ? Wa(Ea) : Wa(Fa)
    }
    jd.aH = F.xh("pano", "");
    jd.prototype = new Sd;
    jd.prototype.getTilesUrl = function(a, b) {
        var c = jd.aH[(a.x + a.y) % jd.aH.length] + "?udt=20150114&qt=tile&styles=pl&x=" + a.x + "&y=" + a.y + "&z=" + b;
        A.ga.oa && 6 >= A.ga.oa && (c += "&color_dep=32");
        var e = Vb(c);
        e ? (e = Zc(e.path, {
            Qp: t
        }), c += "&" + e) : c = s;
        return c
    };
    jd.prototype.Rt = da(p);
    Wf.ae = new T;
    function Wf() {}
    A.extend(Wf, {
        SW: function(a, b, c) {
            c = A.lang.Uc(c);
            b = {
                data: b
            };
            "position_changed" == a && (b.data = Wf.ae.Lj(new S(b.data.mercatorX, b.data.mercatorY)));
            c.dispatchEvent(new Q("on" + a), b)
        }
    });
    var Xf = Wf;
    U(Xf, {
        dispatchFlashEvent: Xf.SW
    });
    var Yf = {
        VP: 50
    };
    Yf.fv = F.xh("pano")[0];
    Yf.cv = {
        width: 220,
        height: 60
    };
    A.extend(Yf, {
        EM: function(a, b, c, e) {
            if (!b || !c || !c.lngLat || !c.panoInstance) e();
            else {
                this.Ao === l && (this.Ao = new kd(s, {
                    Xe: "api"
                }));
                var f = this;
                this.Ao.zC(b,
                function(b) {
                    b ? f.Ao.Aj(c.lngLat, Yf.VP,
                    function(b) {
                        if (b && b.id) {
                            var g = b.id,
                            m = b.Fh,
                            b = b.Gh,
                            n = kd.ae.Lg(c.lngLat),
                            o = f.DS(n, {
                                x: m,
                                y: b
                            }),
                            m = f.WL(g, o, 0, Yf.cv.width, Yf.cv.height);
                            a.content = f.ES(a.content, m, c.titleTip, c.beforeDomId);
                            a.addEventListener("open",
                            function() {
                                ja.V(A.Ic("infoWndPano"), "click",
                                function() {
                                    c.panoInstance.Gc(g);
                                    c.panoInstance.show();
                                    c.panoInstance.zd({
                                        heading: o,
                                        pitch: 0
                                    })
                                })
                            })
                        }
                        e()
                    }) : e()
                })
            }
        },
        ES: function(a, b, c, e) {
            var c = c || "",
            f; ! e || !a.split(e)[0] ? (e = a, a = "") : (e = a.split(e)[0], f = e.lastIndexOf("<"), e = a.substring(0, f), a = a.substring(f));
            f = [];
            var g = Yf.cv.width,
            i = Yf.cv.height;
            f.push(e);
            f.push("<div id='infoWndPano' class='panoInfoBox' style='height:" + i + "px;width:" + g + "px; margin-top: -19px;'>");
            f.push("<img class='pano_thumnail_img' width='" + g + "' height='" + i + "' border='0' alt='" + c + "\u5916\u666f' title='" + c + "\u5916\u666f' src='" + b + "' onerror='Pano.PanoEntranceUtil.thumbnailNotFound(this, " + g + ", " + i + ");' />");
            f.push("<div class='panoInfoBoxTitleBg' style='width:" + g + "px;'></div><a href='javascript:void(0)' class='panoInfoBoxTitleContent' >\u8fdb\u5165\u5168\u666f&gt;&gt;</a>");
            f.push("</div>");
            f.push(a);
            return f.join("")
        },
        DS: function(a, b) {
            var c = 90 - 180 * Math.atan2(a.y - b.y, a.x - b.x) / Math.PI;
            0 > c && (c += 360);
            return c
        },
        WL: function(a, b, c, e, f) {
            var g = Yf.fv + "?qt=pr3d&fovy=75&quality=80&panoid={panoId}&heading={panoHeading}&pitch={panoPitch}&width={width}&height={height}",
            i = {
                panoId: a,
                panoHeading: b || 0,
                panoPitch: c || 0,
                width: e,
                height: f
            },
            g = g.replace(/\{(.*?)\}/g,
            function(a, b) {
                return i[b]
            });
            return (a = Vb(g)) ? (a = Zc(a.path, {
                Qp: t
            }), g + ("&" + a)) : s
        }
    });
    var Zf = document,
    $f = Math,
    ag = Zf.createElement("div").style,
    cg;
    a: {
        for (var dg = ["t", "webkitT", "MozT", "msT", "OT"], eg, fg = 0, gg = dg.length; fg < gg; fg++) if (eg = dg[fg] + "ransform", eg in ag) {
            cg = dg[fg].substr(0, dg[fg].length - 1);
            break a
        }
        cg = t
    }
    var hg = cg ? "-" + cg.toLowerCase() + "-": "",
    jg = ig("transform"),
    kg = ig("transitionProperty"),
    lg = ig("transitionDuration"),
    mg = ig("transformOrigin"),
    ng = ig("transitionTimingFunction"),
    og = ig("transitionDelay"),
    zf = /android/gi.test(navigator.appVersion),
    pg = /iphone|ipad/gi.test(navigator.appVersion),
    qg = /hp-tablet/gi.test(navigator.appVersion),
    rg = ig("perspective") in ag,
    sg = "ontouchstart" in window && !qg,
    tg = cg !== t,
    ug = ig("transition") in ag,
    vg = "onorientationchange" in window ? "orientationchange": "resize",
    wg = sg ? "touchstart": "mousedown",
    xg = sg ? "touchmove": "mousemove",
    yg = sg ? "touchend": "mouseup",
    zg = sg ? "touchcancel": "mouseup",
    Ag = cg === t ? t: {
        "": "transitionend",
        webkit: "webkitTransitionEnd",
        Moz: "transitionend",
        O: "otransitionend",
        ms: "MSTransitionEnd"
    } [cg],
    Bg = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(a) {
        return setTimeout(a, 1)
    },
    Cg = window.cancelRequestAnimationFrame || window.C7 || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout,
    Dg = rg ? " translateZ(0)": "";
    function Eg(a, b) {
        var c = this,
        e;
        c.Nn = "object" == typeof a ? a: Zf.getElementById(a);
        c.Nn.style.overflow = "hidden";
        c.Sb = c.Nn.children[0];
        c.options = {
            Mp: p,
            Fn: p,
            x: 0,
            y: 0,
            bp: p,
            LV: t,
            vy: p,
            VE: p,
            nl: p,
            Pi: t,
            a1: 0,
            bx: t,
            Ux: p,
            wi: p,
            Qi: p,
            HD: zf,
            Yx: pg,
            yX: pg && rg,
            zF: "",
            zoom: t,
            rl: 1,
            Gq: 4,
            UW: 2,
            AP: "scroll",
            Cu: t,
            dz: 1,
            HN: s,
            zN: function(a) {
                a.preventDefault()
            },
            KN: s,
            yN: s,
            JN: s,
            xN: s,
            zy: s,
            LN: s,
            CN: s,
            cq: s,
            MN: s,
            bq: s
        };
        for (e in b) c.options[e] = b[e];
        c.x = c.options.x;
        c.y = c.options.y;
        c.options.nl = tg && c.options.nl;
        c.options.wi = c.options.Mp && c.options.wi;
        c.options.Qi = c.options.Fn && c.options.Qi;
        c.options.zoom = c.options.nl && c.options.zoom;
        c.options.Pi = ug && c.options.Pi;
        c.options.zoom && zf && (Dg = "");
        c.Sb.style[kg] = c.options.nl ? hg + "transform": "top left";
        c.Sb.style[lg] = "0";
        c.Sb.style[mg] = "0 0";
        c.options.Pi && (c.Sb.style[ng] = "cubic-bezier(0.33,0.66,0.66,1)");
        c.options.nl ? c.Sb.style[jg] = "translate(" + c.x + "px," + c.y + "px)" + Dg: c.Sb.style.cssText += ";position:absolute;top:" + c.y + "px;left:" + c.x + "px";
        c.options.Pi && (c.options.HD = p);
        c.refresh();
        c.ha(vg, window);
        c.ha(wg); ! sg && "none" != c.options.AP && (c.ha("DOMMouseScroll"), c.ha("mousewheel"));
        c.options.bx && (c.XV = setInterval(function() {
            c.XQ()
        },
        500));
        this.options.Ux && (Event.prototype.stopImmediatePropagation || (document.body.removeEventListener = function(a, b, c) {
            var e = Node.prototype.removeEventListener;
            a === "click" ? e.call(document.body, a, b.uM || b, c) : e.call(document.body, a, b, c)
        },
        document.body.addEventListener = function(a, b, c) {
            var e = Node.prototype.addEventListener;
            a === "click" ? e.call(document.body, a, b.uM || (b.uM = function(a) {
                a.D_ || b(a)
            }), c) : e.call(document.body, a, b, c)
        }), c.ha("click", document.body, p))
    }
    Eg.prototype = {
        enabled: p,
        x: 0,
        y: 0,
        Oj: [],
        scale: 1,
        PC: 0,
        QC: 0,
        af: [],
        zf: [],
        rC: s,
        qz: 0,
        handleEvent: function(a) {
            switch (a.type) {
            case wg:
                if (!sg && 0 !== a.button) break;
                this.vw(a);
                break;
            case xg:
                this.AT(a);
                break;
            case yg:
            case zg:
                this.Bv(a);
                break;
            case vg:
                this.FB();
                break;
            case "DOMMouseScroll":
            case "mousewheel":
                this.eV(a);
                break;
            case Ag:
                this.aV(a);
                break;
            case "click":
                this.gR(a)
            }
        },
        XQ: function() { ! this.Eh && (!this.sl && !(this.qm || this.Sy == this.Sb.offsetWidth * this.scale && this.nq == this.Sb.offsetHeight * this.scale)) && this.refresh()
        },
        lw: function(a) {
            var b;
            this[a + "Scrollbar"] ? (this[a + "ScrollbarWrapper"] || (b = Zf.createElement("div"), this.options.zF ? b.className = this.options.zF + a.toUpperCase() : b.style.cssText = "position:absolute;z-index:100;" + ("h" == a ? "height:7px;bottom:1px;left:2px;right:" + (this.Qi ? "7": "2") + "px": "width:7px;bottom:" + (this.wi ? "7": "2") + "px;top:2px;right:1px"), b.style.cssText += ";pointer-events:none;" + hg + "transition-property:opacity;" + hg + "transition-duration:" + (this.options.yX ? "350ms": "0") + ";overflow:hidden;opacity:" + (this.options.Yx ? "0": "1"), this.Nn.appendChild(b), this[a + "ScrollbarWrapper"] = b, b = Zf.createElement("div"), this.options.zF || (b.style.cssText = "position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);" + hg + "background-clip:padding-box;" + hg + "box-sizing:border-box;" + ("h" == a ? "height:100%": "width:100%") + ";" + hg + "border-radius:3px;border-radius:3px"), b.style.cssText += ";pointer-events:none;" + hg + "transition-property:" + hg + "transform;" + hg + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);" + hg + "transition-duration:0;" + hg + "transform: translate(0,0)" + Dg, this.options.Pi && (b.style.cssText += ";" + hg + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"), this[a + "ScrollbarWrapper"].appendChild(b), this[a + "ScrollbarIndicator"] = b), "h" == a ? (this.qM = this.rM.clientWidth, this.UY = $f.max($f.round(this.qM * this.qM / this.Sy), 8), this.TY.style.width = this.UY + "px") : (this.rP = this.sP.clientHeight, this.x1 = $f.max($f.round(this.rP * this.rP / this.nq), 8), this.w1.style.height = this.x1 + "px"), this.GB(a, p)) : this[a + "ScrollbarWrapper"] && (tg && (this[a + "ScrollbarIndicator"].style[jg] = ""), this[a + "ScrollbarWrapper"].parentNode.removeChild(this[a + "ScrollbarWrapper"]), this[a + "ScrollbarWrapper"] = s, this[a + "ScrollbarIndicator"] = s)
        },
        FB: function() {
            var a = this;
            setTimeout(function() {
                a.refresh()
            },
            zf ? 200 : 0)
        },
        Wr: function(a, b) {
            this.sl || (a = this.Mp ? a: 0, b = this.Fn ? b: 0, this.options.nl ? this.Sb.style[jg] = "translate(" + a + "px," + b + "px) scale(" + this.scale + ")" + Dg: (a = $f.round(a), b = $f.round(b), this.Sb.style.left = a + "px", this.Sb.style.top = b + "px"), this.x = a, this.y = b, this.GB("h"), this.GB("v"))
        },
        GB: function(a, b) {
            var c = "h" == a ? this.x: this.y;
            this[a + "Scrollbar"] && (c *= this[a + "ScrollbarProp"], 0 > c ? (this.options.HD || (c = this[a + "ScrollbarIndicatorSize"] + $f.round(3 * c), 8 > c && (c = 8), this[a + "ScrollbarIndicator"].style["h" == a ? "width": "height"] = c + "px"), c = 0) : c > this[a + "ScrollbarMaxScroll"] && (this.options.HD ? c = this[a + "ScrollbarMaxScroll"] : (c = this[a + "ScrollbarIndicatorSize"] - $f.round(3 * (c - this[a + "ScrollbarMaxScroll"])), 8 > c && (c = 8), this[a + "ScrollbarIndicator"].style["h" == a ? "width": "height"] = c + "px", c = this[a + "ScrollbarMaxScroll"] + (this[a + "ScrollbarIndicatorSize"] - c))), this[a + "ScrollbarWrapper"].style[og] = "0", this[a + "ScrollbarWrapper"].style.opacity = b && this.options.Yx ? "0": "1", this[a + "ScrollbarIndicator"].style[jg] = "translate(" + ("h" == a ? c + "px,0)": "0," + c + "px)") + Dg)
        },
        gR: function(a) {
            if (a.ZR === p) return this.fC = a.target,
            this.zx = Date.now(),
            p;
            if (this.fC && this.zx) {
                if (600 < Date.now() - this.zx) return this.zx = this.fC = s,
                p
            } else {
                for (var b = a.target; b != this.Sb && b != document.body;) b = b.parentNode;
                if (b == document.body) return p
            }
            for (b = a.target; 1 != b.nodeType;) b = b.parentNode;
            b = b.tagName.toLowerCase();
            if ("select" != b && "input" != b && "textarea" != b) return a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.D_ = p,
            a.stopPropagation(),
            a.preventDefault(),
            this.zx = this.fC = s,
            t
        },
        vw: function(a) {
            var b = sg ? a.touches[0] : a,
            c,
            e;
            if (this.enabled) {
                this.options.zN && this.options.zN.call(this, a); (this.options.Pi || this.options.zoom) && this.RJ(0);
                this.sl = this.qm = this.Eh = t;
                this.ZC = this.YC = this.Ow = this.Nw = this.dD = this.cD = 0;
                this.options.zoom && (sg && 1 < a.touches.length) && (e = $f.abs(a.touches[0].pageX - a.touches[1].pageX), c = $f.abs(a.touches[0].pageY - a.touches[1].pageY), this.c1 = $f.sqrt(e * e + c * c), this.By = $f.abs(a.touches[0].pageX + a.touches[1].pageX - 2 * this.tG) / 2 - this.x, this.Cy = $f.abs(a.touches[0].pageY + a.touches[1].pageY - 2 * this.uG) / 2 - this.y, this.options.cq && this.options.cq.call(this, a));
                if (this.options.vy && (this.options.nl ? (c = getComputedStyle(this.Sb, s)[jg].replace(/[^0-9\-.,]/g, "").split(","), e = +(c[12] || c[4]), c = +(c[13] || c[5])) : (e = +getComputedStyle(this.Sb, s).left.replace(/[^0-9-]/g, ""), c = +getComputedStyle(this.Sb, s).top.replace(/[^0-9-]/g, "")), e != this.x || c != this.y)) this.options.Pi ? this.ee(Ag) : Cg(this.rC),
                this.Oj = [],
                this.Wr(e, c),
                this.options.zy && this.options.zy.call(this);
                this.Pw = this.x;
                this.Qw = this.y;
                this.Gu = this.x;
                this.Hu = this.y;
                this.Fh = b.pageX;
                this.Gh = b.pageY;
                this.startTime = a.timeStamp || Date.now();
                this.options.KN && this.options.KN.call(this, a);
                this.ha(xg, window);
                this.ha(yg, window);
                this.ha(zg, window)
            }
        },
        AT: function(a) {
            var b = sg ? a.touches[0] : a,
            c = b.pageX - this.Fh,
            e = b.pageY - this.Gh,
            f = this.x + c,
            g = this.y + e,
            i = a.timeStamp || Date.now();
            this.options.yN && this.options.yN.call(this, a);
            if (this.options.zoom && sg && 1 < a.touches.length) f = $f.abs(a.touches[0].pageX - a.touches[1].pageX),
            g = $f.abs(a.touches[0].pageY - a.touches[1].pageY),
            this.b1 = $f.sqrt(f * f + g * g),
            this.sl = p,
            b = 1 / this.c1 * this.b1 * this.scale,
            b < this.options.rl ? b = 0.5 * this.options.rl * Math.pow(2, b / this.options.rl) : b > this.options.Gq && (b = 2 * this.options.Gq * Math.pow(0.5, this.options.Gq / b)),
            this.Up = b / this.scale,
            f = this.By - this.By * this.Up + this.x,
            g = this.Cy - this.Cy * this.Up + this.y,
            this.Sb.style[jg] = "translate(" + f + "px," + g + "px) scale(" + b + ")" + Dg,
            this.options.MN && this.options.MN.call(this, a);
            else {
                this.Fh = b.pageX;
                this.Gh = b.pageY;
                if (0 < f || f < this.qe) f = this.options.bp ? this.x + c / 2 : 0 <= f || 0 <= this.qe ? 0 : this.qe;
                if (g > this.xf || g < this.yd) g = this.options.bp ? this.y + e / 2 : g >= this.xf || 0 <= this.yd ? this.xf: this.yd;
                this.cD += c;
                this.dD += e;
                this.Nw = $f.abs(this.cD);
                this.Ow = $f.abs(this.dD);
                6 > this.Nw && 6 > this.Ow || (this.options.VE && (this.Nw > this.Ow + 5 ? (g = this.y, e = 0) : this.Ow > this.Nw + 5 && (f = this.x, c = 0)), this.Eh = p, this.Wr(f, g), this.YC = 0 < c ? -1 : 0 > c ? 1 : 0, this.ZC = 0 < e ? -1 : 0 > e ? 1 : 0, 300 < i - this.startTime && (this.startTime = i, this.Gu = this.x, this.Hu = this.y), this.options.JN && this.options.JN.call(this, a))
            }
        },
        Bv: function(a) {
            if (! (sg && 0 !== a.touches.length)) {
                var b = this,
                c = sg ? a.changedTouches[0] : a,
                e,
                f,
                g = {
                    Ia: 0,
                    time: 0
                },
                i = {
                    Ia: 0,
                    time: 0
                },
                k = (a.timeStamp || Date.now()) - b.startTime;
                e = b.x;
                f = b.y;
                b.ee(xg, window);
                b.ee(yg, window);
                b.ee(zg, window);
                b.options.xN && b.options.xN.call(b, a);
                if (b.sl) e = b.scale * b.Up,
                e = Math.max(b.options.rl, e),
                e = Math.min(b.options.Gq, e),
                b.Up = e / b.scale,
                b.scale = e,
                b.x = b.By - b.By * b.Up + b.x,
                b.y = b.Cy - b.Cy * b.Up + b.y,
                b.Sb.style[lg] = "200ms",
                b.Sb.style[jg] = "translate(" + b.x + "px," + b.y + "px) scale(" + b.scale + ")" + Dg,
                b.sl = t,
                b.refresh(),
                b.options.bq && b.options.bq.call(b, a);
                else {
                    if (b.Eh) {
                        if (300 > k && b.options.vy) {
                            g = e ? b.FI(e - b.Gu, k, -b.x, b.Sy - b.Wu + b.x, b.options.bp ? b.Wu: 0) : g;
                            i = f ? b.FI(f - b.Hu, k, -b.y, 0 > b.yd ? b.nq - b.On + b.y - b.xf: 0, b.options.bp ? b.On: 0) : i;
                            e = b.x + g.Ia;
                            f = b.y + i.Ia;
                            if (0 < b.x && 0 < e || b.x < b.qe && e < b.qe) g = {
                                Ia: 0,
                                time: 0
                            };
                            if (b.y > b.xf && f > b.xf || b.y < b.yd && f < b.yd) i = {
                                Ia: 0,
                                time: 0
                            }
                        }
                        g.Ia || i.Ia ? (c = $f.max($f.max(g.time, i.time), 10), b.options.Cu && (g = e - b.Pw, i = f - b.Qw, $f.abs(g) < b.options.dz && $f.abs(i) < b.options.dz ? b.scrollTo(b.Pw, b.Qw, 200) : (g = b.EJ(e, f), e = g.x, f = g.y, c = $f.max(g.time, c))), b.scrollTo($f.round(e), $f.round(f), c)) : b.options.Cu ? (g = e - b.Pw, i = f - b.Qw, $f.abs(g) < b.options.dz && $f.abs(i) < b.options.dz ? b.scrollTo(b.Pw, b.Qw, 200) : (g = b.EJ(b.x, b.y), (g.x != b.x || g.y != b.y) && b.scrollTo(g.x, g.y, g.time))) : b.Do(200)
                    } else {
                        if (sg) if (b.aL && b.options.zoom) clearTimeout(b.aL),
                        b.aL = s,
                        b.options.cq && b.options.cq.call(b, a),
                        b.zoom(b.Fh, b.Gh, 1 == b.scale ? b.options.UW: 1),
                        b.options.bq && setTimeout(function() {
                            b.options.bq.call(b, a)
                        },
                        200);
                        else if (this.options.Ux) {
                            for (e = c.target; 1 != e.nodeType;) e = e.parentNode;
                            f = e.tagName.toLowerCase();
                            "select" != f && "input" != f && "textarea" != f ? (f = Zf.createEvent("MouseEvents"), f.initMouseEvent("click", p, p, a.view, 1, c.screenX, c.screenY, c.clientX, c.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, s), f.ZR = p, e.dispatchEvent(f)) : e.focus()
                        }
                        b.Do(400)
                    }
                    b.options.LN && b.options.LN.call(b, a)
                }
            }
        },
        Do: function(a) {
            var b = 0 <= this.x ? 0 : this.x < this.qe ? this.qe: this.x,
            c = this.y >= this.xf || 0 < this.yd ? this.xf: this.y < this.yd ? this.yd: this.y;
            if (b == this.x && c == this.y) {
                if (this.Eh && (this.Eh = t, this.options.zy && this.options.zy.call(this)), this.wi && this.options.Yx && ("webkit" == cg && (this.rM.style[og] = "300ms"), this.rM.style.opacity = "0"), this.Qi && this.options.Yx)"webkit" == cg && (this.sP.style[og] = "300ms"),
                this.sP.style.opacity = "0"
            } else this.scrollTo(b, c, a || 0)
        },
        eV: function(a) {
            var b = this,
            c, e;
            if ("wheelDeltaX" in a) c = a.wheelDeltaX / 12,
            e = a.wheelDeltaY / 12;
            else if ("wheelDelta" in a) c = e = a.wheelDelta / 12;
            else if ("detail" in a) c = e = 3 * -a.detail;
            else return;
            if ("zoom" == b.options.AP) {
                if (e = b.scale * Math.pow(2, 1 / 3 * (e ? e / Math.abs(e) : 0)), e < b.options.rl && (e = b.options.rl), e > b.options.Gq && (e = b.options.Gq), e != b.scale) ! b.qz && b.options.cq && b.options.cq.call(b, a),
                b.qz++,
                b.zoom(a.pageX, a.pageY, e, 400),
                setTimeout(function() {
                    b.qz--; ! b.qz && b.options.bq && b.options.bq.call(b, a)
                },
                400)
            } else c = b.x + c,
            e = b.y + e,
            0 < c ? c = 0 : c < b.qe && (c = b.qe),
            e > b.xf ? e = b.xf: e < b.yd && (e = b.yd),
            0 > b.yd && b.scrollTo(c, e, 0)
        },
        aV: function(a) {
            a.target == this.Sb && (this.ee(Ag), this.SB())
        },
        SB: function() {
            var a = this,
            b = a.x,
            c = a.y,
            e = Date.now(),
            f,
            g,
            i;
            a.qm || (a.Oj.length ? (f = a.Oj.shift(), f.x == b && f.y == c && (f.time = 0), a.qm = p, a.Eh = p, a.options.Pi) ? (a.RJ(f.time), a.Wr(f.x, f.y), a.qm = t, f.time ? a.ha(Ag) : a.Do(0)) : (i = function() {
                var k = Date.now(),
                m;
                if (k >= e + f.time) {
                    a.Wr(f.x, f.y);
                    a.qm = t;
                    a.options.c_ && a.options.c_.call(a);
                    a.SB()
                } else {
                    k = (k - e) / f.time - 1;
                    g = $f.sqrt(1 - k * k);
                    k = (f.x - b) * g + b;
                    m = (f.y - c) * g + c;
                    a.Wr(k, m);
                    if (a.qm) a.rC = Bg(i)
                }
            },
            i()) : a.Do(400))
        },
        RJ: function(a) {
            a += "ms";
            this.Sb.style[lg] = a;
            this.wi && (this.TY.style[lg] = a);
            this.Qi && (this.w1.style[lg] = a)
        },
        FI: function(a, b, c, e, f) {
            var b = $f.abs(a) / b,
            g = b * b / 0.0012;
            0 < a && g > c ? (c += f / (6 / (6.0E-4 * (g / b))), b = b * c / g, g = c) : 0 > a && g > e && (e += f / (6 / (6.0E-4 * (g / b))), b = b * e / g, g = e);
            return {
                Ia: g * (0 > a ? -1 : 1),
                time: $f.round(b / 6.0E-4)
            }
        },
        qk: function(a) {
            for (var b = -a.offsetLeft,
            c = -a.offsetTop; a = a.offsetParent;) b -= a.offsetLeft,
            c -= a.offsetTop;
            a != this.Nn && (b *= this.scale, c *= this.scale);
            return {
                left: b,
                top: c
            }
        },
        EJ: function(a, b) {
            var c, e, f;
            f = this.af.length - 1;
            c = 0;
            for (e = this.af.length; c < e; c++) if (a >= this.af[c]) {
                f = c;
                break
            }
            f == this.PC && (0 < f && 0 > this.YC) && f--;
            a = this.af[f];
            e = (e = $f.abs(a - this.af[this.PC])) ? 500 * ($f.abs(this.x - a) / e) : 0;
            this.PC = f;
            f = this.zf.length - 1;
            for (c = 0; c < f; c++) if (b >= this.zf[c]) {
                f = c;
                break
            }
            f == this.QC && (0 < f && 0 > this.ZC) && f--;
            b = this.zf[f];
            c = (c = $f.abs(b - this.zf[this.QC])) ? 500 * ($f.abs(this.y - b) / c) : 0;
            this.QC = f;
            f = $f.round($f.max(e, c)) || 200;
            return {
                x: a,
                y: b,
                time: f
            }
        },
        ha: function(a, b, c) { (b || this.Sb).addEventListener(a, this, !!c)
        },
        ee: function(a, b, c) { (b || this.Sb).removeEventListener(a, this, !!c)
        },
        WC: ha(2),
        refresh: function() {
            var a, b, c, e = 0;
            b = 0;
            this.scale < this.options.rl && (this.scale = this.options.rl);
            this.Wu = this.Nn.clientWidth || 1;
            this.On = this.Nn.clientHeight || 1;
            this.xf = -this.options.a1 || 0;
            this.Sy = $f.round(this.Sb.offsetWidth * this.scale);
            this.nq = $f.round((this.Sb.offsetHeight + this.xf) * this.scale);
            this.qe = this.Wu - this.Sy;
            this.yd = this.On - this.nq + this.xf;
            this.ZC = this.YC = 0;
            this.options.HN && this.options.HN.call(this);
            this.Mp = this.options.Mp && 0 > this.qe;
            this.Fn = this.options.Fn && (!this.options.LV && !this.Mp || this.nq > this.On);
            this.wi = this.Mp && this.options.wi;
            this.Qi = this.Fn && this.options.Qi && this.nq > this.On;
            a = this.qk(this.Nn);
            this.tG = -a.left;
            this.uG = -a.top;
            if ("string" == typeof this.options.Cu) {
                this.af = [];
                this.zf = [];
                c = this.Sb.querySelectorAll(this.options.Cu);
                a = 0;
                for (b = c.length; a < b; a++) e = this.qk(c[a]),
                e.left += this.tG,
                e.top += this.uG,
                this.af[a] = e.left < this.qe ? this.qe: e.left * this.scale,
                this.zf[a] = e.top < this.yd ? this.yd: e.top * this.scale
            } else if (this.options.Cu) {
                for (this.af = []; e >= this.qe;) this.af[b] = e,
                e -= this.Wu,
                b++;
                this.qe % this.Wu && (this.af[this.af.length] = this.qe - this.af[this.af.length - 1] + this.af[this.af.length - 1]);
                b = e = 0;
                for (this.zf = []; e >= this.yd;) this.zf[b] = e,
                e -= this.On,
                b++;
                this.yd % this.On && (this.zf[this.zf.length] = this.yd - this.zf[this.zf.length - 1] + this.zf[this.zf.length - 1])
            }
            this.lw("h");
            this.lw("v");
            this.sl || (this.Sb.style[lg] = "0", this.Do(400))
        },
        scrollTo: function(a, b, c, e) {
            var f = a;
            this.stop();
            f.length || (f = [{
                x: a,
                y: b,
                time: c,
                F_: e
            }]);
            a = 0;
            for (b = f.length; a < b; a++) f[a].F_ && (f[a].x = this.x - f[a].x, f[a].y = this.y - f[a].y),
            this.Oj.push({
                x: f[a].x,
                y: f[a].y,
                time: f[a].time || 0
            });
            this.SB()
        },
        disable: function() {
            this.stop();
            this.Do(0);
            this.enabled = t;
            this.ee(xg, window);
            this.ee(yg, window);
            this.ee(zg, window)
        },
        enable: function() {
            this.enabled = p
        },
        stop: function() {
            this.options.Pi ? this.ee(Ag) : Cg(this.rC);
            this.Oj = [];
            this.qm = this.Eh = t
        },
        zoom: function(a, b, c, e) {
            var f = c / this.scale;
            this.options.nl && (this.sl = p, e = e === l ? 200 : e, a = a - this.tG - this.x, b = b - this.uG - this.y, this.x = a - a * f + this.x, this.y = b - b * f + this.y, this.scale = c, this.refresh(), this.x = 0 < this.x ? 0 : this.x < this.qe ? this.qe: this.x, this.y = this.y > this.xf ? this.xf: this.y < this.yd ? this.yd: this.y, this.Sb.style[lg] = e + "ms", this.Sb.style[jg] = "translate(" + this.x + "px," + this.y + "px) scale(" + c + ")" + Dg, this.sl = t)
        }
    };
    function ig(a) {
        if ("" === cg) return a;
        a = a.charAt(0).toUpperCase() + a.substr(1);
        return cg + a
    }
    ag = s;
    function Fg(a) {
        this.m = {
            anchor: cd,
            offset: new P(0, 0),
            maxWidth: "100%",
            imageHeight: 80
        };
        var a = a || {},
        b;
        for (b in a) this.m[b] = a[b];
        this.fm = new kd(s, {
            Xe: "api"
        });
        this.rk = [];
        this.W = s;
        this.ng = {
            height: this.m.imageHeight,
            width: this.m.imageHeight * Gg
        };
        this.Yc = this.HB = this.tm = this.ed = s
    }
    var Hg = [0, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 5, 5, 5, 6, 6, 7, 8, 8, 8, 9, 10],
    Ig = "\u5176\u4ed6 \u6b63\u95e8 \u623f\u578b \u8bbe\u65bd \u6b63\u95e8 \u9910\u996e\u8bbe\u65bd \u5176\u4ed6\u8bbe\u65bd \u6b63\u95e8 \u8bbe\u65bd \u89c2\u5f71\u5385 \u5176\u4ed6\u8bbe\u65bd".split(" ");
    F.Zk(function(a) {
        var b = s;
        a.addEventListener("position_changed",
        function() {
            a.m.visible && a.m.albumsControl === p && (b ? b.Oy(a.ac()) : (b = new Fg(a.m.albumsControlOptions), b.za(a)))
        });
        a.addEventListener("albums_visible_changed",
        function() {
            a.m.albumsControl === p ? (b ? b.Oy(a.ac()) : (b = new Fg(a.m.albumsControlOptions), b.za(a)), b.show()) : b.aa()
        });
        a.addEventListener("albums_options_changed",
        function() {
            b && b.Nj(a.m.albumsControlOptions)
        });
        a.addEventListener("visible_changed",
        function() {
            b && (a.Sx() ? a.m.albumsControl === p && (b.R.style.visibility = "visible") : b.R.style.visibility = "hidden")
        })
    });
    var Gg = 1.8;
    L() && (Gg = 1);
    A.extend(Fg.prototype, {
        Nj: function(a) {
            for (var b in a) this.m[b] = a[b];
            a = this.m.imageHeight + "px";
            this.wc(this.m.anchor);
            this.R.style.width = isNaN(Number(this.m.maxWidth)) === p ? this.m.maxWidth: this.m.maxWidth + "px";
            this.R.style.height = a;
            this.vk.style.height = a;
            this.di.style.height = a;
            this.ng = {
                height: this.m.imageHeight,
                width: this.m.imageHeight * Gg
            };
            this.uk.style.height = this.ng.height - 6 + "px";
            this.uk.style.width = this.ng.width - 6 + "px";
            this.Oy(this.W.ac(), p)
        },
        za: function(a) {
            this.W = a;
            this.Js();
            this.FQ();
            this.iZ();
            this.Oy(a.ac())
        },
        Js: function() {
            var a = this.m.imageHeight + "px";
            this.R = J("div");
            var b = this.R.style;
            b.cssText = "background:rgb(37,37,37);background:rgba(37,37,37,0.9);";
            b.position = "absolute";
            b.zIndex = "2000";
            b.width = isNaN(Number(this.m.maxWidth)) === p ? this.m.maxWidth: this.m.maxWidth + "px";
            b.padding = "8px 0";
            b.visibility = "hidden";
            b.height = a;
            this.vk = J("div");
            b = this.vk.style;
            b.position = "absolute";
            b.overflow = "hidden";
            b.width = "100%";
            b.height = a;
            this.di = J("div");
            b = this.di.style;
            b.height = a;
            this.vk.appendChild(this.di);
            this.R.appendChild(this.vk);
            this.W.R.appendChild(this.R);
            this.uk = J("div", {
                "class": "pano_photo_item_seleted"
            });
            this.uk.style.height = this.ng.height - 6 + "px";
            this.uk.style.width = this.ng.width - 6 + "px";
            this.wc(this.m.anchor)
        },
        $H: function(a) {
            for (var b = this.rk,
            c = b.length - 1; 0 <= c; c--) if (b[c].panoId == a) return c;
            return - 1
        },
        Oy: function(a, b) {
            if (b || !this.rk[this.ed] || !(this.rk[this.ed].panoId == a && 3 !== this.rk[this.ed].recoType)) {
                var c = this,
                e = this.$H(a); ! b && -1 !== e && this.rk[e] && 3 !== this.rk[e].recoType ? this.qq(e) : this.yY(function(a) {
                    for (var b = {},
                    e, k, m = t,
                    n = [], o = 0, q = a.length; o < q; o++) e = a[o].catlog,
                    k = a[o].floor,
                    l !== e && ("" === e && l !== k ? (m = p, b[k] || (b[k] = []), b[k].push(a[o])) : (b[Hg[e]] || (b[Hg[e]] = []), b[Hg[e]].push(a[o])));
                    for (var v in b) m ? n.push({
                        data: v + "F",
                        index: v
                    }) : n.push({
                        data: Ig[v],
                        index: v
                    });
                    c.vH = b;
                    c.dj = n;
                    c.kj(a);
                    0 == a.length ? c.aa() : c.show()
                })
            }
        },
        yW: function() {
            if (!this.$i) {
                var a = this.mY(this.dj),
                b = J("div");
                b.style.cssText = ["width:" + 134 * this.dj.length + "px;", "overflow:hidden;-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;"].join("");
                b.innerHTML = a;
                a = J("div");
                a.appendChild(b);
                a.style.cssText = "position:absolute;top:-25px;background:rgb(37,37,37);background:rgba(37,37,37,0.9);border-bottom:1px solid #4e596a;width:100%;line-height:25px;height:25px;overflow:scroll;outline:0";
                new Eg(a, {
                    bp: t,
                    vy: p,
                    wi: t,
                    Qi: t,
                    Fn: t,
                    VE: p,
                    bx: p,
                    Ux: p
                });
                this.R.appendChild(a);
                for (var c = this,
                e = b.getElementsByTagName("span"), f = 0, g = e.length; f < g; f++) b = e[f],
                A.V(b, "click",
                function() {
                    if (this.getAttribute("dataindex")) {
                        c.kj(c.vH[this.getAttribute("dataindex")]);
                        for (var a = 0,
                        b = e.length; a < b; a++) e[a].style.color = "#FFFFFF";
                        this.style.color = "#3383FF"
                    }
                });
                this.$i = a
            }
        },
        vW: function() {
            if (this.$i) a = this.JL(this.dj),
            this.VQ.innerHTML = a;
            else {
                var a = this.JL(this.dj),
                b = J("ul"),
                c = this;
                b.style.cssText = "list-style: none;padding:0px;margin:0px;display:block;width:60px;position:absolute;top:7px";
                b.innerHTML = a;
                A.V(b, "click",
                function(a) {
                    if (a = (a.srcElement || a.target).getAttribute("dataindex")) {
                        c.kj(c.vH[a]);
                        for (var e = b.getElementsByTagName("li"), f = 0, g = e.length; f < g; f++) e[f].childNodes[0].getAttribute("dataindex") === a ? A.U.ib(e[f], "pano_catlogLiActive") : A.U.rc(e[f], "pano_catlogLiActive")
                    }
                });
                var a = J("div"),
                e = J("a"),
                f = J("span"),
                g = J("a"),
                i = J("span"),
                k = ["background:url(" + K.ta + "panorama/catlog_icon.png) no-repeat;", "display:block;width:10px;height:7px;margin:0 auto;"].join("");
                f.style.cssText = k + "background-position:-18px 0;";
                e.style.cssText = "background:#1C1C1C;display:block;position:absolute;width:58px;";
                i.style.cssText = k + "background-position:0 0;";
                g.style.cssText = "background:#1C1C1C;display:block;position:absolute;width:58px;";
                g.style.top = this.m.imageHeight - 7 + "px";
                a.style.cssText = "position:absolute;top:0px;left:0px;width:60px;";
                e.appendChild(f);
                g.appendChild(i);
                A.V(e, "mouseover",
                function() {
                    var a = parseInt(b.style.top, 10);
                    7 !== a && (f.style.backgroundPosition = "-27px 0");
                    new Db({
                        Nc: 60,
                        fc: Eb.bt,
                        duration: 300,
                        Ba: function(c) {
                            b.style.top = a + (7 - a) * c + "px"
                        }
                    })
                });
                A.V(e, "mouseout",
                function() {
                    f.style.backgroundPosition = "-18px 0"
                });
                A.V(g, "mouseover",
                function() {
                    var a = parseInt(b.style.top, 10),
                    e = c.m.imageHeight - 14;
                    if (! (parseInt(b.offsetHeight, 10) < e)) {
                        var f = e - parseInt(b.offsetHeight, 10) + 7;
                        f !== a && (i.style.backgroundPosition = "-9px 0");
                        new Db({
                            Nc: 60,
                            fc: Eb.bt,
                            duration: 300,
                            Ba: function(c) {
                                b.style.top = a + (f - a) * c + "px"
                            }
                        })
                    }
                });
                A.V(g, "mouseout",
                function() {
                    i.style.backgroundPosition = "0 0"
                });
                a.appendChild(e);
                a.appendChild(g);
                e = J("div");
                e.style.cssText = ["position:absolute;z-index:2001;left:20px;", "height:" + this.m.imageHeight + "px;", "width:62px;overflow:hidden;background:rgb(37,37,37);background:rgba(37,37,37,0.9);"].join("");
                e.appendChild(b);
                e.appendChild(a);
                this.$i = e;
                this.VQ = b;
                this.R.appendChild(e)
            }
        },
        wW: function() {
            if (this.dj && !(0 >= this.dj.length)) {
                var a = J("div");
                a.innerHTML = this.mA;
                a.style.cssText = "position:absolute;background:#252525";
                this.R.appendChild(a);
                this.ft = a;
                this.Yc.pg.style.left = this.ng.width + 8 + "px";
                this.$i && (this.$i.style.left = parseInt(this.$i.style.left, 10) + this.ng.width + 8 + "px");
                var b = this;
                A.V(a, "click",
                function() {
                    b.W.Gc(b.tX)
                })
            }
        },
        kj: function(a) {
            this.rk = a;
            this.m.showCatalog && (0 < this.dj.length ? (bb() ? this.vW() : this.yW(), this.Yc.offsetLeft = 60) : (this.ft && (this.R.removeChild(this.ft), this.ft = s, this.Yc.pg.style.left = "0px"), this.$i && (this.R.removeChild(this.$i), this.$i = s), this.Yc.offsetLeft = 0));
            var b = this.gY(a);
            bb() && (this.dj && 0 < this.dj.length && this.m.showExit && this.mA) && (this.Yc.offsetLeft += this.ng.width + 8, this.ft ? this.ft.innerHTML = this.mA: this.wW());
            this.di.innerHTML = b;
            this.di.style.width = (this.ng.width + 8) * a.length + 8 + "px";
            a = this.R.offsetWidth;
            b = this.di.offsetWidth;
            this.Yc.mt && (b += this.Yc.mt());
            b < a - 2 * this.Yc.Ti - this.Yc.offsetLeft ? this.R.style.width = b + this.Yc.offsetLeft + "px": (this.R.style.width = isNaN(Number(this.m.maxWidth)) === p ? this.m.maxWidth: this.m.maxWidth + "px", b < this.R.offsetWidth - 2 * this.Yc.Ti - this.Yc.offsetLeft && (this.R.style.width = b + this.Yc.offsetLeft + "px"));
            this.Yc.refresh();
            this.HB = this.di.children;
            this.di.appendChild(this.uk);
            this.uk.style.left = "-100000px";
            a = this.$H(this.W.ac(), this.X2); - 1 !== a && this.qq(a)
        },
        mY: function(a) {
            for (var b = "",
            c, e = 0,
            f = a.length; e < f; e++) c = '<div style="color:white;opacity:0.5;margin:0 35px;float:left;text-align: center"><span  dataIndex="' + a[e].index + '">' + a[e].data + "</span></div>",
            b += c;
            return b
        },
        JL: function(a) {
            for (var b = "",
            c, e = 0,
            f = a.length; e < f; e++) c = '<li class="pano_catlogLi"><span style="display:block;width:100%;" dataIndex="' + a[e].index + '">' + a[e].data + "</span></li>",
            b += c;
            return b
        },
        gY: function(a) {
            for (var b, c, e, f, g = [], i = this.ng.height, k = this.ng.width, m = 0; m < a.length; m++) b = a[m],
            recoType = b.recoType,
            e = b.panoId,
            f = b.name,
            c = b.heading,
            b = b.pitch,
            c = Yf.WL(e, c, b, 198, 108),
            b = '<a href="javascript:void(0);" class="pano_photo_item" data-index="' + m + '"><img style="width:' + (k - 2) + "px;height:" + (i - 2) + 'px;" data-index="' + m + '" name="' + f + '" src="' + c + '" alt="' + f + '"/><span class="pano_photo_decs" data-index="' + m + '" style="width:' + k + "px;font-size:" + Math.floor(i / 6) + "px; line-height:" + Math.floor(i / 6) + 'px;"><em class="pano_poi_' + recoType + '"></em>' + f + "</span></a>",
            3 === recoType ? bb() ? (this.mA = b, this.tX = e, a.splice(m, 1), m--) : (b = '<a href="javascript:void(0);" class="pano_photo_item" data-index="' + m + '"><img style="width:' + (k - 2) + "px;height:" + (i - 2) + 'px;" data-index="' + m + '" name="' + f + '" src="' + c + '" alt="' + f + '"/><div style="background:rgba(37,37,37,0.5);position:absolute;top:0px;left:0px;width:100%;height:100%;text-align: center;line-height:' + this.m.imageHeight + 'px;" data-index="' + m + '"><img src="' + K.ta + 'panorama/photoexit.png" style="border:none;vertical-align:middle;" data-index="' + m + '" alt=""/></div></a>', g.push(b)) : g.push(b);
            return g.join("")
        },
        yY: function(a) {
            var b = this,
            c = this.W.ac();
            c && this.fm.Qx(c,
            function(e) {
                b.W.ac() === c && a(e)
            })
        },
        wc: function(a) {
            if (!eb(a) || isNaN(a) || a < ad || 3 < a) a = this.defaultAnchor;
            var b = this.R,
            c = this.m.offset.width,
            e = this.m.offset.height;
            b.style.left = b.style.top = b.style.right = b.style.bottom = "auto";
            switch (a) {
            case ad:
                b.style.top = e + "px";
                b.style.left = c + "px";
                break;
            case bd:
                b.style.top = e + "px";
                b.style.right = c + "px";
                break;
            case cd:
                b.style.bottom = e + "px";
                b.style.left = c + "px";
                break;
            case 3:
                b.style.bottom = e + "px",
                b.style.right = c + "px"
            }
        },
        FQ: function() {
            this.DQ()
        },
        DQ: function() {
            var a = this;
            A.V(this.R, "touchstart",
            function(a) {
                a.stopPropagation()
            });
            A.V(this.vk, "click",
            function(b) {
                if ((b = (b.srcElement || b.target).getAttribute("data-index")) && b != a.ed) a.qq(b),
                a.W.Gc(a.rk[b].panoId)
            });
            A.V(this.di, "mouseover",
            function(b) {
                b = (b.srcElement || b.target).getAttribute("data-index");
                b !== s && a.LK(b, p)
            });
            this.W.addEventListener("size_changed",
            function() {
                isNaN(Number(a.m.maxWidth)) && a.Nj({
                    maxWidth: a.m.maxWidth
                })
            })
        },
        qq: function(a) {
            this.uk.style.left = this.HB[a].offsetLeft + 8 + "px";
            this.uk.setAttribute("data-index", this.HB[a].getAttribute("data-index"));
            this.ed = a;
            this.LK(a)
        },
        LK: function(a, b) {
            var c = this.ng.width + 8,
            e = 0;
            this.Yc.mt && (e = this.Yc.mt() / 2);
            var f = this.vk.offsetWidth - 2 * e,
            g = this.di.offsetLeft || this.Yc.x,
            g = g - e,
            i = -a * c;
            i > g && this.Yc.scrollTo(i + e);
            c = i - c;
            g -= f;
            c < g && (!b || b && 8 < i - g) && this.Yc.scrollTo(c + f + e)
        },
        iZ: function() {
            this.Yc = L() ? new Eg(this.vk, {
                bp: t,
                vy: p,
                wi: t,
                Qi: t,
                Fn: t,
                VE: p,
                bx: p,
                Ux: p
            }) : new Jg(this.vk)
        },
        aa: function() {
            this.R.style.visibility = "hidden"
        },
        show: function() {
            this.R.style.visibility = "visible"
        }
    });
    function Jg(a) {
        this.R = a;
        this.mh = a.children[0];
        this.hs = s;
        this.Ti = 20;
        this.offsetLeft = 0;
        this.za()
    }
    Jg.prototype = {
        za: function() {
            this.mh.style.position = "relative";
            this.refresh();
            this.Js();
            this.tC()
        },
        refresh: function() {
            this.yo = this.R.offsetWidth - this.mt();
            this.gB = -(this.mh.offsetWidth - this.yo - this.Ti);
            this.Wv = this.Ti + this.offsetLeft;
            this.mh.style.left = this.Wv + "px";
            this.mh.children[0] && (this.hs = this.mh.children[0].offsetWidth);
            this.pg && (this.pg.children[0].style.marginTop = this.bs.children[0].style.marginTop = this.pg.offsetHeight / 2 - this.pg.children[0].offsetHeight / 2 + "px")
        },
        mt: function() {
            return 2 * this.Ti
        },
        Js: function() {
            this.mw = J("div");
            this.mw.innerHTML = '<a class="pano_photo_arrow_l" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0a\u4e00\u9875"><span class="pano_arrow_l"></span></a><a class="pano_photo_arrow_r" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0b\u4e00\u9875"><span class="pano_arrow_r"></span></a>';
            this.pg = this.mw.children[0];
            this.bs = this.mw.children[1];
            this.R.appendChild(this.mw);
            this.pg.children[0].style.marginTop = this.bs.children[0].style.marginTop = this.pg.offsetHeight / 2 - this.pg.children[0].offsetHeight / 2 + "px"
        },
        tC: function() {
            var a = this;
            A.V(this.pg, "click",
            function() {
                a.scrollTo(a.mh.offsetLeft + a.yo)
            });
            A.V(this.bs, "click",
            function() {
                a.scrollTo(a.mh.offsetLeft - a.yo)
            })
        },
        bV: function() {
            A.U.rc(this.pg, "pano_arrow_disable");
            A.U.rc(this.bs, "pano_arrow_disable");
            var a = this.mh.offsetLeft;
            a >= this.Wv && A.U.ib(this.pg, "pano_arrow_disable");
            a - this.yo <= this.gB && A.U.ib(this.bs, "pano_arrow_disable")
        },
        scrollTo: function(a) {
            a = a < this.mh.offsetLeft ? Math.ceil((a - this.Ti - this.yo) / this.hs) * this.hs + this.yo + this.Ti - 8 : Math.ceil((a - this.Ti) / this.hs) * this.hs + this.Ti;
            a < this.gB ? a = this.gB: a > this.Wv && (a = this.Wv);
            var b = this.mh.offsetLeft,
            c = this;
            new Db({
                Nc: 60,
                fc: Eb.bt,
                duration: 300,
                Ba: function(e) {
                    c.mh.style.left = b + (a - b) * e + "px"
                },
                finish: function() {
                    c.bV()
                }
            })
        }
    };
    function Kg() {
        var a = 256 * Math.pow(2, 15),
        b = 3 * a,
        c = T.Sa(new R(180, 0)).lng,
        b = b - c,
        e = -3 * a,
        a = T.Sa(new R( - 180, 0)).lng,
        e = a - e;
        this.cV = c / Math.pow(2, 15);
        this.rg = c;
        this.hh = a;
        this.Ol = b + e;
        this.ih = c - a;
        this.PU = b;
        this.tT = e
    }
    Kg.prototype = {
        vm: function(a, b, c) {
            for (var e = 0,
            c = 1536 * Math.pow(2, b - 3) / (c || 256), f = c / 2 - 1, g = -c / 2; a > f;) a -= c,
            e -= this.Ol;
            for (; a < g;) a += c,
            e += this.Ol;
            var i = e,
            e = Math.round(e / Math.pow(2, 18 - b));
            return {
                offsetX: e,
                j4: i,
                Bg: a,
                k2: c,
                T5: f,
                U5: g
            }
        },
        vC: function(a) {
            for (var b = a.lng; b > this.rg;) b -= this.ih;
            for (; b < this.hh;) b += this.ih;
            a.lng = b;
            return a
        },
        SV: function(a, b) {
            for (var c = b || a.Hb(), e = a.nf.lng, f = a.kf.lng; c.lng > this.rg;) c.lng -= this.ih,
            e -= this.ih,
            f -= this.ih;
            for (; c.lng < this.hh;) c.lng += this.ih,
            e += this.ih,
            f += this.ih;
            a.nf.lng = e;
            a.kf.lng = f;
            return a
        },
        wC: function(a, b, c, e) {
            for (var c = c || 256,
            f = e || Math.pow(2, 18 - b) * c, e = Math.floor(this.rg / f), g = Math.floor(this.hh / f), i = Math.floor(this.Ol / f), f = [], k = 0; k < a.length; k++) {
                var m = a[k],
                n = m[0],
                m = m[1];
                if (n >= e) {
                    if (n += i, this.iy(n, b, c) !== p) {
                        var o = "id_" + n + "_" + m + "_" + b;
                        a[o] || (a[o] = p, f.push([n, m, b, c]))
                    }
                } else n <= g && (n -= i, this.iy(n, b, c) !== p && (o = "id_" + n + "_" + m + "_" + b, a[o] || (a[o] = p, f.push([n, m, b, c]))))
            }
            k = 0;
            for (e = f.length; k < e; k++) a.push(f[k]);
            for (k = a.length - 1; 0 <= k; k--) n = a[k][0],
            this.iy(n, b, c) && a.splice(k, 1);
            return a
        },
        iy: function(a, b, c) {
            for (var e = Math.pow(2, b - 3), b = Math.round(this.cV * e), e = 1536 * e / c; a > e / 2 - 1;) a -= e;
            for (; a < -(e / 2);) a += e;
            return 0 < a && a * c > b || 0 > a && Math.abs((a + 1) * c) > b ? p: t
        },
        FM: function(a, b) {
            return a < this.hh || b > this.rg
        },
        aM: function(a) {
            return Math.round((this.PU + this.tT) / Math.pow(2, 18 - a))
        },
        IY: function(a, b, c) {
            var b = b || 256,
            e = Math.ceil(this.rg / c),
            f = Math.floor(this.hh / c);
            return a === e - 1 ? (a = (this.rg - c * (e - 1)) / c * b, a = Math.round(a), [0, 0, a, b]) : a === f ? (a = (this.hh - c * f) / c * b, a = Math.round(Math.abs(a)), [a, 0, b, b]) : s
        }
    };
    var Ge = new Kg;
    F.Map = Pa;
    F.Hotspot = qb;
    F.MapType = Le;
    F.Point = R;
    F.Pixel = S;
    F.Size = P;
    F.Bounds = nb;
    F.TileLayer = Sd;
    F.Projection = pd;
    F.MercatorProjection = T;
    F.PerspectiveProjection = pb;
    F.Copyright = function(a, b, c) {
        this.id = a;
        this.jb = b;
        this.content = c
    };
    F.Overlay = sd;
    F.Label = Ad;
    F.GroundOverlay = Bd;
    F.PointCollection = Fd;
    F.Marker = W;
    F.CanvasLayer = Id;
    F.Icon = wd;
    F.IconSequence = yd;
    F.Symbol = xd;
    F.Polyline = Md;
    F.Polygon = Ld;
    F.InfoWindow = zd;
    F.Circle = Nd;
    F.Control = $c;
    F.NavigationControl = tb;
    F.GeolocationControl = dd;
    F.OverviewMapControl = vb;
    F.CopyrightControl = fd;
    F.ScaleControl = ub;
    F.MapTypeControl = wb;
    F.CityListControl = gd;
    F.PanoramaControl = id;
    F.TrafficLayer = Zd;
    F.CustomLayer = xb;
    F.ContextMenu = ld;
    F.MenuItem = od;
    F.LocalSearch = lb;
    F.TransitRoute = qf;
    F.DrivingRoute = tf;
    F.TruckRoute = vf;
    F.WalkingRoute = uf;
    F.RidingRoute = wf;
    F.Autocomplete = Gf;
    F.RouteSearch = Af;
    F.Geocoder = Bf;
    F.LocalCity = Df;
    F.Geolocation = Geolocation;
    F.Convertor = rd;
    F.BusLineSearch = Ff;
    F.Boundary = Ef;
    F.Panorama = Sa;
    F.PanoramaLabel = Nf;
    F.PanoramaService = kd;
    F.PanoramaCoverageLayer = jd;
    F.PanoramaFlashInterface = Wf;
    function U(a, b) {
        for (var c in b) a[c] = b[c]
    }
    U(window, {
        BMap: F,
        _jsload2: function(a, b) {
            ja.ez.vZ && ja.ez.set(a, b);
            Za.WV(a, b)
        },
        BMAP_API_VERSION: "2.0"
    });
    var Lg = Pa.prototype;
    U(Lg, {
        getBounds: Lg.ke,
        getCenter: Lg.Hb,
        getMapType: Lg.ya,
        getSize: Lg.wb,
        setSize: Lg.He,
        getViewport: Lg.Ct,
        getZoom: Lg.la,
        centerAndZoom: Lg.xd,
        panTo: Lg.Ii,
        panBy: Lg.Og,
        setCenter: Lg.Bf,
        setCurrentCity: Lg.GF,
        setMapType: Lg.Sg,
        setViewport: Lg.Tg,
        setZoom: Lg.Xc,
        highResolutionEnabled: Lg.$x,
        zoomTo: Lg.Vg,
        zoomIn: Lg.vG,
        zoomOut: Lg.wG,
        addHotspot: Lg.hC,
        removeHotspot: Lg.H_,
        clearHotspots: Lg.gx,
        checkResize: Lg.ZV,
        addControl: Lg.Vo,
        removeControl: Lg.dO,
        getContainer: Lg.Ta,
        addContextMenu: Lg.mm,
        removeContextMenu: Lg.hq,
        addOverlay: Lg.Ra,
        removeOverlay: Lg.Lb,
        clearOverlays: Lg.IK,
        openInfoWindow: Lg.Vc,
        closeInfoWindow: Lg.Mc,
        pointToOverlayPixel: Lg.cf,
        overlayPixelToPoint: Lg.ON,
        getInfoWindow: Lg.wh,
        getOverlays: Lg.Nx,
        getPanes: function() {
            return {
                floatPane: this.ce.JD,
                markerMouseTarget: this.ce.YE,
                floatShadow: this.ce.zL,
                labelPane: this.ce.QE,
                markerPane: this.ce.mN,
                markerShadow: this.ce.nN,
                mapPane: this.ce.Xt,
                vertexPane: this.ce.vP
            }
        },
        addTileLayer: Lg.Te,
        removeTileLayer: Lg.gg,
        pixelToPoint: Lg.cc,
        pointToPixel: Lg.vc,
        setFeatureStyle: Lg.Q6,
        selectBaseElement: Lg.J6,
        setMapStyle: Lg.su,
        enable3DBuilding: Lg.qp,
        disable3DBuilding: Lg.OW,
        getPanorama: Lg.xt,
        initIndoorLayer: Lg.jZ,
        setNormalMapDisplay: Lg.Uy,
        setMapStyleV2: Lg.l0,
        setBMapCopyrightOffset: Lg.FF,
        getVectorContainer: Lg.OY
    });
    U(window, {
        BMAP_COORD_BD09: 5,
        BMAP_COORD_GCJ02: 3
    });
    var Mg = Le.prototype;
    U(Mg, {
        getTileLayer: Mg.HY,
        getMinZoom: Mg.sf,
        getMaxZoom: Mg.Ye,
        getProjection: Mg.Bj,
        getTextColor: Mg.Rm,
        getTips: Mg.At
    });
    U(window, {
        BMAP_NORMAL_MAP: Qa,
        BMAP_PERSPECTIVE_MAP: Va,
        BMAP_SATELLITE_MAP: Ya,
        BMAP_HYBRID_MAP: Xa
    });
    var Ng = T.prototype;
    U(Ng, {
        lngLatToPoint: Ng.Lg,
        pointToLngLat: Ng.Lj
    });
    var Og = pb.prototype;
    U(Og, {
        lngLatToPoint: Og.Lg,
        pointToLngLat: Og.Lj
    });
    var Pg = nb.prototype;
    U(Pg, {
        equals: Pg.Vb,
        containsPoint: Pg.Hs,
        containsBounds: Pg.kW,
        intersects: Pg.Jt,
        extend: Pg.extend,
        getCenter: Pg.Hb,
        isEmpty: Pg.Hj,
        getSouthWest: Pg.Be,
        getNorthEast: Pg.tf,
        toSpan: Pg.hG
    });
    var Qg = sd.prototype;
    U(Qg, {
        isVisible: Qg.Oc,
        show: Qg.show,
        hide: Qg.aa
    });
    sd.getZIndex = sd.Sk;
    var Rg = ob.prototype;
    U(Rg, {
        openInfoWindow: Rg.Vc,
        closeInfoWindow: Rg.Mc,
        enableMassClear: Rg.xj,
        disableMassClear: Rg.QW,
        show: Rg.show,
        hide: Rg.aa,
        getMap: Rg.Kx,
        addContextMenu: Rg.mm,
        removeContextMenu: Rg.hq
    });
    var Sg = W.prototype;
    U(Sg, {
        setIcon: Sg.Xb,
        getIcon: Sg.Cp,
        setPosition: Sg.va,
        getPosition: Sg.ma,
        setOffset: Sg.Rd,
        getOffset: Sg.zj,
        getLabel: Sg.ot,
        setLabel: Sg.Mj,
        setTitle: Sg.Hc,
        setTop: Sg.Mi,
        enableDragging: Sg.jc,
        disableDragging: Sg.Ss,
        setZIndex: Sg.vq,
        getMap: Sg.Kx,
        setAnimation: Sg.vn,
        setShadow: Sg.Yy,
        hide: Sg.aa,
        setRotation: Sg.Wy,
        getRotation: Sg.$L
    });
    U(window, {
        BMAP_ANIMATION_DROP: 1,
        BMAP_ANIMATION_BOUNCE: 2
    });
    var Tg = Ad.prototype;
    U(Tg, {
        setStyle: Tg.Td,
        setStyles: Tg.Li,
        setContent: Tg.Qc,
        setPosition: Tg.va,
        getPosition: Tg.ma,
        setOffset: Tg.Rd,
        getOffset: Tg.zj,
        setTitle: Tg.Hc,
        setZIndex: Tg.vq,
        getMap: Tg.Kx,
        getContent: Tg.Lk
    });
    var Ug = wd.prototype;
    U(Ug, {
        setImageUrl: Ug.uO,
        setSize: Ug.He,
        setAnchor: Ug.wc,
        setImageOffset: Ug.ru,
        setImageSize: Ug.f0,
        setInfoWindowAnchor: Ug.i0,
        setPrintImageUrl: Ug.u0
    });
    var Vg = zd.prototype;
    U(Vg, {
        redraw: Vg.re,
        setTitle: Vg.Hc,
        setContent: Vg.Qc,
        getContent: Vg.Lk,
        getPosition: Vg.ma,
        enableMaximize: Vg.uh,
        disableMaximize: Vg.tx,
        isOpen: Vg.eb,
        setMaxContent: Vg.tu,
        maximize: Vg.ty,
        enableAutoPan: Vg.ct
    });
    var Wg = ud.prototype;
    U(Wg, {
        getPath: Wg.Ze,
        setPath: Wg.Sd,
        setPositionAt: Wg.zn,
        getStrokeColor: Wg.EY,
        setStrokeWeight: Wg.uq,
        getStrokeWeight: Wg.dM,
        setStrokeOpacity: Wg.rq,
        getStrokeOpacity: Wg.FY,
        setFillOpacity: Wg.qu,
        getFillOpacity: Wg.$X,
        setStrokeStyle: Wg.tq,
        getStrokeStyle: Wg.cM,
        getFillColor: Wg.ZX,
        getBounds: Wg.ke,
        enableEditing: Wg.ze,
        disableEditing: Wg.PW,
        getEditing: Wg.WX,
        getGeodesicPath: Wg.cY
    });
    var Xg = Nd.prototype;
    U(Xg, {
        setCenter: Xg.Bf,
        getCenter: Xg.Hb,
        getRadius: Xg.YL,
        setRadius: Xg.Cf
    });
    var Yg = Ld.prototype;
    U(Yg, {
        getPath: Yg.Ze,
        setPath: Yg.Sd,
        setPositionAt: Yg.zn
    });
    var Zg = qb.prototype;
    U(Zg, {
        getPosition: Zg.ma,
        setPosition: Zg.va,
        getText: Zg.lE,
        setText: Zg.wu
    });
    R.prototype.equals = R.prototype.Vb;
    S.prototype.equals = S.prototype.Vb;
    P.prototype.equals = P.prototype.Vb;
    U(window, {
        BMAP_ANCHOR_TOP_LEFT: ad,
        BMAP_ANCHOR_TOP_RIGHT: bd,
        BMAP_ANCHOR_BOTTOM_LEFT: cd,
        BMAP_ANCHOR_BOTTOM_RIGHT: 3
    });
    var $g = $c.prototype;
    U($g, {
        setAnchor: $g.wc,
        getAnchor: $g.QD,
        setOffset: $g.Rd,
        getOffset: $g.zj,
        show: $g.show,
        hide: $g.aa,
        isVisible: $g.Oc,
        toString: $g.toString
    });
    var ah = tb.prototype;
    U(ah, {
        getType: ah.Kp,
        setType: ah.An
    });
    U(window, {
        BMAP_NAVIGATION_CONTROL_LARGE: 0,
        BMAP_NAVIGATION_CONTROL_SMALL: 1,
        BMAP_NAVIGATION_CONTROL_PAN: 2,
        BMAP_NAVIGATION_CONTROL_ZOOM: 3
    });
    var bh = vb.prototype;
    U(bh, {
        changeView: bh.ve,
        setSize: bh.He,
        getSize: bh.wb
    });
    var ch = ub.prototype;
    U(ch, {
        getUnit: ch.NY,
        setUnit: ch.QF
    });
    U(window, {
        BMAP_UNIT_METRIC: "metric",
        BMAP_UNIT_IMPERIAL: "us"
    });
    var dh = fd.prototype;
    U(dh, {
        addCopyright: dh.Tw,
        removeCopyright: dh.sF,
        getCopyright: dh.Im,
        getCopyrightCollection: dh.XD
    });
    U(window, {
        BMAP_MAPTYPE_CONTROL_HORIZONTAL: hd,
        BMAP_MAPTYPE_CONTROL_DROPDOWN: 1,
        BMAP_MAPTYPE_CONTROL_MAP: 2
    });
    var eh = Sd.prototype;
    U(eh, {
        getMapType: eh.ya,
        getCopyright: eh.Im,
        isTransparentPng: eh.Rt
    });
    var fh = ld.prototype;
    U(fh, {
        addItem: fh.zs,
        addSeparator: fh.kC,
        removeSeparator: fh.vF
    });
    var gh = od.prototype;
    U(gh, {
        setText: gh.wu
    });
    var hh = Y.prototype;
    U(hh, {
        getStatus: hh.Pm,
        setSearchCompleteCallback: hh.vu,
        getPageCapacity: hh.uf,
        setPageCapacity: hh.xn,
        setLocation: hh.wn,
        disableFirstResultSelection: hh.aD,
        enableFirstResultSelection: hh.uD,
        gotoPage: hh.Sm,
        searchNearby: hh.oq,
        searchInBounds: hh.tn,
        search: hh.search
    });
    U(window, {
        BMAP_STATUS_SUCCESS: 0,
        BMAP_STATUS_CITY_LIST: 1,
        BMAP_STATUS_UNKNOWN_LOCATION: Ye,
        BMAP_STATUS_UNKNOWN_ROUTE: 3,
        BMAP_STATUS_INVALID_KEY: 4,
        BMAP_STATUS_INVALID_REQUEST: 5,
        BMAP_STATUS_PERMISSION_DENIED: Ze,
        BMAP_STATUS_SERVICE_UNAVAILABLE: 7,
        BMAP_STATUS_TIMEOUT: $e
    });
    U(window, {
        BMAP_POI_TYPE_NORMAL: 0,
        BMAP_POI_TYPE_BUSSTOP: 1,
        BMAP_POI_TYPE_BUSLINE: 2,
        BMAP_POI_TYPE_SUBSTOP: 3,
        BMAP_POI_TYPE_SUBLINE: 4
    });
    U(window, {
        BMAP_TRANSIT_POLICY_RECOMMEND: 0,
        BMAP_TRANSIT_POLICY_LEAST_TIME: 4,
        BMAP_TRANSIT_POLICY_LEAST_TRANSFER: 1,
        BMAP_TRANSIT_POLICY_LEAST_WALKING: 2,
        BMAP_TRANSIT_POLICY_AVOID_SUBWAYS: 3,
        BMAP_TRANSIT_POLICY_FIRST_SUBWAYS: 5,
        BMAP_LINE_TYPE_BUS: 0,
        BMAP_LINE_TYPE_SUBWAY: 1,
        BMAP_LINE_TYPE_FERRY: 2,
        BMAP_LINE_TYPE_TRAIN: 3,
        BMAP_LINE_TYPE_AIRPLANE: 4,
        BMAP_LINE_TYPE_COACH: 5
    });
    U(window, {
        BMAP_TRANSIT_TYPE_POLICY_TRAIN: 0,
        BMAP_TRANSIT_TYPE_POLICY_AIRPLANE: 1,
        BMAP_TRANSIT_TYPE_POLICY_COACH: 2
    });
    U(window, {
        BMAP_INTERCITY_POLICY_LEAST_TIME: 0,
        BMAP_INTERCITY_POLICY_EARLY_START: 1,
        BMAP_INTERCITY_POLICY_CHEAP_PRICE: 2
    });
    U(window, {
        BMAP_TRANSIT_TYPE_IN_CITY: 0,
        BMAP_TRANSIT_TYPE_CROSS_CITY: 1
    });
    U(window, {
        BMAP_TRANSIT_PLAN_TYPE_ROUTE: 0,
        BMAP_TRANSIT_PLAN_TYPE_LINE: 1
    });
    var ih = pf.prototype;
    U(ih, {
        clearResults: ih.we
    });
    rf = qf.prototype;
    U(rf, {
        setPolicy: rf.yn,
        toString: rf.toString,
        setPageCapacity: rf.xn,
        setIntercityPolicy: rf.JF,
        setTransitTypePolicy: rf.OF
    });
    U(vf.prototype, {
        setPolicy: vf.yn,
        toString: vf.toString,
        setPageCapacity: vf.xn,
        setIntercityPolicy: vf.JF,
        setTransitTypePolicy: vf.OF
    });
    U(window, {
        BMAP_DRIVING_POLICY_DEFAULT: 0,
        BMAP_DRIVING_POLICY_AVOID_HIGHWAYS: 3,
        BMAP_DRIVING_POLICY_AVOID_CONGESTION: 5,
        BMAP_DRIVING_POLICY_FIRST_HIGHWAYS: 4
    });
    U(window, {
        BMAP_MODE_DRIVING: "driving",
        BMAP_MODE_TRANSIT: "transit",
        BMAP_MODE_WALKING: "walking",
        BMAP_MODE_NAVIGATION: "navigation"
    });
    var jh = Af.prototype;
    U(jh, {
        routeCall: jh.oO
    });
    U(window, {
        BMAP_HIGHLIGHT_STEP: 1,
        BMAP_HIGHLIGHT_ROUTE: 2
    });
    U(window, {
        BMAP_ROUTE_TYPE_DRIVING: bf,
        BMAP_ROUTE_TYPE_WALKING: af,
        BMAP_ROUTE_TYPE_RIDING: cf
    });
    U(window, {
        BMAP_ROUTE_STATUS_NORMAL: df,
        BMAP_ROUTE_STATUS_EMPTY: 1,
        BMAP_ROUTE_STATUS_ADDRESS: 2
    });
    var kh = tf.prototype;
    U(kh, {
        setPolicy: kh.yn
    });
    var lh = Gf.prototype;
    U(lh, {
        show: lh.show,
        hide: lh.aa,
        setTypes: lh.PF,
        setLocation: lh.wn,
        search: lh.search,
        setInputValue: lh.Ty
    });
    U(xb.prototype, {});
    var mh = Ef.prototype;
    U(mh, {
        get: mh.get
    });
    U(jd.prototype, {});
    U(window, {
        BMAP_POINT_DENSITY_HIGH: 200,
        BMAP_POINT_DENSITY_MEDIUM: be,
        BMAP_POINT_DENSITY_LOW: 50
    });
    U(window, {
        BMAP_POINT_SHAPE_STAR: 1,
        BMAP_POINT_SHAPE_WATERDROP: 2,
        BMAP_POINT_SHAPE_CIRCLE: Cd,
        BMAP_POINT_SHAPE_SQUARE: 4,
        BMAP_POINT_SHAPE_RHOMBUS: 5
    });
    U(window, {
        BMAP_POINT_SIZE_TINY: 1,
        BMAP_POINT_SIZE_SMALLER: 2,
        BMAP_POINT_SIZE_SMALL: 3,
        BMAP_POINT_SIZE_NORMAL: Dd,
        BMAP_POINT_SIZE_BIG: 5,
        BMAP_POINT_SIZE_BIGGER: 6,
        BMAP_POINT_SIZE_HUGE: 7
    });
    U(window, {
        BMap_Symbol_SHAPE_CAMERA: 11,
        BMap_Symbol_SHAPE_WARNING: 12,
        BMap_Symbol_SHAPE_SMILE: 13,
        BMap_Symbol_SHAPE_CLOCK: 14,
        BMap_Symbol_SHAPE_POINT: 9,
        BMap_Symbol_SHAPE_PLANE: 10,
        BMap_Symbol_SHAPE_CIRCLE: 1,
        BMap_Symbol_SHAPE_RECTANGLE: 2,
        BMap_Symbol_SHAPE_RHOMBUS: 3,
        BMap_Symbol_SHAPE_STAR: 4,
        BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW: 5,
        BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW: 6,
        BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW: 7,
        BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW: 8
    });
    U(window, {
        BMAP_CONTEXT_MENU_ICON_ZOOMIN: md,
        BMAP_CONTEXT_MENU_ICON_ZOOMOUT: nd
    });
    U(window, {
        BMAP_SYS_DRAWER: Oa,
        BMAP_SVG_DRAWER: 1,
        BMAP_VML_DRAWER: 2,
        BMAP_CANVAS_DRAWER: 3,
        BMAP_SVG_DRAWER_FIRST: 4
    });
    F.tV();
    F.mz();
})()