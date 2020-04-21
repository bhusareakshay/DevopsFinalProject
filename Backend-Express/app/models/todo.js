'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let TodoSchema = new Schema({


title: {
    type: String,
    required: "Title is required"
},

description :{
    type : String,
    required : 'Description is missing'
},

createdDate : {
    type: Date,
    default: Date.now
},

dueDate: {
    type: Date,
    required: true
},
isCompleted: {
    type: Boolean,
    default: false
},

modifiedDate : {
    type: Date,
    default: Date.now
}
  

}, {
    versionKey: false
});

// Duplicate the id field as mongoose returns _id field instead of id.
TodoSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

TodoSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('todos', TodoSchema);