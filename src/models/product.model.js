const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name : { type: String },
    description : { type: String },
    price : { type: Number },
    createdAt: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', schema);

module.exports = Product;