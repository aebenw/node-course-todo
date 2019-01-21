// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) return console.log('unable to connect to DB');
  console.log('connection to MongoDB established');

  const db = client.db('TodoApp');

  // db.collection('Todo').find().count().then((count) => {
  //   //to query for a specific feild, we add an object with certain params
  //     console.log('Todos', count);
  // }, (error) => console.log("unable to fetch count", error));

  db.collection('Users').find({
    name: "Eben"
  }).toArray().then((docs) => {
    //to query for a specific feild, we add an object with certain params
      console.log('Todos');
      console.log(JSON.stringify(docs, undefined, 2));
  });


  // client.close();
});
//takes in 2 args, first is where the db lives, second is a err callback
