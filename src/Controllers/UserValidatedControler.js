const knex = require('../database/knex');



const AppError = require('../utils/AppError');



class UserValidatedControler {

    async index(request,response){
        const {user} = request;

        const checkUserExistis = await knex('users').where({id: user.id});

        if(checkUserExistis.length === 0){
            throw new AppError('Unauthorized' , 401)
        }


        return response.status(200).json();

    }

}

module.exports = UserValidatedControler;