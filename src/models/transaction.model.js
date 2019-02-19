const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    created: { type: Date, default: Date.now }
});

const Transaction = mongoose.model('Transaction', schema);

module.exports = Transaction;