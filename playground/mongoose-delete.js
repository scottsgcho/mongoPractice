const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

Todo.findByIdAndRemove().then((result) => {
    console.log(result);
})

Todo.findOneAndRemove().then((result) => {
    console.log(result);
})

Todo.remove({}).then((result) => {
    console.log(result);
})