const AppError = require('../utils/AppError')


class UseerController {

    async create(request,response){

        const {name , email , password} = request.body;
        
        if(!name){
            throw new AppError ('Nome obrigatorio')
        }

         response.status(201).json({name,email,password})

    }


}


module.exports = UseerController;