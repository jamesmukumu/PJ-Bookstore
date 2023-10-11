import axios from "axios"
import { useState,useEffect } from "react"
import "./index.css"
import {FcSearch} from "react-icons/fc" 
 import {ImBooks} from "react-icons/im"
import {BsPersonSquare} from "react-icons/bs"
import {VscThreeBars} from "react-icons/vsc"
import { Link } from "react-router-dom"
import Preloader from "./preloader"
function Navigation(){
    const [isVisible, setIsVisible] = useState(false);
const [countedbooks,setCountedbooks] = useState([])
const [booksdata,setBooksdata] = useState([])
const  [searchedbook,setSearchedbook] = useState([])
const  [inputbookname,setInputbookname]= useState('')
const [loading,setLoading] = useState(true)
const  [notFound,setNotfound] = useState('')
useEffect(()=>{
async function fetchallBooks(){
const response = await axios.get('https://bookstore-kamy.onrender.com/allbooks')
if(response.data.message==='all books fetched'){
setBooksdata(response.data.data)
setLoading(false)
}
else{
    setBooksdata(null)
}


}

fetchallBooks()

},[])





//search books based on title
async function searchBookontitle(){
try {
const response  = await axios.get('https://bookstore-kamy.onrender.com/get/basedontitle',{
params:{
    bookTitle:inputbookname
}
})
if(response.data.message==='book found'){
setSearchedbook(response.data.data)

}
else{
    setNotfound('No Books Found based on your search')
}
   
} catch (error) {
  console.log({error})  
}

}

//count all books on the db
useEffect(()=>{
    async function Countallbooks(){
        try {
        const response = await axios.get('https://bookstore-kamy.onrender.com/count/allbooks')    
        if(response.data.message==='all books'){
        setCountedbooks(response.data.data)
        }
        else{
            setBooksdata(null)
        }
        
        } catch (error) {
           console.log({error}) 
        }
        }
        Countallbooks()
        
},[])



const toggleCategories = () => {
    setIsVisible(!isVisible);
  };





























return(
<div className="nav">
<div className="pj">
<i><ImBooks/></i>
<div className="title">
<strong style={{fontFamily:"'Unica One', sans-serif"}}>PJ BOOK STORE</strong>
</div>
<div className="login">
<p><BsPersonSquare/><Link to='/login'>Login</Link></p>
<p><BsPersonSquare/><Link to='/registration'>Register</Link></p>

</div>


</div>




<div className="intro">
<p>Welcome and thankyou for visitng us.For any query Call us on 0759857032 or Email jamesmukumu03@gmail.com</p>
<p>&copy;James Mukumu 2023</p>
</div>









   <div className="categories">
    <div className="categories-title"><strong>Categories</strong></div>
    <i onClick={toggleCategories}><VscThreeBars/></i>
   
     <ul style={{ display: isVisible ? 'block' : 'none' }}>
     
     <li><Link to='/fantasy-books'>Fantasy</Link></li>
     <li><Link to='/religion-books'>Religion</Link></li>
     <li><Link to='/chemistry-books'>Chemistry</Link></li>
     
     <li><Link to='/action-books'>Action</Link></li>
     <li>View All  ({countedbooks})</li>
     </ul>

   </div>














<div className="searchcont">
  
<input type="text" placeholder="Search Over 1 Million Books" onChange={(e)=>setInputbookname(e.target.value)} required/>
 <i><FcSearch onClick={searchBookontitle}/> </i>  

</div>
 <p className="message">{notFound}</p>

<div>
    {searchedbook.map((item)=>(
     <div className="bookscompo">
         <div className="books">
    <img src={item.bookImage} alt="" />
    <p>Book Title:<span style={{fontFamily:"'Irish Grover', cursive"}}>{item.bookTitle}</span></p>
    <p>Book Price:<span style={{fontFamily:"'Irish Grover', cursive"}}>{item.bookPrice}</span></p>
    <p>Book Category:<span style={{fontFamily:"'Irish Grover', cursive"}}>{item.Category}</span></p>
    <p>Book size:<span style={{fontFamily:"'Irish Grover', cursive"}}>{item.bookSize}</span></p>
    <a href={item.bookContent} target="blank">Download Book</a>
    </div>
     </div>
    ))}
</div>






{loading?(
    <Preloader/>
):(
    <div className="allbooks">
{booksdata.map((item)=>(
<div className="bookscompo">
    <div className="books">
    <img src={item.bookImage} alt="" />
    <p>Book Title:<span style={{fontFamily:"'Irish Grover', cursive"}}>{item.bookTitle}</span></p>
    <p>Book Price:<span style={{fontFamily:"'Irish Grover', cursive"}}>{item.bookPrice}</span></p>
    <p>Book Category:<span style={{fontFamily:"'Irish Grover', cursive"}}>{item.Category}</span></p>
    <p>Book size:<span style={{fontFamily:"'Irish Grover', cursive"}}>{item.bookSize}</span></p>
    <a href={item.bookContent} target="blank">Download Book</a>
    </div>

</div>


))}


</div>


)}










</div>

)




}



export default Navigation