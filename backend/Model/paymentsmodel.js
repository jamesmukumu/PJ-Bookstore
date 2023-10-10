const db = require('../db/dconnections')
const Sequelize = db.Sequelize
const sequelize = db.sequelize


const paymentsTable  = sequelize.define('paymentsTable',{
first_name:{
type:Sequelize.STRING,
allowNull:false
},
last_name:{
type:Sequelize.STRING,
allowNull:false
},
phone_number:{
    type:Sequelize.INTEGER,
    allowNull:false
},
email:{
type:Sequelize.TEXT,
allowNull:false
},
amount:{
    type:Sequelize.INTEGER,
    allowNull:false
}


})


module.exports = paymentsTable