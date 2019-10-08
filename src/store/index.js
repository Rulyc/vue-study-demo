import Vue from 'vue'
import Vuex from 'vuex'
import { constantRouterMap } from '@/router'

Vue.use(Vuex)

// 创建一个商店
const store = new Vuex.Store({
  state: {
    count: 0,
    routes: [],
  },
  mutations: {
    increment (state) {
      state.count++
    },
    SET_ROUTES: (state, routes) => {
      state.addRoutes = routes
      state.routes = constantRouterMap.concat(routes)
    }
  }
})
export default store
