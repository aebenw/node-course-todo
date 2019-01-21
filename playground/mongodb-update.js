// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) return console.log('unable to connect to DB');
  console.log('connection to MongoDB established');

  const db = client.db('TodoApp');


  // client.close();
});
//takes in 2 args, first is where the db lives, second is a err callback
