import { getCustomRepository } from "typeorm";
import { TagRepositories } from "../repositories/TagRepositories";
import { ErrorHandler } from "../utils/errors";

class CreateTagServices {
   async execute(name: string) {
      const tagsRepositories = getCustomRepository(TagRepositories);

      if (!name) {
         throw new ErrorHandler(404, "Incorrect name!");
      }

      const tagAlreadyExists = await tagsRepositories.findOne({
         name
      });

      if (tagAlreadyExists) {
         throw new ErrorHandler(404, "Tag already exists");
      }

      const tag = tagsRepositories.create({
         name
      });

      await tagsRepositories.save(tag);

      return tag;
   }
}

export { CreateTagServices };

