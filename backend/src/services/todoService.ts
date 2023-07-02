import { APIResponse } from "../models/error";
import Todo from "../models/todo";

const todoService = {
    get: async (userId: string): Promise<APIResponse> => {
        try {
            const allTodo = await Todo.find({ userId: userId });
            if (allTodo.length > 0) {
                return { status: 'success', statusCode: 200, data: allTodo }
            }
            return { status: 'error', statusCode: 404, message: 'todo not found for user' }
        } catch (error) {
            return { status: 'error', statusCode: 500, message: 'something went wrong', data: error }
        }
    },
    add: async (userId: string, task: string, status: number, createdAt: number) => {
        try {
            const todo = new Todo({ userId, task, status, createdAt })
            const res = await todo.save();
            return { status: 'success', statusCode: 200, data: res }
        } catch (error) {
            return { status: 'error', statusCode: 500, message: 'something went wrong', data: error }
        }
    },
    update: async (id: string, userId: string, task: string, status: number, createdAt: number) => {
        try {
            const res = await Todo.findByIdAndUpdate(id, { $set: { userId: userId, task: task, status: status } }, { new: true })
            return { status: 'success', statusCode: 200, data: res }
        } catch (error) {
            return { status: 'error', statusCode: 500, message: 'something went wrong', data: error }
        }
    },
    delete: async (id: string) => {
        try {
            const res = await Todo.findOneAndRemove({ _id: id });
            return { status: 'success', statusCode: 200, data: res }
        } catch (error) {
            return { status: 'error', statusCode: 500, message: 'something went wrong', data: error }
        }
    },
};

export default todoService;
