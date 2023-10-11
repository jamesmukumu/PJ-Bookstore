import axios from "axios"
import React from "react"
import { useState } from "react"
import "../index.css"
import {ImBooks} from "react-icons/im"
import {BsPersonSquare} from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import Preloader from "../preloader"
function Registeruser(){
let navigate = useNavigate()

const [loading,setLoading] = useState(false)

const [Firstname,setFirstname] = useState('')
const [Secondname,setSecondname] = useState('')
const [password,setPassword] = useState('')
const [email,setEmail] = useState('')
const  [username,setUsername] = useState('')
const  [Errormsg,setErrormsg] = useState('')
const   [successmsg,setSuccessmsg] = useState('')
const  [passwordlength,setPasswordlength] = useState('')




async function Postregistrationinfo(e){
    if(password.length <= 6){
        setPasswordlength('Password must be at least 6 Charachters long')
        }
e.preventDefault()
try {
const response = await axios.post('https://bookstore-kamy.onrender.com/post/student',{
firstname:Firstname,
secondname:Secondname,
Password:password,
Email:email,
Username:username
})
if(response.data.message==='Student Sent to DB'){
  setLoading(true)
setTimeout(()=>{
  navigate('/payment')
},3000)
}
if(response.data.message==='Email Or username already exists..Try different one'){
setErrormsg('Email or Username already in the database.Try using a different one')
setLoading(true)
}

} catch (error) {
  setErrormsg('Internal Server Error')  
  console.log({error})
}
 
}


return(
<div className="container">
<div className="intro">
<p>Welcome and thankyou for visitng us.For any query Call us on 0759857032 or Email jamesmukumu03@gmail.com</p>
</div>


<div className="pj">
<i><ImBooks/></i>
<div className="title">
<strong style={{fontFamily:"'Unica One', sans-serif"}}>PJ BOOK STORE</strong>
</div>
<div className="login">
<p><BsPersonSquare/>Register</p>
<p><BsPersonSquare/><Link to='/login'>Login</Link></p>

</div>


</div>



{loading?(
<Preloader/>):(
  <form onSubmit={Postregistrationinfo}>
  <div className="input-container">
  <input type="text" onChange={(e)=>setFirstname(e.target.value)} placeholder="Enter Firstname" required/>
  
  </div>
  <div className="input-container">
  <input type="text" onChange={(e)=>setSecondname(e.target.value)} placeholder="Enter Secondname" required/>
  </div>
  <div className="input-container">
  <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Your email.eg abcd@gmail.com" required/>
  </div>
  <div className="input-container">
  <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" required/>
  </div>
  <div className="input-container">
  <input type="text" onChange={(e)=>setUsername(e.target.value)} placeholder="Enter Username" rquired/>
  </div>
  <button>Sign Up</button>
  <p className="message">{Errormsg}</p>
  
  <p className="message">{passwordlength}</p>
  </form>
  

)


}












</div>




)


}

export default Registeruser