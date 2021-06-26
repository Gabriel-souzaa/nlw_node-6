import { NextFunction, Request, Response } from 'express';
import { CreateTagServices } from '../services/CreateTagServices';

class CreateTagControllers {
   async handle(request: Request, response: Response, next: NextFunction) {
      try {
         const {
            name
         } = request.body;

         const createTagService = new CreateTagServices();

         const tag = await createTagService.execute(name);

         return response.json(tag);
      } catch (error) {
         next(error);
      }
   }
}

export { CreateTagControllers };

