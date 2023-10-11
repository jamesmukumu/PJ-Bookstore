import React from "react";
import { useState } from "react";
import axios from "axios"
import {ImBooks} from "react-icons/im"
import {BsPersonSquare} from "react-icons/bs"
import "../index.css"
import { Link } from "react-router-dom";
import Preloader from "../preloader";

import { useNavigate } from "react-router-dom";






function Loginuser(){
    let navigate = useNavigate()
const [password,setPassword] = useState('')
const [sucessmsg,setSuccessmsg] = useState('')
const [username,setUsername] = useState('')
const [loading,setLoading] = useState(false)
const  [errormsg,setErrormsg] = useState('')
const  [passwordlength,setPasswordlength] = useState('')
async function Postuserlogin(e){
    if(password.length <= 6){
    setPasswordlength('Password must be at least 6 charachters long')
    }
e.preventDefault()
try {
const response = await axios.post('https://bookstore-kamy.onrender.com/login',{
Password:password,
Username:username
})
if(response.data.message==='Logged in'){
    setLoading(true)
    setSuccessmsg('successfully logged in')
setTimeout(()=>{
    navigate('/payment')
},3000)
}
if(response.data.error==='Wrong Password'){
setLoading(true)
setErrormsg('Invalid password or email')
}
if(response.data.message=='Username Not in the DB'){
    setLoading(true)
setErrormsg('Account does not exist...')
}
    
} catch (error) {
 setErrormsg('internal Server error')   
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
<p><BsPersonSquare/>Log in</p>
<p><BsPersonSquare/><Link to='/registration'>Register</Link></p>

</div>


</div>


{loading?(
    <Preloader/>):(
<form onSubmit={Postuserlogin}>
     <div className="input-container">
        <input type="text" onChange={(e)=>setUsername(e.target.value)} required placeholder="Enter Username"/>
     </div>
     <div className="input-container">
        <input type="password" onChange={(e)=>setPassword(e.target.value)} required placeholder="Enter Password"/>
     </div>
     <button>Sign in</button>



    







     <p className="message">{errormsg}</p>
     <p className="message">{sucessmsg}</p>
     <p className="message">{passwordlength}</p>
    </form>



    )
}





    

  






    </div>
)





}

export default Loginuser