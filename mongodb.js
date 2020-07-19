// CRUD

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    /*db.collection('tasks').insertMany([
        {
        description: 'Laundry',
        completed: true
    }, {
        description: 'Dishes',
        completed: true
    }, {
        description: 'Shopping groceries',
        completed: false
    }
], (error, result) => {
        if (error) {
            return console.log("Unable to insert users")
        }

        console.log(result.ops)
    })*/

    // db.collection('tasks').findOne({ _id: new ObjectID('5efde203b45e652860deb392') }, (error, task) => {
    //     if (error) {
    //         return console.log("Unable to insert users")
    //     }

    //     console.log(task)
    // })

    // db.collection('tasks').find( { completed: true }).toArray((error, tasks) => {
    //     if (error) {
    //         return console.log("Unable to insert users")
    //     }

    //     console.log(tasks);
    // })

    // db.collection('tasks').updateMany(
    //     { completed: false }, 
    //     {
    //         $set: {
    //             completed: true
    //         }
    //     }).then((result) => {
    //         console.log(result)
    //     }).catch((error) => {
    //         console.log(error)
    //     })

    db.collection('tasks').deleteOne(
        { description: 'Dishes' }, 
        ).then((result) => {
            console.log(result)
        }).catch((error) => {
            console.log(error)
        })
})