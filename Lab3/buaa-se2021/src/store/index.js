import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
  },
  getters: {
  },
  mutations: {
    Login(state){
      state.isLogin = true;
    },
    Logout(state){
      state.isLogin = false;
    }
  },
  actions: {
  },
  modules: {
  }
})
