require('dotenv').config();
const mongoose = require('mongoose');

const options = { useNewUrlParser: true, useCreateIndex: true };

mongoose.connect(process.env.MONGO_URI, options).then(
    () => {
        console.log('Mongodb : connected');
    },
    err => {
        console.log(err)
    }
);

module.exports = mongoose;
