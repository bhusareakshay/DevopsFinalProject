/**
 * Todo endpoint route definitions.
 */

'use strict';
module.exports = function (app) {
    const todoController = require('../controllers/todo-controller');
    // Todo Routes for search and create.
    app.route('/todos')
        .get(todoController.list)
        .post(todoController.save);

    // Todo Routes for get, update and delete.
    app.route('/todos/:todoId')
        .get(todoController.get)
        .put(todoController.update)
        .delete(todoController.delete);
};