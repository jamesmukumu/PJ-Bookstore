const axios = require('axios')
const dotenv = require('dotenv')
dotenv.config()
const publicKey = process.env.publicKey


const payments = require('../Model/paymentsmodel')

 

async function postPayment(req,res){ 
try {
const insertPayment = new payments({
first_name:req.body.first_name,
last_name:req.body.last_name,
phone_number:req.body.phone_number,
email:req.body.email,
amount:"15"
})  
const payment = await insertPayment.save()   

// axios post to instasend API 
const response = await axios.post('https://sandbox.intasend.com/api/v1/checkout/',{
public_key:publicKey,
amount:"15",
first_name:req.body.first_name,
last_name:req.body.last_name,
email:req.body.email, 
})
console.log(response)
return res.status(200).json({message:'Data sent to Database',data:response.data.url})


} catch (error) {
	
res.status(500).json({error})
}




}








module.exports = postPayment
