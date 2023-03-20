import ZLRequest from './request'
import { TIME_OUT, BASE_URL } from './request/config'

import localeCache from '@/utils/cache'

const zlRequest = new ZLRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = localeCache.getCache('token')
      if (token) {
        config.headers!.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestIntercetorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseIntercetorCatch: (err) => {
      return err
    }
  }
})
export default zlRequest
