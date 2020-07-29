const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})



// const me = new User({
//     name: "Amnon",
//     email: 'MyEmail@amnon.com',
//     age: 66,
//     password: 'AmnonFrec'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })


// const Cleaning = new Task({
//     description: "Cleaning the car",
//     completed: true
// })

// Cleaning.save().then(() => {
//     console.log(Cleaning)
// }).catch((error) => {
//     console.log('Error!', error)
// })