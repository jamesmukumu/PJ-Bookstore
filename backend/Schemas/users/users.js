const sequelize = require('sequelize')
const sequelizeConnecetion = require('../../db/db')



const userSchema = sequelizeConnecetion.define('Userstable',{
firstname:{
type:sequelize.STRING,
allowNull:false

},
secondname:{
type:sequelize.STRING,
allowNull:false
},
password:{
    type:sequelize.STRING,
    allowNull:false
},
username:{
    type:sequelize.STRING,
    allowNull:false,
    unique:true
},
email:{
    type:sequelize.STRING,
    allowNull:false,
    unique:true
},
phoneNumber:{
    type:sequelize.INTEGER,
    allowNull:true
}

  
})

sequelizeConnecetion.sync()
.then(()=>{
    console.log('Tables Synced Successfully')
})
.catch((error)=>{
console.log({error})
})



module.exports = userSchema