'use strict'
;(self['webpackChunkvue3_ts_cms'] = self['webpackChunkvue3_ts_cms'] || []).push(
  [
    [982],
    {
      59187: function (e, t, n) {
        n.r(t),
          n.d(t, {
            default: function () {
              return h
            }
          })
        var a = n(66252)
        const l = { class: 'role' }
        function o(e, t, n, o, r, i) {
          const c = (0, a.up)('PageSearch'),
            p = (0, a.up)('PageContent')
          return (
            (0, a.wg)(),
            (0, a.iD)('div', l, [
              (0, a.Wm)(c, { searchFormConfig: e.searchFormConfig }, null, 8, [
                'searchFormConfig'
              ]),
              (0, a.Wm)(
                p,
                {
                  contentTableConfig: e.contentTableConfig,
                  pageName: 'role',
                  title: '角色'
                },
                null,
                8,
                ['contentTableConfig']
              )
            ])
          )
        }
        var r = n(70852),
          i = n(18241)
        const c = {
            formItems: [
              {
                field: 'name',
                type: 'input',
                label: '角色名称',
                placeholder: '请输入角色名称'
              },
              {
                field: 'intro',
                type: 'input',
                label: '权限介绍',
                placeholder: '请输入权限介绍'
              },
              {
                field: 'createData',
                type: 'datepicker',
                label: '创建时间',
                otherOptions: {
                  startPlaceholder: '开始时间',
                  endPlaceholder: '结束时间',
                  type: 'daterange'
                }
              }
            ],
            labelWidth: '120px',
            itemStyle: { padding: '10px 40px' }
          },
          p = {
            title: '用户列表',
            propList: [
              { prop: 'name', label: '角色名', minWidth: '100' },
              { prop: 'intro', label: '权限介绍', minWidth: '100' },
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
        var s = n(53671),
          d = (0, a.aZ)({
            name: 'role',
            components: { PageContent: i.Z, PageSearch: r.Z },
            setup() {
              const [e, t, n] = (0, s.Y)()
              return {
                contentTableConfig: p,
                searchFormConfig: c,
                handleResetClick: t,
                handleQueryClick: n,
                pageContentRef: e
              }
            }
          }),
          u = n(83744)
        const m = (0, u.Z)(d, [['render', o]])
        var h = m
      }
    }
  ]
)
//# sourceMappingURL=982.c159e507.js.map
