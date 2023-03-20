import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { ISystemState } from './types'
import {
  getPageListData,
  deletePage,
  createPageData,
  editPageData
} from '@/service/main/system/system'
const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    }
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount
    },
    changeRoleList(state, list: any[]) {
      state.roleList = list
    },
    changeRoleCount(state, count: number) {
      state.roleCount = count
    },
    changeGoodsList(state, list: any[]) {
      state.goodsList = list
    },
    changeGoodsCount(state, count: number) {
      state.goodsCount = count
    },
    changeMenuList(state, list: any[]) {
      state.menuList = list
    },
    changeMenuCount(state, count: number) {
      state.menuCount = count
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
    // pageListData(state) {
    //   return (pageName: string) => {
    //     switch (pageName) {
    //       case 'user':
    //         return state.userList
    //       case 'role':
    //         return state.roleList
    //     }
    //   }
    // },
    // pageListCount(state) {
    //   return (pageName: string) => {
    //     switch (pageName) {
    //       case 'user':
    //         return state.userCount
    //       case 'role':
    //         return state.roleCount
    //     }
    //   }
    // }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      const pageName = payload.pageName

      let pageUrl = ''
      switch (pageName) {
        case 'user':
          pageUrl = 'users/list'
          break
        case 'role':
          pageUrl = 'role/list'
          break
        case 'goods':
          pageUrl = 'goods/list'
          break
        case 'menu':
          pageUrl = 'menu/list'
          break
        case 'users':
          pageUrl = '/users/list'
      }

      //对页面发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      console.log(payload.pageUrl)

      //将数据存储在state中
      const { list, totalCount } = pageResult.data

      const changePageName =
        pageName.slice(0, 1).toUpperCase() + pageName.slice(1)
      commit(`change${changePageName}List`, list)
      commit(`change${changePageName}Count`, totalCount)

      // switch (pageName) {
      //   case 'user':
      //     commit('changeUserList', list)
      //     commit('changeUserCount', totalCount)
      //     break
      //   case 'role':
      //     commit('changeRoleList', list)
      //     commit('changeRoleCount', totalCount)
      //     break
      // }

      // commit(`change${pageName.toUpperCase()}List`, list)
      // commit(`change${pageName.toUpperCase()}Count`, totalCount)
    },

    async deletePageDataAction({ dispatch }, payload: any) {
      //获取pageName 以及 id
      //1.pageName id
      const { pageName, id } = payload
      const pageUrl = `/${pageName === 'user' ? 'users' : pageName}/${id}`
      //2.调用删除网络请求
      await deletePage(pageUrl)
      //3.重新请求最新的数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async createPageDataAction({ dispatch }, payload: any) {
      //创建数据的请求
      const { pageName, newData } = payload

      const pageUrl = `/${pageName === 'user' ? 'users' : pageName}`

      await createPageData(pageUrl, newData)
      //请求最新的数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },

    async editPageDataAction({ dispatch }, payload: any) {
      //编辑数据的请求
      const { pageName, editData, id } = payload
      const pageUrl = `/${pageName === 'user' ? 'users' : pageName}/${id}`

      await editPageData(pageUrl, editData)
      //请求最新的数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
}
export default systemModule
