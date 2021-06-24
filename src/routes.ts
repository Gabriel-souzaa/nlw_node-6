import { Router } from "express";
import { CreateUserControllers } from "./controllers/CreateUserControllers";

const router = Router();

const createUserController = new CreateUserControllers();

router.post("/users", createUserController.handle);

export {router};