const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

// var id = '5c019d1cefb1c2586c5b28ce12';  //5c019d1cefb1c2586c5b28ce

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid')
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos)
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo)
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found')
//     }
//     console.log('Todo By id', todo)
// }).catch((e) => console.log(e));

//query the users collection by id, load in user model
// User.findById   
//query works, but no user
//query works, print to screen
//handle errors, print to screen

var id = '5c018784f11c5a4924be4323'

User.findById(id).then((user) => {
    if (!user) {
        return console.log('User not found');
    }


    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});