import { Request, Response } from "express";
import todoService from "../services/todoService";
import { AuthRequest } from "../middlewares/authentication";
import Todo from "../models/todo";

const todoController = {
  get: async (req: AuthRequest, res: Response) => {
    const { userId } = req.params;
    const authUser = req.user;
    if (authUser._id !== userId) {
      res.send({ status: 'error', statusCode: 401, message: 'not authorized to access!' })
      return;
    }
    res.send(await todoService.get(userId))
  },
  add: async (req: AuthRequest, res: Response) => {
    const { userId, task, status, createdAt } = req.body;
    const authUser = req.user;
    if (authUser._id !== userId) {
      res.send({ status: 'error', statusCode: 401, message: 'not authorized to access!' })
      return;
    }
    res.send(await todoService.add(userId, task, status, createdAt))
  },
  update: async (req: AuthRequest, res: Response) => {
    const { _id, userId, task, status, createdAt } = req.body;
    const authUser = req.user;
    if (authUser._id !== userId) {
      res.send({ status: 'error', statusCode: 401, message: 'not authorized to access!' })
      return;
    }
    res.send(await todoService.update(_id, userId, task, status, createdAt))
  },
  delete: async (req: AuthRequest, res: Response) => {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    const authUser = req.user;
    if (authUser._id !== todo?.userId) {
      res.send({ status: 'error', statusCode: 401, message: 'not authorized to access!' })
      return;
    }
    res.send(await todoService.delete(id));
  }
}

export default todoController;