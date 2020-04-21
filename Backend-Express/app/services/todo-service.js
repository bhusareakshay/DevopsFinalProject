/**
 * Service for Todo operations.
 */

'use strict';
const mongoose = require('mongoose'), Todo = mongoose.model('todos');

/**
 * Returns a promise for search results.
 *
 * @param search param.
*/
exports.search = function (params) {
    const promise = Todo.find(params).exec();
    return promise;
};

/**
 * Saves the new Todo object.
 *
 * @param todo
*/
exports.save = function (todo) {
    const newTodo = new Todo(todo);
    const promise = newTodo.save();
    return promise;
};


/**
 * Returns the Todo object by id.
 *
 * @param todoId
*/
exports.get = function (todoId) {
    const promise = Todo.findById(todoId).exec();
    return promise
};

/**
 * Updates the Todo resource.
 *
 * @param request
 * @param response
*/
exports.update = function (todo) {
    //console.log(todo);
    todo.modifiedDate = new Date ();
    const promise = Todo.findByIdAndUpdate(todo.id, todo, {new: true}).exec();
    return promise;
};

/**
 * Deletes an existing Todo.
 *
 * @param orderId
*/

exports.delete = function (todoId) {
    const promise = Todo.findByIdAndRemove({_id: todoId});
    return promise;
};