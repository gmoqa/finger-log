const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name : { type: String },
    lastName : { type: String },
    email : { type: String, lowercase: true },
    password : { type: String },
    role : {type: String },
    createdAt: { type: Date, default: Date.now },
    lastLogin: { type: Date, default: Date.now }
});

const User = mongoose.model('User', schema);

module.exports = User;