import { Request, Response } from 'express';
import { ListUserServices } from '../services/ListUserServices';

class ListUserControllers {
   async handle(request: Request, response: Response) {

      const listUserSevice = new ListUserServices();

      const users = await listUserSevice.execute();

      return response.json(users);
   }
}

export { ListUserControllers };

