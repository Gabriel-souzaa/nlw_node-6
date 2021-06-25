import { Router } from "express";
import { AuthenticateUserControllers } from "./controllers/AuthenticateUserControllers";
import { CreateComplimentControlers } from "./controllers/CreateComplimentControlers";
import { CreateTagControllers } from "./controllers/CreateTagControllers";
import { CreateUserControllers } from "./controllers/CreateUserControllers";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

const createUserController = new CreateUserControllers();
const createTagController = new CreateTagControllers();
const authenticateUserController = new AuthenticateUserControllers();
const createComplitControlller = new CreateComplimentControlers();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAdmin, createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", createComplitControlller.handle);

export { router };

