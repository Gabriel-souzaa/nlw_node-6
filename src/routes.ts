import { Router } from "express";
import { AuthenticateUserControllers } from "./controllers/AuthenticateUserControllers";
import { CreateComplimentControlers } from "./controllers/CreateComplimentControlers";
import { CreateTagControllers } from "./controllers/CreateTagControllers";
import { CreateUserControllers } from "./controllers/CreateUserControllers";
import { ListUserControllers } from "./controllers/ListUserControllers";
import { ListUserReceiveComplimentControllers } from "./controllers/ListUserReceiveComplimentControllers";
import { ListUserSendComplimentControllers } from './controllers/ListUserSendComplimentControllers';
import { LitsTagControllers } from "./controllers/LitsTagControllers";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticate } from "./middlewares/ensureAuthenticate";

const router = Router();

const createUserController = new CreateUserControllers();
const createTagController = new CreateTagControllers();
const authenticateUserController = new AuthenticateUserControllers();
const createComplitController = new CreateComplimentControlers();
const listUserReseiveController = new ListUserReceiveComplimentControllers();
const listUserSendController = new ListUserSendComplimentControllers();
const listTagControllrer = new LitsTagControllers();
const listUserController = new ListUserControllers();

router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", ensureAuthenticate, createComplitController.handle);

router.get("/users/compliments/send", ensureAuthenticate, listUserSendController.handle);
router.get("/users/compliments/receive", ensureAuthenticate, listUserReseiveController.handle);
router.get("/tags", ensureAuthenticate, listTagControllrer.handle);

//Somente adiministradores podem listar todos usuários.
router.get("/users", ensureAuthenticate, ensureAdmin, listUserController.handle);

//Somente adiministradores podem criar tags.
router.post("/tags", ensureAuthenticate, ensureAdmin, createTagController.handle);

export { router };

