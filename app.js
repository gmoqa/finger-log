const express =  require('express');
const parser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(parser.json());

app.get('', (req, res) => {
    res.json({
        message : 'Hello World!'
    });
});

module.exports = app;