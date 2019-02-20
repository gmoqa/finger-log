const faker = require('faker');
const Product = require('../models/product.model');

const QUANTITY = 15;

const load = async () => {
    for (let i = 0; i < QUANTITY; i++) {
       const product = await new Product({
           name : faker.commerce.product(),
           description : faker.lorem.sentence(),
           price : faker.random.number({ min : 350, max : 3800 })
       });
       await product.save();
    }
};

module.exports = { load };