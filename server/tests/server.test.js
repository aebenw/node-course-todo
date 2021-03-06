const expect = require('expect');
const request = require('supertest');

 const {app} = require('./../server');
 const {Todo} = require('./../models/todo');

const testTodos = [{
    text: "first test todo"
  }, {
    text: "second test todo"
  }];

beforeEach((done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(testTodos);
  }).then(() => done());
});

describe('POST /todos', () => {
 it('should create a new Todo', (done) => {
   var text = 'Test todo text';
   request(app)
    .post('/todos')
    .send({text})
    .expect(200)
    .expect((res) => {
      expect(res.body.text).toBe(text);
    })
    .end((err, res) => {
      if(err) return done(err);
      Todo.find().then((todos) => {
        expect(todos.length).toBe(3);
        expect(todos[2].text).toBe(text);
        done();
      }).catch((e) => done(e));
    });
 });

 it("should not create invalid body data", (done) => {
   request(app)
   .post('./todos')
   .send({})
   .expect(400)
   .end((err, res) => {
     // if(err) return done(err);
     Todo.find().then((todos) => {
       expect(todos.length).toBe(2);
       done();
     }).catch((e) => done(e));
   });
 });
});

describe('GET /todos', () => {
   it('should get all the todos', (done) => {
     request(app)
     .get('/todos')
     .expect(200)
     .expect((res) => {
       expect(res.body.todos.length).toBe(2);
     }).end(done);
  });
});
