require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5f01f4d5094be32bd049a09a').then((task) => {
//     console.log(task)   
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5f01f4c6094be32bd049a099').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})