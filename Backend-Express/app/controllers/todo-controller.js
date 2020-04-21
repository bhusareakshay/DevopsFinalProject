/**
 * Controller for todo endpoints.
 */

'use strict';
//import todo service.
const todoService = require('../services/todo-service');

exports.list = function (request, response) {
    const result = (todos) => {
        response.status(200);
        response.json(todos);
    };
    todoService.search({})
        .then(result)
        .catch(renderErrorResponse(response));
};


exports.save = function (request, response) {
    const newTodo = Object.assign({}, request.body);
    const result = (todo) => {
        response.status(200);
        response.json(todo);
    };
    todoService.save(newTodo)
        .then(result)
        .catch(renderErrorResponse(response));
};


/**
 * Returns Todo response.
 *
 * @param request
 * @param response
*/
exports.get = function (request, response) {
    const result = (todo) => {
        response.status(200);
        response.json(todo);
    };
    todoService.get(request.params.todoId)
        .then(result)
        .catch(renderErrorResponse(response));
};

/**
 * Updates the Todo resource.
 *
 * @param request
 * @param response
*/
exports.update = function (request, response) {
    const todoId = request.params.todoId;
    const updatedTodo = Object.assign({}, request.body);
    updatedTodo.id = todoId;
    const result = (todo) => {
        response.status(200);
        response.json(todo);
    };
    const promise = todoService.update(updatedTodo);
    promise
        .then(result)
        .catch(renderErrorResponse(response));
};

/**
 * Deletes a Todo resource.
 *
 * @param request
 * @param response
*/
exports.delete = function (request, response) {
    const todoId = request.params.todoId
    const result = (todo) => {
        response.status(200);
        response.json({
            message: "Successfully Deleted Todo."
        });
    };
    const promise = todoService.delete(todoId)
    promise
        .then(result)
        .catch(renderErrorResponse(response));
};

/**
 * Throws error if error object is present.
 *
 * @param {Response} response The response object
 * @return {Function} The error handler function.
 */
let renderErrorResponse = (response) => {
    const errorCallback = (error) => {
        if (error) {
            response.status(500);
            response.json({
                message: error.message
            });
        }
    }
    return errorCallback;
};