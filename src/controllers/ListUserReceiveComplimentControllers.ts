import { Request, Response } from 'express';
import { ListUserReceiveComplimentServices } from '../services/ListUserReceiveComplimentServices';

class ListUserReceiveComplimentControllers {
   async handle(request: Request, response: Response) {
      const { user_id } = request;

      const listUserReseiveService = new ListUserReceiveComplimentServices();

      const compliments = await listUserReseiveService.execute(user_id);

      return response.json(compliments);
   }
}

export { ListUserReceiveComplimentControllers };

