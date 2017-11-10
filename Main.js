(function () {
    "use-strict";
    var express = require('express'),
        Promise = require('promise'),
        connection = require('./Connections.js'),
        app = express();

    function main() {
        connection.loginToDatabase()
            .then(function (res) {
                console.log("Connected to the database");
            }, function (err) {
                console.log(err);
            });
    }

    require('./Routes')(app)
    app.listen(3000);
    console.log("Listening on port 3000");
    main();
}());