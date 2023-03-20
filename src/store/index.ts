import { createStore, Store, useStore as useVuexStore } from 'vuex'
import system from './main/system/system'
import dashboard from './main/analysis/dashboard'
import { getPageListData } from '@/service/main/system/system'
import login from './login/login'
import { IRootState, IStoreType } from './types'
const store = createStore<IRootState>({
  state() {
    return {
      name: 'liming',
      age: 123,
      entireDepartment: [],
      entireRole: []
    }
  },
  mutations: {
    changeEntireDepartment(state, list) {
      state.entireDepartment = list
    },
    changeEntireRole(state, list) {
      state.entireRole = list
    }
  },
  getters: {},
  actions: {
    async getInitialDataAction({ commit }) {
      //1.请求部门角色数据
      const departmentResult = await getPageListData('/department/list', {
        offset: 0,
        size: 1000
      })
      const { list: departmentList } = departmentResult.data
      const roleResult = await getPageListData('/role/list', {
        offset: 0,
        size: 1000
      })
      const { list: roleList } = roleResult.data

      //2.保存数据
      commit('changeEntireDepartment', departmentList)
      commit('changeEntireRole', roleList)
    }
  },
  modules: {
    login,
    system,
    dashboard
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
  // store.dispatch('getInitialDataAction')
}
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}
export default store