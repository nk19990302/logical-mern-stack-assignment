import { COOKIE_KEYS, getCookie } from "../helpers/cookies";
import request from "../helpers/fetch";
import { Response } from "./AuthService";
const BASE_URL = process.env.REACT_APP_HOST_URL;

export const TodoService = {
  getTodo: (): Promise<Response<Array<Todo>>> => {
    const token = getCookie(COOKIE_KEYS.TOKEN)
    const userId = getCookie(COOKIE_KEYS.USER_ID)
    return request<Array<Todo>>(BASE_URL + '/todo/' + userId, {
      method: "GET",
      headers: {
        "x-auth-token": token,
        "Content-Type": "application/json"
      }
    });
  },
  createTodo: (todo: Todo): Promise<Response<Todo>> => {
    const token = getCookie(COOKIE_KEYS.TOKEN)
    return request<Todo>(BASE_URL + '/todo', {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        "x-auth-token": token,
        "Content-Type": "application/json"
      }
    })
  },
  updateTodo: (todo: Todo): Promise<Response<Todo>> => {
    const token = getCookie(COOKIE_KEYS.TOKEN)
    return request<Todo>(BASE_URL + '/todo', {
      method: 'PUT',
      body: JSON.stringify(todo),
      headers: {
        "x-auth-token": token,
        "Content-Type": "application/json"
      }
    });
  },
  deleteTodo: (id: number | string): Promise<Response<Todo>> => {
    const token = getCookie(COOKIE_KEYS.TOKEN)
    return request<Todo>(BASE_URL + `/todo/${id}`, {
      method: 'DELETE',
      headers: {
        "x-auth-token": token,
        "Content-Type": "application/json"
      }
    });
  }
}

export enum Status {
  DONE = 2,
  PENDING = 1
}

export type Todo = {
  _id?: number | string;
  userId: string,
  task: string;
  status: Status;
  createdAt: number;
}

