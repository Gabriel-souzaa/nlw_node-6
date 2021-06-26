import { NextFunction, Request, Response } from 'express';
import { CreateUserServices } from '../services/CreateUserServices';

class CreateUserControllers {
   async handle(request: Request, response: Response, next: NextFunction) {
      try {
         const {
            name,
            email,
            admin,
            password
         } = request.body;

         const createUserService = new CreateUserServices();

         const user = await createUserService.execute({ name, email, admin, password });

         return response.json(user);
      } catch (error) {
         next(error);
      }
   }
}

export { CreateUserControllers };

