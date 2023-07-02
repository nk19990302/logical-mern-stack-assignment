import { Router } from "express";
import userRoutes from "./userRoutes";
import todoRoutes from "./todoRoutes";
const mainRoutes = Router()

// attach all different routes here
mainRoutes.use('/user', userRoutes)
mainRoutes.use('/todo', todoRoutes)

export default mainRoutes;