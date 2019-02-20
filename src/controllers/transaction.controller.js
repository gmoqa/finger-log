const User = require('../models/user.model');
const Transaction = require('../models/transaction.model');

const all = async (req, res) => {
    const transactions = [];
    res.status(200).json(transactions);
};

const create = async (req, res) => {
    const fingerprint = req.body.fingerprint;
    const user = await User.findOne({ fingerprint : fingerprint });

    if (!user) {
        res.status(404).end();
    }

    const transaction = new Transaction({
        user : user.email
    });

    await transaction.save();
    res.status(201).end();
};

module.exports = {
    create,
    all
};
