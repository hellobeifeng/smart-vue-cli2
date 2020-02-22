import * as types from '../mutation-types'

const state = {
  loading: 0,
  message: {}
}

const mutations = {
  [types.SHOW_LOADING] (state) {
    state.loading++
  },
  [types.HIDE_LOADING] (state) {
    state.loading--
  },
  [types.MESSAGE] (state, info) {
    console.log('##in muti', info)
    state.message = info
  }
}

export default {
  state,
  mutations
}
