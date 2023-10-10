const db = require('../db/dconnections')

const sequelize = db.sequelize
const Sequelize = db.Sequelize


const Book = sequelize.define('Books',{
bookPrice:{
   type:Sequelize.INTEGER,
   allowNull:false 
},
bookImage:{
    type:Sequelize.TEXT,
    allowNull:false
},
bookContent:{
    type:Sequelize.TEXT,
    allowNull:false
},
Category:{
type:Sequelize.STRING,
allowNull:false

},
bookTitle:{
    type:Sequelize.STRING,
    allowNull:false,
    unique:true
},
bookSize:{
    type:Sequelize.TEXT,
    allowNull:true
}
})

module.exports = Book