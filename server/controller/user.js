const userService = require('../service/user')

exports.user = function (req, res) {
  let userInfo = req.session.userInfo
  userService.getUserInfo(userInfo).then(data => {
    res.resolve(data)
  }).catch(err => {
    res.reject('A00500', err.message)
  })
}
