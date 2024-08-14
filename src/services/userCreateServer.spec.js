const UserCreateService = require('../services/UserCreateService');
const UserRepositoryInMemory = require('../respositories/UserRepositoryInMemory');

const AppError = require('../utils/AppError');

describe('UserCreateServer', () => {

    let userRepositoryInMemory = null;
    let userCreateService = null;

    beforeEach(() => {

        userRepositoryInMemory = new UserRepositoryInMemory();
        userCreateService = new UserCreateService(userRepositoryInMemory);
    });

    it("user should be created" , async () => {
        const user = {
            name : 'userName',
            email : 'user@email.com',
            password : '1234'
        };

        const userCreated = await userCreateService.execute(user)

        expect(userCreated).toHaveProperty('id')

    });

    it('user should not be created with the e-mail that is already exist' , async () => {

        const user1 = {
                name: 'user1',
                email:'user@email.com',
                password: '1234'
        }
        const user2 = {
                name: 'user2',
                email:'user@email.com',
                password: '12345'
        }

        await userCreateService.execute(user1);

        await expect(userCreateService.execute(user2)).rejects.toEqual(new AppError("Este e-mail ja existe"))


    })
})