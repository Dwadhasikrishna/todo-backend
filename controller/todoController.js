const todos = require('../Model/todoSchema')


exports.addTodo =async(req,res)=>{
    //logic
    const {title,description} = req.body

    try {
        const newTodo = new todos({
            title,description
        })
        await newTodo.save()
        res.status(200).json(newTodo)

        
    } catch (err) {
        res.status(401).json(`request failed due to ${err}`)
        
    }

}

exports.getTodo=async(req,res)=>{
    try {
        const todo = await todos.find()
        res.status(200).json(todo)
        
    } catch (err) {
        res.status(401).json(`Request failed due to ${err}`)
        
    }
}