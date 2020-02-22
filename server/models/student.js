const mongoose = require('mongoose')
const studentSchema = mongoose.Schema({
  name :String,
  sex : String,
  address : String,
  teacher: String,
  meta: {
    createAt: {
        type: Date,
        default: Date.now()
    },
    updateAt: {
        type: Date,
        default: Date.now()
    }
  }
}, { collection: 'student'})



studentSchema.pre('save', function (next) {
  if (this.isNew) {
    this.meta.updateAt = this.meta.createAt = Date.now();
  } else {
    this.meta.updateAt = Date.now();
  }
  next()
});

module.exports = mongoose.model('student', studentSchema);
