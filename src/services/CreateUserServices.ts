import { getCustomRepository } from 'typeorm';
import { UserRepositories } from "../repositories/UserRepositories"

interface IUserResquest {
    name: string;
    email: string;
    admin?:boolean;
}

class CreateUserServices {
    
    async execute ({name, email, admin}:IUserResquest){
        const usersRepository = getCustomRepository(UserRepositories);

        if(!email){
            throw new Error("Email incorrect");
        }

        const userAlreadyExists = await usersRepository.findOne({
            email
        });

        if(userAlreadyExists) {
            throw new Error("User already exists");
        }

        const user = usersRepository.create({
            name,
            email,
            admin
        });

        await usersRepository.save(user);

        return user;
    }
}

export {CreateUserServices}