import express from 'express'
import Todo from '../model/todo.js'
import { CreateTodo, DeleteTodo, GetTodo } from '../controllers/TodoControllers.js'
const router = express.Router()

router.post('/createTodo', CreateTodo)

router.get('/getTodo', GetTodo)

router.delete('/delete/:id', DeleteTodo)

export default router