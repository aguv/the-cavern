require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const db = require('./db');
const routes = require('./routes');
const utils = require('./utils');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api', routes);

app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
  
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });
});

const PORT = 4000;

db.sync()
    .then(() => {
        // console.log('Sequelize sync!');
        // utils.initialRoles()
        //   .then(_ => {
        //     return utils.initialCategories();
        //   })
        //   .then(_ => {
            
        //   })

          console.log('Roles and categories loaded');
          app.listen(PORT, _ => console.log(`App is listening on PORT: ${PORT}`));
});
    

