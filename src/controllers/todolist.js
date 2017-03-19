/*  eslint-disable consistent-return */

import Todolist from '../models/todolist';

exports.all = (req, res) => {
  Todolist.all((err, docs) => {
    if (err) {
      global.console.log(err);
      return res.sendStatus(500);
    }
    res.send(docs);
  });
};

exports.findById = (req, res) => {
  Todolist.findById(req.params.id, (err, doc) => {
    if (err) {
      global.console.log(err);
      return res.sendStatus(500);
    }
    res.send(doc);
  });
};

exports.create = (req, res) => {
  const artist = {
    text: req.body.text,
  };
  Todolist.create(artist, (err) => {
    if (err) {
      global.console.log(err);
      return res.sendStatus(500);
    }
    res.send(artist);
  });
};

exports.update = (req, res) => {
  Todolist.update(req.params.id, { text: req.body.text }, (err) => {
    if (err) {
      global.console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200);
  });
};

exports.delete = (req, res) => {
  Todolist.delete(req.params.id, (err) => {
    if (err) {
      global.console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200);
  });
};
