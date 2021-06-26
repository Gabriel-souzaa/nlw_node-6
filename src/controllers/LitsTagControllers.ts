import { Request, Response } from 'express';
import { ListTagServices } from '../services/ListTagServices';

class LitsTagControllers {
   async handle(request: Request, response: Response) {

      const listTagService = new ListTagServices();

      const tags = await listTagService.execute();

      return response.json(tags);
   }
}

export { LitsTagControllers };

