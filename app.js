const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const db = require('./backend/db/dconnections') 
const cors = require('cors')

app.use(express.json())
app.use(cors())
const PORT = process.env.port

//syncing all connections
db.sequelize.sync()
.then(()=>{
    console.log('synced with the database')
})
.catch((error)=>{
    console.log({error})
})

try {
    app.use(require('./backend/routes/booksroute'))
    
} catch (error) {
  console.log({error})  
}
 
try {
    app.use(require('./backend/routes/userroute'))
} catch (error) {
    console.log(error)
}


try {
   app.use(require('./backend/routes/paymentstripe')) 
} catch (error) {
  console.log({error})  
}


 
 
 


app.listen(`${PORT}`,()=>{
    console.log(`App listening at ${PORT}`)
})




























    