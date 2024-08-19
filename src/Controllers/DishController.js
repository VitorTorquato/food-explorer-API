const AppError = require('../utils/AppError');

const knex = require('../database/knex'); 


class DishController {


    async create(request,response){

        const {name,category,description,price,ingredients} = request.body;
        const user_id = request.user.id;

        if(!name,!category,!description,!price,!ingredients){
            throw new AppError('Favor preencher as informações que estão faltando')
        }



        const [dish_id] = await knex('Dishes').insert({
            name,
            category,
            description,
            price,
            user_id
        });

        const ingredientsInsert = ingredients.map(name => {
            return {
            dish_id,
            name,
            user_id
            }

        });

        await knex('ingredients').insert(ingredientsInsert);

        response.json()

    }
}


module.exports = DishController;