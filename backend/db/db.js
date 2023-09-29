const dotenv = require('dotenv')
dotenv.config()
const databaseName = process.env.dbname
const HOST = process.env.host
const Password =  process.env.password
const Admin = process.env.Admin


const Sequalize = require('sequelize')
const sequalizeConnecetion = new Sequalize(databaseName,Admin,Password,{
host:HOST,
dialect:'postgres',
port:5432,
dialectOptions:{
    ssl:{required:true}
} 
})
sequalizeConnecetion.authenticate()
.then(()=>{
    console.log('Connected To DB successfully')
})
.catch((error)=>{  
    console.log(`${error} in Connection`)
})
module.exports = sequalizeConnecetion