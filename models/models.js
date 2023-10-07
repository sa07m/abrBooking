const Sequelize = require ('sequelize');

const sequelizedb  = require('../util/database');



const bookingModel = sequelizedb.define('booking',{
  id : { 
    type : Sequelize.INTEGER, 
    autoIncrement : true,
    allowNull : false,
    primaryKey : true,
  },

  username : { 
    type : Sequelize.STRING, 

  },

  phonenumber : { 
    type : Sequelize.INTEGER, 

  },
  email : { 
    type : Sequelize.STRING, 

  },
})

module.exports = bookingModel;