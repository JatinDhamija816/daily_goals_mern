import Todo from '../model/todo.js'

export const CreateTodo = async (req, res) => {
    try {
        const todo = {
            title: req.body.title,
            desc: req.body.desc
        }
        const newTodo = new Todo(todo)
        await newTodo.save()
        return res.status(200).json({
            msg: 'Created Succesfully'
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Error While Creating New Todo',
            error
        })
    }
}

export const GetTodo = async (req, res) => {
    try {
        const todos = await Todo.find()
        return res.status(200).json(todos)
    } catch (error) {
        res.status(500).json({
            msg: "Error while Showing Todos",
            error
        })
    }
}

export const DeleteTodo = async (req, res) => {
    try {
        const { id } = req.params
        const deleteTodo = await Todo.findByIdAndDelete({ _id: id })
        res.status(200).json({
            msg: 'Todo Delete Successfully'
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Error while Deleting Todo',
            error
        })
    }
}