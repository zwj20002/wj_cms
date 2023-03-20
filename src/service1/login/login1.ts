import wjResquest from '../index'
import { IAccount } from './type'
enum LoginAPI {
  accountLogin = '/login'
}
export function accountLoginRequest(account: IAccount) {
  wjResquest.post({
    url: LoginAPI.accountLogin,
    data: account
  })
}
