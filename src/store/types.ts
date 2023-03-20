import { ILoginState } from './login/types'
import { ISystemState } from './main/system/types'
import { IDashboardState } from './main/analysis/type'
export interface IRootState {
  name: string
  age: number
  entireDepartment: any[]
  entireRole: any[]
}
export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
  dashboard: IDashboardState
}
export type IStoreType = IRootState & IRootWithModule
