import { Request, Response } from 'express';
import { ListUserSendComplimentServices } from '../services/ListUserSendComplimentServices';

class ListUserSendComplimentControllers {
   async handle(request: Request, response: Response) {
      const { user_id } = request;

      const listUserSendService = new ListUserSendComplimentServices();

      const compliments = await listUserSendService.execute(user_id);

      return response.json(compliments);
   }
}

export { ListUserSendComplimentControllers };

