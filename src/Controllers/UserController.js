const {hash,compare} = require('bcryptjs')
const AppError = require('../utils/AppError');


const sqliteConnection = require('../database/sqlite');

class UseerController {

    async create(request,response){

        const {name , email , password} = request.body;
        
        const database = await sqliteConnection();

        const checkUserExist = await database.get('SELECT * FROM users WHERE email = (?)' , [email])

        if(checkUserExist){
            throw new AppError('Este e-mail ja esta em uso')
        };

        const hashedPassword = await hash(password , 8);

        await database.run('INSERT INTO users (name,email,password) VALUES (?,?,?)' , [name,email,hashedPassword]);

        return  response.status(201).json()

    }

    async update(request,response){
        
    }


}


module.exports = UseerController;