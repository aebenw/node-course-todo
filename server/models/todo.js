var mongoose = require('mongoose');

var Todo = mongoose.model('ToDo', {
  text: {
    type: String,
    require: true,
    minlength: 5
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {Todo};
