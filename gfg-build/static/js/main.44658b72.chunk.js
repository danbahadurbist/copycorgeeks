(this["webpackJsonpgeeksforgeeks-org"] = this["webpackJsonpgeeksforgeeks-org"] || []).push([
    [0], {
        265: function(e, t, s) {},
        285: function(e, t) {},
        302: function(e, t, s) {},
        310: function(e, t, s) {},
        456: function(e, t, s) {
            "use strict";
            s.r(t);
            var a = s(0),
                c = s.n(a),
                n = s(41),
                i = s.n(n),
                r = (s(265), s(60)),
                o = s(25),
                l = s(22),
                d = s(15),
                g = s(45),
                j = s.n(g),
                u = s(63),
                m = s(237),
                h = window.location.protocol,
                p = ("".concat(window.location.origin, "/"), "".concat(h, "//udevtest3.geeksforgeeks.org/"), {
                    GFG_SITE_URL: "https://www.geeksforgeeks.org/",
                    VIDEO_API_URL: "https://apiscript.geeksforgeeks.org/",
                    AUTH_SITE_URL: "https://auth.geeksforgeeks.org/",
                    GFG_PREMIUM_URL: "https://premium.geeksforgeeks.org/",
                    GFG_UTIL_URL: "https://util.geeksforgeeks.org/",
                    GFG_DISCUSS_URL: "https://discuss.geeksforgeeks.org/discuss/",
                    GFG_PRACTICE_URL: "https://practice.geeksforgeeks.org/",
                    GFG_PRACTICE_API_URL: "https://practiceapi.geeksforgeeks.org/",
                    GFG_UTIL_DJANGO_CF_URL: "https://utilapi.geeksforgeeks.org/",
                    GFG_API_URL: "https://api.geeksforgeeks.org/"
                }),
                b = "csrftoken",
                x = "video",
                f = function(e) {
                    return 1 === e ? "category" : "tag"
                },
                O = "https://media.geeksforgeeks.org/",
                _ = "https://media.geeksforgeeks.org/auth-dashboard-uploads/video_02082021.png",
                v = "https://media.geeksforgeeks.org/auth-dashboard-uploads/empty_asset.png",
                k = !0,
                y = "Videos | GeeksforGeeks",
                N = "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png",
                w = "A Computer Science portal for geeks. It contains well written, well thought and well explained computer science and programming articles, quizzes and practice/competitive programming/company interview Questions.",
                S = "gfgThemeDark",
                L = function(e, t) {
                    false
                },
                C = s(238),
                T = s.n(C),
                G = s(43),
                I = s.n(G),
                P = function() {
                    return /http(s)?:\/\/(premium)\.geeksforgeeks\.org/.test(window.location.origin)
                },
                R = function(e) {
                    return e && !I.a.isEmpty(e) ? "?".concat(T.a.stringify(e)) : ""
                };

            function E(e) {
                for (var t = null, s = document.cookie.split(";"), a = 0; a < s.length; a++) {
                    var c = s[a].split("=");
                    c[0].trim() === e && (t = c[1].trim())
                }
                return t
            }
            var A = function() {
                    var e = Object(u.a)(j.a.mark((function e() {
                        return j.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (e.prev = 0, !U()) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    return e.next = 5, fetch("".concat(p.VIDEO_API_URL, "get-csrf-token/"), {
                                        credentials: "include"
                                    });
                                case 5:
                                    return e.abrupt("return", E(b));
                                case 8:
                                    return e.prev = 8, e.t0 = e.catch(0), L(e.t0), e.abrupt("return", {
                                        hasError: !0,
                                        message: "Some error occurred",
                                        error: e.t0
                                    });
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 8]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                U = function() {
                    var e = E(b);
                    return e ? (L("Csrf: ".concat(e)), e) : (L("CSRF Not present"), null)
                },
                F = function() {
                    document.cookie = "".concat(b, "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=.geeksforgeeks.org;")
                },
                D = function() {
                    var e = E("gfg_theme");
                    return L("Theme: ".concat(e)), e === S ? "dark" : "light"
                },
                V = s(1),
                q = c.a.createContext({
                    isLoggedIn: !1,
                    loginModalClass: "",
                    loginInformation: {
                        csrf_token: !1
                    },
                    logoutHandler: function() {},
                    loginHandler: function() {},
                    getToken: function() {
                        var e = Object(u.a)(j.a.mark((function e() {
                            return j.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    theme: function() {}
                }),
                M = (q.Consumer, function(e) {
                    var t = Object(a.useState)(!1),
                        s = Object(d.a)(t, 2),
                        c = s[0],
                        n = s[1],
                        i = Object(a.useState)({
                            loading: !0
                        }),
                        r = Object(d.a)(i, 2),
                        o = r[0],
                        g = r[1];
                    return Object(a.useEffect)((function() {
                        new Promise(function() {
                            var e = Object(u.a)(j.a.mark((function e(t, s) {
                                var a, c, n;
                                return j.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, fetch("".concat(p.GFG_UTIL_URL, "getToken.php"), {
                                                credentials: "include"
                                            });
                                        case 3:
                                            return a = e.sent, e.next = 6, a.json();
                                        case 6:
                                            c = e.sent, (n = Object(m.a)(c.token)).uuid ? t(Object(l.a)({}, n)) : s({
                                                hasError: !0,
                                                error: {
                                                    message: "Please login",
                                                    reason: "User not loggedIn"
                                                }
                                            }), L({
                                                token: n,
                                                type: "Extract user cookie"
                                            }), e.next = 16;
                                            break;
                                        case 12:
                                            e.prev = 12, e.t0 = e.catch(0), L({
                                                message: e.t0.message,
                                                type: "[Error] Extract user cookie"
                                            }), s({
                                                hasError: !0,
                                                error: {
                                                    message: e.t0.message,
                                                    reason: "Invalid token"
                                                }
                                            });
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 12]
                                ])
                            })));
                            return function(t, s) {
                                return e.apply(this, arguments)
                            }
                        }()).then((function(e) {
                            g(Object(l.a)(Object(l.a)({}, e), {}, {
                                loading: !1
                            })), n(!0)
                        })).catch((function(e) {
                            g(Object(l.a)(Object(l.a)({}, e), {}, {
                                loading: !1
                            })), n(!1)
                        }))
                    }), []), Object(V.jsx)(q.Provider, {
                        value: {
                            isLoggedIn: c,
                            loginModalClass: "login-modal-btn",
                            loginInformation: Object(l.a)({}, o),
                            getToken: A,
                            theme: D
                        },
                        children: e.children
                    })
                }),
                B = q,
                z = s(36),
                H = s(246),
                W = s(29),
                Q = s(14),
                J = s(97),
                X = s(98),
                K = s(57),
                Y = Object(X.a)({
                    reducerPath: "fetchVideoListApi",
                    tagTypes: ["videos", "watchlistTag"],
                    baseQuery: Object(K.d)({
                        baseUrl: p.VIDEO_API_URL
                    }),
                    endpoints: function(e) {
                        return {
                            getVideoList: e.query({
                                query: function(e) {
                                    var t = {};
                                    return e.taxonomy && (t.category = e.taxonomy), Number(e.page) > 1 && (t.page = Number(e.page)), e.search && (t.title = e.search), {
                                        url: "/gfg-video-list/".concat(R(t)),
                                        credentials: "include"
                                    }
                                },
                                keepUnusedDataFor: 600
                            }),
                            getCategoryList: e.query({
                                query: function() {
                                    return {
                                        url: "get-gfg-category-list/",
                                        credentials: "include"
                                    }
                                },
                                keepUnusedDataFor: 21600
                            }),
                            getUserWatchlist: e.query({
                                query: function() {
                                    return {
                                        url: "watch-later-video-list/",
                                        method: "GET",
                                        credentials: "include"
                                    }
                                },
                                keepUnusedDataFor: 600,
                                providesTags: ["watchlistTag"]
                            })
                        }
                    }
                }),
                Z = s(78),
                $ = ["slug"],
                ee = ["type", "csrfToken"],
                te = Object(X.a)({
                    reducerPath: "fetchVideoBySlugApi",
                    tagTypes: ["video"],
                    baseQuery: Object(K.d)({
                        baseUrl: p.VIDEO_API_URL
                    }),
                    endpoints: function(e) {
                        return {
                            getVideoDetails: e.query({
                                query: function(e) {
                                    return {
                                        url: "gfg-video-details/".concat(e, "/"),
                                        method: "GET",
                                        credentials: "include"
                                    }
                                },
                                transformResponse: function(e) {
                                    try {
                                        e.recommendations = e.recommendations.filter((function(e) {
                                            return e.slug
                                        }))
                                    } catch (t) {
                                        L({
                                            type: "[getVideoDetails] while transforming response",
                                            error: t
                                        })
                                    }
                                    return e
                                },
                                keepUnusedDataFor: 600
                            }),
                            updateVideoDetails: e.mutation({
                                query: function(e) {
                                    var t = e.slug,
                                        s = Object(Z.a)(e, $);
                                    return {
                                        url: "/logged-in-video-details/".concat(t, "/"),
                                        method: "PUT",
                                        body: s,
                                        credentials: "include"
                                    }
                                },
                                invalidatesTags: function(e, t, s) {
                                    return [{
                                        type: "video",
                                        slug: s.slug
                                    }]
                                }
                            }),
                            updateViewCount: e.mutation({
                                query: function(e) {
                                    return {
                                        url: "update-user-views/",
                                        method: "POST",
                                        body: {
                                            slug: e.slug
                                        },
                                        credentials: "include",
                                        headers: {
                                            Accept: "application/json",
                                            "Content-Type": "application/json",
                                            "X-CSRFToken": e.csrfToken
                                        }
                                    }
                                }
                            })
                        }
                    }
                }),
                se = Object(X.a)({
                    reducerPath: "userVideoActionsApi",
                    tagTypes: ["UserStats"],
                    baseQuery: Object(K.d)({
                        baseUrl: p.VIDEO_API_URL
                    }),
                    endpoints: function(e) {
                        return {
                            getUserVideoStats: e.query({
                                query: function(e) {
                                    return {
                                        url: "/logged-in-video-details/".concat(e, "/"),
                                        method: "GET",
                                        credentials: "include"
                                    }
                                },
                                keepUnusedDataFor: 600,
                                providesTags: function(e) {
                                    return [{
                                        type: "UserStats",
                                        slug: e
                                    }]
                                }
                            }),
                            updateUserVideoStats: e.mutation({
                                query: function(e) {
                                    var t = e.type,
                                        s = e.csrfToken,
                                        a = Object(Z.a)(e, ee);
                                    return L({
                                        type: "User stats update API [".concat(t, "]"),
                                        payload: a,
                                        csrfToken: s
                                    }), {
                                        url: "like" !== t ? "/add-to-watchlist/" : "/update-user-likes/",
                                        method: "POST",
                                        body: a,
                                        credentials: "include",
                                        headers: {
                                            Accept: "application/json",
                                            "Content-Type": "application/json",
                                            "X-CSRFToken": s
                                        }
                                    }
                                }
                            })
                        }
                    }
                }),
                ae = se.useUpdateUserVideoStatsMutation,
                ce = (te.useUpdateVideoDetailsMutation, te.useUpdateViewCountMutation),
                ne = s(34),
                ie = ["loading", "data", "handleWatchlist"],
                re = function(e) {
                    var t, s = e.loading,
                        c = e.data,
                        n = e.handleWatchlist,
                        i = Object(Z.a)(e, ie),
                        r = Object(a.useContext)(B);
                    if (s) return Object(V.jsx)("div", {
                        className: "articles-list_item video-card skeleton",
                        children: Object(V.jsx)("div", {
                            className: "content",
                            children: Object(V.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    flexGrow: 1
                                },
                                className: "flex-column-sm",
                                children: [Object(V.jsx)("div", {
                                    className: "skeleton-box video-thumbnail"
                                }), Object(V.jsxs)("div", {
                                    className: "gfg-cw-100",
                                    children: [Object(V.jsx)("div", {
                                        className: "head skeleton-box gfg-cw-30",
                                        style: {
                                            height: "20px"
                                        }
                                    }), Object(V.jsxs)("div", {
                                        className: "text",
                                        children: [Object(V.jsx)("div", {
                                            className: "head skeleton-box gfg-cw-60"
                                        }), Object(V.jsx)("div", {
                                            className: "head skeleton-box gfg-cw-50"
                                        }), Object(V.jsx)("div", {
                                            className: "head skeleton-box gfg-cw-40"
                                        })]
                                    }), Object(V.jsxs)("div", {
                                        className: "tags",
                                        children: [Object(V.jsx)("i", {
                                            className: "gfg-icon gfg-icon_tag-primary"
                                        }), Object(V.jsxs)("div", {
                                            className: "tags-list gfg-cw-100",
                                            children: [Object(V.jsx)("div", {
                                                className: "tags-list_item gfg-cw-8 gfg-cw-sm-16",
                                                children: Object(V.jsx)("div", {
                                                    className: "item skeleton-box gfg-cw-80"
                                                })
                                            }), Object(V.jsx)("div", {
                                                className: "tags-list_item gfg-cw-8 gfg-cw-sm-16",
                                                children: Object(V.jsx)("div", {
                                                    className: "item skeleton-box gfg-cw-80"
                                                })
                                            }), Object(V.jsx)("div", {
                                                className: "tags-list_item gfg-cw-8 gfg-cw-sm-16",
                                                children: Object(V.jsx)("div", {
                                                    className: "item skeleton-box gfg-cw-80"
                                                })
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        })
                    });
                    var o = function(e) {
                            if (e > 59) {
                                var t = 0 !== (e / 3600 | 0) ? e / 3600 | 0 : "",
                                    s = e % 3600 / 60 | 0,
                                    a = e % 60;
                                return t = t < 10 ? "0".concat(t) : t, s = s < 10 ? "0".concat(s) : s, a = a < 10 ? "0".concat(a) : a, 0 == t ? "".concat(s, ":").concat(a) : "".concat(t, ":").concat(s, ":").concat(a)
                            }
                            return "0:".concat(e < 10 ? "0" + e : e)
                        },
                        l = function(e) {
                            var t = !!r.loginInformation.premiumUser,
                                s = c.title,
                                a = c.slug,
                                n = c.duration,
                                i = c.meta,
                                l = i.thumbnail,
                                d = i.largeThumbnail,
                                g = i.isPremium;
                            switch (e) {
                                case 0:
                                    return Object(V.jsx)(ne.b, {
                                        to: "/videos/".concat(a, "/"),
                                        title: s,
                                        className: "thumbnail ".concat(g && !t ? "premium-overlay" : ""),
                                        "data-duration": o(n),
                                        rel: "bookmark",
                                        children: Object(V.jsx)("img", {
                                            src: l || d || _,
                                            onError: function(e) {
                                                return function(e) {
                                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                                    e.target.src = t || _
                                                }(e, d)
                                            },
                                            alt: "Preview",
                                            style: {
                                                float: "left"
                                            },
                                            width: 200
                                        })
                                    });
                                case 1:
                                    return Object(V.jsx)(ne.b, {
                                        to: "/videos/".concat(a, "/"),
                                        title: s,
                                        rel: "bookmark",
                                        children: s
                                    });
                                case 2:
                                    return Object(V.jsx)(ne.b, {
                                        to: "/videos/".concat(a, "/"),
                                        children: Object(V.jsx)("span", {
                                            style: {
                                                color: "#308D46"
                                            },
                                            children: "Read More"
                                        })
                                    });
                                default:
                                    return {}
                            }
                        };
                    return Object(V.jsxs)("div", {
                        className: "articles-list_item video-card video-".concat(c.id, " ").concat((null === c || void 0 === c || null === (t = c.meta) || void 0 === t ? void 0 : t.isPremium) ? "is-premium" : ""),
                        "data-video-id": c.id,
                        id: "video-".concat(c.id),
                        children: [Object(V.jsxs)("div", {
                            className: "content",
                            children: [l(0), Object(V.jsxs)("div", {
                                children: [Object(V.jsx)("div", {
                                    className: "head",
                                    children: l(1)
                                }), Object(V.jsxs)("div", {
                                    className: "text",
                                    children: [Object(V.jsx)("span", {
                                        dangerouslySetInnerHTML: {
                                            __html: c.description.substr(0, 200).replace(/<\/?[^>]+(>|$)/g, "")
                                        }
                                    }), Object(V.jsx)("span", {
                                        className: "read-more",
                                        children: l(2)
                                    })]
                                }), Object(V.jsxs)("div", {
                                    className: "tags",
                                    children: [Object(V.jsx)("i", {
                                        className: "gfg-icon gfg-icon_tag-primary"
                                    }), Object(V.jsx)("div", {
                                        className: "tags-list",
                                        children: c.category && !I.a.isEmpty(c.category) && c.category.map((function(e, t) {
                                            return Object(V.jsx)("div", {
                                                className: "tags-list_item",
                                                children: Object(V.jsx)("div", {
                                                    className: "item",
                                                    children: Object(V.jsx)(ne.b, {
                                                        to: "/videos/".concat(f(e.term_id__term_type), "/").concat(e.term_id__slug),
                                                        children: e.term_id__term_name
                                                    })
                                                })
                                            }, t)
                                        }))
                                    })]
                                })]
                            })]
                        }), i.watchlist && Object(V.jsx)("i", {
                            className: "gfg-icon gfg-icon_bookmark primary video-card__bmIcon cp filled",
                            onClick: function(e) {
                                return n(c.slug)
                            }
                        })]
                    })
                },
                oe = function(e) {
                    if (void 0 !== e && null !== e) return (e = (e = e.charAt(0).toUpperCase() + e.slice(1)).replace(/_/g, " ")).toLowerCase().split(" ").map((function(e) {
                        return e.charAt(0).toUpperCase() + e.slice(1)
                    })).join(" ")
                },
                le = ["page", "pagination"],
                de = function(e) {
                    var t = e.totalCount,
                        s = e.queryParams,
                        c = Object(o.j)(),
                        n = c.page,
                        i = (c.pagination, Object(Z.a)(c, le)),
                        r = Object(o.k)().path,
                        g = Object(a.useState)(Math.ceil(t / 10) || void 0),
                        j = Object(d.a)(g, 1)[0],
                        u = s.search ? "?".concat(new URLSearchParams(s)) : "";
                    return 1 !== j && Object(V.jsx)("nav", {
                        id: "pagination",
                        className: "navigation",
                        role: "navigation",
                        children: Object(V.jsxs)("div", {
                            className: "gfg-pagination",
                            children: [n && 1 !== Number(n) ? 2 === Number(n) ? Object(V.jsx)(ne.b, {
                                className: "gfg-mr-2",
                                to: {
                                    pathname: "".concat(Object(o.f)(r, Object(l.a)({}, i)), "/"),
                                    search: u
                                },
                                children: "Prev"
                            }) : Object(V.jsx)(ne.b, {
                                className: "gfg-mr-2",
                                to: {
                                    pathname: "".concat(Object(o.f)(r, Object(l.a)(Object(l.a)({}, i), {}, {
                                        pagination: "page",
                                        page: (Number(n) || 1) - 1
                                    })), "/"),
                                    search: u
                                },
                                children: "Prev"
                            }) : Object(V.jsx)("button", {
                                className: "btn btn--bg-gray btn--disabled gfg-mr-2 font-sm-1",
                                children: "Prev"
                            }), n || 1, " of ", j, Number(n) === j ? Object(V.jsx)("button", {
                                className: "btn btn--bg-gray btn--disabled gfg-ml-2 font-sm-1",
                                children: "Next"
                            }) : Object(V.jsx)(ne.b, {
                                className: "gfg-ml-2",
                                to: {
                                    pathname: "/videos/".concat(i.type ? "".concat(i.type, "/").concat(i.taxonomy, "/") : "", "page/").concat((Number(n) || 1) + 1, "/"),
                                    search: u
                                },
                                children: "Next"
                            })]
                        })
                    })
                },
                ge = function(e) {
                    var t = e.data;
                    return Object(V.jsx)("ul", {
                        className: "gfg-breadcrumb",
                        children: t && !I.a.isEmpty(t) && t.map((function(e, t) {
                            return Object(V.jsx)("li", {
                                className: "gfg-breadcrumb__item ".concat(e.active ? "gfg-breadcrumb__item--active" : ""),
                                children: Object(V.jsx)(ne.b, {
                                    to: e.path,
                                    children: e.name
                                })
                            }, t)
                        }))
                    })
                },
                je = function e(t) {
                    var s = t.data,
                        a = t.level,
                        c = s.slug,
                        n = s.name;
                    return [Object(V.jsx)("option", {
                        value: c,
                        children: "\xa0\xa0".repeat(a + a) + n
                    }, c), s.children && s.children.length ? s.children.map((function(t) {
                        return Object(V.jsx)(e, {
                            data: t,
                            level: a + 1
                        }, t.id)
                    })) : ""]
                },
                ue = function(e) {
                    var t = e.selectedchild,
                        s = e.name,
                        a = e.setSelectedParent,
                        c = e.isLoading,
                        n = e.isError,
                        i = e.data;
                    return Object(V.jsxs)("select", {
                        name: s,
                        value: t || void 0,
                        onChange: a,
                        children: [Object(V.jsx)("option", {
                            value: "",
                            children: c ? "Loading.." : "Select Category"
                        }), n && Object(V.jsx)("option", {
                            value: "",
                            children: "Some error occurred"
                        }), !c && i && i.map((function(e) {
                            return Object(V.jsx)(je, {
                                data: e,
                                level: 0
                            }, e.id)
                        }))]
                    })
                },
                me = function(e) {
                    var t = e.search,
                        s = e.category,
                        c = Object(o.h)(),
                        n = Object(a.useState)({
                            category: "",
                            search: ""
                        }),
                        i = Object(d.a)(n, 2),
                        r = i[0],
                        g = i[1],
                        j = Object(a.useState)(!(!t && !s)),
                        u = Object(d.a)(j, 2),
                        m = u[0],
                        h = u[1],
                        p = Object(W.d)(),
                        b = Object(W.e)((function(e) {
                            return Y.endpoints.getCategoryList.select()(e)
                        })),
                        x = b.data,
                        f = b.isLoading,
                        O = b.isError;
                    Object(a.useEffect)((function() {
                        var e = p(Y.endpoints.getCategoryList.initiate()).unsubscribe;
                        return function() {
                            e()
                        }
                    }), [p]), Object(a.useEffect)((function() {
                        g({
                            category: s || "",
                            search: t || ""
                        }), s || t || h(!1)
                    }), [s, t]);
                    var _ = function(e) {
                        g(Object(l.a)(Object(l.a)({}, r), {}, Object(z.a)({}, e.target.name, e.target.value)))
                    };
                    return Object(V.jsx)("div", {
                        className: "video-filters",
                        children: Object(V.jsxs)("form", {
                            autoComplete: "off",
                            onSubmit: function(e) {
                                e.preventDefault();
                                var t = "",
                                    s = "";
                                r.category && (t = "category/".concat(r.category)), r.search && (s = "?search=".concat(r.search)), (t || s) && (h(!0), c.push("/videos/".concat(t).concat(s)))
                            },
                            onReset: function() {
                                h(!1), g({
                                    category: "",
                                    search: ""
                                }), c.push("/videos/")
                            },
                            children: [Object(V.jsxs)("div", {
                                className: "video-filters__form",
                                children: [Object(V.jsxs)("div", {
                                    className: "video-filters__form-select",
                                    children: [Object(V.jsx)("label", {
                                        hidden: !0,
                                        children: "Select Category"
                                    }), Object(V.jsx)(ue, {
                                        selectedchild: r.category,
                                        setSelectedParent: _,
                                        data: x,
                                        isLoading: f,
                                        isError: O,
                                        name: "category"
                                    })]
                                }), Object(V.jsxs)("div", {
                                    className: "custom-input--icon video-filters__form-input",
                                    children: [Object(V.jsx)("label", {
                                        hidden: !0,
                                        children: "Search"
                                    }), Object(V.jsx)("input", {
                                        type: "text",
                                        name: "search",
                                        placeholder: "Search",
                                        value: r.search,
                                        onChange: _
                                    })]
                                })]
                            }), Object(V.jsxs)("div", {
                                className: "action-buttons",
                                children: [Object(V.jsx)("button", {
                                    type: "submit",
                                    className: "btn icon-only",
                                    title: "Apply filters",
                                    children: Object(V.jsx)("i", {
                                        className: "gfg-icon gfg-icon_check white"
                                    })
                                }), m && Object(V.jsx)("button", {
                                    type: "reset",
                                    className: "btn icon-only gfg-ml-1 gfg-ml-sm-0",
                                    title: "Clear filters",
                                    children: Object(V.jsx)("i", {
                                        className: "gfg-icon gfg-icon_times"
                                    })
                                })]
                            })]
                        })
                    })
                };
            var he, pe = function() {
                    return new URLSearchParams(Object(o.i)().search)
                },
                be = s(44),
                xe = "Please try again, some error occurred.",
                fe = {
                    notLoggedIn: "Please login to proceed",
                    premiumVideoLikeError: "Please Subscribe to Premium to Like this Video",
                    premiumVideoSaveError: "Please Subscribe to Premium to Save this Video"
                },
                Oe = s(142),
                _e = function(e) {
                    var t = e.title,
                        s = e.description,
                        a = e.thumbnail,
                        c = Object(o.k)().url;
                    return Object(V.jsxs)(Oe.a, {
                        children: [t && Object(V.jsx)("title", {
                            children: t
                        }), s && Object(V.jsx)("meta", {
                            name: "description",
                            content: s,
                            "data-react-helmet": !0
                        }), s && Object(V.jsx)("meta", {
                            name: "og:description",
                            content: s
                        }), Object(V.jsx)("meta", {
                            property: "og:url",
                            content: "".concat(p.GFG_SITE_URL.slice(0, p.GFG_SITE_URL.length - 1)).concat(c)
                        }), a && Object(V.jsx)("meta", {
                            property: "og:image",
                            content: a
                        }), Object(V.jsx)("link", {
                            rel: "canonical",
                            href: "https://www.geeksforgeeks.org".concat("/" === c[c.length - 1] ? c : c + "/")
                        }), Object(V.jsx)("meta", {
                            property: "twitter:url",
                            content: "".concat(p.GFG_SITE_URL.slice(0, p.GFG_SITE_URL.length - 1)).concat(c)
                        }), t && Object(V.jsx)("meta", {
                            name: "twitter:title",
                            content: t
                        }), s && Object(V.jsx)("meta", {
                            name: "twitter:description",
                            content: s
                        }), a && Object(V.jsx)("meta", {
                            name: "twitter:image",
                            content: a
                        })]
                    })
                },
                ve = function(e) {
                    var t = e.isPremiumDomain,
                        s = Object(o.k)(),
                        c = s.params,
                        n = s.path,
                        i = pe().get("search"),
                        r = Object(a.useState)(!1),
                        l = Object(d.a)(r, 2),
                        g = l[0],
                        j = l[1],
                        u = Object(a.useContext)(B),
                        m = Object(W.e)((function(e) {
                            return Y.endpoints.getVideoList.select(c)(e)
                        })),
                        h = m.isLoading,
                        p = void 0 === h || h,
                        b = m.data,
                        x = m.isError,
                        f = Object(W.d)();
                    Object(a.useEffect)((function() {
                        var e = c;
                        i && (e.search = i);
                        var t = f(Y.endpoints.getVideoList.initiate(e)).unsubscribe;
                        return function() {
                            window.scrollTo({
                                behavior: "smooth",
                                top: 0
                            }), t()
                        }
                    }), [c, i, f]), Object(a.useEffect)((function() {
                        x && be.a.error(xe)
                    }), [x]);
                    return Object(V.jsxs)("div", {
                        className: "article--container ".concat(t || u.loginInformation.premiumUser ? "is-premium" : ""),
                        style: {
                            marginTop: "0px",
                            paddingTop: "40px"
                        },
                        children: [Object(V.jsx)(_e, {
                            title: i ? "Search Result for '".concat(i, "' - Videos | GeeksforGeeks") : "Videos | GeeksforGeeks",
                            thumbnail: N,
                            description: w
                        }), Object(V.jsxs)("div", {
                            className: "articles-list",
                            children: [Object(V.jsxs)("div", {
                                className: "heading",
                                children: [Object(V.jsxs)("div", {
                                    className: "def-title_wrap",
                                    style: {
                                        padding: 0
                                    },
                                    children: [Object(V.jsx)("div", {
                                        className: "title",
                                        children: "GeeksforGeeks Videos"
                                    }), Object(V.jsx)("button", {
                                        onClick: function() {
                                            j((function(e) {
                                                return !e
                                            }))
                                        },
                                        type: "button",
                                        "data-toggle": "collapse",
                                        className: "btn icon-only",
                                        children: Object(V.jsx)("i", {
                                            className: "gfg-icon gfg-icon_filter"
                                        })
                                    })]
                                }), c.taxonomy && Object(V.jsx)(ge, {
                                    data: [{
                                        name: "Videos",
                                        path: "/videos/"
                                    }, {
                                        name: "".concat(oe(c.taxonomy)),
                                        path: n,
                                        active: !0
                                    }]
                                }), g && Object(V.jsx)(me, {
                                    search: i,
                                    category: "tag" !== c.type ? c.taxonomy : ""
                                })]
                            }), x || p ? Object(V.jsxs)(a.Fragment, {
                                children: [Object(V.jsx)(re, {
                                    loading: !0
                                }), Object(V.jsx)(re, {
                                    loading: !0
                                }), Object(V.jsx)(re, {
                                    loading: !0
                                }), Object(V.jsx)(re, {
                                    loading: !0
                                }), Object(V.jsx)(re, {
                                    loading: !0
                                }), Object(V.jsx)(re, {
                                    loading: !0
                                }), Object(V.jsx)(re, {
                                    loading: !0
                                }), Object(V.jsx)(re, {
                                    loading: !0
                                })]
                            }) : p || !b || I.a.isEmpty(b.results) ? !p && b && b.results ? Object(V.jsxs)("div", {
                                className: "d-flex flex-column--def align-items-center gfg-mt-4 gfg-pt-4 gfg-mb-4",
                                children: [Object(V.jsx)("img", {
                                    src: v,
                                    alt: "Empty List",
                                    width: 300,
                                    className: "img-fluid"
                                }), Object(V.jsxs)("div", {
                                    className: "gfg-mt-4 gfg-pt-4 text-center",
                                    children: [Object(V.jsx)("h2", {
                                        className: "gfg-mb-1 text-dark",
                                        children: "Oh Snap!"
                                    }), Object(V.jsx)("p", {
                                        className: "gfg-mb-3 text-dark",
                                        children: "No videos found"
                                    })]
                                })]
                            }) : "" : b.results.map((function(e, t) {
                                return Object(V.jsx)(re, {
                                    data: e
                                }, t)
                            })), b && !I.a.isEmpty(b.results) && Object(V.jsx)(de, {
                                totalCount: b.count || 0,
                                queryParams: {
                                    search: i
                                }
                            })]
                        })]
                    })
                },
                ke = s(67),
                ye = {
                    type: "watchlist"
                },
                Ne = function(e) {
                    var t = e.isPremiumDomain,
                        s = Object(W.e)((function(e) {
                            return Y.endpoints.getUserWatchlist.select(ye)(e)
                        })),
                        c = s.isLoading,
                        n = void 0 === c || c,
                        i = s.data,
                        r = s.isError,
                        o = Object(W.d)(),
                        g = Object(a.useContext)(B),
                        m = ae(),
                        h = Object(d.a)(m, 1)[0],
                        p = Object(a.useState)(!1),
                        b = Object(d.a)(p, 2),
                        x = b[0],
                        f = b[1];
                    Object(a.useEffect)((function() {
                        var e = o(Y.endpoints.getUserWatchlist.initiate(ye)).unsubscribe;
                        return function() {
                            window.scrollTo({
                                behavior: "smooth",
                                top: 0
                            }), e()
                        }
                    }), [o]), Object(a.useEffect)((function() {
                        r && g.isLoggedIn && be.a.error(xe)
                    }), [r, g.isLoggedIn]);
                    var O = function(e) {
                            var t = i.results ? Object(ke.a)(i.results) : [];
                            t = I.a.map(I.a.omitBy(t, {
                                slug: e
                            })), o(Y.util.updateQueryData("getUserWatchlist", ye, (function() {
                                return Object(l.a)(Object(l.a)({}, i), {}, {
                                    count: i.count - 1,
                                    results: t
                                })
                            }))), o(se.util.invalidateTags(["UserStats"]), e)
                        },
                        _ = function() {
                            var e = Object(u.a)(j.a.mark((function e(t) {
                                var s;
                                return j.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, f(!0), e.next = 4, h({
                                                slug: t,
                                                watchlist: !1,
                                                csrfToken: U()
                                            }).unwrap();
                                        case 4:
                                            O(t), e.next = 13;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(0), s = xe, e.t0.data && "Invalid CSRF Token" === e.t0.data.message && (F(), g.getToken(), s = "Token verification failed, please refresh & try again"), L(e.t0), be.a.error(s);
                                        case 13:
                                            return e.prev = 13, f(!1), e.finish(13);
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 7, 13, 16]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return Object(V.jsxs)("div", {
                        className: "article--container ".concat(t || g.loginInformation.premiumUser ? "is-premium" : ""),
                        style: {
                            marginTop: "0px",
                            paddingTop: "40px"
                        },
                        children: [Object(V.jsx)(_e, {
                            title: "Watchlist - Videos | GeeksforGeeks",
                            thumbnail: N,
                            description: w
                        }), Object(V.jsxs)("div", {
                            className: "articles-list",
                            children: [Object(V.jsx)("div", {
                                className: "heading",
                                children: Object(V.jsx)("div", {
                                    className: "def-title_wrap",
                                    style: {
                                        padding: 0
                                    },
                                    children: Object(V.jsx)("div", {
                                        className: "title",
                                        children: "Saved Videos"
                                    })
                                })
                            }), g.isLoggedIn || g.loginInformation.loading ? r || n ? Object(V.jsxs)(a.Fragment, {
                                children: [Object(V.jsx)(re, {
                                    loading: !0
                                }), Object(V.jsx)(re, {
                                    loading: !0
                                }), Object(V.jsx)(re, {
                                    loading: !0
                                }), Object(V.jsx)(re, {
                                    loading: !0
                                }), Object(V.jsx)(re, {
                                    loading: !0
                                })]
                            }) : n || !i || I.a.isEmpty(i.results) ? Object(V.jsxs)("div", {
                                className: "d-flex flex-column--def align-items-center gfg-mt-4 gfg-pt-4 gfg-mb-4",
                                children: [Object(V.jsx)("img", {
                                    src: v,
                                    alt: "Empty List",
                                    width: 300,
                                    className: "img-fluid"
                                }), Object(V.jsxs)("div", {
                                    className: "gfg-mt-4 gfg-pt-4 text-center",
                                    children: [Object(V.jsx)("h2", {
                                        className: "gfg-mb-1 text-dark",
                                        children: "Oh Snap!"
                                    }), Object(V.jsx)("p", {
                                        className: "gfg-mb-3 text-dark",
                                        children: "No Saved videos found"
                                    }), Object(V.jsx)(ne.b, {
                                        to: "/videos/",
                                        className: "btn btn--bg-primary btn--medium td-none text-light",
                                        children: "Browse Videos"
                                    })]
                                })]
                            }) : i.results.map((function(e, t) {
                                return Object(V.jsx)(re, {
                                    data: e,
                                    watchlist: !0,
                                    handleWatchlist: _
                                }, t)
                            })) : Object(V.jsxs)("div", {
                                className: "d-flex flex-column--def align-items-center gfg-mt-4 gfg-pt-4 gfg-mb-4",
                                children: [Object(V.jsx)("img", {
                                    src: v,
                                    alt: "Empty List",
                                    width: 300,
                                    className: "img-fluid"
                                }), Object(V.jsxs)("div", {
                                    className: "gfg-mt-4 gfg-pt-4 text-center",
                                    children: [Object(V.jsx)("p", {
                                        className: "gfg-mb-3",
                                        children: "Please login to see your saved videos"
                                    }), Object(V.jsx)("button", {
                                        className: "cp btn btn--bg-primary btn--medium td-none text-light ".concat(g.loginModalClass),
                                        children: "Login"
                                    })]
                                })]
                            }), i && !I.a.isEmpty(i.results) && Object(V.jsx)(de, {
                                queryParams: {},
                                totalCount: i.count || 0
                            })]
                        }), x && Object(V.jsx)("div", {
                            className: "gfg-loader",
                            children: Object(V.jsx)("div", {
                                className: "gfg-loader--overlay",
                                children: Object(V.jsxs)("div", {
                                    className: "loading-dots",
                                    children: [Object(V.jsx)("div", {
                                        className: "loading-dots--dot"
                                    }), Object(V.jsx)("div", {
                                        className: "loading-dots--dot"
                                    }), Object(V.jsx)("div", {
                                        className: "loading-dots--dot"
                                    })]
                                })
                            })
                        })]
                    })
                },
                we = P(),
                Se = function(e) {
                    var t = e.match.params;
                    return t && "watchlist" === t.type ? Object(V.jsx)(Ne, {
                        isPremiumDomain: we
                    }) : Object(V.jsx)(ve, {
                        isPremiumDomain: we
                    })
                },
                Le = function(e) {
                    var t = e.loading,
                        s = e.data,
                        c = e.allowCollapse,
                        n = void 0 !== c && c,
                        i = Object(a.useState)(!1),
                        r = Object(d.a)(i, 2),
                        o = r[0],
                        l = r[1];
                    return Object(a.useEffect)((function() {
                        return function() {
                            n && l(!1)
                        }
                    }), [s.description, n]), Object(V.jsx)("div", {
                        className: "text p-relative",
                        style: n && !o ? {} : {
                            whiteSpace: "pre-wrap"
                        },
                        children: t ? Object(V.jsxs)(a.Fragment, {
                            children: [Object(V.jsx)("p", {
                                className: "skeleton-box gfg-cw-100"
                            }), Object(V.jsx)("p", {
                                className: "skeleton-box gfg-cw-80"
                            }), Object(V.jsx)("p", {
                                className: "skeleton-box gfg-cw-50"
                            })]
                        }) : s.description && s.description.length < 350 ? Object(V.jsx)("div", {
                            dangerouslySetInnerHTML: {
                                __html: s.description
                            }
                        }) : n && !o ? Object(V.jsxs)(a.Fragment, {
                            children: [Object(V.jsx)("div", {
                                style: {
                                    height: "100px",
                                    overflowY: "hidden"
                                },
                                children: Object(V.jsx)("div", {
                                    dangerouslySetInnerHTML: {
                                        __html: s.description
                                    }
                                })
                            }), Object(V.jsx)("button", {
                                className: "toggleDescriptionButton btn btn--bg-grey translucent gfg-cw-100 btn--large text-large cp",
                                onClick: function() {
                                    return l((function(e) {
                                        return !e
                                    }))
                                },
                                children: "Show more"
                            })]
                        }) : !n || n && o ? Object(V.jsxs)(a.Fragment, {
                            children: [Object(V.jsx)("div", {
                                dangerouslySetInnerHTML: {
                                    __html: s.description
                                }
                            }), n && Object(V.jsx)("button", {
                                className: "btn btn--bg-grey translucent gfg-cw-100 btn--large text-large cp",
                                onClick: function() {
                                    return l((function(e) {
                                        return !e
                                    }))
                                },
                                children: "Show less"
                            })]
                        }) : ""
                    })
                },
                Ce = function(e) {
                    var t = e.loading,
                        s = e.data;
                    return Object(V.jsx)(V.Fragment, {
                        children: t ? Object(V.jsxs)(a.Fragment, {
                            children: [Object(V.jsx)("div", {
                                className: "title skeleton-box gfg-cw-25"
                            }), Object(V.jsx)("div", {
                                className: "media",
                                children: Object(V.jsx)("div", {
                                    className: "meta skeleton-box gfg-cw-20"
                                })
                            })]
                        }) : Object(V.jsx)(a.Fragment, {
                            children: Object(V.jsx)("div", {
                                className: "d-flex justify-content-between align-items-center",
                                children: Object(V.jsx)("div", {
                                    children: Object(V.jsx)("div", {
                                        className: "media gfg-mb-0 gfg-mt-0",
                                        children: Object(V.jsx)("div", {
                                            className: "meta d-row nowrap justify-content-between gfg-cw-100",
                                            children: s && s.meta ? Object(V.jsxs)("ul", {
                                                className: "gfg-pb-1",
                                                children: [s.meta.views > 1 && Object(V.jsxs)("li", {
                                                    className: "noPadding",
                                                    children: [s.meta.views, " Views"]
                                                }), s.time && Object(V.jsx)("li", {
                                                    className: "noMarker",
                                                    children: s.time
                                                })]
                                            }) : ""
                                        })
                                    })
                                })
                            })
                        })
                    })
                },
                Te = function(e) {
                    var t = e.data,
                        s = e.type;
                    return Object(V.jsx)("div", {
                        className: "bottom-wrap ".concat(s === x ? "gfg-pti-0" : ""),
                        children: Object(V.jsx)("div", {
                            className: "improved",
                            children: t && !I.a.isEmpty(t) && Object(V.jsxs)(a.Fragment, {
                                children: [Object(V.jsx)("div", {
                                    className: "t-head",
                                    style: {
                                        minWidth: "auto"
                                    },
                                    children: "Related Tags:"
                                }), Object(V.jsx)("ul", {
                                    children: t.map((function(e, t) {
                                        return Object(V.jsx)("li", {
                                            children: Object(V.jsx)(ne.b, {
                                                to: "/videos/".concat(f(e.term_id__term_type), "/").concat(e.term_id__slug),
                                                children: e.term_id__term_name
                                            })
                                        }, t)
                                    }))
                                })]
                            })
                        })
                    })
                },
                Ge = function(e) {
                    var t = e.data,
                        s = e.isError,
                        c = Object(a.useContext)(B);
                    return Object(V.jsx)("div", {
                        className: "video-loginView skeleton-box ".concat(s ? "skeleton-box--error" : ""),
                        children: t && t.largeThumbnail ? Object(V.jsxs)(a.Fragment, {
                            children: [Object(V.jsx)("img", {
                                src: t.largeThumbnail,
                                alt: t.title,
                                className: "img-fluid"
                            }), !c.loginInformation.premiumUser && Object(V.jsx)("a", {
                                href: p.GFG_PREMIUM_URL,
                                className: "btn btn--bg-primary td-none btn--large ws-nowrap",
                                style: {
                                    color: "white"
                                },
                                children: "Subscribe to Premium"
                            })]
                        }) : ""
                    })
                },
                Ie = s(104),
                Pe = (s(296), s(297), s(298), s(299), s(300), Object(Q.createSlice)({
                    name: "extraVideoSlice",
                    initialState: {
                        videoLoad: 1
                    },
                    reducers: {
                        toggleVideoOnLoad: function(e) {
                            e.videoLoad++
                        }
                    }
                })),
                Re = Pe.actions.toggleVideoOnLoad,
                Ee = Pe.reducer,
                Ae = ["src", "controls", "autoplay", "type"],
                Ue = ["src", "controls", "autoplay", "type"],
                Fe = function(e) {
                    var t = e.src,
                        s = e.controls,
                        c = e.autoplay,
                        n = e.type,
                        i = Object(Z.a)(e, Ue),
                        r = function(e) {
                            var t = e.src,
                                s = e.controls,
                                c = void 0 === s || s,
                                n = e.autoplay,
                                i = void 0 !== n && n,
                                r = e.type,
                                o = void 0 === r ? "application/x-mpegURL" : r,
                                g = Object(Z.a)(e, Ae),
                                j = Object(a.useRef)(null),
                                u = Object(a.useState)(null),
                                m = Object(d.a)(u, 2),
                                h = m[0],
                                p = m[1];
                            return Object(a.useEffect)((function() {
                                var e = {
                                        fill: !0,
                                        fluid: !0,
                                        aspectRatio: g.isPremium ? "2:1" : "16:9",
                                        preload: "auto",
                                        nativeAudioTracks: !1,
                                        nativeVideoTracks: !1,
                                        html5: {
                                            hls: {
                                                debug: !0,
                                                overrideNative: !0,
                                                enableLowInitialPlaylist: !0,
                                                smoothQualityChange: !0
                                            }
                                        },
                                        playbackRates: [.5, 1, 1.5, 2],
                                        width: "100% !important",
                                        height: "450px",
                                        controlBar: {
                                            volumePanel: {
                                                inline: !1,
                                                vertical: !0
                                            },
                                            pictureInPictureToggle: !1
                                        }
                                    },
                                    s = ["html5"];
                                "video/youtube" === o && s.push("youtube");
                                var a = Object(Ie.default)(j.current, Object(l.a)(Object(l.a)({}, e), {}, {
                                    controls: c,
                                    autoplay: i,
                                    preload: "none",
                                    poster: g.thumbnail || g.largeThumbnail,
                                    sources: [{
                                        src: t,
                                        type: o
                                    }],
                                    techOrder: s
                                }), (function() {
                                    if ("video/youtube" !== o) {
                                        a.qualityLevels();
                                        try {
                                            a.hlsQualitySelector({})
                                        } catch (e) {
                                            L("HLS not working - ", t)
                                        }
                                    }
                                    g.subtitle && a.addRemoteTextTrack({
                                        kind: "captions",
                                        label: "English",
                                        srcLang: "en",
                                        src: g.subtitle,
                                        default: !0
                                    });
                                    try {
                                        a.hotkeys({
                                            seekStep: 5,
                                            volumeStep: .1,
                                            enableModifiersForNumbers: !1
                                        })
                                    } catch (e) {
                                        L("Hotkeys not working - ", e)
                                    }
                                }));
                                return p(a),
                                    function() {
                                        null !== h && h.dispose()
                                    }
                            }), []), Object(a.useEffect)((function() {
                                null !== h && h.src({
                                    src: t
                                })
                            }), [t, h]), j
                        }(Object(l.a)({
                            src: t,
                            controls: s,
                            autoplay: c,
                            type: n
                        }, i)),
                        g = Object(a.useState)(!1),
                        j = Object(d.a)(g, 2),
                        u = j[0],
                        m = j[1],
                        h = Object(W.e)((function(e) {
                            return e.additionalDetails.videoLoad
                        })),
                        p = Object(W.d)(),
                        b = ce(),
                        x = Object(d.a)(b, 1)[0],
                        f = Object(o.j)(),
                        O = Object(o.h)();
                    Object(a.useEffect)((function() {
                        return "PUSH" === O.action && p(Re()),
                            function() {
                                p(Re()), m(!1)
                            }
                    }), [t]);
                    return Object(V.jsx)("div", {
                        "data-vjs-player": !0,
                        className: "video-gfgPlayer",
                        children: Object(V.jsx)("video", {
                            ref: r,
                            onTimeUpdate: function(e) {
                                var t = Number(e.target.currentTime),
                                    s = U();
                                !isNaN(t) && t > 0 && !u && s && (m(!0), x({
                                    slug: f.slug,
                                    csrfToken: s
                                }))
                            },
                            autoPlay: !0,
                            muted: h <= 1 && (window.chrome || !!window.safari),
                            id: "gfgVideoPlayer",
                            className: "video-js vjs-default-skin vjs-big-play-centered"
                        })
                    })
                },
                De = function(e) {
                    var t = e.title,
                        s = e.loading,
                        c = e.data,
                        n = Object(o.k)().path,
                        i = Object(a.useState)({
                            page: 1,
                            flex: 2,
                            listItems: 2
                        }),
                        r = Object(d.a)(i, 2),
                        g = r[0],
                        j = r[1],
                        u = Object(a.useState)([]),
                        m = Object(d.a)(u, 2),
                        h = m[0],
                        p = m[1];
                    Object(a.useEffect)((function() {
                        window.innerWidth <= 576 && j((function(e) {
                            return Object(l.a)(Object(l.a)({}, e), {}, {
                                flex: 1
                            })
                        }))
                    }), []), Object(a.useEffect)((function() {
                        if (c && c.length) {
                            var e = [],
                                t = [];
                            c.forEach((function(s, a) {
                                (a % g.listItems === 0 && a > 0 || a === c.length - 1) && t.length && e.push(t), a % g.listItems === 0 && (t = []), t.push(s)
                            })), c.length % 2 !== 0 && e.push(t), p([].concat(e))
                        }
                        return function() {
                            p([]), j({
                                page: 1,
                                flex: 2,
                                listItems: 2
                            })
                        }
                    }), [c, g.listItems]);
                    return !s && h.length <= 0 ? "" : Object(V.jsx)("div", {
                        className: "article--recommended",
                        children: Object(V.jsxs)("div", {
                            className: "article--recommended_wrapper",
                            children: [Object(V.jsxs)("div", {
                                className: "top-bar",
                                children: [Object(V.jsx)("div", {
                                    className: "def-title_wrap pl-0",
                                    children: Object(V.jsx)("div", {
                                        className: "title large",
                                        children: t
                                    })
                                }), c && c.length > g.flex * g.listItems && Object(V.jsxs)("div", {
                                    className: "page-list",
                                    children: [!s && Object(V.jsx)("div", {
                                        className: "page-h",
                                        children: "Page :"
                                    }), Object(V.jsx)("div", {
                                        className: "pages",
                                        children: c && c.length && I.a.times(Math.ceil(c.length / (g.flex * g.listItems)), (function(e) {
                                            return Object(V.jsx)("div", {
                                                className: "page p ".concat(g.page === e + 1 ? "active" : ""),
                                                onClick: function() {
                                                    return t = e + 1, void j(Object(l.a)(Object(l.a)({}, g), {}, {
                                                        page: t
                                                    }));
                                                    var t
                                                },
                                                "data-page": e,
                                                children: e + 1
                                            }, e)
                                        }))
                                    })]
                                })]
                            }), Object(V.jsx)("div", {
                                className: "gfg-carousel",
                                children: Object(V.jsxs)("div", {
                                    className: "gfg-carousel__wrap",
                                    "data-flex": "2",
                                    children: [h && h.map((function(e, t) {
                                        var s = (g.page - 1) * g.flex,
                                            a = g.page * g.flex,
                                            c = a > t && s <= t ? 1 === g.page ? "initial" : "active" : a <= t ? "next" : "prev";
                                        return Object(V.jsx)("div", {
                                            className: "gfg-carousel__wrap-slide ".concat(c),
                                            children: Object(V.jsx)("div", {
                                                className: "slide-item_list",
                                                children: e && e.map((function(e, t) {
                                                    return Object(V.jsxs)("div", {
                                                        className: "slide-item",
                                                        children: [Object(V.jsx)("img", {
                                                            src: null === e || void 0 === e ? void 0 : e.largeThumbnail,
                                                            className: "img-fluid slide-item_thumbnail",
                                                            alt: "".concat(e.title)
                                                        }), Object(V.jsxs)(ne.b, {
                                                            to: Object(o.f)(n, {
                                                                slug: e.slug
                                                            }),
                                                            title: e.title,
                                                            rel: "bookmark",
                                                            className: "c-wrap",
                                                            children: [Object(V.jsx)("div", {
                                                                className: "head",
                                                                children: e.title
                                                            }), Object(V.jsx)("div", {
                                                                className: "meta",
                                                                children: e.time
                                                            })]
                                                        })]
                                                    }, t)
                                                }))
                                            })
                                        }, t)
                                    })), s && Object(V.jsxs)(V.Fragment, {
                                        children: [Object(V.jsx)("div", {
                                            className: "gfg-carousel__wrap-slide initial",
                                            children: Object(V.jsxs)("div", {
                                                className: "slide-item_list",
                                                children: [Object(V.jsxs)("div", {
                                                    className: "slide-item gfg-cw-100",
                                                    children: [Object(V.jsx)("div", {
                                                        className: "skeleton-box slide-item_thumbnail"
                                                    }), Object(V.jsxs)("div", {
                                                        className: "c-wrap gfg-cw-40 gfg-cw-sm-100 skeleton",
                                                        children: [Object(V.jsx)("div", {
                                                            className: "head skeleton-box gfg-cw-50 gfg-cw-sm-80"
                                                        }), Object(V.jsx)("div", {
                                                            className: "meta skeleton-box gfg-cw-30 gfg-cw-sm-50 gfg-mt-2"
                                                        })]
                                                    })]
                                                }), Object(V.jsxs)("div", {
                                                    className: "slide-item gfg-cw-100",
                                                    children: [Object(V.jsx)("div", {
                                                        className: "skeleton-box slide-item_thumbnail"
                                                    }), Object(V.jsxs)("div", {
                                                        className: "c-wrap gfg-cw-40 gfg-cw-sm-100 skeleton",
                                                        children: [Object(V.jsx)("div", {
                                                            className: "head skeleton-box gfg-cw-50 gfg-cw-sm-80"
                                                        }), Object(V.jsx)("div", {
                                                            className: "meta skeleton-box gfg-cw-30 gfg-cw-sm-50 gfg-mt-2"
                                                        })]
                                                    })]
                                                })]
                                            })
                                        }), Object(V.jsx)("div", {
                                            className: "gfg-carousel__wrap-slide initial",
                                            children: Object(V.jsxs)("div", {
                                                className: "slide-item_list",
                                                children: [Object(V.jsxs)("div", {
                                                    className: "slide-item gfg-cw-100",
                                                    children: [Object(V.jsx)("div", {
                                                        className: "skeleton-box slide-item_thumbnail"
                                                    }), Object(V.jsxs)("div", {
                                                        className: "c-wrap gfg-cw-40 gfg-cw-sm-100 skeleton",
                                                        children: [Object(V.jsx)("div", {
                                                            className: "head skeleton-box gfg-cw-50 gfg-cw-sm-80"
                                                        }), Object(V.jsx)("div", {
                                                            className: "meta skeleton-box gfg-cw-30 gfg-cw-sm-50 gfg-mt-2"
                                                        })]
                                                    })]
                                                }), Object(V.jsxs)("div", {
                                                    className: "slide-item gfg-cw-100",
                                                    children: [Object(V.jsx)("div", {
                                                        className: "skeleton-box slide-item_thumbnail"
                                                    }), Object(V.jsxs)("div", {
                                                        className: "c-wrap gfg-cw-40 gfg-cw-sm-100 skeleton",
                                                        children: [Object(V.jsx)("div", {
                                                            className: "head skeleton-box gfg-cw-50 gfg-cw-sm-80"
                                                        }), Object(V.jsx)("div", {
                                                            className: "meta skeleton-box gfg-cw-30 gfg-cw-sm-50 gfg-mt-2"
                                                        })]
                                                    })]
                                                })]
                                            })
                                        })]
                                    })]
                                })
                            }), Object(V.jsx)("div", {
                                className: "gfg-carousel_dots",
                                children: Object(V.jsxs)("div", {
                                    className: "carousel--dots",
                                    children: [Object(V.jsx)("div", {
                                        className: "page p dots active",
                                        "data-page": "1"
                                    }), Object(V.jsx)("div", {
                                        className: "page p dots ",
                                        "data-page": "2"
                                    }), Object(V.jsx)("div", {
                                        className: "page p dots ",
                                        "data-page": "3"
                                    })]
                                })
                            })]
                        })
                    })
                },
                Ve = function(e) {
                    var t = e.handleVideoOperations,
                        s = e.userStats,
                        c = e.authCtx,
                        n = e.data,
                        i = e.disableButton,
                        r = e.handleLikeOperation,
                        o = Object(a.useState)(!1),
                        g = Object(d.a)(o, 2),
                        j = g[0],
                        u = g[1];
                    return Object(a.useEffect)((function() {
                        return function() {
                            u(!1)
                        }
                    }), [j]), Object(V.jsxs)("button", {
                        onClick: function(e) {
                            c.isLoggedIn ? !n.isPremium || c.loginInformation.premiumUser ? s ? t(Object(l.a)(Object(l.a)({}, s), {}, {
                                liked: !s.liked || !1
                            })).then((function(e) {
                                e.hasError ? be.a.error(e.message || xe) : (r(s.liked ? 0 : 1), L("Successfully done [Like operation]"))
                            })).catch((function(e) {
                                L(e), be.a.error(e.message || xe)
                            })).finally((function() {
                                u(!0)
                            })) : be.a.error(xe) : be.a.error(fe.premiumVideoLikeError) : be.a.error(fe.notLoggedIn)
                        },
                        disabled: !!i && "disabled",
                        "data-disabled": i && !j,
                        className: "btn btn--transparent btn--hoverable cp d-row ".concat((null === s || void 0 === s ? void 0 : s.liked) && c.isLoggedIn ? "text-primary" : "inactive", " gfg-pb-1 gfg-pl-1 gfg-pr-1 ").concat(c.isLoggedIn ? "" : c.loginModalClass),
                        title: "Like",
                        children: [Object(V.jsx)("span", {
                            className: "gfg-icon gfg-icon_videoLike ".concat((null === s || void 0 === s ? void 0 : s.liked) && c.isLoggedIn ? "active primary" : "")
                        }), Object(V.jsx)("span", {
                            className: "gfg-pl-1",
                            children: function() {
                                var e = (null === s || void 0 === s ? void 0 : s.liked) && c.isLoggedIn ? 1 : 0,
                                    t = e;
                                return Number(n.likes) > 0 && (t = Number(n.likes) > 1e3 ? (n.likes / 1e3).toFixed(1) + "k" : n.likes || e), t = t > 1 ? t + " Likes" : t + " Like"
                            }()
                        })]
                    })
                },
                qe = function(e) {
                    var t = e.handleVideoOperations,
                        s = e.userStats,
                        c = e.authCtx,
                        n = e.disableButton,
                        i = e.data,
                        r = Object(a.useState)(!1),
                        o = Object(d.a)(r, 2),
                        g = o[0],
                        j = o[1];
                    return Object(a.useEffect)((function() {
                        return function() {
                            j(!1)
                        }
                    }), [g]), Object(V.jsxs)("button", {
                        onClick: function() {
                            c.isLoggedIn ? !i.isPremium || c.loginInformation.premiumUser ? s ? t(Object(l.a)(Object(l.a)({}, s), {}, {
                                watchlist: !s.watchlist
                            })).then((function(e) {
                                e.hasError ? be.a.error(e.message || xe) : L("Successfully done [save operation]")
                            })).catch((function(e) {
                                L(e), be.a.error(e.message || xe)
                            })).finally((function() {
                                j(!0)
                            })) : be.a.error(xe) : be.a.error(fe.premiumVideoSaveError) : be.a.error(fe.notLoggedIn)
                        },
                        disabled: !!n && "disabled",
                        "data-disabled": n && !g,
                        className: "btn btn--transparent btn--hoverable cp d-row ".concat((null === s || void 0 === s ? void 0 : s.watchlist) && c.isLoggedIn ? "text-primary" : "inactive", " gfg-pb-1 gfg-pl-1 gfg-pr-1 ").concat(c.isLoggedIn ? "" : c.loginModalClass),
                        title: "Add to watchlist",
                        children: [Object(V.jsx)("span", {
                            className: "gfg-icon gfg-icon_bookmark ".concat((null === s || void 0 === s ? void 0 : s.watchlist) && c.isLoggedIn ? "active primary filled" : "black", " gfg-icon-20")
                        }), Object(V.jsx)("span", {
                            className: "gfg-pl-1",
                            children: (null === s || void 0 === s ? void 0 : s.watchlist) && c.isLoggedIn ? "Saved" : "Save"
                        })]
                    })
                },
                Me = function(e) {
                    var t = e.data,
                        s = e.handleLikeOperation,
                        c = e.isParentLoading,
                        n = e.loadCommentSection,
                        i = Object(a.useContext)(B),
                        r = Object(o.j)(),
                        g = Object(W.d)(),
                        m = Object(a.useState)(!1),
                        h = Object(d.a)(m, 2),
                        p = h[0],
                        b = h[1],
                        x = ae(),
                        f = Object(d.a)(x, 1)[0],
                        O = Object(W.e)((function(e) {
                            return se.endpoints.getUserVideoStats.select(r.slug)(e)
                        })),
                        _ = O.data,
                        v = O.isLoading;
                    Object(a.useEffect)((function() {
                        var e;
                        return i.isLoggedIn && (e = g(se.endpoints.getUserVideoStats.initiate(r.slug))),
                            function() {
                                e && e.unsubscribe && e.unsubscribe()
                            }
                    }), [g, r.slug, i.isLoggedIn]), Object(a.useEffect)((function() {
                        return function() {
                            b(!1)
                        }
                    }), [_]);
                    var k = function() {
                        var e = Object(u.a)(j.a.mark((function e(t) {
                            var s;
                            return j.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, b(!0), e.next = 4, f(Object(l.a)({
                                            type: t.watchlist !== _.watchlist ? "watchlist" : "like",
                                            slug: r.slug,
                                            csrfToken: U()
                                        }, t)).unwrap();
                                    case 4:
                                        return g(se.util.updateQueryData("getUserVideoStats", r.slug, (function() {
                                            return Object(l.a)(Object(l.a)({}, _), t)
                                        }))), t.watchlist !== _.watchlist && (L({
                                            message: "Invalidating Watchlist Tag: ",
                                            payload: t,
                                            userStats: _
                                        }), g(Y.util.invalidateTags(["watchlistTag"]))), e.abrupt("return", {
                                            hasError: !1
                                        });
                                    case 9:
                                        return e.prev = 9, e.t0 = e.catch(0), L(e.t0), s = "", e.t0 && e.t0.data && "Invalid CSRF Token" === e.t0.data.message && (F(), i.getToken(), s = "Token verification failed, please refresh & try again"), e.abrupt("return", Object(l.a)({
                                            hasError: !0,
                                            message: s
                                        }, e.t0));
                                    case 15:
                                        return e.prev = 15, b(!1), e.finish(15);
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 9, 15, 18]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                    return v || c ? Object(V.jsxs)("ul", {
                        className: "d-row border-bottom noMarker justify-content-end action-buttons loading",
                        children: [Object(V.jsx)("li", {
                            className: "gfg-cw-10 gfg-pl-2",
                            children: Object(V.jsx)("div", {
                                className: "skeleton-box gfg-cw-100"
                            })
                        }), Object(V.jsx)("li", {
                            className: "gfg-cw-10 gfg-pl-2",
                            children: Object(V.jsx)("div", {
                                className: "skeleton-box gfg-cw-100"
                            })
                        }), Object(V.jsx)("li", {
                            className: "gfg-cw-10 gfg-pl-2",
                            children: Object(V.jsx)("div", {
                                className: "skeleton-box gfg-cw-100"
                            })
                        }), Object(V.jsx)("li", {
                            className: "gfg-cw-10 gfg-pl-2",
                            children: Object(V.jsx)("div", {
                                className: "skeleton-box gfg-cw-100"
                            })
                        })]
                    }) : Object(V.jsxs)("ul", {
                        className: "d-row border-bottom noMarker justify-content-end action-buttons",
                        children: [Object(V.jsx)("li", {
                            children: Object(V.jsx)(Ve, {
                                authCtx: i,
                                handleVideoOperations: k,
                                userStats: _,
                                data: t,
                                handleLikeOperation: s,
                                disableButton: p
                            })
                        }), Object(V.jsx)("li", {
                            children: Object(V.jsxs)("button", {
                                onClick: function() {
                                    try {
                                        document.getElementById("comments").scrollIntoView(), n()
                                    } catch (e) {}
                                },
                                className: "btn btn--transparent btn--hoverable cp d-row inactive gfg-pb-1 gfg-pl-1 gfg-pr-1",
                                title: "Comments",
                                children: [Object(V.jsx)("span", {
                                    className: "gfg-icon gfg-icon_comments black"
                                }), Object(V.jsx)("span", {
                                    className: "gfg-pl-1",
                                    children: "Comments"
                                })]
                            })
                        }), Object(V.jsx)("li", {
                            children: Object(V.jsxs)("button", {
                                onClick: function() {
                                    try {
                                        var e = document.createElement("textarea");
                                        e.innerHTML = window.location.href, document.body.appendChild(e), e.select(), document.execCommand("copy"), document.body.removeChild(e), be.a.success("Copied the URL in Clipboard")
                                    } catch (t) {
                                        console.error("[VideoActions] Some error occurred while sharing")
                                    }
                                },
                                className: "btn btn--transparent btn--hoverable cp d-row inactive gfg-pb-1 gfg-pl-1 gfg-pr-1",
                                title: "Share Video",
                                children: [Object(V.jsx)("span", {
                                    className: "gfg-icon gfg-icon_share black"
                                }), Object(V.jsx)("span", {
                                    className: "gfg-pl-1",
                                    children: "Share"
                                })]
                            })
                        }), Object(V.jsx)("li", {
                            children: Object(V.jsx)(qe, {
                                authCtx: i,
                                handleVideoOperations: k,
                                userStats: _,
                                data: t,
                                handleLikeOperation: s,
                                disableButton: p
                            })
                        })]
                    })
                },
                Be = s(245),
                ze = function(e) {
                    var t = Object(o.i)(),
                        s = Object(a.useState)(!1),
                        c = Object(d.a)(s, 2),
                        n = c[0],
                        i = c[1],
                        r = (p.GFG_SITE_URL.replace(/(^\w+:|^)\/\//, ""), p.GFG_SITE_URL.substr(0, [p.GFG_SITE_URL.length - 1]) + t.pathname),
                        l = Object(a.useContext)(B),
                        g = Object(a.useState)("light"),
                        j = Object(d.a)(g, 2),
                        u = j[0],
                        m = j[1],
                        h = "".concat(p.GFG_DISCUSS_URL).concat(e.id, "/").concat(encodeURIComponent(e.title), "/").concat("gfg", "?rel=").concat(encodeURIComponent(r), "&mode=").concat(u),
                        b = function() {
                            i(!0)
                        };
                    return Object(a.useEffect)((function() {
                        e.loadComments && b()
                    }), [e.loadComments]), Object(a.useEffect)((function() {
                        return m(l.theme()),
                            function() {
                                i(!1)
                            }
                    }), [t.pathname]), Object(V.jsxs)("section", {
                        className: "video-wrapper",
                        id: "comments",
                        children: [Object(V.jsx)("div", {
                            className: "disqus--viewer",
                            children: Object(V.jsx)("div", {
                                id: "ide_link",
                                style: {
                                    textAlign: "center",
                                    margin: "50px 0 20px",
                                    fontSize: "12px"
                                },
                                children: Object(V.jsxs)("p", {
                                    children: ["Writing code in comment? Please use ", Object(V.jsx)("a", {
                                        href: "https://ide.geeksforgeeks.org/",
                                        children: "ide.geeksforgeeks.org"
                                    }), ", generate link and share the link here."]
                                })
                            })
                        }), !n && Object(V.jsx)("div", {
                            id: "loadComment",
                            children: Object(V.jsx)("button", {
                                id: "comment",
                                onClick: b,
                                style: {
                                    width: "45%",
                                    marginRight: "0%",
                                    boxShadow: "0 2px 5px 0 rgba(0,0,0,0.4), 0 6px 20px 0 rgba(0,0,0,0)",
                                    borderColor: "#4cb96b",
                                    borderRadius: "4px",
                                    backgroundColor: "var(--gfg-grey-bg)",
                                    color: "var(--color-black)"
                                },
                                children: "Load Comments"
                            })
                        }), n && Object(V.jsx)(Be.a, {
                            log: !1,
                            src: h,
                            style: {
                                width: "1px",
                                minWidth: "100%"
                            }
                        })]
                    })
                },
                He = function(e) {
                    var t, s, c, n, i, r, g, j, u = e.isPremiumDomain,
                        m = Object(o.j)(),
                        h = Object(W.d)(),
                        p = Object(a.useContext)(B),
                        b = Object(a.useState)(!1),
                        f = Object(d.a)(b, 2),
                        O = f[0],
                        _ = f[1],
                        v = Object(W.e)((function(e) {
                            return te.endpoints.getVideoDetails.select(m.slug)(e)
                        })),
                        S = v.data,
                        L = v.isLoading,
                        C = void 0 === L || L,
                        T = v.isError,
                        G = v.error;
                    Object(a.useEffect)((function() {
                        var e = h(te.endpoints.getVideoDetails.initiate(m.slug)).unsubscribe;
                        return p.getToken(),
                            function() {
                                window.scrollTo({
                                    behavior: "smooth",
                                    top: 0
                                }), _(!1), e()
                            }
                    }), [m.slug, h]);
                    var I, P, R = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                        h(te.util.updateQueryData("getVideoDetails", m.slug, (function() {
                            var t, s;
                            return Object(l.a)(Object(l.a)({}, S), {}, {
                                meta: Object(l.a)(Object(l.a)({}, S.meta), {}, {
                                    likes: 1 === e ? (null === S || void 0 === S || null === (t = S.meta) || void 0 === t ? void 0 : t.likes) + 1 : (null === S || void 0 === S || null === (s = S.meta) || void 0 === s ? void 0 : s.likes) - 1
                                })
                            })
                        })))
                    };
                    return T || null === S ? Object(V.jsxs)("div", {
                        className: "article-viewer ".concat(u || p.loginInformation.premiumUser ? "is-premium" : ""),
                        children: [Object(V.jsx)(_e, {
                            title: S ? "".concat(null === S || void 0 === S ? void 0 : S.title, " - Videos | GeeksforGeeks") : y,
                            description: (null === S || void 0 === S || null === (I = S.seo) || void 0 === I ? void 0 : I.description) || w,
                            thumbnail: (null === S || void 0 === S || null === (P = S.seo) || void 0 === P ? void 0 : P.thumbnail) || N
                        }), Object(V.jsx)("div", {
                            className: "article-viewer__content",
                            children: Object(V.jsx)("div", {
                                className: "a-wrapper video-wrapper",
                                children: Object(V.jsxs)("article", {
                                    className: "content",
                                    children: [Object(V.jsx)(Ge, {
                                        isError: !0
                                    }), Object(V.jsxs)("div", {
                                        className: "video-wrapper__content",
                                        children: [Object(V.jsx)(Ce, {
                                            loading: C,
                                            data: {
                                                title: G && 401 === G.status ? "Please refresh and try again" : "Not found or the video you are looking for doesn't exist"
                                            },
                                            handleLikeOperation: R
                                        }), Object(V.jsx)("div", {
                                            className: "gfg-mt-2",
                                            children: Object(V.jsx)(ne.b, {
                                                to: "/videos/",
                                                className: "btn btn--bg-primary btn--medium td-none text-light",
                                                children: "Browse Videos"
                                            })
                                        })]
                                    })]
                                })
                            })
                        })]
                    }) : Object(V.jsxs)("div", {
                        className: "article-viewer ".concat(u || p.loginInformation.premiumUser ? "is-premium" : ""),
                        children: [S ? Object(V.jsx)(_e, {
                            title: S ? "".concat(null === S || void 0 === S ? void 0 : S.title, " - Videos | GeeksforGeeks") : y,
                            description: (null === S || void 0 === S || null === (t = S.seo) || void 0 === t ? void 0 : t.description) || w,
                            thumbnail: (null === S || void 0 === S || null === (s = S.seo) || void 0 === s ? void 0 : s.thumbnail) || N
                        }) : "", Object(V.jsxs)("div", {
                            className: "article-viewer__content",
                            children: [Object(V.jsxs)("div", {
                                className: "a-wrapper video-wrapper",
                                children: [k ? S ? Object(V.jsx)("div", {
                                    className: "gfg-pl-1 gfg-pb-1",
                                    children: Object(V.jsx)(ge, {
                                        data: [{
                                            name: "Videos",
                                            path: "/videos/"
                                        }, {
                                            name: oe(null === S || void 0 === S ? void 0 : S.title),
                                            path: "",
                                            active: !0
                                        }]
                                    })
                                }) : Object(V.jsx)("div", {
                                    className: "skeleton-box gfg-cw-15 gfg-cw-sm-25"
                                }) : "", Object(V.jsxs)("article", {
                                    className: "content",
                                    id: "video-id",
                                    children: [!C && (null === S || void 0 === S ? void 0 : S.title) ? Object(V.jsx)("div", {
                                        className: "title",
                                        style: {
                                            padding: "0 0 12px 8px",
                                            fontSize: "1.25rem"
                                        },
                                        children: S.title
                                    }) : "", !C && (null === S || void 0 === S ? void 0 : S.source) && (p.loginInformation.premiumUser && (null === S || void 0 === S || null === (c = S.meta) || void 0 === c ? void 0 : c.isPremium) || !(null === S || void 0 === S || null === (n = S.meta) || void 0 === n ? void 0 : n.isPremium)) && Object(V.jsx)(Fe, Object(l.a)(Object(l.a)({
                                        src: null === S || void 0 === S ? void 0 : S.source,
                                        type: null === S || void 0 === S || null === (i = S.meta) || void 0 === i ? void 0 : i.format,
                                        subtitle: S.subtitle
                                    }, S.meta), {}, {
                                        isPremium: u || p.loginInformation.premiumUser
                                    })), C || (null === S || void 0 === S || null === (r = S.meta) || void 0 === r ? void 0 : r.isPremium) && !p.loginInformation.premiumUser ? Object(V.jsx)(Ge, {
                                        data: {
                                            largeThumbnail: (null === S || void 0 === S || null === (g = S.meta) || void 0 === g ? void 0 : g.largeThumbnail) || "",
                                            title: null === S || void 0 === S ? void 0 : S.title
                                        }
                                    }) : "", Object(V.jsxs)("div", {
                                        className: "video-wrapper__content",
                                        children: [S && "courses" === S.video_type && S.course_link && Object(V.jsx)("div", {
                                            style: {
                                                textAlign: "center"
                                            },
                                            children: Object(V.jsx)("a", {
                                                href: S.course_link,
                                                className: "btn btn--bg-contrast td-none ws-nowrap btn--medium font-sm",
                                                type: "button",
                                                children: "Visit Course Page"
                                            })
                                        }), Object(V.jsx)(Ce, {
                                            loading: C,
                                            data: {
                                                title: null === S || void 0 === S ? void 0 : S.title,
                                                time: null === S || void 0 === S ? void 0 : S.time,
                                                meta: (null === S || void 0 === S ? void 0 : S.meta) || {},
                                                video_type: (null === S || void 0 === S ? void 0 : S.video_type) || "default",
                                                course_link: null === S || void 0 === S ? void 0 : S.course_link
                                            }
                                        }), Object(V.jsx)(Me, {
                                            data: Object(l.a)({
                                                isPremium: (null === S || void 0 === S || null === (j = S.meta) || void 0 === j ? void 0 : j.isPremium) || !1
                                            }, null === S || void 0 === S ? void 0 : S.meta),
                                            isParentLoading: C,
                                            handleLikeOperation: R,
                                            loadCommentSection: function() {
                                                return _(!0)
                                            }
                                        }), Object(V.jsx)(Le, {
                                            loading: C,
                                            data: {
                                                description: null === S || void 0 === S ? void 0 : S.description
                                            },
                                            allowCollapse: !0
                                        })]
                                    })]
                                }), Object(V.jsx)("div", {
                                    className: "article-meta gfg-pbi-4",
                                    children: Object(V.jsx)(Te, {
                                        type: x,
                                        data: (null === S || void 0 === S ? void 0 : S.category) || []
                                    })
                                }), Object(V.jsx)(De, {
                                    title: "Explore more videos",
                                    loading: C,
                                    data: null === S || void 0 === S ? void 0 : S.recommendations
                                })]
                            }), (null === S || void 0 === S ? void 0 : S.id) && (null === S || void 0 === S ? void 0 : S.title) && Object(V.jsx)(ze, {
                                loadComments: O,
                                id: null === S || void 0 === S ? void 0 : S.id,
                                title: null === S || void 0 === S ? void 0 : S.title
                            })]
                        })]
                    })
                },
                We = P(),
                Qe = [{
                    path: "/videos/:type(watchlist)?",
                    component: Se,
                    name: "Videos - Watchlist | GeeksforGeeks",
                    exact: !0,
                    private: !1
                }, {
                    path: "/videos/:slug/",
                    component: function(e) {
                        return Object(V.jsx)(He, {
                            isPremiumDomain: We
                        })
                    },
                    name: "Video Page | GeeksforGeeks",
                    exact: !0,
                    private: !1
                }, {
                    path: ["/videos/:pagination(page)?/:page?", "/videos/:type(category|tag)?/:taxonomy?/:pagination(page)?/:page?"],
                    component: Se,
                    name: "Videos | GeeksforGeeks",
                    exact: !0,
                    private: !1
                }],
                Je = function() {
                    var e = Object(o.i)().pathname;
                    return Object(a.useEffect)((function() {
                        try {
                            L("Logout Redirection URL: ".concat(p.AUTH_SITE_URL, "logout.php/?to=").concat(p.GFG_SITE_URL.substr(0, [p.GFG_SITE_URL.length - 1])).concat(e)), document.querySelector("#userProfileId ul.mega-dropdown li:last-child a").setAttribute("href", "".concat(p.AUTH_SITE_URL, "logout.php/?to=").concat(p.GFG_SITE_URL.substr(0, [p.GFG_SITE_URL.length - 1])).concat(e)), document.querySelector(".header-sidebar__list li:first-child table.userSidebar-table + a").setAttribute("href", "".concat(p.AUTH_SITE_URL, "logout.php/?to=").concat(p.GFG_SITE_URL.substr(0, [p.GFG_SITE_URL.length - 1])).concat(e))
                        } catch (t) {
                            L("Unable to set logout redirection URL")
                        }
                    }), [e]), []
                },
                Xe = Object(X.a)({
                    reducerPath: "gfgHomePageList",
                    tagTypes: ["videos", "watchlistTag"],
                    baseQuery: Object(K.d)({
                        baseUrl: p.VIDEO_API_URL
                    }),
                    endpoints: function(e) {
                        return {
                            getPOTD: e.query({
                                query: function() {
                                    return {
                                        url: "".concat(p.GFG_PRACTICE_API_URL, "api/vr/problems-of-day/problem/today/")
                                    }
                                },
                                transformResponse: function(e, t) {
                                    return e.xdate = t.response.headers.get("x-date"), e
                                }
                            }),
                            getCourses: e.query({
                                query: function() {
                                    return {
                                        url: "".concat(p.GFG_PRACTICE_API_URL, "api/vr/courses/home/")
                                    }
                                },
                                transformResponse: function(e) {
                                    return e
                                }
                            }),
                            getVideos: e.query({
                                query: function() {
                                    return {
                                        url: "".concat(p.VIDEO_API_URL, "gfg-video-list/")
                                    }
                                },
                                transformResponse: function(e) {
                                    return e
                                }
                            }),
                            getCarousel: e.query({
                                query: function() {
                                    return {
                                        url: "".concat(p.GFG_UTIL_DJANGO_CF_URL, "api/posts/featured/banner/")
                                    }
                                }
                            }),
                            getArticles: e.query({
                                query: function() {
                                    return {
                                        url: "".concat(p.GFG_UTIL_DJANGO_CF_URL, "api/articles/?page=1&gblog=true")
                                    }
                                },
                                transformResponse: function(e) {
                                    return e
                                }
                            }),
                            getSearchResults: e.mutation({
                                query: function(e) {
                                    return {
                                        url: "".concat(p.GFG_UTIL_URL, "post/api/googlesearch/"),
                                        method: "POST",
                                        body: e
                                    }
                                }
                            }),
                            getArticleChips: e.query({
                                query: function() {
                                    return {
                                        url: "".concat(p.GFG_UTIL_DJANGO_CF_URL, "api/article/tags/trending/")
                                    }
                                }
                            }),
                            getArticleChipsUser: e.query({
                                query: function() {
                                    return {
                                        url: "".concat(p.GFG_UTIL_DJANGO_CF_URL, "api/vcu/getusersterms/12/"),
                                        credentials: "include"
                                    }
                                }
                            }),
                            getArticlesPerChip: e.query({
                                query: function(e) {
                                    var t = e.chip,
                                        s = e.page;
                                    return {
                                        url: "all" !== t && "" !== t ? "".concat(p.GFG_UTIL_DJANGO_CF_URL, "api/articles/").concat(t, "/?page=").concat(s, "&gblog=true") : "".concat(p.GFG_UTIL_DJANGO_CF_URL, "api/articles/?page=").concat(s, "&gblog=true")
                                    }
                                }
                            }),
                            getPopularPosts: e.query({
                                query: function() {
                                    return {
                                        url: "".concat(p.GFG_UTIL_DJANGO_CF_URL, "api/popularposts/daily/1/excerpt/")
                                    }
                                },
                                transformResponse: function(e) {
                                    return e
                                }
                            }),
                            sideBarDetails: e.query({
                                query: function() {
                                    return {
                                        url: "".concat(p.GFG_UTIL_URL, "api/rightbarads/")
                                    }
                                },
                                transformResponse: function(e) {
                                    return e.error ? [] : e
                                }
                            }),
                            getPostChains: e.query({
                                query: function(e) {
                                    return {
                                        url: "".concat(p.GFG_UTIL_DJANGO_CF_URL, "api/postchains/").concat(e, "/post/")
                                    }
                                },
                                transformResponse: function(e) {
                                    return e.error ? [] : e
                                }
                            }),
                            getPostDetail: e.query({
                                query: function(e) {
                                    return {
                                        url: "".concat(p.GFG_UTIL_DJANGO_CF_URL, "api/getpostdetails/").concat(e, "/excerpt/")
                                    }
                                },
                                transformResponse: function(e) {
                                    return e.error ? [] : e
                                }
                            }),
                            getHomePageChipsDetail: e.query({
                                query: function(e) {
                                    return {
                                        url: "".concat(p.GFG_UTIL_DJANGO_CF_URL, "api/rightbarads/")
                                    }
                                },
                                transformResponse: function(e) {
                                    return e.error ? [] : e
                                }
                            }),
                            getPopularOrNextPost: e.query({
                                query: function(e) {
                                    return {
                                        url: null == e ? "".concat(p.GFG_UTIL_DJANGO_CF_URL, "api/recommendforyou/") : "".concat(p.GFG_UTIL_DJANGO_CF_URL, "api/recommendforyou/").concat(e, "/")
                                    }
                                },
                                transformResponse: function(e) {
                                    return e.error ? [] : e
                                }
                            }),
                            getRecommendedCoursesUser: e.query({
                                query: function() {
                                    return {
                                        url: "".concat(p.GFG_PRACTICE_API_URL, "api/latest/courses/recommended/"),
                                        credentials: "include"
                                    }
                                },
                                transformResponse: function(e) {
                                    return e.error ? [] : e
                                }
                            })
                        }
                    }
                }),
                Ke = Xe.useGetPOTDQuery,
                Ye = Xe.useGetCoursesQuery,
                Ze = Xe.useGetVideosQuery,
                $e = Xe.useGetCarouselQuery,
                et = (Xe.useGetArticlesQuery, Xe.useGetSearchResultsMutation),
                tt = (Xe.useGetArticleChipsQuery, Xe.useGetArticlesPerChipQuery),
                st = (Xe.useGetPopularPostsQuery, Xe.useSideBarDetailsQuery),
                at = (Xe.useGetPostChainsQuery, Xe.useGetPostDetailQuery, Xe.useGetHomePageChipsDetailQuery),
                ct = Xe.useGetArticleChipsUserQuery,
                nt = Xe.useGetPopularOrNextPostQuery,
                it = Xe.useGetRecommendedCoursesUserQuery,
                rt = function() {
                    var e = st(),
                        t = e.data,
                        s = e.isLoading,
                        a = e.isError;
                    return s || a || I.a.isEmpty(t) ? "" : Object(V.jsxs)("div", {
                        style: {
                            marginBottom: "24px"
                        },
                        children: [Object(V.jsx)("div", {
                            className: "heading",
                            style: {
                                paddingBottom: "25px"
                            },
                            children: Object(V.jsx)("div", {
                                className: "def-title_wrap",
                                children: Object(V.jsx)("div", {
                                    className: "title",
                                    children: "What's New Here"
                                })
                            })
                        }), t && I.a.map(t, (function(e) {
                            return Object(V.jsx)("div", {
                                children: Object(V.jsx)("div", {
                                    className: "card-layout",
                                    children: Object(V.jsx)("div", {
                                        className: "content-wrapper",
                                        children: Object(V.jsx)("div", {
                                            className: "side--container_wscard",
                                            children: Object(V.jsx)("a", {
                                                href: e.url,
                                                children: Object(V.jsxs)("div", {
                                                    className: "card-content",
                                                    children: [Object(V.jsx)("div", {
                                                        className: "thumbnail",
                                                        children: Object(V.jsx)("img", {
                                                            src: e.thumbnail,
                                                            className: "img-fluid",
                                                            alt: "Write/Contribute"
                                                        })
                                                    }), Object(V.jsxs)("div", {
                                                        className: "content",
                                                        children: [Object(V.jsx)("div", {
                                                            className: "head",
                                                            children: e.title
                                                        }), Object(V.jsx)("div", {
                                                            className: "meta",
                                                            dangerouslySetInnerHTML: {
                                                                __html: e.html
                                                            }
                                                        }), Object(V.jsx)("div", {
                                                            className: "ref",
                                                            children: "View Details"
                                                        })]
                                                    })]
                                                })
                                            })
                                        })
                                    })
                                })
                            }, e.id)
                        }))]
                    })
                },
                ot = function(e) {
                    return Object(V.jsx)("div", {
                        className: "container-fluid bg-light",
                        id: "home-page",
                        style: {
                            position: "relative",
                            maxWidth: "100%"
                        },
                        children: Object(V.jsxs)("div", {
                            className: "article-page_flex",
                            children: [Object(V.jsx)("div", {
                                className: "leftBar",
                                children: e.children
                            }), Object(V.jsxs)("div", {
                                className: "rightBar",
                                children: [Object(V.jsx)("div", {
                                    id: "GFG_AD_Desktop_RightSideBar_ATF_300x600"
                                }), Object(V.jsx)(rt, {}), Object(V.jsx)("div", {
                                    id: "GFG_AD_Desktop_RightSideBar_MTF_300x600"
                                })]
                            })]
                        })
                    })
                },
                lt = Object(Q.configureStore)({
                    reducer: (he = {}, Object(z.a)(he, Y.reducerPath, Y.reducer), Object(z.a)(he, se.reducerPath, se.reducer), Object(z.a)(he, te.reducerPath, te.reducer), Object(z.a)(he, Xe.reducerPath, Xe.reducer), Object(z.a)(he, "additionalDetails", Ee), he),
                    middleware: [J.a, Y.middleware, se.middleware, te.middleware]
                });
            Object(H.setupListeners)(lt.dispatch);
            var dt = function(e) {
                    e.match.params;
                    return Object(V.jsx)(W.a, {
                        store: lt,
                        children: Object(V.jsxs)(ot, {
                            children: [Object(V.jsx)(Je, {}), Object(V.jsxs)(o.d, {
                                children: [Qe.map((function(e, t) {
                                    return Object(V.jsx)(o.b, {
                                        exact: e.exact,
                                        path: e.path,
                                        children: e.component
                                    }, t)
                                })), Object(V.jsx)(o.a, {
                                    to: "/videos"
                                })]
                            })]
                        })
                    })
                },
                gt = (s(302), s(90)),
                jt = "https://media.geeksforgeeks.org/auth-dashboard-uploads/Vector.png",
                ut = function() {
                    return Object(V.jsxs)("div", {
                        id: "intro-div",
                        children: [Object(V.jsxs)("div", {
                            id: "intro-div-left-bar",
                            children: [Object(V.jsx)("p", {
                                id: "intro-main-heading",
                                children: "Optimize conversions with human insight "
                            }), Object(V.jsxs)("ul", {
                                id: "intro-list1",
                                children: [Object(V.jsxs)("li", {
                                    className: "list1-item",
                                    children: [Object(V.jsx)("span", {
                                        className: "intro-ul-tick",
                                        children: Object(V.jsx)("img", {
                                            src: jt,
                                            alt: "Tick"
                                        })
                                    }), "Reach out to 25 million+ unique users"]
                                }), Object(V.jsxs)("li", {
                                    className: "list1-item",
                                    children: [Object(V.jsx)("span", {
                                        className: "intro-ul-tick",
                                        children: Object(V.jsx)("img", {
                                            src: jt,
                                            alt: "Tick"
                                        })
                                    }), "Achieve higher conversions with better targeting"]
                                }), Object(V.jsxs)("li", {
                                    className: "list1-item",
                                    children: [Object(V.jsx)("span", {
                                        className: "intro-ul-tick",
                                        children: Object(V.jsx)("img", {
                                            src: jt,
                                            alt: "Tick"
                                        })
                                    }), "Discover audience globally"]
                                }), Object(V.jsxs)("li", {
                                    className: "list1-item",
                                    children: [Object(V.jsx)("span", {
                                        className: "intro-ul-tick",
                                        children: Object(V.jsx)("img", {
                                            src: jt,
                                            alt: "Tick"
                                        })
                                    }), "Publish your events on our wide Social media presence"]
                                })]
                            }), Object(V.jsxs)("div", {
                                id: "intro-link-div1",
                                children: [Object(V.jsx)(gt.Link, {
                                    to: "contact-us-div",
                                    smooth: !0,
                                    id: "intro-link1",
                                    children: "Get in Touch"
                                }), Object(V.jsx)(gt.Link, {
                                    to: "content-div",
                                    smooth: !0,
                                    id: "intro-link2",
                                    children: "Explore Solutions"
                                })]
                            })]
                        }), Object(V.jsx)("div", {
                            id: "intro-main-image1",
                            children: Object(V.jsx)("img", {
                                id: "intro-main-image1-Desktop",
                                src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Destop.png",
                                alt: "Desktop"
                            })
                        })]
                    })
                },
                mt = s(467),
                ht = function() {
                    return Object(V.jsx)(V.Fragment, {
                        children: Object(V.jsxs)("div", {
                            id: "why-us-div",
                            children: [Object(V.jsx)("img", {
                                src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Group-7006.png",
                                id: "why-us-bgImage1"
                            }), Object(V.jsx)("img", {
                                src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Ellipse-3.png",
                                id: "why-us-bgImage2"
                            }), Object(V.jsx)("img", {
                                src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Ellipse-1.png",
                                id: "why-us-bgImage3"
                            }), Object(V.jsxs)("div", {
                                id: "why-us-left-div",
                                children: [Object(V.jsx)("p", {
                                    id: "why-us-title",
                                    children: Object(V.jsx)("span", {
                                        id: "title-line",
                                        children: "Why Us \xa0\xa0\xa0 "
                                    })
                                }), Object(V.jsx)("p", {
                                    id: "why-us-heading",
                                    children: Object(V.jsx)("span", {
                                        id: "why-us-text-shadow",
                                        children: "Get the results that matter"
                                    })
                                }), Object(V.jsx)(gt.Link, {
                                    to: "contact-us-div",
                                    smooth: !0,
                                    id: "why-us-link1",
                                    children: Object(V.jsxs)("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between"
                                        },
                                        children: [Object(V.jsx)("p", {
                                            style: {
                                                margin: 0
                                            },
                                            children: "Know More"
                                        }), Object(V.jsx)(mt.a, {
                                            style: {
                                                fontsize: "50px",
                                                color: "#13253A",
                                                float: "right"
                                            }
                                        })]
                                    })
                                })]
                            }), Object(V.jsxs)("div", {
                                id: "why-us-right-div",
                                children: [Object(V.jsxs)("div", {
                                    className: "why-us-content",
                                    children: [Object(V.jsx)("img", {
                                        src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Icon1.png",
                                        className: "why-us-icons"
                                    }), Object(V.jsx)("p", {
                                        className: "why-us-content-top",
                                        children: "Build brand awareness"
                                    }), Object(V.jsx)("p", {
                                        className: "why-us-content-bottom",
                                        children: "with 25 million+ users"
                                    })]
                                }), Object(V.jsxs)("div", {
                                    className: "why-us-content",
                                    children: [Object(V.jsx)("img", {
                                        src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Icon2.png",
                                        className: "why-us-icons"
                                    }), Object(V.jsx)("p", {
                                        className: "why-us-content-top",
                                        children: "Higher Conversion"
                                    }), Object(V.jsx)("p", {
                                        className: "why-us-content-bottom",
                                        children: "Achieve higher conversion with 90% Ads Viewability"
                                    })]
                                }), Object(V.jsxs)("div", {
                                    className: "why-us-content",
                                    children: [Object(V.jsx)("img", {
                                        src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Icon3.png",
                                        className: "why-us-icons"
                                    }), Object(V.jsx)("p", {
                                        className: "why-us-content-top",
                                        children: "Long term results "
                                    }), Object(V.jsx)("p", {
                                        className: "why-us-content-bottom",
                                        children: "Achieve long term results with 90% Organic Traffic"
                                    })]
                                }), Object(V.jsxs)("div", {
                                    className: "why-us-content",
                                    children: [Object(V.jsx)("img", {
                                        src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Icon4.png",
                                        className: "why-us-icons"
                                    }), Object(V.jsx)("p", {
                                        className: "why-us-content-top",
                                        children: "Generate Leads"
                                    }), Object(V.jsx)("p", {
                                        className: "why-us-content-bottom",
                                        children: "Generate lead with 20 million+ Logged in users"
                                    })]
                                })]
                            })]
                        })
                    })
                },
                pt = function() {
                    return Object(V.jsxs)(V.Fragment, {
                        children: [Object(V.jsxs)("div", {
                            id: "about-us-div",
                            children: [Object(V.jsxs)("div", {
                                id: "about-us-left-div",
                                children: [Object(V.jsx)("p", {
                                    id: "about-us-title",
                                    children: Object(V.jsx)("span", {
                                        id: "title-line",
                                        children: "About Us \xa0\xa0\xa0"
                                    })
                                }), Object(V.jsx)("p", {
                                    id: "about-us-heading",
                                    children: Object(V.jsx)("span", {
                                        id: "about-us-text-shadow",
                                        children: "We spark action with our audience."
                                    })
                                })]
                            }), Object(V.jsxs)("div", {
                                id: "about-us-content",
                                children: [Object(V.jsx)("p", {
                                    id: "about-us-content-top",
                                    children: "Expertise that everybody counts on"
                                }), Object(V.jsx)("p", {
                                    id: "about-us-content-bottom",
                                    children: "GeeksforGeeks has made a difference in the lives of many students by providing free knowledge on how to obtain a dream career and by assisting authors all over the world to earn by generating and sharing content, which is why the Geeks community of users are so engaged and devoted."
                                })]
                            })]
                        }), Object(V.jsxs)("div", {
                            id: "about-us-events",
                            children: [Object(V.jsx)("h1", {
                                id: "about-us-event-heading",
                                children: "Recurring Events"
                            }), Object(V.jsxs)("div", {
                                id: "about-us-event-cards",
                                children: [Object(V.jsxs)("div", {
                                    className: "about-us-single-event",
                                    children: [Object(V.jsx)("a", {
                                        href: "https://practice.geeksforgeeks.org/events/rec/interview-series?utm_source=gfgpractice&utm_medium=events_page&utm_campaign=events_series_interview_series",
                                        target: "blank",
                                        children: Object(V.jsx)("img", {
                                            src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/business-trip-1.png",
                                            height: "auto",
                                            width: "100%"
                                        })
                                    }), Object(V.jsx)("p", {
                                        className: "about-us-single-event-top",
                                        children: "Weekly Interview Series"
                                    }), Object(V.jsx)("p", {
                                        className: "about-us-single-event-bottom",
                                        children: "Participate in contests every Sunday at 7 PM to prepare for coding interview rounds of top tech giants. Appear on monthly leaderboard, earn GeekBits, redeem rewards and much more."
                                    })]
                                }), Object(V.jsxs)("div", {
                                    className: "about-us-single-event",
                                    children: [Object(V.jsx)("a", {
                                        href: "https://practice.geeksforgeeks.org/events/rec/job-a-thon?utm_source=gfgpractice&utm_medium=events_page&utm_campaign=events_series_jobathon",
                                        target: "blank",
                                        children: Object(V.jsx)("img", {
                                            src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Job-A-Thon%21newcopy-1637640559.png",
                                            height: "auto",
                                            width: "100%"
                                        })
                                    }), Object(V.jsx)("p", {
                                        className: "about-us-single-event-top",
                                        children: "Job-a-Thon"
                                    }), Object(V.jsx)("p", {
                                        className: "about-us-single-event-bottom",
                                        children: "Monthly hiring challenges conducted by GeeksforGeeks connecting suitable candidates to tech companies."
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                bt = function() {
                    return Object(V.jsxs)("div", {
                        id: "social-presence-div",
                        children: [Object(V.jsxs)("div", {
                            id: "social-presence-content-div",
                            children: [Object(V.jsx)("div", {
                                id: "social-presence-heading",
                                children: Object(V.jsx)("p", {
                                    children: "View our Presence!"
                                })
                            }), Object(V.jsxs)("div", {
                                id: "social-presence-socials",
                                children: [Object(V.jsxs)("div", {
                                    className: "social-presence-content",
                                    children: [Object(V.jsx)("a", {
                                        href: "https://www.facebook.com/geeksforgeeks.org/",
                                        target: "blank",
                                        children: Object(V.jsx)("img", {
                                            className: "social-presence-content-image",
                                            src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/facebook.png"
                                        })
                                    }), Object(V.jsxs)("div", {
                                        children: [Object(V.jsx)("p", {
                                            className: "social-presence-numbers",
                                            children: "215k+"
                                        }), Object(V.jsx)("p", {
                                            className: "social-presence-numbers-text",
                                            children: "followers"
                                        })]
                                    })]
                                }), Object(V.jsxs)("div", {
                                    className: "social-presence-content",
                                    children: [Object(V.jsx)("a", {
                                        href: "https://www.instagram.com/geeks_for_geeks/",
                                        target: "blank",
                                        children: Object(V.jsx)("img", {
                                            className: "social-presence-content-image",
                                            src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/instagram.png"
                                        })
                                    }), Object(V.jsxs)("div", {
                                        children: [Object(V.jsx)("p", {
                                            className: "social-presence-numbers",
                                            children: "255k+"
                                        }), Object(V.jsx)("p", {
                                            className: "social-presence-numbers-text",
                                            children: "followers"
                                        })]
                                    })]
                                }), Object(V.jsxs)("div", {
                                    className: "social-presence-content",
                                    children: [Object(V.jsx)("a", {
                                        href: "https://in.linkedin.com/company/geeksforgeeks",
                                        target: "blank",
                                        children: Object(V.jsx)("img", {
                                            className: "social-presence-content-image",
                                            src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/linkedin1.png"
                                        })
                                    }), Object(V.jsxs)("div", {
                                        children: [Object(V.jsx)("p", {
                                            className: "social-presence-numbers",
                                            children: "1M+"
                                        }), Object(V.jsx)("p", {
                                            className: "social-presence-numbers-text",
                                            children: "followers"
                                        })]
                                    })]
                                }), Object(V.jsxs)("div", {
                                    className: "social-presence-content",
                                    children: [Object(V.jsx)("a", {
                                        href: "https://twitter.com/geeksforgeeks",
                                        target: "blank",
                                        children: Object(V.jsx)("img", {
                                            className: "social-presence-content-image",
                                            src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/twitter.png"
                                        })
                                    }), Object(V.jsxs)("div", {
                                        children: [Object(V.jsx)("p", {
                                            className: "social-presence-numbers",
                                            children: "45k+"
                                        }), Object(V.jsx)("p", {
                                            className: "social-presence-numbers-text",
                                            children: "followers"
                                        })]
                                    })]
                                })]
                            })]
                        }), Object(V.jsx)("div", {
                            id: "social-presence-image",
                            children: Object(V.jsx)("img", {
                                src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/SocialLogo.png",
                                height: "250vw",
                                width: "300vw"
                            })
                        })]
                    })
                },
                xt = function() {
                    var e = Object(a.useRef)(),
                        t = Object(a.useState)(!1),
                        s = Object(d.a)(t, 2),
                        c = s[0],
                        n = s[1],
                        i = function(t) {
                            e.current.getBoundingClientRect().top - window.innerHeight < 0 && n(!0)
                        };
                    Object(a.useEffect)((function() {
                        (console.log("Start Animation", c), c) && document.querySelectorAll(".user-statistics-card-heading").forEach((function(e) {
                            r(e)
                        }))
                    }), [c]);
                    var r = function(e) {
                        var t = e.getAttribute("data-value"),
                            s = 0,
                            a = setInterval((function() {
                                s += 1, e.innerHTML = s + "%", s >= t && clearInterval(a)
                            }), 60)
                    };
                    return Object(a.useEffect)((function() {
                        return window.addEventListener("scroll", i),
                            function() {
                                window.removeEventListener("scroll", i)
                            }
                    }), []), Object(V.jsxs)("div", {
                        id: "user-statistics-div",
                        children: [Object(V.jsx)("img", {
                            src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Ellipse-3.png",
                            id: "user-statistics-bgImage2"
                        }), Object(V.jsx)("img", {
                            src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Ellipse-1-%281%29.png",
                            id: "user-statistics-bgImage3"
                        }), Object(V.jsx)("img", {
                            id: "user-statistics-bg-img",
                            src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/g10.png"
                        }), Object(V.jsx)("p", {
                            id: "user-statistics-heading",
                            children: Object(V.jsx)("span", {
                                id: "user-statistics-text-shadow",
                                children: "User Statistics"
                            })
                        }), Object(V.jsxs)("div", {
                            id: "user-statistics-cards",
                            children: [Object(V.jsxs)("div", {
                                className: "user-statistics-single-card",
                                ref: e,
                                children: [Object(V.jsx)("p", {
                                    className: "user-statistics-card-heading",
                                    "data-value": "45",
                                    children: "0"
                                }), Object(V.jsx)("p", {
                                    className: "user-statistics-card-data",
                                    children: "Tier 1 Cities"
                                })]
                            }), Object(V.jsxs)("div", {
                                className: "user-statistics-single-card",
                                children: [Object(V.jsx)("p", {
                                    className: "user-statistics-card-heading",
                                    "data-value": "35",
                                    children: "0"
                                }), Object(V.jsx)("p", {
                                    className: "user-statistics-card-data",
                                    children: "Tier 2 Cities"
                                })]
                            }), Object(V.jsxs)("div", {
                                className: "user-statistics-single-card",
                                children: [Object(V.jsx)("p", {
                                    className: "user-statistics-card-heading",
                                    "data-value": "20",
                                    children: "0"
                                }), Object(V.jsx)("p", {
                                    className: "user-statistics-card-data",
                                    children: "Tier 3 Cities"
                                })]
                            }), Object(V.jsxs)("div", {
                                className: "user-statistics-single-card",
                                children: [Object(V.jsx)("p", {
                                    className: "user-statistics-card-heading",
                                    "data-value": "70",
                                    children: "0"
                                }), Object(V.jsx)("p", {
                                    className: "user-statistics-card-data",
                                    children: "Male population"
                                })]
                            }), Object(V.jsxs)("div", {
                                className: "user-statistics-single-card",
                                children: [Object(V.jsx)("p", {
                                    className: "user-statistics-card-heading",
                                    "data-value": "30",
                                    children: "0"
                                }), Object(V.jsx)("p", {
                                    className: "user-statistics-card-data",
                                    children: "Female Population"
                                })]
                            }), Object(V.jsxs)("div", {
                                className: "user-statistics-single-card",
                                children: [Object(V.jsx)("p", {
                                    className: "user-statistics-card-heading",
                                    "data-value": "70",
                                    children: "0"
                                }), Object(V.jsx)("p", {
                                    className: "user-statistics-card-data",
                                    children: "18-35 yrs Geeks   "
                                })]
                            })]
                        })]
                    })
                },
                ft = "https://media.geeksforgeeks.org/auth-dashboard-uploads/Vector.png",
                Ot = function() {
                    return Object(V.jsxs)("div", {
                        id: "content-div",
                        children: [Object(V.jsx)("img", {
                            src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Ellipse-1.png",
                            id: "content-bgImage3"
                        }), Object(V.jsx)("p", {
                            id: "content-heading",
                            children: Object(V.jsx)("span", {
                                id: "content-text-shadow",
                                children: "Wide array of Advertisement"
                            })
                        }), Object(V.jsx)("p", {
                            id: "content-description",
                            children: "Take a look how your content will look like"
                        }), Object(V.jsxs)("div", {
                            id: "content-content",
                            children: [Object(V.jsxs)("div", {
                                className: "content-card",
                                children: [Object(V.jsx)("div", {
                                    className: "content-card-image",
                                    children: Object(V.jsx)("img", {
                                        id: "content-single-image",
                                        src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Ad1.png",
                                        width: "400vw",
                                        height: "300vw"
                                    })
                                }), Object(V.jsxs)("div", {
                                    className: "content-card-content",
                                    children: [Object(V.jsx)("p", {
                                        className: "content-p",
                                        children: "Support for Multiple desktop banner & operating system based on your choice"
                                    }), Object(V.jsxs)("div", {
                                        className: "content-card-content-data",
                                        children: [Object(V.jsx)("div", {
                                            className: "content-list-div",
                                            children: Object(V.jsxs)("ul", {
                                                className: "content-list",
                                                children: [Object(V.jsxs)("li", {
                                                    className: "content-list1-item",
                                                    children: [Object(V.jsx)("span", {
                                                        className: "content-ul-tick",
                                                        children: Object(V.jsx)("img", {
                                                            src: ft,
                                                            alt: "Tick"
                                                        })
                                                    }), "300X600"]
                                                }), Object(V.jsxs)("li", {
                                                    className: "content-list1-item",
                                                    children: [Object(V.jsx)("span", {
                                                        className: "content-ul-tick",
                                                        children: Object(V.jsx)("img", {
                                                            src: ft,
                                                            alt: "Tick"
                                                        })
                                                    }), "300X250"]
                                                }), Object(V.jsxs)("li", {
                                                    className: "content-list1-item",
                                                    children: [Object(V.jsx)("span", {
                                                        className: "content-ul-tick",
                                                        children: Object(V.jsx)("img", {
                                                            src: ft,
                                                            alt: "Tick"
                                                        })
                                                    }), "336X280"]
                                                }), Object(V.jsxs)("li", {
                                                    className: "content-list1-item",
                                                    children: [Object(V.jsx)("span", {
                                                        className: "content-ul-tick",
                                                        children: Object(V.jsx)("img", {
                                                            src: ft,
                                                            alt: "Tick"
                                                        })
                                                    }), "728X90"]
                                                }), Object(V.jsxs)("li", {
                                                    className: "content-list1-item",
                                                    children: [Object(V.jsx)("span", {
                                                        className: "content-ul-tick",
                                                        children: Object(V.jsx)("img", {
                                                            src: ft,
                                                            alt: "Tick"
                                                        })
                                                    }), "160X600"]
                                                }), Object(V.jsxs)("li", {
                                                    className: "content-list1-item",
                                                    children: [Object(V.jsx)("span", {
                                                        className: "content-ul-tick",
                                                        children: Object(V.jsx)("img", {
                                                            src: ft,
                                                            alt: "Tick"
                                                        })
                                                    }), "728X250"]
                                                })]
                                            })
                                        }), Object(V.jsxs)("div", {
                                            className: "content-icons-div",
                                            children: [Object(V.jsx)("img", {
                                                src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Windows.png",
                                                height: "50vw",
                                                width: "50vw",
                                                alt: "Test"
                                            }), Object(V.jsx)("img", {
                                                src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Apple.png",
                                                height: "50vw",
                                                width: "50vw",
                                                alt: "Test"
                                            }), Object(V.jsx)("img", {
                                                src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Linux.png",
                                                height: "50vw",
                                                width: "50vw",
                                                alt: "Test"
                                            })]
                                        }), Object(V.jsx)("div", {
                                            className: "content-link-div",
                                            children: Object(V.jsx)(gt.Link, {
                                                to: "contact-us-div",
                                                smooth: !0,
                                                className: "content-link",
                                                children: Object(V.jsxs)("div", {
                                                    style: {
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        width: "100%"
                                                    },
                                                    children: [Object(V.jsx)("p", {
                                                        style: {
                                                            margin: "auto 0"
                                                        },
                                                        children: "Know More"
                                                    }), Object(V.jsx)(mt.a, {
                                                        style: {
                                                            fontsize: "50px",
                                                            color: "#F8F8F8",
                                                            float: "right"
                                                        }
                                                    })]
                                                })
                                            })
                                        })]
                                    })]
                                })]
                            }), Object(V.jsxs)("div", {
                                className: "content-card",
                                children: [Object(V.jsxs)("div", {
                                    className: "content-card-image",
                                    children: [Object(V.jsx)("img", {
                                        className: "content-half-images",
                                        src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Ad2-1.png",
                                        width: "200vw",
                                        height: "300vw"
                                    }), Object(V.jsx)("img", {
                                        className: "content-half-images",
                                        src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Ad2-2.png",
                                        width: "200vw",
                                        height: "300vw"
                                    })]
                                }), Object(V.jsxs)("div", {
                                    className: "content-card-content",
                                    children: [Object(V.jsx)("p", {
                                        className: "content-p",
                                        children: "Support for Multiple mobile banner & operating system based on your choice"
                                    }), Object(V.jsxs)("div", {
                                        className: "content-card-content-data",
                                        children: [Object(V.jsx)("div", {
                                            className: "content-list-div",
                                            children: Object(V.jsxs)("ul", {
                                                className: "content-list",
                                                children: [Object(V.jsxs)("li", {
                                                    className: "content-list1-item content-list2-item",
                                                    children: [Object(V.jsx)("span", {
                                                        className: "content-ul-tick",
                                                        children: Object(V.jsx)("img", {
                                                            src: ft,
                                                            alt: "Tick"
                                                        })
                                                    }), "320X50"]
                                                }), Object(V.jsxs)("li", {
                                                    className: "content-list1-item content-list2-item",
                                                    children: [Object(V.jsx)("span", {
                                                        className: "content-ul-tick",
                                                        children: Object(V.jsx)("img", {
                                                            src: ft,
                                                            alt: "Tick"
                                                        })
                                                    }), "336X280"]
                                                }), Object(V.jsx)("li", {
                                                    className: "content-list1-item content-list2-item",
                                                    id: "content-list1-extra-item",
                                                    children: "\xa0"
                                                })]
                                            })
                                        }), Object(V.jsxs)("div", {
                                            className: "content-icons-div",
                                            children: [Object(V.jsx)("img", {
                                                src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/Android.png",
                                                height: "50vw",
                                                width: "50vw",
                                                alt: "Test"
                                            }), Object(V.jsx)("img", {
                                                src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/AppStore.png",
                                                height: "50vw",
                                                width: "50vw",
                                                alt: "Test"
                                            })]
                                        }), Object(V.jsx)("div", {
                                            className: "content-link-div",
                                            children: Object(V.jsx)(gt.Link, {
                                                to: "contact-us-div",
                                                smooth: !0,
                                                className: "content-link",
                                                children: Object(V.jsxs)("div", {
                                                    style: {
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        width: "100%"
                                                    },
                                                    children: [Object(V.jsx)("p", {
                                                        style: {
                                                            margin: "auto 0"
                                                        },
                                                        children: "Know More"
                                                    }), Object(V.jsx)(mt.a, {
                                                        style: {
                                                            fontsize: "50px",
                                                            color: "#F8F8F8",
                                                            float: "right"
                                                        }
                                                    })]
                                                })
                                            })
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                _t = function() {
                    return Object(V.jsxs)("div", {
                        id: "covered-areas-div",
                        children: [Object(V.jsx)("p", {
                            id: "covered-areas-heading",
                            children: Object(V.jsx)("span", {
                                id: "covered-areas-text-shadow",
                                children: "Everyone is covered"
                            })
                        }), Object(V.jsxs)("div", {
                            id: "covered-areas-cards",
                            children: [Object(V.jsxs)("div", {
                                className: "covered-areas-single-card",
                                children: [Object(V.jsx)("div", {
                                    className: "covered-areas-card-inside-div",
                                    children: Object(V.jsx)("img", {
                                        src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/gadget1.png",
                                        width: "100vw",
                                        height: "100vw"
                                    })
                                }), Object(V.jsx)("p", {
                                    className: "covered-areas-card-data",
                                    children: "Technology/Gadget enthusiastic"
                                })]
                            }), Object(V.jsxs)("div", {
                                className: "covered-areas-single-card",
                                children: [Object(V.jsx)("div", {
                                    className: "covered-areas-card-inside-div",
                                    children: Object(V.jsx)("img", {
                                        src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/ent.png",
                                        width: "100vw",
                                        height: "100vw"
                                    })
                                }), Object(V.jsx)("p", {
                                    className: "covered-areas-card-data",
                                    children: "Media & Entertainment"
                                })]
                            }), Object(V.jsxs)("div", {
                                className: "covered-areas-single-card",
                                children: [Object(V.jsx)("div", {
                                    className: "covered-areas-card-inside-div",
                                    children: Object(V.jsx)("img", {
                                        src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/table.png",
                                        width: "100vw",
                                        height: "100vw"
                                    })
                                }), Object(V.jsx)("p", {
                                    className: "covered-areas-card-data",
                                    children: "Frequently Dining out"
                                })]
                            }), Object(V.jsxs)("div", {
                                className: "covered-areas-single-card",
                                children: [Object(V.jsx)("div", {
                                    className: "covered-areas-card-inside-div",
                                    children: Object(V.jsx)("img", {
                                        src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/businessTrip.png",
                                        width: "100vw",
                                        height: "100vw"
                                    })
                                }), Object(V.jsx)("p", {
                                    className: "covered-areas-card-data",
                                    children: "Businesss Travelers"
                                })]
                            }), Object(V.jsxs)("div", {
                                className: "covered-areas-single-card",
                                children: [Object(V.jsx)("div", {
                                    className: "covered-areas-card-inside-div",
                                    children: Object(V.jsx)("img", {
                                        src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/shopper.png",
                                        width: "100vw",
                                        height: "100vw"
                                    })
                                }), Object(V.jsx)("p", {
                                    className: "covered-areas-card-data",
                                    children: "Shoppers"
                                })]
                            }), Object(V.jsxs)("div", {
                                className: "covered-areas-single-card",
                                children: [Object(V.jsx)("div", {
                                    className: "covered-areas-card-inside-div",
                                    children: Object(V.jsx)("img", {
                                        src: "https://media.geeksforgeeks.org/auth-dashboard-uploads/watchingMovie.png",
                                        width: "100vw",
                                        height: "100vw"
                                    })
                                }), Object(V.jsx)("p", {
                                    className: "covered-areas-card-data",
                                    children: "Movie Lovers"
                                })]
                            })]
                        })]
                    })
                },
                vt = s(116),
                kt = s.n(vt),
                yt = function() {
                    var e = Object(a.useRef)(),
                        t = Object(a.useRef)(),
                        s = Object(a.useRef)(),
                        c = Object(a.useRef)(),
                        n = Object(a.useRef)(),
                        i = Object(a.useRef)(),
                        r = Object(a.useRef)(),
                        o = Object(a.useRef)(),
                        l = Object(a.useState)(""),
                        g = Object(d.a)(l, 2),
                        m = g[0],
                        h = g[1],
                        p = function(e) {
                            var t = kt()("#" + e.target.id).find("option:selected").text(),
                                s = kt()("<select/>").append(kt()("<option/>").text(t));
                            kt()("#" + e.target.id).after(s), kt()("#" + e.target.id).width(Math.max(0, s.width())), s.remove()
                        },
                        b = function() {
                            var a = Object(u.a)(j.a.mark((function a(l) {
                                var d, g, u;
                                return j.a.wrap((function(a) {
                                    for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            l.preventDefault(), d = JSON.parse(localStorage.getItem("loginData")), g = "<br />Name:- " + e.current.value + "<br/>User Type :-" + t.current.value + "<br/> User Purpose:- " + s.current.value + "<br/> User Reach:- " + i.current.value + "<br/> Company Name:- " + r.current.value, (u = new FormData).append("message", g), u.append("email", c.current.value), u.append("mobile", n.current.value), u.append("type", "Advertisement"), u.append("csrf_token", d.csrf_token), u.append("isLoggedIn", d.isLoggedIn), u.append("time", d.time), u.append("post_id", 0), fetch("https://util.geeksforgeeks.org/ajax/contactUsAjax.php", {
                                                method: "POST",
                                                body: u,
                                                redirect: "follow",
                                                credentials: "include"
                                            }).then((function(e) {
                                                return e.text()
                                            })).then((function(e) {
                                                var t = JSON.parse(e);
                                                o.current.style.display = "block", h(t.message), 1 == t.status ? (l.target.reset(), setTimeout((function() {
                                                    o.current.style.display = "none"
                                                }), 3e3)) : t.message.includes("email") ? c.current.focus() : n.current.focus()
                                            })).catch((function(e) {
                                                return console.log("error", e)
                                            }));
                                        case 14:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a)
                            })));
                            return function(e) {
                                return a.apply(this, arguments)
                            }
                        }();
                    return Object(V.jsxs)("div", {
                        id: "contact-us-div",
                        children: [Object(V.jsx)("p", {
                            id: "contact-us-heading",
                            children: Object(V.jsx)("span", {
                                id: "contact-us-text-shadow",
                                children: "Contact Us"
                            })
                        }), Object(V.jsx)("div", {
                            id: "contact-form",
                            children: Object(V.jsx)("form", {
                                onSubmit: b,
                                children: Object(V.jsxs)("div", {
                                    id: "contact-form-div",
                                    children: [Object(V.jsxs)("div", {
                                        id: "contact-form-user-dropdown-div",
                                        children: [Object(V.jsx)("div", {
                                            id: "contact-form-user-dropdown1",
                                            children: Object(V.jsxs)("p", {
                                                className: "contact-us-para",
                                                children: ["I am \xa0", Object(V.jsxs)("select", {
                                                    name: "userType",
                                                    id: "userType",
                                                    className: "contact-us-dropdown",
                                                    ref: t,
                                                    onChange: p,
                                                    children: [Object(V.jsx)("option", {
                                                        value: "individual",
                                                        children: "a individual"
                                                    }), Object(V.jsx)("option", {
                                                        value: "brand",
                                                        children: "a brand"
                                                    })]
                                                })]
                                            })
                                        }), Object(V.jsx)("div", {
                                            id: "contact-form-user-dropdown2",
                                            children: Object(V.jsxs)("p", {
                                                className: "contact-us-para",
                                                children: ["looking to \xa0", Object(V.jsxs)("select", {
                                                    name: "userPurpose",
                                                    id: "userPurpose",
                                                    className: "contact-us-dropdown",
                                                    onChange: p,
                                                    ref: s,
                                                    children: [Object(V.jsx)("option", {
                                                        value: "awareness",
                                                        children: "build brand awareness"
                                                    }), Object(V.jsx)("option", {
                                                        value: "grow",
                                                        children: "grow more"
                                                    })]
                                                })]
                                            })
                                        })]
                                    }), Object(V.jsxs)("div", {
                                        className: "contact-us-inputs",
                                        children: [Object(V.jsx)("label", {
                                            children: "Name*"
                                        }), Object(V.jsx)("input", {
                                            type: "text",
                                            id: "name",
                                            name: "name",
                                            placeholder: "John Doe",
                                            ref: e,
                                            maxLength: "50",
                                            title: "Please enter alphabets only",
                                            pattern: "[a-zA-Z ]*$",
                                            required: !0
                                        })]
                                    }), Object(V.jsxs)("div", {
                                        className: "contact-us-inputs",
                                        children: [Object(V.jsx)("label", {
                                            children: "Email address*"
                                        }), Object(V.jsx)("input", {
                                            type: "email",
                                            pattern: "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}",
                                            id: "email",
                                            name: "email",
                                            placeholder: "xyz@gmail.com",
                                            ref: c,
                                            title: "Please enter valid email",
                                            required: !0
                                        })]
                                    }), Object(V.jsxs)("div", {
                                        className: "contact-us-inputs",
                                        children: [Object(V.jsx)("label", {
                                            children: "Mobile Number*"
                                        }), Object(V.jsx)("input", {
                                            type: "text",
                                            pattern: "\\+[0-9]+",
                                            id: "mobileNumber",
                                            name: "mobileNumber",
                                            placeholder: "9999999999",
                                            ref: n,
                                            maxLength: "20",
                                            title: "Enter Phone number with country code without space",
                                            required: !0
                                        })]
                                    }), Object(V.jsxs)("div", {
                                        className: "contact-us-inputs",
                                        children: [Object(V.jsx)("label", {
                                            children: "Estimated User Reach"
                                        }), Object(V.jsx)("input", {
                                            type: "text",
                                            id: "userReach",
                                            name: "userReach",
                                            placeholder: "9999999999",
                                            maxLength: "20",
                                            pattern: "^[0-9]*$",
                                            title: "Please enter digits only",
                                            ref: i
                                        })]
                                    }), Object(V.jsxs)("div", {
                                        className: "contact-us-inputs",
                                        children: [Object(V.jsx)("label", {
                                            children: "Company Name(Optional)"
                                        }), Object(V.jsx)("input", {
                                            type: "text",
                                            id: "companyName",
                                            name: "companyName",
                                            placeholder: "companyname.com",
                                            ref: r,
                                            maxLength: "100"
                                        })]
                                    }), Object(V.jsx)("div", {
                                        id: "contact-us-submit-div",
                                        children: Object(V.jsx)("a", {
                                            href: "#",
                                            id: "contact-us-submit",
                                            children: Object(V.jsx)("button", {
                                                type: "submit",
                                                id: "contact-us-button-submit",
                                                children: "Submit"
                                            })
                                        })
                                    }), Object(V.jsx)("div", {
                                        id: "contact-us-form-response",
                                        ref: o,
                                        children: Object(V.jsx)("p", {
                                            id: "contact-us-form-response-text",
                                            children: m
                                        })
                                    })]
                                })
                            })
                        })]
                    })
                };
            var Nt = function() {
                    return Object(V.jsxs)("div", {
                        className: "App",
                        children: [Object(V.jsx)(ut, {}), Object(V.jsx)(ht, {}), Object(V.jsx)(pt, {}), Object(V.jsx)(bt, {}), Object(V.jsx)(xt, {}), Object(V.jsx)(Ot, {}), Object(V.jsx)(_t, {}), Object(V.jsx)(yt, {})]
                    })
                },
                wt = (s(310), function() {
                    return Object(V.jsxs)(V.Fragment, {
                        children: [Object(V.jsxs)(Oe.a, {
                            children: [Object(V.jsx)("title", {
                                children: "Advertise with us"
                            }), Object(V.jsx)("meta", {
                                charset: "utf-8"
                            }), Object(V.jsx)("meta", {
                                name: "keywords",
                                content: "Data Structures,Algorithms,Python,Java,C,C++,JavaScript,Android Development,SQL,Data Science,Machine Learning,PHP,Web Development,System Design,Tutorial,Technical Blogs,Interview Experience,Interview Preparation,Programming,Competitive Programming,SDE Sheet,Job-a-thon,Coding Contests,GATE CSE,HTML,CSS,React,NodeJS,Placement,Aptitude,Quiz,Computer Science,Programming Examples,GeeksforGeeks Courses,Puzzles"
                            }), Object(V.jsx)("meta", {
                                name: "viewport",
                                content: "width=device-width,initial-scale=1,maximum-scale=1"
                            }), Object(V.jsx)("meta", {
                                name: "theme-color",
                                content: "#308D46"
                            }), Object(V.jsx)("meta", {
                                name: "image",
                                property: "og:image",
                                content: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png"
                            }), Object(V.jsx)("meta", {
                                property: "og:image:type",
                                content: "image/png"
                            }), Object(V.jsx)("meta", {
                                property: "og:image:width",
                                content: "200"
                            }), Object(V.jsx)("meta", {
                                property: "og:image:height",
                                content: "200"
                            }), Object(V.jsx)("meta", {
                                name: "facebook-domain-verification",
                                content: "xo7t4ve2wn3ywfkjdvwbrk01pvdond"
                            }), Object(V.jsx)("meta", {
                                name: "description",
                                content: "A Computer Science portal for geeks. It contains well written, well thought and well explained computer science and programming articles, quizzes and practice/competitive programming/company interview Questions."
                            }), Object(V.jsx)("meta", {
                                property: "og:locale",
                                content: "en_US"
                            }), Object(V.jsx)("meta", {
                                property: "og:type",
                                content: "article"
                            }), Object(V.jsx)("meta", {
                                property: "og:title",
                                content: "Advertise with us - GeeksforGeeks"
                            }), Object(V.jsx)("meta", {
                                property: "og:description",
                                content: "A Computer Science portal for geeks. It contains well written, well thought and well explained computer science and programming articles, quizzes and practice/competitive programming/company interview Questions."
                            }), Object(V.jsx)("meta", {
                                property: "og:url",
                                content: "https://www.geeksforgeeks.org/advertise-with-us/"
                            }), Object(V.jsx)("meta", {
                                property: "og:site_name",
                                content: "GeeksforGeeks"
                            }), Object(V.jsx)("meta", {
                                name: "generator",
                                content: "WordPress 4.9.8"
                            }), Object(V.jsx)("meta", {
                                name: "msapplication-TileImage",
                                content: "https://www.geeksforgeeks.org/wp-content/uploads/gfg_200X200.png"
                            })]
                        }), Object(V.jsx)(Nt, {})]
                    })
                }),
                St = s(471),
                Lt = s(473),
                Ct = s(474),
                Tt = s(475),
                Gt = s(124),
                It = s(254),
                Pt = s(476),
                Rt = function() {
                    var e = Object(a.useState)(""),
                        t = Object(d.a)(e, 2),
                        s = t[0],
                        c = t[1],
                        n = Object(a.useState)({
                            width: void 0,
                            height: void 0
                        }),
                        i = Object(d.a)(n, 2),
                        r = i[0],
                        o = i[1],
                        l = function() {
                            o({
                                width: window.innerWidth,
                                height: window.innerHeight
                            })
                        };
                    return Object(a.useEffect)((function() {
                        return window.addEventListener("resize", l), l(), 0 < r.width && r.width <= 576 && c("xs"), 577 <= r.width && r.width <= 768 && c("sm"), 769 <= r.width && r.width < 835 && c("md"), 835 <= r.width && r.width < 1195 && c("lg"), 1195 <= r.width && c("xl"),
                            function() {
                                return window.removeEventListener("resize", l)
                            }
                    }), [r.width]), s
                },
                Et = s(100),
                At = function(e, t, s) {
                    try {
                        Et.a.event({
                            category: s,
                            action: t,
                            label: window.location.href
                        })
                    } catch (a) {
                        console.log(a)
                    }
                },
                Ut = (St.a.Meta, function(e) {
                    var t = 0 !== (e.duration / 3600 | 0) ? e.duration / 3600 | 0 : "",
                        s = e.duration % 3600 / 60 | 0,
                        a = e.duration % 60,
                        c = t.toString(),
                        n = s.toString(),
                        i = a.toString(),
                        r = "" !== c ? 1 === c.length ? "0" + c + ":" : c + ":" : "";
                    return r += (1 === n.length ? "0" + n : n) + ":", r += 1 === i.length ? "0" + i : i, Object(V.jsx)(V.Fragment, {
                        children: Object(V.jsx)(Lt.a, {
                            className: "xl" !== e.breakpoint && "lg" !== e.breakpoint && "md" !== e.breakpoint ? "gfg_home_course gfg_home_page_video_outer_height_hover" : "ant-col-8 gfg_home_page_video_outer_height_hover",
                            children: Object(V.jsx)(ne.a, {
                                to: "videos/" + e.slug + "/?utm_source=geeksforgeeks&utm_medium=newui_home&utm_campaign=videos",
                                onClick: function(t) {
                                    return At(t, "clickopen", "".concat(e.eventCategory))
                                },
                                children: Object(V.jsx)(St.a, {
                                    className: "gfg_home_page_video_card",
                                    hoverable: !0,
                                    style: {
                                        borderRadius: "10px"
                                    },
                                    cover: Object(V.jsxs)("div", {
                                        style: {
                                            position: "relative"
                                        },
                                        children: [Object(V.jsx)(Pt.a, {
                                            className: "gfg_home_page_video_card_play_button"
                                        }), Object(V.jsx)("div", {
                                            class: "duration_video",
                                            children: r
                                        }), Object(V.jsx)("img", {
                                            className: "gfg_home_page_video_image",
                                            src: e.meta.thumbnail ? e.meta.thumbnail : "https://media.geeksforgeeks.org/img-practice/banner/complete-interview-preparation-thumbnail.png"
                                        })]
                                    }),
                                    children: Object(V.jsxs)("div", {
                                        style: {
                                            marginBottom: "-10px",
                                            marginTop: "-10px"
                                        },
                                        children: [Object(V.jsx)("div", {
                                            className: "video-card-content video-card-content_video",
                                            children: e.title
                                        }), Object(V.jsx)("div", {
                                            className: "video-card-date",
                                            children: e.date
                                        })]
                                    })
                                })
                            })
                        })
                    })
                }),
                Ft = function() {
                    var e = Ze(),
                        t = e.data,
                        s = e.isLoading,
                        a = Rt(),
                        c = [];
                    return !s && t && t.results.forEach((function(e) {
                        return c.length < 3 && c.push(Object(V.jsx)(Ut, {
                            title: e.title,
                            date: e.time,
                            slug: e.slug,
                            breakpoint: a,
                            image: e.meta.thumbnail,
                            duration: e.duration,
                            meta: e.meta,
                            eventCategory: "homepage_videos_card_" + "".concat(c.length + 1)
                        }))
                    })), Object(V.jsx)(V.Fragment, {
                        children: Object(V.jsxs)("div", {
                            className: "gfg_home_page_video_outer_height",
                            children: [Object(V.jsx)(Ct.a, {
                                className: "gfg_view_all",
                                children: Object(V.jsx)(Lt.a, {
                                    span: "xl" !== a ? "sm" === a || "xs" === a ? 23 : 22 : 20,
                                    offset: "xl" !== a ? "sm" === a || "xs" === a ? 0 : 1 : 2,
                                    children: Object(V.jsx)(Lt.a, {
                                        offset: 1,
                                        children: Object(V.jsx)(Lt.a, {
                                            span: 23,
                                            children: Object(V.jsxs)(Ct.a, {
                                                justify: "space-between",
                                                children: [Object(V.jsx)(Lt.a, {
                                                    className: "video-card-heading",
                                                    children: "Videos"
                                                }), Object(V.jsx)(Tt.b, {
                                                    children: Object(V.jsx)(Gt.a, {
                                                        className: "view_all_button",
                                                        shape: "round",
                                                        href: p.GFG_SITE_URL + "videos/?utm_source=geeksforgeeks&utm_medium=newui_home&utm_campaign=videos",
                                                        children: "View All"
                                                    })
                                                })]
                                            })
                                        })
                                    })
                                })
                            }), Object(V.jsx)(Ct.a, {
                                children: Object(V.jsx)(Lt.a, {
                                    span: "xl" !== a ? "sm" === a || "xs" === a ? 23 : 22 : 20,
                                    offset: "xl" !== a ? "sm" === a || "xs" === a ? 0 : 1 : 2,
                                    children: Object(V.jsx)(Lt.a, {
                                        offset: 1,
                                        children: Object(V.jsx)(Lt.a, {
                                            span: 23,
                                            className: "gfg_home_page_video_outer_height_hover",
                                            children: Object(V.jsx)(Ct.a, {
                                                className: "xl" !== a && "lg" !== a ? "scroll_gfg gfg_home_sroll" : "",
                                                wrap: "xl" === a || "lg" === a || "md" === a,
                                                gutter: "xl" === a || "lg" === a ? 60 : 30,
                                                children: c.length ? c : Object(V.jsxs)(V.Fragment, {
                                                    children: [Object(V.jsxs)(Lt.a, {
                                                        span: "xl" !== a && "lg" !== a && "md" !== a && "sm" !== a ? 20 : 8,
                                                        children: [Object(V.jsx)(It.a.Avatar, {
                                                            className: "gfg_home_page_search_image_skeleton",
                                                            shape: "square",
                                                            active: !0
                                                        }), Object(V.jsx)(It.a, {
                                                            active: !0
                                                        })]
                                                    }), Object(V.jsxs)(Lt.a, {
                                                        span: "xl" !== a && "lg" !== a && "md" !== a && "sm" !== a ? 20 : 8,
                                                        children: [Object(V.jsx)(It.a.Avatar, {
                                                            className: "gfg_home_page_search_image_skeleton",
                                                            shape: "square",
                                                            active: !0
                                                        }), Object(V.jsx)(It.a, {
                                                            active: !0
                                                        })]
                                                    }), Object(V.jsxs)(Lt.a, {
                                                        span: "xl" !== a && "lg" !== a && "md" !== a && "sm" !== a ? 20 : 8,
                                                        children: [Object(V.jsx)(It.a.Avatar, {
                                                            className: "gfg_home_page_search_image_skeleton",
                                                            shape: "square",
                                                            active: !0
                                                        }), Object(V.jsx)(It.a, {
                                                            active: !0
                                                        })]
                                                    })]
                                                })
                                            })
                                        })
                                    })
                                })
                            })]
                        })
                    })
                },
                Dt = (St.a.Meta, function(e) {
                    return Object(V.jsx)(V.Fragment, {
                        children: Object(V.jsx)(Lt.a, {
                            style: {
                                paddingBottom: "20px"
                            },
                            className: "xl" !== e.breakpoint && "lg" !== e.breakpoint && "md" !== e.breakpoint ? "gfg_home_course gfg_home_page_course_card_distance" : "ant-col-8 gfg_home_page_course_card_distance",
                            children: Object(V.jsx)("a", {
                                href: "".concat(p.GFG_PRACTICE_URL, "courses/").concat(e.data.course_slug, "?utm_source=geeksforgeeks&utm_medium=newui_home&utm_campaign=courses"),
                                children: Object(V.jsx)(St.a, {
                                    className: "gfg_home_page_course_card",
                                    hoverable: !0,
                                    cover: Object(V.jsxs)("div", {
                                        className: "gfg_home_page_course_card_cover",
                                        children: [Object(V.jsx)("img", {
                                            className: "gfg_home_page_course_card_image",
                                            src: e.data.small_banner
                                        }), Object(V.jsxs)(Lt.a, {
                                            className: "gfg_home_page_course_card_divider",
                                            style: {
                                                paddingLeft: "0px",
                                                paddingRight: "0px"
                                            },
                                            children: [Object(V.jsxs)(Ct.a, {
                                                justify: "space-between",
                                                style: {
                                                    padding: "10px"
                                                },
                                                children: [Object(V.jsx)(Lt.a, {
                                                    span: 14,
                                                    children: e.data.visit_count && Object(V.jsx)(Ct.a, {
                                                        children: Object(V.jsxs)("div", {
                                                            style: {
                                                                display: "flex",
                                                                alignItems: "center"
                                                            },
                                                            children: [Object(V.jsx)("img", {
                                                                className: "gfg_home_page_course_visit_count_image",
                                                                src: "https://media.geeksforgeeks.org/img-practice/Group7622-1669294650.svg"
                                                            }), Object(V.jsxs)("span", {
                                                                style: {
                                                                    font: "normal normal 12px sofia-pro"
                                                                },
                                                                className: "gfg_home_page_course_visit_color",
                                                                children: [e.data.visit_count, " interested Geeks"]
                                                            })]
                                                        })
                                                    })
                                                }), Object(V.jsx)(Lt.a, {
                                                    children: e.data.rating.avg_rating && Object(V.jsx)(Ct.a, {
                                                        children: Object(V.jsxs)("div", {
                                                            className: "gfg_home_page_course_card_rating",
                                                            children: [Object(V.jsx)("img", {
                                                                className: "gfg_home_page_course_rating_image",
                                                                src: "https://media.geeksforgeeks.org/img-practice/Path4648-1641537423.svg"
                                                            }), Object(V.jsx)("span", {
                                                                style: {
                                                                    paddingLeft: "4px"
                                                                },
                                                                className: "gfg_home_page_course_rating_val",
                                                                children: e.data.rating.avg_rating
                                                            })]
                                                        })
                                                    })
                                                })]
                                            }), Object(V.jsx)(Ct.a, {
                                                style: {
                                                    minHeight: "55px",
                                                    maxHeight: "55px",
                                                    overflow: "hidden"
                                                },
                                                children: Object(V.jsx)("span", {
                                                    className: "video-card-content video-card-content_course",
                                                    children: e.data.course_name
                                                })
                                            }), Object(V.jsx)(Ct.a, {
                                                justify: "space-between",
                                                style: {
                                                    padding: "18px 10px 10px 10px"
                                                },
                                                children: Object(V.jsxs)("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center"
                                                    },
                                                    children: [Object(V.jsx)("img", {
                                                        className: "gfg_home_page_course_level_image",
                                                        src: "https://media.geeksforgeeks.org/img-practice/Levels-1669283463.svg"
                                                    }), Object(V.jsx)("span", {
                                                        style: {
                                                            paddingLeft: "8px"
                                                        },
                                                        className: "gfg_home_page_course_level_color",
                                                        children: e.data.level
                                                    })]
                                                })
                                            })]
                                        })]
                                    })
                                })
                            })
                        })
                    })
                }),
                Vt = function() {
                    var e = Ye(),
                        t = e.data,
                        s = e.isLoading,
                        a = [],
                        c = [],
                        n = Rt();
                    try {
                        if (!s && t) {
                            for (var i in t) {
                                var r, o;
                                c.push.apply(c, null === (r = t[i]) || void 0 === r || null === (o = r.course_list) || void 0 === o ? void 0 : o.slice(0, 2))
                            }
                            for (var l in t) {
                                var d, g;
                                c.push.apply(c, null === (d = t[l]) || void 0 === d || null === (g = d.course_list) || void 0 === g ? void 0 : g.slice(2))
                            }
                            for (var j = 0; j < 6; j++) a.push(Object(V.jsx)(Dt, {
                                breakpoint: n,
                                data: c[j],
                                eventCategory: "homepage_courses_card" + (j + 1)
                            }))
                        }
                    } catch (u) {
                        L(u)
                    }
                    return Object(V.jsx)(V.Fragment, {
                        children: Object(V.jsx)(Ct.a, {
                            className: "gfg_home_page_course_outer_height gfg_view_all",
                            children: Object(V.jsx)(Lt.a, {
                                span: "xl" !== n ? "sm" === n || "xs" === n ? 23 : 22 : 20,
                                offset: "xl" !== n ? "sm" === n || "xs" === n ? 0 : 1 : 2,
                                children: Object(V.jsxs)(Lt.a, {
                                    offset: 1,
                                    children: [Object(V.jsx)(Lt.a, {
                                        span: 23,
                                        children: Object(V.jsxs)(Ct.a, {
                                            justify: "space-between",
                                            children: [Object(V.jsx)(Lt.a, {
                                                className: "video-card-heading",
                                                children: "Courses"
                                            }), Object(V.jsx)(Tt.b, {
                                                children: Object(V.jsx)(Gt.a, {
                                                    href: "".concat(p.GFG_PRACTICE_URL, "courses?utm_source=geeksforgeeks&utm_medium=newui_home&utm_campaign=courses"),
                                                    className: "view_all_button view_all_button_courses",
                                                    shape: "round",
                                                    children: "View All"
                                                })
                                            })]
                                        })
                                    }), Object(V.jsx)(Lt.a, {
                                        span: 23,
                                        children: Object(V.jsx)(Ct.a, {
                                            className: "xl" !== n && "lg" !== n && "md" !== n ? "scroll_gfg gfg_home_sroll" : "",
                                            wrap: "xl" === n || "lg" === n || "md" === n,
                                            gutter: "xl" === n || "lg" === n ? 60 : 30,
                                            children: a.length ? a : Object(V.jsxs)(V.Fragment, {
                                                children: [Object(V.jsxs)(Lt.a, {
                                                    className: "gfg_home_page_course_card_skeleton_padding",
                                                    span: "xl" !== n && "lg" !== n && "md" !== n && "sm" !== n ? 20 : 8,
                                                    children: [Object(V.jsx)(It.a.Avatar, {
                                                        className: "gfg_home_page_search_image_skeleton",
                                                        shape: "square",
                                                        active: !0
                                                    }), Object(V.jsx)(It.a, {
                                                        active: !0
                                                    })]
                                                }), Object(V.jsxs)(Lt.a, {
                                                    span: "xl" !== n && "lg" !== n && "md" !== n && "sm" !== n ? 20 : 8,
                                                    children: [Object(V.jsx)(It.a.Avatar, {
                                                        className: "gfg_home_page_search_image_skeleton",
                                                        shape: "square",
                                                        active: !0
                                                    }), Object(V.jsx)(It.a, {
                                                        active: !0
                                                    })]
                                                }), Object(V.jsxs)(Lt.a, {
                                                    span: "xl" !== n && "lg" !== n && "md" !== n && "sm" !== n ? 20 : 8,
                                                    children: [Object(V.jsx)(It.a.Avatar, {
                                                        className: "gfg_home_page_search_image_skeleton",
                                                        shape: "square",
                                                        active: !0
                                                    }), Object(V.jsx)(It.a, {
                                                        active: !0
                                                    })]
                                                }), Object(V.jsxs)(Lt.a, {
                                                    span: "xl" !== n && "lg" !== n && "md" !== n && "sm" !== n ? 20 : 8,
                                                    children: [Object(V.jsx)(It.a.Avatar, {
                                                        className: "gfg_home_page_search_image_skeleton",
                                                        shape: "square",
                                                        active: !0
                                                    }), Object(V.jsx)(It.a, {
                                                        active: !0
                                                    })]
                                                }), Object(V.jsxs)(Lt.a, {
                                                    span: "xl" !== n && "lg" !== n && "md" !== n && "sm" !== n ? 20 : 8,
                                                    children: [Object(V.jsx)(It.a.Avatar, {
                                                        className: "gfg_home_page_search_image_skeleton",
                                                        shape: "square",
                                                        active: !0
                                                    }), Object(V.jsx)(It.a, {
                                                        active: !0
                                                    })]
                                                }), Object(V.jsxs)(Lt.a, {
                                                    span: "xl" !== n && "lg" !== n && "md" !== n && "sm" !== n ? 20 : 8,
                                                    children: [Object(V.jsx)(It.a.Avatar, {
                                                        className: "gfg_home_page_search_image_skeleton",
                                                        shape: "square",
                                                        active: !0
                                                    }), Object(V.jsx)(It.a, {
                                                        active: !0
                                                    })]
                                                })]
                                            })
                                        })
                                    })]
                                })
                            })
                        })
                    })
                },
                qt = s(468),
                Mt = function(e) {
                    var t = Ke(),
                        s = t.data,
                        c = t.isLoading,
                        n = t.isError,
                        i = Object(a.useState)(59),
                        r = Object(d.a)(i, 2),
                        o = r[0],
                        l = r[1],
                        g = Object(a.useState)(59),
                        j = Object(d.a)(g, 2),
                        u = j[0],
                        m = j[1],
                        h = Object(a.useState)(23),
                        p = Object(d.a)(h, 2),
                        b = p[0],
                        x = p[1],
                        f = Object(a.useState)(!1),
                        _ = Object(d.a)(f, 2),
                        v = _[0],
                        k = _[1];
                    if (Object(a.useEffect)((function() {
                            var e = setTimeout((function() {
                                0 === b && 0 === u && 0 === o || (0 === u && 0 === o && x(b - 1), 0 === o && m(u - 1 < 0 ? 59 : u - 1), l(o - 1 < 0 ? 59 : o - 1))
                            }), 1e3);
                            return function() {
                                return clearInterval(e)
                            }
                        })), !c && !n && s && s.id) {
                        if (!v) {
                            if (s.xdate) try {
                                var y = s.end_date.split(/[- :]/),
                                    N = new Date(y[0], y[1] - 1, y[2], y[3], y[4], y[5]),
                                    w = new Date(N);
                                l(new Date(w).getSeconds() - new Date(s.xdate).getSeconds()), m(new Date(w).getMinutes() - new Date(s.xdate).getMinutes()), x(new Date(w).getHours() - new Date(s.xdate).getHours())
                            } catch (T) {
                                l(NaN), m(NaN), x(NaN)
                            } else try {
                                var S = s.end_date.split(/[- :]/),
                                    L = new Date(S[0], S[1] - 1, S[2], S[3], S[4], S[5]),
                                    C = new Date(L);
                                l(new Date(C).getSeconds() - (new Date).getSeconds()), m(new Date(C).getMinutes() - (new Date).getMinutes()), x(new Date(C).getHours() - (new Date).getHours())
                            } catch (T) {
                                l(NaN), m(NaN), x(NaN)
                            }
                            k(!0)
                        }
                        return Object(V.jsx)(V.Fragment, {
                            children: Object(V.jsx)("a", {
                                href: s.problem_url + "/?utm_source=geeksforgeeks&utm_medium=newui_home&utm_campaign=potd",
                                children: Object(V.jsx)(Lt.a, {
                                    span: "xl" !== e.breakpoint ? 22 : 20,
                                    offset: "xl" !== e.breakpoint ? 1 : 2,
                                    className: "gfg_home_page_potd_min_height",
                                    children: Object(V.jsx)(Lt.a, {
                                        offset: "xl" !== e.breakpoint ? 0 : 1,
                                        children: Object(V.jsx)(Ct.a, {
                                            className: "gfg_home_page_potd_height_spacing ".concat("xs" === e.breakpoint || "sm" === e.breakpoint ? "gfg_home_page_potd_height_spacing_small" : ""),
                                            children: Object(V.jsx)(Lt.a, {
                                                className: "gfg_home_page_potd",
                                                span: "xl" !== e.breakpoint ? 24 : 23,
                                                children: Object(V.jsxs)(Ct.a, {
                                                    className: "gfg_home_page_potd_outer gfg_home_page_potd_outer_border",
                                                    justify: "space-between",
                                                    wrap: "xs" === e.breakpoint || "sm" === e.breakpoint,
                                                    children: [Object(V.jsx)(Lt.a, {
                                                        className: "first_column ".concat("xs" === e.breakpoint || "sm" === e.breakpoint ? "first_column_small" : ""),
                                                        span: "xs" === e.breakpoint || "sm" === e.breakpoint ? 24 : 3,
                                                        children: Object(V.jsx)(Ct.a, {
                                                            justify: "xs" === e.breakpoint || "sm" === e.breakpoint ? "center" : "",
                                                            children: Object(V.jsx)(qt.a, {
                                                                className: "gfg_home_page_potd_image ".concat("xs" === e.breakpoint || "sm" === e.breakpoint ? "gfg_home_page_potd_image_small" : ""),
                                                                preview: !1,
                                                                src: "".concat(O, "img-practice/Asset1-1641910145.svg")
                                                            })
                                                        })
                                                    }), Object(V.jsx)(Lt.a, {
                                                        className: "second_column ".concat("xs" === e.breakpoint || "sm" === e.breakpoint ? "second_column_small" : ""),
                                                        span: "xs" === e.breakpoint || "sm" === e.breakpoint ? 24 : 14,
                                                        children: Object(V.jsxs)(Lt.a, {
                                                            className: "xs" === e.breakpoint || "sm" === e.breakpoint ? "card_spacing_small" : "card_spacing",
                                                            children: [Object(V.jsx)(Ct.a, {
                                                                className: "gfg_home_page_potd_banner_title",
                                                                children: "Problem of the day"
                                                            }), Object(V.jsx)(Ct.a, {
                                                                className: "problem_name",
                                                                children: s.problem_name
                                                            }), Object(V.jsx)(Ct.a, {
                                                                className: "problem_description",
                                                                children: "Solve one problem based on Data Structures and Algorithms every day and win exciting prizes."
                                                            })]
                                                        })
                                                    }), Object(V.jsxs)(Lt.a, {
                                                        className: "third_column ".concat("xs" === e.breakpoint || "sm" === e.breakpoint ? "third_column_small" : ""),
                                                        span: "xs" === e.breakpoint || "sm" === e.breakpoint ? 24 : 7,
                                                        children: [Object(V.jsxs)(Ct.a, {
                                                            justify: "space-around",
                                                            style: {
                                                                alignContent: "flex-end"
                                                            },
                                                            children: [Object(V.jsx)(Lt.a, {
                                                                className: "gfg_home_page_potd_time",
                                                                children: 1 === b.toString().length ? "0" + b : b
                                                            }), Object(V.jsx)(Lt.a, {
                                                                className: "gfg_home_page_potd_time",
                                                                children: 1 === u.toString().length ? "0" + u : u
                                                            }), Object(V.jsx)(Lt.a, {
                                                                className: "gfg_home_page_potd_time",
                                                                children: 1 === o.toString().length ? "0" + o : o
                                                            })]
                                                        }), Object(V.jsxs)(Ct.a, {
                                                            justify: "space-around",
                                                            children: [Object(V.jsx)(Lt.a, {
                                                                className: "gfg_home_page_potd_time_unit",
                                                                children: "\xa0\xa0\xa0Hours"
                                                            }), Object(V.jsx)(Lt.a, {
                                                                className: "gfg_home_page_potd_time_unit",
                                                                children: "\xa0\xa0\xa0Minutes"
                                                            }), Object(V.jsx)(Lt.a, {
                                                                className: "gfg_home_page_potd_time_unit",
                                                                children: "\xa0\xa0Seconds"
                                                            })]
                                                        }), Object(V.jsx)(Ct.a, {
                                                            justify: "space-around",
                                                            children: Object(V.jsx)(Gt.a, {
                                                                className: "gfg_home_page_potd_button ".concat("xs" === e.breakpoint || "sm" === e.breakpoint ? "gfg_home_page_potd_button_small" : ""),
                                                                style: {
                                                                    paddingTop: "10px",
                                                                    paddingBottom: "20px",
                                                                    fontSize: "14px",
                                                                    borderRadius: "4px"
                                                                },
                                                                onClick: function(e) {
                                                                    return At(e, "clickopen", "homepagepotd")
                                                                },
                                                                children: "Solve Now"
                                                            })
                                                        })]
                                                    })]
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    }
                    return Object(V.jsx)(V.Fragment, {
                        children: Object(V.jsx)(Lt.a, {
                            span: "xl" !== e.breakpoint ? 22 : 20,
                            offset: "xl" !== e.breakpoint ? 1 : 2,
                            className: "gfg_home_page_potd_min_height",
                            children: Object(V.jsx)(Lt.a, {
                                offset: "xl" !== e.breakpoint ? 0 : 1,
                                children: Object(V.jsx)(Ct.a, {
                                    className: "gfg_home_page_potd_height_spacing ".concat("xs" === e.breakpoint || "sm" === e.breakpoint ? "gfg_home_page_potd_height_spacing_small" : ""),
                                    children: Object(V.jsx)(Lt.a, {
                                        className: "gfg_home_page_potd",
                                        span: "xl" !== e.breakpoint ? 24 : 23,
                                        children: Object(V.jsxs)(Ct.a, {
                                            className: "gfg_home_page_potd_outer gfg_home_page_potd_outer_border",
                                            justify: "space-between",
                                            wrap: "xs" === e.breakpoint || "sm" === e.breakpoint,
                                            children: [Object(V.jsx)(Lt.a, {
                                                className: "".concat("xs" === e.breakpoint || "sm" === e.breakpoint ? "first_column_small" : ""),
                                                span: "xs" === e.breakpoint || "sm" === e.breakpoint ? 24 : 3,
                                                children: Object(V.jsx)(It.a.Avatar, {
                                                    className: "gfg_home_page_potd_outer first_column_skeleton",
                                                    active: !0,
                                                    shape: "square"
                                                })
                                            }), Object(V.jsx)(Lt.a, {
                                                style: {
                                                    paddingTop: "2%"
                                                },
                                                className: "".concat("xs" === e.breakpoint || "sm" === e.breakpoint ? "second_column_small" : ""),
                                                span: "xs" === e.breakpoint || "sm" === e.breakpoint ? 24 : 14,
                                                children: Object(V.jsx)(It.a, {
                                                    style: {
                                                        padding: "4%"
                                                    },
                                                    active: !0
                                                })
                                            }), Object(V.jsx)(Lt.a, {
                                                className: "".concat("xs" === e.breakpoint || "sm" === e.breakpoint ? "third_column_small" : ""),
                                                span: "xs" === e.breakpoint || "sm" === e.breakpoint ? 24 : 7,
                                                children: Object(V.jsx)(It.a.Avatar, {
                                                    className: "gfg_home_page_potd_outer third_column_skeleton",
                                                    active: !0,
                                                    shape: "square"
                                                })
                                            })]
                                        })
                                    })
                                })
                            })
                        })
                    })
                },
                Bt = function(e) {
                    var t = e.breakpoint,
                        s = $e(),
                        a = s.data,
                        c = s.isLoading,
                        n = s.isError;
                    return !a || c || n ? Object(V.jsx)(V.Fragment, {
                        children: Object(V.jsx)(Ct.a, {
                            children: Object(V.jsx)(Lt.a, {
                                span: "xl" !== t ? 22 : 20,
                                offset: "xl" !== t ? 1 : 2,
                                style: {
                                    marginTop: "50px"
                                },
                                children: Object(V.jsx)(Lt.a, {
                                    offset: 1,
                                    children: Object(V.jsx)(Lt.a, {
                                        className: "gfg_home_page_carousel_skeleton_spaces",
                                        span: 23,
                                        children: Object(V.jsxs)(Ct.a, {
                                            style: {
                                                border: "2px solid #EEEEEE",
                                                borderRadius: "13px"
                                            },
                                            wrap: !0,
                                            children: [Object(V.jsx)(Lt.a, {
                                                className: "gfg_home_page_carousel_height",
                                                span: "xl" !== t && "lg" !== t && "md" !== t && "sm" !== t ? 24 : 14,
                                                children: Object(V.jsx)(It.a.Avatar, {
                                                    className: "gfg_home_page_carousel_height ant-col-24 gfg_home_page_carousel_skeleton",
                                                    active: !0,
                                                    shape: "square",
                                                    style: {
                                                        minWidth: "100%",
                                                        minHeight: "100%",
                                                        display: "block !important"
                                                    }
                                                })
                                            }), Object(V.jsx)(Lt.a, {
                                                className: "gfg_home_page_carousel_height",
                                                span: "xl" !== t && "lg" !== t && "md" !== t && "sm" !== t ? 24 : 10,
                                                style: {
                                                    overflow: "hidden",
                                                    padding: "5px"
                                                },
                                                children: Object(V.jsx)(It.a, {
                                                    active: !0
                                                })
                                            })]
                                        })
                                    })
                                })
                            })
                        })
                    }) : Object(V.jsx)(V.Fragment, {
                        children: Object(V.jsx)(Ct.a, {
                            className: "gfg_home_page_carousel_spacing",
                            children: Object(V.jsx)(Lt.a, {
                                span: "xl" !== t ? "sm" === t || "xs" === t ? 23 : 22 : 20,
                                offset: "xl" !== t ? "sm" === t || "xs" === t ? 0 : 1 : 2,
                                children: Object(V.jsx)(Lt.a, {
                                    offset: 1,
                                    children: Object(V.jsx)(Lt.a, {
                                        span: "sm" === t || "xs" === t ? 24 : 23,
                                        children: Object(V.jsx)("a", {
                                            href: a.post_link + "/?utm_source=geeksforgeeks&utm_medium=newui_home&utm_campaign=gblog",
                                            children: Object(V.jsxs)(Ct.a, {
                                                className: "gfg_home_page_carousel_border",
                                                wrap: !0,
                                                children: [Object(V.jsx)(Lt.a, {
                                                    className: "gfg_home_page_carousel_height",
                                                    span: "xl" !== t && "lg" !== t && "md" !== t && "sm" !== t ? 24 : 14,
                                                    children: Object(V.jsx)("img", {
                                                        className: "gfg_home_page_carousel_image",
                                                        style: {
                                                            objectFit: "cover"
                                                        },
                                                        src: a.post_image
                                                    })
                                                }), Object(V.jsx)(Lt.a, {
                                                    className: "gfg_home_page_carousel_height",
                                                    span: "xl" !== t && "lg" !== t && "md" !== t && "sm" !== t ? 24 : 10,
                                                    style: {
                                                        overflow: "hidden",
                                                        padding: "8px"
                                                    },
                                                    children: Object(V.jsxs)(Lt.a, {
                                                        className: "gfg_home_page_carousel_card_size",
                                                        style: {
                                                            overflow: "hidden",
                                                            textOverflow: "ellipsis"
                                                        },
                                                        children: [Object(V.jsx)(Lt.a, {
                                                            style: {
                                                                color: "#2f8d46",
                                                                font: "normal normal normal 15px/25px sofia-pro,sans-serif",
                                                                letterSpacing: "0px"
                                                            },
                                                            children: "GBlog"
                                                        }), Object(V.jsx)(Lt.a, {
                                                            className: "gfg_home_page_carousel_title",
                                                            children: a.post_title
                                                        }), Object(V.jsx)(Lt.a, {
                                                            style: {
                                                                paddingBottom: "5px"
                                                            },
                                                            children: Object(V.jsx)("div", {
                                                                className: "gfg_home_page_carousel_description",
                                                                children: a.post_excerpt
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                },
                zt = [
                    [{
                        color: "blue",
                        topicName: "Array",
                        url: "auth-dashboard-uploads/Array_1.png",
                        slug: "array-data-structure/",
                        eventCategory: "homepage_topics_a_card_one"
                    }, {
                        color: "green",
                        topicName: "Linked List",
                        url: "auth-dashboard-uploads/LL.svg",
                        slug: "data-structures/linked-list/",
                        eventCategory: "homepage_topics_a_card_two"
                    }, {
                        color: "yellow",
                        topicName: "Stack",
                        url: "auth-dashboard-uploads/Stacks.png",
                        slug: "stack-data-structure/",
                        eventCategory: "homepage_topics_a_card_three"
                    }, {
                        color: "red",
                        topicName: "Queue",
                        url: "auth-dashboard-uploads/Queue.png",
                        slug: "queue-data-structure/",
                        eventCategory: "homepage_topics_a_card_four"
                    }],
                    [{
                        color: "red",
                        topicName: "Analysis of Algo",
                        url: "auth-dashboard-uploads/Algo.svg",
                        slug: "analysis-of-algorithms-set-1-asymptotic-analysis/",
                        eventCategory: "homepage_topics_b_card_one"
                    }, {
                        color: "blue",
                        topicName: "Searching Algo",
                        url: "auth-dashboard-uploads/Searching.svg",
                        slug: "searching-algorithms/",
                        eventCategory: "homepage_topics_b_card_two"
                    }, {
                        color: "green",
                        topicName: "Sorting Algo",
                        url: "auth-dashboard-uploads/Sorting-Algo.svg",
                        slug: "sorting-algorithms/",
                        eventCategory: "homepage_topics_b_card_three"
                    }, {
                        color: "yellow",
                        topicName: "Graph Algo",
                        url: "auth-dashboard-uploads/Graph-Algo.svg",
                        slug: "graph-data-structure-and-algorithms/",
                        eventCategory: "homepage_topics_b_card_four"
                    }]
                ],
                Ht = function(e) {
                    return Object(V.jsx)(V.Fragment, {
                        children: Object(V.jsx)(Lt.a, {
                            className: "xl" === e.breakpoint || "lg" === e.breakpoint || "md" === e.breakpoint ? "gfg_home_topic_xl" : "gfg_home_topic_scroll",
                            style: {
                                marginRight: "1%"
                            },
                            children: Object(V.jsx)(St.a, {
                                className: "gfg_home_page_topic_card",
                                hoverable: !0,
                                cover: Object(V.jsx)("div", {
                                    className: "gfg_home_page_topic_card_cover",
                                    children: Object(V.jsx)("a", {
                                        href: "".concat(p.GFG_SITE_URL).concat(e.slug),
                                        onClick: function(t) {
                                            return At(t, "clickopen", "".concat(e.eventCategory))
                                        },
                                        children: Object(V.jsxs)(Lt.a, {
                                            className: "gfg_home_topic_".concat(e.color),
                                            style: {
                                                height: "180px",
                                                borderRadius: "12px"
                                            },
                                            children: [Object(V.jsx)(Lt.a, {
                                                span: 16,
                                                children: Object(V.jsx)(Ct.a, {
                                                    style: {
                                                        color: "#FFFFFF",
                                                        fontFamily: "sofia-pro,sans-serif",
                                                        fontSize: "25px",
                                                        paddingLeft: "4%",
                                                        paddingTop: "4%"
                                                    },
                                                    children: e.topic
                                                })
                                            }), Object(V.jsx)(Ct.a, {
                                                justify: "end",
                                                style: {
                                                    position: "absolute",
                                                    bottom: "8%",
                                                    right: "8%"
                                                },
                                                children: Object(V.jsx)(qt.a, {
                                                    preview: !1,
                                                    height: "80%",
                                                    width: "80%",
                                                    src: O + e.url
                                                })
                                            })]
                                        })
                                    })
                                })
                            })
                        })
                    })
                },
                Wt = function(e) {
                    var t = {
                            xl: "4",
                            lg: "4",
                            md: "4",
                            sm: "4",
                            xs: "4"
                        },
                        s = e.flag ? "Algorithms" : "Data Structures",
                        a = Rt(),
                        c = [];
                    return zt[e.flag].forEach((function(s) {
                        return c.length < t[a] && c.push(Object(V.jsx)(Ht, {
                            color: s.color,
                            topic: s.topicName,
                            url: s.url,
                            breakpoint: a,
                            slug: e.flag ? s.slug + "?utm_source=geeksforgeeks&utm_medium=newui_home&utm_campaign=algo" : s.slug + "?utm_source=geeksforgeeks&utm_medium=newui_home&utm_campaign=dsa",
                            eventCategory: s.eventCategory
                        }))
                    })), Object(V.jsx)(V.Fragment, {
                        children: Object(V.jsx)(Ct.a, {
                            className: "gfg_view_all",
                            children: Object(V.jsx)(Lt.a, {
                                className: "gfg_home_topic_outer_height ".concat(e.flag ? "gfg_home_topic_outer_height_algo" : ""),
                                span: "xl" !== a ? "sm" === a || "xs" === a ? 23 : 22 : 20,
                                offset: "xl" !== a ? "sm" === a || "xs" === a ? 0 : 1 : 2,
                                children: Object(V.jsxs)(Lt.a, {
                                    offset: 1,
                                    children: [Object(V.jsx)(Lt.a, {
                                        span: 23,
                                        children: Object(V.jsxs)(Ct.a, {
                                            justify: "space-between",
                                            children: [Object(V.jsx)(Lt.a, {
                                                className: "video-card-heading",
                                                children: s
                                            }), Object(V.jsx)(Tt.b, {
                                                children: Object(V.jsx)(Gt.a, {
                                                    className: "view_all_button",
                                                    shape: "round",
                                                    href: "".concat(p.GFG_SITE_URL).concat(e.flag ? "fundamentals-of-algorithms/?utm_source=geeksforgeeks&utm_medium=newui_home&utm_campaign=algo" : "data-structures/?utm_source=geeksforgeeks&utm_medium=newui_home&utm_campaign=dsa"),
                                                    children: "View All"
                                                })
                                            })]
                                        })
                                    }), Object(V.jsx)(Lt.a, {
                                        children: Object(V.jsx)(Ct.a, {
                                            wrap: !1,
                                            gutter: 10,
                                            className: "xl" !== a && "lg" !== a && "md" !== a ? "scroll_gfg gfg_home_sroll gfg_home_topic_right_margin" : "gfg_home_topic_right_margin",
                                            children: c
                                        })
                                    })]
                                })
                            })
                        })
                    })
                },
                Qt = s(472),
                Jt = s(469),
                Xt = s(248),
                Kt = s.n(Xt),
                Yt = s(252),
                Zt = Yt.a.TabPane,
                $t = function(e) {
                    var t = e.tags.map((function(e) {
                            return Object(V.jsx)(Lt.a, {
                                className: "gfg_home_page_article_tag",
                                children: Object(V.jsx)("a", {
                                    href: e.tag_link,
                                    children: Object(V.jsx)(Lt.a, {
                                        style: {
                                            paddingLeft: "0px",
                                            paddingRight: "0px"
                                        },
                                        children: e.tag_name
                                    })
                                })
                            })
                        })),
                        s = e.breakpoint;
                    return Object(V.jsx)(Lt.a, {
                        style: {
                            marginBottom: "20px"
                        },
                        children: Object(V.jsxs)(St.a, {
                            className: "gfg_home_page_article_background",
                            children: [Object(V.jsx)(Kt.a, {
                                title: Object(V.jsx)("div", {
                                    className: "gfg_home_page_article_meta",
                                    children: Object(V.jsx)("a", {
                                        style: {
                                            color: "var(--color-black)"
                                        },
                                        href: e.link + "/?utm_source=geeksforgeeks&utm_medium=newui_home&utm_campaign=articles",
                                        children: e.title
                                    })
                                }),
                                description: Object(V.jsxs)("div", {
                                    className: "gfg_home_page_article_description",
                                    children: ["xs" === s ? e.snippet.substring(0, 100) + "..." : e.snippet, Object(V.jsx)("a", {
                                        style: {
                                            color: "var(--color-gfg)"
                                        },
                                        href: e.link,
                                        children: "Read more"
                                    })]
                                })
                            }), Object(V.jsxs)(Ct.a, {
                                style: {
                                    marginTop: "25px"
                                },
                                gutter: 16,
                                children: [Object(V.jsx)(Lt.a, {
                                    className: "gfg-icon gfg-icon_tag-primary"
                                }), t]
                            })]
                        })
                    })
                },
                es = function(e) {
                    var t, s = Object(a.useRef)("all+category"),
                        c = Object(a.useState)(s.current),
                        n = Object(d.a)(c, 2),
                        i = n[0],
                        r = n[1],
                        o = Object(a.useState)(1),
                        l = Object(d.a)(o, 2),
                        g = l[0],
                        j = l[1],
                        u = Object(a.useRef)(null),
                        m = i.split("+")[0],
                        h = tt({
                            chip: m,
                            page: g
                        }),
                        b = h.data,
                        x = h.isLoading,
                        f = h.isError,
                        O = h.isFetching,
                        _ = ct().data;
                    _ && (t = _[0].page_count * _[0].page_size + _[0].remaining_post);
                    var v = e.breakpoint,
                        k = [];
                    return x || !b || f || (k = b.map((function(e) {
                        return Object(V.jsx)($t, {
                            title: e.article_title,
                            snippet: e.article_excrpt,
                            tags: e.article_tags,
                            link: e.article_link,
                            breakpoint: v
                        })
                    }))), Object(V.jsx)(V.Fragment, {
                        children: Object(V.jsx)(Lt.a, {
                            ref: u,
                            span: "xl" !== v ? "sm" === v || "xs" === v ? 23 : 22 : 20,
                            offset: "xl" !== v ? "sm" === v || "xs" === v ? 0 : 1 : 2,
                            children: Object(V.jsxs)(Lt.a, {
                                offset: 1,
                                className: "gfg_article_bottom gfg_home_page_article_header gfg_view_all",
                                children: [Object(V.jsx)(Lt.a, {
                                    span: 23,
                                    children: Object(V.jsxs)(Ct.a, {
                                        justify: "space-between",
                                        children: [Object(V.jsx)(Lt.a, {
                                            className: "video-card-heading",
                                            children: "Articles"
                                        }), Object(V.jsx)(Tt.b, {
                                            children: "all+category" !== i && !O && Object(V.jsx)(Gt.a, {
                                                className: "view_all_button",
                                                shape: "round",
                                                href: "all" !== i.split("+")[0] ? p.GFG_SITE_URL + i.split("+")[1] + "/" + i.split("+")[0] + "?utm_source=geeksforgeeks&utm_medium=newui_home&utm_campaign=articles" : p.GFG_SITE_URL + "page/2?utm_source=geeksforgeeks&utm_medium=newui_home&utm_campaign=articles",
                                                children: "View All"
                                            })
                                        })]
                                    })
                                }), Object(V.jsx)(Lt.a, {
                                    className: "gfg_home_page_article_width",
                                    children: Object(V.jsx)(Yt.a, {
                                        tabBarStyle: {
                                            border: "none"
                                        },
                                        onTabClick: function(e) {
                                            s.current = "all+undefined" == e ? "all+category" : e, r(s.current), j(1)
                                        },
                                        children: _ && _.map((function(e) {
                                            return Object(V.jsx)(Zt, {
                                                tab: Object(V.jsx)(Lt.a, {
                                                    className: "gfg_homepage_article_scroll",
                                                    children: Object(V.jsx)(Qt.a, {
                                                        className: "gfg_home_page_article_tab_pane_tag",
                                                        children: e.name
                                                    })
                                                }),
                                                children: x || f || O ? Object(V.jsxs)(V.Fragment, {
                                                    children: [Object(V.jsx)(It.a, {}), Object(V.jsx)(It.a, {}), Object(V.jsx)(It.a, {}), Object(V.jsx)(It.a, {})]
                                                }) : k
                                            }, e.slug + "+" + e.type)
                                        }))
                                    })
                                }), !x && !O && "all+category" == i && t && Object(V.jsx)(Jt.a, {
                                    className: "gfg_home_page_articles_pagination",
                                    style: {
                                        textAlign: "center",
                                        paddingBottom: "30px",
                                        paddingTop: "12px"
                                    },
                                    defaultCurrent: g,
                                    onChange: function(e) {
                                        j(e), u.current.scrollIntoView()
                                    },
                                    total: t,
                                    defaultPageSize: 15,
                                    itemRender: function(e, t, s) {
                                        return "prev" === t ? Object(V.jsx)("a", {
                                            children: Object(V.jsx)("span", {
                                                children: "< Prev"
                                            })
                                        }) : "next" === t ? Object(V.jsx)("a", {
                                            children: Object(V.jsx)("span", {
                                                children: "Next >"
                                            })
                                        }) : s
                                    },
                                    responsive: !0
                                })]
                            })
                        })
                    })
                },
                ts = s(470),
                ss = s(128),
                as = s(251),
                cs = s.n(as),
                ns = s(201),
                is = s(101),
                rs = function(e, t) {
                    return e.map((function(e) {
                        return Object(V.jsx)(os, {
                            breakpoint: t,
                            title: e.title,
                            snippet: e.snippet,
                            thumbnail: e.pagemap ? e.pagemap.cse_thumbnail : "",
                            link: e.link
                        })
                    }))
                },
                os = function(e) {
                    var t = e.breakpoint;
                    return Object(V.jsxs)("div", {
                        style: {
                            marginLeft: "20px",
                            paddingBottom: "20px"
                        },
                        children: [Object(V.jsxs)(Ct.a, {
                            gutter: 40,
                            wrap: !1,
                            children: [Object(V.jsxs)(Lt.a, {
                                span: "xs" === t ? 6 : 4,
                                style: {
                                    marginTop: "auto",
                                    marginBottom: "auto",
                                    textAlign: "center"
                                },
                                children: [" ", Object(V.jsx)(qt.a, {
                                    preview: !1,
                                    style: {
                                        maxWidth: "60px",
                                        maxHeight: "120px"
                                    },
                                    src: e.thumbnail ? e.thumbnail[0].src : "".concat(O, "img-practice/gfg_200X200.png")
                                })]
                            }), Object(V.jsx)(Lt.a, {
                                span: "xs" === t ? 18 : 20,
                                style: {
                                    marginLeft: "-30px"
                                },
                                children: Object(V.jsxs)(Ct.a, {
                                    children: [Object(V.jsx)(Ct.a, {
                                        children: Object(V.jsx)("a", {
                                            style: {
                                                color: "#2f8d46",
                                                font: "normal normal bold 16px sofia-pro,sans-serif"
                                            },
                                            href: e.link,
                                            children: e.title
                                        })
                                    }), Object(V.jsx)(Ct.a, {
                                        className: "gfg_home_page_search_modal_article_meta",
                                        children: Object(V.jsx)(Lt.a, {
                                            span: 23,
                                            style: {
                                                font: "14px sofia-pro,sans-serif"
                                            },
                                            children: e.snippet
                                        })
                                    })]
                                })
                            })]
                        }), Object(V.jsx)(Ct.a, {
                            style: {
                                paddingTop: "15px"
                            },
                            children: Object(V.jsx)(Lt.a, {
                                span: 23,
                                style: {
                                    borderBottom: "1px solid #cccccc"
                                }
                            })
                        })]
                    })
                },
                ls = c.a.memo((function(e) {
                    var t = et(),
                        s = Object(d.a)(t, 2),
                        c = s[0],
                        n = s[1],
                        i = n.data,
                        r = n.isLoading,
                        o = n.isError,
                        l = Object(a.useState)(),
                        g = Object(d.a)(l, 2),
                        m = g[0],
                        h = g[1],
                        p = Object(a.useState)(),
                        b = Object(d.a)(p, 2),
                        x = b[0],
                        f = b[1],
                        O = Object(a.useState)(0),
                        _ = Object(d.a)(O, 2),
                        v = _[0],
                        k = _[1],
                        y = Object(a.useState)("relevance"),
                        N = Object(d.a)(y, 2),
                        w = N[0],
                        S = N[1],
                        L = Object(a.useState)(1),
                        C = Object(d.a)(L, 2),
                        T = C[0],
                        G = C[1];
                    Object(a.useEffect)((function() {
                        I()
                    }), [e.value, w, T]);
                    var I = function() {
                            var t = Object(u.a)(j.a.mark((function t() {
                                var s;
                                return j.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (k(1), (s = new FormData).append("page", T), s.append("sort", w), s.append("type", "premium"), s.append("query", e.value), !("relevance" == w && !m || "relevance" == w && m && 1 != T)) {
                                                t.next = 9;
                                                break
                                            }
                                            return t.next = 9, c(s);
                                        case 9:
                                            if (!("date" == w && !x || "date" == w && x && 1 != T)) {
                                                t.next = 12;
                                                break
                                            }
                                            return t.next = 12, c(s);
                                        case 12:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }(),
                        P = function(e) {
                            G(e)
                        };
                    return Object(a.useEffect)((function() {
                        "relevance" == w && 1 == T ? h(i) : "date" == w && 1 == T && f(i)
                    }), [i]), Object(V.jsxs)(ts.a, {
                        style: {
                            height: "662px"
                        },
                        bodyStyle: {
                            overflowY: "scroll",
                            overflowX: "hidden"
                        },
                        className: "gfg_home_page_modal",
                        closable: !1,
                        width: "1009px",
                        title: Object(V.jsxs)(Lt.a, {
                            id: "gfg_home_page_modal",
                            children: [Object(V.jsxs)(Ct.a, {
                                gutter: 10,
                                justify: "center",
                                style: {
                                    background: "#eff8f3",
                                    marginBottom: "20px"
                                },
                                children: [Object(V.jsx)(Lt.a, {
                                    style: {
                                        paddingTop: "9px",
                                        font: "18px sofia-pro",
                                        color: "#273239",
                                        fontWeight: "bold"
                                    },
                                    children: "Improve your Coding Skills with Practice"
                                }), Object(V.jsx)(Lt.a, {
                                    children: Object(V.jsx)(Gt.a, {
                                        className: "gfg_home_page_search_results_button",
                                        children: Object(V.jsx)("a", {
                                            href: "https://practice.geeksforgeeks.org/explore?page=1&sortBy=submissions&utm_source=geeksforgeeks&utm_medium=search-bar&utm_campaign=practice-search",
                                            children: "Try It!"
                                        })
                                    })
                                })]
                            }), Object(V.jsxs)(Ct.a, {
                                className: "gfg_home_page_modal_meta-wrapper",
                                wrap: !1,
                                children: [1 == T && m && m.response && m.response.searchInformation ? Object(V.jsx)(Lt.a, {
                                    children: Object(V.jsxs)("div", {
                                        className: "gfg_home_page_modal_search-info",
                                        children: ["About ", m.response.searchInformation.formattedTotalResults, " results (", m.response.searchInformation.formattedSearchTime, " seconds)"]
                                    })
                                }) : 1 == T && x && x.response && x.response.searchInformation ? Object(V.jsx)(Lt.a, {
                                    children: Object(V.jsxs)("div", {
                                        className: "gfg_home_page_modal_search-info",
                                        children: ["About ", x.response.searchInformation.formattedTotalResults, " results (", x.response.searchInformation.formattedSearchTime, " seconds)"]
                                    })
                                }) : !r && !o && i && i.response && i.response.searchInformation ? Object(V.jsx)(Lt.a, {
                                    children: Object(V.jsxs)("div", {
                                        className: "gfg_home_page_modal_search-info",
                                        children: ["About ", i.response.searchInformation.formattedTotalResults, " results (", i.response.searchInformation.formattedSearchTime, " seconds)"]
                                    })
                                }) : "", r ? "" : Object(V.jsx)(Lt.a, {
                                    children: Object(V.jsxs)(Ct.a, {
                                        className: "gfg_home_page_modal_sort-wrapper",
                                        gutter: 10,
                                        wrap: !0,
                                        children: [Object(V.jsx)(Lt.a, {
                                            className: "gfg_home_page_modal_sort-label",
                                            children: "Sort By:"
                                        }), Object(V.jsx)(Lt.a, {
                                            children: Object(V.jsxs)(ss.a, {
                                                style: {
                                                    width: "100px"
                                                },
                                                defaultValue: w,
                                                size: "small",
                                                onChange: function(e) {
                                                    S(e), G(1)
                                                },
                                                children: [Object(V.jsx)(ns.Option, {
                                                    value: "date",
                                                    children: "Date"
                                                }), Object(V.jsx)(ns.Option, {
                                                    value: "relevance",
                                                    children: "Relevance"
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })]
                        }),
                        visible: e.visible,
                        onCancel: function() {
                            k(0), e.cancel(), G(1)
                        },
                        footer: !1,
                        children: [1 == T && "relevance" == w && m && m.response.items ? rs(m.response.items, e.breakpoint) : 1 == T && "date" == w && x && x.response.items ? rs(x.response.items, e.breakpoint) : r || o ? Object(V.jsx)(is.a, {
                            style: {
                                fontSize: 24,
                                marginLeft: "50%",
                                marginTop: "30%"
                            },
                            spin: !0
                        }) : i && i.response ? i.response.items && 1 === v ? rs(i.response.items, e.breakpoint) : Object(V.jsx)("div", {
                            className: "custom_no_results_color",
                            children: "No Results Found"
                        }) : Object(V.jsx)(is.a, {
                            style: {
                                fontSize: 24,
                                marginLeft: "50%",
                                marginTop: "30%"
                            },
                            spin: !0
                        }), m && m.response && m.response.items && m.response.searchInformation && parseInt(m.response.searchInformation.totalResults) > 10 && 1 == T && "relevance" == w ? Object(V.jsx)(Jt.a, {
                            style: {
                                paddingLeft: "20px"
                            },
                            defaultCurrent: 1,
                            onChange: P,
                            total: Math.min(100, parseInt(m.response.searchInformation.totalResults)),
                            showSizeChanger: !1
                        }) : "", x && x.response && x.response.items && x.response.searchInformation && parseInt(x.response.searchInformation.totalResults) > 10 && 1 == T && "date" == w ? Object(V.jsx)(Jt.a, {
                            style: {
                                paddingLeft: "20px"
                            },
                            defaultCurrent: 1,
                            onChange: P,
                            total: Math.min(100, parseInt(x.response.searchInformation.totalResults)),
                            showSizeChanger: !1
                        }) : "", r || o || i && i.response && i.response.searchInformation && parseInt(i.response.searchInformation.totalResults) < 10 ? "" : i && i.response.items && 1 === v && m && 1 != T ? Object(V.jsx)(Jt.a, {
                            style: {
                                paddingLeft: "20px"
                            },
                            defaultCurrent: T,
                            onChange: P,
                            total: Math.min(100, parseInt(i.response.searchInformation.totalResults)),
                            showSizeChanger: !1
                        }) : ""]
                    })
                })),
                ds = function(e) {
                    var t = e.breakpoint,
                        s = Object(a.useState)(0),
                        c = Object(d.a)(s, 2),
                        n = c[0],
                        i = c[1],
                        r = Object(a.useState)(0),
                        o = Object(d.a)(r, 2),
                        l = o[0],
                        g = o[1],
                        j = Object(a.useState)(""),
                        u = Object(d.a)(j, 2),
                        m = u[0],
                        h = u[1],
                        p = Object(a.useState)(!1),
                        b = Object(d.a)(p, 2),
                        x = b[0],
                        f = b[1],
                        O = Object(a.useState)(""),
                        _ = Object(d.a)(O, 2),
                        v = _[0],
                        k = _[1],
                        y = Object(a.useState)(""),
                        N = Object(d.a)(y, 2),
                        w = N[0],
                        S = N[1],
                        L = ["Data Structures and Algorithms", "Complete Interview Preparation", "Must Do SDE Sheet Practice", "Learn Python, Java, C++", "GeeksforGeeks Courses"];
                    return Object(a.useEffect)((function() {
                        var e = setTimeout((function() {
                            g(l + 1), l > L[n].length && (g(0), i((n + 1) % L.length), h("")), h(L[n].substr(0, l))
                        }), 100);
                        return function() {
                            return clearTimeout(e)
                        }
                    })), Object(V.jsx)(V.Fragment, {
                        children: Object(V.jsxs)(Lt.a, {
                            children: [Object(V.jsx)(Ct.a, {
                                justify: "center",
                                className: "gfg_home_page_search_heading",
                                children: "Hello, What Do You Want To Learn?"
                            }), Object(V.jsx)(Ct.a, {
                                justify: "center",
                                className: "gfg_home_page_search_input",
                                children: Object(V.jsx)(cs.a, {
                                    placeholder: m,
                                    allowClear: !0,
                                    defaultValue: v,
                                    enterButton: Object(V.jsx)(Gt.a, {
                                        children: "Search"
                                    }),
                                    className: "gfg_home_page_search gfg_home_page_search_search_bar_width",
                                    size: "large",
                                    value: v,
                                    style: {
                                        height: "10px"
                                    },
                                    onSearch: function(e) {
                                        f(!0), S(e.trim()), w.length || k("")
                                    },
                                    onChange: function(e) {
                                        return k(e.target.value)
                                    }
                                })
                            }), w.length ? Object(V.jsx)(ls, {
                                breakpoint: t,
                                cancel: function() {
                                    f(!1), k(""), S("")
                                },
                                visible: x,
                                value: encodeURIComponent(w)
                            }) : ""]
                        })
                    })
                },
                gs = {
                    xl: "50",
                    lg: "30"
                },
                js = [{
                    post_title: "Explore Practice Problems",
                    excerpt: "Solve DSA Problems. Filter based on topic tags and company tags. Get curated problem lists by GFG experts.",
                    url: "".concat(p.GFG_PRACTICE_URL, "explore?page=1&curated[]=1&sortBy=submissions&curated_names[]=SDE%20Sheet/")
                }, {
                    post_title: "Interview Preparation",
                    excerpt: "An interview-centric course designed to prepare you for the role of SDE for both product and service based companies. A placement preparation pack built with years of expertise. Prepare C++, Java, DSA, CS Theory concepts and much more!",
                    url: "".concat(p.GFG_PRACTICE_URL, "courses/complete-interview-preparation/")
                }],
                us = [{
                    post_title: "Interview Preparation",
                    excerpt: "An interview-centric course designed to prepare you for the role of SDE for both product and service based companies. A placement preparation pack built with years of expertise. Prepare C++, Java, DSA, CS Theory concepts and much more!",
                    url: "".concat(p.GFG_PRACTICE_URL, "courses/complete-interview-preparation/")
                }, {
                    post_title: "DSA Self Paced",
                    excerpt: " Most popular course on DSA trusted by over 75,000 students! Built with years of experience by industry experts and gives you a complete package",
                    url: "".concat(p.GFG_PRACTICE_URL, "courses/dsa-self-paced/")
                }, {
                    post_title: "DSA in Python - Self Paced",
                    excerpt: " Most popular course on DSA trusted by over 75,000 students! Built with years of experience by industry experts and gives you a complete package",
                    url: "".concat(p.GFG_PRACTICE_URL, "courses/Data-Structures-With-Python/")
                }],
                ms = ["".concat(O, "auth-dashboard-uploads/read.png"), "".concat(O, "auth-dashboard-uploads/Homepage-Article-2.png"), "".concat(O, "auth-dashboard-uploads/Homepage-Article-3.png")],
                hs = function(e) {
                    var t = Object(a.useState)(!1),
                        s = Object(d.a)(t, 2),
                        c = s[0],
                        n = s[1],
                        i = JSON.parse(localStorage.getItem("loginData")),
                        r = localStorage.getItem("previous");
                    Object(a.useEffect)((function() {
                        i && 1 == i.isLoggedIn && n(!0)
                    }));
                    var o = nt(r),
                        l = o.data,
                        g = o.isLoading,
                        j = it(void 0, {
                            skip: 0 == c
                        }),
                        u = j.data,
                        m = j.isLoading,
                        h = Object(a.useState)(null),
                        p = Object(d.a)(h, 2),
                        b = p[0],
                        x = p[1],
                        f = e.breakpoint;
                    ms[0] = "".concat(O, "xs" == f ? "auth-dashboard-uploads/image-%2822%29.png" : "auth-dashboard-uploads/read.png"), Object(a.useEffect)((function() {
                        var e = us[Math.floor(Math.random() * us.length)];
                        x(e)
                    }), []);
                    var _ = function(e) {
                        var t;
                        return "recommendCourse" == e.type && (t = e.post.short_description.replace(/(<([^>]+)>)/gi, "")), Object(V.jsx)(V.Fragment, {
                            children: Object(V.jsx)(Lt.a, {
                                style: {
                                    paddingBottom: "10px"
                                },
                                className: "xl" !== f && "lg" !== f && "md" !== f && "sm" !== f ? "ant-col-24" : "ant-col-8",
                                children: Object(V.jsx)("a", {
                                    href: "recommendCourse" == e.type ? e.post.course_url + "?utm_source=geeksforgeeks&utm_medium=newui_home&utm_campaign=first_section" : e.post.url + "?utm_source=geeksforgeeks&utm_medium=newui_home&utm_campaign=first_section",
                                    onClick: function(t) {
                                        return At(t, "clickopen", "".concat(e.event_category))
                                    },
                                    children: Object(V.jsx)(St.a, {
                                        className: "gfg_home_page_search_card gfg_home_page_article_background",
                                        hoverable: !0,
                                        style: {
                                            borderRadius: "10px",
                                            overflow: "hidden"
                                        },
                                        cover: Object(V.jsxs)(Ct.a, {
                                            className: "gfg_home_page_search_card_cover_wrap",
                                            wrap: "xl" === f || "md" === f || "lg" === f || "sm" === f,
                                            children: [Object(V.jsx)(Lt.a, {
                                                span: "xl" !== f && "md" !== f && "lg" !== f && "sm" !== f ? 8 : 24,
                                                children: Object(V.jsx)("img", {
                                                    className: "gfg_home_page_search_image",
                                                    src: e.image
                                                })
                                            }), Object(V.jsxs)(Ct.a, {
                                                className: "search_bar_card_body",
                                                children: [Object(V.jsx)(Lt.a, {
                                                    span: 24,
                                                    className: "gfg_home_page_search_card_title_button_gap",
                                                    children: Object(V.jsx)("div", {
                                                        className: "video-card-content gfg_home_page_search_card_title",
                                                        children: "recommendCourse" == e.type ? e.post.course_name : "localStorage" === e.type ? e.post.post_title : Object(V.jsx)("div", {
                                                            className: "gfg_home_page_search_card_title_anchor",
                                                            children: e.post.post_title
                                                        })
                                                    })
                                                }), Object(V.jsx)(Lt.a, {
                                                    className: "gfg_home_page_search_card_description",
                                                    span: 24,
                                                    children: "recommendCourse" == e.type ? t.slice(0, 100) : ("localStorage" === e.type ? e.post.excerpt.slice(0, 100) : e.post.excerpt) + "..."
                                                })]
                                            })]
                                        })
                                    })
                                })
                            })
                        })
                    };
                    Object(a.useEffect)((function() {}), [l]);
                    var v = function(e, t) {
                        return +t.visit_count - +e.visit_count
                    };
                    return Object(V.jsxs)(V.Fragment, {
                        children: [Object(V.jsx)(Ct.a, {
                            className: "gfg_home_page_search_background_outer_small",
                            children: Object(V.jsx)(Lt.a, {
                                className: "gfg_home_page_search_card_outer gfg_home_page_search_background_outer_small",
                                span: "xl" !== f ? 22 : 20,
                                offset: "xl" !== f ? 1 : 2,
                                children: Object(V.jsx)(Lt.a, {
                                    className: "ant-col-sm-offset-1 gfg_dark_screen_for_you",
                                    children: Object(V.jsx)(Lt.a, {
                                        span: 23,
                                        children: Object(V.jsx)(Ct.a, {
                                            justify: "space-between",
                                            children: Object(V.jsx)(Lt.a, {
                                                className: "video-card-heading gfg_home_page_for_you_heading",
                                                children: "For You"
                                            })
                                        })
                                    })
                                })
                            })
                        }), Object(V.jsx)(Ct.a, {
                            children: Object(V.jsx)(Lt.a, {
                                className: "gfg_home_page_search_card_gradient",
                                style: {
                                    backgroundColor: "#FFF"
                                },
                                span: "xl" !== f ? 22 : 20,
                                offset: "xl" !== f ? 1 : 2,
                                children: Object(V.jsx)(Lt.a, {
                                    className: "gfg_home_page_search_card_small_positioning",
                                    offset: "sm" === f || "xs" === f ? 0 : 1,
                                    children: Object(V.jsx)(Lt.a, {
                                        span: "sm" === f || "xs" === f ? 24 : 23,
                                        children: Object(V.jsxs)(Ct.a, {
                                            wrap: !0,
                                            gutter: gs[f] ? gs[f] : 22,
                                            children: [g || !l ? Object(V.jsx)(V.Fragment, {
                                                children: Object(V.jsx)(Lt.a, {
                                                    span: "xl" !== f && "lg" !== f && "md" !== f && "sm" !== f ? 24 : 8,
                                                    children: Object(V.jsxs)(Ct.a, {
                                                        wrap: !0,
                                                        children: ["xl" !== f && "lg" !== f && "md" !== f && "sm" !== f ? "" : Object(V.jsx)(It.a.Avatar, {
                                                            className: "gfg_home_page_search_image_skeleton",
                                                            shape: "square",
                                                            active: !0
                                                        }), Object(V.jsx)(It.a, {
                                                            active: !0
                                                        })]
                                                    })
                                                })
                                            }) : function(e) {
                                                var t = [];
                                                return t.push(Object(V.jsx)(_, {
                                                    post: e,
                                                    image: ms[Math.min(t.length, 2)],
                                                    event_category: "homepage_foryou_card_one"
                                                })), t[0]
                                            }(l), Object(V.jsx)(_, {
                                                type: "localStorage",
                                                post: js[0],
                                                image: "".concat(O, "xs" != f ? "auth-dashboard-uploads/practice.png" : "auth-dashboard-uploads/image-%2821%29.png"),
                                                event_category: "homepage_foryou_card_two"
                                            }), i && i.isLoggedIn ? m || !u ? Object(V.jsx)(V.Fragment, {
                                                children: Object(V.jsx)(Lt.a, {
                                                    span: "xl" !== f && "lg" !== f && "md" !== f && "sm" !== f ? 24 : 8,
                                                    children: Object(V.jsxs)(Ct.a, {
                                                        wrap: !0,
                                                        children: ["xl" !== f && "lg" !== f && "md" !== f && "sm" !== f ? "" : Object(V.jsx)(It.a.Avatar, {
                                                            className: "gfg_home_page_search_image_skeleton",
                                                            shape: "square",
                                                            active: !0
                                                        }), Object(V.jsx)(It.a, {
                                                            active: !0
                                                        })]
                                                    })
                                                })
                                            }) : u.courses.length > 0 ? function(e) {
                                                try {
                                                    var t = [],
                                                        s = Object(ke.a)(e.courses);
                                                    return s.sort(v), t.push(Object(V.jsx)(_, {
                                                        type: "recommendCourse",
                                                        post: s[0],
                                                        image: "".concat(O, "xs" != f ? "auth-dashboard-uploads/learn-img-md.png" : "auth-dashboard-uploads/learn-img-xs.png"),
                                                        event_category: "homepage_foryou_card_one"
                                                    })), t[0]
                                                } catch (c) {
                                                    var a = [];
                                                    return a.push(Object(V.jsx)(_, {
                                                        type: "localStorage",
                                                        post: js[1],
                                                        image: "".concat(O, "xs" != f ? "auth-dashboard-uploads/learn-img-md.png" : "auth-dashboard-uploads/learn-img-xs.png"),
                                                        event_category: "homepage_foryou_card_one"
                                                    })), a[0]
                                                }
                                            }(u) : b ? Object(V.jsx)(_, {
                                                type: "localStorage",
                                                post: b,
                                                image: "".concat(O, "xs" != f ? "auth-dashboard-uploads/learn-img-md.png" : "auth-dashboard-uploads/learn-img-xs.png"),
                                                event_category: "homepage_foryou_card_three"
                                            }) : Object(V.jsx)(V.Fragment, {
                                                children: Object(V.jsx)(Lt.a, {
                                                    span: "xl" !== f && "lg" !== f && "md" !== f && "sm" !== f ? 24 : 8,
                                                    children: Object(V.jsxs)(Ct.a, {
                                                        wrap: !0,
                                                        children: ["xl" !== f && "lg" !== f && "md" !== f && "sm" !== f ? "" : Object(V.jsx)(It.a.Avatar, {
                                                            className: "gfg_home_page_search_image_skeleton",
                                                            shape: "square",
                                                            active: !0
                                                        }), Object(V.jsx)(It.a, {
                                                            active: !0
                                                        })]
                                                    })
                                                })
                                            }) : b ? Object(V.jsx)(_, {
                                                type: "localStorage",
                                                post: b,
                                                image: "".concat(O, "xs" != f ? "auth-dashboard-uploads/learn-img-md.png" : "auth-dashboard-uploads/learn-img-xs.png"),
                                                event_category: "homepage_foryou_card_three"
                                            }) : Object(V.jsx)(V.Fragment, {
                                                children: Object(V.jsx)(Lt.a, {
                                                    span: "xl" !== f && "lg" !== f && "md" !== f && "sm" !== f ? 24 : 8,
                                                    children: Object(V.jsxs)(Ct.a, {
                                                        wrap: !0,
                                                        children: ["xl" !== f && "lg" !== f && "md" !== f && "sm" !== f ? "" : Object(V.jsx)(It.a.Avatar, {
                                                            className: "gfg_home_page_search_image_skeleton",
                                                            shape: "square",
                                                            active: !0
                                                        }), Object(V.jsx)(It.a, {
                                                            active: !0
                                                        })]
                                                    })
                                                })
                                            })]
                                        })
                                    })
                                })
                            })
                        })]
                    })
                },
                ps = function(e) {
                    return Object(V.jsx)(Lt.a, {
                        className: "gfg_home_page_chips_button_header",
                        children: Object(V.jsx)(Gt.a, {
                            className: "gfg_home_page_chips_button",
                            onClick: function(t) {
                                return At(t, "clickopen", "".concat(e.eventCategory))
                            },
                            children: Object(V.jsx)("a", {
                                href: e.url,
                                children: e.name
                            })
                        })
                    })
                },
                bs = function(e) {
                    var t = at(),
                        s = t.data,
                        a = [];
                    if (!t.isLoading && s)
                        for (var c = 0; c < s.length; c++) {
                            var n = s[c],
                                i = n.title.split("-"),
                                r = void 0;
                            r = i[0].length < 16 && i[1] && i[1].length > 0 ? i[0] + "-" + i[1] : i[0], a.push(Object(V.jsx)(ps, {
                                name: r,
                                url: n.url,
                                eventCategory: "homepage_chips_card" + (c + 1)
                            }))
                        }
                    return Object(V.jsx)(Lt.a, {
                        className: "gfg_home_page_chips",
                        children: s ? Object(V.jsx)(Ct.a, {
                            className: "gfg_home_page_chips_header scroll_gfg gfg_home_sroll",
                            wrap: !1,
                            children: a
                        }) : Object(V.jsx)(Lt.a, {
                            style: {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            },
                            children: Object(V.jsxs)(Tt.b, {
                                children: [Object(V.jsx)(It.a.Button, {
                                    active: !0,
                                    size: "default",
                                    className: "gfg_home_page_chips_skeleton"
                                }), Object(V.jsx)(It.a.Button, {
                                    active: !0,
                                    size: "default",
                                    className: "gfg_home_page_chips_skeleton"
                                }), Object(V.jsx)(It.a.Button, {
                                    active: !0,
                                    size: "default",
                                    className: "gfg_home_page_chips_skeleton"
                                })]
                            })
                        })
                    })
                },
                xs = function() {
                    var e = Rt(),
                        t = {
                            lg: "22",
                            xl: "20",
                            md: "22"
                        };
                    return Object(V.jsx)(V.Fragment, {
                        children: Object(V.jsxs)("div", {
                            className: "gfg_home_page_background_base",
                            children: [Object(V.jsxs)("div", {
                                className: "gfg_home_page_search_background",
                                children: [Object(V.jsx)(ds, {
                                    breakpoint: e
                                }), Object(V.jsx)(bs, {
                                    breakpoint: e
                                })]
                            }), Object(V.jsxs)("div", {
                                className: "gfg_home_page_background_white_base",
                                children: [Object(V.jsx)("div", {
                                    className: "gfg_home_page_search_card_mode",
                                    children: Object(V.jsx)(hs, {
                                        breakpoint: e
                                    })
                                }), Object(V.jsx)(Bt, {
                                    breakpoint: e
                                }), Object(V.jsx)(Wt, {
                                    breakPointOffsets: t,
                                    flag: 0
                                }), Object(V.jsx)(Wt, {
                                    breakPointOffsets: t,
                                    flag: 1
                                })]
                            }), Object(V.jsx)(Vt, {}), Object(V.jsx)("div", {
                                className: "gfg_home_page_background_white_base gfg_home_page_potd_mobile_spacing",
                                children: Object(V.jsx)(Mt, {
                                    breakpoint: e
                                })
                            }), Object(V.jsx)(Ft, {}), Object(V.jsx)("div", {
                                className: "gfg_home_page_background_white_base",
                                children: Object(V.jsx)(es, {
                                    breakpoint: e
                                })
                            })]
                        })
                    })
                },
                fs = Object(Q.configureStore)({
                    reducer: Object(z.a)({}, Xe.reducerPath, Xe.reducer),
                    middleware: [J.a, Xe.middleware]
                }),
                Os = [{
                    path: ["/", "/page/:page"],
                    component: function() {
                        return Object(V.jsx)(W.a, {
                            store: fs,
                            children: Object(V.jsx)(xs, {})
                        })
                    },
                    name: "GeeksforGeeks | A computer science portal for geeks",
                    exact: !0,
                    private: !1
                }, {
                    path: "/videos/",
                    component: dt,
                    name: "Videos | GeeksforGeeks",
                    exact: !1,
                    private: !1
                }, {
                    path: "/advertise-with-us/",
                    component: wt,
                    name: "Advertisement | GeeksforGeeks",
                    exact: !1,
                    private: !1
                }],
                _s = Object(r.a)();
            _s.listen((function(e) {
                Et.a.set({
                    page: e.pathname
                }), Et.a.pageview(e.pathname)
            }));
            var vs = function() {
                    return Object(V.jsx)(M, {
                        children: Object(V.jsx)(o.c, {
                            history: _s,
                            children: Object(V.jsxs)(o.d, {
                                children: [Os.map((function(e, t) {
                                    return Object(V.jsx)(o.b, {
                                        exact: e.exact,
                                        path: e.path,
                                        children: e.component
                                    }, t)
                                })), Object(V.jsx)(o.a, {
                                    to: "/"
                                })]
                            })
                        })
                    })
                },
                ks = function(e) {
                    e && e instanceof Function && s.e(3).then(s.bind(null, 477)).then((function(t) {
                        var s = t.getCLS,
                            a = t.getFID,
                            c = t.getFCP,
                            n = t.getLCP,
                            i = t.getTTFB;
                        s(e), a(e), c(e), n(e), i(e)
                    }))
                };
            s(454), s(455);
            be.a.configure({
                autoClose: 4e3,
                draggable: !1,
                hideProgressBar: !0,
                toastClassName: "toast-dark",
                position: "bottom-right",
                className: "fsize-5"
            });
            Et.a.initialize("G-DWCCJLKX3X"), i.a.render(Object(V.jsx)(c.a.StrictMode, {
                children: Object(V.jsx)(vs, {})
            }), document.getElementById("RA-root")), ks()
        }
    },
    [
        [456, 1, 2]
    ]
]);