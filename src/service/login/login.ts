import zlRequest from '..'
import { IAccount, IDataType, ILoginResult } from './types'

enum loginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', // /user/1
  UserMenus = '/role/' // role/1/menu
}

export function accountLoginRequest(account: IAccount) {
  return zlRequest.post<IDataType<ILoginResult>>({
    url: loginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return zlRequest.get<IDataType>({
    url: loginAPI.LoginUserInfo + id,
    showLoading: false
  })
}

export function requestUserMenusByRoleId(id: number) {
  return zlRequest.get<IDataType>({
    url: loginAPI.UserMenus + id + '/menu',
    showLoading: false
  })
}
