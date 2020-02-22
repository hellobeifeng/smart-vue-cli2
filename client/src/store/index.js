import Vue from 'vue'
import Vuex from 'vuex'

import common from './modules/common'
import student from './modules/student'
import * as actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  actions,
  modules: {
    common,
    st: student
  }
})

export default store
