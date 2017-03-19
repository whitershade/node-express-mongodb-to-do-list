import { ObjectID } from 'mongodb';

import db from '../db';

const collectionName = 'node-express-to-do-list';

exports.all = (cb) => {
  db.get().collection(collectionName).find().toArray((err, docs) => {
    cb(err, docs);
  });
};

exports.findById = (id, cb) => {
  db.get().collection(collectionName).findOne({ _id: ObjectID(id) }, (err, doc) => {
    cb(err, doc);
  });
};

exports.create = (artist, cb) => {
  db.get().collection(collectionName).insert(artist, (err, result) => {
    cb(err, result);
  });
};

exports.update = (id, newData, cb) => {
  db.get().collection(collectionName).updateOne(
    { _id: ObjectID(id) },
    newData,
    (err, result) => {
      cb(err, result);
    },
  );
};

exports.delete = (id, cb) => {
  db.get().collection(collectionName).deleteOne(
    { _id: ObjectID(id) },
    (err, result) => {
      cb(err, result);
    },
  );
};
