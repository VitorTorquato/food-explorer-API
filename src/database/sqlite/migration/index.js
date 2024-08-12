const sqlitConnection = require('../../sqlite/index');
const  createUser = require('./creteUser');

function migrationsRun(){

    const schemas = [
        createUser
    ].join('');

    sqlitConnection().then(db => db.exec(schemas)).catch(error => console.error(error))



}

module.exports = migrationsRun;