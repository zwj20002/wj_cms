'use strict'
;(self['webpackChunkvue3_ts_cms'] = self['webpackChunkvue3_ts_cms'] || []).push(
  [
    [894],
    {
      18241: function (e, t, a) {
        a.d(t, {
          Z: function () {
            return W
          }
        })
        var n = a(66252),
          l = a(3577)
        const o = { class: 'page-content' }
        function i(e, t, a, i, r, s) {
          const p = (0, n.up)('el-button'),
            c = (0, n.up)('wj-table')
          return (
            (0, n.wg)(),
            (0, n.iD)('div', o, [
              (0, n.Wm)(
                c,
                (0, n.dG)({ listData: e.dataList }, e.contentTableConfig, {
                  listCount: e.dataCount,
                  page: e.pageInfo,
                  'onUpdate:page': t[0] || (t[0] = (t) => (e.pageInfo = t)),
                  title: e.titles,
                  pageName: e.pageName,
                  onEditClick: e.editClick
                }),
                (0, n.Nv)(
                  {
                    handlerHandler: (0, n.w5)(() => [
                      (0, n.Wm)(
                        p,
                        { class: 'new', onClick: e.handleNewClick },
                        {
                          default: (0, n.w5)(() => [
                            (0, n.Uk)(
                              '新建' + (0, l.toDisplayString)(e.title),
                              1
                            )
                          ]),
                          _: 1
                        },
                        8,
                        ['onClick']
                      )
                    ]),
                    status: (0, n.w5)((e) => [
                      (0, n.Wm)(
                        p,
                        {
                          plain: '',
                          size: 'small',
                          type: e.row.enable ? 'success' : 'danger'
                        },
                        {
                          default: (0, n.w5)(() => [
                            (0, n.Uk)(
                              (0, l.toDisplayString)(
                                e.row.enable ? '启用' : '禁用'
                              ),
                              1
                            )
                          ]),
                          _: 2
                        },
                        1032,
                        ['type']
                      )
                    ]),
                    createAt: (0, n.w5)((t) => [
                      (0, n._)(
                        'span',
                        null,
                        (0, l.toDisplayString)(
                          e.$filters.formatTime(t.row.createAt)
                        ),
                        1
                      )
                    ]),
                    updateAt: (0, n.w5)((t) => [
                      (0, n._)(
                        'span',
                        null,
                        (0, l.toDisplayString)(
                          e.$filters.formatTime(t.row.updateAt)
                        ),
                        1
                      )
                    ]),
                    header: (0, n.w5)(() => []),
                    _: 2
                  },
                  [
                    (0, n.Ko)(e.otherPropSlots, (t) => ({
                      name: t.slotName,
                      fn: (0, n.w5)((a) => [
                        t.slotName
                          ? (0, n.WI)(
                              e.$slots,
                              t.slotName,
                              { key: 0, row: a.row },
                              void 0,
                              !0
                            )
                          : (0, n.kq)('', !0)
                      ])
                    }))
                  ]
                ),
                1040,
                [
                  'listData',
                  'listCount',
                  'page',
                  'title',
                  'pageName',
                  'onEditClick'
                ]
              )
            ])
          )
        }
        var r = a(2262),
          s = a(41411)
        const p = { class: 'wj-table' },
          c = { class: 'header' },
          d = { class: 'title' },
          g = { class: 'handler' },
          u = { class: 'btn' },
          m = { class: 'footer' },
          C = { class: 'pagefooter' }
        function h(e, t, a, o, i, r) {
          const s = (0, n.up)('el-table-column'),
            h = (0, n.up)('el-button'),
            w = (0, n.up)('el-table'),
            f = (0, n.up)('el-pagination')
          return (
            (0, n.wg)(),
            (0, n.iD)('div', p, [
              (0, n._)('div', c, [
                (0, n.WI)(
                  e.$slots,
                  'header',
                  {},
                  () => [
                    (0, n._)(
                      'div',
                      d,
                      (0, l.toDisplayString)(e.title) + '列表',
                      1
                    ),
                    (0, n._)('div', g, [
                      (0, n.WI)(e.$slots, 'handlerHandler', {}, void 0, !0)
                    ])
                  ],
                  !0
                )
              ]),
              (0, n.Wm)(
                w,
                (0, n.dG)(
                  {
                    data: e.listData,
                    border: '',
                    style: { width: '100%' },
                    onSelectionChange: e.handelSelectionChange
                  },
                  e.childrenProps
                ),
                {
                  default: (0, n.w5)(() => [
                    e.showSelectColumn
                      ? ((0, n.wg)(),
                        (0, n.j4)(s, {
                          key: 0,
                          type: 'selection',
                          align: 'center',
                          width: '60'
                        }))
                      : (0, n.kq)('', !0),
                    e.showIndexColumn
                      ? ((0, n.wg)(),
                        (0, n.j4)(s, {
                          key: 1,
                          type: 'index',
                          label: '序号',
                          align: 'center',
                          width: '80 '
                        }))
                      : (0, n.kq)('', !0),
                    ((0, n.wg)(!0),
                    (0, n.iD)(
                      n.HY,
                      null,
                      (0, n.Ko)(
                        e.propList,
                        (t) => (
                          (0, n.wg)(),
                          (0, n.j4)(
                            s,
                            (0, n.dG)({ key: t.prop }, t, {
                              align: 'center',
                              'show-overflow-tooltip': ''
                            }),
                            {
                              default: (0, n.w5)((a) => [
                                (0, n.WI)(
                                  e.$slots,
                                  t.slotName,
                                  { row: a.row },
                                  () => [
                                    (0, n.Uk)(
                                      (0, l.toDisplayString)(a.row[t.prop]),
                                      1
                                    )
                                  ],
                                  !0
                                )
                              ]),
                              _: 2
                            },
                            1040
                          )
                        )
                      ),
                      128
                    )),
                    (0, n.Wm)(
                      s,
                      { label: '操作', align: 'center', width: '120' },
                      {
                        default: (0, n.w5)((t) => [
                          (0, n._)('div', u, [
                            (0, n.Wm)(
                              h,
                              {
                                type: 'primary',
                                icon: 'Edit',
                                circle: '',
                                onClick: (a) => e.handleEditClick(t.row)
                              },
                              null,
                              8,
                              ['onClick']
                            ),
                            (0, n.Wm)(
                              h,
                              {
                                type: 'danger',
                                icon: 'Delete',
                                circle: '',
                                onClick: (a) => e.handleDeleteClick(t.row)
                              },
                              null,
                              8,
                              ['onClick']
                            )
                          ])
                        ]),
                        _: 1
                      }
                    )
                  ]),
                  _: 3
                },
                16,
                ['data', 'onSelectionChange']
              ),
              (0, n._)('div', m, [
                (0, n.WI)(
                  e.$slots,
                  'footer',
                  {},
                  () => [
                    (0, n._)('div', C, [
                      (0, n.Wm)(
                        f,
                        {
                          'current-page': e.page.currentPage,
                          'onUpdate:current-page':
                            t[0] || (t[0] = (t) => (e.page.currentPage = t)),
                          'page-size': e.page.pageSize,
                          'onUpdate:page-size':
                            t[1] || (t[1] = (t) => (e.page.pageSize = t)),
                          'page-sizes': [10, 20, 30],
                          small: !1,
                          disabled: !1,
                          background: !1,
                          layout: 'total, sizes, prev, pager, next, jumper',
                          total: e.listCount,
                          onSizeChange: e.handleSizeChange,
                          onCurrentChange: e.handleCurrentChange
                        },
                        null,
                        8,
                        [
                          'current-page',
                          'page-size',
                          'total',
                          'onSizeChange',
                          'onCurrentChange'
                        ]
                      )
                    ])
                  ],
                  !0
                )
              ])
            ])
          )
        }
        var w = (0, n.aZ)({
            props: {
              title: { type: String, default: '' },
              listData: { type: Array, required: !0 },
              listCount: { type: Number, dafault: 0 },
              pageName: { type: String, required: !0 },
              propList: { type: Array, required: !0 },
              showIndexColumn: { type: Boolean, default: !1 },
              showSelectColumn: { type: Boolean, default: !1 },
              page: {
                type: Object,
                default: () => ({ currentPage: 0, pageSize: 10 })
              },
              childrenProps: { type: Object, default: () => ({}) }
            },
            emits: ['selectionChange', 'update:page', 'editClick'],
            setup(e, { emit: t }) {
              const a = (e) => {
                  t('selectionChange', e)
                },
                n = (a) => {
                  t('update:page', { ...e.page, pageSize: a })
                },
                l = (a) => {
                  t('update:page', { ...e.page, currentPage: a }),
                    console.log({ ...e.page })
                },
                o = (0, s.oR)(),
                i = (t) => {
                  const a = confirm('确定删除该数据吗？')
                  console.log(t),
                    a &&
                      o.dispatch('system/deletePageDataAction', {
                        pageName: e.pageName,
                        id: t.id
                      })
                },
                r = (e) => {
                  t('editClick', e)
                }
              return {
                handelSelectionChange: a,
                handleSizeChange: n,
                handleCurrentChange: l,
                handleDeleteClick: i,
                handleEditClick: r
              }
            }
          }),
          f = a(83744)
        const y = (0, f.Z)(w, [
          ['render', h],
          ['__scopeId', 'data-v-39abefb8']
        ])
        var k = y,
          b = k,
          v = (0, n.aZ)({
            components: { WjTable: b },
            props: {
              title: { type: String, default: '' },
              contentTableConfig: { type: Object, required: !0 },
              pageName: { type: String, required: !0 }
            },
            emits: ['newBtnClick', 'editBtnClick'],
            setup(e, { emit: t }) {
              const a = (0, r.ref)(e.title),
                l = (0, s.oR)(),
                o = (0, r.ref)({ currentPage: 1, pageSize: 10 })
              ;(0, n.YP)(o, () => {
                i()
              })
              const i = (t = {}) => {
                const { formOriginData: a, ...n } = t
                l.dispatch('system/getPageListAction', {
                  pageName: e.pageName,
                  queryInfo: {
                    offset: o.value.currentPage * o.value.pageSize - 10,
                    size: o.value.pageSize,
                    ...n
                  }
                })
              }
              i()
              const p = (0, n.Fl)(() =>
                  l.getters['system/pageListData'](e.pageName)
                ),
                c = (0, n.Fl)(() =>
                  l.getters['system/pageListCount'](e.pageName)
                ),
                d = e.contentTableConfig?.propList.filter(
                  (e) =>
                    'status' !== e.slotName &&
                    'createAt' !== e.slotName &&
                    'updateAt' !== e.slotName &&
                    'handler' !== e.slotName
                ),
                g = () => {
                  t('newBtnClick')
                },
                u = (e) => {
                  t('editBtnClick', e)
                }
              return {
                dataList: p,
                getPageData: i,
                dataCount: c,
                pageInfo: o,
                titles: a,
                otherPropSlots: d,
                handleNewClick: g,
                editClick: u
              }
            }
          })
        const S = (0, f.Z)(v, [
          ['render', i],
          ['__scopeId', 'data-v-401cec83']
        ])
        var N = S,
          W = N
      },
      11894: function (e, t, a) {
        a.r(t),
          a.d(t, {
            default: function () {
              return g
            }
          })
        var n = a(66252),
          l = a(3577)
        const o = { class: 'goods' }
        function i(e, t, a, i, r, s) {
          const p = (0, n.up)('el-image'),
            c = (0, n.up)('PageContent')
          return (
            (0, n.wg)(),
            (0, n.iD)('div', o, [
              (0, n.Wm)(
                c,
                {
                  contentTableConfig: e.contentTableConfig,
                  pageName: 'goods',
                  title: '商品'
                },
                {
                  image: (0, n.w5)((e) => [
                    (0, n.Wm)(
                      p,
                      {
                        style: { width: '60px', height: '60px' },
                        src: e.row.imgUrl,
                        fit: 'cover',
                        'preview-src-list': [e.row.imgUrl],
                        'preview-teleported': ''
                      },
                      null,
                      8,
                      ['src', 'preview-src-list']
                    )
                  ]),
                  oldPrice: (0, n.w5)((e) => [
                    (0, n.Uk)((0, l.toDisplayString)('￥' + e.row.oldPrice), 1)
                  ]),
                  _: 1
                },
                8,
                ['contentTableConfig']
              )
            ])
          )
        }
        var r = a(18241)
        const s = {
          title: '商品列表',
          propList: [
            { prop: 'name', label: '商品名称', minWidth: '80' },
            {
              prop: 'oldPrice',
              label: '原价格',
              minWidth: '80',
              slotName: 'oldPrice'
            },
            { prop: 'newPrice', label: '现价格', minWidth: '80' },
            {
              prop: 'imgUrl',
              label: '商品图片',
              minWidth: '100',
              slotName: 'image'
            },
            {
              prop: 'status',
              label: '状态',
              minWidth: '100',
              slotName: 'status'
            },
            {
              prop: 'createAt',
              label: '创建时间',
              minWidth: '150',
              slotName: 'createAt'
            },
            {
              prop: 'updateAt',
              label: '更新时间',
              minWidth: '150',
              slotName: 'updateAt'
            }
          ],
          showIndexColumn: !0,
          showSelectColumn: !0
        }
        var p = (0, n.aZ)({
            name: 'goods',
            components: { PageContent: r.Z },
            setup() {
              return { contentTableConfig: s }
            }
          }),
          c = a(83744)
        const d = (0, c.Z)(p, [['render', i]])
        var g = d
      }
    }
  ]
)
//# sourceMappingURL=894.3a0977a6.js.map
