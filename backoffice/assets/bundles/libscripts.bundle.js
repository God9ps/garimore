if (!function (a, b) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
            if (!a.document)throw new Error("jQuery requires a window with a document");
            return b(a)
        } : b(a)
    }("undefined" != typeof window ? window : this, function (a, b) {
        function c(a) {
            var b = !!a && "length" in a && a.length, c = na.type(a);
            return "function" !== c && !na.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
        }

        function d(a, b, c) {
            if (na.isFunction(b))return na.grep(a, function (a, d) {
                return !!b.call(a, d, a) !== c
            });
            if (b.nodeType)return na.grep(a, function (a) {
                return a === b !== c
            });
            if ("string" == typeof b) {
                if (xa.test(b))return na.filter(b, a, c);
                b = na.filter(b, a)
            }
            return na.grep(a, function (a) {
                return na.inArray(a, b) > -1 !== c
            })
        }

        function e(a, b) {
            do a = a[b]; while (a && 1 !== a.nodeType);
            return a
        }

        function f(a) {
            var b = {};
            return na.each(a.match(Da) || [], function (a, c) {
                b[c] = !0
            }), b
        }

        function g() {
            da.addEventListener ? (da.removeEventListener("DOMContentLoaded", h), a.removeEventListener("load", h)) : (da.detachEvent("onreadystatechange", h), a.detachEvent("onload", h))
        }

        function h() {
            (da.addEventListener || "load" === a.event.type || "complete" === da.readyState) && (g(), na.ready())
        }

        function i(a, b, c) {
            if (void 0 === c && 1 === a.nodeType) {
                var d = "data-" + b.replace(Ia, "-$1").toLowerCase();
                if (c = a.getAttribute(d), "string" == typeof c) {
                    try {
                        c = "true" === c || "false" !== c && ("null" === c ? null : +c + "" === c ? +c : Ha.test(c) ? na.parseJSON(c) : c)
                    } catch (a) {
                    }
                    na.data(a, b, c)
                } else c = void 0
            }
            return c
        }

        function j(a) {
            var b;
            for (b in a)if (("data" !== b || !na.isEmptyObject(a[b])) && "toJSON" !== b)return !1;
            return !0
        }

        function k(a, b, c, d) {
            if (Ga(a)) {
                var e, f, g = na.expando, h = a.nodeType, i = h ? na.cache : a, j = h ? a[g] : a[g] && g;
                if (j && i[j] && (d || i[j].data) || void 0 !== c || "string" != typeof b)return j || (j = h ? a[g] = ca.pop() || na.guid++ : g), i[j] || (i[j] = h ? {} : {toJSON: na.noop}), "object" != typeof b && "function" != typeof b || (d ? i[j] = na.extend(i[j], b) : i[j].data = na.extend(i[j].data, b)), f = i[j], d || (f.data || (f.data = {}), f = f.data), void 0 !== c && (f[na.camelCase(b)] = c), "string" == typeof b ? (e = f[b], null == e && (e = f[na.camelCase(b)])) : e = f, e
            }
        }

        function l(a, b, c) {
            if (Ga(a)) {
                var d, e, f = a.nodeType, g = f ? na.cache : a, h = f ? a[na.expando] : na.expando;
                if (g[h]) {
                    if (b && (d = c ? g[h] : g[h].data)) {
                        na.isArray(b) ? b = b.concat(na.map(b, na.camelCase)) : b in d ? b = [b] : (b = na.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                        for (; e--;)delete d[b[e]];
                        if (c ? !j(d) : !na.isEmptyObject(d))return
                    }
                    (c || (delete g[h].data, j(g[h]))) && (f ? na.cleanData([a], !0) : la.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0)
                }
            }
        }

        function m(a, b, c, d) {
            var e, f = 1, g = 20, h = d ? function () {
                    return d.cur()
                } : function () {
                    return na.css(a, b, "")
                }, i = h(), j = c && c[3] || (na.cssNumber[b] ? "" : "px"),
                k = (na.cssNumber[b] || "px" !== j && +i) && Ka.exec(na.css(a, b));
            if (k && k[3] !== j) {
                j = j || k[3], c = c || [], k = +i || 1;
                do f = f || ".5", k /= f, na.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
            }
            return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
        }

        function n(a) {
            var b = Sa.split("|"), c = a.createDocumentFragment();
            if (c.createElement)for (; b.length;)c.createElement(b.pop());
            return c
        }

        function o(a, b) {
            var c, d, e = 0,
                f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
            if (!f)for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)!b || na.nodeName(d, b) ? f.push(d) : na.merge(f, o(d, b));
            return void 0 === b || b && na.nodeName(a, b) ? na.merge([a], f) : f
        }

        function p(a, b) {
            for (var c, d = 0; null != (c = a[d]); d++)na._data(c, "globalEval", !b || na._data(b[d], "globalEval"))
        }

        function q(a) {
            Oa.test(a.type) && (a.defaultChecked = a.checked)
        }

        function r(a, b, c, d, e) {
            for (var f, g, h, i, j, k, l, m = a.length, r = n(b), s = [], t = 0; m > t; t++)if (g = a[t], g || 0 === g)if ("object" === na.type(g)) na.merge(s, g.nodeType ? [g] : g); else if (Ua.test(g)) {
                for (i = i || r.appendChild(b.createElement("div")), j = (Pa.exec(g) || ["", ""])[1].toLowerCase(), l = Ta[j] || Ta._default, i.innerHTML = l[1] + na.htmlPrefilter(g) + l[2], f = l[0]; f--;)i = i.lastChild;
                if (!la.leadingWhitespace && Ra.test(g) && s.push(b.createTextNode(Ra.exec(g)[0])), !la.tbody)for (g = "table" !== j || Va.test(g) ? "<table>" !== l[1] || Va.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length; f--;)na.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k);
                for (na.merge(s, i.childNodes), i.textContent = ""; i.firstChild;)i.removeChild(i.firstChild);
                i = r.lastChild
            } else s.push(b.createTextNode(g));
            for (i && r.removeChild(i), la.appendChecked || na.grep(o(s, "input"), q), t = 0; g = s[t++];)if (d && na.inArray(g, d) > -1) e && e.push(g); else if (h = na.contains(g.ownerDocument, g), i = o(r.appendChild(g), "script"), h && p(i), c)for (f = 0; g = i[f++];)Qa.test(g.type || "") && c.push(g);
            return i = null, r
        }

        function s() {
            return !0
        }

        function t() {
            return !1
        }

        function u() {
            try {
                return da.activeElement
            } catch (a) {
            }
        }

        function v(a, b, c, d, e, f) {
            var g, h;
            if ("object" == typeof b) {
                "string" != typeof c && (d = d || c, c = void 0);
                for (h in b)v(a, h, c, d, b[h], f);
                return a
            }
            if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = t; else if (!e)return a;
            return 1 === f && (g = e, e = function (a) {
                return na().off(a), g.apply(this, arguments)
            }, e.guid = g.guid || (g.guid = na.guid++)), a.each(function () {
                na.event.add(this, b, e, d, c)
            })
        }

        function w(a, b) {
            return na.nodeName(a, "table") && na.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
        }

        function x(a) {
            return a.type = (null !== na.find.attr(a, "type")) + "/" + a.type, a
        }

        function y(a) {
            var b = eb.exec(a.type);
            return b ? a.type = b[1] : a.removeAttribute("type"), a
        }

        function z(a, b) {
            if (1 === b.nodeType && na.hasData(a)) {
                var c, d, e, f = na._data(a), g = na._data(b, f), h = f.events;
                if (h) {
                    delete g.handle, g.events = {};
                    for (c in h)for (d = 0, e = h[c].length; e > d; d++)na.event.add(b, c, h[c][d])
                }
                g.data && (g.data = na.extend({}, g.data))
            }
        }

        function A(a, b) {
            var c, d, e;
            if (1 === b.nodeType) {
                if (c = b.nodeName.toLowerCase(), !la.noCloneEvent && b[na.expando]) {
                    e = na._data(b);
                    for (d in e.events)na.removeEvent(b, d, e.handle);
                    b.removeAttribute(na.expando)
                }
                "script" === c && b.text !== a.text ? (x(b).text = a.text, y(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), la.html5Clone && a.innerHTML && !na.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Oa.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
            }
        }

        function B(a, b, c, d) {
            b = fa.apply([], b);
            var e, f, g, h, i, j, k = 0, l = a.length, m = l - 1, n = b[0], p = na.isFunction(n);
            if (p || l > 1 && "string" == typeof n && !la.checkClone && db.test(n))return a.each(function (e) {
                var f = a.eq(e);
                p && (b[0] = n.call(this, e, f.html())), B(f, b, c, d)
            });
            if (l && (j = r(b, a[0].ownerDocument, !1, a, d), e = j.firstChild, 1 === j.childNodes.length && (j = e), e || d)) {
                for (h = na.map(o(j, "script"), x), g = h.length; l > k; k++)f = j, k !== m && (f = na.clone(f, !0, !0), g && na.merge(h, o(f, "script"))), c.call(a[k], f, k);
                if (g)for (i = h[h.length - 1].ownerDocument, na.map(h, y), k = 0; g > k; k++)f = h[k], Qa.test(f.type || "") && !na._data(f, "globalEval") && na.contains(i, f) && (f.src ? na._evalUrl && na._evalUrl(f.src) : na.globalEval((f.text || f.textContent || f.innerHTML || "").replace(fb, "")));
                j = e = null
            }
            return a
        }

        function C(a, b, c) {
            for (var d, e = b ? na.filter(b, a) : a, f = 0; null != (d = e[f]); f++)c || 1 !== d.nodeType || na.cleanData(o(d)), d.parentNode && (c && na.contains(d.ownerDocument, d) && p(o(d, "script")), d.parentNode.removeChild(d));
            return a
        }

        function D(a, b) {
            var c = na(b.createElement(a)).appendTo(b.body), d = na.css(c[0], "display");
            return c.detach(), d
        }

        function E(a) {
            var b = da, c = jb[a];
            return c || (c = D(a, b), "none" !== c && c || (ib = (ib || na("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (ib[0].contentWindow || ib[0].contentDocument).document, b.write(), b.close(), c = D(a, b), ib.detach()), jb[a] = c), c
        }

        function F(a, b) {
            return {
                get: function () {
                    return a() ? void delete this.get : (this.get = b).apply(this, arguments)
                }
            }
        }

        function G(a) {
            if (a in yb)return a;
            for (var b = a.charAt(0).toUpperCase() + a.slice(1), c = xb.length; c--;)if (a = xb[c] + b, a in yb)return a
        }

        function H(a, b) {
            for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)d = a[g], d.style && (f[g] = na._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && Ma(d) && (f[g] = na._data(d, "olddisplay", E(d.nodeName)))) : (e = Ma(d), (c && "none" !== c || !e) && na._data(d, "olddisplay", e ? c : na.css(d, "display"))));
            for (g = 0; h > g; g++)d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
            return a
        }

        function I(a, b, c) {
            var d = ub.exec(b);
            return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
        }

        function J(a, b, c, d, e) {
            for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += na.css(a, c + La[f], !0, e)), d ? ("content" === c && (g -= na.css(a, "padding" + La[f], !0, e)), "margin" !== c && (g -= na.css(a, "border" + La[f] + "Width", !0, e))) : (g += na.css(a, "padding" + La[f], !0, e), "padding" !== c && (g += na.css(a, "border" + La[f] + "Width", !0, e)));
            return g
        }

        function K(a, b, c) {
            var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = ob(a),
                g = la.boxSizing && "border-box" === na.css(a, "boxSizing", !1, f);
            if (0 >= e || null == e) {
                if (e = pb(a, b, f), (0 > e || null == e) && (e = a.style[b]), lb.test(e))return e;
                d = g && (la.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
            }
            return e + J(a, b, c || (g ? "border" : "content"), d, f) + "px"
        }

        function L(a, b, c, d, e) {
            return new L.prototype.init(a, b, c, d, e)
        }

        function M() {
            return a.setTimeout(function () {
                zb = void 0
            }), zb = na.now()
        }

        function N(a, b) {
            var c, d = {height: a}, e = 0;
            for (b = b ? 1 : 0; 4 > e; e += 2 - b)c = La[e], d["margin" + c] = d["padding" + c] = a;
            return b && (d.opacity = d.width = a), d
        }

        function O(a, b, c) {
            for (var d, e = (R.tweeners[b] || []).concat(R.tweeners["*"]), f = 0, g = e.length; g > f; f++)if (d = e[f].call(c, b, a))return d
        }

        function P(a, b, c) {
            var d, e, f, g, h, i, j, k, l = this, m = {}, n = a.style, o = a.nodeType && Ma(a),
                p = na._data(a, "fxshow");
            c.queue || (h = na._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
                h.unqueued || i()
            }), h.unqueued++, l.always(function () {
                l.always(function () {
                    h.unqueued--, na.queue(a, "fx").length || h.empty.fire()
                })
            })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = na.css(a, "display"), k = "none" === j ? na._data(a, "olddisplay") || E(a.nodeName) : j, "inline" === k && "none" === na.css(a, "float") && (la.inlineBlockNeedsLayout && "inline" !== E(a.nodeName) ? n.zoom = 1 : n.display = "inline-block")), c.overflow && (n.overflow = "hidden", la.shrinkWrapBlocks() || l.always(function () {
                n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
            }));
            for (d in b)if (e = b[d], Bb.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                    if ("show" !== e || !p || void 0 === p[d])continue;
                    o = !0
                }
                m[d] = p && p[d] || na.style(a, d)
            } else j = void 0;
            if (na.isEmptyObject(m)) "inline" === ("none" === j ? E(a.nodeName) : j) && (n.display = j); else {
                p ? "hidden" in p && (o = p.hidden) : p = na._data(a, "fxshow", {}), f && (p.hidden = !o), o ? na(a).show() : l.done(function () {
                    na(a).hide()
                }), l.done(function () {
                    var b;
                    na._removeData(a, "fxshow");
                    for (b in m)na.style(a, b, m[b])
                });
                for (d in m)g = O(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
            }
        }

        function Q(a, b) {
            var c, d, e, f, g;
            for (c in a)if (d = na.camelCase(c), e = b[d], f = a[c], na.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = na.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f)c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
        }

        function R(a, b, c) {
            var d, e, f = 0, g = R.prefilters.length, h = na.Deferred().always(function () {
                delete i.elem
            }), i = function () {
                if (e)return !1;
                for (var b = zb || M(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            }, j = h.promise({
                elem: a,
                props: na.extend({}, b),
                opts: na.extend(!0, {specialEasing: {}, easing: na.easing._default}, c),
                originalProperties: b,
                originalOptions: c,
                startTime: zb || M(),
                duration: c.duration,
                tweens: [],
                createTween: function (b, c) {
                    var d = na.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function (b) {
                    var c = 0, d = b ? j.tweens.length : 0;
                    if (e)return this;
                    for (e = !0; d > c; c++)j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }), k = j.props;
            for (Q(k, j.opts.specialEasing); g > f; f++)if (d = R.prefilters[f].call(j, a, k, j.opts))return na.isFunction(d.stop) && (na._queueHooks(j.elem, j.opts.queue).stop = na.proxy(d.stop, d)), d;
            return na.map(k, O, j), na.isFunction(j.opts.start) && j.opts.start.call(a, j), na.fx.timer(na.extend(i, {
                elem: a,
                anim: j,
                queue: j.opts.queue
            })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
        }

        function S(a) {
            return na.attr(a, "class") || ""
        }

        function T(a) {
            return function (b, c) {
                "string" != typeof b && (c = b, b = "*");
                var d, e = 0, f = b.toLowerCase().match(Da) || [];
                if (na.isFunction(c))for (; d = f[e++];)"+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
            }
        }

        function U(a, b, c, d) {
            function e(h) {
                var i;
                return f[h] = !0, na.each(a[h] || [], function (a, h) {
                    var j = h(b, c, d);
                    return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
                }), i
            }

            var f = {}, g = a === $b;
            return e(b.dataTypes[0]) || !f["*"] && e("*")
        }

        function V(a, b) {
            var c, d, e = na.ajaxSettings.flatOptions || {};
            for (d in b)void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
            return c && na.extend(!0, a, c), a
        }

        function W(a, b, c) {
            for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0];)i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
            if (e)for (g in h)if (h[g] && h[g].test(e)) {
                i.unshift(g);
                break
            }
            if (i[0] in c) f = i[0]; else {
                for (g in c) {
                    if (!i[0] || a.converters[g + " " + i[0]]) {
                        f = g;
                        break
                    }
                    d || (d = g)
                }
                f = f || d
            }
            return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
        }

        function X(a, b, c, d) {
            var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
            if (k[1])for (g in a.converters)j[g.toLowerCase()] = a.converters[g];
            for (f = k.shift(); f;)if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())if ("*" === f) f = i; else if ("*" !== i && i !== f) {
                if (g = j[i + " " + f] || j["* " + f], !g)for (e in j)if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                    g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                    break
                }
                if (g !== !0)if (g && a.throws) b = g(b); else try {
                    b = g(b)
                } catch (a) {
                    return {state: "parsererror", error: g ? a : "No conversion from " + i + " to " + f}
                }
            }
            return {state: "success", data: b}
        }

        function Y(a) {
            return a.style && a.style.display || na.css(a, "display")
        }

        function Z(a) {
            if (!na.contains(a.ownerDocument || da, a))return !0;
            for (; a && 1 === a.nodeType;) {
                if ("none" === Y(a) || "hidden" === a.type)return !0;
                a = a.parentNode
            }
            return !1
        }

        function $(a, b, c, d) {
            var e;
            if (na.isArray(b)) na.each(b, function (b, e) {
                c || dc.test(a) ? d(a, e) : $(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
            }); else if (c || "object" !== na.type(b)) d(a, b); else for (e in b)$(a + "[" + e + "]", b[e], c, d)
        }

        function _() {
            try {
                return new a.XMLHttpRequest
            } catch (a) {
            }
        }

        function aa() {
            try {
                return new a.ActiveXObject("Microsoft.XMLHTTP")
            } catch (a) {
            }
        }

        function ba(a) {
            return na.isWindow(a) ? a : 9 === a.nodeType && (a.defaultView || a.parentWindow)
        }

        var ca = [], da = a.document, ea = ca.slice, fa = ca.concat, ga = ca.push, ha = ca.indexOf, ia = {},
            ja = ia.toString, ka = ia.hasOwnProperty, la = {}, ma = "1.12.4", na = function (a, b) {
                return new na.fn.init(a, b)
            }, oa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, pa = /^-ms-/, qa = /-([\da-z])/gi, ra = function (a, b) {
                return b.toUpperCase()
            };
        na.fn = na.prototype = {
            jquery: ma, constructor: na, selector: "", length: 0, toArray: function () {
                return ea.call(this)
            }, get: function (a) {
                return null != a ? 0 > a ? this[a + this.length] : this[a] : ea.call(this)
            }, pushStack: function (a) {
                var b = na.merge(this.constructor(), a);
                return b.prevObject = this, b.context = this.context, b
            }, each: function (a) {
                return na.each(this, a)
            }, map: function (a) {
                return this.pushStack(na.map(this, function (b, c) {
                    return a.call(b, c, b)
                }))
            }, slice: function () {
                return this.pushStack(ea.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, eq: function (a) {
                var b = this.length, c = +a + (0 > a ? b : 0);
                return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
            }, end: function () {
                return this.prevObject || this.constructor()
            }, push: ga, sort: ca.sort, splice: ca.splice
        }, na.extend = na.fn.extend = function () {
            var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
            for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || na.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)if (null != (e = arguments[h]))for (d in e)a = g[d], c = e[d], g !== c && (j && c && (na.isPlainObject(c) || (b = na.isArray(c))) ? (b ? (b = !1, f = a && na.isArray(a) ? a : []) : f = a && na.isPlainObject(a) ? a : {}, g[d] = na.extend(j, f, c)) : void 0 !== c && (g[d] = c));
            return g
        }, na.extend({
            expando: "jQuery" + (ma + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
                throw new Error(a)
            }, noop: function () {
            }, isFunction: function (a) {
                return "function" === na.type(a)
            }, isArray: Array.isArray || function (a) {
                return "array" === na.type(a)
            }, isWindow: function (a) {
                return null != a && a == a.window
            }, isNumeric: function (a) {
                var b = a && a.toString();
                return !na.isArray(a) && b - parseFloat(b) + 1 >= 0
            }, isEmptyObject: function (a) {
                var b;
                for (b in a)return !1;
                return !0
            }, isPlainObject: function (a) {
                var b;
                if (!a || "object" !== na.type(a) || a.nodeType || na.isWindow(a))return !1;
                try {
                    if (a.constructor && !ka.call(a, "constructor") && !ka.call(a.constructor.prototype, "isPrototypeOf"))return !1
                } catch (a) {
                    return !1
                }
                if (!la.ownFirst)for (b in a)return ka.call(a, b);
                for (b in a);
                return void 0 === b || ka.call(a, b)
            }, type: function (a) {
                return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? ia[ja.call(a)] || "object" : typeof a
            }, globalEval: function (b) {
                b && na.trim(b) && (a.execScript || function (b) {
                    a.eval.call(a, b)
                })(b)
            }, camelCase: function (a) {
                return a.replace(pa, "ms-").replace(qa, ra)
            }, nodeName: function (a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
            }, each: function (a, b) {
                var d, e = 0;
                if (c(a))for (d = a.length; d > e && b.call(a[e], e, a[e]) !== !1; e++); else for (e in a)if (b.call(a[e], e, a[e]) === !1)break;
                return a
            }, trim: function (a) {
                return null == a ? "" : (a + "").replace(oa, "")
            }, makeArray: function (a, b) {
                var d = b || [];
                return null != a && (c(Object(a)) ? na.merge(d, "string" == typeof a ? [a] : a) : ga.call(d, a)), d
            }, inArray: function (a, b, c) {
                var d;
                if (b) {
                    if (ha)return ha.call(b, a, c);
                    for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)if (c in b && b[c] === a)return c
                }
                return -1
            }, merge: function (a, b) {
                for (var c = +b.length, d = 0, e = a.length; c > d;)a[e++] = b[d++];
                if (c !== c)for (; void 0 !== b[d];)a[e++] = b[d++];
                return a.length = e, a
            }, grep: function (a, b, c) {
                for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)d = !b(a[f], f), d !== h && e.push(a[f]);
                return e
            }, map: function (a, b, d) {
                var e, f, g = 0, h = [];
                if (c(a))for (e = a.length; e > g; g++)f = b(a[g], g, d), null != f && h.push(f); else for (g in a)f = b(a[g], g, d), null != f && h.push(f);
                return fa.apply([], h)
            }, guid: 1, proxy: function (a, b) {
                var c, d, e;
                return "string" == typeof b && (e = a[b], b = a, a = e), na.isFunction(a) ? (c = ea.call(arguments, 2), d = function () {
                    return a.apply(b || this, c.concat(ea.call(arguments)))
                }, d.guid = a.guid = a.guid || na.guid++, d) : void 0
            }, now: function () {
                return +new Date
            }, support: la
        }), "function" == typeof Symbol && (na.fn[Symbol.iterator] = ca[Symbol.iterator]), na.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
            ia["[object " + b + "]"] = b.toLowerCase()
        });
        var sa = function (a) {
            function b(a, b, c, d) {
                var e, f, g, h, i, j, l, n, o = b && b.ownerDocument, p = b ? b.nodeType : 9;
                if (c = c || [], "string" != typeof a || !a || 1 !== p && 9 !== p && 11 !== p)return c;
                if (!d && ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, I)) {
                    if (11 !== p && (j = ra.exec(a)))if (e = j[1]) {
                        if (9 === p) {
                            if (!(g = b.getElementById(e)))return c;
                            if (g.id === e)return c.push(g), c
                        } else if (o && (g = o.getElementById(e)) && M(b, g) && g.id === e)return c.push(g), c
                    } else {
                        if (j[2])return $.apply(c, b.getElementsByTagName(a)), c;
                        if ((e = j[3]) && v.getElementsByClassName && b.getElementsByClassName)return $.apply(c, b.getElementsByClassName(e)), c
                    }
                    if (v.qsa && !T[a + " "] && (!J || !J.test(a))) {
                        if (1 !== p) o = b, n = a; else if ("object" !== b.nodeName.toLowerCase()) {
                            for ((h = b.getAttribute("id")) ? h = h.replace(ta, "\\$&") : b.setAttribute("id", h = N), l = z(a), f = l.length, i = ma.test(h) ? "#" + h : "[id='" + h + "']"; f--;)l[f] = i + " " + m(l[f]);
                            n = l.join(","), o = sa.test(a) && k(b.parentNode) || b
                        }
                        if (n)try {
                            return $.apply(c, o.querySelectorAll(n)), c
                        } catch (a) {
                        } finally {
                            h === N && b.removeAttribute("id")
                        }
                    }
                }
                return B(a.replace(ha, "$1"), b, c, d)
            }

            function c() {
                function a(c, d) {
                    return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
                }

                var b = [];
                return a
            }

            function d(a) {
                return a[N] = !0, a
            }

            function e(a) {
                var b = G.createElement("div");
                try {
                    return !!a(b)
                } catch (a) {
                    return !1
                } finally {
                    b.parentNode && b.parentNode.removeChild(b), b = null
                }
            }

            function f(a, b) {
                for (var c = a.split("|"), d = c.length; d--;)w.attrHandle[c[d]] = b
            }

            function g(a, b) {
                var c = b && a,
                    d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
                if (d)return d;
                if (c)for (; c = c.nextSibling;)if (c === b)return -1;
                return a ? 1 : -1
            }

            function h(a) {
                return function (b) {
                    var c = b.nodeName.toLowerCase();
                    return "input" === c && b.type === a
                }
            }

            function i(a) {
                return function (b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a
                }
            }

            function j(a) {
                return d(function (b) {
                    return b = +b, d(function (c, d) {
                        for (var e, f = a([], c.length, b), g = f.length; g--;)c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    })
                })
            }

            function k(a) {
                return a && "undefined" != typeof a.getElementsByTagName && a
            }

            function l() {
            }

            function m(a) {
                for (var b = 0, c = a.length, d = ""; c > b; b++)d += a[b].value;
                return d
            }

            function n(a, b, c) {
                var d = b.dir, e = c && "parentNode" === d, f = Q++;
                return b.first ? function (b, c, f) {
                    for (; b = b[d];)if (1 === b.nodeType || e)return a(b, c, f)
                } : function (b, c, g) {
                    var h, i, j, k = [P, f];
                    if (g) {
                        for (; b = b[d];)if ((1 === b.nodeType || e) && a(b, c, g))return !0
                    } else for (; b = b[d];)if (1 === b.nodeType || e) {
                        if (j = b[N] || (b[N] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === P && h[1] === f)return k[2] = h[2];
                        if (i[d] = k, k[2] = a(b, c, g))return !0
                    }
                }
            }

            function o(a) {
                return a.length > 1 ? function (b, c, d) {
                    for (var e = a.length; e--;)if (!a[e](b, c, d))return !1;
                    return !0
                } : a[0]
            }

            function p(a, c, d) {
                for (var e = 0, f = c.length; f > e; e++)b(a, c[e], d);
                return d
            }

            function q(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
                return g
            }

            function r(a, b, c, e, f, g) {
                return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function (d, g, h, i) {
                    var j, k, l, m = [], n = [], o = g.length, r = d || p(b || "*", h.nodeType ? [h] : h, []),
                        s = !a || !d && b ? r : q(r, m, a, h, i), t = c ? f || (d ? a : o || e) ? [] : g : s;
                    if (c && c(s, t, h, i), e)for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                    if (d) {
                        if (f || a) {
                            if (f) {
                                for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                                f(null, t = [], j, i)
                            }
                            for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                        }
                    } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
                })
            }

            function s(a) {
                for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function (a) {
                    return a === b
                }, g, !0), j = n(function (a) {
                    return aa(b, a) > -1
                }, g, !0), k = [function (a, c, d) {
                    var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                    return b = null, e
                }]; e > h; h++)if (c = w.relative[a[h].type]) k = [n(o(k), c)]; else {
                    if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                        for (d = ++h; e > d && !w.relative[a[d].type]; d++);
                        return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({value: " " === a[h - 2].type ? "*" : ""})).replace(ha, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
                    }
                    k.push(c)
                }
                return o(k)
            }

            function t(a, c) {
                var e = c.length > 0, f = a.length > 0, g = function (d, g, h, i, j) {
                    var k, l, m, n = 0, o = "0", p = d && [], r = [], s = C, t = d || f && w.find.TAG("*", j),
                        u = P += null == s ? 1 : Math.random() || .1, v = t.length;
                    for (j && (C = g === G || g || j); o !== v && null != (k = t[o]); o++) {
                        if (f && k) {
                            for (l = 0, g || k.ownerDocument === G || (F(k), h = !I); m = a[l++];)if (m(k, g || G, h)) {
                                i.push(k);
                                break
                            }
                            j && (P = u)
                        }
                        e && ((k = !m && k) && n--, d && p.push(k))
                    }
                    if (n += o, e && o !== n) {
                        for (l = 0; m = c[l++];)m(p, r, g, h);
                        if (d) {
                            if (n > 0)for (; o--;)p[o] || r[o] || (r[o] = Y.call(i));
                            r = q(r)
                        }
                        $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                    }
                    return j && (P = u, C = s), p
                };
                return e ? d(g) : g
            }

            var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date, O = a.document,
                P = 0, Q = 0, R = c(), S = c(), T = c(), U = function (a, b) {
                    return a === b && (E = !0), 0
                }, V = 1 << 31, W = {}.hasOwnProperty, X = [], Y = X.pop, Z = X.push, $ = X.push, _ = X.slice,
                aa = function (a, b) {
                    for (var c = 0, d = a.length; d > c; c++)if (a[c] === b)return c;
                    return -1
                },
                ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ca = "[\\x20\\t\\r\\n\\f]", da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ea = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + da + "))|)" + ca + "*\\]",
                fa = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ea + ")*)|.*)\\)|)",
                ga = new RegExp(ca + "+", "g"),
                ha = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
                ia = new RegExp("^" + ca + "*," + ca + "*"),
                ja = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
                ka = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"), la = new RegExp(fa),
                ma = new RegExp("^" + da + "$"), na = {
                    ID: new RegExp("^#(" + da + ")"),
                    CLASS: new RegExp("^\\.(" + da + ")"),
                    TAG: new RegExp("^(" + da + "|[*])"),
                    ATTR: new RegExp("^" + ea),
                    PSEUDO: new RegExp("^" + fa),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + ba + ")$", "i"),
                    needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
                }, oa = /^(?:input|select|textarea|button)$/i, pa = /^h\d$/i, qa = /^[^{]+\{\s*\[native \w/,
                ra = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, sa = /[+~]/, ta = /'|\\/g,
                ua = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"), va = function (a, b, c) {
                    var d = "0x" + b - 65536;
                    return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
                }, wa = function () {
                    F()
                };
            try {
                $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
            } catch (a) {
                $ = {
                    apply: X.length ? function (a, b) {
                        Z.apply(a, _.call(b))
                    } : function (a, b) {
                        for (var c = a.length, d = 0; a[c++] = b[d++];);
                        a.length = c - 1
                    }
                }
            }
            v = b.support = {}, y = b.isXML = function (a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return !!b && "HTML" !== b.nodeName
            }, F = b.setDocument = function (a) {
                var b, c, d = a ? a.ownerDocument || a : O;
                return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = G.documentElement, I = !y(G), (c = G.defaultView) && c.top !== c && (c.addEventListener ? c.addEventListener("unload", wa, !1) : c.attachEvent && c.attachEvent("onunload", wa)), v.attributes = e(function (a) {
                    return a.className = "i", !a.getAttribute("className")
                }), v.getElementsByTagName = e(function (a) {
                    return a.appendChild(G.createComment("")), !a.getElementsByTagName("*").length
                }), v.getElementsByClassName = qa.test(G.getElementsByClassName), v.getById = e(function (a) {
                    return H.appendChild(a).id = N, !G.getElementsByName || !G.getElementsByName(N).length
                }), v.getById ? (w.find.ID = function (a, b) {
                    if ("undefined" != typeof b.getElementById && I) {
                        var c = b.getElementById(a);
                        return c ? [c] : []
                    }
                }, w.filter.ID = function (a) {
                    var b = a.replace(ua, va);
                    return function (a) {
                        return a.getAttribute("id") === b
                    }
                }) : (delete w.find.ID, w.filter.ID = function (a) {
                    var b = a.replace(ua, va);
                    return function (a) {
                        var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                        return c && c.value === b
                    }
                }), w.find.TAG = v.getElementsByTagName ? function (a, b) {
                    return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
                } : function (a, b) {
                    var c, d = [], e = 0, f = b.getElementsByTagName(a);
                    if ("*" === a) {
                        for (; c = f[e++];)1 === c.nodeType && d.push(c);
                        return d
                    }
                    return f
                }, w.find.CLASS = v.getElementsByClassName && function (a, b) {
                        return "undefined" != typeof b.getElementsByClassName && I ? b.getElementsByClassName(a) : void 0
                    }, K = [], J = [], (v.qsa = qa.test(G.querySelectorAll)) && (e(function (a) {
                    H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
                }), e(function (a) {
                    var b = G.createElement("input");
                    b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
                })), (v.matchesSelector = qa.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function (a) {
                    v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", fa)
                }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = qa.test(H.compareDocumentPosition), M = b || qa.test(H.contains) ? function (a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                } : function (a, b) {
                    if (b)for (; b = b.parentNode;)if (b === a)return !0;
                    return !1
                }, U = b ? function (a, b) {
                    if (a === b)return E = !0, 0;
                    var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === G || a.ownerDocument === O && M(O, a) ? -1 : b === G || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1)
                } : function (a, b) {
                    if (a === b)return E = !0, 0;
                    var c, d = 0, e = a.parentNode, f = b.parentNode, h = [a], i = [b];
                    if (!e || !f)return a === G ? -1 : b === G ? 1 : e ? -1 : f ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                    if (e === f)return g(a, b);
                    for (c = a; c = c.parentNode;)h.unshift(c);
                    for (c = b; c = c.parentNode;)i.unshift(c);
                    for (; h[d] === i[d];)d++;
                    return d ? g(h[d], i[d]) : h[d] === O ? -1 : i[d] === O ? 1 : 0
                }, G) : G
            }, b.matches = function (a, c) {
                return b(a, null, null, c)
            }, b.matchesSelector = function (a, c) {
                if ((a.ownerDocument || a) !== G && F(a), c = c.replace(ka, "='$1']"), v.matchesSelector && I && !T[c + " "] && (!K || !K.test(c)) && (!J || !J.test(c)))try {
                    var d = L.call(a, c);
                    if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType)return d
                } catch (a) {
                }
                return b(c, G, null, [a]).length > 0
            }, b.contains = function (a, b) {
                return (a.ownerDocument || a) !== G && F(a), M(a, b)
            }, b.attr = function (a, b) {
                (a.ownerDocument || a) !== G && F(a);
                var c = w.attrHandle[b.toLowerCase()],
                    d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
                return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }, b.error = function (a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }, b.uniqueSort = function (a) {
                var b, c = [], d = 0, e = 0;
                if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                    for (; b = a[e++];)b === a[e] && (d = c.push(e));
                    for (; d--;)a.splice(c[d], 1)
                }
                return D = null, a
            }, x = b.getText = function (a) {
                var b, c = "", d = 0, e = a.nodeType;
                if (e) {
                    if (1 === e || 9 === e || 11 === e) {
                        if ("string" == typeof a.textContent)return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling)c += x(a)
                    } else if (3 === e || 4 === e)return a.nodeValue
                } else for (; b = a[d++];)c += x(b);
                return c
            }, w = b.selectors = {
                cacheLength: 50,
                createPseudo: d,
                match: na,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (a) {
                        return a[1] = a[1].replace(ua, va), a[3] = (a[3] || a[4] || a[5] || "").replace(ua, va), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                    }, CHILD: function (a) {
                        return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                    }, PSEUDO: function (a) {
                        var b, c = !a[6] && a[2];
                        return na.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && la.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (a) {
                        var b = a.replace(ua, va).toLowerCase();
                        return "*" === a ? function () {
                            return !0
                        } : function (a) {
                            return a.nodeName && a.nodeName.toLowerCase() === b
                        }
                    }, CLASS: function (a) {
                        var b = R[a + " "];
                        return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function (a) {
                                return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                            })
                    }, ATTR: function (a, c, d) {
                        return function (e) {
                            var f = b.attr(e, a);
                            return null == f ? "!=" === c : !c || (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ga, " ") + " ").indexOf(d) > -1 : "|=" === c && (f === d || f.slice(0, d.length + 1) === d + "-"))
                        }
                    }, CHILD: function (a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                        return 1 === d && 0 === e ? function (a) {
                            return !!a.parentNode
                        } : function (b, c, i) {
                            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode,
                                r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1;
                            if (q) {
                                if (f) {
                                    for (; p;) {
                                        for (m = b; m = m[p];)if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType)return !1;
                                        o = p = "only" === a && !o && "nextSibling"
                                    }
                                    return !0
                                }
                                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                    for (m = q, l = m[N] || (m[N] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === P && j[1],
                                             t = n && j[2], m = n && q.childNodes[n]; m = ++n && m && m[p] || (t = n = 0) || o.pop();)if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [P, n, t];
                                        break
                                    }
                                } else if (s && (m = b, l = m[N] || (m[N] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === P && j[1], t = n), t === !1)for (; (m = ++n && m && m[p] || (t = n = 0) || o.pop()) && ((h ? m.nodeName.toLowerCase() !== r : 1 !== m.nodeType) || !++t || (s && (l = m[N] || (m[N] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [P, t]), m !== b)););
                                return t -= e, t === d || t % d === 0 && t / d >= 0
                            }
                        }
                    }, PSEUDO: function (a, c) {
                        var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                        return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function (a, b) {
                            for (var d, e = f(a, c), g = e.length; g--;)d = aa(a, e[g]), a[d] = !(b[d] = e[g])
                        }) : function (a) {
                            return f(a, 0, e)
                        }) : f
                    }
                },
                pseudos: {
                    not: d(function (a) {
                        var b = [], c = [], e = A(a.replace(ha, "$1"));
                        return e[N] ? d(function (a, b, c, d) {
                            for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                        }) : function (a, d, f) {
                            return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                        }
                    }), has: d(function (a) {
                        return function (c) {
                            return b(a, c).length > 0
                        }
                    }), contains: d(function (a) {
                        return a = a.replace(ua, va), function (b) {
                            return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                        }
                    }), lang: d(function (a) {
                        return ma.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(ua, va).toLowerCase(), function (b) {
                            var c;
                            do if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                    }), target: function (b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id
                    }, root: function (a) {
                        return a === H
                    }, focus: function (a) {
                        return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    }, enabled: function (a) {
                        return a.disabled === !1
                    }, disabled: function (a) {
                        return a.disabled === !0
                    }, checked: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                    }, selected: function (a) {
                        return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                    }, empty: function (a) {
                        for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType < 6)return !1;
                        return !0
                    }, parent: function (a) {
                        return !w.pseudos.empty(a)
                    }, header: function (a) {
                        return pa.test(a.nodeName)
                    }, input: function (a) {
                        return oa.test(a.nodeName)
                    }, button: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    }, text: function (a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                    }, first: j(function () {
                        return [0]
                    }), last: j(function (a, b) {
                        return [b - 1]
                    }), eq: j(function (a, b, c) {
                        return [0 > c ? c + b : c]
                    }), even: j(function (a, b) {
                        for (var c = 0; b > c; c += 2)a.push(c);
                        return a
                    }), odd: j(function (a, b) {
                        for (var c = 1; b > c; c += 2)a.push(c);
                        return a
                    }), lt: j(function (a, b, c) {
                        for (var d = 0 > c ? c + b : c; --d >= 0;)a.push(d);
                        return a
                    }), gt: j(function (a, b, c) {
                        for (var d = 0 > c ? c + b : c; ++d < b;)a.push(d);
                        return a
                    })
                }
            }, w.pseudos.nth = w.pseudos.eq;
            for (u in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})w.pseudos[u] = h(u);
            for (u in{submit: !0, reset: !0})w.pseudos[u] = i(u);
            return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function (a, c) {
                var d, e, f, g, h, i, j, k = S[a + " "];
                if (k)return c ? 0 : k.slice(0);
                for (h = a, i = [], j = w.preFilter; h;) {
                    d && !(e = ia.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ja.exec(h)) && (d = e.shift(), f.push({
                        value: d,
                        type: e[0].replace(ha, " ")
                    }), h = h.slice(d.length));
                    for (g in w.filter)!(e = na[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                        value: d,
                        type: g,
                        matches: e
                    }), h = h.slice(d.length));
                    if (!d)break
                }
                return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
            }, A = b.compile = function (a, b) {
                var c, d = [], e = [], f = T[a + " "];
                if (!f) {
                    for (b || (b = z(a)), c = b.length; c--;)f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                    f = T(a, t(e, d)), f.selector = a
                }
                return f
            }, B = b.select = function (a, b, c, d) {
                var e, f, g, h, i, j = "function" == typeof a && a, l = !d && z(a = j.selector || a);
                if (c = c || [], 1 === l.length) {
                    if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                        if (b = (w.find.ID(g.matches[0].replace(ua, va), b) || [])[0], !b)return c;
                        j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                    }
                    for (e = na.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);)if ((i = w.find[h]) && (d = i(g.matches[0].replace(ua, va), sa.test(f[0].type) && k(b.parentNode) || b))) {
                        if (f.splice(e, 1), a = d.length && m(f), !a)return $.apply(c, d), c;
                        break
                    }
                }
                return (j || A(a, l))(d, b, !I, c, !b || sa.test(a) && k(b.parentNode) || b), c
            }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function (a) {
                return 1 & a.compareDocumentPosition(G.createElement("div"))
            }), e(function (a) {
                return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
            }) || f("type|href|height|width", function (a, b, c) {
                return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
            }), v.attributes && e(function (a) {
                return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
            }) || f("value", function (a, b, c) {
                return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
            }), e(function (a) {
                return null == a.getAttribute("disabled")
            }) || f(ba, function (a, b, c) {
                var d;
                return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }), b
        }(a);
        na.find = sa, na.expr = sa.selectors, na.expr[":"] = na.expr.pseudos, na.uniqueSort = na.unique = sa.uniqueSort, na.text = sa.getText, na.isXMLDoc = sa.isXML, na.contains = sa.contains;
        var ta = function (a, b, c) {
            for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType;)if (1 === a.nodeType) {
                if (e && na(a).is(c))break;
                d.push(a)
            }
            return d
        }, ua = function (a, b) {
            for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
            return c
        }, va = na.expr.match.needsContext, wa = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, xa = /^.[^:#\[\.,]*$/;
        na.filter = function (a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? na.find.matchesSelector(d, a) ? [d] : [] : na.find.matches(a, na.grep(b, function (a) {
                return 1 === a.nodeType
            }))
        }, na.fn.extend({
            find: function (a) {
                var b, c = [], d = this, e = d.length;
                if ("string" != typeof a)return this.pushStack(na(a).filter(function () {
                    for (b = 0; e > b; b++)if (na.contains(d[b], this))return !0
                }));
                for (b = 0; e > b; b++)na.find(a, d[b], c);
                return c = this.pushStack(e > 1 ? na.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
            }, filter: function (a) {
                return this.pushStack(d(this, a || [], !1))
            }, not: function (a) {
                return this.pushStack(d(this, a || [], !0))
            }, is: function (a) {
                return !!d(this, "string" == typeof a && va.test(a) ? na(a) : a || [], !1).length
            }
        });
        var ya, za = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, Aa = na.fn.init = function (a, b, c) {
            var d, e;
            if (!a)return this;
            if (c = c || ya, "string" == typeof a) {
                if (d = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : za.exec(a), !d || !d[1] && b)return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (d[1]) {
                    if (b = b instanceof na ? b[0] : b, na.merge(this, na.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : da, !0)), wa.test(d[1]) && na.isPlainObject(b))for (d in b)na.isFunction(this[d]) ? this[d](b[d]) : this.attr(d, b[d]);
                    return this
                }
                if (e = da.getElementById(d[2]), e && e.parentNode) {
                    if (e.id !== d[2])return ya.find(a);
                    this.length = 1, this[0] = e
                }
                return this.context = da, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : na.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(na) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), na.makeArray(a, this))
        };
        Aa.prototype = na.fn, ya = na(da);
        var Ba = /^(?:parents|prev(?:Until|All))/, Ca = {children: !0, contents: !0, next: !0, prev: !0};
        na.fn.extend({
            has: function (a) {
                var b, c = na(a, this), d = c.length;
                return this.filter(function () {
                    for (b = 0; d > b; b++)if (na.contains(this, c[b]))return !0
                })
            }, closest: function (a, b) {
                for (var c, d = 0, e = this.length, f = [], g = va.test(a) || "string" != typeof a ? na(a, b || this.context) : 0; e > d; d++)for (c = this[d]; c && c !== b; c = c.parentNode)if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && na.find.matchesSelector(c, a))) {
                    f.push(c);
                    break
                }
                return this.pushStack(f.length > 1 ? na.uniqueSort(f) : f)
            }, index: function (a) {
                return a ? "string" == typeof a ? na.inArray(this[0], na(a)) : na.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (a, b) {
                return this.pushStack(na.uniqueSort(na.merge(this.get(), na(a, b))))
            }, addBack: function (a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
            }
        }), na.each({
            parent: function (a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null
            }, parents: function (a) {
                return ta(a, "parentNode")
            }, parentsUntil: function (a, b, c) {
                return ta(a, "parentNode", c)
            }, next: function (a) {
                return e(a, "nextSibling")
            }, prev: function (a) {
                return e(a, "previousSibling")
            }, nextAll: function (a) {
                return ta(a, "nextSibling")
            }, prevAll: function (a) {
                return ta(a, "previousSibling")
            }, nextUntil: function (a, b, c) {
                return ta(a, "nextSibling", c)
            }, prevUntil: function (a, b, c) {
                return ta(a, "previousSibling", c)
            }, siblings: function (a) {
                return ua((a.parentNode || {}).firstChild, a)
            }, children: function (a) {
                return ua(a.firstChild)
            }, contents: function (a) {
                return na.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : na.merge([], a.childNodes)
            }
        }, function (a, b) {
            na.fn[a] = function (c, d) {
                var e = na.map(this, b, c);
                return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = na.filter(d, e)), this.length > 1 && (Ca[a] || (e = na.uniqueSort(e)), Ba.test(a) && (e = e.reverse())), this.pushStack(e)
            }
        });
        var Da = /\S+/g;
        na.Callbacks = function (a) {
            a = "string" == typeof a ? f(a) : na.extend({}, a);
            var b, c, d, e, g = [], h = [], i = -1, j = function () {
                for (e = a.once, d = b = !0; h.length; i = -1)for (c = h.shift(); ++i < g.length;)g[i].apply(c[0], c[1]) === !1 && a.stopOnFalse && (i = g.length, c = !1);
                a.memory || (c = !1), b = !1, e && (g = c ? [] : "")
            }, k = {
                add: function () {
                    return g && (c && !b && (i = g.length - 1, h.push(c)), function b(c) {
                        na.each(c, function (c, d) {
                            na.isFunction(d) ? a.unique && k.has(d) || g.push(d) : d && d.length && "string" !== na.type(d) && b(d)
                        })
                    }(arguments), c && !b && j()), this
                }, remove: function () {
                    return na.each(arguments, function (a, b) {
                        for (var c; (c = na.inArray(b, g, c)) > -1;)g.splice(c, 1), i >= c && i--
                    }), this
                }, has: function (a) {
                    return a ? na.inArray(a, g) > -1 : g.length > 0
                }, empty: function () {
                    return g && (g = []), this
                }, disable: function () {
                    return e = h = [], g = c = "", this
                }, disabled: function () {
                    return !g
                }, lock: function () {
                    return e = !0, c || k.disable(), this
                }, locked: function () {
                    return !!e
                }, fireWith: function (a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], h.push(c), b || j()), this
                }, fire: function () {
                    return k.fireWith(this, arguments), this
                }, fired: function () {
                    return !!d
                }
            };
            return k
        }, na.extend({
            Deferred: function (a) {
                var b = [["resolve", "done", na.Callbacks("once memory"), "resolved"], ["reject", "fail", na.Callbacks("once memory"), "rejected"], ["notify", "progress", na.Callbacks("memory")]],
                    c = "pending", d = {
                        state: function () {
                            return c
                        }, always: function () {
                            return e.done(arguments).fail(arguments), this
                        }, then: function () {
                            var a = arguments;
                            return na.Deferred(function (c) {
                                na.each(b, function (b, f) {
                                    var g = na.isFunction(a[b]) && a[b];
                                    e[f[1]](function () {
                                        var a = g && g.apply(this, arguments);
                                        a && na.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                    })
                                }), a = null
                            }).promise()
                        }, promise: function (a) {
                            return null != a ? na.extend(a, d) : d
                        }
                    }, e = {};
                return d.pipe = d.then, na.each(b, function (a, f) {
                    var g = f[2], h = f[3];
                    d[f[1]] = g.add, h && g.add(function () {
                        c = h
                    }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                        return e[f[0] + "With"](this === e ? d : this, arguments), this
                    }, e[f[0] + "With"] = g.fireWith
                }), d.promise(e), a && a.call(e, e), e
            }, when: function (a) {
                var b, c, d, e = 0, f = ea.call(arguments), g = f.length,
                    h = 1 !== g || a && na.isFunction(a.promise) ? g : 0, i = 1 === h ? a : na.Deferred(),
                    j = function (a, c, d) {
                        return function (e) {
                            c[a] = this, d[a] = arguments.length > 1 ? ea.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                        }
                    };
                if (g > 1)for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++)f[e] && na.isFunction(f[e].promise) ? f[e].promise().progress(j(e, c, b)).done(j(e, d, f)).fail(i.reject) : --h;
                return h || i.resolveWith(d, f), i.promise()
            }
        });
        var Ea;
        na.fn.ready = function (a) {
            return na.ready.promise().done(a), this
        }, na.extend({
            isReady: !1, readyWait: 1, holdReady: function (a) {
                a ? na.readyWait++ : na.ready(!0)
            }, ready: function (a) {
                (a === !0 ? --na.readyWait : na.isReady) || (na.isReady = !0, a !== !0 && --na.readyWait > 0 || (Ea.resolveWith(da, [na]), na.fn.triggerHandler && (na(da).triggerHandler("ready"), na(da).off("ready"))))
            }
        }), na.ready.promise = function (b) {
            if (!Ea)if (Ea = na.Deferred(), "complete" === da.readyState || "loading" !== da.readyState && !da.documentElement.doScroll) a.setTimeout(na.ready); else if (da.addEventListener) da.addEventListener("DOMContentLoaded", h), a.addEventListener("load", h); else {
                da.attachEvent("onreadystatechange", h), a.attachEvent("onload", h);
                var c = !1;
                try {
                    c = null == a.frameElement && da.documentElement
                } catch (a) {
                }
                c && c.doScroll && !function b() {
                    if (!na.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (c) {
                            return a.setTimeout(b, 50)
                        }
                        g(), na.ready()
                    }
                }()
            }
            return Ea.promise(b)
        }, na.ready.promise();
        var Fa;
        for (Fa in na(la))break;
        la.ownFirst = "0" === Fa, la.inlineBlockNeedsLayout = !1, na(function () {
            var a, b, c, d;
            c = da.getElementsByTagName("body")[0], c && c.style && (b = da.createElement("div"), d = da.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", la.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
        }), function () {
            var a = da.createElement("div");
            la.deleteExpando = !0;
            try {
                delete a.test
            } catch (a) {
                la.deleteExpando = !1
            }
            a = null
        }();
        var Ga = function (a) {
            var b = na.noData[(a.nodeName + " ").toLowerCase()], c = +a.nodeType || 1;
            return (1 === c || 9 === c) && (!b || b !== !0 && a.getAttribute("classid") === b)
        }, Ha = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Ia = /([A-Z])/g;
        na.extend({
            cache: {},
            noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
            hasData: function (a) {
                return a = a.nodeType ? na.cache[a[na.expando]] : a[na.expando], !!a && !j(a)
            },
            data: function (a, b, c) {
                return k(a, b, c)
            },
            removeData: function (a, b) {
                return l(a, b)
            },
            _data: function (a, b, c) {
                return k(a, b, c, !0)
            },
            _removeData: function (a, b) {
                return l(a, b, !0)
            }
        }), na.fn.extend({
            data: function (a, b) {
                var c, d, e, f = this[0], g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = na.data(f), 1 === f.nodeType && !na._data(f, "parsedAttrs"))) {
                        for (c = g.length; c--;)g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = na.camelCase(d.slice(5)), i(f, d, e[d])));
                        na._data(f, "parsedAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function () {
                    na.data(this, a)
                }) : arguments.length > 1 ? this.each(function () {
                    na.data(this, a, b)
                }) : f ? i(f, a, na.data(f, a)) : void 0
            }, removeData: function (a) {
                return this.each(function () {
                    na.removeData(this, a)
                })
            }
        }), na.extend({
            queue: function (a, b, c) {
                var d;
                return a ? (b = (b || "fx") + "queue", d = na._data(a, b), c && (!d || na.isArray(c) ? d = na._data(a, b, na.makeArray(c)) : d.push(c)), d || []) : void 0
            }, dequeue: function (a, b) {
                b = b || "fx";
                var c = na.queue(a, b), d = c.length, e = c.shift(), f = na._queueHooks(a, b), g = function () {
                    na.dequeue(a, b)
                };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            }, _queueHooks: function (a, b) {
                var c = b + "queueHooks";
                return na._data(a, c) || na._data(a, c, {
                        empty: na.Callbacks("once memory").add(function () {
                            na._removeData(a, b + "queue"), na._removeData(a, c)
                        })
                    })
            }
        }), na.fn.extend({
            queue: function (a, b) {
                var c = 2;
                return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? na.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                    var c = na.queue(this, a, b);
                    na._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && na.dequeue(this, a)
                })
            }, dequeue: function (a) {
                return this.each(function () {
                    na.dequeue(this, a)
                })
            }, clearQueue: function (a) {
                return this.queue(a || "fx", [])
            }, promise: function (a, b) {
                var c, d = 1, e = na.Deferred(), f = this, g = this.length, h = function () {
                    --d || e.resolveWith(f, [f])
                };
                for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;)c = na._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b)
            }
        }), function () {
            var a;
            la.shrinkWrapBlocks = function () {
                if (null != a)return a;
                a = !1;
                var b, c, d;
                return c = da.getElementsByTagName("body")[0], c && c.style ? (b = da.createElement("div"), d = da.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(da.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
            }
        }();
        var Ja = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Ka = new RegExp("^(?:([+-])=|)(" + Ja + ")([a-z%]*)$", "i"), La = ["Top", "Right", "Bottom", "Left"],
            Ma = function (a, b) {
                return a = b || a, "none" === na.css(a, "display") || !na.contains(a.ownerDocument, a)
            }, Na = function (a, b, c, d, e, f, g) {
                var h = 0, i = a.length, j = null == c;
                if ("object" === na.type(c)) {
                    e = !0;
                    for (h in c)Na(a, b, h, c[h], !0, f, g)
                } else if (void 0 !== d && (e = !0, na.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                        return j.call(na(a), c)
                    })), b))for (; i > h; h++)b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
                return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
            }, Oa = /^(?:checkbox|radio)$/i, Pa = /<([\w:-]+)/, Qa = /^$|\/(?:java|ecma)script/i, Ra = /^\s+/,
            Sa = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
        !function () {
            var a = da.createElement("div"), b = da.createDocumentFragment(), c = da.createElement("input");
            a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", la.leadingWhitespace = 3 === a.firstChild.nodeType, la.tbody = !a.getElementsByTagName("tbody").length, la.htmlSerialize = !!a.getElementsByTagName("link").length, la.html5Clone = "<:nav></:nav>" !== da.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), la.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", la.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = da.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), la.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, la.noCloneEvent = !!a.addEventListener, a[na.expando] = 1, la.attributes = !a.getAttribute(na.expando)
        }();
        var Ta = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: la.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        };
        Ta.optgroup = Ta.option, Ta.tbody = Ta.tfoot = Ta.colgroup = Ta.caption = Ta.thead, Ta.th = Ta.td;
        var Ua = /<|&#?\w+;/, Va = /<tbody/i;
        !function () {
            var b, c, d = da.createElement("div");
            for (b in{
                submit: !0,
                change: !0,
                focusin: !0
            })c = "on" + b, (la[b] = c in a) || (d.setAttribute(c, "t"), la[b] = d.attributes[c].expando === !1);
            d = null
        }();
        var Wa = /^(?:input|select|textarea)$/i, Xa = /^key/, Ya = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Za = /^(?:focusinfocus|focusoutblur)$/, $a = /^([^.]*)(?:\.(.+)|)/;
        na.event = {
            global: {},
            add: function (a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = na._data(a);
                if (q) {
                    for (c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = na.guid++), (g = q.events) || (g = q.events = {}), (k = q.handle) || (k = q.handle = function (a) {
                        return "undefined" == typeof na || a && na.event.triggered === a.type ? void 0 : na.event.dispatch.apply(k.elem, arguments)
                    }, k.elem = a), b = (b || "").match(Da) || [""], h = b.length; h--;)f = $a.exec(b[h]) || [], n = p = f[1], o = (f[2] || "").split(".").sort(), n && (j = na.event.special[n] || {}, n = (e ? j.delegateType : j.bindType) || n, j = na.event.special[n] || {}, l = na.extend({
                        type: n,
                        origType: p,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && na.expr.match.needsContext.test(e),
                        namespace: o.join(".")
                    }, i), (m = g[n]) || (m = g[n] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, o, k) !== !1 || (a.addEventListener ? a.addEventListener(n, k, !1) : a.attachEvent && a.attachEvent("on" + n, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), na.event.global[n] = !0);
                    a = null
                }
            },
            remove: function (a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = na.hasData(a) && na._data(a);
                if (q && (k = q.events)) {
                    for (b = (b || "").match(Da) || [""], j = b.length; j--;)if (h = $a.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = na.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = k[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; f--;)g = m[f], !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || na.removeEvent(a, n, q.handle), delete k[n])
                    } else for (n in k)na.event.remove(a, n + b[j], c, d, !0);
                    na.isEmptyObject(k) && (delete q.handle, na._removeData(a, "events"))
                }
            },
            trigger: function (b, c, d, e) {
                var f, g, h, i, j, k, l, m = [d || da], n = ka.call(b, "type") ? b.type : b,
                    o = ka.call(b, "namespace") ? b.namespace.split(".") : [];
                if (h = k = d = d || da, 3 !== d.nodeType && 8 !== d.nodeType && !Za.test(n + na.event.triggered) && (n.indexOf(".") > -1 && (o = n.split("."), n = o.shift(), o.sort()), g = n.indexOf(":") < 0 && "on" + n, b = b[na.expando] ? b : new na.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : na.makeArray(c, [b]), j = na.event.special[n] || {}, e || !j.trigger || j.trigger.apply(d, c) !== !1)) {
                    if (!e && !j.noBubble && !na.isWindow(d)) {
                        for (i = j.delegateType || n, Za.test(i + n) || (h = h.parentNode); h; h = h.parentNode)m.push(h), k = h;
                        k === (d.ownerDocument || da) && m.push(k.defaultView || k.parentWindow || a)
                    }
                    for (l = 0; (h = m[l++]) && !b.isPropagationStopped();)b.type = l > 1 ? i : j.bindType || n, f = (na._data(h, "events") || {})[b.type] && na._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && Ga(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                    if (b.type = n, !e && !b.isDefaultPrevented() && (!j._default || j._default.apply(m.pop(), c) === !1) && Ga(d) && g && d[n] && !na.isWindow(d)) {
                        k = d[g], k && (d[g] = null), na.event.triggered = n;
                        try {
                            d[n]()
                        } catch (a) {
                        }
                        na.event.triggered = void 0, k && (d[g] = k)
                    }
                    return b.result
                }
            },
            dispatch: function (a) {
                a = na.event.fix(a);
                var b, c, d, e, f, g = [], h = ea.call(arguments), i = (na._data(this, "events") || {})[a.type] || [],
                    j = na.event.special[a.type] || {};
                if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                    for (g = na.event.handlers.call(this, a, i), b = 0; (e = g[b++]) && !a.isPropagationStopped();)for (a.currentTarget = e.elem, c = 0; (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();)a.rnamespace && !a.rnamespace.test(f.namespace) || (a.handleObj = f, a.data = f.data, d = ((na.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                    return j.postDispatch && j.postDispatch.call(this, a), a.result
                }
            },
            handlers: function (a, b) {
                var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
                if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))for (; i != this; i = i.parentNode || this)if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                    for (d = [], c = 0; h > c; c++)f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? na(e, this).index(i) > -1 : na.find(e, this, null, [i]).length), d[e] && d.push(f);
                    d.length && g.push({elem: i, handlers: d})
                }
                return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g
            },
            fix: function (a) {
                if (a[na.expando])return a;
                var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
                for (g || (this.fixHooks[e] = g = Ya.test(e) ? this.mouseHooks : Xa.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new na.Event(f), b = d.length; b--;)c = d[b], a[c] = f[c];
                return a.target || (a.target = f.srcElement || da), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "), filter: function (a, b) {
                    return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (a, b) {
                    var c, d, e, f = b.button, g = b.fromElement;
                    return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || da, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
                }
            },
            special: {
                load: {noBubble: !0}, focus: {
                    trigger: function () {
                        if (this !== u() && this.focus)try {
                            return this.focus(), !1
                        } catch (a) {
                        }
                    }, delegateType: "focusin"
                }, blur: {
                    trigger: function () {
                        return this === u() && this.blur ? (this.blur(), !1) : void 0
                    }, delegateType: "focusout"
                }, click: {
                    trigger: function () {
                        return na.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    }, _default: function (a) {
                        return na.nodeName(a.target, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (a) {
                        void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                    }
                }
            },
            simulate: function (a, b, c) {
                var d = na.extend(new na.Event, c, {type: a, isSimulated: !0});
                na.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
            }
        }, na.removeEvent = da.removeEventListener ? function (a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c)
        } : function (a, b, c) {
            var d = "on" + b;
            a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c))
        }, na.Event = function (a, b) {
            return this instanceof na.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? s : t) : this.type = a, b && na.extend(this, b), this.timeStamp = a && a.timeStamp || na.now(), void(this[na.expando] = !0)) : new na.Event(a, b)
        }, na.Event.prototype = {
            constructor: na.Event,
            isDefaultPrevented: t,
            isPropagationStopped: t,
            isImmediatePropagationStopped: t,
            preventDefault: function () {
                var a = this.originalEvent;
                this.isDefaultPrevented = s, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            },
            stopPropagation: function () {
                var a = this.originalEvent;
                this.isPropagationStopped = s, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                var a = this.originalEvent;
                this.isImmediatePropagationStopped = s, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
            }
        }, na.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (a, b) {
            na.event.special[a] = {
                delegateType: b, bindType: b, handle: function (a) {
                    var c, d = this, e = a.relatedTarget, f = a.handleObj;
                    return e && (e === d || na.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
                }
            }
        }), la.submit || (na.event.special.submit = {
            setup: function () {
                return !na.nodeName(this, "form") && void na.event.add(this, "click._submit keypress._submit", function (a) {
                        var b = a.target,
                            c = na.nodeName(b, "input") || na.nodeName(b, "button") ? na.prop(b, "form") : void 0;
                        c && !na._data(c, "submit") && (na.event.add(c, "submit._submit", function (a) {
                            a._submitBubble = !0
                        }), na._data(c, "submit", !0))
                    })
            }, postDispatch: function (a) {
                a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && na.event.simulate("submit", this.parentNode, a))
            }, teardown: function () {
                return !na.nodeName(this, "form") && void na.event.remove(this, "._submit")
            }
        }), la.change || (na.event.special.change = {
            setup: function () {
                return Wa.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (na.event.add(this, "propertychange._change", function (a) {
                    "checked" === a.originalEvent.propertyName && (this._justChanged = !0)
                }), na.event.add(this, "click._change", function (a) {
                    this._justChanged && !a.isTrigger && (this._justChanged = !1), na.event.simulate("change", this, a)
                })), !1) : void na.event.add(this, "beforeactivate._change", function (a) {
                    var b = a.target;
                    Wa.test(b.nodeName) && !na._data(b, "change") && (na.event.add(b, "change._change", function (a) {
                        !this.parentNode || a.isSimulated || a.isTrigger || na.event.simulate("change", this.parentNode, a)
                    }), na._data(b, "change", !0))
                })
            }, handle: function (a) {
                var b = a.target;
                return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
            }, teardown: function () {
                return na.event.remove(this, "._change"), !Wa.test(this.nodeName)
            }
        }), la.focusin || na.each({focus: "focusin", blur: "focusout"}, function (a, b) {
            var c = function (a) {
                na.event.simulate(b, a.target, na.event.fix(a))
            };
            na.event.special[b] = {
                setup: function () {
                    var d = this.ownerDocument || this, e = na._data(d, b);
                    e || d.addEventListener(a, c, !0), na._data(d, b, (e || 0) + 1)
                }, teardown: function () {
                    var d = this.ownerDocument || this, e = na._data(d, b) - 1;
                    e ? na._data(d, b, e) : (d.removeEventListener(a, c, !0), na._removeData(d, b))
                }
            }
        }), na.fn.extend({
            on: function (a, b, c, d) {
                return v(this, a, b, c, d)
            }, one: function (a, b, c, d) {
                return v(this, a, b, c, d, 1)
            }, off: function (a, b, c) {
                var d, e;
                if (a && a.preventDefault && a.handleObj)return d = a.handleObj, na(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
                if ("object" == typeof a) {
                    for (e in a)this.off(e, b, a[e]);
                    return this
                }
                return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = t), this.each(function () {
                    na.event.remove(this, a, c, b)
                })
            }, trigger: function (a, b) {
                return this.each(function () {
                    na.event.trigger(a, b, this)
                })
            }, triggerHandler: function (a, b) {
                var c = this[0];
                return c ? na.event.trigger(a, b, c, !0) : void 0
            }
        });
        var _a = / jQuery\d+="(?:null|\d+)"/g, ab = new RegExp("<(?:" + Sa + ")[\\s/>]", "i"),
            bb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            cb = /<script|<style|<link/i, db = /checked\s*(?:[^=]|=\s*.checked.)/i, eb = /^true\/(.*)/,
            fb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, gb = n(da), hb = gb.appendChild(da.createElement("div"));
        na.extend({
            htmlPrefilter: function (a) {
                return a.replace(bb, "<$1></$2>")
            }, clone: function (a, b, c) {
                var d, e, f, g, h, i = na.contains(a.ownerDocument, a);
                if (la.html5Clone || na.isXMLDoc(a) || !ab.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (hb.innerHTML = a.outerHTML, hb.removeChild(f = hb.firstChild)), !(la.noCloneEvent && la.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || na.isXMLDoc(a)))for (d = o(f), h = o(a), g = 0; null != (e = h[g]); ++g)d[g] && A(e, d[g]);
                if (b)if (c)for (h = h || o(a), d = d || o(f), g = 0; null != (e = h[g]); g++)z(e, d[g]); else z(a, f);
                return d = o(f, "script"), d.length > 0 && p(d, !i && o(a, "script")), d = h = e = null, f
            }, cleanData: function (a, b) {
                for (var c, d, e, f, g = 0, h = na.expando, i = na.cache, j = la.attributes, k = na.event.special; null != (c = a[g]); g++)if ((b || Ga(c)) && (e = c[h], f = e && i[e])) {
                    if (f.events)for (d in f.events)k[d] ? na.event.remove(c, d) : na.removeEvent(c, d, f.handle);
                    i[e] && (delete i[e], j || "undefined" == typeof c.removeAttribute ? c[h] = void 0 : c.removeAttribute(h), ca.push(e))
                }
            }
        }), na.fn.extend({
            domManip: B, detach: function (a) {
                return C(this, a, !0)
            }, remove: function (a) {
                return C(this, a)
            }, text: function (a) {
                return Na(this, function (a) {
                    return void 0 === a ? na.text(this) : this.empty().append((this[0] && this[0].ownerDocument || da).createTextNode(a))
                }, null, a, arguments.length)
            }, append: function () {
                return B(this, arguments, function (a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = w(this, a);
                        b.appendChild(a)
                    }
                })
            }, prepend: function () {
                return B(this, arguments, function (a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = w(this, a);
                        b.insertBefore(a, b.firstChild)
                    }
                })
            }, before: function () {
                return B(this, arguments, function (a) {
                    this.parentNode && this.parentNode.insertBefore(a, this)
                })
            }, after: function () {
                return B(this, arguments, function (a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                })
            }, empty: function () {
                for (var a, b = 0; null != (a = this[b]); b++) {
                    for (1 === a.nodeType && na.cleanData(o(a, !1)); a.firstChild;)a.removeChild(a.firstChild);
                    a.options && na.nodeName(a, "select") && (a.options.length = 0)
                }
                return this
            }, clone: function (a, b) {
                return a = null != a && a, b = null == b ? a : b, this.map(function () {
                    return na.clone(this, a, b)
                })
            }, html: function (a) {
                return Na(this, function (a) {
                    var b = this[0] || {}, c = 0, d = this.length;
                    if (void 0 === a)return 1 === b.nodeType ? b.innerHTML.replace(_a, "") : void 0;
                    if ("string" == typeof a && !cb.test(a) && (la.htmlSerialize || !ab.test(a)) && (la.leadingWhitespace || !Ra.test(a)) && !Ta[(Pa.exec(a) || ["", ""])[1].toLowerCase()]) {
                        a = na.htmlPrefilter(a);
                        try {
                            for (; d > c; c++)b = this[c] || {}, 1 === b.nodeType && (na.cleanData(o(b, !1)), b.innerHTML = a);
                            b = 0
                        } catch (a) {
                        }
                    }
                    b && this.empty().append(a)
                }, null, a, arguments.length)
            }, replaceWith: function () {
                var a = [];
                return B(this, arguments, function (b) {
                    var c = this.parentNode;
                    na.inArray(this, a) < 0 && (na.cleanData(o(this)),
                    c && c.replaceChild(b, this))
                }, a)
            }
        }), na.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (a, b) {
            na.fn[a] = function (a) {
                for (var c, d = 0, e = [], f = na(a), g = f.length - 1; g >= d; d++)c = d === g ? this : this.clone(!0), na(f[d])[b](c), ga.apply(e, c.get());
                return this.pushStack(e)
            }
        });
        var ib, jb = {HTML: "block", BODY: "block"}, kb = /^margin/,
            lb = new RegExp("^(" + Ja + ")(?!px)[a-z%]+$", "i"), mb = function (a, b, c, d) {
                var e, f, g = {};
                for (f in b)g[f] = a.style[f], a.style[f] = b[f];
                e = c.apply(a, d || []);
                for (f in b)a.style[f] = g[f];
                return e
            }, nb = da.documentElement;
        !function () {
            function b() {
                var b, k, l = da.documentElement;
                l.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", c = e = h = !1, d = g = !0, a.getComputedStyle && (k = a.getComputedStyle(j), c = "1%" !== (k || {}).top, h = "2px" === (k || {}).marginLeft, e = "4px" === (k || {width: "4px"}).width, j.style.marginRight = "50%", d = "4px" === (k || {marginRight: "4px"}).marginRight, b = j.appendChild(da.createElement("div")), b.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", b.style.marginRight = b.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(b) || {}).marginRight), j.removeChild(b)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", j.childNodes[0].style.borderCollapse = "separate", b = j.getElementsByTagName("td"), b[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === b[0].offsetHeight, f && (b[0].style.display = "", b[1].style.display = "none", f = 0 === b[0].offsetHeight)), l.removeChild(i)
            }

            var c, d, e, f, g, h, i = da.createElement("div"), j = da.createElement("div");
            j.style && (j.style.cssText = "float:left;opacity:.5", la.opacity = "0.5" === j.style.opacity, la.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", la.clearCloneStyle = "content-box" === j.style.backgroundClip, i = da.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), la.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, na.extend(la, {
                reliableHiddenOffsets: function () {
                    return null == c && b(), f
                }, boxSizingReliable: function () {
                    return null == c && b(), e
                }, pixelMarginRight: function () {
                    return null == c && b(), d
                }, pixelPosition: function () {
                    return null == c && b(), c
                }, reliableMarginRight: function () {
                    return null == c && b(), g
                }, reliableMarginLeft: function () {
                    return null == c && b(), h
                }
            }))
        }();
        var ob, pb, qb = /^(top|right|bottom|left)$/;
        a.getComputedStyle ? (ob = function (b) {
            var c = b.ownerDocument.defaultView;
            return c && c.opener || (c = a), c.getComputedStyle(b)
        }, pb = function (a, b, c) {
            var d, e, f, g, h = a.style;
            return c = c || ob(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || na.contains(a.ownerDocument, a) || (g = na.style(a, b)), c && !la.pixelMarginRight() && lb.test(g) && kb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g : g + ""
        }) : nb.currentStyle && (ob = function (a) {
                return a.currentStyle
            }, pb = function (a, b, c) {
                var d, e, f, g, h = a.style;
                return c = c || ob(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), lb.test(g) && !qb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
            });
        var rb = /alpha\([^)]*\)/i, sb = /opacity\s*=\s*([^)]*)/i, tb = /^(none|table(?!-c[ea]).+)/,
            ub = new RegExp("^(" + Ja + ")(.*)$", "i"),
            vb = {position: "absolute", visibility: "hidden", display: "block"},
            wb = {letterSpacing: "0", fontWeight: "400"}, xb = ["Webkit", "O", "Moz", "ms"],
            yb = da.createElement("div").style;
        na.extend({
            cssHooks: {
                opacity: {
                    get: function (a, b) {
                        if (b) {
                            var c = pb(a, "opacity");
                            return "" === c ? "1" : c
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {float: la.cssFloat ? "cssFloat" : "styleFloat"},
            style: function (a, b, c, d) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var e, f, g, h = na.camelCase(b), i = a.style;
                    if (b = na.cssProps[h] || (na.cssProps[h] = G(h) || h), g = na.cssHooks[b] || na.cssHooks[h], void 0 === c)return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                    if (f = typeof c, "string" === f && (e = Ka.exec(c)) && e[1] && (c = m(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (na.cssNumber[h] ? "" : "px")), la.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d)))))try {
                        i[b] = c
                    } catch (a) {
                    }
                }
            },
            css: function (a, b, c, d) {
                var e, f, g, h = na.camelCase(b);
                return b = na.cssProps[h] || (na.cssProps[h] = G(h) || h), g = na.cssHooks[b] || na.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = pb(a, b, d)), "normal" === f && b in wb && (f = wb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || isFinite(e) ? e || 0 : f) : f
            }
        }), na.each(["height", "width"], function (a, b) {
            na.cssHooks[b] = {
                get: function (a, c, d) {
                    return c ? tb.test(na.css(a, "display")) && 0 === a.offsetWidth ? mb(a, vb, function () {
                        return K(a, b, d)
                    }) : K(a, b, d) : void 0
                }, set: function (a, c, d) {
                    var e = d && ob(a);
                    return I(a, c, d ? J(a, b, d, la.boxSizing && "border-box" === na.css(a, "boxSizing", !1, e), e) : 0)
                }
            }
        }), la.opacity || (na.cssHooks.opacity = {
            get: function (a, b) {
                return sb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
            }, set: function (a, b) {
                var c = a.style, d = a.currentStyle, e = na.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                    f = d && d.filter || c.filter || "";
                c.zoom = 1, (b >= 1 || "" === b) && "" === na.trim(f.replace(rb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = rb.test(f) ? f.replace(rb, e) : f + " " + e)
            }
        }), na.cssHooks.marginRight = F(la.reliableMarginRight, function (a, b) {
            return b ? mb(a, {display: "inline-block"}, pb, [a, "marginRight"]) : void 0
        }), na.cssHooks.marginLeft = F(la.reliableMarginLeft, function (a, b) {
            return b ? (parseFloat(pb(a, "marginLeft")) || (na.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - mb(a, {marginLeft: 0}, function () {
                        return a.getBoundingClientRect().left
                    }) : 0)) + "px" : void 0
        }), na.each({margin: "", padding: "", border: "Width"}, function (a, b) {
            na.cssHooks[a + b] = {
                expand: function (c) {
                    for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)e[a + La[d] + b] = f[d] || f[d - 2] || f[0];
                    return e
                }
            }, kb.test(a) || (na.cssHooks[a + b].set = I)
        }), na.fn.extend({
            css: function (a, b) {
                return Na(this, function (a, b, c) {
                    var d, e, f = {}, g = 0;
                    if (na.isArray(b)) {
                        for (d = ob(a), e = b.length; e > g; g++)f[b[g]] = na.css(a, b[g], !1, d);
                        return f
                    }
                    return void 0 !== c ? na.style(a, b, c) : na.css(a, b)
                }, a, b, arguments.length > 1)
            }, show: function () {
                return H(this, !0)
            }, hide: function () {
                return H(this)
            }, toggle: function (a) {
                return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                    Ma(this) ? na(this).show() : na(this).hide()
                })
            }
        }), na.Tween = L, L.prototype = {
            constructor: L, init: function (a, b, c, d, e, f) {
                this.elem = a, this.prop = c, this.easing = e || na.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (na.cssNumber[c] ? "" : "px")
            }, cur: function () {
                var a = L.propHooks[this.prop];
                return a && a.get ? a.get(this) : L.propHooks._default.get(this)
            }, run: function (a) {
                var b, c = L.propHooks[this.prop];
                return this.options.duration ? this.pos = b = na.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : L.propHooks._default.set(this), this
            }
        }, L.prototype.init.prototype = L.prototype, L.propHooks = {
            _default: {
                get: function (a) {
                    var b;
                    return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = na.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
                }, set: function (a) {
                    na.fx.step[a.prop] ? na.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[na.cssProps[a.prop]] && !na.cssHooks[a.prop] ? a.elem[a.prop] = a.now : na.style(a.elem, a.prop, a.now + a.unit)
                }
            }
        }, L.propHooks.scrollTop = L.propHooks.scrollLeft = {
            set: function (a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
            }
        }, na.easing = {
            linear: function (a) {
                return a
            }, swing: function (a) {
                return .5 - Math.cos(a * Math.PI) / 2
            }, _default: "swing"
        }, na.fx = L.prototype.init, na.fx.step = {};
        var zb, Ab, Bb = /^(?:toggle|show|hide)$/, Cb = /queueHooks$/;
        na.Animation = na.extend(R, {
            tweeners: {
                "*": [function (a, b) {
                    var c = this.createTween(a, b);
                    return m(c.elem, a, Ka.exec(b), c), c
                }]
            }, tweener: function (a, b) {
                na.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(Da);
                for (var c, d = 0, e = a.length; e > d; d++)c = a[d], R.tweeners[c] = R.tweeners[c] || [], R.tweeners[c].unshift(b)
            }, prefilters: [P], prefilter: function (a, b) {
                b ? R.prefilters.unshift(a) : R.prefilters.push(a)
            }
        }), na.speed = function (a, b, c) {
            var d = a && "object" == typeof a ? na.extend({}, a) : {
                complete: c || !c && b || na.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !na.isFunction(b) && b
            };
            return d.duration = na.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in na.fx.speeds ? na.fx.speeds[d.duration] : na.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
                na.isFunction(d.old) && d.old.call(this), d.queue && na.dequeue(this, d.queue)
            }, d
        }, na.fn.extend({
            fadeTo: function (a, b, c, d) {
                return this.filter(Ma).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
            }, animate: function (a, b, c, d) {
                var e = na.isEmptyObject(a), f = na.speed(b, c, d), g = function () {
                    var b = R(this, na.extend({}, a), f);
                    (e || na._data(this, "finish")) && b.stop(!0)
                };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            }, stop: function (a, b, c) {
                var d = function (a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                    var b = !0, e = null != a && a + "queueHooks", f = na.timers, g = na._data(this);
                    if (e) g[e] && g[e].stop && d(g[e]); else for (e in g)g[e] && g[e].stop && Cb.test(e) && d(g[e]);
                    for (e = f.length; e--;)f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || na.dequeue(this, a)
                })
            }, finish: function (a) {
                return a !== !1 && (a = a || "fx"), this.each(function () {
                    var b, c = na._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = na.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, na.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++)d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), na.each(["toggle", "show", "hide"], function (a, b) {
            var c = na.fn[b];
            na.fn[b] = function (a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(N(b, !0), a, d, e)
            }
        }), na.each({
            slideDown: N("show"),
            slideUp: N("hide"),
            slideToggle: N("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (a, b) {
            na.fn[a] = function (a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), na.timers = [], na.fx.tick = function () {
            var a, b = na.timers, c = 0;
            for (zb = na.now(); c < b.length; c++)a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || na.fx.stop(), zb = void 0
        }, na.fx.timer = function (a) {
            na.timers.push(a), a() ? na.fx.start() : na.timers.pop()
        }, na.fx.interval = 13, na.fx.start = function () {
            Ab || (Ab = a.setInterval(na.fx.tick, na.fx.interval))
        }, na.fx.stop = function () {
            a.clearInterval(Ab), Ab = null
        }, na.fx.speeds = {slow: 600, fast: 200, _default: 400}, na.fn.delay = function (b, c) {
            return b = na.fx ? na.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function () {
                    a.clearTimeout(e)
                }
            })
        }, function () {
            var a, b = da.createElement("input"), c = da.createElement("div"), d = da.createElement("select"),
                e = d.appendChild(da.createElement("option"));
            c = da.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", la.getSetAttribute = "t" !== c.className, la.style = /top/.test(a.getAttribute("style")), la.hrefNormalized = "/a" === a.getAttribute("href"), la.checkOn = !!b.value, la.optSelected = e.selected, la.enctype = !!da.createElement("form").enctype, d.disabled = !0, la.optDisabled = !e.disabled, b = da.createElement("input"), b.setAttribute("value", ""), la.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), la.radioValue = "t" === b.value
        }();
        var Db = /\r/g, Eb = /[\x20\t\r\n\f]+/g;
        na.fn.extend({
            val: function (a) {
                var b, c, d, e = this[0];
                return arguments.length ? (d = na.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, na(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : na.isArray(e) && (e = na.map(e, function (a) {
                            return null == a ? "" : a + ""
                        })), b = na.valHooks[this.type] || na.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                })) : e ? (b = na.valHooks[e.type] || na.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(Db, "") : null == c ? "" : c)) : void 0
            }
        }), na.extend({
            valHooks: {
                option: {
                    get: function (a) {
                        var b = na.find.attr(a, "value");
                        return null != b ? b : na.trim(na.text(a)).replace(Eb, " ")
                    }
                }, select: {
                    get: function (a) {
                        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)if (c = d[i], (c.selected || i === e) && (la.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !na.nodeName(c.parentNode, "optgroup"))) {
                            if (b = na(c).val(), f)return b;
                            g.push(b)
                        }
                        return g
                    }, set: function (a, b) {
                        for (var c, d, e = a.options, f = na.makeArray(b), g = e.length; g--;)if (d = e[g], na.inArray(na.valHooks.option.get(d), f) > -1)try {
                            d.selected = c = !0
                        } catch (a) {
                            d.scrollHeight
                        } else d.selected = !1;
                        return c || (a.selectedIndex = -1), e
                    }
                }
            }
        }), na.each(["radio", "checkbox"], function () {
            na.valHooks[this] = {
                set: function (a, b) {
                    return na.isArray(b) ? a.checked = na.inArray(na(a).val(), b) > -1 : void 0
                }
            }, la.checkOn || (na.valHooks[this].get = function (a) {
                return null === a.getAttribute("value") ? "on" : a.value
            })
        });
        var Fb, Gb, Hb = na.expr.attrHandle, Ib = /^(?:checked|selected)$/i, Jb = la.getSetAttribute, Kb = la.input;
        na.fn.extend({
            attr: function (a, b) {
                return Na(this, na.attr, a, b, arguments.length > 1)
            }, removeAttr: function (a) {
                return this.each(function () {
                    na.removeAttr(this, a)
                })
            }
        }), na.extend({
            attr: function (a, b, c) {
                var d, e, f = a.nodeType;
                if (3 !== f && 8 !== f && 2 !== f)return "undefined" == typeof a.getAttribute ? na.prop(a, b, c) : (1 === f && na.isXMLDoc(a) || (b = b.toLowerCase(), e = na.attrHooks[b] || (na.expr.match.bool.test(b) ? Gb : Fb)), void 0 !== c ? null === c ? void na.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = na.find.attr(a, b), null == d ? void 0 : d))
            }, attrHooks: {
                type: {
                    set: function (a, b) {
                        if (!la.radioValue && "radio" === b && na.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b), c && (a.value = c), b
                        }
                    }
                }
            }, removeAttr: function (a, b) {
                var c, d, e = 0, f = b && b.match(Da);
                if (f && 1 === a.nodeType)for (; c = f[e++];)d = na.propFix[c] || c, na.expr.match.bool.test(c) ? Kb && Jb || !Ib.test(c) ? a[d] = !1 : a[na.camelCase("default-" + c)] = a[d] = !1 : na.attr(a, c, ""), a.removeAttribute(Jb ? c : d)
            }
        }), Gb = {
            set: function (a, b, c) {
                return b === !1 ? na.removeAttr(a, c) : Kb && Jb || !Ib.test(c) ? a.setAttribute(!Jb && na.propFix[c] || c, c) : a[na.camelCase("default-" + c)] = a[c] = !0, c
            }
        }, na.each(na.expr.match.bool.source.match(/\w+/g), function (a, b) {
            var c = Hb[b] || na.find.attr;
            Kb && Jb || !Ib.test(b) ? Hb[b] = function (a, b, d) {
                var e, f;
                return d || (f = Hb[b], Hb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, Hb[b] = f), e
            } : Hb[b] = function (a, b, c) {
                return c ? void 0 : a[na.camelCase("default-" + b)] ? b.toLowerCase() : null
            }
        }), Kb && Jb || (na.attrHooks.value = {
            set: function (a, b, c) {
                return na.nodeName(a, "input") ? void(a.defaultValue = b) : Fb && Fb.set(a, b, c)
            }
        }), Jb || (Fb = {
            set: function (a, b, c) {
                var d = a.getAttributeNode(c);
                return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
            }
        }, Hb.id = Hb.name = Hb.coords = function (a, b, c) {
            var d;
            return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
        }, na.valHooks.button = {
            get: function (a, b) {
                var c = a.getAttributeNode(b);
                return c && c.specified ? c.value : void 0
            }, set: Fb.set
        }, na.attrHooks.contenteditable = {
            set: function (a, b, c) {
                Fb.set(a, "" !== b && b, c)
            }
        }, na.each(["width", "height"], function (a, b) {
            na.attrHooks[b] = {
                set: function (a, c) {
                    return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
                }
            }
        })), la.style || (na.attrHooks.style = {
            get: function (a) {
                return a.style.cssText || void 0
            }, set: function (a, b) {
                return a.style.cssText = b + ""
            }
        });
        var Lb = /^(?:input|select|textarea|button|object)$/i, Mb = /^(?:a|area)$/i;
        na.fn.extend({
            prop: function (a, b) {
                return Na(this, na.prop, a, b, arguments.length > 1)
            }, removeProp: function (a) {
                return a = na.propFix[a] || a, this.each(function () {
                    try {
                        this[a] = void 0, delete this[a]
                    } catch (a) {
                    }
                })
            }
        }), na.extend({
            prop: function (a, b, c) {
                var d, e, f = a.nodeType;
                if (3 !== f && 8 !== f && 2 !== f)return 1 === f && na.isXMLDoc(a) || (b = na.propFix[b] || b, e = na.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
            }, propHooks: {
                tabIndex: {
                    get: function (a) {
                        var b = na.find.attr(a, "tabindex");
                        return b ? parseInt(b, 10) : Lb.test(a.nodeName) || Mb.test(a.nodeName) && a.href ? 0 : -1
                    }
                }
            }, propFix: {for: "htmlFor", class: "className"}
        }), la.hrefNormalized || na.each(["href", "src"], function (a, b) {
            na.propHooks[b] = {
                get: function (a) {
                    return a.getAttribute(b, 4)
                }
            }
        }), la.optSelected || (na.propHooks.selected = {
            get: function (a) {
                var b = a.parentNode;
                return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
            }, set: function (a) {
                var b = a.parentNode;
                b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
            }
        }), na.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            na.propFix[this.toLowerCase()] = this
        }), la.enctype || (na.propFix.enctype = "encoding");
        var Nb = /[\t\r\n\f]/g;
        na.fn.extend({
            addClass: function (a) {
                var b, c, d, e, f, g, h, i = 0;
                if (na.isFunction(a))return this.each(function (b) {
                    na(this).addClass(a.call(this, b, S(this)))
                });
                if ("string" == typeof a && a)for (b = a.match(Da) || []; c = this[i++];)if (e = S(c), d = 1 === c.nodeType && (" " + e + " ").replace(Nb, " ")) {
                    for (g = 0; f = b[g++];)d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                    h = na.trim(d), e !== h && na.attr(c, "class", h)
                }
                return this
            }, removeClass: function (a) {
                var b, c, d, e, f, g, h, i = 0;
                if (na.isFunction(a))return this.each(function (b) {
                    na(this).removeClass(a.call(this, b, S(this)))
                });
                if (!arguments.length)return this.attr("class", "");
                if ("string" == typeof a && a)for (b = a.match(Da) || []; c = this[i++];)if (e = S(c), d = 1 === c.nodeType && (" " + e + " ").replace(Nb, " ")) {
                    for (g = 0; f = b[g++];)for (; d.indexOf(" " + f + " ") > -1;)d = d.replace(" " + f + " ", " ");
                    h = na.trim(d), e !== h && na.attr(c, "class", h)
                }
                return this
            }, toggleClass: function (a, b) {
                var c = typeof a;
                return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : na.isFunction(a) ? this.each(function (c) {
                    na(this).toggleClass(a.call(this, c, S(this), b), b)
                }) : this.each(function () {
                    var b, d, e, f;
                    if ("string" === c)for (d = 0, e = na(this), f = a.match(Da) || []; b = f[d++];)e.hasClass(b) ? e.removeClass(b) : e.addClass(b); else void 0 !== a && "boolean" !== c || (b = S(this), b && na._data(this, "__className__", b), na.attr(this, "class", b || a === !1 ? "" : na._data(this, "__className__") || ""))
                })
            }, hasClass: function (a) {
                var b, c, d = 0;
                for (b = " " + a + " "; c = this[d++];)if (1 === c.nodeType && (" " + S(c) + " ").replace(Nb, " ").indexOf(b) > -1)return !0;
                return !1
            }
        }), na.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
            na.fn[b] = function (a, c) {
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }
        }), na.fn.extend({
            hover: function (a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            }
        });
        var Ob = a.location, Pb = na.now(), Qb = /\?/,
            Rb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        na.parseJSON = function (b) {
            if (a.JSON && a.JSON.parse)return a.JSON.parse(b + "");
            var c, d = null, e = na.trim(b + "");
            return e && !na.trim(e.replace(Rb, function (a, b, e, f) {
                return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
            })) ? Function("return " + e)() : na.error("Invalid JSON: " + b)
        }, na.parseXML = function (b) {
            var c, d;
            if (!b || "string" != typeof b)return null;
            try {
                a.DOMParser ? (d = new a.DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
            } catch (a) {
                c = void 0
            }
            return c && c.documentElement && !c.getElementsByTagName("parsererror").length || na.error("Invalid XML: " + b), c
        };
        var Sb = /#.*$/, Tb = /([?&])_=[^&]*/, Ub = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Vb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Wb = /^(?:GET|HEAD)$/, Xb = /^\/\//,
            Yb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Zb = {}, $b = {}, _b = "*/".concat("*"),
            ac = Ob.href, bc = Yb.exec(ac.toLowerCase()) || [];
        na.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: ac,
                type: "GET",
                isLocal: Vb.test(bc[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": _b,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": na.parseJSON, "text xml": na.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (a, b) {
                return b ? V(V(a, na.ajaxSettings), b) : V(na.ajaxSettings, a)
            },
            ajaxPrefilter: T(Zb),
            ajaxTransport: T($b),
            ajax: function (b, c) {
                function d(b, c, d, e) {
                    var f, l, s, t, v, x = c;
                    2 !== u && (u = 2, i && a.clearTimeout(i), k = void 0, h = e || "", w.readyState = b > 0 ? 4 : 0, f = b >= 200 && 300 > b || 304 === b, d && (t = W(m, w, d)), t = X(m, t, w, f), f ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (na.lastModified[g] = v), v = w.getResponseHeader("etag"), v && (na.etag[g] = v)), 204 === b || "HEAD" === m.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = t.state, l = t.data, s = t.error, f = !s)) : (s = x, !b && x || (x = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || x) + "", f ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = void 0, j && o.trigger(f ? "ajaxSuccess" : "ajaxError", [w, m, f ? l : s]), q.fireWith(n, [w, x]), j && (o.trigger("ajaxComplete", [w, m]), --na.active || na.event.trigger("ajaxStop")))
                }

                "object" == typeof b && (c = b, b = void 0), c = c || {};
                var e, f, g, h, i, j, k, l, m = na.ajaxSetup({}, c), n = m.context || m,
                    o = m.context && (n.nodeType || n.jquery) ? na(n) : na.event, p = na.Deferred(),
                    q = na.Callbacks("once memory"), r = m.statusCode || {}, s = {}, t = {}, u = 0, v = "canceled",
                    w = {
                        readyState: 0, getResponseHeader: function (a) {
                            var b;
                            if (2 === u) {
                                if (!l)for (l = {}; b = Ub.exec(h);)l[b[1].toLowerCase()] = b[2];
                                b = l[a.toLowerCase()]
                            }
                            return null == b ? null : b
                        }, getAllResponseHeaders: function () {
                            return 2 === u ? h : null
                        }, setRequestHeader: function (a, b) {
                            var c = a.toLowerCase();
                            return u || (a = t[c] = t[c] || a, s[a] = b), this
                        }, overrideMimeType: function (a) {
                            return u || (m.mimeType = a), this
                        }, statusCode: function (a) {
                            var b;
                            if (a)if (2 > u)for (b in a)r[b] = [r[b], a[b]]; else w.always(a[w.status]);
                            return this
                        }, abort: function (a) {
                            var b = a || v;
                            return k && k.abort(b), d(0, b), this
                        }
                    };
                if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, m.url = ((b || m.url || ac) + "").replace(Sb, "").replace(Xb, bc[1] + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = na.trim(m.dataType || "*").toLowerCase().match(Da) || [""], null == m.crossDomain && (e = Yb.exec(m.url.toLowerCase()), m.crossDomain = !(!e || e[1] === bc[1] && e[2] === bc[2] && (e[3] || ("http:" === e[1] ? "80" : "443")) === (bc[3] || ("http:" === bc[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = na.param(m.data, m.traditional)), U(Zb, m, c, w), 2 === u)return w;
                j = na.event && m.global, j && 0 === na.active++ && na.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Wb.test(m.type), g = m.url, m.hasContent || (m.data && (g = m.url += (Qb.test(g) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = Tb.test(g) ? g.replace(Tb, "$1_=" + Pb++) : g + (Qb.test(g) ? "&" : "?") + "_=" + Pb++)), m.ifModified && (na.lastModified[g] && w.setRequestHeader("If-Modified-Since", na.lastModified[g]), na.etag[g] && w.setRequestHeader("If-None-Match", na.etag[g])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + _b + "; q=0.01" : "") : m.accepts["*"]);
                for (f in m.headers)w.setRequestHeader(f, m.headers[f]);
                if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u))return w.abort();
                v = "abort";
                for (f in{success: 1, error: 1, complete: 1})w[f](m[f]);
                if (k = U($b, m, c, w)) {
                    if (w.readyState = 1, j && o.trigger("ajaxSend", [w, m]), 2 === u)return w;
                    m.async && m.timeout > 0 && (i = a.setTimeout(function () {
                        w.abort("timeout")
                    }, m.timeout));
                    try {
                        u = 1, k.send(s, d)
                    } catch (a) {
                        if (!(2 > u))throw a;
                        d(-1, a)
                    }
                } else d(-1, "No Transport");
                return w
            },
            getJSON: function (a, b, c) {
                return na.get(a, b, c, "json")
            },
            getScript: function (a, b) {
                return na.get(a, void 0, b, "script")
            }
        }), na.each(["get", "post"], function (a, b) {
            na[b] = function (a, c, d, e) {
                return na.isFunction(c) && (e = e || d, d = c, c = void 0), na.ajax(na.extend({
                    url: a,
                    type: b,
                    dataType: e,
                    data: c,
                    success: d
                }, na.isPlainObject(a) && a))
            }
        }), na._evalUrl = function (a) {
            return na.ajax({url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
        }, na.fn.extend({
            wrapAll: function (a) {
                if (na.isFunction(a))return this.each(function (b) {
                    na(this).wrapAll(a.call(this, b))
                });
                if (this[0]) {
                    var b = na(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                        for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;)a = a.firstChild;
                        return a
                    }).append(this)
                }
                return this
            }, wrapInner: function (a) {
                return na.isFunction(a) ? this.each(function (b) {
                    na(this).wrapInner(a.call(this, b))
                }) : this.each(function () {
                    var b = na(this), c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            }, wrap: function (a) {
                var b = na.isFunction(a);
                return this.each(function (c) {
                    na(this).wrapAll(b ? a.call(this, c) : a)
                })
            }, unwrap: function () {
                return this.parent().each(function () {
                    na.nodeName(this, "body") || na(this).replaceWith(this.childNodes)
                }).end()
            }
        }), na.expr.filters.hidden = function (a) {
            return la.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Z(a)
        }, na.expr.filters.visible = function (a) {
            return !na.expr.filters.hidden(a)
        };
        var cc = /%20/g, dc = /\[\]$/, ec = /\r?\n/g, fc = /^(?:submit|button|image|reset|file)$/i,
            gc = /^(?:input|select|textarea|keygen)/i;
        na.param = function (a, b) {
            var c, d = [], e = function (a, b) {
                b = na.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
            if (void 0 === b && (b = na.ajaxSettings && na.ajaxSettings.traditional), na.isArray(a) || a.jquery && !na.isPlainObject(a)) na.each(a, function () {
                e(this.name, this.value)
            }); else for (c in a)$(c, a[c], b, e);
            return d.join("&").replace(cc, "+")
        }, na.fn.extend({
            serialize: function () {
                return na.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var a = na.prop(this, "elements");
                    return a ? na.makeArray(a) : this
                }).filter(function () {
                    var a = this.type;
                    return this.name && !na(this).is(":disabled") && gc.test(this.nodeName) && !fc.test(a) && (this.checked || !Oa.test(a))
                }).map(function (a, b) {
                    var c = na(this).val();
                    return null == c ? null : na.isArray(c) ? na.map(c, function (a) {
                        return {name: b.name, value: a.replace(ec, "\r\n")}
                    }) : {name: b.name, value: c.replace(ec, "\r\n")}
                }).get()
            }
        }), na.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
            return this.isLocal ? aa() : da.documentMode > 8 ? _() : /^(get|post|head|put|delete|options)$/i.test(this.type) && _() || aa()
        } : _;
        var hc = 0, ic = {}, jc = na.ajaxSettings.xhr();
        a.attachEvent && a.attachEvent("onunload", function () {
            for (var a in ic)ic[a](void 0, !0)
        }), la.cors = !!jc && "withCredentials" in jc, jc = la.ajax = !!jc, jc && na.ajaxTransport(function (b) {
            if (!b.crossDomain || la.cors) {
                var c;
                return {
                    send: function (d, e) {
                        var f, g = b.xhr(), h = ++hc;
                        if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)for (f in b.xhrFields)g[f] = b.xhrFields[f];
                        b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                        for (f in d)void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
                        g.send(b.hasContent && b.data || null), c = function (a, d) {
                            var f, i, j;
                            if (c && (d || 4 === g.readyState))if (delete ic[h], c = void 0, g.onreadystatechange = na.noop, d) 4 !== g.readyState && g.abort(); else {
                                j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);
                                try {
                                    i = g.statusText
                                } catch (a) {
                                    i = ""
                                }
                                f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
                            }
                            j && e(f, i, j, g.getAllResponseHeaders())
                        }, b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = ic[h] = c : c()
                    }, abort: function () {
                        c && c(void 0, !0)
                    }
                }
            }
        }), na.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /\b(?:java|ecma)script\b/},
            converters: {
                "text script": function (a) {
                    return na.globalEval(a), a
                }
            }
        }), na.ajaxPrefilter("script", function (a) {
            void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
        }), na.ajaxTransport("script", function (a) {
            if (a.crossDomain) {
                var b, c = da.head || na("head")[0] || da.documentElement;
                return {
                    send: function (d, e) {
                        b = da.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
                            (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                        }, c.insertBefore(b, c.firstChild)
                    }, abort: function () {
                        b && b.onload(void 0, !0)
                    }
                }
            }
        });
        var kc = [], lc = /(=)\?(?=&|$)|\?\?/;
        na.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var a = kc.pop() || na.expando + "_" + Pb++;
                return this[a] = !0, a
            }
        }), na.ajaxPrefilter("json jsonp", function (b, c, d) {
            var e, f, g,
                h = b.jsonp !== !1 && (lc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && lc.test(b.data) && "data");
            return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = na.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(lc, "$1" + e) : b.jsonp !== !1 && (b.url += (Qb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
                return g || na.error(e + " was not called"), g[0]
            }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
                g = arguments
            }, d.always(function () {
                void 0 === f ? na(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, kc.push(e)), g && na.isFunction(f) && f(g[0]), g = f = void 0
            }), "script") : void 0
        }), na.parseHTML = function (a, b, c) {
            if (!a || "string" != typeof a)return null;
            "boolean" == typeof b && (c = b, b = !1), b = b || da;
            var d = wa.exec(a), e = !c && [];
            return d ? [b.createElement(d[1])] : (d = r([a], b, e), e && e.length && na(e).remove(), na.merge([], d.childNodes))
        };
        var mc = na.fn.load;
        na.fn.load = function (a, b, c) {
            if ("string" != typeof a && mc)return mc.apply(this, arguments);
            var d, e, f, g = this, h = a.indexOf(" ");
            return h > -1 && (d = na.trim(a.slice(h, a.length)), a = a.slice(0, h)), na.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && na.ajax({
                url: a,
                type: e || "GET",
                dataType: "html",
                data: b
            }).done(function (a) {
                f = arguments, g.html(d ? na("<div>").append(na.parseHTML(a)).find(d) : a)
            }).always(c && function (a, b) {
                    g.each(function () {
                        c.apply(this, f || [a.responseText, b, a])
                    })
                }), this
        }, na.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
            na.fn[b] = function (a) {
                return this.on(b, a)
            }
        }), na.expr.filters.animated = function (a) {
            return na.grep(na.timers, function (b) {
                return a === b.elem
            }).length
        }, na.offset = {
            setOffset: function (a, b, c) {
                var d, e, f, g, h, i, j, k = na.css(a, "position"), l = na(a), m = {};
                "static" === k && (a.style.position = "relative"), h = l.offset(), f = na.css(a, "top"), i = na.css(a, "left"), j = ("absolute" === k || "fixed" === k) && na.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), na.isFunction(b) && (b = b.call(a, c, na.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
            }
        }, na.fn.extend({
            offset: function (a) {
                if (arguments.length)return void 0 === a ? this : this.each(function (b) {
                    na.offset.setOffset(this, a, b)
                });
                var b, c, d = {top: 0, left: 0}, e = this[0], f = e && e.ownerDocument;
                return f ? (b = f.documentElement, na.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = ba(f), {
                    top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                    left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                }) : d) : void 0
            }, position: function () {
                if (this[0]) {
                    var a, b, c = {top: 0, left: 0}, d = this[0];
                    return "fixed" === na.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), na.nodeName(a[0], "html") || (c = a.offset()), c.top += na.css(a[0], "borderTopWidth", !0), c.left += na.css(a[0], "borderLeftWidth", !0)), {
                        top: b.top - c.top - na.css(d, "marginTop", !0),
                        left: b.left - c.left - na.css(d, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var a = this.offsetParent; a && !na.nodeName(a, "html") && "static" === na.css(a, "position");)a = a.offsetParent;
                    return a || nb
                })
            }
        }), na.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, b) {
            var c = /Y/.test(b);
            na.fn[a] = function (d) {
                return Na(this, function (a, d, e) {
                    var f = ba(a);
                    return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? na(f).scrollLeft() : e, c ? e : na(f).scrollTop()) : a[d] = e)
                }, a, d, arguments.length, null)
            }
        }), na.each(["top", "left"], function (a, b) {
            na.cssHooks[b] = F(la.pixelPosition, function (a, c) {
                return c ? (c = pb(a, b), lb.test(c) ? na(a).position()[b] + "px" : c) : void 0
            })
        }), na.each({Height: "height", Width: "width"}, function (a, b) {
            na.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
                na.fn[d] = function (d, e) {
                    var f = arguments.length && (c || "boolean" != typeof d),
                        g = c || (d === !0 || e === !0 ? "margin" : "border");
                    return Na(this, function (b, c, d) {
                        var e;
                        return na.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? na.css(b, c, g) : na.style(b, c, d, g)
                    }, b, f ? d : void 0, f, null)
                }
            })
        }), na.fn.extend({
            bind: function (a, b, c) {
                return this.on(a, null, b, c)
            }, unbind: function (a, b) {
                return this.off(a, null, b)
            }, delegate: function (a, b, c, d) {
                return this.on(b, a, c, d)
            }, undelegate: function (a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
            }
        }), na.fn.size = function () {
            return this.length
        }, na.fn.andSelf = na.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
            return na
        });
        var nc = a.jQuery, oc = a.$;
        return na.noConflict = function (b) {
            return a.$ === na && (a.$ = oc), b && a.jQuery === na && (a.jQuery = nc), na
        }, b || (a.jQuery = a.$ = na), na
    }), "undefined" == typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");
+function (a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
}(jQuery), +function (a) {
    "use strict";
    function b() {
        var a = document.createElement("bootstrap"), b = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var c in b)if (void 0 !== a.style[c])return {end: b[c]};
        return !1
    }

    a.fn.emulateTransitionEnd = function (b) {
        var c = !1, d = this;
        a(this).one("bsTransitionEnd", function () {
            c = !0
        });
        var e = function () {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function () {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function (b) {
                if (a(b.target).is(this))return b.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var c = a(this), e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }

    var c = '[data-dismiss="alert"]', d = function (b) {
        a(b).on("click", c, this.close)
    };
    d.VERSION = "3.3.6", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }

        var e = a(this), f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a(f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
        return a.fn.alert = e, this
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.button"), f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }

    var c = function (b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
    };
    c.VERSION = "3.3.6", c.DEFAULTS = {loadingText: "loading..."}, c.prototype.setState = function (b) {
        var c = "disabled", d = this.$element, e = d.is("input") ? "val" : "html", f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
        }, this), 0)
    }, c.prototype.toggle = function () {
        var a = !0, b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
        return a.fn.button = d, this
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
        var d = a(c.target);
        d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
    })
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }

    var c = function (b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.6", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, c.prototype.keydown = function (a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            a.preventDefault()
        }
    }, c.prototype.cycle = function (b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, c.prototype.getItemIndex = function (a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
    }, c.prototype.getItemForDirection = function (a, b) {
        var c = this.getItemIndex(b), d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap)return b;
        var e = "prev" == a ? -1 : 1, f = (c + e) % this.$items.length;
        return this.$items.eq(f)
    }, c.prototype.to = function (a) {
        var b = this, c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(a > this.$items.length - 1 || a < 0))return this.sliding ? this.$element.one("slid.bs.carousel", function () {
            b.to(a)
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    }, c.prototype.pause = function (b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, c.prototype.next = function () {
        if (!this.sliding)return this.slide("next")
    }, c.prototype.prev = function () {
        if (!this.sliding)return this.slide("prev")
    }, c.prototype.slide = function (b, d) {
        var e = this.$element.find(".item.active"), f = d || this.getItemForDirection(b, e), g = this.interval,
            h = "next" == b ? "left" : "right", i = this;
        if (f.hasClass("active"))return this.sliding = !1;
        var j = f[0], k = a.Event("slide.bs.carousel", {relatedTarget: j, direction: h});
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {relatedTarget: j, direction: h});
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
                f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
                    i.$element.trigger(m)
                }, 0)
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
        return a.fn.carousel = d, this
    };
    var e = function (c) {
        var d, e = a(this), f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()), h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
        a('[data-ride="carousel"]').each(function () {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }

    function c(b) {
        return this.each(function () {
            var c = a(this), e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
        })
    }

    var d = function (b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.6", d.TRANSITION_DURATION = 350, d.DEFAULTS = {toggle: !0}, d.prototype.dimension = function () {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, d.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var h = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition)return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }, d.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var e = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }, d.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, d.prototype.getParent = function () {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }, d.prototype.addAriaAndCollapsedClass = function (a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    };
    var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
        return a.fn.collapse = e, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e), g = f.data("bs.collapse"), h = g ? "toggle" : e.data();
        c.call(f, h)
    })
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }

    function c(c) {
        c && 3 === c.which || (a(e).remove(), a(f).each(function () {
            var d = a(this), e = b(d), f = {relatedTarget: this};
            e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))))
        }))
    }

    function d(b) {
        return this.each(function () {
            var c = a(this), d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }

    var e = ".dropdown-backdrop", f = '[data-toggle="dropdown"]', g = function (b) {
        a(b).on("click.bs.dropdown", this.toggle)
    };
    g.VERSION = "3.3.6", g.prototype.toggle = function (d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = b(e), g = f.hasClass("open");
            if (c(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                var h = {relatedTarget: this};
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented())return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
            }
            return !1
        }
    }, g.prototype.keydown = function (c) {
        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
            var d = a(this);
            if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = b(d), g = e.hasClass("open");
                if (!g && 27 != c.which || g && 27 == c.which)return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.disabled):visible a", i = e.find(".dropdown-menu" + h);
                if (i.length) {
                    var j = i.index(c.target);
                    38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
        return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery), +function (a) {
    "use strict";
    function b(b, d) {
        return this.each(function () {
            var e = a(this), f = e.data("bs.modal"), g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }

    var c = function (b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.3.6", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function (a) {
        return this.isShown ? this.hide() : this.show(a)
    }, c.prototype.show = function (b) {
        var d = this, e = a.Event("show.bs.modal", {relatedTarget: b});
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            d.$element.one("mouseup.dismiss.bs.modal", function (b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
            var f = a.Event("shown.bs.modal", {relatedTarget: b});
            e ? d.$dialog.one("bsTransitionEnd", function () {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }, c.prototype.hide = function (b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }, c.prototype.enforceFocus = function () {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, c.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, c.prototype.resize = function () {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }, c.prototype.hideModal = function () {
        var a = this;
        this.$element.hide(), this.backdrop(function () {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
        })
    }, c.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, c.prototype.backdrop = function (b) {
        var d = this, e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b)return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function () {
                d.removeBackdrop(), b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else b && b()
    }, c.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, c.prototype.adjustDialog = function () {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    }, c.prototype.resetAdjustments = function () {
        this.$element.css({paddingLeft: "", paddingRight: ""})
    }, c.prototype.checkScrollbar = function () {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
    }, c.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, c.prototype.measureScrollbar = function () {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
        return a.fn.modal = d, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
        var d = a(this), e = d.attr("href"), f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({remote: !/#/.test(e) && e}, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
                d.is(":visible") && d.trigger("focus")
            })
        }), b.call(f, g, this)
    })
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.tooltip"), f = "object" == typeof b && b;
            !e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }

    var c = function (a, b) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {selector: "body", padding: 0}
    }, c.prototype.init = function (b, c, d) {
        if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector)throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)); else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin", i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, c.prototype.getDefaults = function () {
        return c.DEFAULTS
    }, c.prototype.getOptions = function (b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, c.prototype.getDelegateOptions = function () {
        var b = {}, c = this.getDefaults();
        return this._options && a.each(this._options, function (a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, c.prototype.enter = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function () {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show())
    }, c.prototype.isInStateTrue = function () {
        for (var a in this.inState)if (this.inState[a])return !0;
        return !1
    }, c.prototype.leave = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        if (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), !c.isInStateTrue())return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function () {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide()
    }, c.prototype.show = function () {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d)return;
            var e = this, f = this.tip(), g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i, j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var k = this.getPosition(), l = f[0].offsetWidth, m = f[0].offsetHeight;
            if (j) {
                var n = h, o = this.getPosition(this.$viewport);
                h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
            }
            var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h);
            var q = function () {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
        }
    }, c.prototype.applyPlacement = function (b, c) {
        var d = this.tip(), e = d[0].offsetWidth, f = d[0].offsetHeight, g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
            using: function (a) {
                d.css({top: Math.round(a.top), left: Math.round(a.left)})
            }
        }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth, j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c), m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l)
    }, c.prototype.replaceArrow = function (a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
    }, c.prototype.setContent = function () {
        var a = this.tip(), b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function (b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
        }

        var e = this, f = a(this.$tip), g = a.Event("hide.bs." + this.type);
        if (this.$element.trigger(g), !g.isDefaultPrevented())return f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this
    }, c.prototype.fixTitle = function () {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function () {
        return this.getTitle()
    }, c.prototype.getPosition = function (b) {
        b = b || this.$element;
        var c = b[0], d = "BODY" == c.tagName, e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {width: e.right - e.left, height: e.bottom - e.top}));
        var f = d ? {top: 0, left: 0} : b.offset(),
            g = {scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()},
            h = d ? {width: a(window).width(), height: a(window).height()} : null;
        return a.extend({}, e, g, h, f)
    }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {top: b.top + b.height / 2 - d / 2, left: b.left - c} : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
        var e = {top: 0, left: 0};
        if (!this.$viewport)return e;
        var f = this.options.viewport && this.options.viewport.padding || 0, g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll, i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f, k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function () {
        var a, b = this.$element, c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.getUID = function (a) {
        do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
        return a
    }, c.prototype.tip = function () {
        if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length))throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, c.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.enable = function () {
        this.enabled = !0
    }, c.prototype.disable = function () {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function (b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function () {
        var a = this;
        clearTimeout(this.timeout), this.hide(function () {
            a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null
        })
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
        return a.fn.tooltip = d, this
    }
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.popover"), f = "object" == typeof b && b;
            !e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }

    var c = function (a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip)throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.6", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
        return c.DEFAULTS
    }, c.prototype.setContent = function () {
        var a = this.tip(), b = this.getTitle(), c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, c.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, c.prototype.getContent = function () {
        var a = this.$element, b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, c.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
        return a.fn.popover = d, this
    }
}(jQuery), +function (a) {
    "use strict";
    function b(c, d) {
        this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a",
            this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
    }

    function c(c) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.scrollspy"), f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }

    b.VERSION = "3.3.6", b.DEFAULTS = {offset: 10}, b.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, b.prototype.refresh = function () {
        var b = this, c = "offset", d = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var b = a(this), e = b.data("target") || b.attr("href"), f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null
        }).sort(function (a, b) {
            return a[0] - b[0]
        }).each(function () {
            b.offsets.push(this[0]), b.targets.push(this[1])
        })
    }, b.prototype.process = function () {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(), e = this.offsets, f = this.targets,
            g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d)return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0])return this.activeTarget = null, this.clear();
        for (a = e.length; a--;)g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function (b) {
        this.activeTarget = b, this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    }, b.prototype.clear = function () {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
        return a.fn.scrollspy = d, this
    }, a(window).on("load.bs.scrollspy.data-api", function () {
        a('[data-spy="scroll"]').each(function () {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }

    var c = function (b) {
        this.element = a(b)
    };
    c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
        var b = this.element, c = b.closest("ul:not(.dropdown-menu)"), d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"), f = a.Event("hide.bs.tab", {relatedTarget: b[0]}),
                g = a.Event("show.bs.tab", {relatedTarget: e[0]});
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
                    e.trigger({type: "hidden.bs.tab", relatedTarget: b[0]}), b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    })
                })
            }
        }
    }, c.prototype.activate = function (b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
        }

        var g = d.find("> .active"),
            h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
        return a.fn.tab = d, this
    };
    var e = function (c) {
        c.preventDefault(), b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.affix"), f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }

    var c = function (b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    c.VERSION = "3.3.6", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
        offset: 0,
        target: window
    }, c.prototype.getState = function (a, b, c, d) {
        var e = this.$target.scrollTop(), f = this.$element.offset(), g = this.$target.height();
        if (null != c && "top" == this.affixed)return e < c && "top";
        if ("bottom" == this.affixed)return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(e + g <= a - d) && "bottom";
        var h = null == this.affixed, i = h ? e : f.top, j = h ? g : b;
        return null != c && e <= c ? "top" : null != d && i + j >= a - d && "bottom"
    }, c.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset)return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(), b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }, c.prototype.checkPositionWithEventLoop = function () {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, c.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(), d = this.options.offset, e = d.top, f = d.bottom,
                g = Math.max(a(document).height(), a(document.body).height());
            "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : ""), j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j), j.isDefaultPrevented())return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({top: g - b - f})
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
        return a.fn.affix = d, this
    }, a(window).on("load", function () {
        a('[data-spy="affix"]').each(function () {
            var c = a(this), d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
        })
    })
}(jQuery), function (a) {
    "use strict";
    function b(a) {
        return new RegExp("(^|\\s+)" + a + "(\\s+|$)")
    }

    function c(a, b) {
        var c = d(a, b) ? f : e;
        c(a, b)
    }

    var d, e, f;
    "classList" in document.documentElement ? (d = function (a, b) {
        return a.classList.contains(b)
    }, e = function (a, b) {
        a.classList.add(b)
    }, f = function (a, b) {
        a.classList.remove(b)
    }) : (d = function (a, c) {
        return b(c).test(a.className)
    }, e = function (a, b) {
        d(a, b) || (a.className = a.className + " " + b)
    }, f = function (a, c) {
        a.className = a.className.replace(b(c), " ")
    });
    var g = {hasClass: d, addClass: e, removeClass: f, toggleClass: c, has: d, add: e, remove: f, toggle: c};
    "function" == typeof define && define.amd ? define(g) : a.classie = g
}(window), function (a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function (a) {
        return b(a)
    }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(this, function (a) {
    !function (a) {
        "use strict";
        function b(b) {
            var c = [{re: /[\xC0-\xC6]/g, ch: "A"}, {re: /[\xE0-\xE6]/g, ch: "a"}, {
                re: /[\xC8-\xCB]/g,
                ch: "E"
            }, {re: /[\xE8-\xEB]/g, ch: "e"}, {re: /[\xCC-\xCF]/g, ch: "I"}, {
                re: /[\xEC-\xEF]/g,
                ch: "i"
            }, {re: /[\xD2-\xD6]/g, ch: "O"}, {re: /[\xF2-\xF6]/g, ch: "o"}, {
                re: /[\xD9-\xDC]/g,
                ch: "U"
            }, {re: /[\xF9-\xFC]/g, ch: "u"}, {re: /[\xC7-\xE7]/g, ch: "c"}, {re: /[\xD1]/g, ch: "N"}, {
                re: /[\xF1]/g,
                ch: "n"
            }];
            return a.each(c, function () {
                b = b.replace(this.re, this.ch)
            }), b
        }

        function c(a) {
            var b = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;"},
                c = "(?:" + Object.keys(b).join("|") + ")", d = new RegExp(c), e = new RegExp(c, "g"),
                f = null == a ? "" : "" + a;
            return d.test(f) ? f.replace(e, function (a) {
                return b[a]
            }) : f
        }

        function d(b, c) {
            var d = arguments, f = b, g = c;
            [].shift.apply(d);
            var h, i = this.each(function () {
                var b = a(this);
                if (b.is("select")) {
                    var c = b.data("selectpicker"), i = "object" == typeof f && f;
                    if (c) {
                        if (i)for (var j in i)i.hasOwnProperty(j) && (c.options[j] = i[j])
                    } else {
                        var k = a.extend({}, e.DEFAULTS, a.fn.selectpicker.defaults || {}, b.data(), i);
                        k.template = a.extend({}, e.DEFAULTS.template, a.fn.selectpicker.defaults ? a.fn.selectpicker.defaults.template : {}, b.data().template, i.template), b.data("selectpicker", c = new e(this, k, g))
                    }
                    "string" == typeof f && (h = c[f] instanceof Function ? c[f].apply(c, d) : c.options[f])
                }
            });
            return "undefined" != typeof h ? h : i
        }

        String.prototype.includes || !function () {
            var a = {}.toString, b = function () {
                try {
                    var a = {}, b = Object.defineProperty, c = b(a, a, a) && b
                } catch (a) {
                }
                return c
            }(), c = "".indexOf, d = function (b) {
                if (null == this)throw new TypeError;
                var d = String(this);
                if (b && "[object RegExp]" == a.call(b))throw new TypeError;
                var e = d.length, f = String(b), g = f.length, h = arguments.length > 1 ? arguments[1] : void 0,
                    i = h ? Number(h) : 0;
                i != i && (i = 0);
                var j = Math.min(Math.max(i, 0), e);
                return !(g + j > e) && c.call(d, f, i) != -1
            };
            b ? b(String.prototype, "includes", {
                value: d,
                configurable: !0,
                writable: !0
            }) : String.prototype.includes = d
        }(), String.prototype.startsWith || !function () {
            var a = function () {
                try {
                    var a = {}, b = Object.defineProperty, c = b(a, a, a) && b
                } catch (a) {
                }
                return c
            }(), b = {}.toString, c = function (a) {
                if (null == this)throw new TypeError;
                var c = String(this);
                if (a && "[object RegExp]" == b.call(a))throw new TypeError;
                var d = c.length, e = String(a), f = e.length, g = arguments.length > 1 ? arguments[1] : void 0,
                    h = g ? Number(g) : 0;
                h != h && (h = 0);
                var i = Math.min(Math.max(h, 0), d);
                if (f + i > d)return !1;
                for (var j = -1; ++j < f;)if (c.charCodeAt(i + j) != e.charCodeAt(j))return !1;
                return !0
            };
            a ? a(String.prototype, "startsWith", {
                value: c,
                configurable: !0,
                writable: !0
            }) : String.prototype.startsWith = c
        }(), Object.keys || (Object.keys = function (a, b, c) {
            c = [];
            for (b in a)c.hasOwnProperty.call(a, b) && c.push(b);
            return c
        }), a.fn.triggerNative = function (a) {
            var b, c = this[0];
            c.dispatchEvent ? ("function" == typeof Event ? b = new Event(a, {bubbles: !0}) : (b = document.createEvent("Event"), b.initEvent(a, !0, !1)), c.dispatchEvent(b)) : (c.fireEvent && (b = document.createEventObject(), b.eventType = a, c.fireEvent("on" + a, b)), this.trigger(a))
        }, a.expr[":"].icontains = function (b, c, d) {
            var e = a(b), f = (e.data("tokens") || e.text()).toUpperCase();
            return f.includes(d[3].toUpperCase())
        }, a.expr[":"].ibegins = function (b, c, d) {
            var e = a(b), f = (e.data("tokens") || e.text()).toUpperCase();
            return f.startsWith(d[3].toUpperCase())
        }, a.expr[":"].aicontains = function (b, c, d) {
            var e = a(b), f = (e.data("tokens") || e.data("normalizedText") || e.text()).toUpperCase();
            return f.includes(d[3].toUpperCase())
        }, a.expr[":"].aibegins = function (b, c, d) {
            var e = a(b), f = (e.data("tokens") || e.data("normalizedText") || e.text()).toUpperCase();
            return f.startsWith(d[3].toUpperCase())
        };
        var e = function (b, c, d) {
            d && (d.stopPropagation(), d.preventDefault()), this.$element = a(b), this.$newElement = null, this.$button = null, this.$menu = null, this.$lis = null, this.options = c, null === this.options.title && (this.options.title = this.$element.attr("title")), this.val = e.prototype.val, this.render = e.prototype.render, this.refresh = e.prototype.refresh, this.setStyle = e.prototype.setStyle, this.selectAll = e.prototype.selectAll, this.deselectAll = e.prototype.deselectAll, this.destroy = e.prototype.destroy, this.remove = e.prototype.remove, this.show = e.prototype.show, this.hide = e.prototype.hide, this.init()
        };
        e.VERSION = "1.10.0", e.DEFAULTS = {
            noneSelectedText: "Nothing selected",
            noneResultsText: "No results matched {0}",
            countSelectedText: function (a, b) {
                return 1 == a ? "{0} item selected" : "{0} items selected"
            },
            maxOptionsText: function (a, b) {
                return [1 == a ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == b ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"]
            },
            selectAllText: "Select All",
            deselectAllText: "Deselect All",
            doneButton: !1,
            doneButtonText: "Close",
            multipleSeparator: ", ",
            styleBase: "btn",
            style: "btn-default",
            size: "auto",
            title: null,
            selectedTextFormat: "values",
            width: !1,
            container: !1,
            hideDisabled: !1,
            showSubtext: !1,
            showIcon: !0,
            showContent: !0,
            dropupAuto: !0,
            header: !1,
            liveSearch: !1,
            liveSearchPlaceholder: null,
            liveSearchNormalize: !1,
            liveSearchStyle: "contains",
            actionsBox: !1,
            iconBase: "glyphicon",
            tickIcon: "glyphicon-ok",
            showTick: !1,
            template: {caret: '<span class="caret"></span>'},
            maxOptions: !1,
            mobile: !1,
            selectOnTab: !1,
            dropdownAlignRight: !1
        }, e.prototype = {
            constructor: e, init: function () {
                var b = this, c = this.$element.attr("id");
                this.$element.addClass("bs-select-hidden"), this.liObj = {}, this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.$newElement = this.createView(), this.$element.after(this.$newElement).appendTo(this.$newElement), this.$button = this.$newElement.children("button"), this.$menu = this.$newElement.children(".dropdown-menu"), this.$menuInner = this.$menu.children(".inner"), this.$searchbox = this.$menu.find("input"), this.$element.removeClass("bs-select-hidden"), this.options.dropdownAlignRight && this.$menu.addClass("dropdown-menu-right"), "undefined" != typeof c && (this.$button.attr("data-id", c), a('label[for="' + c + '"]').click(function (a) {
                    a.preventDefault(), b.$button.focus()
                })), this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), this.render(), this.setStyle(), this.setWidth(), this.options.container && this.selectPosition(), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), this.$newElement.on({
                    "hide.bs.dropdown": function (a) {
                        b.$element.trigger("hide.bs.select", a)
                    }, "hidden.bs.dropdown": function (a) {
                        b.$element.trigger("hidden.bs.select", a)
                    }, "show.bs.dropdown": function (a) {
                        b.$element.trigger("show.bs.select", a)
                    }, "shown.bs.dropdown": function (a) {
                        b.$element.trigger("shown.bs.select", a)
                    }
                }), b.$element[0].hasAttribute("required") && this.$element.on("invalid", function () {
                    b.$button.addClass("bs-invalid").focus(), b.$element.on({
                        "focus.bs.select": function () {
                            b.$button.focus(), b.$element.off("focus.bs.select")
                        }, "shown.bs.select": function () {
                            b.$element.val(b.$element.val()).off("shown.bs.select")
                        }, "rendered.bs.select": function () {
                            this.validity.valid && b.$button.removeClass("bs-invalid"), b.$element.off("rendered.bs.select")
                        }
                    })
                }), setTimeout(function () {
                    b.$element.trigger("loaded.bs.select")
                })
            }, createDropdown: function () {
                var b = this.multiple || this.options.showTick ? " show-tick" : "",
                    d = this.$element.parent().hasClass("input-group") ? " input-group-btn" : "",
                    e = this.autofocus ? " autofocus" : "",
                    f = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "",
                    g = this.options.liveSearch ? '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + c(this.options.liveSearchPlaceholder) + '"') + "></div>" : "",
                    h = this.multiple && this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">' + this.options.deselectAllText + "</button></div></div>" : "",
                    i = this.multiple && this.options.doneButton ? '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">' + this.options.doneButtonText + "</button></div></div>" : "",
                    j = '<div class="btn-group bootstrap-select' + b + d + '"><button type="button" class="' + this.options.styleBase + ' dropdown-toggle" data-toggle="dropdown"' + e + '><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">' + this.options.template.caret + '</span></button><div class="dropdown-menu open">' + f + g + h + '<ul class="dropdown-menu inner" role="menu"></ul>' + i + "</div></div>";
                return a(j)
            }, createView: function () {
                var a = this.createDropdown(), b = this.createLi();
                return a.find("ul")[0].innerHTML = b, a
            }, reloadLi: function () {
                this.destroyLi();
                var a = this.createLi();
                this.$menuInner[0].innerHTML = a
            }, destroyLi: function () {
                this.$menu.find("li").remove()
            }, createLi: function () {
                var d = this, e = [], f = 0, g = document.createElement("option"), h = -1, i = function (a, b, c, d) {
                    return "<li" + ("undefined" != typeof c & "" !== c ? ' class="' + c + '"' : "") + ("undefined" != typeof b & null !== b ? ' data-original-index="' + b + '"' : "") + ("undefined" != typeof d & null !== d ? 'data-optgroup="' + d + '"' : "") + ">" + a + "</li>"
                }, j = function (a, e, f, g) {
                    return '<a tabindex="0"' + ("undefined" != typeof e ? ' class="' + e + '"' : "") + ("undefined" != typeof f ? ' style="' + f + '"' : "") + (d.options.liveSearchNormalize ? ' data-normalized-text="' + b(c(a)) + '"' : "") + ("undefined" != typeof g || null !== g ? ' data-tokens="' + g + '"' : "") + ">" + a + '<span class="' + d.options.iconBase + " " + d.options.tickIcon + ' check-mark"></span></a>'
                };
                if (this.options.title && !this.multiple && (h--, !this.$element.find(".bs-title-option").length)) {
                    var k = this.$element[0];
                    g.className = "bs-title-option", g.appendChild(document.createTextNode(this.options.title)), g.value = "", k.insertBefore(g, k.firstChild), void 0 === a(k.options[k.selectedIndex]).attr("selected") && (g.selected = !0)
                }
                return this.$element.find("option").each(function (b) {
                    var c = a(this);
                    if (h++, !c.hasClass("bs-title-option")) {
                        var g = this.className || "", k = this.style.cssText,
                            l = c.data("content") ? c.data("content") : c.html(),
                            m = c.data("tokens") ? c.data("tokens") : null,
                            n = "undefined" != typeof c.data("subtext") ? '<small class="text-muted">' + c.data("subtext") + "</small>" : "",
                            o = "undefined" != typeof c.data("icon") ? '<span class="' + d.options.iconBase + " " + c.data("icon") + '"></span> ' : "",
                            p = "OPTGROUP" === this.parentNode.tagName,
                            q = this.disabled || p && this.parentNode.disabled;
                        if ("" !== o && q && (o = "<span>" + o + "</span>"), d.options.hideDisabled && q && !p)return void h--;
                        if (c.data("content") || (l = o + '<span class="text">' + l + n + "</span>"), p && c.data("divider") !== !0) {
                            var r = " " + this.parentNode.className || "";
                            if (0 === c.index()) {
                                f += 1;
                                var s = this.parentNode.label,
                                    t = "undefined" != typeof c.parent().data("subtext") ? '<small class="text-muted">' + c.parent().data("subtext") + "</small>" : "",
                                    u = c.parent().data("icon") ? '<span class="' + d.options.iconBase + " " + c.parent().data("icon") + '"></span> ' : "";
                                s = u + '<span class="text">' + s + t + "</span>", 0 !== b && e.length > 0 && (h++, e.push(i("", null, "divider", f + "div"))), h++, e.push(i(s, null, "dropdown-header" + r, f))
                            }
                            if (d.options.hideDisabled && q)return void h--;
                            e.push(i(j(l, "opt " + g + r, k, m), b, "", f))
                        } else c.data("divider") === !0 ? e.push(i("", b, "divider")) : c.data("hidden") === !0 ? e.push(i(j(l, g, k, m), b, "hidden is-hidden")) : (this.previousElementSibling && "OPTGROUP" === this.previousElementSibling.tagName && (h++, e.push(i("", null, "divider", f + "div"))), e.push(i(j(l, g, k, m), b)));
                        d.liObj[b] = h
                    }
                }), this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), e.join("")
            }, findLis: function () {
                return null == this.$lis && (this.$lis = this.$menu.find("li")), this.$lis
            }, render: function (b) {
                var c, d = this;
                b !== !1 && this.$element.find("option").each(function (a) {
                    var b = d.findLis().eq(d.liObj[a]);
                    d.setDisabled(a, this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled, b), d.setSelected(a, this.selected, b)
                }), this.tabIndex();
                var e = this.$element.find("option").map(function () {
                    if (this.selected) {
                        if (d.options.hideDisabled && (this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled))return;
                        var b, c = a(this),
                            e = c.data("icon") && d.options.showIcon ? '<i class="' + d.options.iconBase + " " + c.data("icon") + '"></i> ' : "";
                        return b = d.options.showSubtext && c.data("subtext") && !d.multiple ? ' <small class="text-muted">' + c.data("subtext") + "</small>" : "", "undefined" != typeof c.attr("title") ? c.attr("title") : c.data("content") && d.options.showContent ? c.data("content") : e + c.html() + b
                    }
                }).toArray(), f = this.multiple ? e.join(this.options.multipleSeparator) : e[0];
                if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) {
                    var g = this.options.selectedTextFormat.split(">");
                    if (g.length > 1 && e.length > g[1] || 1 == g.length && e.length >= 2) {
                        c = this.options.hideDisabled ? ", [disabled]" : "";
                        var h = this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]' + c).length,
                            i = "function" == typeof this.options.countSelectedText ? this.options.countSelectedText(e.length, h) : this.options.countSelectedText;
                        f = i.replace("{0}", e.length.toString()).replace("{1}", h.toString())
                    }
                }
                void 0 == this.options.title && (this.options.title = this.$element.attr("title")), "static" == this.options.selectedTextFormat && (f = this.options.title), f || (f = "undefined" != typeof this.options.title ? this.options.title : this.options.noneSelectedText), this.$button.attr("title", a.trim(f.replace(/<[^>]*>?/g, ""))), this.$button.children(".filter-option").html(f), this.$element.trigger("rendered.bs.select")
            }, setStyle: function (a, b) {
                this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ""));
                var c = a ? a : this.options.style;
                "add" == b ? this.$button.addClass(c) : "remove" == b ? this.$button.removeClass(c) : (this.$button.removeClass(this.options.style), this.$button.addClass(c))
            }, liHeight: function (b) {
                if (b || this.options.size !== !1 && !this.sizeInfo) {
                    var c = document.createElement("div"), d = document.createElement("div"),
                        e = document.createElement("ul"), f = document.createElement("li"),
                        g = document.createElement("li"), h = document.createElement("a"),
                        i = document.createElement("span"),
                        j = this.options.header && this.$menu.find(".popover-title").length > 0 ? this.$menu.find(".popover-title")[0].cloneNode(!0) : null,
                        k = this.options.liveSearch ? document.createElement("div") : null,
                        l = this.options.actionsBox && this.multiple && this.$menu.find(".bs-actionsbox").length > 0 ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
                        m = this.options.doneButton && this.multiple && this.$menu.find(".bs-donebutton").length > 0 ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null;
                    if (i.className = "text", c.className = this.$menu[0].parentNode.className + " open", d.className = "dropdown-menu open", e.className = "dropdown-menu inner", f.className = "divider", i.appendChild(document.createTextNode("Inner text")), h.appendChild(i), g.appendChild(h), e.appendChild(g), e.appendChild(f), j && d.appendChild(j), k) {
                        var n = document.createElement("span");
                        k.className = "bs-searchbox", n.className = "form-control", k.appendChild(n), d.appendChild(k)
                    }
                    l && d.appendChild(l), d.appendChild(e), m && d.appendChild(m), c.appendChild(d), document.body.appendChild(c);
                    var o = h.offsetHeight, p = j ? j.offsetHeight : 0, q = k ? k.offsetHeight : 0,
                        r = l ? l.offsetHeight : 0, s = m ? m.offsetHeight : 0, t = a(f).outerHeight(!0),
                        u = "function" == typeof getComputedStyle && getComputedStyle(d), v = u ? null : a(d),
                        w = parseInt(u ? u.paddingTop : v.css("paddingTop")) + parseInt(u ? u.paddingBottom : v.css("paddingBottom")) + parseInt(u ? u.borderTopWidth : v.css("borderTopWidth")) + parseInt(u ? u.borderBottomWidth : v.css("borderBottomWidth")),
                        x = w + parseInt(u ? u.marginTop : v.css("marginTop")) + parseInt(u ? u.marginBottom : v.css("marginBottom")) + 2;
                    document.body.removeChild(c), this.sizeInfo = {
                        liHeight: o,
                        headerHeight: p,
                        searchHeight: q,
                        actionsHeight: r,
                        doneButtonHeight: s,
                        dividerHeight: t,
                        menuPadding: w,
                        menuExtras: x
                    }
                }
            }, setSize: function () {
                if (this.findLis(), this.liHeight(), this.options.header && this.$menu.css("padding-top", 0), this.options.size !== !1) {
                    var b, c, d, e, f = this, g = this.$menu, h = this.$menuInner, i = a(window),
                        j = this.$newElement[0].offsetHeight, k = this.sizeInfo.liHeight,
                        l = this.sizeInfo.headerHeight, m = this.sizeInfo.searchHeight, n = this.sizeInfo.actionsHeight,
                        o = this.sizeInfo.doneButtonHeight, p = this.sizeInfo.dividerHeight,
                        q = this.sizeInfo.menuPadding, r = this.sizeInfo.menuExtras,
                        s = this.options.hideDisabled ? ".disabled" : "", t = function () {
                            d = f.$newElement.offset().top - i.scrollTop(), e = i.height() - d - j
                        };
                    if (t(), "auto" === this.options.size) {
                        var u = function () {
                            var i, j = function (b, c) {
                                    return function (d) {
                                        return c ? d.classList ? d.classList.contains(b) : a(d).hasClass(b) : !(d.classList ? d.classList.contains(b) : a(d).hasClass(b))
                                    }
                                }, p = f.$menuInner[0].getElementsByTagName("li"),
                                s = Array.prototype.filter ? Array.prototype.filter.call(p, j("hidden", !1)) : f.$lis.not(".hidden"),
                                u = Array.prototype.filter ? Array.prototype.filter.call(s, j("dropdown-header", !0)) : s.filter(".dropdown-header");
                            t(), b = e - r, f.options.container ? (g.data("height") || g.data("height", g.height()), c = g.data("height")) : c = g.height(), f.options.dropupAuto && f.$newElement.toggleClass("dropup", d > e && b - r < c), f.$newElement.hasClass("dropup") && (b = d - r), i = s.length + u.length > 3 ? 3 * k + r - 2 : 0, g.css({
                                "max-height": b + "px",
                                overflow: "hidden",
                                "min-height": i + l + m + n + o + "px"
                            }), h.css({
                                "max-height": b - l - m - n - o - q + "px",
                                "overflow-y": "auto",
                                "min-height": Math.max(i - q, 0) + "px"
                            })
                        };
                        u(), this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", u), i.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize", u)
                    } else if (this.options.size && "auto" != this.options.size && this.$lis.not(s).length > this.options.size) {
                        var v = this.$lis.not(".divider").not(s).children().slice(0, this.options.size).last().parent().index(),
                            w = this.$lis.slice(0, v + 1).filter(".divider").length;
                        b = k * this.options.size + w * p + q, f.options.container ? (g.data("height") || g.data("height", g.height()), c = g.data("height")) : c = g.height(), f.options.dropupAuto && this.$newElement.toggleClass("dropup", d > e && b - r < c), g.css({
                            "max-height": b + l + m + n + o + "px",
                            overflow: "hidden",
                            "min-height": ""
                        }), h.css({"max-height": b - q + "px", "overflow-y": "auto", "min-height": ""})
                    }
                }
            }, setWidth: function () {
                if ("auto" === this.options.width) {
                    this.$menu.css("min-width", "0");
                    var a = this.$menu.parent().clone().appendTo("body"),
                        b = this.options.container ? this.$newElement.clone().appendTo("body") : a,
                        c = a.children(".dropdown-menu").outerWidth(),
                        d = b.css("width", "auto").children("button").outerWidth();
                    a.remove(), b.remove(), this.$newElement.css("width", Math.max(c, d) + "px")
                } else"fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", ""));
                this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width")
            }, selectPosition: function () {
                this.$bsContainer = a('<div class="bs-container" />');
                var b, c, d = this, e = function (a) {
                    d.$bsContainer.addClass(a.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass("dropup", a.hasClass("dropup")), b = a.offset(), c = a.hasClass("dropup") ? 0 : a[0].offsetHeight, d.$bsContainer.css({
                        top: b.top + c,
                        left: b.left,
                        width: a[0].offsetWidth
                    })
                };
                this.$button.on("click", function () {
                    var b = a(this);
                    d.isDisabled() || (e(d.$newElement), d.$bsContainer.appendTo(d.options.container).toggleClass("open", !b.hasClass("open")).append(d.$menu))
                }), a(window).on("resize scroll", function () {
                    e(d.$newElement)
                }), this.$element.on("hide.bs.select", function () {
                    d.$menu.data("height", d.$menu.height()), d.$bsContainer.detach()
                })
            }, setSelected: function (a, b, c) {
                c || (c = this.findLis().eq(this.liObj[a])), c.toggleClass("selected", b)
            }, setDisabled: function (a, b, c) {
                c || (c = this.findLis().eq(this.liObj[a])), b ? c.addClass("disabled").children("a").attr("href", "#").attr("tabindex", -1) : c.removeClass("disabled").children("a").removeAttr("href").attr("tabindex", 0)
            }, isDisabled: function () {
                return this.$element[0].disabled
            }, checkDisabled: function () {
                var a = this;
                this.isDisabled() ? (this.$newElement.addClass("disabled"), this.$button.addClass("disabled").attr("tabindex", -1)) : (this.$button.hasClass("disabled") && (this.$newElement.removeClass("disabled"), this.$button.removeClass("disabled")), this.$button.attr("tabindex") != -1 || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")), this.$button.click(function () {
                    return !a.isDisabled()
                })
            }, tabIndex: function () {
                this.$element.data("tabindex") !== this.$element.attr("tabindex") && this.$element.attr("tabindex") !== -98 && "-98" !== this.$element.attr("tabindex") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex"))), this.$element.attr("tabindex", -98)
            }, clickListener: function () {
                var b = this, c = a(document);
                this.$newElement.on("touchstart.dropdown", ".dropdown-menu", function (a) {
                    a.stopPropagation()
                }), c.data("spaceSelect", !1), this.$button.on("keyup", function (a) {
                    /(32)/.test(a.keyCode.toString(10)) && c.data("spaceSelect") && (a.preventDefault(), c.data("spaceSelect", !1))
                }), this.$button.on("click", function () {
                    b.setSize()
                }), this.$element.on("shown.bs.select", function () {
                    if (b.options.liveSearch || b.multiple) {
                        if (!b.multiple) {
                            var a = b.liObj[b.$element[0].selectedIndex];
                            if ("number" != typeof a || b.options.size === !1)return;
                            var c = b.$lis.eq(a)[0].offsetTop - b.$menuInner[0].offsetTop;
                            c = c - b.$menuInner[0].offsetHeight / 2 + b.sizeInfo.liHeight / 2, b.$menuInner[0].scrollTop = c
                        }
                    } else b.$menuInner.find(".selected a").focus()
                }), this.$menuInner.on("click", "li a", function (c) {
                    var d = a(this), e = d.parent().data("originalIndex"), f = b.$element.val(),
                        g = b.$element.prop("selectedIndex");
                    if (b.multiple && c.stopPropagation(), c.preventDefault(), !b.isDisabled() && !d.parent().hasClass("disabled")) {
                        var h = b.$element.find("option"), i = h.eq(e), j = i.prop("selected"),
                            k = i.parent("optgroup"), l = b.options.maxOptions, m = k.data("maxOptions") || !1;
                        if (b.multiple) {
                            if (i.prop("selected", !j), b.setSelected(e, !j), d.blur(), l !== !1 || m !== !1) {
                                var n = l < h.filter(":selected").length, o = m < k.find("option:selected").length;
                                if (l && n || m && o)if (l && 1 == l) h.prop("selected", !1), i.prop("selected", !0), b.$menuInner.find(".selected").removeClass("selected"), b.setSelected(e, !0); else if (m && 1 == m) {
                                    k.find("option:selected").prop("selected", !1), i.prop("selected", !0);
                                    var p = d.parent().data("optgroup");
                                    b.$menuInner.find('[data-optgroup="' + p + '"]').removeClass("selected"), b.setSelected(e, !0)
                                } else {
                                    var q = "function" == typeof b.options.maxOptionsText ? b.options.maxOptionsText(l, m) : b.options.maxOptionsText,
                                        r = q[0].replace("{n}", l), s = q[1].replace("{n}", m),
                                        t = a('<div class="notify"></div>');
                                    q[2] && (r = r.replace("{var}", q[2][l > 1 ? 0 : 1]), s = s.replace("{var}", q[2][m > 1 ? 0 : 1])), i.prop("selected", !1), b.$menu.append(t), l && n && (t.append(a("<div>" + r + "</div>")), b.$element.trigger("maxReached.bs.select")), m && o && (t.append(a("<div>" + s + "</div>")), b.$element.trigger("maxReachedGrp.bs.select")), setTimeout(function () {
                                        b.setSelected(e, !1)
                                    }, 10), t.delay(750).fadeOut(300, function () {
                                        a(this).remove()
                                    })
                                }
                            }
                        } else h.prop("selected", !1), i.prop("selected", !0), b.$menuInner.find(".selected").removeClass("selected"), b.setSelected(e, !0);
                        b.multiple ? b.options.liveSearch && b.$searchbox.focus() : b.$button.focus(), (f != b.$element.val() && b.multiple || g != b.$element.prop("selectedIndex") && !b.multiple) && b.$element.trigger("changed.bs.select", [e, i.prop("selected"), j]).triggerNative("change")
                    }
                }), this.$menu.on("click", "li.disabled a, .popover-title, .popover-title :not(.close)", function (c) {
                    c.currentTarget == this && (c.preventDefault(), c.stopPropagation(), b.options.liveSearch && !a(c.target).hasClass("close") ? b.$searchbox.focus() : b.$button.focus())
                }), this.$menuInner.on("click", ".divider, .dropdown-header", function (a) {
                    a.preventDefault(), a.stopPropagation(), b.options.liveSearch ? b.$searchbox.focus() : b.$button.focus()
                }), this.$menu.on("click", ".popover-title .close", function () {
                    b.$button.click()
                }), this.$searchbox.on("click", function (a) {
                    a.stopPropagation()
                }), this.$menu.on("click", ".actions-btn", function (c) {
                    b.options.liveSearch ? b.$searchbox.focus() : b.$button.focus(), c.preventDefault(), c.stopPropagation(), a(this).hasClass("bs-select-all") ? b.selectAll() : b.deselectAll()
                }), this.$element.change(function () {
                    b.render(!1)
                })
            }, liveSearchListener: function () {
                var d = this, e = a('<li class="no-results"></li>');
                this.$button.on("click.dropdown.data-api touchstart.dropdown.data-api", function () {
                    d.$menuInner.find(".active").removeClass("active"), d.$searchbox.val() && (d.$searchbox.val(""), d.$lis.not(".is-hidden").removeClass("hidden"), e.parent().length && e.remove()), d.multiple || d.$menuInner.find(".selected").addClass("active"), setTimeout(function () {
                        d.$searchbox.focus()
                    }, 10)
                }), this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api", function (a) {
                    a.stopPropagation()
                }), this.$searchbox.on("input propertychange", function () {
                    if (d.$searchbox.val()) {
                        var f = d.$lis.not(".is-hidden").removeClass("hidden").children("a");
                        f = d.options.liveSearchNormalize ? f.not(":a" + d._searchStyle() + '("' + b(d.$searchbox.val()) + '")') : f.not(":" + d._searchStyle() + '("' + d.$searchbox.val() + '")'), f.parent().addClass("hidden"), d.$lis.filter(".dropdown-header").each(function () {
                            var b = a(this), c = b.data("optgroup");
                            0 === d.$lis.filter("[data-optgroup=" + c + "]").not(b).not(".hidden").length && (b.addClass("hidden"), d.$lis.filter("[data-optgroup=" + c + "div]").addClass("hidden"))
                        });
                        var g = d.$lis.not(".hidden");
                        g.each(function (b) {
                            var c = a(this);
                            c.hasClass("divider") && (c.index() === g.first().index() || c.index() === g.last().index() || g.eq(b + 1).hasClass("divider")) && c.addClass("hidden")
                        }), d.$lis.not(".hidden, .no-results").length ? e.parent().length && e.remove() : (e.parent().length && e.remove(), e.html(d.options.noneResultsText.replace("{0}", '"' + c(d.$searchbox.val()) + '"')).show(), d.$menuInner.append(e))
                    } else d.$lis.not(".is-hidden").removeClass("hidden"), e.parent().length && e.remove();
                    d.$lis.filter(".active").removeClass("active"), d.$searchbox.val() && d.$lis.not(".hidden, .divider, .dropdown-header").eq(0).addClass("active").children("a").focus(), a(this).focus()
                })
            }, _searchStyle: function () {
                var a = {begins: "ibegins", startsWith: "ibegins"};
                return a[this.options.liveSearchStyle] || "icontains"
            }, val: function (a) {
                return "undefined" != typeof a ? (this.$element.val(a), this.render(), this.$element) : this.$element.val()
            }, changeAll: function (b) {
                "undefined" == typeof b && (b = !0), this.findLis();
                for (var c = this.$element.find("option"), d = this.$lis.not(".divider, .dropdown-header, .disabled, .hidden").toggleClass("selected", b), e = d.length, f = [], g = 0; g < e; g++) {
                    var h = d[g].getAttribute("data-original-index");
                    f[f.length] = c.eq(h)[0]
                }
                a(f).prop("selected", b), this.render(!1), this.$element.trigger("changed.bs.select").triggerNative("change")
            }, selectAll: function () {
                return this.changeAll(!0)
            }, deselectAll: function () {
                return this.changeAll(!1)
            }, toggle: function (a) {
                a = a || window.event, a && a.stopPropagation(), this.$button.trigger("click")
            }, keydown: function (c) {
                var d, e, f, g, h, i, j, k, l, m = a(this), n = m.is("input") ? m.parent().parent() : m.parent(),
                    o = n.data("this"), p = ":not(.disabled, .hidden, .dropdown-header, .divider)", q = {
                        32: " ",
                        48: "0",
                        49: "1",
                        50: "2",
                        51: "3",
                        52: "4",
                        53: "5",
                        54: "6",
                        55: "7",
                        56: "8",
                        57: "9",
                        59: ";",
                        65: "a",
                        66: "b",
                        67: "c",
                        68: "d",
                        69: "e",
                        70: "f",
                        71: "g",
                        72: "h",
                        73: "i",
                        74: "j",
                        75: "k",
                        76: "l",
                        77: "m",
                        78: "n",
                        79: "o",
                        80: "p",
                        81: "q",
                        82: "r",
                        83: "s",
                        84: "t",
                        85: "u",
                        86: "v",
                        87: "w",
                        88: "x",
                        89: "y",
                        90: "z",
                        96: "0",
                        97: "1",
                        98: "2",
                        99: "3",
                        100: "4",
                        101: "5",
                        102: "6",
                        103: "7",
                        104: "8",
                        105: "9"
                    };
                if (o.options.liveSearch && (n = m.parent().parent()), o.options.container && (n = o.$menu), d = a("[role=menu] li", n), l = o.$newElement.hasClass("open"), !l && (c.keyCode >= 48 && c.keyCode <= 57 || c.keyCode >= 96 && c.keyCode <= 105 || c.keyCode >= 65 && c.keyCode <= 90) && (o.options.container ? o.$button.trigger("click") : (o.setSize(), o.$menu.parent().addClass("open"), l = !0), o.$searchbox.focus()), o.options.liveSearch && (/(^9$|27)/.test(c.keyCode.toString(10)) && l && 0 === o.$menu.find(".active").length && (c.preventDefault(), o.$menu.parent().removeClass("open"), o.options.container && o.$newElement.removeClass("open"), o.$button.focus()), d = a("[role=menu] li" + p, n), m.val() || /(38|40)/.test(c.keyCode.toString(10)) || 0 === d.filter(".active").length && (d = o.$menuInner.find("li"), d = o.options.liveSearchNormalize ? d.filter(":a" + o._searchStyle() + "(" + b(q[c.keyCode]) + ")") : d.filter(":" + o._searchStyle() + "(" + q[c.keyCode] + ")"))), d.length) {
                    if (/(38|40)/.test(c.keyCode.toString(10))) e = d.index(d.find("a").filter(":focus").parent()), g = d.filter(p).first().index(), h = d.filter(p).last().index(), f = d.eq(e).nextAll(p).eq(0).index(), i = d.eq(e).prevAll(p).eq(0).index(), j = d.eq(f).prevAll(p).eq(0).index(), o.options.liveSearch && (d.each(function (b) {
                        a(this).hasClass("disabled") || a(this).data("index", b)
                    }), e = d.index(d.filter(".active")), g = d.first().data("index"), h = d.last().data("index"), f = d.eq(e).nextAll().eq(0).data("index"), i = d.eq(e).prevAll().eq(0).data("index"), j = d.eq(f).prevAll().eq(0).data("index")), k = m.data("prevIndex"), 38 == c.keyCode ? (o.options.liveSearch && e--, e != j && e > i && (e = i), e < g && (e = g), e == k && (e = h)) : 40 == c.keyCode && (o.options.liveSearch && e++, e == -1 && (e = 0), e != j && e < f && (e = f), e > h && (e = h), e == k && (e = g)), m.data("prevIndex", e), o.options.liveSearch ? (c.preventDefault(), m.hasClass("dropdown-toggle") || (d.removeClass("active").eq(e).addClass("active").children("a").focus(), m.focus())) : d.eq(e).children("a").focus(); else if (!m.is("input")) {
                        var r, s, t = [];
                        d.each(function () {
                            a(this).hasClass("disabled") || a.trim(a(this).children("a").text().toLowerCase()).substring(0, 1) == q[c.keyCode] && t.push(a(this).index())
                        }), r = a(document).data("keycount"), r++, a(document).data("keycount", r), s = a.trim(a(":focus").text().toLowerCase()).substring(0, 1), s != q[c.keyCode] ? (r = 1, a(document).data("keycount", r)) : r >= t.length && (a(document).data("keycount", 0), r > t.length && (r = 1)), d.eq(t[r - 1]).children("a").focus()
                    }
                    if ((/(13|32)/.test(c.keyCode.toString(10)) || /(^9$)/.test(c.keyCode.toString(10)) && o.options.selectOnTab) && l) {
                        if (/(32)/.test(c.keyCode.toString(10)) || c.preventDefault(), o.options.liveSearch) /(32)/.test(c.keyCode.toString(10)) || (o.$menuInner.find(".active a").click(), m.focus()); else {
                            var u = a(":focus");
                            u.click(), u.focus(), c.preventDefault(), a(document).data("spaceSelect", !0)
                        }
                        a(document).data("keycount", 0)
                    }
                    (/(^9$|27)/.test(c.keyCode.toString(10)) && l && (o.multiple || o.options.liveSearch) || /(27)/.test(c.keyCode.toString(10)) && !l) && (o.$menu.parent().removeClass("open"), o.options.container && o.$newElement.removeClass("open"), o.$button.focus())
                }
            }, mobile: function () {
                this.$element.addClass("mobile-device")
            }, refresh: function () {
                this.$lis = null, this.liObj = {}, this.reloadLi(), this.render(), this.checkDisabled(), this.liHeight(!0), this.setStyle(), this.setWidth(), this.$lis && this.$searchbox.trigger("propertychange"), this.$element.trigger("refreshed.bs.select")
            }, hide: function () {
                this.$newElement.hide()
            }, show: function () {
                this.$newElement.show()
            }, remove: function () {
                this.$newElement.remove(), this.$element.remove()
            }, destroy: function () {
                this.$newElement.before(this.$element).remove(), this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove(), this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker")
            }
        };
        var f = a.fn.selectpicker;
        a.fn.selectpicker = d, a.fn.selectpicker.Constructor = e, a.fn.selectpicker.noConflict = function () {
            return a.fn.selectpicker = f, this
        }, a(document).data("keycount", 0).on("keydown.bs.select", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input', e.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input', function (a) {
            a.stopPropagation()
        }), a(window).on("load.bs.select.data-api", function () {
            a(".selectpicker").each(function () {
                var b = a(this);
                d.call(b, b.data())
            })
        })
    }(a)
});