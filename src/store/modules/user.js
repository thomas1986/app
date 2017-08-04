/** 用户模块 */

import api from '../../api/user'
import * as types from '../mutationTypes'

// initial state
const state = {
    userId:"",
    userName: "",
    phone:"",
    logged: false
};

// getters
const getters = {
  logged: state => state.logged
}

// actions
const actions = {
  login ({ commit, state }, payload) {
    return api.login(payload).then(user => {
      commit(types.SET_USER, user)
    })
  },
  regist ({ commit, state }, payload) {
    return api.regist(payload).then(data => {
      commit(types.SET_USER, { userId: data })
    })
  },
  logout ({ commit, state }) {
    window.sessionStorage.clear()
    commit(types.RESET_STATE)
  }
}

// mutations
const mutations = {
  [types.SET_USER] (state, data) {
    Object.assign(state, data)
    state.logged = true;
  },
  [types.RESET_STATE] (state) {
    state.userId = '' // TODO
    state.logged = false;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
