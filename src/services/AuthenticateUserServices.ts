import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";
import { ErrorHandler } from '../utils/errors';


interface IAuthenticateRequest {
   email: string;
   password: string;
}

class AuthenticateUserService {
   async execute({ email, password }: IAuthenticateRequest) {
      const usersRepositories = getCustomRepository(UserRepositories);

      const user = await usersRepositories.findOne({
         email
      });

      if (!user) {
         throw new ErrorHandler(404, "Email/Passowrd incorrect");
      }

      const passwordMath = await compare(password, user.password);

      if (!passwordMath) {
         throw new ErrorHandler(404, "Email/Passowrd incorrect");
      }

      const token = sign({
         email: user.email
      }, "4d7ba3fb31dcd5508b2efca30b5d2ef1", {
         subject: user.id,
         expiresIn: "1d"
      })

      return token;
   }
}

export { AuthenticateUserService };

