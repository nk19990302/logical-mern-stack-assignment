import { Router } from "express";
import todoController from "../controllers/todoController";
import auth from "../middlewares/authentication";
const todoRoutes = Router()

todoRoutes.get('/:userId', auth, todoController.get)
todoRoutes.post('/', auth, todoController.add)
todoRoutes.put('/', auth, todoController.update)
todoRoutes.delete('/:id', auth, todoController.delete)

export default todoRoutes;