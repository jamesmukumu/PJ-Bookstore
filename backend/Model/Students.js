const db = require('../db/dconnections')
const sequelize = db.sequelize
const Sequelize = db.Sequelize



//Model for a student User


const Studentuser = sequelize.define('StudentsUsertable',{
firstname:{
    type:Sequelize.STRING,
    allowNull:false
},
secondname:{
    type:Sequelize.STRING,
    allowNull:false
},
Email:{
    type:Sequelize.STRING,
    allowNull:true,
    unique:true
},
Password:{
    type:Sequelize.STRING,
    allowNull:false
},
Username:{
    type:Sequelize.STRING,
    allowNull:false,
    unique:true
}

})


module.exports = Studentuser