import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { WJRequestInterceptors, WJRequestConfig } from './type'
import 'element-plus/dist/index.css'
import { ElLoading } from 'element-plus/lib/index'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading.js'
const DEAFULT_LOADING = true
class WJRequest {
  instance: AxiosInstance
  interceptors?: WJRequestInterceptors
  showLoading: boolean
  loading?: LoadingInstance
  constructor(config: WJRequestConfig) {
    //创建axios实例
    this.instance = axios.create(config)
    //保存基本信息
    this.showLoading = config.showLoading ?? true
    this.interceptors = config.interceptors

    //从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorsCatch
    )
    this.instance.interceptors.request.use(
      this.interceptors?.responseInterceptorsCatch,
      this.interceptors?.responseInterceptor
    )
    //添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // console.log('所有的实例都有的拦截器：请求成功拦截')
        if (this.showLoading) {
          // setTimeout(() => {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据...',
            background: 'rgba(0,0,0,0.5)'
          })
          // }, 3000)
        }
        return config
      },
      (err) => {
        // console.log('所有的实例都有的拦截器：请求失败拦截')

        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        // console.log('所有的实例都有的拦截器：响应成功拦截')

        //将我们的loading进行移除
        // setTimeout(() => {
        this.loading?.close()
        // }, 3000)

        const data = res.data
        if (data.returnCode === '-1001') {
          // console.log('请求失败，错误信息')
        } else {
          return data
        }
      },
      (err) => {
        // console.log('所有的实例都有的拦截器：响应失败拦截')

        this.loading?.close()

        //例子：判断不同的httpErrorCode显示不同的错误信息
        if (err.response.status === 404) {
          // console.log('404的错误~')
        }
        return err
      }
    )
  }
  request<T>(config: WJRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      //单个请求对请求config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      //判断是否要显示loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<T, any>(config)
        .then((res) => {
          //单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          // console.log(res)

          //将showLoading的值设置为true 这样不会影响下一个请求
          this.showLoading = DEAFULT_LOADING
          //将结果resolve出去
          resolve(res)
        })
        .catch((err) => {
          //将showLoading的值设置为true 这样不会影响下一个请求
          this.showLoading = DEAFULT_LOADING
          reject(err)
          return err
        })
    })
  }

  get<T>(config: WJRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }
  post<T>(config: WJRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }
  delete<T>(config: WJRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'DELETE' })
  }
  patch<T>(config: WJRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default WJRequest
