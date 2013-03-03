
var mongo = require('../mongo')
  , crypto = require('crypto');


/*
 * GET users listing.
 */

exports.list = function(req, res) {
 	mongo.connect(function (db) {

        var collection = db.collection('users', function(err, collection) {
        	console.log(collection);
        });

        console.log(collection);
    });
};

exports.new = function(req, res) {
	res.render('new', {'title': 'Signup'});
};

exports.create = function(req, res) {
	console.log("called create");
	mongo.connect(function (db) {

        var collection = db.collection('users').find();
        console.log("connected");
        collection.findOne(
            {'username': req.body.username},
            function (err, result) {

                if (!result) {
                	console.log("creating");

                    var user = {
                        'username': req.body.username
                    };

                    user.salt = randomString(15);
                    user.password_digest = hashPassword(
                        req.body.password,
                        user.salt
                    );

                    collection.insert(user, function (err, result) {
                        res.redirect('/users');
                    });

                } else {
                	res.send({'error': 'Username not available'});
                }
            }
        );
    });
};

exports.update = function(req, res) {};


function hashPassword(plaintext, salt) {
    hash = crypto.createHash('sha512');
    hash.update(plaintext + salt, 'ascii');
    return hash.digest('base64');
}

function randomString(length) {
    result = "";
    length = length || 7;
    while (result.length < length)  {
        randomIndex = Math.floor(Math.random() * 74) + 48;
        result += String.fromCharCode(randomIndex);
        // remove non-word characters
        // this is a hack that saves some lines of code
        result = result.replace(/[^\w]/g, '');
    }
    return result;
}