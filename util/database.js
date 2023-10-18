const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  const url = 'mongodb+srv://mac45:ntvaT5Qyas3NSS9I@cluster0.rwhns6e.mongodb.net/your-database';
  // Replace 'your-database' with your actual database name

  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(client => {
      console.log('Connected to MongoDB!');
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
