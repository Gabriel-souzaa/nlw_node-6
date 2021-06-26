import express, { NextFunction, Request, Response } from 'express';
import 'reflect-metadata';
import './databases';
import { router } from './routes';
//Tramento de Errors
import { handleError } from './utils/errors';
//import 'express-async-errors';


const app = express();

app.use(express.json());

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
   handleError(err, response);
})

app.listen(3333, () => console.log("Server start"));