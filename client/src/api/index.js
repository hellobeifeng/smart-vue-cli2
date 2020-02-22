import axios from './axiosUtil.js'

function checkStatus (res) {
  return new Promise((resolve, reject) => {
    if (res.status >= 200 && res.status < 300) {
      if (res.data.code === 0) {
        resolve(res.data)
      } else {
        reject(new Error(res.data.msg))
      }
    } else if (res.status === 400) {
      reject(new Error(res.data.msg))
    } else {
      reject(new Error(res.statusText))
    }
  })
}

export function fetchStudentList () {
  return axios.get('/smart/student').then(checkStatus)
}

export function addNewStudent (newStudentObj) {
  return axios.post('/smart/student', newStudentObj).then(checkStatus)
}

export function modifyStudent (id, modifyStudentObj) {
  return axios.put('/smart/student/' + id, modifyStudentObj).then(checkStatus)
}

export function deleteStudent (id) {
  return axios.delete('/smart/student/' + id).then(checkStatus)
}

export function studentDetail (id) {
  return axios.get('/smart/student/' + id).then(checkStatus)
}
