//编写规则
export const rules = {
  name: [
    {
      //必选项
      required: true,
      //不满足时进行提示的信息
      message: '用户名不能为空哦~',
      //触发方式
      trigger: 'blur'
    },
    {
      //字符长度
      pattern: /^[a-z0-9]{4,10}$/,
      //不满足规则时进行提示的信息
      message: '用户名必须是4-10个字母或者数字~',
      //条件触发时的方式
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码不能为空哦~',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码必须是3位以上的字母或者数字~',
      trigger: 'blur'
    }
  ]
}
