import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mainRoutes from './src/routes';
import { corsOptions } from './cors.config';
import connectMongoDB from './src/helpers/mongoose';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// connect mongo db
connectMongoDB()

// apply middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// attach main routes
app.use('/', mainRoutes)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});