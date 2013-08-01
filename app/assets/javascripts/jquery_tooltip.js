var tooltipOptions = {
  showDelay: 100,
  hideDelay: 300,
  effect: "slide",
  duration: 300,
  relativeTo: "element",
  position: 0,
  smartPosition: true,
  offsetX: 0,
  offsetY: 0,
  maxWidth: 400,
  calloutSize: 9,
  calloutPosition: 0.5,
  sticky: false,
  overlay: false,
  license: "241l9"
};
/* JavaScript Tooltip v2013.7.8. Copyright www.menucool.com */
var tooltip = function (q) {
  var j = "length",
    Fb = function (a, c, b) {
      if (a.addEventListener) a.addEventListener(
        c, b, false);
      else a.attachEvent && a.attachEvent(
        "on" + c, b)
    }, b = {}, fb = function (a) {
      if (a && a.stopPropagation) a.stopPropagation();
      else window.event.cancelBubble =
        true
    }, pb = function (d) {
      var a = d.childNodes,
        c = [];
      if (a)
        for (var b = 0, e = a.length; b <
          e; b++) a[b].nodeType == 1 &&
          c.push(a[b]);
      return c
    }, O = {
      a: 0,
      b: 0
    }, g = null,
    Jb = function (a) {
      if (!a) a = window.event;
      O.a = a.clientX;
      O.b = a.clientY
    }, bb, Z, db = function (b, d) {
      if (window.getComputedStyle) var c =
        window.getComputedStyle(b, null);
      else if (b.currentStyle) c = b.currentStyle;
      else c = b[a];
      return c[d]
    }, t = "offsetLeft",
    v = "offsetTop",
    U = "clientWidth",
    G = "clientHeight",
    z = "appendChild",
    N = "createElement",
    R = "getElementsByTagName",
    w = "parentNode",
    L = "calloutSize",
    B = "position",
    rb = "calloutPosition",
    W = function () {
      this.a = [];
      this.b = null
    }, A = "firstChild",
    ib = 0,
    vb = document,
    o = "getElementById",
    e = function (a, b) {
      return b ? vb[a](b) : vb[a]
    }, sb = function () {
      var c = 50,
        b = navigator.userAgent,
        a;
      if ((a = b.indexOf("MSIE ")) != -
        1) c = parseInt(b.substring(a +
        5, b.indexOf(".", a)));
      return c
    }, wb = sb() < 7,
    hb = sb() < 9,
    Hb = navigator.userAgent.match(
      /(iPad|iPhone|iPod|Android|BlackBerry|IEMobile)/
    ),
    u = "marginTop",
    V = "marginLeft";
  W.tx = {
    c: function (a) {
      return -Math.cos(a * Math.PI) / 2 +
        .5
    }
  };
  var r = "offsetWidth",
    p = "offsetHeight",
    m = "documentElement",
    k = "body",
    M = "borderColor",
    eb = "nextSibling",
    a = "style",
    x = "visibility",
    y = "width",
    D = "height",
    Lb = ["$1$2$3", "$1$2$3", "$1$24",
      "$1$23", "$1$22"
    ],
    ab, Nb;
  W.prototype = {
    d: {
      a: q.duration,
      b: function () {},
      c: W.tx.c,
      tranFactor: 1.5
    },
    e: function (h, d, g, c) {
      for (var b = [], i = g - d, j = g >
          d ? 1 : -1, f = Math.ceil(60 *
            c.a / 1e3), a, e = 1; e <=
        f; e++) {
        a = d + c.c(e / f, c.tranFactor) *
          i;
        if (h != "opacity") a = Math.round(
          a);
        b.push(a)
      }
      b.d = 0;
      return b
    },
    f: function () {
      this.b == null && this.g()
    },
    g: function () {
      this.h();
      var a = this;
      this.b = window.setInterval(
        function () {
          a.h()
        }, 15)
    },
    h: function () {
      var a = this.a[j];
      if (a) {
        for (var c = 0; c < a; c++) this
          .i(this.a[c]);
        while (a--) {
          var b = this.a[a];
          if (b.c.d == b.c[j]) {
            b.d();
            this.a.splice(a, 1)
          }
        }
      }
      else {
        window.clearInterval(this.b);
        this.b = null
      }
    },
    i: function (b) {
      if (b.c.d < b.c[j]) {
        var d = b.b,
          c = b.c[b.c.d];
        if (b.b == "opacity") {
          b.a.op = c;
          if (hb) {
            d = "filter";
            c = "alpha(opacity=" + Math
              .round(c * 100) + ")"
          }
        }
        else c += "px";
        b.a[a][d] = c;
        b.c.d++
      }
    },
    j: function (e, b, d, f, a) {
      a = this.k(this.d, a);
      var c = this.e(b, d, f, a);
      this.a.push({
        a: e,
        b: b,
        c: c,
        d: a.b
      });
      this.f()
    },
    k: function (c, b) {
      b = b || {};
      var a, d = {};
      for (a in c) d[a] = b[a] !==
        undefined ? b[a] : c[a];
      return d
    }
  };
  var i = new W,
    Mb = function (b) {
      var a = [],
        c = b[j];
      while (c--) a.push(String.fromCharCode(
        b[c]));
      return a.join("")
    }, Kb = [
      /(?:.*\.)?(\w)([\w\-])[^.]*(\w)\.[^.]+$/,
      /.*([\w\-])\.(\w)(\w)\.[^.]+$/,
      /^(?:.*\.)?(\w)(\w)\.[^.]+$/,
      /.*([\w\-])([\w\-])\.com\.[^.]+$/,
      /^(\w)[^.]*(\w)+$/
    ],
    X = function (d, a) {
      var c = [];
      if (ib) return ib;
      for (var b = 0; b < d[j]; b++) c[
        c[j]] = String.fromCharCode(d.charCodeAt(
        b) - (a && a > 7 ? a : 3));
      return c.join("")
    }, xb = function (a) {
      return a.replace(
        /(?:.*\.)?(\w)([\w\-])?[^.]*(\w)\.[^.]*$/,
        "$1$3$2")
    }, Bb = function (e, c) {
      var d = function (a) {
        for (var c = a.substr(0, a[j] -
          1), e = a.substr(a[j] - 1,
            1), d = "", b = 0; b < c[
          j]; b++) d += c.charCodeAt(b) -
          e;
        return unescape(d)
      }, a = xb(document.domain) + Math
          .random(),
        b = d(a);
      ab =
        "%66%75%6E%63%74%69%6F%6E%20%71%51%28%73%2C%6B%29%7B%76%61%72%20%72%3D%27%27%3B%66%6F%72%28%76%61%72%20%69%";
      if (b[j] == 39) try {
        a = (new Function("$", "_", X(
          ab))).apply(this, [b, c]);
        ab = a
      }
      catch (f) {}
    }, Ib = function (c, a) {
      var b = function (b) {
        var a = b.charCodeAt(0).toString();
        return a.substring(a[j] - 1)
      };
      return c + b(a[parseInt(X("4"))]) +
        a[2] + b(a[0])
    }, d, c, f, K, h, E, J = null,
    C = null,
    Q = 0,
    cb = function () {
      if (J != null) {
        clearTimeout(J);
        J = null
      }
    }, H = function () {
      if (C != null) {
        clearTimeout(C);
        C = null
      }
    }, T = function (b, c) {
      if (b) {
        b.op = c;
        if (hb) b[a].filter =
          "alpha(opacity=" + c * 100 +
          ")";
        else b[a].opacity = c
      }
    }, zb = function (a, c, b, d, g, e,
      h, f) {
      xf = b >= a;
      yf = d >= c;
      var k = xf ? b - a < g : a - b <
        h,
        l = yf ? d - c < e : c - d < f,
        i = k ? b - a : xf ? g : -h,
        j = l ? d - c : yf ? e : -f;
      if (k && l)
        if (Math.abs(i) > Math.abs(j)) i =
          xf ? g : -h;
        else j = yf ? e : -f;
      return [i, j]
    }, Gb = function (m, h, l) {
      S(c, 1);
      var b = e(N, "div");
      b[a][y] = m + "px";
      f = e(N, "div");
      T(f, 0);
      f.className = "mcTooltipInner";
      if (l == 1) f.innerHTML = h;
      else {
        var d = e(o, h);
        if (d[w].sw) f = d[w];
        else {
          f.sw = d[w];
          f[z](d);
          var g = 1
        }
      } if (hb) {
        var i = f[R]("select"),
          k = i[j];
        while (k--) i[k].onmouseout =
          fb
      }
      b[z](f);
      c[z](b);
      f[a][y] = f[r] + (g ? 1 : 0) +
        "px";
      f[a][D] = f[p] + (g ? 1 : 0) +
        "px";
      f[a].left = f[a].top = "auto";
      f = c.insertBefore(f, c[A]);
      f[a][B] = "absolute";
      b = c.removeChild(b);
      b = null;
      delete b;
      return f
    }, Ab = function (a) {
      if (a.sw) {
        a.sw[z](a);
        T(a, 1)
      }
      else {
        a = a[w].removeChild(a);
        delete a
      }
    }, S = function (b, c) {
      for (var a = c; a < b.childNodes.length; a++)
        Ab(b.childNodes[a])
    }, Db = function () {
      d.cO = 0;
      d[a][x] = h[a][x] = K[a][x] =
        "hidden";
      if (g.Q) g.Q[a].display = "none";
      S(c, 0)
    }, qb = function (a) {
      cb();
      H();
      if (a && d.cO == a)
        if (Q) return 0;
      Q = 0;
      return 1
    }, n = null,
    Eb = {
      a: function (c, h, a) {
        var d = null,
          e = null,
          f = null,
          b = "html";
        if (a) {
          e = a.success || null;
          b = a.responseType || "html";
          d = a.context && e ? a.context :
            null;
          f = a.fail || null
        }
        n = this.b();
        n.onreadystatechange = function () {
          if (n && n.readyState === 4) {
            H();
            if (n.status === 200) {
              if (E == c && J) {
                H();
                var i = b.toLowerCase() ==
                  "xml" ? n.responseXML :
                  n.responseText,
                  k = i;
                if (b.toLowerCase() ==
                  "json") k = eval("(" +
                  i + ")");
                if (b == "html") {
                  var p = h.match(
                    /.+#([^?]+)/);
                  if (p) {
                    var o = function (d,
                      a) {
                      var c = null;
                      if (a.id == d)
                        return a;
                      for (var b = 0, e =
                          a.childNodes[
                            j]; b < e; b++
                      )
                        if (a.childNodes[
                            b].nodeType ==
                          1) {
                          c = o(d, a.childNodes[
                            b]);
                          if (c != null)
                            break
                        }
                      return c
                    }, m = document.createElement(
                        "div");
                    m.innerHTML = i;
                    var l = o(p[1], m);
                    if (l) i = k = l.innerHTML;
                    m = null
                  }
                  if (!l) {
                    var q = i.split(
                      /<\/?body[^>]*>/i
                    );
                    if (q.length > 1) i =
                      k = q[1]
                  }
                }
                if (e) i = a.success(k,
                  d);
                g.f(c, i, 1)
              }
            }
            else if (f) g.f(c, f(d), 1);
            else g.f(c,
              "Failed to get data.", 1);
            n = null
          }
        };
        n.open("GET", h, true);
        n.send(null)
      },
      b: function () {
        var a;
        try {
          if (window.XMLHttpRequest) a =
            new XMLHttpRequest;
          else a = new ActiveXObject(
            "Microsoft.XMLHTTP")
        }
        catch (b) {
          throw new Error(
            "Your browser does not support AJAX."
          );
        }
        return a
      }
    }, mb = function (a) {
      return a.parentNode.nodeName ==
        "FORM" || a.parentNode.nodeName ==
        "BODY" ? a.parentNode : mb(a.parentNode)
    }, P = function (a) {
      if (d.fm != a) {
        a[z](d);
        d.fm = a
      }
    }, ub = function () {
      d = e(N, "div");
      d.id = "mcTooltipWrapper";
      d.innerHTML =
        '<div id="mcTooltip"><div>&nbsp;</div></div><div id="mcttCo"><em></em><b></b></div><div id="mcttCloseButton"></div>';
      for (var j = document.body, f =
          pb(j), i = 0, g, a = 0; a < f
        .length; a++)
        if (f[a].nodeName != "SCRIPT" &&
          f[a].nodeName != "LINK") {
          i++;
          if (f[a].nodeName == "FORM") g =
            f[a]
        }
      if (i == 1 && g) P(g);
      else P(j);
      c = d[A];
      d.cW = d.cH = d.cO = 0;
      this.a(q);
      Bb(d, b.a);
      K = d.lastChild;
      h = c[eb];
      this.c(q[B], q[L]);
      var k = this.k();
      K.onclick = function (a) {
        k.i();
        fb(a)
      };
      c.onmouseout = function () {
        J != 1 && cb();
        !E.sticky && k.h(E.hideDelay)
      };
      T(d, 0)
    }, Ob = function (a) {
      return a[w] ? a[w].nodeName.toLowerCase() !=
        "form" ? this.o(a[w]) : a[w] :
        null
    }, s = function (c, d) {
      var b = d == 0 ? c[t] : c[v],
        a = c.offsetParent;
      while (a != null) {
        b = d == 0 ? b + a[t] : b + a[v];
        a = a.offsetParent
      }
      return b
    }, yb = function (b) {
      var a = 0;
      if (window.innerWidth) a = b ?
        window.innerWidth : window.innerHeight;
      else if (e(m) && e(m)[G]) a = b ?
        e(m)[U] : e(m)[G];
      else if (e(k) && e(k)[G]) a = b ?
        e(k)[U] : e(k)[G];
      return a
    }, l = function (d) {
      var b = "scrollTop",
        a = "scrollLeft",
        c = 0;
      if (typeof window.pageYOffset ==
        "number") c = d ? window.pageYOffset :
        window.pageXOffset;
      else if (e(m) && (e(m)[b] || e(m)[
        a])) c = d ? e(m)[b] : e(m)[a];
      else if (e(k) && (e(k)[b] || e(k)[
        a])) c = d ? e(k)[b] : e(k)[a];
      return c
    }, F = function (a) {
      switch (a) {
      case 0:
        return yb(1) + l(0);
      case 1:
        return yb(0) + l(1);
      default:
        return 0
      }
    }, Cb = function (h, g, c, d) {
      bb = F(0) - 20;
      Z = F(1) - 20;
      var f = l(1),
        e = l(0),
        a = c,
        b = d;
      if (c + h > bb) a = bb - h;
      if (c < e) a = e;
      if (d + g > Z) b = Z - g;
      if (d < f) b = f;
      return {
        l: a,
        t: b
      }
    };
  ub.prototype = {
    j: function (o, j) {
      var m = j * 2 + "px",
        n = b.b + j + "px",
        i = b.b + "px",
        f = "border",
        k = "",
        l = "",
        e = "",
        g = h[A],
        d = h.lastChild;
      c[a][M] = g[a][M] = b.d;
      c[a].backgroundColor = d[a][M] =
        b.c;
      switch (o) {
      case 0:
      case 2:
        k = "Left";
        l = "Right";
        h[a][y] = m;
        h[a][D] = n;
        d[a][V] = d[a].marginRight =
          "auto";
        break;
      case 3:
      default:
        k = "Top";
        l = "Bottom";
        h[a][y] = n;
        h[a][D] = m
      }
      switch (o) {
      case 0:
        e = "Top";
        h[a][u] = "-" + i;
        g[a][u] = i;
        d[a][u] = "-" + n;
        break;
      case 2:
        e = "Bottom";
        h[a][u] = i;
        g[a][u] = "-" + i;
        d[a][u] = -(j - b.b) + "px";
        break;
      case 3:
        e = "Left";
        h[a][V] = "-" + i;
        g[a][V] = i;
        d[a][u] = "-" + m;
        break;
      default:
        e = "Right";
        h[a].marginRight = "-" + i;
        d[a][u] = "-" + m;
        d[a][V] = i
      }
      g[a][f + k] = g[a][f + l] = d[a][
        f + k
      ] = d[a][f + l] = "dashed " + j +
        "px transparent";
      g[a][f + e + "Style"] = d[a][f +
        e + "Style"
      ] = "solid";
      g[a][f + e + "Width"] = d[a][f +
        e + "Width"
      ] = j + "px"
    },
    c: function (e, c) {
      b.e = e;
      b.f = c;
      d[a].padding = b.f + "px";
      this.j(b.e, b.f)
    },
    d: function (a, c, b) {
      if (qb()) C = setTimeout(function () {
        g.f(a, c, b)
      }, a.showDelay)
    },
    e: function (a, c, b) {
      if (qb()) C = setTimeout(function () {
        g.g(a, c, b)
      }, a.showDelay)
    },
    a: function (g) {
      var a = 1,
        f = "#FBF5E6",
        d = "#CFB57C";
      try {
        a = parseInt(db(e(o,
            "mcTooltip"),
          "borderLeftWidth"));
        f = db(e(o, "mcTooltip"),
          "backgroundColor");
        d = db(e(o, "mcTooltip"),
          "borderLeftColor")
      }
      catch (h) {}
      b = {
        a: g.license || "4321",
        b: a,
        c: f,
        d: d,
        l: c[U] - c[A][r],
        m: c[G] - c[A][p]
      }
    },
    f: function (g, z, w) {
      i.a = [];
      if (this.Q) this.Q[a].display = g
        .overlay ? "block" : "none";
      K[a][x] = g.sticky ? "visible" :
        "hidden";
      if (Hb) K[a][x] = "visible";
      var e = this.n(g, z, w);
      if (d.cO) {
        i.j(d, "left", d[t], e.l);
        i.j(d, "top", d[v], e.t);
        i.j(c, y, c.cW, c.tw);
        i.j(c, D, c.cH, c.th);
        i.j(h, "left", h[t], e.x);
        i.j(h, "top", h[v], e.y)
      }
      else if (b.e == 4) {
        var A = s(g, 0),
          B = s(g, 1);
        i.j(d, "left", A, e.l);
        i.j(d, "top", B, e.t);
        i.j(c, y, g[r], c.tw);
        i.j(c, D, g[p], c.th)
      }
      else {
        if (b.e > 4) i.j(d, "top", e.t +
          6, e.t);
        else d[a].top = e.t + "px";
        d[a].left = e.l + "px";
        c[a][y] = c.tw + "px";
        c[a][D] = c.th + "px";
        h[a].left = e.x + "px";
        h[a].top = e.y + "px"
      } if (g.effect == "slide") {
        var j, k;
        if (!d.cO && b.e < 4) {
          switch (b.e) {
          case 0:
            j = 0;
            k = 1;
            break;
          case 1:
            j = -1;
            k = 0;
            break;
          case 2:
            j = 0;
            k = -1;
            break;
          case 3:
            j = 1;
            k = 0
          }
          var m = [j * f[r], k * f[p]]
        }
        else {
          if (!d.cO && b.e > 3) {
            j = g[t];
            k = g[v]
          }
          else {
            j = d[t];
            k = d[v];
            if (b.e > 3) {
              j += d.cO[t] - g[t];
              k += d.cO[v] - g[v]
            }
          }
          var q = b.l + b.b + b.b,
            u = b.m + b.b + b.b;
          m = zb(j, k, e.l, e.t, c.cW +
            q, c.cH + u, c.tw + q, c.th +
            u)
        }
        var n = b.l / 2,
          o = b.m / 2;
        i.j(f, "left", m[0] + n, n);
        i.j(f, "top", m[1] + o, o);
        var l = f[eb];
        if (l) {
          i.j(l, "left", n, -m[0] + n, {
            b: function () {
              S(c, 1)
            }
          });
          i.j(l, "top", o, -m[1] + o)
        }
        T(f, 1)
      }
      else {
        i.j(f, "opacity", 0, 1, {
          b: function () {
            S(c, 1)
          }
        });
        var l = f[eb];
        l && i.j(l, "opacity", l.op, 0)
      }
      i.j(d, "opacity", d.op, 1);
      d.cO = g
    },
    g: function (a, c, b) {
      n = null;
      C = setTimeout(function () {
        g.f(a,
          '<div id="tooltipAjaxSpin">&nbsp;</div>',
          1)
      }, a.showDelay);
      J = 1;
      Eb.a(a, c, b)
    },
    h: function (a) {
      H();
      C = setTimeout(function () {
        g.i()
      }, a)
    },
    i: function () {
      cb();
      i.a = [];
      i.j(d, "opacity", d.op, 0, {
        b: Db
      })
    },
    l: function () {
      if (e(o, "mcOverlay") == null) {
        this.Q = e(N, "div");
        this.Q.id = "mcOverlay";
        e(R, k)[0][z](this.Q);
        this.Q[a][B] = wb ? "absolute" :
          "fixed";
        if (wb) {
          this.Q[a][y] = document.compatMode !=
            "CSS1Compat" ? e(k).scrollWidth :
            e(m).scrollWidth;
          this.Q[a][D] = document.compatMode !=
            "CSS1Compat" ? e(k).scrollHeight :
            e(m).scrollHeight
        }
      }
    },
    m: function (f, e) {
      if (f != b.e || e != b.f) {
        var c = h[A],
          d = h.lastChild;
        c[a].margin = d[a].margin = h[a]
          .margin = c[a].border = d[a].border =
          "0";
        c[a][M] = b.d;
        d[a][M] = b.c;
        this.c(f, e)
      }
    },
    k: function () {
      return (new Function("a", "b",
        "c", "d", "e", "f", "g", "h",
        "i", function (d) {
          var b = [];
          c.onmouseover = function (a) {
            !E.sticky && H();
            fb(a)
          };
          for (var a = 0, e = d[j]; a <
            e; a++) b[b[j]] = String.fromCharCode(
            d.charCodeAt(a) - 4);
          return b.join("")
        }(
          "zev$pAi,k,g,+kvthpu+0405--\u0080\u0080+6+-?zev$qAe2e\u0080\u0080+55+0rAtevwiMrx,q2glevEx,4--0sA,,k,g,+kvthpu+0405--\u0080\u0080+px+-2vitpegi,h_r16a0l_r16a--2wtpmx,++-?mj,e2e%Aj,r/+8+0s--qAQexl_g,+yhukvt+-a,-?mj,,rAA:**q@24:-\u0080\u0080,r%A:**q@259--wixXmqisyx,jyrgxmsr,-m,40g,+Ch'oylmD.o{{wA66~~~5tlu|jvvs5jvt6.E[vvs{pw'W|yjohzl'YltpuklyC6hE+-0tswmxmsr>:\u0081-?\u008106444-?\u0081\u0081vixyvr$xlmw?"
        ))).apply(this, [b, A, X, Kb,
        xb, Ib, e, Lb, Y
      ])
    },
    n: function (g, t, m) {
      if (m == 2) {
        var n = e(o, t);
        if (n) var q = mb(n);
        else q = document.body;
        P(q)
      }
      else P(document.body);
      c.cW = c[U] - b.l;
      c.cH = c[G] - b.m;
      f = Gb(g.maxWidth, t, m);
      c.tw = f[r];
      c.th = f[p];
      var k = c.tw + b.l + b.b + b.b,
        j = c.th + b.m + b.b + b.b,
        i = this.p(g, k, j);
      if (g.smartPosition) var h = Cb(k +
        b.f, j + b.f, i.x + g.offsetX,
        i.y + g.offsetY);
      else h = {
        l: i.x + g.offsetX,
        t: i.y + g.offsetY
      };
      var u = this.u(g[B], g[rb], k, j);
      this.m(g[B], g[L]);
      var l = tooltipWindowY = 0;
      if (d.fm.offsetParent) {
        l = s(d.fm.offsetParent, 0);
        tooltipWindowY = s(d.fm.offsetParent,
          1)
      }
      h.l = h.l - l;
      h.t = h.t - tooltipWindowY;
      h.x = u[0];
      h.y = u[1];
      d[a][x] = "visible";
      return h
    },
    p: function (a, q, o) {
      var c, d, g, f, n = a[B],
        k = a[rb];
      if (n < 4)
        if (a.nodeType != 1) {
          c = l(0);
          d = l(1);
          g = 0;
          f = 0
        }
        else if (a.relativeTo ==
        "mouse") {
        c = O.a;
        d = O.b;
        if (O.a == null) {
          c = s(a, 0) + Math.round(a[r] /
            2);
          d = s(a, 1) + Math.round(a[p] /
            2)
        }
        else {
          c += l(0);
          d += l(1)
        }
        g = 0;
        f = 0
      }
      else {
        var h = a,
          e = pb(a);
        if (e.length) {
          e = e[0];
          if (e[r] >= a[r] || e[p] >= a[
            p]) h = e
        }
        c = s(h, 0);
        d = s(h, 1);
        g = h[r];
        f = h[p]
      }
      var m = 20,
        j = q + 2 * a[L],
        i = o + 2 * a[L];
      switch (n) {
      case 0:
        c += Math.round(g / 2 - j * k);
        d -= i + m;
        break;
      case 2:
        c += Math.round(g / 2 - j * k);
        d += f + m;
        break;
      case 3:
        c -= j + m;
        d += Math.round(f / 2 - i * k);
        break;
      case 4:
        c = Math.round((F(0) + l(0) - j) /
          2);
        d = Math.round((F(1) + l(1) - i) /
          2);
        break;
      case 5:
        c = l(0);
        d = l(1);
        break;
      case 6:
        c = F(0) - j - Math.ceil(b.l /
          2);
        d = F(1) - i - Math.ceil(b.m /
          2);
        break;
      case 1:
      default:
        c += g + m;
        d += Math.round(f / 2 - i * k)
      }
      return {
        x: c,
        y: d
      }
    },
    u: function (g, d, f, e) {
      if (g < 4) h[a][x] = "visible";
      var c;
      switch (g) {
      case 0:
        c = [Math.round(f * d), e + b.f];
        break;
      case 1:
        c = [0, Math.round(e * d)];
        break;
      case 2:
        c = [Math.round(f * d), 0];
        break;
      case 3:
        c = [f + b.f, Math.round(e * d)];
        break;
      default:
        c = [0, 0];
        h[a][x] = "hidden"
      }
      return c
    }
  };
  var nb = function () {
    if (g == null) {
      if (typeof console !==
        "undefined" && typeof console.log ===
        "function") {
        var a = console.log;
        console.log = function () {
          a.call(this, ++ib, arguments)
        }
      }
      g = new ub;
      if (a) console.log = a
    }
    if (E && E.id == "mcttDummy" && d.innerHTML
      .indexOf(X("kdvh#Uh")) != -1) g.i =
      function () {};
    return g
  }, jb = function (d, c, b) {
      b = b || {};
      var a;
      for (a in c) d[a] = b[a] !==
        undefined ? b[a] : c[a]
    }, gb = 0,
    I, tb = function (b) {
      if (!b) {
        b = e(o, "mcttDummy");
        if (!b) {
          b = e(N, "div");
          b.id = "mcttDummy";
          b[a].display = "none";
          var c = e(R, k);
          c.length && e(R, k)[0][z](b)
        }
      }
      if (typeof b === "string") b = e(
        o, b);
      E = b;
      return b
    }, kb = function (a, b) {
      jb(a, q, b);
      if (a.overlay) {
        a.sticky = true;
        g.l();
        if (a.overlay === 1) g.Q.onclick =
          K.onclick;
        else g.Q.onclick = function () {}
      }
      if (a.sticky) a.onmouseout =
        function () {
          Q = 1;
          H()
      };
      else a.onmouseout = function () {
        Q = 1;
        g.h(this.hideDelay)
      }; if (a.relativeTo == "mouse") a
        .onmousemove = Jb
    }, Y = function (b, c, h) {
      b = tb(b);
      var a = 0;
      if (c.charAt(0) == "#") {
        if (c.length > 2 && c.charAt(1) ==
          "#") a = 2;
        else a = 1;
        var d = c.substring(a),
          f = e(o, d);
        if (f) {
          if (a == 2) c = f.innerHTML
        }
        else a = -1
      }
      if (!b || !g || a == -1) {
        if (++gb < 40) I = setTimeout(
          function () {
            Y(b, c, h)
          }, 90)
      }
      else {
        clearTimeout(I);
        I = null;
        kb(b, h);
        if (a == 1) g.d(b, d, 2);
        else g.d(b, c, 1)
      }
    }, lb = function (a, d, b, c) {
      a = tb(a);
      if (!a || !g) {
        if (++gb < 40) I = setTimeout(
          function () {
            lb(a, d, b, c)
          }, 90)
      }
      else {
        clearTimeout(I);
        I = null;
        kb(a, c);
        g.e(a, d, b)
      }
    };
  Fb(window, "load", nb);
  var ob = function (a) {
    if (++gb < 20)
      if (!g) setTimeout(function () {
        ob(a)
      }, 90);
      else {
        jb(q, q, a);
        g.m(q[B], q[L])
      }
  };
  return {
    changeOptions: function (options) {
      ob(options)
    },
    pop: function (elm, text, options) {
      Y(elm, text, options)
    },
    ajax: function (elm, url,
      ajaxSettings, options) {
      lb(elm, url, ajaxSettings,
        options)
    },
    hide: function () {
      var a = nb();
      a.i()
    }
  }
}(tooltipOptions)
