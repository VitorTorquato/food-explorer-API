const knex = require('../database/knex');

const {compare} = require('bcryptjs');

const AppError = require('../utils/AppError');

const authConfig = require('../config/auth');

const { sign } = require('jsonwebtoken');

class SessionsController {

    async create(request,response){
        const {email , password} = request.body;

        const user = await knex('users').where({email}).first();

        if(!user){
            throw new AppError('E-mail ou senha invlaido' , 401)
        }

        const passwordIsTheSame = await compare(password , user.password);

        if(!passwordIsTheSame){
            throw new AppError('E-mail ou senha invalido' , 401)
        }

        const {secret,expiresIn} = authConfig.jwt

        const token = sign({role: user.role} , secret , {
            subject: String(user.id),
            expiresIn
        });

        return response.json({user, token})

    }

}

module.exports = SessionsController;