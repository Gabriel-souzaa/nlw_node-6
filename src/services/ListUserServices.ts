import { classToClass } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";

class ListUserServices {
   async execute() {
      const tagsRepositories = getCustomRepository(UserRepositories);

      const users = await tagsRepositories.find();

      return classToClass(users);
   }
}

export { ListUserServices };

