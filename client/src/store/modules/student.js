import * as types from '../mutation-types'

const state = {
  list: [],
  detail: {}
}

const mutations = {
  [types.SET_STUDENT_LIST] (state, data) {
    state.list = data
  },
  [types.SET_STUDENT_DETAIL] (state, data) {
    state.detail = data
  }
}

export default {
  namespaced: true, // 开启命名空间
  state,
  mutations
}
