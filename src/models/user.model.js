const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : { type: String },
    lastName : { type: String },
    rut: { type: String },
    email : { type: String, lowercase: true },
    created: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

module.exports = User;