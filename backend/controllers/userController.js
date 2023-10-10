const Student = require('../Model/Students')
const bcrypt = require('bcrypt')
const db = require('../db/dconnections')
const Sequelize = db.Sequelize

//register Student
async function postStudent(req,res){
const saltRounds = 10
const hashedPassword = await bcrypt.hash(req.body.Password,saltRounds)


try {
const insertedStudent =  new Student({
firstname:req.body.firstname,
secondname:req.body.secondname,
Password:hashedPassword,
Email:req.body.Email,
Username:req.body.Username
})
await insertedStudent.save()
res.json({message:"Student Sent to DB",data:insertedStudent})
     
} catch (error) {
    if(error.name==='SequelizeUniqueConstraintError'){
    res.json({message:"Email Or username already exists..Try different one"})
    }
}
}


//login for Student

async function loginStudent(req,res){
const inputPassword = req.body.Password
const inputUsername = req.body.Username
try {
const UsernameDB = await Student.findOne({where:{Username:inputUsername}})
if(!UsernameDB){
return res.json({message:'Username Not in the DB'})
}

const matchingpassword = await bcrypt.compare(inputPassword,UsernameDB.Password)
if(!matchingpassword){
return res.json({error:"Wrong Password"})
}

else{
   return res.json({message:"Logged in"})
}
    
} catch (error) {
    res.json({error})
}


}

//count users
async function countUsers(req,res){
try {
const allusers = await Student.count()
if(allusers===0){
res.json({error:"null users"})
}
else{
    res.json({message:`users in the database are  ${allusers}`})
}
    
} catch (error) {
    res.json({error:'Internal Server Error'})
}
}


//see user based on username 
async function findUseronusername(req,res){
try {
const inputUsername = req.query.Username
const matchingUsername = await Student.findAll({where:{Username:{[Sequelize.Op.iLike]:`%${inputUsername}%`}}})
if(!matchingUsername){
res.status(200).json({message:"Username not in the DB"})
}
else{
res.status(200).json(matchingUsername)
}
    
} catch (error) {
 res.status(500).json({error:'Internal Error'})   
}



}













module.exports = {
postStudent,
loginStudent,
countUsers,
findUseronusername

}