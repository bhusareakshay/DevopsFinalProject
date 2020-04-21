'use strict';
module.exports = function (app) {
    //Initialize models
    let todoModel = require('./models/index');

    //Initialize routes
    let todoRoutes = require('./routes/index');
    todoRoutes(app);
};