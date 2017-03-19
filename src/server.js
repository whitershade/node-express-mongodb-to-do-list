/*  eslint-disable consistent-return */

import express from 'express';
import bodyParser from 'body-parser';

import db from './db';

import todolistController from './controllers/todolist';


// express application
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
// parse req.body json
app.use(bodyParser.json());
// parse form data
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/todolist', todolistController.all);

app.get('/todolist/:id', todolistController.findById);

app.post('/todolist', todolistController.create);

app.put('/todolist/:id', todolistController.update);

app.delete('/todolist/:id', todolistController.delete);

db.connect('mongodb://localhost:27017/node-express-to-do-list', (err) => {
  if (err) {
    return global.console.log(err);
  }
  app.listen(3012, () => {
    global.console.log('API started!');
  });
});
