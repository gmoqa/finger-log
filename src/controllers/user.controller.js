const bcrypt = require('bcryptjs');
const User = require('../models/user.model');

const all = async (req, res) => {
    const users = User.find();
    res.status(200).json(users);
};

const create = async (req, res) => {
    const { name, lastName, email, role, password } = req.body;
    const found = User.findOne({ email });
    if (found) {
        res.status(400);
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new User({
        name : name,
        email : email,
        lastName : lastName,
        role : role,
        password : hashedPassword
    });
    await user.save();
    res.status(201).end();
};

module.exports = {
    create,
    all
};
