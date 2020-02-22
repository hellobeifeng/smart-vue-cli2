const studentService = require('../service/student')

exports.studentList = function (req, res) {
  studentService.FetchStudentList().then(data => {
    console.log(data)
    res.json({
      code: 0,
      msg: '',
      data: {
        content: data
      }
    })
  }).catch(err => {
    console.log('###', err)
    res.json({
      code: -1,
      msg: '获取学生列表失败',
      data: {
        content: []
      }
    });
  })
}

exports.createStudent = function (req, res) {
  studentService.createStudent(req.body).then(data => {
    console.log(data)
    res.json({
      code: 0,
      msg: '',
      data: {
        content: data
      }
    })
  }).catch(err => {
    console.log(err)
    res.json({
      code: -1,
      msg: '添加学生失败',
      data: {
        content: []
      }
    });
  })
}

exports.createStudentRand = function (req, res) {
  studentService.createStudentRand().then(data => {
    console.log(data)
    res.json(data)
  }).catch(err => {
    console.log(err)
    res.json(err);
  })
}

exports.updateStudent = function (req, res) {
  let id = req.params.id;
  let studentData = req.body
  studentService.updateStudentById(id, studentData).then(data => {
    console.log(data)
    res.json({
      code: 0,
      msg: '',
      data: {
        content: data
      }
    })
  }).catch(err => {
    console.log(err)
    res.json({
      code: -1,
      msg: '修改学生失败',
      data: {
        content: []
      }
    });
  })
}

exports.delStudent = function (req, res) {
  let id = req.params.id
  studentService.delStudentById(id).then(data => {
    console.log(data)
    res.json({
      code: 0,
      msg: '',
      data: {
        content: data
      }
    })
  }).catch(err => {
    console.log(err)
    res.json({
      code: -1,
      msg: '删除学生失败',
      data: {
        content: []
      }
    });
  })
}

exports.studentDetail = function (req, res) {
  let id = req.params.id
  studentService.findStudentById(id).then(data => {
    console.log(data)
    res.json({
      code: 0,
      msg: '',
      data: data
    })
  }).catch(err => {
    console.log(err)
    res.json({
      code: -1,
      msg: '获取学生详情失败',
      data: {}
    });
  })
}