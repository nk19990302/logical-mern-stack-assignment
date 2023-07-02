import jwt from 'jsonwebtoken';
require('dotenv').config()
import { Request, Response } from 'express';
const signingKey = process.env.PRIVATE_SIGNING_KEY;

export interface AuthRequest extends Request {
  user?: any
}

const auth = (req: AuthRequest, res: Response, next: any) => {

  // get token from request
  const token = req.headers["x-auth-token"] || req.headers["authorization"];
  if (!token) return res.status(401).send({ status: 'error', statusCode: 401, message: "unauthorized access denied!" });

  // decode token 
  try {
    const decoded = jwt.verify(token as string, signingKey as string)
    req.user = decoded;
    next();
  } catch (error) {
    res.status(500).send({ status: 'error', statusCode: 500, message: "something went wrong!", data: error });
  }
}

export default auth;