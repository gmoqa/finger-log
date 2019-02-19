const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name : { type: String },
    lastName : { type: String },
    rut: { type: String },
    fingerprint : { type: Text },
    email : { type: String, lowercase: true },
    created: { type: Date, default: Date.now }
});

const Customer = mongoose.model('Customer', schema);

module.exports = Customer;