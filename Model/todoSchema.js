const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    }
})

const todos = mongoose.model("todos",todoSchema)

module.exports = todos