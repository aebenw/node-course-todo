// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) return console.log('unable to connect to DB');
  console.log('connection to MongoDB established');

  const db = client.db('TodoApp');

  // deleteMany
    // db.collection('Todo').deleteMany({text: "eat lunch"}).then((res) =>{
    //   console.log(res);
    // });
  // deleteOne
    // db.collection('Todo').deleteOne({text: "eat lunch"}).then((res) => {
    //   console.log(res);
    // });
  // findOneAndDelete
    // db.collection('Todo').findOneAndDelete({completed: false}).then((res) => {
    //   console.log(res);
    // });

    db.collection('Users').deleteMany({name: "Eben"}).then((res) =>{
      console.log(res);
    });

    db.collection('Users').findOneAndDelete({name: "Steve"}).then((res) => {
      console.log(res);
    });

  // client.close();
});
//takes in 2 args, first is where the db lives, second is a err callback
