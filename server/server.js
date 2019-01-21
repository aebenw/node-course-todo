var mongoose = require('mongoose');

mongoose.promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

//the above code is blocking, anything down here won't run until a connection is made

//now we're going to create models
var Todo = mongoose.model('ToDo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

//above is a model creationg
//below is creating an instance of a model;
var newTodo = new Todo({
  text: "cook dinner"
});

var secondToDo = new Todo({
  text: "walk the dog",
  completed: true,
  completedAt: Date.now()
});
//below is saving our new instance to our db
// newTodo.save().then((res) =>{
//   console.log('Todo Saved', res);
// }, (e) => {
//   console.log('unable to save');
// });

secondToDo.save().then(res => console.log(res), err => console.log(err));
