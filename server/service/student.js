const Student = require("../models/student");

exports.FetchStudentList = function () {
  return Student.find({})
    .sort({ update_at: -1 })
    .then(students => {
      console.log(students)
      return students
    })
    .catch(err => {
      throw new Error(err.message)
    });
}
exports.createStudent = function (studentObj) {
  let tempStudent = {
    name : studentObj.name,
    sex : studentObj.sex,
    address : studentObj.address,
    teacher: studentObj.teacher
  }
  return Student.create(tempStudent)
    .then(students => {
      return students
    })
    .catch(err => {
      return errorHandler(err)
    });
}

exports.createStudentRand = function () {
  let tempStudent = {
    name : 'feng_' + new Date().getTime(),
    sex : [0, 1][Math.floor(Math.random()*2)],
    address : ['beijing', 'shanghai'][Math.floor(Math.random()*2)],
    teacher: '1001',
  }
  return Student.create(tempStudent)
    .then(students => {
      return students
    })
    .catch(err => {
      return errorHandler(err)
    });
}

exports.updateStudentById = function (id, data) {
  return Student.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        name: data.name,
        teacher: data.teacher,
        sex: data.sex,
        address: data.address
      }
    },
    {
      new: true
    }
  )
  .then(students => {
    return students
  })
  .catch(err => {
    return errorHandler(err)
  });
}

exports.delStudentById = function (id) {
  return Student.findOneAndRemove({
    _id: id
  })
  .then(students => {
    return students
  })
  .catch(err => {
    return errorHandler(err)
  });
}

exports.findStudentById = function (id) {
  return Student.findOne({
    _id: id
  })
  .then(students => {
    return students
  })
  .catch(err => {
    return errorHandler(err)
  });
}