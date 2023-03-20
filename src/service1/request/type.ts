import type { AxiosRequestConfig, AxiosResponse } from 'axios'
export interface WJRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (error: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorsCatch?: (error: any) => any
}

export interface WJRequestConfig extends AxiosRequestConfig {
  interceptors?: WJRequestInterceptors
  showLoading?: boolean
}
