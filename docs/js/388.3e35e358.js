'use strict'
;(self['webpackChunkvue3_ts_cms'] = self['webpackChunkvue3_ts_cms'] || []).push(
  [
    [388],
    {
      91913: function (e, l, a) {
        a.r(l),
          a.d(l, {
            default: function () {
              return A
            }
          })
        var t = a(66252)
        const o = { class: 'user' },
          n = { class: 'search' },
          i = { class: 'content' }
        function d(e, l, a, d, r, p) {
          const s = (0, t.up)('PageSearch'),
            c = (0, t.up)('pageContent'),
            f = (0, t.up)('pageModal')
          return (
            (0, t.wg)(),
            (0, t.iD)('div', o, [
              (0, t._)('div', n, [
                (0, t.Wm)(
                  s,
                  {
                    searchFormConfig: e.searchFormConfig,
                    onResetBtnClick: e.handleResetClick,
                    onQueryBtnClick: e.handleQueryClick
                  },
                  null,
                  8,
                  ['searchFormConfig', 'onResetBtnClick', 'onQueryBtnClick']
                )
              ]),
              (0, t._)('div', i, [
                (0, t.Wm)(
                  c,
                  {
                    ref: 'pageContentRef',
                    contentTableConfig: e.contentTableConfig,
                    pageName: 'user',
                    title: '用户',
                    onNewBtnClick: e.handleNewData,
                    onEditBtnClick: e.handleEditData
                  },
                  null,
                  8,
                  ['contentTableConfig', 'onNewBtnClick', 'onEditBtnClick']
                ),
                (0, t.Wm)(
                  f,
                  {
                    modalConfig: e.modalConfigRef,
                    ref: 'pageModalRef',
                    defaultInfo: e.defaultInfo,
                    pageName: 'user'
                  },
                  null,
                  8,
                  ['modalConfig', 'defaultInfo']
                )
              ])
            ])
          )
        }
        var r = a(70852),
          p = a(18241)
        const s = { class: 'page-modal' },
          c = { class: 'dialog-footer' },
          f = (0, t.Uk)('取消'),
          m = (0, t.Uk)(' 确定 ')
        function u(e, l, a, o, n, i) {
          const d = (0, t.up)('WjForm'),
            r = (0, t.up)('el-button'),
            p = (0, t.up)('el-dialog')
          return (
            (0, t.wg)(),
            (0, t.iD)('div', s, [
              (0, t.Wm)(
                p,
                {
                  modelValue: e.dialogVisible,
                  'onUpdate:modelValue':
                    l[2] || (l[2] = (l) => (e.dialogVisible = l)),
                  title: '新建用户',
                  width: '30%',
                  center: '',
                  'destroy-on-close': ''
                },
                {
                  footer: (0, t.w5)(() => [
                    (0, t._)('span', c, [
                      (0, t.Wm)(
                        r,
                        {
                          onClick:
                            l[1] || (l[1] = (l) => (e.dialogVisible = !1))
                        },
                        { default: (0, t.w5)(() => [f]), _: 1 }
                      ),
                      (0, t.Wm)(
                        r,
                        { type: 'primary', onClick: e.handleConfirmClick },
                        { default: (0, t.w5)(() => [m]), _: 1 },
                        8,
                        ['onClick']
                      )
                    ])
                  ]),
                  default: (0, t.w5)(() => [
                    (0, t.Wm)(
                      d,
                      (0, t.dG)(e.modalConfig, {
                        'form-data': e.formData,
                        modelValue: e.formData,
                        'onUpdate:modelValue':
                          l[0] || (l[0] = (l) => (e.formData = l))
                      }),
                      null,
                      16,
                      ['form-data', 'modelValue']
                    )
                  ]),
                  _: 1
                },
                8,
                ['modelValue']
              )
            ])
          )
        }
        var g = a(2262),
          h = a(85447),
          C = a(33907),
          b = (0, t.aZ)({
            components: { WjForm: h.Z },
            props: {
              modalConfig: { type: Object, required: !0 },
              defaultInfo: { type: Object, default: () => ({}) },
              pageName: { type: String, require: !0 }
            },
            setup(e) {
              const l = (0, g.ref)(!1),
                a = (0, g.ref)({})
              ;(0, t.YP)(
                () => e.defaultInfo,
                (l) => {
                  for (const t of e.modalConfig.formItems)
                    a.value[`${t.field}`] = l[`${t.field}`]
                }
              )
              const o = (0, C.oR)(),
                n = () => {
                  ;(l.value = !1),
                    Object.keys(e.defaultInfo).length
                      ? (console.log('编辑用户'),
                        o.dispatch('system/editPageDataAction', {
                          pageName: e.pageName,
                          editData: { ...a.value },
                          id: e.defaultInfo.id
                        }))
                      : (console.log('新建用户'),
                        o.dispatch('system/createPageDataAction', {
                          pageName: e.pageName,
                          newData: { ...a.value }
                        }))
                }
              return { dialogVisible: l, formData: a, handleConfirmClick: n }
            }
          }),
          y = a(83744)
        const v = (0, y.Z)(b, [['render', u]])
        var k = v,
          w = k
        const I = {
            formItems: [
              {
                field: 'id',
                type: 'input',
                label: 'id',
                placeholder: '请输入用户id'
              },
              {
                field: 'name',
                type: 'input',
                label: '用户名',
                placeholder: '请输入用户名'
              },
              {
                field: 'realname ',
                type: 'input',
                label: '真实姓名',
                placeholder: '请输入真实姓名'
              },
              {
                field: 'cellphone ',
                type: 'input',
                label: '电话号码',
                placeholder: '请输入电话号码'
              },
              {
                field: 'enable',
                type: 'select',
                label: '用户状态',
                placeholder: '请选择用户状态 ',
                options: [
                  { title: '启用', value: 1 },
                  { title: '禁用', value: 0 }
                ]
              },
              {
                field: 'createAt',
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
          W = {
            title: '用户列表',
            propList: [
              { prop: 'name', label: '用户名', minWidth: '100' },
              { prop: 'realname', label: '真实姓名', minWidth: '100' },
              { prop: 'cellphone', label: '手机号码', minWidth: '100' },
              {
                prop: 'enable',
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
          },
          D = {
            formItems: [
              {
                field: 'name',
                type: 'input',
                label: '用户名',
                placeholder: '请输入用户名'
              },
              {
                field: 'realname ',
                type: 'input',
                label: '真实姓名',
                placeholder: '请输入真实姓名'
              },
              {
                field: 'password',
                type: 'password',
                label: '用户密码',
                placeholder: '请输入用户密码',
                isHidden: !1
              },
              {
                field: 'cellphone ',
                type: 'input',
                label: '电话号码',
                placeholder: '请输入电话号码'
              },
              {
                field: 'departmentId',
                type: 'select',
                label: '选择部门',
                placeholder: '请选择部门 ',
                options: []
              },
              {
                field: 'roleId',
                type: 'select',
                label: '选择角色',
                placeholder: '请选择角色 ',
                options: []
              }
            ],
            colLayout: { span: 24 },
            itemStyle: {}
          }
        var N = a(53671)
        function R(e, l) {
          const a = (0, g.ref)(),
            t = (0, g.ref)({}),
            o = () => {
              ;(t.value = {}), a.value && (a.value.dialogVisible = !0), e && e()
            },
            n = (e) => {
              ;(t.value = { ...e }),
                console.log(e),
                a.value && (a.value.dialogVisible = !0),
                l && l()
            }
          return [o, a, n, t]
        }
        var V = a(41411),
          _ = (0, t.aZ)({
            name: 'user',
            components: { PageSearch: r.Z, pageContent: p.Z, pageModal: w },
            setup() {
              const [e, l, a] = (0, N.Y)(),
                o = () => {
                  const e = D.formItems.find((e) => 'password' === e.field)
                  e.isHidden = !1
                },
                n = () => {
                  const e = D.formItems.find((e) => 'password' === e.field)
                  ;(e.isHidden = !0), console.log('123')
                },
                i = (0, V.oR)(),
                d = (0, t.Fl)(() => {
                  const e = D.formItems.find((e) => 'departmentId' === e.field)
                  e.options = i.state.entireDepartment.map((e) => ({
                    title: e.name,
                    value: e.id
                  }))
                  const l = D.formItems.find((e) => 'roleId' === e.field)
                  return (
                    (l.options = i.state.entireRole.map((e) => ({
                      title: e.name,
                      value: e.id
                    }))),
                    D
                  )
                }),
                [r, p, s, c] = R(o, n)
              return {
                searchFormConfig: I,
                contentTableConfig: W,
                handleResetClick: l,
                handleQueryClick: a,
                pageContentRef: e,
                modalConfigRef: d,
                handleNewData: r,
                handleEditData: s,
                pageModalRef: p,
                defaultInfo: c
              }
            }
          })
        const B = (0, y.Z)(_, [['render', d]])
        var A = B
      }
    }
  ]
)
//# sourceMappingURL=388.3e35e358.js.map
