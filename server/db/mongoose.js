var mongoose = require('mongoose');

mongoose.promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

//the above code is blocking, anything down here won't run until a connection is made

module.exports = {mongoose};
