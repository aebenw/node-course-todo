// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) return console.log('unable to connect to DB');
  console.log('connection to MongoDB established');

  const db = client.db('TodoApp');

  // db.collection('Todo').findOneAndUpdate({
  //   _id: new ObjectID("5c45fab5403075eafaf9a504")
  // }, {
  //     $set: {
  //       completed: false
  //     }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID("5c438e15c5a45152b20ef19d")
    }, {
        $set: {
          name: "Eben"
        },
        $inc: {
          age: 1
        }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });
  // client.close();
});
//takes in 2 args, first is where the db lives, second is a err callback
