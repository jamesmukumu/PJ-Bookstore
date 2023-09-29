const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()



app.use(express.json())

const PORT = process.env.port

try {
    app.use(require('./backend/db/db'))
} catch (error) {
    error
}
 
try {
    app.use(require('./backend/routes/USERS/user'))
} catch (error) {
    error
}
 

try {
    app.use(require('./backend/Schemas/users/users'))
} catch (error) {
    error
}
 








app.listen(`${PORT}`,()=>{
    console.log(`App listening at ${PORT}`)
})