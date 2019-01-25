const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5c477d49c9ea7075b113aa1d';
const userId = '5c4758746ebf876d8d65878f'

// if(!ObjectID.isValid(id)){
//   console.log("id not valid");
// }
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then(res => {
//   if(!res) return console.log('Id not found');
//   console.log(res, "BY ID");
// });

User.findById(userId).then((res) => {
  if(!res) return console.log("user not found");
  console.log(JSON.stringify(res, undefined, 2));
}, (e) => console.log(e));
//error handling
//Mongoose will return an empty array or null if something is not found
//There's no error argument
//Rather we just check to see if the response is null
