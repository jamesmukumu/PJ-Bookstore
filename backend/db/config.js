const dotenv = require('dotenv')
dotenv.config()
const DBname = process.env.dbname
const Host= process.env.host
const password = process.env.password
const Admin= process.env.Admin





module.exports = {
HOST:Host,
USER:Admin,
PASSWORD:password,
DB:DBname,
dialect:'postgres',
pool:{
    max:5,
    min:0
},


}