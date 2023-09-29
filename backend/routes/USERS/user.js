const User = require('../../Schemas/users/users')
const express = require('express')
const router = express.Router()
const sequalize = require('sequelize')
const bcrypt = require('bcrypt')

//Insert User

const saltRounds = 10


router.post('/post/user',async(req,res)=>{
    const hashedPassword = await bcrypt.hash(req.body.password,saltRounds)
try {
const insertUser = await User.create({
firstname:req.body.firstname,
secondname:req.body.secondname,
password:hashedPassword,
email:req.body.email,
phonenumber:req.body.phonenumber,
username:req.body.username
}) 
res.json({message:"Inserted User",data:insertUser})



} catch (error) {

    if(error.name==='SequelizeUniqueConstraintError'){
res.json({message:'Email in use Already oops'})
}
else{
    res.json({error})
}

}

    






})







module.exports = router