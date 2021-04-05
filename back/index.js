require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const db = require('./db');
const routes = require('./routes');
const utils = require('./utils');

const app = express();

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', routes);

const PORT = 4000;

db.sync()
    .then(() => {
        console.log('Sequelize sync!');
        app.listen(PORT, _ => console.log(`App is listening on PORT: ${PORT}`));
});
    

