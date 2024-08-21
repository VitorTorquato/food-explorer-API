const knex = require('../database/knex');

const DiskStorage = require('../providers/diskStorage');
const knexfile = require('../../knexfile');


class DishImageController {


    async update(request,response){
    
        const {id} = request.params;

        const imageFile = request.file.filename;

        const diskStorage = new DiskStorage();

        const dish = await knex('Dishes').where({id}).first();


        if(dish.image){
            await diskStorage.deleteFile(dish.image)
        }

        const fileName = await diskStorage.saveFiles(imageFile);


        dish.image = fileName;

        await knex('Dishes').update(dish).where({id});

        response.json(dish);




    }


}

module.exports = DishImageController;