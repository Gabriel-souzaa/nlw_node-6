import { Request, Response } from 'express';
import { CreateComplimentServices } from '../services/CreateCOmplimentServices';

class CreateComplimentControlers {
   async handle(request: Request, response: Response) {
      const {
         tag_id,
         user_sender,
         user_receiver,
         message
      } = request.body;

      const createComplimentService = new CreateComplimentServices();

      const compliment = await createComplimentService.execute({ tag_id, user_sender, user_receiver, message });

      return response.json(compliment);
   }
}

export { CreateComplimentControlers };

