(window.webpackJsonp = window.webpackJsonp || []).push([
  [26],
  {
    156: function (t, e) {},
    96: function (t, e, o) {
      "use strict";
      o.r(e);
      o(65);
      var i = o(4),
        r = o.n(i),
        u = o(154);
      o(160), o(172);
      function n(t, e) {
        for (var o, i = 0; i < e.length; i++)
          ((o = e[i]).enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
      }
      var a = (function () {
        function t() {
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.selectors = {
              jslightbox: ".js-lightbox",
              jsVideoBox: ".js-videoPopup",
            });
        }
        return (
          (function (t, e, o) {
            e && n(t.prototype, e), o && n(t, o);
          })(t, [
            {
              key: "videoPopup",
              value: function (t) {
                t.preventDefault();
                var e,
                  o = null,
                  i = r()(t.currentTarget),
                  n = i.data("video-type"),
                  a = i.data("video-url"),
                  s = i.data("video-poster") || null,
                  c = ["html5", "youtube"],
                  l =
                    1 ==
                    ((/iPad|iPhone|iPod/.test(navigator.platform) ||
                      ("MacIntel" === navigator.platform &&
                        1 < navigator.maxTouchPoints)) &&
                      !window.MSStream)
                      ? "muted"
                      : "";
                "cloudflare" === n
                  ? ((e =
                      '<div class="popup-video">\n\t\t\t\t\t\t<div class="rv-component" data-comp-name="customvideo">\n\t\t\t\t\t\t\t<stream id="lightboxPlayer" playsinline '
                        .concat(l, ' src="')
                        .concat(
                          a,
                          '" controls preload autoplay class="video-js"></stream>\n\t\t\t\t\t\t\t<script data-cfasync="false" id="streamapi" defer type="text/javascript" src="https://embed.videodelivery.net/embed/r4xu.fla9.latest.js?video='
                        )
                        .concat(
                          a,
                          '"></script>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t'
                        )),
                    r.a.fancybox.open({
                      type: "html",
                      content: e,
                      beforeClose: function () {
                        r()("#streamapi").remove();
                      },
                    }))
                  : ((e =
                      '<div class="popup-video">\n\t\t\t<div class="rv-component" data-comp-name="customvideo">\n\t\t\t\t<video id="lightboxPlayer" playsinline '.concat(
                        l,
                        ' class="video-js vjs-layout-large vjs-skin" width="100%" height="100%"></video>\n\t\t\t</div>\n\t\t</div>'
                      )),
                    r.a.fancybox.open({
                      type: "html",
                      content: e,
                      afterShow: function () {
                        (o = Object(u.default)("lightboxPlayer", {
                          techOrder: c,
                          controls: !0,
                        })).src({
                          type: "youtube" === n ? "video/youtube" : "video/mp4",
                          src:
                            "youtube" === n
                              ? "https://www.youtube.com/watch?v=".concat(a)
                              : a,
                        }),
                          s && o.poster(s),
                          o.on("ready", function () {
                            o.play();
                          });
                      },
                      beforeClose: function () {
                        Object(u.default)("lightboxPlayer").dispose();
                      },
                    }));
              },
            },
            {
              key: "popup",
              value: function (e) {
                e.each(function (t) {
                  return e.eq(t).fancybox();
                });
              },
            },
            {
              key: "initEvent",
              value: function () {
                this.$jsVideoBox.on("click", this.videoPopup.bind(this));
              },
            },
            {
              key: "initSelectors",
              value: function () {
                (this.$jslightbox = r()(this.selectors.jslightbox)),
                  (this.$jsVideoBox = r()(this.selectors.jsVideoBox));
              },
            },
            {
              key: "init",
              value: function () {
                this.initSelectors(),
                  this.initEvent(),
                  this.popup(this.$jslightbox);
              },
            },
          ]),
          t
        );
      })();
      e.default = a;
    },
  },
]);
