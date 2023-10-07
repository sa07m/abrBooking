const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
//const controls = require('./controllers/controller');
const prdctModel = require('./models/models')
const cors = require('cors')

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const bookRoutes = require('./routes/route')

app.use(bookRoutes);

sequelize.sync()
    .then(result => {
        //console.log(result)
        app.listen(4000)
    })
    .catch(err => console.log(err))

 