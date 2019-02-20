/*
 * This file is part of Fingerlog API
 * MIT License (MIT)
 * @author <gu.quinteros@gmail.com>
 */
require('dotenv').config();
const express =  require('express');
const sequelize = require('sequelize');
const parser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const db = require('./src/mongo');

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(parser.json());

app.get('', (req, res) => {
    res.json({
        message : 'Hello World!'
    });
});

app.use('/customers', require('./src/routes/customer.routes'));

module.exports = async () => {
    const app = express();
    await sequelize.sync();
    app.use(parser.json());
    return app;
};
