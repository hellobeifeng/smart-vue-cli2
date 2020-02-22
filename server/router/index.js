const path = require('path')
const express = require('express')
const router = express.Router()
const studentController = require('../controller/student')

router
  .get('/student', studentController.studentList)
  .post('/student', studentController.createStudent)
  .put('/student/:id', studentController.updateStudent)
  .delete('/student/:id', studentController.delStudent)
  .get('/student/:id', studentController.studentDetail)
  .get('/addStudentRand', studentController.createStudentRand)
  .use('/', express.static(path.resolve(__dirname, '../../client/dist')))

module.exports = router
