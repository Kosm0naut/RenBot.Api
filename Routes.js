(function () {
    "use-strict";
    var Promise = require('promise'),
        userManagement = require('./UserManagement.js');
        //serverManagement = require('./ServerManagement.js');

    module.exports = function (app) {
        app.get('./getUsers', userManagement.getUsers);
        app.post('/getUserById/:id', userManagement.getUserById);
        app.post('/getUserByName/:name', userManagement.getUserByName);
        app.post('/getLatestScoreFromUserId/:id', userManagement.getLatestScoreFromUserId);
        app.post('/getUserTopScoresFromUserId/:id', userManagement.getUserTopScoresFromUserId);
        //app.get('/getServers', serverManagement.getServers);
        //app.post('/deleteUserById/:id', serverManagement.deleteUserById);
        app.post('/deleteUserByName/:name', userManagement.deleteUserByName);
    };
}());