import request from "../helpers/fetch";
const BASE_URL = process.env.REACT_APP_HOST_URL;

export const AuthService = {
  login: (email: string, password: string): Promise<Response<User>> => {
    return request<User>(BASE_URL + '/user/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: email, password: password })
    });

  },
  signup: (name: string, email: string, password: string): Promise<Response<User>> => {
    return request<User>(BASE_URL + '/user/signup', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    });

  }
}

export type User = {
  _id?: number | string;
  name: string;
  email: string;
  password: string;
}

export type CustomError = {
  message: string
}

export type Response<DataType> = {
  status: string;
  statusCode: number;
  message?: string;
  data?: DataType;
  token?: string;
}

