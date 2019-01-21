// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) return console.log('unable to connect to DB');
  console.log('connection to MongoDB established');

  const db = client.db('TodoApp');

  // db.collection('Todo').insertOne({
  //   text: 'need to do something',
  //   completed: false
  // }, (error, res) => {
  //   if(err) return console.log("unable to insert todo ", error);
  //     console.log(JSON.stringify(res.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Eben',
  //   age: 25,
  //   location: "LA"
  // }, (error, res) => {
  //   if(err) return console.log("unable to insert todo ", error);
  //     console.log(JSON.stringify(res.ops[0]._id.getTimestamp()));
  // });


  client.close();
});
//takes in 2 args, first is where the db lives, second is a err callback
