(function () {
    "use-strict";
    var Promise = require('promise'),
        MongoClient = require('mongodb').MongoClient,
        db;

    module.exports.loginToDatabase = function () {
        return new Promise(function (fullfill, reject) {
            MongoClient.connect("mongodb://db:27017/DiscordBot", function (err, database) {
                db = database;
                if (err) {
                    reject(err);
                } else {
                    fullfill(database);
                }
            });
        });
    };

    module.exports.exportDbConnection = function (callback) {
        if (db) {
            callback(db);
        } else {
            callback(null);
        }
    }
}());