import React from "react";
import { useState } from "react";
import axios from "axios";
import "../index.css"
import Preloader from "../preloader";
import {ImBooks} from "react-icons/im"
function Postpayment(){
const [Firstname,setFirstname] = useState('')
const [Secondname,setSecondname] = useState('')
const [Phonenumber,setPhonenumber] = useState('')
const [Email,setEmail] = useState('')
const [paymentURL,setPaymenturl] = useState([])
const [loading,setLoading] = useState(true)



//post to db first a payment
async function postpaymentdb(e){
e.preventDefault()
try {
const response = await axios.post('https://bookstore-kamy.onrender.com/post/payment',{
first_name:Firstname,
last_name:Secondname,
phone_number:Phonenumber,
email:Email
})
if(response.data.message=='Data sent to Database'){
    setPaymenturl(response.data.data)
    setLoading(false)
    setTimeout(()=>{
      window.location.href= response.data.data
    },3400)
    
}
else{
    setPaymenturl(null)
}

} catch (error) {
    console.log({error})
}


}



return(
<div className="container">
<div className="pj">
<i><ImBooks/></i>
<div className="title">
<strong style={{fontFamily:"'Unica One', sans-serif"}}>PJ BOOK STORE</strong>
</div>


</div>

<div className="intro">
<p>Welcome and thankyou for visitng us.For any query Call us on 0759857032 or Email jamesmukumu03@gmail.com</p>
</div>
<form onSubmit={postpaymentdb}>
     <div className="input-container">
        <input type="text" onChange={(e)=>setFirstname(e.target.value)} required placeholder="Enter your firstname"/>
     </div>
     <div className="input-container">
        <input type="text" onChange={(e)=>setSecondname(e.target.value)} required placeholder="Enter your secondname"/>
     </div>
     <div className="input-container">
        <input type="email" onChange={(e)=>setEmail(e.target.value)} required placeholder="Enter your Email"/>
     </div>
     <div className="input-container">
        <input type="number" onChange={(e)=>setPhonenumber(e.target.value)} required placeholder="Enter your phonenumber eg:0759******78"/>
     </div>
    


     
     <button>Submit payment details</button>
    </form>   
    <div className="ir">
     <input type="checkbox" />
     <strong>Upon registration you will be redirected to another url to complete this registration.And a payment of KSH15 will be needed.I have read and accepted this terms</strong>
     </div>
</div>



)




}
export default Postpayment