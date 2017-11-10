(function () {
    "use-strict";
    var Promise = require('promise'),
        MongoClient = require('mongodb').MongoClient,
        database;

    module.exports.loginToDatabase = function () {
        return new Promise(function (fullfill, reject) {
            MongoClient.connect("mongodb://db:27017/DiscordBot", function (err, database) {
                if (err) {
                    reject(err);
                } else {
                    fullfill(database);
                }
                console.log("Connected to the database");
            });
        });
    };

    module.exports.exportDbConnection = function(callback) {
        if (database) {
            callback(database);
        } else {
            callback(null);
        }
    }
}());