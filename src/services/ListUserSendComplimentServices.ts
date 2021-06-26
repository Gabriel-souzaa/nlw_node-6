import { getCustomRepository } from "typeorm";
import { ComplimentRepositories } from "../repositories/ComplimentRepositories";

class ListUserSendComplimentServices {
   async execute(user_id) {
      const complimentsRepositories = getCustomRepository(ComplimentRepositories);

      const compliments = await complimentsRepositories.find({
         where: {
            user_sender: user_id
         }
         //Adicinar informações do usuario e da tag no retorno do json
         //relations: ["userSender", "userReceiver", "tag"]
      })

      return compliments;
   }
}

export { ListUserSendComplimentServices };

