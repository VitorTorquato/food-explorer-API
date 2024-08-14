const {hash} = require('bcryptjs');

const AppError = require('../utils/AppError');

class UserCreateService {
    constructor(useRepository){
        this.useRepository = useRepository;
    }

    async execute({name,email,password}){
        
        const  checkUserExist = await this.useRepository.findByEmail(email)

        if(checkUserExist){
            throw new AppError("Este e-mail ja existe")
        };

        const hashedPassword =  await hash(password , 8);

        const userCreated = await this.useRepository.create({name,email,password: hashedPassword});

        return userCreated
    };

};

module.exports = UserCreateService;