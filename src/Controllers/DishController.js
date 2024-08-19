const AppError = require('../utils/AppError');

const knex = require('../database/knex'); 


const sqliteConnection = require('../database/sqlite')


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

    };


    async update(request,response){
        const {name,category,description,price,ingredients} = request.body;
        const { id } = request.params;

        const database = await sqliteConnection();

        const dishe = await database.get("SELECT * FROM Dishes WHERE id = (?)" , [id]);
        const ingredientes = await database.get("SELECT * FROM ingredients WHERE dish_id = (?)" , [id]);

        dishe.name = name ?? dishe.name
        dishe.category = category ?? dishe.category
        dishe.description = description ?? dishe.description
        dishe.price = price ?? dishe.price

        ingredientes.name = ingredientes ?? ingredientes.name;

        const dish_id = dishe.id;
        const user_id = dishe.user_id
        await knex('ingredients').where({dish_id : dish_id}).delete();

        const ingredientesUpdate = await  ingredients.map(name => {
            return{
                dish_id,
                name,
                user_id

            }
        });

        await knex('ingredients').where({id}).delete();
        await knex('ingredients').insert(ingredientesUpdate);


        database.run(`
        UPDATE Dishes SET
        name = ?,
        category = ?,
        description = ?,
        price = ?,
      
        updated_at = DATETIME ('now')
        WHERE id = ?` , [name , category,description,price,dish_id]);

        return response.json();
        

    }

    async show(request,response){
        
    }
}


module.exports = DishController;