const {verify} = require('jsonwebtoken');

const AppError = require('../utils/AppError');


const authConfig = require('../config/auth');

function ensureAuthenticated(request,response , next){

    const authHeader = request.headers.authorization;


    if(!authHeader){
        throw new AppError('JWT  nao informado' , 401);
    }

    const [, token ] = authHeader.split(" ")



    try{
        const { role,sub : user_id} = verify(token , authConfig.jwt.secret)

        request.user = {
            id: Number(user_id),
            role
        }

        return next();
    }catch{
        throw new AppError('JWT token invalido' , 401)
    }




}


module.exports = ensureAuthenticated;
