import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { TagRepositories } from "../repositories/TagRepositories";

class ListTagServices {
   async execute() {
      const tagsRepositories = getCustomRepository(TagRepositories);

      const tags = await tagsRepositories.find();

      //Customização - adicionando outro objeto no json de retorno no json
      // tags = tags.map((tag) => ({ ...tag, nameCustom: `#${tag.name}` }))

      return classToPlain(tags);
   }
}

export { ListTagServices };

