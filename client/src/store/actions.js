import * as types from './mutation-types'
import * as api from '../api/index'

export const showLoading = makeAction(types.SHOW_LOADING)
export const hideLoading = makeAction(types.HIDE_LOADING)

function makeAction (type) {
  return ({ commit }, args) => commit(type, args)
}

function generateErrorHandler (commit) {
  return function (err) {
    // api请求统一错误处理
    commit(types.HIDE_LOADING)
    commit(types.MESSAGE, {
      type: 'error',
      msg: err.message
    })
    return Promise.reject(err)
  }
}

export const fetchStudentList = function ({ commit }) {
  commit(types.SHOW_LOADING)
  return api.fetchStudentList().then(result => {
    let list = (result.data && result.data.content) || []
    commit(types.HIDE_LOADING)
    commit(types.SET_STUDENT_LIST_NAMESPACE, list)
    return list
  }, generateErrorHandler(commit))
}

export const addNewStudent = function ({ commit }, info) {
  commit(types.SHOW_LOADING)
  return api.addNewStudent(info).then(data => {
    return api.fetchStudentList().then(result => {
      let list = (result.data && result.data.content) || []
      commit(types.HIDE_LOADING)
      commit(types.SET_STUDENT_LIST_NAMESPACE, list)
      return list
    }, generateErrorHandler(commit))
  }, generateErrorHandler(commit))
}
export const modifyStudent = function ({ commit }, info) {
  commit(types.SHOW_LOADING)
  let {id, data} = info
  return api.modifyStudent(id, data).then(data => {
    return api.fetchStudentList().then(result => {
      let list = (result.data && result.data.content) || []
      commit(types.HIDE_LOADING)
      commit(types.SET_STUDENT_LIST_NAMESPACE, list)
      return list
    }, generateErrorHandler(commit))
  }, generateErrorHandler(commit))
}

export const deleteStudent = function ({ commit }, info) {
  commit(types.SHOW_LOADING)
  let {id} = info
  return api.deleteStudent(id).then(data => {
    return api.fetchStudentList().then(result => {
      let list = (result.data && result.data.content) || []
      commit(types.HIDE_LOADING)
      commit(types.SET_STUDENT_LIST_NAMESPACE, list)
      return list
    }, generateErrorHandler(commit))
  }, generateErrorHandler(commit))
}

export const studentDetail = function ({ commit }, info) {
  commit(types.SHOW_LOADING)
  let {id} = info
  return api.studentDetail(id).then(result => {
    commit(types.HIDE_LOADING)
    commit(types.SET_STUDENT_DETAIL_NAMESPACE, result.data)
    return result.data
  }, generateErrorHandler(commit))
}
