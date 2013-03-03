var MongoClient = require('mongodb').MongoClient;

function connect(callback) {

    // Connect to the db
    MongoClient.connect("mongodb://localhost:27017/userDb", function(err, db) {
      if(!err) {
        console.log("We are connected");
        callback(db);
      }
    });
}

exports.connect = connect;