import { Request, Response } from "express";
import userService from "../services/userService";

const userController = {
  login: async (req: Request, res: Response) => {
    const { email, password } = req.body;
    console.log('yyy', req.body);

    const loginRes = await userService.login(email, password)
    const token = loginRes.data?.generateAuthToken();
    res.header('x-auth-token', token).send({ ...loginRes, token })
  },
  signup: async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    const regUser = await userService.signup(name, email, password)
    const token = regUser.data?.generateAuthToken();
    res.header('x-auth-token', token).send({ ...regUser, token })
  }
}

export default userController;