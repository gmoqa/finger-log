const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    customer : { type: Schema.Types.ObjectId, ref: 'Customer' },
    createdAt: { type: Date, default: Date.now }
});

const Transaction = mongoose.model('Transaction', schema);

module.exports = Transaction;