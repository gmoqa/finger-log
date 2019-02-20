const faker = require('faker');
const Customer = require('../models/customer.model');

const QUANTITY = 300;

const load = async () => {
    for (let i = 0; i < QUANTITY; i++) {
       const customer = await new Customer({
           name : faker.name.findName(),
           lastName : faker.name.lastName(),
           fingerprint : faker.random.uuid(),
           email : faker.internet.email(),
           rut : await rut()
       });
       await customer.save();
    }
};

const rut = async () => {
    const number = faker.random.number({ min : 13000000, max :26000000 });
    return `${number}-${faker.random.number({ min : 1, max : 9})}`
};

module.exports = { load };