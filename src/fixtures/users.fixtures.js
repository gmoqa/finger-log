const faker = require('faker');
const User = require('../models/user.model');

const QUANTITY = 10;

const load = async () => {
    for (let i = 0; i < QUANTITY; i++) {
       const user = await new User({
           name : faker.name.findName(),
           lastName : faker.name.lastName(),
           email : faker.internet.email(),
           password : '123456',
           role : 'ADMIN'
       });
       await user.save();
    }
};

module.exports = { load };