'use strict'
;(self['webpackChunkvue3_ts_cms'] = self['webpackChunkvue3_ts_cms'] || []).push(
  [
    [515],
    {
      83717: function (e, l, n) {
        n.r(l),
          n.d(l, {
            default: function () {
              return $
            }
          })
        var a = n(66252)
        const t = { class: 'main' },
          s = { class: 'page-info' }
        function u(e, l, n, u, o, d) {
          const c = (0, a.up)('NavMenu'),
            i = (0, a.up)('el-aside'),
            r = (0, a.up)('NavHeader'),
            p = (0, a.up)('el-header'),
            m = (0, a.up)('router-view'),
            f = (0, a.up)('el-main'),
            w = (0, a.up)('el-container')
          return (
            (0, a.wg)(),
            (0, a.iD)('div', t, [
              (0, a.Wm)(
                w,
                { class: '=main-content' },
                {
                  default: (0, a.w5)(() => [
                    (0, a.Wm)(
                      i,
                      { width: e.isCollapse ? '60px' : '210px' },
                      {
                        default: (0, a.w5)(() => [
                          (0, a.Wm)(c, { collapse: e.isCollapse }, null, 8, [
                            'collapse'
                          ])
                        ]),
                        _: 1
                      },
                      8,
                      ['width']
                    ),
                    (0, a.Wm)(
                      w,
                      { class: 'page' },
                      {
                        default: (0, a.w5)(() => [
                          (0, a.Wm)(
                            p,
                            { class: 'page-header' },
                            {
                              default: (0, a.w5)(() => [
                                (0, a.Wm)(
                                  r,
                                  { onFoldChange: e.handleFoldChange },
                                  null,
                                  8,
                                  ['onFoldChange']
                                )
                              ]),
                              _: 1
                            }
                          ),
                          (0, a.Wm)(
                            f,
                            { class: 'page-content' },
                            {
                              default: (0, a.w5)(() => [
                                (0, a._)('div', s, [(0, a.Wm)(m)])
                              ]),
                              _: 1
                            }
                          )
                        ]),
                        _: 1
                      }
                    )
                  ]),
                  _: 1
                }
              )
            ])
          )
        }
        var o = n(2262),
          d = n(3577),
          c = n.p + 'img/logo.a21dcd72.svg'
        const i = (e) => (
            (0, a.dD)('data-v-55d5cc6d'), (e = e()), (0, a.Cn)(), e
          ),
          r = { class: 'nav-menu' },
          p = { class: 'logo' },
          m = i(() =>
            (0, a._)('img', { src: c, alt: 'logo', class: 'img' }, null, -1)
          ),
          f = { key: 0, class: 'title' },
          w = { key: 0, class: 'subitem.icon' },
          g = { key: 0, class: 'item.icon' }
        function v(e, l, n, t, s, u) {
          const o = (0, a.up)('el-icon'),
            c = (0, a.up)('el-menu-item'),
            i = (0, a.up)('el-sub-menu'),
            v = (0, a.up)('el-menu')
          return (
            (0, a.wg)(),
            (0, a.iD)('div', r, [
              (0, a._)('div', p, [
                m,
                e.collapse
                  ? (0, a.kq)('', !0)
                  : ((0, a.wg)(), (0, a.iD)('span', f, 'Vue3+TS'))
              ]),
              (0, a.Wm)(
                v,
                {
                  'default-active': e.defaultvalue,
                  class: 'el-menu-vertical-demo',
                  collapse: e.collapse,
                  'background-color': '#0c2135',
                  'text-color': '#b7bdc3',
                  'active-text-color': '#0a60bd',
                  'collapse-transition': !1
                },
                {
                  default: (0, a.w5)(() => [
                    ((0, a.wg)(!0),
                    (0, a.iD)(
                      a.HY,
                      null,
                      (0, a.Ko)(
                        e.userMenus,
                        (l, n) => (
                          (0, a.wg)(),
                          (0, a.iD)(
                            a.HY,
                            { key: l.id },
                            [
                              1 === l.type
                                ? ((0, a.wg)(),
                                  (0, a.j4)(
                                    i,
                                    { key: 0, index: l.id + '' },
                                    {
                                      title: (0, a.w5)(() => [
                                        (0, a.Wm)(
                                          o,
                                          null,
                                          {
                                            default: (0, a.w5)(() => [
                                              ((0, a.wg)(),
                                              (0, a.j4)((0, a.LL)(e.Icons[n])))
                                            ]),
                                            _: 2
                                          },
                                          1024
                                        ),
                                        (0, a._)(
                                          'span',
                                          null,
                                          (0, d.toDisplayString)(l.name),
                                          1
                                        )
                                      ]),
                                      default: (0, a.w5)(() => [
                                        ((0, a.wg)(!0),
                                        (0, a.iD)(
                                          a.HY,
                                          null,
                                          (0, a.Ko)(
                                            l.children,
                                            (l) => (
                                              (0, a.wg)(),
                                              (0, a.j4)(
                                                c,
                                                {
                                                  key: l.id,
                                                  index: l.id + '',
                                                  onClick: (n) =>
                                                    e.handleMenuItemClick(l)
                                                },
                                                {
                                                  default: (0, a.w5)(() => [
                                                    l.icon
                                                      ? ((0, a.wg)(),
                                                        (0, a.iD)('i', w))
                                                      : (0, a.kq)('', !0),
                                                    (0, a._)(
                                                      'span',
                                                      null,
                                                      (0, d.toDisplayString)(
                                                        l.name
                                                      ),
                                                      1
                                                    )
                                                  ]),
                                                  _: 2
                                                },
                                                1032,
                                                ['index', 'onClick']
                                              )
                                            )
                                          ),
                                          128
                                        ))
                                      ]),
                                      _: 2
                                    },
                                    1032,
                                    ['index']
                                  ))
                                : 2 === l.type
                                ? ((0, a.wg)(),
                                  (0, a.j4)(
                                    c,
                                    { key: 1, index: l.id + '' },
                                    {
                                      default: (0, a.w5)(() => [
                                        l.icon
                                          ? ((0, a.wg)(), (0, a.iD)('i', g))
                                          : (0, a.kq)('', !0),
                                        (0, a._)(
                                          'span',
                                          null,
                                          (0, d.toDisplayString)(l.name),
                                          1
                                        )
                                      ]),
                                      _: 2
                                    },
                                    1032,
                                    ['index']
                                  ))
                                : (0, a.kq)('', !0)
                            ],
                            64
                          )
                        )
                      ),
                      128
                    ))
                  ]),
                  _: 1
                },
                8,
                ['default-active', 'collapse']
              )
            ])
          )
        }
        n(57658)
        var k = n(41411),
          _ = n(42119),
          h = n(46781),
          b = (0, a.aZ)({
            props: { collapse: { type: Boolean, default: !1 } },
            setup() {
              const e = (0, k.oR)(),
                l = (0, a.Fl)(() => e.state.login.userMenus),
                n = (0, _.tv)(),
                t = (0, _.yj)(),
                s = t.path,
                u = (0, h.mR)(l.value, s),
                d = (0, o.ref)(u.id + ''),
                c = (e) => {
                  n.push({ path: e.url ?? '/not-found' })
                },
                i = ['Tickets', 'Tools', 'ShoppingBag', 'ChatDotRound']
              return {
                userMenus: l,
                Icons: i,
                defaultvalue: d,
                menus: u,
                handleMenuItemClick: c
              }
            }
          }),
          C = n(83744)
        const y = (0, C.Z)(b, [
          ['render', v],
          ['__scopeId', 'data-v-55d5cc6d']
        ])
        var W = y,
          D = W
        const x = { class: 'nav-header' },
          F = { class: 'content' }
        function Z(e, l, n, t, s, u) {
          const o = (0, a.up)('Fold'),
            d = (0, a.up)('el-icon'),
            c = (0, a.up)('Expand'),
            i = (0, a.up)('WjBreadcrumb'),
            r = (0, a.up)('user-info')
          return (
            (0, a.wg)(),
            (0, a.iD)('div', x, [
              e.isFold
                ? (0, a.kq)('', !0)
                : ((0, a.wg)(),
                  (0, a.j4)(
                    d,
                    {
                      key: 0,
                      class: 'fold-menu',
                      size: '25px',
                      onClick: e.handleFoldClick
                    },
                    { default: (0, a.w5)(() => [(0, a.Wm)(o)]), _: 1 },
                    8,
                    ['onClick']
                  )),
              e.isFold
                ? ((0, a.wg)(),
                  (0, a.j4)(
                    d,
                    {
                      key: 1,
                      size: '25px',
                      class: 'fold-menu',
                      onClick: e.handleFoldClick
                    },
                    { default: (0, a.w5)(() => [(0, a.Wm)(c)]), _: 1 },
                    8,
                    ['onClick']
                  ))
                : (0, a.kq)('', !0),
              (0, a._)('div', F, [
                (0, a.Wm)(i, { breadcrumbs: e.breadcrumbs }, null, 8, [
                  'breadcrumbs'
                ]),
                (0, a.Wm)(r)
              ])
            ])
          )
        }
        const j = { class: 'flex flex-wrap items-center' },
          I = { class: 'el-dropdown-link' },
          M = { class: 'user' },
          H = (0, a.Uk)('退出登录'),
          S = (0, a.Uk)('用户信息'),
          q = (0, a.Uk)('系统管理')
        function R(e, l, n, t, s, u) {
          const o = (0, a.up)('el-avatar'),
            c = (0, a.up)('el-dropdown-item'),
            i = (0, a.up)('el-dropdown-menu'),
            r = (0, a.up)('el-dropdown')
          return (
            (0, a.wg)(),
            (0, a.iD)('div', null, [
              (0, a._)('div', j, [
                (0, a.Wm)(r, null, {
                  dropdown: (0, a.w5)(() => [
                    (0, a.Wm)(i, null, {
                      default: (0, a.w5)(() => [
                        (0, a.Wm)(
                          c,
                          { onClick: e.layout },
                          { default: (0, a.w5)(() => [H]), _: 1 },
                          8,
                          ['onClick']
                        ),
                        (0, a.Wm)(c, null, {
                          default: (0, a.w5)(() => [S]),
                          _: 1
                        }),
                        (0, a.Wm)(c, null, {
                          default: (0, a.w5)(() => [q]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  default: (0, a.w5)(() => [
                    (0, a._)('span', I, [
                      (0, a.Wm)(o, {
                        size: 'default',
                        src: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
                      }),
                      (0, a._)('span', M, (0, d.toDisplayString)(e.name), 1)
                    ])
                  ]),
                  _: 1
                })
              ])
            ])
          )
        }
        var U = n(13224),
          B = n(53824),
          N = (0, a.aZ)({
            setup() {
              const e = (0, k.oR)(),
                l = (0, a.Fl)(() => e.state.login.userInfo.name),
                n = () => {
                  U.Z.deleteCache('token'), B.Z.push('/login')
                }
              return { name: l, layout: n }
            }
          })
        const Y = (0, C.Z)(N, [
          ['render', R],
          ['__scopeId', 'data-v-83239d02']
        ])
        var z = Y
        const K = { class: 'breadcrumb' }
        function T(e, l, n, t, s, u) {
          const o = (0, a.up)('el-breadcrumb-item'),
            c = (0, a.up)('el-breadcrumb')
          return (
            (0, a.wg)(),
            (0, a.iD)('div', K, [
              (0, a.Wm)(
                c,
                { separator: '/' },
                {
                  default: (0, a.w5)(() => [
                    ((0, a.wg)(!0),
                    (0, a.iD)(
                      a.HY,
                      null,
                      (0, a.Ko)(
                        e.breadcrumbs,
                        (e) => (
                          (0, a.wg)(),
                          (0, a.j4)(
                            o,
                            { key: e.name, to: { path: e.path } },
                            {
                              default: (0, a.w5)(() => [
                                (0, a.Uk)((0, d.toDisplayString)(e.name), 1)
                              ]),
                              _: 2
                            },
                            1032,
                            ['to']
                          )
                        )
                      ),
                      128
                    ))
                  ]),
                  _: 1
                }
              )
            ])
          )
        }
        var L = (0, a.aZ)({
          props: { breadcrumbs: { type: Array } },
          setup() {
            return {}
          }
        })
        const A = (0, C.Z)(L, [['render', T]])
        var E = A,
          V = E,
          G = (0, a.aZ)({
            components: { UserInfo: z, WjBreadcrumb: V },
            emit: ['foldChange'],
            setup(e, { emit: l }) {
              const n = (0, o.ref)(!1),
                t = () => {
                  ;(n.value = !n.value), l('foldChange', n.value)
                },
                s = (0, k.oR)(),
                u = (0, a.Fl)(() => {
                  const e = s.state.login.userMenus,
                    l = (0, _.yj)(),
                    n = l.path
                  return (0, h.CH)(e, n)
                })
              return { isFold: n, breadcrumbs: u, handleFoldClick: t }
            }
          })
        const J = (0, C.Z)(G, [
          ['render', Z],
          ['__scopeId', 'data-v-45e9e785']
        ])
        var O = J,
          P = O,
          Q = (0, a.aZ)({
            components: { NavMenu: D, NavHeader: P },
            setup() {
              const e = (0, o.ref)(!1),
                l = (l) => {
                  e.value = l
                }
              return { isCollapse: e, handleFoldChange: l }
            }
          })
        const X = (0, C.Z)(Q, [
          ['render', u],
          ['__scopeId', 'data-v-fda91b16']
        ])
        var $ = X
      }
    }
  ]
)
//# sourceMappingURL=515.9015618f.js.map
